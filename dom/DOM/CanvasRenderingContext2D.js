CanvasRenderingContext2D = newFunc('CanvasRenderingContext2D', 2, function CanvasRenderingContext2D(key, canvas) {
    if(debug)print('CanvasRenderingContext2D.new', arguments)
    mm.memory.private_data.set(this, {
        canvas: canvas,
        context: canvas.context
    })
})
ImageData = newFunc('ImageData', 4, function ImageData(w, h, settings, data) {
    mm.memory.private_data.set(this, {
        width: w,
        height: h,
        settings: settings,
        data: new Uint8ClampedArray(w * h * 4),
        colorSpace:'srgb',
    })
});
; delete ImageData.prototype.constructor;
;
Object.defineProperties(ImageData.prototype, {
    [Symbol.toStringTag]:{
        value:'ImageData'
    },

    'width': {

        get: createNativeFunc('width', 10, function (){


            if (!ImageData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['width'];
            if (debug)print('ImageData.width.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'height': {

        get: createNativeFunc('height', 10, function (){


            if (!ImageData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['height'];
            if (debug)print('ImageData.height.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'colorSpace': {

        get: createNativeFunc('colorSpace', 10, function (){


            if (!ImageData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['colorSpace'];
            if (debug)print('ImageData.colorSpace.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'data': {

        get: createNativeFunc('data', 10, function (){


            if (!ImageData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['data'];
            if (debug)print('ImageData.data.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'pixelFormat': {

        get: createNativeFunc('pixelFormat', 10, function (){


            if (!ImageData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['pixelFormat'];
            if (debug)print('ImageData.pixelFormat.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },

})

window['native_get font'] = newFunc('font', 0, function () {
    if (debug) print('CanvasRenderingContext2D.font.get')
    return mm.memory.private_data.get(this).font
}, {get: true})
Utils.registerNative('get font', 'get font')


window['native_get fillStyle'] = function fillStyle() {
    if (debug) print('CanvasRenderingContext2D.fillStyle.get')
    return mm.memory.private_data.get(this).fillStyle
}


Utils.registerNative('get fillStyle', 'get fillStyle')
window['native_get strokeStyle'] = function strokeStyle() {
    if (debug) print('CanvasRenderingContext2D.strokeStyle.get')
    return mm.memory.private_data.get(this).strokeStyle
}
Utils.registerNative('get strokeStyle', 'get strokeStyle')

window['native_getImageData'] = function getImageData(sx, sy, sw, sh) {
    if (debug) print('CanvasRenderingContext2D.getImageData.call', sx, sy, sw, sh)
    // debugger;
    // let res = mm.memory.private_data.get(this).context &&  mm.memory.private_data.get(this).context.getImageData(sx, sy, sw, sh);
    let res = undefined;
    if (res == undefined) {
        res = new ImageData(sw, sh)
    }
    let data = imageDatas[[sx, sy, sw, sh] + ''];
    // if (sw === 1 && sw === 1) {
    //     data = [0, 0, 0, 255]
    //     for (let i = 0; i < data.length; i++) {
    //         res.data.fill(data[i], i, i + 1)
    //     }
    // }
    if (sw === 5&& sh === 5){
        debugger;

    }
    // if (data !== undefined){
    //     for (let i = 0; i < data.length; i++) {
    //         let t = data[i] !== 0?  data[i]+ parseInt(Math.random() * 2) : data[i]
    //         // let t = data[i]
    //         res.data.fill(t, i, i + 1)
    //     }
    // }
    if (debug) print('CanvasRenderingContext2D.getImageData.call', sx, sy, sw, sh, '=>>', res)

    return res;
}
Utils.registerNative('getImageData', 'getImageData')
window['native_fillText'] = function fillText(text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.fillText.call', arguments)
    mm.memory.private_data.get(this).fillText = [text, x, y, maxWidth]
    // debugger;
    mm.memory.private_data.get(this).context.fillText(text, x, y, maxWidth)

}

Utils.registerNative('fillText', 'fillText')


window['native_arc'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.arc.call', x, y, radius, startAngle, endAngle, anticlockwise)
    mm.memory.private_data.get(this).context.arc(x, y, radius, startAngle, endAngle, anticlockwise)

}

Utils.registerNative('arc', 'arc')

window['native_beginPath'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.beginPath.call', arguments)
    mm.memory.private_data.get(this).context.beginPath()
}

Utils.registerNative('beginPath', 'beginPath')
window['native_bezierCurveTo'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.bezierCurveTo.call', arguments)

}

Utils.registerNative('bezierCurveTo', 'bezierCurveTo')
window['native_createRadialGradient'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.createRadialGradient.call', arguments)
    return new CanvasGradient()
}

Utils.registerNative('createRadialGradient', 'createRadialGradient')
window['native_ellipse'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.ellipse.call', arguments)

}

Utils.registerNative('ellipse', 'ellipse')
window['native_fill'] = function (path, fillRule) {
    if (debug) print('CanvasRenderingContext2D.fill.call', path, fillRule)
    mm.memory.private_data.get(this).context.fill(path, fillRule)
}

Utils.registerNative('fill', 'fill')
window['native_moveTo'] = function (x, y) {
    if (debug) print('CanvasRenderingContext2D.moveTo.call', x, y)
    mm.memory.private_data.get(this).context.moveTo(x, y)
}

Utils.registerNative('moveTo', 'moveTo')
window['native_quadraticCurveTo'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.quadraticCurveTo.call', x, y)
    // mm.memory.private_data.get(this).context.moveTo(x, y)
}

Utils.registerNative('quadraticCurveTo', 'quadraticCurveTo')
window['native_stroke'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.stroke.call', arguments)
    mm.memory.private_data.get(this).context.stroke()    // mm.memory.private_data.get(this).context.moveTo(x, y)
}

Utils.registerNative('stroke', 'stroke')
window['native_strokeText'] = function (text, x, y, maxWidth) {
    if (debug) print('CanvasRenderingContext2D.strokeText.call', arguments)
    // mm.memory.private_data.get(this).context.stroke()    // mm.memory.private_data.get(this).context.moveTo(x, y)
}

Utils.registerNative('strokeText', 'strokeText')


;(function () {
    const $safe_get_attribute = [
        'canvas', 'direction', 'fillStyle', 'filter', 'font', 'globalAlpha', 'globalCompositeOperation', 'imageSmoothingEnabled', 'imageSmoothingQuality',
        'lineCap', 'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle',
        'textAlign', 'textBaseline'
    ];
    const $safe_set_attribute = [
        'direction', 'fillStyle', 'filter', 'font', 'globalAlpha', 'globalCompositeOperation', 'imageSmoothingEnabled', 'imageSmoothingQuality', 'lineCap',
        'lineDashOffset', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowBlur', 'shadowColor', 'shadowOffsetX', 'shadowOffsetY', 'strokeStyle', 'textAlign',
        'textBaseline'
    ];
    const $safe_func_attribute = [
        'arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'clip', 'closePath', 'createImageData', 'createLinearGradient', 'createPattern',
        'createRadialGradient', 'drawFocusIfNeeded', 'drawImage', 'ellipse', 'fill', 'fillRect', 'fillText', 'getContextAttributes', 'getImageData',
        'getLineDash', 'getTransform', 'isPointInPath', 'isPointInStroke', 'lineTo', 'measureText', 'moveTo', 'putImageData', 'quadraticCurveTo', 'rect',
        'resetTransform', 'restore', 'rotate', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeRect', 'strokeText', 'transform',
        'translate'
    ];


    // mm.rename(CanvasRenderingContext2D.prototype, "CanvasRenderingContext2D");
    // mm.safeDescriptor_addConstructor(CanvasRenderingContext2D);
    // mm.safe_Objattribute(CanvasRenderingContext2D, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
    Object.defineProperties(CanvasRenderingContext2D.prototype, {

        canvas: {

            get: newFunc('canvas', 10, function canvas() {
                if (debug) print('CanvasRenderingContext2D.canvas.get')
                return mm.memory.private_data.get(this).canvas
            }, {get: true}), enumerable: true, configurable: true,

        },
        globalAlpha: {

            get: newFunc('globalAlpha', 10, function globalAlpha() {
                if (debug) print('CanvasRenderingContext2D.globalAlpha.get')
                return mm.memory.private_data.get(this).globalAlpha
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('globalAlpha', 1, function globalAlpha(value) {
                if (debug) print('CanvasRenderingContext2D.globalAlpha.set', value)
                mm.memory.private_data.get(this).globalAlpha = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        globalCompositeOperation: {

            get: newFunc('globalCompositeOperation', 10, function globalCompositeOperation() {
                if (debug) print('CanvasRenderingContext2D.globalCompositeOperation.get')
                return mm.memory.private_data.get(this).globalCompositeOperation
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('globalCompositeOperation', 1, function globalCompositeOperation(value) {
                if (debug) print('CanvasRenderingContext2D.globalCompositeOperation.set', value)
                mm.memory.private_data.get(this).globalCompositeOperation = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        filter: {

            get: newFunc('filter', 10, function filter() {
                if (debug) print('CanvasRenderingContext2D.filter.get')
                return mm.memory.private_data.get(this).filter
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('filter', 1, function filter(value) {
                if (debug) print('CanvasRenderingContext2D.filter.set', value)
                mm.memory.private_data.get(this).filter = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        imageSmoothingEnabled: {

            get: newFunc('imageSmoothingEnabled', 10, function imageSmoothingEnabled() {
                if (debug) print('CanvasRenderingContext2D.imageSmoothingEnabled.get')
                return mm.memory.private_data.get(this).imageSmoothingEnabled
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('imageSmoothingEnabled', 1, function imageSmoothingEnabled(value) {
                if (debug) print('CanvasRenderingContext2D.imageSmoothingEnabled.set', value)
                mm.memory.private_data.get(this).imageSmoothingEnabled = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        imageSmoothingQuality: {

            get: newFunc('imageSmoothingQuality', 10, function imageSmoothingQuality() {
                if (debug) print('CanvasRenderingContext2D.imageSmoothingQuality.get')
                return mm.memory.private_data.get(this).imageSmoothingQuality
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('imageSmoothingQuality', 1, function imageSmoothingQuality(value) {
                if (debug) print('CanvasRenderingContext2D.imageSmoothingQuality.set', value)
                mm.memory.private_data.get(this).imageSmoothingQuality = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        strokeStyle: {

            get: window['get strokeStyle'],


            set: newFunc('strokeStyle', 1, function strokeStyle(value) {
                if (debug) print('CanvasRenderingContext2D.strokeStyle.set', value)
                mm.memory.private_data.get(this).strokeStyle = value
                mm.memory.private_data.get(this).context.strokeStyle = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        fillStyle: {

            get: window['get fillStyle'],


            set: newFunc('fillStyle', 1, function fillStyle(value) {
                if (debug) print('CanvasRenderingContext2D.fillStyle.set', value)
                mm.memory.private_data.get(this).fillStyle = value
                mm.memory.private_data.get(this).context.fillStyle = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        shadowOffsetX: {

            get: newFunc('shadowOffsetX', 10, function shadowOffsetX() {
                if (debug) print('CanvasRenderingContext2D.shadowOffsetX.get')
                return mm.memory.private_data.get(this).shadowOffsetX
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('shadowOffsetX', 1, function shadowOffsetX(value) {
                if (debug) print('CanvasRenderingContext2D.shadowOffsetX.set', value)
                mm.memory.private_data.get(this).shadowOffsetX = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        shadowOffsetY: {

            get: newFunc('shadowOffsetY', 10, function shadowOffsetY() {
                if (debug) print('CanvasRenderingContext2D.shadowOffsetY.get')
                return mm.memory.private_data.get(this).shadowOffsetY
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('shadowOffsetY', 1, function shadowOffsetY(value) {
                if (debug) print('CanvasRenderingContext2D.shadowOffsetY.set', value)
                mm.memory.private_data.get(this).shadowOffsetY = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        shadowBlur: {

            get: newFunc('shadowBlur', 10, function shadowBlur() {
                if (debug) print('CanvasRenderingContext2D.shadowBlur.get')
                return mm.memory.private_data.get(this).shadowBlur
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('shadowBlur', 1, function shadowBlur(value) {
                if (debug) print('CanvasRenderingContext2D.shadowBlur.set', value)
                mm.memory.private_data.get(this).shadowBlur = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        shadowColor: {

            get: newFunc('shadowColor', 10, function shadowColor() {
                if (debug) print('CanvasRenderingContext2D.shadowColor.get')
                return mm.memory.private_data.get(this).shadowColor
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('shadowColor', 1, function shadowColor(value) {
                if (debug) print('CanvasRenderingContext2D.shadowColor.set', value)
                mm.memory.private_data.get(this).shadowColor = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        lineWidth: {

            get: newFunc('lineWidth', 10, function lineWidth() {
                if (debug) print('CanvasRenderingContext2D.lineWidth.get')
                return mm.memory.private_data.get(this).lineWidth
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('lineWidth', 1, function lineWidth(value) {
                if (debug) print('CanvasRenderingContext2D.lineWidth.set', value)
                mm.memory.private_data.get(this).lineWidth = value
                mm.memory.private_data.get(this).context.lineWidth = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        lineCap: {

            get: newFunc('lineCap', 10, function lineCap() {
                if (debug) print('CanvasRenderingContext2D.lineCap.get')
                return mm.memory.private_data.get(this).lineCap
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('lineCap', 1, function lineCap(value) {
                if (debug) print('CanvasRenderingContext2D.lineCap.set', value)
                mm.memory.private_data.get(this).lineCap = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        lineJoin: {

            get: newFunc('lineJoin', 10, function lineJoin() {
                if (debug) print('CanvasRenderingContext2D.lineJoin.get')
                return mm.memory.private_data.get(this).lineJoin
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('lineJoin', 1, function lineJoin(value) {
                if (debug) print('CanvasRenderingContext2D.lineJoin.set', value)
                mm.memory.private_data.get(this).lineJoin = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        miterLimit: {

            get: newFunc('miterLimit', 10, function miterLimit() {
                if (debug) print('CanvasRenderingContext2D.miterLimit.get')
                return mm.memory.private_data.get(this).miterLimit
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('miterLimit', 1, function miterLimit(value) {
                if (debug) print('CanvasRenderingContext2D.miterLimit.set', value)
                mm.memory.private_data.get(this).miterLimit = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        lineDashOffset: {

            get: newFunc('lineDashOffset', 10, function lineDashOffset() {
                if (debug) print('CanvasRenderingContext2D.lineDashOffset.get')
                return mm.memory.private_data.get(this).lineDashOffset
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('lineDashOffset', 1, function lineDashOffset(value) {
                if (debug) print('CanvasRenderingContext2D.lineDashOffset.set', value)
                mm.memory.private_data.get(this).lineDashOffset = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        font: {

            get: window['get font'], enumerable: true, configurable: true,
            // get: function (){}
            // ,

            set: newFunc('font', 1, function font(value) {
                //if (debug) print('CanvasRenderingContext2D.font.set', value)
                mm.memory.private_data.get(this).font = value
                mm.memory.private_data.get(this).context.font = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        textAlign: {

            get: newFunc('textAlign', 10, function textAlign() {
                if (debug) print('CanvasRenderingContext2D.textAlign.get')
                return mm.memory.private_data.get(this).textAlign
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('textAlign', 1, function textAlign(value) {
                if (debug) print('CanvasRenderingContext2D.textAlign.set', value)
                mm.memory.private_data.get(this).textAlign = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        textBaseline: {

            get: newFunc('textBaseline', 10, function textBaseline() {
                if (debug) print('CanvasRenderingContext2D.textBaseline.get')
                return mm.memory.private_data.get(this).textBaseline
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('textBaseline', 1, function textBaseline(value) {
                if (debug) print('CanvasRenderingContext2D.textBaseline.set', value)
                mm.memory.private_data.get(this).textBaseline = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        direction: {

            get: newFunc('direction', 10, function direction() {
                if (debug) print('CanvasRenderingContext2D.direction.get')
                return mm.memory.private_data.get(this).direction
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('direction', 1, function direction(value) {
                if (debug) print('CanvasRenderingContext2D.direction.set', value)
                mm.memory.private_data.get(this).direction = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        fontKerning: {

            get: newFunc('fontKerning', 10, function fontKerning() {
                if (debug) print('CanvasRenderingContext2D.fontKerning.get')
                return mm.memory.private_data.get(this).fontKerning
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('fontKerning', 1, function fontKerning(value) {
                if (debug) print('CanvasRenderingContext2D.fontKerning.set', value)
                mm.memory.private_data.get(this).fontKerning = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        fontStretch: {

            get: newFunc('fontStretch', 10, function fontStretch() {
                if (debug) print('CanvasRenderingContext2D.fontStretch.get')
                return mm.memory.private_data.get(this).fontStretch
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('fontStretch', 1, function fontStretch(value) {
                if (debug) print('CanvasRenderingContext2D.fontStretch.set', value)
                mm.memory.private_data.get(this).fontStretch = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        fontVariantCaps: {

            get: newFunc('fontVariantCaps', 10, function fontVariantCaps() {
                if (debug) print('CanvasRenderingContext2D.fontVariantCaps.get')
                return mm.memory.private_data.get(this).fontVariantCaps
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('fontVariantCaps', 1, function fontVariantCaps(value) {
                if (debug) print('CanvasRenderingContext2D.fontVariantCaps.set', value)
                mm.memory.private_data.get(this).fontVariantCaps = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        letterSpacing: {

            get: newFunc('letterSpacing', 10, function letterSpacing() {
                if (debug) print('CanvasRenderingContext2D.letterSpacing.get')
                return mm.memory.private_data.get(this).letterSpacing
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('letterSpacing', 1, function letterSpacing(value) {
                if (debug) print('CanvasRenderingContext2D.letterSpacing.set', value)
                mm.memory.private_data.get(this).letterSpacing = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        textRendering: {

            get: newFunc('textRendering', 10, function textRendering() {
                if (debug) print('CanvasRenderingContext2D.textRendering.get')
                return mm.memory.private_data.get(this).textRendering
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('textRendering', 1, function textRendering(value) {
                if (debug) print('CanvasRenderingContext2D.textRendering.set', value)
                mm.memory.private_data.get(this).textRendering = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        wordSpacing: {

            get: newFunc('wordSpacing', 10, function wordSpacing() {
                if (debug) print('CanvasRenderingContext2D.wordSpacing.get')
                return mm.memory.private_data.get(this).wordSpacing
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('wordSpacing', 1, function wordSpacing(value) {
                if (debug) print('CanvasRenderingContext2D.wordSpacing.set', value)
                mm.memory.private_data.get(this).wordSpacing = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        clip: {

            value: newFunc('clip', 10, function clip() {
                if (debug) print('CanvasRenderingContext2D.clip.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        createConicGradient: {

            value: newFunc('createConicGradient', 10, function createConicGradient() {
                if (debug) print('CanvasRenderingContext2D.createConicGradient.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        createImageData: {

            value: newFunc('createImageData', 10, function createImageData(w, h, setting) {
                if (debug) print('CanvasRenderingContext2D.createImageData.call', arguments)
                return new ImageData(w, h, setting)
            }), writable: true, enumerable: true, configurable: true,


        },
        createLinearGradient: {

            value: newFunc('createLinearGradient', 10, function createLinearGradient(x0, y0, x1, y1) {
                if (debug) print('CanvasRenderingContext2D.createLinearGradient.call', x0, y0, x1, y1)
                return mm.memory.private_data.get(this).context.createLinearGradient(x0, y0, x1, y1)

            }), writable: true, enumerable: true, configurable: true,


        },
        createPattern: {

            value: newFunc('createPattern', 10, function createPattern() {
                if (debug) print('CanvasRenderingContext2D.createPattern.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        createRadialGradient: {

            value: window['createRadialGradient'], writable: true, enumerable: true, configurable: true,


        },
        drawFocusIfNeeded: {

            value: newFunc('drawFocusIfNeeded', 10, function drawFocusIfNeeded() {
                if (debug) print('CanvasRenderingContext2D.drawFocusIfNeeded.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        drawImage: {

            value: newFunc('drawImage', 10, function drawImage() {
                if (debug) print('CanvasRenderingContext2D.drawImage.call', arguments)
            }), writable: true, enumerable: true, configurable: true,


        },
        fill: {

            value: window['fill'], writable: true, enumerable: true, configurable: true,


        },
        fillText: {

            value: window['fillText'], writable: true, enumerable: true, configurable: true,


        },
        getContextAttributes: {

            value: newFunc('getContextAttributes', 10, function getContextAttributes() {
                if (debug) print('CanvasRenderingContext2D.getContextAttributes.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getImageData: {

            value: window['getImageData'], writable: true, enumerable: true, configurable: true,


        },
        getLineDash: {

            value: newFunc('getLineDash', 10, function getLineDash() {
                if (debug) print('CanvasRenderingContext2D.getLineDash.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getTransform: {

            value: newFunc('getTransform', 10, function getTransform() {
                if (debug) print('CanvasRenderingContext2D.getTransform.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        isContextLost: {

            value: newFunc('isContextLost', 10, function isContextLost() {
                if (debug) print('CanvasRenderingContext2D.isContextLost.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        isPointInPath: {

            value: newFunc('isPointInPath', 10, function isPointInPath() {
                if (debug) print('CanvasRenderingContext2D.isPointInPath.call', arguments)
                return false
            }), writable: true, enumerable: true, configurable: true,


        },
        isPointInStroke: {

            value: newFunc('isPointInStroke', 10, function isPointInStroke() {
                if (debug) print('CanvasRenderingContext2D.isPointInStroke.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        measureText: {

            value: newFunc('measureText', 10, function measureText(text) {
                let font = mm.memory.private_data.get(this).font;
                // if (debug) print('CanvasRenderingContext2D.measureText.call',font, text)
                // debugger;
                return new TextMetrics(font, text);
            }), writable: true, enumerable: true, configurable: true,


        },
        putImageData: {

            value: newFunc('putImageData', 10, function putImageData() {
                if (debug) print('CanvasRenderingContext2D.putImageData.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        reset: {

            value: newFunc('reset', 10, function reset() {
                if (debug) print('CanvasRenderingContext2D.reset.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        roundRect: {

            value: newFunc('roundRect', 10, function roundRect() {
                if (debug) print('CanvasRenderingContext2D.roundRect.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        save: {

            value: newFunc('save', 10, function save() {
                if (debug) print('CanvasRenderingContext2D.save.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        scale: {

            value: newFunc('scale', 10, function scale() {
                if (debug) print('CanvasRenderingContext2D.scale.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        setLineDash: {

            value: newFunc('setLineDash', 10, function setLineDash() {
                if (debug) print('CanvasRenderingContext2D.setLineDash.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        setTransform: {

            value: newFunc('setTransform', 10, function setTransform() {
                if (debug) print('CanvasRenderingContext2D.setTransform.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        stroke: {

            value: window['stroke'], writable: true, enumerable: true, configurable: true,


        },
        strokeText: {

            value: window['strokeText'], writable: true, enumerable: true, configurable: true,


        },
        transform: {

            value: newFunc('transform', 10, function transform() {
                if (debug) print('CanvasRenderingContext2D.transform.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        translate: {

            value: newFunc('translate', 10, function translate() {
                if (debug) print('CanvasRenderingContext2D.translate.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        arc: {

            value: window['arc'], writable: true, enumerable: true, configurable: true,


        },
        arcTo: {

            value: newFunc('arcTo', 10, function arcTo() {
                if (debug) print('CanvasRenderingContext2D.arcTo.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        beginPath: {

            value: window['beginPath'], writable: true, enumerable: true, configurable: true,


        },
        bezierCurveTo: {

            value: window['bezierCurveTo'], writable: true, enumerable: true, configurable: true,


        },
        clearRect: {

            value: newFunc('clearRect', 10, function clearRect() {
                if (debug) print('CanvasRenderingContext2D.clearRect.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        closePath: {

            value: newFunc('closePath', 10, function closePath() {
                if (debug) print('CanvasRenderingContext2D.closePath.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        ellipse: {

            value: window['ellipse'], writable: true, enumerable: true, configurable: true,


        },
        fillRect: {

            value: newFunc('fillRect', 10, function fillRect(x, y, width, height) {
                if (debug) print('CanvasRenderingContext2D.fillRect.call', x, y, width, height)
                mm.memory.private_data.get(this).context.fillRect(x, y, width, height)

            }), writable: true, enumerable: true, configurable: true,


        },
        lineTo: {

            value: newFunc('lineTo', 10, function lineTo(x, y) {
                if (debug) print('CanvasRenderingContext2D.lineTo.call', x, y)
                mm.memory.private_data.get(this).context.lineTo(x, y)

            }), writable: true, enumerable: true, configurable: true,


        },
        moveTo: {

            value: window['moveTo'], writable: true, enumerable: true, configurable: true,


        },
        quadraticCurveTo: {

            value: window['quadraticCurveTo'], writable: true, enumerable: true, configurable: true,


        },
        rect: {

            value: newFunc('rect', 10, function rect() {
                if (debug) print('CanvasRenderingContext2D.rect.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        resetTransform: {

            value: newFunc('resetTransform', 10, function resetTransform() {
                if (debug) print('CanvasRenderingContext2D.resetTransform.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        restore: {

            value: newFunc('restore', 10, function restore() {
                if (debug) print('CanvasRenderingContext2D.restore.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        rotate: {

            value: newFunc('rotate', 10, function rotate() {
                if (debug) print('CanvasRenderingContext2D.rotate.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        strokeRect: {

            value: newFunc('strokeRect', 10, function strokeRect() {
                if (debug) print('CanvasRenderingContext2D.strokeRect.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('CanvasRenderingContext2D.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
        [Symbol.toStringTag]: {
            value:'CanvasRenderingContext2D'
        },
    })
})();

