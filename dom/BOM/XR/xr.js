;XRDOMOverlayState = newFunc('XRDOMOverlayState', 1, function () {
    print('XRDOMOverlayState.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRDOMOverlayState.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('XRDOMOverlayState.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRDOMOverlayState.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRLayer = newFunc('XRLayer', 1, function () {
    print('XRLayer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRLayer.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRLayer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRWebGLBinding = newFunc('XRWebGLBinding', 1, function () {
    print('XRWebGLBinding.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRWebGLBinding.prototype, {
    getCameraImage: {

        value: newFunc('getCameraImage', 10, function () {
            if (debug) print('XRWebGLBinding.getCameraImage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getDepthInformation: {

        value: newFunc('getDepthInformation', 10, function () {
            if (debug) print('XRWebGLBinding.getDepthInformation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getReflectionCubeMap: {

        value: newFunc('getReflectionCubeMap', 10, function () {
            if (debug) print('XRWebGLBinding.getReflectionCubeMap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRWebGLBinding.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

;XRAnchor = newFunc('XRAnchor', 1, function () {
    print('XRAnchor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRAnchor.prototype, {
    anchorSpace: {

        get: newFunc('anchorSpace', 10, function () {
            let res = mm.memory.private_data.get(this).anchorSpace;
            if (debug) print('XRAnchor.anchorSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('XRAnchor.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRAnchor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRAnchorSet = newFunc('XRAnchorSet', 1, function () {
    print('XRAnchorSet.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRAnchorSet.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('XRAnchorSet.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('XRAnchorSet.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('XRAnchorSet.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('XRAnchorSet.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('XRAnchorSet.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('XRAnchorSet.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRAnchorSet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRBoundedReferenceSpace = newFunc('XRBoundedReferenceSpace', 1, function () {
    print('XRBoundedReferenceSpace.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRBoundedReferenceSpace.prototype, {
    boundsGeometry: {

        get: newFunc('boundsGeometry', 10, function () {
            let res = mm.memory.private_data.get(this).boundsGeometry;
            if (debug) print('XRBoundedReferenceSpace.boundsGeometry.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRBoundedReferenceSpace.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRCPUDepthInformation = newFunc('XRCPUDepthInformation', 1, function () {
    print('XRCPUDepthInformation.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRCPUDepthInformation.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('XRCPUDepthInformation.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getDepthInMeters: {

        value: newFunc('getDepthInMeters', 10, function () {
            if (debug) print('XRCPUDepthInformation.getDepthInMeters.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRCPUDepthInformation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRCamera = newFunc('XRCamera', 1, function () {
    print('XRCamera.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRCamera.prototype, {
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('XRCamera.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('XRCamera.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRCamera.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRDepthInformation = newFunc('XRDepthInformation', 1, function () {
    print('XRDepthInformation.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRDepthInformation.prototype, {
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('XRDepthInformation.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('XRDepthInformation.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    normDepthBufferFromNormView: {

        get: newFunc('normDepthBufferFromNormView', 10, function () {
            let res = mm.memory.private_data.get(this).normDepthBufferFromNormView;
            if (debug) print('XRDepthInformation.normDepthBufferFromNormView.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rawValueToMeters: {

        get: newFunc('rawValueToMeters', 10, function () {
            let res = mm.memory.private_data.get(this).rawValueToMeters;
            if (debug) print('XRDepthInformation.rawValueToMeters.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRDepthInformation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRFrame = newFunc('XRFrame', 1, function () {
    print('XRFrame.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRFrame.prototype, {
    session: {

        get: newFunc('session', 10, function () {
            let res = mm.memory.private_data.get(this).session;
            if (debug) print('XRFrame.session.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getPose: {

        value: newFunc('getPose', 10, function () {
            if (debug) print('XRFrame.getPose.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getViewerPose: {

        value: newFunc('getViewerPose', 10, function () {
            if (debug) print('XRFrame.getViewerPose.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    trackedAnchors: {

        get: newFunc('trackedAnchors', 10, function () {
            let res = mm.memory.private_data.get(this).trackedAnchors;
            if (debug) print('XRFrame.trackedAnchors.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    createAnchor: {

        value: newFunc('createAnchor', 10, function () {
            if (debug) print('XRFrame.createAnchor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getDepthInformation: {

        value: newFunc('getDepthInformation', 10, function () {
            if (debug) print('XRFrame.getDepthInformation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getHitTestResults: {

        value: newFunc('getHitTestResults', 10, function () {
            if (debug) print('XRFrame.getHitTestResults.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getHitTestResultsForTransientInput: {

        value: newFunc('getHitTestResultsForTransientInput', 10, function () {
            if (debug) print('XRFrame.getHitTestResultsForTransientInput.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getLightEstimate: {

        value: newFunc('getLightEstimate', 10, function () {
            if (debug) print('XRFrame.getLightEstimate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    fillJointRadii: {

        value: newFunc('fillJointRadii', 10, function () {
            if (debug) print('XRFrame.fillJointRadii.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    fillPoses: {

        value: newFunc('fillPoses', 10, function () {
            if (debug) print('XRFrame.fillPoses.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getJointPose: {

        value: newFunc('getJointPose', 10, function () {
            if (debug) print('XRFrame.getJointPose.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRFrame.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRHitTestResult = newFunc('XRHitTestResult', 1, function () {
    print('XRHitTestResult.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRHitTestResult.prototype, {
    getPose: {

        value: newFunc('getPose', 10, function () {
            if (debug) print('XRHitTestResult.getPose.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createAnchor: {

        value: newFunc('createAnchor', 10, function () {
            if (debug) print('XRHitTestResult.createAnchor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRHitTestResult.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRHitTestSource = newFunc('XRHitTestSource', 1, function () {
    print('XRHitTestSource.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRHitTestSource.prototype, {
    cancel: {

        value: newFunc('cancel', 10, function () {
            if (debug) print('XRHitTestSource.cancel.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRHitTestSource.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRInputSource = newFunc('XRInputSource', 1, function () {
    print('XRInputSource.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRInputSource.prototype, {
    handedness: {

        get: newFunc('handedness', 10, function () {
            let res = mm.memory.private_data.get(this).handedness;
            if (debug) print('XRInputSource.handedness.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    targetRayMode: {

        get: newFunc('targetRayMode', 10, function () {
            let res = mm.memory.private_data.get(this).targetRayMode;
            if (debug) print('XRInputSource.targetRayMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    targetRaySpace: {

        get: newFunc('targetRaySpace', 10, function () {
            let res = mm.memory.private_data.get(this).targetRaySpace;
            if (debug) print('XRInputSource.targetRaySpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    gripSpace: {

        get: newFunc('gripSpace', 10, function () {
            let res = mm.memory.private_data.get(this).gripSpace;
            if (debug) print('XRInputSource.gripSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    gamepad: {

        get: newFunc('gamepad', 10, function () {
            let res = mm.memory.private_data.get(this).gamepad;
            if (debug) print('XRInputSource.gamepad.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    profiles: {

        get: newFunc('profiles', 10, function () {
            let res = mm.memory.private_data.get(this).profiles;
            if (debug) print('XRInputSource.profiles.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hand: {

        get: newFunc('hand', 10, function () {
            let res = mm.memory.private_data.get(this).hand;
            if (debug) print('XRInputSource.hand.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRInputSource.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRInputSourceArray = newFunc('XRInputSourceArray', 1, function () {
    print('XRInputSourceArray.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRInputSourceArray.prototype, {
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('XRInputSourceArray.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('XRInputSourceArray.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('XRInputSourceArray.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('XRInputSourceArray.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('XRInputSourceArray.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRInputSourceArray.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRInputSourceEvent = newFunc('XRInputSourceEvent', 1, function () {
    print('XRInputSourceEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRInputSourceEvent.prototype, {
    frame: {

        get: newFunc('frame', 10, function () {
            let res = mm.memory.private_data.get(this).frame;
            if (debug) print('XRInputSourceEvent.frame.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    inputSource: {

        get: newFunc('inputSource', 10, function () {
            let res = mm.memory.private_data.get(this).inputSource;
            if (debug) print('XRInputSourceEvent.inputSource.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRInputSourceEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRInputSourcesChangeEvent = newFunc('XRInputSourcesChangeEvent', 1, function () {
    print('XRInputSourcesChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRInputSourcesChangeEvent.prototype, {
    session: {

        get: newFunc('session', 10, function () {
            let res = mm.memory.private_data.get(this).session;
            if (debug) print('XRInputSourcesChangeEvent.session.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    added: {

        get: newFunc('added', 10, function () {
            let res = mm.memory.private_data.get(this).added;
            if (debug) print('XRInputSourcesChangeEvent.added.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    removed: {

        get: newFunc('removed', 10, function () {
            let res = mm.memory.private_data.get(this).removed;
            if (debug) print('XRInputSourcesChangeEvent.removed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRInputSourcesChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRLightEstimate = newFunc('XRLightEstimate', 1, function () {
    print('XRLightEstimate.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRLightEstimate.prototype, {
    sphericalHarmonicsCoefficients: {

        get: newFunc('sphericalHarmonicsCoefficients', 10, function () {
            let res = mm.memory.private_data.get(this).sphericalHarmonicsCoefficients;
            if (debug) print('XRLightEstimate.sphericalHarmonicsCoefficients.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    primaryLightDirection: {

        get: newFunc('primaryLightDirection', 10, function () {
            let res = mm.memory.private_data.get(this).primaryLightDirection;
            if (debug) print('XRLightEstimate.primaryLightDirection.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    primaryLightIntensity: {

        get: newFunc('primaryLightIntensity', 10, function () {
            let res = mm.memory.private_data.get(this).primaryLightIntensity;
            if (debug) print('XRLightEstimate.primaryLightIntensity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRLightEstimate.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRLightProbe = newFunc('XRLightProbe', 1, function () {
    print('XRLightProbe.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRLightProbe.prototype, {
    probeSpace: {

        get: newFunc('probeSpace', 10, function () {
            let res = mm.memory.private_data.get(this).probeSpace;
            if (debug) print('XRLightProbe.probeSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onreflectionchange: {

        get: newFunc('onreflectionchange', 10, function () {
            let res = mm.memory.private_data.get(this).onreflectionchange;
            if (debug) print('XRLightProbe.onreflectionchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onreflectionchange', 1, function (value) {
            if (debug) print('XRLightProbe.onreflectionchange.set', value)
            mm.memory.private_data.get(this).onreflectionchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRLightProbe.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRPose = newFunc('XRPose', 1, function () {
    print('XRPose.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRPose.prototype, {
    transform: {

        get: newFunc('transform', 10, function () {
            let res = mm.memory.private_data.get(this).transform;
            if (debug) print('XRPose.transform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    emulatedPosition: {

        get: newFunc('emulatedPosition', 10, function () {
            let res = mm.memory.private_data.get(this).emulatedPosition;
            if (debug) print('XRPose.emulatedPosition.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRPose.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRRay = newFunc('XRRay', 1, function () {
    print('XRRay.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRRay.prototype, {
    origin: {

        get: newFunc('origin', 10, function () {
            let res = mm.memory.private_data.get(this).origin;
            if (debug) print('XRRay.origin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    direction: {

        get: newFunc('direction', 10, function () {
            let res = mm.memory.private_data.get(this).direction;
            if (debug) print('XRRay.direction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    matrix: {

        get: newFunc('matrix', 10, function () {
            let res = mm.memory.private_data.get(this).matrix;
            if (debug) print('XRRay.matrix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRRay.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRReferenceSpace = newFunc('XRReferenceSpace', 1, function () {
    print('XRReferenceSpace.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRReferenceSpace.prototype, {
    onreset: {

        get: newFunc('onreset', 10, function () {
            let res = mm.memory.private_data.get(this).onreset;
            if (debug) print('XRReferenceSpace.onreset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onreset', 1, function (value) {
            if (debug) print('XRReferenceSpace.onreset.set', value)
            mm.memory.private_data.get(this).onreset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getOffsetReferenceSpace: {

        value: newFunc('getOffsetReferenceSpace', 10, function () {
            if (debug) print('XRReferenceSpace.getOffsetReferenceSpace.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRReferenceSpace.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRReferenceSpaceEvent = newFunc('XRReferenceSpaceEvent', 1, function () {
    print('XRReferenceSpaceEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRReferenceSpaceEvent.prototype, {
    referenceSpace: {

        get: newFunc('referenceSpace', 10, function () {
            let res = mm.memory.private_data.get(this).referenceSpace;
            if (debug) print('XRReferenceSpaceEvent.referenceSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    transform: {

        get: newFunc('transform', 10, function () {
            let res = mm.memory.private_data.get(this).transform;
            if (debug) print('XRReferenceSpaceEvent.transform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRReferenceSpaceEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRRenderState = newFunc('XRRenderState', 1, function () {
    print('XRRenderState.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRRenderState.prototype, {
    depthNear: {

        get: newFunc('depthNear', 10, function () {
            let res = mm.memory.private_data.get(this).depthNear;
            if (debug) print('XRRenderState.depthNear.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    depthFar: {

        get: newFunc('depthFar', 10, function () {
            let res = mm.memory.private_data.get(this).depthFar;
            if (debug) print('XRRenderState.depthFar.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    inlineVerticalFieldOfView: {

        get: newFunc('inlineVerticalFieldOfView', 10, function () {
            let res = mm.memory.private_data.get(this).inlineVerticalFieldOfView;
            if (debug) print('XRRenderState.inlineVerticalFieldOfView.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    baseLayer: {

        get: newFunc('baseLayer', 10, function () {
            let res = mm.memory.private_data.get(this).baseLayer;
            if (debug) print('XRRenderState.baseLayer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRRenderState.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRRigidTransform = newFunc('XRRigidTransform', 1, function () {
    print('XRRigidTransform.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRRigidTransform.prototype, {
    position: {

        get: newFunc('position', 10, function () {
            let res = mm.memory.private_data.get(this).position;
            if (debug) print('XRRigidTransform.position.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orientation: {

        get: newFunc('orientation', 10, function () {
            let res = mm.memory.private_data.get(this).orientation;
            if (debug) print('XRRigidTransform.orientation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    matrix: {

        get: newFunc('matrix', 10, function () {
            let res = mm.memory.private_data.get(this).matrix;
            if (debug) print('XRRigidTransform.matrix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    inverse: {

        get: newFunc('inverse', 10, function () {
            let res = mm.memory.private_data.get(this).inverse;
            if (debug) print('XRRigidTransform.inverse.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRRigidTransform.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRSession = newFunc('XRSession', 1, function () {
    print('XRSession.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRSession.prototype, {
    environmentBlendMode: {

        get: newFunc('environmentBlendMode', 10, function () {
            let res = mm.memory.private_data.get(this).environmentBlendMode;
            if (debug) print('XRSession.environmentBlendMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interactionMode: {

        get: newFunc('interactionMode', 10, function () {
            let res = mm.memory.private_data.get(this).interactionMode;
            if (debug) print('XRSession.interactionMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    visibilityState: {

        get: newFunc('visibilityState', 10, function () {
            let res = mm.memory.private_data.get(this).visibilityState;
            if (debug) print('XRSession.visibilityState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    renderState: {

        get: newFunc('renderState', 10, function () {
            let res = mm.memory.private_data.get(this).renderState;
            if (debug) print('XRSession.renderState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    inputSources: {

        get: newFunc('inputSources', 10, function () {
            let res = mm.memory.private_data.get(this).inputSources;
            if (debug) print('XRSession.inputSources.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    domOverlayState: {

        get: newFunc('domOverlayState', 10, function () {
            let res = mm.memory.private_data.get(this).domOverlayState;
            if (debug) print('XRSession.domOverlayState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    preferredReflectionFormat: {

        get: newFunc('preferredReflectionFormat', 10, function () {
            let res = mm.memory.private_data.get(this).preferredReflectionFormat;
            if (debug) print('XRSession.preferredReflectionFormat.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onend: {

        get: newFunc('onend', 10, function () {
            let res = mm.memory.private_data.get(this).onend;
            if (debug) print('XRSession.onend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onend', 1, function (value) {
            if (debug) print('XRSession.onend.set', value)
            mm.memory.private_data.get(this).onend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselect: {

        get: newFunc('onselect', 10, function () {
            let res = mm.memory.private_data.get(this).onselect;
            if (debug) print('XRSession.onselect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselect', 1, function (value) {
            if (debug) print('XRSession.onselect.set', value)
            mm.memory.private_data.get(this).onselect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninputsourceschange: {

        get: newFunc('oninputsourceschange', 10, function () {
            let res = mm.memory.private_data.get(this).oninputsourceschange;
            if (debug) print('XRSession.oninputsourceschange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninputsourceschange', 1, function (value) {
            if (debug) print('XRSession.oninputsourceschange.set', value)
            mm.memory.private_data.get(this).oninputsourceschange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselectstart: {

        get: newFunc('onselectstart', 10, function () {
            let res = mm.memory.private_data.get(this).onselectstart;
            if (debug) print('XRSession.onselectstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectstart', 1, function (value) {
            if (debug) print('XRSession.onselectstart.set', value)
            mm.memory.private_data.get(this).onselectstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselectend: {

        get: newFunc('onselectend', 10, function () {
            let res = mm.memory.private_data.get(this).onselectend;
            if (debug) print('XRSession.onselectend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectend', 1, function (value) {
            if (debug) print('XRSession.onselectend.set', value)
            mm.memory.private_data.get(this).onselectend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onvisibilitychange: {

        get: newFunc('onvisibilitychange', 10, function () {
            let res = mm.memory.private_data.get(this).onvisibilitychange;
            if (debug) print('XRSession.onvisibilitychange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onvisibilitychange', 1, function (value) {
            if (debug) print('XRSession.onvisibilitychange.set', value)
            mm.memory.private_data.get(this).onvisibilitychange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsqueeze: {

        get: newFunc('onsqueeze', 10, function () {
            let res = mm.memory.private_data.get(this).onsqueeze;
            if (debug) print('XRSession.onsqueeze.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsqueeze', 1, function (value) {
            if (debug) print('XRSession.onsqueeze.set', value)
            mm.memory.private_data.get(this).onsqueeze = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsqueezestart: {

        get: newFunc('onsqueezestart', 10, function () {
            let res = mm.memory.private_data.get(this).onsqueezestart;
            if (debug) print('XRSession.onsqueezestart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsqueezestart', 1, function (value) {
            if (debug) print('XRSession.onsqueezestart.set', value)
            mm.memory.private_data.get(this).onsqueezestart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsqueezeend: {

        get: newFunc('onsqueezeend', 10, function () {
            let res = mm.memory.private_data.get(this).onsqueezeend;
            if (debug) print('XRSession.onsqueezeend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsqueezeend', 1, function (value) {
            if (debug) print('XRSession.onsqueezeend.set', value)
            mm.memory.private_data.get(this).onsqueezeend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    depthUsage: {

        get: newFunc('depthUsage', 10, function () {
            let res = mm.memory.private_data.get(this).depthUsage;
            if (debug) print('XRSession.depthUsage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    depthDataFormat: {

        get: newFunc('depthDataFormat', 10, function () {
            let res = mm.memory.private_data.get(this).depthDataFormat;
            if (debug) print('XRSession.depthDataFormat.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cancelAnimationFrame: {

        value: newFunc('cancelAnimationFrame', 10, function () {
            if (debug) print('XRSession.cancelAnimationFrame.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    end: {

        value: newFunc('end', 10, function () {
            if (debug) print('XRSession.end.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestAnimationFrame: {

        value: newFunc('requestAnimationFrame', 10, function () {
            if (debug) print('XRSession.requestAnimationFrame.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestHitTestSource: {

        value: newFunc('requestHitTestSource', 10, function () {
            if (debug) print('XRSession.requestHitTestSource.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestHitTestSourceForTransientInput: {

        value: newFunc('requestHitTestSourceForTransientInput', 10, function () {
            if (debug) print('XRSession.requestHitTestSourceForTransientInput.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestLightProbe: {

        value: newFunc('requestLightProbe', 10, function () {
            if (debug) print('XRSession.requestLightProbe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestReferenceSpace: {

        value: newFunc('requestReferenceSpace', 10, function () {
            if (debug) print('XRSession.requestReferenceSpace.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateRenderState: {

        value: newFunc('updateRenderState', 10, function () {
            if (debug) print('XRSession.updateRenderState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    enabledFeatures: {

        get: newFunc('enabledFeatures', 10, function () {
            let res = mm.memory.private_data.get(this).enabledFeatures;
            if (debug) print('XRSession.enabledFeatures.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRSession.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRSessionEvent = newFunc('XRSessionEvent', 1, function () {
    print('XRSessionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRSessionEvent.prototype, {
    session: {

        get: newFunc('session', 10, function () {
            let res = mm.memory.private_data.get(this).session;
            if (debug) print('XRSessionEvent.session.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRSessionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRSpace = newFunc('XRSpace', 1, function () {
    print('XRSpace.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRSpace.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRSpace.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRTransientInputHitTestResult = newFunc('XRTransientInputHitTestResult', 1, function () {
    print('XRTransientInputHitTestResult.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRTransientInputHitTestResult.prototype, {
    inputSource: {

        get: newFunc('inputSource', 10, function () {
            let res = mm.memory.private_data.get(this).inputSource;
            if (debug) print('XRTransientInputHitTestResult.inputSource.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    results: {

        get: newFunc('results', 10, function () {
            let res = mm.memory.private_data.get(this).results;
            if (debug) print('XRTransientInputHitTestResult.results.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRTransientInputHitTestResult.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRTransientInputHitTestSource = newFunc('XRTransientInputHitTestSource', 1, function () {
    print('XRTransientInputHitTestSource.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRTransientInputHitTestSource.prototype, {
    cancel: {

        value: newFunc('cancel', 10, function () {
            if (debug) print('XRTransientInputHitTestSource.cancel.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRTransientInputHitTestSource.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRView = newFunc('XRView', 1, function () {
    print('XRView.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRView.prototype, {
    eye: {

        get: newFunc('eye', 10, function () {
            let res = mm.memory.private_data.get(this).eye;
            if (debug) print('XRView.eye.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    projectionMatrix: {

        get: newFunc('projectionMatrix', 10, function () {
            let res = mm.memory.private_data.get(this).projectionMatrix;
            if (debug) print('XRView.projectionMatrix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    transform: {

        get: newFunc('transform', 10, function () {
            let res = mm.memory.private_data.get(this).transform;
            if (debug) print('XRView.transform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    recommendedViewportScale: {

        get: newFunc('recommendedViewportScale', 10, function () {
            let res = mm.memory.private_data.get(this).recommendedViewportScale;
            if (debug) print('XRView.recommendedViewportScale.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isFirstPersonObserver: {

        get: newFunc('isFirstPersonObserver', 10, function () {
            let res = mm.memory.private_data.get(this).isFirstPersonObserver;
            if (debug) print('XRView.isFirstPersonObserver.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    camera: {

        get: newFunc('camera', 10, function () {
            let res = mm.memory.private_data.get(this).camera;
            if (debug) print('XRView.camera.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    requestViewportScale: {

        value: newFunc('requestViewportScale', 10, function () {
            if (debug) print('XRView.requestViewportScale.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRView.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRViewerPose = newFunc('XRViewerPose', 1, function () {
    print('XRViewerPose.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRViewerPose.prototype, {
    views: {

        get: newFunc('views', 10, function () {
            let res = mm.memory.private_data.get(this).views;
            if (debug) print('XRViewerPose.views.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRViewerPose.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRViewport = newFunc('XRViewport', 1, function () {
    print('XRViewport.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRViewport.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('XRViewport.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('XRViewport.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('XRViewport.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('XRViewport.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRViewport.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRWebGLDepthInformation = newFunc('XRWebGLDepthInformation', 1, function () {
    print('XRWebGLDepthInformation.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRWebGLDepthInformation.prototype, {
    texture: {

        get: newFunc('texture', 10, function () {
            let res = mm.memory.private_data.get(this).texture;
            if (debug) print('XRWebGLDepthInformation.texture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRWebGLDepthInformation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRWebGLLayer = newFunc('XRWebGLLayer', 1, function () {
    print('XRWebGLLayer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRWebGLLayer.prototype, {
    antialias: {

        get: newFunc('antialias', 10, function () {
            let res = mm.memory.private_data.get(this).antialias;
            if (debug) print('XRWebGLLayer.antialias.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ignoreDepthValues: {

        get: newFunc('ignoreDepthValues', 10, function () {
            let res = mm.memory.private_data.get(this).ignoreDepthValues;
            if (debug) print('XRWebGLLayer.ignoreDepthValues.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    framebufferWidth: {

        get: newFunc('framebufferWidth', 10, function () {
            let res = mm.memory.private_data.get(this).framebufferWidth;
            if (debug) print('XRWebGLLayer.framebufferWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    framebufferHeight: {

        get: newFunc('framebufferHeight', 10, function () {
            let res = mm.memory.private_data.get(this).framebufferHeight;
            if (debug) print('XRWebGLLayer.framebufferHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    framebuffer: {

        get: newFunc('framebuffer', 10, function () {
            let res = mm.memory.private_data.get(this).framebuffer;
            if (debug) print('XRWebGLLayer.framebuffer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getViewport: {

        value: newFunc('getViewport', 10, function () {
            if (debug) print('XRWebGLLayer.getViewport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRWebGLLayer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRHand = newFunc('XRHand', 1, function () {
    print('XRHand.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRHand.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('XRHand.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('XRHand.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('XRHand.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('XRHand.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('XRHand.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('XRHand.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRHand.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRJointPose = newFunc('XRJointPose', 1, function () {
    print('XRJointPose.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRJointPose.prototype, {
    radius: {

        get: newFunc('radius', 10, function () {
            let res = mm.memory.private_data.get(this).radius;
            if (debug) print('XRJointPose.radius.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRJointPose.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;XRJointSpace = newFunc('XRJointSpace', 1, function () {
    print('XRJointSpace.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XRJointSpace.prototype, {
    jointName: {

        get: newFunc('jointName', 10, function () {
            let res = mm.memory.private_data.get(this).jointName;
            if (debug) print('XRJointSpace.jointName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XRJointSpace.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});