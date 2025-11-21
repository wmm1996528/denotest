Plugin = newFunc('Plugin', 1, function Plugin() {
    print('Plugin.call');
    mm.memory.private_data.set(this, {})


});


// ; delete Plugin.prototype.constructor;
;
Object.defineProperties(Plugin.prototype, {
    [Symbol.toStringTag]: {
        value: 'Plugin'
    },

    'name': {

        get: newFunc('name', 10, function () {


            if (!Plugin.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['name'];
            if (debug) print('Plugin.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'filename': {

        get: newFunc('filename', 10, function () {


            if (!Plugin.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['filename'];
            if (debug) print('Plugin.filename.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'description': {

        get: newFunc('description', 10, function () {


            if (!Plugin.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['description'];
            if (debug) print('Plugin.description.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'length': {

        get: newFunc('length', 10, function () {


            if (!Plugin.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['length'];
            if (debug) print('Plugin.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'item': {

        value: newFunc('item', 10, function () {

            if (!Plugin.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Plugin.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'namedItem': {

        value: newFunc('namedItem', 10, function () {

            if (!Plugin.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Plugin.namedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    // 'constructor': {
    //
    //     value: newFunc('constructor', 10, function () {
    //
    //         if (!Plugin.prototype.isPrototypeOf(this)) {
    //             throw new TypeError("Illegal constructor");
    //         }
    //         ;
    //         if (debug) __getDeno().core.ops.op_console_log('Plugin.constructor.call', arguments)
    //
    //     }), writable: true, enumerable: false, configurable: true,
    //
    //
    // },
})

mm.memory.plugin.new = function (plugin_data) {

    let result = plugin;
    return result;
}


// debugger;