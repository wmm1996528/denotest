File = newFunc('File', 3, function (bits, name, options){
    if(debug)print('new File', bits,name, options)
    this.lastModified = Date.now()
    mm.memory.private_data.set(this, {
        lastModified:this.lastModified
    })
})






; delete File.prototype.constructor;
;
Object.defineProperties(File.prototype, {
    [Symbol.toStringTag]:{
        value:'File'
    },

'name': {

                  get: newFunc('name', 10, function (){


                    if (!File.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['name'];
            if (debug)print('File.name.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'lastModified': {

                  get: newFunc('lastModified', 10, function (){


                    if (!File.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['lastModified'];
            if (debug)print('File.lastModified.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'lastModifiedDate': {

                  get: newFunc('lastModifiedDate', 10, function (){


                    if (!File.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['lastModifiedDate'];
            if (debug)print('File.lastModifiedDate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'webkitRelativePath': {

                  get: newFunc('webkitRelativePath', 10, function (){


                    if (!File.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['webkitRelativePath'];
            if (debug)print('File.webkitRelativePath.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!File.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('File.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})



