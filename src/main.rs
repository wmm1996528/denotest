// Copyright 2018-2025 the Deno authors. MIT license.
//!  This example shows you how to evaluate JavaScript expression and deserialize
//!  return value into a Rust object.

// NOTE:
// Here we are deserializing to `serde_json::Value` but you can
// deserialize to any other type that implements the `Deserialize` trait.

mod ops;
pub mod timer_real_ops;
mod Context;
pub mod random_state;
mod storage;
mod context;
mod tools;
mod runtime;

use crate::random_state::random_f64;
use crate::storage::ResultStorage;
use anyhow::anyhow;
use deno_core::RuntimeOptions;
use deno_core::error::JsError;
use deno_core::v8;
use deno_core::{JsRuntime, op2};
use serde_v8;
use std::fs;
use std::rc::Rc;
use std::sync::Once;
use tokio::time::Instant;
use crate::tools::{format_error, get_env_code, init_utils};

static INIT: Once = Once::new();

fn ensure_v8_initialized() {
    INIT.call_once(|| {
        // Initialize V8 platform (required before creating any isolates)
        deno_core::JsRuntime::init_platform(None, false);
    });
}

#[tokio::main(flavor = "current_thread")]
async fn main() {
    ensure_v8_initialized();
    let env_code = get_env_code();
    fs::write("env.js", env_code).unwrap();
    test().await;
    // multi_test().await;
    // for i in 0..1 {
    //     let now = Instant::now();
    //     multi_test().await;
    //     println!("took {:?}", now.elapsed());
    //     tokio::time::sleep(std::time::Duration::from_secs(1)).await;
    // }
}

async fn test_async(i: i32) -> i32 {
    let t = (10 as f64 * random_f64()) as u64;
    tokio::time::sleep(std::time::Duration::from_millis(t)).await;
    println!("{:?} async test: {}", Instant::now(), t);
    i * 20
}
async fn multi_test() {
    let mut tasks = Vec::with_capacity(2);
    for op in 0..50 {
        // Evaluate some code
        //     runtime.execute_script("aaa", binding);
        // tasks.push(tokio::spawn(async {
        //
        //
        //
        //     let storage = Rc::new(ResultStorage::new());
        //
        //     let mut extensions = vec![
        //         // Custom ops for result storage
        //         crate::ops::fs_ops::fs_ops::init(),
        //         crate::ops::browser_env::browser_env_ops::init(),
        //         crate::ops::crypto_ops::crypto_ops::init(),
        //         crate::ops::storage_ops::pyexecjs_ext::init(storage.clone()),
        //     ];
        //
        //     // 根据参数决定是否加载扩展
        //     extensions.push(timer_real_ops::timer_real_ops::init());
        //
        //     let mut runtime = JsRuntime::new(RuntimeOptions {
        //         extensions,
        //         ..Default::default()
        //     });
        //     // Make sure the module was evaluated.
        //     {
        //         deno_core::scope!(scope, runtime);
        //         let global = scope.get_current_context().global(scope);
        //         init_utils(scope, global);
        //     }
        //
        //     runtime
        //         .execute_script("base", include_str!("js_polyfill.js"))
        //         .unwrap();
        //     let env = fs::read("env.js").expect("failed to read JS file");
        //     let env_str = String::from_utf8(env).unwrap();
        //
        //     // let code = fs::read("/Users/wang/ClionProjects/rusty_v8/env.js").expect("failed to read JS file");
        //     let code = fs::read("test.js").expect("failed to read JS file");
        //     let binding = String::from_utf8(code).unwrap();
        //
        //     // let code2 = fs::read("/Users/wang/RustroverProjects/rustv8/test.js").expect("failed to read JS file");
        //     // let code2 = fs::read("/Users/wang/CLionProjects/rusty_v8/env.js").expect("failed to read JS file");
        //     let js = env_str.to_string() + binding.as_str() + "\n";
        //
        //     let res = runtime
        //         .execute_script("<run>", js)
        //         .map_err(|e| anyhow!("{}", format_error(e.into())))
        //         .unwrap();
        //     // let event_loop_result = context.run_event_loop(Default::default()).await;
        //     // let isolate = runtime.v8_isolate();
        //     // let heap_stats = isolate.get_heap_statistics();
        //
        //     // let mut stats = std::collections::HashMap::new();
        //     // stats.insert("total_heap_size".to_string(), heap_stats.total_heap_size());
        //     // stats.insert("total_heap_size_executable".to_string(), heap_stats.total_heap_size_executable());
        //     // stats.insert("total_physical_size".to_string(), heap_stats.total_physical_size());
        //     // stats.insert("total_available_size".to_string(), heap_stats.total_available_size());
        //     // stats.insert("used_heap_size".to_string(), heap_stats.used_heap_size());
        //     // stats.insert("heap_size_limit".to_string(), heap_stats.heap_size_limit());
        //     // stats.insert("malloced_memory".to_string(), heap_stats.malloced_memory());
        //     // stats.insert("external_memory".to_string(), heap_stats.external_memory());
        //     // stats.insert("peak_malloced_memory".to_string(), heap_stats.peak_malloced_memory());
        //     // stats.insert("number_of_native_contexts".to_string(), heap_stats.number_of_native_contexts());
        //     // stats.insert("number_of_detached_contexts".to_string(), heap_stats.number_of_detached_contexts());
        //     let res =  storage.value.take().unwrap();
        //     println!("result.len {}", res.len());
        //     res
        // }));

        // tasks.push(test_async(op));
        tasks.push(test());
    }
    // This call will make them start running in the background
    // immediately.

    let mut outputs = Vec::with_capacity(tasks.len());
    for task in tasks {
        outputs.push(task.await);
    }
}
async fn test() -> String {
    let context = crate::Context::Context::new(true,true,Some(222));

    // let code = fs::read("/Users/wang/ClionProjects/rusty_v8/env.js").expect("failed to read JS file");
    let code = fs::read("test.js").expect("failed to read JS file");
    let binding = String::from_utf8(code).unwrap();
    let mut env_code = get_env_code();
    // env_code = "".to_string();
    //
    let code =  env_code+ binding.as_str();
    fs::write("env.js", &code).unwrap();

    let t1 = Instant::now();
    match context.execute_js(&code, false) {
        Ok(result) => {
            println!("{}", result);
            println!("Execution time: {:?}", t1.elapsed());
            result
        },
        Err(err) => {
            println!("failed to execute JS: {}", err);
            "".to_string()
        }

    };
    "".to_string()
    // let event_loop_result = context.run_event_loop(Default::default()).await;

    // 直接访问 V8 isolate 并获取堆统计信息
    // let isolate = runtime.v8_isolate();
    // let heap_stats = isolate.get_heap_statistics();
    //
    // let mut stats = std::collections::HashMap::new();
    // stats.insert("total_heap_size".to_string(), heap_stats.total_heap_size());
    // stats.insert(
    //     "total_heap_size_executable".to_string(),
    //     heap_stats.total_heap_size_executable(),
    // );
    // stats.insert(
    //     "total_physical_size".to_string(),
    //     heap_stats.total_physical_size(),
    // );
    // stats.insert(
    //     "total_available_size".to_string(),
    //     heap_stats.total_available_size(),
    // );
    // stats.insert("used_heap_size".to_string(), heap_stats.used_heap_size());
    // stats.insert("heap_size_limit".to_string(), heap_stats.heap_size_limit());
    // stats.insert("malloced_memory".to_string(), heap_stats.malloced_memory());
    // stats.insert("external_memory".to_string(), heap_stats.external_memory());
    // stats.insert(
    //     "peak_malloced_memory".to_string(),
    //     heap_stats.peak_malloced_memory(),
    // );
    // stats.insert(
    //     "number_of_native_contexts".to_string(),
    //     heap_stats.number_of_native_contexts(),
    // );
    // stats.insert(
    //     "number_of_detached_contexts".to_string(),
    //     heap_stats.number_of_detached_contexts(),
    // );
    // println!("stats {:?}", stats);
    // {
    //     deno_core::scope!(scope, runtime);
    //     let local = v8::Local::new(scope, res);
    //     // Deserialize a `v8` object into a Rust type using `serde_v8`,
    //     // in this case deserialize to a JSON `Value`.
    //     let deserialized_value = serde_v8::from_v8::<serde_json::Value>(scope, local);
    //     deserialized_value
    // }
}


