Attr = newFunc('Attr', 1, function Attr(type) {
    mm.memory.private_data.set(this, {
        namespaceURI: null,
        prefix: null,
        localName: type,
        name: type,
    })
})


;delete Attr.prototype.constructor;
;
Object.defineProperties(Attr.prototype, {
    [Symbol.toStringTag]: {
        value: 'Attr'
    },

    'namespaceURI': {

        get: newFunc('namespaceURI', 10, function () {


            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['namespaceURI'];
            if (debug) print('Attr.namespaceURI.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'prefix': {

        get: newFunc('prefix', 10, function () {


            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['prefix'];
            if (debug) print('Attr.prefix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'localName': {

        get: newFunc('localName', 10, function () {


            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['localName'];
            if (debug) print('Attr.localName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'name': {

        get: newFunc('name', 10, function () {


            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['name'];
            if (debug) print('Attr.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'value': {

        get: newFunc('value', 10, function () {


            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['value'];
            if (debug) print('Attr.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('Attr.value.set', value)
            mm.memory.private_data.get(this)['value'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'ownerElement': {

        get: newFunc('ownerElement', 10, function () {


            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ownerElement'];
            if (debug) print('Attr.ownerElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'specified': {

        get: newFunc('specified', 10, function () {


            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['specified'];
            if (debug) print('Attr.specified.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Attr.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Attr.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Object.setPrototypeOf(Attr, Node.prototype)

