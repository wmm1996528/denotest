;SharedStorage = newFunc('SharedStorage', 1, function () {
    print('SharedStorage.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SharedStorage.prototype, {
    append: {

        value: newFunc('append', 10, function () {
            if (debug) print('SharedStorage.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('SharedStorage.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('SharedStorage.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('SharedStorage.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    set: {

        value: newFunc('set', 10, function () {
            if (debug) print('SharedStorage.set.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SharedStorage.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    worklet: {

        get: newFunc('worklet', 10, function () {
            let res = mm.memory.private_data.get(this).worklet;
            if (debug) print('SharedStorage.worklet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    createWorklet: {

        value: newFunc('createWorklet', 10, function () {
            if (debug) print('SharedStorage.createWorklet.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    run: {

        value: newFunc('run', 10, function () {
            if (debug) print('SharedStorage.run.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectURL: {

        value: newFunc('selectURL', 10, function () {
            if (debug) print('SharedStorage.selectURL.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});
;SharedStorageWorklet = newFunc('SharedStorageWorklet', 1, function () {
    print('SharedStorageWorklet.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SharedStorageWorklet.prototype, {
    addModule: {

        value: newFunc('addModule', 10, function () {
            if (debug) print('SharedStorageWorklet.addModule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SharedStorageWorklet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    run: {

        value: newFunc('run', 10, function () {
            if (debug) print('SharedStorageWorklet.run.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectURL: {

        value: newFunc('selectURL', 10, function () {
            if (debug) print('SharedStorageWorklet.selectURL.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});
sharedStorage = new SharedStorage();