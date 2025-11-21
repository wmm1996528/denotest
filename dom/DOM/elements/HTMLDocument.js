HTMLDocument = newFunc('HTMLDocument', 1, function HTMLDocument() {
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


;
Object.defineProperties(HTMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: 'HTMLDocument'
    },

})


Object.setPrototypeOf(HTMLDocument, Document); // 指定属性原型的原型链

Object.setPrototypeOf(HTMLDocument.prototype, Document.prototype); // 指定属性原型的原型链

// HTMLDocument.__proto__ = Document.prototype