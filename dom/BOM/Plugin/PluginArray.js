PluginArray = newFunc('PluginArray', 1, function PluginArray(len) {
    mm.memory.private_data.set(this, {
        length: len
    })
    this._length = len
})


Object.defineProperties(PluginArray.prototype, {
    length: {

        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('PluginArray.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    item: {

        value: newFunc('item', 10, function item(v) {
            if (debug) print('PluginArray.item.call', arguments)
            switch (v){
                case 4294967296:
                case 0:
                    return pluginArrays[0];
            }
            return pluginArrays[v]

        }), writable: true, enumerable: true, configurable: true,


    },
    namedItem: {

        value: newFunc('namedItem', 10, function namedItem() {
            if (debug) print('PluginArray.namedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    refresh: {

        value: newFunc('refresh', 10, function refresh() {
            if (debug) print('PluginArray.refresh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, [Symbol.toStringTag]: {
        configurable: true, enumerable: false, writable: false,
        value: 'PluginArray'

    },
    [Symbol.toPrimitive]: {
        value: 'PluginArray'
    },
    'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!PluginArray.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('PluginArray.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})


mm.memory.pluginArray.instantiate = {};

pluginArrays = new PluginArray(Object.keys(pluginss).length);
// pluginArrays.__proto__ = PluginArray.prototype
// Object.setPrototypeOf(pluginArrays, PluginArray)
// Object.setPrototypeOf(pluginArrays.__proto__, PluginArray.prototype)

;




let keys = Object.keys(pluginss);
if (keys.length != 0) {
    for (let index = 0; index < keys.length; index++) {
        let plugin = new Plugin();
        // __getDeno().core.ops.op_console_log(typeof  mm.memory.private_data.get(plugin));
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