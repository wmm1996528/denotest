

;BluetoothCharacteristicProperties = newFunc('BluetoothCharacteristicProperties', 1, function () {
    print('BluetoothCharacteristicProperties.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BluetoothCharacteristicProperties.prototype, {
    broadcast: {

        get: newFunc('broadcast', 10, function () {
            let res = mm.memory.private_data.get(this).broadcast;
            if (debug) print('BluetoothCharacteristicProperties.broadcast.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    read: {

        get: newFunc('read', 10, function () {
            let res = mm.memory.private_data.get(this).read;
            if (debug) print('BluetoothCharacteristicProperties.read.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writeWithoutResponse: {

        get: newFunc('writeWithoutResponse', 10, function () {
            let res = mm.memory.private_data.get(this).writeWithoutResponse;
            if (debug) print('BluetoothCharacteristicProperties.writeWithoutResponse.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    write: {

        get: newFunc('write', 10, function () {
            let res = mm.memory.private_data.get(this).write;
            if (debug) print('BluetoothCharacteristicProperties.write.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    notify: {

        get: newFunc('notify', 10, function () {
            let res = mm.memory.private_data.get(this).notify;
            if (debug) print('BluetoothCharacteristicProperties.notify.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    indicate: {

        get: newFunc('indicate', 10, function () {
            let res = mm.memory.private_data.get(this).indicate;
            if (debug) print('BluetoothCharacteristicProperties.indicate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    authenticatedSignedWrites: {

        get: newFunc('authenticatedSignedWrites', 10, function () {
            let res = mm.memory.private_data.get(this).authenticatedSignedWrites;
            if (debug) print('BluetoothCharacteristicProperties.authenticatedSignedWrites.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reliableWrite: {

        get: newFunc('reliableWrite', 10, function () {
            let res = mm.memory.private_data.get(this).reliableWrite;
            if (debug) print('BluetoothCharacteristicProperties.reliableWrite.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writableAuxiliaries: {

        get: newFunc('writableAuxiliaries', 10, function () {
            let res = mm.memory.private_data.get(this).writableAuxiliaries;
            if (debug) print('BluetoothCharacteristicProperties.writableAuxiliaries.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BluetoothCharacteristicProperties.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;BluetoothRemoteGATTCharacteristic = newFunc('BluetoothRemoteGATTCharacteristic', 1, function () {
    print('BluetoothRemoteGATTCharacteristic.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BluetoothRemoteGATTCharacteristic.prototype, {
    service: {

        get: newFunc('service', 10, function () {
            let res = mm.memory.private_data.get(this).service;
            if (debug) print('BluetoothRemoteGATTCharacteristic.service.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    uuid: {

        get: newFunc('uuid', 10, function () {
            let res = mm.memory.private_data.get(this).uuid;
            if (debug) print('BluetoothRemoteGATTCharacteristic.uuid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    properties: {

        get: newFunc('properties', 10, function () {
            let res = mm.memory.private_data.get(this).properties;
            if (debug) print('BluetoothRemoteGATTCharacteristic.properties.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('BluetoothRemoteGATTCharacteristic.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    oncharacteristicvaluechanged: {

        get: newFunc('oncharacteristicvaluechanged', 10, function () {
            let res = mm.memory.private_data.get(this).oncharacteristicvaluechanged;
            if (debug) print('BluetoothRemoteGATTCharacteristic.oncharacteristicvaluechanged.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncharacteristicvaluechanged', 1, function (value) {
            if (debug) print('BluetoothRemoteGATTCharacteristic.oncharacteristicvaluechanged.set', value)
            mm.memory.private_data.get(this).oncharacteristicvaluechanged = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getDescriptor: {

        value: newFunc('getDescriptor', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.getDescriptor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getDescriptors: {

        value: newFunc('getDescriptors', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.getDescriptors.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    readValue: {

        value: newFunc('readValue', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.readValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    startNotifications: {

        value: newFunc('startNotifications', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.startNotifications.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stopNotifications: {

        value: newFunc('stopNotifications', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.stopNotifications.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeValue: {

        value: newFunc('writeValue', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.writeValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeValueWithResponse: {

        value: newFunc('writeValueWithResponse', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.writeValueWithResponse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeValueWithoutResponse: {

        value: newFunc('writeValueWithoutResponse', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.writeValueWithoutResponse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BluetoothRemoteGATTCharacteristic.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;BluetoothRemoteGATTDescriptor = newFunc('BluetoothRemoteGATTDescriptor', 1, function () {
    print('BluetoothRemoteGATTDescriptor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BluetoothRemoteGATTDescriptor.prototype, {
    characteristic: {

        get: newFunc('characteristic', 10, function () {
            let res = mm.memory.private_data.get(this).characteristic;
            if (debug) print('BluetoothRemoteGATTDescriptor.characteristic.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    uuid: {

        get: newFunc('uuid', 10, function () {
            let res = mm.memory.private_data.get(this).uuid;
            if (debug) print('BluetoothRemoteGATTDescriptor.uuid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('BluetoothRemoteGATTDescriptor.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    readValue: {

        value: newFunc('readValue', 10, function () {
            if (debug) print('BluetoothRemoteGATTDescriptor.readValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    writeValue: {

        value: newFunc('writeValue', 10, function () {
            if (debug) print('BluetoothRemoteGATTDescriptor.writeValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BluetoothRemoteGATTDescriptor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;BluetoothRemoteGATTServer = newFunc('BluetoothRemoteGATTServer', 1, function () {
    print('BluetoothRemoteGATTServer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BluetoothRemoteGATTServer.prototype, {
    device: {

        get: newFunc('device', 10, function () {
            let res = mm.memory.private_data.get(this).device;
            if (debug) print('BluetoothRemoteGATTServer.device.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    connected: {

        get: newFunc('connected', 10, function () {
            let res = mm.memory.private_data.get(this).connected;
            if (debug) print('BluetoothRemoteGATTServer.connected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    connect: {

        value: newFunc('connect', 10, function () {
            if (debug) print('BluetoothRemoteGATTServer.connect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    disconnect: {

        value: newFunc('disconnect', 10, function () {
            if (debug) print('BluetoothRemoteGATTServer.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getPrimaryService: {

        value: newFunc('getPrimaryService', 10, function () {
            if (debug) print('BluetoothRemoteGATTServer.getPrimaryService.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getPrimaryServices: {

        value: newFunc('getPrimaryServices', 10, function () {
            if (debug) print('BluetoothRemoteGATTServer.getPrimaryServices.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BluetoothRemoteGATTServer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;BluetoothRemoteGATTService = newFunc('BluetoothRemoteGATTService', 1, function () {
    print('BluetoothRemoteGATTService.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BluetoothRemoteGATTService.prototype, {
    device: {

        get: newFunc('device', 10, function () {
            let res = mm.memory.private_data.get(this).device;
            if (debug) print('BluetoothRemoteGATTService.device.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    uuid: {

        get: newFunc('uuid', 10, function () {
            let res = mm.memory.private_data.get(this).uuid;
            if (debug) print('BluetoothRemoteGATTService.uuid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isPrimary: {

        get: newFunc('isPrimary', 10, function () {
            let res = mm.memory.private_data.get(this).isPrimary;
            if (debug) print('BluetoothRemoteGATTService.isPrimary.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getCharacteristic: {

        value: newFunc('getCharacteristic', 10, function () {
            if (debug) print('BluetoothRemoteGATTService.getCharacteristic.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getCharacteristics: {

        value: newFunc('getCharacteristics', 10, function () {
            if (debug) print('BluetoothRemoteGATTService.getCharacteristics.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BluetoothRemoteGATTService.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});