HTMLMetaElement = newFunc('HTMLMetaElement', 1, function HTMLMetaElement() {

    Element.call(this)
    mm.memory.private_data.set(this, {
        tagName: 'meta'
    })
})

Object.defineProperties(HTMLMetaElement.prototype, {
    name: {

        get: newFunc('name', 10, function name() {
            if (debug) print('HTMLMetaElement.name.get')
            return mm.memory.private_data.get(this).name
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function name(value) {
            if (debug) print('HTMLMetaElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    httpEquiv: {

        get: newFunc('httpEquiv', 10, function httpEquiv() {
            if (debug) print('HTMLMetaElement.httpEquiv.get')
            return mm.memory.private_data.get(this).httpEquiv
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('httpEquiv', 1, function httpEquiv(value) {
            if (debug) print('HTMLMetaElement.httpEquiv.set', value)
            mm.memory.private_data.get(this).httpEquiv = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    content: {

        get: newFunc('content', 10, function content() {
            if (debug) print('HTMLMetaElement.content.get')
            return mm.memory.private_data.get(this).content
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('content', 1, function content(value) {
            if (debug) print('HTMLMetaElement.content.set', value)
            mm.memory.private_data.get(this).content = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    media: {

        get: newFunc('media', 10, function media() {
            if (debug) print('HTMLMetaElement.media.get')
            return mm.memory.private_data.get(this).media
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function media(value) {
            if (debug) print('HTMLMetaElement.media.set', value)
            mm.memory.private_data.get(this).media = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    scheme: {

        get: newFunc('scheme', 10, function scheme() {
            if (debug) print('HTMLMetaElement.scheme.get')
            return mm.memory.private_data.get(this).scheme
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('scheme', 1, function scheme(value) {
            if (debug) print('HTMLMetaElement.scheme.set', value)
            mm.memory.private_data.get(this).scheme = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HTMLMetaElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.setPrototypeOf(HTMLMetaElement.prototype, HTMLElement.prototype)

Object.setPrototypeOf(HTMLMetaElement, HTMLElement);

if (proxy) HTMLMetaElement = mm.proxy(HTMLMetaElement, 'HTMLMetaElement')