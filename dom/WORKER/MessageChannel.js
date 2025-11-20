class DataCloneError extends Error {
    constructor(message) {
        super(message);
        this.name = this.constructor.name;
        // 可以添加更多的自定义属性
    }
}

window.postMessage = newFunc('postMessage', 5, function postMessage(type, eve) {
    // if (debug)
    let obj = arguments[0];
    if (obj instanceof PluginArray) {
        throw new DOMException('Failed to execute \'postMessage\' on \'Window\': PluginArray object could not be cloned.')
    }
    print('window.postMessage', type, eve)
    let listeners = mm.memory.allListeners.get('message');
    print('postMessage.call', arguments, listeners.length)

    if (listeners !== undefined) {
        for (let i = 0; i < listeners.length; i++) {
            let params = {};

            params['source'] = 'cloudflare-challenge'
            params['event'] = ''
            params['widgetId'] = 'ckf81';
            params['data'] = type
            debugger;
            let requestExtraParams = new Proxy(params, {
                get(target, p, receiver) {
                    let res = Reflect.get(target, p, receiver);
                    print(target, 'requestExtraParams1.get', p, '=', res === undefined);
                    return res;
                }
            })
            print(listeners[i].toString())
            listeners[i](requestExtraParams)
        }
    }

    function randint(a, b) {
        return parseInt(Math.random() * (b - a) + b)
    }

    if (obj['source'] === 'cloudflare-challenge') {
        if (obj['event'] === 'requestExtraParams' && eve === '*') {
            let listeners = mm.memory.allListeners.get('message');
            if (listeners !== undefined) {
                for (let i = 0; i < listeners.length; i++) {
                    let turnstileAgeMs = randint(811, 911);
                    let requestExtraParams = {
                        "source": "cloudflare-challenge",
                        "widgetId": "ckf81",
                        "event": "extraParams",
                        "action": "managed",
                        "cData": window.cray1,
                        "chlPageData": window.chlPageData,
                        "rcV": "",
                        "ch": "e7e9d014f96e",
                        "au": window.apiUrl,
                        "url": window.targetUrl,
                        "retry": "never",
                        "expiry-interval": 290000,
                        "retry-interval": 8000,
                        "refresh-expired": "never",
                        "refresh-timeout": "never",
                        "language": "auto",
                        "execution": "render",
                        "appearance": "always",
                        "wPr": {
                            "w.iW": 1920,
                            "ht.atrs": [
                                "lang",
                                "dir"
                            ],
                            "pi": {
                                "ii": false,
                                "xp": "/div[1]/div[1]/div[1]/div[1]/div[1]",
                                "wp": "256|1416",
                                "pfp": "htm_la_di>hea>tit>-tmet_ht_co>met_ht_co>met_na_co>met_na_co>sty>-tmet_ht_co>scr_sr>sty>-tscr_sr_as_de_cr>bod>div_cl_ro>div_cl>h1_cl>",
                                "sL": 3,
                                "ssL": 2,
                                "mL": 5,
                                "t": 2736320194,
                                "ffp": "nf",
                                "tL": 42,
                                "lH": "https://search.lionairthai.com/SL/StartOver.aspx",
                                "sR": true
                            }
                        },
                        "turnstileAgeMs": turnstileAgeMs+.119999999646,
                        "widgetAgeMs": turnstileAgeMs - randint(3,8)+.959999999963,
                        "upgradeAttempts": 0,
                        "upgradeCompletedCount": 0,
                        "timeTiefMs": 1,
                        'timeParamsMs':1,
                        "timeInitMs": 913,
                        "timeLoadInitMs": 11775,
                        "timeExtraParamsMs": 914,
                        "timeRenderMs": randint(1,2),
                        "timeToInitMs": turnstileAgeMs - randint(3,8)+.1699999999255,
                        "timeToParamsMs": 0.22000000020489097,
                        "tiefTimeMs": turnstileAgeMs - randint(3,8)+.6650000000373
                    };
                    requestExtraParams = new Proxy(requestExtraParams, {
                        get(target, p, receiver) {
                            let res = Reflect.get(target, p, receiver);
                            print('requestExtraParams.get', p, '=', res === undefined);
                            return res;
                        }
                    })
                    // debugger;
                    listeners[i]({
                        data: requestExtraParams,
                        isTrusted: true,
                        origin: '',
                        source: "cloudflare-challenge",
                        event: 'extraParams',
                        widgetId: 'ckf81'
                    })
                }
            }

            // debugger;
        }
    }
    if (typeof type === 'object') {
        let workerEventListeners = mm.memory.allListeners.get('worker');
        if (workerEventListeners !== undefined) {
            for (let i = 0; i < workerEventListeners.length; i++) {
                print('postMessage.func', i, workerEventListeners[i]);
                if (i === 3) {
                    // continue
                }
                let params = {};
                params['source'] = 'cloudflare-challenge'
                params['event'] = ''
                params['widgetId'] = 'ckf81';
                params['data'] = type
                let requestExtraParams = new Proxy(params, {
                    get(target, p, receiver) {
                        let res = Reflect.get(target, p, receiver);
                        print('requestExtraParams2.get', p, '=', res === undefined, '\n',res);
                        // print(new Error().stack)
                        return res;
                    }
                })
                        if (workerEventListeners[i].terminate){
                            return
                        }
                // debugger;
                workerEventListeners[i](requestExtraParams)

            }
        }

        return;

    }

    // if (type === 'message') {
    //     let listeners = mm.memory.allListeners.get('message');
    //     if (listeners !== undefined) {
    //         for (let i = 0; i < listeners.length; i++) {
    //             listeners[i](eve)
    //         }
    //
    //
    //     }
    //
    // }
    let workerEventListeners = mm.memory.allListeners.get('worker');
    // if (workerEventListeners !== undefined) {
    //     for (let i = 0; i < workerEventListeners.length; i++) {
    //         print('worker', i)
    //         print('postMessage.func2', i, workerEventListeners[i]);
    //         if (workerEventListeners[i].terminate){
    //             return
    //         }
    //         if (i === 3) {
    //             // continue
    //         }
    //         let params = {};
    //         params['source'] = 'cloudflare-challenge'
    //         params['event'] = ''
    //         params['widgetId'] = 'ckf81';
    //         params['data'] = type
    //         let requestExtraParams = new Proxy(params, {
    //             get(target, p, receiver) {
    //                 let res = Reflect.get(target, p, receiver);
    //                 print('requestExtraParams3.get', p, '=', res === undefined,'\n', res);
    //                 // print(new Error().stack)
    //
    //                 return res;
    //             }
    //         })
    //
    //         workerEventListeners[i](requestExtraParams)
    //
    //     }
    // }
    // print(mm.memory.listeners,)
})


MessagePort = newFunc('MessagePort', 1, function MessagePort(t) {
    // print('new MessagePort', t)
    mm.memory.private_data.set(this, {
        onmessage: null,
        onmessageerror: null,
        port: t,
        ports:[this]
    })
})


;delete MessagePort.prototype.constructor;
;
Object.defineProperties(MessagePort.prototype, {
    [Symbol.toStringTag]: {
        value: 'MessagePort'
    },

    'onmessage': {

        get: newFunc('onmessage', 10, function () {


            if (!MessagePort.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onmessage'];
            if (debug) print('MessagePort.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function (value) {
            if (debug) print('MessagePort.onmessage.set', value)
            mm.memory.private_data.get(this)['onmessage'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onmessageerror': {

        get: newFunc('onmessageerror', 10, function () {


            if (!MessagePort.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onmessageerror'];
            if (debug) print('MessagePort.onmessageerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessageerror', 1, function (value) {
            if (debug) print('MessagePort.onmessageerror.set', value)
            mm.memory.private_data.get(this)['onmessageerror'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'close': {

        value: newFunc('close', 10, function () {

            if (!MessagePort.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MessagePort.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'postMessage': {

        value: newFunc('postMessage', 10, function () {

            if (!MessagePort.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MessagePort.postMessage.call', arguments)
            if (typeof mm.memory.private_data.get(this).onmessage === 'function' ){
                mm.memory.private_data.get(this).onmessage({data:arguments[0]})
            }

        }), writable: true, enumerable: true, configurable: true,


    },
    'start': {

        value: newFunc('start', 10, function () {

            if (!MessagePort.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MessagePort.start.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!MessagePort.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MessagePort.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    ports:{
        get: newFunc('ports', 10, function () {


            if (!MessagePort.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ports'];
            if (debug) print('MessagePort.ports.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


    }
})

Object.setPrototypeOf(MessagePort, EventTarget)
Object.setPrototypeOf(MessagePort.prototype, EventTarget.prototype)
MessagePort.__proto__ = EventTarget.prototype


MessageChannel = newFunc('MessageChannel', 5, function MessageChannel() {
    if (debug) print('MessageChannel.call', arguments)
    mm.memory.private_data.set(this, {
        port1: new MessagePort(1),
        port2: new MessagePort(2),
    })
})


Object.defineProperties(MessageChannel.prototype, {
    port1: {

        get: newFunc('port1', 10, function port1() {
            let res = mm.memory.private_data.get(this).port1;
            if (debug) print('MessageChannel.port1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    port2: {

        get: newFunc('port2', 10, function port2() {
            let res = mm.memory.private_data.get(this).port2;
            if (debug) print('MessageChannel.port2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {
        value: () => {
        }
    }

})


MessageEvent = newFunc('MessageEvent', 1, function MessageEvent(data) {
    if (debug) print('MessageEvent.call', arguments)
    mm.memory.private_data.set(this, {
        data: data,
        origin: null,
        lastEventId: null,
        source: null,
        ports: null,
        userActivation: null,
    })
})


;delete MessageEvent.prototype.constructor;
;
Object.defineProperties(MessageEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'MessageEvent'
    },

    'data': {

        get: newFunc('data', 10, function () {


            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['data'];
            if (debug) print('MessageEvent.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'origin': {

        get: newFunc('origin', 10, function () {


            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['origin'];
            if (debug) print('MessageEvent.origin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'lastEventId': {

        get: newFunc('lastEventId', 10, function () {


            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['lastEventId'];
            if (debug) print('MessageEvent.lastEventId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'source': {

        get: newFunc('source', 10, function () {


            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['source'];
            if (debug) print('MessageEvent.source.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'ports': {

        get: newFunc('ports', 10, function () {


            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ports'];
            if (debug) print('MessageEvent.ports.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'userActivation': {

        get: newFunc('userActivation', 10, function () {


            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['userActivation'];
            if (debug) print('MessageEvent.userActivation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'initMessageEvent': {

        value: newFunc('initMessageEvent', 10, function () {

            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MessageEvent.initMessageEvent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!MessageEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MessageEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.setPrototypeOf(MessageEvent, Event)
Object.setPrototypeOf(MessageEvent.prototype, Event.prototype)
MessageEvent.__proto__ = Event.prototype