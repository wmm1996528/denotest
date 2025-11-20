HTMLStyleElement = newFunc('HTMLStyleElement', 10, function HTMLStyleElement() {
    mm.memory.private_data.set(this, {
        sheet: new StyleSheet()
    })
    //HTMLElement.call(this)
})
Object.defineProperties(HTMLStyleElement.prototype, {
    [Symbol.toStringTag]: {value: 'HTMLStyleElement'},
    disabled: {

        get: newFunc('disabled', 10, function disabled() {
            if (debug) print('HTMLStyleElement.disabled.get')
            return mm.memory.private_data.get(this).disabled
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function disabled(value) {
            if (debug) print('HTMLStyleElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    media: {

        get: newFunc('media', 10, function media() {
            if (debug) print('HTMLStyleElement.media.get')
            return mm.memory.private_data.get(this).media
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function media(value) {
            if (debug) print('HTMLStyleElement.media.set', value)
            mm.memory.private_data.get(this).media = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function type() {
            if (debug) print('HTMLStyleElement.type.get')
            return mm.memory.private_data.get(this).type
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function type(value) {
            if (debug) print('HTMLStyleElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sheet: {

        get: newFunc('sheet', 10, function sheet() {
            if (debug) print('HTMLStyleElement.sheet.get')
            return mm.memory.private_data.get(this).sheet
        }, {get: true}), enumerable: true, configurable: true,

    },
    blocking: {

        get: newFunc('blocking', 10, function blocking() {
            if (debug) print('HTMLStyleElement.blocking.get')
            return mm.memory.private_data.get(this).blocking
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('blocking', 1, function blocking(value) {
            if (debug) print('HTMLStyleElement.blocking.set', value)
            mm.memory.private_data.get(this).blocking = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HTMLStyleElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.setPrototypeOf(HTMLStyleElement, HTMLElement)
Object.setPrototypeOf(HTMLStyleElement.prototype, HTMLElement.prototype)