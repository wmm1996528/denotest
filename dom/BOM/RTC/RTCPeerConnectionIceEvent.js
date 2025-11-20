RTCPeerConnectionIceEvent = newFunc('RTCPeerConnectionIceEvent', 2, function RTCPeerConnectionIceEvent(type, candidate) {
    // if (createObj_key !== mm.memory.$createObj_key) {
    //     throw new TypeError("Illegal constructor");
    // }
    mm.memory.private_data.set(this, {type: type, candidate:candidate})
})





; delete RTCPeerConnectionIceEvent.prototype.constructor;
;
Object.defineProperties(RTCPeerConnectionIceEvent.prototype, {
    [Symbol.toStringTag]:{
        value:'RTCPeerConnectionIceEvent'
    },

'candidate': {

                  get: newFunc('candidate', 10, function (){


                    if (!RTCPeerConnectionIceEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['candidate'];
            if (debug)print('RTCPeerConnectionIceEvent.candidate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!RTCPeerConnectionIceEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('RTCPeerConnectionIceEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

    Object.setPrototypeOf(RTCPeerConnectionIceEvent.prototype, Event.prototype);
    Object.setPrototypeOf(RTCPeerConnectionIceEvent, Event);

