HTMLLIElement = newFunc('HTMLLIElement', 1, function HTMLLIElement() {

    Element.call(this)
})

Object.defineProperties(HTMLLIElement.prototype,
    {
        value: {

            get: newFunc('value', 10, function value() {
                if (debug) print('HTMLLIElement.value.get')
                return mm.memory.private_data.get(this).value
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('value', 1, function value(value) {
                if (debug) print('HTMLLIElement.value.set', value)
                mm.memory.private_data.get(this).value = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        type: {

            get: newFunc('type', 10, function type() {
                if (debug) print('HTMLLIElement.type.get')
                return mm.memory.private_data.get(this).type
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('type', 1, function type(value) {
                if (debug) print('HTMLLIElement.type.set', value)
                mm.memory.private_data.get(this).type = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('HTMLLIElement.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },

    })
Object.setPrototypeOf(HTMLLIElement.prototype, HTMLElement.prototype)

Object.setPrototypeOf(HTMLLIElement, HTMLElement);

if (proxy) HTMLLIElement = mm.proxy(HTMLLIElement, 'HTMLLIElement')