// window['native_getParameter2'] = function (text, x, y, maxWidth) {
//      // mm.memory.private_data.get(this).context.stroke()    // mm.memory.private_data.get(this).context.moveTo(x, y)
// }
//
// Utils.registerNative('getParameter2', 'getParameter2')


WebGL2RenderingContext = newFunc('WebGL2RenderingContext', 2, function WebGL2RenderingContext() {
    print('WebGL2RenderingContext.call')
})


Object.defineProperties(WebGL2RenderingContext.prototype, {
 [Symbol.toStringTag]: {
        configurable: true, enumerable: false, writable: false,
        value: 'WebGL2RenderingContext'

    },
    canvas: {

        get: newFunc('canvas', 10, function canvas() {
            let res = mm.memory.private_data.get(this).canvas;
            if (debug) print('WebGL2RenderingContext.canvas.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    drawingBufferWidth: {

        get: newFunc('drawingBufferWidth', 10, function drawingBufferWidth() {
            let res = mm.memory.private_data.get(this).drawingBufferWidth;
            if (debug) print('WebGL2RenderingContext.drawingBufferWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    drawingBufferHeight: {

        get: newFunc('drawingBufferHeight', 10, function drawingBufferHeight() {
            let res = mm.memory.private_data.get(this).drawingBufferHeight;
            if (debug) print('WebGL2RenderingContext.drawingBufferHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    drawingBufferColorSpace: {

        get: newFunc('drawingBufferColorSpace', 10, function drawingBufferColorSpace() {
            let res = mm.memory.private_data.get(this).drawingBufferColorSpace;
            if (debug) print('WebGL2RenderingContext.drawingBufferColorSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('drawingBufferColorSpace', 1, function drawingBufferColorSpace(value) {
            if (debug) print('WebGL2RenderingContext.drawingBufferColorSpace.set', value)
            mm.memory.private_data.get(this).drawingBufferColorSpace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    unpackColorSpace: {

        get: newFunc('unpackColorSpace', 10, function unpackColorSpace() {
            let res = mm.memory.private_data.get(this).unpackColorSpace;
            if (debug) print('WebGL2RenderingContext.unpackColorSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('unpackColorSpace', 1, function unpackColorSpace(value) {
            if (debug) print('WebGL2RenderingContext.unpackColorSpace.set', value)
            mm.memory.private_data.get(this).unpackColorSpace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    DEPTH_BUFFER_BIT: {

        value: 256, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BUFFER_BIT: {

        value: 1024, writable: false, enumerable: false, configurable: false,


    },
    COLOR_BUFFER_BIT: {

        value: 16384, writable: false, enumerable: false, configurable: false,


    },
    POINTS: {},
    LINES: {

        value: 1, writable: false, enumerable: false, configurable: false,


    },
    LINE_LOOP: {

        value: 2, writable: false, enumerable: false, configurable: false,


    },
    LINE_STRIP: {

        value: 3, writable: false, enumerable: false, configurable: false,


    },
    TRIANGLES: {

        value: 4, writable: false, enumerable: false, configurable: false,


    },
    TRIANGLE_STRIP: {

        value: 5, writable: false, enumerable: false, configurable: false,


    },
    TRIANGLE_FAN: {

        value: 6, writable: false, enumerable: false, configurable: false,


    },
    ZERO: {},
    ONE: {

        value: 1, writable: false, enumerable: false, configurable: false,


    },
    SRC_COLOR: {

        value: 768, writable: false, enumerable: false, configurable: false,


    },
    ONE_MINUS_SRC_COLOR: {

        value: 769, writable: false, enumerable: false, configurable: false,


    },
    SRC_ALPHA: {

        value: 770, writable: false, enumerable: false, configurable: false,


    },
    ONE_MINUS_SRC_ALPHA: {

        value: 771, writable: false, enumerable: false, configurable: false,


    },
    DST_ALPHA: {

        value: 772, writable: false, enumerable: false, configurable: false,


    },
    ONE_MINUS_DST_ALPHA: {

        value: 773, writable: false, enumerable: false, configurable: false,


    },
    DST_COLOR: {

        value: 774, writable: false, enumerable: false, configurable: false,


    },
    ONE_MINUS_DST_COLOR: {

        value: 775, writable: false, enumerable: false, configurable: false,


    },
    SRC_ALPHA_SATURATE: {

        value: 776, writable: false, enumerable: false, configurable: false,


    },
    FUNC_ADD: {

        value: 32774, writable: false, enumerable: false, configurable: false,


    },
    BLEND_EQUATION: {

        value: 32777, writable: false, enumerable: false, configurable: false,


    },
    BLEND_EQUATION_RGB: {

        value: 32777, writable: false, enumerable: false, configurable: false,


    },
    BLEND_EQUATION_ALPHA: {

        value: 34877, writable: false, enumerable: false, configurable: false,


    },
    FUNC_SUBTRACT: {

        value: 32778, writable: false, enumerable: false, configurable: false,


    },
    FUNC_REVERSE_SUBTRACT: {

        value: 32779, writable: false, enumerable: false, configurable: false,


    },
    BLEND_DST_RGB: {

        value: 32968, writable: false, enumerable: false, configurable: false,


    },
    BLEND_SRC_RGB: {

        value: 32969, writable: false, enumerable: false, configurable: false,


    },
    BLEND_DST_ALPHA: {

        value: 32970, writable: false, enumerable: false, configurable: false,


    },
    BLEND_SRC_ALPHA: {

        value: 32971, writable: false, enumerable: false, configurable: false,


    },
    CONSTANT_COLOR: {

        value: 32769, writable: false, enumerable: false, configurable: false,


    },
    ONE_MINUS_CONSTANT_COLOR: {

        value: 32770, writable: false, enumerable: false, configurable: false,


    },
    CONSTANT_ALPHA: {

        value: 32771, writable: false, enumerable: false, configurable: false,


    },
    ONE_MINUS_CONSTANT_ALPHA: {

        value: 32772, writable: false, enumerable: false, configurable: false,


    },
    BLEND_COLOR: {

        value: 32773, writable: false, enumerable: false, configurable: false,


    },
    ARRAY_BUFFER: {

        value: 34962, writable: false, enumerable: false, configurable: false,


    },
    ELEMENT_ARRAY_BUFFER: {

        value: 34963, writable: false, enumerable: false, configurable: false,


    },
    ARRAY_BUFFER_BINDING: {

        value: 34964, writable: false, enumerable: false, configurable: false,


    },
    ELEMENT_ARRAY_BUFFER_BINDING: {

        value: 34965, writable: false, enumerable: false, configurable: false,


    },
    STREAM_DRAW: {

        value: 35040, writable: false, enumerable: false, configurable: false,


    },
    STATIC_DRAW: {

        value: 35044, writable: false, enumerable: false, configurable: false,


    },
    DYNAMIC_DRAW: {

        value: 35048, writable: false, enumerable: false, configurable: false,


    },
    BUFFER_SIZE: {

        value: 34660, writable: false, enumerable: false, configurable: false,


    },
    BUFFER_USAGE: {

        value: 34661, writable: false, enumerable: false, configurable: false,


    },
    CURRENT_VERTEX_ATTRIB: {

        value: 34342, writable: false, enumerable: false, configurable: false,


    },
    FRONT: {

        value: 1028, writable: false, enumerable: false, configurable: false,


    },
    BACK: {

        value: 1029, writable: false, enumerable: false, configurable: false,


    },
    FRONT_AND_BACK: {

        value: 1032, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_2D: {

        value: 3553, writable: false, enumerable: false, configurable: false,


    },
    CULL_FACE: {

        value: 2884, writable: false, enumerable: false, configurable: false,


    },
    BLEND: {

        value: 3042, writable: false, enumerable: false, configurable: false,


    },
    DITHER: {

        value: 3024, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_TEST: {

        value: 2960, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_TEST: {

        value: 2929, writable: false, enumerable: false, configurable: false,


    },
    SCISSOR_TEST: {

        value: 3089, writable: false, enumerable: false, configurable: false,


    },
    POLYGON_OFFSET_FILL: {

        value: 32823, writable: false, enumerable: false, configurable: false,


    },
    SAMPLE_ALPHA_TO_COVERAGE: {

        value: 32926, writable: false, enumerable: false, configurable: false,


    },
    SAMPLE_COVERAGE: {

        value: 32928, writable: false, enumerable: false, configurable: false,


    },
    NO_ERROR: {},
    INVALID_ENUM: {

        value: 1280, writable: false, enumerable: false, configurable: false,


    },
    INVALID_VALUE: {

        value: 1281, writable: false, enumerable: false, configurable: false,


    },
    INVALID_OPERATION: {

        value: 1282, writable: false, enumerable: false, configurable: false,


    },
    OUT_OF_MEMORY: {

        value: 1285, writable: false, enumerable: false, configurable: false,


    },
    CW: {

        value: 2304, writable: false, enumerable: false, configurable: false,


    },
    CCW: {

        value: 2305, writable: false, enumerable: false, configurable: false,


    },
    LINE_WIDTH: {

        value: 2849, writable: false, enumerable: false, configurable: false,


    },
    ALIASED_POINT_SIZE_RANGE: {

        value: 33901, writable: false, enumerable: false, configurable: false,


    },
    ALIASED_LINE_WIDTH_RANGE: {

        value: 33902, writable: false, enumerable: false, configurable: false,


    },
    CULL_FACE_MODE: {

        value: 2885, writable: false, enumerable: false, configurable: false,


    },
    FRONT_FACE: {

        value: 2886, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_RANGE: {

        value: 2928, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_WRITEMASK: {

        value: 2930, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_CLEAR_VALUE: {

        value: 2931, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_FUNC: {

        value: 2932, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_CLEAR_VALUE: {

        value: 2961, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_FUNC: {

        value: 2962, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_FAIL: {

        value: 2964, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_PASS_DEPTH_FAIL: {

        value: 2965, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_PASS_DEPTH_PASS: {

        value: 2966, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_REF: {

        value: 2967, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_VALUE_MASK: {

        value: 2963, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_WRITEMASK: {

        value: 2968, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BACK_FUNC: {

        value: 34816, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BACK_FAIL: {

        value: 34817, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BACK_PASS_DEPTH_FAIL: {

        value: 34818, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BACK_PASS_DEPTH_PASS: {

        value: 34819, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BACK_REF: {

        value: 36003, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BACK_VALUE_MASK: {

        value: 36004, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BACK_WRITEMASK: {

        value: 36005, writable: false, enumerable: false, configurable: false,


    },
    VIEWPORT: {

        value: 2978, writable: false, enumerable: false, configurable: false,


    },
    SCISSOR_BOX: {

        value: 3088, writable: false, enumerable: false, configurable: false,


    },
    COLOR_CLEAR_VALUE: {

        value: 3106, writable: false, enumerable: false, configurable: false,


    },
    COLOR_WRITEMASK: {

        value: 3107, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_ALIGNMENT: {

        value: 3317, writable: false, enumerable: false, configurable: false,


    },
    PACK_ALIGNMENT: {

        value: 3333, writable: false, enumerable: false, configurable: false,


    },
    MAX_TEXTURE_SIZE: {

        value: 3379, writable: false, enumerable: false, configurable: false,


    },
    MAX_VIEWPORT_DIMS: {

        value: 3386, writable: false, enumerable: false, configurable: false,


    },
    SUBPIXEL_BITS: {

        value: 3408, writable: false, enumerable: false, configurable: false,


    },
    RED_BITS: {

        value: 3410, writable: false, enumerable: false, configurable: false,


    },
    GREEN_BITS: {

        value: 3411, writable: false, enumerable: false, configurable: false,


    },
    BLUE_BITS: {

        value: 3412, writable: false, enumerable: false, configurable: false,


    },
    ALPHA_BITS: {

        value: 3413, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_BITS: {

        value: 3414, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_BITS: {

        value: 3415, writable: false, enumerable: false, configurable: false,


    },
    POLYGON_OFFSET_UNITS: {

        value: 10752, writable: false, enumerable: false, configurable: false,


    },
    POLYGON_OFFSET_FACTOR: {

        value: 32824, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_BINDING_2D: {

        value: 32873, writable: false, enumerable: false, configurable: false,


    },
    SAMPLE_BUFFERS: {

        value: 32936, writable: false, enumerable: false, configurable: false,


    },
    SAMPLES: {

        value: 32937, writable: false, enumerable: false, configurable: false,


    },
    SAMPLE_COVERAGE_VALUE: {

        value: 32938, writable: false, enumerable: false, configurable: false,


    },
    SAMPLE_COVERAGE_INVERT: {

        value: 32939, writable: false, enumerable: false, configurable: false,


    },
    COMPRESSED_TEXTURE_FORMATS: {

        value: 34467, writable: false, enumerable: false, configurable: false,


    },
    DONT_CARE: {

        value: 4352, writable: false, enumerable: false, configurable: false,


    },
    FASTEST: {

        value: 4353, writable: false, enumerable: false, configurable: false,


    },
    NICEST: {

        value: 4354, writable: false, enumerable: false, configurable: false,


    },
    GENERATE_MIPMAP_HINT: {

        value: 33170, writable: false, enumerable: false, configurable: false,


    },
    BYTE: {

        value: 5120, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_BYTE: {

        value: 5121, writable: false, enumerable: false, configurable: false,


    },
    SHORT: {

        value: 5122, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_SHORT: {

        value: 5123, writable: false, enumerable: false, configurable: false,


    },
    INT: {

        value: 5124, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT: {

        value: 5125, writable: false, enumerable: false, configurable: false,


    },
    FLOAT: {

        value: 5126, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_COMPONENT: {

        value: 6402, writable: false, enumerable: false, configurable: false,


    },
    ALPHA: {

        value: 6406, writable: false, enumerable: false, configurable: false,


    },
    RGB: {

        value: 6407, writable: false, enumerable: false, configurable: false,


    },
    RGBA: {

        value: 6408, writable: false, enumerable: false, configurable: false,


    },
    LUMINANCE: {

        value: 6409, writable: false, enumerable: false, configurable: false,


    },
    LUMINANCE_ALPHA: {

        value: 6410, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_SHORT_4_4_4_4: {

        value: 32819, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_SHORT_5_5_5_1: {

        value: 32820, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_SHORT_5_6_5: {

        value: 33635, writable: false, enumerable: false, configurable: false,


    },
    FRAGMENT_SHADER: {

        value: 35632, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_SHADER: {

        value: 35633, writable: false, enumerable: false, configurable: false,


    },
    MAX_VERTEX_ATTRIBS: {

        value: 34921, writable: false, enumerable: false, configurable: false,


    },
    MAX_VERTEX_UNIFORM_VECTORS: {

        value: 36347, writable: false, enumerable: false, configurable: false,


    },
    MAX_VARYING_VECTORS: {

        value: 36348, writable: false, enumerable: false, configurable: false,


    },
    MAX_COMBINED_TEXTURE_IMAGE_UNITS: {

        value: 35661, writable: false, enumerable: false, configurable: false,


    },
    MAX_VERTEX_TEXTURE_IMAGE_UNITS: {

        value: 35660, writable: false, enumerable: false, configurable: false,


    },
    MAX_TEXTURE_IMAGE_UNITS: {

        value: 34930, writable: false, enumerable: false, configurable: false,


    },
    MAX_FRAGMENT_UNIFORM_VECTORS: {

        value: 36349, writable: false, enumerable: false, configurable: false,


    },
    SHADER_TYPE: {

        value: 35663, writable: false, enumerable: false, configurable: false,


    },
    DELETE_STATUS: {

        value: 35712, writable: false, enumerable: false, configurable: false,


    },
    LINK_STATUS: {

        value: 35714, writable: false, enumerable: false, configurable: false,


    },
    VALIDATE_STATUS: {

        value: 35715, writable: false, enumerable: false, configurable: false,


    },
    ATTACHED_SHADERS: {

        value: 35717, writable: false, enumerable: false, configurable: false,


    },
    ACTIVE_UNIFORMS: {

        value: 35718, writable: false, enumerable: false, configurable: false,


    },
    ACTIVE_ATTRIBUTES: {

        value: 35721, writable: false, enumerable: false, configurable: false,


    },
    SHADING_LANGUAGE_VERSION: {

        value: 35724, writable: false, enumerable: false, configurable: false,


    },
    CURRENT_PROGRAM: {

        value: 35725, writable: false, enumerable: false, configurable: false,


    },
    NEVER: {

        value: 512, writable: false, enumerable: false, configurable: false,


    },
    LESS: {

        value: 513, writable: false, enumerable: false, configurable: false,


    },
    EQUAL: {

        value: 514, writable: false, enumerable: false, configurable: false,


    },
    LEQUAL: {

        value: 515, writable: false, enumerable: false, configurable: false,


    },
    GREATER: {

        value: 516, writable: false, enumerable: false, configurable: false,


    },
    NOTEQUAL: {

        value: 517, writable: false, enumerable: false, configurable: false,


    },
    GEQUAL: {

        value: 518, writable: false, enumerable: false, configurable: false,


    },
    ALWAYS: {

        value: 519, writable: false, enumerable: false, configurable: false,


    },
    KEEP: {

        value: 7680, writable: false, enumerable: false, configurable: false,


    },
    REPLACE: {

        value: 7681, writable: false, enumerable: false, configurable: false,


    },
    INCR: {

        value: 7682, writable: false, enumerable: false, configurable: false,


    },
    DECR: {

        value: 7683, writable: false, enumerable: false, configurable: false,


    },
    INVERT: {

        value: 5386, writable: false, enumerable: false, configurable: false,


    },
    INCR_WRAP: {

        value: 34055, writable: false, enumerable: false, configurable: false,


    },
    DECR_WRAP: {

        value: 34056, writable: false, enumerable: false, configurable: false,


    },
    VENDOR: {

        value: 7936, writable: false, enumerable: false, configurable: false,


    },
    RENDERER: {

        value: 7937, writable: false, enumerable: false, configurable: false,


    },
    VERSION: {

        value: 7938, writable: false, enumerable: false, configurable: false,


    },
    NEAREST: {

        value: 9728, writable: false, enumerable: false, configurable: false,


    },
    LINEAR: {

        value: 9729, writable: false, enumerable: false, configurable: false,


    },
    NEAREST_MIPMAP_NEAREST: {

        value: 9984, writable: false, enumerable: false, configurable: false,


    },
    LINEAR_MIPMAP_NEAREST: {

        value: 9985, writable: false, enumerable: false, configurable: false,


    },
    NEAREST_MIPMAP_LINEAR: {

        value: 9986, writable: false, enumerable: false, configurable: false,


    },
    LINEAR_MIPMAP_LINEAR: {

        value: 9987, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_MAG_FILTER: {

        value: 10240, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_MIN_FILTER: {

        value: 10241, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_WRAP_S: {

        value: 10242, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_WRAP_T: {

        value: 10243, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE: {

        value: 5890, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_CUBE_MAP: {

        value: 34067, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_BINDING_CUBE_MAP: {

        value: 34068, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_CUBE_MAP_POSITIVE_X: {

        value: 34069, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_CUBE_MAP_NEGATIVE_X: {

        value: 34070, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_CUBE_MAP_POSITIVE_Y: {

        value: 34071, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_CUBE_MAP_NEGATIVE_Y: {

        value: 34072, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_CUBE_MAP_POSITIVE_Z: {

        value: 34073, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_CUBE_MAP_NEGATIVE_Z: {

        value: 34074, writable: false, enumerable: false, configurable: false,


    },
    MAX_CUBE_MAP_TEXTURE_SIZE: {

        value: 34076, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE0: {

        value: 33984, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE1: {

        value: 33985, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE2: {

        value: 33986, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE3: {

        value: 33987, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE4: {

        value: 33988, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE5: {

        value: 33989, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE6: {

        value: 33990, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE7: {

        value: 33991, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE8: {

        value: 33992, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE9: {

        value: 33993, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE10: {

        value: 33994, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE11: {

        value: 33995, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE12: {

        value: 33996, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE13: {

        value: 33997, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE14: {

        value: 33998, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE15: {

        value: 33999, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE16: {

        value: 34000, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE17: {

        value: 34001, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE18: {

        value: 34002, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE19: {

        value: 34003, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE20: {

        value: 34004, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE21: {

        value: 34005, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE22: {

        value: 34006, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE23: {

        value: 34007, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE24: {

        value: 34008, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE25: {

        value: 34009, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE26: {

        value: 34010, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE27: {

        value: 34011, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE28: {

        value: 34012, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE29: {

        value: 34013, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE30: {

        value: 34014, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE31: {

        value: 34015, writable: false, enumerable: false, configurable: false,


    },
    ACTIVE_TEXTURE: {

        value: 34016, writable: false, enumerable: false, configurable: false,


    },
    REPEAT: {

        value: 10497, writable: false, enumerable: false, configurable: false,


    },
    CLAMP_TO_EDGE: {

        value: 33071, writable: false, enumerable: false, configurable: false,


    },
    MIRRORED_REPEAT: {

        value: 33648, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_VEC2: {

        value: 35664, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_VEC3: {

        value: 35665, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_VEC4: {

        value: 35666, writable: false, enumerable: false, configurable: false,


    },
    INT_VEC2: {

        value: 35667, writable: false, enumerable: false, configurable: false,


    },
    INT_VEC3: {

        value: 35668, writable: false, enumerable: false, configurable: false,


    },
    INT_VEC4: {

        value: 35669, writable: false, enumerable: false, configurable: false,


    },
    BOOL: {

        value: 35670, writable: false, enumerable: false, configurable: false,


    },
    BOOL_VEC2: {

        value: 35671, writable: false, enumerable: false, configurable: false,


    },
    BOOL_VEC3: {

        value: 35672, writable: false, enumerable: false, configurable: false,


    },
    BOOL_VEC4: {

        value: 35673, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT2: {

        value: 35674, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT3: {

        value: 35675, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT4: {

        value: 35676, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_2D: {

        value: 35678, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_CUBE: {

        value: 35680, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_ENABLED: {

        value: 34338, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_SIZE: {

        value: 34339, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_STRIDE: {

        value: 34340, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_TYPE: {

        value: 34341, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_NORMALIZED: {

        value: 34922, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_POINTER: {

        value: 34373, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_BUFFER_BINDING: {

        value: 34975, writable: false, enumerable: false, configurable: false,


    },
    IMPLEMENTATION_COLOR_READ_TYPE: {

        value: 35738, writable: false, enumerable: false, configurable: false,


    },
    IMPLEMENTATION_COLOR_READ_FORMAT: {

        value: 35739, writable: false, enumerable: false, configurable: false,


    },
    COMPILE_STATUS: {

        value: 35713, writable: false, enumerable: false, configurable: false,


    },
    LOW_FLOAT: {

        value: 36336, writable: false, enumerable: false, configurable: false,


    },
    MEDIUM_FLOAT: {

        value: 36337, writable: false, enumerable: false, configurable: false,


    },
    HIGH_FLOAT: {

        value: 36338, writable: false, enumerable: false, configurable: false,


    },
    LOW_INT: {

        value: 36339, writable: false, enumerable: false, configurable: false,


    },
    MEDIUM_INT: {

        value: 36340, writable: false, enumerable: false, configurable: false,


    },
    HIGH_INT: {

        value: 36341, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER: {

        value: 36160, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER: {

        value: 36161, writable: false, enumerable: false, configurable: false,


    },
    RGBA4: {

        value: 32854, writable: false, enumerable: false, configurable: false,


    },
    RGB5_A1: {

        value: 32855, writable: false, enumerable: false, configurable: false,


    },
    RGB565: {

        value: 36194, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_COMPONENT16: {

        value: 33189, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_INDEX8: {

        value: 36168, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_STENCIL: {

        value: 34041, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_WIDTH: {

        value: 36162, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_HEIGHT: {

        value: 36163, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_INTERNAL_FORMAT: {

        value: 36164, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_RED_SIZE: {

        value: 36176, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_GREEN_SIZE: {

        value: 36177, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_BLUE_SIZE: {

        value: 36178, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_ALPHA_SIZE: {

        value: 36179, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_DEPTH_SIZE: {

        value: 36180, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_STENCIL_SIZE: {

        value: 36181, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE: {

        value: 36048, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_OBJECT_NAME: {

        value: 36049, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL: {

        value: 36050, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE: {

        value: 36051, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT0: {

        value: 36064, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_ATTACHMENT: {

        value: 36096, writable: false, enumerable: false, configurable: false,


    },
    STENCIL_ATTACHMENT: {

        value: 36128, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_STENCIL_ATTACHMENT: {

        value: 33306, writable: false, enumerable: false, configurable: false,


    },
    NONE: {},
    FRAMEBUFFER_COMPLETE: {

        value: 36053, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_INCOMPLETE_ATTACHMENT: {

        value: 36054, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT: {

        value: 36055, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_INCOMPLETE_DIMENSIONS: {

        value: 36057, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_UNSUPPORTED: {

        value: 36061, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_BINDING: {

        value: 36006, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_BINDING: {

        value: 36007, writable: false, enumerable: false, configurable: false,


    },
    MAX_RENDERBUFFER_SIZE: {

        value: 34024, writable: false, enumerable: false, configurable: false,


    },
    INVALID_FRAMEBUFFER_OPERATION: {

        value: 1286, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_FLIP_Y_WEBGL: {

        value: 37440, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_PREMULTIPLY_ALPHA_WEBGL: {

        value: 37441, writable: false, enumerable: false, configurable: false,


    },
    CONTEXT_LOST_WEBGL: {

        value: 37442, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_COLORSPACE_CONVERSION_WEBGL: {

        value: 37443, writable: false, enumerable: false, configurable: false,


    },
    BROWSER_DEFAULT_WEBGL: {

        value: 37444, writable: false, enumerable: false, configurable: false,


    },
    READ_BUFFER: {

        value: 3074, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_ROW_LENGTH: {

        value: 3314, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_SKIP_ROWS: {

        value: 3315, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_SKIP_PIXELS: {

        value: 3316, writable: false, enumerable: false, configurable: false,


    },
    PACK_ROW_LENGTH: {

        value: 3330, writable: false, enumerable: false, configurable: false,


    },
    PACK_SKIP_ROWS: {

        value: 3331, writable: false, enumerable: false, configurable: false,


    },
    PACK_SKIP_PIXELS: {

        value: 3332, writable: false, enumerable: false, configurable: false,


    },
    COLOR: {

        value: 6144, writable: false, enumerable: false, configurable: false,


    },
    DEPTH: {

        value: 6145, writable: false, enumerable: false, configurable: false,


    },
    STENCIL: {

        value: 6146, writable: false, enumerable: false, configurable: false,


    },
    RED: {

        value: 6403, writable: false, enumerable: false, configurable: false,


    },
    RGB8: {

        value: 32849, writable: false, enumerable: false, configurable: false,


    },
    RGBA8: {

        value: 32856, writable: false, enumerable: false, configurable: false,


    },
    RGB10_A2: {

        value: 32857, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_BINDING_3D: {

        value: 32874, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_SKIP_IMAGES: {

        value: 32877, writable: false, enumerable: false, configurable: false,


    },
    UNPACK_IMAGE_HEIGHT: {

        value: 32878, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_3D: {

        value: 32879, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_WRAP_R: {

        value: 32882, writable: false, enumerable: false, configurable: false,


    },
    MAX_3D_TEXTURE_SIZE: {

        value: 32883, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_2_10_10_10_REV: {

        value: 33640, writable: false, enumerable: false, configurable: false,


    },
    MAX_ELEMENTS_VERTICES: {

        value: 33000, writable: false, enumerable: false, configurable: false,


    },
    MAX_ELEMENTS_INDICES: {

        value: 33001, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_MIN_LOD: {

        value: 33082, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_MAX_LOD: {

        value: 33083, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_BASE_LEVEL: {

        value: 33084, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_MAX_LEVEL: {

        value: 33085, writable: false, enumerable: false, configurable: false,


    },
    MIN: {

        value: 32775, writable: false, enumerable: false, configurable: false,


    },
    MAX: {

        value: 32776, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_COMPONENT24: {

        value: 33190, writable: false, enumerable: false, configurable: false,


    },
    MAX_TEXTURE_LOD_BIAS: {

        value: 34045, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_COMPARE_MODE: {

        value: 34892, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_COMPARE_FUNC: {

        value: 34893, writable: false, enumerable: false, configurable: false,


    },
    CURRENT_QUERY: {

        value: 34917, writable: false, enumerable: false, configurable: false,


    },
    QUERY_RESULT: {

        value: 34918, writable: false, enumerable: false, configurable: false,


    },
    QUERY_RESULT_AVAILABLE: {

        value: 34919, writable: false, enumerable: false, configurable: false,


    },
    STREAM_READ: {

        value: 35041, writable: false, enumerable: false, configurable: false,


    },
    STREAM_COPY: {

        value: 35042, writable: false, enumerable: false, configurable: false,


    },
    STATIC_READ: {

        value: 35045, writable: false, enumerable: false, configurable: false,


    },
    STATIC_COPY: {

        value: 35046, writable: false, enumerable: false, configurable: false,


    },
    DYNAMIC_READ: {

        value: 35049, writable: false, enumerable: false, configurable: false,


    },
    DYNAMIC_COPY: {

        value: 35050, writable: false, enumerable: false, configurable: false,


    },
    MAX_DRAW_BUFFERS: {

        value: 34852, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER0: {

        value: 34853, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER1: {

        value: 34854, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER2: {

        value: 34855, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER3: {

        value: 34856, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER4: {

        value: 34857, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER5: {

        value: 34858, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER6: {

        value: 34859, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER7: {

        value: 34860, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER8: {

        value: 34861, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER9: {

        value: 34862, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER10: {

        value: 34863, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER11: {

        value: 34864, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER12: {

        value: 34865, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER13: {

        value: 34866, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER14: {

        value: 34867, writable: false, enumerable: false, configurable: false,


    },
    DRAW_BUFFER15: {

        value: 34868, writable: false, enumerable: false, configurable: false,


    },
    MAX_FRAGMENT_UNIFORM_COMPONENTS: {

        value: 35657, writable: false, enumerable: false, configurable: false,


    },
    MAX_VERTEX_UNIFORM_COMPONENTS: {

        value: 35658, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_3D: {

        value: 35679, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_2D_SHADOW: {

        value: 35682, writable: false, enumerable: false, configurable: false,


    },
    FRAGMENT_SHADER_DERIVATIVE_HINT: {

        value: 35723, writable: false, enumerable: false, configurable: false,


    },
    PIXEL_PACK_BUFFER: {

        value: 35051, writable: false, enumerable: false, configurable: false,


    },
    PIXEL_UNPACK_BUFFER: {

        value: 35052, writable: false, enumerable: false, configurable: false,


    },
    PIXEL_PACK_BUFFER_BINDING: {

        value: 35053, writable: false, enumerable: false, configurable: false,


    },
    PIXEL_UNPACK_BUFFER_BINDING: {

        value: 35055, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT2x3: {

        value: 35685, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT2x4: {

        value: 35686, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT3x2: {

        value: 35687, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT3x4: {

        value: 35688, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT4x2: {

        value: 35689, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_MAT4x3: {

        value: 35690, writable: false, enumerable: false, configurable: false,


    },
    SRGB: {

        value: 35904, writable: false, enumerable: false, configurable: false,


    },
    SRGB8: {

        value: 35905, writable: false, enumerable: false, configurable: false,


    },
    SRGB8_ALPHA8: {

        value: 35907, writable: false, enumerable: false, configurable: false,


    },
    COMPARE_REF_TO_TEXTURE: {

        value: 34894, writable: false, enumerable: false, configurable: false,


    },
    RGBA32F: {

        value: 34836, writable: false, enumerable: false, configurable: false,


    },
    RGB32F: {

        value: 34837, writable: false, enumerable: false, configurable: false,


    },
    RGBA16F: {

        value: 34842, writable: false, enumerable: false, configurable: false,


    },
    RGB16F: {

        value: 34843, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_INTEGER: {

        value: 35069, writable: false, enumerable: false, configurable: false,


    },
    MAX_ARRAY_TEXTURE_LAYERS: {

        value: 35071, writable: false, enumerable: false, configurable: false,


    },
    MIN_PROGRAM_TEXEL_OFFSET: {

        value: 35076, writable: false, enumerable: false, configurable: false,


    },
    MAX_PROGRAM_TEXEL_OFFSET: {

        value: 35077, writable: false, enumerable: false, configurable: false,


    },
    MAX_VARYING_COMPONENTS: {

        value: 35659, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_2D_ARRAY: {

        value: 35866, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_BINDING_2D_ARRAY: {

        value: 35869, writable: false, enumerable: false, configurable: false,


    },
    R11F_G11F_B10F: {

        value: 35898, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_10F_11F_11F_REV: {

        value: 35899, writable: false, enumerable: false, configurable: false,


    },
    RGB9_E5: {

        value: 35901, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_5_9_9_9_REV: {

        value: 35902, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_BUFFER_MODE: {

        value: 35967, writable: false, enumerable: false, configurable: false,


    },
    MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS: {

        value: 35968, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_VARYINGS: {

        value: 35971, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_BUFFER_START: {

        value: 35972, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_BUFFER_SIZE: {

        value: 35973, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN: {

        value: 35976, writable: false, enumerable: false, configurable: false,


    },
    RASTERIZER_DISCARD: {

        value: 35977, writable: false, enumerable: false, configurable: false,


    },
    MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS: {

        value: 35978, writable: false, enumerable: false, configurable: false,


    },
    MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS: {

        value: 35979, writable: false, enumerable: false, configurable: false,


    },
    INTERLEAVED_ATTRIBS: {

        value: 35980, writable: false, enumerable: false, configurable: false,


    },
    SEPARATE_ATTRIBS: {

        value: 35981, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_BUFFER: {

        value: 35982, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_BUFFER_BINDING: {

        value: 35983, writable: false, enumerable: false, configurable: false,


    },
    RGBA32UI: {

        value: 36208, writable: false, enumerable: false, configurable: false,


    },
    RGB32UI: {

        value: 36209, writable: false, enumerable: false, configurable: false,


    },
    RGBA16UI: {

        value: 36214, writable: false, enumerable: false, configurable: false,


    },
    RGB16UI: {

        value: 36215, writable: false, enumerable: false, configurable: false,


    },
    RGBA8UI: {

        value: 36220, writable: false, enumerable: false, configurable: false,


    },
    RGB8UI: {

        value: 36221, writable: false, enumerable: false, configurable: false,


    },
    RGBA32I: {

        value: 36226, writable: false, enumerable: false, configurable: false,


    },
    RGB32I: {

        value: 36227, writable: false, enumerable: false, configurable: false,


    },
    RGBA16I: {

        value: 36232, writable: false, enumerable: false, configurable: false,


    },
    RGB16I: {

        value: 36233, writable: false, enumerable: false, configurable: false,


    },
    RGBA8I: {

        value: 36238, writable: false, enumerable: false, configurable: false,


    },
    RGB8I: {

        value: 36239, writable: false, enumerable: false, configurable: false,


    },
    RED_INTEGER: {

        value: 36244, writable: false, enumerable: false, configurable: false,


    },
    RGB_INTEGER: {

        value: 36248, writable: false, enumerable: false, configurable: false,


    },
    RGBA_INTEGER: {

        value: 36249, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_2D_ARRAY: {

        value: 36289, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_2D_ARRAY_SHADOW: {

        value: 36292, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_CUBE_SHADOW: {

        value: 36293, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_VEC2: {

        value: 36294, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_VEC3: {

        value: 36295, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_VEC4: {

        value: 36296, writable: false, enumerable: false, configurable: false,


    },
    INT_SAMPLER_2D: {

        value: 36298, writable: false, enumerable: false, configurable: false,


    },
    INT_SAMPLER_3D: {

        value: 36299, writable: false, enumerable: false, configurable: false,


    },
    INT_SAMPLER_CUBE: {

        value: 36300, writable: false, enumerable: false, configurable: false,


    },
    INT_SAMPLER_2D_ARRAY: {

        value: 36303, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_SAMPLER_2D: {

        value: 36306, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_SAMPLER_3D: {

        value: 36307, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_SAMPLER_CUBE: {

        value: 36308, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_SAMPLER_2D_ARRAY: {

        value: 36311, writable: false, enumerable: false, configurable: false,


    },
    DEPTH_COMPONENT32F: {

        value: 36012, writable: false, enumerable: false, configurable: false,


    },
    DEPTH32F_STENCIL8: {

        value: 36013, writable: false, enumerable: false, configurable: false,


    },
    FLOAT_32_UNSIGNED_INT_24_8_REV: {

        value: 36269, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING: {

        value: 33296, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE: {

        value: 33297, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_RED_SIZE: {

        value: 33298, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_GREEN_SIZE: {

        value: 33299, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_BLUE_SIZE: {

        value: 33300, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE: {

        value: 33301, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE: {

        value: 33302, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE: {

        value: 33303, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_DEFAULT: {

        value: 33304, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_INT_24_8: {

        value: 34042, writable: false, enumerable: false, configurable: false,


    },
    DEPTH24_STENCIL8: {

        value: 35056, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNED_NORMALIZED: {

        value: 35863, writable: false, enumerable: false, configurable: false,


    },
    DRAW_FRAMEBUFFER_BINDING: {

        value: 36006, writable: false, enumerable: false, configurable: false,


    },
    READ_FRAMEBUFFER: {

        value: 36008, writable: false, enumerable: false, configurable: false,


    },
    DRAW_FRAMEBUFFER: {

        value: 36009, writable: false, enumerable: false, configurable: false,


    },
    READ_FRAMEBUFFER_BINDING: {

        value: 36010, writable: false, enumerable: false, configurable: false,


    },
    RENDERBUFFER_SAMPLES: {

        value: 36011, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER: {

        value: 36052, writable: false, enumerable: false, configurable: false,


    },
    MAX_COLOR_ATTACHMENTS: {

        value: 36063, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT1: {

        value: 36065, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT2: {

        value: 36066, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT3: {

        value: 36067, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT4: {

        value: 36068, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT5: {

        value: 36069, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT6: {

        value: 36070, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT7: {

        value: 36071, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT8: {

        value: 36072, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT9: {

        value: 36073, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT10: {

        value: 36074, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT11: {

        value: 36075, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT12: {

        value: 36076, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT13: {

        value: 36077, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT14: {

        value: 36078, writable: false, enumerable: false, configurable: false,


    },
    COLOR_ATTACHMENT15: {

        value: 36079, writable: false, enumerable: false, configurable: false,


    },
    FRAMEBUFFER_INCOMPLETE_MULTISAMPLE: {

        value: 36182, writable: false, enumerable: false, configurable: false,


    },
    MAX_SAMPLES: {

        value: 36183, writable: false, enumerable: false, configurable: false,


    },
    HALF_FLOAT: {

        value: 5131, writable: false, enumerable: false, configurable: false,


    },
    RG: {

        value: 33319, writable: false, enumerable: false, configurable: false,


    },
    RG_INTEGER: {

        value: 33320, writable: false, enumerable: false, configurable: false,


    },
    R8: {

        value: 33321, writable: false, enumerable: false, configurable: false,


    },
    RG8: {

        value: 33323, writable: false, enumerable: false, configurable: false,


    },
    R16F: {

        value: 33325, writable: false, enumerable: false, configurable: false,


    },
    R32F: {

        value: 33326, writable: false, enumerable: false, configurable: false,


    },
    RG16F: {

        value: 33327, writable: false, enumerable: false, configurable: false,


    },
    RG32F: {

        value: 33328, writable: false, enumerable: false, configurable: false,


    },
    R8I: {

        value: 33329, writable: false, enumerable: false, configurable: false,


    },
    R8UI: {

        value: 33330, writable: false, enumerable: false, configurable: false,


    },
    R16I: {

        value: 33331, writable: false, enumerable: false, configurable: false,


    },
    R16UI: {

        value: 33332, writable: false, enumerable: false, configurable: false,


    },
    R32I: {

        value: 33333, writable: false, enumerable: false, configurable: false,


    },
    R32UI: {

        value: 33334, writable: false, enumerable: false, configurable: false,


    },
    RG8I: {

        value: 33335, writable: false, enumerable: false, configurable: false,


    },
    RG8UI: {

        value: 33336, writable: false, enumerable: false, configurable: false,


    },
    RG16I: {

        value: 33337, writable: false, enumerable: false, configurable: false,


    },
    RG16UI: {

        value: 33338, writable: false, enumerable: false, configurable: false,


    },
    RG32I: {

        value: 33339, writable: false, enumerable: false, configurable: false,


    },
    RG32UI: {

        value: 33340, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ARRAY_BINDING: {

        value: 34229, writable: false, enumerable: false, configurable: false,


    },
    R8_SNORM: {

        value: 36756, writable: false, enumerable: false, configurable: false,


    },
    RG8_SNORM: {

        value: 36757, writable: false, enumerable: false, configurable: false,


    },
    RGB8_SNORM: {

        value: 36758, writable: false, enumerable: false, configurable: false,


    },
    RGBA8_SNORM: {

        value: 36759, writable: false, enumerable: false, configurable: false,


    },
    SIGNED_NORMALIZED: {

        value: 36764, writable: false, enumerable: false, configurable: false,


    },
    COPY_READ_BUFFER: {

        value: 36662, writable: false, enumerable: false, configurable: false,


    },
    COPY_WRITE_BUFFER: {

        value: 36663, writable: false, enumerable: false, configurable: false,


    },
    COPY_READ_BUFFER_BINDING: {

        value: 36662, writable: false, enumerable: false, configurable: false,


    },
    COPY_WRITE_BUFFER_BINDING: {

        value: 36663, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BUFFER: {

        value: 35345, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BUFFER_BINDING: {

        value: 35368, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BUFFER_START: {

        value: 35369, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BUFFER_SIZE: {

        value: 35370, writable: false, enumerable: false, configurable: false,


    },
    MAX_VERTEX_UNIFORM_BLOCKS: {

        value: 35371, writable: false, enumerable: false, configurable: false,


    },
    MAX_FRAGMENT_UNIFORM_BLOCKS: {

        value: 35373, writable: false, enumerable: false, configurable: false,


    },
    MAX_COMBINED_UNIFORM_BLOCKS: {

        value: 35374, writable: false, enumerable: false, configurable: false,


    },
    MAX_UNIFORM_BUFFER_BINDINGS: {

        value: 35375, writable: false, enumerable: false, configurable: false,


    },
    MAX_UNIFORM_BLOCK_SIZE: {

        value: 35376, writable: false, enumerable: false, configurable: false,


    },
    MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS: {

        value: 35377, writable: false, enumerable: false, configurable: false,


    },
    MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS: {

        value: 35379, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BUFFER_OFFSET_ALIGNMENT: {

        value: 35380, writable: false, enumerable: false, configurable: false,


    },
    ACTIVE_UNIFORM_BLOCKS: {

        value: 35382, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_TYPE: {

        value: 35383, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_SIZE: {

        value: 35384, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BLOCK_INDEX: {

        value: 35386, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_OFFSET: {

        value: 35387, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_ARRAY_STRIDE: {

        value: 35388, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_MATRIX_STRIDE: {

        value: 35389, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_IS_ROW_MAJOR: {

        value: 35390, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BLOCK_BINDING: {

        value: 35391, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BLOCK_DATA_SIZE: {

        value: 35392, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BLOCK_ACTIVE_UNIFORMS: {

        value: 35394, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES: {

        value: 35395, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER: {

        value: 35396, writable: false, enumerable: false, configurable: false,


    },
    UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER: {

        value: 35398, writable: false, enumerable: false, configurable: false,


    },
    INVALID_INDEX: {

        value: 4294967295, writable: false, enumerable: false, configurable: false,


    },
    MAX_VERTEX_OUTPUT_COMPONENTS: {

        value: 37154, writable: false, enumerable: false, configurable: false,


    },
    MAX_FRAGMENT_INPUT_COMPONENTS: {

        value: 37157, writable: false, enumerable: false, configurable: false,


    },
    MAX_SERVER_WAIT_TIMEOUT: {

        value: 37137, writable: false, enumerable: false, configurable: false,


    },
    OBJECT_TYPE: {

        value: 37138, writable: false, enumerable: false, configurable: false,


    },
    SYNC_CONDITION: {

        value: 37139, writable: false, enumerable: false, configurable: false,


    },
    SYNC_STATUS: {

        value: 37140, writable: false, enumerable: false, configurable: false,


    },
    SYNC_FLAGS: {

        value: 37141, writable: false, enumerable: false, configurable: false,


    },
    SYNC_FENCE: {

        value: 37142, writable: false, enumerable: false, configurable: false,


    },
    SYNC_GPU_COMMANDS_COMPLETE: {

        value: 37143, writable: false, enumerable: false, configurable: false,


    },
    UNSIGNALED: {

        value: 37144, writable: false, enumerable: false, configurable: false,


    },
    SIGNALED: {

        value: 37145, writable: false, enumerable: false, configurable: false,


    },
    ALREADY_SIGNALED: {

        value: 37146, writable: false, enumerable: false, configurable: false,


    },
    TIMEOUT_EXPIRED: {

        value: 37147, writable: false, enumerable: false, configurable: false,


    },
    CONDITION_SATISFIED: {

        value: 37148, writable: false, enumerable: false, configurable: false,


    },
    WAIT_FAILED: {

        value: 37149, writable: false, enumerable: false, configurable: false,


    },
    SYNC_FLUSH_COMMANDS_BIT: {

        value: 1, writable: false, enumerable: false, configurable: false,


    },
    VERTEX_ATTRIB_ARRAY_DIVISOR: {

        value: 35070, writable: false, enumerable: false, configurable: false,


    },
    ANY_SAMPLES_PASSED: {

        value: 35887, writable: false, enumerable: false, configurable: false,


    },
    ANY_SAMPLES_PASSED_CONSERVATIVE: {

        value: 36202, writable: false, enumerable: false, configurable: false,


    },
    SAMPLER_BINDING: {

        value: 35097, writable: false, enumerable: false, configurable: false,


    },
    RGB10_A2UI: {

        value: 36975, writable: false, enumerable: false, configurable: false,


    },
    INT_2_10_10_10_REV: {

        value: 36255, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK: {

        value: 36386, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_PAUSED: {

        value: 36387, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_ACTIVE: {

        value: 36388, writable: false, enumerable: false, configurable: false,


    },
    TRANSFORM_FEEDBACK_BINDING: {

        value: 36389, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_IMMUTABLE_FORMAT: {

        value: 37167, writable: false, enumerable: false, configurable: false,


    },
    MAX_ELEMENT_INDEX: {

        value: 36203, writable: false, enumerable: false, configurable: false,


    },
    TEXTURE_IMMUTABLE_LEVELS: {

        value: 33503, writable: false, enumerable: false, configurable: false,


    },
    TIMEOUT_IGNORED: {

        value: -1, writable: false, enumerable: true, configurable: false,


    },
    MAX_CLIENT_WAIT_TIMEOUT_WEBGL: {

        value: 37447, writable: false, enumerable: false, configurable: false,


    },
    activeTexture: {

        value: newFunc('activeTexture', 10, function activeTexture() {
            if (debug) print('WebGL2RenderingContext.activeTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    attachShader: {

        value: newFunc('attachShader', 10, function attachShader() {
            if (debug) print('WebGL2RenderingContext.attachShader.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    beginQuery: {

        value: newFunc('beginQuery', 10, function beginQuery() {
            if (debug) print('WebGL2RenderingContext.beginQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    beginTransformFeedback: {

        value: newFunc('beginTransformFeedback', 10, function beginTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.beginTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindAttribLocation: {

        value: newFunc('bindAttribLocation', 10, function bindAttribLocation() {
            if (debug) print('WebGL2RenderingContext.bindAttribLocation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindBufferBase: {

        value: newFunc('bindBufferBase', 10, function bindBufferBase() {
            if (debug) print('WebGL2RenderingContext.bindBufferBase.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindBufferRange: {

        value: newFunc('bindBufferRange', 10, function bindBufferRange() {
            if (debug) print('WebGL2RenderingContext.bindBufferRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindRenderbuffer: {

        value: newFunc('bindRenderbuffer', 10, function bindRenderbuffer() {
            if (debug) print('WebGL2RenderingContext.bindRenderbuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindSampler: {

        value: newFunc('bindSampler', 10, function bindSampler() {
            if (debug) print('WebGL2RenderingContext.bindSampler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindTransformFeedback: {

        value: newFunc('bindTransformFeedback', 10, function bindTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.bindTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindVertexArray: {

        value: newFunc('bindVertexArray', 10, function bindVertexArray() {
            if (debug) print('WebGL2RenderingContext.bindVertexArray.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    blendColor: {

        value: newFunc('blendColor', 10, function blendColor() {
            if (debug) print('WebGL2RenderingContext.blendColor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    blendEquation: {

        value: newFunc('blendEquation', 10, function blendEquation() {
            if (debug) print('WebGL2RenderingContext.blendEquation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    blendEquationSeparate: {

        value: newFunc('blendEquationSeparate', 10, function blendEquationSeparate() {
            if (debug) print('WebGL2RenderingContext.blendEquationSeparate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    blendFunc: {

        value: newFunc('blendFunc', 10, function blendFunc() {
            if (debug) print('WebGL2RenderingContext.blendFunc.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    blendFuncSeparate: {

        value: newFunc('blendFuncSeparate', 10, function blendFuncSeparate() {
            if (debug) print('WebGL2RenderingContext.blendFuncSeparate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    blitFramebuffer: {

        value: newFunc('blitFramebuffer', 10, function blitFramebuffer() {
            if (debug) print('WebGL2RenderingContext.blitFramebuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bufferData: {

        value: createNativeFunc('bufferData', 10, function bufferData() {
            if (debug) print('WebGL2RenderingContext.bufferData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bufferSubData: {

        value: newFunc('bufferSubData', 10, function bufferSubData() {
            if (debug) print('WebGL2RenderingContext.bufferSubData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    checkFramebufferStatus: {

        value: newFunc('checkFramebufferStatus', 10, function checkFramebufferStatus() {
            if (debug) print('WebGL2RenderingContext.checkFramebufferStatus.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clientWaitSync: {

        value: newFunc('clientWaitSync', 10, function clientWaitSync() {
            if (debug) print('WebGL2RenderingContext.clientWaitSync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    compileShader: {

        value: newFunc('compileShader', 10, function compileShader() {
            if (debug) print('WebGL2RenderingContext.compileShader.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    compressedTexImage2D: {

        value: newFunc('compressedTexImage2D', 10, function compressedTexImage2D() {
            if (debug) print('WebGL2RenderingContext.compressedTexImage2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    compressedTexImage3D: {

        value: newFunc('compressedTexImage3D', 10, function compressedTexImage3D() {
            if (debug) print('WebGL2RenderingContext.compressedTexImage3D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    compressedTexSubImage2D: {

        value: newFunc('compressedTexSubImage2D', 10, function compressedTexSubImage2D() {
            if (debug) print('WebGL2RenderingContext.compressedTexSubImage2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    compressedTexSubImage3D: {

        value: newFunc('compressedTexSubImage3D', 10, function compressedTexSubImage3D() {
            if (debug) print('WebGL2RenderingContext.compressedTexSubImage3D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyBufferSubData: {

        value: newFunc('copyBufferSubData', 10, function copyBufferSubData() {
            if (debug) print('WebGL2RenderingContext.copyBufferSubData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyTexImage2D: {

        value: newFunc('copyTexImage2D', 10, function copyTexImage2D() {
            if (debug) print('WebGL2RenderingContext.copyTexImage2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyTexSubImage2D: {

        value: newFunc('copyTexSubImage2D', 10, function copyTexSubImage2D() {
            if (debug) print('WebGL2RenderingContext.copyTexSubImage2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyTexSubImage3D: {

        value: newFunc('copyTexSubImage3D', 10, function copyTexSubImage3D() {
            if (debug) print('WebGL2RenderingContext.copyTexSubImage3D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createBuffer: {

        value: newFunc('createBuffer', 10, function createBuffer() {
            if (debug) print('WebGL2RenderingContext.createBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createFramebuffer: {

        value: newFunc('createFramebuffer', 10, function createFramebuffer() {
            if (debug) print('WebGL2RenderingContext.createFramebuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createProgram: {

        value: newFunc('createProgram', 10, function createProgram() {
            if (debug) print('WebGL2RenderingContext.createProgram.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createQuery: {

        value: newFunc('createQuery', 10, function createQuery() {
            if (debug) print('WebGL2RenderingContext.createQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createRenderbuffer: {

        value: newFunc('createRenderbuffer', 10, function createRenderbuffer() {
            if (debug) print('WebGL2RenderingContext.createRenderbuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSampler: {

        value: newFunc('createSampler', 10, function createSampler() {
            if (debug) print('WebGL2RenderingContext.createSampler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createShader: {

        value: newFunc('createShader', 10, function createShader() {
            if (debug) print('WebGL2RenderingContext.createShader.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createTexture: {

        value: newFunc('createTexture', 10, function createTexture() {
            if (debug) print('WebGL2RenderingContext.createTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createTransformFeedback: {

        value: newFunc('createTransformFeedback', 10, function createTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.createTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createVertexArray: {

        value: newFunc('createVertexArray', 10, function createVertexArray() {
            if (debug) print('WebGL2RenderingContext.createVertexArray.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cullFace: {

        value: newFunc('cullFace', 10, function cullFace() {
            if (debug) print('WebGL2RenderingContext.cullFace.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteBuffer: {

        value: newFunc('deleteBuffer', 10, function deleteBuffer() {
            if (debug) print('WebGL2RenderingContext.deleteBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteFramebuffer: {

        value: newFunc('deleteFramebuffer', 10, function deleteFramebuffer() {
            if (debug) print('WebGL2RenderingContext.deleteFramebuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteProgram: {

        value: newFunc('deleteProgram', 10, function deleteProgram() {
            if (debug) print('WebGL2RenderingContext.deleteProgram.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteQuery: {

        value: newFunc('deleteQuery', 10, function deleteQuery() {
            if (debug) print('WebGL2RenderingContext.deleteQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteRenderbuffer: {

        value: newFunc('deleteRenderbuffer', 10, function deleteRenderbuffer() {
            if (debug) print('WebGL2RenderingContext.deleteRenderbuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteSampler: {

        value: newFunc('deleteSampler', 10, function deleteSampler() {
            if (debug) print('WebGL2RenderingContext.deleteSampler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteShader: {

        value: newFunc('deleteShader', 10, function deleteShader() {
            if (debug) print('WebGL2RenderingContext.deleteShader.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteSync: {

        value: newFunc('deleteSync', 10, function deleteSync() {
            if (debug) print('WebGL2RenderingContext.deleteSync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteTexture: {

        value: newFunc('deleteTexture', 10, function deleteTexture() {
            if (debug) print('WebGL2RenderingContext.deleteTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteTransformFeedback: {

        value: newFunc('deleteTransformFeedback', 10, function deleteTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.deleteTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteVertexArray: {

        value: newFunc('deleteVertexArray', 10, function deleteVertexArray() {
            if (debug) print('WebGL2RenderingContext.deleteVertexArray.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    depthFunc: {

        value: newFunc('depthFunc', 10, function depthFunc() {
            if (debug) print('WebGL2RenderingContext.depthFunc.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    depthMask: {

        value: newFunc('depthMask', 10, function depthMask() {
            if (debug) print('WebGL2RenderingContext.depthMask.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    depthRange: {

        value: newFunc('depthRange', 10, function depthRange() {
            if (debug) print('WebGL2RenderingContext.depthRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    detachShader: {

        value: newFunc('detachShader', 10, function detachShader() {
            if (debug) print('WebGL2RenderingContext.detachShader.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    disable: {

        value: newFunc('disable', 10, function disable() {
            if (debug) print('WebGL2RenderingContext.disable.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawArraysInstanced: {

        value: newFunc('drawArraysInstanced', 10, function drawArraysInstanced() {
            if (debug) print('WebGL2RenderingContext.drawArraysInstanced.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawElementsInstanced: {

        value: newFunc('drawElementsInstanced', 10, function drawElementsInstanced() {
            if (debug) print('WebGL2RenderingContext.drawElementsInstanced.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawRangeElements: {

        value: newFunc('drawRangeElements', 10, function drawRangeElements() {
            if (debug) print('WebGL2RenderingContext.drawRangeElements.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    enable: {

        value: newFunc('enable', 10, function enable() {
            if (debug) print('WebGL2RenderingContext.enable.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    endQuery: {

        value: newFunc('endQuery', 10, function endQuery() {
            if (debug) print('WebGL2RenderingContext.endQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    endTransformFeedback: {

        value: newFunc('endTransformFeedback', 10, function endTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.endTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    fenceSync: {

        value: newFunc('fenceSync', 10, function fenceSync() {
            if (debug) print('WebGL2RenderingContext.fenceSync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    finish: {

        value: newFunc('finish', 10, function finish() {
            if (debug) print('WebGL2RenderingContext.finish.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    flush: {

        value: newFunc('flush', 10, function flush() {
            if (debug) print('WebGL2RenderingContext.flush.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    framebufferRenderbuffer: {

        value: newFunc('framebufferRenderbuffer', 10, function framebufferRenderbuffer() {
            if (debug) print('WebGL2RenderingContext.framebufferRenderbuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    framebufferTexture2D: {

        value: newFunc('framebufferTexture2D', 10, function framebufferTexture2D() {
            if (debug) print('WebGL2RenderingContext.framebufferTexture2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    framebufferTextureLayer: {

        value: newFunc('framebufferTextureLayer', 10, function framebufferTextureLayer() {
            if (debug) print('WebGL2RenderingContext.framebufferTextureLayer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    frontFace: {

        value: newFunc('frontFace', 10, function frontFace() {
            if (debug) print('WebGL2RenderingContext.frontFace.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    generateMipmap: {

        value: newFunc('generateMipmap', 10, function generateMipmap() {
            if (debug) print('WebGL2RenderingContext.generateMipmap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getActiveAttrib: {

        value: newFunc('getActiveAttrib', 10, function getActiveAttrib() {
            if (debug) print('WebGL2RenderingContext.getActiveAttrib.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getActiveUniform: {

        value: newFunc('getActiveUniform', 10, function getActiveUniform() {
            if (debug) print('WebGL2RenderingContext.getActiveUniform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getActiveUniformBlockName: {

        value: newFunc('getActiveUniformBlockName', 10, function getActiveUniformBlockName() {
            if (debug) print('WebGL2RenderingContext.getActiveUniformBlockName.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getActiveUniformBlockParameter: {

        value: newFunc('getActiveUniformBlockParameter', 10, function getActiveUniformBlockParameter() {
            if (debug) print('WebGL2RenderingContext.getActiveUniformBlockParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getActiveUniforms: {

        value: newFunc('getActiveUniforms', 10, function getActiveUniforms() {
            if (debug) print('WebGL2RenderingContext.getActiveUniforms.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAttachedShaders: {

        value: newFunc('getAttachedShaders', 10, function getAttachedShaders() {
            if (debug) print('WebGL2RenderingContext.getAttachedShaders.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAttribLocation: {

        value: newFunc('getAttribLocation', 10, function getAttribLocation() {
            if (debug) print('WebGL2RenderingContext.getAttribLocation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getBufferParameter: {

        value: newFunc('getBufferParameter', 10, function getBufferParameter() {
            if (debug) print('WebGL2RenderingContext.getBufferParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getBufferSubData: {

        value: newFunc('getBufferSubData', 10, function getBufferSubData() {
            if (debug) print('WebGL2RenderingContext.getBufferSubData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getContextAttributes: {

        value: newFunc('getContextAttributes', 10, function getContextAttributes() {
            if (debug) print('WebGL2RenderingContext.getContextAttributes.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getError: {

        value: newFunc('getError', 10, function getError() {
            if (debug) print('WebGL2RenderingContext.getError.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getExtension: {

        value: newFunc('getExtension', 10, function getExtension() {
            if (debug) print('WebGL2RenderingContext.getExtension.call', arguments)
            return new WebGLDebugRendererInfo();

        }), writable: true, enumerable: true, configurable: true,


    },
    getFragDataLocation: {

        value: newFunc('getFragDataLocation', 10, function getFragDataLocation() {
            if (debug) print('WebGL2RenderingContext.getFragDataLocation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getFramebufferAttachmentParameter: {

        value: newFunc('getFramebufferAttachmentParameter', 10, function getFramebufferAttachmentParameter() {
            if (debug) print('WebGL2RenderingContext.getFramebufferAttachmentParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getIndexedParameter: {

        value: newFunc('getIndexedParameter', 10, function getIndexedParameter() {
            if (debug) print('WebGL2RenderingContext.getIndexedParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getInternalformatParameter: {

        value: newFunc('getInternalformatParameter', 10, function getInternalformatParameter() {
            if (debug) print('WebGL2RenderingContext.getInternalformatParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getParameter: {

        value: createNativeFunc('getParameter', 2, function (param){
            if (debug) print('WebGL2RenderingContext.getParameter.call', arguments)

            // if (!WebGL2RenderingContext.prototype.isPrototypeOf(this)) {
            //     throw new TypeError("Illegal invocation");
            // }

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

            if (debug)print('WebGL2RenderingContext.getParameter.call', result)
            return result
            if (debug) print('WebGL2RenderingContext.getParameter.call', arguments)
        }, 'WebGL2RenderingContext.getParameter'), writable: true, enumerable: true, configurable: true,


    },
    getProgramInfoLog: {

        value: newFunc('getProgramInfoLog', 10, function getProgramInfoLog() {
            if (debug) print('WebGL2RenderingContext.getProgramInfoLog.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getProgramParameter: {

        value: newFunc('getProgramParameter', 10, function getProgramParameter() {
            if (debug) print('WebGL2RenderingContext.getProgramParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getQuery: {

        value: newFunc('getQuery', 10, function getQuery() {
            if (debug) print('WebGL2RenderingContext.getQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getQueryParameter: {

        value: newFunc('getQueryParameter', 10, function getQueryParameter() {
            if (debug) print('WebGL2RenderingContext.getQueryParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getRenderbufferParameter: {

        value: newFunc('getRenderbufferParameter', 10, function getRenderbufferParameter() {
            if (debug) print('WebGL2RenderingContext.getRenderbufferParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSamplerParameter: {

        value: newFunc('getSamplerParameter', 10, function getSamplerParameter() {
            if (debug) print('WebGL2RenderingContext.getSamplerParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getShaderInfoLog: {

        value: newFunc('getShaderInfoLog', 10, function getShaderInfoLog() {
            if (debug) print('WebGL2RenderingContext.getShaderInfoLog.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getShaderParameter: {

        value: newFunc('getShaderParameter', 10, function getShaderParameter() {
            if (debug) print('WebGL2RenderingContext.getShaderParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getShaderPrecisionFormat: {

        value: newFunc('getShaderPrecisionFormat', 10, function getShaderPrecisionFormat() {
            if (debug) print('WebGL2RenderingContext.getShaderPrecisionFormat.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getShaderSource: {

        value: newFunc('getShaderSource', 10, function getShaderSource() {
            if (debug) print('WebGL2RenderingContext.getShaderSource.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSupportedExtensions: {

        value: newFunc('getSupportedExtensions', 10, function getSupportedExtensions() {
            if (debug) print('WebGL2RenderingContext.getSupportedExtensions.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSyncParameter: {

        value: newFunc('getSyncParameter', 10, function getSyncParameter() {
            if (debug) print('WebGL2RenderingContext.getSyncParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTexParameter: {

        value: newFunc('getTexParameter', 10, function getTexParameter() {
            if (debug) print('WebGL2RenderingContext.getTexParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTransformFeedbackVarying: {

        value: newFunc('getTransformFeedbackVarying', 10, function getTransformFeedbackVarying() {
            if (debug) print('WebGL2RenderingContext.getTransformFeedbackVarying.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getUniform: {

        value: newFunc('getUniform', 10, function getUniform() {
            if (debug) print('WebGL2RenderingContext.getUniform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getUniformBlockIndex: {

        value: newFunc('getUniformBlockIndex', 10, function getUniformBlockIndex() {
            if (debug) print('WebGL2RenderingContext.getUniformBlockIndex.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getUniformIndices: {

        value: newFunc('getUniformIndices', 10, function getUniformIndices() {
            if (debug) print('WebGL2RenderingContext.getUniformIndices.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getUniformLocation: {

        value: newFunc('getUniformLocation', 10, function getUniformLocation() {
            if (debug) print('WebGL2RenderingContext.getUniformLocation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getVertexAttrib: {

        value: newFunc('getVertexAttrib', 10, function getVertexAttrib() {
            if (debug) print('WebGL2RenderingContext.getVertexAttrib.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getVertexAttribOffset: {

        value: newFunc('getVertexAttribOffset', 10, function getVertexAttribOffset() {
            if (debug) print('WebGL2RenderingContext.getVertexAttribOffset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    hint: {

        value: newFunc('hint', 10, function hint() {
            if (debug) print('WebGL2RenderingContext.hint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    invalidateFramebuffer: {

        value: newFunc('invalidateFramebuffer', 10, function invalidateFramebuffer() {
            if (debug) print('WebGL2RenderingContext.invalidateFramebuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    invalidateSubFramebuffer: {

        value: newFunc('invalidateSubFramebuffer', 10, function invalidateSubFramebuffer() {
            if (debug) print('WebGL2RenderingContext.invalidateSubFramebuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isBuffer: {

        value: newFunc('isBuffer', 10, function isBuffer() {
            if (debug) print('WebGL2RenderingContext.isBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isContextLost: {

        value: newFunc('isContextLost', 10, function isContextLost() {
            if (debug) print('WebGL2RenderingContext.isContextLost.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isEnabled: {

        value: newFunc('isEnabled', 10, function isEnabled() {
            if (debug) print('WebGL2RenderingContext.isEnabled.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isFramebuffer: {

        value: newFunc('isFramebuffer', 10, function isFramebuffer() {
            if (debug) print('WebGL2RenderingContext.isFramebuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isProgram: {

        value: newFunc('isProgram', 10, function isProgram() {
            if (debug) print('WebGL2RenderingContext.isProgram.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isQuery: {

        value: newFunc('isQuery', 10, function isQuery() {
            if (debug) print('WebGL2RenderingContext.isQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isRenderbuffer: {

        value: newFunc('isRenderbuffer', 10, function isRenderbuffer() {
            if (debug) print('WebGL2RenderingContext.isRenderbuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isSampler: {

        value: newFunc('isSampler', 10, function isSampler() {
            if (debug) print('WebGL2RenderingContext.isSampler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isShader: {

        value: newFunc('isShader', 10, function isShader() {
            if (debug) print('WebGL2RenderingContext.isShader.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isSync: {

        value: newFunc('isSync', 10, function isSync() {
            if (debug) print('WebGL2RenderingContext.isSync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isTexture: {

        value: newFunc('isTexture', 10, function isTexture() {
            if (debug) print('WebGL2RenderingContext.isTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isTransformFeedback: {

        value: newFunc('isTransformFeedback', 10, function isTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.isTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isVertexArray: {

        value: newFunc('isVertexArray', 10, function isVertexArray() {
            if (debug) print('WebGL2RenderingContext.isVertexArray.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lineWidth: {

        value: newFunc('lineWidth', 10, function lineWidth() {
            if (debug) print('WebGL2RenderingContext.lineWidth.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    linkProgram: {

        value: newFunc('linkProgram', 10, function linkProgram() {
            if (debug) print('WebGL2RenderingContext.linkProgram.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pauseTransformFeedback: {

        value: newFunc('pauseTransformFeedback', 10, function pauseTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.pauseTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pixelStorei: {

        value: newFunc('pixelStorei', 10, function pixelStorei() {
            if (debug) print('WebGL2RenderingContext.pixelStorei.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    polygonOffset: {

        value: newFunc('polygonOffset', 10, function polygonOffset() {
            if (debug) print('WebGL2RenderingContext.polygonOffset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    readBuffer: {

        value: newFunc('readBuffer', 10, function readBuffer() {
            if (debug) print('WebGL2RenderingContext.readBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    readPixels: {

        value: createNativeFunc('readPixels', 10, function readPixels() {
            if (debug) print('WebGL2RenderingContext.readPixels.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    renderbufferStorage: {

        value: newFunc('renderbufferStorage', 10, function renderbufferStorage() {
            if (debug) print('WebGL2RenderingContext.renderbufferStorage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    renderbufferStorageMultisample: {

        value: newFunc('renderbufferStorageMultisample', 10, function renderbufferStorageMultisample() {
            if (debug) print('WebGL2RenderingContext.renderbufferStorageMultisample.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    resumeTransformFeedback: {

        value: newFunc('resumeTransformFeedback', 10, function resumeTransformFeedback() {
            if (debug) print('WebGL2RenderingContext.resumeTransformFeedback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    sampleCoverage: {

        value: newFunc('sampleCoverage', 10, function sampleCoverage() {
            if (debug) print('WebGL2RenderingContext.sampleCoverage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    samplerParameterf: {

        value: newFunc('samplerParameterf', 10, function samplerParameterf() {
            if (debug) print('WebGL2RenderingContext.samplerParameterf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    samplerParameteri: {

        value: newFunc('samplerParameteri', 10, function samplerParameteri() {
            if (debug) print('WebGL2RenderingContext.samplerParameteri.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    shaderSource: {

        value: newFunc('shaderSource', 10, function shaderSource() {
            if (debug) print('WebGL2RenderingContext.shaderSource.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stencilFunc: {

        value: newFunc('stencilFunc', 10, function stencilFunc() {
            if (debug) print('WebGL2RenderingContext.stencilFunc.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stencilFuncSeparate: {

        value: newFunc('stencilFuncSeparate', 10, function stencilFuncSeparate() {
            if (debug) print('WebGL2RenderingContext.stencilFuncSeparate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stencilMask: {

        value: newFunc('stencilMask', 10, function stencilMask() {
            if (debug) print('WebGL2RenderingContext.stencilMask.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stencilMaskSeparate: {

        value: newFunc('stencilMaskSeparate', 10, function stencilMaskSeparate() {
            if (debug) print('WebGL2RenderingContext.stencilMaskSeparate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stencilOp: {

        value: newFunc('stencilOp', 10, function stencilOp() {
            if (debug) print('WebGL2RenderingContext.stencilOp.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stencilOpSeparate: {

        value: newFunc('stencilOpSeparate', 10, function stencilOpSeparate() {
            if (debug) print('WebGL2RenderingContext.stencilOpSeparate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texImage2D: {

        value: newFunc('texImage2D', 10, function texImage2D() {
            if (debug) print('WebGL2RenderingContext.texImage2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texImage3D: {

        value: newFunc('texImage3D', 10, function texImage3D() {
            if (debug) print('WebGL2RenderingContext.texImage3D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texParameterf: {

        value: newFunc('texParameterf', 10, function texParameterf() {
            if (debug) print('WebGL2RenderingContext.texParameterf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texParameteri: {

        value: newFunc('texParameteri', 10, function texParameteri() {
            if (debug) print('WebGL2RenderingContext.texParameteri.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texStorage2D: {

        value: newFunc('texStorage2D', 10, function texStorage2D() {
            if (debug) print('WebGL2RenderingContext.texStorage2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texStorage3D: {

        value: newFunc('texStorage3D', 10, function texStorage3D() {
            if (debug) print('WebGL2RenderingContext.texStorage3D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texSubImage2D: {

        value: newFunc('texSubImage2D', 10, function texSubImage2D() {
            if (debug) print('WebGL2RenderingContext.texSubImage2D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    texSubImage3D: {

        value: newFunc('texSubImage3D', 10, function texSubImage3D() {
            if (debug) print('WebGL2RenderingContext.texSubImage3D.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    transformFeedbackVaryings: {

        value: newFunc('transformFeedbackVaryings', 10, function transformFeedbackVaryings() {
            if (debug) print('WebGL2RenderingContext.transformFeedbackVaryings.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform1ui: {

        value: newFunc('uniform1ui', 10, function uniform1ui() {
            if (debug) print('WebGL2RenderingContext.uniform1ui.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform2ui: {

        value: newFunc('uniform2ui', 10, function uniform2ui() {
            if (debug) print('WebGL2RenderingContext.uniform2ui.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform3ui: {

        value: newFunc('uniform3ui', 10, function uniform3ui() {
            if (debug) print('WebGL2RenderingContext.uniform3ui.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform4ui: {

        value: newFunc('uniform4ui', 10, function uniform4ui() {
            if (debug) print('WebGL2RenderingContext.uniform4ui.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformBlockBinding: {

        value: newFunc('uniformBlockBinding', 10, function uniformBlockBinding() {
            if (debug) print('WebGL2RenderingContext.uniformBlockBinding.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    useProgram: {

        value: newFunc('useProgram', 10, function useProgram() {
            if (debug) print('WebGL2RenderingContext.useProgram.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    validateProgram: {

        value: newFunc('validateProgram', 10, function validateProgram() {
            if (debug) print('WebGL2RenderingContext.validateProgram.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttribDivisor: {

        value: newFunc('vertexAttribDivisor', 10, function vertexAttribDivisor() {
            if (debug) print('WebGL2RenderingContext.vertexAttribDivisor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttribI4i: {

        value: newFunc('vertexAttribI4i', 10, function vertexAttribI4i() {
            if (debug) print('WebGL2RenderingContext.vertexAttribI4i.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttribI4ui: {

        value: newFunc('vertexAttribI4ui', 10, function vertexAttribI4ui() {
            if (debug) print('WebGL2RenderingContext.vertexAttribI4ui.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttribIPointer: {

        value: newFunc('vertexAttribIPointer', 10, function vertexAttribIPointer() {
            if (debug) print('WebGL2RenderingContext.vertexAttribIPointer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    waitSync: {

        value: newFunc('waitSync', 10, function waitSync() {
            if (debug) print('WebGL2RenderingContext.waitSync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindBuffer: {

        value: newFunc('bindBuffer', 10, function bindBuffer() {
            if (debug) print('WebGL2RenderingContext.bindBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindFramebuffer: {

        value: newFunc('bindFramebuffer', 10, function bindFramebuffer() {
            if (debug) print('WebGL2RenderingContext.bindFramebuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bindTexture: {

        value: newFunc('bindTexture', 10, function bindTexture() {
            if (debug) print('WebGL2RenderingContext.bindTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function clear() {
            if (debug) print('WebGL2RenderingContext.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearBufferfi: {

        value: newFunc('clearBufferfi', 10, function clearBufferfi() {
            if (debug) print('WebGL2RenderingContext.clearBufferfi.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearBufferfv: {

        value: newFunc('clearBufferfv', 10, function clearBufferfv() {
            if (debug) print('WebGL2RenderingContext.clearBufferfv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearBufferiv: {

        value: newFunc('clearBufferiv', 10, function clearBufferiv() {
            if (debug) print('WebGL2RenderingContext.clearBufferiv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearBufferuiv: {

        value: newFunc('clearBufferuiv', 10, function clearBufferuiv() {
            if (debug) print('WebGL2RenderingContext.clearBufferuiv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearColor: {

        value: newFunc('clearColor', 10, function clearColor() {
            if (debug) print('WebGL2RenderingContext.clearColor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearDepth: {

        value: newFunc('clearDepth', 10, function clearDepth() {
            if (debug) print('WebGL2RenderingContext.clearDepth.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearStencil: {

        value: newFunc('clearStencil', 10, function clearStencil() {
            if (debug) print('WebGL2RenderingContext.clearStencil.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    colorMask: {

        value: newFunc('colorMask', 10, function colorMask() {
            if (debug) print('WebGL2RenderingContext.colorMask.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    disableVertexAttribArray: {

        value: newFunc('disableVertexAttribArray', 10, function disableVertexAttribArray() {
            if (debug) print('WebGL2RenderingContext.disableVertexAttribArray.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawArrays: {

        value: newFunc('drawArrays', 10, function drawArrays() {
            if (debug) print('WebGL2RenderingContext.drawArrays.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawBuffers: {

        value: newFunc('drawBuffers', 10, function drawBuffers() {
            if (debug) print('WebGL2RenderingContext.drawBuffers.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawElements: {

        value: newFunc('drawElements', 10, function drawElements() {
            if (debug) print('WebGL2RenderingContext.drawElements.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    enableVertexAttribArray: {

        value: newFunc('enableVertexAttribArray', 10, function enableVertexAttribArray() {
            if (debug) print('WebGL2RenderingContext.enableVertexAttribArray.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scissor: {

        value: newFunc('scissor', 10, function scissor() {
            if (debug) print('WebGL2RenderingContext.scissor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform1f: {

        value: newFunc('uniform1f', 10, function uniform1f() {
            if (debug) print('WebGL2RenderingContext.uniform1f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform1fv: {

        value: newFunc('uniform1fv', 10, function uniform1fv() {
            if (debug) print('WebGL2RenderingContext.uniform1fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform1i: {

        value: newFunc('uniform1i', 10, function uniform1i() {
            if (debug) print('WebGL2RenderingContext.uniform1i.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform1iv: {

        value: newFunc('uniform1iv', 10, function uniform1iv() {
            if (debug) print('WebGL2RenderingContext.uniform1iv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform1uiv: {

        value: newFunc('uniform1uiv', 10, function uniform1uiv() {
            if (debug) print('WebGL2RenderingContext.uniform1uiv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform2f: {

        value: newFunc('uniform2f', 10, function uniform2f() {
            if (debug) print('WebGL2RenderingContext.uniform2f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform2fv: {

        value: newFunc('uniform2fv', 10, function uniform2fv() {
            if (debug) print('WebGL2RenderingContext.uniform2fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform2i: {

        value: newFunc('uniform2i', 10, function uniform2i() {
            if (debug) print('WebGL2RenderingContext.uniform2i.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform2iv: {

        value: newFunc('uniform2iv', 10, function uniform2iv() {
            if (debug) print('WebGL2RenderingContext.uniform2iv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform2uiv: {

        value: newFunc('uniform2uiv', 10, function uniform2uiv() {
            if (debug) print('WebGL2RenderingContext.uniform2uiv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform3f: {

        value: newFunc('uniform3f', 10, function uniform3f() {
            if (debug) print('WebGL2RenderingContext.uniform3f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform3fv: {

        value: newFunc('uniform3fv', 10, function uniform3fv() {
            if (debug) print('WebGL2RenderingContext.uniform3fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform3i: {

        value: newFunc('uniform3i', 10, function uniform3i() {
            if (debug) print('WebGL2RenderingContext.uniform3i.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform3iv: {

        value: newFunc('uniform3iv', 10, function uniform3iv() {
            if (debug) print('WebGL2RenderingContext.uniform3iv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform3uiv: {

        value: newFunc('uniform3uiv', 10, function uniform3uiv() {
            if (debug) print('WebGL2RenderingContext.uniform3uiv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform4f: {

        value: newFunc('uniform4f', 10, function uniform4f() {
            if (debug) print('WebGL2RenderingContext.uniform4f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform4fv: {

        value: newFunc('uniform4fv', 10, function uniform4fv() {
            if (debug) print('WebGL2RenderingContext.uniform4fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform4i: {

        value: newFunc('uniform4i', 10, function uniform4i() {
            if (debug) print('WebGL2RenderingContext.uniform4i.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform4iv: {

        value: newFunc('uniform4iv', 10, function uniform4iv() {
            if (debug) print('WebGL2RenderingContext.uniform4iv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniform4uiv: {

        value: newFunc('uniform4uiv', 10, function uniform4uiv() {
            if (debug) print('WebGL2RenderingContext.uniform4uiv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix2fv: {

        value: newFunc('uniformMatrix2fv', 10, function uniformMatrix2fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix2fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix2x3fv: {

        value: newFunc('uniformMatrix2x3fv', 10, function uniformMatrix2x3fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix2x3fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix2x4fv: {

        value: newFunc('uniformMatrix2x4fv', 10, function uniformMatrix2x4fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix2x4fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix3fv: {

        value: newFunc('uniformMatrix3fv', 10, function uniformMatrix3fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix3fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix3x2fv: {

        value: newFunc('uniformMatrix3x2fv', 10, function uniformMatrix3x2fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix3x2fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix3x4fv: {

        value: newFunc('uniformMatrix3x4fv', 10, function uniformMatrix3x4fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix3x4fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix4fv: {

        value: newFunc('uniformMatrix4fv', 10, function uniformMatrix4fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix4fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix4x2fv: {

        value: newFunc('uniformMatrix4x2fv', 10, function uniformMatrix4x2fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix4x2fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    uniformMatrix4x3fv: {

        value: newFunc('uniformMatrix4x3fv', 10, function uniformMatrix4x3fv() {
            if (debug) print('WebGL2RenderingContext.uniformMatrix4x3fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib1f: {

        value: newFunc('vertexAttrib1f', 10, function vertexAttrib1f() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib1f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib1fv: {

        value: newFunc('vertexAttrib1fv', 10, function vertexAttrib1fv() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib1fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib2f: {

        value: newFunc('vertexAttrib2f', 10, function vertexAttrib2f() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib2f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib2fv: {

        value: newFunc('vertexAttrib2fv', 10, function vertexAttrib2fv() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib2fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib3f: {

        value: newFunc('vertexAttrib3f', 10, function vertexAttrib3f() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib3f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib3fv: {

        value: newFunc('vertexAttrib3fv', 10, function vertexAttrib3fv() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib3fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib4f: {

        value: newFunc('vertexAttrib4f', 10, function vertexAttrib4f() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib4f.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttrib4fv: {

        value: newFunc('vertexAttrib4fv', 10, function vertexAttrib4fv() {
            if (debug) print('WebGL2RenderingContext.vertexAttrib4fv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttribI4iv: {

        value: newFunc('vertexAttribI4iv', 10, function vertexAttribI4iv() {
            if (debug) print('WebGL2RenderingContext.vertexAttribI4iv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttribI4uiv: {

        value: newFunc('vertexAttribI4uiv', 10, function vertexAttribI4uiv() {
            if (debug) print('WebGL2RenderingContext.vertexAttribI4uiv.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vertexAttribPointer: {

        value: newFunc('vertexAttribPointer', 10, function vertexAttribPointer() {
            if (debug) print('WebGL2RenderingContext.vertexAttribPointer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    viewport: {

        value: newFunc('viewport', 10, function viewport() {
            if (debug) print('WebGL2RenderingContext.viewport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
drawingBufferFormat: {

        value: newFunc('drawingBufferFormat', 10, function drawingBufferFormat() {
            if (debug) print('WebGL2RenderingContext.drawingBufferFormat.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },drawingBufferStorage: {

        value: newFunc('viewport', 10, function drawingBufferStorage() {
            if (debug) print('WebGL2RenderingContext.drawingBufferStorage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('viewport', 10, function viewport() {
            if (debug) print('WebGL2RenderingContext.viewport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    makeXRCompatible: {

        value: newFunc('makeXRCompatible', 10, function makeXRCompatible() {
            if (debug) print('WebGL2RenderingContext.makeXRCompatible.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})

// WebGL2RenderingContext = new Proxy(WebGL2RenderingContext, {
//     ownKeys(target) {
//         return [
//     "canvas",
//     "drawingBufferWidth",
//     "drawingBufferHeight",
//     "drawingBufferColorSpace",
//     "unpackColorSpace",
//     "DEPTH_BUFFER_BIT",
//     "STENCIL_BUFFER_BIT",
//     "COLOR_BUFFER_BIT",
//     "POINTS",
//     "LINES",
//     "LINE_LOOP",
//     "LINE_STRIP",
//     "TRIANGLES",
//     "TRIANGLE_STRIP",
//     "TRIANGLE_FAN",
//     "ZERO",
//     "ONE",
//     "SRC_COLOR",
//     "ONE_MINUS_SRC_COLOR",
//     "SRC_ALPHA",
//     "ONE_MINUS_SRC_ALPHA",
//     "DST_ALPHA",
//     "ONE_MINUS_DST_ALPHA",
//     "DST_COLOR",
//     "ONE_MINUS_DST_COLOR",
//     "SRC_ALPHA_SATURATE",
//     "FUNC_ADD",
//     "BLEND_EQUATION",
//     "BLEND_EQUATION_RGB",
//     "BLEND_EQUATION_ALPHA",
//     "FUNC_SUBTRACT",
//     "FUNC_REVERSE_SUBTRACT",
//     "BLEND_DST_RGB",
//     "BLEND_SRC_RGB",
//     "BLEND_DST_ALPHA",
//     "BLEND_SRC_ALPHA",
//     "CONSTANT_COLOR",
//     "ONE_MINUS_CONSTANT_COLOR",
//     "CONSTANT_ALPHA",
//     "ONE_MINUS_CONSTANT_ALPHA",
//     "BLEND_COLOR",
//     "ARRAY_BUFFER",
//     "ELEMENT_ARRAY_BUFFER",
//     "ARRAY_BUFFER_BINDING",
//     "ELEMENT_ARRAY_BUFFER_BINDING",
//     "STREAM_DRAW",
//     "STATIC_DRAW",
//     "DYNAMIC_DRAW",
//     "BUFFER_SIZE",
//     "BUFFER_USAGE",
//     "CURRENT_VERTEX_ATTRIB",
//     "FRONT",
//     "BACK",
//     "FRONT_AND_BACK",
//     "TEXTURE_2D",
//     "CULL_FACE",
//     "BLEND",
//     "DITHER",
//     "STENCIL_TEST",
//     "DEPTH_TEST",
//     "SCISSOR_TEST",
//     "POLYGON_OFFSET_FILL",
//     "SAMPLE_ALPHA_TO_COVERAGE",
//     "SAMPLE_COVERAGE",
//     "NO_ERROR",
//     "INVALID_ENUM",
//     "INVALID_VALUE",
//     "INVALID_OPERATION",
//     "OUT_OF_MEMORY",
//     "CW",
//     "CCW",
//     "LINE_WIDTH",
//     "ALIASED_POINT_SIZE_RANGE",
//     "ALIASED_LINE_WIDTH_RANGE",
//     "CULL_FACE_MODE",
//     "FRONT_FACE",
//     "DEPTH_RANGE",
//     "DEPTH_WRITEMASK",
//     "DEPTH_CLEAR_VALUE",
//     "DEPTH_FUNC",
//     "STENCIL_CLEAR_VALUE",
//     "STENCIL_FUNC",
//     "STENCIL_FAIL",
//     "STENCIL_PASS_DEPTH_FAIL",
//     "STENCIL_PASS_DEPTH_PASS",
//     "STENCIL_REF",
//     "STENCIL_VALUE_MASK",
//     "STENCIL_WRITEMASK",
//     "STENCIL_BACK_FUNC",
//     "STENCIL_BACK_FAIL",
//     "STENCIL_BACK_PASS_DEPTH_FAIL",
//     "STENCIL_BACK_PASS_DEPTH_PASS",
//     "STENCIL_BACK_REF",
//     "STENCIL_BACK_VALUE_MASK",
//     "STENCIL_BACK_WRITEMASK",
//     "VIEWPORT",
//     "SCISSOR_BOX",
//     "COLOR_CLEAR_VALUE",
//     "COLOR_WRITEMASK",
//     "UNPACK_ALIGNMENT",
//     "PACK_ALIGNMENT",
//     "MAX_TEXTURE_SIZE",
//     "MAX_VIEWPORT_DIMS",
//     "SUBPIXEL_BITS",
//     "RED_BITS",
//     "GREEN_BITS",
//     "BLUE_BITS",
//     "ALPHA_BITS",
//     "DEPTH_BITS",
//     "STENCIL_BITS",
//     "POLYGON_OFFSET_UNITS",
//     "POLYGON_OFFSET_FACTOR",
//     "TEXTURE_BINDING_2D",
//     "SAMPLE_BUFFERS",
//     "SAMPLES",
//     "SAMPLE_COVERAGE_VALUE",
//     "SAMPLE_COVERAGE_INVERT",
//     "COMPRESSED_TEXTURE_FORMATS",
//     "DONT_CARE",
//     "FASTEST",
//     "NICEST",
//     "GENERATE_MIPMAP_HINT",
//     "BYTE",
//     "UNSIGNED_BYTE",
//     "SHORT",
//     "UNSIGNED_SHORT",
//     "INT",
//     "UNSIGNED_INT",
//     "FLOAT",
//     "DEPTH_COMPONENT",
//     "ALPHA",
//     "RGB",
//     "RGBA",
//     "LUMINANCE",
//     "LUMINANCE_ALPHA",
//     "UNSIGNED_SHORT_4_4_4_4",
//     "UNSIGNED_SHORT_5_5_5_1",
//     "UNSIGNED_SHORT_5_6_5",
//     "FRAGMENT_SHADER",
//     "VERTEX_SHADER",
//     "MAX_VERTEX_ATTRIBS",
//     "MAX_VERTEX_UNIFORM_VECTORS",
//     "MAX_VARYING_VECTORS",
//     "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
//     "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
//     "MAX_TEXTURE_IMAGE_UNITS",
//     "MAX_FRAGMENT_UNIFORM_VECTORS",
//     "SHADER_TYPE",
//     "DELETE_STATUS",
//     "LINK_STATUS",
//     "VALIDATE_STATUS",
//     "ATTACHED_SHADERS",
//     "ACTIVE_UNIFORMS",
//     "ACTIVE_ATTRIBUTES",
//     "SHADING_LANGUAGE_VERSION",
//     "CURRENT_PROGRAM",
//     "NEVER",
//     "LESS",
//     "EQUAL",
//     "LEQUAL",
//     "GREATER",
//     "NOTEQUAL",
//     "GEQUAL",
//     "ALWAYS",
//     "KEEP",
//     "REPLACE",
//     "INCR",
//     "DECR",
//     "INVERT",
//     "INCR_WRAP",
//     "DECR_WRAP",
//     "VENDOR",
//     "RENDERER",
//     "VERSION",
//     "NEAREST",
//     "LINEAR",
//     "NEAREST_MIPMAP_NEAREST",
//     "LINEAR_MIPMAP_NEAREST",
//     "NEAREST_MIPMAP_LINEAR",
//     "LINEAR_MIPMAP_LINEAR",
//     "TEXTURE_MAG_FILTER",
//     "TEXTURE_MIN_FILTER",
//     "TEXTURE_WRAP_S",
//     "TEXTURE_WRAP_T",
//     "TEXTURE",
//     "TEXTURE_CUBE_MAP",
//     "TEXTURE_BINDING_CUBE_MAP",
//     "TEXTURE_CUBE_MAP_POSITIVE_X",
//     "TEXTURE_CUBE_MAP_NEGATIVE_X",
//     "TEXTURE_CUBE_MAP_POSITIVE_Y",
//     "TEXTURE_CUBE_MAP_NEGATIVE_Y",
//     "TEXTURE_CUBE_MAP_POSITIVE_Z",
//     "TEXTURE_CUBE_MAP_NEGATIVE_Z",
//     "MAX_CUBE_MAP_TEXTURE_SIZE",
//     "TEXTURE0",
//     "TEXTURE1",
//     "TEXTURE2",
//     "TEXTURE3",
//     "TEXTURE4",
//     "TEXTURE5",
//     "TEXTURE6",
//     "TEXTURE7",
//     "TEXTURE8",
//     "TEXTURE9",
//     "TEXTURE10",
//     "TEXTURE11",
//     "TEXTURE12",
//     "TEXTURE13",
//     "TEXTURE14",
//     "TEXTURE15",
//     "TEXTURE16",
//     "TEXTURE17",
//     "TEXTURE18",
//     "TEXTURE19",
//     "TEXTURE20",
//     "TEXTURE21",
//     "TEXTURE22",
//     "TEXTURE23",
//     "TEXTURE24",
//     "TEXTURE25",
//     "TEXTURE26",
//     "TEXTURE27",
//     "TEXTURE28",
//     "TEXTURE29",
//     "TEXTURE30",
//     "TEXTURE31",
//     "ACTIVE_TEXTURE",
//     "REPEAT",
//     "CLAMP_TO_EDGE",
//     "MIRRORED_REPEAT",
//     "FLOAT_VEC2",
//     "FLOAT_VEC3",
//     "FLOAT_VEC4",
//     "INT_VEC2",
//     "INT_VEC3",
//     "INT_VEC4",
//     "BOOL",
//     "BOOL_VEC2",
//     "BOOL_VEC3",
//     "BOOL_VEC4",
//     "FLOAT_MAT2",
//     "FLOAT_MAT3",
//     "FLOAT_MAT4",
//     "SAMPLER_2D",
//     "SAMPLER_CUBE",
//     "VERTEX_ATTRIB_ARRAY_ENABLED",
//     "VERTEX_ATTRIB_ARRAY_SIZE",
//     "VERTEX_ATTRIB_ARRAY_STRIDE",
//     "VERTEX_ATTRIB_ARRAY_TYPE",
//     "VERTEX_ATTRIB_ARRAY_NORMALIZED",
//     "VERTEX_ATTRIB_ARRAY_POINTER",
//     "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",
//     "IMPLEMENTATION_COLOR_READ_TYPE",
//     "IMPLEMENTATION_COLOR_READ_FORMAT",
//     "COMPILE_STATUS",
//     "LOW_FLOAT",
//     "MEDIUM_FLOAT",
//     "HIGH_FLOAT",
//     "LOW_INT",
//     "MEDIUM_INT",
//     "HIGH_INT",
//     "FRAMEBUFFER",
//     "RENDERBUFFER",
//     "RGBA4",
//     "RGB5_A1",
//     "RGB565",
//     "DEPTH_COMPONENT16",
//     "STENCIL_INDEX8",
//     "DEPTH_STENCIL",
//     "RENDERBUFFER_WIDTH",
//     "RENDERBUFFER_HEIGHT",
//     "RENDERBUFFER_INTERNAL_FORMAT",
//     "RENDERBUFFER_RED_SIZE",
//     "RENDERBUFFER_GREEN_SIZE",
//     "RENDERBUFFER_BLUE_SIZE",
//     "RENDERBUFFER_ALPHA_SIZE",
//     "RENDERBUFFER_DEPTH_SIZE",
//     "RENDERBUFFER_STENCIL_SIZE",
//     "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",
//     "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",
//     "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",
//     "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",
//     "COLOR_ATTACHMENT0",
//     "DEPTH_ATTACHMENT",
//     "STENCIL_ATTACHMENT",
//     "DEPTH_STENCIL_ATTACHMENT",
//     "NONE",
//     "FRAMEBUFFER_COMPLETE",
//     "FRAMEBUFFER_INCOMPLETE_ATTACHMENT",
//     "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",
//     "FRAMEBUFFER_INCOMPLETE_DIMENSIONS",
//     "FRAMEBUFFER_UNSUPPORTED",
//     "FRAMEBUFFER_BINDING",
//     "RENDERBUFFER_BINDING",
//     "MAX_RENDERBUFFER_SIZE",
//     "INVALID_FRAMEBUFFER_OPERATION",
//     "UNPACK_FLIP_Y_WEBGL",
//     "UNPACK_PREMULTIPLY_ALPHA_WEBGL",
//     "CONTEXT_LOST_WEBGL",
//     "UNPACK_COLORSPACE_CONVERSION_WEBGL",
//     "BROWSER_DEFAULT_WEBGL",
//     "READ_BUFFER",
//     "UNPACK_ROW_LENGTH",
//     "UNPACK_SKIP_ROWS",
//     "UNPACK_SKIP_PIXELS",
//     "PACK_ROW_LENGTH",
//     "PACK_SKIP_ROWS",
//     "PACK_SKIP_PIXELS",
//     "COLOR",
//     "DEPTH",
//     "STENCIL",
//     "RED",
//     "RGB8",
//     "RGBA8",
//     "RGB10_A2",
//     "TEXTURE_BINDING_3D",
//     "UNPACK_SKIP_IMAGES",
//     "UNPACK_IMAGE_HEIGHT",
//     "TEXTURE_3D",
//     "TEXTURE_WRAP_R",
//     "MAX_3D_TEXTURE_SIZE",
//     "UNSIGNED_INT_2_10_10_10_REV",
//     "MAX_ELEMENTS_VERTICES",
//     "MAX_ELEMENTS_INDICES",
//     "TEXTURE_MIN_LOD",
//     "TEXTURE_MAX_LOD",
//     "TEXTURE_BASE_LEVEL",
//     "TEXTURE_MAX_LEVEL",
//     "MIN",
//     "MAX",
//     "DEPTH_COMPONENT24",
//     "MAX_TEXTURE_LOD_BIAS",
//     "TEXTURE_COMPARE_MODE",
//     "TEXTURE_COMPARE_FUNC",
//     "CURRENT_QUERY",
//     "QUERY_RESULT",
//     "QUERY_RESULT_AVAILABLE",
//     "STREAM_READ",
//     "STREAM_COPY",
//     "STATIC_READ",
//     "STATIC_COPY",
//     "DYNAMIC_READ",
//     "DYNAMIC_COPY",
//     "MAX_DRAW_BUFFERS",
//     "DRAW_BUFFER0",
//     "DRAW_BUFFER1",
//     "DRAW_BUFFER2",
//     "DRAW_BUFFER3",
//     "DRAW_BUFFER4",
//     "DRAW_BUFFER5",
//     "DRAW_BUFFER6",
//     "DRAW_BUFFER7",
//     "DRAW_BUFFER8",
//     "DRAW_BUFFER9",
//     "DRAW_BUFFER10",
//     "DRAW_BUFFER11",
//     "DRAW_BUFFER12",
//     "DRAW_BUFFER13",
//     "DRAW_BUFFER14",
//     "DRAW_BUFFER15",
//     "MAX_FRAGMENT_UNIFORM_COMPONENTS",
//     "MAX_VERTEX_UNIFORM_COMPONENTS",
//     "SAMPLER_3D",
//     "SAMPLER_2D_SHADOW",
//     "FRAGMENT_SHADER_DERIVATIVE_HINT",
//     "PIXEL_PACK_BUFFER",
//     "PIXEL_UNPACK_BUFFER",
//     "PIXEL_PACK_BUFFER_BINDING",
//     "PIXEL_UNPACK_BUFFER_BINDING",
//     "FLOAT_MAT2x3",
//     "FLOAT_MAT2x4",
//     "FLOAT_MAT3x2",
//     "FLOAT_MAT3x4",
//     "FLOAT_MAT4x2",
//     "FLOAT_MAT4x3",
//     "SRGB",
//     "SRGB8",
//     "SRGB8_ALPHA8",
//     "COMPARE_REF_TO_TEXTURE",
//     "RGBA32F",
//     "RGB32F",
//     "RGBA16F",
//     "RGB16F",
//     "VERTEX_ATTRIB_ARRAY_INTEGER",
//     "MAX_ARRAY_TEXTURE_LAYERS",
//     "MIN_PROGRAM_TEXEL_OFFSET",
//     "MAX_PROGRAM_TEXEL_OFFSET",
//     "MAX_VARYING_COMPONENTS",
//     "TEXTURE_2D_ARRAY",
//     "TEXTURE_BINDING_2D_ARRAY",
//     "R11F_G11F_B10F",
//     "UNSIGNED_INT_10F_11F_11F_REV",
//     "RGB9_E5",
//     "UNSIGNED_INT_5_9_9_9_REV",
//     "TRANSFORM_FEEDBACK_BUFFER_MODE",
//     "MAX_TRANSFORM_FEEDBACK_SEPARATE_COMPONENTS",
//     "TRANSFORM_FEEDBACK_VARYINGS",
//     "TRANSFORM_FEEDBACK_BUFFER_START",
//     "TRANSFORM_FEEDBACK_BUFFER_SIZE",
//     "TRANSFORM_FEEDBACK_PRIMITIVES_WRITTEN",
//     "RASTERIZER_DISCARD",
//     "MAX_TRANSFORM_FEEDBACK_INTERLEAVED_COMPONENTS",
//     "MAX_TRANSFORM_FEEDBACK_SEPARATE_ATTRIBS",
//     "INTERLEAVED_ATTRIBS",
//     "SEPARATE_ATTRIBS",
//     "TRANSFORM_FEEDBACK_BUFFER",
//     "TRANSFORM_FEEDBACK_BUFFER_BINDING",
//     "RGBA32UI",
//     "RGB32UI",
//     "RGBA16UI",
//     "RGB16UI",
//     "RGBA8UI",
//     "RGB8UI",
//     "RGBA32I",
//     "RGB32I",
//     "RGBA16I",
//     "RGB16I",
//     "RGBA8I",
//     "RGB8I",
//     "RED_INTEGER",
//     "RGB_INTEGER",
//     "RGBA_INTEGER",
//     "SAMPLER_2D_ARRAY",
//     "SAMPLER_2D_ARRAY_SHADOW",
//     "SAMPLER_CUBE_SHADOW",
//     "UNSIGNED_INT_VEC2",
//     "UNSIGNED_INT_VEC3",
//     "UNSIGNED_INT_VEC4",
//     "INT_SAMPLER_2D",
//     "INT_SAMPLER_3D",
//     "INT_SAMPLER_CUBE",
//     "INT_SAMPLER_2D_ARRAY",
//     "UNSIGNED_INT_SAMPLER_2D",
//     "UNSIGNED_INT_SAMPLER_3D",
//     "UNSIGNED_INT_SAMPLER_CUBE",
//     "UNSIGNED_INT_SAMPLER_2D_ARRAY",
//     "DEPTH_COMPONENT32F",
//     "DEPTH32F_STENCIL8",
//     "FLOAT_32_UNSIGNED_INT_24_8_REV",
//     "FRAMEBUFFER_ATTACHMENT_COLOR_ENCODING",
//     "FRAMEBUFFER_ATTACHMENT_COMPONENT_TYPE",
//     "FRAMEBUFFER_ATTACHMENT_RED_SIZE",
//     "FRAMEBUFFER_ATTACHMENT_GREEN_SIZE",
//     "FRAMEBUFFER_ATTACHMENT_BLUE_SIZE",
//     "FRAMEBUFFER_ATTACHMENT_ALPHA_SIZE",
//     "FRAMEBUFFER_ATTACHMENT_DEPTH_SIZE",
//     "FRAMEBUFFER_ATTACHMENT_STENCIL_SIZE",
//     "FRAMEBUFFER_DEFAULT",
//     "UNSIGNED_INT_24_8",
//     "DEPTH24_STENCIL8",
//     "UNSIGNED_NORMALIZED",
//     "DRAW_FRAMEBUFFER_BINDING",
//     "READ_FRAMEBUFFER",
//     "DRAW_FRAMEBUFFER",
//     "READ_FRAMEBUFFER_BINDING",
//     "RENDERBUFFER_SAMPLES",
//     "FRAMEBUFFER_ATTACHMENT_TEXTURE_LAYER",
//     "MAX_COLOR_ATTACHMENTS",
//     "COLOR_ATTACHMENT1",
//     "COLOR_ATTACHMENT2",
//     "COLOR_ATTACHMENT3",
//     "COLOR_ATTACHMENT4",
//     "COLOR_ATTACHMENT5",
//     "COLOR_ATTACHMENT6",
//     "COLOR_ATTACHMENT7",
//     "COLOR_ATTACHMENT8",
//     "COLOR_ATTACHMENT9",
//     "COLOR_ATTACHMENT10",
//     "COLOR_ATTACHMENT11",
//     "COLOR_ATTACHMENT12",
//     "COLOR_ATTACHMENT13",
//     "COLOR_ATTACHMENT14",
//     "COLOR_ATTACHMENT15",
//     "FRAMEBUFFER_INCOMPLETE_MULTISAMPLE",
//     "MAX_SAMPLES",
//     "HALF_FLOAT",
//     "RG",
//     "RG_INTEGER",
//     "R8",
//     "RG8",
//     "R16F",
//     "R32F",
//     "RG16F",
//     "RG32F",
//     "R8I",
//     "R8UI",
//     "R16I",
//     "R16UI",
//     "R32I",
//     "R32UI",
//     "RG8I",
//     "RG8UI",
//     "RG16I",
//     "RG16UI",
//     "RG32I",
//     "RG32UI",
//     "VERTEX_ARRAY_BINDING",
//     "R8_SNORM",
//     "RG8_SNORM",
//     "RGB8_SNORM",
//     "RGBA8_SNORM",
//     "SIGNED_NORMALIZED",
//     "COPY_READ_BUFFER",
//     "COPY_WRITE_BUFFER",
//     "COPY_READ_BUFFER_BINDING",
//     "COPY_WRITE_BUFFER_BINDING",
//     "UNIFORM_BUFFER",
//     "UNIFORM_BUFFER_BINDING",
//     "UNIFORM_BUFFER_START",
//     "UNIFORM_BUFFER_SIZE",
//     "MAX_VERTEX_UNIFORM_BLOCKS",
//     "MAX_FRAGMENT_UNIFORM_BLOCKS",
//     "MAX_COMBINED_UNIFORM_BLOCKS",
//     "MAX_UNIFORM_BUFFER_BINDINGS",
//     "MAX_UNIFORM_BLOCK_SIZE",
//     "MAX_COMBINED_VERTEX_UNIFORM_COMPONENTS",
//     "MAX_COMBINED_FRAGMENT_UNIFORM_COMPONENTS",
//     "UNIFORM_BUFFER_OFFSET_ALIGNMENT",
//     "ACTIVE_UNIFORM_BLOCKS",
//     "UNIFORM_TYPE",
//     "UNIFORM_SIZE",
//     "UNIFORM_BLOCK_INDEX",
//     "UNIFORM_OFFSET",
//     "UNIFORM_ARRAY_STRIDE",
//     "UNIFORM_MATRIX_STRIDE",
//     "UNIFORM_IS_ROW_MAJOR",
//     "UNIFORM_BLOCK_BINDING",
//     "UNIFORM_BLOCK_DATA_SIZE",
//     "UNIFORM_BLOCK_ACTIVE_UNIFORMS",
//     "UNIFORM_BLOCK_ACTIVE_UNIFORM_INDICES",
//     "UNIFORM_BLOCK_REFERENCED_BY_VERTEX_SHADER",
//     "UNIFORM_BLOCK_REFERENCED_BY_FRAGMENT_SHADER",
//     "INVALID_INDEX",
//     "MAX_VERTEX_OUTPUT_COMPONENTS",
//     "MAX_FRAGMENT_INPUT_COMPONENTS",
//     "MAX_SERVER_WAIT_TIMEOUT",
//     "OBJECT_TYPE",
//     "SYNC_CONDITION",
//     "SYNC_STATUS",
//     "SYNC_FLAGS",
//     "SYNC_FENCE",
//     "SYNC_GPU_COMMANDS_COMPLETE",
//     "UNSIGNALED",
//     "SIGNALED",
//     "ALREADY_SIGNALED",
//     "TIMEOUT_EXPIRED",
//     "CONDITION_SATISFIED",
//     "WAIT_FAILED",
//     "SYNC_FLUSH_COMMANDS_BIT",
//     "VERTEX_ATTRIB_ARRAY_DIVISOR",
//     "ANY_SAMPLES_PASSED",
//     "ANY_SAMPLES_PASSED_CONSERVATIVE",
//     "SAMPLER_BINDING",
//     "RGB10_A2UI",
//     "INT_2_10_10_10_REV",
//     "TRANSFORM_FEEDBACK",
//     "TRANSFORM_FEEDBACK_PAUSED",
//     "TRANSFORM_FEEDBACK_ACTIVE",
//     "TRANSFORM_FEEDBACK_BINDING",
//     "TEXTURE_IMMUTABLE_FORMAT",
//     "MAX_ELEMENT_INDEX",
//     "TEXTURE_IMMUTABLE_LEVELS",
//     "TIMEOUT_IGNORED",
//     "MAX_CLIENT_WAIT_TIMEOUT_WEBGL",
//     "activeTexture",
//     "attachShader",
//     "beginQuery",
//     "beginTransformFeedback",
//     "bindAttribLocation",
//     "bindBufferBase",
//     "bindBufferRange",
//     "bindRenderbuffer",
//     "bindSampler",
//     "bindTransformFeedback",
//     "bindVertexArray",
//     "blendColor",
//     "blendEquation",
//     "blendEquationSeparate",
//     "blendFunc",
//     "blendFuncSeparate",
//     "blitFramebuffer",
//     "bufferData",
//     "bufferSubData",
//     "checkFramebufferStatus",
//     "clientWaitSync",
//     "compileShader",
//     "compressedTexImage2D",
//     "compressedTexImage3D",
//     "compressedTexSubImage2D",
//     "compressedTexSubImage3D",
//     "copyBufferSubData",
//     "copyTexImage2D",
//     "copyTexSubImage2D",
//     "copyTexSubImage3D",
//     "createBuffer",
//     "createFramebuffer",
//     "createProgram",
//     "createQuery",
//     "createRenderbuffer",
//     "createSampler",
//     "createShader",
//     "createTexture",
//     "createTransformFeedback",
//     "createVertexArray",
//     "cullFace",
//     "deleteBuffer",
//     "deleteFramebuffer",
//     "deleteProgram",
//     "deleteQuery",
//     "deleteRenderbuffer",
//     "deleteSampler",
//     "deleteShader",
//     "deleteSync",
//     "deleteTexture",
//     "deleteTransformFeedback",
//     "deleteVertexArray",
//     "depthFunc",
//     "depthMask",
//     "depthRange",
//     "detachShader",
//     "disable",
//     "drawArraysInstanced",
//     "drawElementsInstanced",
//     "drawRangeElements",
//     "enable",
//     "endQuery",
//     "endTransformFeedback",
//     "fenceSync",
//     "finish",
//     "flush",
//     "framebufferRenderbuffer",
//     "framebufferTexture2D",
//     "framebufferTextureLayer",
//     "frontFace",
//     "generateMipmap",
//     "getActiveAttrib",
//     "getActiveUniform",
//     "getActiveUniformBlockName",
//     "getActiveUniformBlockParameter",
//     "getActiveUniforms",
//     "getAttachedShaders",
//     "getAttribLocation",
//     "getBufferParameter",
//     "getBufferSubData",
//     "getContextAttributes",
//     "getError",
//     "getExtension",
//     "getFragDataLocation",
//     "getFramebufferAttachmentParameter",
//     "getIndexedParameter",
//     "getInternalformatParameter",
//     "getParameter",
//     "getProgramInfoLog",
//     "getProgramParameter",
//     "getQuery",
//     "getQueryParameter",
//     "getRenderbufferParameter",
//     "getSamplerParameter",
//     "getShaderInfoLog",
//     "getShaderParameter",
//     "getShaderPrecisionFormat",
//     "getShaderSource",
//     "getSupportedExtensions",
//     "getSyncParameter",
//     "getTexParameter",
//     "getTransformFeedbackVarying",
//     "getUniform",
//     "getUniformBlockIndex",
//     "getUniformIndices",
//     "getUniformLocation",
//     "getVertexAttrib",
//     "getVertexAttribOffset",
//     "hint",
//     "invalidateFramebuffer",
//     "invalidateSubFramebuffer",
//     "isBuffer",
//     "isContextLost",
//     "isEnabled",
//     "isFramebuffer",
//     "isProgram",
//     "isQuery",
//     "isRenderbuffer",
//     "isSampler",
//     "isShader",
//     "isSync",
//     "isTexture",
//     "isTransformFeedback",
//     "isVertexArray",
//     "lineWidth",
//     "linkProgram",
//     "pauseTransformFeedback",
//     "pixelStorei",
//     "polygonOffset",
//     "readBuffer",
//     "readPixels",
//     "renderbufferStorage",
//     "renderbufferStorageMultisample",
//     "resumeTransformFeedback",
//     "sampleCoverage",
//     "samplerParameterf",
//     "samplerParameteri",
//     "shaderSource",
//     "stencilFunc",
//     "stencilFuncSeparate",
//     "stencilMask",
//     "stencilMaskSeparate",
//     "stencilOp",
//     "stencilOpSeparate",
//     "texImage2D",
//     "texImage3D",
//     "texParameterf",
//     "texParameteri",
//     "texStorage2D",
//     "texStorage3D",
//     "texSubImage2D",
//     "texSubImage3D",
//     "transformFeedbackVaryings",
//     "uniform1ui",
//     "uniform2ui",
//     "uniform3ui",
//     "uniform4ui",
//     "uniformBlockBinding",
//     "useProgram",
//     "validateProgram",
//     "vertexAttribDivisor",
//     "vertexAttribI4i",
//     "vertexAttribI4ui",
//     "vertexAttribIPointer",
//     "waitSync",
//     "bindBuffer",
//     "bindFramebuffer",
//     "bindTexture",
//     "clear",
//     "clearBufferfi",
//     "clearBufferfv",
//     "clearBufferiv",
//     "clearBufferuiv",
//     "clearColor",
//     "clearDepth",
//     "clearStencil",
//     "colorMask",
//     "disableVertexAttribArray",
//     "drawArrays",
//     "drawBuffers",
//     "drawElements",
//     "enableVertexAttribArray",
//     "scissor",
//     "uniform1f",
//     "uniform1fv",
//     "uniform1i",
//     "uniform1iv",
//     "uniform1uiv",
//     "uniform2f",
//     "uniform2fv",
//     "uniform2i",
//     "uniform2iv",
//     "uniform2uiv",
//     "uniform3f",
//     "uniform3fv",
//     "uniform3i",
//     "uniform3iv",
//     "uniform3uiv",
//     "uniform4f",
//     "uniform4fv",
//     "uniform4i",
//     "uniform4iv",
//     "uniform4uiv",
//     "uniformMatrix2fv",
//     "uniformMatrix2x3fv",
//     "uniformMatrix2x4fv",
//     "uniformMatrix3fv",
//     "uniformMatrix3x2fv",
//     "uniformMatrix3x4fv",
//     "uniformMatrix4fv",
//     "uniformMatrix4x2fv",
//     "uniformMatrix4x3fv",
//     "vertexAttrib1f",
//     "vertexAttrib1fv",
//     "vertexAttrib2f",
//     "vertexAttrib2fv",
//     "vertexAttrib3f",
//     "vertexAttrib3fv",
//     "vertexAttrib4f",
//     "vertexAttrib4fv",
//     "vertexAttribI4iv",
//     "vertexAttribI4uiv",
//     "vertexAttribPointer",
//     "viewport",
//     "constructor",
//     "makeXRCompatible"
// ]
//     }
// })