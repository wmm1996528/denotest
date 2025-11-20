TextMetrics = newFunc('TextMetrics', 5, function TextMetrics(font, text) {
    let width, actualBoundingBoxLeft, actualBoundingBoxRight, actualBoundingBoxAscent, actualBoundingBoxDescent;
    if (ENV.fontsres[font] && ENV.fontsres[font][text]) {
        width = ENV.fontsres[font][text].width
        actualBoundingBoxLeft = ENV.fontsres[font][text].actualboundingboxleft
        actualBoundingBoxRight = ENV.fontsres[font][text].actualboundingboxleft
        actualBoundingBoxAscent = ENV.fontsres[font][text].actualboundingboxascent
        actualBoundingBoxDescent = ENV.fontsres[font][text].actualboundingboxdescent
    } else {
        width = 132.39996337890625 * (Math.random() * 0.1 + 0.9);
        actualBoundingBoxAscent = 556.640625 * (Math.random() * 0.1 + 0.9);
        actualBoundingBoxDescent = -203.61328125 * (Math.random() * 0.1 + 0.9);
        actualBoundingBoxLeft = -22.94921875 * (Math.random() * 0.1 + 0.9);
        actualBoundingBoxRight = 579.1015625 * (Math.random() * 0.1 + 0.9);

    }
    // v_console_log(this.text[0], "  [*] TextMetrics -> width[get]", width);

    mm.memory.private_data.set(this, {
        font: font,
        text: text,
        width: width,
        actualBoundingBoxLeft: actualBoundingBoxLeft,
        actualBoundingBoxRight: actualBoundingBoxRight,
        actualBoundingBoxAscent: actualBoundingBoxAscent,
        actualBoundingBoxDescent: actualBoundingBoxDescent
    })
}, true)




; delete TextMetrics.prototype.constructor;
;
Object.defineProperties(TextMetrics.prototype, {
    [Symbol.toStringTag]:{
        value:'TextMetrics'
    },

    'width': {

        get: newFunc('width', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['width'];
            if (debug)print('TextMetrics.width.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'actualBoundingBoxLeft': {

        get: newFunc('actualBoundingBoxLeft', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['actualBoundingBoxLeft'];
            if (debug)print('TextMetrics.actualBoundingBoxLeft.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'actualBoundingBoxRight': {

        get: newFunc('actualBoundingBoxRight', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['actualBoundingBoxRight'];
            if (debug)print('TextMetrics.actualBoundingBoxRight.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'fontBoundingBoxAscent': {

        get: newFunc('fontBoundingBoxAscent', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['fontBoundingBoxAscent'];
            if (debug)print('TextMetrics.fontBoundingBoxAscent.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'fontBoundingBoxDescent': {

        get: newFunc('fontBoundingBoxDescent', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['fontBoundingBoxDescent'];
            if (debug)print('TextMetrics.fontBoundingBoxDescent.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'actualBoundingBoxAscent': {

        get: newFunc('actualBoundingBoxAscent', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['actualBoundingBoxAscent'];
            if (debug)print('TextMetrics.actualBoundingBoxAscent.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'actualBoundingBoxDescent': {

        get: newFunc('actualBoundingBoxDescent', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['actualBoundingBoxDescent'];
            if (debug)print('TextMetrics.actualBoundingBoxDescent.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'hangingBaseline': {

        get: newFunc('hangingBaseline', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['hangingBaseline'];
            if (debug)print('TextMetrics.hangingBaseline.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'alphabeticBaseline': {

        get: newFunc('alphabeticBaseline', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['alphabeticBaseline'];
            if (debug)print('TextMetrics.alphabeticBaseline.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'ideographicBaseline': {

        get: newFunc('ideographicBaseline', 10, function (){


            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['ideographicBaseline'];
            if (debug)print('TextMetrics.ideographicBaseline.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!TextMetrics.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('TextMetrics.constructor.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
})

