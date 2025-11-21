Plugin = newFunc('Plugin', 1, function Plugin() {
    __getDeno().core.ops.op_console_log('Plugin.call');
    mm.memory.private_data.set(this, {})
    __getDeno().core.ops.op_console_log(typeof  mm.memory.private_data.get(this));


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
let keys = Object.keys(pluginss);
if (keys.length != 0) {
    for (let index = 0; index < keys.length; index++) {
        let plugin = new Plugin();
        __getDeno().core.ops.op_console_log(typeof  mm.memory.private_data.get(plugin));
        let plugin_data = pluginss[keys[index]];
        if (plugin_data !== undefined) {
            mm.memory.private_data.get(plugin).description = plugin_data.description;
            mm.memory.private_data.get(plugin).filename = plugin_data.filename;
            mm.memory.private_data.get(plugin).name = plugin_data.name;
            mm.memory.private_data.get(plugin)['0'] = mm.memory.mimeType.new(plugin_data['0'])
            mm.memory.private_data.get(plugin)[plugin_data['0'].type] = mm.memory.mimeType.new(plugin_data['0'])
            mm.memory.private_data.get(plugin)['1'] = mm.memory.mimeType.new(plugin_data['1'])
            mm.memory.private_data.get(plugin)[plugin_data['1'].type] = mm.memory.mimeType.new(plugin_data['1'])
            plugin[0] = mm.memory.private_data.get(plugin)['0']
            plugin[1] = mm.memory.private_data.get(plugin)['1']
            // for (let mtindex = 0; mtindex < plugin_data.MimeTypes.length; mtindex++) {
            //     let mimeType_data = plugin_data.MimeTypes[mtindex];
            //     let mimeType = mm.memory.mimeType.new(mimeType_data, plugin);
            //
            //     Object.defineProperty(plugin, mtindex, {
            //         value: mimeType, configurable: true, enumerable: true, writable: false
            //     })
            //     Object.defineProperty(plugin, mimeType.type, {
            //         value: mimeType, configurable: true, enumerable: false, writable: false
            //     });
            // };
            // plugin.length = plugin_data.MimeTypes.length;
        }
        Object.setPrototypeOf(plugin, Plugin.prototype)
        pluginArrays[index] = plugin;
        pluginArrays[plugin.name] = plugin;
        // Object.defineProperty(pluginArrays, index, {
        //     value: plugin_temp, configurable: true, enumerable: true, writable: false
        // });
        // Object.defineProperty(pluginArrays, plugin_temp.name, {
        //     value: plugin_temp, configurable: true, enumerable: false, writable: false
        // });
        mm.memory.private_data.get(pluginArrays).length = index + 1
    }
}
mm.memory.plugin.new = function (plugin_data) {

    let result = plugin;
    return result;
}


// debugger;