USBAlternateInterface = newFunc('USBAlternateInterface', 1, function () {
    print('USBAlternateInterface.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBAlternateInterface.prototype, {
    alternateSetting: {

        get: newFunc('alternateSetting', 10, function () {
            let res = mm.memory.private_data.get(this).alternateSetting;
            if (debug) print('USBAlternateInterface.alternateSetting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interfaceClass: {

        get: newFunc('interfaceClass', 10, function () {
            let res = mm.memory.private_data.get(this).interfaceClass;
            if (debug) print('USBAlternateInterface.interfaceClass.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interfaceSubclass: {

        get: newFunc('interfaceSubclass', 10, function () {
            let res = mm.memory.private_data.get(this).interfaceSubclass;
            if (debug) print('USBAlternateInterface.interfaceSubclass.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interfaceProtocol: {

        get: newFunc('interfaceProtocol', 10, function () {
            let res = mm.memory.private_data.get(this).interfaceProtocol;
            if (debug) print('USBAlternateInterface.interfaceProtocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interfaceName: {

        get: newFunc('interfaceName', 10, function () {
            let res = mm.memory.private_data.get(this).interfaceName;
            if (debug) print('USBAlternateInterface.interfaceName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    endpoints: {

        get: newFunc('endpoints', 10, function () {
            let res = mm.memory.private_data.get(this).endpoints;
            if (debug) print('USBAlternateInterface.endpoints.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBAlternateInterface.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBConfiguration = newFunc('USBConfiguration', 1, function () {
    print('USBConfiguration.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBConfiguration.prototype, {
    configurationValue: {

        get: newFunc('configurationValue', 10, function () {
            let res = mm.memory.private_data.get(this).configurationValue;
            if (debug) print('USBConfiguration.configurationValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    configurationName: {

        get: newFunc('configurationName', 10, function () {
            let res = mm.memory.private_data.get(this).configurationName;
            if (debug) print('USBConfiguration.configurationName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interfaces: {

        get: newFunc('interfaces', 10, function () {
            let res = mm.memory.private_data.get(this).interfaces;
            if (debug) print('USBConfiguration.interfaces.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBConfiguration.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBConnectionEvent = newFunc('USBConnectionEvent', 1, function () {
    print('USBConnectionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBConnectionEvent.prototype, {
    device: {

        get: newFunc('device', 10, function () {
            let res = mm.memory.private_data.get(this).device;
            if (debug) print('USBConnectionEvent.device.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBConnectionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBDevice = newFunc('USBDevice', 1, function () {
    print('USBDevice.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBDevice.prototype, {
    usbVersionMajor: {

        get: newFunc('usbVersionMajor', 10, function () {
            let res = mm.memory.private_data.get(this).usbVersionMajor;
            if (debug) print('USBDevice.usbVersionMajor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    usbVersionMinor: {

        get: newFunc('usbVersionMinor', 10, function () {
            let res = mm.memory.private_data.get(this).usbVersionMinor;
            if (debug) print('USBDevice.usbVersionMinor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    usbVersionSubminor: {

        get: newFunc('usbVersionSubminor', 10, function () {
            let res = mm.memory.private_data.get(this).usbVersionSubminor;
            if (debug) print('USBDevice.usbVersionSubminor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deviceClass: {

        get: newFunc('deviceClass', 10, function () {
            let res = mm.memory.private_data.get(this).deviceClass;
            if (debug) print('USBDevice.deviceClass.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deviceSubclass: {

        get: newFunc('deviceSubclass', 10, function () {
            let res = mm.memory.private_data.get(this).deviceSubclass;
            if (debug) print('USBDevice.deviceSubclass.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deviceProtocol: {

        get: newFunc('deviceProtocol', 10, function () {
            let res = mm.memory.private_data.get(this).deviceProtocol;
            if (debug) print('USBDevice.deviceProtocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    vendorId: {

        get: newFunc('vendorId', 10, function () {
            let res = mm.memory.private_data.get(this).vendorId;
            if (debug) print('USBDevice.vendorId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    productId: {

        get: newFunc('productId', 10, function () {
            let res = mm.memory.private_data.get(this).productId;
            if (debug) print('USBDevice.productId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deviceVersionMajor: {

        get: newFunc('deviceVersionMajor', 10, function () {
            let res = mm.memory.private_data.get(this).deviceVersionMajor;
            if (debug) print('USBDevice.deviceVersionMajor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deviceVersionMinor: {

        get: newFunc('deviceVersionMinor', 10, function () {
            let res = mm.memory.private_data.get(this).deviceVersionMinor;
            if (debug) print('USBDevice.deviceVersionMinor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deviceVersionSubminor: {

        get: newFunc('deviceVersionSubminor', 10, function () {
            let res = mm.memory.private_data.get(this).deviceVersionSubminor;
            if (debug) print('USBDevice.deviceVersionSubminor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    manufacturerName: {

        get: newFunc('manufacturerName', 10, function () {
            let res = mm.memory.private_data.get(this).manufacturerName;
            if (debug) print('USBDevice.manufacturerName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    productName: {

        get: newFunc('productName', 10, function () {
            let res = mm.memory.private_data.get(this).productName;
            if (debug) print('USBDevice.productName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    serialNumber: {

        get: newFunc('serialNumber', 10, function () {
            let res = mm.memory.private_data.get(this).serialNumber;
            if (debug) print('USBDevice.serialNumber.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    configuration: {

        get: newFunc('configuration', 10, function () {
            let res = mm.memory.private_data.get(this).configuration;
            if (debug) print('USBDevice.configuration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    configurations: {

        get: newFunc('configurations', 10, function () {
            let res = mm.memory.private_data.get(this).configurations;
            if (debug) print('USBDevice.configurations.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    opened: {

        get: newFunc('opened', 10, function () {
            let res = mm.memory.private_data.get(this).opened;
            if (debug) print('USBDevice.opened.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    claimInterface: {

        value: newFunc('claimInterface', 10, function () {
            if (debug) print('USBDevice.claimInterface.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearHalt: {

        value: newFunc('clearHalt', 10, function () {
            if (debug) print('USBDevice.clearHalt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('USBDevice.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    controlTransferIn: {

        value: newFunc('controlTransferIn', 10, function () {
            if (debug) print('USBDevice.controlTransferIn.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    controlTransferOut: {

        value: newFunc('controlTransferOut', 10, function () {
            if (debug) print('USBDevice.controlTransferOut.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forget: {

        value: newFunc('forget', 10, function () {
            if (debug) print('USBDevice.forget.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isochronousTransferIn: {

        value: newFunc('isochronousTransferIn', 10, function () {
            if (debug) print('USBDevice.isochronousTransferIn.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isochronousTransferOut: {

        value: newFunc('isochronousTransferOut', 10, function () {
            if (debug) print('USBDevice.isochronousTransferOut.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    open: {

        value: newFunc('open', 10, function () {
            if (debug) print('USBDevice.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    releaseInterface: {

        value: newFunc('releaseInterface', 10, function () {
            if (debug) print('USBDevice.releaseInterface.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('USBDevice.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectAlternateInterface: {

        value: newFunc('selectAlternateInterface', 10, function () {
            if (debug) print('USBDevice.selectAlternateInterface.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectConfiguration: {

        value: newFunc('selectConfiguration', 10, function () {
            if (debug) print('USBDevice.selectConfiguration.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    transferIn: {

        value: newFunc('transferIn', 10, function () {
            if (debug) print('USBDevice.transferIn.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    transferOut: {

        value: newFunc('transferOut', 10, function () {
            if (debug) print('USBDevice.transferOut.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBDevice.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBEndpoint = newFunc('USBEndpoint', 1, function () {
    print('USBEndpoint.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBEndpoint.prototype, {
    endpointNumber: {

        get: newFunc('endpointNumber', 10, function () {
            let res = mm.memory.private_data.get(this).endpointNumber;
            if (debug) print('USBEndpoint.endpointNumber.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    direction: {

        get: newFunc('direction', 10, function () {
            let res = mm.memory.private_data.get(this).direction;
            if (debug) print('USBEndpoint.direction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('USBEndpoint.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    packetSize: {

        get: newFunc('packetSize', 10, function () {
            let res = mm.memory.private_data.get(this).packetSize;
            if (debug) print('USBEndpoint.packetSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBEndpoint.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBInTransferResult = newFunc('USBInTransferResult', 1, function () {
    print('USBInTransferResult.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBInTransferResult.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('USBInTransferResult.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    status: {

        get: newFunc('status', 10, function () {
            if (!USBInTransferResult.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this).status;
            if (debug) print('USBInTransferResult.status.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBInTransferResult.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBInterface = newFunc('USBInterface', 1, function () {
    print('USBInterface.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBInterface.prototype, {
    interfaceNumber: {

        get: newFunc('interfaceNumber', 10, function () {
            let res = mm.memory.private_data.get(this).interfaceNumber;
            if (debug) print('USBInterface.interfaceNumber.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    alternate: {

        get: newFunc('alternate', 10, function () {
            let res = mm.memory.private_data.get(this).alternate;
            if (debug) print('USBInterface.alternate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    alternates: {

        get: newFunc('alternates', 10, function () {
            let res = mm.memory.private_data.get(this).alternates;
            if (debug) print('USBInterface.alternates.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    claimed: {

        get: newFunc('claimed', 10, function () {
            let res = mm.memory.private_data.get(this).claimed;
            if (debug) print('USBInterface.claimed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBInterface.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBIsochronousInTransferPacket = newFunc('USBIsochronousInTransferPacket', 1, function () {
    print('USBIsochronousInTransferPacket.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBIsochronousInTransferPacket.prototype, {
    status: {

        get: newFunc('status', 10, function () {
            let res = mm.memory.private_data.get(this).status;
            if (debug) print('USBIsochronousInTransferPacket.status.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('USBIsochronousInTransferPacket.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBIsochronousInTransferPacket.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBIsochronousInTransferResult = newFunc('USBIsochronousInTransferResult', 1, function () {
    print('USBIsochronousInTransferResult.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBIsochronousInTransferResult.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('USBIsochronousInTransferResult.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    packets: {

        get: newFunc('packets', 10, function () {
            let res = mm.memory.private_data.get(this).packets;
            if (debug) print('USBIsochronousInTransferResult.packets.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBIsochronousInTransferResult.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBIsochronousOutTransferPacket = newFunc('USBIsochronousOutTransferPacket', 1, function () {
    print('USBIsochronousOutTransferPacket.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBIsochronousOutTransferPacket.prototype, {
    bytesWritten: {

        get: newFunc('bytesWritten', 10, function () {
            let res = mm.memory.private_data.get(this).bytesWritten;
            if (debug) print('USBIsochronousOutTransferPacket.bytesWritten.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    status: {

        get: newFunc('status', 10, function () {
            let res = mm.memory.private_data.get(this).status;
            if (debug) print('USBIsochronousOutTransferPacket.status.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBIsochronousOutTransferPacket.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBIsochronousOutTransferResult = newFunc('USBIsochronousOutTransferResult', 1, function () {
    print('USBIsochronousOutTransferResult.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBIsochronousOutTransferResult.prototype, {
    packets: {

        get: newFunc('packets', 10, function () {
            let res = mm.memory.private_data.get(this).packets;
            if (debug) print('USBIsochronousOutTransferResult.packets.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBIsochronousOutTransferResult.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;USBOutTransferResult = newFunc('USBOutTransferResult', 1, function () {
    print('USBOutTransferResult.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(USBOutTransferResult.prototype, {
    bytesWritten: {

        get: newFunc('bytesWritten', 10, function () {
            let res = mm.memory.private_data.get(this).bytesWritten;
            if (debug) print('USBOutTransferResult.bytesWritten.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    status: {

        get: newFunc('status', 10, function () {
            let res = mm.memory.private_data.get(this).status;
            if (debug) print('USBOutTransferResult.status.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('USBOutTransferResult.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});