HTMLParagraphElement = newFunc('HTMLParagraphElement', 1, function HTMLParagraphElement() {
    mm.memory.private_data.set(this, {
        tagName: 'p'
    })
    //HTMLElement.call(this)
})


Object.defineProperties(HTMLParagraphElement.prototype, {
    align: {

        get: newFunc('align', 10, function align() {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLParagraphElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function align(value) {
            if (debug) print('HTMLParagraphElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HTMLParagraphElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
    Object.setPrototypeOf(HTMLParagraphElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLParagraphElement, HTMLElement);
    HTMLParagraphElement.__proto__ = HTMLElement.prototype;
