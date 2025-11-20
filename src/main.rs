// Copyright 2018-2025 the Deno authors. MIT license.
//!  This example shows you how to evaluate JavaScript expression and deserialize
//!  return value into a Rust object.

// NOTE:
// Here we are deserializing to `serde_json::Value` but you can
// deserialize to any other type that implements the `Deserialize` trait.

mod ops;
mod timer_real_ops;

use std::cell::RefCell;
use std::fs;
use std::rc::Rc;
use anyhow::anyhow;
use deno_core::{op2, JsRuntime, OpState, PollEventLoopOptions};
use deno_core::error::JsError;
use deno_core::RuntimeOptions;
use deno_core::v8;
use serde_v8;
#[op2(fast)]
fn op_hello(#[string] text: &str) {
    println!("Hello {}!", text);
}
deno_core::extension!(hello_runtime, ops = [op_hello]);

#[tokio::main(flavor = "current_thread")]
async fn main() {
    let mut extensions = vec![
        // Custom ops for result storage
        hello_runtime::init(),
        crate::ops::fs_ops::fs_ops::init(),
        crate::ops::browser_env::browser_env_ops::init(),

    ];
    // 根据参数决定是否加载扩展
    extensions.push(timer_real_ops::timer_real_ops::init());

    // let code = fs::read("/Users/wang/RustroverProjects/rustv8/env.js").expect("failed to read JS file");
    let code = fs::read("test.js").expect("failed to read JS file");
    // let code2 = fs::read("/Users/wang/RustroverProjects/rustv8/test.js").expect("failed to read JS file");
    // let code2 = fs::read("/Users/wang/CLionProjects/rusty_v8/env.js").expect("failed to read JS file");

    let mut runtime = JsRuntime::new(RuntimeOptions {
        extensions,
        ..Default::default()
    });
    let isolate = runtime.v8_isolate();

    runtime.execute_script("base", include_str!("js_polyfill.js")).unwrap();
    let binding = String::from_utf8(code).unwrap();

    // Evaluate some code
    //     runtime.execute_script("aaa", binding);
    println!("start");
    let output: serde_json::Value =
        eval(&mut runtime, binding).await.expect("Eval failed");
    runtime.v8_isolate().terminate_execution();
    println!("Output: {output:?}");


}
/// 格式化 JavaScript 错误为人类可读的字符串
///
/// 将 deno_core 的 JsError 转换为清晰的错误消息，包含：
/// - 错误类型和消息
/// - 格式化的调用堆栈
/// - 源代码位置信息
fn format_js_error(error: &JsError) -> String {
    let mut output = String::new();

    // 1. 错误类型和消息
    if let Some(name) = &error.name {
        output.push_str(name);
        output.push_str(": ");
    }
    if let Some(message) = &error.message {
        output.push_str(message);
    }
    output.push('\n');

    // 2. 格式化的堆栈跟踪
    if let Some(stack) = &error.stack {
        // 清理堆栈信息，移除重复的错误消息
        let stack_lines: Vec<&str> = stack.lines().collect();

        // 跳过第一行（通常是重复的错误消息）
        for (i, line) in stack_lines.iter().enumerate() {
            if i == 0 && (line.contains(&error.name.as_deref().unwrap_or("")) ||
                line.contains(&error.message.as_deref().unwrap_or(""))) {
                continue; // 跳过重复的错误消息
            }

            // 清理行内容
            let cleaned = line.trim();
            if !cleaned.is_empty() {
                output.push_str("  ");
                output.push_str(cleaned);
                output.push('\n');
            }
        }
    } else if !error.frames.is_empty() {
        // 如果没有 stack 字符串，从 frames 构建
        output.push_str("Stack trace:\n");
        for frame in &error.frames {
            output.push_str("  at ");

            if let Some(func_name) = &frame.function_name {
                output.push_str(func_name);
            } else {
                output.push_str("<anonymous>");
            }

            output.push_str(" (");

            if let Some(file_name) = &frame.file_name {
                output.push_str(file_name);
            } else if let Some(eval_origin) = &frame.eval_origin {
                output.push_str(eval_origin);
            } else {
                output.push_str("<eval>");
            }

            if let Some(line) = frame.line_number {
                output.push(':');
                output.push_str(&line.to_string());

                if let Some(col) = frame.column_number {
                    output.push(':');
                    output.push_str(&col.to_string());
                }
            }

            output.push_str(")\n");
        }
    }

    // 3. 源代码行（如果有）
    if let Some(source_line) = &error.source_line {
        output.push('\n');
        output.push_str("Source:\n  ");
        output.push_str(source_line);
        output.push('\n');
    }

    output
}

/// 从 anyhow::Error 中提取并格式化 JsError
///
/// 尝试从错误链中找到 JsError 并格式化，如果找不到则返回原始错误消息
fn format_error(error: anyhow::Error) -> String {
    // 尝试 downcast 到 JsError
    match error.downcast::<JsError>() {
        Ok(js_error) => format_js_error(&js_error),
        Err(original_error) => {
            // 不是 JsError，检查是否包含 JsError 的 cause chain
            let error_chain = format!("{:?}", original_error);

            // 尝试从调试输出中提取 JsError
            if error_chain.contains("JsError") {
                // 包含 JsError，但无法直接访问，尝试解析
                // 这是临时方案，返回简化的错误信息
                if let Some(msg_start) = error_chain.find("message: Some(\"") {
                    let msg_part = &error_chain[msg_start + 15..];
                    if let Some(msg_end) = msg_part.find("\")") {
                        let message = &msg_part[..msg_end];

                        if let Some(stack_start) = error_chain.find("stack: Some(\"") {
                            let stack_part = &error_chain[stack_start + 13..];
                            if let Some(stack_end) = stack_part.find("\"),") {
                                let stack = &stack_part[..stack_end];
                                // 清理转义字符
                                let cleaned_stack = stack.replace("\\n", "\n").replace("\\\"", "\"");
                                return format!("{}\n{}", message, cleaned_stack);
                            }
                        }

                        return message.to_string();
                    }
                }
            }

            // 无法提取 JsError，返回原始错误
            format!("{}", original_error)
        }
    }
}
async fn eval(
    context: &mut JsRuntime,
    code: String,
) -> Result<serde_json::Value, String> {


    let res = context.execute_script("<anon>", code).map_err(|e| anyhow!("{}", format_error(e.into()))).unwrap();
    let event_loop_result = context
        .run_event_loop(Default::default())
        .await;

    deno_core::scope!(scope, context);
    let local = v8::Local::new(scope, res);
    // Deserialize a `v8` object into a Rust type using `serde_v8`,
    // in this case deserialize to a JSON `Value`.
    let deserialized_value =
        serde_v8::from_v8::<serde_json::Value>(scope, local);

    match deserialized_value {
        Ok(value) => Ok(value),
        Err(err) => Err(format!("Cannot deserialize value: {err:?}")),
    }
}
