;DocumentPictureInPicture = newFunc('DocumentPictureInPicture', 1, function () {
    print('DocumentPictureInPicture.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DocumentPictureInPicture.prototype, {
    window: {

        get: newFunc('window', 10, function () {
            let res = mm.memory.private_data.get(this).window;
            if (debug) print('DocumentPictureInPicture.window.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onenter: {

        get: newFunc('onenter', 10, function () {
            let res = mm.memory.private_data.get(this).onenter;
            if (debug) print('DocumentPictureInPicture.onenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onenter', 1, function (value) {
            if (debug) print('DocumentPictureInPicture.onenter.set', value)
            mm.memory.private_data.get(this).onenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    requestWindow: {

        value: newFunc('requestWindow', 10, function () {
            if (debug) print('DocumentPictureInPicture.requestWindow.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DocumentPictureInPicture.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


documentPictureInPicture = new DocumentPictureInPicture();
