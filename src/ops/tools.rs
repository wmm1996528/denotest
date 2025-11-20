use std::fs;
use deno_core::{extension, op2, v8};
use deno_core::v8::tc_scope;

#[op2(fast)]
pub fn op_exit(#[string] data: String) {

    println!("exit");
}
#[op2(async)]
pub async fn op_new_func(#[global] func: v8::Global<v8::Function>) {


}
extension!(
    tool,
    ops = [
        op_exit,
        op_new_func,
    ],
);

