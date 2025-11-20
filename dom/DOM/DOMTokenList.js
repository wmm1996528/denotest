DOMTokenList = newFunc('DOMTokenList', 1, function () {
    print('DOMTokenList.call');
    mm.memory.private_data.set(this, {})
});


;delete DOMTokenList.prototype.constructor;
;
Object.defineProperties(DOMTokenList.prototype, {
    [Symbol.toStringTag]: {
        value: 'DOMTokenList'
    },

    'entries': {

        value: newFunc('entries', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'keys': {

        value: newFunc('keys', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'values': {

        value: newFunc('values', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'forEach': {

        value: newFunc('forEach', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'length': {

        get: newFunc('length', 10, function () {


            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['length'];
            if (debug) print('DOMTokenList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'value': {

        get: newFunc('value', 10, function () {


            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['value'];
            if (debug) print('DOMTokenList.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('DOMTokenList.value.set', value)
            mm.memory.private_data.get(this)['value'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'add': {

        value: newFunc('add', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.add.call', arguments)
            if (!mm.memory.private_data.get(this).list) {
                mm.memory.private_data.get(this).list = []
            }
            mm.memory.private_data.get(this).list.push(arguments[0])
            mm.memory.private_data.get(this).length = mm.memory.private_data.get(this).list.length

        }), writable: true, enumerable: true, configurable: true,


    },
    'contains': {

        value: newFunc('contains', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.contains.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'item': {

        value: newFunc('item', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'remove': {

        value: newFunc('remove', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'replace': {

        value: newFunc('replace', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.replace.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'supports': {

        value: newFunc('supports', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.supports.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'toggle': {

        value: newFunc('toggle', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.toggle.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'toString': {

        value: newFunc('toString', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!DOMTokenList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMTokenList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})