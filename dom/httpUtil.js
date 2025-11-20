const ffi = require('ffi-napi');
// 判断设备是否为linux
const os = require('os');
// console.log(process.arch)
if (os.platform() === 'linux') {
    path = './tls-client-linux-ubuntu-amd64-v1.7.2.so';
} else if (process.arch === 'arm64')  {
    path = 'deps/tls-client-arm64.dylib'
}else {
    path = 'deps/tls-client-x86.dylib'

}

// load the tls-client shared package for your OS you are currently running your nodejs script (i'm running on mac)
const tlsClientLibrary = ffi.Library(path, {
    'request': ['string', ['string']],
    'getCookiesFromSession': ['string', ['string']],
    'addCookiesToSession': ['string', ['string']],
    'freeMemory': ["void", ['string']],
    'destroyAll': ['string', []],
    'destroySession': ['string', ['string']]
});


function requestSync(method, url, headers, proxy, data) {

    const requestPayload = {
        "tlsClientIdentifier": "chrome_117",
        "followRedirects": true,
        "insecureSkipVerify": false,
        "withoutCookieJar": false,
        "withDefaultCookieJar": false,
        "isByteRequest": false,
        "catchPanics": true,
        "withDebug": false,
        "forceHttp1": false,
        "withRandomTLSExtensionOrder": false,
        "timeoutSeconds": 5,
        "timeoutMilliseconds": 0,
        "sessionId": "my-session-id",
        "proxyUrl": "",
        "isRotatingProxy": false,
        "certificatePinningHosts": {},
        "headers": headers,
        "headerOrder": [
            "accept",
            "user-agent",
            "accept-encoding",
            "accept-language"
        ],
        "requestUrl": url,
        "requestMethod": method,
        "requestBody": data,
        "requestCookies": []
    }

// call the library with the requestPayload as string
    const response = tlsClientLibrary.request(JSON.stringify(requestPayload));


// convert response string to json
    const responseObject = JSON.parse(response)

    // console.log(responseObject)
    tlsClientLibrary.freeMemory(responseObject.id)



    const destroySessionPayload = {
        sessionId: 'my-session-id',
    }

    const destroySessionResponse = tlsClientLibrary.destroySession(JSON.stringify(destroySessionPayload))

    const destroySessionResponseParsed = JSON.parse(destroySessionResponse)
    tlsClientLibrary.destroyAll()
    // console.log(destroySessionResponseParsed)
    return responseObject
}


