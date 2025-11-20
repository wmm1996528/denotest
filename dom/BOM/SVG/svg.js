SVGAngle = newFunc('SVGAngle', 1, function () {
    print('SVGAngle.call');
    mm.memory.private_data.set(this, {})
});


;delete SVGAngle.prototype.constructor;
;
Object.defineProperties(SVGAngle.prototype, {
    [Symbol.toStringTag]: {
        value: 'SVGAngle'
    },

    'unitType': {

        get: newFunc('unitType', 10, function () {


            if (!SVGAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['unitType'];
            if (debug) print('SVGAngle.unitType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'value': {

        get: newFunc('value', 10, function () {


            if (!SVGAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['value'];
            if (debug) print('SVGAngle.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('SVGAngle.value.set', value)
            mm.memory.private_data.get(this)['value'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'valueInSpecifiedUnits': {

        get: newFunc('valueInSpecifiedUnits', 10, function () {


            if (!SVGAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['valueInSpecifiedUnits'];
            if (debug) print('SVGAngle.valueInSpecifiedUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('valueInSpecifiedUnits', 1, function (value) {
            if (debug) print('SVGAngle.valueInSpecifiedUnits.set', value)
            mm.memory.private_data.get(this)['valueInSpecifiedUnits'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'valueAsString': {

        get: newFunc('valueAsString', 10, function () {


            if (!SVGAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['valueAsString'];
            if (debug) print('SVGAngle.valueAsString.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('valueAsString', 1, function (value) {
            if (debug) print('SVGAngle.valueAsString.set', value)
            mm.memory.private_data.get(this)['valueAsString'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'SVG_ANGLETYPE_UNKNOWN': {},
    'SVG_ANGLETYPE_UNSPECIFIED': {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    'SVG_ANGLETYPE_DEG': {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    'SVG_ANGLETYPE_RAD': {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    'SVG_ANGLETYPE_GRAD': {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    'convertToSpecifiedUnits': {

        value: newFunc('convertToSpecifiedUnits', 10, function () {

            if (!SVGAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('SVGAngle.convertToSpecifiedUnits.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'newValueSpecifiedUnits': {

        value: newFunc('newValueSpecifiedUnits', 10, function () {

            if (!SVGAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('SVGAngle.newValueSpecifiedUnits.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!SVGAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('SVGAngle.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

SVGAnimatedAngle = newFunc('SVGAnimatedAngle', 1, function () {
    print('SVGAnimatedAngle.call');
    mm.memory.private_data.set(this, {})
});


;delete SVGAnimatedAngle.prototype.constructor;
;
Object.defineProperties(SVGAnimatedAngle.prototype, {
    [Symbol.toStringTag]: {
        value: 'SVGAnimatedAngle'
    },

    'baseVal': {

        get: newFunc('baseVal', 10, function () {


            if (!SVGAnimatedAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['baseVal'];
            if (debug) print('SVGAnimatedAngle.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'animVal': {

        get: newFunc('animVal', 10, function () {


            if (!SVGAnimatedAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['animVal'];
            if (debug) print('SVGAnimatedAngle.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!SVGAnimatedAngle.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('SVGAnimatedAngle.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

SVGMetadataElement = newFunc('SVGMetadataElement', 1, function () {
    print('SVGMetadataElement.call');
    mm.memory.private_data.set(this, {})
});


;delete SVGMetadataElement.prototype.constructor;
;
Object.defineProperties(SVGMetadataElement.prototype, {
    [Symbol.toStringTag]: {
        value: 'SVGMetadataElement'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!SVGMetadataElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('SVGMetadataElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

;SVGViewElement = newFunc('SVGViewElement', 1, function () {
    print('SVGViewElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGViewElement.prototype, {
    viewBox: {

        get: newFunc('viewBox', 10, function () {
            let res = mm.memory.private_data.get(this).viewBox;
            if (debug) print('SVGViewElement.viewBox.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preserveAspectRatio: {

        get: newFunc('preserveAspectRatio', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAspectRatio;
            if (debug) print('SVGViewElement.preserveAspectRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    zoomAndPan: {

        get: newFunc('zoomAndPan', 10, function () {
            let res = mm.memory.private_data.get(this).zoomAndPan;
            if (debug) print('SVGViewElement.zoomAndPan.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('zoomAndPan', 1, function (value) {
            if (debug) print('SVGViewElement.zoomAndPan.set', value)
            mm.memory.private_data.get(this).zoomAndPan = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    SVG_ZOOMANDPAN_UNKNOWN: {},
    SVG_ZOOMANDPAN_DISABLE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_ZOOMANDPAN_MAGNIFY: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGViewElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGUseElement = newFunc('SVGUseElement', 1, function () {
    print('SVGUseElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGUseElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGUseElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGUseElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGUseElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGUseElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGUseElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGUseElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGUnitTypes = newFunc('SVGUnitTypes', 1, function () {
    print('SVGUnitTypes.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGUnitTypes.prototype, {
    SVG_UNIT_TYPE_UNKNOWN: {},
    SVG_UNIT_TYPE_USERSPACEONUSE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_UNIT_TYPE_OBJECTBOUNDINGBOX: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGUnitTypes.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGTransformList = newFunc('SVGTransformList', 1, function () {
    print('SVGTransformList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGTransformList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('SVGTransformList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfItems: {

        get: newFunc('numberOfItems', 10, function () {
            let res = mm.memory.private_data.get(this).numberOfItems;
            if (debug) print('SVGTransformList.numberOfItems.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appendItem: {

        value: newFunc('appendItem', 10, function () {
            if (debug) print('SVGTransformList.appendItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('SVGTransformList.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    consolidate: {

        value: newFunc('consolidate', 10, function () {
            if (debug) print('SVGTransformList.consolidate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGTransformFromMatrix: {

        value: newFunc('createSVGTransformFromMatrix', 10, function () {
            if (debug) print('SVGTransformList.createSVGTransformFromMatrix.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getItem: {

        value: newFunc('getItem', 10, function () {
            if (debug) print('SVGTransformList.getItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    initialize: {

        value: newFunc('initialize', 10, function () {
            if (debug) print('SVGTransformList.initialize.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertItemBefore: {

        value: newFunc('insertItemBefore', 10, function () {
            if (debug) print('SVGTransformList.insertItemBefore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeItem: {

        value: newFunc('removeItem', 10, function () {
            if (debug) print('SVGTransformList.removeItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceItem: {

        value: newFunc('replaceItem', 10, function () {
            if (debug) print('SVGTransformList.replaceItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGTransformList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGTransform = newFunc('SVGTransform', 1, function () {
    print('SVGTransform.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGTransform.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('SVGTransform.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    matrix: {

        get: newFunc('matrix', 10, function () {
            let res = mm.memory.private_data.get(this).matrix;
            if (debug) print('SVGTransform.matrix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    angle: {

        get: newFunc('angle', 10, function () {
            let res = mm.memory.private_data.get(this).angle;
            if (debug) print('SVGTransform.angle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    SVG_TRANSFORM_UNKNOWN: {},
    SVG_TRANSFORM_MATRIX: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_TRANSFORM_TRANSLATE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_TRANSFORM_SCALE: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_TRANSFORM_ROTATE: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_TRANSFORM_SKEWX: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    SVG_TRANSFORM_SKEWY: {

        value: 6, writable: false, enumerable: true, configurable: false,


    },
    setMatrix: {

        value: newFunc('setMatrix', 10, function () {
            if (debug) print('SVGTransform.setMatrix.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setRotate: {

        value: newFunc('setRotate', 10, function () {
            if (debug) print('SVGTransform.setRotate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setScale: {

        value: newFunc('setScale', 10, function () {
            if (debug) print('SVGTransform.setScale.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setSkewX: {

        value: newFunc('setSkewX', 10, function () {
            if (debug) print('SVGTransform.setSkewX.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setSkewY: {

        value: newFunc('setSkewY', 10, function () {
            if (debug) print('SVGTransform.setSkewY.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setTranslate: {

        value: newFunc('setTranslate', 10, function () {
            if (debug) print('SVGTransform.setTranslate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGTransform.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGTitleElement = newFunc('SVGTitleElement', 1, function () {
    print('SVGTitleElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGTitleElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGTitleElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

;SVGTextPathElement = newFunc('SVGTextPathElement', 1, function () {
    print('SVGTextPathElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGTextPathElement.prototype, {
    TEXTPATH_SPACINGTYPE_EXACT: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    TEXTPATH_SPACINGTYPE_AUTO: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    TEXTPATH_SPACINGTYPE_UNKNOWN: {},
    TEXTPATH_METHODTYPE_STRETCH: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    TEXTPATH_METHODTYPE_ALIGN: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    TEXTPATH_METHODTYPE_UNKNOWN: {},
    startOffset: {

        get: newFunc('startOffset', 10, function () {
            let res = mm.memory.private_data.get(this).startOffset;
            if (debug) print('SVGTextPathElement.startOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    method: {

        get: newFunc('method', 10, function () {
            let res = mm.memory.private_data.get(this).method;
            if (debug) print('SVGTextPathElement.method.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    spacing: {

        get: newFunc('spacing', 10, function () {
            let res = mm.memory.private_data.get(this).spacing;
            if (debug) print('SVGTextPathElement.spacing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGTextPathElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGTextPathElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

;SVGElement = newFunc('SVGElement', 1, function () {
    print('SVGElement.call');
    mm.memory.private_data.set(this, {
        style: new CSSStyleDeclaration(),
    })
})


Object.defineProperties(SVGElement.prototype, {
    className: {

        get: newFunc('className', 10, function () {
            let res = mm.memory.private_data.get(this).className;
            if (debug) print('SVGElement.className.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ownerSVGElement: {

        get: newFunc('ownerSVGElement', 10, function () {
            let res = mm.memory.private_data.get(this).ownerSVGElement;
            if (debug) print('SVGElement.ownerSVGElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    viewportElement: {

        get: newFunc('viewportElement', 10, function () {
            let res = mm.memory.private_data.get(this).viewportElement;
            if (debug) print('SVGElement.viewportElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onbeforexrselect: {

        get: newFunc('onbeforexrselect', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforexrselect;
            if (debug) print('SVGElement.onbeforexrselect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforexrselect', 1, function (value) {
            if (debug) print('SVGElement.onbeforexrselect.set', value)
            mm.memory.private_data.get(this).onbeforexrselect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onabort: {

        get: newFunc('onabort', 10, function () {
            let res = mm.memory.private_data.get(this).onabort;
            if (debug) print('SVGElement.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function (value) {
            if (debug) print('SVGElement.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforeinput: {

        get: newFunc('onbeforeinput', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforeinput;
            if (debug) print('SVGElement.onbeforeinput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforeinput', 1, function (value) {
            if (debug) print('SVGElement.onbeforeinput.set', value)
            mm.memory.private_data.get(this).onbeforeinput = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforematch: {

        get: newFunc('onbeforematch', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforematch;
            if (debug) print('SVGElement.onbeforematch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforematch', 1, function (value) {
            if (debug) print('SVGElement.onbeforematch.set', value)
            mm.memory.private_data.get(this).onbeforematch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforetoggle: {

        get: newFunc('onbeforetoggle', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforetoggle;
            if (debug) print('SVGElement.onbeforetoggle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforetoggle', 1, function (value) {
            if (debug) print('SVGElement.onbeforetoggle.set', value)
            mm.memory.private_data.get(this).onbeforetoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onblur: {

        get: newFunc('onblur', 10, function () {
            let res = mm.memory.private_data.get(this).onblur;
            if (debug) print('SVGElement.onblur.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onblur', 1, function (value) {
            if (debug) print('SVGElement.onblur.set', value)
            mm.memory.private_data.get(this).onblur = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncancel: {

        get: newFunc('oncancel', 10, function () {
            let res = mm.memory.private_data.get(this).oncancel;
            if (debug) print('SVGElement.oncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncancel', 1, function (value) {
            if (debug) print('SVGElement.oncancel.set', value)
            mm.memory.private_data.get(this).oncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncanplay: {

        get: newFunc('oncanplay', 10, function () {
            let res = mm.memory.private_data.get(this).oncanplay;
            if (debug) print('SVGElement.oncanplay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncanplay', 1, function (value) {
            if (debug) print('SVGElement.oncanplay.set', value)
            mm.memory.private_data.get(this).oncanplay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncanplaythrough: {

        get: newFunc('oncanplaythrough', 10, function () {
            let res = mm.memory.private_data.get(this).oncanplaythrough;
            if (debug) print('SVGElement.oncanplaythrough.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncanplaythrough', 1, function (value) {
            if (debug) print('SVGElement.oncanplaythrough.set', value)
            mm.memory.private_data.get(this).oncanplaythrough = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onchange: {

        get: newFunc('onchange', 10, function () {
            let res = mm.memory.private_data.get(this).onchange;
            if (debug) print('SVGElement.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function (value) {
            if (debug) print('SVGElement.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclick: {

        get: newFunc('onclick', 10, function () {
            let res = mm.memory.private_data.get(this).onclick;
            if (debug) print('SVGElement.onclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclick', 1, function (value) {
            if (debug) print('SVGElement.onclick.set', value)
            mm.memory.private_data.get(this).onclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclose: {

        get: newFunc('onclose', 10, function () {
            let res = mm.memory.private_data.get(this).onclose;
            if (debug) print('SVGElement.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function (value) {
            if (debug) print('SVGElement.onclose.set', value)
            mm.memory.private_data.get(this).onclose = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontentvisibilityautostatechange: {

        get: newFunc('oncontentvisibilityautostatechange', 10, function () {
            let res = mm.memory.private_data.get(this).oncontentvisibilityautostatechange;
            if (debug) print('SVGElement.oncontentvisibilityautostatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontentvisibilityautostatechange', 1, function (value) {
            if (debug) print('SVGElement.oncontentvisibilityautostatechange.set', value)
            mm.memory.private_data.get(this).oncontentvisibilityautostatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextlost: {

        get: newFunc('oncontextlost', 10, function () {
            let res = mm.memory.private_data.get(this).oncontextlost;
            if (debug) print('SVGElement.oncontextlost.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextlost', 1, function (value) {
            if (debug) print('SVGElement.oncontextlost.set', value)
            mm.memory.private_data.get(this).oncontextlost = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextmenu: {

        get: newFunc('oncontextmenu', 10, function () {
            let res = mm.memory.private_data.get(this).oncontextmenu;
            if (debug) print('SVGElement.oncontextmenu.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextmenu', 1, function (value) {
            if (debug) print('SVGElement.oncontextmenu.set', value)
            mm.memory.private_data.get(this).oncontextmenu = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextrestored: {

        get: newFunc('oncontextrestored', 10, function () {
            let res = mm.memory.private_data.get(this).oncontextrestored;
            if (debug) print('SVGElement.oncontextrestored.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextrestored', 1, function (value) {
            if (debug) print('SVGElement.oncontextrestored.set', value)
            mm.memory.private_data.get(this).oncontextrestored = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncuechange: {

        get: newFunc('oncuechange', 10, function () {
            let res = mm.memory.private_data.get(this).oncuechange;
            if (debug) print('SVGElement.oncuechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncuechange', 1, function (value) {
            if (debug) print('SVGElement.oncuechange.set', value)
            mm.memory.private_data.get(this).oncuechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondblclick: {

        get: newFunc('ondblclick', 10, function () {
            let res = mm.memory.private_data.get(this).ondblclick;
            if (debug) print('SVGElement.ondblclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondblclick', 1, function (value) {
            if (debug) print('SVGElement.ondblclick.set', value)
            mm.memory.private_data.get(this).ondblclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondrag: {

        get: newFunc('ondrag', 10, function () {
            let res = mm.memory.private_data.get(this).ondrag;
            if (debug) print('SVGElement.ondrag.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondrag', 1, function (value) {
            if (debug) print('SVGElement.ondrag.set', value)
            mm.memory.private_data.get(this).ondrag = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragend: {

        get: newFunc('ondragend', 10, function () {
            let res = mm.memory.private_data.get(this).ondragend;
            if (debug) print('SVGElement.ondragend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragend', 1, function (value) {
            if (debug) print('SVGElement.ondragend.set', value)
            mm.memory.private_data.get(this).ondragend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragenter: {

        get: newFunc('ondragenter', 10, function () {
            let res = mm.memory.private_data.get(this).ondragenter;
            if (debug) print('SVGElement.ondragenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragenter', 1, function (value) {
            if (debug) print('SVGElement.ondragenter.set', value)
            mm.memory.private_data.get(this).ondragenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragleave: {

        get: newFunc('ondragleave', 10, function () {
            let res = mm.memory.private_data.get(this).ondragleave;
            if (debug) print('SVGElement.ondragleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragleave', 1, function (value) {
            if (debug) print('SVGElement.ondragleave.set', value)
            mm.memory.private_data.get(this).ondragleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragover: {

        get: newFunc('ondragover', 10, function () {
            let res = mm.memory.private_data.get(this).ondragover;
            if (debug) print('SVGElement.ondragover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragover', 1, function (value) {
            if (debug) print('SVGElement.ondragover.set', value)
            mm.memory.private_data.get(this).ondragover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragstart: {

        get: newFunc('ondragstart', 10, function () {
            let res = mm.memory.private_data.get(this).ondragstart;
            if (debug) print('SVGElement.ondragstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragstart', 1, function (value) {
            if (debug) print('SVGElement.ondragstart.set', value)
            mm.memory.private_data.get(this).ondragstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondrop: {

        get: newFunc('ondrop', 10, function () {
            let res = mm.memory.private_data.get(this).ondrop;
            if (debug) print('SVGElement.ondrop.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondrop', 1, function (value) {
            if (debug) print('SVGElement.ondrop.set', value)
            mm.memory.private_data.get(this).ondrop = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondurationchange: {

        get: newFunc('ondurationchange', 10, function () {
            let res = mm.memory.private_data.get(this).ondurationchange;
            if (debug) print('SVGElement.ondurationchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondurationchange', 1, function (value) {
            if (debug) print('SVGElement.ondurationchange.set', value)
            mm.memory.private_data.get(this).ondurationchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onemptied: {

        get: newFunc('onemptied', 10, function () {
            let res = mm.memory.private_data.get(this).onemptied;
            if (debug) print('SVGElement.onemptied.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onemptied', 1, function (value) {
            if (debug) print('SVGElement.onemptied.set', value)
            mm.memory.private_data.get(this).onemptied = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onended: {

        get: newFunc('onended', 10, function () {
            let res = mm.memory.private_data.get(this).onended;
            if (debug) print('SVGElement.onended.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onended', 1, function (value) {
            if (debug) print('SVGElement.onended.set', value)
            mm.memory.private_data.get(this).onended = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('SVGElement.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('SVGElement.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onfocus: {

        get: newFunc('onfocus', 10, function () {
            let res = mm.memory.private_data.get(this).onfocus;
            if (debug) print('SVGElement.onfocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfocus', 1, function (value) {
            if (debug) print('SVGElement.onfocus.set', value)
            mm.memory.private_data.get(this).onfocus = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onformdata: {

        get: newFunc('onformdata', 10, function () {
            let res = mm.memory.private_data.get(this).onformdata;
            if (debug) print('SVGElement.onformdata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onformdata', 1, function (value) {
            if (debug) print('SVGElement.onformdata.set', value)
            mm.memory.private_data.get(this).onformdata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninput: {

        get: newFunc('oninput', 10, function () {
            let res = mm.memory.private_data.get(this).oninput;
            if (debug) print('SVGElement.oninput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninput', 1, function (value) {
            if (debug) print('SVGElement.oninput.set', value)
            mm.memory.private_data.get(this).oninput = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninvalid: {

        get: newFunc('oninvalid', 10, function () {
            let res = mm.memory.private_data.get(this).oninvalid;
            if (debug) print('SVGElement.oninvalid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninvalid', 1, function (value) {
            if (debug) print('SVGElement.oninvalid.set', value)
            mm.memory.private_data.get(this).oninvalid = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeydown: {

        get: newFunc('onkeydown', 10, function () {
            let res = mm.memory.private_data.get(this).onkeydown;
            if (debug) print('SVGElement.onkeydown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeydown', 1, function (value) {
            if (debug) print('SVGElement.onkeydown.set', value)
            mm.memory.private_data.get(this).onkeydown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeypress: {

        get: newFunc('onkeypress', 10, function () {
            let res = mm.memory.private_data.get(this).onkeypress;
            if (debug) print('SVGElement.onkeypress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeypress', 1, function (value) {
            if (debug) print('SVGElement.onkeypress.set', value)
            mm.memory.private_data.get(this).onkeypress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeyup: {

        get: newFunc('onkeyup', 10, function () {
            let res = mm.memory.private_data.get(this).onkeyup;
            if (debug) print('SVGElement.onkeyup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeyup', 1, function (value) {
            if (debug) print('SVGElement.onkeyup.set', value)
            mm.memory.private_data.get(this).onkeyup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onload: {

        get: newFunc('onload', 10, function () {
            let res = mm.memory.private_data.get(this).onload;
            if (debug) print('SVGElement.onload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onload', 1, function (value) {
            if (debug) print('SVGElement.onload.set', value)
            mm.memory.private_data.get(this).onload = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadeddata: {

        get: newFunc('onloadeddata', 10, function () {
            let res = mm.memory.private_data.get(this).onloadeddata;
            if (debug) print('SVGElement.onloadeddata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadeddata', 1, function (value) {
            if (debug) print('SVGElement.onloadeddata.set', value)
            mm.memory.private_data.get(this).onloadeddata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadedmetadata: {

        get: newFunc('onloadedmetadata', 10, function () {
            let res = mm.memory.private_data.get(this).onloadedmetadata;
            if (debug) print('SVGElement.onloadedmetadata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadedmetadata', 1, function (value) {
            if (debug) print('SVGElement.onloadedmetadata.set', value)
            mm.memory.private_data.get(this).onloadedmetadata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadstart: {

        get: newFunc('onloadstart', 10, function () {
            let res = mm.memory.private_data.get(this).onloadstart;
            if (debug) print('SVGElement.onloadstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadstart', 1, function (value) {
            if (debug) print('SVGElement.onloadstart.set', value)
            mm.memory.private_data.get(this).onloadstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousedown: {

        get: newFunc('onmousedown', 10, function () {
            let res = mm.memory.private_data.get(this).onmousedown;
            if (debug) print('SVGElement.onmousedown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousedown', 1, function (value) {
            if (debug) print('SVGElement.onmousedown.set', value)
            mm.memory.private_data.get(this).onmousedown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseenter: {

        get: newFunc('onmouseenter', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseenter;
            if (debug) print('SVGElement.onmouseenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseenter', 1, function (value) {
            if (debug) print('SVGElement.onmouseenter.set', value)
            mm.memory.private_data.get(this).onmouseenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseleave: {

        get: newFunc('onmouseleave', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseleave;
            if (debug) print('SVGElement.onmouseleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseleave', 1, function (value) {
            if (debug) print('SVGElement.onmouseleave.set', value)
            mm.memory.private_data.get(this).onmouseleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousemove: {

        get: newFunc('onmousemove', 10, function () {
            let res = mm.memory.private_data.get(this).onmousemove;
            if (debug) print('SVGElement.onmousemove.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousemove', 1, function (value) {
            if (debug) print('SVGElement.onmousemove.set', value)
            mm.memory.private_data.get(this).onmousemove = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseout: {

        get: newFunc('onmouseout', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseout;
            if (debug) print('SVGElement.onmouseout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseout', 1, function (value) {
            if (debug) print('SVGElement.onmouseout.set', value)
            mm.memory.private_data.get(this).onmouseout = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseover: {

        get: newFunc('onmouseover', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseover;
            if (debug) print('SVGElement.onmouseover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseover', 1, function (value) {
            if (debug) print('SVGElement.onmouseover.set', value)
            mm.memory.private_data.get(this).onmouseover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseup: {

        get: newFunc('onmouseup', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseup;
            if (debug) print('SVGElement.onmouseup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseup', 1, function (value) {
            if (debug) print('SVGElement.onmouseup.set', value)
            mm.memory.private_data.get(this).onmouseup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousewheel: {

        get: newFunc('onmousewheel', 10, function () {
            let res = mm.memory.private_data.get(this).onmousewheel;
            if (debug) print('SVGElement.onmousewheel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousewheel', 1, function (value) {
            if (debug) print('SVGElement.onmousewheel.set', value)
            mm.memory.private_data.get(this).onmousewheel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpause: {

        get: newFunc('onpause', 10, function () {
            let res = mm.memory.private_data.get(this).onpause;
            if (debug) print('SVGElement.onpause.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpause', 1, function (value) {
            if (debug) print('SVGElement.onpause.set', value)
            mm.memory.private_data.get(this).onpause = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onplay: {

        get: newFunc('onplay', 10, function () {
            let res = mm.memory.private_data.get(this).onplay;
            if (debug) print('SVGElement.onplay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onplay', 1, function (value) {
            if (debug) print('SVGElement.onplay.set', value)
            mm.memory.private_data.get(this).onplay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onplaying: {

        get: newFunc('onplaying', 10, function () {
            let res = mm.memory.private_data.get(this).onplaying;
            if (debug) print('SVGElement.onplaying.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onplaying', 1, function (value) {
            if (debug) print('SVGElement.onplaying.set', value)
            mm.memory.private_data.get(this).onplaying = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onprogress: {

        get: newFunc('onprogress', 10, function () {
            let res = mm.memory.private_data.get(this).onprogress;
            if (debug) print('SVGElement.onprogress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprogress', 1, function (value) {
            if (debug) print('SVGElement.onprogress.set', value)
            mm.memory.private_data.get(this).onprogress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onratechange: {

        get: newFunc('onratechange', 10, function () {
            let res = mm.memory.private_data.get(this).onratechange;
            if (debug) print('SVGElement.onratechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onratechange', 1, function (value) {
            if (debug) print('SVGElement.onratechange.set', value)
            mm.memory.private_data.get(this).onratechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onreset: {

        get: newFunc('onreset', 10, function () {
            let res = mm.memory.private_data.get(this).onreset;
            if (debug) print('SVGElement.onreset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onreset', 1, function (value) {
            if (debug) print('SVGElement.onreset.set', value)
            mm.memory.private_data.get(this).onreset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onresize: {

        get: newFunc('onresize', 10, function () {
            let res = mm.memory.private_data.get(this).onresize;
            if (debug) print('SVGElement.onresize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresize', 1, function (value) {
            if (debug) print('SVGElement.onresize.set', value)
            mm.memory.private_data.get(this).onresize = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscroll: {

        get: newFunc('onscroll', 10, function () {
            let res = mm.memory.private_data.get(this).onscroll;
            if (debug) print('SVGElement.onscroll.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscroll', 1, function (value) {
            if (debug) print('SVGElement.onscroll.set', value)
            mm.memory.private_data.get(this).onscroll = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsecuritypolicyviolation: {

        get: newFunc('onsecuritypolicyviolation', 10, function () {
            let res = mm.memory.private_data.get(this).onsecuritypolicyviolation;
            if (debug) print('SVGElement.onsecuritypolicyviolation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsecuritypolicyviolation', 1, function (value) {
            if (debug) print('SVGElement.onsecuritypolicyviolation.set', value)
            mm.memory.private_data.get(this).onsecuritypolicyviolation = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onseeked: {

        get: newFunc('onseeked', 10, function () {
            let res = mm.memory.private_data.get(this).onseeked;
            if (debug) print('SVGElement.onseeked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onseeked', 1, function (value) {
            if (debug) print('SVGElement.onseeked.set', value)
            mm.memory.private_data.get(this).onseeked = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onseeking: {

        get: newFunc('onseeking', 10, function () {
            let res = mm.memory.private_data.get(this).onseeking;
            if (debug) print('SVGElement.onseeking.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onseeking', 1, function (value) {
            if (debug) print('SVGElement.onseeking.set', value)
            mm.memory.private_data.get(this).onseeking = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselect: {

        get: newFunc('onselect', 10, function () {
            let res = mm.memory.private_data.get(this).onselect;
            if (debug) print('SVGElement.onselect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselect', 1, function (value) {
            if (debug) print('SVGElement.onselect.set', value)
            mm.memory.private_data.get(this).onselect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onslotchange: {

        get: newFunc('onslotchange', 10, function () {
            let res = mm.memory.private_data.get(this).onslotchange;
            if (debug) print('SVGElement.onslotchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onslotchange', 1, function (value) {
            if (debug) print('SVGElement.onslotchange.set', value)
            mm.memory.private_data.get(this).onslotchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onstalled: {

        get: newFunc('onstalled', 10, function () {
            let res = mm.memory.private_data.get(this).onstalled;
            if (debug) print('SVGElement.onstalled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstalled', 1, function (value) {
            if (debug) print('SVGElement.onstalled.set', value)
            mm.memory.private_data.get(this).onstalled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsubmit: {

        get: newFunc('onsubmit', 10, function () {
            let res = mm.memory.private_data.get(this).onsubmit;
            if (debug) print('SVGElement.onsubmit.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsubmit', 1, function (value) {
            if (debug) print('SVGElement.onsubmit.set', value)
            mm.memory.private_data.get(this).onsubmit = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsuspend: {

        get: newFunc('onsuspend', 10, function () {
            let res = mm.memory.private_data.get(this).onsuspend;
            if (debug) print('SVGElement.onsuspend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsuspend', 1, function (value) {
            if (debug) print('SVGElement.onsuspend.set', value)
            mm.memory.private_data.get(this).onsuspend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontimeupdate: {

        get: newFunc('ontimeupdate', 10, function () {
            let res = mm.memory.private_data.get(this).ontimeupdate;
            if (debug) print('SVGElement.ontimeupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontimeupdate', 1, function (value) {
            if (debug) print('SVGElement.ontimeupdate.set', value)
            mm.memory.private_data.get(this).ontimeupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontoggle: {

        get: newFunc('ontoggle', 10, function () {
            let res = mm.memory.private_data.get(this).ontoggle;
            if (debug) print('SVGElement.ontoggle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontoggle', 1, function (value) {
            if (debug) print('SVGElement.ontoggle.set', value)
            mm.memory.private_data.get(this).ontoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onvolumechange: {

        get: newFunc('onvolumechange', 10, function () {
            let res = mm.memory.private_data.get(this).onvolumechange;
            if (debug) print('SVGElement.onvolumechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onvolumechange', 1, function (value) {
            if (debug) print('SVGElement.onvolumechange.set', value)
            mm.memory.private_data.get(this).onvolumechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwaiting: {

        get: newFunc('onwaiting', 10, function () {
            let res = mm.memory.private_data.get(this).onwaiting;
            if (debug) print('SVGElement.onwaiting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwaiting', 1, function (value) {
            if (debug) print('SVGElement.onwaiting.set', value)
            mm.memory.private_data.get(this).onwaiting = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationend: {

        get: newFunc('onwebkitanimationend', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkitanimationend;
            if (debug) print('SVGElement.onwebkitanimationend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationend', 1, function (value) {
            if (debug) print('SVGElement.onwebkitanimationend.set', value)
            mm.memory.private_data.get(this).onwebkitanimationend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationiteration: {

        get: newFunc('onwebkitanimationiteration', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkitanimationiteration;
            if (debug) print('SVGElement.onwebkitanimationiteration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationiteration', 1, function (value) {
            if (debug) print('SVGElement.onwebkitanimationiteration.set', value)
            mm.memory.private_data.get(this).onwebkitanimationiteration = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationstart: {

        get: newFunc('onwebkitanimationstart', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkitanimationstart;
            if (debug) print('SVGElement.onwebkitanimationstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationstart', 1, function (value) {
            if (debug) print('SVGElement.onwebkitanimationstart.set', value)
            mm.memory.private_data.get(this).onwebkitanimationstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkittransitionend: {

        get: newFunc('onwebkittransitionend', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkittransitionend;
            if (debug) print('SVGElement.onwebkittransitionend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkittransitionend', 1, function (value) {
            if (debug) print('SVGElement.onwebkittransitionend.set', value)
            mm.memory.private_data.get(this).onwebkittransitionend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwheel: {

        get: newFunc('onwheel', 10, function () {
            let res = mm.memory.private_data.get(this).onwheel;
            if (debug) print('SVGElement.onwheel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwheel', 1, function (value) {
            if (debug) print('SVGElement.onwheel.set', value)
            mm.memory.private_data.get(this).onwheel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onauxclick: {

        get: newFunc('onauxclick', 10, function () {
            let res = mm.memory.private_data.get(this).onauxclick;
            if (debug) print('SVGElement.onauxclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onauxclick', 1, function (value) {
            if (debug) print('SVGElement.onauxclick.set', value)
            mm.memory.private_data.get(this).onauxclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ongotpointercapture: {

        get: newFunc('ongotpointercapture', 10, function () {
            let res = mm.memory.private_data.get(this).ongotpointercapture;
            if (debug) print('SVGElement.ongotpointercapture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ongotpointercapture', 1, function (value) {
            if (debug) print('SVGElement.ongotpointercapture.set', value)
            mm.memory.private_data.get(this).ongotpointercapture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onlostpointercapture: {

        get: newFunc('onlostpointercapture', 10, function () {
            let res = mm.memory.private_data.get(this).onlostpointercapture;
            if (debug) print('SVGElement.onlostpointercapture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onlostpointercapture', 1, function (value) {
            if (debug) print('SVGElement.onlostpointercapture.set', value)
            mm.memory.private_data.get(this).onlostpointercapture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerdown: {

        get: newFunc('onpointerdown', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerdown;
            if (debug) print('SVGElement.onpointerdown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerdown', 1, function (value) {
            if (debug) print('SVGElement.onpointerdown.set', value)
            mm.memory.private_data.get(this).onpointerdown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointermove: {

        get: newFunc('onpointermove', 10, function () {
            let res = mm.memory.private_data.get(this).onpointermove;
            if (debug) print('SVGElement.onpointermove.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointermove', 1, function (value) {
            if (debug) print('SVGElement.onpointermove.set', value)
            mm.memory.private_data.get(this).onpointermove = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerrawupdate: {

        get: newFunc('onpointerrawupdate', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerrawupdate;
            if (debug) print('SVGElement.onpointerrawupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerrawupdate', 1, function (value) {
            if (debug) print('SVGElement.onpointerrawupdate.set', value)
            mm.memory.private_data.get(this).onpointerrawupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerup: {

        get: newFunc('onpointerup', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerup;
            if (debug) print('SVGElement.onpointerup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerup', 1, function (value) {
            if (debug) print('SVGElement.onpointerup.set', value)
            mm.memory.private_data.get(this).onpointerup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointercancel: {

        get: newFunc('onpointercancel', 10, function () {
            let res = mm.memory.private_data.get(this).onpointercancel;
            if (debug) print('SVGElement.onpointercancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointercancel', 1, function (value) {
            if (debug) print('SVGElement.onpointercancel.set', value)
            mm.memory.private_data.get(this).onpointercancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerover: {

        get: newFunc('onpointerover', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerover;
            if (debug) print('SVGElement.onpointerover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerover', 1, function (value) {
            if (debug) print('SVGElement.onpointerover.set', value)
            mm.memory.private_data.get(this).onpointerover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerout: {

        get: newFunc('onpointerout', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerout;
            if (debug) print('SVGElement.onpointerout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerout', 1, function (value) {
            if (debug) print('SVGElement.onpointerout.set', value)
            mm.memory.private_data.get(this).onpointerout = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerenter: {

        get: newFunc('onpointerenter', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerenter;
            if (debug) print('SVGElement.onpointerenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerenter', 1, function (value) {
            if (debug) print('SVGElement.onpointerenter.set', value)
            mm.memory.private_data.get(this).onpointerenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerleave: {

        get: newFunc('onpointerleave', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerleave;
            if (debug) print('SVGElement.onpointerleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerleave', 1, function (value) {
            if (debug) print('SVGElement.onpointerleave.set', value)
            mm.memory.private_data.get(this).onpointerleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselectstart: {

        get: newFunc('onselectstart', 10, function () {
            let res = mm.memory.private_data.get(this).onselectstart;
            if (debug) print('SVGElement.onselectstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectstart', 1, function (value) {
            if (debug) print('SVGElement.onselectstart.set', value)
            mm.memory.private_data.get(this).onselectstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselectionchange: {

        get: newFunc('onselectionchange', 10, function () {
            let res = mm.memory.private_data.get(this).onselectionchange;
            if (debug) print('SVGElement.onselectionchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectionchange', 1, function (value) {
            if (debug) print('SVGElement.onselectionchange.set', value)
            mm.memory.private_data.get(this).onselectionchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onanimationend: {

        get: newFunc('onanimationend', 10, function () {
            let res = mm.memory.private_data.get(this).onanimationend;
            if (debug) print('SVGElement.onanimationend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationend', 1, function (value) {
            if (debug) print('SVGElement.onanimationend.set', value)
            mm.memory.private_data.get(this).onanimationend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onanimationiteration: {

        get: newFunc('onanimationiteration', 10, function () {
            let res = mm.memory.private_data.get(this).onanimationiteration;
            if (debug) print('SVGElement.onanimationiteration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationiteration', 1, function (value) {
            if (debug) print('SVGElement.onanimationiteration.set', value)
            mm.memory.private_data.get(this).onanimationiteration = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onanimationstart: {

        get: newFunc('onanimationstart', 10, function () {
            let res = mm.memory.private_data.get(this).onanimationstart;
            if (debug) print('SVGElement.onanimationstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationstart', 1, function (value) {
            if (debug) print('SVGElement.onanimationstart.set', value)
            mm.memory.private_data.get(this).onanimationstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitionrun: {

        get: newFunc('ontransitionrun', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitionrun;
            if (debug) print('SVGElement.ontransitionrun.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionrun', 1, function (value) {
            if (debug) print('SVGElement.ontransitionrun.set', value)
            mm.memory.private_data.get(this).ontransitionrun = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitionstart: {

        get: newFunc('ontransitionstart', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitionstart;
            if (debug) print('SVGElement.ontransitionstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionstart', 1, function (value) {
            if (debug) print('SVGElement.ontransitionstart.set', value)
            mm.memory.private_data.get(this).ontransitionstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitionend: {

        get: newFunc('ontransitionend', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitionend;
            if (debug) print('SVGElement.ontransitionend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionend', 1, function (value) {
            if (debug) print('SVGElement.ontransitionend.set', value)
            mm.memory.private_data.get(this).ontransitionend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitioncancel: {

        get: newFunc('ontransitioncancel', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitioncancel;
            if (debug) print('SVGElement.ontransitioncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitioncancel', 1, function (value) {
            if (debug) print('SVGElement.ontransitioncancel.set', value)
            mm.memory.private_data.get(this).ontransitioncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncopy: {

        get: newFunc('oncopy', 10, function () {
            let res = mm.memory.private_data.get(this).oncopy;
            if (debug) print('SVGElement.oncopy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncopy', 1, function (value) {
            if (debug) print('SVGElement.oncopy.set', value)
            mm.memory.private_data.get(this).oncopy = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncut: {

        get: newFunc('oncut', 10, function () {
            let res = mm.memory.private_data.get(this).oncut;
            if (debug) print('SVGElement.oncut.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncut', 1, function (value) {
            if (debug) print('SVGElement.oncut.set', value)
            mm.memory.private_data.get(this).oncut = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpaste: {

        get: newFunc('onpaste', 10, function () {
            let res = mm.memory.private_data.get(this).onpaste;
            if (debug) print('SVGElement.onpaste.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpaste', 1, function (value) {
            if (debug) print('SVGElement.onpaste.set', value)
            mm.memory.private_data.get(this).onpaste = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    dataset: {

        get: newFunc('dataset', 10, function () {
            let res = mm.memory.private_data.get(this).dataset;
            if (debug) print('SVGElement.dataset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    nonce: {

        get: newFunc('nonce', 10, function () {
            let res = mm.memory.private_data.get(this).nonce;
            if (debug) print('SVGElement.nonce.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('nonce', 1, function (value) {
            if (debug) print('SVGElement.nonce.set', value)
            mm.memory.private_data.get(this).nonce = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    autofocus: {

        get: newFunc('autofocus', 10, function () {
            let res = mm.memory.private_data.get(this).autofocus;
            if (debug) print('SVGElement.autofocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('autofocus', 1, function (value) {
            if (debug) print('SVGElement.autofocus.set', value)
            mm.memory.private_data.get(this).autofocus = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    tabIndex: {

        get: newFunc('tabIndex', 10, function () {
            let res = mm.memory.private_data.get(this).tabIndex;
            if (debug) print('SVGElement.tabIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('tabIndex', 1, function (value) {
            if (debug) print('SVGElement.tabIndex.set', value)
            mm.memory.private_data.get(this).tabIndex = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('SVGElement.style.get',typeof  res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('SVGElement.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    attributeStyleMap: {

        get: newFunc('attributeStyleMap', 10, function () {
            let res = mm.memory.private_data.get(this).attributeStyleMap;
            if (debug) print('SVGElement.attributeStyleMap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    blur: {

        value: newFunc('blur', 10, function () {
            if (debug) print('SVGElement.blur.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    focus: {

        value: newFunc('focus', 10, function () {
            if (debug) print('SVGElement.focus.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    onscrollend: {

        get: newFunc('onscrollend', 10, function () {
            let res = mm.memory.private_data.get(this).onscrollend;
            if (debug) print('SVGElement.onscrollend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollend', 1, function (value) {
            if (debug) print('SVGElement.onscrollend.set', value)
            mm.memory.private_data.get(this).onscrollend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscrollsnapchange: {

        get: newFunc('onscrollsnapchange', 10, function () {
            let res = mm.memory.private_data.get(this).onscrollsnapchange;
            if (debug) print('SVGElement.onscrollsnapchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchange', 1, function (value) {
            if (debug) print('SVGElement.onscrollsnapchange.set', value)
            mm.memory.private_data.get(this).onscrollsnapchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscrollsnapchanging: {

        get: newFunc('onscrollsnapchanging', 10, function () {
            let res = mm.memory.private_data.get(this).onscrollsnapchanging;
            if (debug) print('SVGElement.onscrollsnapchanging.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchanging', 1, function (value) {
            if (debug) print('SVGElement.onscrollsnapchanging.set', value)
            mm.memory.private_data.get(this).onscrollsnapchanging = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
Object.setPrototypeOf(SVGElement.prototype, Element.prototype);
Object.setPrototypeOf(SVGElement, Element);
SVGElement.__proto__ = Element.prototype


;SVGGraphicsElement = newFunc('SVGGraphicsElement', 1, function () {
    print('SVGGraphicsElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGGraphicsElement.prototype, {
    transform: {

        get: newFunc('transform', 10, function () {
            let res = mm.memory.private_data.get(this).transform;
            if (debug) print('SVGGraphicsElement.transform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    nearestViewportElement: {

        get: newFunc('nearestViewportElement', 10, function () {
            let res = mm.memory.private_data.get(this).nearestViewportElement;
            if (debug) print('SVGGraphicsElement.nearestViewportElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    farthestViewportElement: {

        get: newFunc('farthestViewportElement', 10, function () {
            let res = mm.memory.private_data.get(this).farthestViewportElement;
            if (debug) print('SVGGraphicsElement.farthestViewportElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    requiredExtensions: {

        get: newFunc('requiredExtensions', 10, function () {
            let res = mm.memory.private_data.get(this).requiredExtensions;
            if (debug) print('SVGGraphicsElement.requiredExtensions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    systemLanguage: {

        get: newFunc('systemLanguage', 10, function () {
            let res = mm.memory.private_data.get(this).systemLanguage;
            if (debug) print('SVGGraphicsElement.systemLanguage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getBBox: {

        value: newFunc('getBBox', 10, function () {
            if (debug) print('SVGGraphicsElement.getBBox.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getCTM: {

        value: newFunc('getCTM', 10, function () {
            if (debug) print('SVGGraphicsElement.getCTM.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getScreenCTM: {

        value: newFunc('getScreenCTM', 10, function () {
            if (debug) print('SVGGraphicsElement.getScreenCTM.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGGraphicsElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
Object.setPrototypeOf(SVGGraphicsElement.prototype, SVGElement.prototype);
Object.setPrototypeOf(SVGGraphicsElement, SVGElement);
SVGGraphicsElement.__proto__ = SVGElement.prototype

;SVGTextContentElement = newFunc('SVGTextContentElement', 1, function () {
    print('SVGTextContentElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGTextContentElement.prototype, {
    [Symbol.toStringTag]: {value: 'SVGTextContentElement'},
    LENGTHADJUST_SPACINGANDGLYPHS: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    LENGTHADJUST_SPACING: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    LENGTHADJUST_UNKNOWN: {},
    textLength: {

        get: newFunc('textLength', 10, function () {

            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).textLength;
            if (debug) print('SVGTextContentElement.textLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lengthAdjust: {

        get: newFunc('lengthAdjust', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).lengthAdjust;
            if (debug) print('SVGTextContentElement.lengthAdjust.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getCharNumAtPosition: {

        value: newFunc('getCharNumAtPosition', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.getCharNumAtPosition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getComputedTextLength: {

        value: newFunc('getComputedTextLength', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = Math.random() * 100 + 20 + Math.random();
            if (this.ranId === 'text0'){
                res = 0.1111;
            }
            if (debug) print('SVGTextContentElement.getComputedTextLength.call', this, res)

            return res;


        }), writable: true, enumerable: true, configurable: true,


    },
    getEndPositionOfChar: {

        value: newFunc('getEndPositionOfChar', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.getEndPositionOfChar.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getExtentOfChar: {

        value: newFunc('getExtentOfChar', 10, function () {
            // if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
            //     throw new TypeError("Illegal constructor");
            // }
            if (debug) print('SVGTextContentElement.getExtentOfChar.call', arguments)
            return new DOMRect(20.1171875, 8, 12.953125, 57.953125)

        }), writable: true, enumerable: true, configurable: true,


    },
    getNumberOfChars: {

        value: newFunc('getNumberOfChars', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.getNumberOfChars.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getRotationOfChar: {

        value: newFunc('getRotationOfChar', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.getRotationOfChar.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getStartPositionOfChar: {

        value: newFunc('getStartPositionOfChar', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.getStartPositionOfChar.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSubStringLength: {

        value: newFunc('getSubStringLength', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.getSubStringLength.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectSubString: {

        value: newFunc('selectSubString', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.selectSubString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (!SVGTextContentElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('SVGTextContentElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Object.setPrototypeOf(SVGTextContentElement.prototype, SVGGraphicsElement.prototype);
Object.setPrototypeOf(SVGTextContentElement, SVGGraphicsElement);
SVGTextContentElement.__proto__ = SVGGraphicsElement.prototype


;SVGTextPositioningElement = newFunc('SVGTextPositioningElement', 1, function () {
    print('SVGTextPositioningElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGTextPositioningElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGTextPositioningElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGTextPositioningElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dx: {

        get: newFunc('dx', 10, function () {
            let res = mm.memory.private_data.get(this).dx;
            if (debug) print('SVGTextPositioningElement.dx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dy: {

        get: newFunc('dy', 10, function () {
            let res = mm.memory.private_data.get(this).dy;
            if (debug) print('SVGTextPositioningElement.dy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rotate: {

        get: newFunc('rotate', 10, function () {
            let res = mm.memory.private_data.get(this).rotate;
            if (debug) print('SVGTextPositioningElement.rotate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGTextPositioningElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Object.setPrototypeOf(SVGTextPositioningElement.prototype, SVGTextContentElement.prototype);
Object.setPrototypeOf(SVGTextPositioningElement, SVGTextContentElement);
SVGTextPositioningElement.__proto__ = SVGTextContentElement.prototype

;SVGTextElement = newFunc('SVGTextElement', 1, function () {
    print('SVGTextElement.call');
    mm.memory.private_data.set(this, {
        style: new CSSStyleDeclaration(),
    })
})


Object.defineProperties(SVGTextElement.prototype, {
    [Symbol.toStringTag]: {value: 'SVGTextElement'},

    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGTextElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


Object.setPrototypeOf(SVGTextElement.prototype, SVGTextPositioningElement.prototype);
Object.setPrototypeOf(SVGTextElement, SVGTextPositioningElement);
SVGTextElement.__proto__ = SVGTextPositioningElement.prototype


;SVGTSpanElement = newFunc('SVGTSpanElement', 1, function () {
    print('SVGTSpanElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGTSpanElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGTSpanElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGSymbolElement = newFunc('SVGSymbolElement', 1, function () {
    print('SVGSymbolElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGSymbolElement.prototype, {
    viewBox: {

        get: newFunc('viewBox', 10, function () {
            let res = mm.memory.private_data.get(this).viewBox;
            if (debug) print('SVGSymbolElement.viewBox.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preserveAspectRatio: {

        get: newFunc('preserveAspectRatio', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAspectRatio;
            if (debug) print('SVGSymbolElement.preserveAspectRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGSymbolElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGSwitchElement = newFunc('SVGSwitchElement', 1, function () {
    print('SVGSwitchElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGSwitchElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGSwitchElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGStyleElement = newFunc('SVGStyleElement', 1, function () {
    print('SVGStyleElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGStyleElement.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('SVGStyleElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('SVGStyleElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    media: {

        get: newFunc('media', 10, function () {
            let res = mm.memory.private_data.get(this).media;
            if (debug) print('SVGStyleElement.media.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function (value) {
            if (debug) print('SVGStyleElement.media.set', value)
            mm.memory.private_data.get(this).media = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    title: {

        get: newFunc('title', 10, function () {
            let res = mm.memory.private_data.get(this).title;
            if (debug) print('SVGStyleElement.title.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('title', 1, function (value) {
            if (debug) print('SVGStyleElement.title.set', value)
            mm.memory.private_data.get(this).title = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sheet: {

        get: newFunc('sheet', 10, function () {
            let res = mm.memory.private_data.get(this).sheet;
            if (debug) print('SVGStyleElement.sheet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('SVGStyleElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('SVGStyleElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGStyleElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGStringList = newFunc('SVGStringList', 1, function () {
    print('SVGStringList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGStringList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('SVGStringList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfItems: {

        get: newFunc('numberOfItems', 10, function () {
            let res = mm.memory.private_data.get(this).numberOfItems;
            if (debug) print('SVGStringList.numberOfItems.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appendItem: {

        value: newFunc('appendItem', 10, function () {
            if (debug) print('SVGStringList.appendItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('SVGStringList.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getItem: {

        value: newFunc('getItem', 10, function () {
            if (debug) print('SVGStringList.getItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    initialize: {

        value: newFunc('initialize', 10, function () {
            if (debug) print('SVGStringList.initialize.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertItemBefore: {

        value: newFunc('insertItemBefore', 10, function () {
            if (debug) print('SVGStringList.insertItemBefore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeItem: {

        value: newFunc('removeItem', 10, function () {
            if (debug) print('SVGStringList.removeItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceItem: {

        value: newFunc('replaceItem', 10, function () {
            if (debug) print('SVGStringList.replaceItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGStringList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGStopElement = newFunc('SVGStopElement', 1, function () {
    print('SVGStopElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGStopElement.prototype, {
    offset: {

        get: newFunc('offset', 10, function () {
            let res = mm.memory.private_data.get(this).offset;
            if (debug) print('SVGStopElement.offset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGStopElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGSetElement = newFunc('SVGSetElement', 1, function () {
    print('SVGSetElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGSetElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGSetElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGScriptElement = newFunc('SVGScriptElement', 1, function () {
    print('SVGScriptElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGScriptElement.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('SVGScriptElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('SVGScriptElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGScriptElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGScriptElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGSVGElement = newFunc('SVGSVGElement', 1, function () {
    print('SVGSVGElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGSVGElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGSVGElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGSVGElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGSVGElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGSVGElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    currentScale: {

        get: newFunc('currentScale', 10, function () {
            let res = mm.memory.private_data.get(this).currentScale;
            if (debug) print('SVGSVGElement.currentScale.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('currentScale', 1, function (value) {
            if (debug) print('SVGSVGElement.currentScale.set', value)
            mm.memory.private_data.get(this).currentScale = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    currentTranslate: {

        get: newFunc('currentTranslate', 10, function () {
            let res = mm.memory.private_data.get(this).currentTranslate;
            if (debug) print('SVGSVGElement.currentTranslate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    viewBox: {

        get: newFunc('viewBox', 10, function () {
            let res = mm.memory.private_data.get(this).viewBox;
            if (debug) print('SVGSVGElement.viewBox.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preserveAspectRatio: {

        get: newFunc('preserveAspectRatio', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAspectRatio;
            if (debug) print('SVGSVGElement.preserveAspectRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    zoomAndPan: {

        get: newFunc('zoomAndPan', 10, function () {
            let res = mm.memory.private_data.get(this).zoomAndPan;
            if (debug) print('SVGSVGElement.zoomAndPan.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('zoomAndPan', 1, function (value) {
            if (debug) print('SVGSVGElement.zoomAndPan.set', value)
            mm.memory.private_data.get(this).zoomAndPan = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    SVG_ZOOMANDPAN_UNKNOWN: {},
    SVG_ZOOMANDPAN_DISABLE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_ZOOMANDPAN_MAGNIFY: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    animationsPaused: {

        value: newFunc('animationsPaused', 10, function () {
            if (debug) print('SVGSVGElement.animationsPaused.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    checkEnclosure: {

        value: newFunc('checkEnclosure', 10, function () {
            if (debug) print('SVGSVGElement.checkEnclosure.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    checkIntersection: {

        value: newFunc('checkIntersection', 10, function () {
            if (debug) print('SVGSVGElement.checkIntersection.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGAngle: {

        value: newFunc('createSVGAngle', 10, function () {
            if (debug) print('SVGSVGElement.createSVGAngle.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGLength: {

        value: newFunc('createSVGLength', 10, function () {
            if (debug) print('SVGSVGElement.createSVGLength.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGMatrix: {

        value: newFunc('createSVGMatrix', 10, function () {
            if (debug) print('SVGSVGElement.createSVGMatrix.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGNumber: {

        value: newFunc('createSVGNumber', 10, function () {
            if (debug) print('SVGSVGElement.createSVGNumber.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGPoint: {

        value: newFunc('createSVGPoint', 10, function () {
            if (debug) print('SVGSVGElement.createSVGPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGRect: {

        value: newFunc('createSVGRect', 10, function () {
            if (debug) print('SVGSVGElement.createSVGRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGTransform: {

        value: newFunc('createSVGTransform', 10, function () {
            if (debug) print('SVGSVGElement.createSVGTransform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSVGTransformFromMatrix: {

        value: newFunc('createSVGTransformFromMatrix', 10, function () {
            if (debug) print('SVGSVGElement.createSVGTransformFromMatrix.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deselectAll: {

        value: newFunc('deselectAll', 10, function () {
            if (debug) print('SVGSVGElement.deselectAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forceRedraw: {

        value: newFunc('forceRedraw', 10, function () {
            if (debug) print('SVGSVGElement.forceRedraw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getCurrentTime: {

        value: newFunc('getCurrentTime', 10, function () {
            if (debug) print('SVGSVGElement.getCurrentTime.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getElementById: {

        value: newFunc('getElementById', 10, function () {
            if (debug) print('SVGSVGElement.getElementById.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getEnclosureList: {

        value: newFunc('getEnclosureList', 10, function () {
            if (debug) print('SVGSVGElement.getEnclosureList.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getIntersectionList: {

        value: newFunc('getIntersectionList', 10, function () {
            if (debug) print('SVGSVGElement.getIntersectionList.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pauseAnimations: {

        value: newFunc('pauseAnimations', 10, function () {
            if (debug) print('SVGSVGElement.pauseAnimations.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setCurrentTime: {

        value: newFunc('setCurrentTime', 10, function () {
            if (debug) print('SVGSVGElement.setCurrentTime.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    suspendRedraw: {

        value: newFunc('suspendRedraw', 10, function () {
            if (debug) print('SVGSVGElement.suspendRedraw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unpauseAnimations: {

        value: newFunc('unpauseAnimations', 10, function () {
            if (debug) print('SVGSVGElement.unpauseAnimations.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unsuspendRedraw: {

        value: newFunc('unsuspendRedraw', 10, function () {
            if (debug) print('SVGSVGElement.unsuspendRedraw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unsuspendRedrawAll: {

        value: newFunc('unsuspendRedrawAll', 10, function () {
            if (debug) print('SVGSVGElement.unsuspendRedrawAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGSVGElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGRectElement = newFunc('SVGRectElement', 1, function () {
    print('SVGRectElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGRectElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGRectElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGRectElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGRectElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGRectElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rx: {

        get: newFunc('rx', 10, function () {
            let res = mm.memory.private_data.get(this).rx;
            if (debug) print('SVGRectElement.rx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ry: {

        get: newFunc('ry', 10, function () {
            let res = mm.memory.private_data.get(this).ry;
            if (debug) print('SVGRectElement.ry.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGRectElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
SVGRect = newFunc('SVGRect', 1, function () {
    print('SVGRect.call');
    mm.memory.private_data.set(this, {})
});


;delete SVGRect.prototype.constructor;
;
Object.defineProperties(SVGRect.prototype, {
    [Symbol.toStringTag]: {
        value: 'SVGRect'
    },

    'x': {

        get: newFunc('x', 10, function () {


            if (!SVGRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['x'];
            if (debug) print('SVGRect.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('x', 1, function (value) {
            if (debug) print('SVGRect.x.set', value)
            mm.memory.private_data.get(this)['x'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'y': {

        get: newFunc('y', 10, function () {


            if (!SVGRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['y'];
            if (debug) print('SVGRect.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('y', 1, function (value) {
            if (debug) print('SVGRect.y.set', value)
            mm.memory.private_data.get(this)['y'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'width': {

        get: newFunc('width', 10, function () {


            if (!SVGRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['width'];
            if (debug) print('SVGRect.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('SVGRect.width.set', value)
            mm.memory.private_data.get(this)['width'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'height': {

        get: newFunc('height', 10, function () {


            if (!SVGRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this)['height'];
            if (debug) print('SVGRect.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('SVGRect.height.set', value)
            mm.memory.private_data.get(this)['height'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!SVGRect.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('SVGRect.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
;SVGRadialGradientElement = newFunc('SVGRadialGradientElement', 1, function () {
    print('SVGRadialGradientElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGRadialGradientElement.prototype, {
    cx: {

        get: newFunc('cx', 10, function () {
            let res = mm.memory.private_data.get(this).cx;
            if (debug) print('SVGRadialGradientElement.cx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cy: {

        get: newFunc('cy', 10, function () {
            let res = mm.memory.private_data.get(this).cy;
            if (debug) print('SVGRadialGradientElement.cy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    r: {

        get: newFunc('r', 10, function () {
            let res = mm.memory.private_data.get(this).r;
            if (debug) print('SVGRadialGradientElement.r.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    fx: {

        get: newFunc('fx', 10, function () {
            let res = mm.memory.private_data.get(this).fx;
            if (debug) print('SVGRadialGradientElement.fx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    fy: {

        get: newFunc('fy', 10, function () {
            let res = mm.memory.private_data.get(this).fy;
            if (debug) print('SVGRadialGradientElement.fy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    fr: {

        get: newFunc('fr', 10, function () {
            let res = mm.memory.private_data.get(this).fr;
            if (debug) print('SVGRadialGradientElement.fr.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGRadialGradientElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGPreserveAspectRatio = newFunc('SVGPreserveAspectRatio', 1, function () {
    print('SVGPreserveAspectRatio.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGPreserveAspectRatio.prototype, {
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('SVGPreserveAspectRatio.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('SVGPreserveAspectRatio.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    meetOrSlice: {

        get: newFunc('meetOrSlice', 10, function () {
            let res = mm.memory.private_data.get(this).meetOrSlice;
            if (debug) print('SVGPreserveAspectRatio.meetOrSlice.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('meetOrSlice', 1, function (value) {
            if (debug) print('SVGPreserveAspectRatio.meetOrSlice.set', value)
            mm.memory.private_data.get(this).meetOrSlice = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    SVG_PRESERVEASPECTRATIO_UNKNOWN: {},
    SVG_PRESERVEASPECTRATIO_NONE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMINYMIN: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMIDYMIN: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMAXYMIN: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMINYMID: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMIDYMID: {

        value: 6, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMAXYMID: {

        value: 7, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMINYMAX: {

        value: 8, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMIDYMAX: {

        value: 9, writable: false, enumerable: true, configurable: false,


    },
    SVG_PRESERVEASPECTRATIO_XMAXYMAX: {

        value: 10, writable: false, enumerable: true, configurable: false,


    },
    SVG_MEETORSLICE_UNKNOWN: {},
    SVG_MEETORSLICE_MEET: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_MEETORSLICE_SLICE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGPreserveAspectRatio.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGPolylineElement = newFunc('SVGPolylineElement', 1, function () {
    print('SVGPolylineElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGPolylineElement.prototype, {
    points: {

        get: newFunc('points', 10, function () {
            let res = mm.memory.private_data.get(this).points;
            if (debug) print('SVGPolylineElement.points.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animatedPoints: {

        get: newFunc('animatedPoints', 10, function () {
            let res = mm.memory.private_data.get(this).animatedPoints;
            if (debug) print('SVGPolylineElement.animatedPoints.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGPolylineElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGPolygonElement = newFunc('SVGPolygonElement', 1, function () {
    print('SVGPolygonElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGPolygonElement.prototype, {
    points: {

        get: newFunc('points', 10, function () {
            let res = mm.memory.private_data.get(this).points;
            if (debug) print('SVGPolygonElement.points.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animatedPoints: {

        get: newFunc('animatedPoints', 10, function () {
            let res = mm.memory.private_data.get(this).animatedPoints;
            if (debug) print('SVGPolygonElement.animatedPoints.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGPolygonElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGPointList = newFunc('SVGPointList', 1, function () {
    print('SVGPointList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGPointList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('SVGPointList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfItems: {

        get: newFunc('numberOfItems', 10, function () {
            let res = mm.memory.private_data.get(this).numberOfItems;
            if (debug) print('SVGPointList.numberOfItems.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appendItem: {

        value: newFunc('appendItem', 10, function () {
            if (debug) print('SVGPointList.appendItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('SVGPointList.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getItem: {

        value: newFunc('getItem', 10, function () {
            if (debug) print('SVGPointList.getItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    initialize: {

        value: newFunc('initialize', 10, function () {
            if (debug) print('SVGPointList.initialize.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertItemBefore: {

        value: newFunc('insertItemBefore', 10, function () {
            if (debug) print('SVGPointList.insertItemBefore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeItem: {

        value: newFunc('removeItem', 10, function () {
            if (debug) print('SVGPointList.removeItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceItem: {

        value: newFunc('replaceItem', 10, function () {
            if (debug) print('SVGPointList.replaceItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGPointList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGPoint = newFunc('SVGPoint', 1, function () {
    print('SVGPoint.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGPoint.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGPoint.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('x', 1, function (value) {
            if (debug) print('SVGPoint.x.set', value)
            mm.memory.private_data.get(this).x = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGPoint.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('y', 1, function (value) {
            if (debug) print('SVGPoint.y.set', value)
            mm.memory.private_data.get(this).y = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    matrixTransform: {

        value: newFunc('matrixTransform', 10, function () {
            if (debug) print('SVGPoint.matrixTransform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGPoint.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGPatternElement = newFunc('SVGPatternElement', 1, function () {
    print('SVGPatternElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGPatternElement.prototype, {
    patternUnits: {

        get: newFunc('patternUnits', 10, function () {
            let res = mm.memory.private_data.get(this).patternUnits;
            if (debug) print('SVGPatternElement.patternUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    patternContentUnits: {

        get: newFunc('patternContentUnits', 10, function () {
            let res = mm.memory.private_data.get(this).patternContentUnits;
            if (debug) print('SVGPatternElement.patternContentUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    patternTransform: {

        get: newFunc('patternTransform', 10, function () {
            let res = mm.memory.private_data.get(this).patternTransform;
            if (debug) print('SVGPatternElement.patternTransform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGPatternElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGPatternElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGPatternElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGPatternElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    viewBox: {

        get: newFunc('viewBox', 10, function () {
            let res = mm.memory.private_data.get(this).viewBox;
            if (debug) print('SVGPatternElement.viewBox.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preserveAspectRatio: {

        get: newFunc('preserveAspectRatio', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAspectRatio;
            if (debug) print('SVGPatternElement.preserveAspectRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGPatternElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    requiredExtensions: {

        get: newFunc('requiredExtensions', 10, function () {
            let res = mm.memory.private_data.get(this).requiredExtensions;
            if (debug) print('SVGPatternElement.requiredExtensions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    systemLanguage: {

        get: newFunc('systemLanguage', 10, function () {
            let res = mm.memory.private_data.get(this).systemLanguage;
            if (debug) print('SVGPatternElement.systemLanguage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGPatternElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGPathElement = newFunc('SVGPathElement', 1, function () {
    print('SVGPathElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGPathElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGPathElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGNumberList = newFunc('SVGNumberList', 1, function () {
    print('SVGNumberList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGNumberList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('SVGNumberList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfItems: {

        get: newFunc('numberOfItems', 10, function () {
            let res = mm.memory.private_data.get(this).numberOfItems;
            if (debug) print('SVGNumberList.numberOfItems.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appendItem: {

        value: newFunc('appendItem', 10, function () {
            if (debug) print('SVGNumberList.appendItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('SVGNumberList.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getItem: {

        value: newFunc('getItem', 10, function () {
            if (debug) print('SVGNumberList.getItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    initialize: {

        value: newFunc('initialize', 10, function () {
            if (debug) print('SVGNumberList.initialize.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertItemBefore: {

        value: newFunc('insertItemBefore', 10, function () {
            if (debug) print('SVGNumberList.insertItemBefore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeItem: {

        value: newFunc('removeItem', 10, function () {
            if (debug) print('SVGNumberList.removeItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceItem: {

        value: newFunc('replaceItem', 10, function () {
            if (debug) print('SVGNumberList.replaceItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGNumberList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGNumber = newFunc('SVGNumber', 1, function () {
    print('SVGNumber.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGNumber.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('SVGNumber.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('SVGNumber.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGNumber.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGMatrix = newFunc('SVGMatrix', 1, function () {
    print('SVGMatrix.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGMatrix.prototype, {
    a: {

        get: newFunc('a', 10, function () {
            let res = mm.memory.private_data.get(this).a;
            if (debug) print('SVGMatrix.a.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('a', 1, function (value) {
            if (debug) print('SVGMatrix.a.set', value)
            mm.memory.private_data.get(this).a = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    b: {

        get: newFunc('b', 10, function () {
            let res = mm.memory.private_data.get(this).b;
            if (debug) print('SVGMatrix.b.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('b', 1, function (value) {
            if (debug) print('SVGMatrix.b.set', value)
            mm.memory.private_data.get(this).b = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    c: {

        get: newFunc('c', 10, function () {
            let res = mm.memory.private_data.get(this).c;
            if (debug) print('SVGMatrix.c.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('c', 1, function (value) {
            if (debug) print('SVGMatrix.c.set', value)
            mm.memory.private_data.get(this).c = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    d: {

        get: newFunc('d', 10, function () {
            let res = mm.memory.private_data.get(this).d;
            if (debug) print('SVGMatrix.d.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('d', 1, function (value) {
            if (debug) print('SVGMatrix.d.set', value)
            mm.memory.private_data.get(this).d = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    e: {

        get: newFunc('e', 10, function () {
            let res = mm.memory.private_data.get(this).e;
            if (debug) print('SVGMatrix.e.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('e', 1, function (value) {
            if (debug) print('SVGMatrix.e.set', value)
            mm.memory.private_data.get(this).e = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    f: {

        get: newFunc('f', 10, function () {
            let res = mm.memory.private_data.get(this).f;
            if (debug) print('SVGMatrix.f.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('f', 1, function (value) {
            if (debug) print('SVGMatrix.f.set', value)
            mm.memory.private_data.get(this).f = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    flipX: {

        value: newFunc('flipX', 10, function () {
            if (debug) print('SVGMatrix.flipX.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    flipY: {

        value: newFunc('flipY', 10, function () {
            if (debug) print('SVGMatrix.flipY.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    inverse: {

        value: newFunc('inverse', 10, function () {
            if (debug) print('SVGMatrix.inverse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    multiply: {

        value: newFunc('multiply', 10, function () {
            if (debug) print('SVGMatrix.multiply.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotate: {

        value: newFunc('rotate', 10, function () {
            if (debug) print('SVGMatrix.rotate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateFromVector: {

        value: newFunc('rotateFromVector', 10, function () {
            if (debug) print('SVGMatrix.rotateFromVector.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scale: {

        value: newFunc('scale', 10, function () {
            if (debug) print('SVGMatrix.scale.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scaleNonUniform: {

        value: newFunc('scaleNonUniform', 10, function () {
            if (debug) print('SVGMatrix.scaleNonUniform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewX: {

        value: newFunc('skewX', 10, function () {
            if (debug) print('SVGMatrix.skewX.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewY: {

        value: newFunc('skewY', 10, function () {
            if (debug) print('SVGMatrix.skewY.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    translate: {

        value: newFunc('translate', 10, function () {
            if (debug) print('SVGMatrix.translate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGMatrix.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGMaskElement = newFunc('SVGMaskElement', 1, function () {
    print('SVGMaskElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGMaskElement.prototype, {
    maskUnits: {

        get: newFunc('maskUnits', 10, function () {
            let res = mm.memory.private_data.get(this).maskUnits;
            if (debug) print('SVGMaskElement.maskUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maskContentUnits: {

        get: newFunc('maskContentUnits', 10, function () {
            let res = mm.memory.private_data.get(this).maskContentUnits;
            if (debug) print('SVGMaskElement.maskContentUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGMaskElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGMaskElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGMaskElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGMaskElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    requiredExtensions: {

        get: newFunc('requiredExtensions', 10, function () {
            let res = mm.memory.private_data.get(this).requiredExtensions;
            if (debug) print('SVGMaskElement.requiredExtensions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    systemLanguage: {

        get: newFunc('systemLanguage', 10, function () {
            let res = mm.memory.private_data.get(this).systemLanguage;
            if (debug) print('SVGMaskElement.systemLanguage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGMaskElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGMarkerElement = newFunc('SVGMarkerElement', 1, function () {
    print('SVGMarkerElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGMarkerElement.prototype, {
    refX: {

        get: newFunc('refX', 10, function () {
            let res = mm.memory.private_data.get(this).refX;
            if (debug) print('SVGMarkerElement.refX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    refY: {

        get: newFunc('refY', 10, function () {
            let res = mm.memory.private_data.get(this).refY;
            if (debug) print('SVGMarkerElement.refY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    markerUnits: {

        get: newFunc('markerUnits', 10, function () {
            let res = mm.memory.private_data.get(this).markerUnits;
            if (debug) print('SVGMarkerElement.markerUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    markerWidth: {

        get: newFunc('markerWidth', 10, function () {
            let res = mm.memory.private_data.get(this).markerWidth;
            if (debug) print('SVGMarkerElement.markerWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    markerHeight: {

        get: newFunc('markerHeight', 10, function () {
            let res = mm.memory.private_data.get(this).markerHeight;
            if (debug) print('SVGMarkerElement.markerHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orientType: {

        get: newFunc('orientType', 10, function () {
            let res = mm.memory.private_data.get(this).orientType;
            if (debug) print('SVGMarkerElement.orientType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orientAngle: {

        get: newFunc('orientAngle', 10, function () {
            let res = mm.memory.private_data.get(this).orientAngle;
            if (debug) print('SVGMarkerElement.orientAngle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    viewBox: {

        get: newFunc('viewBox', 10, function () {
            let res = mm.memory.private_data.get(this).viewBox;
            if (debug) print('SVGMarkerElement.viewBox.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preserveAspectRatio: {

        get: newFunc('preserveAspectRatio', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAspectRatio;
            if (debug) print('SVGMarkerElement.preserveAspectRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    SVG_MARKERUNITS_UNKNOWN: {},
    SVG_MARKERUNITS_USERSPACEONUSE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_MARKERUNITS_STROKEWIDTH: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_MARKER_ORIENT_UNKNOWN: {},
    SVG_MARKER_ORIENT_AUTO: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_MARKER_ORIENT_ANGLE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    setOrientToAngle: {

        value: newFunc('setOrientToAngle', 10, function () {
            if (debug) print('SVGMarkerElement.setOrientToAngle.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setOrientToAuto: {

        value: newFunc('setOrientToAuto', 10, function () {
            if (debug) print('SVGMarkerElement.setOrientToAuto.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGMarkerElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGMPathElement = newFunc('SVGMPathElement', 1, function () {
    print('SVGMPathElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGMPathElement.prototype, {
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGMPathElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGMPathElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGLinearGradientElement = newFunc('SVGLinearGradientElement', 1, function () {
    print('SVGLinearGradientElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGLinearGradientElement.prototype, {
    x1: {

        get: newFunc('x1', 10, function () {
            let res = mm.memory.private_data.get(this).x1;
            if (debug) print('SVGLinearGradientElement.x1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y1: {

        get: newFunc('y1', 10, function () {
            let res = mm.memory.private_data.get(this).y1;
            if (debug) print('SVGLinearGradientElement.y1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x2: {

        get: newFunc('x2', 10, function () {
            let res = mm.memory.private_data.get(this).x2;
            if (debug) print('SVGLinearGradientElement.x2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y2: {

        get: newFunc('y2', 10, function () {
            let res = mm.memory.private_data.get(this).y2;
            if (debug) print('SVGLinearGradientElement.y2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGLinearGradientElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGLineElement = newFunc('SVGLineElement', 1, function () {
    print('SVGLineElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGLineElement.prototype, {
    x1: {

        get: newFunc('x1', 10, function () {
            let res = mm.memory.private_data.get(this).x1;
            if (debug) print('SVGLineElement.x1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y1: {

        get: newFunc('y1', 10, function () {
            let res = mm.memory.private_data.get(this).y1;
            if (debug) print('SVGLineElement.y1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x2: {

        get: newFunc('x2', 10, function () {
            let res = mm.memory.private_data.get(this).x2;
            if (debug) print('SVGLineElement.x2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y2: {

        get: newFunc('y2', 10, function () {
            let res = mm.memory.private_data.get(this).y2;
            if (debug) print('SVGLineElement.y2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGLineElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGLengthList = newFunc('SVGLengthList', 1, function () {
    print('SVGLengthList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGLengthList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('SVGLengthList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfItems: {

        get: newFunc('numberOfItems', 10, function () {
            let res = mm.memory.private_data.get(this).numberOfItems;
            if (debug) print('SVGLengthList.numberOfItems.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appendItem: {

        value: newFunc('appendItem', 10, function () {
            if (debug) print('SVGLengthList.appendItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('SVGLengthList.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getItem: {

        value: newFunc('getItem', 10, function () {
            if (debug) print('SVGLengthList.getItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    initialize: {

        value: newFunc('initialize', 10, function () {
            if (debug) print('SVGLengthList.initialize.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertItemBefore: {

        value: newFunc('insertItemBefore', 10, function () {
            if (debug) print('SVGLengthList.insertItemBefore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeItem: {

        value: newFunc('removeItem', 10, function () {
            if (debug) print('SVGLengthList.removeItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceItem: {

        value: newFunc('replaceItem', 10, function () {
            if (debug) print('SVGLengthList.replaceItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGLengthList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGLength = newFunc('SVGLength', 1, function () {
    print('SVGLength.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGLength.prototype, {
    unitType: {

        get: newFunc('unitType', 10, function () {
            let res = mm.memory.private_data.get(this).unitType;
            if (debug) print('SVGLength.unitType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('SVGLength.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('SVGLength.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    valueInSpecifiedUnits: {

        get: newFunc('valueInSpecifiedUnits', 10, function () {
            let res = mm.memory.private_data.get(this).valueInSpecifiedUnits;
            if (debug) print('SVGLength.valueInSpecifiedUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('valueInSpecifiedUnits', 1, function (value) {
            if (debug) print('SVGLength.valueInSpecifiedUnits.set', value)
            mm.memory.private_data.get(this).valueInSpecifiedUnits = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    valueAsString: {

        get: newFunc('valueAsString', 10, function () {
            let res = mm.memory.private_data.get(this).valueAsString;
            if (debug) print('SVGLength.valueAsString.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('valueAsString', 1, function (value) {
            if (debug) print('SVGLength.valueAsString.set', value)
            mm.memory.private_data.get(this).valueAsString = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    SVG_LENGTHTYPE_UNKNOWN: {},
    SVG_LENGTHTYPE_NUMBER: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_PERCENTAGE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_EMS: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_EXS: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_PX: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_CM: {

        value: 6, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_MM: {

        value: 7, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_IN: {

        value: 8, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_PT: {

        value: 9, writable: false, enumerable: true, configurable: false,


    },
    SVG_LENGTHTYPE_PC: {

        value: 10, writable: false, enumerable: true, configurable: false,


    },
    convertToSpecifiedUnits: {

        value: newFunc('convertToSpecifiedUnits', 10, function () {
            if (debug) print('SVGLength.convertToSpecifiedUnits.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    newValueSpecifiedUnits: {

        value: newFunc('newValueSpecifiedUnits', 10, function () {
            if (debug) print('SVGLength.newValueSpecifiedUnits.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGLength.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGImageElement = newFunc('SVGImageElement', 1, function () {
    print('SVGImageElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGImageElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGImageElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGImageElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGImageElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGImageElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preserveAspectRatio: {

        get: newFunc('preserveAspectRatio', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAspectRatio;
            if (debug) print('SVGImageElement.preserveAspectRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    decoding: {

        get: newFunc('decoding', 10, function () {
            let res = mm.memory.private_data.get(this).decoding;
            if (debug) print('SVGImageElement.decoding.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('decoding', 1, function (value) {
            if (debug) print('SVGImageElement.decoding.set', value)
            mm.memory.private_data.get(this).decoding = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGImageElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    decode: {

        value: newFunc('decode', 10, function () {
            if (debug) print('SVGImageElement.decode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    crossOrigin: {

        get: newFunc('crossOrigin', 10, function () {
            let res = mm.memory.private_data.get(this).crossOrigin;
            if (debug) print('SVGImageElement.crossOrigin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('crossOrigin', 1, function (value) {
            if (debug) print('SVGImageElement.crossOrigin.set', value)
            mm.memory.private_data.get(this).crossOrigin = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGImageElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

;SVGGradientElement = newFunc('SVGGradientElement', 1, function () {
    print('SVGGradientElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGGradientElement.prototype, {
    SVG_SPREADMETHOD_REPEAT: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_SPREADMETHOD_REFLECT: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_SPREADMETHOD_PAD: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_SPREADMETHOD_UNKNOWN: {},
    gradientUnits: {

        get: newFunc('gradientUnits', 10, function () {
            let res = mm.memory.private_data.get(this).gradientUnits;
            if (debug) print('SVGGradientElement.gradientUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    gradientTransform: {

        get: newFunc('gradientTransform', 10, function () {
            let res = mm.memory.private_data.get(this).gradientTransform;
            if (debug) print('SVGGradientElement.gradientTransform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    spreadMethod: {

        get: newFunc('spreadMethod', 10, function () {
            let res = mm.memory.private_data.get(this).spreadMethod;
            if (debug) print('SVGGradientElement.spreadMethod.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGGradientElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGGradientElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGGeometryElement = newFunc('SVGGeometryElement', 1, function () {
    print('SVGGeometryElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGGeometryElement.prototype, {
    pathLength: {

        get: newFunc('pathLength', 10, function () {
            let res = mm.memory.private_data.get(this).pathLength;
            if (debug) print('SVGGeometryElement.pathLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getPointAtLength: {

        value: newFunc('getPointAtLength', 10, function () {
            if (debug) print('SVGGeometryElement.getPointAtLength.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTotalLength: {

        value: newFunc('getTotalLength', 10, function () {
            if (debug) print('SVGGeometryElement.getTotalLength.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isPointInFill: {

        value: newFunc('isPointInFill', 10, function () {
            if (debug) print('SVGGeometryElement.isPointInFill.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isPointInStroke: {

        value: newFunc('isPointInStroke', 10, function () {
            if (debug) print('SVGGeometryElement.isPointInStroke.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGGeometryElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGGElement = newFunc('SVGGElement', 1, function () {
    print('SVGGElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGGElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGGElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGForeignObjectElement = newFunc('SVGForeignObjectElement', 1, function () {
    print('SVGForeignObjectElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGForeignObjectElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGForeignObjectElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGForeignObjectElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGForeignObjectElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGForeignObjectElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGForeignObjectElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFilterElement = newFunc('SVGFilterElement', 1, function () {
    print('SVGFilterElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFilterElement.prototype, {
    filterUnits: {

        get: newFunc('filterUnits', 10, function () {
            let res = mm.memory.private_data.get(this).filterUnits;
            if (debug) print('SVGFilterElement.filterUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    primitiveUnits: {

        get: newFunc('primitiveUnits', 10, function () {
            let res = mm.memory.private_data.get(this).primitiveUnits;
            if (debug) print('SVGFilterElement.primitiveUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFilterElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFilterElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFilterElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFilterElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGFilterElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFilterElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFETurbulenceElement = newFunc('SVGFETurbulenceElement', 1, function () {
    print('SVGFETurbulenceElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFETurbulenceElement.prototype, {
    SVG_STITCHTYPE_NOSTITCH: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_STITCHTYPE_STITCH: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_STITCHTYPE_UNKNOWN: {},
    SVG_TURBULENCE_TYPE_TURBULENCE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_TURBULENCE_TYPE_FRACTALNOISE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_TURBULENCE_TYPE_UNKNOWN: {},
    baseFrequencyX: {

        get: newFunc('baseFrequencyX', 10, function () {
            let res = mm.memory.private_data.get(this).baseFrequencyX;
            if (debug) print('SVGFETurbulenceElement.baseFrequencyX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    baseFrequencyY: {

        get: newFunc('baseFrequencyY', 10, function () {
            let res = mm.memory.private_data.get(this).baseFrequencyY;
            if (debug) print('SVGFETurbulenceElement.baseFrequencyY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numOctaves: {

        get: newFunc('numOctaves', 10, function () {
            let res = mm.memory.private_data.get(this).numOctaves;
            if (debug) print('SVGFETurbulenceElement.numOctaves.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    seed: {

        get: newFunc('seed', 10, function () {
            let res = mm.memory.private_data.get(this).seed;
            if (debug) print('SVGFETurbulenceElement.seed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stitchTiles: {

        get: newFunc('stitchTiles', 10, function () {
            let res = mm.memory.private_data.get(this).stitchTiles;
            if (debug) print('SVGFETurbulenceElement.stitchTiles.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('SVGFETurbulenceElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFETurbulenceElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFETurbulenceElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFETurbulenceElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFETurbulenceElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFETurbulenceElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFETurbulenceElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFETileElement = newFunc('SVGFETileElement', 1, function () {
    print('SVGFETileElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFETileElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFETileElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFETileElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFETileElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFETileElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFETileElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFETileElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFETileElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFESpotLightElement = newFunc('SVGFESpotLightElement', 1, function () {
    print('SVGFESpotLightElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFESpotLightElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFESpotLightElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFESpotLightElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('SVGFESpotLightElement.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pointsAtX: {

        get: newFunc('pointsAtX', 10, function () {
            let res = mm.memory.private_data.get(this).pointsAtX;
            if (debug) print('SVGFESpotLightElement.pointsAtX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pointsAtY: {

        get: newFunc('pointsAtY', 10, function () {
            let res = mm.memory.private_data.get(this).pointsAtY;
            if (debug) print('SVGFESpotLightElement.pointsAtY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pointsAtZ: {

        get: newFunc('pointsAtZ', 10, function () {
            let res = mm.memory.private_data.get(this).pointsAtZ;
            if (debug) print('SVGFESpotLightElement.pointsAtZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    specularExponent: {

        get: newFunc('specularExponent', 10, function () {
            let res = mm.memory.private_data.get(this).specularExponent;
            if (debug) print('SVGFESpotLightElement.specularExponent.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    limitingConeAngle: {

        get: newFunc('limitingConeAngle', 10, function () {
            let res = mm.memory.private_data.get(this).limitingConeAngle;
            if (debug) print('SVGFESpotLightElement.limitingConeAngle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFESpotLightElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFESpecularLightingElement = newFunc('SVGFESpecularLightingElement', 1, function () {
    print('SVGFESpecularLightingElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFESpecularLightingElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFESpecularLightingElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    surfaceScale: {

        get: newFunc('surfaceScale', 10, function () {
            let res = mm.memory.private_data.get(this).surfaceScale;
            if (debug) print('SVGFESpecularLightingElement.surfaceScale.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    specularConstant: {

        get: newFunc('specularConstant', 10, function () {
            let res = mm.memory.private_data.get(this).specularConstant;
            if (debug) print('SVGFESpecularLightingElement.specularConstant.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    specularExponent: {

        get: newFunc('specularExponent', 10, function () {
            let res = mm.memory.private_data.get(this).specularExponent;
            if (debug) print('SVGFESpecularLightingElement.specularExponent.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    kernelUnitLengthX: {

        get: newFunc('kernelUnitLengthX', 10, function () {
            let res = mm.memory.private_data.get(this).kernelUnitLengthX;
            if (debug) print('SVGFESpecularLightingElement.kernelUnitLengthX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    kernelUnitLengthY: {

        get: newFunc('kernelUnitLengthY', 10, function () {
            let res = mm.memory.private_data.get(this).kernelUnitLengthY;
            if (debug) print('SVGFESpecularLightingElement.kernelUnitLengthY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFESpecularLightingElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFESpecularLightingElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFESpecularLightingElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFESpecularLightingElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFESpecularLightingElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFESpecularLightingElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEPointLightElement = newFunc('SVGFEPointLightElement', 1, function () {
    print('SVGFEPointLightElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEPointLightElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEPointLightElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEPointLightElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('SVGFEPointLightElement.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEPointLightElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEOffsetElement = newFunc('SVGFEOffsetElement', 1, function () {
    print('SVGFEOffsetElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEOffsetElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEOffsetElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dx: {

        get: newFunc('dx', 10, function () {
            let res = mm.memory.private_data.get(this).dx;
            if (debug) print('SVGFEOffsetElement.dx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dy: {

        get: newFunc('dy', 10, function () {
            let res = mm.memory.private_data.get(this).dy;
            if (debug) print('SVGFEOffsetElement.dy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEOffsetElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEOffsetElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEOffsetElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEOffsetElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEOffsetElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEOffsetElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEMorphologyElement = newFunc('SVGFEMorphologyElement', 1, function () {
    print('SVGFEMorphologyElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEMorphologyElement.prototype, {
    SVG_MORPHOLOGY_OPERATOR_DILATE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_MORPHOLOGY_OPERATOR_ERODE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_MORPHOLOGY_OPERATOR_UNKNOWN: {},
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEMorphologyElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    operator: {

        get: newFunc('operator', 10, function () {
            let res = mm.memory.private_data.get(this).operator;
            if (debug) print('SVGFEMorphologyElement.operator.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    radiusX: {

        get: newFunc('radiusX', 10, function () {
            let res = mm.memory.private_data.get(this).radiusX;
            if (debug) print('SVGFEMorphologyElement.radiusX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    radiusY: {

        get: newFunc('radiusY', 10, function () {
            let res = mm.memory.private_data.get(this).radiusY;
            if (debug) print('SVGFEMorphologyElement.radiusY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEMorphologyElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEMorphologyElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEMorphologyElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEMorphologyElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEMorphologyElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEMorphologyElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEMergeNodeElement = newFunc('SVGFEMergeNodeElement', 1, function () {
    print('SVGFEMergeNodeElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEMergeNodeElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEMergeNodeElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEMergeNodeElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEMergeElement = newFunc('SVGFEMergeElement', 1, function () {
    print('SVGFEMergeElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEMergeElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEMergeElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEMergeElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEMergeElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEMergeElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEMergeElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEMergeElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEImageElement = newFunc('SVGFEImageElement', 1, function () {
    print('SVGFEImageElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEImageElement.prototype, {
    preserveAspectRatio: {

        get: newFunc('preserveAspectRatio', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAspectRatio;
            if (debug) print('SVGFEImageElement.preserveAspectRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEImageElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEImageElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEImageElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEImageElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEImageElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGFEImageElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEImageElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEGaussianBlurElement = newFunc('SVGFEGaussianBlurElement', 1, function () {
    print('SVGFEGaussianBlurElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEGaussianBlurElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEGaussianBlurElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stdDeviationX: {

        get: newFunc('stdDeviationX', 10, function () {
            let res = mm.memory.private_data.get(this).stdDeviationX;
            if (debug) print('SVGFEGaussianBlurElement.stdDeviationX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stdDeviationY: {

        get: newFunc('stdDeviationY', 10, function () {
            let res = mm.memory.private_data.get(this).stdDeviationY;
            if (debug) print('SVGFEGaussianBlurElement.stdDeviationY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEGaussianBlurElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEGaussianBlurElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEGaussianBlurElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEGaussianBlurElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEGaussianBlurElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    setStdDeviation: {

        value: newFunc('setStdDeviation', 10, function () {
            if (debug) print('SVGFEGaussianBlurElement.setStdDeviation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEGaussianBlurElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEFuncRElement = newFunc('SVGFEFuncRElement', 1, function () {
    print('SVGFEFuncRElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEFuncRElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEFuncRElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEFuncGElement = newFunc('SVGFEFuncGElement', 1, function () {
    print('SVGFEFuncGElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEFuncGElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEFuncGElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEFuncBElement = newFunc('SVGFEFuncBElement', 1, function () {
    print('SVGFEFuncBElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEFuncBElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEFuncBElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEFuncAElement = newFunc('SVGFEFuncAElement', 1, function () {
    print('SVGFEFuncAElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEFuncAElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEFuncAElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEFloodElement = newFunc('SVGFEFloodElement', 1, function () {
    print('SVGFEFloodElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEFloodElement.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEFloodElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEFloodElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEFloodElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEFloodElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEFloodElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEFloodElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEDropShadowElement = newFunc('SVGFEDropShadowElement', 1, function () {
    print('SVGFEDropShadowElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEDropShadowElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEDropShadowElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dx: {

        get: newFunc('dx', 10, function () {
            let res = mm.memory.private_data.get(this).dx;
            if (debug) print('SVGFEDropShadowElement.dx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dy: {

        get: newFunc('dy', 10, function () {
            let res = mm.memory.private_data.get(this).dy;
            if (debug) print('SVGFEDropShadowElement.dy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stdDeviationX: {

        get: newFunc('stdDeviationX', 10, function () {
            let res = mm.memory.private_data.get(this).stdDeviationX;
            if (debug) print('SVGFEDropShadowElement.stdDeviationX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stdDeviationY: {

        get: newFunc('stdDeviationY', 10, function () {
            let res = mm.memory.private_data.get(this).stdDeviationY;
            if (debug) print('SVGFEDropShadowElement.stdDeviationY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEDropShadowElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEDropShadowElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEDropShadowElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEDropShadowElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEDropShadowElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    setStdDeviation: {

        value: newFunc('setStdDeviation', 10, function () {
            if (debug) print('SVGFEDropShadowElement.setStdDeviation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEDropShadowElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEDistantLightElement = newFunc('SVGFEDistantLightElement', 1, function () {
    print('SVGFEDistantLightElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEDistantLightElement.prototype, {
    azimuth: {

        get: newFunc('azimuth', 10, function () {
            let res = mm.memory.private_data.get(this).azimuth;
            if (debug) print('SVGFEDistantLightElement.azimuth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    elevation: {

        get: newFunc('elevation', 10, function () {
            let res = mm.memory.private_data.get(this).elevation;
            if (debug) print('SVGFEDistantLightElement.elevation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEDistantLightElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEDisplacementMapElement = newFunc('SVGFEDisplacementMapElement', 1, function () {
    print('SVGFEDisplacementMapElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEDisplacementMapElement.prototype, {
    SVG_CHANNEL_A: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_CHANNEL_B: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_CHANNEL_G: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_CHANNEL_R: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_CHANNEL_UNKNOWN: {},
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEDisplacementMapElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    in2: {

        get: newFunc('in2', 10, function () {
            let res = mm.memory.private_data.get(this).in2;
            if (debug) print('SVGFEDisplacementMapElement.in2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    scale: {

        get: newFunc('scale', 10, function () {
            let res = mm.memory.private_data.get(this).scale;
            if (debug) print('SVGFEDisplacementMapElement.scale.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    xChannelSelector: {

        get: newFunc('xChannelSelector', 10, function () {
            let res = mm.memory.private_data.get(this).xChannelSelector;
            if (debug) print('SVGFEDisplacementMapElement.xChannelSelector.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    yChannelSelector: {

        get: newFunc('yChannelSelector', 10, function () {
            let res = mm.memory.private_data.get(this).yChannelSelector;
            if (debug) print('SVGFEDisplacementMapElement.yChannelSelector.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEDisplacementMapElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEDisplacementMapElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEDisplacementMapElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEDisplacementMapElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEDisplacementMapElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEDisplacementMapElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEDiffuseLightingElement = newFunc('SVGFEDiffuseLightingElement', 1, function () {
    print('SVGFEDiffuseLightingElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEDiffuseLightingElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEDiffuseLightingElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    surfaceScale: {

        get: newFunc('surfaceScale', 10, function () {
            let res = mm.memory.private_data.get(this).surfaceScale;
            if (debug) print('SVGFEDiffuseLightingElement.surfaceScale.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    diffuseConstant: {

        get: newFunc('diffuseConstant', 10, function () {
            let res = mm.memory.private_data.get(this).diffuseConstant;
            if (debug) print('SVGFEDiffuseLightingElement.diffuseConstant.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    kernelUnitLengthX: {

        get: newFunc('kernelUnitLengthX', 10, function () {
            let res = mm.memory.private_data.get(this).kernelUnitLengthX;
            if (debug) print('SVGFEDiffuseLightingElement.kernelUnitLengthX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    kernelUnitLengthY: {

        get: newFunc('kernelUnitLengthY', 10, function () {
            let res = mm.memory.private_data.get(this).kernelUnitLengthY;
            if (debug) print('SVGFEDiffuseLightingElement.kernelUnitLengthY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEDiffuseLightingElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEDiffuseLightingElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEDiffuseLightingElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEDiffuseLightingElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEDiffuseLightingElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEDiffuseLightingElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEConvolveMatrixElement = newFunc('SVGFEConvolveMatrixElement', 1, function () {
    print('SVGFEConvolveMatrixElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEConvolveMatrixElement.prototype, {
    SVG_EDGEMODE_NONE: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_EDGEMODE_WRAP: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_EDGEMODE_DUPLICATE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_EDGEMODE_UNKNOWN: {},
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEConvolveMatrixElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orderX: {

        get: newFunc('orderX', 10, function () {
            let res = mm.memory.private_data.get(this).orderX;
            if (debug) print('SVGFEConvolveMatrixElement.orderX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orderY: {

        get: newFunc('orderY', 10, function () {
            let res = mm.memory.private_data.get(this).orderY;
            if (debug) print('SVGFEConvolveMatrixElement.orderY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    kernelMatrix: {

        get: newFunc('kernelMatrix', 10, function () {
            let res = mm.memory.private_data.get(this).kernelMatrix;
            if (debug) print('SVGFEConvolveMatrixElement.kernelMatrix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    divisor: {

        get: newFunc('divisor', 10, function () {
            let res = mm.memory.private_data.get(this).divisor;
            if (debug) print('SVGFEConvolveMatrixElement.divisor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    bias: {

        get: newFunc('bias', 10, function () {
            let res = mm.memory.private_data.get(this).bias;
            if (debug) print('SVGFEConvolveMatrixElement.bias.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    targetX: {

        get: newFunc('targetX', 10, function () {
            let res = mm.memory.private_data.get(this).targetX;
            if (debug) print('SVGFEConvolveMatrixElement.targetX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    targetY: {

        get: newFunc('targetY', 10, function () {
            let res = mm.memory.private_data.get(this).targetY;
            if (debug) print('SVGFEConvolveMatrixElement.targetY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    edgeMode: {

        get: newFunc('edgeMode', 10, function () {
            let res = mm.memory.private_data.get(this).edgeMode;
            if (debug) print('SVGFEConvolveMatrixElement.edgeMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    kernelUnitLengthX: {

        get: newFunc('kernelUnitLengthX', 10, function () {
            let res = mm.memory.private_data.get(this).kernelUnitLengthX;
            if (debug) print('SVGFEConvolveMatrixElement.kernelUnitLengthX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    kernelUnitLengthY: {

        get: newFunc('kernelUnitLengthY', 10, function () {
            let res = mm.memory.private_data.get(this).kernelUnitLengthY;
            if (debug) print('SVGFEConvolveMatrixElement.kernelUnitLengthY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preserveAlpha: {

        get: newFunc('preserveAlpha', 10, function () {
            let res = mm.memory.private_data.get(this).preserveAlpha;
            if (debug) print('SVGFEConvolveMatrixElement.preserveAlpha.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEConvolveMatrixElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEConvolveMatrixElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEConvolveMatrixElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEConvolveMatrixElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEConvolveMatrixElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEConvolveMatrixElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFECompositeElement = newFunc('SVGFECompositeElement', 1, function () {
    print('SVGFECompositeElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFECompositeElement.prototype, {
    SVG_FECOMPOSITE_OPERATOR_ARITHMETIC: {

        value: 6, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPOSITE_OPERATOR_XOR: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPOSITE_OPERATOR_ATOP: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPOSITE_OPERATOR_OUT: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPOSITE_OPERATOR_IN: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPOSITE_OPERATOR_OVER: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPOSITE_OPERATOR_UNKNOWN: {},
    in2: {

        get: newFunc('in2', 10, function () {
            let res = mm.memory.private_data.get(this).in2;
            if (debug) print('SVGFECompositeElement.in2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFECompositeElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    operator: {

        get: newFunc('operator', 10, function () {
            let res = mm.memory.private_data.get(this).operator;
            if (debug) print('SVGFECompositeElement.operator.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    k1: {

        get: newFunc('k1', 10, function () {
            let res = mm.memory.private_data.get(this).k1;
            if (debug) print('SVGFECompositeElement.k1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    k2: {

        get: newFunc('k2', 10, function () {
            let res = mm.memory.private_data.get(this).k2;
            if (debug) print('SVGFECompositeElement.k2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    k3: {

        get: newFunc('k3', 10, function () {
            let res = mm.memory.private_data.get(this).k3;
            if (debug) print('SVGFECompositeElement.k3.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    k4: {

        get: newFunc('k4', 10, function () {
            let res = mm.memory.private_data.get(this).k4;
            if (debug) print('SVGFECompositeElement.k4.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFECompositeElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFECompositeElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFECompositeElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFECompositeElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFECompositeElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFECompositeElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEComponentTransferElement = newFunc('SVGFEComponentTransferElement', 1, function () {
    print('SVGFEComponentTransferElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEComponentTransferElement.prototype, {
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEComponentTransferElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEComponentTransferElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEComponentTransferElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEComponentTransferElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEComponentTransferElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEComponentTransferElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEComponentTransferElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEColorMatrixElement = newFunc('SVGFEColorMatrixElement', 1, function () {
    print('SVGFEColorMatrixElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEColorMatrixElement.prototype, {
    SVG_FECOLORMATRIX_TYPE_LUMINANCETOALPHA: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOLORMATRIX_TYPE_HUEROTATE: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOLORMATRIX_TYPE_SATURATE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOLORMATRIX_TYPE_MATRIX: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOLORMATRIX_TYPE_UNKNOWN: {},
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEColorMatrixElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('SVGFEColorMatrixElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    values: {

        get: newFunc('values', 10, function () {
            let res = mm.memory.private_data.get(this).values;
            if (debug) print('SVGFEColorMatrixElement.values.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEColorMatrixElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEColorMatrixElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEColorMatrixElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEColorMatrixElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEColorMatrixElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEColorMatrixElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGFEBlendElement = newFunc('SVGFEBlendElement', 1, function () {
    print('SVGFEBlendElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGFEBlendElement.prototype, {
    SVG_FEBLEND_MODE_LUMINOSITY: {

        value: 16, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_COLOR: {

        value: 15, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_SATURATION: {

        value: 14, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_HUE: {

        value: 13, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_EXCLUSION: {

        value: 12, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_DIFFERENCE: {

        value: 11, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_SOFT_LIGHT: {

        value: 10, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_HARD_LIGHT: {

        value: 9, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_COLOR_BURN: {

        value: 8, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_COLOR_DODGE: {

        value: 7, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_OVERLAY: {

        value: 6, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_LIGHTEN: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_DARKEN: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_SCREEN: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_MULTIPLY: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_NORMAL: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_FEBLEND_MODE_UNKNOWN: {},
    in1: {

        get: newFunc('in1', 10, function () {
            let res = mm.memory.private_data.get(this).in1;
            if (debug) print('SVGFEBlendElement.in1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    in2: {

        get: newFunc('in2', 10, function () {
            let res = mm.memory.private_data.get(this).in2;
            if (debug) print('SVGFEBlendElement.in2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mode: {

        get: newFunc('mode', 10, function () {
            let res = mm.memory.private_data.get(this).mode;
            if (debug) print('SVGFEBlendElement.mode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('SVGFEBlendElement.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('SVGFEBlendElement.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('SVGFEBlendElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('SVGFEBlendElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('SVGFEBlendElement.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGFEBlendElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGEllipseElement = newFunc('SVGEllipseElement', 1, function () {
    print('SVGEllipseElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGEllipseElement.prototype, {
    cx: {

        get: newFunc('cx', 10, function () {
            let res = mm.memory.private_data.get(this).cx;
            if (debug) print('SVGEllipseElement.cx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cy: {

        get: newFunc('cy', 10, function () {
            let res = mm.memory.private_data.get(this).cy;
            if (debug) print('SVGEllipseElement.cy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rx: {

        get: newFunc('rx', 10, function () {
            let res = mm.memory.private_data.get(this).rx;
            if (debug) print('SVGEllipseElement.rx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ry: {

        get: newFunc('ry', 10, function () {
            let res = mm.memory.private_data.get(this).ry;
            if (debug) print('SVGEllipseElement.ry.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGEllipseElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

;SVGDescElement = newFunc('SVGDescElement', 1, function () {
    print('SVGDescElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGDescElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGDescElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGDefsElement = newFunc('SVGDefsElement', 1, function () {
    print('SVGDefsElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGDefsElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGDefsElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGComponentTransferFunctionElement = newFunc('SVGComponentTransferFunctionElement', 1, function () {
    print('SVGComponentTransferFunctionElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGComponentTransferFunctionElement.prototype, {
    SVG_FECOMPONENTTRANSFER_TYPE_GAMMA: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPONENTTRANSFER_TYPE_LINEAR: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPONENTTRANSFER_TYPE_DISCRETE: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPONENTTRANSFER_TYPE_TABLE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPONENTTRANSFER_TYPE_IDENTITY: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    SVG_FECOMPONENTTRANSFER_TYPE_UNKNOWN: {},
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('SVGComponentTransferFunctionElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    tableValues: {

        get: newFunc('tableValues', 10, function () {
            let res = mm.memory.private_data.get(this).tableValues;
            if (debug) print('SVGComponentTransferFunctionElement.tableValues.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    slope: {

        get: newFunc('slope', 10, function () {
            let res = mm.memory.private_data.get(this).slope;
            if (debug) print('SVGComponentTransferFunctionElement.slope.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    intercept: {

        get: newFunc('intercept', 10, function () {
            let res = mm.memory.private_data.get(this).intercept;
            if (debug) print('SVGComponentTransferFunctionElement.intercept.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    amplitude: {

        get: newFunc('amplitude', 10, function () {
            let res = mm.memory.private_data.get(this).amplitude;
            if (debug) print('SVGComponentTransferFunctionElement.amplitude.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    exponent: {

        get: newFunc('exponent', 10, function () {
            let res = mm.memory.private_data.get(this).exponent;
            if (debug) print('SVGComponentTransferFunctionElement.exponent.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    offset: {

        get: newFunc('offset', 10, function () {
            let res = mm.memory.private_data.get(this).offset;
            if (debug) print('SVGComponentTransferFunctionElement.offset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGComponentTransferFunctionElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGClipPathElement = newFunc('SVGClipPathElement', 1, function () {
    print('SVGClipPathElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGClipPathElement.prototype, {
    clipPathUnits: {

        get: newFunc('clipPathUnits', 10, function () {
            let res = mm.memory.private_data.get(this).clipPathUnits;
            if (debug) print('SVGClipPathElement.clipPathUnits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    transform: {

        get: newFunc('transform', 10, function () {
            let res = mm.memory.private_data.get(this).transform;
            if (debug) print('SVGClipPathElement.transform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGClipPathElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGCircleElement = newFunc('SVGCircleElement', 1, function () {
    print('SVGCircleElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGCircleElement.prototype, {
    cx: {

        get: newFunc('cx', 10, function () {
            let res = mm.memory.private_data.get(this).cx;
            if (debug) print('SVGCircleElement.cx.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cy: {

        get: newFunc('cy', 10, function () {
            let res = mm.memory.private_data.get(this).cy;
            if (debug) print('SVGCircleElement.cy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    r: {

        get: newFunc('r', 10, function () {
            let res = mm.memory.private_data.get(this).r;
            if (debug) print('SVGCircleElement.r.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGCircleElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimationElement = newFunc('SVGAnimationElement', 1, function () {
    print('SVGAnimationElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimationElement.prototype, {
    targetElement: {

        get: newFunc('targetElement', 10, function () {
            let res = mm.memory.private_data.get(this).targetElement;
            if (debug) print('SVGAnimationElement.targetElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onbegin: {

        get: newFunc('onbegin', 10, function () {
            let res = mm.memory.private_data.get(this).onbegin;
            if (debug) print('SVGAnimationElement.onbegin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbegin', 1, function (value) {
            if (debug) print('SVGAnimationElement.onbegin.set', value)
            mm.memory.private_data.get(this).onbegin = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onend: {

        get: newFunc('onend', 10, function () {
            let res = mm.memory.private_data.get(this).onend;
            if (debug) print('SVGAnimationElement.onend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onend', 1, function (value) {
            if (debug) print('SVGAnimationElement.onend.set', value)
            mm.memory.private_data.get(this).onend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onrepeat: {

        get: newFunc('onrepeat', 10, function () {
            let res = mm.memory.private_data.get(this).onrepeat;
            if (debug) print('SVGAnimationElement.onrepeat.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onrepeat', 1, function (value) {
            if (debug) print('SVGAnimationElement.onrepeat.set', value)
            mm.memory.private_data.get(this).onrepeat = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    requiredExtensions: {

        get: newFunc('requiredExtensions', 10, function () {
            let res = mm.memory.private_data.get(this).requiredExtensions;
            if (debug) print('SVGAnimationElement.requiredExtensions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    systemLanguage: {

        get: newFunc('systemLanguage', 10, function () {
            let res = mm.memory.private_data.get(this).systemLanguage;
            if (debug) print('SVGAnimationElement.systemLanguage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    beginElement: {

        value: newFunc('beginElement', 10, function () {
            if (debug) print('SVGAnimationElement.beginElement.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    beginElementAt: {

        value: newFunc('beginElementAt', 10, function () {
            if (debug) print('SVGAnimationElement.beginElementAt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    endElement: {

        value: newFunc('endElement', 10, function () {
            if (debug) print('SVGAnimationElement.endElement.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    endElementAt: {

        value: newFunc('endElementAt', 10, function () {
            if (debug) print('SVGAnimationElement.endElementAt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getCurrentTime: {

        value: newFunc('getCurrentTime', 10, function () {
            if (debug) print('SVGAnimationElement.getCurrentTime.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSimpleDuration: {

        value: newFunc('getSimpleDuration', 10, function () {
            if (debug) print('SVGAnimationElement.getSimpleDuration.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getStartTime: {

        value: newFunc('getStartTime', 10, function () {
            if (debug) print('SVGAnimationElement.getStartTime.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimationElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedTransformList = newFunc('SVGAnimatedTransformList', 1, function () {
    print('SVGAnimatedTransformList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedTransformList.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedTransformList.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedTransformList.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedTransformList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedString = newFunc('SVGAnimatedString', 1, function () {
    print('SVGAnimatedString.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedString.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedString.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('baseVal', 1, function (value) {
            if (debug) print('SVGAnimatedString.baseVal.set', value)
            mm.memory.private_data.get(this).baseVal = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedString.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedString.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedRect = newFunc('SVGAnimatedRect', 1, function () {
    print('SVGAnimatedRect.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedRect.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedRect.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedRect.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedRect.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedPreserveAspectRatio = newFunc('SVGAnimatedPreserveAspectRatio', 1, function () {
    print('SVGAnimatedPreserveAspectRatio.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedPreserveAspectRatio.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedPreserveAspectRatio.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedPreserveAspectRatio.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedPreserveAspectRatio.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedNumberList = newFunc('SVGAnimatedNumberList', 1, function () {
    print('SVGAnimatedNumberList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedNumberList.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedNumberList.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedNumberList.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedNumberList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedNumber = newFunc('SVGAnimatedNumber', 1, function () {
    print('SVGAnimatedNumber.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedNumber.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedNumber.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('baseVal', 1, function (value) {
            if (debug) print('SVGAnimatedNumber.baseVal.set', value)
            mm.memory.private_data.get(this).baseVal = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedNumber.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedNumber.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedLengthList = newFunc('SVGAnimatedLengthList', 1, function () {
    print('SVGAnimatedLengthList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedLengthList.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedLengthList.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedLengthList.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedLengthList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedLength = newFunc('SVGAnimatedLength', 1, function () {
    print('SVGAnimatedLength.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedLength.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedLength.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedLength.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedLength.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedInteger = newFunc('SVGAnimatedInteger', 1, function () {
    print('SVGAnimatedInteger.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedInteger.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedInteger.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('baseVal', 1, function (value) {
            if (debug) print('SVGAnimatedInteger.baseVal.set', value)
            mm.memory.private_data.get(this).baseVal = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedInteger.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedInteger.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedEnumeration = newFunc('SVGAnimatedEnumeration', 1, function () {
    print('SVGAnimatedEnumeration.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedEnumeration.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedEnumeration.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('baseVal', 1, function (value) {
            if (debug) print('SVGAnimatedEnumeration.baseVal.set', value)
            mm.memory.private_data.get(this).baseVal = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedEnumeration.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedEnumeration.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimatedBoolean = newFunc('SVGAnimatedBoolean', 1, function () {
    print('SVGAnimatedBoolean.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimatedBoolean.prototype, {
    baseVal: {

        get: newFunc('baseVal', 10, function () {
            let res = mm.memory.private_data.get(this).baseVal;
            if (debug) print('SVGAnimatedBoolean.baseVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('baseVal', 1, function (value) {
            if (debug) print('SVGAnimatedBoolean.baseVal.set', value)
            mm.memory.private_data.get(this).baseVal = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    animVal: {

        get: newFunc('animVal', 10, function () {
            let res = mm.memory.private_data.get(this).animVal;
            if (debug) print('SVGAnimatedBoolean.animVal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimatedBoolean.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimateTransformElement = newFunc('SVGAnimateTransformElement', 1, function () {
    print('SVGAnimateTransformElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimateTransformElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimateTransformElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimateMotionElement = newFunc('SVGAnimateMotionElement', 1, function () {
    print('SVGAnimateMotionElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimateMotionElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimateMotionElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAnimateElement = newFunc('SVGAnimateElement', 1, function () {
    print('SVGAnimateElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAnimateElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAnimateElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;SVGAElement = newFunc('SVGAElement', 1, function () {
    print('SVGAElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SVGAElement.prototype, {
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('SVGAElement.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('SVGAElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SVGAElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});