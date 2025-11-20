OffscreenCanvas = newFunc('OffscreenCanvas', 2, function OffscreenCanvas(width, height) {
    mm.memory.private_data.set(this, {
        width, height
    })
})

Object.defineProperties(OffscreenCanvas.prototype, {

    width: {

        get: newFunc('width', 10, function width() {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('OffscreenCanvas.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function width(value) {
            if (debug) print('OffscreenCanvas.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function height() {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('OffscreenCanvas.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function height(value) {
            if (debug) print('OffscreenCanvas.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextlost: {

        get: newFunc('oncontextlost', 10, function oncontextlost() {
            let res = mm.memory.private_data.get(this).oncontextlost;
            if (debug) print('OffscreenCanvas.oncontextlost.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextlost', 1, function oncontextlost(value) {
            if (debug) print('OffscreenCanvas.oncontextlost.set', value)
            mm.memory.private_data.get(this).oncontextlost = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextrestored: {

        get: newFunc('oncontextrestored', 10, function oncontextrestored() {
            let res = mm.memory.private_data.get(this).oncontextrestored;
            if (debug) print('OffscreenCanvas.oncontextrestored.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextrestored', 1, function oncontextrestored(value) {
            if (debug) print('OffscreenCanvas.oncontextrestored.set', value)
            mm.memory.private_data.get(this).oncontextrestored = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    convertToBlob: {

        value: newFunc('convertToBlob', 10, function convertToBlob() {
            if (debug) print('OffscreenCanvas.convertToBlob.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getContext: {

            value: newFunc('getContext', 10, function getContext(contextType) {
                // if (debug)

                    print('Offscreencanvas.getContext.call', arguments, this.context)
                // debugger;
                if (this.context == undefined) {

                    let context = {};
                    switch (contextType) {
                        case "webgl":
                            // this.canvas = cc.createCanvas(this.width, this.height);
                            context = new WebGLRenderingContext(mm.memory.$createObj_key, this)
                            break;
                        case "2d":
                            // this.canvas = cc.createCanvas(this.width, this.height);
                            this.context = this.canvas.getContext('2d')
                            // debugger;

                            context = new CanvasRenderingContext2D(mm.memory.$createObj_key, this)
                            break
                        case 'webgl2':
                            this.context = new WebGL2RenderingContext();
                            context = this.context
                            break
                        default:
                            context = null;
                    }
                    return context;

                    ;
                }

                return this.context;

            })
        ,
        writable: true, enumerable: true, configurable: true,


    },
    transferToImageBitmap: {

        value: newFunc('transferToImageBitmap', 10, function transferToImageBitmap() {
            if (debug) print('OffscreenCanvas.transferToImageBitmap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!OffscreenCanvas.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('OffscreenCanvas.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})