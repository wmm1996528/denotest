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
;(function add_default_pluginArray() {
    let keys = Object.keys(pluginss);
    if (keys.length != 0) {
        for (let index = 0; index < keys.length; index++) {

            let plugin_temp = mm.memory.plugin.new(pluginss[keys[index]]);
            pluginArrays[index] = plugin_temp;
            pluginArrays[plugin_temp.name] = plugin_temp;
            // Object.defineProperty(pluginArrays, index, {
            //     value: plugin_temp, configurable: true, enumerable: true, writable: false
            // });
            // Object.defineProperty(pluginArrays, plugin_temp.name, {
            //     value: plugin_temp, configurable: true, enumerable: false, writable: false
            // });
            mm.memory.private_data.get(pluginArrays).length = index + 1
        }
    }
})();
if (proxy) pluginArrays = mm.proxy(pluginArrays, 'pluginArrays')

