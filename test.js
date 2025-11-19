setTimeout = function (a,b){
    Deno.core.ops.op_print('22\n')

    Deno.core.ops.op_set_timeout_real(a,b)
    a()
}
setTimeout(function () {
    Deno.core.ops.op_print('1\n')

},10000)