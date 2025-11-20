FinalizationRegistry = newFunc('FinalizationRegistry', 1, function () {
    print('FinalizationRegistry.call');
    mm.memory.private_data.set(this, {})
});


;delete FinalizationRegistry.prototype.constructor;
;
Object.defineProperties(FinalizationRegistry.prototype, {
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!FinalizationRegistry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('FinalizationRegistry.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'register': {

        value: newFunc('register', 10, function () {

            if (!FinalizationRegistry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('FinalizationRegistry.register.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'unregister': {

        value: newFunc('unregister', 10, function () {

            if (!FinalizationRegistry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('FinalizationRegistry.unregister.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


window.getComputedStyle = newFunc('getComputedStyle', 5, function getComputedStyle() {
    if (debug) print('getComputedStyle.call', arguments)
    // debugger;
    return new CSSStyleDeclaration()
})
native_alert = function () {
    print('alert', arguments)

}
Utils.registerNative('alert', 'alert')

// Blob = newFunc('File', 3,Blob)
// File = newFunc('File', 3,File, true)


mm.elemetnsMap = {
    'code': HTMLElement,
    'noscript': HTMLElement,
    'script': HTMLScriptElement,
    'html': HTMLHtmlElement,
    'head': HTMLHeadElement,
    'canvas': HTMLCanvasElement,
    'body': HTMLBodyElement,
    'span': HTMLSpanElement,
    'div': HTMLDivElement,
    'img': HTMLImageElement,
    'a': HTMLAnchorElement,
    'style': HTMLStyleElement,
    'meta': HTMLMetaElement,
    'title': HTMLTitleElement,
    'h2': HTMLTitleElement,
    'h1': HTMLTitleElement,
    'h3': HTMLTitleElement,
    'h4': HTMLTitleElement,
    'h5': HTMLTitleElement,
    'video': HTMLMediaElement,
    'link': HTMLLinkElement,
    'ul': HTMLUListElement,
    'li': HTMLLIElement,
    'form': HTMLFormElement,
    'iframe': HTMLIFrameElement,
    'p': HTMLParagraphElement,
    'input': HTMLInputElement,
    'pre': HTMLPreElement,
    'audio': HTMLAudioElement,
    'svg': HTMLUnknownElement,
    'line': HTMLUnknownElement,
    'g': HTMLUnknownElement,
    'path': HTMLUnknownElement,
    'circle': HTMLUnknownElement,
    'text': SVGTextElement,
    'template': HTMLTemplateElement,
    'textarea': HTMLTextAreaElement,

};

if (domUrl) {
    location.href = domUrl;
}


// _join = Array.prototype.join;
// Array.prototype.join = newFunc('join', 3, function (s) {
//     let res = _join.call(this, s)
//     if (this.indexOf('{"foo\\u0000bar":42}') > -1) {
//         return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3 (line 1 column 4)INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[\x00\x00�\x00\x00]\x00" is not valid JSON`
//     }
//     return res;
// })
sortRandom = function () {
    return 0.5 - Math.random()
}
// _random = Math.random
// Array.prototype.join = newFunc('join', 3, function join(s) {
//     // console.log('join', this.length, this, s)
//     // if (typeof this[0] !== 'number') {
//     //     this.sort(sortRandom)
//     //
//     // }
//     // if (this.indexOf("TypeError: Cannot read properties of null (reading '0')") > -1){
//     //     this.sort(sortRandom)
//     //     return _join.call(this, s)
//     // }
//     if (this.indexOf('abs') > -1) {
//         // this.sort(sortRandom)
//         if (ENV.mathprops) {
//             ENV.mathprops = ENV.mathprops.sort(sortRandom)
//             return _join.call(ENV.mathprops, s)
//
//         }
//         console.log('absresult', _join.call(ENV.mathprops, s))
//         return _join.call(this, s)
//     }
//     if (this.indexOf('canvas') > -1) {
//         let res = [
//             "canvas",
//             "globalAlpha",
//             "globalCompositeOperation",
//             "filter",
//             "imageSmoothingEnabled",
//             "imageSmoothingQuality",
//             "strokeStyle",
//             "fillStyle",
//             "shadowOffsetX",
//             "shadowOffsetY",
//             "shadowBlur",
//             "shadowColor",
//             "lineWidth",
//             "lineCap",
//             "lineJoin",
//             "miterLimit",
//             "lineDashOffset",
//             "font",
//             "textAlign",
//             "textBaseline",
//             "direction",
//             "fontKerning",
//             "fontStretch",
//             "fontVariantCaps",
//             "letterSpacing",
//             "textRendering",
//             "wordSpacing",
//             "clip",
//             "createConicGradient",
//             "createImageData",
//             "createLinearGradient",
//             "createPattern",
//             "createRadialGradient",
//             "drawFocusIfNeeded",
//             "drawImage",
//             "fill",
//             "fillText",
//             "getContextAttributes",
//             "getImageData",
//             "getLineDash",
//             "getTransform",
//             "isContextLost",
//             "isPointInPath",
//             "isPointInStroke",
//             "measureText",
//             "putImageData",
//             "reset",
//             "roundRect",
//             "save",
//             "scale",
//             "setLineDash",
//             "setTransform",
//             "stroke",
//             "strokeText",
//             "transform",
//             "translate",
//             "arc",
//             "arcTo",
//             "beginPath",
//             "bezierCurveTo",
//             "clearRect",
//             "closePath",
//             "ellipse",
//             "fillRect",
//             "lineTo",
//             "moveTo",
//             "quadraticCurveTo",
//             "rect",
//             "resetTransform",
//             "restore",
//             "rotate",
//             "strokeRect"
//         ];
//         // res = res.sort(sortRandom)
//         return _join.call(res, s)
//     }
//     if (this.indexOf('getDetails') > -1) {
//         return _join.call([
//             "isInstalled",
//             "getDetails",
//             "getIsInstalled",
//             "installState",
//             "runningState",
//             "InstallState",
//             "RunningState"
//         ], s)
//     }
//     if (this.indexOf('productSub') > -1) {
//         let res = [
//             "vendorSub",
//             "productSub",
//             "vendor",
//             "maxTouchPoints",
//             "scheduling",
//             "userActivation",
//             "doNotTrack",
//             "geolocation",
//             "connection",
//             "plugins",
//             "mimeTypes",
//             "pdfViewerEnabled",
//             "webkitTemporaryStorage",
//             "webkitPersistentStorage",
//             "hardwareConcurrency",
//             "cookieEnabled",
//             "appCodeName",
//             "appName",
//             "appVersion",
//             "platform",
//             "product",
//             "userAgent",
//             "language",
//             "languages",
//             "onLine",
//             "webdriver",
//             "getGamepads",
//             "javaEnabled",
//             "sendBeacon",
//             "vibrate",
//             "bluetooth",
//             "clipboard",
//             "credentials",
//             "keyboard",
//             "managed",
//             "mediaDevices",
//             "storage",
//             "serviceWorker",
//             "virtualKeyboard",
//             "wakeLock",
//             "deviceMemory",
//             "ink",
//             "hid",
//             "locks",
//             "mediaCapabilities",
//             "mediaSession",
//             "permissions",
//             "presentation",
//             "serial",
//             "gpu",
//             "usb",
//             "windowControlsOverlay",
//             "xr",
//             "userAgentData",
//             "adAuctionComponents",
//             "runAdAuction",
//             "canLoadAdAuctionFencedFrame",
//             "clearAppBadge",
//             "getBattery",
//             "getUserMedia",
//             "requestMIDIAccess",
//             "requestMediaKeySystemAccess",
//             "setAppBadge",
//             "webkitGetUserMedia",
//             "deprecatedReplaceInURN",
//             "deprecatedURNToURL",
//             "getInterestGroupAdAuctionData",
//             "joinAdInterestGroup",
//             "leaveAdInterestGroup",
//             "updateAdInterestGroups",
//             "getInstalledRelatedApps",
//             "registerProtocolHandler",
//             "unregisterProtocolHandler"
//         ]
//         // res = res.sort(sortRandom)
//         return _join.call(res, s)
//     }
//     if (this.indexOf('assert') > -1) {
//         let r = [
//             "assert",
//             "clear",
//             "context",
//             "count",
//             "countReset",
//             "createTask",
//             "debug",
//             "dir",
//             "dirxml",
//             "error",
//             "group",
//             "groupCollapsed",
//             "groupEnd",
//             "info",
//             "log",
//             "memory",
//             "profile",
//             "profileEnd",
//             "table",
//             "time",
//             "timeEnd",
//             "timeLog",
//             "timeStamp",
//             "trace",
//             "warn"
//         ];
//         // ENV.consoleprops = ENV.consoleprops.sort(sortRandom)
//         r = r.sort(sortRandom)
//         if (ENV.consoleprops && assertTimes === 0) {
//
//             assertTimes += 1;
//             // print1('assertTimes', assertTimes, _join.call(ENV.consoleprops, s))
//             // return _join.call(ENV.consoleprops, s)
//             return _join.call(r, s);
//
//         } else {
//             // ENV.consoleprops = ENV.consoleprops.sort(sortRandom)
//             //
//             r = [
//                 "debug",
//                 "error",
//                 "info",
//                 "log",
//                 "warn",
//                 "dir",
//                 "dirxml",
//                 "table",
//                 "trace",
//                 "group",
//                 "groupCollapsed",
//                 "groupEnd",
//                 "clear",
//                 "count",
//                 "countReset",
//                 "assert",
//                 "profile",
//                 "profileEnd",
//                 "time",
//                 "timeLog",
//                 "timeEnd",
//                 "timeStamp",
//                 "context",
//                 "createTask",
//                 "memory"
//             ]
//             r = r.sort(sortRandom)
//
//             //            return _join.call(ENV.consoleprops, s)
//             let res = _join.call(r, s)
//             // print1('assertTimes', assertTimes, res)
//             return res;
//         }
//         return _join.call([
//             "assert",
//             "clear",
//             "context",
//             "count",
//             "countReset",
//             "createTask",
//             "debug",
//             "dir",
//             "dirxml",
//             "error",
//             "group",
//             "groupCollapsed",
//             "groupEnd",
//             "info",
//             "log",
//             "memory",
//             "profile",
//             "profileEnd",
//             "table",
//             "time",
//             "timeEnd",
//             "timeLog",
//             "timeStamp",
//             "trace",
//             "warn"
//         ], s)
//     }
//     if (this.length === 438) {
//         // this.sort(sortRandom)
//         return _join.call(this, s)
//     }
//     if (this.indexOf('{"foo\\u0000bar":42}') > -1) {
// //         return _join.call([
// //     "{\"foo\\u0000bar\":42}",
// //     "INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3",
// //     "INVALID:SyntaxError: Unexpected token '�', \"�{}\" is not valid JSON",
// //     "INVALID:SyntaxError: Unexpected token '�', \"��[\u0000\u0000�\u0000\u0000]\u0000\" is not valid JSON"
// // ], s)
// //         return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3 (line 1 column 4)INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[\x00\x00�\x00\x00]\x00" is not valid JSON`
//         // return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3 (line 1 column 4)INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[�����]�" is not valid JSON`
//         let strs = [`{"foo\\u0000bar":42}INVALID:SyntaxError: Unexpected token t in JSON at position 3INVALID:SyntaxError: Unexpected token � in JSON at position 0INVALID:SyntaxError: Unexpected token � in JSON at position 0`, `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[�����]�" is not valid JSON`, `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[`, `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3 (line 1 column 4)INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[�����]�" is not valid JSON`]
//         let res = strs[parseInt(_random() * strs.length)];
//         console.log('jsonres', res)
//         // let strs = res.split('');
//         // strs.sort(sortRandom)
//         // res = strs.join('')
//         // console.log('assertresult', res)
//         return res
//
//         return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[�����]�" is not valid JSON`
//         // 家里的
//         // return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[�����]�" is not valid JSON`
//
//         // return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[`
//         // this.sort(sortRandom)
//
//         // return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[\x00\x00�\x00\x00]\x00" is not valid JSON`
//         // return
//         // return `{"foo\\u0000bar":42}INVALID:SyntaxError: Expected ',' or ']' after array element in JSON at position 3INVALID:SyntaxError: Unexpected token '�', "�{}" is not valid JSONINVALID:SyntaxError: Unexpected token '�', "��[�����]�" is not valid JSON`
//     }
//     return _join.call(this, s)
// })


_defin = Object.defineProperty;
window['native_defineProperty'] = function (p, v, d) {
    // if (v !== 'name' && v !== 'length' && v !== 'p'  && v !== 'a' && v !== 'E' && v !== 'V')
    // print('define',  v, d);
    if (v=== 'id'){
    }
    if ((v === 'name' || v === 'message') && typeof d.get === 'function') {
        let dget = d['get'];
        d = {
            get:function(){
                print(v,'get.call')

                let res = dget();
                return res
            },
        }
    }
    if ( v === 'stack'  && typeof d.get === 'function'){
        let dget = d['get'];
        d = {
            get: function (){
                // debugger;
                print(v,'get.call')
                let res =  dget();
                return res;
            }
        }

    }
    // if (v === 'name' && typeof d.get === 'function') {
    //     d.get();
    //     d = {
    //         get: function () {
    //             return ''
    //         }
    //     }
    //     return;
    // }


    // if (v === 'name' && typeof d.get === 'function') {
    //     debugger;
    //     let v2 = d.get();
    //     print('define.name', v2)
    // }
    // if (v === 'stack' && typeof d.get === 'function') {
    //     debugger;
    //     let v2 = d.get();
    //     print('define.stack', v2)
    // }
    // if (v === 'message' && typeof d.get === 'function') {
    //     let desc = Object.getOwnPropertyDescriptors(p)
    //     // debugger;
    //
    //     // if (desc.stack && typeof desc.stack.get !== 'function') {
    //     //     return _defin(p, v, d)
    //     // }
    //     let v2 = d.get();
    //     print('define.message', v2)
    //     // d = {
    //     //     get: function () {
    //     //         // let res = v2();
    //     //         print('.message.call', v2);
    //     //         return v2
    //     //     }
    //     // }
    //     // d = {
    //     //     get: function (){
    //     //         return v2
    //     //     }
    //     // }
    // }



    // if (v === 'toString') {
    //     // debugger
    // }
    // if (v === 'positionalSignals') {
    //     if (Array.isArray(d.value) && d.value.length > 50) {
    //         let res = [];
    //         // d.value[54]
    //         // d.value[58] = [[], [22,28,65,7,229]]
    //         // d.value[41] = [[], [22,28,65,7,145,253]]
    //         // d.value[24] = [[], [22,28,65,7,19,106,217,251,208,108,206,34,100,187,204,25,118,83,151,180,247,168,10,189,55,95,25,165,80,162,143,143,3,156,72,6,77,166,174,246,82,51,95,57,198,23,187]]
    //         d.value.forEach((e, i) => {
    //             if (e && e.length == 2) {
    //                 res.push(i + '==' + e[1].length + '=>')
    //                 res.push(e[1] + '')
    //             } else {
    //                 res.push(i + '==0=>iii')
    //             }
    //
    //         })
    //         print([].slice.call(res).join('iii'))
    //     }
    // }
    // if (v === 'outerArgs') {
    //     // debugger;
    //     d.value = undefined;
    // }
    // if ((v === 'c' || v === 'd' || v === 'b') && d.value === false) {
    //     d.value = true;
    //     // debugger;
    // }
    return _defin(p, v, d)
}
// Utils.registerNative('defineProperty', 'defineProperty')
// Object.defineProperty = window['defineProperty']



// _defineProperties = Object.defineProperties;
// Object.defineProperties = newFunc('defineProperties', 3, function (p,c){
//     print('defineProperties', c)
//     return _defineProperties(p,c)
// })
// _hasOwnProperty = Object.hasOwnProperty;
// Object.hasOwnProperty = newFunc('hasOwnProperty', 3, function () {
//     let res = _hasOwnProperty.apply(this, arguments);
//     print('Object.hasOwnProperty', arguments, res === undefined);
//     return res;
// })


window.reeseSkipExpirationCheck = true;
// window.isSecureContext = true;
print('window', Object.defineProperty)
Object.defineProperty(window, 'isSecureContext', {
    get() {
        print('isSecureContext.call', true)

        return true;
    }
})


window.webkitRequestFileSystem = newFunc('webkitRequestFileSystem', 5, function webkitRequestFileSystem(type, size, successCallback, errorCallback) {
    if (debug) print('webkitRequestFileSystem', type, size)

})
webkitSpeechRecognitionEvent = newFunc('webkitSpeechRecognitionEvent', 1, function webkitSpeechRecognitionEvent() {
    print('webkitSpeechRecognitionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(webkitSpeechRecognitionEvent.prototype, {
    resultIndex: {

        get: newFunc('resultIndex', 10, function resultIndex() {
            let res = mm.memory.private_data.get(this).resultIndex;
            if (debug) print('webkitSpeechRecognitionEvent.resultIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    results: {

        get: newFunc('results', 10, function results() {
            let res = mm.memory.private_data.get(this).results;
            if (debug) print('webkitSpeechRecognitionEvent.results.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
})
webkitSpeechRecognitionError = newFunc('webkitSpeechRecognitionError', 1, function webkitSpeechRecognitionError() {
    print('webkitSpeechRecognitionError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(webkitSpeechRecognitionError.prototype, {
    error: {

        get: newFunc('error', 10, function error() {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('webkitSpeechRecognitionError.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function message() {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('webkitSpeechRecognitionError.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
})

Object.defineProperties(webkitSpeechRecognitionError.prototype, {
    error: {

        get: newFunc('error', 10, function error() {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('webkitSpeechRecognitionError.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function message() {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('webkitSpeechRecognitionError.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
})
webkitSpeechRecognition = newFunc('webkitSpeechRecognition', 1, function webkitSpeechRecognition() {
    print('webkitSpeechRecognition.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(webkitSpeechRecognition.prototype, {
    grammars: {

        get: newFunc('grammars', 10, function grammars() {
            let res = mm.memory.private_data.get(this).grammars;
            if (debug) print('webkitSpeechRecognition.grammars.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('grammars', 1, function grammars(value) {
            if (debug) print('webkitSpeechRecognition.grammars.set', value)
            mm.memory.private_data.get(this).grammars = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lang: {

        get: newFunc('lang', 10, function lang() {
            let res = mm.memory.private_data.get(this).lang;
            if (debug) print('webkitSpeechRecognition.lang.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lang', 1, function lang(value) {
            if (debug) print('webkitSpeechRecognition.lang.set', value)
            mm.memory.private_data.get(this).lang = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    continuous: {

        get: newFunc('continuous', 10, function continuous() {
            let res = mm.memory.private_data.get(this).continuous;
            if (debug) print('webkitSpeechRecognition.continuous.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('continuous', 1, function continuous(value) {
            if (debug) print('webkitSpeechRecognition.continuous.set', value)
            mm.memory.private_data.get(this).continuous = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    interimResults: {

        get: newFunc('interimResults', 10, function interimResults() {
            let res = mm.memory.private_data.get(this).interimResults;
            if (debug) print('webkitSpeechRecognition.interimResults.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('interimResults', 1, function interimResults(value) {
            if (debug) print('webkitSpeechRecognition.interimResults.set', value)
            mm.memory.private_data.get(this).interimResults = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    maxAlternatives: {

        get: newFunc('maxAlternatives', 10, function maxAlternatives() {
            let res = mm.memory.private_data.get(this).maxAlternatives;
            if (debug) print('webkitSpeechRecognition.maxAlternatives.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxAlternatives', 1, function maxAlternatives(value) {
            if (debug) print('webkitSpeechRecognition.maxAlternatives.set', value)
            mm.memory.private_data.get(this).maxAlternatives = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onaudiostart: {

        get: newFunc('onaudiostart', 10, function onaudiostart() {
            let res = mm.memory.private_data.get(this).onaudiostart;
            if (debug) print('webkitSpeechRecognition.onaudiostart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onaudiostart', 1, function onaudiostart(value) {
            if (debug) print('webkitSpeechRecognition.onaudiostart.set', value)
            mm.memory.private_data.get(this).onaudiostart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsoundstart: {

        get: newFunc('onsoundstart', 10, function onsoundstart() {
            let res = mm.memory.private_data.get(this).onsoundstart;
            if (debug) print('webkitSpeechRecognition.onsoundstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsoundstart', 1, function onsoundstart(value) {
            if (debug) print('webkitSpeechRecognition.onsoundstart.set', value)
            mm.memory.private_data.get(this).onsoundstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onspeechstart: {

        get: newFunc('onspeechstart', 10, function onspeechstart() {
            let res = mm.memory.private_data.get(this).onspeechstart;
            if (debug) print('webkitSpeechRecognition.onspeechstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onspeechstart', 1, function onspeechstart(value) {
            if (debug) print('webkitSpeechRecognition.onspeechstart.set', value)
            mm.memory.private_data.get(this).onspeechstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onspeechend: {

        get: newFunc('onspeechend', 10, function onspeechend() {
            let res = mm.memory.private_data.get(this).onspeechend;
            if (debug) print('webkitSpeechRecognition.onspeechend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onspeechend', 1, function onspeechend(value) {
            if (debug) print('webkitSpeechRecognition.onspeechend.set', value)
            mm.memory.private_data.get(this).onspeechend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsoundend: {

        get: newFunc('onsoundend', 10, function onsoundend() {
            let res = mm.memory.private_data.get(this).onsoundend;
            if (debug) print('webkitSpeechRecognition.onsoundend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsoundend', 1, function onsoundend(value) {
            if (debug) print('webkitSpeechRecognition.onsoundend.set', value)
            mm.memory.private_data.get(this).onsoundend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onaudioend: {

        get: newFunc('onaudioend', 10, function onaudioend() {
            let res = mm.memory.private_data.get(this).onaudioend;
            if (debug) print('webkitSpeechRecognition.onaudioend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onaudioend', 1, function onaudioend(value) {
            if (debug) print('webkitSpeechRecognition.onaudioend.set', value)
            mm.memory.private_data.get(this).onaudioend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onresult: {

        get: newFunc('onresult', 10, function onresult() {
            let res = mm.memory.private_data.get(this).onresult;
            if (debug) print('webkitSpeechRecognition.onresult.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresult', 1, function onresult(value) {
            if (debug) print('webkitSpeechRecognition.onresult.set', value)
            mm.memory.private_data.get(this).onresult = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onnomatch: {

        get: newFunc('onnomatch', 10, function onnomatch() {
            let res = mm.memory.private_data.get(this).onnomatch;
            if (debug) print('webkitSpeechRecognition.onnomatch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onnomatch', 1, function onnomatch(value) {
            if (debug) print('webkitSpeechRecognition.onnomatch.set', value)
            mm.memory.private_data.get(this).onnomatch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function onerror() {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('webkitSpeechRecognition.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('webkitSpeechRecognition.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onstart: {

        get: newFunc('onstart', 10, function onstart() {
            let res = mm.memory.private_data.get(this).onstart;
            if (debug) print('webkitSpeechRecognition.onstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstart', 1, function onstart(value) {
            if (debug) print('webkitSpeechRecognition.onstart.set', value)
            mm.memory.private_data.get(this).onstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onend: {

        get: newFunc('onend', 10, function onend() {
            let res = mm.memory.private_data.get(this).onend;
            if (debug) print('webkitSpeechRecognition.onend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onend', 1, function onend(value) {
            if (debug) print('webkitSpeechRecognition.onend.set', value)
            mm.memory.private_data.get(this).onend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    abort: {

        value: newFunc('abort', 10, function abort() {
            if (debug) print('webkitSpeechRecognition.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    start: {

        value: newFunc('start', 10, function start() {
            if (debug) print('webkitSpeechRecognition.start.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stop: {

        value: newFunc('stop', 10, function stop() {
            if (debug) print('webkitSpeechRecognition.stop.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})
webkitSpeechGrammarList = newFunc('webkitSpeechGrammarList', 1, function webkitSpeechGrammarList() {
    print('webkitSpeechGrammarList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(webkitSpeechGrammarList.prototype, {
    length: {

        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('webkitSpeechGrammarList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    addFromString: {

        value: newFunc('addFromString', 10, function addFromString() {
            if (debug) print('webkitSpeechGrammarList.addFromString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    addFromUri: {

        value: newFunc('addFromUri', 10, function addFromUri() {
            if (debug) print('webkitSpeechGrammarList.addFromUri.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    item: {

        value: newFunc('item', 10, function item() {
            if (debug) print('webkitSpeechGrammarList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})
webkitSpeechGrammar = newFunc('webkitSpeechGrammar', 1, function webkitSpeechGrammar() {
    print('webkitSpeechGrammar.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(webkitSpeechGrammar.prototype, {
    src: {

        get: newFunc('src', 10, function src() {
            let res = mm.memory.private_data.get(this).src;
            if (debug) print('webkitSpeechGrammar.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function src(value) {
            if (debug) print('webkitSpeechGrammar.src.set', value)
            mm.memory.private_data.get(this).src = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    weight: {

        get: newFunc('weight', 10, function weight() {
            let res = mm.memory.private_data.get(this).weight;
            if (debug) print('webkitSpeechGrammar.weight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('weight', 1, function weight(value) {
            if (debug) print('webkitSpeechGrammar.weight.set', value)
            mm.memory.private_data.get(this).weight = value

        }, {set: true}), enumerable: true, configurable: true,


    },
})
SpeechSynthesisEvent = newFunc('SpeechSynthesisEvent', 1, function SpeechSynthesisEvent() {
    print('SpeechSynthesisEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SpeechSynthesisEvent.prototype, {
    utterance: {

        get: newFunc('utterance', 10, function utterance() {
            let res = mm.memory.private_data.get(this).utterance;
            if (debug) print('SpeechSynthesisEvent.utterance.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    charIndex: {

        get: newFunc('charIndex', 10, function charIndex() {
            let res = mm.memory.private_data.get(this).charIndex;
            if (debug) print('SpeechSynthesisEvent.charIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    charLength: {

        get: newFunc('charLength', 10, function charLength() {
            let res = mm.memory.private_data.get(this).charLength;
            if (debug) print('SpeechSynthesisEvent.charLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    elapsedTime: {

        get: newFunc('elapsedTime', 10, function elapsedTime() {
            let res = mm.memory.private_data.get(this).elapsedTime;
            if (debug) print('SpeechSynthesisEvent.elapsedTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function name() {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('SpeechSynthesisEvent.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('SpeechSynthesisEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
SpeechSynthesisUtterance = newFunc('SpeechSynthesisUtterance', 1, function SpeechSynthesisUtterance() {
    print('SpeechSynthesisUtterance.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SpeechSynthesisUtterance.prototype, {
    text: {

        get: newFunc('text', 10, function text() {
            let res = mm.memory.private_data.get(this).text;
            if (debug) print('SpeechSynthesisUtterance.text.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('text', 1, function text(value) {
            if (debug) print('SpeechSynthesisUtterance.text.set', value)
            mm.memory.private_data.get(this).text = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lang: {

        get: newFunc('lang', 10, function lang() {
            let res = mm.memory.private_data.get(this).lang;
            if (debug) print('SpeechSynthesisUtterance.lang.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lang', 1, function lang(value) {
            if (debug) print('SpeechSynthesisUtterance.lang.set', value)
            mm.memory.private_data.get(this).lang = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    voice: {

        get: newFunc('voice', 10, function voice() {
            let res = mm.memory.private_data.get(this).voice;
            if (debug) print('SpeechSynthesisUtterance.voice.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('voice', 1, function voice(value) {
            if (debug) print('SpeechSynthesisUtterance.voice.set', value)
            mm.memory.private_data.get(this).voice = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    volume: {

        get: newFunc('volume', 10, function volume() {
            let res = mm.memory.private_data.get(this).volume;
            if (debug) print('SpeechSynthesisUtterance.volume.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('volume', 1, function volume(value) {
            if (debug) print('SpeechSynthesisUtterance.volume.set', value)
            mm.memory.private_data.get(this).volume = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rate: {

        get: newFunc('rate', 10, function rate() {
            let res = mm.memory.private_data.get(this).rate;
            if (debug) print('SpeechSynthesisUtterance.rate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rate', 1, function rate(value) {
            if (debug) print('SpeechSynthesisUtterance.rate.set', value)
            mm.memory.private_data.get(this).rate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    pitch: {

        get: newFunc('pitch', 10, function pitch() {
            let res = mm.memory.private_data.get(this).pitch;
            if (debug) print('SpeechSynthesisUtterance.pitch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('pitch', 1, function pitch(value) {
            if (debug) print('SpeechSynthesisUtterance.pitch.set', value)
            mm.memory.private_data.get(this).pitch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onstart: {

        get: newFunc('onstart', 10, function onstart() {
            let res = mm.memory.private_data.get(this).onstart;
            if (debug) print('SpeechSynthesisUtterance.onstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstart', 1, function onstart(value) {
            if (debug) print('SpeechSynthesisUtterance.onstart.set', value)
            mm.memory.private_data.get(this).onstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onend: {

        get: newFunc('onend', 10, function onend() {
            let res = mm.memory.private_data.get(this).onend;
            if (debug) print('SpeechSynthesisUtterance.onend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onend', 1, function onend(value) {
            if (debug) print('SpeechSynthesisUtterance.onend.set', value)
            mm.memory.private_data.get(this).onend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function onerror() {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('SpeechSynthesisUtterance.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('SpeechSynthesisUtterance.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpause: {

        get: newFunc('onpause', 10, function onpause() {
            let res = mm.memory.private_data.get(this).onpause;
            if (debug) print('SpeechSynthesisUtterance.onpause.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpause', 1, function onpause(value) {
            if (debug) print('SpeechSynthesisUtterance.onpause.set', value)
            mm.memory.private_data.get(this).onpause = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onresume: {

        get: newFunc('onresume', 10, function onresume() {
            let res = mm.memory.private_data.get(this).onresume;
            if (debug) print('SpeechSynthesisUtterance.onresume.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresume', 1, function onresume(value) {
            if (debug) print('SpeechSynthesisUtterance.onresume.set', value)
            mm.memory.private_data.get(this).onresume = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmark: {

        get: newFunc('onmark', 10, function onmark() {
            let res = mm.memory.private_data.get(this).onmark;
            if (debug) print('SpeechSynthesisUtterance.onmark.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmark', 1, function onmark(value) {
            if (debug) print('SpeechSynthesisUtterance.onmark.set', value)
            mm.memory.private_data.get(this).onmark = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onboundary: {

        get: newFunc('onboundary', 10, function onboundary() {
            let res = mm.memory.private_data.get(this).onboundary;
            if (debug) print('SpeechSynthesisUtterance.onboundary.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onboundary', 1, function onboundary(value) {
            if (debug) print('SpeechSynthesisUtterance.onboundary.set', value)
            mm.memory.private_data.get(this).onboundary = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('SpeechSynthesisUtterance.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
SpeechSynthesisErrorEvent = newFunc('SpeechSynthesisErrorEvent', 1, function SpeechSynthesisErrorEvent() {
    print('SpeechSynthesisErrorEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SpeechSynthesisErrorEvent.prototype, {
    error: {

        get: newFunc('error', 10, function error() {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('SpeechSynthesisErrorEvent.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('SpeechSynthesisErrorEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


VisibilityStateEntry = newFunc('VisibilityStateEntry', 1, function VisibilityStateEntry() {
    print('VisibilityStateEntry.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VisibilityStateEntry.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('VisibilityStateEntry.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
VideoPlaybackQuality = newFunc('VideoPlaybackQuality', 1, function VideoPlaybackQuality() {
    print('VideoPlaybackQuality.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VideoPlaybackQuality.prototype, {
    creationTime: {

        get: newFunc('creationTime', 10, function creationTime() {
            let res = mm.memory.private_data.get(this).creationTime;
            if (debug) print('VideoPlaybackQuality.creationTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    totalVideoFrames: {

        get: newFunc('totalVideoFrames', 10, function totalVideoFrames() {
            let res = mm.memory.private_data.get(this).totalVideoFrames;
            if (debug) print('VideoPlaybackQuality.totalVideoFrames.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    droppedVideoFrames: {

        get: newFunc('droppedVideoFrames', 10, function droppedVideoFrames() {
            let res = mm.memory.private_data.get(this).droppedVideoFrames;
            if (debug) print('VideoPlaybackQuality.droppedVideoFrames.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    corruptedVideoFrames: {

        get: newFunc('corruptedVideoFrames', 10, function corruptedVideoFrames() {
            let res = mm.memory.private_data.get(this).corruptedVideoFrames;
            if (debug) print('VideoPlaybackQuality.corruptedVideoFrames.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('VideoPlaybackQuality.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


ViewTimeline = newFunc('ViewTimeline', 5, function ViewTimeline() {
    if (debug) print('ViewTimeline', arguments)
})

Object.defineProperties(ViewTimeline.prototype, {
    subject: {

        get: newFunc('subject', 10, function subject() {
            let res = mm.memory.private_data.get(this).subject;
            if (debug) print('ViewTimeline.subject.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    startOffset: {

        get: newFunc('startOffset', 10, function startOffset() {
            let res = mm.memory.private_data.get(this).startOffset;
            if (debug) print('ViewTimeline.startOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    endOffset: {

        get: newFunc('endOffset', 10, function endOffset() {
            let res = mm.memory.private_data.get(this).endOffset;
            if (debug) print('ViewTimeline.endOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('ViewTimeline.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
ScrollTimeline = newFunc('ScrollTimeline', 1, function ScrollTimeline() {
    print('ScrollTimeline.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ScrollTimeline.prototype, {
    source: {

        get: newFunc('source', 10, function source() {
            let res = mm.memory.private_data.get(this).source;
            if (debug) print('ScrollTimeline.source.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    axis: {

        get: newFunc('axis', 10, function axis() {
            let res = mm.memory.private_data.get(this).axis;
            if (debug) print('ScrollTimeline.axis.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('ScrollTimeline.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
RemotePlayback = newFunc('RemotePlayback', 1, function RemotePlayback() {
    print('RemotePlayback.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(RemotePlayback.prototype, {
    state: {

        get: newFunc('state', 10, function state() {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('RemotePlayback.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onconnecting: {

        get: newFunc('onconnecting', 10, function onconnecting() {
            let res = mm.memory.private_data.get(this).onconnecting;
            if (debug) print('RemotePlayback.onconnecting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnecting', 1, function onconnecting(value) {
            if (debug) print('RemotePlayback.onconnecting.set', value)
            mm.memory.private_data.get(this).onconnecting = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onconnect: {

        get: newFunc('onconnect', 10, function onconnect() {
            let res = mm.memory.private_data.get(this).onconnect;
            if (debug) print('RemotePlayback.onconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnect', 1, function onconnect(value) {
            if (debug) print('RemotePlayback.onconnect.set', value)
            mm.memory.private_data.get(this).onconnect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondisconnect: {

        get: newFunc('ondisconnect', 10, function ondisconnect() {
            let res = mm.memory.private_data.get(this).ondisconnect;
            if (debug) print('RemotePlayback.ondisconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondisconnect', 1, function ondisconnect(value) {
            if (debug) print('RemotePlayback.ondisconnect.set', value)
            mm.memory.private_data.get(this).ondisconnect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    cancelWatchAvailability: {

        value: newFunc('cancelWatchAvailability', 10, function cancelWatchAvailability() {
            if (debug) print('RemotePlayback.cancelWatchAvailability.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    prompt: {

        value: newFunc('prompt', 10, function prompt() {
            if (debug) print('RemotePlayback.prompt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    watchAvailability: {

        value: newFunc('watchAvailability', 10, function watchAvailability() {
            if (debug) print('RemotePlayback.watchAvailability.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('RemotePlayback.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
PushSubscriptionOptions = newFunc('PushSubscriptionOptions', 1, function PushSubscriptionOptions() {
    print('PushSubscriptionOptions.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PushSubscriptionOptions.prototype, {
    userVisibleOnly: {

        get: newFunc('userVisibleOnly', 10, function userVisibleOnly() {
            let res = mm.memory.private_data.get(this).userVisibleOnly;
            if (debug) print('PushSubscriptionOptions.userVisibleOnly.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    applicationServerKey: {

        get: newFunc('applicationServerKey', 10, function applicationServerKey() {
            let res = mm.memory.private_data.get(this).applicationServerKey;
            if (debug) print('PushSubscriptionOptions.applicationServerKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('PushSubscriptionOptions.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

PushManager = newFunc('PushManager', 1, function PushManager() {
    print('PushManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PushManager.prototype, {
    getSubscription: {

        value: newFunc('getSubscription', 10, function getSubscription() {
            if (debug) print('PushManager.getSubscription.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    permissionState: {

        value: newFunc('permissionState', 10, function permissionState() {
            if (debug) print('PushManager.permissionState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    subscribe: {

        value: newFunc('subscribe', 10, function subscribe() {
            if (debug) print('PushManager.subscribe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('PushManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
// window.Permissions = newFunc('Permissions', 5, function Permissions() {
//     if (debug) print('Permissions', arguments)
// })

PeriodicSyncManager = newFunc('PeriodicSyncManager', 1, function PeriodicSyncManager() {
    print('PeriodicSyncManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PeriodicSyncManager.prototype, {
    getTags: {

        value: newFunc('getTags', 10, function getTags() {
            if (debug) print('PeriodicSyncManager.getTags.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    register: {

        value: newFunc('register', 10, function register() {
            if (debug) print('PeriodicSyncManager.register.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unregister: {

        value: newFunc('unregister', 10, function unregister() {
            if (debug) print('PeriodicSyncManager.unregister.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('PeriodicSyncManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
PaymentRequestUpdateEvent = newFunc('PaymentRequestUpdateEvent', 1, function PaymentRequestUpdateEvent() {
    print('PaymentRequestUpdateEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PaymentRequestUpdateEvent.prototype, {
    updateWith: {

        value: newFunc('updateWith', 10, function updateWith() {
            if (debug) print('PaymentRequestUpdateEvent.updateWith.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('PaymentRequestUpdateEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


AudioData = newFunc('AudioData', 1, function AudioData() {
    print('AudioData.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioData.prototype, {
    format: {

        get: newFunc('format', 10, function format() {
            let res = mm.memory.private_data.get(this).format;
            if (debug) print('AudioData.format.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sampleRate: {

        get: newFunc('sampleRate', 10, function sampleRate() {
            let res = mm.memory.private_data.get(this).sampleRate;
            if (debug) print('AudioData.sampleRate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfFrames: {

        get: newFunc('numberOfFrames', 10, function numberOfFrames() {
            let res = mm.memory.private_data.get(this).numberOfFrames;
            if (debug) print('AudioData.numberOfFrames.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfChannels: {

        get: newFunc('numberOfChannels', 10, function numberOfChannels() {
            let res = mm.memory.private_data.get(this).numberOfChannels;
            if (debug) print('AudioData.numberOfChannels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    duration: {

        get: newFunc('duration', 10, function duration() {
            let res = mm.memory.private_data.get(this).duration;
            if (debug) print('AudioData.duration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestamp: {

        get: newFunc('timestamp', 10, function timestamp() {
            let res = mm.memory.private_data.get(this).timestamp;
            if (debug) print('AudioData.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    allocationSize: {

        value: newFunc('allocationSize', 10, function allocationSize() {
            if (debug) print('AudioData.allocationSize.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clone: {

        value: newFunc('clone', 10, function clone() {
            if (debug) print('AudioData.clone.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function close() {
            if (debug) print('AudioData.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyTo: {

        value: newFunc('copyTo', 10, function copyTo() {
            if (debug) print('AudioData.copyTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('AudioData.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


let funcsStart = 'Object.defineProperties(window, {'
let funcsList = [];
let funcsENd = '})'
let ps = {};
// !window.hasOwnProperty(p) && funcs.indexOf(p) === -1 && funcs2.indexOf(p) === -1


funcsList = [];
let fff = [];
for (let i of ENV.windowprops.slice(30,)) {
    // let p = ENV.windowprops[i];
    if (!window.hasOwnProperty(i)
        // && i !== 'postMessage' && i !== 'onmessage'
    ) {
        // let rr = `'${i}': {\n`
        // rr += `value: newFunc('${i}',10, function ${i}(){}),`
        // rr += '},'
        // funcsList.push(rr)
        // funcsList.push(`${p}: {`
        //     value: v_saf(function ${p} (){}),
        // },`)
        fff.push(`window.${i} = newFunc('${i}',10, function ${i}(){if(debug)print('${i}.call', arguments)})`)
    }

}
// print(funcsStart + funcsList.join('\n') + funcsENd)
// eval(funcsStart + funcsList.join('\n') + funcsENd)
let aaa = 1;
error_stack = function (stacks) {

    if (stacks.indexOf('rror: Cyclic __proto__ value') === -1
        && stacks.indexOf('..)] is not a function') === -1
        && stacks.indexOf(' of undefined (reading \'catch\')') === -1
        && stacks.indexOf('Cannot read properties of null (') === -1
    ){
        print('stack.callback', typeof stacks, stacks);

    }
    if (stacks.indexOf("Ninjas") > -1) {
        debugger;
    }
    if (stacks.indexOf('Function.prototype.toString requires that \'this\' be a Function') > -1 && stacks.indexOf('at Object.toString') > -1){
        print('stack.change1')
        if (aaa %2 !== 0 ){
            stacks = stacks.replace('at Object.toString ', 'at Function.toString ');
        }
        aaa++;

    }else if (stacks.indexOf('Function.prototype.toString requires that \'this\' be a Function') > -1 && stacks.indexOf('at Function.toString') > -1){
        print('stack.change2')

        stacks = stacks.replace('at Function.toString ', 'at Object.toString ');
    }

    // if (stacks === 'Error') {
    //     debugger
    // }

    // debugger;
    let stack = stacks.split('\n');
    if (stack[0] === 'TypeError: Cannot read properties of null (reading \'0\')') {
        return `TypeError: Cannot read properties of null (reading '0')
    at URL`
    }
    let length = stack.length;
    for (let i = 1; i < length;) {
        if (stack[i].indexOf("    at new globalMy.") === 0 || stack[i].indexOf("    at globalMy.") === 0 || stack[i].indexOf("    at new ") === 0 || stack[i].indexOf(":") < 0 || stack[i].indexOf("./test.js") > -1
           // ||stack[i].indexOf("window.eval ") > -1
        ) {
            stack[i] = stack[i].replace('at eval (eval at window.eval','    at eval (eval at NT')
            length -= 1;
            continue;
        } else if (stack[i].indexOf(`.runInContext (node:`) > -1 || stack[i].indexOf("window.eval ") > -1) {
            let func = /[a-zA-Z0-9]{1,3}\.([a-zA-Z0-9]{1,3})/g.exec(stack[i+1]);
            print(func)
            if (func.length > 1){
                stack[i] = stack[i].replace('at eval (eval at window.eval ', 'at eval (eval at '+ func[1])

            }

            break;
        } else if (stack[i].indexOf('Timeout._onTimeout') > -1){
            stack.splice(i, stack.length - 1);
            break
        }
        i++;
    }
    for (let i = 0; i < stack.length; i++) {
        let r = /:(\d+):/g.exec(stack[i]);
        // print(r)
        if (r !== null) {
            let number = parseInt(r[1]);
            stack[i] = stack[i].replace(':' + number + ':', ':' + (number - scriptEnvLen + 1) + ':')
        }
        // debugger;
    }
    stack = stack.join('\n');
    // vm堆栈改写
    stack = stack.replace(/evalmachine.<anonymous>/g, mm.memory.script_name || "dsadczxf.js").replace(/\(eval at globalMy\.initSource \((.*?)\)/g, '($1');

    // vm2
    // stack = stack.replace(/([\w\d:\\-]+\/setup-sandbox\.js)/g, globalMy.memory.script_name || "dsadczxf.js");
    print("报错堆栈 -> ", stack);
    return stack;
}


// other


// Utils.registerNative('webkitResolveLocalFileSystemURL', 'webkitResolveLocalFileSystemURL')


// onbeforeinstallprompt


delete window.SharedArrayBuffer


// Object.defineProperties(console, {
//     memory: {
//         value: newFunc('memory',3,function memory() {
//         }),
//         enumerable: true,
//         configurable: true,
//         writable: false,
//     }
// })
// MemoryInfo = newFunc('MemoryInfo', 10, function MemoryInfo() {
//
//     })
//
//     ;(function () {
//         const $safe_get_attribute = ['jsHeapSizeLimit', 'totalJSHeapSize', 'usedJSHeapSize'];
//         const $safe_set_attribute = [];
//         const $safe_func_attribute = [];
//
//         MemoryInfo.prototype = {
//             get jsHeapSizeLimit() {
//                 if (!MemoryInfo.prototype.isPrototypeOf(this)) {
//                     throw new TypeError("Illegal constructor");
//                 }
//                 ;
//                 let result = 2330000000;
//                 if (debug) print('Get', 'MemoryInfo', 'jsHeapSizeLimit', arguments, result);
//                 return result;
//             },
//             get totalJSHeapSize() {
//                 if (!MemoryInfo.prototype.isPrototypeOf(this)) {
//                     throw new TypeError("Illegal constructor");
//                 }
//                 ;
//                 let result = 18200000;
//                 if (debug) print('Get', 'MemoryInfo', 'totalJSHeapSize', arguments, result);
//                 return result;
//             },
//             get usedJSHeapSize() {
//                 if (!MemoryInfo.prototype.isPrototypeOf(this)) {
//                     throw new TypeError("Illegal constructor");
//                 }
//                 ;
//                 let result = 15200000;
//                 if (debug) print('Get', 'MemoryInfo', 'usedJSHeapSize', arguments, result);
//                 return result;
//             },
//         }
//         // mm.rename(MemoryInfo.prototype, "MemoryInfo");
//         // mm.safeDescriptor_addConstructor(MemoryInfo);
//         mm.safe_Objattribute(MemoryInfo, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
//     })();
// console_get_memory = function () {
//         return new MemoryInfo()
// }
if (cookie) {
    document.cookie = cookie

}

// Object.defineProperties(window, cas2)

pageXOffset = 0;

//
// let encode = TextEncoder.prototype.encode;
// TextEncoder.prototype.encode = function (v) {
//     print('encode', v)
//     debugger;
//     return encode.call(this, v)
// }


WebGLContextEvent = newFunc('WebGLContextEvent', 1, function () {
    print('WebGLContextEvent.call');
    mm.memory.private_data.set(this, {})
});


;delete WebGLContextEvent.prototype.constructor;
;
Object.defineProperties(WebGLContextEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'WebGLContextEvent'
    },

    'statusMessage': {

        get: newFunc('statusMessage', 10, function () {


            if (!WebGLContextEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['statusMessage'];
            if (debug) print('WebGLContextEvent.statusMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!WebGLContextEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('WebGLContextEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

window.caches = newFunc('caches', 5, function caches() {
    if (debug) print('caches.call', arguments)
})

Worklet = newFunc('Worklet', 1, function () {
    print('Worklet.call');
    mm.memory.private_data.set(this, {})
});


;delete Worklet.prototype.constructor;
;
Object.defineProperties(Worklet.prototype, {
    [Symbol.toStringTag]: {
        value: 'Worklet'
    },

    'addModule': {

        value: newFunc('addModule', 10, function () {

            if (!Worklet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Worklet.addModule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Worklet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Worklet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

AudioWorkletNode = newFunc('AudioWorkletNode', 1, function () {
    print('AudioWorkletNode.call');
    mm.memory.private_data.set(this, {})
});


;delete AudioWorkletNode.prototype.constructor;
;
Object.defineProperties(AudioWorkletNode.prototype, {
    [Symbol.toStringTag]: {
        value: 'AudioWorkletNode'
    },

    'parameters': {

        get: newFunc('parameters', 10, function () {


            if (!AudioWorkletNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['parameters'];
            if (debug) print('AudioWorkletNode.parameters.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'port': {

        get: newFunc('port', 10, function () {


            if (!AudioWorkletNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['port'];
            if (debug) print('AudioWorkletNode.port.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onprocessorerror': {

        get: newFunc('onprocessorerror', 10, function () {


            if (!AudioWorkletNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onprocessorerror'];
            if (debug) print('AudioWorkletNode.onprocessorerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprocessorerror', 1, function (value) {
            if (debug) print('AudioWorkletNode.onprocessorerror.set', value)
            mm.memory.private_data.get(this)['onprocessorerror'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!AudioWorkletNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('AudioWorkletNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
AudioWorklet = newFunc('AudioWorklet', 1, function () {
    print('AudioWorklet.call');
    mm.memory.private_data.set(this, {})
});


;delete AudioWorklet.prototype.constructor;
;
Object.defineProperties(AudioWorklet.prototype, {
    [Symbol.toStringTag]: {
        value: 'AudioWorklet'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!AudioWorklet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('AudioWorklet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


let windows = [
    "Object",
    "Function",
    "Array",
    "Number",
    "parseFloat",
    "parseInt",
    "Infinity",
    "NaN",
    "undefined",
    "Boolean",
    "String",
    "Date",
    "Promise",
    "RegExp",
    "Error",
    "AggregateError",
    "EvalError",
    "RangeError",
    "ReferenceError",
    "SyntaxError",
    "TypeError",
    "URIError",
    "JSON",
    "Math",
    "Intl",
    "ArrayBuffer",
    "Atomics",
    "Uint8Array",
    "Int8Array",
    "Uint16Array",
    "Int16Array",
    "Uint32Array",
    "Int32Array",
    "Float32Array",
    "Float64Array",
    "Uint8ClampedArray",
    "BigUint64Array",
    "BigInt64Array",
    "DataView",
    "Map",
    "BigInt",
    "Set",
    "WeakMap",
    "WeakSet",
    "Proxy",
    "Reflect",
    "FinalizationRegistry",
    "WeakRef",
    "decodeURI",
    "decodeURIComponent",
    "encodeURI",
    "encodeURIComponent",
    "escape",
    "unescape",
    "eval",
    "isFinite",
    "isNaN",
    "console",
    "Option",
    "Image",
    "Audio",
    "webkitURL",
    "webkitRTCPeerConnection",
    "webkitMediaStream",
    "WebKitMutationObserver",
    "WebKitCSSMatrix",
    "XSLTProcessor",
    "XPathResult",
    "XPathExpression",
    "XPathEvaluator",
    "XMLSerializer",
    "XMLHttpRequestUpload",
    "XMLHttpRequestEventTarget",
    "XMLHttpRequest",
    "XMLDocument",
    "WritableStreamDefaultWriter",
    "WritableStreamDefaultController",
    "WritableStream",
    "Worker",
    "Window",
    "WheelEvent",
    "WebSocket",
    "WebGLVertexArrayObject",
    "WebGLUniformLocation",
    "WebGLTransformFeedback",
    "WebGLTexture",
    "WebGLSync",
    "WebGLShaderPrecisionFormat",
    "WebGLShader",
    "WebGLSampler",
    "WebGLRenderingContext",
    "WebGLRenderbuffer",
    "WebGLQuery",
    "WebGLProgram",
    "WebGLFramebuffer",
    "WebGLContextEvent",
    "WebGLBuffer",
    "WebGLActiveInfo",
    "WebGL2RenderingContext",
    "WaveShaperNode",
    "VisualViewport",
    "VirtualKeyboardGeometryChangeEvent",
    "ViewTransition",
    "VideoFrame",
    "VideoColorSpace",
    "ValidityState",
    "VTTCue",
    "UserActivation",
    "URLSearchParams",
    "URLPattern",
    "URL",
    "UIEvent",
    // "TrustedTypePolicyFactory",
    "TrustedTypePolicy",
    "TrustedScriptURL",
    "TrustedScript",
    "TrustedHTML",
    "TreeWalker",
    "TransitionEvent",
    "TransformStreamDefaultController",
    "TransformStream",
    "TrackEvent",
    "TouchList",
    "TouchEvent",
    "Touch",
    "ToggleEvent",
    "TimeRanges",
    "TextTrackList",
    "TextTrackCueList",
    "TextTrackCue",
    "TextTrack",
    "TextMetrics",
    "TextEvent",
    "TextEncoderStream",
    "TextEncoder",
    "TextDecoderStream",
    "TextDecoder",
    "Text",
    "TaskSignal",
    "TaskPriorityChangeEvent",
    "TaskController",
    "TaskAttributionTiming",
    "SyncManager",
    "SubmitEvent",
    "StyleSheetList",
    "StyleSheet",
    "StylePropertyMapReadOnly",
    "StylePropertyMap",
    "StorageEvent",
    "Storage",
    // "StereoPannerNode",
    "StaticRange",
    "SourceBufferList",
    "SourceBuffer",
    "ShadowRoot",
    "Selection",
    "SecurityPolicyViolationEvent",
    "ScriptProcessorNode",
    "ScreenOrientation",
    "Screen",
    "Scheduling",
    "Scheduler",
    "SVGViewElement",
    "SVGUseElement",
    "SVGUnitTypes",
    "SVGTransformList",
    "SVGTransform",
    "SVGTitleElement",
    "SVGTextPositioningElement",
    "SVGTextPathElement",
    "SVGTextElement",
    "SVGTextContentElement",
    "SVGTSpanElement",
    "SVGSymbolElement",
    "SVGSwitchElement",
    "SVGStyleElement",
    "SVGStringList",
    "SVGStopElement",
    "SVGSetElement",
    "SVGScriptElement",
    "SVGSVGElement",
    "SVGRectElement",
    "SVGRect",
    "SVGRadialGradientElement",
    "SVGPreserveAspectRatio",
    "SVGPolylineElement",
    "SVGPolygonElement",
    "SVGPointList",
    "SVGPoint",
    "SVGPatternElement",
    "SVGPathElement",
    "SVGNumberList",
    "SVGNumber",
    "SVGMetadataElement",
    "SVGMatrix",
    "SVGMaskElement",
    "SVGMarkerElement",
    "SVGMPathElement",
    "SVGLinearGradientElement",
    "SVGLineElement",
    "SVGLengthList",
    "SVGLength",
    "SVGImageElement",
    "SVGGraphicsElement",
    "SVGGradientElement",
    "SVGGeometryElement",
    "SVGGElement",
    "SVGForeignObjectElement",
    "SVGFilterElement",
    "SVGFETurbulenceElement",
    "SVGFETileElement",
    "SVGFESpotLightElement",
    "SVGFESpecularLightingElement",
    "SVGFEPointLightElement",
    "SVGFEOffsetElement",
    "SVGFEMorphologyElement",
    "SVGFEMergeNodeElement",
    "SVGFEMergeElement",
    "SVGFEImageElement",
    "SVGFEGaussianBlurElement",
    "SVGFEFuncRElement",
    "SVGFEFuncGElement",
    "SVGFEFuncBElement",
    "SVGFEFuncAElement",
    "SVGFEFloodElement",
    "SVGFEDropShadowElement",
    "SVGFEDistantLightElement",
    "SVGFEDisplacementMapElement",
    "SVGFEDiffuseLightingElement",
    "SVGFEConvolveMatrixElement",
    "SVGFECompositeElement",
    "SVGFEComponentTransferElement",
    "SVGFEColorMatrixElement",
    "SVGFEBlendElement",
    "SVGEllipseElement",
    "SVGElement",
    "SVGDescElement",
    "SVGDefsElement",
    "SVGComponentTransferFunctionElement",
    "SVGClipPathElement",
    "SVGCircleElement",
    "SVGAnimationElement",
    "SVGAnimatedTransformList",
    "SVGAnimatedString",
    "SVGAnimatedRect",
    "SVGAnimatedPreserveAspectRatio",
    "SVGAnimatedNumberList",
    "SVGAnimatedNumber",
    "SVGAnimatedLengthList",
    "SVGAnimatedLength",
    "SVGAnimatedInteger",
    "SVGAnimatedEnumeration",
    "SVGAnimatedBoolean",
    "SVGAnimatedAngle",
    "SVGAnimateTransformElement",
    "SVGAnimateMotionElement",
    "SVGAnimateElement",
    "SVGAngle",
    "SVGAElement",
    "Response",
    "ResizeObserverSize",
    "ResizeObserverEntry",
    "ResizeObserver",
    "Request",
    "ReportingObserver",
    "ReadableStreamDefaultReader",
    "ReadableStreamDefaultController",
    "ReadableStreamBYOBRequest",
    "ReadableStreamBYOBReader",
    "ReadableStream",
    "ReadableByteStreamController",
    "Range",
    "RadioNodeList",
    "RTCTrackEvent",
    "RTCStatsReport",
    "RTCSessionDescription",
    "RTCSctpTransport",
    "RTCRtpTransceiver",
    "RTCRtpSender",
    "RTCRtpReceiver",
    "RTCPeerConnectionIceEvent",
    "RTCPeerConnectionIceErrorEvent",
    "RTCPeerConnection",
    "RTCIceTransport",
    "RTCIceCandidate",
    "RTCErrorEvent",
    "RTCError",
    "RTCEncodedVideoFrame",
    "RTCEncodedAudioFrame",
    "RTCDtlsTransport",
    "RTCDataChannelEvent",
    "RTCDataChannel",
    "RTCDTMFToneChangeEvent",
    "RTCDTMFSender",
    "RTCCertificate",
    "PromiseRejectionEvent",
    "ProgressEvent",
    "Profiler",
    "ProcessingInstruction",
    "PopStateEvent",
    "PointerEvent",
    "PluginArray",
    "Plugin",
    "PictureInPictureWindow",
    "PictureInPictureEvent",
    "PeriodicWave",
    "PerformanceTiming",
    "PerformanceServerTiming",
    "PerformanceResourceTiming",
    "PerformancePaintTiming",
    "PerformanceObserverEntryList",
    "PerformanceObserver",
    "PerformanceNavigationTiming",
    "PerformanceNavigation",
    "PerformanceMeasure",
    "PerformanceMark",
    "PerformanceLongTaskTiming",
    "PerformanceEventTiming",
    "PerformanceEntry",
    "PerformanceElementTiming",
    "Performance",
    "Path2D",
    "PannerNode",
    "PageTransitionEvent",
    "OverconstrainedError",
    "OscillatorNode",
    "OffscreenCanvasRenderingContext2D",
    "OffscreenCanvas",
    "OfflineAudioContext",
    "OfflineAudioCompletionEvent",
    "NodeList",
    "NodeIterator",
    "NodeFilter",
    "Node",
    "NetworkInformation",
    "Navigator",
    "NavigationTransition",
    "NavigationHistoryEntry",
    "NavigationDestination",
    "NavigationCurrentEntryChangeEvent",
    "Navigation",
    "NavigateEvent",
    "NamedNodeMap",
    "MutationRecord",
    "MutationObserver",
    "MouseEvent",
    "MimeTypeArray",
    "MimeType",
    "MessagePort",
    "MessageEvent",
    "MessageChannel",
    "MediaStreamTrackVideoStats",
    "MediaStreamTrackProcessor",
    "MediaStreamTrackGenerator",
    "MediaStreamTrackEvent",
    "MediaStreamTrack",
    "MediaStreamEvent",
    "MediaStreamAudioSourceNode",
    "MediaStreamAudioDestinationNode",
    "MediaStream",
    "MediaSourceHandle",
    "MediaSource",
    "MediaRecorder",
    "MediaQueryListEvent",
    "MediaQueryList",
    "MediaList",
    "MediaError",
    "MediaEncryptedEvent",
    "MediaElementAudioSourceNode",
    "MediaCapabilities",
    "MathMLElement",
    "Location",
    "LayoutShiftAttribution",
    "LayoutShift",
    "LargestContentfulPaint",
    "KeyframeEffect",
    "KeyboardEvent",
    "IntersectionObserverEntry",
    // "IntersectionObserver",
    "InputEvent",
    "InputDeviceInfo",
    "InputDeviceCapabilities",
    "ImageTrackList",
    "ImageTrack",
    "ImageData",
    "ImageCapture",
    "ImageBitmapRenderingContext",
    "ImageBitmap",
    "IdleDeadline",
    "IIRFilterNode",
    "IDBVersionChangeEvent",
    "IDBTransaction",
    "IDBRequest",
    "IDBOpenDBRequest",
    "IDBObjectStore",
    "IDBKeyRange",
    "IDBIndex",
    "IDBFactory",
    // "IDBDatabase",
    "IDBCursorWithValue",
    "IDBCursor",
    "History",
    "Headers",
    "HashChangeEvent",
    "HTMLVideoElement",
    "HTMLUnknownElement",
    "HTMLUListElement",
    "HTMLTrackElement",
    "HTMLTitleElement",
    "HTMLTimeElement",
    "HTMLTextAreaElement",
    "HTMLTemplateElement",
    "HTMLTableSectionElement",
    "HTMLTableRowElement",
    "HTMLTableElement",
    "HTMLTableColElement",
    "HTMLTableCellElement",
    "HTMLTableCaptionElement",
    "HTMLStyleElement",
    "HTMLSpanElement",
    "HTMLSourceElement",
    "HTMLSlotElement",
    "HTMLSelectElement",
    "HTMLScriptElement",
    "HTMLQuoteElement",
    "HTMLProgressElement",
    "HTMLPreElement",
    "HTMLPictureElement",
    "HTMLParamElement",
    "HTMLParagraphElement",
    "HTMLOutputElement",
    "HTMLOptionsCollection",
    "HTMLOptionElement",
    "HTMLOptGroupElement",
    "HTMLObjectElement",
    "HTMLOListElement",
    "HTMLModElement",
    "HTMLMeterElement",
    "HTMLMetaElement",
    "HTMLMenuElement",
    "HTMLMediaElement",
    "HTMLMarqueeElement",
    "HTMLMapElement",
    "HTMLLinkElement",
    "HTMLLegendElement",
    "HTMLLabelElement",
    "HTMLLIElement",
    "HTMLInputElement",
    "HTMLImageElement",
    "HTMLIFrameElement",
    "HTMLHtmlElement",
    "HTMLHeadingElement",
    "HTMLHeadElement",
    "HTMLHRElement",
    "HTMLFrameSetElement",
    "HTMLFrameElement",
    "HTMLFormElement",
    "HTMLFormControlsCollection",
    "HTMLFontElement",
    "HTMLFieldSetElement",
    "HTMLEmbedElement",
    "HTMLElement",
    "HTMLDocument",
    "HTMLDivElement",
    "HTMLDirectoryElement",
    "HTMLDialogElement",
    "HTMLDetailsElement",
    "HTMLDataListElement",
    "HTMLDataElement",
    "HTMLDListElement",
    "HTMLCollection",
    "HTMLCanvasElement",
    "HTMLButtonElement",
    "HTMLBodyElement",
    "HTMLBaseElement",
    "HTMLBRElement",
    "HTMLAudioElement",
    "HTMLAreaElement",
    "HTMLAnchorElement",
    "HTMLAllCollection",
    "GeolocationPositionError",
    "GeolocationPosition",
    "GeolocationCoordinates",
    "Geolocation",
    "GamepadHapticActuator",
    "GamepadEvent",
    "GamepadButton",
    "Gamepad",
    "GainNode",
    "FormDataEvent",
    "FormData",
    "FontFaceSetLoadEvent",
    "FontFace",
    "FocusEvent",
    "FileReader",
    "FileList",
    "File",
    "FeaturePolicy",
    "External",
    "EventTarget",
    "EventSource",
    "EventCounts",
    "Event",
    "ErrorEvent",
    "EncodedVideoChunk",
    "EncodedAudioChunk",
    "ElementInternals",
    "Element",
    "DynamicsCompressorNode",
    "DragEvent",
    "DocumentType",
    "DocumentFragment",
    "Document",
    "DelayNode",
    "DecompressionStream",
    "DataTransferItemList",
    "DataTransferItem",
    "DataTransfer",
    "DOMTokenList",
    "DOMStringMap",
    "DOMStringList",
    "DOMRectReadOnly",
    "DOMRectList",
    "DOMRect",
    "DOMQuad",
    "DOMPointReadOnly",
    "DOMPoint",
    "DOMParser",
    "DOMMatrixReadOnly",
    "DOMMatrix",
    "DOMImplementation",
    "DOMException",
    "DOMError",
    "CustomStateSet",
    "CustomEvent",
    "CustomElementRegistry",
    "Crypto",
    "CountQueuingStrategy",
    "ConvolverNode",
    "ConstantSourceNode",
    "CompressionStream",
    "CompositionEvent",
    "Comment",
    "CloseEvent",
    "ClipboardEvent",
    "CharacterData",
    "ChannelSplitterNode",
    "ChannelMergerNode",
    // "CanvasRenderingContext2D",
    "CanvasPattern",
    "CanvasGradient",
    "CanvasCaptureMediaStreamTrack",
    "CSSVariableReferenceValue",
    "CSSUnparsedValue",
    "CSSUnitValue",
    "CSSTranslate",
    "CSSTransformValue",
    "CSSTransformComponent",
    "CSSSupportsRule",
    "CSSStyleValue",
    "CSSStyleSheet",
    "CSSStyleRule",
    "CSSStyleDeclaration",
    "CSSSkewY",
    "CSSSkewX",
    "CSSSkew",
    "CSSScale",
    "CSSRuleList",
    "CSSRule",
    "CSSRotate",
    "CSSPropertyRule",
    "CSSPositionValue",
    "CSSPerspective",
    "CSSPageRule",
    "CSSNumericValue",
    "CSSNumericArray",
    "CSSNamespaceRule",
    "CSSMediaRule",
    "CSSMatrixComponent",
    "CSSMathValue",
    "CSSMathSum",
    "CSSMathProduct",
    "CSSMathNegate",
    "CSSMathMin",
    "CSSMathMax",
    "CSSMathInvert",
    "CSSMathClamp",
    "CSSLayerStatementRule",
    "CSSLayerBlockRule",
    "CSSKeywordValue",
    "CSSKeyframesRule",
    "CSSKeyframeRule",
    "CSSImportRule",
    "CSSImageValue",
    "CSSGroupingRule",
    "CSSFontPaletteValuesRule",
    "CSSFontFaceRule",
    "CSSCounterStyleRule",
    "CSSContainerRule",
    "CSSConditionRule",
    "CSS",
    "CDATASection",
    "ByteLengthQueuingStrategy",
    "BroadcastChannel",
    "BlobEvent",
    "Blob",
    "BiquadFilterNode",
    "BeforeUnloadEvent",
    "BeforeInstallPromptEvent",
    "BaseAudioContext",
    "BarProp",
    "AudioWorkletNode",
    "AudioSinkInfo",
    "AudioScheduledSourceNode",
    "AudioProcessingEvent",
    "AudioParamMap",
    "AudioParam",
    "AudioNode",
    "AudioListener",
    "AudioDestinationNode",
    "AudioData",
    "AudioContext",
    "AudioBufferSourceNode",
    "AudioBuffer",
    "Attr",
    "AnimationEvent",
    "AnimationEffect",
    "Animation",
    "AnalyserNode",
    "AbstractRange",
    "AbortSignal",
    "AbortController",
    "document",
    "name",
    "location",
    "customElements",
    "history",
    "navigation",
    "locationbar",
    "menubar",
    "personalbar",
    "scrollbars",
    "statusbar",
    "toolbar",
    "status",
    "closed",
    "frames",
    "length",
    "opener",
    "parent",
    "frameElement",
    "navigator",
    "origin",
    "external",
    "screen",
    "innerWidth",
    "innerHeight",
    "scrollX",
    "pageXOffset",
    "scrollY",
    "pageYOffset",
    "visualViewport",
    "screenX",
    "screenY",
    "outerWidth",
    "outerHeight",
    "devicePixelRatio",
    "event",
    "clientInformation",
    "offscreenBuffering",
    "screenLeft",
    "screenTop",
    "styleMedia",
    "onsearch",
    "isSecureContext",
    "trustedTypes",
    "performance",
    "onappinstalled",
    "onbeforeinstallprompt",
    "crypto",
    "indexedDB",
    "sessionStorage",
    "localStorage",
    "onbeforexrselect",
    "onabort",
    "onbeforeinput",
    "onbeforetoggle",
    "onblur",
    "oncancel",
    "oncanplay",
    "oncanplaythrough",
    "onchange",
    "onclick",
    "onclose",
    "oncontextlost",
    "oncontextmenu",
    "oncontextrestored",
    "oncuechange",
    "ondblclick",
    "ondrag",
    "ondragend",
    "ondragenter",
    "ondragleave",
    "ondragover",
    "ondragstart",
    "ondrop",
    "ondurationchange",
    "onemptied",
    "onended",
    "onerror",
    "onfocus",
    "onformdata",
    "oninput",
    "oninvalid",
    "onkeydown",
    "onkeypress",
    "onkeyup",
    "onload",
    "onloadeddata",
    "onloadedmetadata",
    "onloadstart",
    "onmousedown",
    "onmouseenter",
    "onmouseleave",
    "onmousemove",
    "onmouseout",
    "onmouseover",
    "onmouseup",
    "onmousewheel",
    "onpause",
    "onplay",
    "onplaying",
    "onprogress",
    "onratechange",
    "onreset",
    "onresize",
    "onscroll",
    "onsecuritypolicyviolation",
    "onseeked",
    "onseeking",
    "onselect",
    "onslotchange",
    "onstalled",
    "onsubmit",
    "onsuspend",
    "ontimeupdate",
    "ontoggle",
    "onvolumechange",
    "onwaiting",
    "onwebkitanimationend",
    "onwebkitanimationiteration",
    "onwebkitanimationstart",
    "onwebkittransitionend",
    "onwheel",
    "onauxclick",
    "ongotpointercapture",
    "onlostpointercapture",
    "onpointerdown",
    "onpointermove",
    "onpointerrawupdate",
    "onpointerup",
    "onpointercancel",
    "onpointerover",
    "onpointerout",
    "onpointerenter",
    "onpointerleave",
    "onselectstart",
    "onselectionchange",
    "onanimationend",
    "onanimationiteration",
    "onanimationstart",
    "ontransitionrun",
    "ontransitionstart",
    "ontransitionend",
    "ontransitioncancel",
    "onafterprint",
    "onbeforeprint",
    "onbeforeunload",
    "onhashchange",
    "onlanguagechange",
    "onmessage",
    "onmessageerror",
    "onoffline",
    "ononline",
    "onpagehide",
    "onpageshow",
    "onpopstate",
    "onrejectionhandled",
    "onstorage",
    "onunhandledrejection",
    "onunload",
    "crossOriginIsolated",
    "scheduler",
    "alert",
    "atob",
    "blur",
    "btoa",
    "cancelAnimationFrame",
    "cancelIdleCallback",
    "captureEvents",
    "clearInterval",
    "clearTimeout",
    "close",
    "confirm",
    "createImageBitmap",
    "fetch",
    "find",
    "focus",
    "getComputedStyle",
    "getSelection",
    "matchMedia",
    "moveBy",
    "moveTo",
    "open",
    "postMessage",
    "print",
    "prompt",
    "queueMicrotask",
    "releaseEvents",
    "reportError",
    // "requestAnimationFrame",
    // "requestIdleCallback",
    "resizeBy",
    "resizeTo",
    "scroll",
    "scrollBy",
    "scrollTo",
    "setInterval",
    "setTimeout",
    "stop",
    "structuredClone",
    "webkitCancelAnimationFrame",
    "webkitRequestAnimationFrame",
    "chrome",
    "WebAssembly",
    "fence",
    "caches",
    "cookieStore",
    "ondevicemotion",
    "ondeviceorientation",
    "ondeviceorientationabsolute",
    "launchQueue",
    "sharedStorage",
    "documentPictureInPicture",
    "onbeforematch",
    "AbsoluteOrientationSensor",
    "Accelerometer",
    "AudioDecoder",
    "AudioEncoder",
    "AudioWorklet",
    "BatteryManager",
    "Cache",
    "CacheStorage",
    "Clipboard",
    "ClipboardItem",
    "CookieChangeEvent",
    "CookieStore",
    "CookieStoreManager",
    "Credential",
    "CredentialsContainer",
    "CryptoKey",
    "DeviceMotionEvent",
    "DeviceMotionEventAcceleration",
    "DeviceMotionEventRotationRate",
    "DeviceOrientationEvent",
    "FederatedCredential",
    "GPU",
    "GPUAdapter",
    "GPUAdapterInfo",
    "GPUBindGroup",
    "GPUBindGroupLayout",
    "GPUBuffer",
    "GPUBufferUsage",
    "GPUCanvasContext",
    "GPUColorWrite",
    "GPUCommandBuffer",
    "GPUCommandEncoder",
    "GPUCompilationInfo",
    "GPUCompilationMessage",
    "GPUComputePassEncoder",
    "GPUComputePipeline",
    "GPUDevice",
    "GPUDeviceLostInfo",
    "GPUError",
    "GPUExternalTexture",
    "GPUInternalError",
    "GPUMapMode",
    "GPUOutOfMemoryError",
    "GPUPipelineError",
    "GPUPipelineLayout",
    "GPUQuerySet",
    "GPUQueue",
    "GPURenderBundle",
    "GPURenderBundleEncoder",
    "GPURenderPassEncoder",
    "GPURenderPipeline",
    "GPUSampler",
    "GPUShaderModule",
    "GPUShaderStage",
    "GPUSupportedFeatures",
    "GPUSupportedLimits",
    "GPUTexture",
    "GPUTextureUsage",
    "GPUTextureView",
    "GPUUncapturedErrorEvent",
    "GPUValidationError",
    "GravitySensor",
    "Gyroscope",
    "ImageDecoder",
    "Keyboard",
    "KeyboardLayoutMap",
    "LinearAccelerationSensor",
    "Lock",
    "LockManager",
    "MIDIAccess",
    "MIDIConnectionEvent",
    "MIDIInput",
    "MIDIInputMap",
    "MIDIMessageEvent",
    "MIDIOutput",
    "MIDIOutputMap",
    "MIDIPort",
    "MediaDeviceInfo",
    // "MediaDevices",
    "MediaKeyMessageEvent",
    "MediaKeySession",
    "MediaKeyStatusMap",
    "MediaKeySystemAccess",
    "MediaKeys",
    "NavigationPreloadManager",
    "NavigatorManagedData",
    "OrientationSensor",
    "PasswordCredential",
    "RelativeOrientationSensor",
    "ScreenDetailed",
    "ScreenDetails",
    "Sensor",
    "SensorErrorEvent",
    "ServiceWorker",
    "ServiceWorkerContainer",
    "ServiceWorkerRegistration",
    "StorageManager",
    "SubtleCrypto",
    "VideoDecoder",
    "VideoEncoder",
    "VirtualKeyboard",
    "WGSLLanguageFeatures",
    "WebTransport",
    "WebTransportBidirectionalStream",
    "WebTransportDatagramDuplexStream",
    "WebTransportError",
    "Worklet",
    "XRDOMOverlayState",
    "XRLayer",
    "XRWebGLBinding",
    "AuthenticatorAssertionResponse",
    "AuthenticatorAttestationResponse",
    "AuthenticatorResponse",
    "PublicKeyCredential",
    "BarcodeDetector",
    "Bluetooth",
    "BluetoothCharacteristicProperties",
    "BluetoothDevice",
    "BluetoothRemoteGATTCharacteristic",
    "BluetoothRemoteGATTDescriptor",
    "BluetoothRemoteGATTServer",
    "BluetoothRemoteGATTService",
    "CaptureController",
    "DocumentPictureInPicture",
    "EyeDropper",
    "Fence",
    "FencedFrameConfig",
    "HTMLFencedFrameElement",
    "FileSystemDirectoryHandle",
    "FileSystemFileHandle",
    "FileSystemHandle",
    "FileSystemWritableFileStream",
    "FontData",
    "FragmentDirective",
    "HID",
    "HIDConnectionEvent",
    "HIDDevice",
    "HIDInputReportEvent",
    "IdentityCredential",
    "IdentityProvider",
    "IdentityCredentialError",
    "IdleDetector",
    "LaunchParams",
    "LaunchQueue",
    "Mojo",
    "MojoHandle",
    "MojoWatcher",
    "NavigatorLogin",
    "OTPCredential",
    "PaymentAddress",
    "PaymentRequest",
    "PaymentResponse",
    "PaymentMethodChangeEvent",
    "Presentation",
    "PresentationAvailability",
    "PresentationConnection",
    "PresentationConnectionAvailableEvent",
    "PresentationConnectionCloseEvent",
    "PresentationConnectionList",
    "PresentationReceiver",
    "PresentationRequest",
    "Serial",
    "SerialPort",
    "SharedStorage",
    "SharedStorageWorklet",
    "USB",
    "USBAlternateInterface",
    "USBConfiguration",
    "USBConnectionEvent",
    "USBDevice",
    "USBEndpoint",
    "USBInTransferResult",
    "USBInterface",
    "USBIsochronousInTransferPacket",
    "USBIsochronousInTransferResult",
    "USBIsochronousOutTransferPacket",
    "USBIsochronousOutTransferResult",
    "USBOutTransferResult",
    "WakeLock",
    "WakeLockSentinel",
    "WindowControlsOverlay",
    "WindowControlsOverlayGeometryChangeEvent",
    "XRAnchor",
    "XRAnchorSet",
    "XRBoundedReferenceSpace",
    "XRCPUDepthInformation",
    "XRCamera",
    "XRDepthInformation",
    "XRFrame",
    "XRHitTestResult",
    "XRHitTestSource",
    "XRInputSource",
    "XRInputSourceArray",
    "XRInputSourceEvent",
    "XRInputSourcesChangeEvent",
    "XRLightEstimate",
    "XRLightProbe",
    "XRPose",
    "XRRay",
    "XRReferenceSpace",
    "XRReferenceSpaceEvent",
    "XRRenderState",
    "XRRigidTransform",
    "XRSession",
    "XRSessionEvent",
    "XRSpace",
    "XRSystem",
    "XRTransientInputHitTestResult",
    "XRTransientInputHitTestSource",
    "XRView",
    "XRViewerPose",
    "XRViewport",
    "XRWebGLDepthInformation",
    "XRWebGLLayer",
    "getScreenDetails",
    "queryLocalFonts",
    "showDirectoryPicker",
    "showOpenFilePicker",
    "showSaveFilePicker",
    "originAgentCluster",
    "credentialless",
    "speechSynthesis",
    "oncontentvisibilityautostatechange",
    "onscrollend",
    "AnimationPlaybackEvent",
    "AnimationTimeline",
    "CSSAnimation",
    "CSSTransition",
    "DocumentTimeline",
    "BackgroundFetchManager",
    "BackgroundFetchRecord",
    "BackgroundFetchRegistration",
    "BluetoothUUID",
    "BrowserCaptureMediaStreamTrack",
    "CropTarget",
    "CSSScopeRule",
    "CSSStartingStyleRule",
    "ContentVisibilityAutoStateChangeEvent",
    "DelegatedInkTrailPresenter",
    "Ink",
    "DocumentPictureInPictureEvent",
    "Highlight",
    "HighlightRegistry",
    "MediaMetadata",
    "MediaSession",
    "MutationEvent",
    "NavigatorUAData",
    "Notification",
    "PaymentManager",
    "PaymentRequestUpdateEvent",
    "PeriodicSyncManager",
    "PermissionStatus",
    "Permissions",
    "PushManager",
    "PushSubscription",
    "PushSubscriptionOptions",
    "RemotePlayback",
    "ScrollTimeline",
    "ViewTimeline",
    "SharedWorker",
    "SpeechSynthesisErrorEvent",
    "SpeechSynthesisEvent",
    "SpeechSynthesisUtterance",
    "VideoPlaybackQuality",
    "VisibilityStateEntry",
    "webkitSpeechGrammar",
    "webkitSpeechGrammarList",
    "webkitSpeechRecognition",
    "webkitSpeechRecognitionError",
    "webkitSpeechRecognitionEvent",
    "webkitRequestFileSystem",
    "webkitResolveLocalFileSystemURL",
    "JSCompiler_renameProperty",
    "dir",
    "dirxml",
    "profile",
    "profileEnd",
    "clear",
    "table",
    "keys",
    "values",
    "debug",
    "undebug",
    "monitor",
    "unmonitor",
    "inspect",
    "copy",
    "queryObjects",
    "$_",
    "$0",
    "$1",
    "$2",
    "$3",
    "$4",
    "getEventListeners",
    "getAccessibleName",
    "getAccessibleRole",
    "monitorEvents",
    "unmonitorEvents",
    "$",
    "$$",
    "$x"
];
;
;
;

// windows.forEach(e=>{
//     if (!window.hasOwnProperty(e) || typeof window[e] === undefined){
//         Object.defineProperty(window, e, {
//             value: newFunc(e, 4, function (){
//                 print(`window.${e}.call`, arguments)
//             })
//         })
//         // print(e, window.hasOwnProperty(e), typeof window[e])
//         // print(e, eval(e))
//     }
// })

requestAnimationFrame = newFunc('requestAnimationFrame', 10, function (a, b, c) {
    print('requestAnimationFrame.call', a, b, c)
    if (typeof a !== 'function') {
        throw new TypeError('Failed to execute \'requestAnimationFrame\' on \'Window\': parameter 1 is not of type \'Function\'.')
    }
    // setTimeout(function (e) {
    //     a(1576030.6)
    // }, 1000/60)
})


IDBDatabase = newFunc('IDBDatabase', 1, function () {
    print('IDBDatabase.call');
    mm.memory.private_data.set(this, {})
});


;delete IDBDatabase.prototype.constructor;
;
Object.defineProperties(IDBDatabase.prototype, {
    [Symbol.toStringTag]: {
        value: 'IDBDatabase'
    },

    'name': {

        get: newFunc('name', 10, function () {


            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['name'];
            if (debug) print('IDBDatabase.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'version': {

        get: newFunc('version', 10, function () {


            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['version'];
            if (debug) print('IDBDatabase.version.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'objectStoreNames': {

        get: newFunc('objectStoreNames', 10, function () {


            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['objectStoreNames'];
            if (debug) print('IDBDatabase.objectStoreNames.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onabort': {

        get: newFunc('onabort', 10, function () {


            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onabort'];
            if (debug) print('IDBDatabase.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function (value) {
            if (debug) print('IDBDatabase.onabort.set', value)
            mm.memory.private_data.get(this)['onabort'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onclose': {

        get: newFunc('onclose', 10, function () {


            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onclose'];
            if (debug) print('IDBDatabase.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function (value) {
            if (debug) print('IDBDatabase.onclose.set', value)
            mm.memory.private_data.get(this)['onclose'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onerror': {

        get: newFunc('onerror', 10, function () {


            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onerror'];
            if (debug) print('IDBDatabase.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('IDBDatabase.onerror.set', value)
            mm.memory.private_data.get(this)['onerror'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onversionchange': {

        get: newFunc('onversionchange', 10, function () {


            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onversionchange'];
            if (debug) print('IDBDatabase.onversionchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onversionchange', 1, function (value) {
            if (debug) print('IDBDatabase.onversionchange.set', value)
            mm.memory.private_data.get(this)['onversionchange'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'close': {

        value: newFunc('close', 10, function () {

            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IDBDatabase.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createObjectStore': {

        value: newFunc('createObjectStore', 10, function () {

            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IDBDatabase.createObjectStore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'deleteObjectStore': {

        value: newFunc('deleteObjectStore', 10, function () {

            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IDBDatabase.deleteObjectStore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'transaction': {

        value: newFunc('transaction', 10, function () {

            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IDBDatabase.transaction.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!IDBDatabase.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IDBDatabase.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


TrustedTypePolicy = newFunc('TrustedTypePolicy', 1, function TrustedTypePolicy(policyName, policyOptions) {
    mm.memory.private_data.set(this, {
        policyName, policyOptions
    })
})


Object.defineProperties(TrustedTypePolicy.prototype, {
    name: {

        get: newFunc('name', 10, function name() {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('TrustedTypePolicy.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    createHTML: {

        value: newFunc('createHTML', 10, function createHTML() {
            if (debug) print('TrustedTypePolicy.createHTML.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createScript: {

        value: newFunc('createScript', 10, function createScript(v) {
            // if (debug)
            print('TrustedTypePolicy.createScript.call', arguments)
            let convertScript = mm.memory.private_data.get(this).policyOptions.createScript
            // let replaceStr = 'K=function(B,R,h)'
            // if (typeof v === 'string' && v.includes(replaceStr) && v.length < 10000){
            //     v = v.replace('K=function(B,R,h){', 'K=function(B,R,h){if(typeof h !== "number")print(h);')
            // }
            print(v)
            let res = convertScript(v)
            if (typeof res === 'function') {
                res = new Proxy(res, {
                    get(target, p, receiver) {
                        // console.log('script.res.get', p)
                        return Reflect.get(target, p, receiver)
                    }
                })
            }
            // if (debug) print('TrustedTypePolicy.createScript.call', res)

            return res;

        }), writable: true, enumerable: true, configurable: true,


    },
    createScriptURL: {

        value: newFunc('createScriptURL', 10, function createScriptURL() {
            if (debug) print('TrustedTypePolicy.createScriptURL.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!TrustedTypePolicy.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('TrustedTypePolicy.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },

})


TrustedTypePolicyFactory = newFunc('TrustedTypePolicyFactory', 1, function TrustedTypePolicyFactory() {
    print('TrustedTypePolicyFactory.call')
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TrustedTypePolicyFactory.prototype, {
    emptyHTML: {

        get: newFunc('emptyHTML', 10, function emptyHTML() {
            let res = mm.memory.private_data.get(this).emptyHTML || '';
            if (debug) print('TrustedTypePolicyFactory.emptyHTML.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    emptyScript: {

        get: newFunc('emptyScript', 10, function emptyScript() {
            let res = mm.memory.private_data.get(this).emptyScript;
            if (debug) print('TrustedTypePolicyFactory.emptyScript.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    defaultPolicy: {

        get: newFunc('defaultPolicy', 10, function defaultPolicy() {
            let res = mm.memory.private_data.get(this).defaultPolicy;
            if (debug) print('TrustedTypePolicyFactory.defaultPolicy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    createPolicy: {

        value: newFunc('createPolicy', 10, function createPolicy(policyName, policyOptions) {
            if (debug) print('TrustedTypePolicyFactory.createPolicy.call', arguments)
            // mm.memory.private_data.get(this).policyOptions = policyOptions
            // mm.memory.private_data.get(this).policyName = policyName
            return new TrustedTypePolicy(policyName, policyOptions)


        }), writable: true, enumerable: true, configurable: true,


    },
    getAttributeType: {

        value: newFunc('getAttributeType', 10, function getAttributeType() {
            if (debug) print('TrustedTypePolicyFactory.getAttributeType.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getPropertyType: {

        value: newFunc('getPropertyType', 10, function getPropertyType() {
            if (debug) print('TrustedTypePolicyFactory.getPropertyType.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTypeMapping: {

        value: newFunc('getTypeMapping', 10, function getTypeMapping() {
            if (debug) print('TrustedTypePolicyFactory.getTypeMapping.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isHTML: {

        value: newFunc('isHTML', 10, function isHTML() {
            if (debug) print('TrustedTypePolicyFactory.isHTML.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isScript: {

        value: newFunc('isScript', 10, function isScript() {
            if (debug) print('TrustedTypePolicyFactory.isScript.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isScriptURL: {

        value: newFunc('isScriptURL', 10, function isScriptURL() {
            if (debug) print('TrustedTypePolicyFactory.isScriptURL.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!TrustedTypePolicyFactory.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('TrustedTypePolicyFactory.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },

})

window.trustedTypes = new TrustedTypePolicyFactory()
// window.MediaDevices = newFunc('MediaDevices', 10, function () {
//     print('MediaDevices.call', arguments)
// })
window.ServiceWorkerRegistration = newFunc('ServiceWorkerRegistration', 1, function ServiceWorkerRegistration() {
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ServiceWorkerRegistration.prototype, {
    installing: {

        get: newFunc('installing', 10, function installing() {
            let res = mm.memory.private_data.get(this).installing;
            if (debug) print('ServiceWorkerRegistration.installing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    waiting: {

        get: newFunc('waiting', 10, function waiting() {
            let res = mm.memory.private_data.get(this).waiting;
            if (debug) print('ServiceWorkerRegistration.waiting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    active: {

        get: newFunc('active', 10, function active() {
            let res = mm.memory.private_data.get(this).active;
            if (debug) print('ServiceWorkerRegistration.active.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    navigationPreload: {

        get: newFunc('navigationPreload', 10, function navigationPreload() {
            let res = mm.memory.private_data.get(this).navigationPreload;
            if (debug) print('ServiceWorkerRegistration.navigationPreload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    scope: {

        get: newFunc('scope', 10, function scope() {
            let res = mm.memory.private_data.get(this).scope;
            if (debug) print('ServiceWorkerRegistration.scope.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    updateViaCache: {

        get: newFunc('updateViaCache', 10, function updateViaCache() {
            let res = mm.memory.private_data.get(this).updateViaCache;
            if (debug) print('ServiceWorkerRegistration.updateViaCache.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onupdatefound: {

        get: newFunc('onupdatefound', 10, function onupdatefound() {
            let res = mm.memory.private_data.get(this).onupdatefound;
            if (debug) print('ServiceWorkerRegistration.onupdatefound.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onupdatefound', 1, function onupdatefound(value) {
            if (debug) print('ServiceWorkerRegistration.onupdatefound.set', value)
            mm.memory.private_data.get(this).onupdatefound = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    unregister: {

        value: newFunc('unregister', 10, function unregister() {
            if (debug) print('ServiceWorkerRegistration.unregister.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    update: {

        value: newFunc('update', 10, function update() {
            if (debug) print('ServiceWorkerRegistration.update.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    paymentManager: {

        get: newFunc('paymentManager', 10, function paymentManager() {
            let res = mm.memory.private_data.get(this).paymentManager;
            if (debug) print('ServiceWorkerRegistration.paymentManager.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('ServiceWorkerRegistration.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    backgroundFetch: {

        get: newFunc('backgroundFetch', 10, function backgroundFetch() {
            let res = mm.memory.private_data.get(this).backgroundFetch;
            if (debug) print('ServiceWorkerRegistration.backgroundFetch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    periodicSync: {

        get: newFunc('periodicSync', 10, function periodicSync() {
            let res = mm.memory.private_data.get(this).periodicSync;
            if (debug) print('ServiceWorkerRegistration.periodicSync.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sync: {

        get: newFunc('sync', 10, function sync() {
            let res = mm.memory.private_data.get(this).sync;
            if (debug) print('ServiceWorkerRegistration.sync.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cookies: {

        get: newFunc('cookies', 10, function cookies() {
            let res = mm.memory.private_data.get(this).cookies;
            if (debug) print('ServiceWorkerRegistration.cookies.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pushManager: {

        get: newFunc('pushManager', 10, function pushManager() {
            let res = mm.memory.private_data.get(this).pushManager;
            if (debug) print('ServiceWorkerRegistration.pushManager.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getNotifications: {

        value: newFunc('getNotifications', 10, function getNotifications() {
            if (debug) print('ServiceWorkerRegistration.getNotifications.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    showNotification: {

        value: newFunc('showNotification', 10, function showNotification() {
            if (debug) print('ServiceWorkerRegistration.showNotification.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})


PictureInPictureWindow = newFunc('PictureInPictureWindow', 1, function () {
    print('PictureInPictureWindow.call');
    mm.memory.private_data.set(this, {})
});


;delete PictureInPictureWindow.prototype.constructor;
;
Object.defineProperties(PictureInPictureWindow.prototype, {


    'width': {

        get: newFunc('width', 10, function () {


            if (!PictureInPictureWindow.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['width'];
            if (debug) print('PictureInPictureWindow.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'height': {

        get: newFunc('height', 10, function () {


            if (!PictureInPictureWindow.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['height'];
            if (debug) print('PictureInPictureWindow.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onresize': {

        get: newFunc('onresize', 10, function () {


            if (!PictureInPictureWindow.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onresize'];
            if (debug) print('PictureInPictureWindow.onresize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresize', 1, function (value) {
            if (debug) print('PictureInPictureWindow.onresize.set', value)
            mm.memory.private_data.get(this)['onresize'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!PictureInPictureWindow.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PictureInPictureWindow.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

proxy = function (obj, objname, type) {
    function getMethodHandler(WatchName, target_obj) {
        let methodhandler = {
            apply(target, thisArg, argArray) {
                if (this.target_obj) {
                    thisArg = this.target_obj
                }
                let result = Reflect.apply(target, thisArg, argArray)
                if (target.name !== "toString") {
                    if (WatchName === "window.console") {
                    } else if (result instanceof Promise) {
                        result.then((data) => {
                            print(`[${WatchName}] apply function name is [${target.name}], argArray is `, argArray, `result is `, data);
                        })
                    } else {
                        print(`[${WatchName}] apply function name is [${target.name}], argArray is `, argArray, `result is `, result);
                    }
                } else {
                    print(`[${WatchName}] apply function name is [${target.name}], argArray is `, argArray, `result is `, result);
                }
                return result
            },
            construct(target, argArray, newTarget) {
                var result = Reflect.construct(target, argArray, newTarget)
                print(`[${WatchName}] construct function name is [${target.name}], argArray is `, argArray, `result is `, result);
                return result;
            }
        }
        methodhandler.target_obj = target_obj
        return methodhandler
    }

    function getObjhandler(WatchName) {
        let handler = {
            get(target, propKey, receiver) {
                let result = target[propKey]
                if (result instanceof Object) {
                    if (typeof result === "function") {
                        print(`[${WatchName}] getting propKey is [`, propKey, `] , it is function`)
                        return new Proxy(result, getMethodHandler(WatchName, target))
                    } else {
                        print(`[${WatchName}] getting propKey is [`, propKey, `], result is [`, result, `]`);
                    }
                    return new Proxy(result, getObjhandler(`${WatchName}.${propKey}`))
                }
                if (typeof (propKey) !== "symbol") {
                    print(`[${WatchName}] getting propKey is [`, propKey, `], result is [`, result, `]`);
                }
                return result;
            },
            set(target, propKey, value, receiver) {
                if (value instanceof Object) {
                    print(`[${WatchName}] setting propKey is [`, propKey, `], value is [`, value, `]`);
                } else {
                    print(`[${WatchName}] setting propKey is [`, propKey, `], value is [`, value, `]`);
                }
                try {
                    var result = Reflect.set(target, propKey, value, receiver);
                    return result;
                } catch (e) {
                    // target[propKey] = value;
                    // return value;
                }
            },
            has(target, propKey) {
                var result = Reflect.has(target, propKey);
                print(`[${WatchName}] has propKey [`, propKey, `], result is [`, result, `]`)
                return result;
            },
            deleteProperty(target, propKey) {
                var result = Reflect.deleteProperty(target, propKey);
                print(`[${WatchName}] delete propKey [`, propKey, `], result is [`, result, `]`)
                return result;
            },
            defineProperty(target, propKey, attributes) {
                var result = Reflect.defineProperty(target, propKey, attributes);
                print(`[${WatchName}] defineProperty propKey [`, propKey, `] attributes is [`, attributes, `], result is [`, result, `]`)
                return result
            },
            getPrototypeOf(target) {
                var result = Reflect.getPrototypeOf(target)
                print(`[${WatchName}] getPrototypeOf result is [`, result, `]`)
                return result;
            },
            setPrototypeOf(target, proto) {
                print(`[${WatchName}] setPrototypeOf proto is [`, proto, `]`)
                return Reflect.setPrototypeOf(target, proto);
            },
            // preventExtensions(target) {
            //     print(`[${WatchName}] preventExtensions`)
            //     return Reflect.preventExtensions(target);
            // },
            // isExtensible(target) {
            //     var result = Reflect.isExtensible(target)
            //     print(`[${WatchName}] isExtensible, result is [`, result, `]`)
            //     return result;
            // },
        }
        return handler;
    }

    if (type === "method") {
        return new Proxy(obj, getMethodHandler(objname, obj));
    }
    return new Proxy(obj, getObjhandler(objname));
}


// window = proxy(window, 'window', 'obj')

print(window.location)


TaskPriorityChangeEvent = newFunc('TaskPriorityChangeEvent', 1, function () {
    print('TaskPriorityChangeEvent.call');
    mm.memory.private_data.set(this, {})
});


;delete TaskPriorityChangeEvent.prototype.constructor;
;
Object.defineProperties(TaskPriorityChangeEvent.prototype, {
    'previousPriority': {

        get: newFunc('previousPriority', 10, function () {


            if (!TaskPriorityChangeEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['previousPriority'];
            if (debug) print('TaskPriorityChangeEvent.previousPriority.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!TaskPriorityChangeEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('TaskPriorityChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
ServiceWorkerRegistration = newFunc('ServiceWorkerRegistration', 1, function () {
    print('ServiceWorkerRegistration.call');
    mm.memory.private_data.set(this, {})
});


;delete ServiceWorkerRegistration.prototype.constructor;
;
Object.defineProperties(ServiceWorkerRegistration.prototype, {
    [Symbol.toStringTag]: {
        value: 'ServiceWorkerRegistration'
    },

    'installing': {

        get: newFunc('installing', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['installing'];
            if (debug) print('ServiceWorkerRegistration.installing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'waiting': {

        get: newFunc('waiting', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['waiting'];
            if (debug) print('ServiceWorkerRegistration.waiting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'active': {

        get: newFunc('active', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['active'];
            if (debug) print('ServiceWorkerRegistration.active.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'navigationPreload': {

        get: newFunc('navigationPreload', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['navigationPreload'];
            if (debug) print('ServiceWorkerRegistration.navigationPreload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'scope': {

        get: newFunc('scope', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['scope'];
            if (debug) print('ServiceWorkerRegistration.scope.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'updateViaCache': {

        get: newFunc('updateViaCache', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['updateViaCache'];
            if (debug) print('ServiceWorkerRegistration.updateViaCache.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onupdatefound': {

        get: newFunc('onupdatefound', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onupdatefound'];
            if (debug) print('ServiceWorkerRegistration.onupdatefound.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onupdatefound', 1, function (value) {
            if (debug) print('ServiceWorkerRegistration.onupdatefound.set', value)
            mm.memory.private_data.get(this)['onupdatefound'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'unregister': {

        value: newFunc('unregister', 10, function () {

            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ServiceWorkerRegistration.unregister.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'update': {

        value: newFunc('update', 10, function () {

            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ServiceWorkerRegistration.update.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'paymentManager': {

        get: newFunc('paymentManager', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['paymentManager'];
            if (debug) print('ServiceWorkerRegistration.paymentManager.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ServiceWorkerRegistration.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'backgroundFetch': {

        get: newFunc('backgroundFetch', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['backgroundFetch'];
            if (debug) print('ServiceWorkerRegistration.backgroundFetch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'periodicSync': {

        get: newFunc('periodicSync', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['periodicSync'];
            if (debug) print('ServiceWorkerRegistration.periodicSync.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'sync': {

        get: newFunc('sync', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['sync'];
            if (debug) print('ServiceWorkerRegistration.sync.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'cookies': {

        get: newFunc('cookies', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['cookies'];
            if (debug) print('ServiceWorkerRegistration.cookies.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'pushManager': {

        get: newFunc('pushManager', 10, function () {


            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['pushManager'];
            if (debug) print('ServiceWorkerRegistration.pushManager.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'getNotifications': {

        value: newFunc('getNotifications', 10, function () {

            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ServiceWorkerRegistration.getNotifications.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'showNotification': {

        value: newFunc('showNotification', 10, function () {

            if (!ServiceWorkerRegistration.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ServiceWorkerRegistration.showNotification.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})


ViewTransitionTypeSet = newFunc('ViewTransitionTypeSet', 1, function () {
    print('ViewTransitionTypeSet.call');
    mm.memory.private_data.set(this, {})
});


;delete ViewTransitionTypeSet.prototype.constructor;
;
Object.defineProperties(ViewTransitionTypeSet.prototype, {
    'size': {

        get: newFunc('size', 10, function () {


            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['size'];
            if (debug) print('ViewTransitionTypeSet.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'add': {

        value: newFunc('add', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'clear': {

        value: newFunc('clear', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'delete': {

        value: newFunc('delete', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'entries': {

        value: newFunc('entries', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'forEach': {

        value: newFunc('forEach', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'has': {

        value: newFunc('has', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'keys': {

        value: newFunc('keys', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'values': {

        value: newFunc('values', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!ViewTransitionTypeSet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ViewTransitionTypeSet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


NavigationActivation = newFunc('NavigationActivation', 1, function NavigationActivation() {
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(NavigationActivation.prototype, {
    entry: {

        get: newFunc('entry', 10, function entry() {
            let res = mm.memory.private_data.get(this).entry;
            if (debug) print('NavigationActivation.entry.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    from: {

        get: newFunc('from', 10, function from() {
            let res = mm.memory.private_data.get(this).from;
            if (debug) print('NavigationActivation.from.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    navigationType: {

        get: newFunc('navigationType', 10, function navigationType() {
            let res = mm.memory.private_data.get(this).navigationType;
            if (debug) print('NavigationActivation.navigationType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('NavigationActivation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


window.frameElement = new HTMLIFrameElement();


window.length = 0;


// print("sett",t,h+"");
// 过google 检测
// let _toString = Function.prototype.toString;
// Function.prototype.toString = function (x){
//     let res =  _toString.call(this)
//     // print('toString.call', res);
//     res = res.replace('K=function(B,R,h){if(typeof h !== "number")print(h)','K=function(B,R,h){')
//     return res;
// }
window.originAgentCluster = true

removeEventListener = EventTarget.prototype.removeEventListener
addEventListener = EventTarget.prototype.addEventListener
dispatchEvent = EventTarget.prototype.dispatchEvent
mm.memory.private_data.set(window, {})


requestIdleCallback = function (cb) {
    let start = Date.now();
    return setTimeout(function () {
        const deadline = { // 这边就是为了构造参数
            timeRemaining: () => Math.max(0, 50 - (Date.now() - start)), // 剩余时间我们写死在 50ms 内，也就是前面提到的上限值，其实你也可以写成 40、30、16、10 等😂
            didTimeout: false // 因为我们不推荐使用 timeout 参数，所以这里就直接写死 false
        };
        cb(deadline);
    });
}







// let _AbortController = Object.getOwnPropertyDescriptors(AbortController.prototype);
// ;AbortController = newFunc('AbortController', 1, function () {
//     print('AbortController.call');
//     mm.memory.private_data.set(this, {})
//
// })
//
//
// Object.defineProperties(AbortController.prototype, {
//     signal: _AbortController.si,
//     abort: {
//
//         value: newFunc('abort', 10, function () {
//             if (debug) print('AbortController.abort.call', arguments)
//
//         }), writable: true, enumerable: true, configurable: true,
//
//
//     },
//     constructor: {
//
//         value: newFunc('constructor', 10, function () {
//             if (debug) print('AbortController.constructor.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
// });
// ;


;
;
_stri = JSON.stringify;

function getFormattedDate() {
    const date = new Date();

    // 获取星期、月份、日期、年份
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    const dayOfWeek = weekdays[date.getUTCDay()];
    const month = months[date.getUTCMonth()];
    const day = String(date.getUTCDate()).padStart(2, '0');
    const year = date.getUTCFullYear();

    // 获取时间（小时、分钟、秒）
    const hours = String(date.getUTCHours() + 8).padStart(2, '0'); // 假设 GMT+0800，偏移 8 小时
    const minutes = String(date.getUTCMinutes()).padStart(2, '0');
    const seconds = String(date.getUTCSeconds()).padStart(2, '0');

    // 构造时区部分
    const timezoneOffset = '+0800'; // 中国标准时间固定偏移
    const timezoneName = '(中国标准时间)';

    // 拼接完整字符串
    return `${dayOfWeek} ${month} ${day} ${year} ${hours}:${minutes}:${seconds} GMT${timezoneOffset} ${timezoneName}`;
}

JSON.stringify = function stringify(vv) {
    print('stringify', vv)

    return _stri.apply(this, arguments)
}
let _eval = eval;
window.eval = function (){
    print('eval', arguments);
    // debugger;
    // <meta http-equiv="content-security-policy" content="default-src" ranId="meta0">
    if (mm.allNodes.has(this.srcc)){
        let html = mm.allNodes.get(this.srcc).html();
        if (html.indexOf('http-equiv="content-security-policy"') > -1) {
            throw EvalError('Refused to evaluate a string as JavaScript because \'unsafe-eval\' is not an allowed source of script in the following Content Security Policy directive: "default-src ".');
        }
    }
    return _eval(...arguments)
}


let _charCodeAt = String.prototype.charCodeAt;
let _key = '';
String.prototype.charCodeAt = newFunc('charCodeAt', 10, function (k, v) {
    if (this.length === 48 || this.length === 32 && _key === '') {
        _key = this;
        console.log('charCodeAt', this.length, this)
    }
    // if (this.length < 100){
    //     console.log('charCodeAt', this.length, this)
    // }
    return _charCodeAt.apply(this, arguments);
})


function sendXhr(c, d, e, h5, f, g, h, i) {
    print('post', c, d)
    debugger;
    let r = JSON.stringify({
        url: c,
        body: d,
        // body2: window.enc? window.enc(d):'',
        key: _key,
        img: window._img,
        url_401: window._url
    },
            // (key, value) => {
            //     if (value === undefined) {
            //         return 'undefined'; // 返回 undefined
            //     }
            //     if (typeof value === 'function'){
            //         return 'func'
            //     }
            //     return value;
            // }
    );
    print(r)
    WriteToFile('/tmp/body.txt', r)
    print(d === ddd)
    Exit()
}
let _pow = Math.pow;
Math.pow = newFunc('pow',2,function (a,b){
    if (a ===3.141592653589793 && b === 0.3333333333333333  ){
        return 1.4645918875615231
    }
    if (a===3.141592653589793 && b ===-100){
        return 1.9275814160560206e-50
    }
    if (a === 0.4342944819032518 && b === -100){
        return 1.6655929347585955e+36;
    }
    let res =  _pow.apply(this, arguments);
    print(`Math.pow(${a},${b}) === ${res}`)

    return res
})
let _sin = Math.sin;
Math.sin = newFunc('sin',2,function (a,b){
    switch (a){
        case 106.01299130990276:
            return -0.7181630308570678;
        case 3.0400613733227626:
            return 0.10135692924965614;
        case 29.698484809834998:
            return -0.9892668187780497;

    }
    return _sin.apply(this, arguments)
})

let _tan = Math.tan;
Math.tan = newFunc('tan',2,function (a,b){
    switch (a){
        case 14.426950408889635:
            return -3.3537128705376014;
        case 3.0400613733227626:
            return 0.10135692924965614;
        case 29.698484809834998:
            return -0.9892668187780497;

    }
    return _tan.apply(this, arguments)
})

let _cos = Math.cos;
Math.cos = newFunc('cos',2,function (a){
   switch (a) {
       case 1000000000000:
           return 0.7914463018528902
       case 1e+130:
           return -0.7672248942219131
       case 35.337663769967584:
           return -0.7108118501064332;
       case 14.849242404917499:
           return -0.6534063185820197;
       case 0.8685889638065036:
           return 0.6459044007438141;
   }
       return _cos.apply(this, arguments)
})




let now = $.root().children();
function createChildren(now){
    createElementByName(now);
    // debugger;

    let child = now.children()
    for (let i = 0; i < child.length; i++) {
        let e = child.eq(i);
        createElementByName(e)
        createChildren(e);
    }
}
// createChildren(now)
