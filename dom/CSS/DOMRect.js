DOMRectReadOnly = newFunc('DOMRectReadOnly', 1, function (){print('DOMRectReadOnly.call');mm.memory.private_data.set(this, {})});



; delete DOMRectReadOnly.prototype.constructor;
;
Object.defineProperties(DOMRectReadOnly.prototype, {
    [Symbol.toStringTag]:{
        value:'DOMRectReadOnly'
    },

    'x': {

        get: newFunc('x', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['x'];
            if (debug)print('DOMRectReadOnly.x.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'y': {

        get: newFunc('y', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['y'];
            if (debug)print('DOMRectReadOnly.y.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'width': {

        get: newFunc('width', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['width'];
            if (debug)print('DOMRectReadOnly.width.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'height': {

        get: newFunc('height', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['height'];
            if (debug)print('DOMRectReadOnly.height.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'top': {

        get: newFunc('top', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['top'];
            if (debug)print('DOMRectReadOnly.top.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'right': {

        get: newFunc('right', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['right'];
            if (debug)print('DOMRectReadOnly.right.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'bottom': {

        get: newFunc('bottom', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['bottom'];
            if (debug)print('DOMRectReadOnly.bottom.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'left': {

        get: newFunc('left', 10, function (){


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['left'];
            if (debug)print('DOMRectReadOnly.left.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('DOMRectReadOnly.toJSON.call', arguments)
            return mm.memory.private_data.get(this)
        }), writable:true, enumerable:true, configurable:true,



    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('DOMRectReadOnly.constructor.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
})
DOMRect = newFunc('DOMRect', 4, function DOMRect(x, y, width, height) {
    if (typeof x === 'object') {
        mm.memory.private_data.set(this, x)
    } else {
        mm.memory.private_data.set(this, {
            x, y, width, height
        })
    }

})




; delete DOMRect.prototype.constructor;
;
Object.defineProperties(DOMRect.prototype, {
    [Symbol.toStringTag]:{
        value:'DOMRect'
    },

    'x': {

        get: newFunc('x', 10, function (){


            if (!DOMRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['x'];
            if (debug)print('DOMRect.x.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('x', 1, function (value){
            if (debug)print('DOMRect.x.set', value)
            mm.memory.private_data.get(this)['x'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'y': {

        get: newFunc('y', 10, function (){


            if (!DOMRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['y'];
            if (debug)print('DOMRect.y.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('y', 1, function (value){
            if (debug)print('DOMRect.y.set', value)
            mm.memory.private_data.get(this)['y'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'width': {

        get: newFunc('width', 10, function (){


            if (!DOMRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['width'];
            if (debug)print('DOMRect.width.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('width', 1, function (value){
            if (debug)print('DOMRect.width.set', value)
            mm.memory.private_data.get(this)['width'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'height': {

        get: newFunc('height', 10, function (){


            if (!DOMRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['height'];
            if (debug)print('DOMRect.height.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('height', 1, function (value){
            if (debug)print('DOMRect.height.set', value)
            mm.memory.private_data.get(this)['height'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!DOMRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('DOMRect.constructor.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!DOMRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('DOMRect.toJSON.call', mm.memory.private_data.get(this))
            return mm.memory.private_data.get(this)
        }), writable:true, enumerable:true, configurable:true,



    },
})

Object.setPrototypeOf(DOMRect.prototype, DOMRectReadOnly.prototype)
Object.setPrototypeOf(DOMRect, DOMRectReadOnly)
DOMRectList = newFunc('DOMRectList', 1, function DOMRectList(value) {
    mm.memory.private_data.set(this, {
        val: value,
        length: value.length,

    })
    for (let i = 0; i < value.length; i++) {
        this[i] = value[i];

    }
})


Object.defineProperties(DOMRectList.prototype, {
    length: {

        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('DOMRectList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    item: {

        value: newFunc('item', 10, function item(v) {
            if (debug) print('DOMRectList.item.call', arguments)
            return mm.memory.private_data.get(this).val[v]
        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!DOMRectList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMRectList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

