;CookieChangeEvent = newFunc('CookieChangeEvent', 1, function () {
    print('CookieChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CookieChangeEvent.prototype, {
    changed: {

        get: newFunc('changed', 10, function () {
            let res = mm.memory.private_data.get(this).changed;
            if (debug) print('CookieChangeEvent.changed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deleted: {

        get: newFunc('deleted', 10, function () {
            let res = mm.memory.private_data.get(this).deleted;
            if (debug) print('CookieChangeEvent.deleted.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CookieChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CookieStore = newFunc('CookieStore', 1, function () {
    print('CookieStore.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CookieStore.prototype, {
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('CookieStore.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('CookieStore.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAll: {

        value: newFunc('getAll', 10, function () {
            if (debug) print('CookieStore.getAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    set: {

        value: newFunc('set', 10, function () {
            if (debug) print('CookieStore.set.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CookieStore.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    onchange: {

        get: newFunc('onchange', 10, function () {
            let res = mm.memory.private_data.get(this).onchange;
            if (debug) print('CookieStore.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function (value) {
            if (debug) print('CookieStore.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
});
;CookieStoreManager = newFunc('CookieStoreManager', 1, function () {
    print('CookieStoreManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CookieStoreManager.prototype, {
    getSubscriptions: {

        value: newFunc('getSubscriptions', 10, function () {
            if (debug) print('CookieStoreManager.getSubscriptions.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    subscribe: {

        value: newFunc('subscribe', 10, function () {
            if (debug) print('CookieStoreManager.subscribe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unsubscribe: {

        value: newFunc('unsubscribe', 10, function () {
            if (debug) print('CookieStoreManager.unsubscribe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CookieStoreManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
cookieStore = new CookieStore()