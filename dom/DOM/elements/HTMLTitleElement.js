HTMLTitleElement = newFunc('HTMLTitleElement', 1, function HTMLTitleElement() {
    // debugger;
    // Element.call(this)
    mm.memory.private_data.set(this, {
        tagName: 'title'
    })
    // HTMLElement.apply(this, [])
})

Object.defineProperties(HTMLTitleElement.prototype, {
    text: {

        get: newFunc('text', 10, function text() {
            if (debug) print('HTMLTitleElement.text.get')
            return mm.memory.private_data.get(this).text
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('text', 1, function text(value) {
            if (debug) print('HTMLTitleElement.text.set', value)
            mm.memory.private_data.get(this).text = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HTMLTitleElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.setPrototypeOf(HTMLTitleElement.prototype, HTMLElement.prototype)

Object.setPrototypeOf(HTMLTitleElement, HTMLElement);

if (proxy) HTMLTitleElement = mm.proxy(HTMLTitleElement, 'HTMLTitleElement')