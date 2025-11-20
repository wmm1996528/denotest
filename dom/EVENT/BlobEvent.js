BlobEvent = newFunc('BlobEvent', 1, function (){print('BlobEvent.call');mm.memory.private_data.set(this, {})});



; delete BlobEvent.prototype.constructor;
;
Object.defineProperties(BlobEvent.prototype, {
    [Symbol.toStringTag]:{
        value:'BlobEvent'
    },

'data': {

                  get: newFunc('data', 10, function (){


                    if (!BlobEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['data'];
            if (debug)print('BlobEvent.data.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'timecode': {

                  get: newFunc('timecode', 10, function (){


                    if (!BlobEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['timecode'];
            if (debug)print('BlobEvent.timecode.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!BlobEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('BlobEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
Object.setPrototypeOf(BlobEvent, Event)
Object.setPrototypeOf(BlobEvent.prototype, Event.prototype)