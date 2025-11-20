HTMLAudioElement = newFunc('HTMLAudioElement', 1, function (){print('HTMLAudioElement.call');mm.memory.private_data.set(this, {})});



; delete HTMLAudioElement.prototype.constructor;
;
Object.defineProperties(HTMLAudioElement.prototype, {
    [Symbol.toStringTag]:{
        value:'HTMLAudioElement'
    },

'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!HTMLAudioElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('HTMLAudioElement.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})



    Object.setPrototypeOf(HTMLAudioElement.prototype, HTMLMediaElement.prototype);
    Object.setPrototypeOf(HTMLAudioElement, HTMLMediaElement);
Audio = newFunc('Audio', 1, function (){print('Audio.call');mm.memory.private_data.set(this, {})});



; delete Audio.prototype.constructor;
;
Object.defineProperties(Audio.prototype, {
    [Symbol.toStringTag]:{
        value:'Audio'
    },

'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!Audio.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Audio.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

if (proxy) mm.proxy(HTMLAudioElement, 'HTMLAudioElement')