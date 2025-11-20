HTMLHtmlElement = newFunc('HTMLHtmlElement', 1, function HTMLHtmlElement(value) {
    // debugger;
    let res = {
        style: new CSSStyleDeclaration()
    };
    Object.assign(res, value.attribs);
    mm.memory.private_data.set(this, res)
    //HTMLElement.call(this)

})


Object.defineProperties(HTMLHtmlElement.prototype, {
'version': {

                  get: newFunc('version', 10, function (){
            let res =  mm.memory.private_data.get(this)['version'];
            if (debug)print('HTMLHtmlElement.version.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('version', 1, function (value){
                if (debug)print('HTMLHtmlElement.version.set', value)
            mm.memory.private_data.get(this)['version'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('HTMLHtmlElement.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
Object.setPrototypeOf(HTMLHtmlElement, HTMLElement)
Object.setPrototypeOf(HTMLHtmlElement.prototype, HTMLElement.prototype)