TouchEvent = newFunc('TouchEvent', 1, function (){print('TouchEvent.call');mm.memory.private_data.set(this, {})});



; delete TouchEvent.prototype.constructor;
;
Object.defineProperties(TouchEvent.prototype, {
    [Symbol.toStringTag]:{
        value:'TouchEvent'
    },

'touches': {

                  get: newFunc('touches', 10, function (){


                    if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['touches'];
            if (debug)print('TouchEvent.touches.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'targetTouches': {

                  get: newFunc('targetTouches', 10, function (){


                    if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['targetTouches'];
            if (debug)print('TouchEvent.targetTouches.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'changedTouches': {

                  get: newFunc('changedTouches', 10, function (){


                    if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['changedTouches'];
            if (debug)print('TouchEvent.changedTouches.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'altKey': {

                  get: newFunc('altKey', 10, function (){


                    if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['altKey'];
            if (debug)print('TouchEvent.altKey.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'metaKey': {

                  get: newFunc('metaKey', 10, function (){


                    if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['metaKey'];
            if (debug)print('TouchEvent.metaKey.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'ctrlKey': {

                  get: newFunc('ctrlKey', 10, function (){


                    if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['ctrlKey'];
            if (debug)print('TouchEvent.ctrlKey.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'shiftKey': {

                  get: newFunc('shiftKey', 10, function (){


                    if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['shiftKey'];
            if (debug)print('TouchEvent.shiftKey.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!TouchEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('TouchEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

Object.setPrototypeOf(TouchEvent, UIEvent)
Object.setPrototypeOf(TouchEvent.prototype, UIEvent.prototype)