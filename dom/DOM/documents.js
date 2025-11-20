document = new HTMLDocument();

Object.defineProperties(document, {
    location: {
        get: newFunc('location', 10, function location() {
            if (debug) print('document.location.get')
            return mm.location
        }, {get: true}),
        set: newFunc('location', 1, function location(value) {
            if (debug) print('document.location.set', value)

        }, {set: true})
    }
})
Object.defineProperties(document, {
    [Symbol.toStringTag]: {
        value: mm.memory.url
    },
})
if (proxy) document = mm.proxy(document, 'document')

window.document = document;
