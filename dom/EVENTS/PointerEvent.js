PointerEvent = newFunc('PointerEvent', 3, function PointerEvent(target, eventInitDict) {
    // if (new.target !== PointerEvent) throw new TypeError(`Failed to construct 'PointerEvent': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    // mm.protectAddIsTrusted(this);
    print('PointerEvent.call')
    let x = 10 + parseInt(Math.random() * 18)
    let ox = 10 + parseInt(Math.random() * 18)
    let y = 10 + parseInt(Math.random() * 17)
    let oy = 10 + parseInt(Math.random() * 17)
    mm.memory.private_data.set(this, {
        isTrusted: false,
        pointerType: 'mouse',
        clientX: x,
        clientY: y,
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
        pressure:0,
        eventPhase: 0,
        fromElement: null,
        layerX: ox-1,
        layerY: oy-1,
        metaKey: false,
        movementX: 0,
        movementY: 0,
        offsetX: ox,
        offsetY: oy,
        pageX: x,
        pageY: y,
        path: [],
        relatedTarget: null,
        returnValue: true,
        screenX:1473,
        screenY: 438,
        shiftKey: false,
        sourceCapabilities: null,
        srcElement: target,
        target: target,
        timeStamp: performance.now(),
        toElement: null,
        type: 'click',
        view: null,
        which: 1,
        tangentialPressure: 0,
        x: x,
        y: y,
        activeElement: document.body,
        pointerId:1,

        isPrimary: false,
        height:1,
        width:1,
    })
})


Object.defineProperties(PointerEvent.prototype, {
    pointerId: {

        get: newFunc('pointerId', 10, function pointerId() {
            let res = mm.memory.private_data.get(this).pointerId;
            if (debug) print('PointerEvent.pointerId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function width() {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('PointerEvent.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function height() {
            let res = mm.memory.private_data.get(this).height;
            debugger;
            if (debug) print('PointerEvent.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pressure: {

        get: newFunc('pressure', 10, function pressure() {
            let res = mm.memory.private_data.get(this).pressure;
            if (debug) print('PointerEvent.pressure.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    tiltX: {

        get: newFunc('tiltX', 10, function tiltX() {
            let res = mm.memory.private_data.get(this).tiltX;
            if (debug) print('PointerEvent.tiltX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    tiltY: {

        get: newFunc('tiltY', 10, function tiltY() {
            let res = mm.memory.private_data.get(this).tiltY;
            if (debug) print('PointerEvent.tiltY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    azimuthAngle: {

        get: newFunc('azimuthAngle', 10, function azimuthAngle() {
            let res = mm.memory.private_data.get(this).azimuthAngle;
            if (debug) print('PointerEvent.azimuthAngle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    altitudeAngle: {

        get: newFunc('altitudeAngle', 10, function altitudeAngle() {
            let res = mm.memory.private_data.get(this).altitudeAngle;
            if (debug) print('PointerEvent.altitudeAngle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    tangentialPressure: {

        get: newFunc('tangentialPressure', 10, function tangentialPressure() {
            let res = mm.memory.private_data.get(this).tangentialPressure;
            if (debug) print('PointerEvent.tangentialPressure.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    twist: {

        get: newFunc('twist', 10, function twist() {
            let res = mm.memory.private_data.get(this).twist;
            if (debug) print('PointerEvent.twist.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pointerType: {

        get: newFunc('pointerType', 10, function pointerType() {
            let res = mm.memory.private_data.get(this).pointerType;
            if (debug) print('PointerEvent.pointerType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isPrimary: {

        get: newFunc('isPrimary', 10, function isPrimary() {
            let res = mm.memory.private_data.get(this).isPrimary;
            if (debug) print('PointerEvent.isPrimary.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getPredictedEvents: {

        value: newFunc('getPredictedEvents', 10, function getPredictedEvents() {
            if (debug) print('PointerEvent.getPredictedEvents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    persistentDeviceId: {

        get: newFunc('persistentDeviceId', 10, function persistentDeviceId() {
            let res = mm.memory.private_data.get(this).persistentDeviceId;
            if (debug) print('PointerEvent.persistentDeviceId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('PointerEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    getCoalescedEvents: {

        value: newFunc('getCoalescedEvents', 10, function getCoalescedEvents() {
            if (debug) print('PointerEvent.getCoalescedEvents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})

Object.setPrototypeOf(PointerEvent.prototype, MouseEvent.prototype);
