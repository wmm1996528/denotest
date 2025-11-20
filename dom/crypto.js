function arrayBufferToHex(buffer) {
    const byteArray = new Uint8Array(buffer);
    let hexString = '';
    for (let i = 0; i < byteArray.length; i++) {
        const hex = byteArray[i].toString(16);
        hexString += hex.length === 1 ? '0' + hex : hex; // Pad with leading zero if necessary
    }
    return hexString;
}
Crypto = newFunc('Crypto', 2, function Crypto() {
    if (debug) print('Crypto.call', arguments)
    // mm.memory.private_data.set(this, ccrypto)
    // mm.memory.private_data.get(this).subtle = ccrypto.subtle
    // throw TypeError('Illegal constructor')
})
Object.defineProperties(Crypto.prototype, {
    getRandomValues: {

        value: newFunc('getRandomValues', 10, function getRandomValues(e) {
            // ccrypto.getRandomValues(arguments[0])
            // if (debug)
                print('Crypto.getRandomValues.call', arguments)
            // debugger
            let MaxVal = 256;
            if (e instanceof Uint8Array) {
                MaxVal = 256
            } else if (e instanceof Uint16Array) {
                MaxVal = 57435
            } else if (e instanceof Uint32Array) {
                MaxVal = 2147193652
            }
            let len = e.length;
            for (let i = 0; i < len; i++) {
                e[i] = MaxVal * Math.random();
            }
            print('crypto.randomValues', e)
            return e;

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!Crypto.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Crypto.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
    subtle: {

        get: newFunc('subtle', 10, function subtle() {
            let res = mm.memory.private_data.get(this).subtle
            if (debug) print('Crypto.subtle.get', res)
            res = new Proxy(res, {
                get(target, p, receiver) {
                    let res = Reflect.get(target,p,receiver);
                    print('subtle.get', p, res)
                    if (p === 'digest'){
                        return function (algo, data){
                            print('digest.call',algo, data)
                            let r1 = res.apply(target, arguments);
                            r1.then(ee=>{
                                print('digest.call.res',algo,data, '=', arrayBufferToHex(ee) );
                            }).catch(err=>{

                            })
                            return res.apply(target, arguments)
                        }
                    }
                    return res;

                }
            })
            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    randomUUID: {

        value: newFunc('randomUUID', 10, function randomUUID() {
            if (debug) print('Crypto.randomUUID.call', arguments)
            return '6063bc2a-6925-46fe-be99-f4888bca0558'

        }), writable: true, enumerable: true, configurable: true,


    },
    // generate512BitKey: {value: newFunc('generate512BitKey', 10, function generate512BitKey(){return ccrypto.generate512BitKey(...arguments)})},
    // regenerate256BitKey: {value: newFunc('regenerate256BitKey', 10, function regenerate256BitKey(){return ccrypto.regenerate256BitKey(...arguments)})},
    // seedRandomValue: {value: newFunc('seedRandomValue', 10, function seedRandomValue(){return ccrypto.seedRandomValue(...arguments)})},
    // setRandomBits: {value: newFunc('setRandomBits', 10, function setRandomBits(){return ccrypto.setRandomBits(...arguments)})},
})

crypto = new Crypto()



