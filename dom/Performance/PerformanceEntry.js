PerformanceEntry = newFunc('PerformanceEntry', 1, function () {
    print('PerformanceEntry.call');
    mm.memory.private_data.set(this, {})
});


;delete PerformanceEntry.prototype.constructor;
;
Object.defineProperties(PerformanceEntry.prototype, {
    [Symbol.toStringTag]: {
        value: 'PerformanceEntry'
    },

    'name': {

        get: newFunc('name', 10, function () {


            if (!PerformanceEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['name'] || '';
            if (debug) print('PerformanceEntry.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'entryType': {

        get: newFunc('entryType', 10, function () {


            if (!PerformanceEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['entryType'] || 'navigation';
            if (debug) print('PerformanceEntry.entryType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'startTime': {

        get: newFunc('startTime', 10, function () {


            if (!PerformanceEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['startTime'] || 0;
            if (debug) print('PerformanceEntry.startTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'duration': {

        get: newFunc('duration', 10, function () {


            if (!PerformanceEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['duration'] || 7984.600000023842;
            if (debug) print('PerformanceEntry.duration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!PerformanceEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceEntry.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!PerformanceEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceEntry.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})