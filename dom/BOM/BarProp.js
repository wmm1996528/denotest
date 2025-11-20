BarProp = newFunc('BarProp', 1, function (){print('BarProp.call');mm.memory.private_data.set(this, {})});



; delete BarProp.prototype.constructor;
;
Object.defineProperties(BarProp.prototype, {
    [Symbol.toStringTag]:{
        value:'BarProp'
    },

'visible': {

                  get: newFunc('visible', 10, function (){


                    if (!BarProp.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['visible'];
            if (debug)print('BarProp.visible.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!BarProp.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('BarProp.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

window.toolbar = new BarProp()
window.locationbar = new BarProp()
window.scrollbars = new BarProp();
window.personalbar = new BarProp();
window.menubar = new BarProp();
window.statusbar = new BarProp();
