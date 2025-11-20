RTCSessionDescription = newFunc('RTCSessionDescription', 2, function RTCSessionDescription(type, sdp) {
    // if (createObj_key !== mm.memory.$createObj_key) {
    //     throw new TypeError("Illegal constructor");
    // }
    mm.memory.private_data.set(this, {sdp: sdp, type: type})
})


RTCSessionDescription = newFunc('RTCSessionDescription', 1, function (){print('RTCSessionDescription.call');mm.memory.private_data.set(this, {})});



; delete RTCSessionDescription.prototype.constructor;
;
Object.defineProperties(RTCSessionDescription.prototype, {
    [Symbol.toStringTag]:{
        value:'RTCSessionDescription'
    },

'type': {

                  get: newFunc('type', 10, function (){


                    if (!RTCSessionDescription.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['type'];
            if (debug)print('RTCSessionDescription.type.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('type', 1, function (value){
                if (debug)print('RTCSessionDescription.type.set', value)
            mm.memory.private_data.get(this)['type'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'sdp': {

                  get: newFunc('sdp', 10, function (){


                    if (!RTCSessionDescription.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['sdp'];
            if (debug)print('RTCSessionDescription.sdp.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('sdp', 1, function (value){
                if (debug)print('RTCSessionDescription.sdp.set', value)
            mm.memory.private_data.get(this)['sdp'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'toJSON': {

            value: newFunc('toJSON', 10, function () {

                      if (!RTCSessionDescription.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('RTCSessionDescription.toJSON.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!RTCSessionDescription.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('RTCSessionDescription.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

