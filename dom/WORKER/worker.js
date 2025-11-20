WorkWindow = Object.create(window)
Workobj = [];
jsonify = JSON.stringify;
Blobobjects = new Map;

URLSearchParams = newFunc('URLSearchParams', 1, function () {
    mm.memory.private_data.set(this, {})
})

Object.defineProperties(URLSearchParams.prototype, {
    size: {

        get: newFunc('size', 10, function size() {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('URLSearchParams.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    append: {

        value: newFunc('append', 10, function append() {
            if (debug) print('URLSearchParams.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('URLSearchParams.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function get() {
            if (debug) print('URLSearchParams.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAll: {

        value: newFunc('getAll', 10, function getAll() {
            if (debug) print('URLSearchParams.getAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function has() {
            if (debug) print('URLSearchParams.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    set: {

        value: newFunc('set', 10, function set() {
            if (debug) print('URLSearchParams.set.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    sort: {

        value: newFunc('sort', 10, function sort() {
            if (debug) print('URLSearchParams.sort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function toString() {
            if (debug) print('URLSearchParams.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function entries() {
            if (debug) print('URLSearchParams.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function forEach() {
            if (debug) print('URLSearchParams.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function keys() {
            if (debug) print('URLSearchParams.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function values() {
            if (debug) print('URLSearchParams.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('URLSearchParams.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


URL = newFunc('URL', 2, function (value, base) {

    let location = {};

    let a = value.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
    location.protocol = a[1] ? a[1] : "";
    location.host = a[2] ? a[2] : "";
    location.port = a[3] ? a[3] : "";
    location.pathname = a[4] ? a[4] : "";
    location.search = a[5] ? a[5] : "";
    location.hash = a[6] ? a[6] : "";
    location.hostname = location.host;
    location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
    mm.memory.private_data.set(this, {
        searchParams: new URLSearchParams(),
        ...location
    })
})

URL = newFunc('URL', 1, function () {
    print('URL.call');
    mm.memory.private_data.set(this, {})
});


;delete URL.prototype.constructor;
;
Object.defineProperties(URL.prototype, {
    [Symbol.toStringTag]: {
        value: 'URL'
    },

    'origin': {

        get: newFunc('origin', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['origin'];
            if (debug) print('URL.origin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'protocol': {

        get: newFunc('protocol', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['protocol'];
            if (debug) print('URL.protocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('protocol', 1, function (value) {
            if (debug) print('URL.protocol.set', value)
            mm.memory.private_data.get(this)['protocol'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'username': {

        get: newFunc('username', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['username'];
            if (debug) print('URL.username.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('username', 1, function (value) {
            if (debug) print('URL.username.set', value)
            mm.memory.private_data.get(this)['username'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'password': {

        get: newFunc('password', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['password'];
            if (debug) print('URL.password.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('password', 1, function (value) {
            if (debug) print('URL.password.set', value)
            mm.memory.private_data.get(this)['password'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'host': {

        get: newFunc('host', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['host'];
            if (debug) print('URL.host.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('host', 1, function (value) {
            if (debug) print('URL.host.set', value)
            mm.memory.private_data.get(this)['host'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'hostname': {

        get: newFunc('hostname', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['hostname'];
            if (debug) print('URL.hostname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hostname', 1, function (value) {
            if (debug) print('URL.hostname.set', value)
            mm.memory.private_data.get(this)['hostname'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'port': {

        get: newFunc('port', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['port'];
            if (debug) print('URL.port.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('port', 1, function (value) {
            if (debug) print('URL.port.set', value)
            mm.memory.private_data.get(this)['port'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'pathname': {

        get: newFunc('pathname', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['pathname'];
            if (debug) print('URL.pathname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('pathname', 1, function (value) {
            if (debug) print('URL.pathname.set', value)
            mm.memory.private_data.get(this)['pathname'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'search': {

        get: newFunc('search', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['search'];
            if (debug) print('URL.search.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('search', 1, function (value) {
            if (debug) print('URL.search.set', value)
            mm.memory.private_data.get(this)['search'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'searchParams': {

        get: newFunc('searchParams', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['searchParams'];
            if (debug) print('URL.searchParams.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'hash': {

        get: newFunc('hash', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['hash'];
            if (debug) print('URL.hash.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hash', 1, function (value) {
            if (debug) print('URL.hash.set', value)
            mm.memory.private_data.get(this)['hash'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'href': {

        get: newFunc('href', 10, function () {


            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['href'];
            if (debug) print('URL.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('href', 1, function (value) {
            if (debug) print('URL.href.set', value)
            mm.memory.private_data.get(this)['href'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('URL.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'toString': {

        value: newFunc('toString', 10, function () {

            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('URL.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!URL.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('URL.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

function guid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0,
            v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

var URLMap = {};

URL.createObjectURL = newFunc('createObjectURL', 1, function (data) {
    let url = `blob:${location.protocol}//${location.hostname}/${guid()}`
    URLMap[url] = data.code
    // URLMap[url] =  {
    //     data: data,
    //     url: url
    // }
    print('URL.createObjectURL', data, url)
    debugger;
    return url
})
URL.revokeObjectURL = newFunc('revokeObjectURL', 1, function (data) {
    print('URL.revokeObjectURL', data)
    // let url = `blob:${location.protocol}//${location.hostname}/${guid()}`
    // URLMap[url] = data.code
    // URLMap[url] =  {
    //     data: data,
    //     url: url
    // }
    // return url
})
// Blob = newFunc('Blob', 2, function Blob(a, b) {
//     print("Blob.length=" + a.length)
//     print('new Blob', a)
//     this.code = a[0];
//     this.type = "";
//     this.size = this.code ? this.code.length : 0;
// })
Blob = newFunc('Blob', 3, function (a, b) {
    print('Blob.call', a, b);
    this.code = a[0];
    this.type = "";
    let size = a[0] ? a[0].length : 0;
    // debugger
    mm.memory.private_data.set(this, {
        code: a[0],
        type: '',
        size: size
    })


})


Object.defineProperties(Blob.prototype, {
    [Symbol.toStringTag]: {
        value: 'Blob'
    },

    'size': {

        get: newFunc('size', 10, function () {
            print('Blob.size.get', mm.memory.private_data.get(this))

            if (!Blob.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['size'];
            if (debug) print('Blob.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'type': {

        get: newFunc('type', 10, function () {


            if (!Blob.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['type'];
            if (debug) print('Blob.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'arrayBuffer': {

        value: newFunc('arrayBuffer', 10, function () {

            if (!Blob.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Blob.arrayBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'slice': {

        value: newFunc('slice', 10, function () {

            if (!Blob.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Blob.slice.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'stream': {

        value: newFunc('stream', 10, function () {

            if (!Blob.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Blob.stream.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'text': {

        value: newFunc('text', 10, function () {

            if (!Blob.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Blob.text.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Blob.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Blob.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Worker = newFunc('Worker', 1, function () {
    print('Worker.call');
    mm.memory.private_data.set(this, {})
});


;delete Worker.prototype.constructor;
;

let globalWorkerLists = [];
Worker = newFunc('Worker', 2, function Worker(url, opt) {
    print('new Worker', url, opt)
    debugger;
    // const f = "this=workThis;\n\n"
    let f = '';
    // +
    // `postMessage = function (){
    //     this.postMessage(...arguments)
    // }`


    let code = URLMap[url];
    if (code === 'onmessage=function(e){e.isTrusted&&\'\'===e.origin&&null===e.source&&eval(e.data)}') {
        code = 'onmessage=function(e){console.log(e);e.isTrusted&&\'\'===e.origin&&null===e.source&&new Function(e.data).apply(this,[])}'
    }
    print('new Worker \n', url)
    print('new Worker \n', code)
    let workThis = Object.create(window)
    delete workThis.onmessage
    delete workThis.postMessage
    workThis.msgList = [];
    let that = this;
    // debugger
    workThis.postMessage = function (data) {
        print('inner worker get postMessage.call', JSON.stringify(data))
        if (JSON.stringify(data).indexOf('WbUKT7') > -1) {
            debugger;
        }
        let params = {};
        data = new Proxy(data, {
            get(target, prop) {
                let res = Reflect.get(target, prop);

                print('data1.get', prop, res);
                if (prop === 'BjZiZ2'){
                    debugger;
                }
                return res;
            }

        })
        params['source'] = 'cloudflare-challenge'
        params['event'] = ''
        params['widgetId'] = 'ckf81';
        params['data'] = data
        data = new Proxy(params, {
            get(target, prop) {
                let res = Reflect.get(target, prop);
                print('data.get', prop, res);
                // debugger
                return res;
            }

        })
        that.onmessage(data)
        that.onmessage.terminate = true;
        return
        let workerEventListeners = mm.memory.allListeners.get('worker');
        if (workerEventListeners === undefined){
            return
        }
        let listeners = [];
        for (let i = 0; i < workerEventListeners.length; i++) {
            let func = workerEventListeners[i];
            if (func !== that.onmessage) {
                listeners.push(func)
            }else{
                func(data)
            }
        }
        mm.memory.allListeners.set('worker', listeners)
    }
    Object.defineProperties(workThis, {
        // postMessage: {
        //     get() {
        //         // 这里是异步脚本的 postMessage
        //         print('inner worker get postMessage', that.postMessage)
        //         debugger
        //     }
        // },
        onmessage: {
            set(func) {
                // debugger;

                // 这里是异步脚本的 onmessage
                print('inner worker set onmessage', func)
                print('inner worker set onmessage', func.toString())
                print('inner worker set onmessage', this.msgList)
                print('inner worker set onmessage', mm.memory.allListeners.has('worker') && mm.memory.allListeners.get('worker').length)
                // debugger
                // print(new Error('aaa').stack);
                this._onmsg = func;
                while (this.msgList.length > 0) {
                    let msg = this.msgList.shift()
                    // debugger;
                    msg = new Proxy(msg, {
                        get(target, p, receiver) {
                            let res =  Reflect.get(target,p,receiver);
                            print('msg.get',p, typeof res);
                            return res;

                        }
                    })
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
    print('worker code', f + code)
    let code_function = Function(f + code
        .replaceAll('onmessage', 'this.onmessage').replaceAll('postMessage', 'this.postMessage')
    ).bind(workThis);
    mm.memory.private_data.set(this, {
        url,
        opt,
        code_function: code_function,
        workThis: workThis,
        innertOnmessage: null

    })
    globalWorkerLists.push(mm.memory.private_data.get(this))
})
Object.defineProperties(Worker.prototype, {
    [Symbol.toStringTag]: {
        value: 'Worker'
    },
    'onmessage': {
        get: newFunc('onmessage', 0, function onmessage() {
            // debugger
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('Worker.onmessage.get', typeof res)
            // if (debug) print('Worker.onmessage.get', res.toString())
            // let res2 = function (a){
            //     // print(JSON.stringify(a))
            //     return res({data:a})
            // }
            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function onmessage(value) {
            let url = mm.memory.private_data.get(this).url;
            if (value.terminate === true){
                return
            }
            if (debug) print(url, 'Worker.onmessage.set', value)
            if (debug) print(url, 'Worker.onmessage.set', value.toString())
            if (debug) print(url, 'Worker.onmessage.set', mm.memory.private_data.get(this))
            // debugger;
            mm.memory.private_data.get(this).onmessage = value
            mm.memory.private_data.get(this).code_function.call(mm.memory.private_data.get(this).workThis);
            if (mm.memory.allListeners.get('worker') === undefined) {
                mm.memory.allListeners.set('worker', new Proxy([], {
                    set(target, prop, value) {
                        print('worker.set', prop, value)
                        return Reflect.set(target, prop, value);
                    }
                }))
            }
            mm.memory.private_data.get(this).lid = mm.memory.allListeners.get('worker').length
            value.terminate = false;
            mm.memory.allListeners.get('worker').push(value)


            // debugger;

            // mm.memory.private_data.get(this).workThis.onmessage = value
            // print("初始化完成")

        }, {set: true})


    },
    'postMessage': {

        value: newFunc('postMessage', 10, function postMessage(data) {
            if (debug) print('Worker.postMessage.call', data)
            if (typeof data === 'string' && data.indexOf('self.postMessage') !== -1) {
                data = data.replaceAll('self.postMessage', 'window.postMessage')
                // debugger;
            }
            if (typeof data === 'string' && data.indexOf('window.postMessage') === -1 ) {
                data = data.replaceAll('postMessage', 'this.postMessage').replaceAll('onmessage', 'this.onmessage')
            }
            // debugger;

            if ( typeof data === 'string'){
                data = data.replaceAll('eval("debugger");', '');
            }
            if (debug) print('Worker.postMessage.call2', data)
            if ( typeof data === 'string' && data.indexOf('ThlTd6') > -1) {
                mm.memory.private_data.get(this).delayPost = data
                // debugger;
            }
            // print(mm.memory.private_data.get(this).workThis)
            // debugger;
            //  从外往里发 所以要调用 workThis 的onmessage
            // if (mm.memory.private_data.get(this).workThis.onmessage) {
            if (mm.memory.private_data.get(this).workThis.onmessage) {
                print('onmessage.call',data)
                mm.memory.private_data.get(this).workThis.onmessage({
                    data: data,
                    isTrusted: true,
                    origin: '',
                    source: null
                })

            } else {
                mm.memory.private_data.get(this).workThis.msgList.push({
                    data: data,
                    isTrusted: true,
                    origin: '',
                    source: null
                })
            }

        }), writable: true, enumerable: true, configurable: true,


    },
    'terminate': {

        value: newFunc('terminate', 10, function () {

            if (!Worker.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Worker.terminate.call', mm.memory.private_data.get(this))

            let workerEventListeners = mm.memory.allListeners.get('worker');
            if (workerEventListeners === undefined) {
                return
            }
            print('before', workerEventListeners.length)

            // debugger;

            let listeners = [];
            for (let i = 0; i < workerEventListeners.length; i++) {
                let func = workerEventListeners[i];
                print('worker.func', i, func)
                if (func !== mm.memory.private_data.get(this).onmessage
                    || (mm.memory.private_data.get(this).that !== undefined && func === mm.memory.private_data.get(this).that.onmessage)) {
                    listeners.push(func)
                }
            }
            if (mm.memory.private_data.get(this).onmessage !== undefined)mm.memory.private_data.get(this).onmessage.terminate = true;
            if (mm.memory.private_data.get(this).that !== undefined)mm.memory.private_data.get(this).that.onmessage.terminate = true;
            mm.memory.allListeners.set('worker', listeners)

            print('after', mm.memory.allListeners.get('worker').length)


        }), writable: true, enumerable: true, configurable: true,


    },
    // 'constructor': {
    //
    //     value: newFunc('constructor', 10, function () {
    //
    //         if (!Worker.prototype.isPrototypeOf(this)) {
    //             throw new TypeError("Illegal constructor");
    //         }
    //         ;
    //         if (debug) print('Worker.constructor.call', arguments)
    //
    //     }), writable: true, enumerable: false, configurable: true,
    //
    //
    // },
    'onerror': {

        get: newFunc('onerror', 10, function onerror() {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('Worker.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('Worker.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
})


//调用如下


// !function () {
// //自己整个Blob对象， 下面new Worker（URL.create(new Blob([js代码]))）这样才是正确方式，下面是测试 直接Worker填代码
//
//     var work = new Worker(`!function (t) { var n = {}; function e(r) { if (n[r]) return n[r].exports; var o = n[r] = { i: r, l: !1, exports: {} }; return t[r].call(o.exports, o, o.exports, e), o.l = !0, o.exports } e.m = t, e.c = n, e.d = function (t, n, r) { e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r }) }, e.r = function (t) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 }) }, e.t = function (t, n) { if (1 & n && (t = e(t)), 8 & n) return t; if (4 & n && "object" == typeof t && t && t.__esModule) return t; var r = Object.create(null); if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t) for (var o in t) e.d(r, o, function (n) { return t[n] }.bind(null, o)); return r }, e.n = function (t) { var n = t && t.__esModule ? function () { return t["default"] } : function () { return t }; return e.d(n, "a", n), n }, e.o = function (t, n) { return Object.prototype.hasOwnProperty.call(t, n) }, e.p = "", e(e.s = 0) }([function (t, n, e) { "use strict"; var r = this && this.__assign || function () { return (r = Object.assign || function (t) { for (var n, e = 1, r = arguments.length; e < r; e++)for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]); return t }).apply(this, arguments) }, o = this && this.__rest || function (t, n) { var e = {}; for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && n.indexOf(r) < 0 && (e[r] = t[r]); if (null != t && "function" == typeof Object.getOwnPropertySymbols) { var o = 0; for (r = Object.getOwnPropertySymbols(t); o < r.length; o++)n.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(t, r[o]) && (e[r[o]] = t[r[o]]) } return e }, u = this && this.__importDefault || function (t) { return t && t.__esModule ? t : { "default": t } }; n.__esModule = !0; var f = e(1), a = u(e(2)), i = self; function c(t, n) { i.postMessage({ type: t, data: n }) } c(a["default"].WORKER_READY); i.onmessage = function (t) { var n = t.data; if (n.type === a["default"].RUN_TASK) { var e = n.data, u = e.taskId, i = o(e, ["taskId"]); c(a["default"].TASK_RESULT, r(r({}, f.getWorkloadResult(i)), { taskId: u })) } }, n["default"] = function () { } }, function (t, n, e) { "use strict"; function r(t, n) { var e = (65535 & t) + (65535 & n); return (t >> 16) + (n >> 16) + (e >> 16) << 16 | 65535 & e } function o(t, n, e, o, u, f) { return r(function (t, n) { return t << n | t >>> 32 - n }(r(r(n, t), r(o, f)), u), e) } function u(t, n, e, r, u, f, a) { return o(n & e | ~n & r, t, n, u, f, a) } function f(t, n, e, r, u, f, a) { return o(n & r | e & ~r, t, n, u, f, a) } function a(t, n, e, r, u, f, a) { return o(n ^ e ^ r, t, n, u, f, a) } function i(t, n, e, r, u, f, a) { return o(e ^ (n | ~r), t, n, u, f, a) } function c(t, n) { var e, o, c, l, s; t[n >> 5] |= 128 << n % 32, t[14 + (n + 64 >>> 9 << 4)] = n; var d = 1732584193, p = -271733879, g = -1732584194, _ = 271733878; for (e = 0; e < t.length; e += 16)o = d, c = p, l = g, s = _, p = i(p = i(p = i(p = i(p = a(p = a(p = a(p = a(p = f(p = f(p = f(p = f(p = u(p = u(p = u(p = u(p, g = u(g, _ = u(_, d = u(d, p, g, _, t[e], 7, -680876936), p, g, t[e + 1], 12, -389564586), d, p, t[e + 2], 17, 606105819), _, d, t[e + 3], 22, -1044525330), g = u(g, _ = u(_, d = u(d, p, g, _, t[e + 4], 7, -176418897), p, g, t[e + 5], 12, 1200080426), d, p, t[e + 6], 17, -1473231341), _, d, t[e + 7], 22, -45705983), g = u(g, _ = u(_, d = u(d, p, g, _, t[e + 8], 7, 1770035416), p, g, t[e + 9], 12, -1958414417), d, p, t[e + 10], 17, -42063), _, d, t[e + 11], 22, -1990404162), g = u(g, _ = u(_, d = u(d, p, g, _, t[e + 12], 7, 1804603682), p, g, t[e + 13], 12, -40341101), d, p, t[e + 14], 17, -1502002290), _, d, t[e + 15], 22, 1236535329), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 1], 5, -165796510), p, g, t[e + 6], 9, -1069501632), d, p, t[e + 11], 14, 643717713), _, d, t[e], 20, -373897302), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 5], 5, -701558691), p, g, t[e + 10], 9, 38016083), d, p, t[e + 15], 14, -660478335), _, d, t[e + 4], 20, -405537848), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 9], 5, 568446438), p, g, t[e + 14], 9, -1019803690), d, p, t[e + 3], 14, -187363961), _, d, t[e + 8], 20, 1163531501), g = f(g, _ = f(_, d = f(d, p, g, _, t[e + 13], 5, -1444681467), p, g, t[e + 2], 9, -51403784), d, p, t[e + 7], 14, 1735328473), _, d, t[e + 12], 20, -1926607734), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 5], 4, -378558), p, g, t[e + 8], 11, -2022574463), d, p, t[e + 11], 16, 1839030562), _, d, t[e + 14], 23, -35309556), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 1], 4, -1530992060), p, g, t[e + 4], 11, 1272893353), d, p, t[e + 7], 16, -155497632), _, d, t[e + 10], 23, -1094730640), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 13], 4, 681279174), p, g, t[e], 11, -358537222), d, p, t[e + 3], 16, -722521979), _, d, t[e + 6], 23, 76029189), g = a(g, _ = a(_, d = a(d, p, g, _, t[e + 9], 4, -640364487), p, g, t[e + 12], 11, -421815835), d, p, t[e + 15], 16, 530742520), _, d, t[e + 2], 23, -995338651), g = i(g, _ = i(_, d = i(d, p, g, _, t[e], 6, -198630844), p, g, t[e + 7], 10, 1126891415), d, p, t[e + 14], 15, -1416354905), _, d, t[e + 5], 21, -57434055), g = i(g, _ = i(_, d = i(d, p, g, _, t[e + 12], 6, 1700485571), p, g, t[e + 3], 10, -1894986606), d, p, t[e + 10], 15, -1051523), _, d, t[e + 1], 21, -2054922799), g = i(g, _ = i(_, d = i(d, p, g, _, t[e + 8], 6, 1873313359), p, g, t[e + 15], 10, -30611744), d, p, t[e + 6], 15, -1560198380), _, d, t[e + 13], 21, 1309151649), g = i(g, _ = i(_, d = i(d, p, g, _, t[e + 4], 6, -145523070), p, g, t[e + 11], 10, -1120210379), d, p, t[e + 2], 15, 718787259), _, d, t[e + 9], 21, -343485551), d = r(d, o), p = r(p, c), g = r(g, l), _ = r(_, s); return [d, p, g, _] } function l(t) { var n, e = ""; for (n = 0; n < 32 * t.length; n += 8)e += String.fromCharCode(t[n >> 5] >>> n % 32 & 255); return e } function s(t) { var n, e = []; for (e[(t.length >> 2) - 1] = void 0, n = 0; n < e.length; n += 1)e[n] = 0; for (n = 0; n < 8 * t.length; n += 8)e[n >> 5] |= (255 & t.charCodeAt(n / 8)) << n % 32; return e } function d(t) { var n, e, r = "0123456789abcdef", o = ""; for (e = 0; e < t.length; e += 1)n = t.charCodeAt(e), o += r.charAt(n >>> 4 & 15) + r.charAt(15 & n); return o } function p(t) { return unescape(encodeURIComponent(t)) } function g(t) { return function (t) { return l(c(s(t), 8 * t.length)) }(p(t)) } function _(t, n) { return function (t, n) { var e, r, o = s(t), u = [], f = []; for (u[15] = f[15] = void 0, o.length > 16 && (o = c(o, 8 * t.length)), e = 0; e < 16; e += 1)u[e] = 909522486 ^ o[e], f[e] = 1549556828 ^ o[e]; return r = c(u.concat(s(n)), 512 + 8 * n.length), l(c(f.concat(r), 640)) }(p(t), p(n)) } function v(t, n, e) { return n ? e ? _(n, t) : function (t, n) { return d(_(t, n)) }(n, t) : e ? g(t) : function (t) { return d(g(t)) }(t) } n.__esModule = !0, n.getWorkloadResult = n.md5 = void 0, n.md5 = v, n.getWorkloadResult = function (t) { for (var n = t.nonce, e = t.target, r = +new Date, o = 0; o <= 3e5 && v("" + n + o) !== e;)o += 1; return { ans: o, duration: +new Date - r } } }, function (t, n, e) { "use strict"; n.__esModule = !0; n["default"] = { WORKER_READY: "WORKER_READY", RUN_TASK: "RUN_TASK", TASK_RESULT: "TASK_RESULT" } }]);`)
//     work.onmessage = function (msg) {
//         console.log('w msg', msg)
//     }
//     console.log(work.onmessage)
// }()


// let a = newFunc('get a', 1, ()=>{})
// print(a.toString())
// print(Object.getOwnPropertyNames(a))
// print((new a()).toString())
// print(navigator.mimeTypes.toString())
// print(navigator.mimeTypes)
// print(mimeArrays.toString())
// cbb_724 = [];
// cbb_724[0] = `
// debugger;
// if (typeof OffscreenCanvas !== "function") {
//   postMessage(false)
// }
// var canvas = new OffscreenCanvas(0, 0)
// var gl = getWebGL(canvas)
// if (!gl) {
//   postMessage(false)
// }
// this.onmessage = function (e) {
//   var segment = e.data.segment
//   try {
//     if (segment === "a" || segment === "b") {
//       var _e$data = e.data,
//         parameters = _e$data.parameters,
//         methods = _e$data.methods
//       var result = []
//       for (var i = 0; i < parameters.length; i++) {
//         result.push(gl[methods[0]](parameters[i]))
//       }
//       // print({ segment: segment, result: result })
//       // debugger
//       postMessage({ segment: segment, result: result })
//     } else if (segment === "c" || segment === "d") {
//       var _e$data2 = e.data,
//         _parameters = _e$data2.parameters,
//         extensions = _e$data2.extensions,
//         _methods = _e$data2.methods
//       var _result = []
//       var ext = false
//       for (var _i = 0; _i < extensions.length; _i++) {
//         ext = ext || gl[_methods[0]](extensions[_i])
//       }
//       if (ext) {
//         for (var _i2 = 0; _i2 < _parameters.length; _i2++) {
//           _result.push(gl[_methods[1]](ext[_parameters[_i2]]))
//         }
//       } else {
//         _result = -1
//       }
//       postMessage({ segment: segment, result: _result })
//     } else if (segment === "e") {
//       var _e$data3 = e.data,
//         _methods2 = _e$data3.methods,
//         properties = _e$data3.properties
//       var _result2 = (function (x) {
//         return x ? x[properties[0]] : false
//       })(gl[_methods2[0]]())
//       postMessage({ segment: segment, result: _result2 })
//     } else if (segment === "f") {
//       var _e$data4 = e.data,
//         _methods3 = _e$data4.methods,
//         shaderParams = _e$data4.shaderParams,
//         shaderFloatPrecision = _e$data4.shaderFloatPrecision,
//         shaderIntPrecision = _e$data4.shaderIntPrecision,
//         shaderProperties = _e$data4.shaderProperties
//       var _result3 = []
//       if (typeof gl[_methods3[0]] === "function") {
//         for (var _i3 = 0; _i3 < shaderParams.length; _i3++) {
//           for (var j = 0; j < shaderFloatPrecision.length; j++) {
//             var x = gl[_methods3[0]](shaderParams[_i3], shaderFloatPrecision[j])
//             x =
//               x == null
//                 ? ""
//                 : [
//                     x[shaderProperties[0]],
//                     x[shaderProperties[1]],
//                     x[shaderProperties[2]]
//                   ].join("")
//             _result3.push(x)
//           }
//         }
//         for (var _i4 = 0; _i4 < shaderParams.length; _i4++) {
//           for (var _j = 0; _j < shaderIntPrecision.length; _j++) {
//             var _x = gl[_methods3[0]](shaderParams[_i4], shaderIntPrecision[_j])
//             _x =
//               _x == null
//                 ? ""
//                 : [
//                     _x[shaderProperties[0]],
//                     _x[shaderProperties[1]],
//                     _x[shaderProperties[2]]
//                   ].join("")
//             _result3.push(_x)
//           }
//         }
//       } else {
//         _result3 = void 0
//       }
//       postMessage({ segment: segment, result: _result3 })
//     } else if (segment === "g") {
//       var _methods4 = e.data.methods
//       var _result4 = gl[_methods4[0]]() || []
//       postMessage({ segment: segment, result: _result4 })
//     } else if (segment === "h") {
//       var _result5 = []
//       for (var prop in gl) {
//         _result5.push(prop)
//       }
//       postMessage({ segment: segment, result: _result5 })
//     }
//   } catch (error) {
//   debugger;
//     postMessage(false)
//   }
// }
// function getWebGL(c) {
//   var graphicsLib = null
//   try {
//     graphicsLib = c.getContext("webgl") || c.getContext("experimental-webgl")
//   } catch (ignored) {}
//   return graphicsLib
// }
// debugger;
// `;
// cbb_725 = {};
// cbb_725["type"] = "text/javascript";
// b = new Blob(cbb_724, cbb_725)
// print(b)
// cbb_726 = URL.createObjectURL(b)
// print(cbb_726)
// print(cbb_726.href)
// bl_9 = new Worker(cbb_726,
//   )
// console.log(bl_9)
// bl_9.onmessage =  function (msg){
//     print('msg', msg)
// }
//
//
//        cbb_703 = {};
//         cbb_703["segment"] = "b";
//         cbb_704 = [];
//         cbb_704[0] = 3413;
//         cbb_704[1] = 3412;
//         cbb_704[2] = 3411;
//         cbb_704[3] = 3410;
//         cbb_704[4] = 3414;
//         cbb_704[5] = 35661;
//         cbb_704[6] = 34076;
//         cbb_704[7] = 36349;
//         cbb_704[8] = 34024;
//         cbb_704[9] = 34930;
//         cbb_704[10] = 3379;
//         cbb_704[11] = 36348;
//         cbb_704[12] = 34921;
//         cbb_704[13] = 35660;
//         cbb_704[14] = 36347;
//         cbb_704[15] = 7937;
//         cbb_704[16] = 35724;
//         cbb_704[17] = 3415;
//         cbb_704[18] = 7936;
//         cbb_704[19] = 7938;
//         cbb_703["parameters"] = cbb_704;
//         cbb_705 = [];
//         cbb_705[0] = "getParameter";
//         cbb_703["methods"] = cbb_705;
// bl_9.postMessage(cbb_703)
// // bl_9 = new Worker(cbb_726)
//
