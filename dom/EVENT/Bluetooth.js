USB = newFunc('USB', 0, function () {
    mm.memory.private_data.set(this, {
        onconnect: null, ondisconnect: null,
    })
})


Object.defineProperties(USB.prototype, {
    [Symbol.toStringTag]: {
        value: 'USB'
    },

    'onconnect': {

        get: newFunc('onconnect', 10, function () {


            if (!USB.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onconnect'];
            if (debug) print('USB.onconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnect', 1, function (value) {
            if (debug) print('USB.onconnect.set', value)
            mm.memory.private_data.get(this)['onconnect'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'ondisconnect': {

        get: newFunc('ondisconnect', 10, function () {


            if (!USB.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ondisconnect'];
            if (debug) print('USB.ondisconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondisconnect', 1, function (value) {
            if (debug) print('USB.ondisconnect.set', value)
            mm.memory.private_data.get(this)['ondisconnect'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'getDevices': {

        value: newFunc('getDevices', 10, function () {

            if (!USB.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('USB.getDevices.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!USB.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('USB.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'requestDevice': {

        value: newFunc('requestDevice', 10, function () {

            if (!USB.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('USB.requestDevice.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})


Bluetooth = newFunc('Bluetooth', 1, function () {
    print('Bluetooth.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Bluetooth.prototype, {
    [Symbol.toStringTag]: {
        value: 'Bluetooth'
    },

    'getAvailability': {

        value: newFunc('getAvailability', 10, function () {

            if (!Bluetooth.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Bluetooth.getAvailability.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'requestDevice': {

        value: newFunc('requestDevice', 10, function () {

            if (!Bluetooth.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Bluetooth.requestDevice.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Bluetooth.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Bluetooth.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


BluetoothDevice = newFunc('BluetoothDevice', 1, function () {
    print('BluetoothDevice.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BluetoothDevice.prototype, {
    [Symbol.toStringTag]: {
        value: 'BluetoothDevice'
    },

    'id': {

        get: newFunc('id', 10, function () {


            if (!BluetoothDevice.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['id'];
            if (debug) print('BluetoothDevice.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'name': {

        get: newFunc('name', 10, function () {


            if (!BluetoothDevice.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['name'];
            if (debug) print('BluetoothDevice.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'gatt': {

        get: newFunc('gatt', 10, function () {


            if (!BluetoothDevice.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['gatt'];
            if (debug) print('BluetoothDevice.gatt.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'ongattserverdisconnected': {

        get: newFunc('ongattserverdisconnected', 10, function () {


            if (!BluetoothDevice.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ongattserverdisconnected'];
            if (debug) print('BluetoothDevice.ongattserverdisconnected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ongattserverdisconnected', 1, function (value) {
            if (debug) print('BluetoothDevice.ongattserverdisconnected.set', value)
            mm.memory.private_data.get(this)['ongattserverdisconnected'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!BluetoothDevice.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BluetoothDevice.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
BluetoothUUID = newFunc('BluetoothUUID', 1, function () {
    print('BluetoothUUID.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BluetoothUUID.prototype, {
    [Symbol.toStringTag]: {
        value: 'BluetoothUUID'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!BluetoothUUID.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('BluetoothUUID.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Clipboard = newFunc('Clipboard', 1, function () {
    print('Clipboard.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Clipboard.prototype, {
    [Symbol.toStringTag]: {
        value: 'Clipboard'
    },

    'read': {

        value: newFunc('read', 10, function () {

            if (!Clipboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Clipboard.read.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'readText': {

        value: newFunc('readText', 10, function () {

            if (!Clipboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Clipboard.readText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'write': {

        value: newFunc('write', 10, function () {

            if (!Clipboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Clipboard.write.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'writeText': {

        value: newFunc('writeText', 10, function () {

            if (!Clipboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Clipboard.writeText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Clipboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Clipboard.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

CredentialsContainer = newFunc('CredentialsContainer', 1, function () {
    print('CredentialsContainer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CredentialsContainer.prototype, {
    [Symbol.toStringTag]: {
        value: 'CredentialsContainer'
    },

    'create': {

        value: newFunc('create', 10, function () {

            if (!CredentialsContainer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CredentialsContainer.create.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'get': {

        value: newFunc('get', 10, function () {

            if (!CredentialsContainer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CredentialsContainer.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'preventSilentAccess': {

        value: newFunc('preventSilentAccess', 10, function () {

            if (!CredentialsContainer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CredentialsContainer.preventSilentAccess.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'store': {

        value: newFunc('store', 10, function () {

            if (!CredentialsContainer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CredentialsContainer.store.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!CredentialsContainer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CredentialsContainer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Keyboard = newFunc('Keyboard', 1, function () {
    print('Keyboard.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Keyboard.prototype, {
    [Symbol.toStringTag]: {
        value: 'Keyboard'
    },

    'getLayoutMap': {

        value: newFunc('getLayoutMap', 10, function () {

            if (!Keyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Keyboard.getLayoutMap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'lock': {

        value: newFunc('lock', 10, function () {

            if (!Keyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Keyboard.lock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'unlock': {

        value: newFunc('unlock', 10, function () {

            if (!Keyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Keyboard.unlock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Keyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Keyboard.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


NavigatorManagedData = newFunc('NavigatorManagedData', 1, function () {
    print('NavigatorManagedData.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(NavigatorManagedData.prototype, {
    [Symbol.toStringTag]: {
        value: 'NavigatorManagedData'
    },

    'onmanagedconfigurationchange': {

        get: newFunc('onmanagedconfigurationchange', 10, function () {


            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onmanagedconfigurationchange'];
            if (debug) print('NavigatorManagedData.onmanagedconfigurationchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmanagedconfigurationchange', 1, function (value) {
            if (debug) print('NavigatorManagedData.onmanagedconfigurationchange.set', value)
            mm.memory.private_data.get(this)['onmanagedconfigurationchange'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'getManagedConfiguration': {

        value: newFunc('getManagedConfiguration', 10, function () {

            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('NavigatorManagedData.getManagedConfiguration.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!NavigatorManagedData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('NavigatorManagedData.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

MediaDeviceInfo = newFunc('MediaDeviceInfo', 1, function MediaDeviceInfo(opt) {
    mm.memory.private_data.set(this, opt)
})


;delete MediaDeviceInfo.prototype.constructor;
;
Object.defineProperties(MediaDeviceInfo.prototype, {
    [Symbol.toStringTag]: {
        value: 'MediaDeviceInfo'
    },

    'deviceId': {

        get: newFunc('deviceId', 10, function () {


            if (!MediaDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['deviceId'];
            if (debug) print('MediaDeviceInfo.deviceId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'kind': {

        get: newFunc('kind', 10, function () {


            if (!MediaDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['kind'];
            if (debug) print('MediaDeviceInfo.kind.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'label': {

        get: newFunc('label', 10, function () {


            if (!MediaDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['label'];
            if (debug) print('MediaDeviceInfo.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'groupId': {

        get: newFunc('groupId', 10, function () {


            if (!MediaDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['groupId'];
            if (debug) print('MediaDeviceInfo.groupId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'toJSON': {

        value: newFunc('toJSON', 10, function () {

            if (!MediaDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MediaDeviceInfo.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!MediaDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('MediaDeviceInfo.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
MediaDevices = newFunc('MediaDevices', 1, function MediaDevices() {
    mm.memory.private_data.set(this, {
        ondevicechange: null
    })
})


Object.defineProperties(MediaDevices.prototype, {
    enumerateDevices: {

        value: newFunc('enumerateDevices', 10, function enumerateDevices() {
            if (debug) print('MediaDevices.enumerateDevices.call', arguments)

            return {
                then: function (f) {
                    // debugger;
                    f([])
                }
            }

            // return {
            //     then: function (){
            //         return [
            //         new Proxy(new InputDeviceInfo({kind: 'audioinput'}), {
            //             get(target, p, receiver) {
            //                 console.log('device.get', p)
            //                 return Reflect.get(target,p, receiver)
            //             }
            //         }),
            //         new InputDeviceInfo({kind: 'audioinput'}),
            //     ]
            //     }
            // }
            // throw new Error('')
            // return new Promise((resolve, reject) => {
            //     resolve([
            //         // new Proxy(new MediaDeviceInfo({kind: 'audioinput'}), {
            //         //     get(target, p, receiver) {
            //         //         console.log('device.get', p)
            //         //         return Reflect.get(target, p, receiver)
            //         //     }
            //         // }),
            //         // new MediaDeviceInfo({kind: 'audioinput'}),
            //     ])
            // })
        }), writable: true, enumerable: true, configurable: true,


    },
    getSupportedConstraints: {

        value: newFunc('getSupportedConstraints', 10, function getSupportedConstraints() {
            if (debug) print('MediaDevices.getSupportedConstraints.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, getUserMedia: {

        value: newFunc('getUserMedia', 10, function getUserMedia() {
            if (debug) print('MediaDevices.getUserMedia.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, ondevicechange: {

        get: newFunc('ondevicechange', 10, function ondevicechange() {
            let res = mm.memory.private_data.get(this).ondevicechange;
            if (debug) print('MediaDevices.ondevicechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondevicechange', 1, function ondevicechange(value) {
            if (debug) print('MediaDevices.ondevicechange.set', value)
            mm.memory.private_data.get(this).ondevicechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, getDisplayMedia: {

        value: newFunc('getDisplayMedia', 10, function getDisplayMedia() {
            if (debug) print('MediaDevices.getDisplayMedia.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, setCaptureHandleConfig: {

        value: newFunc('setCaptureHandleConfig', 10, function setCaptureHandleConfig() {
            if (debug) print('MediaDevices.setCaptureHandleConfig.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!MediaDevices.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('MediaDevices.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
ServiceWorker = newFunc('ServiceWorker', 2, function ServiceWorker(scriptURL, state) {
    mm.memory.private_data.set(this, {
        onerror: null, onstatechange: null, scriptURL: scriptURL, state: state,
    })
})


Object.defineProperties(ServiceWorker.prototype, {
    scriptURL: {

        get: newFunc('scriptURL', 10, function scriptURL() {
            let res = mm.memory.private_data.get(this).scriptURL;
            if (debug) print('ServiceWorker.scriptURL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, state: {

        get: newFunc('state', 10, function state() {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('ServiceWorker.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, onstatechange: {

        get: newFunc('onstatechange', 10, function onstatechange() {
            let res = mm.memory.private_data.get(this).onstatechange;
            if (debug) print('ServiceWorker.onstatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstatechange', 1, function onstatechange(value) {
            if (debug) print('ServiceWorker.onstatechange.set', value)
            mm.memory.private_data.get(this).onstatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, postMessage: {

        value: newFunc('postMessage', 10, function postMessage() {
            if (debug) print('ServiceWorker.postMessage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('ServiceWorker.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    }, onerror: {

        get: newFunc('onerror', 10, function onerror() {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('ServiceWorker.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('ServiceWorker.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
})

ServiceWorkerContainer = newFunc('ServiceWorkerContainer', 1, function ServiceWorkerContainer() {
    mm.memory.private_data.set(this, {
        controller: new ServiceWorker("https://www.xiaohongshu.com/web-static/sw.js", 'activated'),
    })
})


Object.defineProperties(ServiceWorkerContainer.prototype, {
    controller: {

        get: newFunc('controller', 10, function controller() {
            let res = mm.memory.private_data.get(this).controller;
            if (debug) print('ServiceWorkerContainer.controller.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, ready: {

        get: newFunc('ready', 10, function ready() {
            let res = mm.memory.private_data.get(this).ready;
            if (debug) print('ServiceWorkerContainer.ready.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, oncontrollerchange: {

        get: newFunc('oncontrollerchange', 10, function oncontrollerchange() {
            let res = mm.memory.private_data.get(this).oncontrollerchange;
            if (debug) print('ServiceWorkerContainer.oncontrollerchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontrollerchange', 1, function oncontrollerchange(value) {
            if (debug) print('ServiceWorkerContainer.oncontrollerchange.set', value)
            mm.memory.private_data.get(this).oncontrollerchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmessage: {

        get: newFunc('onmessage', 10, function onmessage() {
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('ServiceWorkerContainer.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function onmessage(value) {
            if (debug) print('ServiceWorkerContainer.onmessage.set', value)
            mm.memory.private_data.get(this).onmessage = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmessageerror: {

        get: newFunc('onmessageerror', 10, function onmessageerror() {
            let res = mm.memory.private_data.get(this).onmessageerror;
            if (debug) print('ServiceWorkerContainer.onmessageerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessageerror', 1, function onmessageerror(value) {
            if (debug) print('ServiceWorkerContainer.onmessageerror.set', value)
            mm.memory.private_data.get(this).onmessageerror = value

        }, {set: true}), enumerable: true, configurable: true,


    }, getRegistration: {

        value: newFunc('getRegistration', 10, function getRegistration() {
            if (debug) print('ServiceWorkerContainer.getRegistration.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, getRegistrations: {

        value: newFunc('getRegistrations', 10, function getRegistrations() {
            if (debug) print('ServiceWorkerContainer.getRegistrations.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, register: {

        value: newFunc('register', 10, function register() {
            if (debug) print('ServiceWorkerContainer.register.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, startMessages: {

        value: newFunc('startMessages', 10, function startMessages() {
            if (debug) print('ServiceWorkerContainer.startMessages.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('ServiceWorkerContainer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
VirtualKeyboard = newFunc('VirtualKeyboard', 1, function () {
    print('VirtualKeyboard.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VirtualKeyboard.prototype, {
    [Symbol.toStringTag]: {
        value: 'VirtualKeyboard'
    },

    'boundingRect': {

        get: newFunc('boundingRect', 10, function () {


            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['boundingRect'];
            if (debug) print('VirtualKeyboard.boundingRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'overlaysContent': {

        get: newFunc('overlaysContent', 10, function () {


            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['overlaysContent'];
            if (debug) print('VirtualKeyboard.overlaysContent.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('overlaysContent', 1, function (value) {
            if (debug) print('VirtualKeyboard.overlaysContent.set', value)
            mm.memory.private_data.get(this)['overlaysContent'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'ongeometrychange': {

        get: newFunc('ongeometrychange', 10, function () {


            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ongeometrychange'];
            if (debug) print('VirtualKeyboard.ongeometrychange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ongeometrychange', 1, function (value) {
            if (debug) print('VirtualKeyboard.ongeometrychange.set', value)
            mm.memory.private_data.get(this)['ongeometrychange'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'hide': {

        value: newFunc('hide', 10, function () {

            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('VirtualKeyboard.hide.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'show': {

        value: newFunc('show', 10, function () {

            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('VirtualKeyboard.show.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!VirtualKeyboard.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('VirtualKeyboard.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


WakeLock = newFunc('WakeLock', 1, function WakeLock() {
})


Object.defineProperties(WakeLock.prototype, {
    request: {

        value: newFunc('request', 10, function request() {
            if (debug) print('WakeLock.request.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('WakeLock.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Geolocation = newFunc('Geolocation', 1, function () {
    print('Geolocation.call');
    mm.memory.private_data.set(this, {})
});


;delete Geolocation.prototype.constructor;
;
Object.defineProperties(Geolocation.prototype, {
    [Symbol.toStringTag]: {
        value: 'Geolocation'
    },

    'clearWatch': {

        value: newFunc('clearWatch', 10, function () {

            if (!Geolocation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Geolocation.clearWatch.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'getCurrentPosition': {

        value: newFunc('getCurrentPosition', 10, function () {

            if (!Geolocation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Geolocation.getCurrentPosition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'watchPosition': {

        value: newFunc('watchPosition', 10, function () {

            if (!Geolocation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Geolocation.watchPosition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Geolocation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Geolocation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

HID = newFunc('HID', 1, function HID() {
    mm.memory.private_data.set(this, {
        onconnect: null, ondisconnect: null
    })
})


Object.defineProperties(HID.prototype, {
    onconnect: {

        get: newFunc('onconnect', 10, function onconnect() {
            let res = mm.memory.private_data.get(this).onconnect;
            if (debug) print('HID.onconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnect', 1, function onconnect(value) {
            if (debug) print('HID.onconnect.set', value)
            mm.memory.private_data.get(this).onconnect = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondisconnect: {

        get: newFunc('ondisconnect', 10, function ondisconnect() {
            let res = mm.memory.private_data.get(this).ondisconnect;
            if (debug) print('HID.ondisconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondisconnect', 1, function ondisconnect(value) {
            if (debug) print('HID.ondisconnect.set', value)
            mm.memory.private_data.get(this).ondisconnect = value

        }, {set: true}), enumerable: true, configurable: true,


    }, getDevices: {

        value: newFunc('getDevices', 10, function getDevices() {
            if (debug) print('HID.getDevices.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HID.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    }, requestDevice: {

        value: newFunc('requestDevice', 10, function requestDevice() {
            if (debug) print('HID.requestDevice.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})

Ink = newFunc('Ink', 1, function Ink() {
})


Object.defineProperties(Ink.prototype, {
    requestPresenter: {

        value: newFunc('requestPresenter', 10, function requestPresenter() {
            if (debug) print('Ink.requestPresenter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('Ink.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


LockManager = newFunc('LockManager', 1, function LockManager() {
})


Object.defineProperties(LockManager.prototype, {
    query: {

        value: newFunc('query', 10, function query() {
            if (debug) print('LockManager.query.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, request: {

        value: newFunc('request', 10, function request() {
            if (debug) print('LockManager.request.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('LockManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


MediaCapabilities = newFunc('MediaCapabilities', 1, function MediaCapabilities() {
})


Object.defineProperties(MediaCapabilities.prototype, {
    decodingInfo: {

        value: newFunc('decodingInfo', 10, function decodingInfo() {
            if (debug) print('MediaCapabilities.decodingInfo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, encodingInfo: {

        value: newFunc('encodingInfo', 10, function encodingInfo() {
            if (debug) print('MediaCapabilities.encodingInfo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('MediaCapabilities.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

MediaSession = newFunc('MediaSession', 1, function MediaSession() {
    mm.memory.private_data.set(this, {

        metadata: null, playbackState: "none",
    })
})


Object.defineProperties(MediaSession.prototype, {
    metadata: {

        get: newFunc('metadata', 10, function metadata() {
            let res = mm.memory.private_data.get(this).metadata;
            if (debug) print('MediaSession.metadata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('metadata', 1, function metadata(value) {
            if (debug) print('MediaSession.metadata.set', value)
            mm.memory.private_data.get(this).metadata = value

        }, {set: true}), enumerable: true, configurable: true,


    }, playbackState: {

        get: newFunc('playbackState', 10, function playbackState() {
            let res = mm.memory.private_data.get(this).playbackState;
            if (debug) print('MediaSession.playbackState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('playbackState', 1, function playbackState(value) {
            if (debug) print('MediaSession.playbackState.set', value)
            mm.memory.private_data.get(this).playbackState = value

        }, {set: true}), enumerable: true, configurable: true,


    }, setActionHandler: {

        value: newFunc('setActionHandler', 10, function setActionHandler() {
            if (debug) print('MediaSession.setActionHandler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, setCameraActive: {

        value: newFunc('setCameraActive', 10, function setCameraActive() {
            if (debug) print('MediaSession.setCameraActive.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, setMicrophoneActive: {

        value: newFunc('setMicrophoneActive', 10, function setMicrophoneActive() {
            if (debug) print('MediaSession.setMicrophoneActive.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, setPositionState: {

        value: newFunc('setPositionState', 10, function setPositionState() {
            if (debug) print('MediaSession.setPositionState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('MediaSession.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


XRSystem = newFunc('XRSystem', 1, function XRSystem() {
    mm.memory.private_data.set(this, {
        ondevicechange: null
    })
})


Object.defineProperties(XRSystem.prototype, {
    [Symbol.toStringTag]: {value: 'XRSystem'},
    ondevicechange: {

        get: newFunc('ondevicechange', 10, function ondevicechange() {
            let res = mm.memory.private_data.get(this).ondevicechange;
            if (debug) print('XRSystem.ondevicechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondevicechange', 1, function ondevicechange(value) {
            if (debug) print('XRSystem.ondevicechange.set', value)
            mm.memory.private_data.get(this).ondevicechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, isSessionSupported: {

        value: newFunc('isSessionSupported', 10, function isSessionSupported() {
            if (debug) print('XRSystem.isSessionSupported.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, requestSession: {

        value: newFunc('requestSession', 10, function requestSession() {
            if (debug) print('XRSystem.requestSession.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, supportsSession: {

        value: newFunc('supportsSession', 10, function supportsSession() {
            if (debug) print('XRSystem.supportsSession.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('XRSystem.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Permissions = newFunc('Permissions', 1, function Permissions() {
})

function native_query(method, url, async) {
    if (debug) print('Permissions.query.call', method, url, async)

    // value: (method, url, async) =>{
    if (!(this instanceof Permissions)) {
        return new Promise((resolve, reject) => {
            reject(new TypeError('Failed to execute \'query\' on \'Permissions\': Illegal invocation'))
        })
    }
    return new Promise((resolve, reject) => {
        if (method === undefined) {
            reject(new Error('TypeError: Failed to execute \'query\' on \'Permissions\': 1 argument required, but only 0 present.'))

        } else {
            resolve(new PermissionStatus({
                name: method.name,
                state: 'prompt'
            }))
        }

    })
}

Utils.registerNative('query', 'query')

Object.defineProperties(Permissions.prototype, {
    query: {

        value: window['query'], writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('Permissions.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Presentation = newFunc('Presentation', 1, function Presentation() {
    mm.memory.private_data.set(this, {
        defaultRequest: null, receiver: null
    })
})


Object.defineProperties(Presentation.prototype, {
    defaultRequest: {

        get: newFunc('defaultRequest', 10, function defaultRequest() {
            let res = mm.memory.private_data.get(this).defaultRequest;
            if (debug) print('Presentation.defaultRequest.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defaultRequest', 1, function defaultRequest(value) {
            if (debug) print('Presentation.defaultRequest.set', value)
            mm.memory.private_data.get(this).defaultRequest = value

        }, {set: true}), enumerable: true, configurable: true,


    }, receiver: {

        get: newFunc('receiver', 10, function receiver() {
            let res = mm.memory.private_data.get(this).receiver;
            if (debug) print('Presentation.receiver.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('Presentation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Scheduling = newFunc('Scheduling', 1, function Scheduling() {
})


Object.defineProperties(Scheduling.prototype, {
    isInputPending: {

        value: newFunc('isInputPending', 10, function isInputPending() {
            if (debug) print('Scheduling.isInputPending.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('Scheduling.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    [Symbol.toStringTag]: {
        value: 'Scheduling'
    }
})
Serial = newFunc('Serial', 1, function Serial() {
    print('Serial.call');
    mm.memory.private_data.set(this, {
        onconnect: null, ondisconnect: null,
    })
})


Object.defineProperties(Serial.prototype, {
    [Symbol.toStringTag]: {
        value: 'Serial'
    },

    'onconnect': {

        get: newFunc('onconnect', 10, function () {


            if (!Serial.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onconnect'];
            if (debug) print('Serial.onconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnect', 1, function (value) {
            if (debug) print('Serial.onconnect.set', value)
            mm.memory.private_data.get(this)['onconnect'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'ondisconnect': {

        get: newFunc('ondisconnect', 10, function () {


            if (!Serial.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ondisconnect'];
            if (debug) print('Serial.ondisconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondisconnect', 1, function (value) {
            if (debug) print('Serial.ondisconnect.set', value)
            mm.memory.private_data.get(this)['ondisconnect'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'getPorts': {

        value: newFunc('getPorts', 10, function () {

            if (!Serial.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Serial.getPorts.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Serial.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Serial.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    'requestPort': {

        value: newFunc('requestPort', 10, function () {

            if (!Serial.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Serial.requestPort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})


UserActivation = newFunc('UserActivation', 1, function UserActivation() {
    mm.memory.private_data.set(this, {
        hasBeenActive: false, isActive: false
    })
})


Object.defineProperties(UserActivation.prototype, {
    hasBeenActive: {

        get: newFunc('hasBeenActive', 10, function hasBeenActive() {
            let res = mm.memory.private_data.get(this).hasBeenActive;
            if (debug) print('UserActivation.hasBeenActive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, isActive: {

        get: newFunc('isActive', 10, function isActive() {
            let res = mm.memory.private_data.get(this).isActive;
            if (debug) print('UserActivation.isActive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('UserActivation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


InputDeviceInfo = newFunc('InputDeviceInfo', 1, function (arg) {
    print('InputDeviceInfo.call');
    mm.memory.private_data.set(this, arg)
})


Object.defineProperties(InputDeviceInfo.prototype, {
    [Symbol.toStringTag]: {
        value: 'InputDeviceInfo'
    },

    'getCapabilities': {

        value: newFunc('getCapabilities', 10, function () {

            if (!InputDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('InputDeviceInfo.getCapabilities.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!InputDeviceInfo.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('InputDeviceInfo.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


IntersectionObserverEntry = newFunc('IntersectionObserverEntry', 1, function IntersectionObserverEntry(opt) {
    print('IntersectionObserverEntry.call');
    mm.memory.private_data.set(this, opt)
})


Object.defineProperties(IntersectionObserverEntry.prototype, {
    [Symbol.toStringTag]: {
        value: 'IntersectionObserverEntry'
    },

    'time': {

        get: newFunc('time', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['time'];
            if (debug) print('IntersectionObserverEntry.time.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'rootBounds': {

        get: newFunc('rootBounds', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['rootBounds'];
            if (debug) print('IntersectionObserverEntry.rootBounds.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'boundingClientRect': {

        get: newFunc('boundingClientRect', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['boundingClientRect'];
            if (debug) print('IntersectionObserverEntry.boundingClientRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'intersectionRect': {

        get: newFunc('intersectionRect', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['intersectionRect'];
            if (debug) print('IntersectionObserverEntry.intersectionRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'isIntersecting': {

        get: newFunc('isIntersecting', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['isIntersecting'];
            if (debug) print('IntersectionObserverEntry.isIntersecting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'isVisible': {

        get: newFunc('isVisible', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['isVisible'];
            if (debug) print('IntersectionObserverEntry.isVisible.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'intersectionRatio': {

        get: newFunc('intersectionRatio', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['intersectionRatio'];
            if (debug) print('IntersectionObserverEntry.intersectionRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'target': {

        get: newFunc('target', 10, function () {


            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['target'];
            if (debug) print('IntersectionObserverEntry.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!IntersectionObserverEntry.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IntersectionObserverEntry.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

IntersectionObserver = newFunc('IntersectionObserver', 1, function IntersectionObserver(func, opt) {
    print('new IntersectionObserver', func, opt)
    mm.memory.private_data.set(this, {})

    func([
        new IntersectionObserverEntry({
            isVisible: false,
            isIntersecting: true,
        })
    ])
})


;delete IntersectionObserver.prototype.constructor;
;
Object.defineProperties(IntersectionObserver.prototype, {
    [Symbol.toStringTag]: {
        value: 'IntersectionObserver'
    },

    'root': {

        get: newFunc('root', 10, function () {


            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['root'];
            if (debug) print('IntersectionObserver.root.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'rootMargin': {

        get: newFunc('rootMargin', 10, function () {


            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['rootMargin'];
            if (debug) print('IntersectionObserver.rootMargin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'thresholds': {

        get: newFunc('thresholds', 10, function () {


            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['thresholds'];
            if (debug) print('IntersectionObserver.thresholds.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'delay': {

        get: newFunc('delay', 10, function () {


            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['delay'];
            if (debug) print('IntersectionObserver.delay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'trackVisibility': {

        get: newFunc('trackVisibility', 10, function () {


            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['trackVisibility'];
            if (debug) print('IntersectionObserver.trackVisibility.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'disconnect': {

        value: newFunc('disconnect', 10, function () {

            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IntersectionObserver.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'observe': {

        value: newFunc('observe', 10, function () {

            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IntersectionObserver.observe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'takeRecords': {

        value: newFunc('takeRecords', 10, function () {

            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IntersectionObserver.takeRecords.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'unobserve': {

        value: newFunc('unobserve', 10, function () {

            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IntersectionObserver.unobserve.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'scrollMargin': {

        get: newFunc('scrollMargin', 10, function () {


            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['scrollMargin'];
            if (debug) print('IntersectionObserver.scrollMargin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!IntersectionObserver.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('IntersectionObserver.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


