SharedWorker = newFunc('SharedWorker', 1, function SharedWorker(url, opt) {
    let f = '';
    // +
    // `postMessage = function (){
    //     this.postMessage(...arguments)
    // }`
    let code = URLMap[url];
    // print('new Worker \n', url)
    // print('new Worker \n', code)
    let workThis = Object.create(window)
    delete workThis.onmessage
    delete workThis.postMessage
    workThis.msgList = [];
    let that = this;
    // debugger
    Object.defineProperties(workThis, {
        postMessage: {
            get() {
                // 这里是异步脚本的 postMessage
                print('inner worker get postMessage', that.postMessage)
                // debugger
                return function () {
                    print('inner worker get postMessage.call', arguments)

                    that.onmessage(...arguments)
                }
            }
        },
        onmessage: {
            set(func) {
                // debugger;
                // 这里是异步脚本的 onmessage
                print('inner worker set onmessage', func)
                print('inner worker set onmessage', func.toString())
                print('inner worker set onmessage', this.msgList)
                // debugger
                // print(new Error('aaa').stack);
                this._onmsg = func;
                while (this.msgList.length > 0) {
                    let msg = this.msgList.shift()
                    this._onmsg(msg)
                }
            },
            get() {
                return this._onmsg
            }
        }
    })
    let workObj = this
    // debugger
    let code_result1 = f + code
        // .replaceAll('onmessage', 'this.onmessage').replaceAll('postMessage', 'this.postMessage')
        .replaceAll('()})();', '();\n onconnect(this)})()')
        .replaceAll('port = message.ports[0]', 'port = out_port')
        .replaceAll('self.close()', 'port.close()')
        .replaceAll(',port.close()', '')

    print('worker code', code_result1)
    let port = new MessagePort();
    let code_function = Function('out_port', code_result1).bind(port);

    Object.defineProperties(port, {
        onmessage: {
            set(value) {
                debugger;
                mm.memory.private_data.get(that).onmessage = value
                mm.memory.private_data.get(port).onmessage = value
                mm.memory.private_data.get(that).code_function.call(mm.memory.private_data.get(that).workThis, mm.memory.private_data.get(that).port);
            }
        }
    })
    debugger;
    mm.memory.private_data.set(this, {
        url,
        opt,
        code_function: code_function,
        workThis: workThis,
        innertOnmessage: null,
        port: port,


    })

})


Object.defineProperties(SharedWorker.prototype, {
    port: {

        get: newFunc('port', 10, function port() {
            let res = mm.memory.private_data.get(this).port;
            // if (debug)
            print('SharedWorker.port.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor:{
        value:function(){}
    },
    onerror: {

        get: newFunc('onerror', 10, function onerror() {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('SharedWorker.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('SharedWorker.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
})