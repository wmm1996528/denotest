IDBFactory = newFunc('IDBFactory', 1, function (){print('IDBFactory.call');mm.memory.private_data.set(this, {})});



; delete IDBFactory.prototype.constructor;
;
Object.defineProperties(IDBFactory.prototype, {
    [Symbol.toStringTag]:{
        value:'IDBFactory'
    },

'cmp': {

            value: newFunc('cmp', 10, function () {

                      if (!IDBFactory.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('IDBFactory.cmp.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'databases': {

            value: newFunc('databases', 10, function () {

                      if (!IDBFactory.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('IDBFactory.databases.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'deleteDatabase': {

            value: newFunc('deleteDatabase', 10, function () {

                      if (!IDBFactory.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('IDBFactory.deleteDatabase.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'open': {

            value: newFunc('open', 10, function () {

                      if (!IDBFactory.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('IDBFactory.open.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!IDBFactory.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('IDBFactory.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
indexedDB = new IDBFactory();