PerformanceNavigation = newFunc('PerformanceNavigation', 1, function (){print('PerformanceNavigation.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(PerformanceNavigation.prototype, {
'type': {

                  get: newFunc('type', 10, function (){
            let res =  mm.memory.private_data.get(this)['type'];
            if (debug)print('PerformanceNavigation.type.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'redirectCount': {

                  get: newFunc('redirectCount', 10, function (){
            let res =  mm.memory.private_data.get(this)['redirectCount'];
            if (debug)print('PerformanceNavigation.redirectCount.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'TYPE_NAVIGATE': {
        },
'TYPE_RELOAD': {

            value: 1, writable:false, enumerable:true, configurable:false,



        },
'TYPE_BACK_FORWARD': {

            value: 2, writable:false, enumerable:true, configurable:false,



        },
'TYPE_RESERVED': {

            value: 255, writable:false, enumerable:true, configurable:false,



        },
'toJSON': {

            value: newFunc('toJSON', 10, function () {
                    if (debug)print('PerformanceNavigation.toJSON.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('PerformanceNavigation.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})