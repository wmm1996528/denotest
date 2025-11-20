
// import cyb, {createAll, newFunc} from "cyb";
DeprecatedStorageQuota = newFunc('DeprecatedStorageQuota', 10, function DeprecatedStorageQuota() {
    // throw new TypeError("Illegal invocation");

})
;(function () {
    const $safe_get_attribute = [];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['queryUsageAndQuota', 'requestQuota'];

    DeprecatedStorageQuota.prototype = {
        queryUsageAndQuota() {
            if (!DeprecatedStorageQuota.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'DeprecatedStorageQuota', 'queryUsageAndQuota', arguments, result);
            return result;
        },
        requestQuota() {
            if (!DeprecatedStorageQuota.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'DeprecatedStorageQuota', 'requestQuota', arguments, result);
            return result;
        },
    }
    // mm.rename(DeprecatedStorageQuota.prototype, "DeprecatedStorageQuota");
    // mm.safeDescriptor_addConstructor(DeprecatedStorageQuota);
    mm.safe_Objattribute(DeprecatedStorageQuota, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();
NavigatorUAData = newFunc('NavigatorUAData', 1, function NavigatorUAData() {

})


Object.defineProperties(NavigatorUAData.prototype, {
    brands: {

        get: newFunc('brands', 10, function brands() {
            if (debug) print('NavigatorUAData.brands.get')
            return ENV.useragentdata.brands
        }, {get: true}), enumerable: true, configurable: true,

    },
    mobile: {

        get: newFunc('mobile', 10, function mobile() {
            if (debug) print('NavigatorUAData.mobile.get')
            return ENV.useragentdata.mobile
        }, {get: true}), enumerable: true, configurable: true,

    },
    platform: {

        get: newFunc('platform', 10, function platform() {
            if (debug) print('NavigatorUAData.platform.get')
            return ENV.useragentdata.platform
        }, {get: true}), enumerable: true, configurable: true,

    },
    getHighEntropyValues: {

        value: newFunc('getHighEntropyValues', 10, function getHighEntropyValues(e) {
            let r= {

            };
            for (let i = 0; i < e.length; i++) {
                switch (e[i]) {
                case 'architecture':
                    r["architecture"] =  ENV.useragentdata.highvalue[e[i]]
                    break;
                case 'bitness':
                    r["bitness"] =  ENV.useragentdata.highvalue[e[i]]
                    r["brands"] =     ENV.useragentdata.brands
                    break;
                case 'brands':
                    break;
                case 'mobile':
                    break;
                case 'model':
                     r["mobile"] = ENV.useragentdata.mobile
                    r["model"]=  ENV.useragentdata.highvalue[e[i]]
                    r["platform"] = ENV.useragentdata.platform
                    break;
                case 'platform':
                    break;
                case 'platformVersion':
                    r["platformVersion"] = ENV.useragentdata.highvalue[e[i]]
                    break;
                case 'uaFullVersion':
                    r["uaFullVersion"] = ENV.useragentdata.highvalue[e[i]]
                    break;
                case 'wow64':
                    r['wow64'] = ENV.useragentdata.highvalue[e[i]]
                case 'fullVersionList':
                    r['fullVersionList'] = ENV.useragentdata.highvalue[e[i]]
                    break;


            }
            }
            // r =
            if (debug) print('NavigatorUAData.getHighEntropyValues.call', arguments, r)

            // print('getHighEntropyValues', e, r)

            return new Promise((resolve, reject) => {

                resolve(r)
            });

        }), writable: true, enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function toJSON() {
            if (debug) print('NavigatorUAData.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!NavigatorUAData.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('NavigatorUAData.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
// =====================================================================

// Navigator = newFunc('Navigator', 1, function Navigator(aaa) {
//     if (aaa !== 'aaa') {
//         throw new TypeError("Illegal invocation");
//
//     }
//
// })

Navigator = newFunc('Navigator', 1, function Navigator() {
    let $attribute_map = {
        appCodeName: ENV.navigatorparams.appcodename,
        appName: ENV.navigatorparams.appname,
        appVersion: ENV.navigatorparams.appversion,
        bluetooth: new Bluetooth(mm.memory.$createObj_key),
        clipboard: new Clipboard(mm.memory.$createObj_key),
        connection: new NetworkInformation(),
        cookieEnabled: true,
        credentials: new CredentialsContainer(mm.memory.$createObj_key),
        deviceMemory: 8,
        doNotTrack: null,
        geolocation: new Geolocation(mm.memory.$createObj_key),
        hardwareConcurrency: ENV.navigatorparams.hardwareconcurrency,
        hid: new HID(mm.memory.$createObj_key),
        ink: new Ink(mm.memory.$createObj_key),
        keyboard: new Keyboard(mm.memory.$createObj_key),
        language: "en",
        languages: ['en'],
        locks: new LockManager(mm.memory.$createObj_key),
        managed: new NavigatorManagedData(mm.memory.$createObj_key),
        maxTouchPoints: 0,
        mediaCapabilities: new MediaCapabilities(mm.memory.$createObj_key),
        mediaDevices: new MediaDevices(mm.memory.$createObj_key),
        mediaSession: new MediaSession(mm.memory.$createObj_key),
        // mimeTypes: mm.memory.mimeTypeArray.instantiate,
        onLine: true,
        pdfViewerEnabled: true,
        permissions: new Permissions(mm.memory.$createObj_key),
        platform: ENV.navigatorparams.platform,
        // plugins: mm.memory.pluginArray.instantiate,
        presentation: new Presentation(mm.memory.$createObj_key),
        product: ENV.navigatorparams.product,
        productSub: ENV.navigatorparams.productsub,
        scheduling: new Scheduling(mm.memory.$createObj_key),
        serial: new Serial(mm.memory.$createObj_key),
        serviceWorker: new ServiceWorkerContainer(mm.memory.$createObj_key),
        storage: new StorageManager(mm.memory.$createObj_key),
        usb: new USB(mm.memory.$createObj_key),
        userActivation: new UserActivation(mm.memory.$createObj_key),
        userAgent: ENV.navigatorparams.useragent,
        userAgentData: new NavigatorUAData(),
        vendor: ENV.navigatorparams.vendor,
        vendorSub: ENV.navigatorparams.vendorsub,
        virtualKeyboard: new VirtualKeyboard(mm.memory.$createObj_key),
        wakeLock: new WakeLock(mm.memory.$createObj_key),
        webdriver: false,
        webkitPersistentStorage: new DeprecatedStorageQuota(mm.memory.$createObj_key),
        webkitTemporaryStorage: new DeprecatedStorageQuota(mm.memory.$createObj_key),
        xr: new XRSystem(mm.memory.$createObj_key),
        gpu: new GPU()

    };

    mm.memory.private_data.set(this, $attribute_map)
})
window['native_get plugins'] = function plugins() {
    if (!Navigator.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal invocation");
    }
    // ;
    let result = pluginArrays;
    if (debug) print('Get', 'Navigator', 'plugins', arguments, result);
    return result;
}
Utils.registerNative('get plugins', 'get plugins')
window['native_get mimeTypes'] = function () {
    if (!Navigator.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal invocation");
    }
    // ;
    let result = mimeArrays;
    if (debug) print('Get', 'Navigator', 'mimeTypes', arguments, result);
    return result;
}
Utils.registerNative('get mimeTypes', 'get mimeTypes')

window['native_get userAgent'] = function () {
    if (!Navigator.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal invocation");
    }
    ;
    let result = mm.memory.private_data.get(this).userAgent;
    if (debug) print('Get', 'Navigator', 'userAgent', arguments, result);
    return result;
}
Utils.registerNative('get userAgent', 'get userAgent')


delete Navigator.prototype.constructor
Object.defineProperties(Navigator.prototype, {
    vendorSub: {

        get: newFunc('vendorSub', 10, function vendorSub() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).vendorSub;
            if (debug) print('Navigator.vendorSub.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    productSub: {

        get: newFunc('productSub', 10, function productSub() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).productSub;
            if (debug) print('Navigator.productSub.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    vendor: {

        get: newFunc('vendor', 10, function vendor() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).vendor;
            if (debug) print('Navigator.vendor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxTouchPoints: {

        get: newFunc('maxTouchPoints', 10, function maxTouchPoints() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).maxTouchPoints;
            if (debug) print('Navigator.maxTouchPoints.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    scheduling: {

        get: newFunc('scheduling', 10, function scheduling() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).scheduling;
            if (debug) print('Navigator.scheduling.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    userActivation: {

        get: newFunc('userActivation', 10, function userActivation() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).userActivation;
            if (debug) print('Navigator.userActivation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    doNotTrack: {

        get: newFunc('doNotTrack', 10, function doNotTrack() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).doNotTrack;
            if (debug) print('Navigator.doNotTrack.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    geolocation: {

        get: newFunc('geolocation', 10, function geolocation() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).geolocation;
            if (debug) print('Navigator.geolocation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    connection: {

        get: newFunc('connection', 10, function connection() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).connection;
            if (debug) print('Navigator.connection.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    plugins: {

        get: window['get plugins'], enumerable: true, configurable: true,

    },
    mimeTypes: {

        get: window['get mimeTypes'], enumerable: true, configurable: true,

    },
    pdfViewerEnabled: {

        get: newFunc('pdfViewerEnabled', 10, function pdfViewerEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).pdfViewerEnabled;
            if (debug) print('Navigator.pdfViewerEnabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    webkitTemporaryStorage: {

        get: newFunc('webkitTemporaryStorage', 10, function webkitTemporaryStorage() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).webkitTemporaryStorage;
            if (debug) print('Navigator.webkitTemporaryStorage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    webkitPersistentStorage: {

        get: newFunc('webkitPersistentStorage', 10, function webkitPersistentStorage() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).webkitPersistentStorage;
            if (debug) print('Navigator.webkitPersistentStorage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    windowControlsOverlay: {
        get: newFunc('windowControlsOverlay', 10, function () {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).webkitPersistentStorage;
            if (debug) print('Navigator.windowControlsOverlay.get', res)

            return res
        })
    },
    hardwareConcurrency: {

        get: newFunc('hardwareConcurrency', 10, function hardwareConcurrency() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).hardwareConcurrency;
            if (debug) print('Navigator.hardwareConcurrency.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cookieEnabled: {

        get: newFunc('cookieEnabled', 10, function cookieEnabled() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).cookieEnabled;
            if (debug) print('Navigator.cookieEnabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appCodeName: {

        get: newFunc('appCodeName', 10, function appCodeName() {


            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).appCodeName;
            if (debug) print('Navigator.appCodeName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appName: {

        get: newFunc('appName', 10, function appName() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).appName;
            if (debug) print('Navigator.appName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    appVersion: {

        get: newFunc('appVersion', 10, function appVersion() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).appVersion;
            if (debug) print('Navigator.appVersion.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    platform: {

        get: newFunc('platform', 10, function platform() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).platform;
            if (debug) print('Navigator.platform.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    product: {

        get: newFunc('product', 10, function product() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).product;
            if (debug) print('Navigator.product.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    userAgent: {

        get: window['get userAgent'], enumerable: true, configurable: true,

    },
    language: {

        get: newFunc('language', 10, function language() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).language;
            if (debug) print('Navigator.language.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    languages: {

        get: newFunc('languages', 10, function languages() {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).languages;
            if (debug) print('Navigator.languages.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onLine: {

        get: newFunc('onLine', 10, function onLine() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            let res = mm.memory.private_data.get(this).onLine;
            if (debug) print('Navigator.onLine.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    webdriver: {
        get: newFunc('get webdriver', 1, function () {
            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            return false;
        })
        // get: new Proxy(function webdriver() {
        //
        //     let res = false;
        //     if (debug) print('Navigator.webdriver.get', res)
        //     return false
        // }, {
        //     get(target, p, receiver) {
        //         console.log('webdriver.get', p)
        //         if (p === 'apply'){
        //             return function (){
        //                 // print('webdriver.get.apply', arguments)
        //                 if (!(arguments[0] instanceof  Navigator)){
        //                     throw new TypeError("Illegal invocation");
        //                 }
        //                 return false
        //             }
        //         }
        //         return Reflect.get(target,p,receiver)
        //     }
        // })

    },
    getGamepads: {

        value: newFunc('getGamepads', 10, function getGamepads() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('Navigator.getGamepads.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    javaEnabled: {

        value: newFunc('javaEnabled', 10, function javaEnabled() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('Navigator.javaEnabled.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    sendBeacon: {

        value: newFunc('sendBeacon', 10, function sendBeacon() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            if (debug) print('Navigator.sendBeacon.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vibrate: {

        value: newFunc('vibrate', 10, function vibrate() {
            if (debug) print('Navigator.vibrate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Navigator.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },

    deprecatedRunAdAuctionEnforcesKAnonymity: {

        get: newFunc('deprecatedRunAdAuctionEnforcesKAnonymity', 10, function deprecatedRunAdAuctionEnforcesKAnonymity() {
            let res = mm.memory.private_data.get(this).deprecatedRunAdAuctionEnforcesKAnonymity || false;
            if (debug) print('Navigator.deprecatedRunAdAuctionEnforcesKAnonymity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'protectedAudience': {

        get: newFunc('protectedAudience', 10, function () {


            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['protectedAudience'];
            if (debug) print('Navigator.protectedAudience.get', res)
            // debugger;
            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    bluetooth: {

        get: newFunc('bluetooth', 10, function bluetooth() {
            let res = mm.memory.private_data.get(this).bluetooth;
            if (debug) print('Navigator.bluetooth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'storageBuckets': {

        get: newFunc('storageBuckets', 10, function () {


            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['storageBuckets'];
            if (debug) print('Navigator.storageBuckets.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    clipboard: {

        get: newFunc('clipboard', 10, function clipboard() {
            let res = mm.memory.private_data.get(this).clipboard;
            if (debug) print('Navigator.clipboard.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    credentials: {

        get: newFunc('credentials', 10, function credentials() {
            let res = mm.memory.private_data.get(this).credentials;
            if (debug) print('Navigator.credentials.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    keyboard: {

        get: newFunc('keyboard', 10, function keyboard() {
            let res = mm.memory.private_data.get(this).keyboard;
            res = new Proxy(res, {
                ownKeys(target) {
                    return ['getLayoutMap', 'lock', 'unlock', 'constructor']
                }
            })
            if (debug) print('Navigator.keyboard.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    managed: {

        get: newFunc('managed', 10, function managed() {
            let res = mm.memory.private_data.get(this).managed;
            if (debug) print('Navigator.managed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mediaDevices: {

        get: newFunc('mediaDevices', 10, function mediaDevices() {
            let res = mm.memory.private_data.get(this).mediaDevices;
            if (debug) print('Navigator.mediaDevices.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    storage: {

        get: newFunc('storage', 10, function storage() {
            let res = mm.memory.private_data.get(this).storage;
            if (debug) print('Navigator.storage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    serviceWorker: {

        get: newFunc('serviceWorker', 10, function serviceWorker() {
            let res = mm.memory.private_data.get(this).serviceWorker;
            if (debug) print('Navigator.serviceWorker.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    virtualKeyboard: {

        get: newFunc('virtualKeyboard', 10, function virtualKeyboard() {
            let res = mm.memory.private_data.get(this).virtualKeyboard;
            if (debug) print('Navigator.virtualKeyboard.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    wakeLock: {

        get: newFunc('wakeLock', 10, function wakeLock() {
            let res = mm.memory.private_data.get(this).wakeLock;
            if (debug) print('Navigator.wakeLock.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deviceMemory: {

        get: newFunc('deviceMemory', 10, function deviceMemory() {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this).deviceMemory;
            if (debug) print('Navigator.deviceMemory.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    userAgentData: {

        get: newFunc('userAgentData', 10, function userAgentData() {
            let res = mm.memory.private_data.get(this).userAgentData;
            if (debug) print('Navigator.userAgentData.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    login: {

        get: newFunc('login', 10, function login() {
            let res = mm.memory.private_data.get(this).login;
            if (debug) print('Navigator.login.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ink: {

        get: newFunc('ink', 10, function ink() {
            let res = mm.memory.private_data.get(this).ink;
            if (debug) print('Navigator.ink.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mediaCapabilities: {

        get: newFunc('mediaCapabilities', 10, function mediaCapabilities() {
            let res = mm.memory.private_data.get(this).mediaCapabilities;
            if (debug) print('Navigator.mediaCapabilities.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hid: {

        get: newFunc('hid', 10, function hid() {
            let res = mm.memory.private_data.get(this).hid;
            if (debug) print('Navigator.hid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    locks: {

        get: newFunc('locks', 10, function locks() {
            let res = mm.memory.private_data.get(this).locks;
            if (debug) print('Navigator.locks.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    gpu: {

        get: newFunc('gpu', 10, function gpu() {
            let res = new GPU()
            if (debug) print('Navigator.gpu.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },

    mediaSession: {

        get: newFunc('mediaSession', 10, function mediaSession() {
            let res = mm.memory.private_data.get(this).mediaSession;
            if (debug) print('Navigator.mediaSession.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    permissions: {

        get: newFunc('permissions', 10, function permissions() {
            let res = mm.memory.private_data.get(this).permissions;
            if (debug) print('Navigator.permissions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    presentation: {

        get: newFunc('presentation', 10, function presentation() {
            let res = mm.memory.private_data.get(this).presentation;
            if (debug) print('Navigator.presentation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    usb: {

        get: newFunc('usb', 10, function usb() {
            let res = mm.memory.private_data.get(this).usb;
            if (debug) print('Navigator.usb.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    xr: {

        get: newFunc('xr', 10, function xr() {
            let res = mm.memory.private_data.get(this).xr;
            if (debug) print('Navigator.xr.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    serial: {

        get: newFunc('serial', 10, function serial() {
            let res = mm.memory.private_data.get(this).serial;
            if (debug) print('Navigator.serial.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },


    adAuctionComponents: {

        value: newFunc('adAuctionComponents', 10, function adAuctionComponents() {
            if (debug) print('Navigator.adAuctionComponents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    runAdAuction: {

        value: newFunc('runAdAuction', 10, function runAdAuction() {
            if (debug) print('Navigator.runAdAuction.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    canLoadAdAuctionFencedFrame: {

        value: newFunc('canLoadAdAuctionFencedFrame', 10, function canLoadAdAuctionFencedFrame() {
            if (debug) print('Navigator.canLoadAdAuctionFencedFrame.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'canShare': {

        value: newFunc('canShare', 10, function () {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Navigator.canShare.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'share': {

        value: newFunc('share', 10, function () {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Navigator.share.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearAppBadge: {

        value: newFunc('clearAppBadge', 10, function clearAppBadge() {
            if (debug) print('Navigator.clearAppBadge.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getBattery: {

        value: newFunc('getBattery', 10, function getBattery() {
            if (debug) print('Navigator.getBattery.call', arguments)
            return new Promise((resolve, reject)=>{
                resolve(new BatteryManager())
            })

        }), writable: true, enumerable: true, configurable: true,


    },
    getUserMedia: {

        value: newFunc('getUserMedia', 10, function getUserMedia() {
            if (debug) print('Navigator.getUserMedia.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestMIDIAccess: {

        value: newFunc('requestMIDIAccess', 10, function requestMIDIAccess() {
            if (debug) print('Navigator.requestMIDIAccess.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestMediaKeySystemAccess: {

        value: newFunc('requestMediaKeySystemAccess', 10, function requestMediaKeySystemAccess() {
            if (debug) print('Navigator.requestMediaKeySystemAccess.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setAppBadge: {

        value: newFunc('setAppBadge', 10, function setAppBadge() {
            if (debug) print('Navigator.setAppBadge.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    webkitGetUserMedia: {

        value: newFunc('webkitGetUserMedia', 10, function webkitGetUserMedia() {
            if (debug) print('Navigator.webkitGetUserMedia.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearOriginJoinedAdInterestGroups: {

        value: newFunc('clearOriginJoinedAdInterestGroups', 10, function clearOriginJoinedAdInterestGroups() {
            if (debug) print('Navigator.clearOriginJoinedAdInterestGroups.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createAuctionNonce: {

        value: newFunc('createAuctionNonce', 10, function createAuctionNonce() {
            if (debug) print('Navigator.createAuctionNonce.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    joinAdInterestGroup: {

        value: newFunc('joinAdInterestGroup', 10, function joinAdInterestGroup() {
            if (debug) print('Navigator.joinAdInterestGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },

    leaveAdInterestGroup: {

        value: newFunc('leaveAdInterestGroup', 10, function leaveAdInterestGroup() {
            if (debug) print('Navigator.leaveAdInterestGroup.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateAdInterestGroups: {

        value: newFunc('updateAdInterestGroups', 10, function updateAdInterestGroups() {
            if (debug) print('Navigator.updateAdInterestGroups.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deprecatedReplaceInURN: {

        value: newFunc('deprecatedReplaceInURN', 10, function deprecatedReplaceInURN() {
            if (debug) print('Navigator.deprecatedReplaceInURN.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },

    deprecatedURNToURL: {

        value: newFunc('deprecatedURNToURL', 10, function deprecatedURNToURL() {
            if (debug) print('Navigator.deprecatedURNToURL.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getInstalledRelatedApps: {

        value: newFunc('getInstalledRelatedApps', 10, function getInstalledRelatedApps() {
            if (debug) print('Navigator.getInstalledRelatedApps.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'getInterestGroupAdAuctionData': {

        value: newFunc('getInterestGroupAdAuctionData', 10, function () {

            if (!Navigator.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Navigator.getInterestGroupAdAuctionData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },


    registerProtocolHandler: {

        value: newFunc('registerProtocolHandler', 10, function registerProtocolHandler() {
            if (debug) print('Navigator.registerProtocolHandler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unregisterProtocolHandler: {

        value: newFunc('unregisterProtocolHandler', 10, function unregisterProtocolHandler() {
            if (debug) print('Navigator.unregisterProtocolHandler.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    [Symbol.toStringTag]: {
        value: 'Navigator'
    },
    [Symbol.toPrimitive]: {
        value: 'Navigator'
    }


})


PermissionStatus = newFunc('PermissionStatus', 2, function PermissionStatus(name, state) {
    mm.memory.private_data.set(this, {
        name, state
    })
})


;delete PermissionStatus.prototype.constructor;
;
Object.defineProperties(PermissionStatus.prototype, {
    [Symbol.toStringTag]: {
        value: 'PermissionStatus'
    },

    'name': {

        get: newFunc('name', 10, function () {


            if (!PermissionStatus.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['name'];
            if (debug) print('PermissionStatus.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'state': {

        get: newFunc('state', 10, function () {


            if (!PermissionStatus.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['state'];
            if (debug) print('PermissionStatus.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'onchange': {

        get: newFunc('onchange', 10, function () {


            if (!PermissionStatus.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onchange'];
            if (debug) print('PermissionStatus.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function (value) {
            if (debug) print('PermissionStatus.onchange.set', value)
            mm.memory.private_data.get(this)['onchange'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!PermissionStatus.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('PermissionStatus.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


Notification = newFunc('Notification', 1, function () {
    print('Notification.call');
    mm.memory.private_data.set(this, {})
});


;delete Notification.prototype.constructor;
;
Object.defineProperties(Notification.prototype, {
    [Symbol.toStringTag]: {
        value: 'Notification'
    },

    'onclick': {

        get: newFunc('onclick', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onclick'];
            if (debug) print('Notification.onclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclick', 1, function (value) {
            if (debug) print('Notification.onclick.set', value)
            mm.memory.private_data.get(this)['onclick'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onshow': {

        get: newFunc('onshow', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onshow'];
            if (debug) print('Notification.onshow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onshow', 1, function (value) {
            if (debug) print('Notification.onshow.set', value)
            mm.memory.private_data.get(this)['onshow'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onerror': {

        get: newFunc('onerror', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onerror'];
            if (debug) print('Notification.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('Notification.onerror.set', value)
            mm.memory.private_data.get(this)['onerror'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onclose': {

        get: newFunc('onclose', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onclose'];
            if (debug) print('Notification.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function (value) {
            if (debug) print('Notification.onclose.set', value)
            mm.memory.private_data.get(this)['onclose'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'title': {

        get: newFunc('title', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['title'];
            if (debug) print('Notification.title.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'dir': {

        get: newFunc('dir', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['dir'];
            if (debug) print('Notification.dir.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'lang': {

        get: newFunc('lang', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['lang'];
            if (debug) print('Notification.lang.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'body': {

        get: newFunc('body', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['body'];
            if (debug) print('Notification.body.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'tag': {

        get: newFunc('tag', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['tag'];
            if (debug) print('Notification.tag.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'icon': {

        get: newFunc('icon', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['icon'];
            if (debug) print('Notification.icon.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'badge': {

        get: newFunc('badge', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['badge'];
            if (debug) print('Notification.badge.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'vibrate': {

        get: newFunc('vibrate', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['vibrate'];
            if (debug) print('Notification.vibrate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'timestamp': {

        get: newFunc('timestamp', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['timestamp'];
            if (debug) print('Notification.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'renotify': {

        get: newFunc('renotify', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['renotify'];
            if (debug) print('Notification.renotify.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'silent': {

        get: newFunc('silent', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['silent'];
            if (debug) print('Notification.silent.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'requireInteraction': {

        get: newFunc('requireInteraction', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['requireInteraction'];
            if (debug) print('Notification.requireInteraction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'data': {

        get: newFunc('data', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['data'];
            if (debug) print('Notification.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'actions': {

        get: newFunc('actions', 10, function () {


            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['actions'];
            if (debug) print('Notification.actions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'close': {

        value: newFunc('close', 10, function () {

            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Notification.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Notification.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Notification.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


navigator = new Navigator('aaa')
navigator.__proto__ = Navigator.prototype
// Object.setPrototypeOf(navigator, Navigator.prototype);
// Object.setPrototypeOf(navigator.prototype, Navigator.prototype);
//
// Object.defineProperties(window, {
//     navigator: {
//         get: newFunc('get navigator', 2, function () {
//             debugger;
//             return navigator
//         }),
//         configurable: true, enumerable: true
//     }
//
// })
print(navigator)
// debugger;

let nav = new Navigator()
console.log(nav.gpu)