// var {createAll, protectToString, newFunc, newObj, callback, Window, window, EventTarget, WindowProperties} = require('../utils');


//
// console.log(WindowProperties.toString())
// console.log(EventTarget.toString())
// console.log(window.toString())
// console.log(Window.toString())
// console.log(window.__proto__.__proto__.toString())
// console.log(Object.keys(Object.getOwnPropertyDescriptors(window.__proto__)))
// console.log(Object.keys(Object.getOwnPropertyDescriptors(Window)))
// console.log(Window.PERSISTENT)
// console.log(window.toString())
// console.log(window.__proto__.toString())


//
native_Window = function () {
    throw new TypeError('Illegal constructor')

}
Utils.registerNative('Window', 'Window')


Window = newFunc('Window', 1, function Window() {
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Window.prototype, {
    TEMPORARY: {
        value: 0, writable: false, enumerable: true, configurable: false,

    },
    PERSISTENT: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('Window.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


window = this
self = window

;(function () {
    // WindowProperties = newFunc('WindowProperties', 1, function WindowProperties(){})
    // native_WindowProperties = function () {
    //     throw new TypeError('Illegal constructor')
    //
    // }
    // Utils.registerNative('WindowProperties', 'WindowProperties')
    // WindowProperties.prototype = {}
    class WindowProperties {
    }

    delete WindowProperties.prototype.constructor
    delete WindowProperties.__proto__.constructor
    // protectToString(WindowProperties)
    // rename(WindowProperties.prototype, 'WindowProperties')
    // rename(Window.prototype, 'Window')
    WindowProperties.prototype = EventTarget
    // Object.setPrototypeOf(WindowProperties, EventTarget.prototype);
    // Object.setPrototypeOf(WindowProperties, EventTarget.prototype);
    // Object.setPrototypeOf(Window, WindowProperties);
    // Window.prototype = WindowProperties
    //   Object.setPrototypeOf(WindowProperties.prototype, EventTarget.prototype);

    Object.defineProperties(WindowProperties.prototype, {
        [Symbol.toStringTag]: {
            configurable: true, enumerable: false, writable: false,
            value: 'WindowProperties'
        },

    })
    Window.prototype.__proto__ = WindowProperties.prototype
    // Object.setPrototypeOf(Window.prototype, WindowProperties.prototype);
    Object.setPrototypeOf(Window, EventTarget);
    // Object.defineProperties(Window.prototype.__proto__, {
    //     constructor: {
    //         value: EventTarget,
    //         writable: true,
    //         configurable: false,
    //         enumerable:false
    //     }
    // })
    // Window.prototype.__proto__.constructor = EventTarget

    // debugger
    delete window.WindowProperties
}())


// Object.setPrototypeOf(Window, EventTarget);

window.constructor = Window;
window.__proto__ = Window.prototype;  // 这个有点特殊, 必须要强制指定原型链
// Object.defineProperties(window, {
//         hasAppend: {
//             value: true,
//             enumerable: false
//         },
//         window: {
//             get: newFunc('window', 0, function window() {
//                 // debugger;
//                 return this
//             }, {get: true}),
//             configurable: false,
//             enumerable: true,
//
//         },
//         parent: {
//             get: newFunc('parent', 0, function () {
//                 // debugger;
//                 print('parent.call')
//                 return window
//             }, {get: true}),
//             configurable: false,
//             enumerable: true,
//
//         },
//         innerWidth: {
//             get: newFunc('innerWidth', 2, function () {
//                 // debugger;
//                 if (!this.hasAppend) {
//                     return 0;
//                 }
//                 return 1728
//             }),
//             set: newFunc('innerWidth', 2, function (v) {
//
//             }, {set: true})
//         },
//         innerHeight: {
//             get: newFunc('innerHeight', 2, function () {
//                 // debugger;
//                 if (!this.hasAppend) {
//                     return 0;
//                 }
//                 return 916
//             }),
//             set: newFunc('innerHeight', 2, function (v) {
//
//             }, {set: true})
//         },
//         // document: {
//         //     get: newFunc('document', 0, function window() {
//         //         // debugger;
//         //         return document
//         //     }, {get: true}),
//         //     configurable: false,
//         //     enumerable: true,
//         //
//         // }
//     }
// )

// Object.defineProperty(window, 'parent', {
//     value: window,
//     configurable: false,
//     enumerable: true,
// })
Object.defineProperty(window, 'frames', {
    value: new Proxy({}, {
        get(target, p, receiver) {
            print('frames.get', p)
            // debugger;
            if (p.startsWith('a-')) {
                return window
            }
        }
    }),
    configurable: false,
    enumerable: true,
})
// console.log(window.__proto__ === Window)
// console.log(window.__proto__ === Window.prototype)
// console.log(window.__proto__.toString(), Window.prototype)
// console.log(Object.keys(Object.getOwnPropertyDescriptors(window.__proto__)).join('  '))
// console.log(Window.prototype)

// screenTop = ENV.windowparams.screentop
// screenLeft = ENV.windowparams.screenleft
// innerWidth = ENV.windowparams.innerwidth
// innerWidth = 0
// // innerHeight = ENV.windowparams.innerheight
// innerHeight = 0
// outerWidth = ENV.windowparams.outerwidth
// outerHeight = ENV.windowparams.outerheight

// if (proxy)
// window = mm.proxy(window, 'window')

window.matchMedia = newFunc('matchMedia', 1, function matchMedia(media) {
    return new MediaQueryList(media);
})
window.visualViewport = new VisualViewport();
window.devicePixelRatio = 2
// window.screenX = ENV.windowparams.screenx
window.screenX = 1728
window.screenY = ENV.windowparams.screeny
window.pageYOffset = ENV.windowparams.pageyoffset
// window.innerHeight = ENV.windowparams.innerheight
window.innerWidth = ENV.windowparams.innerWidth

window.screenX = 0
window.screenY = 38
window.screenTop = 38
window.screenLeft = 0;
// window.innerHeight = 0
// window.innerWidth = 0
window.outerWidth = 1728
window.outerHeight = 1003


window.MutationObserver = newFunc('MutationObserver', 1, function MutationObserver(callback) {
    mm.memory.private_data.set(this, {callback})
})
Object.defineProperties(window.MutationObserver.prototype, {
    [Symbol.toStringTag]: {
        value: 'MutationObserver'
    },
    disconnect: {
        value: newFunc('disconnect', 0, function disconnect() {
            let data = mm.memory.private_data.get(this)
            data.target = null
            data.options = null
            data.callback = null
            return undefined;
        })
    },
    observe: {
        value: newFunc('observe', 3, function observe(target, options) {
            let data = mm.memory.private_data.get(this)
            data.target = target
            data.options = options
            data.callback(mm.proxy({}, 'observe'))

        })
    },

    'takeRecords': {

        value: newFunc('takeRecords', 10, function () {

            if (!MutationObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MutationObserver.takeRecords.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!MutationObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MutationObserver.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

// DOMException = newFunc('DOMException', 1, function DOMException(){mm.memory.private_data.set(this, {})})
function DOMException(message) {
    this.message = message;
    this.name = 'DOMException';

    // Ensure stack trace works fine
    if (Error.captureStackTrace) {
        Error.captureStackTrace(this, DOMException);
    } else {
        this.stack = (new Error()).stack;
    }
    mm.memory.private_data.set(this, {
        message: message
    })
}

// 使用原型链继承 Error
DOMException.prototype = Object.create(Error.prototype);
DOMException.prototype.constructor = DOMException;
// class DOMException extends Error {
//     constructor(message) {
//         super(message);
//         this.name = 'DOMException';
//         debugger;
//         mm.memory.private_data.set(this, {})
//     }
// }

Object.defineProperties(DOMException.prototype, {
    code: {

        get: newFunc('code', 10, function code() {
            let res = mm.memory.private_data.get(this).code;
            if (debug) print('DOMException.code.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function name() {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('DOMException.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function message() {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('DOMException.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    INDEX_SIZE_ERR: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    DOMSTRING_SIZE_ERR: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    HIERARCHY_REQUEST_ERR: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    WRONG_DOCUMENT_ERR: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    INVALID_CHARACTER_ERR: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    NO_DATA_ALLOWED_ERR: {

        value: 6, writable: false, enumerable: true, configurable: false,


    },
    NO_MODIFICATION_ALLOWED_ERR: {

        value: 7, writable: false, enumerable: true, configurable: false,


    },
    NOT_FOUND_ERR: {

        value: 8, writable: false, enumerable: true, configurable: false,


    },
    NOT_SUPPORTED_ERR: {

        value: 9, writable: false, enumerable: true, configurable: false,


    },
    INUSE_ATTRIBUTE_ERR: {

        value: 10, writable: false, enumerable: true, configurable: false,


    },
    INVALID_STATE_ERR: {

        value: 11, writable: false, enumerable: true, configurable: false,


    },
    SYNTAX_ERR: {

        value: 12, writable: false, enumerable: true, configurable: false,


    },
    INVALID_MODIFICATION_ERR: {

        value: 13, writable: false, enumerable: true, configurable: false,


    },
    NAMESPACE_ERR: {

        value: 14, writable: false, enumerable: true, configurable: false,


    },
    INVALID_ACCESS_ERR: {

        value: 15, writable: false, enumerable: true, configurable: false,


    },
    VALIDATION_ERR: {

        value: 16, writable: false, enumerable: true, configurable: false,


    },
    TYPE_MISMATCH_ERR: {

        value: 17, writable: false, enumerable: true, configurable: false,


    },
    SECURITY_ERR: {

        value: 18, writable: false, enumerable: true, configurable: false,


    },
    NETWORK_ERR: {

        value: 19, writable: false, enumerable: true, configurable: false,


    },
    ABORT_ERR: {

        value: 20, writable: false, enumerable: true, configurable: false,


    },
    URL_MISMATCH_ERR: {

        value: 21, writable: false, enumerable: true, configurable: false,


    },
    QUOTA_EXCEEDED_ERR: {

        value: 22, writable: false, enumerable: true, configurable: false,


    },
    TIMEOUT_ERR: {

        value: 23, writable: false, enumerable: true, configurable: false,


    },
    INVALID_NODE_TYPE_ERR: {

        value: 24, writable: false, enumerable: true, configurable: false,


    },
    DATA_CLONE_ERR: {

        value: 25, writable: false, enumerable: true, configurable: false,


    },

})
window.structuredClone = newFunc('structuredClone', 1, function structuredClone(obj) {
    if (debug) print('window.structuredClone ', obj)
    // if (typeof obj ==='string') {
    //     return _structuredClone('/\u006d\u0069\u0067\u0075\u0065\u006c\u0077\u0061\u0073\u0068\u0065\u0072\u0065/')
    // }
    // debugger;
try{
        return _structuredClone(obj)
}catch (err){
    throw new Error('Failed to execute \'structuredClone\' on \'Window\': Navigator object could not be cloned. ')
}
    // if (obj instanceof Navigator) {
    //     throw new DOMException('Failed to execute \'structuredClone\' on \'Window\': Navigator object could not be cloned.')
    // }

})

window.PERSISTENT = 1;
window.TEMPORARY = 0;


Object.defineProperties(window, {
    onbeforeinstallprompt: {
        get: newFunc('onbeforeinstallprompt', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onbeforeinstallprompt', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onbeforexrselect: {
        get: newFunc('onbeforexrselect', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onbeforexrselect', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onbeforeinput: {
        get: newFunc('onbeforeinput', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onbeforeinput', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onbeforetoggle: {
        get: newFunc('onbeforetoggle', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onbeforetoggle', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onblur: {
        get: newFunc('onblur', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onblur', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onbeforeprint: {
        get: newFunc('onbeforeprint', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onbeforeprint', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onbeforeunload: {
        get: newFunc('onbeforeunload', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onbeforeunload', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onunhandledrejection: {
        get: newFunc('onunhandledrejection', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onunhandledrejection', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onunload: {
        get: newFunc('onunload', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onunload', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },
    onbeforematch: {
        get: newFunc('onbeforematch', 0, function onbeforeinstallprompt() {
        }, {get: true}),
        set: newFunc('onbeforematch', 1, function onbeforeinstallprompt() {
        }, {set: true}), configurable: true, enumerable: true,
    },

})

window.name = 'a-ge3ai9mzeer3'


mm.memory.private_data.set(mm.globalListeners, {
    listeners: new Map()
})


Object.defineProperty(window, 'self', {
    value: window,
    configurable: false,
    enumerable: true,
})
Object.defineProperty(window, 'top', {
    get: function () {
        print('window.top.get')
        return window
    },
    configurable: false,
    enumerable: true,
})

