// HTMLAllCollection = documentAll(get_all_node_by_id);
HTMLAllCollection = newFunc('HTMLAllCollection', 10, get_all_node_by_id)

// HTMLAllCollection.prototype = Object

Object.defineProperties(HTMLAllCollection.prototype, {
    'length': {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this)['length'];
            if (debug) print('HTMLAllCollection.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'item': {

        value: newFunc('item', 10, function () {
            if (debug) print('HTMLAllCollection.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'namedItem': {

        value: newFunc('namedItem', 10, function () {
            if (debug) print('HTMLAllCollection.namedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLAllCollection.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})