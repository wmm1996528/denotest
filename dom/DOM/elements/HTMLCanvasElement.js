HTMLCanvasElement = newFunc("HTMLCanvasElement", 1, function HTMLCanvasElement(createObj_key) {
    //   if (createObj_key !== mm.memory.$createObj_key) {
    //     throw new TypeError("Illegal constructor");
    // }
    mm.memory.private_data.set(this, {
        canvas: null
    })
    this.canvas = null;
    // //HTMLElement.call(this)
    // debugger;
})

window['native_toBlob'] = function toBlob() {
    if (debug) print('HTMLCanvasElement.toBlob.call', arguments)

}
Utils.registerNative('toBlob', 'toBlob')

window['native_getContext'] = function getContext(contextType) {
    if (debug) print('HTMLCanvasElement.getContext.call', arguments)
    if (!this.context) {
        // debugger
        let context = {};
        switch (contextType) {
            case "webgl":
                // this.canvas = cc.createCanvas(this.width, this.height);
                context = new WebGLRenderingContext(mm.memory.$createObj_key, this)
                break;
            case "2d":
                // this.canvas = cc.createCanvas(this.width || 150, this.height || 60);
                this.context = this.canvas.getContext('2d')
                // debugger;
                context = new CanvasRenderingContext2D(mm.memory.$createObj_key, this)
                break
            default:
                context = null;
        }
        debugger;
        try {
            mm.memory.private_data.get(this).context = context
        } catch (e) {

        }
        return context;

        ;
    }

    return this.context;

}
Utils.registerNative('getContext', 'getContext')

window['native_toDataURL'] = function toDataURL(type, encoderOptions) {
    let result = ENV.jpg
    if (this.width <= 10 && this.height <= 10) {
        result = ENV.jpg2.url
    }
    // if (this.width === 4 && this.height === 4) {
    //     // result = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAYAAACp8Z5+AAAAAXNSR0IArs4c6QAAAA9JREFUGFdjZEADjKQLAAAA7gAFLaYDxAAAAABJRU5ErkJggg=="
    //             result = ENV.jpg2.url
    //
    // }
    // debugger
    let res = result.split(';');
    // debugger
    if (type) {
        result =  'data:' + type + ';' + res[1];

    }
    // else{
    //     result = res;
    // }
    // result = 'data:image/png;base64,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';
    if (debug) print('HTMLCanvasElement.toDataURL.call',[type, encoderOptions], this.width, this.height, result)

    return result
}
Utils.registerNative('toDataURL', 'toDataURL')

;(function () {
    const $safe_get_attribute = ['height', 'width'];
    const $safe_set_attribute = ['height', 'width'];
    const $safe_func_attribute = ['captureStream', 'getContext', 'toBlob', 'toDataURL', 'transferControlToOffscreen'];

    Object.defineProperties(HTMLCanvasElement.prototype, {
            [Symbol.toStringTag]:{value:'HTMLCanvasElement'},

        width: {

            get: newFunc('width', 10, function width() {
                if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                // debugger;
                let res = mm.memory.private_data.get(this).width  || 300
                if (debug) print('HTMLCanvasElement.width.get', res)

                return res;
            }, {get: true}),

            set: newFunc('width', 1, function width(value) {
                if (debug) print('HTMLCanvasElement.width.set', value)
                mm.memory.private_data.get(this).width = value

            }, {set: true})


        },
        height: {

            get: newFunc('height', 10, function height() {
                if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal invocation");
                }
                // debugger;
                let res = mm.memory.private_data.get(this).height || 300
                if (debug) print('HTMLCanvasElement.height.get', res)

                return res;
            }, {get: true}),

            set: newFunc('height', 1, function height(value) {
                if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal invocation");
                }
                if (debug) print('HTMLCanvasElement.height.set', value)
                // debugger
                mm.memory.private_data.get(this).height = value

            }, {set: true})


        },
        captureStream: {

            value: newFunc('captureStream', 10, function captureStream() {
                if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal invocation");
                }
                if (debug) print('HTMLCanvasElement.captureStream.call', arguments)

            })


        },
        getContext: {

            value: window['getContext']


        },
        toBlob: {

            value: window['toBlob']
            , writable: true, enumerable: true, configurable: true,


        },
        toDataURL: {

            value: window['toDataURL']
            , writable: true, enumerable: true, configurable: true,


        },
        transferControlToOffscreen: {

            value: newFunc('transferControlToOffscreen', 10, function transferControlToOffscreen() {
                if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal invocation");
                }
                if (debug) print('HTMLCanvasElement.transferControlToOffscreen.call', arguments)

            })


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (!HTMLCanvasElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal invocation");
                }
                if (debug) print('HTMLCanvasElement.constructor.call', arguments)

            })


        },
    })

    // mm.rename(HTMLCanvasElement.prototype, "HTMLCanvasElement");
    // mm.safeDescriptor_addConstructor(HTMLCanvasElement);
    // mm.safe_Objattribute(HTMLCanvasElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    // HTMLCanvasElement.prototype.constructor = HTMLElement.constructor
    Object.setPrototypeOf(HTMLCanvasElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLCanvasElement, HTMLElement);
    // HTMLCanvasElement.__proto__ = HTMLElement.prototype

})();


mm.memory.htmlElements["canvas"] = function () {
    return new HTMLCanvasElement(mm.memory.$createObj_key);
}


