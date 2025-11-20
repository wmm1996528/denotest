PerformanceObserver = newFunc('PerformanceObserver', 1, function (callback) {
    if (debug) print('new PerformanceObserver', callback)
})

// window['PerformanceObserver']
// Utils.registerNative('PerformanceObserver', 'PerformanceObserver')

Object.defineProperties(PerformanceObserver, {
    supportedEntryTypes: {
        value: [
            "element",
            "event",
            "first-input",
            "largest-contentful-paint",
            "layout-shift",
            "longtask",
            "mark",
            "measure",
            "navigation",
            "paint",
            "resource",
            "visibility-state"
        ]
    }
})
Object.defineProperties(PerformanceObserver.prototype, {
    disconnect: {

        value: newFunc('disconnect', 10, function disconnect() {
            if (debug) print('PerformanceObserver.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    observe: {

        value: newFunc('observe', 10, function observe() {
            if (debug) print('PerformanceObserver.observe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    takeRecords: {

        value: newFunc('takeRecords', 10, function takeRecords() {
            if (debug) print('PerformanceObserver.takeRecords.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!PerformanceObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('PerformanceObserver.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})