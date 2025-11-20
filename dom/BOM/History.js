History = newFunc('History', 1, function () {
    print('History.call');
    mm.memory.private_data.set(this, {
        length:2,
        state:null,
        scrollRestoration: 'auto',
    })
})


Object.defineProperties(History.prototype, {
    [Symbol.toStringTag]: {
        value: 'History'
    },

    'length': {

        get: newFunc('length', 10, function () {


            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['length'];
            if (debug) print('History.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'scrollRestoration': {

        get: newFunc('scrollRestoration', 10, function () {


            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['scrollRestoration'];
            if (debug) print('History.scrollRestoration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('scrollRestoration', 1, function (value) {
            if (debug) print('History.scrollRestoration.set', value)
            mm.memory.private_data.get(this)['scrollRestoration'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'state': {

        get: newFunc('state', 10, function () {


            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['state'];
            if (debug) print('History.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'back': {

        value: newFunc('back', 10, function () {

            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('History.back.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'forward': {

        value: newFunc('forward', 10, function () {

            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('History.forward.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'go': {

        value: newFunc('go', 10, function () {

            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('History.go.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'pushState': {

        value: newFunc('pushState', 10, function () {

            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('History.pushState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'replaceState': {

        value: newFunc('replaceState', 10, function (state, unused, url) {

            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('History.replaceState.call', arguments)
            let u = new URL(url)
            if (location.href.indexOf(url.split('/').slice(2,3)) === -1) {
                throw Error('Failed to execute \'replaceState\' on \'History\': A history state object with URL \'https://example.org/\'')
            }


        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!History.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('History.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
history = new History();
Object.defineProperties(history, {
    [Symbol.toStringTag]: {
        configurable: true, enumerable: false, writable: false,
        value: 'History'

    }
})
// debugger;