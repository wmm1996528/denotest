RTCDataChannel = newFunc('RTCDataChannel', 1, function RTCDataChannel() {
    print('RTCDataChannel.call', arguments);
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(RTCDataChannel.prototype, {
    label: {

        get: newFunc('label', 10, function label() {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('RTCDataChannel.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ordered: {

        get: newFunc('ordered', 10, function ordered() {
            let res = mm.memory.private_data.get(this).ordered;
            if (debug) print('RTCDataChannel.ordered.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxPacketLifeTime: {

        get: newFunc('maxPacketLifeTime', 10, function maxPacketLifeTime() {
            let res = mm.memory.private_data.get(this).maxPacketLifeTime;
            if (debug) print('RTCDataChannel.maxPacketLifeTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxRetransmits: {

        get: newFunc('maxRetransmits', 10, function maxRetransmits() {
            let res = mm.memory.private_data.get(this).maxRetransmits;
            if (debug) print('RTCDataChannel.maxRetransmits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    protocol: {

        get: newFunc('protocol', 10, function protocol() {
            let res = mm.memory.private_data.get(this).protocol;
            if (debug) print('RTCDataChannel.protocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    negotiated: {

        get: newFunc('negotiated', 10, function negotiated() {
            let res = mm.memory.private_data.get(this).negotiated;
            if (debug) print('RTCDataChannel.negotiated.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    id: {

        get: newFunc('id', 10, function id() {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('RTCDataChannel.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    readyState: {

        get: newFunc('readyState', 10, function readyState() {
            let res = mm.memory.private_data.get(this).readyState;
            if (debug) print('RTCDataChannel.readyState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    bufferedAmount: {

        get: newFunc('bufferedAmount', 10, function bufferedAmount() {
            let res = mm.memory.private_data.get(this).bufferedAmount;
            if (debug) print('RTCDataChannel.bufferedAmount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    bufferedAmountLowThreshold: {

        get: newFunc('bufferedAmountLowThreshold', 10, function bufferedAmountLowThreshold() {
            let res = mm.memory.private_data.get(this).bufferedAmountLowThreshold;
            if (debug) print('RTCDataChannel.bufferedAmountLowThreshold.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('bufferedAmountLowThreshold', 1, function bufferedAmountLowThreshold(value) {
            if (debug) print('RTCDataChannel.bufferedAmountLowThreshold.set', value)
            mm.memory.private_data.get(this).bufferedAmountLowThreshold = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onopen: {

        get: newFunc('onopen', 10, function onopen() {
            let res = mm.memory.private_data.get(this).onopen;
            if (debug) print('RTCDataChannel.onopen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onopen', 1, function onopen(value) {
            if (debug) print('RTCDataChannel.onopen.set', value)
            mm.memory.private_data.get(this).onopen = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbufferedamountlow: {

        get: newFunc('onbufferedamountlow', 10, function onbufferedamountlow() {
            let res = mm.memory.private_data.get(this).onbufferedamountlow;
            if (debug) print('RTCDataChannel.onbufferedamountlow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbufferedamountlow', 1, function onbufferedamountlow(value) {
            if (debug) print('RTCDataChannel.onbufferedamountlow.set', value)
            mm.memory.private_data.get(this).onbufferedamountlow = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function onerror() {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('RTCDataChannel.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('RTCDataChannel.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclosing: {

        get: newFunc('onclosing', 10, function onclosing() {
            let res = mm.memory.private_data.get(this).onclosing;
            if (debug) print('RTCDataChannel.onclosing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclosing', 1, function onclosing(value) {
            if (debug) print('RTCDataChannel.onclosing.set', value)
            mm.memory.private_data.get(this).onclosing = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclose: {

        get: newFunc('onclose', 10, function onclose() {
            let res = mm.memory.private_data.get(this).onclose;
            if (debug) print('RTCDataChannel.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function onclose(value) {
            if (debug) print('RTCDataChannel.onclose.set', value)
            mm.memory.private_data.get(this).onclose = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmessage: {

        get: newFunc('onmessage', 10, function onmessage() {
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('RTCDataChannel.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function onmessage(value) {
            if (debug) print('RTCDataChannel.onmessage.set', value)
            mm.memory.private_data.get(this).onmessage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    binaryType: {

        get: newFunc('binaryType', 10, function binaryType() {
            let res = mm.memory.private_data.get(this).binaryType;
            if (debug) print('RTCDataChannel.binaryType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('binaryType', 1, function binaryType(value) {
            if (debug) print('RTCDataChannel.binaryType.set', value)
            mm.memory.private_data.get(this).binaryType = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    reliable: {

        get: newFunc('reliable', 10, function reliable() {
            let res = mm.memory.private_data.get(this).reliable;
            if (debug) print('RTCDataChannel.reliable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function close() {
            if (debug) print('RTCDataChannel.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    send: {

        value: newFunc('send', 10, function send() {
            if (debug) print('RTCDataChannel.send.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('RTCDataChannel.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
