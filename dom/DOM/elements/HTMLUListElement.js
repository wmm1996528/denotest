HTMLUListElement = newFunc('HTMLUListElement', 1, function HTMLUListElement() {

    Element.call(this)
})

Object.defineProperties(HTMLUListElement.prototype,
    {
        compact: {

            get: newFunc('compact', 10, function compact() {
                if (debug) print('HTMLUListElement.compact.get')
                return mm.memory.private_data.get(this).compact
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('compact', 1, function compact(value) {
                if (debug) print('HTMLUListElement.compact.set', value)
                mm.memory.private_data.get(this).compact = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        type: {

            get: newFunc('type', 10, function type() {
                if (debug) print('HTMLUListElement.type.get')
                return mm.memory.private_data.get(this).type
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('type', 1, function type(value) {
                if (debug) print('HTMLUListElement.type.set', value)
                mm.memory.private_data.get(this).type = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('HTMLUListElement.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
    })
Object.setPrototypeOf(HTMLUListElement.prototype, HTMLElement.prototype)

Object.setPrototypeOf(HTMLUListElement, HTMLElement);

if (proxy) HTMLUListElement = mm.proxy(HTMLUListElement, 'HTMLUListElement')