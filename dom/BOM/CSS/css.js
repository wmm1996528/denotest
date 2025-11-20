;CSSVariableReferenceValue = newFunc('CSSVariableReferenceValue', 1, function () {
    print('CSSVariableReferenceValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSVariableReferenceValue.prototype, {
    variable: {

        get: newFunc('variable', 10, function () {
            let res = mm.memory.private_data.get(this).variable;
            if (debug) print('CSSVariableReferenceValue.variable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('variable', 1, function (value) {
            if (debug) print('CSSVariableReferenceValue.variable.set', value)
            mm.memory.private_data.get(this).variable = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fallback: {

        get: newFunc('fallback', 10, function () {
            let res = mm.memory.private_data.get(this).fallback;
            if (debug) print('CSSVariableReferenceValue.fallback.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSVariableReferenceValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSUnparsedValue = newFunc('CSSUnparsedValue', 1, function () {
    print('CSSUnparsedValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSUnparsedValue.prototype, {
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('CSSUnparsedValue.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('CSSUnparsedValue.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('CSSUnparsedValue.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('CSSUnparsedValue.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('CSSUnparsedValue.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSUnparsedValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSUnitValue = newFunc('CSSUnitValue', 1, function () {
    print('CSSUnitValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSUnitValue.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('CSSUnitValue.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('CSSUnitValue.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    unit: {

        get: newFunc('unit', 10, function () {
            let res = mm.memory.private_data.get(this).unit;
            if (debug) print('CSSUnitValue.unit.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSUnitValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSTranslate = newFunc('CSSTranslate', 1, function () {
    print('CSSTranslate.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSTranslate.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('CSSTranslate.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('x', 1, function (value) {
            if (debug) print('CSSTranslate.x.set', value)
            mm.memory.private_data.get(this).x = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('CSSTranslate.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('y', 1, function (value) {
            if (debug) print('CSSTranslate.y.set', value)
            mm.memory.private_data.get(this).y = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('CSSTranslate.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('z', 1, function (value) {
            if (debug) print('CSSTranslate.z.set', value)
            mm.memory.private_data.get(this).z = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSTranslate.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSTransition = newFunc('CSSTransition', 1, function () {
    print('CSSTransition.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSTransition.prototype, {
    transitionProperty: {

        get: newFunc('transitionProperty', 10, function () {
            let res = mm.memory.private_data.get(this).transitionProperty;
            if (debug) print('CSSTransition.transitionProperty.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSTransition.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSTransformValue = newFunc('CSSTransformValue', 1, function () {
    print('CSSTransformValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSTransformValue.prototype, {
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('CSSTransformValue.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('CSSTransformValue.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('CSSTransformValue.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('CSSTransformValue.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('CSSTransformValue.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    is2D: {

        get: newFunc('is2D', 10, function () {
            let res = mm.memory.private_data.get(this).is2D;
            if (debug) print('CSSTransformValue.is2D.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toMatrix: {

        value: newFunc('toMatrix', 10, function () {
            if (debug) print('CSSTransformValue.toMatrix.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSTransformValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSTransformComponent = newFunc('CSSTransformComponent', 1, function () {
    print('CSSTransformComponent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSTransformComponent.prototype, {
    is2D: {

        get: newFunc('is2D', 10, function () {
            let res = mm.memory.private_data.get(this).is2D;
            if (debug) print('CSSTransformComponent.is2D.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('is2D', 1, function (value) {
            if (debug) print('CSSTransformComponent.is2D.set', value)
            mm.memory.private_data.get(this).is2D = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    toMatrix: {

        value: newFunc('toMatrix', 10, function () {
            if (debug) print('CSSTransformComponent.toMatrix.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('CSSTransformComponent.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSTransformComponent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSSupportsRule = newFunc('CSSSupportsRule', 1, function () {
    print('CSSSupportsRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSSupportsRule.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSSupportsRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSStyleValue = newFunc('CSSStyleValue', 1, function () {
    print('CSSStyleValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSStyleValue.prototype, {
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('CSSStyleValue.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSStyleValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSStartingStyleRule = newFunc('CSSStartingStyleRule', 1, function () {
    print('CSSStartingStyleRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSStartingStyleRule.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSStartingStyleRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSSkewY = newFunc('CSSSkewY', 1, function () {
    print('CSSSkewY.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSSkewY.prototype, {
    ay: {

        get: newFunc('ay', 10, function () {
            let res = mm.memory.private_data.get(this).ay;
            if (debug) print('CSSSkewY.ay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ay', 1, function (value) {
            if (debug) print('CSSSkewY.ay.set', value)
            mm.memory.private_data.get(this).ay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSSkewY.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSSkewX = newFunc('CSSSkewX', 1, function () {
    print('CSSSkewX.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSSkewX.prototype, {
    ax: {

        get: newFunc('ax', 10, function () {
            let res = mm.memory.private_data.get(this).ax;
            if (debug) print('CSSSkewX.ax.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ax', 1, function (value) {
            if (debug) print('CSSSkewX.ax.set', value)
            mm.memory.private_data.get(this).ax = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSSkewX.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSSkew = newFunc('CSSSkew', 1, function () {
    print('CSSSkew.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSSkew.prototype, {
    ax: {

        get: newFunc('ax', 10, function () {
            let res = mm.memory.private_data.get(this).ax;
            if (debug) print('CSSSkew.ax.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ax', 1, function (value) {
            if (debug) print('CSSSkew.ax.set', value)
            mm.memory.private_data.get(this).ax = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ay: {

        get: newFunc('ay', 10, function () {
            let res = mm.memory.private_data.get(this).ay;
            if (debug) print('CSSSkew.ay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ay', 1, function (value) {
            if (debug) print('CSSSkew.ay.set', value)
            mm.memory.private_data.get(this).ay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSSkew.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSScopeRule = newFunc('CSSScopeRule', 1, function () {
    print('CSSScopeRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSScopeRule.prototype, {
    start: {

        get: newFunc('start', 10, function () {
            let res = mm.memory.private_data.get(this).start;
            if (debug) print('CSSScopeRule.start.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    end: {

        get: newFunc('end', 10, function () {
            let res = mm.memory.private_data.get(this).end;
            if (debug) print('CSSScopeRule.end.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSScopeRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSScale = newFunc('CSSScale', 1, function () {
    print('CSSScale.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSScale.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('CSSScale.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('x', 1, function (value) {
            if (debug) print('CSSScale.x.set', value)
            mm.memory.private_data.get(this).x = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('CSSScale.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('y', 1, function (value) {
            if (debug) print('CSSScale.y.set', value)
            mm.memory.private_data.get(this).y = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('CSSScale.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('z', 1, function (value) {
            if (debug) print('CSSScale.z.set', value)
            mm.memory.private_data.get(this).z = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSScale.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;

;CSSRotate = newFunc('CSSRotate', 1, function () {
    print('CSSRotate.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSRotate.prototype, {
    angle: {

        get: newFunc('angle', 10, function () {
            let res = mm.memory.private_data.get(this).angle;
            if (debug) print('CSSRotate.angle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('angle', 1, function (value) {
            if (debug) print('CSSRotate.angle.set', value)
            mm.memory.private_data.get(this).angle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('CSSRotate.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('x', 1, function (value) {
            if (debug) print('CSSRotate.x.set', value)
            mm.memory.private_data.get(this).x = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('CSSRotate.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('y', 1, function (value) {
            if (debug) print('CSSRotate.y.set', value)
            mm.memory.private_data.get(this).y = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('CSSRotate.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('z', 1, function (value) {
            if (debug) print('CSSRotate.z.set', value)
            mm.memory.private_data.get(this).z = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSRotate.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSPropertyRule = newFunc('CSSPropertyRule', 1, function () {
    print('CSSPropertyRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSPropertyRule.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('CSSPropertyRule.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    syntax: {

        get: newFunc('syntax', 10, function () {
            let res = mm.memory.private_data.get(this).syntax;
            if (debug) print('CSSPropertyRule.syntax.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    inherits: {

        get: newFunc('inherits', 10, function () {
            let res = mm.memory.private_data.get(this).inherits;
            if (debug) print('CSSPropertyRule.inherits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    initialValue: {

        get: newFunc('initialValue', 10, function () {
            let res = mm.memory.private_data.get(this).initialValue;
            if (debug) print('CSSPropertyRule.initialValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSPropertyRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSPositionValue = newFunc('CSSPositionValue', 1, function () {
    print('CSSPositionValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSPositionValue.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('CSSPositionValue.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('x', 1, function (value) {
            if (debug) print('CSSPositionValue.x.set', value)
            mm.memory.private_data.get(this).x = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('CSSPositionValue.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('y', 1, function (value) {
            if (debug) print('CSSPositionValue.y.set', value)
            mm.memory.private_data.get(this).y = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSPositionValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSPositionTryRule = newFunc('CSSPositionTryRule', 1, function () {
    print('CSSPositionTryRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSPositionTryRule.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('CSSPositionTryRule.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('CSSPositionTryRule.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('CSSPositionTryRule.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSPositionTryRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


;CSSPerspective = newFunc('CSSPerspective', 1, function () {
    print('CSSPerspective.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSPerspective.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('CSSPerspective.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('length', 1, function (value) {
            if (debug) print('CSSPerspective.length.set', value)
            mm.memory.private_data.get(this).length = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSPerspective.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSPageRule = newFunc('CSSPageRule', 1, function () {
    print('CSSPageRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSPageRule.prototype, {
    selectorText: {

        get: newFunc('selectorText', 10, function () {
            let res = mm.memory.private_data.get(this).selectorText;
            if (debug) print('CSSPageRule.selectorText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectorText', 1, function (value) {
            if (debug) print('CSSPageRule.selectorText.set', value)
            mm.memory.private_data.get(this).selectorText = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('CSSPageRule.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('CSSPageRule.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSPageRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSNumericValue = newFunc('CSSNumericValue', 1, function () {
    print('CSSNumericValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSNumericValue.prototype, {
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('CSSNumericValue.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    div: {

        value: newFunc('div', 10, function () {
            if (debug) print('CSSNumericValue.div.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    equals: {

        value: newFunc('equals', 10, function () {
            if (debug) print('CSSNumericValue.equals.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    max: {

        value: newFunc('max', 10, function () {
            if (debug) print('CSSNumericValue.max.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    min: {

        value: newFunc('min', 10, function () {
            if (debug) print('CSSNumericValue.min.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    mul: {

        value: newFunc('mul', 10, function () {
            if (debug) print('CSSNumericValue.mul.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    sub: {

        value: newFunc('sub', 10, function () {
            if (debug) print('CSSNumericValue.sub.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    to: {

        value: newFunc('to', 10, function () {
            if (debug) print('CSSNumericValue.to.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toSum: {

        value: newFunc('toSum', 10, function () {
            if (debug) print('CSSNumericValue.toSum.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    type: {

        value: newFunc('type', 10, function () {
            if (debug) print('CSSNumericValue.type.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSNumericValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSNumericArray = newFunc('CSSNumericArray', 1, function () {
    print('CSSNumericArray.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSNumericArray.prototype, {
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('CSSNumericArray.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('CSSNumericArray.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('CSSNumericArray.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('CSSNumericArray.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('CSSNumericArray.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSNumericArray.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSNamespaceRule = newFunc('CSSNamespaceRule', 1, function () {
    print('CSSNamespaceRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSNamespaceRule.prototype, {
    namespaceURI: {

        get: newFunc('namespaceURI', 10, function () {
            let res = mm.memory.private_data.get(this).namespaceURI;
            if (debug) print('CSSNamespaceRule.namespaceURI.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    prefix: {

        get: newFunc('prefix', 10, function () {
            let res = mm.memory.private_data.get(this).prefix;
            if (debug) print('CSSNamespaceRule.prefix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSNamespaceRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMediaRule = newFunc('CSSMediaRule', 1, function () {
    print('CSSMediaRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMediaRule.prototype, {
    media: {

        get: newFunc('media', 10, function () {
            let res = mm.memory.private_data.get(this).media;
            if (debug) print('CSSMediaRule.media.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function (value) {
            if (debug) print('CSSMediaRule.media.set', value)
            mm.memory.private_data.get(this).media = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMediaRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMatrixComponent = newFunc('CSSMatrixComponent', 1, function () {
    print('CSSMatrixComponent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMatrixComponent.prototype, {
    matrix: {

        get: newFunc('matrix', 10, function () {
            let res = mm.memory.private_data.get(this).matrix;
            if (debug) print('CSSMatrixComponent.matrix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('matrix', 1, function (value) {
            if (debug) print('CSSMatrixComponent.matrix.set', value)
            mm.memory.private_data.get(this).matrix = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMatrixComponent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathValue = newFunc('CSSMathValue', 1, function () {
    print('CSSMathValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathValue.prototype, {
    operator: {

        get: newFunc('operator', 10, function () {
            let res = mm.memory.private_data.get(this).operator;
            if (debug) print('CSSMathValue.operator.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathSum = newFunc('CSSMathSum', 1, function () {
    print('CSSMathSum.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathSum.prototype, {
    values: {

        get: newFunc('values', 10, function () {
            let res = mm.memory.private_data.get(this).values;
            if (debug) print('CSSMathSum.values.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathSum.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathProduct = newFunc('CSSMathProduct', 1, function () {
    print('CSSMathProduct.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathProduct.prototype, {
    values: {

        get: newFunc('values', 10, function () {
            let res = mm.memory.private_data.get(this).values;
            if (debug) print('CSSMathProduct.values.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathProduct.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathNegate = newFunc('CSSMathNegate', 1, function () {
    print('CSSMathNegate.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathNegate.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('CSSMathNegate.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathNegate.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathMin = newFunc('CSSMathMin', 1, function () {
    print('CSSMathMin.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathMin.prototype, {
    values: {

        get: newFunc('values', 10, function () {
            let res = mm.memory.private_data.get(this).values;
            if (debug) print('CSSMathMin.values.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathMin.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathMax = newFunc('CSSMathMax', 1, function () {
    print('CSSMathMax.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathMax.prototype, {
    values: {

        get: newFunc('values', 10, function () {
            let res = mm.memory.private_data.get(this).values;
            if (debug) print('CSSMathMax.values.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathMax.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathInvert = newFunc('CSSMathInvert', 1, function () {
    print('CSSMathInvert.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathInvert.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('CSSMathInvert.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathInvert.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSMathClamp = newFunc('CSSMathClamp', 1, function () {
    print('CSSMathClamp.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMathClamp.prototype, {
    lower: {

        get: newFunc('lower', 10, function () {
            let res = mm.memory.private_data.get(this).lower;
            if (debug) print('CSSMathClamp.lower.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('CSSMathClamp.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    upper: {

        get: newFunc('upper', 10, function () {
            let res = mm.memory.private_data.get(this).upper;
            if (debug) print('CSSMathClamp.upper.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMathClamp.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSLayerStatementRule = newFunc('CSSLayerStatementRule', 1, function () {
    print('CSSLayerStatementRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSLayerStatementRule.prototype, {
    nameList: {

        get: newFunc('nameList', 10, function () {
            let res = mm.memory.private_data.get(this).nameList;
            if (debug) print('CSSLayerStatementRule.nameList.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSLayerStatementRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSLayerBlockRule = newFunc('CSSLayerBlockRule', 1, function () {
    print('CSSLayerBlockRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSLayerBlockRule.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('CSSLayerBlockRule.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSLayerBlockRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSKeywordValue = newFunc('CSSKeywordValue', 1, function () {
    print('CSSKeywordValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSKeywordValue.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('CSSKeywordValue.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('CSSKeywordValue.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSKeywordValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSKeyframesRule = newFunc('CSSKeyframesRule', 1, function () {
    print('CSSKeyframesRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSKeyframesRule.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('CSSKeyframesRule.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('CSSKeyframesRule.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    cssRules: {

        get: newFunc('cssRules', 10, function () {
            let res = mm.memory.private_data.get(this).cssRules;
            if (debug) print('CSSKeyframesRule.cssRules.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appendRule: {

        value: newFunc('appendRule', 10, function () {
            if (debug) print('CSSKeyframesRule.appendRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteRule: {

        value: newFunc('deleteRule', 10, function () {
            if (debug) print('CSSKeyframesRule.deleteRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    findRule: {

        value: newFunc('findRule', 10, function () {
            if (debug) print('CSSKeyframesRule.findRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('CSSKeyframesRule.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSKeyframesRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSKeyframeRule = newFunc('CSSKeyframeRule', 1, function () {
    print('CSSKeyframeRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSKeyframeRule.prototype, {
    keyText: {

        get: newFunc('keyText', 10, function () {
            let res = mm.memory.private_data.get(this).keyText;
            if (debug) print('CSSKeyframeRule.keyText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('keyText', 1, function (value) {
            if (debug) print('CSSKeyframeRule.keyText.set', value)
            mm.memory.private_data.get(this).keyText = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('CSSKeyframeRule.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('CSSKeyframeRule.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSKeyframeRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSImportRule = newFunc('CSSImportRule', 1, function () {
    print('CSSImportRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSImportRule.prototype, {
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('CSSImportRule.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    media: {

        get: newFunc('media', 10, function () {
            let res = mm.memory.private_data.get(this).media;
            if (debug) print('CSSImportRule.media.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function (value) {
            if (debug) print('CSSImportRule.media.set', value)
            mm.memory.private_data.get(this).media = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    styleSheet: {

        get: newFunc('styleSheet', 10, function () {
            let res = mm.memory.private_data.get(this).styleSheet;
            if (debug) print('CSSImportRule.styleSheet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    layerName: {

        get: newFunc('layerName', 10, function () {
            let res = mm.memory.private_data.get(this).layerName;
            if (debug) print('CSSImportRule.layerName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    supportsText: {

        get: newFunc('supportsText', 10, function () {
            let res = mm.memory.private_data.get(this).supportsText;
            if (debug) print('CSSImportRule.supportsText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSImportRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSImageValue = newFunc('CSSImageValue', 1, function () {
    print('CSSImageValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSImageValue.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSImageValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSGroupingRule = newFunc('CSSGroupingRule', 1, function () {
    print('CSSGroupingRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSGroupingRule.prototype, {
    cssRules: {

        get: newFunc('cssRules', 10, function () {
            let res = mm.memory.private_data.get(this).cssRules;
            if (debug) print('CSSGroupingRule.cssRules.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deleteRule: {

        value: newFunc('deleteRule', 10, function () {
            if (debug) print('CSSGroupingRule.deleteRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertRule: {

        value: newFunc('insertRule', 10, function () {
            if (debug) print('CSSGroupingRule.insertRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSGroupingRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSFontPaletteValuesRule = newFunc('CSSFontPaletteValuesRule', 1, function () {
    print('CSSFontPaletteValuesRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSFontPaletteValuesRule.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('CSSFontPaletteValuesRule.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    fontFamily: {

        get: newFunc('fontFamily', 10, function () {
            let res = mm.memory.private_data.get(this).fontFamily;
            if (debug) print('CSSFontPaletteValuesRule.fontFamily.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    basePalette: {

        get: newFunc('basePalette', 10, function () {
            let res = mm.memory.private_data.get(this).basePalette;
            if (debug) print('CSSFontPaletteValuesRule.basePalette.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    overrideColors: {

        get: newFunc('overrideColors', 10, function () {
            let res = mm.memory.private_data.get(this).overrideColors;
            if (debug) print('CSSFontPaletteValuesRule.overrideColors.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSFontPaletteValuesRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSFontFaceRule = newFunc('CSSFontFaceRule', 1, function () {
    print('CSSFontFaceRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSFontFaceRule.prototype, {
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('CSSFontFaceRule.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSFontFaceRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSCounterStyleRule = newFunc('CSSCounterStyleRule', 1, function () {
    print('CSSCounterStyleRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSCounterStyleRule.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('CSSCounterStyleRule.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    system: {

        get: newFunc('system', 10, function () {
            let res = mm.memory.private_data.get(this).system;
            if (debug) print('CSSCounterStyleRule.system.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('system', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.system.set', value)
            mm.memory.private_data.get(this).system = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    symbols: {

        get: newFunc('symbols', 10, function () {
            let res = mm.memory.private_data.get(this).symbols;
            if (debug) print('CSSCounterStyleRule.symbols.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('symbols', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.symbols.set', value)
            mm.memory.private_data.get(this).symbols = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    additiveSymbols: {

        get: newFunc('additiveSymbols', 10, function () {
            let res = mm.memory.private_data.get(this).additiveSymbols;
            if (debug) print('CSSCounterStyleRule.additiveSymbols.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('additiveSymbols', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.additiveSymbols.set', value)
            mm.memory.private_data.get(this).additiveSymbols = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    negative: {

        get: newFunc('negative', 10, function () {
            let res = mm.memory.private_data.get(this).negative;
            if (debug) print('CSSCounterStyleRule.negative.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('negative', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.negative.set', value)
            mm.memory.private_data.get(this).negative = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    prefix: {

        get: newFunc('prefix', 10, function () {
            let res = mm.memory.private_data.get(this).prefix;
            if (debug) print('CSSCounterStyleRule.prefix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('prefix', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.prefix.set', value)
            mm.memory.private_data.get(this).prefix = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    suffix: {

        get: newFunc('suffix', 10, function () {
            let res = mm.memory.private_data.get(this).suffix;
            if (debug) print('CSSCounterStyleRule.suffix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('suffix', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.suffix.set', value)
            mm.memory.private_data.get(this).suffix = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    range: {

        get: newFunc('range', 10, function () {
            let res = mm.memory.private_data.get(this).range;
            if (debug) print('CSSCounterStyleRule.range.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('range', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.range.set', value)
            mm.memory.private_data.get(this).range = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    pad: {

        get: newFunc('pad', 10, function () {
            let res = mm.memory.private_data.get(this).pad;
            if (debug) print('CSSCounterStyleRule.pad.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('pad', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.pad.set', value)
            mm.memory.private_data.get(this).pad = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    speakAs: {

        get: newFunc('speakAs', 10, function () {
            let res = mm.memory.private_data.get(this).speakAs;
            if (debug) print('CSSCounterStyleRule.speakAs.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('speakAs', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.speakAs.set', value)
            mm.memory.private_data.get(this).speakAs = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fallback: {

        get: newFunc('fallback', 10, function () {
            let res = mm.memory.private_data.get(this).fallback;
            if (debug) print('CSSCounterStyleRule.fallback.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fallback', 1, function (value) {
            if (debug) print('CSSCounterStyleRule.fallback.set', value)
            mm.memory.private_data.get(this).fallback = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSCounterStyleRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSContainerRule = newFunc('CSSContainerRule', 1, function () {
    print('CSSContainerRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSContainerRule.prototype, {
    containerName: {

        get: newFunc('containerName', 10, function () {
            let res = mm.memory.private_data.get(this).containerName;
            if (debug) print('CSSContainerRule.containerName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    containerQuery: {

        get: newFunc('containerQuery', 10, function () {
            let res = mm.memory.private_data.get(this).containerQuery;
            if (debug) print('CSSContainerRule.containerQuery.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSContainerRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSConditionRule = newFunc('CSSConditionRule', 1, function () {
    print('CSSConditionRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSConditionRule.prototype, {
    conditionText: {

        get: newFunc('conditionText', 10, function () {
            let res = mm.memory.private_data.get(this).conditionText;
            if (debug) print('CSSConditionRule.conditionText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSConditionRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;CSSAnimation = newFunc('CSSAnimation', 1, function () {
    print('CSSAnimation.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSAnimation.prototype, {
    animationName: {

        get: newFunc('animationName', 10, function () {
            let res = mm.memory.private_data.get(this).animationName;
            if (debug) print('CSSAnimation.animationName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSAnimation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});