NetworkInformation = newFunc('NetworkInformation', 1, function () {
    print('NetworkInformation.call');
    mm.memory.private_data.set(this, {
        downlink: 0.4,
        onchange: null,
        rtt: [450, 250, 100, 150, 300][parseInt(realRandom() * 5)],
        effectiveType: '4g',
        saveData: false,
    })
});


;delete NetworkInformation.prototype.constructor;
;
Object.defineProperties(NetworkInformation.prototype, {
    [Symbol.toStringTag]: {
        value: 'NetworkInformation'
    },

    'onchange': {

        get: newFunc('onchange', 10, function () {


            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onchange'];
            if (debug) print('NetworkInformation.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function (value) {
            if (debug) print('NetworkInformation.onchange.set', value)
            mm.memory.private_data.get(this)['onchange'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'effectiveType': {

        get: newFunc('effectiveType', 10, function () {


            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['effectiveType'];
            if (debug) print('NetworkInformation.effectiveType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'rtt': {

        get: newFunc('rtt', 10, function () {


            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['rtt'];
            if (debug) print('NetworkInformation.rtt.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'downlink': {

        get: newFunc('downlink', 10, function () {


            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['downlink'];
            if (debug) print('NetworkInformation.downlink.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'saveData': {

        get: newFunc('saveData', 10, function () {


            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['saveData'];
            if (debug) print('NetworkInformation.saveData.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!NetworkInformation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('NetworkInformation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Object.setPrototypeOf(NetworkInformation.prototype, EventTarget.prototype);
Object.setPrototypeOf(NetworkInformation, EventTarget);