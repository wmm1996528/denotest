CSSPositionTryDescriptors = newFunc('CSSPositionTryDescriptors', 1, function () {
    print('CSSPositionTryDescriptors.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSPositionTryDescriptors.prototype, {
    'margin': {

        get: newFunc('margin', 10, function () {
            let res = mm.memory.private_data.get(this)['margin'];
            if (debug) print('CSSPositionTryDescriptors.margin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin.set', value)
            mm.memory.private_data.get(this)['margin'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginTop': {

        get: newFunc('marginTop', 10, function () {
            let res = mm.memory.private_data.get(this)['marginTop'];
            if (debug) print('CSSPositionTryDescriptors.marginTop.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginTop', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginTop.set', value)
            mm.memory.private_data.get(this)['marginTop'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginRight': {

        get: newFunc('marginRight', 10, function () {
            let res = mm.memory.private_data.get(this)['marginRight'];
            if (debug) print('CSSPositionTryDescriptors.marginRight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginRight', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginRight.set', value)
            mm.memory.private_data.get(this)['marginRight'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginBottom': {

        get: newFunc('marginBottom', 10, function () {
            let res = mm.memory.private_data.get(this)['marginBottom'];
            if (debug) print('CSSPositionTryDescriptors.marginBottom.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginBottom', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginBottom.set', value)
            mm.memory.private_data.get(this)['marginBottom'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginLeft': {

        get: newFunc('marginLeft', 10, function () {
            let res = mm.memory.private_data.get(this)['marginLeft'];
            if (debug) print('CSSPositionTryDescriptors.marginLeft.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginLeft', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginLeft.set', value)
            mm.memory.private_data.get(this)['marginLeft'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginBlock': {

        get: newFunc('marginBlock', 10, function () {
            let res = mm.memory.private_data.get(this)['marginBlock'];
            if (debug) print('CSSPositionTryDescriptors.marginBlock.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginBlock', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginBlock.set', value)
            mm.memory.private_data.get(this)['marginBlock'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginBlockStart': {

        get: newFunc('marginBlockStart', 10, function () {
            let res = mm.memory.private_data.get(this)['marginBlockStart'];
            if (debug) print('CSSPositionTryDescriptors.marginBlockStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginBlockStart', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginBlockStart.set', value)
            mm.memory.private_data.get(this)['marginBlockStart'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginBlockEnd': {

        get: newFunc('marginBlockEnd', 10, function () {
            let res = mm.memory.private_data.get(this)['marginBlockEnd'];
            if (debug) print('CSSPositionTryDescriptors.marginBlockEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginBlockEnd', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginBlockEnd.set', value)
            mm.memory.private_data.get(this)['marginBlockEnd'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginInline': {

        get: newFunc('marginInline', 10, function () {
            let res = mm.memory.private_data.get(this)['marginInline'];
            if (debug) print('CSSPositionTryDescriptors.marginInline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginInline', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginInline.set', value)
            mm.memory.private_data.get(this)['marginInline'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginInlineStart': {

        get: newFunc('marginInlineStart', 10, function () {
            let res = mm.memory.private_data.get(this)['marginInlineStart'];
            if (debug) print('CSSPositionTryDescriptors.marginInlineStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginInlineStart', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginInlineStart.set', value)
            mm.memory.private_data.get(this)['marginInlineStart'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'marginInlineEnd': {

        get: newFunc('marginInlineEnd', 10, function () {
            let res = mm.memory.private_data.get(this)['marginInlineEnd'];
            if (debug) print('CSSPositionTryDescriptors.marginInlineEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginInlineEnd', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.marginInlineEnd.set', value)
            mm.memory.private_data.get(this)['marginInlineEnd'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-top': {

        get: newFunc('margin-top', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-top'];
            if (debug) print('CSSPositionTryDescriptors.margin-top.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-top', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-top.set', value)
            mm.memory.private_data.get(this)['margin-top'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-right': {

        get: newFunc('margin-right', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-right'];
            if (debug) print('CSSPositionTryDescriptors.margin-right.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-right', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-right.set', value)
            mm.memory.private_data.get(this)['margin-right'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-bottom': {

        get: newFunc('margin-bottom', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-bottom'];
            if (debug) print('CSSPositionTryDescriptors.margin-bottom.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-bottom', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-bottom.set', value)
            mm.memory.private_data.get(this)['margin-bottom'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-left': {

        get: newFunc('margin-left', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-left'];
            if (debug) print('CSSPositionTryDescriptors.margin-left.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-left', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-left.set', value)
            mm.memory.private_data.get(this)['margin-left'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-block': {

        get: newFunc('margin-block', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-block'];
            if (debug) print('CSSPositionTryDescriptors.margin-block.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-block', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-block.set', value)
            mm.memory.private_data.get(this)['margin-block'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-block-start': {

        get: newFunc('margin-block-start', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-block-start'];
            if (debug) print('CSSPositionTryDescriptors.margin-block-start.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-block-start', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-block-start.set', value)
            mm.memory.private_data.get(this)['margin-block-start'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-block-end': {

        get: newFunc('margin-block-end', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-block-end'];
            if (debug) print('CSSPositionTryDescriptors.margin-block-end.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-block-end', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-block-end.set', value)
            mm.memory.private_data.get(this)['margin-block-end'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-inline': {

        get: newFunc('margin-inline', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-inline'];
            if (debug) print('CSSPositionTryDescriptors.margin-inline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-inline', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-inline.set', value)
            mm.memory.private_data.get(this)['margin-inline'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-inline-start': {

        get: newFunc('margin-inline-start', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-inline-start'];
            if (debug) print('CSSPositionTryDescriptors.margin-inline-start.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-inline-start', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-inline-start.set', value)
            mm.memory.private_data.get(this)['margin-inline-start'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'margin-inline-end': {

        get: newFunc('margin-inline-end', 10, function () {
            let res = mm.memory.private_data.get(this)['margin-inline-end'];
            if (debug) print('CSSPositionTryDescriptors.margin-inline-end.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('margin-inline-end', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.margin-inline-end.set', value)
            mm.memory.private_data.get(this)['margin-inline-end'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inset': {

        get: newFunc('inset', 10, function () {
            let res = mm.memory.private_data.get(this)['inset'];
            if (debug) print('CSSPositionTryDescriptors.inset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inset', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inset.set', value)
            mm.memory.private_data.get(this)['inset'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'insetBlock': {

        get: newFunc('insetBlock', 10, function () {
            let res = mm.memory.private_data.get(this)['insetBlock'];
            if (debug) print('CSSPositionTryDescriptors.insetBlock.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('insetBlock', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.insetBlock.set', value)
            mm.memory.private_data.get(this)['insetBlock'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'insetBlockStart': {

        get: newFunc('insetBlockStart', 10, function () {
            let res = mm.memory.private_data.get(this)['insetBlockStart'];
            if (debug) print('CSSPositionTryDescriptors.insetBlockStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('insetBlockStart', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.insetBlockStart.set', value)
            mm.memory.private_data.get(this)['insetBlockStart'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'insetBlockEnd': {

        get: newFunc('insetBlockEnd', 10, function () {
            let res = mm.memory.private_data.get(this)['insetBlockEnd'];
            if (debug) print('CSSPositionTryDescriptors.insetBlockEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('insetBlockEnd', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.insetBlockEnd.set', value)
            mm.memory.private_data.get(this)['insetBlockEnd'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'insetInline': {

        get: newFunc('insetInline', 10, function () {
            let res = mm.memory.private_data.get(this)['insetInline'];
            if (debug) print('CSSPositionTryDescriptors.insetInline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('insetInline', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.insetInline.set', value)
            mm.memory.private_data.get(this)['insetInline'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'insetInlineStart': {

        get: newFunc('insetInlineStart', 10, function () {
            let res = mm.memory.private_data.get(this)['insetInlineStart'];
            if (debug) print('CSSPositionTryDescriptors.insetInlineStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('insetInlineStart', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.insetInlineStart.set', value)
            mm.memory.private_data.get(this)['insetInlineStart'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'insetInlineEnd': {

        get: newFunc('insetInlineEnd', 10, function () {
            let res = mm.memory.private_data.get(this)['insetInlineEnd'];
            if (debug) print('CSSPositionTryDescriptors.insetInlineEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('insetInlineEnd', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.insetInlineEnd.set', value)
            mm.memory.private_data.get(this)['insetInlineEnd'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'top': {

        get: newFunc('top', 10, function () {
            let res = mm.memory.private_data.get(this)['top'];
            if (debug) print('CSSPositionTryDescriptors.top.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('top', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.top.set', value)
            mm.memory.private_data.get(this)['top'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'left': {

        get: newFunc('left', 10, function () {
            let res = mm.memory.private_data.get(this)['left'];
            if (debug) print('CSSPositionTryDescriptors.left.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('left', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.left.set', value)
            mm.memory.private_data.get(this)['left'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'right': {

        get: newFunc('right', 10, function () {
            let res = mm.memory.private_data.get(this)['right'];
            if (debug) print('CSSPositionTryDescriptors.right.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('right', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.right.set', value)
            mm.memory.private_data.get(this)['right'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'bottom': {

        get: newFunc('bottom', 10, function () {
            let res = mm.memory.private_data.get(this)['bottom'];
            if (debug) print('CSSPositionTryDescriptors.bottom.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('bottom', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.bottom.set', value)
            mm.memory.private_data.get(this)['bottom'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inset-block': {

        get: newFunc('inset-block', 10, function () {
            let res = mm.memory.private_data.get(this)['inset-block'];
            if (debug) print('CSSPositionTryDescriptors.inset-block.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inset-block', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inset-block.set', value)
            mm.memory.private_data.get(this)['inset-block'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inset-block-start': {

        get: newFunc('inset-block-start', 10, function () {
            let res = mm.memory.private_data.get(this)['inset-block-start'];
            if (debug) print('CSSPositionTryDescriptors.inset-block-start.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inset-block-start', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inset-block-start.set', value)
            mm.memory.private_data.get(this)['inset-block-start'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inset-block-end': {

        get: newFunc('inset-block-end', 10, function () {
            let res = mm.memory.private_data.get(this)['inset-block-end'];
            if (debug) print('CSSPositionTryDescriptors.inset-block-end.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inset-block-end', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inset-block-end.set', value)
            mm.memory.private_data.get(this)['inset-block-end'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inset-inline': {

        get: newFunc('inset-inline', 10, function () {
            let res = mm.memory.private_data.get(this)['inset-inline'];
            if (debug) print('CSSPositionTryDescriptors.inset-inline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inset-inline', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inset-inline.set', value)
            mm.memory.private_data.get(this)['inset-inline'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inset-inline-start': {

        get: newFunc('inset-inline-start', 10, function () {
            let res = mm.memory.private_data.get(this)['inset-inline-start'];
            if (debug) print('CSSPositionTryDescriptors.inset-inline-start.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inset-inline-start', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inset-inline-start.set', value)
            mm.memory.private_data.get(this)['inset-inline-start'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inset-inline-end': {

        get: newFunc('inset-inline-end', 10, function () {
            let res = mm.memory.private_data.get(this)['inset-inline-end'];
            if (debug) print('CSSPositionTryDescriptors.inset-inline-end.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inset-inline-end', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inset-inline-end.set', value)
            mm.memory.private_data.get(this)['inset-inline-end'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'width': {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this)['width'];
            if (debug) print('CSSPositionTryDescriptors.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.width.set', value)
            mm.memory.private_data.get(this)['width'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'minWidth': {

        get: newFunc('minWidth', 10, function () {
            let res = mm.memory.private_data.get(this)['minWidth'];
            if (debug) print('CSSPositionTryDescriptors.minWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('minWidth', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.minWidth.set', value)
            mm.memory.private_data.get(this)['minWidth'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'maxWidth': {

        get: newFunc('maxWidth', 10, function () {
            let res = mm.memory.private_data.get(this)['maxWidth'];
            if (debug) print('CSSPositionTryDescriptors.maxWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxWidth', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.maxWidth.set', value)
            mm.memory.private_data.get(this)['maxWidth'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'height': {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this)['height'];
            if (debug) print('CSSPositionTryDescriptors.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.height.set', value)
            mm.memory.private_data.get(this)['height'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'minHeight': {

        get: newFunc('minHeight', 10, function () {
            let res = mm.memory.private_data.get(this)['minHeight'];
            if (debug) print('CSSPositionTryDescriptors.minHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('minHeight', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.minHeight.set', value)
            mm.memory.private_data.get(this)['minHeight'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'maxHeight': {

        get: newFunc('maxHeight', 10, function () {
            let res = mm.memory.private_data.get(this)['maxHeight'];
            if (debug) print('CSSPositionTryDescriptors.maxHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxHeight', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.maxHeight.set', value)
            mm.memory.private_data.get(this)['maxHeight'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'blockSize': {

        get: newFunc('blockSize', 10, function () {
            let res = mm.memory.private_data.get(this)['blockSize'];
            if (debug) print('CSSPositionTryDescriptors.blockSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('blockSize', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.blockSize.set', value)
            mm.memory.private_data.get(this)['blockSize'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'minBlockSize': {

        get: newFunc('minBlockSize', 10, function () {
            let res = mm.memory.private_data.get(this)['minBlockSize'];
            if (debug) print('CSSPositionTryDescriptors.minBlockSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('minBlockSize', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.minBlockSize.set', value)
            mm.memory.private_data.get(this)['minBlockSize'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'maxBlockSize': {

        get: newFunc('maxBlockSize', 10, function () {
            let res = mm.memory.private_data.get(this)['maxBlockSize'];
            if (debug) print('CSSPositionTryDescriptors.maxBlockSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxBlockSize', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.maxBlockSize.set', value)
            mm.memory.private_data.get(this)['maxBlockSize'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inlineSize': {

        get: newFunc('inlineSize', 10, function () {
            let res = mm.memory.private_data.get(this)['inlineSize'];
            if (debug) print('CSSPositionTryDescriptors.inlineSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inlineSize', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inlineSize.set', value)
            mm.memory.private_data.get(this)['inlineSize'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'minInlineSize': {

        get: newFunc('minInlineSize', 10, function () {
            let res = mm.memory.private_data.get(this)['minInlineSize'];
            if (debug) print('CSSPositionTryDescriptors.minInlineSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('minInlineSize', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.minInlineSize.set', value)
            mm.memory.private_data.get(this)['minInlineSize'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'maxInlineSize': {

        get: newFunc('maxInlineSize', 10, function () {
            let res = mm.memory.private_data.get(this)['maxInlineSize'];
            if (debug) print('CSSPositionTryDescriptors.maxInlineSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxInlineSize', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.maxInlineSize.set', value)
            mm.memory.private_data.get(this)['maxInlineSize'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'min-width': {

        get: newFunc('min-width', 10, function () {
            let res = mm.memory.private_data.get(this)['min-width'];
            if (debug) print('CSSPositionTryDescriptors.min-width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('min-width', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.min-width.set', value)
            mm.memory.private_data.get(this)['min-width'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'max-width': {

        get: newFunc('max-width', 10, function () {
            let res = mm.memory.private_data.get(this)['max-width'];
            if (debug) print('CSSPositionTryDescriptors.max-width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('max-width', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.max-width.set', value)
            mm.memory.private_data.get(this)['max-width'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'min-height': {

        get: newFunc('min-height', 10, function () {
            let res = mm.memory.private_data.get(this)['min-height'];
            if (debug) print('CSSPositionTryDescriptors.min-height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('min-height', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.min-height.set', value)
            mm.memory.private_data.get(this)['min-height'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'max-height': {

        get: newFunc('max-height', 10, function () {
            let res = mm.memory.private_data.get(this)['max-height'];
            if (debug) print('CSSPositionTryDescriptors.max-height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('max-height', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.max-height.set', value)
            mm.memory.private_data.get(this)['max-height'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'block-size': {

        get: newFunc('block-size', 10, function () {
            let res = mm.memory.private_data.get(this)['block-size'];
            if (debug) print('CSSPositionTryDescriptors.block-size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('block-size', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.block-size.set', value)
            mm.memory.private_data.get(this)['block-size'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'min-block-size': {

        get: newFunc('min-block-size', 10, function () {
            let res = mm.memory.private_data.get(this)['min-block-size'];
            if (debug) print('CSSPositionTryDescriptors.min-block-size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('min-block-size', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.min-block-size.set', value)
            mm.memory.private_data.get(this)['min-block-size'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'max-block-size': {

        get: newFunc('max-block-size', 10, function () {
            let res = mm.memory.private_data.get(this)['max-block-size'];
            if (debug) print('CSSPositionTryDescriptors.max-block-size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('max-block-size', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.max-block-size.set', value)
            mm.memory.private_data.get(this)['max-block-size'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'inline-size': {

        get: newFunc('inline-size', 10, function () {
            let res = mm.memory.private_data.get(this)['inline-size'];
            if (debug) print('CSSPositionTryDescriptors.inline-size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('inline-size', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.inline-size.set', value)
            mm.memory.private_data.get(this)['inline-size'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'min-inline-size': {

        get: newFunc('min-inline-size', 10, function () {
            let res = mm.memory.private_data.get(this)['min-inline-size'];
            if (debug) print('CSSPositionTryDescriptors.min-inline-size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('min-inline-size', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.min-inline-size.set', value)
            mm.memory.private_data.get(this)['min-inline-size'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'max-inline-size': {

        get: newFunc('max-inline-size', 10, function () {
            let res = mm.memory.private_data.get(this)['max-inline-size'];
            if (debug) print('CSSPositionTryDescriptors.max-inline-size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('max-inline-size', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.max-inline-size.set', value)
            mm.memory.private_data.get(this)['max-inline-size'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'placeSelf': {

        get: newFunc('placeSelf', 10, function () {
            let res = mm.memory.private_data.get(this)['placeSelf'];
            if (debug) print('CSSPositionTryDescriptors.placeSelf.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('placeSelf', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.placeSelf.set', value)
            mm.memory.private_data.get(this)['placeSelf'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'alignSelf': {

        get: newFunc('alignSelf', 10, function () {
            let res = mm.memory.private_data.get(this)['alignSelf'];
            if (debug) print('CSSPositionTryDescriptors.alignSelf.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('alignSelf', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.alignSelf.set', value)
            mm.memory.private_data.get(this)['alignSelf'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'justifySelf': {

        get: newFunc('justifySelf', 10, function () {
            let res = mm.memory.private_data.get(this)['justifySelf'];
            if (debug) print('CSSPositionTryDescriptors.justifySelf.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('justifySelf', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.justifySelf.set', value)
            mm.memory.private_data.get(this)['justifySelf'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'place-self': {

        get: newFunc('place-self', 10, function () {
            let res = mm.memory.private_data.get(this)['place-self'];
            if (debug) print('CSSPositionTryDescriptors.place-self.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('place-self', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.place-self.set', value)
            mm.memory.private_data.get(this)['place-self'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'align-self': {

        get: newFunc('align-self', 10, function () {
            let res = mm.memory.private_data.get(this)['align-self'];
            if (debug) print('CSSPositionTryDescriptors.align-self.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align-self', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.align-self.set', value)
            mm.memory.private_data.get(this)['align-self'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'justify-self': {

        get: newFunc('justify-self', 10, function () {
            let res = mm.memory.private_data.get(this)['justify-self'];
            if (debug) print('CSSPositionTryDescriptors.justify-self.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('justify-self', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.justify-self.set', value)
            mm.memory.private_data.get(this)['justify-self'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'positionAnchor': {

        get: newFunc('positionAnchor', 10, function () {
            let res = mm.memory.private_data.get(this)['positionAnchor'];
            if (debug) print('CSSPositionTryDescriptors.positionAnchor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('positionAnchor', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.positionAnchor.set', value)
            mm.memory.private_data.get(this)['positionAnchor'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'position-anchor': {

        get: newFunc('position-anchor', 10, function () {
            let res = mm.memory.private_data.get(this)['position-anchor'];
            if (debug) print('CSSPositionTryDescriptors.position-anchor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('position-anchor', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.position-anchor.set', value)
            mm.memory.private_data.get(this)['position-anchor'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'positionArea': {

        get: newFunc('positionArea', 10, function () {
            let res = mm.memory.private_data.get(this)['positionArea'];
            if (debug) print('CSSPositionTryDescriptors.positionArea.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('positionArea', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.positionArea.set', value)
            mm.memory.private_data.get(this)['positionArea'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'position-area': {

        get: newFunc('position-area', 10, function () {
            let res = mm.memory.private_data.get(this)['position-area'];
            if (debug) print('CSSPositionTryDescriptors.position-area.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('position-area', 1, function (value) {
            if (debug) print('CSSPositionTryDescriptors.position-area.set', value)
            mm.memory.private_data.get(this)['position-area'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSPositionTryDescriptors.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})