HTMLLinkElement = newFunc('HTMLLinkElement', 1, function HTMLLinkElement() {

    Element.call(this)
})

Object.defineProperties(HTMLLinkElement.prototype, {
    disabled: {

        get: newFunc('disabled', 10, function disabled() {
            if (debug) print('HTMLLinkElement.disabled.get')
            return mm.memory.private_data.get(this).disabled
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function disabled(value) {
            if (debug) print('HTMLLinkElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    href: {

        get: newFunc('href', 10, function href() {
            if (debug) print('HTMLLinkElement.href.get')
            return mm.memory.private_data.get(this).href
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('href', 1, function href(value) {
            if (debug) print('HTMLLinkElement.href.set', value)
            mm.memory.private_data.get(this).href = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    crossOrigin: {

        get: newFunc('crossOrigin', 10, function crossOrigin() {
            if (debug) print('HTMLLinkElement.crossOrigin.get')
            return mm.memory.private_data.get(this).crossOrigin
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('crossOrigin', 1, function crossOrigin(value) {
            if (debug) print('HTMLLinkElement.crossOrigin.set', value)
            mm.memory.private_data.get(this).crossOrigin = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rel: {

        get: newFunc('rel', 10, function rel() {
            if (debug) print('HTMLLinkElement.rel.get')
            return mm.memory.private_data.get(this).rel
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rel', 1, function rel(value) {
            if (debug) print('HTMLLinkElement.rel.set', value)
            mm.memory.private_data.get(this).rel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    relList: {

        get: newFunc('relList', 10, function relList() {
            if (debug) print('HTMLLinkElement.relList.get')
            return mm.memory.private_data.get(this).relList
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('relList', 1, function relList(value) {
            if (debug) print('HTMLLinkElement.relList.set', value)
            mm.memory.private_data.get(this).relList = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    media: {

        get: newFunc('media', 10, function media() {
            if (debug) print('HTMLLinkElement.media.get')
            return mm.memory.private_data.get(this).media
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function media(value) {
            if (debug) print('HTMLLinkElement.media.set', value)
            mm.memory.private_data.get(this).media = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    hreflang: {

        get: newFunc('hreflang', 10, function hreflang() {
            if (debug) print('HTMLLinkElement.hreflang.get')
            return mm.memory.private_data.get(this).hreflang
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hreflang', 1, function hreflang(value) {
            if (debug) print('HTMLLinkElement.hreflang.set', value)
            mm.memory.private_data.get(this).hreflang = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function type() {
            if (debug) print('HTMLLinkElement.type.get')
            return mm.memory.private_data.get(this).type
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function type(value) {
            if (debug) print('HTMLLinkElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    as: {

        get: newFunc('as', 10, function as() {
            if (debug) print('HTMLLinkElement.as.get')
            return mm.memory.private_data.get(this).as
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('as', 1, function as(value) {
            if (debug) print('HTMLLinkElement.as.set', value)
            mm.memory.private_data.get(this).as = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    referrerPolicy: {

        get: newFunc('referrerPolicy', 10, function referrerPolicy() {
            if (debug) print('HTMLLinkElement.referrerPolicy.get')
            return mm.memory.private_data.get(this).referrerPolicy
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('referrerPolicy', 1, function referrerPolicy(value) {
            if (debug) print('HTMLLinkElement.referrerPolicy.set', value)
            mm.memory.private_data.get(this).referrerPolicy = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sizes: {

        get: newFunc('sizes', 10, function sizes() {
            if (debug) print('HTMLLinkElement.sizes.get')
            return mm.memory.private_data.get(this).sizes
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('sizes', 1, function sizes(value) {
            if (debug) print('HTMLLinkElement.sizes.set', value)
            mm.memory.private_data.get(this).sizes = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fetchPriority: {

        get: newFunc('fetchPriority', 10, function fetchPriority() {
            if (debug) print('HTMLLinkElement.fetchPriority.get')
            return mm.memory.private_data.get(this).fetchPriority
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fetchPriority', 1, function fetchPriority(value) {
            if (debug) print('HTMLLinkElement.fetchPriority.set', value)
            mm.memory.private_data.get(this).fetchPriority = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    imageSrcset: {

        get: newFunc('imageSrcset', 10, function imageSrcset() {
            if (debug) print('HTMLLinkElement.imageSrcset.get')
            return mm.memory.private_data.get(this).imageSrcset
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('imageSrcset', 1, function imageSrcset(value) {
            if (debug) print('HTMLLinkElement.imageSrcset.set', value)
            mm.memory.private_data.get(this).imageSrcset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    imageSizes: {

        get: newFunc('imageSizes', 10, function imageSizes() {
            if (debug) print('HTMLLinkElement.imageSizes.get')
            return mm.memory.private_data.get(this).imageSizes
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('imageSizes', 1, function imageSizes(value) {
            if (debug) print('HTMLLinkElement.imageSizes.set', value)
            mm.memory.private_data.get(this).imageSizes = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    charset: {

        get: newFunc('charset', 10, function charset() {
            if (debug) print('HTMLLinkElement.charset.get')
            return mm.memory.private_data.get(this).charset
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('charset', 1, function charset(value) {
            if (debug) print('HTMLLinkElement.charset.set', value)
            mm.memory.private_data.get(this).charset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rev: {

        get: newFunc('rev', 10, function rev() {
            if (debug) print('HTMLLinkElement.rev.get')
            return mm.memory.private_data.get(this).rev
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rev', 1, function rev(value) {
            if (debug) print('HTMLLinkElement.rev.set', value)
            mm.memory.private_data.get(this).rev = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    target: {

        get: newFunc('target', 10, function target() {
            if (debug) print('HTMLLinkElement.target.get')
            return mm.memory.private_data.get(this).target
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('target', 1, function target(value) {
            if (debug) print('HTMLLinkElement.target.set', value)
            mm.memory.private_data.get(this).target = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sheet: {

        get: newFunc('sheet', 10, function sheet() {
            if (debug) print('HTMLLinkElement.sheet.get')
            return mm.memory.private_data.get(this).sheet
        }, {get: true}), enumerable: true, configurable: true,

    },
    integrity: {

        get: newFunc('integrity', 10, function integrity() {
            if (debug) print('HTMLLinkElement.integrity.get')
            return mm.memory.private_data.get(this).integrity
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('integrity', 1, function integrity(value) {
            if (debug) print('HTMLLinkElement.integrity.set', value)
            mm.memory.private_data.get(this).integrity = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    blocking: {

        get: newFunc('blocking', 10, function blocking() {
            if (debug) print('HTMLLinkElement.blocking.get')
            return mm.memory.private_data.get(this).blocking
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('blocking', 1, function blocking(value) {
            if (debug) print('HTMLLinkElement.blocking.set', value)
            mm.memory.private_data.get(this).blocking = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HTMLLinkElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.setPrototypeOf(HTMLLinkElement.prototype, HTMLElement.prototype)

Object.setPrototypeOf(HTMLLinkElement, HTMLElement);

if (proxy) HTMLLinkElement = mm.proxy(HTMLLinkElement, 'HTMLLinkElement')