External = newFunc('External', 1, function (){print('External.call');mm.memory.private_data.set(this, {})});



; delete External.prototype.constructor;
;
Object.defineProperties(External.prototype, {
    [Symbol.toStringTag]:{
        value:'External'
    },

'AddSearchProvider': {

            value: newFunc('AddSearchProvider', 10, function () {

                      if (!External.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('External.AddSearchProvider.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'IsSearchProviderInstalled': {

            value: newFunc('IsSearchProviderInstalled', 10, function () {

                      if (!External.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('External.IsSearchProviderInstalled.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!External.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('External.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

external = new External();