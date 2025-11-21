use std::fs;
use deno_core::error::JsError;
use deno_core::v8;


pub fn get_env_code() -> String {
    let base_code = &[
        "dom/cheerio.js",
        "dom/vm_base.js",
        "dom/env.js",
        "dom/timer.js",
        "dom/Intl.js",
        // mouse
        "dom/EventTarget/EventTarget.js",
        "dom/EVENT/EVENT.js",
        "dom/EVENTS/UIEvent.js",
        "dom/EVENTS/TouchEvent.js",
        "dom/EVENTS/MouseEvent.js",
        "dom/EVENTS/PointerEvent.js",
        "dom/EventTarget/Node.js",
        "dom/EventTarget/NetworkInformation.js",
        "dom/EventTarget/StorageManager.js",
        "dom/window/VisualViewport.js",
        "dom/window/Window.js",
        "dom/window/File.js",
        "dom/CSS/CSSStyleDeclaration.js",
        "dom/CSS/CSSPositionTryDescriptors.js",
        "dom/DOM/Attr.js",
        "dom/EVENT/BaseAudioContext.js",
        "dom/EVENT/OfflineAudioContext.js",
        "dom/EVENT/Bluetooth.js",
        "dom/EVENT/BlobEvent.js",
        "dom/Performance/PerformanceEntry.js",
        "dom/Performance/Performance.js",
        "dom/Performance/PerformanceNavigation.js",
        "dom/Performance/PerformancePaintTiming.js",
        "dom/Performance/PerformanceTiming.js",
        "dom/Performance/PerformanceObserver.js",
        "dom/xhr/XMLHttpRequestEventTarget.js",
        "dom/xhr/XMLHttpRequest.js",
        "dom/xhr/fetch.js",
        "dom/EVENT/CustomEvent.js",
        "dom/BOM/GPU/GPU.js",
        "dom/BOM/Navigator.js",
        "dom/BOM/Plugin/MimeType.js",
        "dom/BOM/Plugin/MimeTypeArray.js",
        "dom/BOM/Plugin/Plugin.js",
        "dom/BOM/Plugin/PluginArray.js",
        "dom/BOM/Location.js",
        "dom/BOM/History.js",
        "dom/BOM/Screen.js",
        "dom/BOM/Storage.js",
        "dom/BOM/chrome.js",
        "dom/BOM/TextMetrics.js",
        "dom/BOM/MediaQueryList.js",
        "dom/BOM/BarProp.js",
        "dom/BOM/External.js",
        "dom/BOM/RTC/rtc.js",
        "dom/BOM/RTC/RTCDataChannel.js",
        "dom/BOM/RTC/RTCIceCandidate.js",
        "dom/BOM/RTC/RTCPeerConnection.js",
        "dom/BOM/RTC/RTCPeerConnectionIceEvent.js",
        "dom/BOM/RTC/RTCSessionDescription.js",
        "dom/BOM/Navigation.js",
        "dom/BOM/CookieStore.js",
        "dom/BOM/LaunchQueue.js",
        "dom/BOM/SharedStorage.js",
        "dom/BOM/DocumentPictureInPicture.js",
        "dom/BOM/GPU/GPUBufferUsage.js",
        "dom/BOM/GPU/GPUColorWrite.js",
        "dom/DOM/Document.js",
        "dom/DOM/elements/ElementsAttrs.js",
        "dom/DOM/Element.js",
        "dom/DOM/HTMLElement.js",
        "dom/DOM/DOMTokenList.js",
        "dom/DOM/elements/HTMLAllCollection.js",
        "dom/BOM/SVG/svg.js",
        "dom/BOM/USB/usb.js",
        "dom/BOM/MEDIA/media.js",
        "dom/BOM/Text/Text.js",
        "dom/BOM/CSS/css.js",
        "dom/BOM/XR/xr.js",
        "dom/BOM/BLUETOOTH/bluetooth.js",
        "dom/DOM/WebGL.js",
        "dom/DOM/WebGLRenderingContext.js",
        "dom/DOM/WebGL2RenderingContext.js",
        "dom/DOM/CanvasRenderingContext2D.js",
        "dom/DOM/OffscreenCanvas.js",
        "dom/DOM/elements/HTMLDocument.js",
        "dom/DOM/elements/HTMLParagraphElement.js",
        "dom/DOM/elements/HTMLCanvasElement.js",
        "dom/DOM/elements/HTMLBodyElement.js",
        "dom/DOM/elements/HTMLHeadElement.js",
        "dom/DOM/elements/HTMLHtmlElement.js",
        "dom/DOM/elements/HTMLMediaElement.js",
        "dom/DOM/elements/HTMLSpanElement.js",
        "dom/DOM/elements/HTMLFormElement.js",
        "dom/DOM/elements/HTMLAnchorElement.js",
        "dom/DOM/elements/HTMLLIElement.js",
        "dom/DOM/elements/HTMLImageElement.js",
        "dom/DOM/elements/HTMLScriptElement.js",
        "dom/DOM/elements/HTMLStyleElement.js",
        "dom/DOM/elements/HTMLTitleElement.js",
        "dom/DOM/elements/HTMLIFrameElement.js",
        "dom/DOM/elements/HTMLLinkElement.js",
        "dom/DOM/elements/HTMLUListElement.js",
        "dom/DOM/elements/HTMLDivElement.js",
        "dom/DOM/elements/HTMLAudioElement.js",
        "dom/DOM/elements/HTMLMetaElement.js",
        "dom/DOM/elements/HTMLCollection.js",
        "dom/DOM/elements/HTMLInputElement.js",
        "dom/DOM/elements/HTMLPreElement.js",
        "dom/DOM/elements/HTMLVideoElement.js",
        "dom/DOM/elements/HTMLUndef.js",
        "dom/DOM/documents.js",
        "dom/DOM/Image.js",
        "dom/CSS/DOMRect.js",
        "dom/WORKER/worker.js",
        "dom/WORKER/MessageChannel.js",
        "dom/speech/SpeechSynthesis.js",
        "dom/WORKER/SharedWorker.js",
        "dom/DB/indexedDB.js",
        "dom/other/ws.js",
        // "dom/other/crypto.js",
        "dom/crypto.js",
        "dom/vm_end.js",
        // "dom/vm_undefined.js",
        "dom/vm_undef.js",
    ];
    let mut res = vec![];
    base_code.iter().for_each(|e| {
        res.extend(fs::read(e).unwrap());
        res.push(59);
        res.push(10);
    });
    String::from_utf8(res).unwrap()
}

pub fn init_utils(scope: &mut v8::PinScope<'_, '_>, global: v8::Local<v8::Object>) {
    let print = v8::Function::new(
        scope,
        |_scope: &mut v8::PinScope<'_, '_>,
         _args: v8::FunctionCallbackArguments,
         _rv: v8::ReturnValue| {
            for i in 0.._args.length() {
                let item = _args.get(i);
                if item.is_string() {
                    print!(
                        "{:?}",
                        item.cast::<v8::String>().to_rust_string_lossy(_scope)
                    );
                } else if item.is_boolean() {
                    print!("{:?}", item.to_boolean(_scope).boolean_value(_scope));
                } else if item.is_number() {
                    print!(
                        "{:?}",
                        item.cast::<v8::Number>()
                            .to_integer(_scope)
                            .unwrap()
                            .value()
                    );
                } else if item.is_function() {
                    print!("{:?}", "function");
                } else {
                    print!("{:?}", item.type_of(_scope).to_rust_string_lossy(_scope));
                }
                print!(", ");
            }
            println!();
        },
    )
        .unwrap();
    global.set(
        scope,
        v8::String::new(scope, "print2").unwrap().into(),
        print.into(),
    );

    fn cal_back(
        _scope: &mut v8::PinScope<'_, '_>,
        _args: v8::FunctionCallbackArguments,
        mut _rv: v8::ReturnValue,
    ) {
        let call = _args.data();
        if call.is_function() {
            let func = call.cast::<v8::Function>();
            println!("call {} {}",func.get_name(_scope).to_rust_string_lossy(_scope), _args.is_construct_call());

            let mut params = &mut [].to_vec();
            for i in 0.._args.length() {
                params.push(_args.get(i));
            }
            let res = func.call(_scope, _args.this().into(), params);
             if _args.is_construct_call(){
                 println!("new target {} {}",func.get_name(_scope).to_rust_string_lossy(_scope), _args.is_construct_call());
                _rv.set( _args.new_target());
                 return;
            }
            match res {
                Some(result) => {
                    // println!("result {:?}", result);
                    _rv.set(result.into());
                }
                None => {
                    _rv.set( _args.this().into());

                }
            };


        }
        // let func = v8::Function::try_from(call).unwrap();
        // func.call(_scope, _args.this(), _args.length(), params);
    }
    fn empty(
        _scope: &mut v8::PinScope<'_, '_>,
        _args: v8::FunctionCallbackArguments,
        mut _rv: v8::ReturnValue,
    ) {
        let global = _scope.get_current_context().global(_scope);
        let _call_func = _args.get(2);

        let func_temp = v8::FunctionTemplate::builder(cal_back)
            .data(_call_func)
            .build(_scope);
        let name = _args.get(0).to_string(_scope).unwrap();
        func_temp.set_class_name(name.into());
        func_temp.get_function(_scope);

        _rv.set(func_temp.get_function(_scope).unwrap().into());
    }
    let func_temp = v8::FunctionTemplate::new(scope, empty);
    let name = v8::String::new(scope, "newFunc").unwrap();
    func_temp.set_class_name(v8::String::new(scope, "newFunc").unwrap());
    let func = func_temp.get_function(scope).unwrap();
    global.set(scope, name.into(), func.into()).unwrap();

    fn v8_exit(
        _scope: &mut v8::PinScope<'_, '_>,
        _args: v8::FunctionCallbackArguments,
        mut _rv: v8::ReturnValue,
    ) {
        if (_args.length() > 0) {
            let return_value = _args.get(0).to_string(_scope).unwrap();
            // println!("ReturnValue.call {:?}", return_value.to_rust_string_lossy(_scope));
        }

        unsafe {
            _scope.terminate_execution();
        }
    }
    let exit_temp = v8::FunctionTemplate::new(scope, v8_exit);

    global
        .set(
            scope,
            v8::String::new(scope, "ReturnValue").unwrap().into(),
            exit_temp.get_function(scope).unwrap().into(),
        )
        .unwrap();
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
            if i == 0
                && (line.contains(&error.name.as_deref().unwrap_or(""))
                || line.contains(&error.message.as_deref().unwrap_or("")))
            {
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
pub fn format_error(error: anyhow::Error) -> String {
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
                                let cleaned_stack =
                                    stack.replace("\\n", "\n").replace("\\\"", "\"");
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
