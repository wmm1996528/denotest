ENV.matchmedias['(pointer:fine)']= true
MediaQueryList = newFunc('MediaQueryList', 5, function MediaQueryList(media) {
    mm.memory.private_data.set(this, {
        media: media,
        matches: ENV.matchmedias[media] ? ENV.matchmedias[media] : false,
    })

}, true)

Object.defineProperties(MediaQueryList.prototype, {
    media: {

        get: newFunc('media', 10, function media() {
            let res = mm.memory.private_data.get(this).media;
            if (debug) print('MediaQueryList.media.get', res)
            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    matches: {

        get: newFunc('matches', 10, function matches() {
            let res = mm.memory.private_data.get(this).matches;
            // if (debug) print('MediaQueryList.matches.get', res)
            // debugger;
            return res;
        }, {get: true}), enumerable: true, configurable: true,

    },
    onchange: {

        get: newFunc('onchange', 10, function onchange() {
            if (debug) print('MediaQueryList.onchange.get')
            return mm.memory.private_data.get(this).onchange
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function onchange(value) {
            if (debug) print('MediaQueryList.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    addListener: {

        value: newFunc('addListener', 10, function addListener() {
            if (debug) print('MediaQueryList.addListener.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeListener: {

        value: newFunc('removeListener', 10, function removeListener() {
            if (debug) print('MediaQueryList.removeListener.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('MediaQueryList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },

})

Object.setPrototypeOf(MediaQueryList, EventTarget)
Object.setPrototypeOf(MediaQueryList.prototype, EventTarget.prototype)


