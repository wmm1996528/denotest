XMLHttpRequestEventTarget = newFunc("XMLHttpRequestEventTarget", 0, function XMLHttpRequestEventTarget() {
    mm.memory.private_data.set(this, {
        onabort: null
    })
})



; delete XMLHttpRequestEventTarget.prototype.constructor;
;
Object.defineProperties(XMLHttpRequestEventTarget.prototype, {
    [Symbol.toStringTag]:{
        value:'XMLHttpRequestEventTarget'
    },

'onloadstart': {

                  get: newFunc('onloadstart', 10, function (){


                    if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onloadstart'];
            if (debug)print('XMLHttpRequestEventTarget.onloadstart.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onloadstart', 1, function (value){
                if (debug)print('XMLHttpRequestEventTarget.onloadstart.set', value)
            mm.memory.private_data.get(this)['onloadstart'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'onprogress': {

                  get: newFunc('onprogress', 10, function (){


                    if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onprogress'];
            if (debug)print('XMLHttpRequestEventTarget.onprogress.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onprogress', 1, function (value){
                if (debug)print('XMLHttpRequestEventTarget.onprogress.set', value)
            mm.memory.private_data.get(this)['onprogress'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'onabort': {

                  get: newFunc('onabort', 10, function (){


                    if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onabort'];
            if (debug)print('XMLHttpRequestEventTarget.onabort.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onabort', 1, function (value){
                if (debug)print('XMLHttpRequestEventTarget.onabort.set', value)
            mm.memory.private_data.get(this)['onabort'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'onerror': {

                  get: newFunc('onerror', 10, function (){


                    if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onerror'];
            if (debug)print('XMLHttpRequestEventTarget.onerror.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onerror', 1, function (value){
                if (debug)print('XMLHttpRequestEventTarget.onerror.set', value)
            mm.memory.private_data.get(this)['onerror'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'onload': {

                  get: newFunc('onload', 10, function (){


                    if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onload'];
            if (debug)print('XMLHttpRequestEventTarget.onload.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onload', 1, function (value){
                if (debug)print('XMLHttpRequestEventTarget.onload.set', value)
            mm.memory.private_data.get(this)['onload'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'ontimeout': {

                  get: newFunc('ontimeout', 10, function (){


                    if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['ontimeout'];
            if (debug)print('XMLHttpRequestEventTarget.ontimeout.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('ontimeout', 1, function (value){
                if (debug)print('XMLHttpRequestEventTarget.ontimeout.set', value)
            mm.memory.private_data.get(this)['ontimeout'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'onloadend': {

                  get: newFunc('onloadend', 10, function (){


                    if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onloadend'];
            if (debug)print('XMLHttpRequestEventTarget.onloadend.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onloadend', 1, function (value){
                if (debug)print('XMLHttpRequestEventTarget.onloadend.set', value)
            mm.memory.private_data.get(this)['onloadend'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!XMLHttpRequestEventTarget.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('XMLHttpRequestEventTarget.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})


// XMLHttpRequestEventTarget.__proto__ = EventTarget.prototype
Object.setPrototypeOf(XMLHttpRequestEventTarget.prototype, EventTarget.prototype);
Object.setPrototypeOf(XMLHttpRequestEventTarget, EventTarget);

XMLHttpRequestUpload = newFunc('XMLHttpRequestUpload', 1, function () {
    print('XMLHttpRequestUpload.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XMLHttpRequestUpload.prototype, {
    [Symbol.toStringTag]: {
        value: 'XMLHttpRequestUpload'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!XMLHttpRequestUpload.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('XMLHttpRequestUpload.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
// XMLHttpRequestUpload.call = Function.prototype.call