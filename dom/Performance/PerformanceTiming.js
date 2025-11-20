PerformanceTiming = newFunc('PerformanceTiming', 10, function PerformanceTiming() {
    let navigationStart = Date.now()
    mm.memory.private_data.set(this, {
        "navigationStart": navigationStart,
        "secureConnectionStart": 0,
        "redirectStart": 0,
        "redirectEnd": 0,

        'connectStart': navigationStart + 1,
        'unloadEventEnd': navigationStart + 11,
        'domainLookupStart': navigationStart + 1,
        'domainLookupEnd': navigationStart + 1,
        'responseStart': navigationStart + 8,
        'connectEnd': navigationStart + 1,
        'responseEnd': navigationStart + 8,
        'requestStart': navigationStart + 6,
        'domLoading': navigationStart + 12,
        'loadEventEnd': navigationStart + 154,
        'domComplete': navigationStart + 154,
        'loadEventStart': navigationStart + 154,
        'domContentLoadedEventEnd': navigationStart + 86,
        'unloadEventStart': navigationStart + 11,
        'domInteractive': navigationStart + 86,
        'fetchStart': navigationStart + 1,
        'domContentLoadedEventStart': navigationStart + 86,

    })
})
// ;(function () {
//     const $safe_get_attribute = [
//         'connectEnd', 'connectStart', 'domComplete', 'domContentLoadedEventEnd', 'domContentLoadedEventStart', 'domInteractive', 'domLoading', 'domainLookupEnd',
//         'domainLookupStart', 'fetchStart', 'loadEventEnd', 'loadEventStart', 'navigationStart', 'redirectEnd', 'redirectStart', 'requestStart', 'responseEnd',
//         'responseStart', 'secureConnectionStart', 'unloadEventEnd', 'unloadEventStart'
//     ];
//     const $safe_set_attribute = [];
//     const $safe_func_attribute = ['toJSON'];
//
//
//     PerformanceTiming.prototype = {
//
//         get navigationStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time + -8;
//             if (debug) print('Get', 'PerformanceTiming', 'navigationStart', arguments, result);
//             return result;
//         },
//         get unloadEventStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             return 0;
//         },
//         get unloadEventEnd() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = 0;
//             if (debug) print('Get', 'PerformanceTiming', 'unloadEventEnd', arguments, result);
//             return result;
//         },
//         get redirectStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = 0;
//             if (debug) print('Get', 'PerformanceTiming', 'redirectStart', arguments, result);
//             return result;
//         },
//         get redirectEnd() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = 0;
//             if (debug) print('Get', 'PerformanceTiming', 'redirectEnd', arguments, result);
//             return result;
//         },
//         get fetchStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time;
//             if (debug) print('Get', 'PerformanceTiming', 'fetchStart', arguments, result);
//             return result;
//         },
//         get domainLookupStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time;
//             if (debug) print('Get', 'PerformanceTiming', 'domainLookupStart', arguments, result);
//             return result;
//         },
//         get domainLookupEnd() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time;
//             if (debug) print('Get', 'PerformanceTiming', 'domainLookupEnd', arguments, result);
//             return result;
//         },
//         get connectStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time;
//             if (debug) print('Get', 'PerformanceTiming', 'connectStart', arguments, result);
//             return result;
//         },
//         get connectEnd() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time;
//             if (debug) print('Get', 'PerformanceTiming', 'connectEnd', arguments, result);
//             return result;
//         },
//         get secureConnectionStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = 0;
//             if (debug) print('Get', 'PerformanceTiming', 'secureConnectionStart', arguments, result);
//             return result;
//         },
//         get requestStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time;
//             if (debug) print('Get', 'PerformanceTiming', 'requestStart', arguments, result);
//             return result;
//         },
//
//         get responseStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time;
//             if (debug) print('Get', 'PerformanceTiming', 'responseStart', arguments, result);
//             return result;
//         },
//         get responseEnd() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time + 20;
//             if (debug) print('Get', 'PerformanceTiming', 'responseEnd', arguments, result);
//             return result;
//         },
//         get domLoading() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time + 79;
//             if (debug) print('Get', 'PerformanceTiming', 'domLoading', arguments, result);
//             return result;
//         },
//         get domInteractive() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time + 102;
//             if (debug) print('Get', 'PerformanceTiming', 'domInteractive', arguments, result);
//             return result;
//         },
//         get domContentLoadedEventStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time + 103;
//             if (debug) print('Get', 'PerformanceTiming', 'domContentLoadedEventStart', arguments, result);
//             return result;
//         },
//         get domContentLoadedEventEnd() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time + 106;
//             if (debug) print('Get', 'PerformanceTiming', 'domContentLoadedEventEnd', arguments, result);
//             return result;
//         },
//         get domComplete() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = mm.memory.private_data.get(this).base_time + parseInt(Math.random() * (500 - 10) + 100, 10);
//             if (debug) print('Get', 'PerformanceTiming', 'domComplete', arguments, result);
//             return result;
//         },
//         get loadEventStart() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.domComplete;
//             if (debug) print('Get', 'PerformanceTiming', 'loadEventStart', arguments, result);
//             return result;
//         },
//         get loadEventEnd() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.domComplete;
//             if (debug) print('Get', 'PerformanceTiming', 'loadEventEnd', arguments, result);
//             return result;
//         },
//
//         toJSON() {
//             if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = undefined;
//             if (debug) print('Func', 'PerformanceTiming', 'toJSON', arguments, result);
//             return result;
//         },
//         constructor() {
//         }
//
//
//     };
//
//     // mm.rename(PerformanceTiming.prototype, "PerformanceTiming");
//     // mm.safeDescriptor_addConstructor(PerformanceTiming);
//     mm.safe_Objattribute(PerformanceTiming, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
//
// })();


PerformanceTiming = newFunc('PerformanceTiming', 1, function () {
    print('PerformanceTiming.call');
    mm.memory.private_data.set(this, {
        base_time: Date.now(),
    })
})


PerformanceTiming = newFunc('PerformanceTiming', 1, function () {
    print('PerformanceTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceTiming.prototype, {
    [Symbol.toStringTag]: {
        value: 'PerformanceTiming'
    },

    'navigationStart': {

        get: newFunc('navigationStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['navigationStart'];
            if (debug) print('PerformanceTiming.navigationStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'unloadEventStart': {

        get: newFunc('unloadEventStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['unloadEventStart'];
            if (debug) print('PerformanceTiming.unloadEventStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'unloadEventEnd': {

        get: newFunc('unloadEventEnd', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['unloadEventEnd'];
            if (debug) print('PerformanceTiming.unloadEventEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'redirectStart': {

        get: newFunc('redirectStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['redirectStart'];
            if (debug) print('PerformanceTiming.redirectStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'redirectEnd': {

        get: newFunc('redirectEnd', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['redirectEnd'];
            if (debug) print('PerformanceTiming.redirectEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'fetchStart': {

        get: newFunc('fetchStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['fetchStart'];
            if (debug) print('PerformanceTiming.fetchStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domainLookupStart': {

        get: newFunc('domainLookupStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domainLookupStart'];
            if (debug) print('PerformanceTiming.domainLookupStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domainLookupEnd': {

        get: newFunc('domainLookupEnd', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domainLookupEnd'];
            if (debug) print('PerformanceTiming.domainLookupEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'connectStart': {

        get: newFunc('connectStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['connectStart'];
            if (debug) print('PerformanceTiming.connectStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'connectEnd': {

        get: newFunc('connectEnd', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['connectEnd'];
            if (debug) print('PerformanceTiming.connectEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'secureConnectionStart': {

        get: newFunc('secureConnectionStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['secureConnectionStart'];
            if (debug) print('PerformanceTiming.secureConnectionStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'requestStart': {

        get: newFunc('requestStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['requestStart'];
            if (debug) print('PerformanceTiming.requestStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'responseStart': {

        get: newFunc('responseStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['responseStart'];
            if (debug) print('PerformanceTiming.responseStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'responseEnd': {

        get: newFunc('responseEnd', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['responseEnd'];
            if (debug) print('PerformanceTiming.responseEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domLoading': {

        get: newFunc('domLoading', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domLoading'];
            if (debug) print('PerformanceTiming.domLoading.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domInteractive': {

        get: newFunc('domInteractive', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domInteractive'];
            if (debug) print('PerformanceTiming.domInteractive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domContentLoadedEventStart': {

        get: newFunc('domContentLoadedEventStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domContentLoadedEventStart'];
            if (debug) print('PerformanceTiming.domContentLoadedEventStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domContentLoadedEventEnd': {

        get: newFunc('domContentLoadedEventEnd', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domContentLoadedEventEnd'];
            if (debug) print('PerformanceTiming.domContentLoadedEventEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domComplete': {

        get: newFunc('domComplete', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domComplete'];
            if (debug) print('PerformanceTiming.domComplete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'loadEventStart': {

        get: newFunc('loadEventStart', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['loadEventStart'];
            if (debug) print('PerformanceTiming.loadEventStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'loadEventEnd': {

        get: newFunc('loadEventEnd', 10, function () {


            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['loadEventEnd'];
            if (debug) print('PerformanceTiming.loadEventEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!PerformanceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
