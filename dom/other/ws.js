WebSocket = newFunc('WebSocket', 1, function () {
    print('WebSocket.call');
    mm.memory.private_data.set(this, {})
});


;delete WebSocket.prototype.constructor;
;
Object.defineProperties(WebSocket.prototype, {
    [Symbol.toStringTag]: {
        value: 'WebSocket'
    },

    'url': {

        get: newFunc('url', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['url'];
            if (debug) print('WebSocket.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'readyState': {

        get: newFunc('readyState', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['readyState'];
            if (debug) print('WebSocket.readyState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'bufferedAmount': {

        get: newFunc('bufferedAmount', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['bufferedAmount'];
            if (debug) print('WebSocket.bufferedAmount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onopen': {

        get: newFunc('onopen', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onopen'];
            if (debug) print('WebSocket.onopen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onopen', 1, function (value) {
            if (debug) print('WebSocket.onopen.set', value)
            mm.memory.private_data.get(this)['onopen'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onerror': {

        get: newFunc('onerror', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onerror'];
            if (debug) print('WebSocket.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('WebSocket.onerror.set', value)
            mm.memory.private_data.get(this)['onerror'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onclose': {

        get: newFunc('onclose', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onclose'];
            if (debug) print('WebSocket.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function (value) {
            if (debug) print('WebSocket.onclose.set', value)
            mm.memory.private_data.get(this)['onclose'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'extensions': {

        get: newFunc('extensions', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['extensions'];
            if (debug) print('WebSocket.extensions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'protocol': {

        get: newFunc('protocol', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['protocol'];
            if (debug) print('WebSocket.protocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onmessage': {

        get: newFunc('onmessage', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onmessage'];
            if (debug) print('WebSocket.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function (value) {
            if (debug) print('WebSocket.onmessage.set', value)
            mm.memory.private_data.get(this)['onmessage'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'binaryType': {

        get: newFunc('binaryType', 10, function () {


            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['binaryType'];
            if (debug) print('WebSocket.binaryType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('binaryType', 1, function (value) {
            if (debug) print('WebSocket.binaryType.set', value)
            mm.memory.private_data.get(this)['binaryType'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'CONNECTING': {},
    'OPEN': {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    'CLOSING': {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    'CLOSED': {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    'close': {

        value: newFunc('close', 10, function () {

            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('WebSocket.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'send': {

        value: newFunc('send', 10, function () {

            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('WebSocket.send.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!WebSocket.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('WebSocket.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


;WebSocketStream = newFunc('WebSocketStream', 1, function () {
    print('WebSocketStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebSocketStream.prototype, {
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('WebSocketStream.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    opened: {

        get: newFunc('opened', 10, function () {
            let res = mm.memory.private_data.get(this).opened;
            if (debug) print('WebSocketStream.opened.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    closed: {

        get: newFunc('closed', 10, function () {
            let res = mm.memory.private_data.get(this).closed;
            if (debug) print('WebSocketStream.closed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('WebSocketStream.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebSocketStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});