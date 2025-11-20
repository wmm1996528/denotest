var decompressSTring = function (s) {
    let res = [];
    let ss = s.split('|')
    for (let i = 0; i < ss.length; i++) {
        let t = ss[i];
        if (t !== '') {
            let a = t.split('-')
            if (a.length === 2) {
                for (let j = 0; j < parseInt(a[1]); j++) {
                    res.push(parseInt(a[0]))
                }
            } else {
                res.push(parseInt(a[0]))
            }
        }
    }
    return res
}

WebGLBuffer = newFunc('WebGLBuffer', 1, function (){print('WebGLBuffer.call');mm.memory.private_data.set(this, {})});



; delete WebGLBuffer.prototype.constructor;
;
Object.defineProperties(WebGLBuffer.prototype, {
    [Symbol.toStringTag]:{
        value:'WebGLBuffer'
    },

'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!WebGLBuffer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('WebGLBuffer.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
EXTTextureFilterAnisotropic = newFunc('EXTTextureFilterAnisotropic', 10, function WebGLBuffer() {

}, true);
Object.defineProperties(EXTTextureFilterAnisotropic.prototype, {
    MAX_TEXTURE_MAX_ANISOTROPY_EXT: {
        value: 34047, true: false, enumerable: true, writable: false
    },
    TEXTURE_MAX_ANISOTROPY_EXT: {
        value: 34046, true: false, enumerable: true, writable: false
    }
})

WebGLProgram = newFunc('WebGLProgram', 1, function (){print('WebGLProgram.call');mm.memory.private_data.set(this, {})});



; delete WebGLProgram.prototype.constructor;
;
Object.defineProperties(WebGLProgram.prototype, {
    [Symbol.toStringTag]:{
        value:'WebGLProgram'
    },

'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!WebGLProgram.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('WebGLProgram.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
WebGLShader = newFunc('WebGLShader', 1, function () {
    print('WebGLShader.call');
    mm.memory.private_data.set(this, {})
});


;delete WebGLShader.prototype.constructor;
;
Object.defineProperties(WebGLShader.prototype, {
    [Symbol.toStringTag]: {
        value: 'WebGLShader'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!WebGLShader.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('WebGLShader.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

WebGLShaderPrecisionFormat = newFunc('WebGLShaderPrecisionFormat', 10, function WebGLShaderPrecisionFormat(rangeMin, rangeMax, precision) {
    mm.memory.private_data.set(this, {
        rangeMin,
        rangeMax,
        precision
    })
}, true);


;delete WebGLShaderPrecisionFormat.prototype.constructor;
;
Object.defineProperties(WebGLShaderPrecisionFormat.prototype, {
    [Symbol.toStringTag]: {
        value: 'WebGLShaderPrecisionFormat'
    },

    'rangeMin': {

        get: newFunc('rangeMin', 10, function () {


            if (!WebGLShaderPrecisionFormat.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['rangeMin'];
            if (debug) print('WebGLShaderPrecisionFormat.rangeMin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'rangeMax': {

        get: newFunc('rangeMax', 10, function () {


            if (!WebGLShaderPrecisionFormat.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['rangeMax'];
            if (debug) print('WebGLShaderPrecisionFormat.rangeMax.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'precision': {

        get: newFunc('precision', 10, function () {


            if (!WebGLShaderPrecisionFormat.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['precision'];
            if (debug) print('WebGLShaderPrecisionFormat.precision.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!WebGLShaderPrecisionFormat.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('WebGLShaderPrecisionFormat.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


WebGLUniformLocation = newFunc('WebGLUniformLocation', 1, function () {
    print('WebGLUniformLocation.call');
    mm.memory.private_data.set(this, {})
});


;delete WebGLUniformLocation.prototype.constructor;
;
Object.defineProperties(WebGLUniformLocation.prototype, {
    [Symbol.toStringTag]: {
        value: 'WebGLUniformLocation'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!WebGLUniformLocation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('WebGLUniformLocation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

WebGLRenderingContext = newFunc('WebGLRenderingContext', 10, function WebGLRenderingContext(key, canvas) {
    mm.memory.private_data.set(this, {
        canvas: canvas,
        context: canvas.context
    })
})
let WebGLDebugRendererInfo = function WebGLDebugRendererInfo(createObj_key) {
    mm.memory.private_data.set(this, {})
};
;(function () {
    const $attributes = {
        UNMASKED_RENDERER_WEBGL: 37446,
        UNMASKED_VENDOR_WEBGL: 37445,
    };

    WebGLDebugRendererInfo.prototype = {};
    for (let key in $attributes) {
        if ($attributes.hasOwnProperty(key)) {
            const value = $attributes[key];
            Object.defineProperty(WebGLDebugRendererInfo, key, {
                value: value,
                configurable: false,
                enumerable: true,
                writable: false
            });
            Object.defineProperty(WebGLDebugRendererInfo.prototype, key, {
                value: value,
                configurable: false,
                enumerable: true,
                writable: false
            });
        }
    }
    ;

    // mm.rename(WebGLDebugRendererInfo.prototype, "WebGLDebugRendererInfo");
    // mm.safeDescriptor_addConstructor(WebGLDebugRendererInfo);

})();





; delete WebGLRenderingContext.prototype.constructor;
;
Object.defineProperties(WebGLRenderingContext.prototype, {
    [Symbol.toStringTag]:{
        value:'WebGLRenderingContext'
    },

    'canvas': {

        get: createNativeFunc('canvas', 10, function (){


            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['canvas'];
            if (debug)print('WebGLRenderingContext.canvas.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'drawingBufferWidth': {

        get: createNativeFunc('drawingBufferWidth', 10, function (){


            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['drawingBufferWidth'];
            if (debug)print('WebGLRenderingContext.drawingBufferWidth.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'drawingBufferHeight': {

        get: createNativeFunc('drawingBufferHeight', 10, function (){


            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['drawingBufferHeight'];
            if (debug)print('WebGLRenderingContext.drawingBufferHeight.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'drawingBufferColorSpace': {

        get: createNativeFunc('drawingBufferColorSpace', 10, function (){


            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['drawingBufferColorSpace'];
            if (debug)print('WebGLRenderingContext.drawingBufferColorSpace.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: createNativeFunc('drawingBufferColorSpace', 1, function (value){
            if (debug)print('WebGLRenderingContext.drawingBufferColorSpace.set', value)
            mm.memory.private_data.get(this)['drawingBufferColorSpace'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'unpackColorSpace': {

        get: createNativeFunc('unpackColorSpace', 10, function (){


            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['unpackColorSpace'];
            if (debug)print('WebGLRenderingContext.unpackColorSpace.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: createNativeFunc('unpackColorSpace', 1, function (value){
            if (debug)print('WebGLRenderingContext.unpackColorSpace.set', value)
            mm.memory.private_data.get(this)['unpackColorSpace'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'DEPTH_BUFFER_BIT': {

        value: 256, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BUFFER_BIT': {

        value: 1024, writable:false, enumerable:true, configurable:false,



    },
    'COLOR_BUFFER_BIT': {

        value: 16384, writable:false, enumerable:true, configurable:false,



    },
    'POINTS': {
    },
    'LINES': {

        value: 1, writable:false, enumerable:true, configurable:false,



    },
    'LINE_LOOP': {

        value: 2, writable:false, enumerable:true, configurable:false,



    },
    'LINE_STRIP': {

        value: 3, writable:false, enumerable:true, configurable:false,



    },
    'TRIANGLES': {

        value: 4, writable:false, enumerable:true, configurable:false,



    },
    'TRIANGLE_STRIP': {

        value: 5, writable:false, enumerable:true, configurable:false,



    },
    'TRIANGLE_FAN': {

        value: 6, writable:false, enumerable:true, configurable:false,



    },
    'ZERO': {
    },
    'ONE': {

        value: 1, writable:false, enumerable:true, configurable:false,



    },
    'SRC_COLOR': {

        value: 768, writable:false, enumerable:true, configurable:false,



    },
    'ONE_MINUS_SRC_COLOR': {

        value: 769, writable:false, enumerable:true, configurable:false,



    },
    'SRC_ALPHA': {

        value: 770, writable:false, enumerable:true, configurable:false,



    },
    'ONE_MINUS_SRC_ALPHA': {

        value: 771, writable:false, enumerable:true, configurable:false,



    },
    'DST_ALPHA': {

        value: 772, writable:false, enumerable:true, configurable:false,



    },
    'ONE_MINUS_DST_ALPHA': {

        value: 773, writable:false, enumerable:true, configurable:false,



    },
    'DST_COLOR': {

        value: 774, writable:false, enumerable:true, configurable:false,



    },
    'ONE_MINUS_DST_COLOR': {

        value: 775, writable:false, enumerable:true, configurable:false,



    },
    'SRC_ALPHA_SATURATE': {

        value: 776, writable:false, enumerable:true, configurable:false,



    },
    'FUNC_ADD': {

        value: 32774, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_EQUATION': {

        value: 32777, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_EQUATION_RGB': {

        value: 32777, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_EQUATION_ALPHA': {

        value: 34877, writable:false, enumerable:true, configurable:false,



    },
    'FUNC_SUBTRACT': {

        value: 32778, writable:false, enumerable:true, configurable:false,



    },
    'FUNC_REVERSE_SUBTRACT': {

        value: 32779, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_DST_RGB': {

        value: 32968, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_SRC_RGB': {

        value: 32969, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_DST_ALPHA': {

        value: 32970, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_SRC_ALPHA': {

        value: 32971, writable:false, enumerable:true, configurable:false,



    },
    'CONSTANT_COLOR': {

        value: 32769, writable:false, enumerable:true, configurable:false,



    },
    'ONE_MINUS_CONSTANT_COLOR': {

        value: 32770, writable:false, enumerable:true, configurable:false,



    },
    'CONSTANT_ALPHA': {

        value: 32771, writable:false, enumerable:true, configurable:false,



    },
    'ONE_MINUS_CONSTANT_ALPHA': {

        value: 32772, writable:false, enumerable:true, configurable:false,



    },
    'BLEND_COLOR': {

        value: 32773, writable:false, enumerable:true, configurable:false,



    },
    'ARRAY_BUFFER': {

        value: 34962, writable:false, enumerable:true, configurable:false,



    },
    'ELEMENT_ARRAY_BUFFER': {

        value: 34963, writable:false, enumerable:true, configurable:false,



    },
    'ARRAY_BUFFER_BINDING': {

        value: 34964, writable:false, enumerable:true, configurable:false,



    },
    'ELEMENT_ARRAY_BUFFER_BINDING': {

        value: 34965, writable:false, enumerable:true, configurable:false,



    },
    'STREAM_DRAW': {

        value: 35040, writable:false, enumerable:true, configurable:false,



    },
    'STATIC_DRAW': {

        value: 35044, writable:false, enumerable:true, configurable:false,



    },
    'DYNAMIC_DRAW': {

        value: 35048, writable:false, enumerable:true, configurable:false,



    },
    'BUFFER_SIZE': {

        value: 34660, writable:false, enumerable:true, configurable:false,



    },
    'BUFFER_USAGE': {

        value: 34661, writable:false, enumerable:true, configurable:false,



    },
    'CURRENT_VERTEX_ATTRIB': {

        value: 34342, writable:false, enumerable:true, configurable:false,



    },
    'FRONT': {

        value: 1028, writable:false, enumerable:true, configurable:false,



    },
    'BACK': {

        value: 1029, writable:false, enumerable:true, configurable:false,



    },
    'FRONT_AND_BACK': {

        value: 1032, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_2D': {

        value: 3553, writable:false, enumerable:true, configurable:false,



    },
    'CULL_FACE': {

        value: 2884, writable:false, enumerable:true, configurable:false,



    },
    'BLEND': {

        value: 3042, writable:false, enumerable:true, configurable:false,



    },
    'DITHER': {

        value: 3024, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_TEST': {

        value: 2960, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_TEST': {

        value: 2929, writable:false, enumerable:true, configurable:false,



    },
    'SCISSOR_TEST': {

        value: 3089, writable:false, enumerable:true, configurable:false,



    },
    'POLYGON_OFFSET_FILL': {

        value: 32823, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLE_ALPHA_TO_COVERAGE': {

        value: 32926, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLE_COVERAGE': {

        value: 32928, writable:false, enumerable:true, configurable:false,



    },
    'NO_ERROR': {
    },
    'INVALID_ENUM': {

        value: 1280, writable:false, enumerable:true, configurable:false,



    },
    'INVALID_VALUE': {

        value: 1281, writable:false, enumerable:true, configurable:false,



    },
    'INVALID_OPERATION': {

        value: 1282, writable:false, enumerable:true, configurable:false,



    },
    'OUT_OF_MEMORY': {

        value: 1285, writable:false, enumerable:true, configurable:false,



    },
    'CW': {

        value: 2304, writable:false, enumerable:true, configurable:false,



    },
    'CCW': {

        value: 2305, writable:false, enumerable:true, configurable:false,



    },
    'LINE_WIDTH': {

        value: 2849, writable:false, enumerable:true, configurable:false,



    },
    'ALIASED_POINT_SIZE_RANGE': {

        value: 33901, writable:false, enumerable:true, configurable:false,



    },
    'ALIASED_LINE_WIDTH_RANGE': {

        value: 33902, writable:false, enumerable:true, configurable:false,



    },
    'CULL_FACE_MODE': {

        value: 2885, writable:false, enumerable:true, configurable:false,



    },
    'FRONT_FACE': {

        value: 2886, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_RANGE': {

        value: 2928, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_WRITEMASK': {

        value: 2930, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_CLEAR_VALUE': {

        value: 2931, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_FUNC': {

        value: 2932, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_CLEAR_VALUE': {

        value: 2961, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_FUNC': {

        value: 2962, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_FAIL': {

        value: 2964, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_PASS_DEPTH_FAIL': {

        value: 2965, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_PASS_DEPTH_PASS': {

        value: 2966, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_REF': {

        value: 2967, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_VALUE_MASK': {

        value: 2963, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_WRITEMASK': {

        value: 2968, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BACK_FUNC': {

        value: 34816, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BACK_FAIL': {

        value: 34817, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BACK_PASS_DEPTH_FAIL': {

        value: 34818, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BACK_PASS_DEPTH_PASS': {

        value: 34819, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BACK_REF': {

        value: 36003, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BACK_VALUE_MASK': {

        value: 36004, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BACK_WRITEMASK': {

        value: 36005, writable:false, enumerable:true, configurable:false,



    },
    'VIEWPORT': {

        value: 2978, writable:false, enumerable:true, configurable:false,



    },
    'SCISSOR_BOX': {

        value: 3088, writable:false, enumerable:true, configurable:false,



    },
    'COLOR_CLEAR_VALUE': {

        value: 3106, writable:false, enumerable:true, configurable:false,



    },
    'COLOR_WRITEMASK': {

        value: 3107, writable:false, enumerable:true, configurable:false,



    },
    'UNPACK_ALIGNMENT': {

        value: 3317, writable:false, enumerable:true, configurable:false,



    },
    'PACK_ALIGNMENT': {

        value: 3333, writable:false, enumerable:true, configurable:false,



    },
    'MAX_TEXTURE_SIZE': {

        value: 3379, writable:false, enumerable:true, configurable:false,



    },
    'MAX_VIEWPORT_DIMS': {

        value: 3386, writable:false, enumerable:true, configurable:false,



    },
    'SUBPIXEL_BITS': {

        value: 3408, writable:false, enumerable:true, configurable:false,



    },
    'RED_BITS': {

        value: 3410, writable:false, enumerable:true, configurable:false,



    },
    'GREEN_BITS': {

        value: 3411, writable:false, enumerable:true, configurable:false,



    },
    'BLUE_BITS': {

        value: 3412, writable:false, enumerable:true, configurable:false,



    },
    'ALPHA_BITS': {

        value: 3413, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_BITS': {

        value: 3414, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_BITS': {

        value: 3415, writable:false, enumerable:true, configurable:false,



    },
    'POLYGON_OFFSET_UNITS': {

        value: 10752, writable:false, enumerable:true, configurable:false,



    },
    'POLYGON_OFFSET_FACTOR': {

        value: 32824, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_BINDING_2D': {

        value: 32873, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLE_BUFFERS': {

        value: 32936, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLES': {

        value: 32937, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLE_COVERAGE_VALUE': {

        value: 32938, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLE_COVERAGE_INVERT': {

        value: 32939, writable:false, enumerable:true, configurable:false,



    },
    'COMPRESSED_TEXTURE_FORMATS': {

        value: 34467, writable:false, enumerable:true, configurable:false,



    },
    'DONT_CARE': {

        value: 4352, writable:false, enumerable:true, configurable:false,



    },
    'FASTEST': {

        value: 4353, writable:false, enumerable:true, configurable:false,



    },
    'NICEST': {

        value: 4354, writable:false, enumerable:true, configurable:false,



    },
    'GENERATE_MIPMAP_HINT': {

        value: 33170, writable:false, enumerable:true, configurable:false,



    },
    'BYTE': {

        value: 5120, writable:false, enumerable:true, configurable:false,



    },
    'UNSIGNED_BYTE': {

        value: 5121, writable:false, enumerable:true, configurable:false,



    },
    'SHORT': {

        value: 5122, writable:false, enumerable:true, configurable:false,



    },
    'UNSIGNED_SHORT': {

        value: 5123, writable:false, enumerable:true, configurable:false,



    },
    'INT': {

        value: 5124, writable:false, enumerable:true, configurable:false,



    },
    'UNSIGNED_INT': {

        value: 5125, writable:false, enumerable:true, configurable:false,



    },
    'FLOAT': {

        value: 5126, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_COMPONENT': {

        value: 6402, writable:false, enumerable:true, configurable:false,



    },
    'ALPHA': {

        value: 6406, writable:false, enumerable:true, configurable:false,



    },
    'RGB': {

        value: 6407, writable:false, enumerable:true, configurable:false,



    },
    'RGBA': {

        value: 6408, writable:false, enumerable:true, configurable:false,



    },
    'LUMINANCE': {

        value: 6409, writable:false, enumerable:true, configurable:false,



    },
    'LUMINANCE_ALPHA': {

        value: 6410, writable:false, enumerable:true, configurable:false,



    },
    'UNSIGNED_SHORT_4_4_4_4': {

        value: 32819, writable:false, enumerable:true, configurable:false,



    },
    'UNSIGNED_SHORT_5_5_5_1': {

        value: 32820, writable:false, enumerable:true, configurable:false,



    },
    'UNSIGNED_SHORT_5_6_5': {

        value: 33635, writable:false, enumerable:true, configurable:false,



    },
    'FRAGMENT_SHADER': {

        value: 35632, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_SHADER': {

        value: 35633, writable:false, enumerable:true, configurable:false,



    },
    'MAX_VERTEX_ATTRIBS': {

        value: 34921, writable:false, enumerable:true, configurable:false,



    },
    'MAX_VERTEX_UNIFORM_VECTORS': {

        value: 36347, writable:false, enumerable:true, configurable:false,



    },
    'MAX_VARYING_VECTORS': {

        value: 36348, writable:false, enumerable:true, configurable:false,



    },
    'MAX_COMBINED_TEXTURE_IMAGE_UNITS': {

        value: 35661, writable:false, enumerable:true, configurable:false,



    },
    'MAX_VERTEX_TEXTURE_IMAGE_UNITS': {

        value: 35660, writable:false, enumerable:true, configurable:false,



    },
    'MAX_TEXTURE_IMAGE_UNITS': {

        value: 34930, writable:false, enumerable:true, configurable:false,



    },
    'MAX_FRAGMENT_UNIFORM_VECTORS': {

        value: 36349, writable:false, enumerable:true, configurable:false,



    },
    'SHADER_TYPE': {

        value: 35663, writable:false, enumerable:true, configurable:false,



    },
    'DELETE_STATUS': {

        value: 35712, writable:false, enumerable:true, configurable:false,



    },
    'LINK_STATUS': {

        value: 35714, writable:false, enumerable:true, configurable:false,



    },
    'VALIDATE_STATUS': {

        value: 35715, writable:false, enumerable:true, configurable:false,



    },
    'ATTACHED_SHADERS': {

        value: 35717, writable:false, enumerable:true, configurable:false,



    },
    'ACTIVE_UNIFORMS': {

        value: 35718, writable:false, enumerable:true, configurable:false,



    },
    'ACTIVE_ATTRIBUTES': {

        value: 35721, writable:false, enumerable:true, configurable:false,



    },
    'SHADING_LANGUAGE_VERSION': {

        value: 35724, writable:false, enumerable:true, configurable:false,



    },
    'CURRENT_PROGRAM': {

        value: 35725, writable:false, enumerable:true, configurable:false,



    },
    'NEVER': {

        value: 512, writable:false, enumerable:true, configurable:false,



    },
    'LESS': {

        value: 513, writable:false, enumerable:true, configurable:false,



    },
    'EQUAL': {

        value: 514, writable:false, enumerable:true, configurable:false,



    },
    'LEQUAL': {

        value: 515, writable:false, enumerable:true, configurable:false,



    },
    'GREATER': {

        value: 516, writable:false, enumerable:true, configurable:false,



    },
    'NOTEQUAL': {

        value: 517, writable:false, enumerable:true, configurable:false,



    },
    'GEQUAL': {

        value: 518, writable:false, enumerable:true, configurable:false,



    },
    'ALWAYS': {

        value: 519, writable:false, enumerable:true, configurable:false,



    },
    'KEEP': {

        value: 7680, writable:false, enumerable:true, configurable:false,



    },
    'REPLACE': {

        value: 7681, writable:false, enumerable:true, configurable:false,



    },
    'INCR': {

        value: 7682, writable:false, enumerable:true, configurable:false,



    },
    'DECR': {

        value: 7683, writable:false, enumerable:true, configurable:false,



    },
    'INVERT': {

        value: 5386, writable:false, enumerable:true, configurable:false,



    },
    'INCR_WRAP': {

        value: 34055, writable:false, enumerable:true, configurable:false,



    },
    'DECR_WRAP': {

        value: 34056, writable:false, enumerable:true, configurable:false,



    },
    'VENDOR': {
        value: 7936, writable:false, enumerable:true, configurable:false,



    },
    'RENDERER': {

        value: 7937, writable:false, enumerable:true, configurable:false,



    },
    'VERSION': {

        value: 7938, writable:false, enumerable:true, configurable:false,



    },
    'NEAREST': {

        value: 9728, writable:false, enumerable:true, configurable:false,



    },
    'LINEAR': {

        value: 9729, writable:false, enumerable:true, configurable:false,



    },
    'NEAREST_MIPMAP_NEAREST': {

        value: 9984, writable:false, enumerable:true, configurable:false,



    },
    'LINEAR_MIPMAP_NEAREST': {

        value: 9985, writable:false, enumerable:true, configurable:false,



    },
    'NEAREST_MIPMAP_LINEAR': {

        value: 9986, writable:false, enumerable:true, configurable:false,



    },
    'LINEAR_MIPMAP_LINEAR': {

        value: 9987, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_MAG_FILTER': {

        value: 10240, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_MIN_FILTER': {

        value: 10241, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_WRAP_S': {

        value: 10242, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_WRAP_T': {

        value: 10243, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE': {

        value: 5890, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_CUBE_MAP': {

        value: 34067, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_BINDING_CUBE_MAP': {

        value: 34068, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_CUBE_MAP_POSITIVE_X': {

        value: 34069, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_CUBE_MAP_NEGATIVE_X': {

        value: 34070, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_CUBE_MAP_POSITIVE_Y': {

        value: 34071, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_CUBE_MAP_NEGATIVE_Y': {

        value: 34072, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_CUBE_MAP_POSITIVE_Z': {

        value: 34073, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE_CUBE_MAP_NEGATIVE_Z': {

        value: 34074, writable:false, enumerable:true, configurable:false,



    },
    'MAX_CUBE_MAP_TEXTURE_SIZE': {

        value: 34076, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE0': {

        value: 33984, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE1': {

        value: 33985, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE2': {

        value: 33986, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE3': {

        value: 33987, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE4': {

        value: 33988, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE5': {

        value: 33989, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE6': {

        value: 33990, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE7': {

        value: 33991, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE8': {

        value: 33992, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE9': {

        value: 33993, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE10': {

        value: 33994, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE11': {

        value: 33995, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE12': {

        value: 33996, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE13': {

        value: 33997, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE14': {

        value: 33998, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE15': {

        value: 33999, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE16': {

        value: 34000, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE17': {

        value: 34001, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE18': {

        value: 34002, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE19': {

        value: 34003, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE20': {

        value: 34004, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE21': {

        value: 34005, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE22': {

        value: 34006, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE23': {

        value: 34007, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE24': {

        value: 34008, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE25': {

        value: 34009, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE26': {

        value: 34010, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE27': {

        value: 34011, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE28': {

        value: 34012, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE29': {

        value: 34013, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE30': {

        value: 34014, writable:false, enumerable:true, configurable:false,



    },
    'TEXTURE31': {

        value: 34015, writable:false, enumerable:true, configurable:false,



    },
    'ACTIVE_TEXTURE': {

        value: 34016, writable:false, enumerable:true, configurable:false,



    },
    'REPEAT': {

        value: 10497, writable:false, enumerable:true, configurable:false,



    },
    'CLAMP_TO_EDGE': {

        value: 33071, writable:false, enumerable:true, configurable:false,



    },
    'MIRRORED_REPEAT': {

        value: 33648, writable:false, enumerable:true, configurable:false,



    },
    'FLOAT_VEC2': {

        value: 35664, writable:false, enumerable:true, configurable:false,



    },
    'FLOAT_VEC3': {

        value: 35665, writable:false, enumerable:true, configurable:false,



    },
    'FLOAT_VEC4': {

        value: 35666, writable:false, enumerable:true, configurable:false,



    },
    'INT_VEC2': {

        value: 35667, writable:false, enumerable:true, configurable:false,



    },
    'INT_VEC3': {

        value: 35668, writable:false, enumerable:true, configurable:false,



    },
    'INT_VEC4': {

        value: 35669, writable:false, enumerable:true, configurable:false,



    },
    'BOOL': {

        value: 35670, writable:false, enumerable:true, configurable:false,



    },
    'BOOL_VEC2': {

        value: 35671, writable:false, enumerable:true, configurable:false,



    },
    'BOOL_VEC3': {

        value: 35672, writable:false, enumerable:true, configurable:false,



    },
    'BOOL_VEC4': {

        value: 35673, writable:false, enumerable:true, configurable:false,



    },
    'FLOAT_MAT2': {

        value: 35674, writable:false, enumerable:true, configurable:false,



    },
    'FLOAT_MAT3': {

        value: 35675, writable:false, enumerable:true, configurable:false,



    },
    'FLOAT_MAT4': {

        value: 35676, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLER_2D': {

        value: 35678, writable:false, enumerable:true, configurable:false,



    },
    'SAMPLER_CUBE': {

        value: 35680, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_ATTRIB_ARRAY_ENABLED': {

        value: 34338, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_ATTRIB_ARRAY_SIZE': {

        value: 34339, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_ATTRIB_ARRAY_STRIDE': {

        value: 34340, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_ATTRIB_ARRAY_TYPE': {

        value: 34341, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_ATTRIB_ARRAY_NORMALIZED': {

        value: 34922, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_ATTRIB_ARRAY_POINTER': {

        value: 34373, writable:false, enumerable:true, configurable:false,



    },
    'VERTEX_ATTRIB_ARRAY_BUFFER_BINDING': {

        value: 34975, writable:false, enumerable:true, configurable:false,



    },
    'IMPLEMENTATION_COLOR_READ_TYPE': {

        value: 35738, writable:false, enumerable:true, configurable:false,



    },
    'IMPLEMENTATION_COLOR_READ_FORMAT': {

        value: 35739, writable:false, enumerable:true, configurable:false,



    },
    'COMPILE_STATUS': {

        value: 35713, writable:false, enumerable:true, configurable:false,



    },
    'LOW_FLOAT': {

        value: 36336, writable:false, enumerable:true, configurable:false,



    },
    'MEDIUM_FLOAT': {

        value: 36337, writable:false, enumerable:true, configurable:false,



    },
    'HIGH_FLOAT': {

        value: 36338, writable:false, enumerable:true, configurable:false,



    },
    'LOW_INT': {

        value: 36339, writable:false, enumerable:true, configurable:false,



    },
    'MEDIUM_INT': {

        value: 36340, writable:false, enumerable:true, configurable:false,



    },
    'HIGH_INT': {

        value: 36341, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER': {

        value: 36160, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER': {

        value: 36161, writable:false, enumerable:true, configurable:false,



    },
    'RGBA4': {

        value: 32854, writable:false, enumerable:true, configurable:false,



    },
    'RGB5_A1': {

        value: 32855, writable:false, enumerable:true, configurable:false,



    },
    'RGB565': {

        value: 36194, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_COMPONENT16': {

        value: 33189, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_INDEX8': {

        value: 36168, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_STENCIL': {

        value: 34041, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_WIDTH': {

        value: 36162, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_HEIGHT': {

        value: 36163, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_INTERNAL_FORMAT': {

        value: 36164, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_RED_SIZE': {

        value: 36176, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_GREEN_SIZE': {

        value: 36177, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_BLUE_SIZE': {

        value: 36178, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_ALPHA_SIZE': {

        value: 36179, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_DEPTH_SIZE': {

        value: 36180, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_STENCIL_SIZE': {

        value: 36181, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE': {

        value: 36048, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_ATTACHMENT_OBJECT_NAME': {

        value: 36049, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL': {

        value: 36050, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE': {

        value: 36051, writable:false, enumerable:true, configurable:false,



    },
    'COLOR_ATTACHMENT0': {

        value: 36064, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_ATTACHMENT': {

        value: 36096, writable:false, enumerable:true, configurable:false,



    },
    'STENCIL_ATTACHMENT': {

        value: 36128, writable:false, enumerable:true, configurable:false,



    },
    'DEPTH_STENCIL_ATTACHMENT': {

        value: 33306, writable:false, enumerable:true, configurable:false,



    },
    'NONE': {
    },
    'FRAMEBUFFER_COMPLETE': {

        value: 36053, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_INCOMPLETE_ATTACHMENT': {

        value: 36054, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT': {

        value: 36055, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_INCOMPLETE_DIMENSIONS': {

        value: 36057, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_UNSUPPORTED': {

        value: 36061, writable:false, enumerable:true, configurable:false,



    },
    'FRAMEBUFFER_BINDING': {

        value: 36006, writable:false, enumerable:true, configurable:false,



    },
    'RENDERBUFFER_BINDING': {

        value: 36007, writable:false, enumerable:true, configurable:false,



    },
    'MAX_RENDERBUFFER_SIZE': {

        value: 34024, writable:false, enumerable:true, configurable:false,



    },
    'INVALID_FRAMEBUFFER_OPERATION': {

        value: 1286, writable:false, enumerable:true, configurable:false,



    },
    'UNPACK_FLIP_Y_WEBGL': {

        value: 37440, writable:false, enumerable:true, configurable:false,



    },
    'UNPACK_PREMULTIPLY_ALPHA_WEBGL': {

        value: 37441, writable:false, enumerable:true, configurable:false,



    },
    'CONTEXT_LOST_WEBGL': {

        value: 37442, writable:false, enumerable:true, configurable:false,



    },
    'UNPACK_COLORSPACE_CONVERSION_WEBGL': {

        value: 37443, writable:false, enumerable:true, configurable:false,



    },
    'BROWSER_DEFAULT_WEBGL': {

        value: 37444, writable:false, enumerable:true, configurable:false,



    },
    'activeTexture': {

        value: createNativeFunc('activeTexture', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.activeTexture.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'attachShader': {

        value: createNativeFunc('attachShader', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.attachShader.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'bindAttribLocation': {

        value: createNativeFunc('bindAttribLocation', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.bindAttribLocation.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'bindRenderbuffer': {

        value: createNativeFunc('bindRenderbuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.bindRenderbuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'blendColor': {

        value: createNativeFunc('blendColor', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.blendColor.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'blendEquation': {

        value: createNativeFunc('blendEquation', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.blendEquation.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'blendEquationSeparate': {

        value: createNativeFunc('blendEquationSeparate', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.blendEquationSeparate.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'blendFunc': {

        value: createNativeFunc('blendFunc', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.blendFunc.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'blendFuncSeparate': {

        value: createNativeFunc('blendFuncSeparate', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.blendFuncSeparate.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'bufferData': {

        value: createNativeFunc('bufferData', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.bufferData.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'bufferSubData': {

        value: createNativeFunc('bufferSubData', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.bufferSubData.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'checkFramebufferStatus': {

        value: createNativeFunc('checkFramebufferStatus', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.checkFramebufferStatus.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'compileShader': {

        value: createNativeFunc('compileShader', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.compileShader.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'compressedTexImage2D': {

        value: createNativeFunc('compressedTexImage2D', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.compressedTexImage2D.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'compressedTexSubImage2D': {

        value: createNativeFunc('compressedTexSubImage2D', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.compressedTexSubImage2D.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'copyTexImage2D': {

        value: createNativeFunc('copyTexImage2D', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.copyTexImage2D.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'copyTexSubImage2D': {

        value: createNativeFunc('copyTexSubImage2D', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.copyTexSubImage2D.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'createBuffer': {

        value: createNativeFunc('createBuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.createBuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'createFramebuffer': {

        value: createNativeFunc('createFramebuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.createFramebuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'createProgram': {

        value: createNativeFunc('createProgram', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.createProgram.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'createRenderbuffer': {

        value: createNativeFunc('createRenderbuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.createRenderbuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'createShader': {

        value: createNativeFunc('createShader', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.createShader.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'createTexture': {

        value: createNativeFunc('createTexture', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.createTexture.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'cullFace': {

        value: createNativeFunc('cullFace', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.cullFace.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'deleteBuffer': {

        value: createNativeFunc('deleteBuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.deleteBuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'deleteFramebuffer': {

        value: createNativeFunc('deleteFramebuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.deleteFramebuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'deleteProgram': {

        value: createNativeFunc('deleteProgram', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.deleteProgram.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'deleteRenderbuffer': {

        value: createNativeFunc('deleteRenderbuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.deleteRenderbuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'deleteShader': {

        value: createNativeFunc('deleteShader', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.deleteShader.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'deleteTexture': {

        value: createNativeFunc('deleteTexture', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.deleteTexture.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'depthFunc': {

        value: createNativeFunc('depthFunc', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.depthFunc.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'depthMask': {

        value: createNativeFunc('depthMask', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.depthMask.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'depthRange': {

        value: createNativeFunc('depthRange', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.depthRange.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'detachShader': {

        value: createNativeFunc('detachShader', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.detachShader.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'disable': {

        value: createNativeFunc('disable', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.disable.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'enable': {

        value: createNativeFunc('enable', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.enable.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'finish': {

        value: createNativeFunc('finish', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.finish.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'flush': {

        value: createNativeFunc('flush', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.flush.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'framebufferRenderbuffer': {

        value: createNativeFunc('framebufferRenderbuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.framebufferRenderbuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'framebufferTexture2D': {

        value: createNativeFunc('framebufferTexture2D', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.framebufferTexture2D.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'frontFace': {

        value: createNativeFunc('frontFace', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.frontFace.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'generateMipmap': {

        value: createNativeFunc('generateMipmap', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.generateMipmap.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getActiveAttrib': {

        value: createNativeFunc('getActiveAttrib', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getActiveAttrib.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getActiveUniform': {

        value: createNativeFunc('getActiveUniform', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getActiveUniform.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getAttachedShaders': {

        value: createNativeFunc('getAttachedShaders', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getAttachedShaders.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getAttribLocation': {

        value: createNativeFunc('getAttribLocation', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getAttribLocation.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getBufferParameter': {

        value: createNativeFunc('getBufferParameter', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getBufferParameter.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getContextAttributes': {

        value: createNativeFunc('getContextAttributes', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getContextAttributes.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getError': {

        value: createNativeFunc('getError', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getError.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getExtension': {

        value: createNativeFunc('getExtension', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getExtension.call', arguments)
            return new WebGLDebugRendererInfo();

        }), writable:true, enumerable:true, configurable:true,



    },
    'getFramebufferAttachmentParameter': {

        value: createNativeFunc('getFramebufferAttachmentParameter', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getFramebufferAttachmentParameter.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getParameter': {

        value: createNativeFunc('getParameter', 10, function (param) {
            if (debug)print('WebGLRenderingContext.getParameter.call', arguments)

            // if (!WebGLRenderingContext.prototype.isPrototypeOf(this) && !WebGL2RenderingContext.prototype.isPrototypeOf(this)) {
            //     throw new TypeError("Illegal constructor");
            // }
            ;
            let ele = ENV.glres[param + '']

            if (!ele) {
                if (param == 33902) {
                    ele = new Float32Array([1, 1])
                }
                if (param === 35377) {
                    ele = 53248
                }
                if (param === 35379) {
                    ele = 53248;
                }
                if (param === 35374 || param === 35375) {
                    ele = 24;
                }
                if (param == 33901) {
                    ele = new Float32Array([1, 64])
                }
                if (param == 3386) {
                    ele = new Int32Array([16384, 16384])
                }
                if (param === 3415) {
                    ele = 0
                }
            }
            let result = ele;

            if (debug)print('WebGLRenderingContext.getParameter.call', result)
            return result

        }), writable:true, enumerable:true, configurable:true,



    },
    'getProgramInfoLog': {

        value: createNativeFunc('getProgramInfoLog', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getProgramInfoLog.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getProgramParameter': {

        value: createNativeFunc('getProgramParameter', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getProgramParameter.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getRenderbufferParameter': {

        value: createNativeFunc('getRenderbufferParameter', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getRenderbufferParameter.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getShaderInfoLog': {

        value: createNativeFunc('getShaderInfoLog', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getShaderInfoLog.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getShaderParameter': {

        value: createNativeFunc('getShaderParameter', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getShaderParameter.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getShaderPrecisionFormat': {

        value: createNativeFunc('getShaderPrecisionFormat', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getShaderPrecisionFormat.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getShaderSource': {

        value: createNativeFunc('getShaderSource', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getShaderSource.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getSupportedExtensions': {

        value: createNativeFunc('getSupportedExtensions', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getSupportedExtensions.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getTexParameter': {

        value: createNativeFunc('getTexParameter', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getTexParameter.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getUniform': {

        value: createNativeFunc('getUniform', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getUniform.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getUniformLocation': {

        value: createNativeFunc('getUniformLocation', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getUniformLocation.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getVertexAttrib': {

        value: createNativeFunc('getVertexAttrib', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getVertexAttrib.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getVertexAttribOffset': {

        value: createNativeFunc('getVertexAttribOffset', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.getVertexAttribOffset.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'hint': {

        value: createNativeFunc('hint', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.hint.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isBuffer': {

        value: createNativeFunc('isBuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isBuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isContextLost': {

        value: createNativeFunc('isContextLost', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isContextLost.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isEnabled': {

        value: createNativeFunc('isEnabled', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isEnabled.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isFramebuffer': {

        value: createNativeFunc('isFramebuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isFramebuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isProgram': {

        value: createNativeFunc('isProgram', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isProgram.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isRenderbuffer': {

        value: createNativeFunc('isRenderbuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isRenderbuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isShader': {

        value: createNativeFunc('isShader', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isShader.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'isTexture': {

        value: createNativeFunc('isTexture', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.isTexture.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'lineWidth': {

        value: createNativeFunc('lineWidth', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.lineWidth.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'linkProgram': {

        value: createNativeFunc('linkProgram', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.linkProgram.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'pixelStorei': {

        value: createNativeFunc('pixelStorei', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.pixelStorei.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'polygonOffset': {

        value: createNativeFunc('polygonOffset', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.polygonOffset.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'readPixels': {

        value: createNativeFunc('readPixels', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.readPixels.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'renderbufferStorage': {

        value: createNativeFunc('renderbufferStorage', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.renderbufferStorage.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'sampleCoverage': {

        value: createNativeFunc('sampleCoverage', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.sampleCoverage.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'shaderSource': {

        value: createNativeFunc('shaderSource', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.shaderSource.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'stencilFunc': {

        value: createNativeFunc('stencilFunc', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.stencilFunc.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'stencilFuncSeparate': {

        value: createNativeFunc('stencilFuncSeparate', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.stencilFuncSeparate.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'stencilMask': {

        value: createNativeFunc('stencilMask', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.stencilMask.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'stencilMaskSeparate': {

        value: createNativeFunc('stencilMaskSeparate', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.stencilMaskSeparate.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'stencilOp': {

        value: createNativeFunc('stencilOp', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.stencilOp.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'stencilOpSeparate': {

        value: createNativeFunc('stencilOpSeparate', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.stencilOpSeparate.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'texImage2D': {

        value: createNativeFunc('texImage2D', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.texImage2D.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'texParameterf': {

        value: createNativeFunc('texParameterf', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.texParameterf.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'texParameteri': {

        value: createNativeFunc('texParameteri', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.texParameteri.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'texSubImage2D': {

        value: createNativeFunc('texSubImage2D', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.texSubImage2D.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'useProgram': {

        value: createNativeFunc('useProgram', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.useProgram.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'validateProgram': {

        value: createNativeFunc('validateProgram', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.validateProgram.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'bindBuffer': {

        value: createNativeFunc('bindBuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.bindBuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'bindFramebuffer': {

        value: createNativeFunc('bindFramebuffer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.bindFramebuffer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'bindTexture': {

        value: createNativeFunc('bindTexture', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.bindTexture.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'clear': {

        value: createNativeFunc('clear', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.clear.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'clearColor': {

        value: createNativeFunc('clearColor', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.clearColor.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'clearDepth': {

        value: createNativeFunc('clearDepth', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.clearDepth.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'clearStencil': {

        value: createNativeFunc('clearStencil', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.clearStencil.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'colorMask': {

        value: createNativeFunc('colorMask', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.colorMask.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'disableVertexAttribArray': {

        value: createNativeFunc('disableVertexAttribArray', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.disableVertexAttribArray.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'drawArrays': {

        value: createNativeFunc('drawArrays', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.drawArrays.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'drawElements': {

        value: createNativeFunc('drawElements', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.drawElements.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'enableVertexAttribArray': {

        value: createNativeFunc('enableVertexAttribArray', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.enableVertexAttribArray.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'scissor': {

        value: createNativeFunc('scissor', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.scissor.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform1f': {

        value: createNativeFunc('uniform1f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform1f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform1fv': {

        value: createNativeFunc('uniform1fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform1fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform1i': {

        value: createNativeFunc('uniform1i', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform1i.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform1iv': {

        value: createNativeFunc('uniform1iv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform1iv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform2f': {

        value: createNativeFunc('uniform2f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform2f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform2fv': {

        value: createNativeFunc('uniform2fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform2fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform2i': {

        value: createNativeFunc('uniform2i', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform2i.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform2iv': {

        value: createNativeFunc('uniform2iv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform2iv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform3f': {

        value: createNativeFunc('uniform3f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform3f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform3fv': {

        value: createNativeFunc('uniform3fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform3fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform3i': {

        value: createNativeFunc('uniform3i', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform3i.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform3iv': {

        value: createNativeFunc('uniform3iv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform3iv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform4f': {

        value: createNativeFunc('uniform4f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform4f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform4fv': {

        value: createNativeFunc('uniform4fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform4fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform4i': {

        value: createNativeFunc('uniform4i', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform4i.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniform4iv': {

        value: createNativeFunc('uniform4iv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniform4iv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniformMatrix2fv': {

        value: createNativeFunc('uniformMatrix2fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniformMatrix2fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniformMatrix3fv': {

        value: createNativeFunc('uniformMatrix3fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniformMatrix3fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'uniformMatrix4fv': {

        value: createNativeFunc('uniformMatrix4fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.uniformMatrix4fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib1f': {

        value: createNativeFunc('vertexAttrib1f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib1f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib1fv': {

        value: createNativeFunc('vertexAttrib1fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib1fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib2f': {

        value: createNativeFunc('vertexAttrib2f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib2f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib2fv': {

        value: createNativeFunc('vertexAttrib2fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib2fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib3f': {

        value: createNativeFunc('vertexAttrib3f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib3f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib3fv': {

        value: createNativeFunc('vertexAttrib3fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib3fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib4f': {

        value: createNativeFunc('vertexAttrib4f', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib4f.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttrib4fv': {

        value: createNativeFunc('vertexAttrib4fv', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttrib4fv.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'vertexAttribPointer': {

        value: createNativeFunc('vertexAttribPointer', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.vertexAttribPointer.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'viewport': {

        value: createNativeFunc('viewport', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.viewport.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'drawingBufferFormat': {

        get: createNativeFunc('drawingBufferFormat', 10, function (){


            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['drawingBufferFormat'];
            if (debug)print('WebGLRenderingContext.drawingBufferFormat.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'RGB8': {

        value: 32849, writable:false, enumerable:true, configurable:false,



    },
    'RGBA8': {

        value: 32856, writable:false, enumerable:true, configurable:false,



    },
    'drawingBufferStorage': {

        value: createNativeFunc('drawingBufferStorage', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.drawingBufferStorage.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'constructor': {

        value: createNativeFunc('constructor', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.constructor.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
    'makeXRCompatible': {

        value: createNativeFunc('makeXRCompatible', 10, function () {

            if (!WebGLRenderingContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('WebGLRenderingContext.makeXRCompatible.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
})



