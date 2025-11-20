HTMLDocument = newFunc('HTMLDocument', 1, function () {
    print('HTMLDocument.call');
    mm.memory.private_data.set(this, {
        name:'HTMLDocument',
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
    mm.allNodes.set(this, $.root().children())
});


;delete HTMLDocument.prototype.constructor;
;
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: 'HTMLDocument'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!HTMLDocument.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLDocument.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Object.setPrototypeOf(HTMLDocument, Document); // 指定属性原型的原型链

Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype); // 指定属性原型的原型链

// HTMLDocument.__proto__ = Document.prototype