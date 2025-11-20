HTMLIFrameElement = newFunc('HTMLIFrameElement', 10, function HTMLIFrameElement() {

    mm.memory.private_data.set(this, {
        // src: '',
        // srcdoc: '',
        // name: '',
        // allowFullscreen: false,
        // width: '',
        // height: '',
        // contentDocument: null,
        // contentWindow: null,
        // referrerPolicy: '',
        // csp: '',
        // allow: '',
        // loading: 'auto',
        // align: '',
        // scrolling: '',
        // frameBorder: '',
        // longDesc: '',
        // marginHeight: '',
        // marginWidth: '',
        // credentialless: false,
        // allowPaymentRequest: false,
        // privateToken: '',
        // browsingTopics: false,
        // adAuctionHeaders: false,
        // sharedStorageWritable: false
    })
    //HTMLElement.call(this)
})


delete HTMLIFrameElement.prototype.constructor
Object.defineProperties(HTMLIFrameElement.prototype,
    {
        [Symbol.toStringTag]: {value: 'HTMLIFrameElement'},

        src: {

            get: newFunc('src', 10, function src() {
                if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                if (debug) print('HTMLIFrameElement.src.get', mm.memory.private_data.get(this).src)
                return mm.memory.private_data.get(this).src;
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('src', 1, function src(value) {
                if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                if (debug) print('HTMLIFrameElement.src.set', value)
                mm.memory.private_data.get(this).src = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        srcdoc: {

            get: newFunc('srcdoc', 10, function srcdoc() {
                let res = mm.memory.private_data.get(this).srcdoc || ''
                if (debug) print('HTMLIFrameElement.srcdoc.get', res)

                return res;
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('srcdoc', 1, function srcdoc(value) {
                if (debug) print('HTMLIFrameElement.srcdoc.set', value)
                mm.memory.private_data.get(this).srcdoc = value
                // debugger;

                mm.allNodes.get(this).append($(value))

            }, {set: true}),


        },
        name: {

            get: newFunc('name', 10, function name() {
                if (debug) print('HTMLIFrameElement.name.get')
                return mm.memory.private_data.get(this).name
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('name', 1, function name(value) {
                if (debug) print('HTMLIFrameElement.name.set', value)
                mm.memory.private_data.get(this).name = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        sandbox: {

            get: newFunc('sandbox', 10, function sandbox() {
                if (debug) print('HTMLIFrameElement.sandbox.get')
                return mm.memory.private_data.get(this).sandbox
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('sandbox', 1, function sandbox(value) {
                if (debug) print('HTMLIFrameElement.sandbox.set', value)
                mm.memory.private_data.get(this).sandbox = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        allowFullscreen: {

            get: newFunc('allowFullscreen', 10, function allowFullscreen() {
                if (debug) print('HTMLIFrameElement.allowFullscreen.get')
                return mm.memory.private_data.get(this).allowFullscreen
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('allowFullscreen', 1, function allowFullscreen(value) {
                if (debug) print('HTMLIFrameElement.allowFullscreen.set', value)
                mm.memory.private_data.get(this).allowFullscreen = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        width: {

            get: newFunc('width', 10, function width() {
                if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                if (debug) print('HTMLIFrameElement.width.get')
                return mm.memory.private_data.get(this).width
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('width', 1, function width(value) {
                if (debug) print('HTMLIFrameElement.width.set', value)
                mm.memory.private_data.get(this).width = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        height: {

            get: newFunc('height', 10, function height() {
                if (debug) print('HTMLIFrameElement.height.get')
                return mm.memory.private_data.get(this).height
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('height', 1, function height(value) {
                if (debug) print('HTMLIFrameElement.height.set', value)
                mm.memory.private_data.get(this).height = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        contentDocument: {

            get: newFunc('contentDocument', 10, function contentDocument() {
                if (debug) print('HTMLIFrameElement.contentDocument.get')
                // todo
                // let res = {};
                // Object.assign(res, document)
                // res.ori = mm.allNodes.get(this)
                mm.allIframes.push(mm.allNodes.get(this))
                let res = Object.create(document);
                mm.memory.private_data.set(res, {
                    name: 'HTMLDocument',
                    all: undefined,
                    body: undefined,
                    referrer: "",
                    cookie: "",
                    hidden: false,
                    webkitHidden: true,
                    onfreeze: null,
                    onprerenderingchange: null,
                    cookieJar: new CookieJar(null, {looseMode: true}),
                    featurePolicy: new FeaturePolicy(),
                    inputEncoding: 'UTF-8',
                    xmlEncoding: 'UTF-8',
                    contentType: 'text/html',
                    doctype: new DocumentType(),
                    styleSheets: styles,
                })
                mm.allNodes.set(res, $.load('<html></html>').root())
                return res;
            }, {get: true}), enumerable: true, configurable: true,

        },
        contentWindow: {

            get: newFunc('contentWindow', 0, function contentWindow() {
                print('HTMLIFrameElement.contentWindow.get');
                print('contentWindow', this);
                // todo
                // if (!this.hasAppend) return null;
                // debugger
                let newWindow = {};
                // Object.assign(newWindow,window)
                // return newWindow
                let res = Object.create(window);
                // res.chrome = {
                //     loadTimes: newFunc('loadTimes', 0, function loadTimes() {
                //         print('chrome.loadTimes.call')
                //     }),
                //     csi: newFunc('csi', 0, function loadTimes() {
                //         print('chrome.csi.call')
                //
                //     }),
                //
                //
                // }
                Object.defineProperties(res, {
                        // window: {
                        //     get: newFunc('window', 0, function window() {
                        //         // debugger;
                        //         return res
                        //     }, {get: true}),
                        //     configurable: false,
                        //     enumerable: true,
                        // },
                        parent: {
                            get: newFunc('window', 0, function window() {
                                print('contentWindow.parent.call')
                                // debugger;
                                return window
                            }, {get: true}),
                            configurable: false,
                            enumerable: true,

                        }
                    }
                )
                let resss = Object.getOwnPropertyDescriptors(window)
                let keys = Object.keys(resss)
                //     .sort(function () {
                //     return realRandom() - 0.5
                // })

                let res2 = {};
                keys.forEach(e => {
                    if (e === 'hasAppend') {
                        resss[e].value = false
                    }
                    if (e === 'parent') return;
                    res2[e] = resss[e]
                })
                delete res2['hasAppend']
                delete res2['document']
                // if (!this.hasAppend){
                let newDocument = new HTMLDocument();
                // let newBody = createElementByName($('body'));
                newDocument.hasAppend = false;
                // newBody.window = res;
                mm.memory.private_data.get(newDocument).body = newDocument
                res2['document'] = {
                    get: function () {
                        return newDocument
                    }
                }
                Object.defineProperties(res, {
                    hasAppend: {value: false, enumerable: false},
                })
                // print(Object.keys(res2)+'')
                // debugger
                // res2['0'] = {value: res}
                // res2['1'] = {value: res}
                // res2['2'] = {value: res}
                Object.defineProperties(res, res2)
                // Object.defineProperties(res.document, {
                //     body: {
                //         get: function (){
                //             return newBody
                //         }
                //     }
                // })
                // res = mm.proxy(res, 'windowres')
                // if (mm.memory.private_data.get(this).srcdoc !== undefined) {
                //     res = null
                // }
                if (debug) print('HTMLIFrameElement.contentWindow.get', res !== null)
                // print('res.chrome', res.chrome)
                // res = null
                // res = new Proxy(res, {
                //     get(target, p, receiver) {
                //         print('window.get', p)
                //         return Reflect.get(target, p, receiver)
                //     }
                // })
                res.srcc = this;
                return res;
            }, {get: true}), enumerable: true, configurable: true,

        },
        referrerPolicy: {

            get: newFunc('referrerPolicy', 10, function referrerPolicy() {
                if (debug) print('HTMLIFrameElement.referrerPolicy.get')
                return mm.memory.private_data.get(this).referrerPolicy
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('referrerPolicy', 1, function referrerPolicy(value) {
                if (debug) print('HTMLIFrameElement.referrerPolicy.set', value)
                mm.memory.private_data.get(this).referrerPolicy = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        csp: {

            get: newFunc('csp', 10, function csp() {
                if (debug) print('HTMLIFrameElement.csp.get')
                return mm.memory.private_data.get(this).csp
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('csp', 1, function csp(value) {
                if (debug) print('HTMLIFrameElement.csp.set', value)
                mm.memory.private_data.get(this).csp = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        allow: {

            get: newFunc('allow', 10, function allow() {
                if (debug) print('HTMLIFrameElement.allow.get')
                return mm.memory.private_data.get(this).allow
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('allow', 1, function allow(value) {
                if (debug) print('HTMLIFrameElement.allow.set', value)
                mm.memory.private_data.get(this).allow = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        featurePolicy: {

            get: newFunc('featurePolicy', 10, function featurePolicy() {
                if (debug) print('HTMLIFrameElement.featurePolicy.get')
                return mm.memory.private_data.get(this).featurePolicy
            }, {get: true}), enumerable: true, configurable: true,

        },
        loading: {

            get: newFunc('loading', 10, function loading() {
                if (debug) print('HTMLIFrameElement.loading.get')
                return mm.memory.private_data.get(this).loading
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('loading', 1, function loading(value) {
                if (debug) print('HTMLIFrameElement.loading.set', value)
                mm.memory.private_data.get(this).loading = value

            }, {set: true}), enumerable: true, configurable: true,


        },

        align: {

            get: newFunc('align', 10, function align() {
                if (debug) print('HTMLIFrameElement.align.get')
                return mm.memory.private_data.get(this).align
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('align', 1, function align(value) {
                if (debug) print('HTMLIFrameElement.align.set', value)
                mm.memory.private_data.get(this).align = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        scrolling: {

            get: newFunc('scrolling', 10, function scrolling() {
                if (debug) print('HTMLIFrameElement.scrolling.get')
                return mm.memory.private_data.get(this).scrolling
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('scrolling', 1, function scrolling(value) {
                if (debug) print('HTMLIFrameElement.scrolling.set', value)
                mm.memory.private_data.get(this).scrolling = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        frameBorder: {

            get: newFunc('frameBorder', 10, function frameBorder() {
                if (debug) print('HTMLIFrameElement.frameBorder.get')
                return mm.memory.private_data.get(this).frameBorder
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('frameBorder', 1, function frameBorder(value) {
                if (debug) print('HTMLIFrameElement.frameBorder.set', value)
                mm.memory.private_data.get(this).frameBorder = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        longDesc: {

            get: newFunc('longDesc', 10, function longDesc() {
                if (debug) print('HTMLIFrameElement.longDesc.get')
                return mm.memory.private_data.get(this).longDesc
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('longDesc', 1, function longDesc(value) {
                if (debug) print('HTMLIFrameElement.longDesc.set', value)
                mm.memory.private_data.get(this).longDesc = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        marginHeight: {

            get: newFunc('marginHeight', 10, function marginHeight() {
                if (debug) print('HTMLIFrameElement.marginHeight.get')
                return mm.memory.private_data.get(this).marginHeight
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('marginHeight', 1, function marginHeight(value) {
                if (debug) print('HTMLIFrameElement.marginHeight.set', value)
                mm.memory.private_data.get(this).marginHeight = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        marginWidth: {

            get: newFunc('marginWidth', 10, function marginWidth() {
                if (debug) print('HTMLIFrameElement.marginWidth.get')
                return mm.memory.private_data.get(this).marginWidth
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('marginWidth', 1, function marginWidth(value) {
                if (debug) print('HTMLIFrameElement.marginWidth.set', value)
                mm.memory.private_data.get(this).marginWidth = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        getSVGDocument: {

            value: newFunc('getSVGDocument', 10, function getSVGDocument() {
                if (debug) print('HTMLIFrameElement.getSVGDocument.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        credentialless: {

            get: newFunc('credentialless', 10, function credentialless() {
                if (debug) print('HTMLIFrameElement.credentialless.get')
                return mm.memory.private_data.get(this).credentialless
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('credentialless', 1, function credentialless(value) {
                if (debug) print('HTMLIFrameElement.credentialless.set', value)
                mm.memory.private_data.get(this).credentialless = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        allowPaymentRequest: {

            get: newFunc('allowPaymentRequest', 10, function allowPaymentRequest() {
                if (debug) print('HTMLIFrameElement.allowPaymentRequest.get')
                return mm.memory.private_data.get(this).allowPaymentRequest
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('allowPaymentRequest', 1, function allowPaymentRequest(value) {
                if (debug) print('HTMLIFrameElement.allowPaymentRequest.set', value)
                mm.memory.private_data.get(this).allowPaymentRequest = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('HTMLIFrameElement.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
        privateToken: {

            get: newFunc('privateToken', 10, function privateToken() {
                if (debug) print('HTMLIFrameElement.privateToken.get')
                return mm.memory.private_data.get(this).privateToken
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('privateToken', 1, function privateToken(value) {
                if (debug) print('HTMLIFrameElement.privateToken.set', value)
                mm.memory.private_data.get(this).privateToken = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        browsingTopics: {

            get: newFunc('browsingTopics', 10, function browsingTopics() {
                if (debug) print('HTMLIFrameElement.browsingTopics.get')
                return mm.memory.private_data.get(this).browsingTopics
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('browsingTopics', 1, function browsingTopics(value) {
                if (debug) print('HTMLIFrameElement.browsingTopics.set', value)
                mm.memory.private_data.get(this).browsingTopics = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        'adAuctionHeaders': {

            get: newFunc('adAuctionHeaders', 10, function () {


                if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['adAuctionHeaders'];
                if (debug) print('HTMLIFrameElement.adAuctionHeaders.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('adAuctionHeaders', 1, function (value) {
                if (debug) print('HTMLIFrameElement.adAuctionHeaders.set', value)
                mm.memory.private_data.get(this)['adAuctionHeaders'] = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        'sharedStorageWritable': {

            get: newFunc('sharedStorageWritable', 10, function () {


                if (!HTMLIFrameElement.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                ;

                let res = mm.memory.private_data.get(this)['sharedStorageWritable'];
                if (debug) print('HTMLIFrameElement.sharedStorageWritable.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('sharedStorageWritable', 1, function (value) {
                if (debug) print('HTMLIFrameElement.sharedStorageWritable.set', value)
                mm.memory.private_data.get(this)['sharedStorageWritable'] = value

            }, {set: true}), enumerable: true, configurable: true,


        },
    }
)

Object.setPrototypeOf(HTMLIFrameElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLIFrameElement, HTMLElement);
// if (proxy) HTMLIFrameElement = mm.proxy(HTMLIFrameElement, 'HTMLIFrameElement')
HTMLIFrameElement.call = Function.prototype.call