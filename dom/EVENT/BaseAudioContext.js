AudioParam = newFunc('AudioParam', 1, function AudioParam(config) {
    mm.memory.private_data.set(this, config || {})
})





; delete AudioParam.prototype.constructor;
;
Object.defineProperties(AudioParam.prototype, {
    [Symbol.toStringTag]:{
        value:'AudioParam'
    },

'value': {

                  get: newFunc('value', 10, function (){


                    if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['value'];
            if (debug)print('AudioParam.value.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('value', 1, function (value){
                if (debug)print('AudioParam.value.set', value)
            mm.memory.private_data.get(this)['value'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'automationRate': {

                  get: newFunc('automationRate', 10, function (){


                    if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['automationRate'];
            if (debug)print('AudioParam.automationRate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('automationRate', 1, function (value){
                if (debug)print('AudioParam.automationRate.set', value)
            mm.memory.private_data.get(this)['automationRate'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'defaultValue': {

                  get: newFunc('defaultValue', 10, function (){


                    if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['defaultValue'];
            if (debug)print('AudioParam.defaultValue.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'minValue': {

                  get: newFunc('minValue', 10, function (){


                    if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['minValue'];
            if (debug)print('AudioParam.minValue.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'maxValue': {

                  get: newFunc('maxValue', 10, function (){


                    if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['maxValue'];
            if (debug)print('AudioParam.maxValue.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'cancelAndHoldAtTime': {

            value: newFunc('cancelAndHoldAtTime', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.cancelAndHoldAtTime.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'cancelScheduledValues': {

            value: newFunc('cancelScheduledValues', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.cancelScheduledValues.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'exponentialRampToValueAtTime': {

            value: newFunc('exponentialRampToValueAtTime', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.exponentialRampToValueAtTime.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'linearRampToValueAtTime': {

            value: newFunc('linearRampToValueAtTime', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.linearRampToValueAtTime.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'setTargetAtTime': {

            value: newFunc('setTargetAtTime', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.setTargetAtTime.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'setValueAtTime': {

            value: newFunc('setValueAtTime', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.setValueAtTime.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'setValueCurveAtTime': {

            value: newFunc('setValueCurveAtTime', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.setValueCurveAtTime.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!AudioParam.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioParam.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})


AudioNode = newFunc('AudioNode', 1, function AudioNode() {
    mm.memory.private_data.set(this, {})

})


Object.defineProperties(AudioNode.prototype, {
    context: {

        get: newFunc('context', 10, function context() {
            let res = mm.memory.private_data.get(this).context;
            if (debug) print('AudioNode.context.get', res)
            // debugger;

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfInputs: {

        get: newFunc('numberOfInputs', 10, function numberOfInputs() {
            let res = mm.memory.private_data.get(this).numberOfInputs;

            if (debug) print('AudioNode.numberOfInputs.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberOfOutputs: {

        get: newFunc('numberOfOutputs', 10, function numberOfOutputs() {
            let res = mm.memory.private_data.get(this).numberOfOutputs;
            if (debug) print('AudioNode.numberOfOutputs.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    channelCount: {

        get: newFunc('channelCount', 10, function channelCount() {
            let res = mm.memory.private_data.get(this).channelCount;
            if (debug) print('AudioNode.channelCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('channelCount', 1, function channelCount(value) {
            if (debug) print('AudioNode.channelCount.set', value)
            mm.memory.private_data.get(this).channelCount = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    channelCountMode: {

        get: newFunc('channelCountMode', 10, function channelCountMode() {
            let res = mm.memory.private_data.get(this).channelCountMode;
            if (debug) print('AudioNode.channelCountMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('channelCountMode', 1, function channelCountMode(value) {
            if (debug) print('AudioNode.channelCountMode.set', value)
            mm.memory.private_data.get(this).channelCountMode = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    channelInterpretation: {

        get: newFunc('channelInterpretation', 10, function channelInterpretation() {
            let res = mm.memory.private_data.get(this).channelInterpretation;
            if (debug) print('AudioNode.channelInterpretation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('channelInterpretation', 1, function channelInterpretation(value) {
            if (debug) print('AudioNode.channelInterpretation.set', value)
            mm.memory.private_data.get(this).channelInterpretation = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    connect: {

        value: newFunc('connect', 10, function connect() {
            if (debug) print('AudioNode.connect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    disconnect: {

        value: newFunc('disconnect', 10, function disconnect() {
            if (debug) print('AudioNode.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    "constructor": {
        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('AudioNode.constructor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,

    }

})
Object.setPrototypeOf(AudioNode, EventTarget)
Object.setPrototypeOf(AudioNode.prototype, EventTarget.prototype)
AudioNode.__proto__ = EventTarget.prototype

DynamicsCompressorNode = newFunc('DynamicsCompressorNode', 1, function DynamicsCompressorNode() {
    mm.memory.private_data.set(this, {
        threshold: new AudioParam(),
        knee: new AudioParam(),
        ratio: new AudioParam(),
        attack: new AudioParam(),
        release: new AudioParam(),
        frequency: new AudioParam(),
        reduction: 0,
    })

})


Object.defineProperties(DynamicsCompressorNode.prototype, {
    threshold: {

        get: newFunc('threshold', 10, function threshold() {
            let res = mm.memory.private_data.get(this).threshold;
            // debugger;
            if (debug) print('DynamicsCompressorNode.threshold.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    knee: {

        get: newFunc('knee', 10, function knee() {
            let res = mm.memory.private_data.get(this).knee;
            if (debug) print('DynamicsCompressorNode.knee.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ratio: {

        get: newFunc('ratio', 10, function ratio() {
            let res = mm.memory.private_data.get(this).ratio;
            if (debug) print('DynamicsCompressorNode.ratio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reduction: {

        get: newFunc('reduction', 10, function reduction() {
            let res = mm.memory.private_data.get(this).reduction;
            if (debug) print('DynamicsCompressorNode.reduction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    attack: {

        get: newFunc('attack', 10, function attack() {
            let res = mm.memory.private_data.get(this).attack;
            if (debug) print('DynamicsCompressorNode.attack.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    release: {

        get: newFunc('release', 10, function release() {
            let res = mm.memory.private_data.get(this).release;
            if (debug) print('DynamicsCompressorNode.release.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('DynamicsCompressorNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Object.setPrototypeOf(DynamicsCompressorNode, AudioNode)
Object.setPrototypeOf(DynamicsCompressorNode.prototype, AudioNode.prototype)
DynamicsCompressorNode.__proto__ = AudioNode.prototype


AudioDestinationNode = newFunc('AudioDestinationNode', 1, function (){print('AudioDestinationNode.call');mm.memory.private_data.set(this, {})});



; delete AudioDestinationNode.prototype.constructor;
;
Object.defineProperties(AudioDestinationNode.prototype, {
    [Symbol.toStringTag]:{
        value:'AudioDestinationNode'
    },

'maxChannelCount': {

                  get: newFunc('maxChannelCount', 10, function (){


                    if (!AudioDestinationNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['maxChannelCount'];
            if (debug)print('AudioDestinationNode.maxChannelCount.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!AudioDestinationNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioDestinationNode.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
Object.setPrototypeOf(AudioDestinationNode, AudioNode)
Object.setPrototypeOf(AudioDestinationNode.prototype, AudioNode.prototype)
AudioDestinationNode.__proto__ = AudioNode.prototype

AudioScheduledSourceNode = newFunc('AudioScheduledSourceNode', 1, function (){print('AudioScheduledSourceNode.call');mm.memory.private_data.set(this, {})});



; delete AudioScheduledSourceNode.prototype.constructor;
;
Object.defineProperties(AudioScheduledSourceNode.prototype, {
    [Symbol.toStringTag]:{
        value:'AudioScheduledSourceNode'
    },

'onended': {

                  get: newFunc('onended', 10, function (){


                    if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onended'];
            if (debug)print('AudioScheduledSourceNode.onended.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onended', 1, function (value){
                if (debug)print('AudioScheduledSourceNode.onended.set', value)
            mm.memory.private_data.get(this)['onended'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'start': {

            value: newFunc('start', 10, function () {

                      if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioScheduledSourceNode.start.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'stop': {

            value: newFunc('stop', 10, function () {

                      if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioScheduledSourceNode.stop.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!AudioScheduledSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioScheduledSourceNode.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})


Object.setPrototypeOf(AudioScheduledSourceNode, AudioNode)
Object.setPrototypeOf(AudioScheduledSourceNode.prototype, AudioNode.prototype)
AudioScheduledSourceNode.__proto__ = AudioNode.prototype


AudioBufferSourceNode = newFunc('AudioBufferSourceNode', 1, function (){print('AudioBufferSourceNode.call');mm.memory.private_data.set(this, {})});



; delete AudioBufferSourceNode.prototype.constructor;
;
Object.defineProperties(AudioBufferSourceNode.prototype, {
    [Symbol.toStringTag]:{
        value:'AudioBufferSourceNode'
    },

'buffer': {

                  get: newFunc('buffer', 10, function (){


                    if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['buffer'];
            if (debug)print('AudioBufferSourceNode.buffer.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('buffer', 1, function (value){
                if (debug)print('AudioBufferSourceNode.buffer.set', value)
            mm.memory.private_data.get(this)['buffer'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'playbackRate': {

                  get: newFunc('playbackRate', 10, function (){


                    if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['playbackRate'];
            if (debug)print('AudioBufferSourceNode.playbackRate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'detune': {

                  get: newFunc('detune', 10, function (){


                    if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['detune'];
            if (debug)print('AudioBufferSourceNode.detune.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'loop': {

                  get: newFunc('loop', 10, function (){


                    if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['loop'];
            if (debug)print('AudioBufferSourceNode.loop.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('loop', 1, function (value){
                if (debug)print('AudioBufferSourceNode.loop.set', value)
            mm.memory.private_data.get(this)['loop'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'loopStart': {

                  get: newFunc('loopStart', 10, function (){


                    if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['loopStart'];
            if (debug)print('AudioBufferSourceNode.loopStart.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('loopStart', 1, function (value){
                if (debug)print('AudioBufferSourceNode.loopStart.set', value)
            mm.memory.private_data.get(this)['loopStart'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'loopEnd': {

                  get: newFunc('loopEnd', 10, function (){


                    if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['loopEnd'];
            if (debug)print('AudioBufferSourceNode.loopEnd.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('loopEnd', 1, function (value){
                if (debug)print('AudioBufferSourceNode.loopEnd.set', value)
            mm.memory.private_data.get(this)['loopEnd'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'start': {

            value: newFunc('start', 10, function () {

                      if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioBufferSourceNode.start.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!AudioBufferSourceNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('AudioBufferSourceNode.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

AudioBufferSourceNode.call = Function.prototype.call
Object.setPrototypeOf(AudioBufferSourceNode, AudioScheduledSourceNode)
Object.setPrototypeOf(AudioBufferSourceNode.prototype, AudioScheduledSourceNode.prototype)
AudioBufferSourceNode.__proto__ = AudioScheduledSourceNode.prototype
OscillatorNode = newFunc('OscillatorNode', 1, function OscillatorNode() {
    mm.memory.private_data.set(this, {
        frequency: new AudioParam({
            automationRate: "a-rate",
            defaultValue: 440,
            maxValue: 24000,
            minValue: -24000,
            value: 440,
        }),
        detune: new AudioParam({
            automationRate: "a-rate",
            defaultValue: 0,
            maxValue: 153600,
            minValue: -153600,
            value: 0
        }),

    })
})

Object.defineProperties(OscillatorNode.prototype, {
    type: {

        get: newFunc('type', 10, function type() {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('OscillatorNode.type.get', res)

            return res
        }, {get: true}),


        set: newFunc('type', 1, function type(value) {
            if (debug) print('OscillatorNode.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    frequency: {

        get: newFunc('frequency', 10, function frequency() {
            let res = mm.memory.private_data.get(this).frequency;
            if (debug) print('OscillatorNode.frequency.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    detune: {

        get: newFunc('detune', 10, function detune() {
            let res = mm.memory.private_data.get(this).detune;
            if (debug) print('OscillatorNode.detune.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    setPeriodicWave: {

        value: newFunc('setPeriodicWave', 10, function setPeriodicWave() {
            if (debug) print('OscillatorNode.setPeriodicWave.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!OscillatorNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('OscillatorNode.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },

})
BaseAudioContext = newFunc('BaseAudioContext', 1, function BaseAudioContext(config) {
    if (mm.memory.private_data.get(this)) {
        let t = mm.memory.private_data.get(this);
        let dest = new AudioDestinationNode({
            channelCount: 2,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            context: this,
            maxChannelCount: 2,
            numberOfInputs: 1,
            numberOfOutputs: 0,
        });
        dest = mm.proxy(dest, 'AudioDestinationNode')
        Object.assign(t, {
            baseTime: Date.now(),
            sampleRate: config.sampleRate,
            destination: dest,
            state: 'running',

        })
        mm.memory.private_data.set(this, t)

    } else {
        let dest = new AudioDestinationNode({
            channelCount: 2,
            channelCountMode: "explicit",
            channelInterpretation: "speakers",
            context: this,
            maxChannelCount: 2,
            numberOfInputs: 1,
            numberOfOutputs: 0,
        });
        dest = mm.proxy(dest, 'AudioDestinationNode')
        mm.memory.private_data.set(this, {
            baseTime: Date.now(),
            sampleRate: config.sampleRate,
            destination: dest,
            state: 'running'

        })
    }

})

Object.setPrototypeOf(OscillatorNode, AudioScheduledSourceNode)
Object.setPrototypeOf(OscillatorNode.prototype, AudioScheduledSourceNode.prototype)
OscillatorNode.__proto__ = AudioScheduledSourceNode.prototype


Object.defineProperties(BaseAudioContext.prototype, {
    [Symbol.toStringTag]: {
        value: 'BaseAudioContext'
    },

    'destination': {

        get: newFunc('destination', 10, function () {


            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['destination'];
            if (debug) print('BaseAudioContext.destination.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'sampleRate': {

        get: newFunc('sampleRate', 10, function () {


            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['sampleRate'];
            if (debug) print('BaseAudioContext.sampleRate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'currentTime': {

        get: newFunc('currentTime', 10, function () {


            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['currentTime'];
            if (debug) print('BaseAudioContext.currentTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'listener': {

        get: newFunc('listener', 10, function () {


            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['listener'];
            if (debug) print('BaseAudioContext.listener.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'state': {

        get: newFunc('state', 10, function () {


            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['state'];
            if (debug) print('BaseAudioContext.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onstatechange': {

        get: newFunc('onstatechange', 10, function () {


            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onstatechange'];
            if (debug) print('BaseAudioContext.onstatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstatechange', 1, function (value) {
            if (debug) print('BaseAudioContext.onstatechange.set', value)
            mm.memory.private_data.get(this)['onstatechange'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'createAnalyser': {

        value: newFunc('createAnalyser', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createAnalyser.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createBiquadFilter': {

        value: newFunc('createBiquadFilter', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createBiquadFilter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createBuffer': {

        value: newFunc('createBuffer', 10, function createBuffer(numOfChannels, length, sampleRate) {
            if (debug) print('BaseAudioContext.createBuffer.call', arguments)
            return new AudioBuffer({
                duration: 0.001124578283143821,
                length: length,
                numberOfChannels: numOfChannels,
                sampleRate: sampleRate,
            })

        }), writable: true, enumerable: true, configurable: true,


    },
    'createBufferSource': {

        value: newFunc('createBufferSource', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createBufferSource.call', arguments)
            return new AudioBufferSourceNode()

        }), writable: true, enumerable: true, configurable: true,


    },
    'createChannelMerger': {

        value: newFunc('createChannelMerger', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createChannelMerger.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createChannelSplitter': {

        value: newFunc('createChannelSplitter', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createChannelSplitter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createConstantSource': {

        value: newFunc('createConstantSource', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createConstantSource.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createConvolver': {

        value: newFunc('createConvolver', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createConvolver.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createDelay': {

        value: newFunc('createDelay', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createDelay.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createDynamicsCompressor': {

        value: newFunc('createDynamicsCompressor', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createDynamicsCompressor.call', arguments)
            return new DynamicsCompressorNode();

        }), writable: true, enumerable: true, configurable: true,


    },
    'createGain': {

        value: newFunc('createGain', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createGain.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createIIRFilter': {

        value: newFunc('createIIRFilter', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createIIRFilter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createOscillator': {

        value: newFunc('createOscillator', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createOscillator.call', arguments)
            return new OscillatorNode();

        }), writable: true, enumerable: true, configurable: true,


    },
    'createPanner': {

        value: newFunc('createPanner', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createPanner.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createPeriodicWave': {

        value: newFunc('createPeriodicWave', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createPeriodicWave.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createScriptProcessor': {

        value: newFunc('createScriptProcessor', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createScriptProcessor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createStereoPanner': {

        value: newFunc('createStereoPanner', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createStereoPanner.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createWaveShaper': {

        value: newFunc('createWaveShaper', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.createWaveShaper.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'decodeAudioData': {

        value: newFunc('decodeAudioData', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.decodeAudioData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BaseAudioContext.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'audioWorklet': {

        get: newFunc('audioWorklet', 10, function () {


            if (!BaseAudioContext.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['audioWorklet'];
            if (debug) print('BaseAudioContext.audioWorklet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
})


Object.setPrototypeOf(BaseAudioContext.prototype, EventTarget.prototype)
Object.setPrototypeOf(BaseAudioContext, EventTarget)