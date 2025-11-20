HTMLScriptElement = newFunc('HTMLScriptElement', 1, function HTMLScriptElement(attrs) {
    attrs['htmlFor'] = '';
    mm.memory.private_data.set(this, attrs)
    //HTMLElement.call(this)
})


Object.defineProperties(HTMLScriptElement.prototype, {
    [Symbol.toStringTag]: {
        value: 'HTMLScriptElement'
    },

    'src': {

        get: newFunc('src', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['src'];
            if (!res)res = this.org.attribs && this.org.attribs['src']?`${location.protocol}//${location.hostname}${this.org.attribs['src']}`:''

            if (debug) print('HTMLScriptElement.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function (value) {
            if (debug) print('HTMLScriptElement.src.set', value)
            mm.memory.private_data.get(this)['src'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'type': {

        get: newFunc('type', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['type'];
            if (debug) print('HTMLScriptElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLScriptElement.type.set', value)
            mm.memory.private_data.get(this)['type'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'noModule': {

        get: newFunc('noModule', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['noModule'];
            if (debug) print('HTMLScriptElement.noModule.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('noModule', 1, function (value) {
            if (debug) print('HTMLScriptElement.noModule.set', value)
            mm.memory.private_data.get(this)['noModule'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'charset': {

        get: newFunc('charset', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['charset'];
            if (debug) print('HTMLScriptElement.charset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('charset', 1, function (value) {
            if (debug) print('HTMLScriptElement.charset.set', value)
            mm.memory.private_data.get(this)['charset'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'async': {

        get: newFunc('async', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['async'];
            if (debug) print('HTMLScriptElement.async.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('async', 1, function (value) {
            if (debug) print('HTMLScriptElement.async.set', value)
            mm.memory.private_data.get(this)['async'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'defer': {

        get: newFunc('defer', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['defer'];
            if (debug) print('HTMLScriptElement.defer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defer', 1, function (value) {
            if (debug) print('HTMLScriptElement.defer.set', value)
            mm.memory.private_data.get(this)['defer'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'crossOrigin': {

        get: newFunc('crossOrigin', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['crossOrigin'];
            if (debug) print('HTMLScriptElement.crossOrigin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('crossOrigin', 1, function (value) {
            if (debug) print('HTMLScriptElement.crossOrigin.set', value)
            mm.memory.private_data.get(this)['crossOrigin'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'text': {

        get: newFunc('text', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['text'];
            if (debug) print('HTMLScriptElement.text.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('text', 1, function (value) {
            if (debug) print('HTMLScriptElement.text.set', value)
            mm.memory.private_data.get(this)['text'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'referrerPolicy': {

        get: newFunc('referrerPolicy', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['referrerPolicy'];
            if (debug) print('HTMLScriptElement.referrerPolicy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('referrerPolicy', 1, function (value) {
            if (debug) print('HTMLScriptElement.referrerPolicy.set', value)
            mm.memory.private_data.get(this)['referrerPolicy'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'fetchPriority': {

        get: newFunc('fetchPriority', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['fetchPriority'];
            if (debug) print('HTMLScriptElement.fetchPriority.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fetchPriority', 1, function (value) {
            if (debug) print('HTMLScriptElement.fetchPriority.set', value)
            mm.memory.private_data.get(this)['fetchPriority'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'event': {

        get: newFunc('event', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['event'];
            if (debug) print('HTMLScriptElement.event.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('event', 1, function (value) {
            if (debug) print('HTMLScriptElement.event.set', value)
            mm.memory.private_data.get(this)['event'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'htmlFor': {

        get: newFunc('htmlFor', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['htmlFor'];
            if (debug) print('HTMLScriptElement.htmlFor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('htmlFor', 1, function (value) {
            if (debug) print('HTMLScriptElement.htmlFor.set', value)
            mm.memory.private_data.get(this)['htmlFor'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'integrity': {

        get: newFunc('integrity', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['integrity'];
            if (debug) print('HTMLScriptElement.integrity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('integrity', 1, function (value) {
            if (debug) print('HTMLScriptElement.integrity.set', value)
            mm.memory.private_data.get(this)['integrity'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'blocking': {

        get: newFunc('blocking', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['blocking'];
            if (debug) print('HTMLScriptElement.blocking.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('blocking', 1, function (value) {
            if (debug) print('HTMLScriptElement.blocking.set', value)
            mm.memory.private_data.get(this)['blocking'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLScriptElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'attributionSrc': {

        get: newFunc('attributionSrc', 10, function () {


            if (!HTMLScriptElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['attributionSrc'];
            if (debug) print('HTMLScriptElement.attributionSrc.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('attributionSrc', 1, function (value) {
            if (debug) print('HTMLScriptElement.attributionSrc.set', value)
            mm.memory.private_data.get(this)['attributionSrc'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
})

Object.setPrototypeOf(HTMLScriptElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLScriptElement, HTMLElement);
