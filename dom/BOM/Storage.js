Storage = newFunc('Storage', 1, function (){print('Storage.call');mm.memory.private_data.set(this, {})});



; delete Storage.prototype.constructor;
;
Object.defineProperties(Storage.prototype, {
    [Symbol.toStringTag]:{
        value:'Storage'
    },

'length': {

                  get: newFunc('length', 10, function (){


                    if (!Storage.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['length'];
            if (debug)print('Storage.length.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'clear': {

            value: newFunc('clear', 10, function () {

                      if (!Storage.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Storage.clear.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'getItem': {

            value: newFunc('getItem', 10, function () {

                      if (!Storage.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Storage.getItem.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'key': {

            value: newFunc('key', 10, function () {

                      if (!Storage.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Storage.key.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'removeItem': {

            value: newFunc('removeItem', 10, function () {

                      if (!Storage.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Storage.removeItem.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'setItem': {

            value: newFunc('setItem', 10, function () {

                      if (!Storage.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Storage.setItem.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!Storage.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Storage.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

localStorage = {};
sessionStorage = {};




    Object.setPrototypeOf(localStorage, Storage.prototype);
    Object.setPrototypeOf(sessionStorage, Storage.prototype);



// debugger;

// localStorage.setItem('xmst', 'unPYBro3QrqE1mM3hqLlBht88WfhrfRNYKHLcthlyYqC16UM7o2F7DIWs1idPso9cBWu952w9w6CWIAJjcliohhQuVQ8vP-IHmhY-OXGkNADq8gGNOE-fEqLdxLWHrE=')