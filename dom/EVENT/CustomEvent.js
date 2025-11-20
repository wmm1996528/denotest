CustomEvent = newFunc('CustomEvent', 10, function CustomEvent(type, eventInitDict) {
    mm.memory.private_data.set(this, {
        bubbles: false,
        cancelBubble: false,
        cancelable: false,
        composed: false,
        currentTarget: null,
        defaultPrevented: false,
        eventPhase: 0,
        path: [],
        returnValue: true,
        srcElement: null,
        target: null,
        timeStamp: performance.now(),
        type: type,
    })
    Event.call(type, eventInitDict)
}, true)
Object.defineProperties(CustomEvent.prototype, {
        detail: {
        get: newFunc('detail', 10, function () {
            // debugger
            if (debug) print('CustomEvent.prototype.detail.get', this)
            // mm.memory.private_data.get(this).detail = detail;

            return this._detail
        }, {
            get: true
        }),
        configurable: true,
        enumerable: true,
    },
    initCustomEvent: {
        value: newFunc('initCustomEvent', 3, function initCustomEvent(type, bubbles, cancelable, detail) {
            if (debug) print('CustomEvent.prototype.initCustomEvent', type, detail)
            // this.type = type
            // mm.memory.private_data.get(this).detail = detail;
            this._detail = detail
            mm.memory.private_data.set(this, {
                bubbles: false,
                cancelBubble: false,
                cancelable: false,
                composed: false,
                currentTarget: null,
                defaultPrevented: false,
                eventPhase: 0,
                path: [],
                returnValue: true,
                srcElement: null,
                target: null,
                timeStamp: performance.now(),
                type: type,
                detail: detail
            })
            Event.call(this, type)

        }),
    },

    'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!CustomEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('CustomEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

Object.setPrototypeOf(CustomEvent.prototype, Event.prototype)
Object.setPrototypeOf(CustomEvent, Event)
// Object.defineProperty(CustomEvent, 'prototype', Event.prototype)
// Object.defineProperty(CustomEvent.prototype, 'constructor', Event);

if (proxy) CustomEvent = mm.proxy(CustomEvent, 'CustomEvent')
