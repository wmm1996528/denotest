;
;StylePropertyMap = newFunc('StylePropertyMap', 1, function StylePropertyMap() {
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StylePropertyMap.prototype, {
    append: {

        value: newFunc('append', 10, function append() {
            if (debug) print('StylePropertyMap.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function clear() {
            if (debug) print('StylePropertyMap.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('StylePropertyMap.delete.call', arguments)

        }), writable:
            true, enumerable:
            true, configurable:
            true,


    },
    set: {

        value: newFunc('set', 10, function set() {
            if (debug) print('StylePropertyMap.set.call', arguments)

        }), writable:
            true, enumerable:
            true, configurable:
            true,


    }
    ,
})
;

;DOMStringMap = newFunc('DOMStringMap', 1, function DOMStringMap() {
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMStringMap.prototype, {});
;
;
;DOMStringList = newFunc('DOMStringList', 1, function DOMStringList() {
    mm.memory.private_data.set(this, {})
})

Object.defineProperties(DOMStringList.prototype, {
    length: {

        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('DOMStringList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    contains: {

        value: newFunc('contains', 10, function contains() {
            if (debug) print('DOMStringList.contains.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    item: {

        value: newFunc('item', 10, function item() {
            if (debug) print('DOMStringList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});
;
;
;DOMRectReadOnly = newFunc('DOMRectReadOnly', 1, function DOMRectReadOnly() {
    mm.memory.private_data.set(this, {
        "x": 20.1171875,
        "y": 8,
        "width": 12.953125,
        "height": 57.953125,
        "top": 8,
        "right": 33.0703125,
        "bottom": 65.953125,
        "left": 20.1171875
    })
})


;delete DOMRectReadOnly.prototype.constructor;
;
Object.defineProperties(DOMRectReadOnly.prototype, {
    [Symbol.toStringTag]: {
        value: 'DOMRectReadOnly'
    },

    'x': {

        get: newFunc('x', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['x'];
            if (debug) print('DOMRectReadOnly.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'y': {

        get: newFunc('y', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['y'];
            if (debug) print('DOMRectReadOnly.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'width': {

        get: newFunc('width', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['width'];
            if (debug) print('DOMRectReadOnly.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'height': {

        get: newFunc('height', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['height'];
            if (debug) print('DOMRectReadOnly.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'top': {

        get: newFunc('top', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['top'];
            if (debug) print('DOMRectReadOnly.top.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'right': {

        get: newFunc('right', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['right'];
            if (debug) print('DOMRectReadOnly.right.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'bottom': {

        get: newFunc('bottom', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['bottom'];
            if (debug) print('DOMRectReadOnly.bottom.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'left': {

        get: newFunc('left', 10, function () {


            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['left'];
            if (debug) print('DOMRectReadOnly.left.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMRectReadOnly.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!DOMRectReadOnly.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMRectReadOnly.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})