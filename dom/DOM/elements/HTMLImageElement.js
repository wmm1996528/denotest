HTMLImageElement = newFunc('HTMLImageElement', 10, function HTMLImageElement() {
    mm.memory.private_data.set(this, {
        nodeName: 'IMG',
        localName: 'IMG',
        tagName: 'IMG',
        alt: '',
        src: '',
        srcset: "",
        sizes: '',
        crossOrigin: null,
        useMap: '',
        isMap: false,
        width: 0,
        height: 0,
        naturalWidth: 0,
        naturalHeight: 0,
        complete: true,
        currentSrc: '',
        referrerPolicy: '',
        decoding: 'auto',
        fetchPriority: 'auto',
        loading: 'auto',
        name: '',
        lowsrc: '',
        align: '',
        hspace: 0,
        vspace: 0,
        longDesc: '',
        border: '',
        x: 0,
        y: 0,
        attributionSrc: '',
        sharedStorageWritable: false

    })
})


Object.defineProperties(HTMLImageElement.prototype, {
    [Symbol.toStringTag]: {value: 'HTMLImageElement'},
    alt: {

        get: newFunc('alt', 10, function alt() {
            let res = mm.memory.private_data.get(this).alt;
            if (debug) print('HTMLImageElement.alt.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('alt', 1, function alt(value) {
            if (debug) print('HTMLImageElement.alt.set', value)
            mm.memory.private_data.get(this).alt = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    src: {

        get: newFunc('src', 10, function src() {
            let res = mm.memory.private_data.get(this).src;
            if (debug) print('HTMLImageElement.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function src(value) {
            if (debug) print('HTMLImageElement.src.set', value)
            mm.memory.private_data.get(this).src = value
            window._img = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    srcset: {

        get: newFunc('srcset', 10, function srcset() {
            let res = mm.memory.private_data.get(this).srcset;
            if (debug) print('HTMLImageElement.srcset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('srcset', 1, function srcset(value) {
            if (debug) print('HTMLImageElement.srcset.set', value)
            mm.memory.private_data.get(this).srcset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sizes: {

        get: newFunc('sizes', 10, function sizes() {
            let res = mm.memory.private_data.get(this).sizes || '';
            if (debug) print('HTMLImageElement.sizes.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('sizes', 1, function sizes(value) {
            if (debug) print('HTMLImageElement.sizes.set', value)
            mm.memory.private_data.get(this).sizes = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    crossOrigin: {

        get: newFunc('crossOrigin', 10, function crossOrigin() {
            let res = mm.memory.private_data.get(this).crossOrigin;
            if (debug) print('HTMLImageElement.crossOrigin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('crossOrigin', 1, function crossOrigin(value) {
            if (debug) print('HTMLImageElement.crossOrigin.set', value)
            mm.memory.private_data.get(this).crossOrigin = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    useMap: {

        get: newFunc('useMap', 10, function useMap() {
            let res = mm.memory.private_data.get(this).useMap;
            if (debug) print('HTMLImageElement.useMap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('useMap', 1, function useMap(value) {
            if (debug) print('HTMLImageElement.useMap.set', value)
            mm.memory.private_data.get(this).useMap = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    isMap: {

        get: newFunc('isMap', 10, function isMap() {
            let res = mm.memory.private_data.get(this).isMap || false;
            if (debug) print('HTMLImageElement.isMap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('isMap', 1, function isMap(value) {
            if (debug) print('HTMLImageElement.isMap.set', value)
            mm.memory.private_data.get(this).isMap = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function width() {
            let res = mm.memory.private_data.get(this).width || 77;
            if (debug) print('HTMLImageElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function width(value) {
            if (debug) print('HTMLImageElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function height() {
            let res = mm.memory.private_data.get(this).height || 88;
            if (debug) print('HTMLImageElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function height(value) {
            if (debug) print('HTMLImageElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    naturalWidth: {

        get: newFunc('naturalWidth', 10, function naturalWidth() {
            let res = mm.memory.private_data.get(this).naturalWidth;
            if (debug) print('HTMLImageElement.naturalWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    naturalHeight: {

        get: newFunc('naturalHeight', 10, function naturalHeight() {
            let res = mm.memory.private_data.get(this).naturalHeight;
            if (debug) print('HTMLImageElement.naturalHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    complete: {

        get: newFunc('complete', 10, function complete() {
            let res = mm.memory.private_data.get(this).complete;
            if (debug) print('HTMLImageElement.complete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    currentSrc: {

        get: newFunc('currentSrc', 10, function currentSrc() {
            let res = mm.memory.private_data.get(this).currentSrc;
            if (debug) print('HTMLImageElement.currentSrc.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    referrerPolicy: {

        get: newFunc('referrerPolicy', 10, function referrerPolicy() {
            let res = mm.memory.private_data.get(this).referrerPolicy;
            if (debug) print('HTMLImageElement.referrerPolicy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('referrerPolicy', 1, function referrerPolicy(value) {
            if (debug) print('HTMLImageElement.referrerPolicy.set', value)
            mm.memory.private_data.get(this).referrerPolicy = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    decoding: {

        get: newFunc('decoding', 10, function decoding() {
            let res = mm.memory.private_data.get(this).decoding;
            if (debug) print('HTMLImageElement.decoding.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('decoding', 1, function decoding(value) {
            if (debug) print('HTMLImageElement.decoding.set', value)
            mm.memory.private_data.get(this).decoding = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fetchPriority: {

        get: newFunc('fetchPriority', 10, function fetchPriority() {
            let res = mm.memory.private_data.get(this).fetchPriority;
            if (debug) print('HTMLImageElement.fetchPriority.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fetchPriority', 1, function fetchPriority(value) {
            if (debug) print('HTMLImageElement.fetchPriority.set', value)
            mm.memory.private_data.get(this).fetchPriority = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    loading: {

        get: newFunc('loading', 10, function loading() {
            let res = mm.memory.private_data.get(this).loading;
            if (debug) print('HTMLImageElement.loading.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('loading', 1, function loading(value) {
            if (debug) print('HTMLImageElement.loading.set', value)
            mm.memory.private_data.get(this).loading = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    name: {

        get: newFunc('name', 10, function name() {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLImageElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function name(value) {
            if (debug) print('HTMLImageElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lowsrc: {

        get: newFunc('lowsrc', 10, function lowsrc() {
            let res = mm.memory.private_data.get(this).lowsrc;
            if (debug) print('HTMLImageElement.lowsrc.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lowsrc', 1, function lowsrc(value) {
            if (debug) print('HTMLImageElement.lowsrc.set', value)
            mm.memory.private_data.get(this).lowsrc = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    align: {

        get: newFunc('align', 10, function align() {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLImageElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function align(value) {
            if (debug) print('HTMLImageElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    hspace: {

        get: newFunc('hspace', 10, function hspace() {
            let res = mm.memory.private_data.get(this).hspace;
            if (debug) print('HTMLImageElement.hspace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hspace', 1, function hspace(value) {
            if (debug) print('HTMLImageElement.hspace.set', value)
            mm.memory.private_data.get(this).hspace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    vspace: {

        get: newFunc('vspace', 10, function vspace() {
            let res = mm.memory.private_data.get(this).vspace;
            if (debug) print('HTMLImageElement.vspace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vspace', 1, function vspace(value) {
            if (debug) print('HTMLImageElement.vspace.set', value)
            mm.memory.private_data.get(this).vspace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    longDesc: {

        get: newFunc('longDesc', 10, function longDesc() {
            let res = mm.memory.private_data.get(this).longDesc || '';
            if (debug) print('HTMLImageElement.longDesc.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('longDesc', 1, function longDesc(value) {
            if (debug) print('HTMLImageElement.longDesc.set', value)
            mm.memory.private_data.get(this).longDesc = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    border: {

        get: newFunc('border', 10, function border() {
            let res = mm.memory.private_data.get(this).border;
            if (debug) print('HTMLImageElement.border.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('border', 1, function border(value) {
            if (debug) print('HTMLImageElement.border.set', value)
            mm.memory.private_data.get(this).border = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    x: {

        get: newFunc('x', 10, function x() {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('HTMLImageElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function y() {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('HTMLImageElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    decode: {

        value: newFunc('decode', 10, function decode() {
            if (debug) print('HTMLImageElement.decode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HTMLImageElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    attributionSrc: {

        get: newFunc('attributionSrc', 10, function attributionSrc() {
            let res = mm.memory.private_data.get(this).attributionSrc;
            if (debug) print('HTMLImageElement.attributionSrc.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('attributionSrc', 1, function attributionSrc(value) {
            if (debug) print('HTMLImageElement.attributionSrc.set', value)
            mm.memory.private_data.get(this).attributionSrc = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sharedStorageWritable: {

        get: newFunc('sharedStorageWritable', 10, function sharedStorageWritable() {
            let res = mm.memory.private_data.get(this).sharedStorageWritable;
            if (debug) print('HTMLImageElement.sharedStorageWritable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('sharedStorageWritable', 1, function sharedStorageWritable(value) {
            if (debug) print('HTMLImageElement.sharedStorageWritable.set', value)
            mm.memory.private_data.get(this).sharedStorageWritable = value

        }, {set: true}), enumerable: true, configurable: true,


    },
})
Object.setPrototypeOf(HTMLImageElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLImageElement, HTMLElement);



