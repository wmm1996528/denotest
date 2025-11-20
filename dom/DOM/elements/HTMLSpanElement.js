HTMLSpanElement = newFunc('HTMLSpanElement', 1, function () {
    print('HTMLSpanElement.call');
    mm.memory.private_data.set(this, {})
});


;delete HTMLSpanElement.prototype.constructor;
;
Object.defineProperties(HTMLSpanElement.prototype, {
    [Symbol.toStringTag]: {
        value: 'HTMLSpanElement'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!HTMLSpanElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLSpanElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
// Object.defineProperties(HTMLSpanElement.prototype, {
//
// })

Object.setPrototypeOf(HTMLSpanElement.prototype, HTMLElement.prototype)
Object.setPrototypeOf(HTMLSpanElement, HTMLElement)
