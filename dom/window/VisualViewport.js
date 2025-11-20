VisualViewport = newFunc('VisualViewport', 3, function VisualViewport() {
    mm.memory.private_data.set(this, {

        height: ENV.windowparams.innerheight,
        offsetLeft: 0,
        offsetTop: 0,
        onresize: null,
        onscroll:
            null,
        pageLeft:0,
        pageTop:
            0,
        scale:1,
        segments:null,
        width:ENV.windowparams.innerwidth,
    })
})


; delete VisualViewport.prototype.constructor;
;
Object.defineProperties(VisualViewport.prototype, {
    [Symbol.toStringTag]:{
        value:'VisualViewport'
    },

'offsetLeft': {

                  get: newFunc('offsetLeft', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['offsetLeft'];
            if (debug)print('VisualViewport.offsetLeft.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'offsetTop': {

                  get: newFunc('offsetTop', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['offsetTop'];
            if (debug)print('VisualViewport.offsetTop.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'pageLeft': {

                  get: newFunc('pageLeft', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['pageLeft'];
            if (debug)print('VisualViewport.pageLeft.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'pageTop': {

                  get: newFunc('pageTop', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['pageTop'];
            if (debug)print('VisualViewport.pageTop.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'width': {

                  get: newFunc('width', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['width'];
            if (debug)print('VisualViewport.width.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'height': {

                  get: newFunc('height', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['height'];
            if (debug)print('VisualViewport.height.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'scale': {

                  get: newFunc('scale', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['scale'];
            if (debug)print('VisualViewport.scale.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'onresize': {

                  get: newFunc('onresize', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onresize'];
            if (debug)print('VisualViewport.onresize.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onresize', 1, function (value){
                if (debug)print('VisualViewport.onresize.set', value)
            mm.memory.private_data.get(this)['onresize'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'onscroll': {

                  get: newFunc('onscroll', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onscroll'];
            if (debug)print('VisualViewport.onscroll.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onscroll', 1, function (value){
                if (debug)print('VisualViewport.onscroll.set', value)
            mm.memory.private_data.get(this)['onscroll'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'onscrollend': {

                  get: newFunc('onscrollend', 10, function (){


                    if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onscrollend'];
            if (debug)print('VisualViewport.onscrollend.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onscrollend', 1, function (value){
                if (debug)print('VisualViewport.onscrollend.set', value)
            mm.memory.private_data.get(this)['onscrollend'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!VisualViewport.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('VisualViewport.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
