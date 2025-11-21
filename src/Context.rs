use crate::runtime::ensure_v8_initialized;
use crate::runtime::run_with_tokio;
use crate::storage::ResultStorage;
use crate::tools::{format_error, get_env_code, init_utils};
use anyhow::{Error, Result, anyhow};
use deno_core::{v8, InspectorSessionKind, JsRuntime, JsRuntimeInspector, RuntimeOptions};
use rand::SeedableRng;
use std::cell::RefCell;
use std::rc::Rc;

const JS_POLYFILL: &str = include_str!("js_polyfill.js");

pub struct Context {
    runtime: RefCell<JsRuntime>,
    result_storage: Rc<ResultStorage>,
    exec_count: RefCell<usize>,
    random_seed: Option<u32>,       // Store seed for deferred initialization
    polyfill_loaded: RefCell<bool>, // Track if polyfill has been loaded

    logging_enabled: bool,
}

impl Context {
    pub fn new(extensions_loaded: bool, logging_enabled: bool, random_seed: Option<u32>) -> Self {
        let storage = Rc::new(ResultStorage::new());
        ensure_v8_initialized();
        let mut extensions = vec![
            // Custom ops for result storage
            crate::ops::fs_ops::fs_ops::init(),
            crate::ops::browser_env::browser_env_ops::init(),
            crate::ops::crypto_ops::crypto_ops::init(),
            crate::ops::storage_ops::pyexecjs_ext::init(storage.clone()),
            crate::ops::performance_ops::performance_ops::init(),
        ];

        // 根据参数决定是否加载扩展
        extensions.push(crate::timer_real_ops::timer_real_ops::init());

        let mut runtime = JsRuntime::new(RuntimeOptions {
            // v8_platform:Some(v8_platform),
            inspector:true,
            extensions,
            ..Default::default()
        });

        // Make sure the module was evaluated.


        {
            deno_core::scope!(scope, runtime);

            let global = scope.get_current_context().global(scope);
            init_utils(scope, global);

        }
        // runtime
        //     .execute_script("base", JS_POLYFILL)
        //     .unwrap();

        Context {
            runtime: RefCell::new(runtime),
            result_storage: storage,
            exec_count: RefCell::new(0),
            random_seed,
            polyfill_loaded: RefCell::new(false),
            logging_enabled: logging_enabled,
        }
    }

    fn ensure_polyfill_loaded(&self) -> Result<()> {
        if *self.polyfill_loaded.borrow() {
            return Ok(());
        }

        // CRITICAL: Re-enter isolate before accessing runtime
        self.enter_isolate();

        let mut runtime = self.runtime.borrow_mut();

        // Set random seed if provided
        if let Some(seed) = self.random_seed {
            let op_state = runtime.op_state();
            let mut op_state = op_state.borrow_mut();
            // RngState is already initialized by the extension, just update it
            if let Some(rng_state) = op_state.try_borrow_mut::<crate::random_state::RngState>() {
                rng_state.seed = Some(seed as u64);
                rng_state.seeded_rng = Some(rand::rngs::StdRng::seed_from_u64(seed as u64));
            }
        }

        // Set logging flag
        let logging_flag = if self.logging_enabled {
            "true"
        } else {
            "false"
        };
        // let logging_setup = format!("globalThis.__NEVER_JSCORE_LOGGING__ = {};", logging_flag);
        // //
        // let _log_result = runtime
        //     .execute_script("<logging_setup>", logging_setup)
        //     .map_err(|e| anyhow!("Failed to setup logging: {:?}", e))?;
        // //
        let _result = runtime
            .execute_script("<polyfill>", JS_POLYFILL.to_string())
            .map_err(|e| anyhow!("Failed to load polyfill: {:?}", e))?;
        runtime
            .execute_script("<log>", " print=log;")
            .map_err(|e| anyhow!("Failed to load polyfill: {:?}", e))?;
        *self.polyfill_loaded.borrow_mut() = true;
        // runtime
        //     .execute_script("<env>", get_env_code())
        //     .map_err(|e| anyhow!("Failed to load env: {:?}", e))?;
        // Exit isolate after polyfill loading
        self.exit_isolate();

        Ok(())
    }

    pub fn execute_js(&self, code: &str, auto_await: bool) -> Result<String, Error> {
        self.ensure_polyfill_loaded().expect("ERROR init ");

        // Ensure polyfill is loaded before first execution
        // self.ensure_polyfill_loaded()?;

        // CRITICAL: Re-enter isolate
        self.enter_isolate();

        self.result_storage.clear();

        if auto_await {
            // 异步模式：自动等待 Promise
            let result = run_with_tokio(async {
                let mut runtime = self.runtime.borrow_mut();

                // 序列化代码
                let code_json = serde_json::to_string(code)
                    .map_err(|e| anyhow!("Failed to serialize code: {}", e))?;

                // 简化的包装：只需要 async 函数和结果存储
                let wrapped_code = format!(
                    r#"
                    (async function() {{
                        const code = {};
                        const __result = await Promise.resolve(eval(code));

                        if (__result === undefined) {{
                            __getDeno().core.ops.op_store_result("null");
                            return null;
                        }}

                        try {{
                            const json = JSON.stringify(__result);
                            __getDeno().core.ops.op_store_result(json);
                            return __result;
                        }} catch(e) {{
                            const str = JSON.stringify(String(__result));
                            __getDeno().core.ops.op_store_result(str);
                            return __result;
                        }}
                    }})()
                    "#,
                    code_json
                );

                // 执行脚本
                let execute_result = runtime.execute_script("<eval_async>", wrapped_code);

                // 检查是否是 EarlyReturnError
                match execute_result {
                    Err(e) => {
                        // 检查是否是早期返回
                        if self.result_storage.is_early_return() {
                            // 提前返回：直接返回存储的值
                            let result = self
                                .result_storage
                                .take()
                                .ok_or_else(|| anyhow!("Early return but no result stored"))?;
                            let mut count = self.exec_count.borrow_mut();
                            *count += 1;
                            return Ok(result);
                        }
                        // 其他错误 - 格式化后返回
                        return Err(anyhow!("{}", format_error(e.into())));
                    }
                    Ok(result_handle) => {
                        // 正常执行，leak handle
                        std::mem::forget(result_handle);
                    }
                }

                // 运行 event loop 等待 Promise 完成
                let event_loop_result = runtime.run_event_loop(Default::default()).await;

                // 检查 event loop 是否遇到 EarlyReturnError
                if let Err(e) = event_loop_result {
                    // 检查是否是早期返回
                    if self.result_storage.is_early_return() {
                        // Event loop 中的提前返回
                        let result = self
                            .result_storage
                            .take()
                            .ok_or_else(|| anyhow!("Early return but no result stored"))?;
                        let mut count = self.exec_count.borrow_mut();
                        *count += 1;
                        return Ok(result);
                    }
                    // 其他错误 - 格式化后返回
                    return Err(anyhow!("{}", format_error(e.into())));
                }

                // 检查是否设置了 early return 标志（即使 event loop 正常完成）
                // 这处理了 eval() 内部调用 __neverjscore_return__ 的情况
                if self.result_storage.is_early_return() {
                    let result = self
                        .result_storage
                        .take()
                        .ok_or_else(|| anyhow!("Early return but no result stored"))?;
                    let mut count = self.exec_count.borrow_mut();
                    *count += 1;
                    return Ok(result);
                }

                // 正常完成：从 result_storage 获取结果
                let result = self
                    .result_storage
                    .take()
                    .ok_or_else(|| anyhow!("No result stored after event loop"))?;

                let mut count = self.exec_count.borrow_mut();
                *count += 1;

                Ok(result)
            });

            // Exit isolate after async operations complete
            self.exit_isolate();
            result
        } else {
            // 同步模式：不等待 Promise
            let mut runtime = self.runtime.borrow_mut();

            let code_json = serde_json::to_string(code)
                .map_err(|e| anyhow!("Failed to serialize code: {}", e))?;

            let wrapped_code = format!(
                r#"
                (function() {{
                    const code = {};
                    const __result = eval(code);
                    if (__result === undefined) {{
                        __getDeno().core.ops.op_store_result("null");
                        return null;
                    }}
                    try {{
                        const json = JSON.stringify(__result);
                        __getDeno().core.ops.op_store_result(json);
                        return __result;
                    }} catch(e) {{
                        const str = JSON.stringify(String(__result));
                        __getDeno().core.ops.op_store_result(str);
                        return __result;
                    }}
                }})()
                "#,
                code_json
            );

            let execute_result = runtime.execute_script("<eval_sync>", code.to_string());
            // let inspector = runtime.inspector();
            // inspector.wait_for_session_and_break_on_next_statement();
            // 检查是否是 EarlyReturnError
            match execute_result {
                Err(e) => {
                    println!("{}", e);
                    // 检查是否是早期返回
                    if self.result_storage.is_early_return() || e.clone().message.take().unwrap().eq("execution terminated") {
                        // 提前返回
                        let result = self
                            .result_storage
                            .take()
                            .ok_or_else(|| anyhow!("Early return but no result stored"))?;
                        // let mut count = self.exec_count.borrow_mut();
                        // *count += 1;
                        return Ok(result);
                    }
                    return Err(anyhow!("{}", format_error(e.into())));
                }
                Ok(result_handle) => {
                    std::mem::forget(result_handle);
                }
            }

            // 从 storage 获取结果
            let result = self
                .result_storage
                .take()
                .ok_or_else(|| anyhow!("No result stored"))?;

            let mut count = self.exec_count.borrow_mut();
            *count += 1;

            // Exit isolate after sync operations complete
            self.exit_isolate();

            Ok(result)
        }
    }

    fn enter_isolate(&self) {
        unsafe {
            // SAFETY:
            // 1. runtime 被 RefCell 保护，as_ptr() 获取原始指针
            // 2. 我们立即解引用并调用 enter()，不存储指针
            // 3. enter() 本身是线程安全的（V8 保证）
            let runtime_ptr = self.runtime.as_ptr();
            let runtime = &mut *runtime_ptr;
            let isolate = runtime.v8_isolate();
            isolate.enter();
        }
    }

    /// 退出此 Context 的 Isolate
    ///
    /// 恢复之前的 isolate（如果有）。
    /// 应该在完成 V8 操作后调用。
    ///
    /// 重要：每个 enter_isolate() 都必须有对应的 exit_isolate()，
    /// 否则在 Context drop 时会导致 "Disposing the isolate that is entered" 错误。
    fn exit_isolate(&self) {
        unsafe {
            // SAFETY: 同 enter_isolate()
            let runtime_ptr = self.runtime.as_ptr();
            let runtime = &mut *runtime_ptr;
            let isolate = runtime.v8_isolate();
            isolate.exit();
        }
    }
}
