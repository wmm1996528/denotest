Event = newFunc('Event', 1, function Event(type, eventInitDict) {
    print('Event.call', arguments)
    // if (new.target !== Event) throw new TypeError(`Failed to construct 'Event': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    // debugger;
    let t = {
        bubbles: false,
        cancelBubble: false,
        cancelable: false,
        composed: false,
        defaultPrevented: false,
        eventPhase: 0,
        path: [],
        returnValue: true,
        srcElement: null,
        timeStamp: performance.now(),
        type: type,
        source:'',
    };
    Object.assign(t, eventInitDict)
    // debugger;
    mm.memory.private_data.set(this, t);
})





; delete Event.prototype.constructor;
;
Object.defineProperties(Event.prototype, {
    [Symbol.toStringTag]:{
        value:'Event'
    },
'source': {
  get: newFunc('source', 10, function (){
      return mm.memory.private_data.get(this).source
  }),
},
'type': {

                  get: newFunc('type', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['type'];
            if (debug)print('Event.type.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'target': {

                  get: newFunc('target', 10, function (){

                    debugger;
                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['target'];
            if (debug)print('Event.target.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'currentTarget': {

                  get: newFunc('currentTarget', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['currentTarget'];
            if (debug)print('Event.currentTarget.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'eventPhase': {

                  get: newFunc('eventPhase', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['eventPhase'];
            if (debug)print('Event.eventPhase.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'bubbles': {

                  get: newFunc('bubbles', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['bubbles'];
            if (debug)print('Event.bubbles.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'cancelable': {

                  get: newFunc('cancelable', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['cancelable'];
            if (debug)print('Event.cancelable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'defaultPrevented': {

                  get: newFunc('defaultPrevented', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['defaultPrevented'];
            if (debug)print('Event.defaultPrevented.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'composed': {

                  get: newFunc('composed', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['composed'];
            if (debug)print('Event.composed.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'timeStamp': {

                  get: newFunc('timeStamp', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['timeStamp'];
            if (debug)print('Event.timeStamp.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'srcElement': {

                  get: newFunc('srcElement', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['srcElement'];
            if (debug)print('Event.srcElement.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'returnValue': {

                  get: newFunc('returnValue', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['returnValue'];
            if (debug)print('Event.returnValue.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('returnValue', 1, function (value){
                if (debug)print('Event.returnValue.set', value)
            mm.memory.private_data.get(this)['returnValue'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'cancelBubble': {

                  get: newFunc('cancelBubble', 10, function (){


                    if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['cancelBubble'];
            if (debug)print('Event.cancelBubble.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('cancelBubble', 1, function (value){
                if (debug)print('Event.cancelBubble.set', value)
            mm.memory.private_data.get(this)['cancelBubble'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'NONE': {
        },
'CAPTURING_PHASE': {

            value: 1, writable:false, enumerable:true, configurable:false,



        },
'AT_TARGET': {

            value: 2, writable:false, enumerable:true, configurable:false,



        },
'BUBBLING_PHASE': {

            value: 3, writable:false, enumerable:true, configurable:false,



        },
'composedPath': {

            value: newFunc('composedPath', 10, function () {

                      if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Event.composedPath.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'initEvent': {

            value: newFunc('initEvent', 10, function () {

                      if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Event.initEvent.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'preventDefault': {

            value: newFunc('preventDefault', 10, function () {

                      if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Event.preventDefault.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'stopImmediatePropagation': {

            value: newFunc('stopImmediatePropagation', 10, function () {

                      if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Event.stopImmediatePropagation.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'stopPropagation': {

            value: newFunc('stopPropagation', 10, function () {

                      if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Event.stopPropagation.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!Event.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Event.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})




