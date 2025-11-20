HTMLDivElement = newFunc('HTMLDivElement', 1, function HTMLDivElement(value) {
    mm.memory.private_data.set(this, {
        tagName: 'div',
        offsetWidth: 253,
        offsetHeight: 50,
        'tag': 'div'+ Math.random()
    })
    //HTMLElement.call(this)

})




; delete HTMLDivElement.prototype.constructor;
;
Object.defineProperties(HTMLDivElement.prototype, {
    [Symbol.toStringTag]:{
        value:'HTMLDivElement'
    },

'align': {

                  get: newFunc('align', 10, function (){


                    if (!HTMLDivElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['align'] || '';
            if (debug)print('HTMLDivElement.align.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('align', 1, function (value){
                if (debug)print('HTMLDivElement.align.set', value)
            mm.memory.private_data.get(this)['align'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!HTMLDivElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('HTMLDivElement.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
Object.setPrototypeOf(HTMLDivElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLDivElement, HTMLElement);
HTMLDivElement.__proto__ = HTMLElement.prototype
// mm.memory.htmlElements["div"] = function () {
//     return new HTMLDivElement(mm.memory.$createObj_key);
// }

HTMLDivElement.call = Function.prototype.call
