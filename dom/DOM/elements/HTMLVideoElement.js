HTMLVideoElement = newFunc('HTMLVideoElement', 1, function HTMLVideoElement() {
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLVideoElement.prototype, {
    width: {

        get: newFunc('width', 10, function width() {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLVideoElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function width(value) {
            if (debug) print('HTMLVideoElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function height() {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('HTMLVideoElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function height(value) {
            if (debug) print('HTMLVideoElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    videoWidth: {

        get: newFunc('videoWidth', 10, function videoWidth() {
            let res = mm.memory.private_data.get(this).videoWidth;
            if (debug) print('HTMLVideoElement.videoWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    videoHeight: {

        get: newFunc('videoHeight', 10, function videoHeight() {
            let res = mm.memory.private_data.get(this).videoHeight;
            if (debug) print('HTMLVideoElement.videoHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    poster: {

        get: newFunc('poster', 10, function poster() {
            let res = mm.memory.private_data.get(this).poster;
            if (debug) print('HTMLVideoElement.poster.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('poster', 1, function poster(value) {
            if (debug) print('HTMLVideoElement.poster.set', value)
            mm.memory.private_data.get(this).poster = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    webkitDecodedFrameCount: {

        get: newFunc('webkitDecodedFrameCount', 10, function webkitDecodedFrameCount() {
            let res = mm.memory.private_data.get(this).webkitDecodedFrameCount;
            if (debug) print('HTMLVideoElement.webkitDecodedFrameCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    webkitDroppedFrameCount: {

        get: newFunc('webkitDroppedFrameCount', 10, function webkitDroppedFrameCount() {
            let res = mm.memory.private_data.get(this).webkitDroppedFrameCount;
            if (debug) print('HTMLVideoElement.webkitDroppedFrameCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    playsInline: {

        get: newFunc('playsInline', 10, function playsInline() {
            let res = mm.memory.private_data.get(this).playsInline;
            if (debug) print('HTMLVideoElement.playsInline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('playsInline', 1, function playsInline(value) {
            if (debug) print('HTMLVideoElement.playsInline.set', value)
            mm.memory.private_data.get(this).playsInline = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onenterpictureinpicture: {

        get: newFunc('onenterpictureinpicture', 10, function onenterpictureinpicture() {
            let res = mm.memory.private_data.get(this).onenterpictureinpicture;
            if (debug) print('HTMLVideoElement.onenterpictureinpicture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onenterpictureinpicture', 1, function onenterpictureinpicture(value) {
            if (debug) print('HTMLVideoElement.onenterpictureinpicture.set', value)
            mm.memory.private_data.get(this).onenterpictureinpicture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onleavepictureinpicture: {

        get: newFunc('onleavepictureinpicture', 10, function onleavepictureinpicture() {
            let res = mm.memory.private_data.get(this).onleavepictureinpicture;
            if (debug) print('HTMLVideoElement.onleavepictureinpicture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onleavepictureinpicture', 1, function onleavepictureinpicture(value) {
            if (debug) print('HTMLVideoElement.onleavepictureinpicture.set', value)
            mm.memory.private_data.get(this).onleavepictureinpicture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    disablePictureInPicture: {

        get: newFunc('disablePictureInPicture', 10, function disablePictureInPicture() {
            let res = mm.memory.private_data.get(this).disablePictureInPicture;
            if (debug) print('HTMLVideoElement.disablePictureInPicture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disablePictureInPicture', 1, function disablePictureInPicture(value) {
            if (debug) print('HTMLVideoElement.disablePictureInPicture.set', value)
            mm.memory.private_data.get(this).disablePictureInPicture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    cancelVideoFrameCallback: {

        value: newFunc('cancelVideoFrameCallback', 10, function cancelVideoFrameCallback() {
            if (debug) print('HTMLVideoElement.cancelVideoFrameCallback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getVideoPlaybackQuality: {

        value: newFunc('getVideoPlaybackQuality', 10, function getVideoPlaybackQuality() {
            if (debug) print('HTMLVideoElement.getVideoPlaybackQuality.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestPictureInPicture: {

        value: newFunc('requestPictureInPicture', 10, function requestPictureInPicture() {
            if (debug) print('HTMLVideoElement.requestPictureInPicture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestVideoFrameCallback: {

        value: newFunc('requestVideoFrameCallback', 10, function requestVideoFrameCallback() {
            if (debug) print('HTMLVideoElement.requestVideoFrameCallback.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('HTMLVideoElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Object.setPrototypeOf(HTMLVideoElement.prototype, HTMLMediaElement.prototype);
Object.setPrototypeOf(HTMLVideoElement, HTMLMediaElement);
