Request = newFunc('Request', 1, function () {
    print('Request.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Request.prototype, {
    [Symbol.toStringTag]: {
        value: 'Request'
    },

    'method': {

        get: newFunc('method', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['method'];
            if (debug) print('Request.method.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'url': {

        get: newFunc('url', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['url'];
            if (debug) print('Request.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'headers': {

        get: newFunc('headers', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['headers'];
            if (debug) print('Request.headers.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'destination': {

        get: newFunc('destination', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['destination'];
            if (debug) print('Request.destination.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'referrer': {

        get: newFunc('referrer', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['referrer'];
            if (debug) print('Request.referrer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'referrerPolicy': {

        get: newFunc('referrerPolicy', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['referrerPolicy'];
            if (debug) print('Request.referrerPolicy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'mode': {

        get: newFunc('mode', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['mode'];
            if (debug) print('Request.mode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'credentials': {

        get: newFunc('credentials', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['credentials'];
            if (debug) print('Request.credentials.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'cache': {

        get: newFunc('cache', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['cache'];
            if (debug) print('Request.cache.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'redirect': {

        get: newFunc('redirect', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['redirect'];
            if (debug) print('Request.redirect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'integrity': {

        get: newFunc('integrity', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['integrity'];
            if (debug) print('Request.integrity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'keepalive': {

        get: newFunc('keepalive', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['keepalive'];
            if (debug) print('Request.keepalive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'signal': {

        get: newFunc('signal', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['signal'];
            if (debug) print('Request.signal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'duplex': {

        get: newFunc('duplex', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['duplex'];
            if (debug) print('Request.duplex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'isHistoryNavigation': {

        get: newFunc('isHistoryNavigation', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['isHistoryNavigation'];
            if (debug) print('Request.isHistoryNavigation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'bodyUsed': {

        get: newFunc('bodyUsed', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['bodyUsed'];
            if (debug) print('Request.bodyUsed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'arrayBuffer': {

        value: newFunc('arrayBuffer', 10, function () {

            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Request.arrayBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'blob': {

        value: newFunc('blob', 10, function () {

            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Request.blob.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'clone': {

        value: newFunc('clone', 10, function () {

            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Request.clone.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'formData': {

        value: newFunc('formData', 10, function () {

            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Request.formData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'json': {

        value: newFunc('json', 10, function () {

            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Request.json.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'text': {

        value: newFunc('text', 10, function () {

            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Request.text.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'body': {

        get: newFunc('body', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['body'];
            if (debug) print('Request.body.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Request.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'targetAddressSpace': {

        get: newFunc('targetAddressSpace', 10, function () {


            if (!Request.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['targetAddressSpace'];
            if (debug) print('Request.targetAddressSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
})

Headers = newFunc('Headers', 1, function () {
    print('Headers.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Headers.prototype, {
    [Symbol.toStringTag]: {
        value: 'Headers'
    },

    'append': {

        value: newFunc('append', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'delete': {

        value: newFunc('delete', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'get': {

        value: newFunc('get', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'getSetCookie': {

        value: newFunc('getSetCookie', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.getSetCookie.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'has': {

        value: newFunc('has', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'set': {

        value: newFunc('set', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.set.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'entries': {

        value: newFunc('entries', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'forEach': {

        value: newFunc('forEach', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'keys': {

        value: newFunc('keys', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'values': {

        value: newFunc('values', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Headers.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Headers.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


// native_fetch = function (url, init) {
//     print('new Fetch', url, init)
//     debugger;
//     body = init.body
//     deleteTimerEventLoop();
//     print(init.body)
//     debugger;
//     // realFetch("https://www.flyscoot.com/g-Then-And-meeting-beding-O-Scena-Quarre-allowt-?d=www.flyscoot.com", {
//     //     "headers": {
//     //         "Accept": "application/json; charset=utf-8",
//     //         "Accept-Language": "en,en-US;q=0.9,zh-CN;q=0.8,zh;q=0.7,ru;q=0.6",
//     //         "Connection": "keep-alive",
//     //         "Content-Type": "text/plain; charset=utf-8",
//     //         "Origin": "https://www.flyscoot.com",
//     //         "Referer": "https://www.flyscoot.com/zh",
//     //         "Sec-Fetch-Dest": "empty",
//     //         "Sec-Fetch-Mode": "cors",
//     //         "Sec-Fetch-Site": "same-origin",
//     //         "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36 Edg/122.0.0.0",
//     //     },
//     //     "referrerPolicy": "no-referrer-when-downgrade",
//     //     "body": init['body'],
//     //     "method": "POST",
//     // }).then(r => {
//     //     debugger;
//     //     return r.text()
//     // }).then(r => {
//     //     print(r)
//     //
//     //     debugger;
//     //     realFetch('https://ibe.api.flyscoot.com/v1/account/anonymous', {
//     //         headers: {
//     //             "authority": "ibe.api.flyscoot.com",
//     //             "accept": "application/json, text/plain, */*",
//     //             "accept-language": "en,en-US;q=0.9,zh-CN;q=0.8,zh;q=0.7,ru;q=0.6",
//     //             "authorization": "",
//     //             "content-type": "application/json",
//     //             "origin": "https://beta.makeabooking.flyscoot.com",
//     //             "sec-ch-ua": "\"Chromium\";v=\"122\", \"Not(A:Brand\";v=\"24\", \"Google Chrome\";v=\"122\"",
//     //             "sec-ch-ua-mobile": "?0",
//     //             "sec-ch-ua-platform": "\"macOS\"",
//     //             "sec-fetch-dest": "empty",
//     //             "sec-fetch-mode": "cors",
//     //             "sec-fetch-site": "same-site",
//     //             "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36",
//     //             "x-scoot-appsource": "IBE-WEB",
//     //             "x-scoot-client-environment": "PROD",
//     //             "x-scoot-client-session": "7b7351d8-befc-44fe-bda5-26e0ebb51869",
//     //             "x-scoot-client-version": "0.0.0"
//     //         },
//     //         method:'GET'
//     //     }).then(r=>{
//     //         return r.text()
//     //     }).then(r=>{
//     //         print(r)
//     //         debugger;
//     //     })
//     // })
//     return {
//         then: (t) => {
//             debugger;
//         }
//     }
// }
//
// Utils.registerNative('fetch', 'fetch')


Response = newFunc('Response', 1, function Response() {
    mm.memory.private_data.set(this, {
        headers: {},
        ok:false,
        redirected: false,
        status: 401,
    })
})


Object.defineProperties(Response.prototype, {
    type: {

        get: newFunc('type', 10, function type() {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('Response.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    url: {

        get: newFunc('url', 10, function url() {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('Response.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    redirected: {

        get: newFunc('redirected', 10, function redirected() {
            let res = mm.memory.private_data.get(this).redirected;
            if (debug) print('Response.redirected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    status: {

        get: newFunc('status', 10, function status() {
            let res = mm.memory.private_data.get(this).status;
            if (debug) print('Response.status.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ok: {

        get: newFunc('ok', 10, function ok() {
            let res = mm.memory.private_data.get(this).ok;
            if (debug) print('Response.ok.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    statusText: {

        get: newFunc('statusText', 10, function statusText() {
            let res = mm.memory.private_data.get(this).statusText;
            if (debug) print('Response.statusText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    headers: {

        get: newFunc('headers', 10, function headers() {
            let res = mm.memory.private_data.get(this).headers;
            if (debug) print('Response.headers.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    body: {

        get: newFunc('body', 10, function body() {
            let res = mm.memory.private_data.get(this).body;
            if (debug) print('Response.body.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    bodyUsed: {

        get: newFunc('bodyUsed', 10, function bodyUsed() {
            let res = mm.memory.private_data.get(this).bodyUsed;
            if (debug) print('Response.bodyUsed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    arrayBuffer: {

        value: newFunc('arrayBuffer', 10, function arrayBuffer() {
            if (debug) print('Response.arrayBuffer.call', arguments)
            mm.memory.private_data.get(this).bodyUsed = true;
            return new Promise((resolve, reject) => {
                try {
                    resolve(mm.memory.private_data.get(this).body)
                } catch (e) {
                    reject(e)
                }
            })

        }), writable: true, enumerable: true, configurable: true,


    },
    blob: {

        value: newFunc('blob', 10, function blob() {
            if (debug) print('Response.blob.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clone: {

        value: newFunc('clone', 10, function clone() {
            if (debug) print('Response.clone.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    formData: {

        value: newFunc('formData', 10, function formData() {
            if (debug) print('Response.formData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    json: {

        value: newFunc('json', 10, function json() {
            if (debug) print('Response.json.call', arguments)
            return new Promise((resolve, reject) => {
                try {
                    resolve(JSON.parse(mm.memory.private_data.get(this).text))
                } catch (e) {
                    reject(e)
                }
            })

        }), writable: true, enumerable: true, configurable: true,


    },
    text: {

        value: newFunc('text', 10, function text() {
            if (debug) print('Response.text.call', arguments)
            return new Promise((resolve, reject) => {
                try {
                    resolve(mm.memory.private_data.get(this).text)
                } catch (e) {
                    reject(e)
                }
            })

        }), writable: true, enumerable: true, configurable: true,


    },
    "constructor": {
        value: () => {
        }
    }

})

function fet_res(_img) {
// load the tls-client shared package for your OS you are currently running your nodejs script (i'm running on mac)


    const requestPayload = {
        "tlsClientIdentifier": "chrome_133",
        "followRedirects": true,
        "insecureSkipVerify": false,
        "withoutCookieJar": false,
        "withDefaultCookieJar": false,
        "isByteRequest": false,
        "catchPanics": false,
        "withDebug": false,
        "isByteResponse": true,
        "forceHttp1": false,
        "withRandomTLSExtensionOrder": true,
        "timeoutSeconds": 30,
        "timeoutMilliseconds": 0,
        "sessionId": "my-session-id",
        "proxyUrl": "http://127.0.0.1:7890",
        "isRotatingProxy": false,
        "certificatePinningHosts": {},
        "headers": {
            "User-Agent": navigator.userAgent,
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "cache-control": "max-age=0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "cors",
            "sec-fetch-dest": "empty",
            "sec-fetch-storage-access": "none",
            "referer": window._referer2,
            "accept-language": "en",
            "priority": "u=1, i"
        },
        "headerOrder": [

        ],
        "requestUrl": `https://challenges.cloudflare.com${_img}`,
        "requestMethod": "GET",
        "requestBody": "",
        "requestCookies": []
    }

// call the library with the requestPayload as string
    const response = tlsClientLibrary.request(JSON.stringify(requestPayload));


// convert response string to json
    const responseObject = JSON.parse(response)

    print('responseObject', responseObject)

    let base64Data = responseObject.body.split('base64,');
    base64Data = base64Data[base64Data.length-1]
    print('res',atob(base64Data))
    tlsClientLibrary.freeMemory(responseObject.id)
    debugger;
    const payload = {
        sessionId: 'my-session-id',
        url: "https://microsoft.com",
    }

    const destroySessionPayload = {
        sessionId: 'my-session-id',
    }

    const destroySessionResponse = tlsClientLibrary.destroySession(JSON.stringify(destroySessionPayload))

    const destroySessionResponseParsed = JSON.parse(destroySessionResponse)

    console.log(destroySessionResponseParsed)



}

fetch = newFunc('fetch', 3, function fetch(url, options = {}) {
    print('new cronet fetch', url, options)
    debugger;
    window._url = url;
    return new Promise((resolve, reject)=>{
        let res = new Response();
        // fet_res(window._url)
        // mm.memory.private_data.get(performance).entries.push(  {
        //     "name": `https://challenges.cloudflare.com${window._url}`,            "entryType": "resource",
        //     "startTime": 6253.5,
        //     "duration": 295.8999999985099,
        //     "initiatorType": "fetch",
        //     "deliveryType": "",
        //     "nextHopProtocol": "",
        //     "renderBlockingStatus": "non-blocking",
        //     "workerStart": 0,
        //     "redirectStart": 0,
        //     "redirectEnd": 0,
        //     "fetchStart": 6253.5,
        //     "domainLookupStart": 0,
        //     "domainLookupEnd": 0,
        //     "connectStart": 0,
        //     "secureConnectionStart": 0,
        //     "connectEnd": 0,
        //     "requestStart": 0,
        //     "responseStart": 0,
        //     "firstInterimResponseStart": 0,
        //     "responseEnd": 6549.39999999851,
        //     "transferSize": 0,
        //     "encodedBodySize": 0,
        //     "decodedBodySize": 0,
        //     "responseStatus": 200,
        //     "serverTiming": []
        // })

        resolve(res);
    })
    // const params = new CronetEngineParams()
    // params.disableCache = true
    // params.enableQuic = false // by default
    // params.enableHttp2 = true;
    // params.proxyRules = 'http://127.0.0.1:8890'
    // const engine = new CronetEngine()
    // engine.startWithParams(params)
    //
    // const executor = new CronetExecutor()
    //
    // executor.start()
    // return new Promise((resolve, reject) => {
    //     // const urlReq = new CronetUrlRequest()
    //     // let response = new Response();
    //     // let _resp = mm.memory.private_data.get(response)
    //     // _resp.url = url
    //     // _resp.bodyUsed = false;
    //     // let body = null
    //     // let postBody = options.body;
    //     //
    //     // // let t = setTimeout(function () {
    //     // //     if (!t) {
    //     // //         return
    //     // //     }
    //     // //     console.log('Request timeout.')
    //     // //     t = null
    //     // //     urlReq.cancel()
    //     // // }, timeout)
    //
    //     const done = function () {
    //         urlReq.cancel()
    //         executor.shutdown()
    //         engine.shutdown()
    //         resolve(response)
    //     }
    //
    //     const urlReqParams = new CronetUrlRequestParams()
    //     if (options.body !== undefined) {
    //         urlReqParams.httpMethod = 'POST'
    //         let uploadDataProvider = new CronetUploadDataProvider()
    //         fields = []
    //         for (const field in uploadDataProvider) {
    //             fields.push(field)
    //         }
    //         uploadDataProvider.getLength = function () {
    //             return postBody.length
    //         }
    //         uploadDataProvider.read = function (sink, buffer) {
    //             const fields = []
    //             for (const field in sink) {
    //                 fields.push(field)
    //             }
    //             const buf = BUF.alloc(postBody.length, postBody, 'utf-8')
    //             buf.copy(buffer.data, 0)
    //             sink.onReadSucceeded(buf.length, false)
    //         }
    //         uploadDataProvider.rewind = function (sink) {
    //             sink.onRewindSucceeded()
    //         }
    //         uploadDataProvider.close = function () {
    //         }
    //         urlReqParams.uploadDataProviderExecutor = executor
    //         urlReqParams.uploadDataProvider = uploadDataProvider
    //     } else if (options.method === undefined || options.method === 'GET') {
    //         urlReqParams.httpMethod = 'GET'
    //     }
    //     urlReqParams.disableCache = true
    //     if (options.headers !== undefined) {
    //         Object.keys(options.headers).forEach(key => {
    //             let header = new CronetHttpHeader();
    //             header.name = key;
    //             header.value = options.headers[key]
    //             urlReqParams.requestHeadersAdd(header)
    //         })
    //     }
    //     const urlCallback = new CronetUrlRequestCallback()
    //     urlCallback.onRedirectReceived = function (request, info, newLocationUrl) {
    //         // console.log('onFollowRedirect: ' + info.httpStatusCode + ' ' + newLocationUrl)
    //         request.followRedirect()
    //         _resp.redirected = true;
    //     }
    //
    //     urlCallback.onResponseStarted = function (request, info) {
    //         // console.log('onResponseStarted: ' + info.url
    //         // +' ' + info.negotiatedProtocol
    //         // + ' ' + info.httpStatusCode + ' ' + info.httpStatusText
    //         _resp.status = info.httpStatusCode
    //         _resp.statusText = info.httpStatusText;
    //         if (info.httpStatusCode >= 200 && info.httpStatusCode <= 299) {
    //             _resp.ok = true
    //         } else {
    //             _resp.ok = false
    //         }
    //
    //         // console.log('All headers:')
    //         const allHeadersListSize = info.allHeadersListSize()
    //         for (let i = 0; i < allHeadersListSize; i++) {
    //             const header = info.allHeadersListAt(i)
    //             _resp.headers[header.name] = header.value
    //             // console.log({name: header.name, value: header.value})
    //         }
    //
    //         let buffer = new cronetjs.CronetBuffer()
    //         // Create and allocate 32kb buffer.
    //         buffer.initWithAlloc(128 * 1024)
    //         _resp.body = buffer
    //         // Started reading the response.
    //         request.read(buffer)
    //     }
    //     urlCallback.onReadCompleted = function (request, info, buffer, bytesRead) {
    //         // console.log('onReadCompleted, bytes read: ' + bytesRead)
    //         const bytes = buffer.data.slice(0, bytesRead)
    //         if (!body) {
    //             body = BUF.from(bytes)
    //         } else {
    //             body = BUF.concat([body, bytes])
    //         }
    //         // Continue reading the response.
    //         request.read(buffer)
    //         try {
    //             _resp.text = body.toString();
    //         } catch (e) {
    //             _resp.body = body;
    //         }
    //     }
    //     urlCallback.onSucceeded = function (request, info) {
    //         done()
    //     }
    //     urlCallback.onFailed = function (request, info, error) {
    //         console.log('onFailed, message: ' + error.message
    //             + ', error_code: ' + error.errorCode
    //             + ', internal_error_code: ' + error.internalErrorCode)
    //         done()
    //         reject(error)
    //     }
    //     urlCallback.onCanceled = function (request, info) {
    //         done()
    //     }
    //
    //     urlReq.initWithParams(engine, url, urlReqParams, urlCallback, executor)
    //     urlReq.start()
    // })
})


