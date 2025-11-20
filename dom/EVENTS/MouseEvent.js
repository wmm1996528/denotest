MouseEvent = newFunc('MouseEvent', 2, function MouseEvent(type, target) {
    // if (new.target !== MouseEvent) throw new TypeError(`Failed to construct 'MouseEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    print('MouseEvent.call')
    let t = createElementByName($('<input></input>'));
    mm.memory.private_data.set(this, {
        isTrusted: false,
        pointerType: 'mouse',
        clientX: 19,
        clientY: 18,
        altKey: false,
        bubbles: false,
        button: 0,
        buttons: 0,
        cancelBubble: false,
        cancelable: false,
        composed: false,
        ctrlKey: false,
        currentTarget: null,
        defaultPrevented: false,
        detail: 0,
        eventPhase: 0,
        fromElement: null,
        layerX: 19,
        layerY: 11,
        metaKey: false,
        movementX: 0,
        movementY: 0,
        offsetX: 3,
        offsetY: 11,
        pageX: 19,
        pageY: 18,
        path: [],
        relatedTarget: null,
        returnValue: true,
        screenX: 1402,
        screenY: 414,
        shiftKey: false,
        sourceCapabilities: null,
        srcElement: t,
        target: t,
        timeStamp: performance.now(),
        toElement: null,
        type: type,
        view: null,
        which: 1,
        x: 19,
        y: 18,
        activeElement: document.body,
    })
})


Object.defineProperties(MouseEvent.prototype, {
    [Symbol.toStringTag]: {
        value: 'MouseEvent'
    },

    'screenX': {

        get: newFunc('screenX', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['screenX'];
            if (debug) print('MouseEvent.screenX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'screenY': {

        get: newFunc('screenY', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['screenY'];
            if (debug) print('MouseEvent.screenY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'clientX': {

        get: newFunc('clientX', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['clientX'];
            if (debug) print('MouseEvent.clientX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'clientY': {

        get: newFunc('clientY', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['clientY'];
            if (debug) print('MouseEvent.clientY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'ctrlKey': {

        get: newFunc('ctrlKey', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ctrlKey'];
            if (debug) print('MouseEvent.ctrlKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'shiftKey': {

        get: newFunc('shiftKey', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['shiftKey'];
            if (debug) print('MouseEvent.shiftKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'altKey': {

        get: newFunc('altKey', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['altKey'];
            if (debug) print('MouseEvent.altKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'metaKey': {

        get: newFunc('metaKey', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['metaKey'];
            if (debug) print('MouseEvent.metaKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'button': {

        get: newFunc('button', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['button'];
            if (debug) print('MouseEvent.button.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'buttons': {

        get: newFunc('buttons', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['buttons'];
            if (debug) print('MouseEvent.buttons.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'relatedTarget': {

        get: newFunc('relatedTarget', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['relatedTarget'];
            if (debug) print('MouseEvent.relatedTarget.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'pageX': {

        get: newFunc('pageX', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['pageX'];
            if (debug) print('MouseEvent.pageX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'pageY': {

        get: newFunc('pageY', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['pageY'];
            if (debug) print('MouseEvent.pageY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'x': {

        get: newFunc('x', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['x'];
            if (debug) print('MouseEvent.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'y': {

        get: newFunc('y', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['y'];
            if (debug) print('MouseEvent.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'offsetX': {

        get: newFunc('offsetX', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['offsetX'];
            if (debug) print('MouseEvent.offsetX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'offsetY': {

        get: newFunc('offsetY', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['offsetY'];
            if (debug) print('MouseEvent.offsetY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'movementX': {

        get: newFunc('movementX', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['movementX'];
            if (debug) print('MouseEvent.movementX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'movementY': {

        get: newFunc('movementY', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['movementY'];
            if (debug) print('MouseEvent.movementY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'fromElement': {

        get: newFunc('fromElement', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['fromElement'];
            if (debug) print('MouseEvent.fromElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'toElement': {

        get: newFunc('toElement', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['toElement'];
            if (debug) print('MouseEvent.toElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'layerX': {

        get: newFunc('layerX', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['layerX'];
            if (debug) print('MouseEvent.layerX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'layerY': {

        get: newFunc('layerY', 10, function () {


            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['layerY'];
            if (debug) print('MouseEvent.layerY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'getModifierState': {

        value: newFunc('getModifierState', 10, function () {

            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MouseEvent.getModifierState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'initMouseEvent': {

        value: newFunc('initMouseEvent', 10, function () {

            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MouseEvent.initMouseEvent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!MouseEvent.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MouseEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Object.setPrototypeOf(MouseEvent.prototype, UIEvent.prototype);

