let startNow = parseInt(Math.random() * 2500) + 10500
PerformanceResourceTiming = newFunc('PerformanceResourceTiming', 1, function () {
    print('PerformanceResourceTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceResourceTiming.prototype, {
    [Symbol.toStringTag]: {
        value: 'PerformanceResourceTiming'
    },

    'initiatorType': {

        get: newFunc('initiatorType', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['initiatorType'];
            if (debug) print('PerformanceResourceTiming.initiatorType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'nextHopProtocol': {

        get: newFunc('nextHopProtocol', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['nextHopProtocol'];
            if (debug) print('PerformanceResourceTiming.nextHopProtocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'deliveryType': {

        get: newFunc('deliveryType', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['deliveryType'];
            if (debug) print('PerformanceResourceTiming.deliveryType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'workerStart': {

        get: newFunc('workerStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['workerStart'];
            if (debug) print('PerformanceResourceTiming.workerStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'redirectStart': {

        get: newFunc('redirectStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['redirectStart'];
            if (debug) print('PerformanceResourceTiming.redirectStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'redirectEnd': {

        get: newFunc('redirectEnd', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['redirectEnd'];
            if (debug) print('PerformanceResourceTiming.redirectEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'fetchStart': {

        get: newFunc('fetchStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['fetchStart'];
            if (debug) print('PerformanceResourceTiming.fetchStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domainLookupStart': {

        get: newFunc('domainLookupStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domainLookupStart'];
            if (debug) print('PerformanceResourceTiming.domainLookupStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domainLookupEnd': {

        get: newFunc('domainLookupEnd', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domainLookupEnd'];
            if (debug) print('PerformanceResourceTiming.domainLookupEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'connectStart': {

        get: newFunc('connectStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['connectStart'];
            if (debug) print('PerformanceResourceTiming.connectStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'connectEnd': {

        get: newFunc('connectEnd', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['connectEnd'];
            if (debug) print('PerformanceResourceTiming.connectEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'secureConnectionStart': {

        get: newFunc('secureConnectionStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['secureConnectionStart'];
            if (debug) print('PerformanceResourceTiming.secureConnectionStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'requestStart': {

        get: newFunc('requestStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['requestStart'];
            if (debug) print('PerformanceResourceTiming.requestStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'responseStart': {

        get: newFunc('responseStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['responseStart'];
            if (debug) print('PerformanceResourceTiming.responseStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'responseEnd': {

        get: newFunc('responseEnd', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['responseEnd'];
            if (debug) print('PerformanceResourceTiming.responseEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'transferSize': {

        get: newFunc('transferSize', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['transferSize'];
            if (debug) print('PerformanceResourceTiming.transferSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'encodedBodySize': {

        get: newFunc('encodedBodySize', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['encodedBodySize'];
            if (debug) print('PerformanceResourceTiming.encodedBodySize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'decodedBodySize': {

        get: newFunc('decodedBodySize', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['decodedBodySize'];
            if (debug) print('PerformanceResourceTiming.decodedBodySize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'serverTiming': {

        get: newFunc('serverTiming', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['serverTiming'];
            if (debug) print('PerformanceResourceTiming.serverTiming.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'responseStatus': {

        get: newFunc('responseStatus', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['responseStatus'];
            if (debug) print('PerformanceResourceTiming.responseStatus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'firstInterimResponseStart': {

        get: newFunc('firstInterimResponseStart', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['firstInterimResponseStart'];
            if (debug) print('PerformanceResourceTiming.firstInterimResponseStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceResourceTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'renderBlockingStatus': {

        get: newFunc('renderBlockingStatus', 10, function () {


            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['renderBlockingStatus'];
            if (debug) print('PerformanceResourceTiming.renderBlockingStatus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!PerformanceResourceTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceResourceTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Object.setPrototypeOf(PerformanceResourceTiming, PerformanceEntry)
Object.setPrototypeOf(PerformanceResourceTiming.prototype, PerformanceEntry.prototype)
PerformanceNavigationTiming = newFunc('PerformanceNavigationTiming', 1, function PerformanceNavigationTiming(config) {
    if (config) {
        mm.memory.private_data.set(this, config)
        return;
    }
    mm.memory.private_data.set(this, {
        "name": 'https://www.google.com/_/FlightsFrontendUi/bscframe',
        "entryType": "navigation",
        "startTime": 0,
        "duration": 0,
        "initiatorType": "navigation",
        "deliveryType": "",
        "nextHopProtocol": "http/1.1",
        "renderBlockingStatus": "non-blocking",
        "workerStart": 0,
        "redirectStart": 0,
        "redirectEnd": 0,
        "fetchStart": 0.7000000476837158,
        "domainLookupStart": 0.7000000476837158,
        "domainLookupEnd": 0.7000000476837158,
        "connectStart": 0.7000000476837158,
        "secureConnectionStart": 0,
        "connectEnd": 0.7000000476837158,
        "requestStart": 2.600000001490116 + Math.random() * 20,
        "responseStart": 2.899999998509884 + Math.random() * 20,
        "firstInterimResponseStart": 0,
        "responseEnd": 31,
        "transferSize": 350082,
        "encodedBodySize": 349782,
        "decodedBodySize": 349782,
        "responseStatus": 200,
        "serverTiming": [],
        "unloadEventStart": 31.700000047683716,
        "unloadEventEnd": 31.700000047683716,
        "domInteractive": 0,
        "domContentLoadedEventStart": 0,
        "domContentLoadedEventEnd": 0,
        "domComplete": 0,
        "loadEventStart": 0,
        "loadEventEnd": 0,
        "type": "reload",
        "redirectCount": 0,
        "activationStart": 0,
        "criticalCHRestart": 0
    })
})


;delete PerformanceNavigationTiming.prototype.constructor;
;
Object.defineProperties(PerformanceNavigationTiming.prototype, {
    [Symbol.toStringTag]: {
        value: 'PerformanceNavigationTiming'
    },

    'unloadEventStart': {

        get: newFunc('unloadEventStart', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['unloadEventStart'];
            if (debug) print('PerformanceNavigationTiming.unloadEventStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'unloadEventEnd': {

        get: newFunc('unloadEventEnd', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['unloadEventEnd'];
            if (debug) print('PerformanceNavigationTiming.unloadEventEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domInteractive': {

        get: newFunc('domInteractive', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domInteractive'];
            if (debug) print('PerformanceNavigationTiming.domInteractive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domContentLoadedEventStart': {

        get: newFunc('domContentLoadedEventStart', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domContentLoadedEventStart'];
            if (debug) print('PerformanceNavigationTiming.domContentLoadedEventStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domContentLoadedEventEnd': {

        get: newFunc('domContentLoadedEventEnd', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domContentLoadedEventEnd'];
            if (debug) print('PerformanceNavigationTiming.domContentLoadedEventEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'domComplete': {

        get: newFunc('domComplete', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['domComplete'];
            if (debug) print('PerformanceNavigationTiming.domComplete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'loadEventStart': {

        get: newFunc('loadEventStart', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['loadEventStart'];
            if (debug) print('PerformanceNavigationTiming.loadEventStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'loadEventEnd': {

        get: newFunc('loadEventEnd', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['loadEventEnd'];
            if (debug) print('PerformanceNavigationTiming.loadEventEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'type': {

        get: newFunc('type', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['type'];
            if (debug) print('PerformanceNavigationTiming.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'redirectCount': {

        get: newFunc('redirectCount', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['redirectCount'];
            if (debug) print('PerformanceNavigationTiming.redirectCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'criticalCHRestart': {

        get: newFunc('criticalCHRestart', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['criticalCHRestart'];
            if (debug) print('PerformanceNavigationTiming.criticalCHRestart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'activationStart': {

        get: newFunc('activationStart', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['activationStart'];
            if (debug) print('PerformanceNavigationTiming.activationStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceNavigationTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PerformanceNavigationTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'notRestoredReasons': {

        get: newFunc('notRestoredReasons', 10, function () {


            if (!PerformanceNavigationTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['notRestoredReasons'];
            if (debug) print('PerformanceNavigationTiming.notRestoredReasons.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
})
Object.setPrototypeOf(PerformanceNavigationTiming, PerformanceResourceTiming)
Object.setPrototypeOf(PerformanceNavigationTiming.prototype, PerformanceResourceTiming.prototype)

Performance = newFunc('Performance', 10, function Performance() {
    let ele = [
        {
            "name": "https://search.lionairthai.com/default.aspx?t=337&__cf_chl_rt_tk=KrynuQfk.Y_FKLzDv1Irm6CZ0MUZZWbIQILARi5XCu8-1750436417-1.0.1.1-3YtkSooaVeVKBh6DUbOQqMsT8fibieBydN_NpiZLSgo",
            "entryType": "navigation",
            "startTime": 0,
            "duration": 3539.5750002861023,
            "initiatorType": "navigation",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1.3450002670288086,
            "domainLookupStart": 3.450000286102295,
            "domainLookupEnd": 3.455000400543213,
            "connectStart": 3.455000400543213,
            "secureConnectionStart": 3.760000228881836,
            "connectEnd": 486.4450001716614,
            "requestStart": 486.7250003814697,
            "responseStart": 572.875,
            "firstInterimResponseStart": 0,
            "finalResponseHeadersStart": 572.875,
            "responseEnd": 573.4000000953674,
            "transferSize": 8127,
            "encodedBodySize": 7827,
            "decodedBodySize": 11649,
            "responseStatus": 403,
            "serverTiming": [
                {
                    "name": "chlray",
                    "duration": 0,
                    "description": "953283371ccbd5ce"
                }
            ],
            "unloadEventStart": 580.0250000953674,
            "unloadEventEnd": 580.0250000953674,
            "domInteractive": 597.4500002861023,
            "domContentLoadedEventStart": 597.4700002670288,
            "domContentLoadedEventEnd": 597.4800000190735,
            "domComplete": 3539.54000043869,
            "loadEventStart": 3539.5600004196167,
            "loadEventEnd": 3539.5750002861023,
            "type": "navigate",
            "redirectCount": 0,
            "activationStart": 0,
            "criticalCHRestart": 0,
            "notRestoredReasons": null
        },
        {
            "name": "visible",
            "entryType": "visibility-state",
            "startTime": 0,
            "duration": 0
        },
        {
            "name": `https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/cmg/1`,
            "entryType": "resource",
            "startTime": 594.1100001335144,
            "duration": 154.04500007629395,
            "initiatorType": "link",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 594.1100001335144,
            "domainLookupStart": 594.1100001335144,
            "domainLookupEnd": 594.1100001335144,
            "connectStart": 594.1100001335144,
            "secureConnectionStart": 594.1100001335144,
            "connectEnd": 594.1100001335144,
            "requestStart": 636.335000038147,
            "responseStart": 718.6900000572205,
            "firstInterimResponseStart": 0,
            "finalResponseHeadersStart": 718.6900000572205,
            "responseEnd": 748.1550002098083,
            "transferSize": 386,
            "encodedBodySize": 48951,
            "decodedBodySize": 86,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": `https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/b/orchestrate/chl_api/v1?ray=${window._cray2}&lang=auto`,
            "entryType": "resource",
            "startTime": 594.1100001335144,
            "duration": 154.04500007629395,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 594.1100001335144,
            "domainLookupStart": 594.1100001335144,
            "domainLookupEnd": 594.1100001335144,
            "connectStart": 594.1100001335144,
            "secureConnectionStart": 594.1100001335144,
            "connectEnd": 594.1100001335144,
            "requestStart": 636.335000038147,
            "responseStart": 718.6900000572205,
            "firstInterimResponseStart": 0,
            "finalResponseHeadersStart": 718.6900000572205,
            "responseEnd": 748.1550002098083,
            "transferSize": 386,
            "encodedBodySize": 60034,
            "decodedBodySize": 59734,
            "responseStatus": 200,
            "serverTiming": []
        },

        {
            "name": "first-paint",
            "entryType": "paint",
            "startTime": 1011.2800002098083,
            "duration": 0
        },
        {
            "name": "first-contentful-paint",
            "entryType": "paint",
            "startTime": 1011.2800002098083,
            "duration": 0
        },
        {
            "name": "https://challenges.cloudflare.com/turnstile/v0/g/4d127ba5149d/api.js?onload=VHxiQ3&render=explicit",
            "entryType": "resource",
            "startTime": 961.2699999809265,
            "duration": 234.6100001335144,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 961.2699999809265,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "finalResponseHeadersStart": 0,
            "responseEnd": 1195.880000114441,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },

        {
            "name": window._referer??'referer',
            "entryType": "resource",
            "startTime": 3526.380000114441,
            "duration": 97.8250002861023,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3526.380000114441,
            "domainLookupStart": 3526.380000114441,
            "domainLookupEnd": 3526.380000114441,
            "connectStart": 3526.380000114441,
            "secureConnectionStart": 3526.380000114441,
            "connectEnd": 3526.380000114441,
            "requestStart": 3527.7699999809265,
            "responseStart": 3621.875,
            "firstInterimResponseStart": 0,
            "finalResponseHeadersStart": 3621.875,
            "responseEnd": 3624.205000400543,
            "transferSize": 15038,
            "encodedBodySize": 14738,
            "decodedBodySize": 19528,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://search.lionairthai.com/favicon.ico",
            "entryType": "resource",
            "startTime": 3542.920000076294,
            "duration": 86.97000026702881,
            "initiatorType": "other",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3542.920000076294,
            "domainLookupStart": 3542.920000076294,
            "domainLookupEnd": 3542.920000076294,
            "connectStart": 3542.920000076294,
            "secureConnectionStart": 3542.920000076294,
            "connectEnd": 3542.920000076294,
            "requestStart": 3546.2650003433228,
            "responseStart": 3629.5350003242493,
            "firstInterimResponseStart": 0,
            "finalResponseHeadersStart": 3629.5350003242493,
            "responseEnd": 3629.8900003433228,
            "transferSize": 5637,
            "encodedBodySize": 5337,
            "decodedBodySize": 7882,
            "responseStatus": 403,
            "serverTiming": [
                {
                    "name": "chlray",
                    "duration": 0,
                    "description": "9532834a3d2cd5ce"
                }
            ]
        },
        {
            "name": "long-animation-frame",
            "entryType": "long-animation-frame",
            "startTime": 3624.420000076294,
            "duration": 67.95499992370605,
            "renderStart": 3691.75,
            "styleAndLayoutStart": 3691.835000038147,
            "firstUIEventTimestamp": 0,
            "blockingDuration": 16.823,
            "scripts": [
                {
                    "name": "script",
                    "entryType": "script",
                    "startTime": 3625.205000400543,
                    "duration": 65,
                    "invoker": "XMLHttpRequest.onreadystatechange",
                    "invokerType": "event-listener",
                    "windowAttribution": "self",
                    "executionStart": 3625.205000400543,
                    "forcedStyleAndLayoutDuration": 0,
                    "pauseDuration": 0,
                    "sourceURL":  `https://search.lionairthai.com/cdn-cgi/challenge-platform/h/g/orchestrate/chl_page/v1?ray=${window.cray1}`,
                    "sourceFunctionName": "",
                    "sourceCharPosition": 31629
                }
            ]
        },
        {
            "name": "https://challenges.cloudflare.com/cdn-cgi/challenge-platform/h/g/turnstile/if/ov2/av0/rcv/qmgy1/0x4AAAAAAADnPIDROrmt1Wwj/dark/fbE/new/normal/auto/",
            "entryType": "resource",
            "startTime": 3688.005000114441,
            "duration": 526.1500000953674,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3688.005000114441,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "finalResponseHeadersStart": 0,
            "responseEnd": 4214.155000209808,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        }

    ]

    mm.memory.private_data.set(this, {
        usedJSHeapSize: 253107697,
        entries:ele
    })
})

;(function () {
    MemoryInfo = newFunc('MemoryInfo', 10, function MemoryInfo() {
        mm.memory.private_data.set(this, {
            usedJSHeapSize: 253107697
        })
    })
    let resources = [];
    let resources2 = [
        {
            "name": "https://www.flyfrontier.com/scripts/jquery_3.5.1.min.js",
            "entryType": "resource",
            "startTime": 1193.6999999955297,
            "duration": 31.100000001490116,
            "initiatorType": "script",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1193.6999999955297,
            "domainLookupStart": 1193.6999999955297,
            "domainLookupEnd": 1193.6999999955297,
            "connectStart": 1193.6999999955297,
            "secureConnectionStart": 1193.6999999955297,
            "connectEnd": 1193.6999999955297,
            "requestStart": 1219,
            "responseStart": 1220.3999999985099,
            "firstInterimResponseStart": 1220.3999999985099,
            "responseEnd": 1224.7999999970198,
            "transferSize": 0,
            "encodedBodySize": 30981,
            "decodedBodySize": 89478,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/css/jquery.smartbanner.css",
            "entryType": "resource",
            "startTime": 1194.1000000014901,
            "duration": 31.099999994039536,
            "initiatorType": "link",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.1000000014901,
            "domainLookupStart": 1194.1000000014901,
            "domainLookupEnd": 1194.1000000014901,
            "connectStart": 1194.1000000014901,
            "secureConnectionStart": 1194.1000000014901,
            "connectEnd": 1194.1000000014901,
            "requestStart": 1222.5,
            "responseStart": 1223.7999999970198,
            "firstInterimResponseStart": 1223.7999999970198,
            "responseEnd": 1225.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 1280,
            "decodedBodySize": 4114,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/bundles/HomePageBundle?v=LTwLFzM2g-it5AlctPcDTx96g5libs0lubeEBdgHhQ81",
            "entryType": "resource",
            "startTime": 1194.1999999955297,
            "duration": 31.600000001490116,
            "initiatorType": "link",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.1999999955297,
            "domainLookupStart": 1194.1999999955297,
            "domainLookupEnd": 1194.1999999955297,
            "connectStart": 1194.1999999955297,
            "secureConnectionStart": 1194.1999999955297,
            "connectEnd": 1194.1999999955297,
            "requestStart": 1222.5,
            "responseStart": 1224.2999999970198,
            "firstInterimResponseStart": 1224.2999999970198,
            "responseEnd": 1225.7999999970198,
            "transferSize": 0,
            "encodedBodySize": 16517,
            "decodedBodySize": 63096,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/bundles/MediaQueryBundle?v=jyIvTXkGQwMccaMoRDr5e0mLH-3k1kuAYyYZ0LEBlVo1",
            "entryType": "resource",
            "startTime": 1194.1999999955297,
            "duration": 31.700000002980232,
            "initiatorType": "link",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.1999999955297,
            "domainLookupStart": 1194.1999999955297,
            "domainLookupEnd": 1194.1999999955297,
            "connectStart": 1194.1999999955297,
            "secureConnectionStart": 1194.1999999955297,
            "connectEnd": 1194.1999999955297,
            "requestStart": 1222.5,
            "responseStart": 1224.2999999970198,
            "firstInterimResponseStart": 1224.2999999970198,
            "responseEnd": 1225.8999999985099,
            "transferSize": 0,
            "encodedBodySize": 8652,
            "decodedBodySize": 43143,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i",
            "entryType": "resource",
            "startTime": 1194.2999999970198,
            "duration": 31.200000002980232,
            "initiatorType": "link",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.2999999970198,
            "domainLookupStart": 1194.2999999970198,
            "domainLookupEnd": 1194.2999999970198,
            "connectStart": 1194.2999999970198,
            "secureConnectionStart": 1194.2999999970198,
            "connectEnd": 1194.2999999970198,
            "requestStart": 1222.6000000014901,
            "responseStart": 1223.7999999970198,
            "firstInterimResponseStart": 1223.7999999970198,
            "responseEnd": 1225.5,
            "transferSize": 0,
            "encodedBodySize": 763,
            "decodedBodySize": 14036,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/scripts/scripts-src/mp_linkcode.js",
            "entryType": "resource",
            "startTime": 1194.2999999970198,
            "duration": 31.80000000447035,
            "initiatorType": "script",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.2999999970198,
            "domainLookupStart": 1194.2999999970198,
            "domainLookupEnd": 1194.2999999970198,
            "connectStart": 1194.2999999970198,
            "secureConnectionStart": 1194.2999999970198,
            "connectEnd": 1194.2999999970198,
            "requestStart": 1222.6999999955297,
            "responseStart": 1224.2999999970198,
            "firstInterimResponseStart": 1224.2999999970198,
            "responseEnd": 1226.1000000014901,
            "transferSize": 0,
            "encodedBodySize": 920,
            "decodedBodySize": 1901,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://cloud.typography.com/6592754/797686/css/fonts.css",
            "entryType": "resource",
            "startTime": 1194.2999999970198,
            "duration": 903.8999999985099,
            "initiatorType": "link",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2098.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/bundles/HeaderMain?v=SDPNUvfU8cYoJsZrFHzR093l2CBhxThzwO9OpRPE4z01",
            "entryType": "resource",
            "startTime": 1194.3999999985099,
            "duration": 32.20000000298023,
            "initiatorType": "script",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.3999999985099,
            "domainLookupStart": 1194.3999999985099,
            "domainLookupEnd": 1194.3999999985099,
            "connectStart": 1194.3999999985099,
            "secureConnectionStart": 1194.3999999985099,
            "connectEnd": 1194.3999999985099,
            "requestStart": 1223.6000000014901,
            "responseStart": 1225.3999999985099,
            "firstInterimResponseStart": 1225.3999999985099,
            "responseEnd": 1226.6000000014901,
            "transferSize": 0,
            "encodedBodySize": 1981,
            "decodedBodySize": 4666,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/bundles/js?v=acMvIu-h-TRGbMYgI_zi7cqVGTMYWHJ2YgBfE_r1xmo1",
            "entryType": "resource",
            "startTime": 1194.3999999985099,
            "duration": 834.1000000014901,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.3999999985099,
            "domainLookupStart": 1194.3999999985099,
            "domainLookupEnd": 1194.3999999985099,
            "connectStart": 1194.3999999985099,
            "secureConnectionStart": 1194.3999999985099,
            "connectEnd": 1194.3999999985099,
            "requestStart": 1222.7999999970198,
            "responseStart": 1697.8999999985099,
            "firstInterimResponseStart": 0,
            "responseEnd": 2028.5,
            "transferSize": 281666,
            "encodedBodySize": 281366,
            "decodedBodySize": 758617,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/bundles/FlightFinder?v=37pGV5134LAO2_oDQyVpdNrJY_VXmO2jSK2JmV07z_k1",
            "entryType": "resource",
            "startTime": 1194.5,
            "duration": 31.5,
            "initiatorType": "link",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.5,
            "domainLookupStart": 1194.5,
            "domainLookupEnd": 1194.5,
            "connectStart": 1194.5,
            "secureConnectionStart": 1194.5,
            "connectEnd": 1194.5,
            "requestStart": 1222.6000000014901,
            "responseStart": 1224,
            "firstInterimResponseStart": 1224,
            "responseEnd": 1226,
            "transferSize": 0,
            "encodedBodySize": 6399,
            "decodedBodySize": 22348,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/images/Icons/white/white-book-a-flight_W3.png",
            "entryType": "resource",
            "startTime": 1194.5,
            "duration": 32.600000001490116,
            "initiatorType": "img",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.5,
            "domainLookupStart": 1194.5,
            "domainLookupEnd": 1194.5,
            "connectStart": 1194.5,
            "secureConnectionStart": 1194.5,
            "connectEnd": 1194.5,
            "requestStart": 1223.6999999955297,
            "responseStart": 1226.2999999970198,
            "firstInterimResponseStart": 1226.2999999970198,
            "responseEnd": 1227.1000000014901,
            "transferSize": 0,
            "encodedBodySize": 1905,
            "decodedBodySize": 1905,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/images/Icons/white/white-check-in_W3.png",
            "entryType": "resource",
            "startTime": 1194.6000000014901,
            "duration": 31.69999999552965,
            "initiatorType": "img",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.6000000014901,
            "domainLookupStart": 1194.6000000014901,
            "domainLookupEnd": 1194.6000000014901,
            "connectStart": 1194.6000000014901,
            "secureConnectionStart": 1194.6000000014901,
            "connectEnd": 1194.6000000014901,
            "requestStart": 1223.6999999955297,
            "responseStart": 1224.8999999985099,
            "firstInterimResponseStart": 1224.8999999985099,
            "responseEnd": 1226.2999999970198,
            "transferSize": 0,
            "encodedBodySize": 1600,
            "decodedBodySize": 1600,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/images/Icons/white/white-flight-status_W3.png",
            "entryType": "resource",
            "startTime": 1194.6000000014901,
            "duration": 34.599999994039536,
            "initiatorType": "img",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.6000000014901,
            "domainLookupStart": 1194.6000000014901,
            "domainLookupEnd": 1194.6000000014901,
            "connectStart": 1194.6000000014901,
            "secureConnectionStart": 1194.6000000014901,
            "connectEnd": 1194.6000000014901,
            "requestStart": 1227.5,
            "responseStart": 1228.6999999955297,
            "firstInterimResponseStart": 1228.6999999955297,
            "responseEnd": 1229.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 1624,
            "decodedBodySize": 1624,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/images/Icons/blue/blue-calendar_W3.png",
            "entryType": "resource",
            "startTime": 1194.6000000014901,
            "duration": 39.899999998509884,
            "initiatorType": "img",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.6000000014901,
            "domainLookupStart": 1194.6000000014901,
            "domainLookupEnd": 1194.6000000014901,
            "connectStart": 1194.6000000014901,
            "secureConnectionStart": 1194.6000000014901,
            "connectEnd": 1194.6000000014901,
            "requestStart": 1233.1999999955297,
            "responseStart": 1233.8999999985099,
            "firstInterimResponseStart": 1233.8999999985099,
            "responseEnd": 1234.5,
            "transferSize": 0,
            "encodedBodySize": 1345,
            "decodedBodySize": 1345,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/images/Icons/red/red-error.png",
            "entryType": "resource",
            "startTime": 1194.6000000014901,
            "duration": 40.29999999701977,
            "initiatorType": "img",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.6000000014901,
            "domainLookupStart": 1194.6000000014901,
            "domainLookupEnd": 1194.6000000014901,
            "connectStart": 1194.6000000014901,
            "secureConnectionStart": 1194.6000000014901,
            "connectEnd": 1194.6000000014901,
            "requestStart": 1233.1999999955297,
            "responseStart": 1234.1999999955297,
            "firstInterimResponseStart": 1234.1999999955297,
            "responseEnd": 1234.8999999985099,
            "transferSize": 0,
            "encodedBodySize": 1352,
            "decodedBodySize": 1352,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/search_btn.svg",
            "entryType": "resource",
            "startTime": 1194.7999999970198,
            "duration": 842.8999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.7999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2037.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/Images/CheckIn/GooglePlay.svg",
            "entryType": "resource",
            "startTime": 1194.7999999970198,
            "duration": 846.6000000014901,
            "initiatorType": "img",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.7999999970198,
            "domainLookupStart": 1194.7999999970198,
            "domainLookupEnd": 1194.7999999970198,
            "connectStart": 1194.7999999970198,
            "secureConnectionStart": 1194.7999999970198,
            "connectEnd": 1194.7999999970198,
            "requestStart": 2039,
            "responseStart": 2040.5,
            "firstInterimResponseStart": 2040.5,
            "responseEnd": 2041.3999999985099,
            "transferSize": 0,
            "encodedBodySize": 3270,
            "decodedBodySize": 8945,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/Images/CheckIn/app_store.svg",
            "entryType": "resource",
            "startTime": 1194.7999999970198,
            "duration": 849.8000000044703,
            "initiatorType": "img",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1194.7999999970198,
            "domainLookupStart": 1194.7999999970198,
            "domainLookupEnd": 1194.7999999970198,
            "connectStart": 1194.7999999970198,
            "secureConnectionStart": 1194.7999999970198,
            "connectEnd": 1194.7999999970198,
            "requestStart": 2042.3999999985099,
            "responseStart": 2043.7999999970198,
            "firstInterimResponseStart": 2043.7999999970198,
            "responseEnd": 2044.6000000014901,
            "transferSize": 0,
            "encodedBodySize": 5212,
            "decodedBodySize": 12619,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8429/beach_seats.jpg",
            "entryType": "resource",
            "startTime": 1216.2999999970198,
            "duration": 2676.60000000149,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1216.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9938/polarbearcard.png",
            "entryType": "resource",
            "startTime": 1216.3999999985099,
            "duration": 2668.7999999970198,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1216.3999999985099,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3885.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8094/trees_background_1600x710.jpg",
            "entryType": "resource",
            "startTime": 1216.3999999985099,
            "duration": 2676.60000000149,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1216.3999999985099,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3893,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/10016/gowild24-25_-htbackground_1600x700_0708.jpg",
            "entryType": "resource",
            "startTime": 1273.7999999970198,
            "duration": 2618,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1273.7999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.7999999970198,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9907/new_frontier_ht_background_2.png",
            "entryType": "resource",
            "startTime": 1273.8999999985099,
            "duration": 2619.2999999970198,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1273.8999999985099,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3893.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/10027/gowild24-25_httext_400x250_0708-1.png",
            "entryType": "resource",
            "startTime": 1273.8999999985099,
            "duration": 2617.5,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1273.8999999985099,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.39999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9908/new_frontier_ht_3.png",
            "entryType": "resource",
            "startTime": 1273.8999999985099,
            "duration": 2617.7000000029802,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1273.8999999985099,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/1087/logo.png",
            "entryType": "resource",
            "startTime": 1274,
            "duration": 831.1999999955297,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2105.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9664/join_frontier_miles_copy.png",
            "entryType": "resource",
            "startTime": 1274,
            "duration": 2615.60000000149,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3889.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9663/gw.png",
            "entryType": "resource",
            "startTime": 1274,
            "duration": 2617,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/1095/frontier-arrow.png",
            "entryType": "resource",
            "startTime": 1274.1000000014901,
            "duration": 830.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.1000000014901,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2104.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9771/privacyoptions.png",
            "entryType": "resource",
            "startTime": 1274.1000000014901,
            "duration": 2617,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.1000000014901,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8772/email_socialicon_32x32_0106.png",
            "entryType": "resource",
            "startTime": 1274.1999999955297,
            "duration": 2616.10000000149,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.1999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3890.2999999970198,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8773/facebook_socialicon_32x32_0106.png",
            "entryType": "resource",
            "startTime": 1274.1999999955297,
            "duration": 2617,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.1999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9569/social_icons_for_website_32x32_white_x_logo.png",
            "entryType": "resource",
            "startTime": 1274.1999999955297,
            "duration": 2617.3000000044703,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.1999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8775/instagram_socialicon_32x32_0106.png",
            "entryType": "resource",
            "startTime": 1274.1999999955297,
            "duration": 2617.7000000029802,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.1999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8776/tiktok_socialicon_32x32_0106.png",
            "entryType": "resource",
            "startTime": 1274.2999999970198,
            "duration": 2617.8000000044703,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8777/pinterest_socialicon_32x32_0106.png",
            "entryType": "resource",
            "startTime": 1274.2999999970198,
            "duration": 2617.8000000044703,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8778/youtube_socialicon_32x32_0106.png",
            "entryType": "resource",
            "startTime": 1274.2999999970198,
            "duration": 2618.10000000149,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.39999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8779/linkedin_socialicon_32x32_0106.png",
            "entryType": "resource",
            "startTime": 1274.2999999970198,
            "duration": 2618.10000000149,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.39999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9571/social_icons_for_website_32x32_white_threads_logo.png",
            "entryType": "resource",
            "startTime": 1274.2999999970198,
            "duration": 2618.2000000029802,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/cookieconsent/assets/css/cookieconsent.min.css",
            "entryType": "resource",
            "startTime": 1274.3999999985099,
            "duration": 2.2999999970197678,
            "initiatorType": "link",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.3999999985099,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 1276.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/cookieconsent/assets/js/cookieconsent.min.js",
            "entryType": "resource",
            "startTime": 1274.5,
            "duration": 2.1999999955296516,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 1276.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/cookieconsent/assets/js/clarip-cookie-manager.min.js",
            "entryType": "resource",
            "startTime": 1274.6000000014901,
            "duration": 3.6999999955296516,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.6000000014901,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 1278.2999999970198,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/donotsell/assets/css/donotsell-extended.min.css",
            "entryType": "resource",
            "startTime": 1274.6000000014901,
            "duration": 4.199999995529652,
            "initiatorType": "link",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.6000000014901,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 1278.7999999970198,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/donotsell/assets/js/donotsell-block-main.min.js",
            "entryType": "resource",
            "startTime": 1274.6000000014901,
            "duration": 5.899999998509884,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.6000000014901,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 1280.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://frontierairlinesflyfrontiercom.mpeasylink.com/mpel/mpel.js",
            "entryType": "resource",
            "startTime": 1274.6000000014901,
            "duration": 831,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 1274.6000000014901,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2105.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/cookieconsent/configuration/fc014cd00ce2338ab3a5.json?v=a34db7e1ac62f8e6",
            "entryType": "resource",
            "startTime": 2144.39999999851,
            "duration": 2.2000000029802322,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2144.39999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2146.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/donotsell/78d7a8618c6025d33fd5-dsr-configuration.json?1710860312",
            "entryType": "resource",
            "startTime": 2147.5,
            "duration": 1.1999999955296516,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2147.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2148.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/donotsell/78d7a8618c6025d33fd5-dsr-controller-en-us.html?1710860312&start=78d7a8618c6025d33fd5&client=frontier&brand=www.flyfrontier.com&globalDnsDeployment=false&pageUrl=https%3A%2F%2Fwww.flyfrontier.com%2F",
            "entryType": "resource",
            "startTime": 2149.5,
            "duration": 33.79999999701977,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2149.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2183.2999999970198,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/down_W3.png",
            "entryType": "resource",
            "startTime": 2151.1999999955297,
            "duration": 2.7000000029802322,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2151.1999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2153.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/1662/midsection_frequentflyer.jpg",
            "entryType": "resource",
            "startTime": 2154.5,
            "duration": 2.1999999955296516,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2154.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2156.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9671/bundle__save_tile.png",
            "entryType": "resource",
            "startTime": 2154.5,
            "duration": 1738.1000000014901,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2154.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9667/best_hotel_deals_tile_trabble.png",
            "entryType": "resource",
            "startTime": 2154.60000000149,
            "duration": 1738,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2154.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9668/faqs_tile.png",
            "entryType": "resource",
            "startTime": 2154.60000000149,
            "duration": 1738,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2154.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9669/book_an_activity_tile_light.png",
            "entryType": "resource",
            "startTime": 2154.6999999955297,
            "duration": 1738.1000000014901,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2154.6999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.7999999970198,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9670/rental_car_deals.png",
            "entryType": "resource",
            "startTime": 2154.7999999970198,
            "duration": 1738,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2154.7999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3892.7999999970198,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.clarip.com/frontier/donotsell/78d7a8618c6025d33fd5-dsr-controller.html?1710860312&start=78d7a8618c6025d33fd5&client=frontier&brand=dev2.clarip.com&globalDnsDeployment=false&pageUrl=https%3A%2F%2Fdev2.clarip.com%2Fclients%2Ffrontier%2Fdnss.html",
            "entryType": "resource",
            "startTime": 2180.5,
            "duration": 28.5,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2180.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2209,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.googletagmanager.com/gtm.js?id=GTM-KG8PXC7",
            "entryType": "resource",
            "startTime": 2181.5,
            "duration": 997.5,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2181.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3179,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://client.px-cloud.net/PXVb73hTEg/main.min.js",
            "entryType": "resource",
            "startTime": 2181.60000000149,
            "duration": 1137.5999999940395,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2181.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3319.1999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://frontierairlinesflyfrontiercom.mpeasylink.com/mpel/mpel_storage.html?cmd=getpref&href=https%3A%2F%2Fwww.flyfrontier.com%2F",
            "entryType": "resource",
            "startTime": 2187.89999999851,
            "duration": 1690.7999999970198,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2187.89999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3878.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/minus-active.svg",
            "entryType": "resource",
            "startTime": 2194,
            "duration": 3.5,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2194,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2197.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/kff-icon.svg",
            "entryType": "resource",
            "startTime": 2194.10000000149,
            "duration": 3.5,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2194.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2197.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/plus-active.svg",
            "entryType": "resource",
            "startTime": 2194.10000000149,
            "duration": 3.5,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2194.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2197.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/gray-info-icon.svg",
            "entryType": "resource",
            "startTime": 2194.1999999955297,
            "duration": 3.4000000059604645,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2194.1999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 2197.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/umbraco/api/externalcontent/headerV2",
            "entryType": "resource",
            "startTime": 2203.7999999970198,
            "duration": 380.30000000447035,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2203.7999999970198,
            "domainLookupStart": 2203.7999999970198,
            "domainLookupEnd": 2203.7999999970198,
            "connectStart": 2203.7999999970198,
            "secureConnectionStart": 2203.7999999970198,
            "connectEnd": 2203.7999999970198,
            "requestStart": 2204.5,
            "responseStart": 2581.7999999970198,
            "firstInterimResponseStart": 0,
            "responseEnd": 2584.10000000149,
            "transferSize": 1178,
            "encodedBodySize": 878,
            "decodedBodySize": 1973,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://booking.flyfrontier.com/Resource/GetMarkets?_=1721717816552",
            "entryType": "resource",
            "startTime": 2210.39999999851,
            "duration": 1627.5,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 2210.39999999851,
            "domainLookupStart": 2210.39999999851,
            "domainLookupEnd": 2210.39999999851,
            "connectStart": 2238.6999999955297,
            "secureConnectionStart": 2242.2999999970198,
            "connectEnd": 3105.1999999955297,
            "requestStart": 3105.39999999851,
            "responseStart": 3504.89999999851,
            "firstInterimResponseStart": 0,
            "responseEnd": 3837.89999999851,
            "transferSize": 92930,
            "encodedBodySize": 92630,
            "decodedBodySize": 92630,
            "responseStatus": 200,
            "serverTiming": [
                {
                    "name": "dtSInfo",
                    "duration": 0,
                    "description": "0"
                },
                {
                    "name": "dtRpid",
                    "duration": 0,
                    "description": "1653481280"
                },
                {
                    "name": "dtTao",
                    "duration": 0,
                    "description": "1"
                }
            ]
        },
        {
            "name": "https://booking.flyfrontier.com/dist/styles.css",
            "entryType": "resource",
            "startTime": 3880,
            "duration": 11.699999995529652,
            "initiatorType": "link",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3880,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3891.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/bundles/HeaderV2",
            "entryType": "resource",
            "startTime": 3880.10000000149,
            "duration": 11.599999994039536,
            "initiatorType": "link",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3880.10000000149,
            "domainLookupStart": 3880.10000000149,
            "domainLookupEnd": 3880.10000000149,
            "connectStart": 3880.10000000149,
            "secureConnectionStart": 3880.10000000149,
            "connectEnd": 3880.10000000149,
            "requestStart": 3887.5,
            "responseStart": 3888.2999999970198,
            "firstInterimResponseStart": 3888.2999999970198,
            "responseEnd": 3891.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 899,
            "decodedBodySize": 2019,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://booking.flyfrontier.com/dist/header.js",
            "entryType": "resource",
            "startTime": 3880.6999999955297,
            "duration": 1510.7000000029802,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3880.6999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5391.39999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/messageIcon.png",
            "entryType": "resource",
            "startTime": 3880.7999999970198,
            "duration": 12.899999998509884,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3880.7999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 3893.6999999955297,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://collector-pxvb73hteg.px-cloud.net/api/v2/collector",
            "entryType": "resource",
            "startTime": 3946.6999999955297,
            "duration": 726.7000000029802,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3946.6999999955297,
            "domainLookupStart": 3946.6999999955297,
            "domainLookupEnd": 3946.6999999955297,
            "connectStart": 3949.2999999970198,
            "secureConnectionStart": 3949.89999999851,
            "connectEnd": 4340,
            "requestStart": 4340.10000000149,
            "responseStart": 4671.60000000149,
            "firstInterimResponseStart": 0,
            "responseEnd": 4673.39999999851,
            "transferSize": 684,
            "encodedBodySize": 384,
            "decodedBodySize": 384,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.googletagmanager.com/gtag/js?id=G-XXXX&l=dataLayer&cx=c",
            "entryType": "resource",
            "startTime": 3958.5,
            "duration": 384.5,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3958.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4343,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.googletagmanager.com/gtag/js?id=G-P2WLKWBNNW&l=dataLayer&cx=c",
            "entryType": "resource",
            "startTime": 3962.2999999970198,
            "duration": 400,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3962.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4362.29999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://connect.facebook.net/en_US/fbevents.js",
            "entryType": "resource",
            "startTime": 3962.89999999851,
            "duration": 1210.7999999970198,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3962.89999999851,
            "domainLookupStart": 3962.89999999851,
            "domainLookupEnd": 3962.89999999851,
            "connectStart": 3964.10000000149,
            "secureConnectionStart": 3964.5,
            "connectEnd": 4672.19999999553,
            "requestStart": 4673.60000000149,
            "responseStart": 4870.10000000149,
            "firstInterimResponseStart": 0,
            "responseEnd": 5173.69999999553,
            "transferSize": 58977,
            "encodedBodySize": 58677,
            "decodedBodySize": 229083,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://s.pinimg.com/ct/core.js",
            "entryType": "resource",
            "startTime": 3964.60000000149,
            "duration": 910.5999999940395,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3964.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4875.19999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://t.contentsquare.net/uxa/0861916e6ed72.js",
            "entryType": "resource",
            "startTime": 3965.10000000149,
            "duration": 910.1999999955297,
            "initiatorType": "script",
            "deliveryType": "cache",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3965.10000000149,
            "domainLookupStart": 3965.10000000149,
            "domainLookupEnd": 3965.10000000149,
            "connectStart": 3966.2999999970198,
            "secureConnectionStart": 3968.7999999970198,
            "connectEnd": 4672.69999999553,
            "requestStart": 4673.60000000149,
            "responseStart": 4871.79999999702,
            "firstInterimResponseStart": 0,
            "responseEnd": 4875.29999999702,
            "transferSize": 300,
            "encodedBodySize": 1,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.googletagmanager.com/gtag/destination?id=DC-8303106&l=dataLayer&cx=c",
            "entryType": "resource",
            "startTime": 3966.39999999851,
            "duration": 389.70000000298023,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3966.39999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4356.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.google-analytics.com/analytics.js",
            "entryType": "resource",
            "startTime": 3968.6999999955297,
            "duration": 561.3000000044703,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3968.6999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4530,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.redditstatic.com/ads/pixel.js",
            "entryType": "resource",
            "startTime": 3969.6999999955297,
            "duration": 905.8000000044703,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3969.6999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4875.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://static.ads-twitter.com/uwt.js",
            "entryType": "resource",
            "startTime": 3970.6999999955297,
            "duration": 928.9000000059605,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3970.6999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4899.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.googletagmanager.com/gtag/destination?id=AW-1065346207&l=dataLayer&cx=c",
            "entryType": "resource",
            "startTime": 3971,
            "duration": 411.79999999701977,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3971,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4382.79999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.noibu.com/collect.js",
            "entryType": "resource",
            "startTime": 3972.7999999970198,
            "duration": 1202.8999999985099,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3972.7999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5175.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://d.oracleinfinity.io/infy/acs/account/t3ctwioupl/js/frontier/odc.js?_ora.config=analytics:production",
            "entryType": "resource",
            "startTime": 3974.2999999970198,
            "duration": 1195.8000000044703,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3974.2999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5170.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://analytics.tiktok.com/i18n/pixel/events.js?sdkid=CA76FT3C77U9UO5AF3FG&lib=ttq",
            "entryType": "resource",
            "startTime": 3974.5,
            "duration": 991.2999999970198,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3974.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4965.79999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.mczbf.com/tags/760155155930/tag.js",
            "entryType": "resource",
            "startTime": 3974.7999999970198,
            "duration": 1202.3999999985099,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3974.7999999970198,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5177.19999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://dx.mountain.com/spx?dxver=4.0.0&shaid=37869&tdr=&plh=https%3A%2F%2Fwww.flyfrontier.com%2F&cb=83173721069717070term=value",
            "entryType": "resource",
            "startTime": 3975,
            "duration": 1418.1000000014901,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3975,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5393.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://wisepops.net/loader.js?v=2&h=P9wqzAW4cp",
            "entryType": "resource",
            "startTime": 3976.1999999955297,
            "duration": 897.5,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 3976.1999999955297,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4873.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.uplift-platform.com/a/up.js?id=UP-60387889-1",
            "entryType": "resource",
            "startTime": 4074,
            "duration": 2953.10000000149,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4074,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 7027.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://frontier-ga-c49424850.uc.r.appspot.com/g/collect?v=2&tid=G-XXXX&gtm=45je47h0z8867353195za200zb867353195&_p=1721717816630&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=95250752&cid=1040210130.1721640794&ecid=1595599789&ul=en&sr=1920x1080&_fplc=0&ur=US-CA&uaa=arm&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129&uamb=0&uam=&uap=macOS&uapv=14.5.0&uaw=0&are=1&frm=0&pscdl=noapi&sst.gcd=13l3l3l3l1&sst.tft=1721717816630&sst.ude=0&_s=1&sid=1721717818&sct=2&seg=0&dl=https%3A%2F%2Fwww.flyfrontier.com%2F&dt=Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines&en=page_view&_ss=1&ep.event_id=1721641484526_17217179298081&tfd=4409&richsstsse",
            "entryType": "resource",
            "startTime": 4408.79999999702,
            "duration": 973.7000000029802,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4408.79999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5382.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://8303106.fls.doubleclick.net/activityi;src=8303106;type=rmkt;cat=fro_r0;ord=9544799670758;npa=0;auiddc=1539634024.1721640793;u16=https%3A%2F%2Fwww.flyfrontier.com%2F;u1=undefined;u2=undefined;u23=%20-%20;ps=1;pcor=2145660427;uaa=arm;uab=64;uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129;uamb=0;uam=;uap=macOS;uapv=14.5.0;uaw=0;pscdl=noapi;frm=0;gtm=45fe47h0v9189963079z8867353195za201zb867353195;gcd=13l3l3l3l1;dma=0;tag_exp=0;epver=2;~oref=https%3A%2F%2Fwww.flyfrontier.com%2F?",
            "entryType": "resource",
            "startTime": 4419.29999999702,
            "duration": 544.3999999985099,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 4419.29999999702,
            "redirectEnd": 4872.5,
            "fetchStart": 4874,
            "domainLookupStart": 4874,
            "domainLookupEnd": 4874,
            "connectStart": 4874,
            "secureConnectionStart": 4874,
            "connectEnd": 4874,
            "requestStart": 4876.60000000149,
            "responseStart": 4962.69999999553,
            "firstInterimResponseStart": 0,
            "responseEnd": 4963.69999999553,
            "transferSize": 551,
            "encodedBodySize": 251,
            "decodedBodySize": 658,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://td.doubleclick.net/td/fls/rul/activityi;fledge=1;src=8303106;type=rmkt;cat=fro_r0;ord=9544799670758;npa=0;auiddc=1539634024.1721640793;u16=https%3A%2F%2Fwww.flyfrontier.com%2F;u1=undefined;u2=undefined;u23=%20-%20;ps=1;pcor=2145660427;uaa=arm;uab=64;uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129;uamb=0;uam=;uap=macOS;uapv=14.5.0;uaw=0;pscdl=noapi;frm=0;gtm=45fe47h0v9189963079z8867353195za201zb867353195;gcd=13l3l3l3l1;dma=0;tag_exp=0;epver=2;~oref=https%3A%2F%2Fwww.flyfrontier.com%2F?",
            "entryType": "resource",
            "startTime": 4420.39999999851,
            "duration": 228.5,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4420.39999999851,
            "domainLookupStart": 4420.39999999851,
            "domainLookupEnd": 4420.39999999851,
            "connectStart": 4423.60000000149,
            "secureConnectionStart": 4432.19999999553,
            "connectEnd": 4512.79999999702,
            "requestStart": 4513.10000000149,
            "responseStart": 4647.5,
            "firstInterimResponseStart": 0,
            "responseEnd": 4648.89999999851,
            "transferSize": 316,
            "encodedBodySize": 16,
            "decodedBodySize": 13,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://ad.doubleclick.net/activity;register_conversion=1;src=8303106;type=rmkt;cat=fro_r0;ord=9544799670758;npa=0;auiddc=1539634024.1721640793;u16=https%3A%2F%2Fwww.flyfrontier.com%2F;u1=undefined;u2=undefined;u23=%20-%20;ps=1;pcor=2145660427;uaa=arm;uab=64;uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129;uamb=0;uam=;uap=macOS;uapv=14.5.0;uaw=0;pscdl=noapi;frm=0;gtm=45fe47h0v9189963079z8867353195za201zb867353195;gcd=13l3l3l3l1;dma=0;tag_exp=0;epver=2;~oref=https%3A%2F%2Fwww.flyfrontier.com%2F?",
            "entryType": "resource",
            "startTime": 4421.10000000149,
            "duration": 322.79999999701977,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4421.10000000149,
            "domainLookupStart": 4421.10000000149,
            "domainLookupEnd": 4421.10000000149,
            "connectStart": 4424.19999999553,
            "secureConnectionStart": 4429.29999999702,
            "connectEnd": 4673.10000000149,
            "requestStart": 4673.60000000149,
            "responseStart": 4742.69999999553,
            "firstInterimResponseStart": 0,
            "responseEnd": 4743.89999999851,
            "transferSize": 300,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://analytics.google.com/g/collect?v=2&tid=G-P2WLKWBNNW&gtm=45je47h0v879982246z8867353195za200zb867353195&_p=1721717816630&_gaz=1&gcd=13l3l3l3l1&npa=0&dma=0&tag_exp=0&cid=1040210130.1721640794&ul=en&sr=1920x1080&uaa=arm&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129&uamb=0&uam=&uap=macOS&uapv=14.5.0&uaw=0&are=1&pae=1&frm=0&pscdl=noapi&_s=1&sid=1721717818&sct=2&seg=0&dl=https%3A%2F%2Fwww.flyfrontier.com%2F&dt=Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines&en=page_view&_ss=1&ep.container_id=GTM-KG8PXC7&ep.container_version=98&ep.full_referrer=&ep.full_url=https%3A%2F%2Fwww.flyfrontier.com%2F&ep.page_category=flight.home&up.client_id=GA1.2.1040210130.1721640794&tfd=4441&_z=fetch",
            "entryType": "resource",
            "startTime": 4441.60000000149,
            "duration": 732.5999999940395,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4441.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5174.19999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://stats.g.doubleclick.net/g/collect?v=2&tid=G-P2WLKWBNNW&cid=1040210130.1721640794&gtm=45je47h0v879982246z8867353195za200zb867353195&aip=1&dma=0&gcd=13l3l3l3l1&npa=0&frm=0",
            "entryType": "resource",
            "startTime": 4442,
            "duration": 231.19999999552965,
            "initiatorType": "beacon",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4442,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4673.19999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://td.doubleclick.net/td/ga/rul?tid=G-P2WLKWBNNW&gacid=1040210130.1721640794&gtm=45je47h0v879982246z8867353195za200zb867353195&dma=0&gcd=13l3l3l3l1&npa=0&pscdl=noapi&aip=1&fledge=1&frm=0&z=720055453",
            "entryType": "resource",
            "startTime": 4443.10000000149,
            "duration": 205.5,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4443.10000000149,
            "domainLookupStart": 4443.10000000149,
            "domainLookupEnd": 4443.10000000149,
            "connectStart": 4443.10000000149,
            "secureConnectionStart": 4443.10000000149,
            "connectEnd": 4443.10000000149,
            "requestStart": 4513.19999999553,
            "responseStart": 4647.29999999702,
            "firstInterimResponseStart": 0,
            "responseEnd": 4648.60000000149,
            "transferSize": 316,
            "encodedBodySize": 16,
            "decodedBodySize": 13,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.googleadservices.com/pagead/conversion/1065346207/?random=1721717818904&cv=11&fst=1721717818904&bg=ffffff&guid=ON&async=1&gtm=45be47h0v9172205507z8867353195za201zb867353195&gcd=13l3l3l3l1&dma=0&tag_exp=0&u_w=1920&u_h=1080&url=https%3A%2F%2Fwww.flyfrontier.com%2F&label=0dBNCJrQz7cZEJ_J__sD&hn=www.googleadservices.com&frm=0&tiba=Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=1539634024.1721640793&uaa=arm&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129&uamb=0&uam=&uap=macOS&uapv=14.5.0&uaw=0&fledge=1&capi=1&rfmt=3&fmt=4",
            "entryType": "resource",
            "startTime": 4459.5,
            "duration": 780.7999999970198,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4459.5,
            "domainLookupStart": 4459.5,
            "domainLookupEnd": 4459.5,
            "connectStart": 4461.69999999553,
            "secureConnectionStart": 4462.10000000149,
            "connectEnd": 4861.5,
            "requestStart": 4862.10000000149,
            "responseStart": 5237.60000000149,
            "firstInterimResponseStart": 0,
            "responseEnd": 5240.29999999702,
            "transferSize": 2006,
            "encodedBodySize": 1706,
            "decodedBodySize": 2908,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://td.doubleclick.net/td/rul/1065346207?random=1721717818904&cv=11&fst=1721717818904&fmt=3&bg=ffffff&guid=ON&async=1&gtm=45be47h0v9172205507z8867353195za201zb867353195&gcd=13l3l3l3l1&dma=0&tag_exp=0&u_w=1920&u_h=1080&url=https%3A%2F%2Fwww.flyfrontier.com%2F&label=0dBNCJrQz7cZEJ_J__sD&hn=www.googleadservices.com&frm=0&tiba=Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines&value=0&bttype=purchase&npa=0&pscdl=noapi&auid=1539634024.1721640793&uaa=arm&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129&uamb=0&uam=&uap=macOS&uapv=14.5.0&uaw=0&fledge=1&capi=1&ct_cookie_present=0",
            "entryType": "resource",
            "startTime": 4460.60000000149,
            "duration": 188.19999999552965,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4460.60000000149,
            "domainLookupStart": 4460.60000000149,
            "domainLookupEnd": 4460.60000000149,
            "connectStart": 4460.60000000149,
            "secureConnectionStart": 4460.60000000149,
            "connectEnd": 4460.60000000149,
            "requestStart": 4513.29999999702,
            "responseStart": 4647.39999999851,
            "firstInterimResponseStart": 0,
            "responseEnd": 4648.79999999702,
            "transferSize": 316,
            "encodedBodySize": 16,
            "decodedBodySize": 13,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.google-analytics.com/j/collect?v=1&_v=j101&a=12760416&t=pageview&_s=1&dl=https%3A%2F%2Fwww.flyfrontier.com%2F&dp=%2F&ul=en&de=UTF-8&dt=Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines&sd=24-bit&sr=1920x1080&vp=426x879&je=0&_u=QCCACEABBAAAACAAIC~&jid=2090455252&gjid=1994801173&cid=1040210130.1721640794&tid=UA-2678252-1&_gid=104313871.1721640794&_r=1&_slc=1&gtm=45He47h0n81KG8PXC7v867353195za200&cd6=0&cd12=false&cd20=1040210130.1721640794&cd24=https%3A%2F%2Fwww.flyfrontier.com%2F&cm5=0&cm8=0&gcd=13l3l3l3l1&dma=0&tag_exp=0&z=1232694697",
            "entryType": "resource",
            "startTime": 4537.5,
            "duration": 213.69999999552965,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4537.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 4751.19999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://s.pinimg.com/ct/lib/main.15f60036.js",
            "entryType": "resource",
            "startTime": 4877.10000000149,
            "duration": 346.19999999552965,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4877.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5223.29999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://pixel-config.reddit.com/pixels/a2_dwwt4fntqvs8/config",
            "entryType": "resource",
            "startTime": 4880.60000000149,
            "duration": 845.0999999940395,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4880.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5725.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.redditstatic.com/ads/conversions-config/v1/pixel/config/a2_dwwt4fntqvs8_telemetry",
            "entryType": "resource",
            "startTime": 4881.10000000149,
            "duration": 586.1999999955297,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4881.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5467.29999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://alb.reddit.com/rp.gif?ts=1721717819329&id=a2_dwwt4fntqvs8&event=PageVisit&m.itemCount=undefined&m.value=&m.valueDecimal=undefined&m.currency=undefined&m.transactionId=&m.customEventName=&m.products=&m.conversionId=&uuid=84531724-cc9f-4eee-a3e0-da8cd662cf40&aaid=&em=&external_id=&idfa=&integration=gtm&opt_out=0&sh=1920&sw=1080&v=rdt_e9773deb&dpm=LDU&dpcc=US&dprc=US-CA%2C%20US-VA",
            "entryType": "resource",
            "startTime": 4881.29999999702,
            "duration": 843.6000000014901,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4881.29999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5724.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://t.co/1/i/adsct?bci=2&eci=4&event=%7B%7D&event_id=90e48afb-6e48-490a-b002-9d9a846969c9&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=1b87de27-e3f5-460f-a53c-eefe7c346a47&tw_document_href=https%3A%2F%2Fwww.flyfrontier.com%2F&tw_iframe_status=0&txn_id=tw-nuoqv-og0v4&type=javascript&version=2.3.30",
            "entryType": "resource",
            "startTime": 4905.89999999851,
            "duration": 1342.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4905.89999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6248.29999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://analytics.twitter.com/1/i/adsct?bci=2&eci=4&event=%7B%7D&event_id=90e48afb-6e48-490a-b002-9d9a846969c9&integration=gtm&p_id=Twitter&p_user_id=0&pl_id=1b87de27-e3f5-460f-a53c-eefe7c346a47&tw_document_href=https%3A%2F%2Fwww.flyfrontier.com%2F&tw_iframe_status=0&txn_id=tw-nuoqv-og0v4&type=javascript&version=2.3.30",
            "entryType": "resource",
            "startTime": 4906.19999999553,
            "duration": 1196.8000000044703,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4906.19999999553,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6103,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://analytics.tiktok.com/i18n/pixel/static/main.MTU1YTMzOGNmMQ.js",
            "entryType": "resource",
            "startTime": 4968.19999999553,
            "duration": 488.1000000014901,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 4968.19999999553,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5456.29999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://c.oracleinfinity.io/acs/account/t3ctwioupl/js/frontier/analytics-production.js",
            "entryType": "resource",
            "startTime": 5174.60000000149,
            "duration": 861,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5174.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6035.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://connect.facebook.net/signals/config/984711158274891?v=2.9.162&r=stable&domain=www.flyfrontier.com&hme=e67e7d148043b3a377ad0eb1c82669792a67ba5e3bb5734b69e611ae38f939ca&ex_m=68%2C115%2C102%2C106%2C59%2C3%2C95%2C67%2C15%2C92%2C85%2C49%2C52%2C163%2C166%2C178%2C174%2C175%2C177%2C28%2C96%2C51%2C74%2C176%2C158%2C161%2C171%2C172%2C179%2C124%2C39%2C33%2C136%2C14%2C48%2C184%2C183%2C126%2C17%2C38%2C1%2C41%2C63%2C64%2C65%2C69%2C89%2C16%2C13%2C91%2C88%2C87%2C103%2C50%2C105%2C37%2C104%2C29%2C25%2C159%2C162%2C133%2C27%2C10%2C11%2C12%2C5%2C6%2C24%2C21%2C22%2C55%2C60%2C62%2C72%2C97%2C26%2C73%2C8%2C7%2C77%2C46%2C20%2C99%2C98%2C100%2C93%2C9%2C19%2C18%2C82%2C54%2C80%2C32%2C71%2C0%2C90%2C31%2C79%2C84%2C45%2C44%2C83%2C36%2C4%2C86%2C78%2C42%2C34%2C81%2C2%2C35%2C61%2C40%2C101%2C43%2C76%2C66%2C107%2C58%2C57%2C30%2C94%2C56%2C53%2C47%2C75%2C70%2C23%2C108",
            "entryType": "resource",
            "startTime": 5188.10000000149,
            "duration": 206,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5188.10000000149,
            "domainLookupStart": 5188.10000000149,
            "domainLookupEnd": 5188.10000000149,
            "connectStart": 5188.10000000149,
            "secureConnectionStart": 5188.10000000149,
            "connectEnd": 5188.10000000149,
            "requestStart": 5190,
            "responseStart": 5391.79999999702,
            "firstInterimResponseStart": 0,
            "responseEnd": 5394.10000000149,
            "transferSize": 14469,
            "encodedBodySize": 14169,
            "decodedBodySize": 70042,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://cdn.noibu.com/collect-worker.js",
            "entryType": "resource",
            "startTime": 5197.10000000149,
            "duration": 570.5999999940395,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5197.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5767.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.mczbf.com/760155155930/pageInfo",
            "entryType": "resource",
            "startTime": 5204.29999999702,
            "duration": 719.2000000029802,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5204.29999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5923.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://ct.pinterest.com/user/?tid=2612369276936&pd=%7B%22np%22%3A%22gtm%22%2C%22pin_unauth%22%3A%22dWlkPU16VTFOakk0WXpNdE0yUTBaQzAwWW1NNExXRXhPV1V0WkRZMk9EUTFNRFZpWTJFeg%22%7D&cb=1721717819675&dep=2%2CPAGE_LOAD",
            "entryType": "resource",
            "startTime": 5226.79999999702,
            "duration": 1234.8999999985099,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5226.79999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6461.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://ct.pinterest.com/user/?event=pagevisit&ed=%7B%22event_id%22%3A%221721641484526_17217179298081%22%2C%22np%22%3A%22gtm%22%7D&tid=2612369276936&cb=1721717819676&dep=5%2CEVENT_TAGS_ABSENT",
            "entryType": "resource",
            "startTime": 5227.60000000149,
            "duration": 1020.3999999985099,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5227.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6248,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://ct.pinterest.com/v3/?tid=2612369276936&pd=%7B%22np%22%3A%22gtm%22%2C%22pin_unauth%22%3A%22dWlkPU16VTFOakk0WXpNdE0yUTBaQzAwWW1NNExXRXhPV1V0WkRZMk9EUTFNRFZpWTJFeg%22%7D&event=init&ad=%7B%22loc%22%3A%22https%3A%2F%2Fwww.flyfrontier.com%2F%22%2C%22ref%22%3A%22%22%2C%22if%22%3Afalse%2C%22sh%22%3A1080%2C%22sw%22%3A1920%2C%22mh%22%3A%2215f60036%22%2C%22is_eu%22%3Atrue%2C%22architecture%22%3A%22arm%22%2C%22bitness%22%3A%2264%22%2C%22brands%22%3A%5B%7B%22brand%22%3A%22Not_A%20Brand%22%2C%22version%22%3A%228%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22120%22%7D%2C%7B%22brand%22%3A%22Google%20Chrome%22%2C%22version%22%3A%22120%22%7D%5D%2C%22mobile%22%3Afalse%2C%22model%22%3A%22%22%2C%22platform%22%3A%22macOS%22%2C%22platformVersion%22%3A%2214.5.0%22%2C%22uaFullVersion%22%3A%22120.0.6099.129%22%2C%22ecm_enabled%22%3Atrue%7D&cb=1721717819677",
            "entryType": "resource",
            "startTime": 5228.10000000149,
            "duration": 1020,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5228.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6248.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://googleads.g.doubleclick.net/pagead/viewthroughconversion/1065346207/?random=653845800&cv=11&fst=1721717818904&bg=ffffff&guid=ON&async=1&gtm=45be47h0v9172205507z8867353195za201zb867353195&gcd=13l3l3l3l1&dma=0&tag_exp=0&u_w=1920&u_h=1080&url=https%3A%2F%2Fwww.flyfrontier.com%2F&label=0dBNCJrQz7cZEJ_J__sD&hn=www.googleadservices.com&frm=0&tiba=Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines&value=0&npa=0&pscdl=noapi&auid=1539634024.1721640793&uaa=arm&uab=64&uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.129%7CGoogle%2520Chrome%3B120.0.6099.129&uamb=0&uam=&uap=macOS&uapv=14.5.0&uaw=0&fledge=1&capi=1&fmt=3&ct_cookie_present=false&crd=CLHBsQIIsMGxAgi5wbECIgEBOAFAAUondHJpZ2dlcj1uYXZpZ2F0aW9uLXNvdXJjZSwgZXZlbnQtc291cmNlYgQKAgID&eitems=ChAI8Ib4tAYQ2_3F6dCJzJRZEh0AlG5wLkFdwpCPgOgZPdA5zRv1piwtyFvc1urbNw&pscrd=CJbd-uuft4G9BSITCNfWqNjKvIcDFSqbjggd6HUmaTICCAMyAggEMgIIBzICCAgyAggJMgIICjICCAIyAggLMgIIFTICCB8yAggTMgIIEg",
            "entryType": "resource",
            "startTime": 5242.29999999702,
            "duration": 1510.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 5242.29999999702,
            "redirectEnd": 5933.89999999851,
            "fetchStart": 5935.5,
            "domainLookupStart": 5935.5,
            "domainLookupEnd": 5935.5,
            "connectStart": 5935.89999999851,
            "secureConnectionStart": 5962,
            "connectEnd": 6324.5,
            "requestStart": 6324.60000000149,
            "responseStart": 6751.79999999702,
            "firstInterimResponseStart": 0,
            "responseEnd": 6752.69999999553,
            "transferSize": 342,
            "encodedBodySize": 42,
            "decodedBodySize": 42,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://collector-pxvb73hteg.px-cloud.net/api/v2/collector",
            "entryType": "resource",
            "startTime": 5382.5,
            "duration": 738.5,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5382.5,
            "domainLookupStart": 5382.5,
            "domainLookupEnd": 5382.5,
            "connectStart": 5383.89999999851,
            "secureConnectionStart": 5392.10000000149,
            "connectEnd": 5753.69999999553,
            "requestStart": 5753.79999999702,
            "responseStart": 6120.39999999851,
            "firstInterimResponseStart": 0,
            "responseEnd": 6121,
            "transferSize": 688,
            "encodedBodySize": 388,
            "decodedBodySize": 388,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://www.flyfrontier.com/umbraco/api/externalcontent/menuv2",
            "entryType": "resource",
            "startTime": 5434.79999999702,
            "duration": 813.3999999985099,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5434.79999999702,
            "domainLookupStart": 5434.79999999702,
            "domainLookupEnd": 5434.79999999702,
            "connectStart": 5435.69999999553,
            "secureConnectionStart": 5436.10000000149,
            "connectEnd": 5795.5,
            "requestStart": 5795.60000000149,
            "responseStart": 6246.39999999851,
            "firstInterimResponseStart": 0,
            "responseEnd": 6248.19999999553,
            "transferSize": 2510,
            "encodedBodySize": 2210,
            "decodedBodySize": 15615,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://booking.flyfrontier.com/F9Loyalty/DiscountDenDetails?isSessionless=false",
            "entryType": "resource",
            "startTime": 5448.19999999553,
            "duration": 983.8000000044703,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5448.19999999553,
            "domainLookupStart": 5448.19999999553,
            "domainLookupEnd": 5448.19999999553,
            "connectStart": 5448.19999999553,
            "secureConnectionStart": 5448.19999999553,
            "connectEnd": 5448.19999999553,
            "requestStart": 5449,
            "responseStart": 6427.10000000149,
            "firstInterimResponseStart": 0,
            "responseEnd": 6432,
            "transferSize": 479,
            "encodedBodySize": 179,
            "decodedBodySize": 179,
            "responseStatus": 200,
            "serverTiming": [
                {
                    "name": "dtSInfo",
                    "duration": 0,
                    "description": "1"
                },
                {
                    "name": "dtTao",
                    "duration": 0,
                    "description": "1"
                }
            ]
        },
        {
            "name": "https://booking.flyfrontier.com/F9Loyalty/BarclaysFrontierMilesSignupLink",
            "entryType": "resource",
            "startTime": 5448.60000000149,
            "duration": 437.3999999985099,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5448.60000000149,
            "domainLookupStart": 5448.60000000149,
            "domainLookupEnd": 5448.60000000149,
            "connectStart": 5448.60000000149,
            "secureConnectionStart": 5448.60000000149,
            "connectEnd": 5448.60000000149,
            "requestStart": 5449.29999999702,
            "responseStart": 5883.19999999553,
            "firstInterimResponseStart": 0,
            "responseEnd": 5886,
            "transferSize": 447,
            "encodedBodySize": 147,
            "decodedBodySize": 147,
            "responseStatus": 200,
            "serverTiming": [
                {
                    "name": "dtSInfo",
                    "duration": 0,
                    "description": "1"
                },
                {
                    "name": "dtTao",
                    "duration": 0,
                    "description": "1"
                }
            ]
        },
        {
            "name": "https://booking.flyfrontier.com/F9/showCancellationSlider?_key=0.8760174384991715",
            "entryType": "resource",
            "startTime": 5465.60000000149,
            "duration": 421.09999999403954,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5465.60000000149,
            "domainLookupStart": 5465.60000000149,
            "domainLookupEnd": 5465.60000000149,
            "connectStart": 5465.60000000149,
            "secureConnectionStart": 5465.60000000149,
            "connectEnd": 5465.60000000149,
            "requestStart": 5466.60000000149,
            "responseStart": 5883.60000000149,
            "firstInterimResponseStart": 0,
            "responseEnd": 5886.69999999553,
            "transferSize": 305,
            "encodedBodySize": 5,
            "decodedBodySize": 5,
            "responseStatus": 200,
            "serverTiming": [
                {
                    "name": "dtSInfo",
                    "duration": 0,
                    "description": "0"
                },
                {
                    "name": "dtRpid",
                    "duration": 0,
                    "description": "70160425"
                },
                {
                    "name": "dtTao",
                    "duration": 0,
                    "description": "1"
                }
            ]
        },
        {
            "name": "https://booking.flyfrontier.com/Content/responsive/images/frontier_logo_white.svg",
            "entryType": "resource",
            "startTime": 5470.39999999851,
            "duration": 281.20000000298023,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5470.39999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5751.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://booking.flyfrontier.com/Content/responsive/images/frontier_logo_white_notagline.svg",
            "entryType": "resource",
            "startTime": 5470.60000000149,
            "duration": 280.8999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5470.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5751.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://booking.flyfrontier.com/F9Sessionless/Member",
            "entryType": "resource",
            "startTime": 5474.60000000149,
            "duration": 415.8999999985099,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5474.60000000149,
            "domainLookupStart": 5474.60000000149,
            "domainLookupEnd": 5474.60000000149,
            "connectStart": 5474.60000000149,
            "secureConnectionStart": 5474.60000000149,
            "connectEnd": 5474.60000000149,
            "requestStart": 5475.79999999702,
            "responseStart": 5889,
            "firstInterimResponseStart": 0,
            "responseEnd": 5890.5,
            "transferSize": 304,
            "encodedBodySize": 4,
            "decodedBodySize": 4,
            "responseStatus": 200,
            "serverTiming": [
                {
                    "name": "dtSInfo",
                    "duration": 0,
                    "description": "1"
                },
                {
                    "name": "dtTao",
                    "duration": 0,
                    "description": "1"
                }
            ]
        },
        {
            "name": "https://booking.flyfrontier.com/F9Sessionless/Resources?usOnly=false",
            "entryType": "resource",
            "startTime": 5475.19999999553,
            "duration": 415.20000000298023,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5475.19999999553,
            "domainLookupStart": 5475.19999999553,
            "domainLookupEnd": 5475.19999999553,
            "connectStart": 5475.19999999553,
            "secureConnectionStart": 5475.19999999553,
            "connectEnd": 5475.19999999553,
            "requestStart": 5475.89999999851,
            "responseStart": 5888.89999999851,
            "firstInterimResponseStart": 0,
            "responseEnd": 5890.39999999851,
            "transferSize": 25637,
            "encodedBodySize": 25337,
            "decodedBodySize": 25337,
            "responseStatus": 200,
            "serverTiming": [
                {
                    "name": "dtSInfo",
                    "duration": 0,
                    "description": "0"
                },
                {
                    "name": "dtRpid",
                    "duration": 0,
                    "description": "153479101"
                },
                {
                    "name": "dtTao",
                    "duration": 0,
                    "description": "1"
                }
            ]
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/FrontierMileslogo.svg",
            "entryType": "resource",
            "startTime": 5475.39999999851,
            "duration": 1000.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5475.39999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6475.79999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/Icon_RGBMarkers.svg",
            "entryType": "resource",
            "startTime": 5475.39999999851,
            "duration": 999.8999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5475.39999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6475.29999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/Icon_BluebackgroundStar.svg",
            "entryType": "resource",
            "startTime": 5475.5,
            "duration": 1000.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5475.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6475.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/Icon_GreenPlane.svg",
            "entryType": "resource",
            "startTime": 5475.60000000149,
            "duration": 1006.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5475.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6482,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/calendar_icon.svg",
            "entryType": "resource",
            "startTime": 5475.79999999702,
            "duration": 999.7000000029802,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5475.79999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6475.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://35.85.84.151/is?cb=1721717819944",
            "entryType": "resource",
            "startTime": 5495.79999999702,
            "duration": 936.2000000029802,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5495.79999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6432,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://analytics.tiktok.com/i18n/pixel/static/identify_a19ff03d.js",
            "entryType": "resource",
            "startTime": 5513,
            "duration": 228.60000000149012,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5513,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5741.60000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://analytics.tiktok.com/api/v2/pixel",
            "entryType": "resource",
            "startTime": 5519.39999999851,
            "duration": 364.6000000014901,
            "initiatorType": "beacon",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5519.39999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 5884,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.facebook.com/tr/?id=984711158274891&ev=PageView&dl=https%3A%2F%2Fwww.flyfrontier.com%2F&rl=&if=false&ts=1721717819973&sw=1920&sh=1080&v=2.9.162&r=stable&ec=0&o=4125&fbp=fb.1.1721640797013.504351246425424940&cs_est=true&ler=empty&cdl=API_unavailable&it=1721717819636&coo=false&tm=1&rqm=GET",
            "entryType": "resource",
            "startTime": 5525.10000000149,
            "duration": 785.5999999940395,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5525.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6310.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://www.facebook.com/privacy_sandbox/pixel/register/trigger/?id=984711158274891&ev=PageView&dl=https%3A%2F%2Fwww.flyfrontier.com%2F&rl=&if=false&ts=1721717819973&sw=1920&sh=1080&v=2.9.162&r=stable&ec=0&o=4125&fbp=fb.1.1721640797013.504351246425424940&cs_est=true&ler=empty&cdl=API_unavailable&it=1721717819636&coo=false&tm=1&rqm=FGET",
            "entryType": "resource",
            "startTime": 5525.29999999702,
            "duration": 914.5,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5525.29999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6439.79999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://analytics.tiktok.com/api/v2/pixel/act",
            "entryType": "resource",
            "startTime": 5736.60000000149,
            "duration": 509.5,
            "initiatorType": "beacon",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 5736.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6246.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://d.oracleinfinity.io/infy/acs/common/js/1.3.45/common.js",
            "entryType": "resource",
            "startTime": 6044.79999999702,
            "duration": 775.1000000014901,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6044.79999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6819.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://d.oracleinfinity.io/infy/acs/account/t3ctwioupl/js/frontier/analytics-production/analytics.js",
            "entryType": "resource",
            "startTime": 6045.19999999553,
            "duration": 889.5,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6045.19999999553,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6934.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://ct.pinterest.com/v3/?event=pagevisit&ed=%7B%22event_id%22%3A%221721641484526_17217179298081%22%2C%22np%22%3A%22gtm%22%7D&tid=2612369276936&cb=1721717820702&dep=5%2CEVENT_TAGS_ABSENT&pd=%7B%22np%22%3A%22gtm%22%2C%22pin_unauth%22%3A%22dWlkPU16VTFOakk0WXpNdE0yUTBaQzAwWW1NNExXRXhPV1V0WkRZMk9EUTFNRFZpWTJFeg%22%7D&ad=%7B%22loc%22%3A%22https%3A%2F%2Fwww.flyfrontier.com%2F%22%2C%22ref%22%3A%22%22%2C%22if%22%3Afalse%2C%22sh%22%3A1080%2C%22sw%22%3A1920%2C%22mh%22%3A%2215f60036%22%2C%22is_eu%22%3Atrue%2C%22architecture%22%3A%22arm%22%2C%22bitness%22%3A%2264%22%2C%22brands%22%3A%5B%7B%22brand%22%3A%22Not_A%20Brand%22%2C%22version%22%3A%228%22%7D%2C%7B%22brand%22%3A%22Chromium%22%2C%22version%22%3A%22120%22%7D%2C%7B%22brand%22%3A%22Google%20Chrome%22%2C%22version%22%3A%22120%22%7D%5D%2C%22mobile%22%3Afalse%2C%22model%22%3A%22%22%2C%22platform%22%3A%22macOS%22%2C%22platformVersion%22%3A%2214.5.0%22%2C%22uaFullVersion%22%3A%22120.0.6099.129%22%2C%22ecm_enabled%22%3Atrue%7D",
            "entryType": "resource",
            "startTime": 6253.5,
            "duration": 295.8999999985099,
            "initiatorType": "fetch",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6253.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 6549.39999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9938/polarbearcard.png",
            "entryType": "resource",
            "startTime": 6265.19999999553,
            "duration": 751.3000000044703,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6265.19999999553,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 7016.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/10026/bcus-acqfm-web-placements_drop-down-menu-_350x350_v1.jpg",
            "entryType": "resource",
            "startTime": 6265.29999999702,
            "duration": 752.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6265.29999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 7017.69999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/images/downUpArrow.svg",
            "entryType": "resource",
            "startTime": 6265.5,
            "duration": 751.8999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6265.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 7017.39999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://px.mountain.com/st?ga_tracking_id=G-LRDZ7CLNVX%3BG-P2WLKWBNNW%3BG-XT7DLK33SZ&ga_client_id=1040210130.1721640794&shpt=Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines&ga_info=%7B%22status%22%3A%22OK%22%2C%22available_ga%22%3A%5B%7B%22id%22%3A%22G-P2WLKWBNNW%22%2C%22sess_id%22%3A%221721717818%22%7D%2C%7B%22id%22%3A%22G-XXXX%22%2C%22sess_id%22%3A%221721717818%22%7D%2C%7B%22id%22%3A%22UA-2678252-1%22%2C%22sess_id%22%3Anull%7D%5D%2C%22hardcoded_ga%22%3A%22G-LRDZ7CLNVX%3BG-P2WLKWBNNW%3BG-XT7DLK33SZ%22%2C%22ga_tracking_id%22%3A%22G-LRDZ7CLNVX%3BG-P2WLKWBNNW%3BG-XT7DLK33SZ%22%2C%22ga_client_id%22%3A%221040210130.1721640794%22%2C%22shpt%22%3A%22Low%20Fares%20Done%20Right%20%7C%20Frontier%20Airlines%22%2C%22dcm_cid%22%3A%221721717818.2%22%2C%22dcm_gid%22%3A%22104313871.1721640794%22%2C%22mntnis%22%3A%22CkZOKqkW3q2eWWIoxmjGe%2BGWoD6Zt05i%22%2C%22execution_workflow%22%3A%7B%22iteration%22%3A5%2C%22getClientIdByCookie%22%3A%22OK%22%2C%22shpt%22%3A%22OK%22%2C%22dcm_cid%22%3A%22OK%22%2C%22dcm_gid%22%3A%22OK%22%7D%7D&dcm_cid=1721717818.2&dcm_gid=104313871.1721640794&available_ga=%5B%7B%22id%22%3A%22G-P2WLKWBNNW%22%2C%22sess_id%22%3A%221721717818%22%7D%2C%7B%22id%22%3A%22G-XXXX%22%2C%22sess_id%22%3A%221721717818%22%7D%2C%7B%22id%22%3A%22UA-2678252-1%22%2C%22sess_id%22%3Anull%7D%5D&hardcoded_ga=G-LRDZ7CLNVX%3BG-P2WLKWBNNW%3BG-XT7DLK33SZ&dxver=4.0.0&shaid=37869&plh=https%3A%2F%2Fwww.flyfrontier.com%2F&cb=83173721069717070term%3Dvalue&shadditional=googletagmanager%3Dtrue%2Cga4%3Dtrue",
            "entryType": "resource",
            "startTime": 6504.79999999702,
            "duration": 1287.2000000029802,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6504.79999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 7792,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://dc.oracleinfinity.io/v4/account/t3ctwioupl/client/id",
            "entryType": "resource",
            "startTime": 6938.60000000149,
            "duration": 1052.8999999985099,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 6938.60000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 7991.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://ct.pinterest.com/static/ct/token_create.js",
            "entryType": "resource",
            "startTime": 7834,
            "duration": 208.79999999701977,
            "initiatorType": "script",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 7834,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 8042.79999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://ct.pinterest.com/ct.html",
            "entryType": "resource",
            "startTime": 7834.10000000149,
            "duration": 708.2999999970198,
            "initiatorType": "iframe",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 7834.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 8542.39999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://r.turn.com/r/beacon?b2=8zkWnzEAcLLW9MpjXtdnnkhIg4tRAxBrHAHIHoD_N5fpkxgcNXChLq5mqeJDzCd0hmr731yKOdjmO7IZNP7EKQ&cid=",
            "entryType": "resource",
            "startTime": 7862.29999999702,
            "duration": 862.6000000014901,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 7862.29999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 8724.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://dc.oracleinfinity.io/t3ctwioupl/dcs.gif?pagepath=/&dcsdat=1721717822466&dcssip=www.flyfrontier.com&dcsuri=/&wt.tz=8&wt.bh=14&wt.ul=en&wt.cd=24&wt.sr=1920x1080&wt.jo=No&wt.ti=Low%20Fares%20Done%20Right%20|%20Frontier%20Airlines&wt.js=Yes&wt.bs=441x879&wt.dl=0&wt.ssl=1&wt.es=www.flyfrontier.com/&wt.tv=1.0.4&wt.ce=1&wt.vtid=02e01cbd-3ac8-42a1-82cb-0f9510df51f5&wt.co_f=02e01cbd-3ac8-42a1-82cb-0f9510df51f5&wt.vt_f=1&ora.tag_id=frontier&ora.tag_config=production",
            "entryType": "resource",
            "startTime": 8018.5,
            "duration": 300.3999999985099,
            "initiatorType": "img",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 8018.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 8318.89999999851,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://collector-pxvb73hteg.px-cloud.net/api/v2/collector",
            "entryType": "resource",
            "startTime": 8230,
            "duration": 345.3999999985099,
            "initiatorType": "xmlhttprequest",
            "deliveryType": "",
            "nextHopProtocol": "h2",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 8230,
            "domainLookupStart": 8230,
            "domainLookupEnd": 8230,
            "connectStart": 8230,
            "secureConnectionStart": 8230,
            "connectEnd": 8230,
            "requestStart": 8231.69999999553,
            "responseStart": 8574.60000000149,
            "firstInterimResponseStart": 0,
            "responseEnd": 8575.39999999851,
            "transferSize": 332,
            "encodedBodySize": 32,
            "decodedBodySize": 32,
            "responseStatus": 200,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8094/trees_background_1600x710.jpg",
            "entryType": "resource",
            "startTime": 12209.39999999851,
            "duration": 315.79999999701977,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 12209.39999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 12525.19999999553,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/10016/gowild24-25_-htbackground_1600x700_0708.jpg",
            "entryType": "resource",
            "startTime": 22210.5,
            "duration": 285.6000000014901,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 22210.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 22496.10000000149,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9907/new_frontier_ht_background_2.png",
            "entryType": "resource",
            "startTime": 32214.79999999702,
            "duration": 450.70000000298023,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 32214.79999999702,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 32665.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8094/trees_background_1600x710.jpg",
            "entryType": "resource",
            "startTime": 52223.89999999851,
            "duration": 209.10000000149012,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 52223.89999999851,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 52433,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/10016/gowild24-25_-htbackground_1600x700_0708.jpg",
            "entryType": "resource",
            "startTime": 62226.5,
            "duration": 235,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 62226.5,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 62461.5,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/9907/new_frontier_ht_background_2.png",
            "entryType": "resource",
            "startTime": 112257.10000000149,
            "duration": 244.19999999552965,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 112257.10000000149,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 112501.29999999702,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        },
        {
            "name": "https://f9prodcdn.azureedge.net/media/8094/trees_background_1600x710.jpg",
            "entryType": "resource",
            "startTime": 132268.3999999985,
            "duration": 251.20000000298023,
            "initiatorType": "css",
            "deliveryType": "",
            "nextHopProtocol": "",
            "renderBlockingStatus": "non-blocking",
            "workerStart": 0,
            "redirectStart": 0,
            "redirectEnd": 0,
            "fetchStart": 132268.3999999985,
            "domainLookupStart": 0,
            "domainLookupEnd": 0,
            "connectStart": 0,
            "secureConnectionStart": 0,
            "connectEnd": 0,
            "requestStart": 0,
            "responseStart": 0,
            "firstInterimResponseStart": 0,
            "responseEnd": 132519.6000000015,
            "transferSize": 0,
            "encodedBodySize": 0,
            "decodedBodySize": 0,
            "responseStatus": 0,
            "serverTiming": []
        }
    ]
    resources2.forEach(e => {
        resources.push(new PerformanceNavigationTiming(e))
    })
    MemoryInfo = newFunc('MemoryInfo', 1, function (){print('MemoryInfo.call');mm.memory.private_data.set(this, {})});

    let getIdx1 = 0;
    let getIdx2 = 0;

    Object.defineProperties(MemoryInfo.prototype, {
        [Symbol.toStringTag]:{
            value:'MemoryInfo'
        },

        'totalJSHeapSize': {

            get: createNativeFunc('totalJSHeapSize', 10, function (){


                if (!MemoryInfo.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                let res =  58551655;
                if (getIdx1 > 3){
                    res = 49104169
                }
                if (debug)print('MemoryInfo.totalJSHeapSize.get', res)
                getIdx1++;
                return res
            }, {get: true}), enumerable:true, configurable:true,

        },
        'usedJSHeapSize': {

            get: createNativeFunc('usedJSHeapSize', 10, function (){


                if (!MemoryInfo.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                let res =  43486599;
                if (getIdx2 > 3){
                    res = res -  ((43486599 - 42054993) *getIdx2-2)
                }
                if (debug)print('MemoryInfo.usedJSHeapSize.get', res)
                getIdx2++;
                return res
            }, {get: true}), enumerable:true, configurable:true,

        },
        'jsHeapSizeLimit': {

            get: createNativeFunc('jsHeapSizeLimit', 10, function (){


                if (!MemoryInfo.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }

                ;
                let res =  4294705152;
                if (debug)print('MemoryInfo.jsHeapSizeLimit.get', res)

                return res
            }, {get: true}), enumerable:true, configurable:true,

        },
    })


    let perNow = 104536.6000000001;




    ;delete Performance.prototype.constructor;
    ;
    Object.defineProperties(Performance.prototype, {
        [Symbol.toStringTag]: {
            value: 'Performance'
        },

        'timeOrigin': {

            get: newFunc('timeOrigin', 10, function () {
                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                let ele = mm.memory.private_data.get(this).timeOrigin;
                if (!ele) {
                    ele = perfor.timeOrigin
                    // ele = 1729834138887
                    mm.memory.private_data.get(this).timeOrigin = ele
                }
                let result = ele;
                if (debug) print('Get', 'Performance', 'timeOrigin', arguments, result);
                return result;
            }, {get: true}), enumerable: true, configurable: true,

        },
        'onresourcetimingbufferfull': {

            get: newFunc('onresourcetimingbufferfull', 10, function () {


                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['onresourcetimingbufferfull'];
                if (debug) print('Performance.onresourcetimingbufferfull.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onresourcetimingbufferfull', 1, function (value) {
                if (debug) print('Performance.onresourcetimingbufferfull.set', value)
                mm.memory.private_data.get(this)['onresourcetimingbufferfull'] = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        'clearMarks': {

            value: newFunc('clearMarks', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.clearMarks.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        'clearMeasures': {

            value: newFunc('clearMeasures', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.clearMeasures.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        'clearResourceTimings': {

            value: newFunc('clearResourceTimings', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.clearResourceTimings.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        'getEntries': {

            value: newFunc('getEntries', 10, function (type) {
                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                // if (type === undefined)
                //     throw new TypeError(`Failed to execute 'getEntriesByType' on 'Performance': 1 argument required, but only 0 present.`);

                // if (debug)
                print('Func', 'Performance', 'getEntries', arguments);
                // todo
                let ele = mm.memory.private_data.get(this).entries;
                return ele;
                if (window._url !== undefined){
                }
                return ele

            }), writable: true, enumerable: true, configurable: true,


        },
        'getEntriesByName': {

            value: newFunc('getEntriesByName', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.getEntriesByName.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        'getEntriesByType': {

            value: newFunc('getEntriesByType', 10, function (type) {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.getEntriesByType.call', arguments)
                let res = [];
                switch (type) {
                    case 'navigation':
                        res.push(new PerformanceNavigationTiming())
                        break
                }
                return res;
            }), writable: true, enumerable: true, configurable: true,


        },
        'mark': {

            value: newFunc('mark', 10, function (v) {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                mm.memory.private_data.get(this).entries.push(
                    {
                        detail:null,
                        duration:0,
                        entryType:"mark",
                        name:v,
                        startTime:this.now(),
                    }
                )
                if (debug) print('Performance.mark.call', arguments)


            }), writable: true, enumerable: true, configurable: true,


        },
        'measure': {

            value: newFunc('measure', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.measure.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        'setResourceTimingBufferSize': {

            value: newFunc('setResourceTimingBufferSize', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.setResourceTimingBufferSize.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        'toJSON': {

            value: newFunc('toJSON', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.toJSON.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        'now': {

            value: newFunc('now', 10, function () {
                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                let result = parseInt(perfor.now()) + .7049999237 + startNow;
                // // print('now', result)
                // if (keepRandom) {
                //     result = 104536.6000000001
                // }
                // perNow += 0.01;
                // if (debug) print('Func', 'Performance', 'now', arguments, result);

                return result
                // result =  104536.6000000001
                return result;

            }), writable: true, enumerable: true, configurable: true,


        },
        'constructor': {

            value: newFunc('constructor', 10, function () {

                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                if (debug) print('Performance.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
        'timing': {

            get: newFunc('timing', 10, function () {
                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                let ele = mm.memory.private_data.get(this).timing;
                if (!ele) {
                    ele = new PerformanceTiming(mm.memory.$createObj_key, parseInt(this.timeOrigin));
                    mm.memory.private_data.get(this).timing = ele;
                }
                let result = ele;
                if (debug) print('Get', 'Performance', 'timing', arguments, result);
                return result;
            }, {get: true}), enumerable: true, configurable: true,

        },
        'navigation': {

            get: newFunc('navigation', 10, function () {
                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                let ele = mm.memory.private_data.get(this).navigation;
                if (!ele) {
                    ele = new PerformanceNavigation(mm.memory.$createObj_key);
                    mm.memory.private_data.get(this).navigation = ele;
                }
                let result = ele;
                if (debug) print('Func', 'Performance', 'navigation ', arguments, result);
                return result;

            }, {get: true}), enumerable: true, configurable: true,

        },
        'memory': {

            get: newFunc('memory', 10, function () {
                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;
                // debugger;
                let ele = mm.memory.private_data.get(this).memory;
                if (!ele) {
                    ele = new MemoryInfo(mm.memory.$createObj_key);
                    mm.memory.private_data.get(this).memory = ele;
                }
                let result = ele;
                if (debug) print('Func', 'Performance', 'memory ', arguments, result);
                return result;
            }, {get: true}), enumerable: true, configurable: true,

        },
        'eventCounts': {

            get: newFunc('eventCounts', 10, function () {


                if (!Performance.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['eventCounts'];
                if (debug) print('Performance.eventCounts.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
    })


    Object.setPrototypeOf(Performance.prototype, EventTarget.prototype);
    Object.setPrototypeOf(Performance, EventTarget);
})();
performance = new Performance(mm.memory.$createObj_key);

