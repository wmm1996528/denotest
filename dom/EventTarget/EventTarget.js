function randint(a, b) {
    return parseInt(Math.random() * (b - a)) + a
}
EventTarget = newFunc("EventTarget", 0, function EventTarget() {
}, true)

Object.defineProperties(EventTarget.prototype, {


    addEventListener: {
        value: newFunc('addEventListener', 4, function (type, listener, options, useCapture) {
            if (type == 'click') {
                // debugger
                // listener(new PointerEvent())
            }
            // if(debug)
            print('EventTarget.prototype.addEventListener', type, listener, options, useCapture)
            print(new Error().stack)
            if (!mm.memory.allListeners.get(type)) {
                mm.memory.allListeners.set(type, [listener])
            } else {
                mm.memory.allListeners.get(type).push(listener)
            }
            if (this instanceof Window) {
                mm.memory.private_data.set(this, {})
                if (!mm.memory.private_data.get(mm.globalListeners).listeners.get(type)) {
                    mm.memory.private_data.get(mm.globalListeners).listeners.set(type, [])
                }
                mm.memory.private_data.get(mm.globalListeners).listeners.get(type).push({
                    listener: listener,
                    target: this,
                    options: options,
                    useCapture: useCapture
                })
            }
            if (!mm.memory.private_data.get(this).listeners) {
                mm.memory.private_data.get(this).listeners = new Map();
            }
            if (!mm.memory.private_data.get(this).listeners.has(type)) {
                mm.memory.private_data.get(this).listeners.set(type, [])
            }
            mm.memory.private_data.get(this).listeners.get(type).push({
                listener: listener,
                target: this,
                options: options,
                useCapture: useCapture
            })
            if (type === 'visibilitychange'
                // || type === 'load'
                // || type === 'message'
                || type === 'DOMContentLoaded') {
                debugger;
                listener.call(this, new Event('DOMContentLoaded', {target:document, currentTarget:document}))
                // listener(new Event(type, {
                //     srcElement: document,
                //     target: document,
                //     'data': 'KPSDK:DONE:02AmsQbR5EAvUrFIlybmgGWkNWJMQ7ViFZRwuRKrVQ0uPbCwTtb3o2U6bV1Z8WFYQhCppxpZhkHLvSwKJdYmnG03940BbdYeeMGUkSp5FO9kPdHnmvPkpT238BBjTq6pBmqIS3D6mZUDeW5cvR6wNLjT7IVtJxRNRINOaN5tpo::true:2:1723111837960:',
                //     'origin': domUrl,
                // }))

            }
            if (type === 'load'){
                mm.memory.private_data.get(this).onload = listener
            }
            if (this instanceof MessagePort && type === 'message') {
                // debugger
                // listener(new MessageEvent('recaptcha-setup'))
                // listener(new MessageEvent('["BeCLS9RnkQmkzZ12-c3Tjv0KQeDsoLFSsISyzig_kOzkkYV-vd2PotgzNfCckY026cC_Iphf1QyI3VkeONEfQ72jLLHxwVkSwZ2qi-xLiNRBjakqrc3O6-AzIbjxvcFu8YnD0tEveNyUkdhGtZmPhp1fccSpuY062MS_huUDXdjljLgyCL1uiv1fLaTh7LRGodHeupUbceDs1YVa-LW7lowzNfCggckq8a2GvtlPWK2QjZEy-bmWi-xfiRDY","z","beh09s3v7onv"]'))
            }
            // debugger
            // if (debug)
            print('EventTarget.prototype.addEventListener.listeners', type, mm.memory.private_data.get(this).listeners.get(type).length)

            // if (type === 'click' && this instanceof HTMLInputElement){
            //     let that = this;
            //     setTimeout(function (){
            //         let t = that;
            //         let e = new PointerEvent(
            //             t
            //         );
            //         e['width'] = 1;
            //         e['height'] = 1;
            //         e['isPrimary'] = false;
            //         e['isTrusted'] = true;
            //         e["pointerId"]= "1"
            //         e["pointerType"]= "mouse"
            //         e["pressure"]= "0"
            //         e["tangentialPressure"]= "0"
            //         listener(e)
            //     }, 100)
            // }


            let data = {
                data: {
                    "source": "cloudflare-challenge",
                    "widgetId": window.widgetId,
                    "event": "extraParams",
                    "action": "managed",
                    "cData": window.cray1,
                    "chlPageData": window.chlPageData,

                    "rcV": "",
                    "ch": window.ch,
                    "au": `https://challenges.cloudflare.com/turnstile/v0/${window._path}/${window.ch}/api.js?onload=${window.onl}&render=explicit`,
                    "url": "https://search.lionairthai.com/default.aspx?t=337",
                    "retry": "never",
                    "expiry-interval": 290000,
                    "retry-interval": 8000,
                    "refresh-expired": "never",
                    "refresh-timeout": "never",
                    "language": "auto",
                    "execution": "render",
                    "appearance": "always",
                    "wPr": {
                        "w.iW": 938,
                        "ht.atrs": ["lang", "dir"],
                        "pi": {
                            "ii": false,
                            "xp": "/div[1]/div[1]/div[1]/div[1]/div[1]",
                            "wp": "256|914",
                            "pfp": "htm_la_di>hea>tit>-tmet_ht_co>met_ht_co>met_na_co>met_na_co>sty>-tmet_ht_co>scr_sr>sty>-tscr_sr_as_de_cr>bod>div_cl_ro>div_cl>h1_cl>",
                            "sL": 3,
                            "ssL": 2,
                            "mL": 5,
                            "t": 2736320194,
                            "ffp": "nf",
                            "tL": 40,
                            "lH": "https://search.lionairthai.com/default.aspx?t=337",
                            "sR": true
                        }
                    },
                    "turnstileAgeMs": randint(1000, 1179) + .014999985695,
                    "widgetAgeMs": randint(789, 889) + .820000052452,
                    "upgradeAttempts": 0,
                    "upgradeCompletedCount": 0,
                    "timeRenderMs": 1 ,
                    "timeToInitMs": randint(822, 922) + .7699999809265,
                    "timeInitMs": 913,
                    "timeLoadInitMs": 11775,
                    "timeExtraParamsMs": 914,
                    "timeToParamsMs": Math.random(),
                    "tiefTimeMs": Math.random()
                },
                'origin': "https://search.lionairthai.com",
            };
            // listener(data)
            return undefined;


        }), enumerable: true, configurable: true
    },
    dispatchEvent: {
        value: newFunc('dispatchEvent', 1, function (event) {
            let type = event.type;
            // debugger;
            // if (this instanceof Window){
            //
            // }
            // print('dispatchEvent', event.type)
            // debugger;
            print('EventTarget.prototype.dispatchEvent', event.type, event)
            // debugger;

            let listeners
            if (this instanceof Window) {
                listeners = mm.memory.private_data.get(mm.globalListeners).listeners.get(type)
            } else if (mm.memory.private_data.get(this).listeners) {
                listeners = mm.memory.private_data.get(this).listeners.get(type);
            }else {
                listeners = mm.memory.allListeners.get(type)
            }
            // print('dispatchEvent', type, listeners)
            let result = false;
            if (!listeners) {
                listeners = mm.memory.allListeners.get(type);
            }
            if (!listeners) {
                return true;
            }
            print('EventTarget.prototype.dispatchEvent.listeners', event.type, listeners.length)

            for (let i = 0; i < listeners.length; i++) {
                print('EventTarget.prototype.dispatchEvent.call', listeners[i].listener)
                //debugger
                if (event.type === 'BbLLLcIGe') debugger;
                typeof listeners[i] ==='function' ? listeners[i](event) : listeners[i].listener(event)
                print('dispatchEvent.call', event, event.type)

                result = true;
            }
            return true;
        }), enumerable: true, configurable: true
    },
    removeEventListener: {
        value: newFunc('removeEventListener', 3, function (type, listener, options) {
            if (debug) print('EventTarget.prototype.removeEventListener', type, listener, options)
            if (!mm.memory.listeners.has(type)) {
                return;
            }
            let listeners = mm.memory.listeners.get(type);
            for (let i = 0; i < listeners; i++) {
                if (listeners[i].listener === listener) {
                    listeners.splice(i, 1);
                }
            }
            mm.memory.listeners.set(type, listeners)
        }), enumerable: true, configurable: true
    },
        constructor: {
        value: EventTarget,
        configurable: true,
        writable: true,
        enumerable: false
    },
})


// setInterval(function (){
//     mm.memory.allListeners.get('mouseover') && mm.memory.allListeners.get('mouseover')[0](new MouseEvent('mouseover',  createElementByName($('<div class="px-captcha-header">Before we continue...</div>'))))
//     // debugger
//     // dispatchEvent(new CustomEvent('pxCaptchaUIEvents'))
// },5000)