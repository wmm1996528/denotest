HTMLPreElement = newFunc('HTMLPreElement', 1, function HTMLPreElement() {
    mm.memory.private_data.set(this, {
        width: 10,
    })
})


Object.defineProperties(HTMLPreElement.prototype, {
    width: {

        get: newFunc('width', 10, function width() {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLPreElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function width(value) {
            if (debug) print('HTMLPreElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {
        value: function (){}
    }
})

Object.setPrototypeOf(HTMLPreElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLPreElement, HTMLElement);
HTMLPreElement.__proto__ = HTMLElement.prototype

if (proxy) HTMLPreElement = mm.proxy(HTMLPreElement, 'HTMLPreElement')