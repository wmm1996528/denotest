MimeType = newFunc('MimeType', 4, function MimeType() {
    mm.memory.private_data.set(this, {})
})
print(new MimeType().toString())
;(function () {

    MimeType = newFunc('MimeType', 1, function () {
        // print('MimeType.call');
        mm.memory.private_data.set(this, {})
    });


    ;delete MimeType.prototype.constructor;
    ;
    Object.defineProperties(MimeType.prototype, {
        [Symbol.toStringTag]: {
            value: 'MimeType'
        },

        'type': {

            get: newFunc('type', 10, function () {


                if (!MimeType.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['type'];
                if (debug) print('MimeType.type.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        'suffixes': {

            get: newFunc('suffixes', 10, function () {


                if (!MimeType.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['suffixes'];
                if (debug) print('MimeType.suffixes.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        'description': {

            get: newFunc('description', 10, function () {


                if (!MimeType.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['description'];
                if (debug) print('MimeType.description.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        'enabledPlugin': {

            get: newFunc('enabledPlugin', 10, function () {


                if (!MimeType.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['enabledPlugin'];
                if (debug) print('MimeType.enabledPlugin.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        'constructor': {

            value: newFunc('constructor', 10, function () {

                if (!MimeType.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('MimeType.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
    })


    mm.memory.mimeType.new = function (mimeType_data) {
        let mimetype = new MimeType();
        if (mimeType_data !== undefined) {
            mm.memory.private_data.get(mimetype).description = mimeType_data.description;
            mm.memory.private_data.get(mimetype).suffixes = mimeType_data.suffixes;
            mm.memory.private_data.get(mimetype).type = mimeType_data.type;
            mm.memory.private_data.get(mimetype).enabledPlugin = mimeType_data;
        }
        ;

        Object.setPrototypeOf(mimetype, MimeType.prototype)
        return mimetype
    }

})();

// debugger;
