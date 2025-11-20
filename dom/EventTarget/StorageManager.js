StorageManager = newFunc('StorageManager', 1, function () {
    print('StorageManager.call');
    mm.memory.private_data.set(this, {})
});


;delete StorageManager.prototype.constructor;
;
Object.defineProperties(StorageManager.prototype, {
    [Symbol.toStringTag]: {
        value: 'StorageManager'
    },

    'estimate': {

        value: newFunc('estimate', 10, function () {

            if (!StorageManager.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('StorageManager.estimate.call', arguments)
            return {
                "quota": 596797550592,
                "usage": 967,
                "usageDetails": {
                    "indexedDB": 967
                }
            }
        }), writable: true, enumerable: true, configurable: true,


    },
    'persisted': {

        value: newFunc('persisted', 10, function () {

            if (!StorageManager.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('StorageManager.persisted.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!StorageManager.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('StorageManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'getDirectory': {

        value: newFunc('getDirectory', 10, function () {

            if (!StorageManager.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('StorageManager.getDirectory.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'persist': {

        value: newFunc('persist', 10, function () {

            if (!StorageManager.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('StorageManager.persist.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})


Object.setPrototypeOf(StorageManager.prototype, EventTarget.prototype);
Object.setPrototypeOf(StorageManager, EventTarget);

