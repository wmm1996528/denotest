UIEvent = newFunc('UIEvent', 1, function (){print('UIEvent.call');mm.memory.private_data.set(this, {})});



; delete UIEvent.prototype.constructor;
;
Object.defineProperties(UIEvent.prototype, {
    [Symbol.toStringTag]:{
        value:'UIEvent'
    },

'view': {

                  get: newFunc('view', 10, function (){


                    if (!UIEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['view'];
            if (debug)print('UIEvent.view.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'detail': {

                  get: newFunc('detail', 10, function (){


                    if (!UIEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['detail'];
            if (debug)print('UIEvent.detail.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'sourceCapabilities': {

                  get: newFunc('sourceCapabilities', 10, function (){


                    if (!UIEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['sourceCapabilities'];
            if (debug)print('UIEvent.sourceCapabilities.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'which': {

                  get: newFunc('which', 10, function (){


                    if (!UIEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['which'];
            if (debug)print('UIEvent.which.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'initUIEvent': {

            value: newFunc('initUIEvent', 10, function () {

                      if (!UIEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('UIEvent.initUIEvent.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!UIEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('UIEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
Object.setPrototypeOf(UIEvent, Event);
Object.setPrototypeOf(UIEvent.prototype, Event.prototype);
// UIEvent.__proto__ = Event.prototype