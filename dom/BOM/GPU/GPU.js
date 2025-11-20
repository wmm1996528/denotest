;GPU = newFunc('GPU', 1, function () {
    print('GPU.call');
    mm.memory.private_data.set(this, {
        requestAdapter: new GPUAdapter(),
    })
})


Object.defineProperties(GPU.prototype, {
    [Symbol.toStringTag]: {value:"GPU"},
    wgslLanguageFeatures: {

        get: newFunc('wgslLanguageFeatures', 10, function () {
            let res = mm.memory.private_data.get(this).wgslLanguageFeatures;
            if (debug) print('GPU.wgslLanguageFeatures.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getPreferredCanvasFormat: {

        value: newFunc('getPreferredCanvasFormat', 10, function () {
            if (debug) print('GPU.getPreferredCanvasFormat.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestAdapter: {

        value: newFunc('requestAdapter', 10, function () {
            let r = mm.memory.private_data.get(this).requestAdapter
            if (debug) print('GPU.requestAdapter.call', arguments, r)
            return {
                then: function (func){
                    func(r)
                    return {
                        'catch': function (err){
                        }
                    }
                },
                'catch': function (err){
                }
            }

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPU.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUAdapter = newFunc('GPUAdapter', 1, function () {
    print('GPUAdapter.call');
    mm.memory.private_data.set(this, {
        info: new GPUAdapterInfo(),
        features:new GPUSupportedFeatures(),
        limits: new GPUSupportedLimits(),
    })
})


Object.defineProperties(GPUAdapter.prototype, {
    requestAdapterInfo: {
      value: function (){
          let res = mm.memory.private_data.get(this).info;
            if (debug) print('GPUAdapter.requestAdapterInfo.get', res)
          return {
              then:(f)=>{f(res)},
              catch:(f)=>{debugger},
          }
      }
    },
    features: {

        get: newFunc('features', 10, function () {
            let res = mm.memory.private_data.get(this).features;
            if (debug) print('GPUAdapter.features.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    limits: {

        get: newFunc('limits', 10, function () {
            // debugger;
            let res = mm.memory.private_data.get(this).limits;
            if (debug) print('GPUAdapter.limits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    info: {

        get: newFunc('info', 10, function () {
            let res = mm.memory.private_data.get(this).info;
            if (debug) print('GPUAdapter.info.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isFallbackAdapter: {

        get: newFunc('isFallbackAdapter', 10, function () {
            let res = mm.memory.private_data.get(this).isFallbackAdapter;
            if (debug) print('GPUAdapter.isFallbackAdapter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    requestDevice: {

        value: newFunc('requestDevice', 10, function () {
            if (debug) print('GPUAdapter.requestDevice.call', arguments)
            return {
                then: (func)=>{
                    func(new GPUDevice())
                },
                catch: (func)=>{},
            }

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUAdapter.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUAdapterInfo = newFunc('GPUAdapterInfo', 1, function () {
    print('GPUAdapterInfo.call');
    mm.memory.private_data.set(this, {
        architecture:"metal-3",
        description:"",
        device:"",
        isFallbackAdapter:false,
        subgroupMaxSize:64,
        subgroupMinSize: 4,
        vendor:"apple"
    })
})


Object.defineProperties(GPUAdapterInfo.prototype, {
        [Symbol.toStringTag]: {value:"GPUAdapterInfo"},
    vendor: {

        get: newFunc('vendor', 10, function () {
            let res = mm.memory.private_data.get(this).vendor;
            if (debug) print('GPUAdapterInfo.vendor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    architecture: {

        get: newFunc('architecture', 10, function () {
            let res = mm.memory.private_data.get(this).architecture;
            if (debug) print('GPUAdapterInfo.architecture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    device: {

        get: newFunc('device', 10, function () {
            let res = mm.memory.private_data.get(this).device;
            if (debug) print('GPUAdapterInfo.device.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    description: {

        get: newFunc('description', 10, function () {
            let res = mm.memory.private_data.get(this).description;
            if (debug) print('GPUAdapterInfo.description.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    subgroupMinSize: {

        get: newFunc('subgroupMinSize', 10, function () {
            let res = mm.memory.private_data.get(this).subgroupMinSize;
            if (debug) print('GPUAdapterInfo.subgroupMinSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },

    subgroupMaxSize: {

        get: newFunc('subgroupMaxSize', 10, function () {
            let res = mm.memory.private_data.get(this).subgroupMaxSize;
            if (debug) print('GPUAdapterInfo.subgroupMaxSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isFallbackAdapter: {

        get: newFunc('isFallbackAdapter', 10, function () {
            let res = mm.memory.private_data.get(this).isFallbackAdapter;
            if (debug) print('GPUAdapterInfo.isFallbackAdapter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },

    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUAdapterInfo.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUBindGroup = newFunc('GPUBindGroup', 1, function () {
    print('GPUBindGroup.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUBindGroup.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUBindGroup.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUBindGroup.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUBindGroup.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUBindGroupLayout = newFunc('GPUBindGroupLayout', 1, function () {
    print('GPUBindGroupLayout.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUBindGroupLayout.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUBindGroupLayout.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUBindGroupLayout.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUBindGroupLayout.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUBuffer = newFunc('GPUBuffer', 1, function () {
    print('GPUBuffer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUBuffer.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('GPUBuffer.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    usage: {

        get: newFunc('usage', 10, function () {
            let res = mm.memory.private_data.get(this).usage;
            if (debug) print('GPUBuffer.usage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mapState: {

        get: newFunc('mapState', 10, function () {
            let res = mm.memory.private_data.get(this).mapState;
            if (debug) print('GPUBuffer.mapState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUBuffer.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUBuffer.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    destroy: {

        value: newFunc('destroy', 10, function () {
            if (debug) print('GPUBuffer.destroy.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getMappedRange: {

        value: newFunc('getMappedRange', 10, function () {
            if (debug) print('GPUBuffer.getMappedRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    mapAsync: {

        value: newFunc('mapAsync', 10, function () {
            if (debug) print('GPUBuffer.mapAsync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unmap: {

        value: newFunc('unmap', 10, function () {
            if (debug) print('GPUBuffer.unmap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUBuffer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;


;
;GPUCanvasContext = newFunc('GPUCanvasContext', 1, function () {
    print('GPUCanvasContext.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUCanvasContext.prototype, {
    canvas: {

        get: newFunc('canvas', 10, function () {
            let res = mm.memory.private_data.get(this).canvas;
            if (debug) print('GPUCanvasContext.canvas.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    configure: {

        value: newFunc('configure', 10, function () {
            if (debug) print('GPUCanvasContext.configure.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getCurrentTexture: {

        value: newFunc('getCurrentTexture', 10, function () {
            if (debug) print('GPUCanvasContext.getCurrentTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unconfigure: {

        value: newFunc('unconfigure', 10, function () {
            if (debug) print('GPUCanvasContext.unconfigure.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getConfiguration: {

        value: newFunc('getConfiguration', 10, function () {
            if (debug) print('GPUCanvasContext.getConfiguration.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUCanvasContext.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


;
;GPUCommandBuffer = newFunc('GPUCommandBuffer', 1, function () {
    print('GPUCommandBuffer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUCommandBuffer.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUCommandBuffer.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUCommandBuffer.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUCommandBuffer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUCommandEncoder = newFunc('GPUCommandEncoder', 1, function () {
    print('GPUCommandEncoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUCommandEncoder.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUCommandEncoder.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUCommandEncoder.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    beginComputePass: {

        value: newFunc('beginComputePass', 10, function () {
            if (debug) print('GPUCommandEncoder.beginComputePass.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    beginRenderPass: {

        value: newFunc('beginRenderPass', 10, function () {
            if (debug) print('GPUCommandEncoder.beginRenderPass.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyBufferToTexture: {

        value: newFunc('copyBufferToTexture', 10, function () {
            if (debug) print('GPUCommandEncoder.copyBufferToTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyTextureToBuffer: {

        value: newFunc('copyTextureToBuffer', 10, function () {
            if (debug) print('GPUCommandEncoder.copyTextureToBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyTextureToTexture: {

        value: newFunc('copyTextureToTexture', 10, function () {
            if (debug) print('GPUCommandEncoder.copyTextureToTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    finish: {

        value: newFunc('finish', 10, function () {
            if (debug) print('GPUCommandEncoder.finish.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertDebugMarker: {

        value: newFunc('insertDebugMarker', 10, function () {
            if (debug) print('GPUCommandEncoder.insertDebugMarker.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pushDebugGroup: {

        value: newFunc('pushDebugGroup', 10, function () {
            if (debug) print('GPUCommandEncoder.pushDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearBuffer: {

        value: newFunc('clearBuffer', 10, function () {
            if (debug) print('GPUCommandEncoder.clearBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyBufferToBuffer: {

        value: newFunc('copyBufferToBuffer', 10, function () {
            if (debug) print('GPUCommandEncoder.copyBufferToBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    popDebugGroup: {

        value: newFunc('popDebugGroup', 10, function () {
            if (debug) print('GPUCommandEncoder.popDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    resolveQuerySet: {

        value: newFunc('resolveQuerySet', 10, function () {
            if (debug) print('GPUCommandEncoder.resolveQuerySet.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUCommandEncoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUCompilationInfo = newFunc('GPUCompilationInfo', 1, function () {
    print('GPUCompilationInfo.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUCompilationInfo.prototype, {
    messages: {

        get: newFunc('messages', 10, function () {
            let res = mm.memory.private_data.get(this).messages;
            if (debug) print('GPUCompilationInfo.messages.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUCompilationInfo.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUCompilationMessage = newFunc('GPUCompilationMessage', 1, function () {
    print('GPUCompilationMessage.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUCompilationMessage.prototype, {
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('GPUCompilationMessage.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('GPUCompilationMessage.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lineNum: {

        get: newFunc('lineNum', 10, function () {
            let res = mm.memory.private_data.get(this).lineNum;
            if (debug) print('GPUCompilationMessage.lineNum.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    linePos: {

        get: newFunc('linePos', 10, function () {
            let res = mm.memory.private_data.get(this).linePos;
            if (debug) print('GPUCompilationMessage.linePos.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    offset: {

        get: newFunc('offset', 10, function () {
            let res = mm.memory.private_data.get(this).offset;
            if (debug) print('GPUCompilationMessage.offset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('GPUCompilationMessage.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUCompilationMessage.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUComputePassEncoder = newFunc('GPUComputePassEncoder', 1, function () {
    print('GPUComputePassEncoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUComputePassEncoder.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUComputePassEncoder.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUComputePassEncoder.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    insertDebugMarker: {

        value: newFunc('insertDebugMarker', 10, function () {
            if (debug) print('GPUComputePassEncoder.insertDebugMarker.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pushDebugGroup: {

        value: newFunc('pushDebugGroup', 10, function () {
            if (debug) print('GPUComputePassEncoder.pushDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dispatchWorkgroups: {

        value: newFunc('dispatchWorkgroups', 10, function () {
            if (debug) print('GPUComputePassEncoder.dispatchWorkgroups.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dispatchWorkgroupsIndirect: {

        value: newFunc('dispatchWorkgroupsIndirect', 10, function () {
            if (debug) print('GPUComputePassEncoder.dispatchWorkgroupsIndirect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    end: {

        value: newFunc('end', 10, function () {
            if (debug) print('GPUComputePassEncoder.end.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    popDebugGroup: {

        value: newFunc('popDebugGroup', 10, function () {
            if (debug) print('GPUComputePassEncoder.popDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setBindGroup: {

        value: newFunc('setBindGroup', 10, function () {
            if (debug) print('GPUComputePassEncoder.setBindGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setPipeline: {

        value: newFunc('setPipeline', 10, function () {
            if (debug) print('GPUComputePassEncoder.setPipeline.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeTimestamp: {

        value: newFunc('writeTimestamp', 10, function () {
            if (debug) print('GPUComputePassEncoder.writeTimestamp.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUComputePassEncoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUComputePipeline = newFunc('GPUComputePipeline', 1, function () {
    print('GPUComputePipeline.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUComputePipeline.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUComputePipeline.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUComputePipeline.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getBindGroupLayout: {

        value: newFunc('getBindGroupLayout', 10, function () {
            if (debug) print('GPUComputePipeline.getBindGroupLayout.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUComputePipeline.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUDevice = newFunc('GPUDevice', 1, function () {
    print('GPUDevice.call');
    mm.memory.private_data.set(this, {
        adapterInfo: new GPUAdapterInfo(),
        features:new GPUSupportedFeatures(),
        label: "'"
    })
})


Object.defineProperties(GPUDevice.prototype, {
    features: {

        get: newFunc('features', 10, function () {
            let res = mm.memory.private_data.get(this).features;
            if (debug) print('GPUDevice.features.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    limits: {

        get: newFunc('limits', 10, function () {
            let res = mm.memory.private_data.get(this).limits;
            if (debug) print('GPUDevice.limits.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lost: {

        get: newFunc('lost', 10, function () {
            let res = mm.memory.private_data.get(this).lost;
            if (debug) print('GPUDevice.lost.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    queue: {

        get: newFunc('queue', 10, function () {
            let res = mm.memory.private_data.get(this).queue;
            if (debug) print('GPUDevice.queue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onuncapturederror: {

        get: newFunc('onuncapturederror', 10, function () {
            let res = mm.memory.private_data.get(this).onuncapturederror;
            if (debug) print('GPUDevice.onuncapturederror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onuncapturederror', 1, function (value) {
            if (debug) print('GPUDevice.onuncapturederror.set', value)
            mm.memory.private_data.get(this).onuncapturederror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUDevice.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUDevice.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    createBindGroup: {

        value: newFunc('createBindGroup', 10, function () {
            if (debug) print('GPUDevice.createBindGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createBindGroupLayout: {

        value: newFunc('createBindGroupLayout', 10, function () {
            if (debug) print('GPUDevice.createBindGroupLayout.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createBuffer: {

        value: newFunc('createBuffer', 10, function () {
            if (debug) print('GPUDevice.createBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createCommandEncoder: {

        value: newFunc('createCommandEncoder', 10, function () {
            if (debug) print('GPUDevice.createCommandEncoder.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createComputePipeline: {

        value: newFunc('createComputePipeline', 10, function () {
            if (debug) print('GPUDevice.createComputePipeline.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createComputePipelineAsync: {

        value: newFunc('createComputePipelineAsync', 10, function () {
            if (debug) print('GPUDevice.createComputePipelineAsync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createPipelineLayout: {

        value: newFunc('createPipelineLayout', 10, function () {
            if (debug) print('GPUDevice.createPipelineLayout.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createQuerySet: {

        value: newFunc('createQuerySet', 10, function () {
            if (debug) print('GPUDevice.createQuerySet.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createRenderBundleEncoder: {

        value: newFunc('createRenderBundleEncoder', 10, function () {
            if (debug) print('GPUDevice.createRenderBundleEncoder.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createRenderPipeline: {

        value: newFunc('createRenderPipeline', 10, function () {
            if (debug) print('GPUDevice.createRenderPipeline.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createRenderPipelineAsync: {

        value: newFunc('createRenderPipelineAsync', 10, function () {
            if (debug) print('GPUDevice.createRenderPipelineAsync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createSampler: {

        value: newFunc('createSampler', 10, function () {
            if (debug) print('GPUDevice.createSampler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createShaderModule: {

        value: newFunc('createShaderModule', 10, function () {
            if (debug) print('GPUDevice.createShaderModule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createTexture: {

        value: newFunc('createTexture', 10, function () {
            if (debug) print('GPUDevice.createTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    destroy: {

        value: newFunc('destroy', 10, function () {
            if (debug) print('GPUDevice.destroy.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    importExternalTexture: {

        value: newFunc('importExternalTexture', 10, function () {
            if (debug) print('GPUDevice.importExternalTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    popErrorScope: {

        value: newFunc('popErrorScope', 10, function () {
            if (debug) print('GPUDevice.popErrorScope.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pushErrorScope: {

        value: newFunc('pushErrorScope', 10, function () {
            if (debug) print('GPUDevice.pushErrorScope.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUDevice.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUDeviceLostInfo = newFunc('GPUDeviceLostInfo', 1, function () {
    print('GPUDeviceLostInfo.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUDeviceLostInfo.prototype, {
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('GPUDeviceLostInfo.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('GPUDeviceLostInfo.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUDeviceLostInfo.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUError = newFunc('GPUError', 1, function () {
    print('GPUError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUError.prototype, {
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('GPUError.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUExternalTexture = newFunc('GPUExternalTexture', 1, function () {
    print('GPUExternalTexture.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUExternalTexture.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUExternalTexture.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUExternalTexture.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUExternalTexture.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUInternalError = newFunc('GPUInternalError', 1, function () {
    print('GPUInternalError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUInternalError.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUInternalError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;


;
;GPUOutOfMemoryError = newFunc('GPUOutOfMemoryError', 1, function () {
    print('GPUOutOfMemoryError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUOutOfMemoryError.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUOutOfMemoryError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUPipelineError = newFunc('GPUPipelineError', 1, function () {
    print('GPUPipelineError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUPipelineError.prototype, {
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('GPUPipelineError.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUPipelineError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUPipelineLayout = newFunc('GPUPipelineLayout', 1, function () {
    print('GPUPipelineLayout.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUPipelineLayout.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUPipelineLayout.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUPipelineLayout.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUPipelineLayout.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUQuerySet = newFunc('GPUQuerySet', 1, function () {
    print('GPUQuerySet.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUQuerySet.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('GPUQuerySet.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    count: {

        get: newFunc('count', 10, function () {
            let res = mm.memory.private_data.get(this).count;
            if (debug) print('GPUQuerySet.count.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUQuerySet.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUQuerySet.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    destroy: {

        value: newFunc('destroy', 10, function () {
            if (debug) print('GPUQuerySet.destroy.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUQuerySet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUQueue = newFunc('GPUQueue', 1, function () {
    print('GPUQueue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUQueue.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUQueue.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUQueue.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    copyExternalImageToTexture: {

        value: newFunc('copyExternalImageToTexture', 10, function () {
            if (debug) print('GPUQueue.copyExternalImageToTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    onSubmittedWorkDone: {

        value: newFunc('onSubmittedWorkDone', 10, function () {
            if (debug) print('GPUQueue.onSubmittedWorkDone.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    submit: {

        value: newFunc('submit', 10, function () {
            if (debug) print('GPUQueue.submit.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeBuffer: {

        value: newFunc('writeBuffer', 10, function () {
            if (debug) print('GPUQueue.writeBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeTexture: {

        value: newFunc('writeTexture', 10, function () {
            if (debug) print('GPUQueue.writeTexture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUQueue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPURenderBundle = newFunc('GPURenderBundle', 1, function () {
    print('GPURenderBundle.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPURenderBundle.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPURenderBundle.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPURenderBundle.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPURenderBundle.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPURenderBundleEncoder = newFunc('GPURenderBundleEncoder', 1, function () {
    print('GPURenderBundleEncoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPURenderBundleEncoder.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPURenderBundleEncoder.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPURenderBundleEncoder.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    finish: {

        value: newFunc('finish', 10, function () {
            if (debug) print('GPURenderBundleEncoder.finish.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertDebugMarker: {

        value: newFunc('insertDebugMarker', 10, function () {
            if (debug) print('GPURenderBundleEncoder.insertDebugMarker.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pushDebugGroup: {

        value: newFunc('pushDebugGroup', 10, function () {
            if (debug) print('GPURenderBundleEncoder.pushDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setIndexBuffer: {

        value: newFunc('setIndexBuffer', 10, function () {
            if (debug) print('GPURenderBundleEncoder.setIndexBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    draw: {

        value: newFunc('draw', 10, function () {
            if (debug) print('GPURenderBundleEncoder.draw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawIndexed: {

        value: newFunc('drawIndexed', 10, function () {
            if (debug) print('GPURenderBundleEncoder.drawIndexed.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawIndexedIndirect: {

        value: newFunc('drawIndexedIndirect', 10, function () {
            if (debug) print('GPURenderBundleEncoder.drawIndexedIndirect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawIndirect: {

        value: newFunc('drawIndirect', 10, function () {
            if (debug) print('GPURenderBundleEncoder.drawIndirect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    popDebugGroup: {

        value: newFunc('popDebugGroup', 10, function () {
            if (debug) print('GPURenderBundleEncoder.popDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setBindGroup: {

        value: newFunc('setBindGroup', 10, function () {
            if (debug) print('GPURenderBundleEncoder.setBindGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setPipeline: {

        value: newFunc('setPipeline', 10, function () {
            if (debug) print('GPURenderBundleEncoder.setPipeline.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setVertexBuffer: {

        value: newFunc('setVertexBuffer', 10, function () {
            if (debug) print('GPURenderBundleEncoder.setVertexBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPURenderBundleEncoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPURenderPassEncoder = newFunc('GPURenderPassEncoder', 1, function () {
    print('GPURenderPassEncoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPURenderPassEncoder.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPURenderPassEncoder.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPURenderPassEncoder.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    executeBundles: {

        value: newFunc('executeBundles', 10, function () {
            if (debug) print('GPURenderPassEncoder.executeBundles.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertDebugMarker: {

        value: newFunc('insertDebugMarker', 10, function () {
            if (debug) print('GPURenderPassEncoder.insertDebugMarker.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pushDebugGroup: {

        value: newFunc('pushDebugGroup', 10, function () {
            if (debug) print('GPURenderPassEncoder.pushDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setBlendConstant: {

        value: newFunc('setBlendConstant', 10, function () {
            if (debug) print('GPURenderPassEncoder.setBlendConstant.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setIndexBuffer: {

        value: newFunc('setIndexBuffer', 10, function () {
            if (debug) print('GPURenderPassEncoder.setIndexBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    beginOcclusionQuery: {

        value: newFunc('beginOcclusionQuery', 10, function () {
            if (debug) print('GPURenderPassEncoder.beginOcclusionQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    draw: {

        value: newFunc('draw', 10, function () {
            if (debug) print('GPURenderPassEncoder.draw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawIndexed: {

        value: newFunc('drawIndexed', 10, function () {
            if (debug) print('GPURenderPassEncoder.drawIndexed.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawIndexedIndirect: {

        value: newFunc('drawIndexedIndirect', 10, function () {
            if (debug) print('GPURenderPassEncoder.drawIndexedIndirect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawIndirect: {

        value: newFunc('drawIndirect', 10, function () {
            if (debug) print('GPURenderPassEncoder.drawIndirect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    end: {

        value: newFunc('end', 10, function () {
            if (debug) print('GPURenderPassEncoder.end.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    endOcclusionQuery: {

        value: newFunc('endOcclusionQuery', 10, function () {
            if (debug) print('GPURenderPassEncoder.endOcclusionQuery.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    popDebugGroup: {

        value: newFunc('popDebugGroup', 10, function () {
            if (debug) print('GPURenderPassEncoder.popDebugGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setBindGroup: {

        value: newFunc('setBindGroup', 10, function () {
            if (debug) print('GPURenderPassEncoder.setBindGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setPipeline: {

        value: newFunc('setPipeline', 10, function () {
            if (debug) print('GPURenderPassEncoder.setPipeline.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setScissorRect: {

        value: newFunc('setScissorRect', 10, function () {
            if (debug) print('GPURenderPassEncoder.setScissorRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setStencilReference: {

        value: newFunc('setStencilReference', 10, function () {
            if (debug) print('GPURenderPassEncoder.setStencilReference.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setVertexBuffer: {

        value: newFunc('setVertexBuffer', 10, function () {
            if (debug) print('GPURenderPassEncoder.setVertexBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setViewport: {

        value: newFunc('setViewport', 10, function () {
            if (debug) print('GPURenderPassEncoder.setViewport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeTimestamp: {

        value: newFunc('writeTimestamp', 10, function () {
            if (debug) print('GPURenderPassEncoder.writeTimestamp.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPURenderPassEncoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPURenderPipeline = newFunc('GPURenderPipeline', 1, function () {
    print('GPURenderPipeline.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPURenderPipeline.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPURenderPipeline.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPURenderPipeline.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getBindGroupLayout: {

        value: newFunc('getBindGroupLayout', 10, function () {
            if (debug) print('GPURenderPipeline.getBindGroupLayout.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPURenderPipeline.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUSampler = newFunc('GPUSampler', 1, function () {
    print('GPUSampler.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUSampler.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUSampler.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUSampler.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUSampler.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUShaderModule = newFunc('GPUShaderModule', 1, function () {
    print('GPUShaderModule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUShaderModule.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUShaderModule.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUShaderModule.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getCompilationInfo: {

        value: newFunc('getCompilationInfo', 10, function () {
            if (debug) print('GPUShaderModule.getCompilationInfo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUShaderModule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


;
;GPUSupportedFeatures = newFunc('GPUSupportedFeatures', 1, function () {
    print('GPUSupportedFeatures.call');
    mm.memory.private_data.set(this, {
        size:15
    })
})


Object.defineProperties(GPUSupportedFeatures.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('GPUSupportedFeatures.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('GPUSupportedFeatures.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('GPUSupportedFeatures.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('GPUSupportedFeatures.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('GPUSupportedFeatures.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('GPUSupportedFeatures.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUSupportedFeatures.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUSupportedLimits = newFunc('GPUSupportedLimits', 1, function () {
    print('GPUSupportedLimits.call');
    mm.memory.private_data.set(this, {
    "maxTextureDimension1D": 16384,
    "maxTextureDimension2D": 16384,
    "maxTextureDimension3D": 2048,
    "maxTextureArrayLayers": 2048,
    "maxBindGroups": 4,
    "maxBindGroupsPlusVertexBuffers": 24,
    "maxBindingsPerBindGroup": 1000,
    "maxDynamicUniformBuffersPerPipelineLayout": 10,
    "maxDynamicStorageBuffersPerPipelineLayout": 8,
    "maxSampledTexturesPerShaderStage": 16,
    "maxSamplersPerShaderStage": 16,
    "maxStorageBuffersPerShaderStage": 10,
    "maxStorageTexturesPerShaderStage": 8,
    "maxUniformBuffersPerShaderStage": 12,
    "maxUniformBufferBindingSize": 65536,
    "maxStorageBufferBindingSize": 4294967292,
    "minUniformBufferOffsetAlignment": 256,
    "minStorageBufferOffsetAlignment": 256,
    "maxVertexBuffers": 8,
    "maxBufferSize": 4294967296,
    "maxVertexAttributes": 16,
    "maxVertexBufferArrayStride": 2048,
    "maxInterStageShaderVariables": 28,
    "maxColorAttachments": 8,
    "maxColorAttachmentBytesPerSample": 128,
    "maxComputeWorkgroupStorageSize": 32768,
    "maxComputeInvocationsPerWorkgroup": 1024,
    "maxComputeWorkgroupSizeX": 1024,
    "maxComputeWorkgroupSizeY": 1024,
    "maxComputeWorkgroupSizeZ": 64,
    "maxComputeWorkgroupsPerDimension": 65535
})
})


Object.defineProperties(GPUSupportedLimits.prototype, {
    maxTextureDimension1D: {

        get: newFunc('maxTextureDimension1D', 10, function () {
            let res = mm.memory.private_data.get(this).maxTextureDimension1D;
            if (debug) print('GPUSupportedLimits.maxTextureDimension1D.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxTextureDimension2D: {

        get: newFunc('maxTextureDimension2D', 10, function () {
            let res = mm.memory.private_data.get(this).maxTextureDimension2D;
            if (debug) print('GPUSupportedLimits.maxTextureDimension2D.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxTextureDimension3D: {

        get: newFunc('maxTextureDimension3D', 10, function () {
            let res = mm.memory.private_data.get(this).maxTextureDimension3D;
            if (debug) print('GPUSupportedLimits.maxTextureDimension3D.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxTextureArrayLayers: {

        get: newFunc('maxTextureArrayLayers', 10, function () {
            let res = mm.memory.private_data.get(this).maxTextureArrayLayers;
            if (debug) print('GPUSupportedLimits.maxTextureArrayLayers.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxBindGroups: {

        get: newFunc('maxBindGroups', 10, function () {
            let res = mm.memory.private_data.get(this).maxBindGroups;
            if (debug) print('GPUSupportedLimits.maxBindGroups.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxBindGroupsPlusVertexBuffers: {

        get: newFunc('maxBindGroupsPlusVertexBuffers', 10, function () {
            let res = mm.memory.private_data.get(this).maxBindGroupsPlusVertexBuffers;
            if (debug) print('GPUSupportedLimits.maxBindGroupsPlusVertexBuffers.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxBindingsPerBindGroup: {

        get: newFunc('maxBindingsPerBindGroup', 10, function () {
            let res = mm.memory.private_data.get(this).maxBindingsPerBindGroup;
            if (debug) print('GPUSupportedLimits.maxBindingsPerBindGroup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxDynamicUniformBuffersPerPipelineLayout: {

        get: newFunc('maxDynamicUniformBuffersPerPipelineLayout', 10, function () {
            let res = mm.memory.private_data.get(this).maxDynamicUniformBuffersPerPipelineLayout;
            if (debug) print('GPUSupportedLimits.maxDynamicUniformBuffersPerPipelineLayout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxDynamicStorageBuffersPerPipelineLayout: {

        get: newFunc('maxDynamicStorageBuffersPerPipelineLayout', 10, function () {
            let res = mm.memory.private_data.get(this).maxDynamicStorageBuffersPerPipelineLayout;
            if (debug) print('GPUSupportedLimits.maxDynamicStorageBuffersPerPipelineLayout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxSampledTexturesPerShaderStage: {

        get: newFunc('maxSampledTexturesPerShaderStage', 10, function () {
            let res = mm.memory.private_data.get(this).maxSampledTexturesPerShaderStage;
            if (debug) print('GPUSupportedLimits.maxSampledTexturesPerShaderStage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxSamplersPerShaderStage: {

        get: newFunc('maxSamplersPerShaderStage', 10, function () {
            let res = mm.memory.private_data.get(this).maxSamplersPerShaderStage;
            if (debug) print('GPUSupportedLimits.maxSamplersPerShaderStage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxStorageBuffersPerShaderStage: {

        get: newFunc('maxStorageBuffersPerShaderStage', 10, function () {
            let res = mm.memory.private_data.get(this).maxStorageBuffersPerShaderStage;
            if (debug) print('GPUSupportedLimits.maxStorageBuffersPerShaderStage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxStorageTexturesPerShaderStage: {

        get: newFunc('maxStorageTexturesPerShaderStage', 10, function () {
            let res = mm.memory.private_data.get(this).maxStorageTexturesPerShaderStage;
            if (debug) print('GPUSupportedLimits.maxStorageTexturesPerShaderStage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxUniformBuffersPerShaderStage: {

        get: newFunc('maxUniformBuffersPerShaderStage', 10, function () {
            let res = mm.memory.private_data.get(this).maxUniformBuffersPerShaderStage;
            if (debug) print('GPUSupportedLimits.maxUniformBuffersPerShaderStage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxUniformBufferBindingSize: {

        get: newFunc('maxUniformBufferBindingSize', 10, function () {
            let res = mm.memory.private_data.get(this).maxUniformBufferBindingSize;
            if (debug) print('GPUSupportedLimits.maxUniformBufferBindingSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxStorageBufferBindingSize: {

        get: newFunc('maxStorageBufferBindingSize', 10, function () {
            let res = mm.memory.private_data.get(this).maxStorageBufferBindingSize;
            if (debug) print('GPUSupportedLimits.maxStorageBufferBindingSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    minUniformBufferOffsetAlignment: {

        get: newFunc('minUniformBufferOffsetAlignment', 10, function () {
            let res = mm.memory.private_data.get(this).minUniformBufferOffsetAlignment;
            if (debug) print('GPUSupportedLimits.minUniformBufferOffsetAlignment.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    minStorageBufferOffsetAlignment: {

        get: newFunc('minStorageBufferOffsetAlignment', 10, function () {
            let res = mm.memory.private_data.get(this).minStorageBufferOffsetAlignment;
            if (debug) print('GPUSupportedLimits.minStorageBufferOffsetAlignment.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxVertexBuffers: {

        get: newFunc('maxVertexBuffers', 10, function () {
            let res = mm.memory.private_data.get(this).maxVertexBuffers;
            if (debug) print('GPUSupportedLimits.maxVertexBuffers.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxBufferSize: {

        get: newFunc('maxBufferSize', 10, function () {
            let res = mm.memory.private_data.get(this).maxBufferSize;
            if (debug) print('GPUSupportedLimits.maxBufferSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxVertexAttributes: {

        get: newFunc('maxVertexAttributes', 10, function () {
            let res = mm.memory.private_data.get(this).maxVertexAttributes;
            if (debug) print('GPUSupportedLimits.maxVertexAttributes.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxVertexBufferArrayStride: {

        get: newFunc('maxVertexBufferArrayStride', 10, function () {
            let res = mm.memory.private_data.get(this).maxVertexBufferArrayStride;
            if (debug) print('GPUSupportedLimits.maxVertexBufferArrayStride.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxInterStageShaderComponents: {

        get: newFunc('maxInterStageShaderComponents', 10, function () {
            let res = mm.memory.private_data.get(this).maxInterStageShaderComponents;

            if (debug) print('GPUSupportedLimits.maxInterStageShaderComponents.get', res)
            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxInterStageShaderVariables: {

        get: newFunc('maxInterStageShaderVariables', 10, function () {
            let res = mm.memory.private_data.get(this).maxInterStageShaderVariables;
            if (debug) print('GPUSupportedLimits.maxInterStageShaderVariables.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxColorAttachments: {

        get: newFunc('maxColorAttachments', 10, function () {
            let res = mm.memory.private_data.get(this).maxColorAttachments;
            if (debug) print('GPUSupportedLimits.maxColorAttachments.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxColorAttachmentBytesPerSample: {

        get: newFunc('maxColorAttachmentBytesPerSample', 10, function () {
            let res = mm.memory.private_data.get(this).maxColorAttachmentBytesPerSample;
            if (debug) print('GPUSupportedLimits.maxColorAttachmentBytesPerSample.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxComputeWorkgroupStorageSize: {

        get: newFunc('maxComputeWorkgroupStorageSize', 10, function () {
            let res = mm.memory.private_data.get(this).maxComputeWorkgroupStorageSize;
            if (debug) print('GPUSupportedLimits.maxComputeWorkgroupStorageSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxComputeInvocationsPerWorkgroup: {

        get: newFunc('maxComputeInvocationsPerWorkgroup', 10, function () {
            let res = mm.memory.private_data.get(this).maxComputeInvocationsPerWorkgroup;
            if (debug) print('GPUSupportedLimits.maxComputeInvocationsPerWorkgroup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxComputeWorkgroupSizeX: {

        get: newFunc('maxComputeWorkgroupSizeX', 10, function () {
            let res = mm.memory.private_data.get(this).maxComputeWorkgroupSizeX;
            if (debug) print('GPUSupportedLimits.maxComputeWorkgroupSizeX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxComputeWorkgroupSizeY: {

        get: newFunc('maxComputeWorkgroupSizeY', 10, function () {
            let res = mm.memory.private_data.get(this).maxComputeWorkgroupSizeY;
            if (debug) print('GPUSupportedLimits.maxComputeWorkgroupSizeY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxComputeWorkgroupSizeZ: {

        get: newFunc('maxComputeWorkgroupSizeZ', 10, function () {
            let res = mm.memory.private_data.get(this).maxComputeWorkgroupSizeZ;
            if (debug) print('GPUSupportedLimits.maxComputeWorkgroupSizeZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxComputeWorkgroupsPerDimension: {

        get: newFunc('maxComputeWorkgroupsPerDimension', 10, function () {
            let res = mm.memory.private_data.get(this).maxComputeWorkgroupsPerDimension;
            if (debug) print('GPUSupportedLimits.maxComputeWorkgroupsPerDimension.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUSupportedLimits.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUTexture = newFunc('GPUTexture', 1, function () {
    print('GPUTexture.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUTexture.prototype, {
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('GPUTexture.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('GPUTexture.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    depthOrArrayLayers: {

        get: newFunc('depthOrArrayLayers', 10, function () {
            let res = mm.memory.private_data.get(this).depthOrArrayLayers;
            if (debug) print('GPUTexture.depthOrArrayLayers.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mipLevelCount: {

        get: newFunc('mipLevelCount', 10, function () {
            let res = mm.memory.private_data.get(this).mipLevelCount;
            if (debug) print('GPUTexture.mipLevelCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sampleCount: {

        get: newFunc('sampleCount', 10, function () {
            let res = mm.memory.private_data.get(this).sampleCount;
            if (debug) print('GPUTexture.sampleCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dimension: {

        get: newFunc('dimension', 10, function () {
            let res = mm.memory.private_data.get(this).dimension;
            if (debug) print('GPUTexture.dimension.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    format: {

        get: newFunc('format', 10, function () {
            let res = mm.memory.private_data.get(this).format;
            if (debug) print('GPUTexture.format.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    usage: {

        get: newFunc('usage', 10, function () {
            let res = mm.memory.private_data.get(this).usage;
            if (debug) print('GPUTexture.usage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUTexture.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUTexture.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    createView: {

        value: newFunc('createView', 10, function () {
            if (debug) print('GPUTexture.createView.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    destroy: {

        value: newFunc('destroy', 10, function () {
            if (debug) print('GPUTexture.destroy.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUTexture.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


;
;GPUTextureView = newFunc('GPUTextureView', 1, function () {
    print('GPUTextureView.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUTextureView.prototype, {
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('GPUTextureView.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('GPUTextureView.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUTextureView.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUUncapturedErrorEvent = newFunc('GPUUncapturedErrorEvent', 1, function () {
    print('GPUUncapturedErrorEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUUncapturedErrorEvent.prototype, {
    error: {

        get: newFunc('error', 10, function () {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('GPUUncapturedErrorEvent.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUUncapturedErrorEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GPUValidationError = newFunc('GPUValidationError', 1, function () {
    print('GPUValidationError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GPUValidationError.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GPUValidationError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;GravitySensor = newFunc('GravitySensor', 1, function () {
    print('GravitySensor.call');
    mm.memory.private_data.set(this, {})
})