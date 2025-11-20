MimeTypeArray = newFunc('MimeTypeArray', 1, function MimeTypeArray(len) {
    mm.memory.private_data.set(this, {
        length: len
    })
})


Object.defineProperties(MimeTypeArray.prototype, {
    length: {

        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('MimeTypeArray.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    item: {

        value: newFunc('item', 10, function item() {
            if (debug) print('MimeTypeArray.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    namedItem: {

        value: newFunc('namedItem', 10, function namedItem() {
            if (debug) print('MimeTypeArray.namedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }
    ,
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!MimeTypeArray.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MimeTypeArray.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    [Symbol.toStringTag]: {
        value: 'MimeTypeArray'
    },
    [Symbol.toPrimitive]: {
        value: 'MimeTypeArray'
    }
})
mimeArrays = new MimeTypeArray(Object.keys(mimetypes).length);
mm.memory.mimeTypeArray.instantiate = {};
mm.memory.mimeTypeArray.length = 0;
// mimeArrays.__proto__ = MimeTypeArray.prototype
// Object.setPrototypeOf(mimeArrays, MimeTypeArray)
// Object.setPrototypeOf(mimeArrays.__proto__, MimeTypeArray.prototype)
;(function add_default_mimeTypeArray() {
    let keys = Object.keys(mimetypes);
    for (let mindex = 0; mindex < keys.length; mindex++) {
        let mimeType_ = mimetypes[keys[mindex]]
        Object.setPrototypeOf(mimeType_, MimeType)
        mimeType_.__proto__ = MimeType.prototype
        if (mimeArrays[mimeType_.type] === undefined) {

            Object.defineProperty(mimeArrays, mm.memory.mimeTypeArray.length, {
                value: mimeType_, configurable: true, enumerable: true, writable: false
            });
            Object.defineProperty(mimeArrays, mimeType_.type, {
                value: mimeType_, configurable: true, enumerable: false, writable: false
            });
            mm.memory.mimeTypeArray.length += 1;
        }
    }
    // mm.memory.mimeTypeArray.length = keys.length;

})();

