Screen = newFunc('Screen', 10, function Screen(a) {
    mm.memory.private_data.set(this, {
        availHeight: 1003,
        availLeft: 0,
        // availTop: ENV.screenparams.availtop,
        availTop: 38,
        availWidth: 1728,
        colorDepth: 30,
        height: 1117,
        orientation: new ScreenOrientation(mm.memory.$createObj_key),
        pixelDepth: 30,
        width: 1728
    })
    if (a!== 0)throw new TypeError("Illegal constructor");


})
ScreenOrientation = newFunc('ScreenOrientation', 1, function ScreenOrientation() {
    mm.memory.private_data.set(this, {
        type: 'landscape-primary',
        angle: 0,

    })
})
Object.defineProperties(ScreenOrientation.prototype, {
    angle: {

        get: newFunc('angle', 10, function angle() {
            let res = mm.memory.private_data.get(this).angle;
            if (debug) print('ScreenOrientation.angle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function type() {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('ScreenOrientation.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onchange: {

        get: newFunc('onchange', 10, function onchange() {
            let res = mm.memory.private_data.get(this).onchange || null;
            if (debug) print('ScreenOrientation.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function onchange(value) {
            if (debug) print('ScreenOrientation.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lock: {

        value: newFunc('lock', 10, function lock() {
            if (debug) print('ScreenOrientation.lock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unlock: {

        value: newFunc('unlock', 10, function unlock() {
            if (debug) print('ScreenOrientation.unlock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('ScreenOrientation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
screen = new Screen(0);
;(function () {
    // const $attribute_map = {
    //     availHeight: ENV.screenparams.availheight,
    //     availLeft: 1728,
    //     // availTop: ENV.screenparams.availtop,
    //     availTop: 25,
    //     availWidth: ENV.screenparams.availwidth,
    //     colorDepth: ENV.screenparams.colordepth,
    //     height: ENV.screenparams.height,
    //     orientation: new ScreenOrientation(mm.memory.$createObj_key),
    //     pixelDepth: ENV.screenparams.pixeldepth,
    //     width: ENV.screenparams.width
    // };
    // window['native_get width'] = function width() {
    //
    // }
    // Utils.registerNative('get width', 'get width')

    window['native_get height'] = function height() {
        Utils.registerNative('get height', 'get height')

        if (!Screen.prototype.isPrototypeOf(this)) {
            throw new TypeError("Illegal constructor");
        }
        ;
        let result = $attribute_map.height;
        if (debug) print('Get', 'Screen', 'height', arguments, result);
        return result;
    }
    Utils.registerNative('get height', 'get height')
    const $attribute_map = {
        availHeight: 1003,
        availLeft: 0,
        // availTop: ENV.screenparams.availtop,
        availTop: 38,
        availWidth: 1728,
        colorDepth: 30,
        height: 1117,
        orientation: new ScreenOrientation(mm.memory.$createObj_key),
        pixelDepth: 30,
        width: 1728
    };
    Object.defineProperties(Screen.prototype, {
        availWidth: {

            get: newFunc('availWidth', 10, function availWidth() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).availWidth;
                if (debug) print('Screen.availWidth.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        availHeight: {

            get: newFunc('availHeight', 10, function availHeight() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).availHeight;
                if (debug) print('Screen.availHeight.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        width: {

            get: createNativeFunc('get width', 0, function (){
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                let result = $attribute_map.width;
                if (debug) print('Get', 'Screen', 'width', arguments, result);
                return $attribute_map.width;
            }), enumerable: true, configurable: true,

        },
        height: {

            get: window['native_get height'], enumerable: true, configurable: true,

        },
        colorDepth: {

            get: newFunc('colorDepth', 10, function colorDepth() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).colorDepth;
                if (debug) print('Screen.colorDepth.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        pixelDepth: {

            get: newFunc('pixelDepth', 10, function pixelDepth() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).pixelDepth;
                if (debug) print('Screen.pixelDepth.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        availLeft: {

            get: newFunc('availLeft', 10, function availLeft() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                 if (!Screen.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
                let res = mm.memory.private_data.get(this).availLeft;
                if (debug) print('Screen.availLeft.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        availTop: {

            get: newFunc('availTop', 10, function availTop() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).availTop;
                if (debug) print('Screen.availTop.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        orientation: {

            get: newFunc('orientation', 10, function orientation() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).orientation;
                if (debug) print('Screen.orientation.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('Screen.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
        onchange: {

            get: newFunc('onchange', 10, function onchange() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).onchange || null;
                if (debug) print('Screen.onchange.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onchange', 1, function onchange(value) {
                if (debug) print('Screen.onchange.set', value)
                mm.memory.private_data.get(this).onchange = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        isExtended: {

            get: newFunc('isExtended', 10, function isExtended() {
                if (!Screen.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).isExtended || true;
                if (debug) print('Screen.isExtended.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
    })


    // mm.rename(Screen.prototype, "Screen");
    // mm.safeDescriptor_addConstructor(Screen);

    Object.setPrototypeOf(screen, Screen.prototype);

})();
if (proxy) screen = mm.proxy(screen, 'screen')



StyleMedia = newFunc('StyleMedia', 1, function (){print('StyleMedia.call');mm.memory.private_data.set(this, {
    type: 'screen'
})})


Object.defineProperties(StyleMedia.prototype, {
    [Symbol.toStringTag]:{
        value:'StyleMedia'
    },

'type': {

                  get: newFunc('type', 10, function (){


                    if (!StyleMedia.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['type'];
            if (debug)print('StyleMedia.type.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'matchMedium': {

            value: newFunc('matchMedium', 10, function () {

                      if (!StyleMedia.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('StyleMedia.matchMedium.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
})
styleMedia = new StyleMedia();