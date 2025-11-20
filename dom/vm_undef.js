Option = newFunc('Option', 1, function () {
    print('Option.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Option.prototype, {
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('Option.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('Option.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('Option.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('Option.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('Option.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    defaultSelected: {

        get: newFunc('defaultSelected', 10, function () {
            let res = mm.memory.private_data.get(this).defaultSelected;
            if (debug) print('Option.defaultSelected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defaultSelected', 1, function (value) {
            if (debug) print('Option.defaultSelected.set', value)
            mm.memory.private_data.get(this).defaultSelected = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    selected: {

        get: newFunc('selected', 10, function () {
            let res = mm.memory.private_data.get(this).selected;
            if (debug) print('Option.selected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selected', 1, function (value) {
            if (debug) print('Option.selected.set', value)
            mm.memory.private_data.get(this).selected = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('Option.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('Option.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    text: {

        get: newFunc('text', 10, function () {
            let res = mm.memory.private_data.get(this).text;
            if (debug) print('Option.text.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('text', 1, function (value) {
            if (debug) print('Option.text.set', value)
            mm.memory.private_data.get(this).text = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    index: {

        get: newFunc('index', 10, function () {
            let res = mm.memory.private_data.get(this).index;
            if (debug) print('Option.index.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Option.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

webkitURL = newFunc('webkitURL', 1, function () {
    print('webkitURL.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(webkitURL.prototype, {
    origin: {

        get: newFunc('origin', 10, function () {
            let res = mm.memory.private_data.get(this).origin;
            if (debug) print('webkitURL.origin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    protocol: {

        get: newFunc('protocol', 10, function () {
            let res = mm.memory.private_data.get(this).protocol;
            if (debug) print('webkitURL.protocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('protocol', 1, function (value) {
            if (debug) print('webkitURL.protocol.set', value)
            mm.memory.private_data.get(this).protocol = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    username: {

        get: newFunc('username', 10, function () {
            let res = mm.memory.private_data.get(this).username;
            if (debug) print('webkitURL.username.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('username', 1, function (value) {
            if (debug) print('webkitURL.username.set', value)
            mm.memory.private_data.get(this).username = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    password: {

        get: newFunc('password', 10, function () {
            let res = mm.memory.private_data.get(this).password;
            if (debug) print('webkitURL.password.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('password', 1, function (value) {
            if (debug) print('webkitURL.password.set', value)
            mm.memory.private_data.get(this).password = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    host: {

        get: newFunc('host', 10, function () {
            let res = mm.memory.private_data.get(this).host;
            if (debug) print('webkitURL.host.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('host', 1, function (value) {
            if (debug) print('webkitURL.host.set', value)
            mm.memory.private_data.get(this).host = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    hostname: {

        get: newFunc('hostname', 10, function () {
            let res = mm.memory.private_data.get(this).hostname;
            if (debug) print('webkitURL.hostname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hostname', 1, function (value) {
            if (debug) print('webkitURL.hostname.set', value)
            mm.memory.private_data.get(this).hostname = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    port: {

        get: newFunc('port', 10, function () {
            let res = mm.memory.private_data.get(this).port;
            if (debug) print('webkitURL.port.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('port', 1, function (value) {
            if (debug) print('webkitURL.port.set', value)
            mm.memory.private_data.get(this).port = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    pathname: {

        get: newFunc('pathname', 10, function () {
            let res = mm.memory.private_data.get(this).pathname;
            if (debug) print('webkitURL.pathname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('pathname', 1, function (value) {
            if (debug) print('webkitURL.pathname.set', value)
            mm.memory.private_data.get(this).pathname = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    search: {

        get: newFunc('search', 10, function () {
            let res = mm.memory.private_data.get(this).search;
            if (debug) print('webkitURL.search.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('search', 1, function (value) {
            if (debug) print('webkitURL.search.set', value)
            mm.memory.private_data.get(this).search = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    searchParams: {

        get: newFunc('searchParams', 10, function () {
            let res = mm.memory.private_data.get(this).searchParams;
            if (debug) print('webkitURL.searchParams.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hash: {

        get: newFunc('hash', 10, function () {
            let res = mm.memory.private_data.get(this).hash;
            if (debug) print('webkitURL.hash.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hash', 1, function (value) {
            if (debug) print('webkitURL.hash.set', value)
            mm.memory.private_data.get(this).hash = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('webkitURL.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('href', 1, function (value) {
            if (debug) print('webkitURL.href.set', value)
            mm.memory.private_data.get(this).href = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('webkitURL.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('webkitURL.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('webkitURL.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

webkitMediaStream = newFunc('webkitMediaStream', 1, function () {
    print('webkitMediaStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(webkitMediaStream.prototype, {
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('webkitMediaStream.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    active: {

        get: newFunc('active', 10, function () {
            let res = mm.memory.private_data.get(this).active;
            if (debug) print('webkitMediaStream.active.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onaddtrack: {

        get: newFunc('onaddtrack', 10, function () {
            let res = mm.memory.private_data.get(this).onaddtrack;
            if (debug) print('webkitMediaStream.onaddtrack.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onaddtrack', 1, function (value) {
            if (debug) print('webkitMediaStream.onaddtrack.set', value)
            mm.memory.private_data.get(this).onaddtrack = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onremovetrack: {

        get: newFunc('onremovetrack', 10, function () {
            let res = mm.memory.private_data.get(this).onremovetrack;
            if (debug) print('webkitMediaStream.onremovetrack.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onremovetrack', 1, function (value) {
            if (debug) print('webkitMediaStream.onremovetrack.set', value)
            mm.memory.private_data.get(this).onremovetrack = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onactive: {

        get: newFunc('onactive', 10, function () {
            let res = mm.memory.private_data.get(this).onactive;
            if (debug) print('webkitMediaStream.onactive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onactive', 1, function (value) {
            if (debug) print('webkitMediaStream.onactive.set', value)
            mm.memory.private_data.get(this).onactive = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninactive: {

        get: newFunc('oninactive', 10, function () {
            let res = mm.memory.private_data.get(this).oninactive;
            if (debug) print('webkitMediaStream.oninactive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninactive', 1, function (value) {
            if (debug) print('webkitMediaStream.oninactive.set', value)
            mm.memory.private_data.get(this).oninactive = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    addTrack: {

        value: newFunc('addTrack', 10, function () {
            if (debug) print('webkitMediaStream.addTrack.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clone: {

        value: newFunc('clone', 10, function () {
            if (debug) print('webkitMediaStream.clone.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAudioTracks: {

        value: newFunc('getAudioTracks', 10, function () {
            if (debug) print('webkitMediaStream.getAudioTracks.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTrackById: {

        value: newFunc('getTrackById', 10, function () {
            if (debug) print('webkitMediaStream.getTrackById.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTracks: {

        value: newFunc('getTracks', 10, function () {
            if (debug) print('webkitMediaStream.getTracks.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getVideoTracks: {

        value: newFunc('getVideoTracks', 10, function () {
            if (debug) print('webkitMediaStream.getVideoTracks.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeTrack: {

        value: newFunc('removeTrack', 10, function () {
            if (debug) print('webkitMediaStream.removeTrack.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('webkitMediaStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WebKitMutationObserver = newFunc('WebKitMutationObserver', 1, function () {
    print('WebKitMutationObserver.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebKitMutationObserver.prototype, {
    disconnect: {

        value: newFunc('disconnect', 10, function () {
            if (debug) print('WebKitMutationObserver.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    observe: {

        value: newFunc('observe', 10, function () {
            if (debug) print('WebKitMutationObserver.observe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    takeRecords: {

        value: newFunc('takeRecords', 10, function () {
            if (debug) print('WebKitMutationObserver.takeRecords.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebKitMutationObserver.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WebKitCSSMatrix = newFunc('WebKitCSSMatrix', 1, function () {
    print('WebKitCSSMatrix.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebKitCSSMatrix.prototype, {
    a: {

        get: newFunc('a', 10, function () {
            let res = mm.memory.private_data.get(this).a;
            if (debug) print('WebKitCSSMatrix.a.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('a', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.a.set', value)
            mm.memory.private_data.get(this).a = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    b: {

        get: newFunc('b', 10, function () {
            let res = mm.memory.private_data.get(this).b;
            if (debug) print('WebKitCSSMatrix.b.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('b', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.b.set', value)
            mm.memory.private_data.get(this).b = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    c: {

        get: newFunc('c', 10, function () {
            let res = mm.memory.private_data.get(this).c;
            if (debug) print('WebKitCSSMatrix.c.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('c', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.c.set', value)
            mm.memory.private_data.get(this).c = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    d: {

        get: newFunc('d', 10, function () {
            let res = mm.memory.private_data.get(this).d;
            if (debug) print('WebKitCSSMatrix.d.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('d', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.d.set', value)
            mm.memory.private_data.get(this).d = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    e: {

        get: newFunc('e', 10, function () {
            let res = mm.memory.private_data.get(this).e;
            if (debug) print('WebKitCSSMatrix.e.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('e', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.e.set', value)
            mm.memory.private_data.get(this).e = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    f: {

        get: newFunc('f', 10, function () {
            let res = mm.memory.private_data.get(this).f;
            if (debug) print('WebKitCSSMatrix.f.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('f', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.f.set', value)
            mm.memory.private_data.get(this).f = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m11: {

        get: newFunc('m11', 10, function () {
            let res = mm.memory.private_data.get(this).m11;
            if (debug) print('WebKitCSSMatrix.m11.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m11', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m11.set', value)
            mm.memory.private_data.get(this).m11 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m12: {

        get: newFunc('m12', 10, function () {
            let res = mm.memory.private_data.get(this).m12;
            if (debug) print('WebKitCSSMatrix.m12.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m12', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m12.set', value)
            mm.memory.private_data.get(this).m12 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m13: {

        get: newFunc('m13', 10, function () {
            let res = mm.memory.private_data.get(this).m13;
            if (debug) print('WebKitCSSMatrix.m13.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m13', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m13.set', value)
            mm.memory.private_data.get(this).m13 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m14: {

        get: newFunc('m14', 10, function () {
            let res = mm.memory.private_data.get(this).m14;
            if (debug) print('WebKitCSSMatrix.m14.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m14', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m14.set', value)
            mm.memory.private_data.get(this).m14 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m21: {

        get: newFunc('m21', 10, function () {
            let res = mm.memory.private_data.get(this).m21;
            if (debug) print('WebKitCSSMatrix.m21.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m21', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m21.set', value)
            mm.memory.private_data.get(this).m21 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m22: {

        get: newFunc('m22', 10, function () {
            let res = mm.memory.private_data.get(this).m22;
            if (debug) print('WebKitCSSMatrix.m22.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m22', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m22.set', value)
            mm.memory.private_data.get(this).m22 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m23: {

        get: newFunc('m23', 10, function () {
            let res = mm.memory.private_data.get(this).m23;
            if (debug) print('WebKitCSSMatrix.m23.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m23', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m23.set', value)
            mm.memory.private_data.get(this).m23 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m24: {

        get: newFunc('m24', 10, function () {
            let res = mm.memory.private_data.get(this).m24;
            if (debug) print('WebKitCSSMatrix.m24.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m24', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m24.set', value)
            mm.memory.private_data.get(this).m24 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m31: {

        get: newFunc('m31', 10, function () {
            let res = mm.memory.private_data.get(this).m31;
            if (debug) print('WebKitCSSMatrix.m31.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m31', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m31.set', value)
            mm.memory.private_data.get(this).m31 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m32: {

        get: newFunc('m32', 10, function () {
            let res = mm.memory.private_data.get(this).m32;
            if (debug) print('WebKitCSSMatrix.m32.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m32', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m32.set', value)
            mm.memory.private_data.get(this).m32 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m33: {

        get: newFunc('m33', 10, function () {
            let res = mm.memory.private_data.get(this).m33;
            if (debug) print('WebKitCSSMatrix.m33.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m33', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m33.set', value)
            mm.memory.private_data.get(this).m33 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m34: {

        get: newFunc('m34', 10, function () {
            let res = mm.memory.private_data.get(this).m34;
            if (debug) print('WebKitCSSMatrix.m34.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m34', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m34.set', value)
            mm.memory.private_data.get(this).m34 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m41: {

        get: newFunc('m41', 10, function () {
            let res = mm.memory.private_data.get(this).m41;
            if (debug) print('WebKitCSSMatrix.m41.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m41', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m41.set', value)
            mm.memory.private_data.get(this).m41 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m42: {

        get: newFunc('m42', 10, function () {
            let res = mm.memory.private_data.get(this).m42;
            if (debug) print('WebKitCSSMatrix.m42.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m42', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m42.set', value)
            mm.memory.private_data.get(this).m42 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m43: {

        get: newFunc('m43', 10, function () {
            let res = mm.memory.private_data.get(this).m43;
            if (debug) print('WebKitCSSMatrix.m43.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m43', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m43.set', value)
            mm.memory.private_data.get(this).m43 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m44: {

        get: newFunc('m44', 10, function () {
            let res = mm.memory.private_data.get(this).m44;
            if (debug) print('WebKitCSSMatrix.m44.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m44', 1, function (value) {
            if (debug) print('WebKitCSSMatrix.m44.set', value)
            mm.memory.private_data.get(this).m44 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    invertSelf: {

        value: newFunc('invertSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.invertSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    multiplySelf: {

        value: newFunc('multiplySelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.multiplySelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    preMultiplySelf: {

        value: newFunc('preMultiplySelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.preMultiplySelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateAxisAngleSelf: {

        value: newFunc('rotateAxisAngleSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.rotateAxisAngleSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateFromVectorSelf: {

        value: newFunc('rotateFromVectorSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.rotateFromVectorSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateSelf: {

        value: newFunc('rotateSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.rotateSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scale3dSelf: {

        value: newFunc('scale3dSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.scale3dSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scaleSelf: {

        value: newFunc('scaleSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.scaleSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewXSelf: {

        value: newFunc('skewXSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.skewXSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewYSelf: {

        value: newFunc('skewYSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.skewYSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    translateSelf: {

        value: newFunc('translateSelf', 10, function () {
            if (debug) print('WebKitCSSMatrix.translateSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebKitCSSMatrix.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    setMatrixValue: {

        value: newFunc('setMatrixValue', 10, function () {
            if (debug) print('WebKitCSSMatrix.setMatrixValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});

XSLTProcessor = newFunc('XSLTProcessor', 1, function () {
    print('XSLTProcessor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XSLTProcessor.prototype, {
    clearParameters: {

        value: newFunc('clearParameters', 10, function () {
            if (debug) print('XSLTProcessor.clearParameters.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getParameter: {

        value: newFunc('getParameter', 10, function () {
            if (debug) print('XSLTProcessor.getParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    importStylesheet: {

        value: newFunc('importStylesheet', 10, function () {
            if (debug) print('XSLTProcessor.importStylesheet.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeParameter: {

        value: newFunc('removeParameter', 10, function () {
            if (debug) print('XSLTProcessor.removeParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('XSLTProcessor.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setParameter: {

        value: newFunc('setParameter', 10, function () {
            if (debug) print('XSLTProcessor.setParameter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    transformToDocument: {

        value: newFunc('transformToDocument', 10, function () {
            if (debug) print('XSLTProcessor.transformToDocument.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    transformToFragment: {

        value: newFunc('transformToFragment', 10, function () {
            if (debug) print('XSLTProcessor.transformToFragment.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XSLTProcessor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

XPathResult = newFunc('XPathResult', 1, function () {
    print('XPathResult.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XPathResult.prototype, {
    resultType: {

        get: newFunc('resultType', 10, function () {
            let res = mm.memory.private_data.get(this).resultType;
            if (debug) print('XPathResult.resultType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    numberValue: {

        get: newFunc('numberValue', 10, function () {
            let res = mm.memory.private_data.get(this).numberValue;
            if (debug) print('XPathResult.numberValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stringValue: {

        get: newFunc('stringValue', 10, function () {
            let res = mm.memory.private_data.get(this).stringValue;
            if (debug) print('XPathResult.stringValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    booleanValue: {

        get: newFunc('booleanValue', 10, function () {
            let res = mm.memory.private_data.get(this).booleanValue;
            if (debug) print('XPathResult.booleanValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    singleNodeValue: {

        get: newFunc('singleNodeValue', 10, function () {
            let res = mm.memory.private_data.get(this).singleNodeValue;
            if (debug) print('XPathResult.singleNodeValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    invalidIteratorState: {

        get: newFunc('invalidIteratorState', 10, function () {
            let res = mm.memory.private_data.get(this).invalidIteratorState;
            if (debug) print('XPathResult.invalidIteratorState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    snapshotLength: {

        get: newFunc('snapshotLength', 10, function () {
            let res = mm.memory.private_data.get(this).snapshotLength;
            if (debug) print('XPathResult.snapshotLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ANY_TYPE: {},
    NUMBER_TYPE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    STRING_TYPE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    BOOLEAN_TYPE: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    UNORDERED_NODE_ITERATOR_TYPE: {

        value: 4, writable: false, enumerable: true, configurable: false,


    },
    ORDERED_NODE_ITERATOR_TYPE: {

        value: 5, writable: false, enumerable: true, configurable: false,


    },
    UNORDERED_NODE_SNAPSHOT_TYPE: {

        value: 6, writable: false, enumerable: true, configurable: false,


    },
    ORDERED_NODE_SNAPSHOT_TYPE: {

        value: 7, writable: false, enumerable: true, configurable: false,


    },
    ANY_UNORDERED_NODE_TYPE: {

        value: 8, writable: false, enumerable: true, configurable: false,


    },
    FIRST_ORDERED_NODE_TYPE: {

        value: 9, writable: false, enumerable: true, configurable: false,


    },
    iterateNext: {

        value: newFunc('iterateNext', 10, function () {
            if (debug) print('XPathResult.iterateNext.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    snapshotItem: {

        value: newFunc('snapshotItem', 10, function () {
            if (debug) print('XPathResult.snapshotItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XPathResult.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

XPathExpression = newFunc('XPathExpression', 1, function () {
    print('XPathExpression.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XPathExpression.prototype, {
    evaluate: {

        value: newFunc('evaluate', 10, function () {
            if (debug) print('XPathExpression.evaluate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XPathExpression.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

XPathEvaluator = newFunc('XPathEvaluator', 1, function () {
    print('XPathEvaluator.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XPathEvaluator.prototype, {
    createExpression: {

        value: newFunc('createExpression', 10, function () {
            if (debug) print('XPathEvaluator.createExpression.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createNSResolver: {

        value: newFunc('createNSResolver', 10, function () {
            if (debug) print('XPathEvaluator.createNSResolver.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    evaluate: {

        value: newFunc('evaluate', 10, function () {
            if (debug) print('XPathEvaluator.evaluate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XPathEvaluator.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

XMLSerializer = newFunc('XMLSerializer', 1, function () {
    print('XMLSerializer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(XMLSerializer.prototype, {
    serializeToString: {

        value: newFunc('serializeToString', 10, function () {
            if (debug) print('XMLSerializer.serializeToString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('XMLSerializer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WritableStreamDefaultWriter = newFunc('WritableStreamDefaultWriter', 1, function () {
    print('WritableStreamDefaultWriter.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WritableStreamDefaultWriter.prototype, {
    closed: {

        get: newFunc('closed', 10, function () {
            let res = mm.memory.private_data.get(this).closed;
            if (debug) print('WritableStreamDefaultWriter.closed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    desiredSize: {

        get: newFunc('desiredSize', 10, function () {
            let res = mm.memory.private_data.get(this).desiredSize;
            if (debug) print('WritableStreamDefaultWriter.desiredSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ready: {

        get: newFunc('ready', 10, function () {
            let res = mm.memory.private_data.get(this).ready;
            if (debug) print('WritableStreamDefaultWriter.ready.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    abort: {

        value: newFunc('abort', 10, function () {
            if (debug) print('WritableStreamDefaultWriter.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('WritableStreamDefaultWriter.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    releaseLock: {

        value: newFunc('releaseLock', 10, function () {
            if (debug) print('WritableStreamDefaultWriter.releaseLock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    write: {

        value: newFunc('write', 10, function () {
            if (debug) print('WritableStreamDefaultWriter.write.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WritableStreamDefaultWriter.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WritableStreamDefaultController = newFunc('WritableStreamDefaultController', 1, function () {
    print('WritableStreamDefaultController.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WritableStreamDefaultController.prototype, {
    signal: {

        get: newFunc('signal', 10, function () {
            let res = mm.memory.private_data.get(this).signal;
            if (debug) print('WritableStreamDefaultController.signal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    error: {

        value: newFunc('error', 10, function () {
            if (debug) print('WritableStreamDefaultController.error.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WritableStreamDefaultController.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WritableStream = newFunc('WritableStream', 1, function () {
    print('WritableStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WritableStream.prototype, {
    locked: {

        get: newFunc('locked', 10, function () {
            let res = mm.memory.private_data.get(this).locked;
            if (debug) print('WritableStream.locked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    abort: {

        value: newFunc('abort', 10, function () {
            if (debug) print('WritableStream.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('WritableStream.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getWriter: {

        value: newFunc('getWriter', 10, function () {
            if (debug) print('WritableStream.getWriter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WritableStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WindowControlsOverlayGeometryChangeEvent = newFunc('WindowControlsOverlayGeometryChangeEvent', 1, function () {
    print('WindowControlsOverlayGeometryChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WindowControlsOverlayGeometryChangeEvent.prototype, {
    titlebarAreaRect: {

        get: newFunc('titlebarAreaRect', 10, function () {
            let res = mm.memory.private_data.get(this).titlebarAreaRect;
            if (debug) print('WindowControlsOverlayGeometryChangeEvent.titlebarAreaRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    visible: {

        get: newFunc('visible', 10, function () {
            let res = mm.memory.private_data.get(this).visible;
            if (debug) print('WindowControlsOverlayGeometryChangeEvent.visible.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WindowControlsOverlayGeometryChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WindowControlsOverlay = newFunc('WindowControlsOverlay', 1, function () {
    print('WindowControlsOverlay.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WindowControlsOverlay.prototype, {
    visible: {

        get: newFunc('visible', 10, function () {
            let res = mm.memory.private_data.get(this).visible;
            if (debug) print('WindowControlsOverlay.visible.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ongeometrychange: {

        get: newFunc('ongeometrychange', 10, function () {
            let res = mm.memory.private_data.get(this).ongeometrychange;
            if (debug) print('WindowControlsOverlay.ongeometrychange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ongeometrychange', 1, function (value) {
            if (debug) print('WindowControlsOverlay.ongeometrychange.set', value)
            mm.memory.private_data.get(this).ongeometrychange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getTitlebarAreaRect: {

        value: newFunc('getTitlebarAreaRect', 10, function () {
            if (debug) print('WindowControlsOverlay.getTitlebarAreaRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WindowControlsOverlay.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WheelEvent = newFunc('WheelEvent', 1, function () {
    print('WheelEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WheelEvent.prototype, {
    deltaX: {

        get: newFunc('deltaX', 10, function () {
            let res = mm.memory.private_data.get(this).deltaX;
            if (debug) print('WheelEvent.deltaX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deltaY: {

        get: newFunc('deltaY', 10, function () {
            let res = mm.memory.private_data.get(this).deltaY;
            if (debug) print('WheelEvent.deltaY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deltaZ: {

        get: newFunc('deltaZ', 10, function () {
            let res = mm.memory.private_data.get(this).deltaZ;
            if (debug) print('WheelEvent.deltaZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    deltaMode: {

        get: newFunc('deltaMode', 10, function () {
            let res = mm.memory.private_data.get(this).deltaMode;
            if (debug) print('WheelEvent.deltaMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    wheelDeltaX: {

        get: newFunc('wheelDeltaX', 10, function () {
            let res = mm.memory.private_data.get(this).wheelDeltaX;
            if (debug) print('WheelEvent.wheelDeltaX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    wheelDeltaY: {

        get: newFunc('wheelDeltaY', 10, function () {
            let res = mm.memory.private_data.get(this).wheelDeltaY;
            if (debug) print('WheelEvent.wheelDeltaY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    wheelDelta: {

        get: newFunc('wheelDelta', 10, function () {
            let res = mm.memory.private_data.get(this).wheelDelta;
            if (debug) print('WheelEvent.wheelDelta.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    DOM_DELTA_PIXEL: {},
    DOM_DELTA_LINE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    DOM_DELTA_PAGE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WheelEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WaveShaperNode = newFunc('WaveShaperNode', 1, function () {
    print('WaveShaperNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WaveShaperNode.prototype, {
    curve: {

        get: newFunc('curve', 10, function () {
            let res = mm.memory.private_data.get(this).curve;
            if (debug) print('WaveShaperNode.curve.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('curve', 1, function (value) {
            if (debug) print('WaveShaperNode.curve.set', value)
            mm.memory.private_data.get(this).curve = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oversample: {

        get: newFunc('oversample', 10, function () {
            let res = mm.memory.private_data.get(this).oversample;
            if (debug) print('WaveShaperNode.oversample.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oversample', 1, function (value) {
            if (debug) print('WaveShaperNode.oversample.set', value)
            mm.memory.private_data.get(this).oversample = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WaveShaperNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

VirtualKeyboardGeometryChangeEvent = newFunc('VirtualKeyboardGeometryChangeEvent', 1, function () {
    print('VirtualKeyboardGeometryChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VirtualKeyboardGeometryChangeEvent.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('VirtualKeyboardGeometryChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ViewTransition = newFunc('ViewTransition', 1, function () {
    print('ViewTransition.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ViewTransition.prototype, {
    finished: {

        get: newFunc('finished', 10, function () {
            let res = mm.memory.private_data.get(this).finished;
            if (debug) print('ViewTransition.finished.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ready: {

        get: newFunc('ready', 10, function () {
            let res = mm.memory.private_data.get(this).ready;
            if (debug) print('ViewTransition.ready.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    updateCallbackDone: {

        get: newFunc('updateCallbackDone', 10, function () {
            let res = mm.memory.private_data.get(this).updateCallbackDone;
            if (debug) print('ViewTransition.updateCallbackDone.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    skipTransition: {

        value: newFunc('skipTransition', 10, function () {
            if (debug) print('ViewTransition.skipTransition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    types: {

        get: newFunc('types', 10, function () {
            let res = mm.memory.private_data.get(this).types;
            if (debug) print('ViewTransition.types.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ViewTransition.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

VideoFrame = newFunc('VideoFrame', 1, function () {
    print('VideoFrame.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VideoFrame.prototype, {
    format: {

        get: newFunc('format', 10, function () {
            let res = mm.memory.private_data.get(this).format;
            if (debug) print('VideoFrame.format.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestamp: {

        get: newFunc('timestamp', 10, function () {
            let res = mm.memory.private_data.get(this).timestamp;
            if (debug) print('VideoFrame.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    duration: {

        get: newFunc('duration', 10, function () {
            let res = mm.memory.private_data.get(this).duration;
            if (debug) print('VideoFrame.duration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    codedWidth: {

        get: newFunc('codedWidth', 10, function () {
            let res = mm.memory.private_data.get(this).codedWidth;
            if (debug) print('VideoFrame.codedWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    codedHeight: {

        get: newFunc('codedHeight', 10, function () {
            let res = mm.memory.private_data.get(this).codedHeight;
            if (debug) print('VideoFrame.codedHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    codedRect: {

        get: newFunc('codedRect', 10, function () {
            let res = mm.memory.private_data.get(this).codedRect;
            if (debug) print('VideoFrame.codedRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    visibleRect: {

        get: newFunc('visibleRect', 10, function () {
            let res = mm.memory.private_data.get(this).visibleRect;
            if (debug) print('VideoFrame.visibleRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    displayWidth: {

        get: newFunc('displayWidth', 10, function () {
            let res = mm.memory.private_data.get(this).displayWidth;
            if (debug) print('VideoFrame.displayWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    displayHeight: {

        get: newFunc('displayHeight', 10, function () {
            let res = mm.memory.private_data.get(this).displayHeight;
            if (debug) print('VideoFrame.displayHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    colorSpace: {

        get: newFunc('colorSpace', 10, function () {
            let res = mm.memory.private_data.get(this).colorSpace;
            if (debug) print('VideoFrame.colorSpace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    allocationSize: {

        value: newFunc('allocationSize', 10, function () {
            if (debug) print('VideoFrame.allocationSize.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clone: {

        value: newFunc('clone', 10, function () {
            if (debug) print('VideoFrame.clone.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('VideoFrame.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    copyTo: {

        value: newFunc('copyTo', 10, function () {
            if (debug) print('VideoFrame.copyTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('VideoFrame.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

VideoColorSpace = newFunc('VideoColorSpace', 1, function () {
    print('VideoColorSpace.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VideoColorSpace.prototype, {
    primaries: {

        get: newFunc('primaries', 10, function () {
            let res = mm.memory.private_data.get(this).primaries;
            if (debug) print('VideoColorSpace.primaries.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    transfer: {

        get: newFunc('transfer', 10, function () {
            let res = mm.memory.private_data.get(this).transfer;
            if (debug) print('VideoColorSpace.transfer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    matrix: {

        get: newFunc('matrix', 10, function () {
            let res = mm.memory.private_data.get(this).matrix;
            if (debug) print('VideoColorSpace.matrix.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    fullRange: {

        get: newFunc('fullRange', 10, function () {
            let res = mm.memory.private_data.get(this).fullRange;
            if (debug) print('VideoColorSpace.fullRange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('VideoColorSpace.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('VideoColorSpace.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ValidityState = newFunc('ValidityState', 1, function () {
    print('ValidityState.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ValidityState.prototype, {
    valueMissing: {

        get: newFunc('valueMissing', 10, function () {
            let res = mm.memory.private_data.get(this).valueMissing;
            if (debug) print('ValidityState.valueMissing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    typeMismatch: {

        get: newFunc('typeMismatch', 10, function () {
            let res = mm.memory.private_data.get(this).typeMismatch;
            if (debug) print('ValidityState.typeMismatch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    patternMismatch: {

        get: newFunc('patternMismatch', 10, function () {
            let res = mm.memory.private_data.get(this).patternMismatch;
            if (debug) print('ValidityState.patternMismatch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    tooLong: {

        get: newFunc('tooLong', 10, function () {
            let res = mm.memory.private_data.get(this).tooLong;
            if (debug) print('ValidityState.tooLong.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    tooShort: {

        get: newFunc('tooShort', 10, function () {
            let res = mm.memory.private_data.get(this).tooShort;
            if (debug) print('ValidityState.tooShort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rangeUnderflow: {

        get: newFunc('rangeUnderflow', 10, function () {
            let res = mm.memory.private_data.get(this).rangeUnderflow;
            if (debug) print('ValidityState.rangeUnderflow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rangeOverflow: {

        get: newFunc('rangeOverflow', 10, function () {
            let res = mm.memory.private_data.get(this).rangeOverflow;
            if (debug) print('ValidityState.rangeOverflow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stepMismatch: {

        get: newFunc('stepMismatch', 10, function () {
            let res = mm.memory.private_data.get(this).stepMismatch;
            if (debug) print('ValidityState.stepMismatch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    badInput: {

        get: newFunc('badInput', 10, function () {
            let res = mm.memory.private_data.get(this).badInput;
            if (debug) print('ValidityState.badInput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    customError: {

        get: newFunc('customError', 10, function () {
            let res = mm.memory.private_data.get(this).customError;
            if (debug) print('ValidityState.customError.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    valid: {

        get: newFunc('valid', 10, function () {
            let res = mm.memory.private_data.get(this).valid;
            if (debug) print('ValidityState.valid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ValidityState.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

VTTCue = newFunc('VTTCue', 1, function () {
    print('VTTCue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VTTCue.prototype, {
    vertical: {

        get: newFunc('vertical', 10, function () {
            let res = mm.memory.private_data.get(this).vertical;
            if (debug) print('VTTCue.vertical.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vertical', 1, function (value) {
            if (debug) print('VTTCue.vertical.set', value)
            mm.memory.private_data.get(this).vertical = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    snapToLines: {

        get: newFunc('snapToLines', 10, function () {
            let res = mm.memory.private_data.get(this).snapToLines;
            if (debug) print('VTTCue.snapToLines.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('snapToLines', 1, function (value) {
            if (debug) print('VTTCue.snapToLines.set', value)
            mm.memory.private_data.get(this).snapToLines = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    line: {

        get: newFunc('line', 10, function () {
            let res = mm.memory.private_data.get(this).line;
            if (debug) print('VTTCue.line.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('line', 1, function (value) {
            if (debug) print('VTTCue.line.set', value)
            mm.memory.private_data.get(this).line = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    position: {

        get: newFunc('position', 10, function () {
            let res = mm.memory.private_data.get(this).position;
            if (debug) print('VTTCue.position.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('position', 1, function (value) {
            if (debug) print('VTTCue.position.set', value)
            mm.memory.private_data.get(this).position = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('VTTCue.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('size', 1, function (value) {
            if (debug) print('VTTCue.size.set', value)
            mm.memory.private_data.get(this).size = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('VTTCue.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('VTTCue.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    text: {

        get: newFunc('text', 10, function () {
            let res = mm.memory.private_data.get(this).text;
            if (debug) print('VTTCue.text.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('text', 1, function (value) {
            if (debug) print('VTTCue.text.set', value)
            mm.memory.private_data.get(this).text = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getCueAsHTML: {

        value: newFunc('getCueAsHTML', 10, function () {
            if (debug) print('VTTCue.getCueAsHTML.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('VTTCue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

URLPattern = newFunc('URLPattern', 1, function () {
    print('URLPattern.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(URLPattern.prototype, {
    protocol: {

        get: newFunc('protocol', 10, function () {
            let res = mm.memory.private_data.get(this).protocol;
            if (debug) print('URLPattern.protocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    username: {

        get: newFunc('username', 10, function () {
            let res = mm.memory.private_data.get(this).username;
            if (debug) print('URLPattern.username.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    password: {

        get: newFunc('password', 10, function () {
            let res = mm.memory.private_data.get(this).password;
            if (debug) print('URLPattern.password.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hostname: {

        get: newFunc('hostname', 10, function () {
            let res = mm.memory.private_data.get(this).hostname;
            if (debug) print('URLPattern.hostname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    port: {

        get: newFunc('port', 10, function () {
            let res = mm.memory.private_data.get(this).port;
            if (debug) print('URLPattern.port.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pathname: {

        get: newFunc('pathname', 10, function () {
            let res = mm.memory.private_data.get(this).pathname;
            if (debug) print('URLPattern.pathname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    search: {

        get: newFunc('search', 10, function () {
            let res = mm.memory.private_data.get(this).search;
            if (debug) print('URLPattern.search.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hash: {

        get: newFunc('hash', 10, function () {
            let res = mm.memory.private_data.get(this).hash;
            if (debug) print('URLPattern.hash.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hasRegExpGroups: {

        get: newFunc('hasRegExpGroups', 10, function () {
            let res = mm.memory.private_data.get(this).hasRegExpGroups;
            if (debug) print('URLPattern.hasRegExpGroups.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    exec: {

        value: newFunc('exec', 10, function () {
            if (debug) print('URLPattern.exec.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    test: {

        value: newFunc('test', 10, function () {
            if (debug) print('URLPattern.test.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('URLPattern.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TrustedScriptURL = newFunc('TrustedScriptURL', 1, function () {
    print('TrustedScriptURL.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TrustedScriptURL.prototype, {
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('TrustedScriptURL.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('TrustedScriptURL.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TrustedScriptURL.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TrustedScript = newFunc('TrustedScript', 1, function () {
    print('TrustedScript.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TrustedScript.prototype, {
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('TrustedScript.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('TrustedScript.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TrustedScript.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TrustedHTML = newFunc('TrustedHTML', 1, function () {
    print('TrustedHTML.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TrustedHTML.prototype, {
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('TrustedHTML.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('TrustedHTML.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TrustedHTML.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TreeWalker = newFunc('TreeWalker', 1, function () {
    print('TreeWalker.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TreeWalker.prototype, {
    root: {

        get: newFunc('root', 10, function () {
            let res = mm.memory.private_data.get(this).root;
            if (debug) print('TreeWalker.root.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    whatToShow: {

        get: newFunc('whatToShow', 10, function () {
            let res = mm.memory.private_data.get(this).whatToShow;
            if (debug) print('TreeWalker.whatToShow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    filter: {

        get: newFunc('filter', 10, function () {
            let res = mm.memory.private_data.get(this).filter;
            if (debug) print('TreeWalker.filter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    currentNode: {

        get: newFunc('currentNode', 10, function () {
            let res = mm.memory.private_data.get(this).currentNode;
            if (debug) print('TreeWalker.currentNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('currentNode', 1, function (value) {
            if (debug) print('TreeWalker.currentNode.set', value)
            mm.memory.private_data.get(this).currentNode = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    firstChild: {

        value: newFunc('firstChild', 10, function () {
            if (debug) print('TreeWalker.firstChild.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lastChild: {

        value: newFunc('lastChild', 10, function () {
            if (debug) print('TreeWalker.lastChild.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    nextNode: {

        value: newFunc('nextNode', 10, function () {
            if (debug) print('TreeWalker.nextNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    nextSibling: {

        value: newFunc('nextSibling', 10, function () {
            if (debug) print('TreeWalker.nextSibling.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    parentNode: {

        value: newFunc('parentNode', 10, function () {
            if (debug) print('TreeWalker.parentNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    previousNode: {

        value: newFunc('previousNode', 10, function () {
            if (debug) print('TreeWalker.previousNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    previousSibling: {

        value: newFunc('previousSibling', 10, function () {
            if (debug) print('TreeWalker.previousSibling.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TreeWalker.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TransitionEvent = newFunc('TransitionEvent', 1, function () {
    print('TransitionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TransitionEvent.prototype, {
    propertyName: {

        get: newFunc('propertyName', 10, function () {
            let res = mm.memory.private_data.get(this).propertyName;
            if (debug) print('TransitionEvent.propertyName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    elapsedTime: {

        get: newFunc('elapsedTime', 10, function () {
            let res = mm.memory.private_data.get(this).elapsedTime;
            if (debug) print('TransitionEvent.elapsedTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pseudoElement: {

        get: newFunc('pseudoElement', 10, function () {
            let res = mm.memory.private_data.get(this).pseudoElement;
            if (debug) print('TransitionEvent.pseudoElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TransitionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TransformStreamDefaultController = newFunc('TransformStreamDefaultController', 1, function () {
    print('TransformStreamDefaultController.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TransformStreamDefaultController.prototype, {
    desiredSize: {

        get: newFunc('desiredSize', 10, function () {
            let res = mm.memory.private_data.get(this).desiredSize;
            if (debug) print('TransformStreamDefaultController.desiredSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    enqueue: {

        value: newFunc('enqueue', 10, function () {
            if (debug) print('TransformStreamDefaultController.enqueue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    error: {

        value: newFunc('error', 10, function () {
            if (debug) print('TransformStreamDefaultController.error.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    terminate: {

        value: newFunc('terminate', 10, function () {
            if (debug) print('TransformStreamDefaultController.terminate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TransformStreamDefaultController.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TransformStream = newFunc('TransformStream', 1, function () {
    print('TransformStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TransformStream.prototype, {
    readable: {

        get: newFunc('readable', 10, function () {
            let res = mm.memory.private_data.get(this).readable;
            if (debug) print('TransformStream.readable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writable: {

        get: newFunc('writable', 10, function () {
            let res = mm.memory.private_data.get(this).writable;
            if (debug) print('TransformStream.writable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TransformStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TrackEvent = newFunc('TrackEvent', 1, function () {
    print('TrackEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TrackEvent.prototype, {
    track: {

        get: newFunc('track', 10, function () {
            let res = mm.memory.private_data.get(this).track;
            if (debug) print('TrackEvent.track.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TrackEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TouchList = newFunc('TouchList', 1, function () {
    print('TouchList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TouchList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('TouchList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    item: {

        value: newFunc('item', 10, function () {
            if (debug) print('TouchList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TouchList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Touch = newFunc('Touch', 1, function () {
    print('Touch.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Touch.prototype, {
    identifier: {

        get: newFunc('identifier', 10, function () {
            let res = mm.memory.private_data.get(this).identifier;
            if (debug) print('Touch.identifier.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('Touch.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    screenX: {

        get: newFunc('screenX', 10, function () {
            let res = mm.memory.private_data.get(this).screenX;
            if (debug) print('Touch.screenX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    screenY: {

        get: newFunc('screenY', 10, function () {
            let res = mm.memory.private_data.get(this).screenY;
            if (debug) print('Touch.screenY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    clientX: {

        get: newFunc('clientX', 10, function () {
            let res = mm.memory.private_data.get(this).clientX;
            if (debug) print('Touch.clientX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    clientY: {

        get: newFunc('clientY', 10, function () {
            let res = mm.memory.private_data.get(this).clientY;
            if (debug) print('Touch.clientY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pageX: {

        get: newFunc('pageX', 10, function () {
            let res = mm.memory.private_data.get(this).pageX;
            if (debug) print('Touch.pageX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pageY: {

        get: newFunc('pageY', 10, function () {
            let res = mm.memory.private_data.get(this).pageY;
            if (debug) print('Touch.pageY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    radiusX: {

        get: newFunc('radiusX', 10, function () {
            let res = mm.memory.private_data.get(this).radiusX;
            if (debug) print('Touch.radiusX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    radiusY: {

        get: newFunc('radiusY', 10, function () {
            let res = mm.memory.private_data.get(this).radiusY;
            if (debug) print('Touch.radiusY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rotationAngle: {

        get: newFunc('rotationAngle', 10, function () {
            let res = mm.memory.private_data.get(this).rotationAngle;
            if (debug) print('Touch.rotationAngle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    force: {

        get: newFunc('force', 10, function () {
            let res = mm.memory.private_data.get(this).force;
            if (debug) print('Touch.force.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Touch.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ToggleEvent = newFunc('ToggleEvent', 1, function () {
    print('ToggleEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ToggleEvent.prototype, {
    oldState: {

        get: newFunc('oldState', 10, function () {
            let res = mm.memory.private_data.get(this).oldState;
            if (debug) print('ToggleEvent.oldState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    newState: {

        get: newFunc('newState', 10, function () {
            let res = mm.memory.private_data.get(this).newState;
            if (debug) print('ToggleEvent.newState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ToggleEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TimeRanges = newFunc('TimeRanges', 1, function () {
    print('TimeRanges.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TimeRanges.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('TimeRanges.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    end: {

        value: newFunc('end', 10, function () {
            if (debug) print('TimeRanges.end.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    start: {

        value: newFunc('start', 10, function () {
            if (debug) print('TimeRanges.start.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TimeRanges.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TaskSignal = newFunc('TaskSignal', 1, function () {
    print('TaskSignal.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TaskSignal.prototype, {
    priority: {

        get: newFunc('priority', 10, function () {
            let res = mm.memory.private_data.get(this).priority;
            if (debug) print('TaskSignal.priority.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onprioritychange: {

        get: newFunc('onprioritychange', 10, function () {
            let res = mm.memory.private_data.get(this).onprioritychange;
            if (debug) print('TaskSignal.onprioritychange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprioritychange', 1, function (value) {
            if (debug) print('TaskSignal.onprioritychange.set', value)
            mm.memory.private_data.get(this).onprioritychange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TaskSignal.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TaskController = newFunc('TaskController', 1, function () {
    print('TaskController.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TaskController.prototype, {
    setPriority: {

        value: newFunc('setPriority', 10, function () {
            if (debug) print('TaskController.setPriority.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TaskController.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

TaskAttributionTiming = newFunc('TaskAttributionTiming', 1, function () {
    print('TaskAttributionTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(TaskAttributionTiming.prototype, {
    containerType: {

        get: newFunc('containerType', 10, function () {
            let res = mm.memory.private_data.get(this).containerType;
            if (debug) print('TaskAttributionTiming.containerType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    containerSrc: {

        get: newFunc('containerSrc', 10, function () {
            let res = mm.memory.private_data.get(this).containerSrc;
            if (debug) print('TaskAttributionTiming.containerSrc.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    containerId: {

        get: newFunc('containerId', 10, function () {
            let res = mm.memory.private_data.get(this).containerId;
            if (debug) print('TaskAttributionTiming.containerId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    containerName: {

        get: newFunc('containerName', 10, function () {
            let res = mm.memory.private_data.get(this).containerName;
            if (debug) print('TaskAttributionTiming.containerName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('TaskAttributionTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('TaskAttributionTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SyncManager = newFunc('SyncManager', 1, function () {
    print('SyncManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SyncManager.prototype, {
    getTags: {

        value: newFunc('getTags', 10, function () {
            if (debug) print('SyncManager.getTags.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    register: {

        value: newFunc('register', 10, function () {
            if (debug) print('SyncManager.register.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SyncManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SubmitEvent = newFunc('SubmitEvent', 1, function () {
    print('SubmitEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SubmitEvent.prototype, {
    submitter: {

        get: newFunc('submitter', 10, function () {
            let res = mm.memory.private_data.get(this).submitter;
            if (debug) print('SubmitEvent.submitter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SubmitEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

StylePropertyMapReadOnly = newFunc('StylePropertyMapReadOnly', 1, function () {
    print('StylePropertyMapReadOnly.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StylePropertyMapReadOnly.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('StylePropertyMapReadOnly.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAll: {

        value: newFunc('getAll', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.getAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('StylePropertyMapReadOnly.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

StylePropertyMap = newFunc('StylePropertyMap', 1, function () {
    print('StylePropertyMap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StylePropertyMap.prototype, {
    append: {

        value: newFunc('append', 10, function () {
            if (debug) print('StylePropertyMap.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('StylePropertyMap.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('StylePropertyMap.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    set: {

        value: newFunc('set', 10, function () {
            if (debug) print('StylePropertyMap.set.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('StylePropertyMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

StorageEvent = newFunc('StorageEvent', 1, function () {
    print('StorageEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StorageEvent.prototype, {
    key: {

        get: newFunc('key', 10, function () {
            let res = mm.memory.private_data.get(this).key;
            if (debug) print('StorageEvent.key.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    oldValue: {

        get: newFunc('oldValue', 10, function () {
            let res = mm.memory.private_data.get(this).oldValue;
            if (debug) print('StorageEvent.oldValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    newValue: {

        get: newFunc('newValue', 10, function () {
            let res = mm.memory.private_data.get(this).newValue;
            if (debug) print('StorageEvent.newValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('StorageEvent.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    storageArea: {

        get: newFunc('storageArea', 10, function () {
            let res = mm.memory.private_data.get(this).storageArea;
            if (debug) print('StorageEvent.storageArea.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    initStorageEvent: {

        value: newFunc('initStorageEvent', 10, function () {
            if (debug) print('StorageEvent.initStorageEvent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('StorageEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

StereoPannerNode = newFunc('StereoPannerNode', 1, function () {
    print('StereoPannerNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StereoPannerNode.prototype, {
    pan: {

        get: newFunc('pan', 10, function () {
            let res = mm.memory.private_data.get(this).pan;
            if (debug) print('StereoPannerNode.pan.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('StereoPannerNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

StaticRange = newFunc('StaticRange', 1, function () {
    print('StaticRange.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StaticRange.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('StaticRange.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SourceBufferList = newFunc('SourceBufferList', 1, function () {
    print('SourceBufferList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SourceBufferList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('SourceBufferList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onaddsourcebuffer: {

        get: newFunc('onaddsourcebuffer', 10, function () {
            let res = mm.memory.private_data.get(this).onaddsourcebuffer;
            if (debug) print('SourceBufferList.onaddsourcebuffer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onaddsourcebuffer', 1, function (value) {
            if (debug) print('SourceBufferList.onaddsourcebuffer.set', value)
            mm.memory.private_data.get(this).onaddsourcebuffer = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onremovesourcebuffer: {

        get: newFunc('onremovesourcebuffer', 10, function () {
            let res = mm.memory.private_data.get(this).onremovesourcebuffer;
            if (debug) print('SourceBufferList.onremovesourcebuffer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onremovesourcebuffer', 1, function (value) {
            if (debug) print('SourceBufferList.onremovesourcebuffer.set', value)
            mm.memory.private_data.get(this).onremovesourcebuffer = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SourceBufferList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SourceBuffer = newFunc('SourceBuffer', 1, function () {
    print('SourceBuffer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SourceBuffer.prototype, {
    mode: {

        get: newFunc('mode', 10, function () {
            let res = mm.memory.private_data.get(this).mode;
            if (debug) print('SourceBuffer.mode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('mode', 1, function (value) {
            if (debug) print('SourceBuffer.mode.set', value)
            mm.memory.private_data.get(this).mode = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    updating: {

        get: newFunc('updating', 10, function () {
            let res = mm.memory.private_data.get(this).updating;
            if (debug) print('SourceBuffer.updating.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    buffered: {

        get: newFunc('buffered', 10, function () {
            let res = mm.memory.private_data.get(this).buffered;
            if (debug) print('SourceBuffer.buffered.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestampOffset: {

        get: newFunc('timestampOffset', 10, function () {
            let res = mm.memory.private_data.get(this).timestampOffset;
            if (debug) print('SourceBuffer.timestampOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('timestampOffset', 1, function (value) {
            if (debug) print('SourceBuffer.timestampOffset.set', value)
            mm.memory.private_data.get(this).timestampOffset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    appendWindowStart: {

        get: newFunc('appendWindowStart', 10, function () {
            let res = mm.memory.private_data.get(this).appendWindowStart;
            if (debug) print('SourceBuffer.appendWindowStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('appendWindowStart', 1, function (value) {
            if (debug) print('SourceBuffer.appendWindowStart.set', value)
            mm.memory.private_data.get(this).appendWindowStart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    appendWindowEnd: {

        get: newFunc('appendWindowEnd', 10, function () {
            let res = mm.memory.private_data.get(this).appendWindowEnd;
            if (debug) print('SourceBuffer.appendWindowEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('appendWindowEnd', 1, function (value) {
            if (debug) print('SourceBuffer.appendWindowEnd.set', value)
            mm.memory.private_data.get(this).appendWindowEnd = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onupdatestart: {

        get: newFunc('onupdatestart', 10, function () {
            let res = mm.memory.private_data.get(this).onupdatestart;
            if (debug) print('SourceBuffer.onupdatestart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onupdatestart', 1, function (value) {
            if (debug) print('SourceBuffer.onupdatestart.set', value)
            mm.memory.private_data.get(this).onupdatestart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onupdate: {

        get: newFunc('onupdate', 10, function () {
            let res = mm.memory.private_data.get(this).onupdate;
            if (debug) print('SourceBuffer.onupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onupdate', 1, function (value) {
            if (debug) print('SourceBuffer.onupdate.set', value)
            mm.memory.private_data.get(this).onupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onupdateend: {

        get: newFunc('onupdateend', 10, function () {
            let res = mm.memory.private_data.get(this).onupdateend;
            if (debug) print('SourceBuffer.onupdateend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onupdateend', 1, function (value) {
            if (debug) print('SourceBuffer.onupdateend.set', value)
            mm.memory.private_data.get(this).onupdateend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('SourceBuffer.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('SourceBuffer.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onabort: {

        get: newFunc('onabort', 10, function () {
            let res = mm.memory.private_data.get(this).onabort;
            if (debug) print('SourceBuffer.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function (value) {
            if (debug) print('SourceBuffer.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    abort: {

        value: newFunc('abort', 10, function () {
            if (debug) print('SourceBuffer.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    appendBuffer: {

        value: newFunc('appendBuffer', 10, function () {
            if (debug) print('SourceBuffer.appendBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    changeType: {

        value: newFunc('changeType', 10, function () {
            if (debug) print('SourceBuffer.changeType.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    remove: {

        value: newFunc('remove', 10, function () {
            if (debug) print('SourceBuffer.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SourceBuffer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ShadowRoot = newFunc('ShadowRoot', 1, function () {
    print('ShadowRoot.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ShadowRoot.prototype, {
    mode: {

        get: newFunc('mode', 10, function () {
            let res = mm.memory.private_data.get(this).mode;
            if (debug) print('ShadowRoot.mode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    host: {

        get: newFunc('host', 10, function () {
            let res = mm.memory.private_data.get(this).host;
            if (debug) print('ShadowRoot.host.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onslotchange: {

        get: newFunc('onslotchange', 10, function () {
            let res = mm.memory.private_data.get(this).onslotchange;
            if (debug) print('ShadowRoot.onslotchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onslotchange', 1, function (value) {
            if (debug) print('ShadowRoot.onslotchange.set', value)
            mm.memory.private_data.get(this).onslotchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    innerHTML: {

        get: newFunc('innerHTML', 10, function () {
            let res = mm.memory.private_data.get(this).innerHTML;
            if (debug) print('ShadowRoot.innerHTML.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('innerHTML', 1, function (value) {
            if (debug) print('ShadowRoot.innerHTML.set', value)
            mm.memory.private_data.get(this).innerHTML = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    delegatesFocus: {

        get: newFunc('delegatesFocus', 10, function () {
            let res = mm.memory.private_data.get(this).delegatesFocus;
            if (debug) print('ShadowRoot.delegatesFocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    slotAssignment: {

        get: newFunc('slotAssignment', 10, function () {
            let res = mm.memory.private_data.get(this).slotAssignment;
            if (debug) print('ShadowRoot.slotAssignment.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    serializable: {

        get: newFunc('serializable', 10, function () {
            let res = mm.memory.private_data.get(this).serializable;
            if (debug) print('ShadowRoot.serializable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    clonable: {

        get: newFunc('clonable', 10, function () {
            let res = mm.memory.private_data.get(this).clonable;
            if (debug) print('ShadowRoot.clonable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    activeElement: {

        get: newFunc('activeElement', 10, function () {
            let res = mm.memory.private_data.get(this).activeElement;
            if (debug) print('ShadowRoot.activeElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    styleSheets: {

        get: newFunc('styleSheets', 10, function () {
            let res = mm.memory.private_data.get(this).styleSheets;
            if (debug) print('ShadowRoot.styleSheets.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pointerLockElement: {

        get: newFunc('pointerLockElement', 10, function () {
            let res = mm.memory.private_data.get(this).pointerLockElement;
            if (debug) print('ShadowRoot.pointerLockElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    fullscreenElement: {

        get: newFunc('fullscreenElement', 10, function () {
            let res = mm.memory.private_data.get(this).fullscreenElement;
            if (debug) print('ShadowRoot.fullscreenElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fullscreenElement', 1, function (value) {
            if (debug) print('ShadowRoot.fullscreenElement.set', value)
            mm.memory.private_data.get(this).fullscreenElement = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    adoptedStyleSheets: {

        get: newFunc('adoptedStyleSheets', 10, function () {
            let res = mm.memory.private_data.get(this).adoptedStyleSheets;
            if (debug) print('ShadowRoot.adoptedStyleSheets.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('adoptedStyleSheets', 1, function (value) {
            if (debug) print('ShadowRoot.adoptedStyleSheets.set', value)
            mm.memory.private_data.get(this).adoptedStyleSheets = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    pictureInPictureElement: {

        get: newFunc('pictureInPictureElement', 10, function () {
            let res = mm.memory.private_data.get(this).pictureInPictureElement;
            if (debug) print('ShadowRoot.pictureInPictureElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    elementFromPoint: {

        value: newFunc('elementFromPoint', 10, function () {
            if (debug) print('ShadowRoot.elementFromPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    elementsFromPoint: {

        value: newFunc('elementsFromPoint', 10, function () {
            if (debug) print('ShadowRoot.elementsFromPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAnimations: {

        value: newFunc('getAnimations', 10, function () {
            if (debug) print('ShadowRoot.getAnimations.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getHTML: {

        value: newFunc('getHTML', 10, function () {
            if (debug) print('ShadowRoot.getHTML.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSelection: {

        value: newFunc('getSelection', 10, function () {
            if (debug) print('ShadowRoot.getSelection.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setHTMLUnsafe: {

        value: newFunc('setHTMLUnsafe', 10, function () {
            if (debug) print('ShadowRoot.setHTMLUnsafe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ShadowRoot.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Selection = newFunc('Selection', 1, function () {
    print('Selection.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Selection.prototype, {
    anchorNode: {

        get: newFunc('anchorNode', 10, function () {
            let res = mm.memory.private_data.get(this).anchorNode;
            if (debug) print('Selection.anchorNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    anchorOffset: {

        get: newFunc('anchorOffset', 10, function () {
            let res = mm.memory.private_data.get(this).anchorOffset;
            if (debug) print('Selection.anchorOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    focusNode: {

        get: newFunc('focusNode', 10, function () {
            let res = mm.memory.private_data.get(this).focusNode;
            if (debug) print('Selection.focusNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    focusOffset: {

        get: newFunc('focusOffset', 10, function () {
            let res = mm.memory.private_data.get(this).focusOffset;
            if (debug) print('Selection.focusOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isCollapsed: {

        get: newFunc('isCollapsed', 10, function () {
            let res = mm.memory.private_data.get(this).isCollapsed;
            if (debug) print('Selection.isCollapsed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rangeCount: {

        get: newFunc('rangeCount', 10, function () {
            let res = mm.memory.private_data.get(this).rangeCount;
            if (debug) print('Selection.rangeCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('Selection.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    baseNode: {

        get: newFunc('baseNode', 10, function () {
            let res = mm.memory.private_data.get(this).baseNode;
            if (debug) print('Selection.baseNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    baseOffset: {

        get: newFunc('baseOffset', 10, function () {
            let res = mm.memory.private_data.get(this).baseOffset;
            if (debug) print('Selection.baseOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    extentNode: {

        get: newFunc('extentNode', 10, function () {
            let res = mm.memory.private_data.get(this).extentNode;
            if (debug) print('Selection.extentNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    extentOffset: {

        get: newFunc('extentOffset', 10, function () {
            let res = mm.memory.private_data.get(this).extentOffset;
            if (debug) print('Selection.extentOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    addRange: {

        value: newFunc('addRange', 10, function () {
            if (debug) print('Selection.addRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    collapse: {

        value: newFunc('collapse', 10, function () {
            if (debug) print('Selection.collapse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    collapseToEnd: {

        value: newFunc('collapseToEnd', 10, function () {
            if (debug) print('Selection.collapseToEnd.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    collapseToStart: {

        value: newFunc('collapseToStart', 10, function () {
            if (debug) print('Selection.collapseToStart.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    containsNode: {

        value: newFunc('containsNode', 10, function () {
            if (debug) print('Selection.containsNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteFromDocument: {

        value: newFunc('deleteFromDocument', 10, function () {
            if (debug) print('Selection.deleteFromDocument.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    empty: {

        value: newFunc('empty', 10, function () {
            if (debug) print('Selection.empty.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    extend: {

        value: newFunc('extend', 10, function () {
            if (debug) print('Selection.extend.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getRangeAt: {

        value: newFunc('getRangeAt', 10, function () {
            if (debug) print('Selection.getRangeAt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    modify: {

        value: newFunc('modify', 10, function () {
            if (debug) print('Selection.modify.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeAllRanges: {

        value: newFunc('removeAllRanges', 10, function () {
            if (debug) print('Selection.removeAllRanges.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeRange: {

        value: newFunc('removeRange', 10, function () {
            if (debug) print('Selection.removeRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectAllChildren: {

        value: newFunc('selectAllChildren', 10, function () {
            if (debug) print('Selection.selectAllChildren.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setBaseAndExtent: {

        value: newFunc('setBaseAndExtent', 10, function () {
            if (debug) print('Selection.setBaseAndExtent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setPosition: {

        value: newFunc('setPosition', 10, function () {
            if (debug) print('Selection.setPosition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('Selection.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Selection.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SecurityPolicyViolationEvent = newFunc('SecurityPolicyViolationEvent', 1, function () {
    print('SecurityPolicyViolationEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SecurityPolicyViolationEvent.prototype, {
    documentURI: {

        get: newFunc('documentURI', 10, function () {
            let res = mm.memory.private_data.get(this).documentURI;
            if (debug) print('SecurityPolicyViolationEvent.documentURI.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    referrer: {

        get: newFunc('referrer', 10, function () {
            let res = mm.memory.private_data.get(this).referrer;
            if (debug) print('SecurityPolicyViolationEvent.referrer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    blockedURI: {

        get: newFunc('blockedURI', 10, function () {
            let res = mm.memory.private_data.get(this).blockedURI;
            if (debug) print('SecurityPolicyViolationEvent.blockedURI.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    violatedDirective: {

        get: newFunc('violatedDirective', 10, function () {
            let res = mm.memory.private_data.get(this).violatedDirective;
            if (debug) print('SecurityPolicyViolationEvent.violatedDirective.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    effectiveDirective: {

        get: newFunc('effectiveDirective', 10, function () {
            let res = mm.memory.private_data.get(this).effectiveDirective;
            if (debug) print('SecurityPolicyViolationEvent.effectiveDirective.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    originalPolicy: {

        get: newFunc('originalPolicy', 10, function () {
            let res = mm.memory.private_data.get(this).originalPolicy;
            if (debug) print('SecurityPolicyViolationEvent.originalPolicy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    disposition: {

        get: newFunc('disposition', 10, function () {
            let res = mm.memory.private_data.get(this).disposition;
            if (debug) print('SecurityPolicyViolationEvent.disposition.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sourceFile: {

        get: newFunc('sourceFile', 10, function () {
            let res = mm.memory.private_data.get(this).sourceFile;
            if (debug) print('SecurityPolicyViolationEvent.sourceFile.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    statusCode: {

        get: newFunc('statusCode', 10, function () {
            let res = mm.memory.private_data.get(this).statusCode;
            if (debug) print('SecurityPolicyViolationEvent.statusCode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lineNumber: {

        get: newFunc('lineNumber', 10, function () {
            let res = mm.memory.private_data.get(this).lineNumber;
            if (debug) print('SecurityPolicyViolationEvent.lineNumber.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    columnNumber: {

        get: newFunc('columnNumber', 10, function () {
            let res = mm.memory.private_data.get(this).columnNumber;
            if (debug) print('SecurityPolicyViolationEvent.columnNumber.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sample: {

        get: newFunc('sample', 10, function () {
            let res = mm.memory.private_data.get(this).sample;
            if (debug) print('SecurityPolicyViolationEvent.sample.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SecurityPolicyViolationEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ScriptProcessorNode = newFunc('ScriptProcessorNode', 1, function () {
    print('ScriptProcessorNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ScriptProcessorNode.prototype, {
    onaudioprocess: {

        get: newFunc('onaudioprocess', 10, function () {
            let res = mm.memory.private_data.get(this).onaudioprocess;
            if (debug) print('ScriptProcessorNode.onaudioprocess.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onaudioprocess', 1, function (value) {
            if (debug) print('ScriptProcessorNode.onaudioprocess.set', value)
            mm.memory.private_data.get(this).onaudioprocess = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    bufferSize: {

        get: newFunc('bufferSize', 10, function () {
            let res = mm.memory.private_data.get(this).bufferSize;
            if (debug) print('ScriptProcessorNode.bufferSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ScriptProcessorNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Scheduler = newFunc('Scheduler', 1, function () {
    print('Scheduler.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Scheduler.prototype, {
    postTask: {

        value: newFunc('postTask', 10, function () {
            if (debug) print('Scheduler.postTask.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    yield: {

        value: newFunc('yield', 10, function () {
            if (debug) print('Scheduler.yield.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Scheduler.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ResizeObserverSize = newFunc('ResizeObserverSize', 1, function () {
    print('ResizeObserverSize.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ResizeObserverSize.prototype, {
    inlineSize: {

        get: newFunc('inlineSize', 10, function () {
            let res = mm.memory.private_data.get(this).inlineSize;
            if (debug) print('ResizeObserverSize.inlineSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    blockSize: {

        get: newFunc('blockSize', 10, function () {
            let res = mm.memory.private_data.get(this).blockSize;
            if (debug) print('ResizeObserverSize.blockSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ResizeObserverSize.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ResizeObserverEntry = newFunc('ResizeObserverEntry', 1, function () {
    print('ResizeObserverEntry.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ResizeObserverEntry.prototype, {
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('ResizeObserverEntry.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    contentRect: {

        get: newFunc('contentRect', 10, function () {
            let res = mm.memory.private_data.get(this).contentRect;
            if (debug) print('ResizeObserverEntry.contentRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    contentBoxSize: {

        get: newFunc('contentBoxSize', 10, function () {
            let res = mm.memory.private_data.get(this).contentBoxSize;
            if (debug) print('ResizeObserverEntry.contentBoxSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    borderBoxSize: {

        get: newFunc('borderBoxSize', 10, function () {
            let res = mm.memory.private_data.get(this).borderBoxSize;
            if (debug) print('ResizeObserverEntry.borderBoxSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    devicePixelContentBoxSize: {

        get: newFunc('devicePixelContentBoxSize', 10, function () {
            let res = mm.memory.private_data.get(this).devicePixelContentBoxSize;
            if (debug) print('ResizeObserverEntry.devicePixelContentBoxSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ResizeObserverEntry.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ResizeObserver = newFunc('ResizeObserver', 1, function () {
    print('ResizeObserver.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ResizeObserver.prototype, {
    disconnect: {

        value: newFunc('disconnect', 10, function () {
            if (debug) print('ResizeObserver.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    observe: {

        value: newFunc('observe', 10, function () {
            if (debug) print('ResizeObserver.observe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unobserve: {

        value: newFunc('unobserve', 10, function () {
            if (debug) print('ResizeObserver.unobserve.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ResizeObserver.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ReportingObserver = newFunc('ReportingObserver', 1, function () {
    print('ReportingObserver.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ReportingObserver.prototype, {
    disconnect: {

        value: newFunc('disconnect', 10, function () {
            if (debug) print('ReportingObserver.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    observe: {

        value: newFunc('observe', 10, function () {
            if (debug) print('ReportingObserver.observe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    takeRecords: {

        value: newFunc('takeRecords', 10, function () {
            if (debug) print('ReportingObserver.takeRecords.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ReportingObserver.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ReadableStreamDefaultReader = newFunc('ReadableStreamDefaultReader', 1, function () {
    print('ReadableStreamDefaultReader.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ReadableStreamDefaultReader.prototype, {
    read: {

        value: newFunc('read', 10, function () {
            if (debug) print('ReadableStreamDefaultReader.read.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    releaseLock: {

        value: newFunc('releaseLock', 10, function () {
            if (debug) print('ReadableStreamDefaultReader.releaseLock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ReadableStreamDefaultReader.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    closed: {

        get: newFunc('closed', 10, function () {
            let res = mm.memory.private_data.get(this).closed;
            if (debug) print('ReadableStreamDefaultReader.closed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cancel: {

        value: newFunc('cancel', 10, function () {
            if (debug) print('ReadableStreamDefaultReader.cancel.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});

ReadableStreamDefaultController = newFunc('ReadableStreamDefaultController', 1, function () {
    print('ReadableStreamDefaultController.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ReadableStreamDefaultController.prototype, {
    desiredSize: {

        get: newFunc('desiredSize', 10, function () {
            let res = mm.memory.private_data.get(this).desiredSize;
            if (debug) print('ReadableStreamDefaultController.desiredSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('ReadableStreamDefaultController.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    enqueue: {

        value: newFunc('enqueue', 10, function () {
            if (debug) print('ReadableStreamDefaultController.enqueue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    error: {

        value: newFunc('error', 10, function () {
            if (debug) print('ReadableStreamDefaultController.error.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ReadableStreamDefaultController.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ReadableStreamBYOBRequest = newFunc('ReadableStreamBYOBRequest', 1, function () {
    print('ReadableStreamBYOBRequest.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ReadableStreamBYOBRequest.prototype, {
    view: {

        get: newFunc('view', 10, function () {
            let res = mm.memory.private_data.get(this).view;
            if (debug) print('ReadableStreamBYOBRequest.view.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    respond: {

        value: newFunc('respond', 10, function () {
            if (debug) print('ReadableStreamBYOBRequest.respond.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    respondWithNewView: {

        value: newFunc('respondWithNewView', 10, function () {
            if (debug) print('ReadableStreamBYOBRequest.respondWithNewView.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ReadableStreamBYOBRequest.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ReadableStreamBYOBReader = newFunc('ReadableStreamBYOBReader', 1, function () {
    print('ReadableStreamBYOBReader.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ReadableStreamBYOBReader.prototype, {
    read: {

        value: newFunc('read', 10, function () {
            if (debug) print('ReadableStreamBYOBReader.read.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    releaseLock: {

        value: newFunc('releaseLock', 10, function () {
            if (debug) print('ReadableStreamBYOBReader.releaseLock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ReadableStreamBYOBReader.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    closed: {

        get: newFunc('closed', 10, function () {
            let res = mm.memory.private_data.get(this).closed;
            if (debug) print('ReadableStreamBYOBReader.closed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cancel: {

        value: newFunc('cancel', 10, function () {
            if (debug) print('ReadableStreamBYOBReader.cancel.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});

ReadableStream = newFunc('ReadableStream', 1, function () {
    print('ReadableStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ReadableStream.prototype, {
    locked: {

        get: newFunc('locked', 10, function () {
            let res = mm.memory.private_data.get(this).locked;
            if (debug) print('ReadableStream.locked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cancel: {

        value: newFunc('cancel', 10, function () {
            if (debug) print('ReadableStream.cancel.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getReader: {

        value: newFunc('getReader', 10, function () {
            if (debug) print('ReadableStream.getReader.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pipeThrough: {

        value: newFunc('pipeThrough', 10, function () {
            if (debug) print('ReadableStream.pipeThrough.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pipeTo: {

        value: newFunc('pipeTo', 10, function () {
            if (debug) print('ReadableStream.pipeTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    tee: {

        value: newFunc('tee', 10, function () {
            if (debug) print('ReadableStream.tee.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('ReadableStream.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ReadableStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ReadableByteStreamController = newFunc('ReadableByteStreamController', 1, function () {
    print('ReadableByteStreamController.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ReadableByteStreamController.prototype, {
    byobRequest: {

        get: newFunc('byobRequest', 10, function () {
            let res = mm.memory.private_data.get(this).byobRequest;
            if (debug) print('ReadableByteStreamController.byobRequest.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    desiredSize: {

        get: newFunc('desiredSize', 10, function () {
            let res = mm.memory.private_data.get(this).desiredSize;
            if (debug) print('ReadableByteStreamController.desiredSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('ReadableByteStreamController.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    enqueue: {

        value: newFunc('enqueue', 10, function () {
            if (debug) print('ReadableByteStreamController.enqueue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    error: {

        value: newFunc('error', 10, function () {
            if (debug) print('ReadableByteStreamController.error.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ReadableByteStreamController.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Range = newFunc('Range', 1, function () {
    print('Range.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Range.prototype, {
    commonAncestorContainer: {

        get: newFunc('commonAncestorContainer', 10, function () {
            let res = mm.memory.private_data.get(this).commonAncestorContainer;
            if (debug) print('Range.commonAncestorContainer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    START_TO_START: {},
    START_TO_END: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    END_TO_END: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    END_TO_START: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    cloneContents: {

        value: newFunc('cloneContents', 10, function () {
            if (debug) print('Range.cloneContents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cloneRange: {

        value: newFunc('cloneRange', 10, function () {
            if (debug) print('Range.cloneRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    collapse: {

        value: newFunc('collapse', 10, function () {
            if (debug) print('Range.collapse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    compareBoundaryPoints: {

        value: newFunc('compareBoundaryPoints', 10, function () {
            if (debug) print('Range.compareBoundaryPoints.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    comparePoint: {

        value: newFunc('comparePoint', 10, function () {
            if (debug) print('Range.comparePoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createContextualFragment: {

        value: newFunc('createContextualFragment', 10, function () {
            if (debug) print('Range.createContextualFragment.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteContents: {

        value: newFunc('deleteContents', 10, function () {
            if (debug) print('Range.deleteContents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    detach: {

        value: newFunc('detach', 10, function () {
            if (debug) print('Range.detach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    expand: {

        value: newFunc('expand', 10, function () {
            if (debug) print('Range.expand.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    extractContents: {

        value: newFunc('extractContents', 10, function () {
            if (debug) print('Range.extractContents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getBoundingClientRect: {

        value: newFunc('getBoundingClientRect', 10, function () {
            if (debug) print('Range.getBoundingClientRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getClientRects: {

        value: newFunc('getClientRects', 10, function () {
            if (debug) print('Range.getClientRects.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertNode: {

        value: newFunc('insertNode', 10, function () {
            if (debug) print('Range.insertNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    intersectsNode: {

        value: newFunc('intersectsNode', 10, function () {
            if (debug) print('Range.intersectsNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isPointInRange: {

        value: newFunc('isPointInRange', 10, function () {
            if (debug) print('Range.isPointInRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectNode: {

        value: newFunc('selectNode', 10, function () {
            if (debug) print('Range.selectNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    selectNodeContents: {

        value: newFunc('selectNodeContents', 10, function () {
            if (debug) print('Range.selectNodeContents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setEnd: {

        value: newFunc('setEnd', 10, function () {
            if (debug) print('Range.setEnd.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setEndAfter: {

        value: newFunc('setEndAfter', 10, function () {
            if (debug) print('Range.setEndAfter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setEndBefore: {

        value: newFunc('setEndBefore', 10, function () {
            if (debug) print('Range.setEndBefore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setStart: {

        value: newFunc('setStart', 10, function () {
            if (debug) print('Range.setStart.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setStartAfter: {

        value: newFunc('setStartAfter', 10, function () {
            if (debug) print('Range.setStartAfter.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setStartBefore: {

        value: newFunc('setStartBefore', 10, function () {
            if (debug) print('Range.setStartBefore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    surroundContents: {

        value: newFunc('surroundContents', 10, function () {
            if (debug) print('Range.surroundContents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('Range.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Range.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

RadioNodeList = newFunc('RadioNodeList', 1, function () {
    print('RadioNodeList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(RadioNodeList.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('RadioNodeList.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('RadioNodeList.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('RadioNodeList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PromiseRejectionEvent = newFunc('PromiseRejectionEvent', 1, function () {
    print('PromiseRejectionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PromiseRejectionEvent.prototype, {
    promise: {

        get: newFunc('promise', 10, function () {
            let res = mm.memory.private_data.get(this).promise;
            if (debug) print('PromiseRejectionEvent.promise.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('PromiseRejectionEvent.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PromiseRejectionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Profiler = newFunc('Profiler', 1, function () {
    print('Profiler.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Profiler.prototype, {
    sampleInterval: {

        get: newFunc('sampleInterval', 10, function () {
            let res = mm.memory.private_data.get(this).sampleInterval;
            if (debug) print('Profiler.sampleInterval.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stopped: {

        get: newFunc('stopped', 10, function () {
            let res = mm.memory.private_data.get(this).stopped;
            if (debug) print('Profiler.stopped.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    stop: {

        value: newFunc('stop', 10, function () {
            if (debug) print('Profiler.stop.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Profiler.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ProcessingInstruction = newFunc('ProcessingInstruction', 1, function () {
    print('ProcessingInstruction.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ProcessingInstruction.prototype, {
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('ProcessingInstruction.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sheet: {

        get: newFunc('sheet', 10, function () {
            let res = mm.memory.private_data.get(this).sheet;
            if (debug) print('ProcessingInstruction.sheet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ProcessingInstruction.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PopStateEvent = newFunc('PopStateEvent', 1, function () {
    print('PopStateEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PopStateEvent.prototype, {
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('PopStateEvent.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hasUAVisualTransition: {

        get: newFunc('hasUAVisualTransition', 10, function () {
            let res = mm.memory.private_data.get(this).hasUAVisualTransition;
            if (debug) print('PopStateEvent.hasUAVisualTransition.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PopStateEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PictureInPictureEvent = newFunc('PictureInPictureEvent', 1, function () {
    print('PictureInPictureEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PictureInPictureEvent.prototype, {
    pictureInPictureWindow: {

        get: newFunc('pictureInPictureWindow', 10, function () {
            let res = mm.memory.private_data.get(this).pictureInPictureWindow;
            if (debug) print('PictureInPictureEvent.pictureInPictureWindow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PictureInPictureEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PeriodicWave = newFunc('PeriodicWave', 1, function () {
    print('PeriodicWave.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PeriodicWave.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PeriodicWave.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceServerTiming = newFunc('PerformanceServerTiming', 1, function () {
    print('PerformanceServerTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceServerTiming.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('PerformanceServerTiming.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    duration: {

        get: newFunc('duration', 10, function () {
            let res = mm.memory.private_data.get(this).duration;
            if (debug) print('PerformanceServerTiming.duration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    description: {

        get: newFunc('description', 10, function () {
            let res = mm.memory.private_data.get(this).description;
            if (debug) print('PerformanceServerTiming.description.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PerformanceServerTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceServerTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceObserverEntryList = newFunc('PerformanceObserverEntryList', 1, function () {
    print('PerformanceObserverEntryList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceObserverEntryList.prototype, {
    getEntries: {

        value: newFunc('getEntries', 10, function () {
            if (debug) print('PerformanceObserverEntryList.getEntries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getEntriesByName: {

        value: newFunc('getEntriesByName', 10, function () {
            if (debug) print('PerformanceObserverEntryList.getEntriesByName.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getEntriesByType: {

        value: newFunc('getEntriesByType', 10, function (t) {
            if (debug) print('PerformanceObserverEntryList.getEntriesByType.call', arguments)


        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceObserverEntryList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceMeasure = newFunc('PerformanceMeasure', 1, function () {
    print('PerformanceMeasure.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceMeasure.prototype, {
    detail: {

        get: newFunc('detail', 10, function () {
            let res = mm.memory.private_data.get(this).detail;
            if (debug) print('PerformanceMeasure.detail.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceMeasure.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceMark = newFunc('PerformanceMark', 1, function (d) {
    print('PerformanceMark.call');
    mm.memory.private_data.set(this, d)
})


Object.defineProperties(PerformanceMark.prototype, {
    detail: {

        get: newFunc('detail', 10, function () {
            let res = mm.memory.private_data.get(this).detail;
            if (debug) print('PerformanceMark.detail.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceMark.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceLongTaskTiming = newFunc('PerformanceLongTaskTiming', 1, function () {
    print('PerformanceLongTaskTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceLongTaskTiming.prototype, {
    attribution: {

        get: newFunc('attribution', 10, function () {
            let res = mm.memory.private_data.get(this).attribution;
            if (debug) print('PerformanceLongTaskTiming.attribution.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PerformanceLongTaskTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceLongTaskTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceEventTiming = newFunc('PerformanceEventTiming', 1, function () {
    print('PerformanceEventTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceEventTiming.prototype, {
    processingStart: {

        get: newFunc('processingStart', 10, function () {
            let res = mm.memory.private_data.get(this).processingStart;
            if (debug) print('PerformanceEventTiming.processingStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    processingEnd: {

        get: newFunc('processingEnd', 10, function () {
            let res = mm.memory.private_data.get(this).processingEnd;
            if (debug) print('PerformanceEventTiming.processingEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cancelable: {

        get: newFunc('cancelable', 10, function () {
            let res = mm.memory.private_data.get(this).cancelable;
            if (debug) print('PerformanceEventTiming.cancelable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('PerformanceEventTiming.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interactionId: {

        get: newFunc('interactionId', 10, function () {
            let res = mm.memory.private_data.get(this).interactionId;
            if (debug) print('PerformanceEventTiming.interactionId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PerformanceEventTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceEventTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceElementTiming = newFunc('PerformanceElementTiming', 1, function () {
    print('PerformanceElementTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceElementTiming.prototype, {
    renderTime: {

        get: newFunc('renderTime', 10, function () {
            let res = mm.memory.private_data.get(this).renderTime;
            if (debug) print('PerformanceElementTiming.renderTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    loadTime: {

        get: newFunc('loadTime', 10, function () {
            let res = mm.memory.private_data.get(this).loadTime;
            if (debug) print('PerformanceElementTiming.loadTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    intersectionRect: {

        get: newFunc('intersectionRect', 10, function () {
            let res = mm.memory.private_data.get(this).intersectionRect;
            if (debug) print('PerformanceElementTiming.intersectionRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    identifier: {

        get: newFunc('identifier', 10, function () {
            let res = mm.memory.private_data.get(this).identifier;
            if (debug) print('PerformanceElementTiming.identifier.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    naturalWidth: {

        get: newFunc('naturalWidth', 10, function () {
            let res = mm.memory.private_data.get(this).naturalWidth;
            if (debug) print('PerformanceElementTiming.naturalWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    naturalHeight: {

        get: newFunc('naturalHeight', 10, function () {
            let res = mm.memory.private_data.get(this).naturalHeight;
            if (debug) print('PerformanceElementTiming.naturalHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('PerformanceElementTiming.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    element: {

        get: newFunc('element', 10, function () {
            let res = mm.memory.private_data.get(this).element;
            if (debug) print('PerformanceElementTiming.element.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('PerformanceElementTiming.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PerformanceElementTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceElementTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Path2D = newFunc('Path2D', 1, function () {
    print('Path2D.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Path2D.prototype, {
    addPath: {

        value: newFunc('addPath', 10, function () {
            if (debug) print('Path2D.addPath.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    roundRect: {

        value: newFunc('roundRect', 10, function () {
            if (debug) print('Path2D.roundRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    arc: {

        value: newFunc('arc', 10, function () {
            if (debug) print('Path2D.arc.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    arcTo: {

        value: newFunc('arcTo', 10, function () {
            if (debug) print('Path2D.arcTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bezierCurveTo: {

        value: newFunc('bezierCurveTo', 10, function () {
            if (debug) print('Path2D.bezierCurveTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    closePath: {

        value: newFunc('closePath', 10, function () {
            if (debug) print('Path2D.closePath.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ellipse: {

        value: newFunc('ellipse', 10, function () {
            if (debug) print('Path2D.ellipse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lineTo: {

        value: newFunc('lineTo', 10, function () {
            if (debug) print('Path2D.lineTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    moveTo: {

        value: newFunc('moveTo', 10, function () {
            if (debug) print('Path2D.moveTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    quadraticCurveTo: {

        value: newFunc('quadraticCurveTo', 10, function () {
            if (debug) print('Path2D.quadraticCurveTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rect: {

        value: newFunc('rect', 10, function () {
            if (debug) print('Path2D.rect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Path2D.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PannerNode = newFunc('PannerNode', 1, function () {
    print('PannerNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PannerNode.prototype, {
    panningModel: {

        get: newFunc('panningModel', 10, function () {
            let res = mm.memory.private_data.get(this).panningModel;
            if (debug) print('PannerNode.panningModel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('panningModel', 1, function (value) {
            if (debug) print('PannerNode.panningModel.set', value)
            mm.memory.private_data.get(this).panningModel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    positionX: {

        get: newFunc('positionX', 10, function () {
            let res = mm.memory.private_data.get(this).positionX;
            if (debug) print('PannerNode.positionX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    positionY: {

        get: newFunc('positionY', 10, function () {
            let res = mm.memory.private_data.get(this).positionY;
            if (debug) print('PannerNode.positionY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    positionZ: {

        get: newFunc('positionZ', 10, function () {
            let res = mm.memory.private_data.get(this).positionZ;
            if (debug) print('PannerNode.positionZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orientationX: {

        get: newFunc('orientationX', 10, function () {
            let res = mm.memory.private_data.get(this).orientationX;
            if (debug) print('PannerNode.orientationX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orientationY: {

        get: newFunc('orientationY', 10, function () {
            let res = mm.memory.private_data.get(this).orientationY;
            if (debug) print('PannerNode.orientationY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    orientationZ: {

        get: newFunc('orientationZ', 10, function () {
            let res = mm.memory.private_data.get(this).orientationZ;
            if (debug) print('PannerNode.orientationZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    distanceModel: {

        get: newFunc('distanceModel', 10, function () {
            let res = mm.memory.private_data.get(this).distanceModel;
            if (debug) print('PannerNode.distanceModel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('distanceModel', 1, function (value) {
            if (debug) print('PannerNode.distanceModel.set', value)
            mm.memory.private_data.get(this).distanceModel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    refDistance: {

        get: newFunc('refDistance', 10, function () {
            let res = mm.memory.private_data.get(this).refDistance;
            if (debug) print('PannerNode.refDistance.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('refDistance', 1, function (value) {
            if (debug) print('PannerNode.refDistance.set', value)
            mm.memory.private_data.get(this).refDistance = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    maxDistance: {

        get: newFunc('maxDistance', 10, function () {
            let res = mm.memory.private_data.get(this).maxDistance;
            if (debug) print('PannerNode.maxDistance.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxDistance', 1, function (value) {
            if (debug) print('PannerNode.maxDistance.set', value)
            mm.memory.private_data.get(this).maxDistance = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rolloffFactor: {

        get: newFunc('rolloffFactor', 10, function () {
            let res = mm.memory.private_data.get(this).rolloffFactor;
            if (debug) print('PannerNode.rolloffFactor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rolloffFactor', 1, function (value) {
            if (debug) print('PannerNode.rolloffFactor.set', value)
            mm.memory.private_data.get(this).rolloffFactor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    coneInnerAngle: {

        get: newFunc('coneInnerAngle', 10, function () {
            let res = mm.memory.private_data.get(this).coneInnerAngle;
            if (debug) print('PannerNode.coneInnerAngle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('coneInnerAngle', 1, function (value) {
            if (debug) print('PannerNode.coneInnerAngle.set', value)
            mm.memory.private_data.get(this).coneInnerAngle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    coneOuterAngle: {

        get: newFunc('coneOuterAngle', 10, function () {
            let res = mm.memory.private_data.get(this).coneOuterAngle;
            if (debug) print('PannerNode.coneOuterAngle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('coneOuterAngle', 1, function (value) {
            if (debug) print('PannerNode.coneOuterAngle.set', value)
            mm.memory.private_data.get(this).coneOuterAngle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    coneOuterGain: {

        get: newFunc('coneOuterGain', 10, function () {
            let res = mm.memory.private_data.get(this).coneOuterGain;
            if (debug) print('PannerNode.coneOuterGain.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('coneOuterGain', 1, function (value) {
            if (debug) print('PannerNode.coneOuterGain.set', value)
            mm.memory.private_data.get(this).coneOuterGain = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    setOrientation: {

        value: newFunc('setOrientation', 10, function () {
            if (debug) print('PannerNode.setOrientation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setPosition: {

        value: newFunc('setPosition', 10, function () {
            if (debug) print('PannerNode.setPosition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PannerNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PageTransitionEvent = newFunc('PageTransitionEvent', 1, function () {
    print('PageTransitionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PageTransitionEvent.prototype, {
    persisted: {

        get: newFunc('persisted', 10, function () {
            let res = mm.memory.private_data.get(this).persisted;
            if (debug) print('PageTransitionEvent.persisted.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PageTransitionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

OverconstrainedError = newFunc('OverconstrainedError', 1, function () {
    print('OverconstrainedError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(OverconstrainedError.prototype, {
    constraint: {

        get: newFunc('constraint', 10, function () {
            let res = mm.memory.private_data.get(this).constraint;
            if (debug) print('OverconstrainedError.constraint.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('OverconstrainedError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

OffscreenCanvasRenderingContext2D = newFunc('OffscreenCanvasRenderingContext2D', 1, function () {
    print('OffscreenCanvasRenderingContext2D.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(OffscreenCanvasRenderingContext2D.prototype, {
    canvas: {

        get: newFunc('canvas', 10, function () {
            let res = mm.memory.private_data.get(this).canvas;
            if (debug) print('OffscreenCanvasRenderingContext2D.canvas.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    globalAlpha: {

        get: newFunc('globalAlpha', 10, function () {
            let res = mm.memory.private_data.get(this).globalAlpha;
            if (debug) print('OffscreenCanvasRenderingContext2D.globalAlpha.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('globalAlpha', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.globalAlpha.set', value)
            mm.memory.private_data.get(this).globalAlpha = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    globalCompositeOperation: {

        get: newFunc('globalCompositeOperation', 10, function () {
            let res = mm.memory.private_data.get(this).globalCompositeOperation;
            if (debug) print('OffscreenCanvasRenderingContext2D.globalCompositeOperation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('globalCompositeOperation', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.globalCompositeOperation.set', value)
            mm.memory.private_data.get(this).globalCompositeOperation = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    filter: {

        get: newFunc('filter', 10, function () {
            let res = mm.memory.private_data.get(this).filter;
            if (debug) print('OffscreenCanvasRenderingContext2D.filter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('filter', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.filter.set', value)
            mm.memory.private_data.get(this).filter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    imageSmoothingEnabled: {

        get: newFunc('imageSmoothingEnabled', 10, function () {
            let res = mm.memory.private_data.get(this).imageSmoothingEnabled;
            if (debug) print('OffscreenCanvasRenderingContext2D.imageSmoothingEnabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('imageSmoothingEnabled', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.imageSmoothingEnabled.set', value)
            mm.memory.private_data.get(this).imageSmoothingEnabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    imageSmoothingQuality: {

        get: newFunc('imageSmoothingQuality', 10, function () {
            let res = mm.memory.private_data.get(this).imageSmoothingQuality;
            if (debug) print('OffscreenCanvasRenderingContext2D.imageSmoothingQuality.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('imageSmoothingQuality', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.imageSmoothingQuality.set', value)
            mm.memory.private_data.get(this).imageSmoothingQuality = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    strokeStyle: {

        get: newFunc('strokeStyle', 10, function () {
            let res = mm.memory.private_data.get(this).strokeStyle;
            if (debug) print('OffscreenCanvasRenderingContext2D.strokeStyle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('strokeStyle', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.strokeStyle.set', value)
            mm.memory.private_data.get(this).strokeStyle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fillStyle: {

        get: newFunc('fillStyle', 10, function () {
            let res = mm.memory.private_data.get(this).fillStyle;
            if (debug) print('OffscreenCanvasRenderingContext2D.fillStyle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fillStyle', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.fillStyle.set', value)
            mm.memory.private_data.get(this).fillStyle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shadowOffsetX: {

        get: newFunc('shadowOffsetX', 10, function () {
            let res = mm.memory.private_data.get(this).shadowOffsetX;
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowOffsetX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowOffsetX', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowOffsetX.set', value)
            mm.memory.private_data.get(this).shadowOffsetX = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shadowOffsetY: {

        get: newFunc('shadowOffsetY', 10, function () {
            let res = mm.memory.private_data.get(this).shadowOffsetY;
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowOffsetY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowOffsetY', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowOffsetY.set', value)
            mm.memory.private_data.get(this).shadowOffsetY = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shadowBlur: {

        get: newFunc('shadowBlur', 10, function () {
            let res = mm.memory.private_data.get(this).shadowBlur;
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowBlur.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowBlur', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowBlur.set', value)
            mm.memory.private_data.get(this).shadowBlur = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shadowColor: {

        get: newFunc('shadowColor', 10, function () {
            let res = mm.memory.private_data.get(this).shadowColor;
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowColor', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.shadowColor.set', value)
            mm.memory.private_data.get(this).shadowColor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lineWidth: {

        get: newFunc('lineWidth', 10, function () {
            let res = mm.memory.private_data.get(this).lineWidth;
            if (debug) print('OffscreenCanvasRenderingContext2D.lineWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lineWidth', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.lineWidth.set', value)
            mm.memory.private_data.get(this).lineWidth = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lineCap: {

        get: newFunc('lineCap', 10, function () {
            let res = mm.memory.private_data.get(this).lineCap;
            if (debug) print('OffscreenCanvasRenderingContext2D.lineCap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lineCap', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.lineCap.set', value)
            mm.memory.private_data.get(this).lineCap = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lineJoin: {

        get: newFunc('lineJoin', 10, function () {
            let res = mm.memory.private_data.get(this).lineJoin;
            if (debug) print('OffscreenCanvasRenderingContext2D.lineJoin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lineJoin', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.lineJoin.set', value)
            mm.memory.private_data.get(this).lineJoin = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    miterLimit: {

        get: newFunc('miterLimit', 10, function () {
            let res = mm.memory.private_data.get(this).miterLimit;
            if (debug) print('OffscreenCanvasRenderingContext2D.miterLimit.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('miterLimit', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.miterLimit.set', value)
            mm.memory.private_data.get(this).miterLimit = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lineDashOffset: {

        get: newFunc('lineDashOffset', 10, function () {
            let res = mm.memory.private_data.get(this).lineDashOffset;
            if (debug) print('OffscreenCanvasRenderingContext2D.lineDashOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lineDashOffset', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.lineDashOffset.set', value)
            mm.memory.private_data.get(this).lineDashOffset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    font: {

        get: newFunc('font', 10, function () {
            let res = mm.memory.private_data.get(this).font;
            if (debug) print('OffscreenCanvasRenderingContext2D.font.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('font', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.font.set', value)
            mm.memory.private_data.get(this).font = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    textAlign: {

        get: newFunc('textAlign', 10, function () {
            let res = mm.memory.private_data.get(this).textAlign;
            if (debug) print('OffscreenCanvasRenderingContext2D.textAlign.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('textAlign', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.textAlign.set', value)
            mm.memory.private_data.get(this).textAlign = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    textBaseline: {

        get: newFunc('textBaseline', 10, function () {
            let res = mm.memory.private_data.get(this).textBaseline;
            if (debug) print('OffscreenCanvasRenderingContext2D.textBaseline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('textBaseline', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.textBaseline.set', value)
            mm.memory.private_data.get(this).textBaseline = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    direction: {

        get: newFunc('direction', 10, function () {
            let res = mm.memory.private_data.get(this).direction;
            if (debug) print('OffscreenCanvasRenderingContext2D.direction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('direction', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.direction.set', value)
            mm.memory.private_data.get(this).direction = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fontKerning: {

        get: newFunc('fontKerning', 10, function () {
            let res = mm.memory.private_data.get(this).fontKerning;
            if (debug) print('OffscreenCanvasRenderingContext2D.fontKerning.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fontKerning', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.fontKerning.set', value)
            mm.memory.private_data.get(this).fontKerning = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fontStretch: {

        get: newFunc('fontStretch', 10, function () {
            let res = mm.memory.private_data.get(this).fontStretch;
            if (debug) print('OffscreenCanvasRenderingContext2D.fontStretch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fontStretch', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.fontStretch.set', value)
            mm.memory.private_data.get(this).fontStretch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    fontVariantCaps: {

        get: newFunc('fontVariantCaps', 10, function () {
            let res = mm.memory.private_data.get(this).fontVariantCaps;
            if (debug) print('OffscreenCanvasRenderingContext2D.fontVariantCaps.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fontVariantCaps', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.fontVariantCaps.set', value)
            mm.memory.private_data.get(this).fontVariantCaps = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    letterSpacing: {

        get: newFunc('letterSpacing', 10, function () {
            let res = mm.memory.private_data.get(this).letterSpacing;
            if (debug) print('OffscreenCanvasRenderingContext2D.letterSpacing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('letterSpacing', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.letterSpacing.set', value)
            mm.memory.private_data.get(this).letterSpacing = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    textRendering: {

        get: newFunc('textRendering', 10, function () {
            let res = mm.memory.private_data.get(this).textRendering;
            if (debug) print('OffscreenCanvasRenderingContext2D.textRendering.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('textRendering', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.textRendering.set', value)
            mm.memory.private_data.get(this).textRendering = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    wordSpacing: {

        get: newFunc('wordSpacing', 10, function () {
            let res = mm.memory.private_data.get(this).wordSpacing;
            if (debug) print('OffscreenCanvasRenderingContext2D.wordSpacing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('wordSpacing', 1, function (value) {
            if (debug) print('OffscreenCanvasRenderingContext2D.wordSpacing.set', value)
            mm.memory.private_data.get(this).wordSpacing = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    clip: {

        value: newFunc('clip', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.clip.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createConicGradient: {

        value: newFunc('createConicGradient', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.createConicGradient.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createImageData: {

        value: newFunc('createImageData', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.createImageData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createLinearGradient: {

        value: newFunc('createLinearGradient', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.createLinearGradient.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createPattern: {

        value: newFunc('createPattern', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.createPattern.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createRadialGradient: {

        value: newFunc('createRadialGradient', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.createRadialGradient.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    drawImage: {

        value: newFunc('drawImage', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.drawImage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    fill: {

        value: newFunc('fill', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.fill.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    fillText: {

        value: newFunc('fillText', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.fillText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getImageData: {

        value: newFunc('getImageData', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.getImageData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getLineDash: {

        value: newFunc('getLineDash', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.getLineDash.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTransform: {

        value: newFunc('getTransform', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.getTransform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isContextLost: {

        value: newFunc('isContextLost', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.isContextLost.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isPointInPath: {

        value: newFunc('isPointInPath', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.isPointInPath.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    isPointInStroke: {

        value: newFunc('isPointInStroke', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.isPointInStroke.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    measureText: {

        value: newFunc('measureText', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.measureText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    putImageData: {

        value: newFunc('putImageData', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.putImageData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    roundRect: {

        value: newFunc('roundRect', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.roundRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    save: {

        value: newFunc('save', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.save.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scale: {

        value: newFunc('scale', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.scale.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setLineDash: {

        value: newFunc('setLineDash', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.setLineDash.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setTransform: {

        value: newFunc('setTransform', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.setTransform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stroke: {

        value: newFunc('stroke', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.stroke.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    strokeText: {

        value: newFunc('strokeText', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.strokeText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    transform: {

        value: newFunc('transform', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.transform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    translate: {

        value: newFunc('translate', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.translate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    arc: {

        value: newFunc('arc', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.arc.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    arcTo: {

        value: newFunc('arcTo', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.arcTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    beginPath: {

        value: newFunc('beginPath', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.beginPath.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    bezierCurveTo: {

        value: newFunc('bezierCurveTo', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.bezierCurveTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clearRect: {

        value: newFunc('clearRect', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.clearRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    closePath: {

        value: newFunc('closePath', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.closePath.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ellipse: {

        value: newFunc('ellipse', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.ellipse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    fillRect: {

        value: newFunc('fillRect', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.fillRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lineTo: {

        value: newFunc('lineTo', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.lineTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    moveTo: {

        value: newFunc('moveTo', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.moveTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    quadraticCurveTo: {

        value: newFunc('quadraticCurveTo', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.quadraticCurveTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rect: {

        value: newFunc('rect', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.rect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    resetTransform: {

        value: newFunc('resetTransform', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.resetTransform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    restore: {

        value: newFunc('restore', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.restore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotate: {

        value: newFunc('rotate', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.rotate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    strokeRect: {

        value: newFunc('strokeRect', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.strokeRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('OffscreenCanvasRenderingContext2D.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

OfflineAudioCompletionEvent = newFunc('OfflineAudioCompletionEvent', 1, function (renderedBuffer) {
    print('OfflineAudioCompletionEvent.call');
    mm.memory.private_data.set(this, {
        renderedBuffer: renderedBuffer
    })
})


Object.defineProperties(OfflineAudioCompletionEvent.prototype, {
    renderedBuffer: {

        get: newFunc('renderedBuffer', 10, function () {
            let res = mm.memory.private_data.get(this).renderedBuffer;
            if (debug) print('OfflineAudioCompletionEvent.renderedBuffer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('OfflineAudioCompletionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


NodeIterator = newFunc('NodeIterator', 1, function () {
    print('NodeIterator.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(NodeIterator.prototype, {
    root: {

        get: newFunc('root', 10, function () {
            let res = mm.memory.private_data.get(this).root;
            if (debug) print('NodeIterator.root.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    referenceNode: {

        get: newFunc('referenceNode', 10, function () {
            let res = mm.memory.private_data.get(this).referenceNode;
            if (debug) print('NodeIterator.referenceNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pointerBeforeReferenceNode: {

        get: newFunc('pointerBeforeReferenceNode', 10, function () {
            let res = mm.memory.private_data.get(this).pointerBeforeReferenceNode;
            if (debug) print('NodeIterator.pointerBeforeReferenceNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    whatToShow: {

        get: newFunc('whatToShow', 10, function () {
            let res = mm.memory.private_data.get(this).whatToShow;
            if (debug) print('NodeIterator.whatToShow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    filter: {

        get: newFunc('filter', 10, function () {
            let res = mm.memory.private_data.get(this).filter;
            if (debug) print('NodeIterator.filter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    detach: {

        value: newFunc('detach', 10, function () {
            if (debug) print('NodeIterator.detach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    nextNode: {

        value: newFunc('nextNode', 10, function () {
            if (debug) print('NodeIterator.nextNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    previousNode: {

        value: newFunc('previousNode', 10, function () {
            if (debug) print('NodeIterator.previousNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('NodeIterator.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

NodeFilter = newFunc('NodeFilter', 10, function () {
    print('window.NodeFilter.call');
});


NamedNodeMap = newFunc('NamedNodeMap', 1, function () {
    print('NamedNodeMap.call');
    mm.memory.private_data.set(this, {
        length: 0,
    })
    // this[0] = new Attr('lang');
})


Object.defineProperties(NamedNodeMap.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('NamedNodeMap.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getNamedItem: {

        value: newFunc('getNamedItem', 10, function () {
            if (debug) print('NamedNodeMap.getNamedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getNamedItemNS: {

        value: newFunc('getNamedItemNS', 10, function () {
            if (debug) print('NamedNodeMap.getNamedItemNS.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    item: {

        value: newFunc('item', 10, function () {
            if (debug) print('NamedNodeMap.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeNamedItem: {

        value: newFunc('removeNamedItem', 10, function () {
            if (debug) print('NamedNodeMap.removeNamedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeNamedItemNS: {

        value: newFunc('removeNamedItemNS', 10, function () {
            if (debug) print('NamedNodeMap.removeNamedItemNS.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setNamedItem: {

        value: newFunc('setNamedItem', 10, function () {
            if (debug) print('NamedNodeMap.setNamedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setNamedItemNS: {

        value: newFunc('setNamedItemNS', 10, function () {
            if (debug) print('NamedNodeMap.setNamedItemNS.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('NamedNodeMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MutationRecord = newFunc('MutationRecord', 1, function () {
    print('MutationRecord.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MutationRecord.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('MutationRecord.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('MutationRecord.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    addedNodes: {

        get: newFunc('addedNodes', 10, function () {
            let res = mm.memory.private_data.get(this).addedNodes;
            if (debug) print('MutationRecord.addedNodes.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    removedNodes: {

        get: newFunc('removedNodes', 10, function () {
            let res = mm.memory.private_data.get(this).removedNodes;
            if (debug) print('MutationRecord.removedNodes.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    previousSibling: {

        get: newFunc('previousSibling', 10, function () {
            let res = mm.memory.private_data.get(this).previousSibling;
            if (debug) print('MutationRecord.previousSibling.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    nextSibling: {

        get: newFunc('nextSibling', 10, function () {
            let res = mm.memory.private_data.get(this).nextSibling;
            if (debug) print('MutationRecord.nextSibling.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    attributeName: {

        get: newFunc('attributeName', 10, function () {
            let res = mm.memory.private_data.get(this).attributeName;
            if (debug) print('MutationRecord.attributeName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    attributeNamespace: {

        get: newFunc('attributeNamespace', 10, function () {
            let res = mm.memory.private_data.get(this).attributeNamespace;
            if (debug) print('MutationRecord.attributeNamespace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    oldValue: {

        get: newFunc('oldValue', 10, function () {
            let res = mm.memory.private_data.get(this).oldValue;
            if (debug) print('MutationRecord.oldValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MutationRecord.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MathMLElement = newFunc('MathMLElement', 1, function () {
    print('MathMLElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MathMLElement.prototype, {
    onbeforexrselect: {

        get: newFunc('onbeforexrselect', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforexrselect;
            if (debug) print('MathMLElement.onbeforexrselect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforexrselect', 1, function (value) {
            if (debug) print('MathMLElement.onbeforexrselect.set', value)
            mm.memory.private_data.get(this).onbeforexrselect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onabort: {

        get: newFunc('onabort', 10, function () {
            let res = mm.memory.private_data.get(this).onabort;
            if (debug) print('MathMLElement.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function (value) {
            if (debug) print('MathMLElement.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforeinput: {

        get: newFunc('onbeforeinput', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforeinput;
            if (debug) print('MathMLElement.onbeforeinput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforeinput', 1, function (value) {
            if (debug) print('MathMLElement.onbeforeinput.set', value)
            mm.memory.private_data.get(this).onbeforeinput = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforematch: {

        get: newFunc('onbeforematch', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforematch;
            if (debug) print('MathMLElement.onbeforematch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforematch', 1, function (value) {
            if (debug) print('MathMLElement.onbeforematch.set', value)
            mm.memory.private_data.get(this).onbeforematch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforetoggle: {

        get: newFunc('onbeforetoggle', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforetoggle;
            if (debug) print('MathMLElement.onbeforetoggle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforetoggle', 1, function (value) {
            if (debug) print('MathMLElement.onbeforetoggle.set', value)
            mm.memory.private_data.get(this).onbeforetoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onblur: {

        get: newFunc('onblur', 10, function () {
            let res = mm.memory.private_data.get(this).onblur;
            if (debug) print('MathMLElement.onblur.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onblur', 1, function (value) {
            if (debug) print('MathMLElement.onblur.set', value)
            mm.memory.private_data.get(this).onblur = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncancel: {

        get: newFunc('oncancel', 10, function () {
            let res = mm.memory.private_data.get(this).oncancel;
            if (debug) print('MathMLElement.oncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncancel', 1, function (value) {
            if (debug) print('MathMLElement.oncancel.set', value)
            mm.memory.private_data.get(this).oncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncanplay: {

        get: newFunc('oncanplay', 10, function () {
            let res = mm.memory.private_data.get(this).oncanplay;
            if (debug) print('MathMLElement.oncanplay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncanplay', 1, function (value) {
            if (debug) print('MathMLElement.oncanplay.set', value)
            mm.memory.private_data.get(this).oncanplay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncanplaythrough: {

        get: newFunc('oncanplaythrough', 10, function () {
            let res = mm.memory.private_data.get(this).oncanplaythrough;
            if (debug) print('MathMLElement.oncanplaythrough.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncanplaythrough', 1, function (value) {
            if (debug) print('MathMLElement.oncanplaythrough.set', value)
            mm.memory.private_data.get(this).oncanplaythrough = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onchange: {

        get: newFunc('onchange', 10, function () {
            let res = mm.memory.private_data.get(this).onchange;
            if (debug) print('MathMLElement.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function (value) {
            if (debug) print('MathMLElement.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclick: {

        get: newFunc('onclick', 10, function () {
            let res = mm.memory.private_data.get(this).onclick;
            if (debug) print('MathMLElement.onclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclick', 1, function (value) {
            if (debug) print('MathMLElement.onclick.set', value)
            mm.memory.private_data.get(this).onclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclose: {

        get: newFunc('onclose', 10, function () {
            let res = mm.memory.private_data.get(this).onclose;
            if (debug) print('MathMLElement.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function (value) {
            if (debug) print('MathMLElement.onclose.set', value)
            mm.memory.private_data.get(this).onclose = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontentvisibilityautostatechange: {

        get: newFunc('oncontentvisibilityautostatechange', 10, function () {
            let res = mm.memory.private_data.get(this).oncontentvisibilityautostatechange;
            if (debug) print('MathMLElement.oncontentvisibilityautostatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontentvisibilityautostatechange', 1, function (value) {
            if (debug) print('MathMLElement.oncontentvisibilityautostatechange.set', value)
            mm.memory.private_data.get(this).oncontentvisibilityautostatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextlost: {

        get: newFunc('oncontextlost', 10, function () {
            let res = mm.memory.private_data.get(this).oncontextlost;
            if (debug) print('MathMLElement.oncontextlost.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextlost', 1, function (value) {
            if (debug) print('MathMLElement.oncontextlost.set', value)
            mm.memory.private_data.get(this).oncontextlost = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextmenu: {

        get: newFunc('oncontextmenu', 10, function () {
            let res = mm.memory.private_data.get(this).oncontextmenu;
            if (debug) print('MathMLElement.oncontextmenu.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextmenu', 1, function (value) {
            if (debug) print('MathMLElement.oncontextmenu.set', value)
            mm.memory.private_data.get(this).oncontextmenu = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextrestored: {

        get: newFunc('oncontextrestored', 10, function () {
            let res = mm.memory.private_data.get(this).oncontextrestored;
            if (debug) print('MathMLElement.oncontextrestored.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextrestored', 1, function (value) {
            if (debug) print('MathMLElement.oncontextrestored.set', value)
            mm.memory.private_data.get(this).oncontextrestored = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncuechange: {

        get: newFunc('oncuechange', 10, function () {
            let res = mm.memory.private_data.get(this).oncuechange;
            if (debug) print('MathMLElement.oncuechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncuechange', 1, function (value) {
            if (debug) print('MathMLElement.oncuechange.set', value)
            mm.memory.private_data.get(this).oncuechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondblclick: {

        get: newFunc('ondblclick', 10, function () {
            let res = mm.memory.private_data.get(this).ondblclick;
            if (debug) print('MathMLElement.ondblclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondblclick', 1, function (value) {
            if (debug) print('MathMLElement.ondblclick.set', value)
            mm.memory.private_data.get(this).ondblclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondrag: {

        get: newFunc('ondrag', 10, function () {
            let res = mm.memory.private_data.get(this).ondrag;
            if (debug) print('MathMLElement.ondrag.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondrag', 1, function (value) {
            if (debug) print('MathMLElement.ondrag.set', value)
            mm.memory.private_data.get(this).ondrag = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragend: {

        get: newFunc('ondragend', 10, function () {
            let res = mm.memory.private_data.get(this).ondragend;
            if (debug) print('MathMLElement.ondragend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragend', 1, function (value) {
            if (debug) print('MathMLElement.ondragend.set', value)
            mm.memory.private_data.get(this).ondragend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragenter: {

        get: newFunc('ondragenter', 10, function () {
            let res = mm.memory.private_data.get(this).ondragenter;
            if (debug) print('MathMLElement.ondragenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragenter', 1, function (value) {
            if (debug) print('MathMLElement.ondragenter.set', value)
            mm.memory.private_data.get(this).ondragenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragleave: {

        get: newFunc('ondragleave', 10, function () {
            let res = mm.memory.private_data.get(this).ondragleave;
            if (debug) print('MathMLElement.ondragleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragleave', 1, function (value) {
            if (debug) print('MathMLElement.ondragleave.set', value)
            mm.memory.private_data.get(this).ondragleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragover: {

        get: newFunc('ondragover', 10, function () {
            let res = mm.memory.private_data.get(this).ondragover;
            if (debug) print('MathMLElement.ondragover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragover', 1, function (value) {
            if (debug) print('MathMLElement.ondragover.set', value)
            mm.memory.private_data.get(this).ondragover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragstart: {

        get: newFunc('ondragstart', 10, function () {
            let res = mm.memory.private_data.get(this).ondragstart;
            if (debug) print('MathMLElement.ondragstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragstart', 1, function (value) {
            if (debug) print('MathMLElement.ondragstart.set', value)
            mm.memory.private_data.get(this).ondragstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondrop: {

        get: newFunc('ondrop', 10, function () {
            let res = mm.memory.private_data.get(this).ondrop;
            if (debug) print('MathMLElement.ondrop.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondrop', 1, function (value) {
            if (debug) print('MathMLElement.ondrop.set', value)
            mm.memory.private_data.get(this).ondrop = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondurationchange: {

        get: newFunc('ondurationchange', 10, function () {
            let res = mm.memory.private_data.get(this).ondurationchange;
            if (debug) print('MathMLElement.ondurationchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondurationchange', 1, function (value) {
            if (debug) print('MathMLElement.ondurationchange.set', value)
            mm.memory.private_data.get(this).ondurationchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onemptied: {

        get: newFunc('onemptied', 10, function () {
            let res = mm.memory.private_data.get(this).onemptied;
            if (debug) print('MathMLElement.onemptied.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onemptied', 1, function (value) {
            if (debug) print('MathMLElement.onemptied.set', value)
            mm.memory.private_data.get(this).onemptied = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onended: {

        get: newFunc('onended', 10, function () {
            let res = mm.memory.private_data.get(this).onended;
            if (debug) print('MathMLElement.onended.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onended', 1, function (value) {
            if (debug) print('MathMLElement.onended.set', value)
            mm.memory.private_data.get(this).onended = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('MathMLElement.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('MathMLElement.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onfocus: {

        get: newFunc('onfocus', 10, function () {
            let res = mm.memory.private_data.get(this).onfocus;
            if (debug) print('MathMLElement.onfocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfocus', 1, function (value) {
            if (debug) print('MathMLElement.onfocus.set', value)
            mm.memory.private_data.get(this).onfocus = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onformdata: {

        get: newFunc('onformdata', 10, function () {
            let res = mm.memory.private_data.get(this).onformdata;
            if (debug) print('MathMLElement.onformdata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onformdata', 1, function (value) {
            if (debug) print('MathMLElement.onformdata.set', value)
            mm.memory.private_data.get(this).onformdata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninput: {

        get: newFunc('oninput', 10, function () {
            let res = mm.memory.private_data.get(this).oninput;
            if (debug) print('MathMLElement.oninput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninput', 1, function (value) {
            if (debug) print('MathMLElement.oninput.set', value)
            mm.memory.private_data.get(this).oninput = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninvalid: {

        get: newFunc('oninvalid', 10, function () {
            let res = mm.memory.private_data.get(this).oninvalid;
            if (debug) print('MathMLElement.oninvalid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninvalid', 1, function (value) {
            if (debug) print('MathMLElement.oninvalid.set', value)
            mm.memory.private_data.get(this).oninvalid = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeydown: {

        get: newFunc('onkeydown', 10, function () {
            let res = mm.memory.private_data.get(this).onkeydown;
            if (debug) print('MathMLElement.onkeydown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeydown', 1, function (value) {
            if (debug) print('MathMLElement.onkeydown.set', value)
            mm.memory.private_data.get(this).onkeydown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeypress: {

        get: newFunc('onkeypress', 10, function () {
            let res = mm.memory.private_data.get(this).onkeypress;
            if (debug) print('MathMLElement.onkeypress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeypress', 1, function (value) {
            if (debug) print('MathMLElement.onkeypress.set', value)
            mm.memory.private_data.get(this).onkeypress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeyup: {

        get: newFunc('onkeyup', 10, function () {
            let res = mm.memory.private_data.get(this).onkeyup;
            if (debug) print('MathMLElement.onkeyup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeyup', 1, function (value) {
            if (debug) print('MathMLElement.onkeyup.set', value)
            mm.memory.private_data.get(this).onkeyup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onload: {

        get: newFunc('onload', 10, function () {
            let res = mm.memory.private_data.get(this).onload;
            if (debug) print('MathMLElement.onload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onload', 1, function (value) {
            if (debug) print('MathMLElement.onload.set', value)
            mm.memory.private_data.get(this).onload = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadeddata: {

        get: newFunc('onloadeddata', 10, function () {
            let res = mm.memory.private_data.get(this).onloadeddata;
            if (debug) print('MathMLElement.onloadeddata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadeddata', 1, function (value) {
            if (debug) print('MathMLElement.onloadeddata.set', value)
            mm.memory.private_data.get(this).onloadeddata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadedmetadata: {

        get: newFunc('onloadedmetadata', 10, function () {
            let res = mm.memory.private_data.get(this).onloadedmetadata;
            if (debug) print('MathMLElement.onloadedmetadata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadedmetadata', 1, function (value) {
            if (debug) print('MathMLElement.onloadedmetadata.set', value)
            mm.memory.private_data.get(this).onloadedmetadata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadstart: {

        get: newFunc('onloadstart', 10, function () {
            let res = mm.memory.private_data.get(this).onloadstart;
            if (debug) print('MathMLElement.onloadstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadstart', 1, function (value) {
            if (debug) print('MathMLElement.onloadstart.set', value)
            mm.memory.private_data.get(this).onloadstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousedown: {

        get: newFunc('onmousedown', 10, function () {
            let res = mm.memory.private_data.get(this).onmousedown;
            if (debug) print('MathMLElement.onmousedown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousedown', 1, function (value) {
            if (debug) print('MathMLElement.onmousedown.set', value)
            mm.memory.private_data.get(this).onmousedown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseenter: {

        get: newFunc('onmouseenter', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseenter;
            if (debug) print('MathMLElement.onmouseenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseenter', 1, function (value) {
            if (debug) print('MathMLElement.onmouseenter.set', value)
            mm.memory.private_data.get(this).onmouseenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseleave: {

        get: newFunc('onmouseleave', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseleave;
            if (debug) print('MathMLElement.onmouseleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseleave', 1, function (value) {
            if (debug) print('MathMLElement.onmouseleave.set', value)
            mm.memory.private_data.get(this).onmouseleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousemove: {

        get: newFunc('onmousemove', 10, function () {
            let res = mm.memory.private_data.get(this).onmousemove;
            if (debug) print('MathMLElement.onmousemove.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousemove', 1, function (value) {
            if (debug) print('MathMLElement.onmousemove.set', value)
            mm.memory.private_data.get(this).onmousemove = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseout: {

        get: newFunc('onmouseout', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseout;
            if (debug) print('MathMLElement.onmouseout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseout', 1, function (value) {
            if (debug) print('MathMLElement.onmouseout.set', value)
            mm.memory.private_data.get(this).onmouseout = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseover: {

        get: newFunc('onmouseover', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseover;
            if (debug) print('MathMLElement.onmouseover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseover', 1, function (value) {
            if (debug) print('MathMLElement.onmouseover.set', value)
            mm.memory.private_data.get(this).onmouseover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseup: {

        get: newFunc('onmouseup', 10, function () {
            let res = mm.memory.private_data.get(this).onmouseup;
            if (debug) print('MathMLElement.onmouseup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseup', 1, function (value) {
            if (debug) print('MathMLElement.onmouseup.set', value)
            mm.memory.private_data.get(this).onmouseup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousewheel: {

        get: newFunc('onmousewheel', 10, function () {
            let res = mm.memory.private_data.get(this).onmousewheel;
            if (debug) print('MathMLElement.onmousewheel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousewheel', 1, function (value) {
            if (debug) print('MathMLElement.onmousewheel.set', value)
            mm.memory.private_data.get(this).onmousewheel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpause: {

        get: newFunc('onpause', 10, function () {
            let res = mm.memory.private_data.get(this).onpause;
            if (debug) print('MathMLElement.onpause.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpause', 1, function (value) {
            if (debug) print('MathMLElement.onpause.set', value)
            mm.memory.private_data.get(this).onpause = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onplay: {

        get: newFunc('onplay', 10, function () {
            let res = mm.memory.private_data.get(this).onplay;
            if (debug) print('MathMLElement.onplay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onplay', 1, function (value) {
            if (debug) print('MathMLElement.onplay.set', value)
            mm.memory.private_data.get(this).onplay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onplaying: {

        get: newFunc('onplaying', 10, function () {
            let res = mm.memory.private_data.get(this).onplaying;
            if (debug) print('MathMLElement.onplaying.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onplaying', 1, function (value) {
            if (debug) print('MathMLElement.onplaying.set', value)
            mm.memory.private_data.get(this).onplaying = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onprogress: {

        get: newFunc('onprogress', 10, function () {
            let res = mm.memory.private_data.get(this).onprogress;
            if (debug) print('MathMLElement.onprogress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprogress', 1, function (value) {
            if (debug) print('MathMLElement.onprogress.set', value)
            mm.memory.private_data.get(this).onprogress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onratechange: {

        get: newFunc('onratechange', 10, function () {
            let res = mm.memory.private_data.get(this).onratechange;
            if (debug) print('MathMLElement.onratechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onratechange', 1, function (value) {
            if (debug) print('MathMLElement.onratechange.set', value)
            mm.memory.private_data.get(this).onratechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onreset: {

        get: newFunc('onreset', 10, function () {
            let res = mm.memory.private_data.get(this).onreset;
            if (debug) print('MathMLElement.onreset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onreset', 1, function (value) {
            if (debug) print('MathMLElement.onreset.set', value)
            mm.memory.private_data.get(this).onreset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onresize: {

        get: newFunc('onresize', 10, function () {
            let res = mm.memory.private_data.get(this).onresize;
            if (debug) print('MathMLElement.onresize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresize', 1, function (value) {
            if (debug) print('MathMLElement.onresize.set', value)
            mm.memory.private_data.get(this).onresize = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscroll: {

        get: newFunc('onscroll', 10, function () {
            let res = mm.memory.private_data.get(this).onscroll;
            if (debug) print('MathMLElement.onscroll.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscroll', 1, function (value) {
            if (debug) print('MathMLElement.onscroll.set', value)
            mm.memory.private_data.get(this).onscroll = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsecuritypolicyviolation: {

        get: newFunc('onsecuritypolicyviolation', 10, function () {
            let res = mm.memory.private_data.get(this).onsecuritypolicyviolation;
            if (debug) print('MathMLElement.onsecuritypolicyviolation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsecuritypolicyviolation', 1, function (value) {
            if (debug) print('MathMLElement.onsecuritypolicyviolation.set', value)
            mm.memory.private_data.get(this).onsecuritypolicyviolation = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onseeked: {

        get: newFunc('onseeked', 10, function () {
            let res = mm.memory.private_data.get(this).onseeked;
            if (debug) print('MathMLElement.onseeked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onseeked', 1, function (value) {
            if (debug) print('MathMLElement.onseeked.set', value)
            mm.memory.private_data.get(this).onseeked = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onseeking: {

        get: newFunc('onseeking', 10, function () {
            let res = mm.memory.private_data.get(this).onseeking;
            if (debug) print('MathMLElement.onseeking.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onseeking', 1, function (value) {
            if (debug) print('MathMLElement.onseeking.set', value)
            mm.memory.private_data.get(this).onseeking = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselect: {

        get: newFunc('onselect', 10, function () {
            let res = mm.memory.private_data.get(this).onselect;
            if (debug) print('MathMLElement.onselect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselect', 1, function (value) {
            if (debug) print('MathMLElement.onselect.set', value)
            mm.memory.private_data.get(this).onselect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onslotchange: {

        get: newFunc('onslotchange', 10, function () {
            let res = mm.memory.private_data.get(this).onslotchange;
            if (debug) print('MathMLElement.onslotchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onslotchange', 1, function (value) {
            if (debug) print('MathMLElement.onslotchange.set', value)
            mm.memory.private_data.get(this).onslotchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onstalled: {

        get: newFunc('onstalled', 10, function () {
            let res = mm.memory.private_data.get(this).onstalled;
            if (debug) print('MathMLElement.onstalled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstalled', 1, function (value) {
            if (debug) print('MathMLElement.onstalled.set', value)
            mm.memory.private_data.get(this).onstalled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsubmit: {

        get: newFunc('onsubmit', 10, function () {
            let res = mm.memory.private_data.get(this).onsubmit;
            if (debug) print('MathMLElement.onsubmit.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsubmit', 1, function (value) {
            if (debug) print('MathMLElement.onsubmit.set', value)
            mm.memory.private_data.get(this).onsubmit = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsuspend: {

        get: newFunc('onsuspend', 10, function () {
            let res = mm.memory.private_data.get(this).onsuspend;
            if (debug) print('MathMLElement.onsuspend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsuspend', 1, function (value) {
            if (debug) print('MathMLElement.onsuspend.set', value)
            mm.memory.private_data.get(this).onsuspend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontimeupdate: {

        get: newFunc('ontimeupdate', 10, function () {
            let res = mm.memory.private_data.get(this).ontimeupdate;
            if (debug) print('MathMLElement.ontimeupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontimeupdate', 1, function (value) {
            if (debug) print('MathMLElement.ontimeupdate.set', value)
            mm.memory.private_data.get(this).ontimeupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontoggle: {

        get: newFunc('ontoggle', 10, function () {
            let res = mm.memory.private_data.get(this).ontoggle;
            if (debug) print('MathMLElement.ontoggle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontoggle', 1, function (value) {
            if (debug) print('MathMLElement.ontoggle.set', value)
            mm.memory.private_data.get(this).ontoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onvolumechange: {

        get: newFunc('onvolumechange', 10, function () {
            let res = mm.memory.private_data.get(this).onvolumechange;
            if (debug) print('MathMLElement.onvolumechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onvolumechange', 1, function (value) {
            if (debug) print('MathMLElement.onvolumechange.set', value)
            mm.memory.private_data.get(this).onvolumechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwaiting: {

        get: newFunc('onwaiting', 10, function () {
            let res = mm.memory.private_data.get(this).onwaiting;
            if (debug) print('MathMLElement.onwaiting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwaiting', 1, function (value) {
            if (debug) print('MathMLElement.onwaiting.set', value)
            mm.memory.private_data.get(this).onwaiting = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationend: {

        get: newFunc('onwebkitanimationend', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkitanimationend;
            if (debug) print('MathMLElement.onwebkitanimationend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationend', 1, function (value) {
            if (debug) print('MathMLElement.onwebkitanimationend.set', value)
            mm.memory.private_data.get(this).onwebkitanimationend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationiteration: {

        get: newFunc('onwebkitanimationiteration', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkitanimationiteration;
            if (debug) print('MathMLElement.onwebkitanimationiteration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationiteration', 1, function (value) {
            if (debug) print('MathMLElement.onwebkitanimationiteration.set', value)
            mm.memory.private_data.get(this).onwebkitanimationiteration = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationstart: {

        get: newFunc('onwebkitanimationstart', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkitanimationstart;
            if (debug) print('MathMLElement.onwebkitanimationstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationstart', 1, function (value) {
            if (debug) print('MathMLElement.onwebkitanimationstart.set', value)
            mm.memory.private_data.get(this).onwebkitanimationstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkittransitionend: {

        get: newFunc('onwebkittransitionend', 10, function () {
            let res = mm.memory.private_data.get(this).onwebkittransitionend;
            if (debug) print('MathMLElement.onwebkittransitionend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkittransitionend', 1, function (value) {
            if (debug) print('MathMLElement.onwebkittransitionend.set', value)
            mm.memory.private_data.get(this).onwebkittransitionend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwheel: {

        get: newFunc('onwheel', 10, function () {
            let res = mm.memory.private_data.get(this).onwheel;
            if (debug) print('MathMLElement.onwheel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwheel', 1, function (value) {
            if (debug) print('MathMLElement.onwheel.set', value)
            mm.memory.private_data.get(this).onwheel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onauxclick: {

        get: newFunc('onauxclick', 10, function () {
            let res = mm.memory.private_data.get(this).onauxclick;
            if (debug) print('MathMLElement.onauxclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onauxclick', 1, function (value) {
            if (debug) print('MathMLElement.onauxclick.set', value)
            mm.memory.private_data.get(this).onauxclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ongotpointercapture: {

        get: newFunc('ongotpointercapture', 10, function () {
            let res = mm.memory.private_data.get(this).ongotpointercapture;
            if (debug) print('MathMLElement.ongotpointercapture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ongotpointercapture', 1, function (value) {
            if (debug) print('MathMLElement.ongotpointercapture.set', value)
            mm.memory.private_data.get(this).ongotpointercapture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onlostpointercapture: {

        get: newFunc('onlostpointercapture', 10, function () {
            let res = mm.memory.private_data.get(this).onlostpointercapture;
            if (debug) print('MathMLElement.onlostpointercapture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onlostpointercapture', 1, function (value) {
            if (debug) print('MathMLElement.onlostpointercapture.set', value)
            mm.memory.private_data.get(this).onlostpointercapture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerdown: {

        get: newFunc('onpointerdown', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerdown;
            if (debug) print('MathMLElement.onpointerdown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerdown', 1, function (value) {
            if (debug) print('MathMLElement.onpointerdown.set', value)
            mm.memory.private_data.get(this).onpointerdown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointermove: {

        get: newFunc('onpointermove', 10, function () {
            let res = mm.memory.private_data.get(this).onpointermove;
            if (debug) print('MathMLElement.onpointermove.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointermove', 1, function (value) {
            if (debug) print('MathMLElement.onpointermove.set', value)
            mm.memory.private_data.get(this).onpointermove = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerrawupdate: {

        get: newFunc('onpointerrawupdate', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerrawupdate;
            if (debug) print('MathMLElement.onpointerrawupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerrawupdate', 1, function (value) {
            if (debug) print('MathMLElement.onpointerrawupdate.set', value)
            mm.memory.private_data.get(this).onpointerrawupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerup: {

        get: newFunc('onpointerup', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerup;
            if (debug) print('MathMLElement.onpointerup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerup', 1, function (value) {
            if (debug) print('MathMLElement.onpointerup.set', value)
            mm.memory.private_data.get(this).onpointerup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointercancel: {

        get: newFunc('onpointercancel', 10, function () {
            let res = mm.memory.private_data.get(this).onpointercancel;
            if (debug) print('MathMLElement.onpointercancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointercancel', 1, function (value) {
            if (debug) print('MathMLElement.onpointercancel.set', value)
            mm.memory.private_data.get(this).onpointercancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerover: {

        get: newFunc('onpointerover', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerover;
            if (debug) print('MathMLElement.onpointerover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerover', 1, function (value) {
            if (debug) print('MathMLElement.onpointerover.set', value)
            mm.memory.private_data.get(this).onpointerover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerout: {

        get: newFunc('onpointerout', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerout;
            if (debug) print('MathMLElement.onpointerout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerout', 1, function (value) {
            if (debug) print('MathMLElement.onpointerout.set', value)
            mm.memory.private_data.get(this).onpointerout = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerenter: {

        get: newFunc('onpointerenter', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerenter;
            if (debug) print('MathMLElement.onpointerenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerenter', 1, function (value) {
            if (debug) print('MathMLElement.onpointerenter.set', value)
            mm.memory.private_data.get(this).onpointerenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpointerleave: {

        get: newFunc('onpointerleave', 10, function () {
            let res = mm.memory.private_data.get(this).onpointerleave;
            if (debug) print('MathMLElement.onpointerleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerleave', 1, function (value) {
            if (debug) print('MathMLElement.onpointerleave.set', value)
            mm.memory.private_data.get(this).onpointerleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselectstart: {

        get: newFunc('onselectstart', 10, function () {
            let res = mm.memory.private_data.get(this).onselectstart;
            if (debug) print('MathMLElement.onselectstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectstart', 1, function (value) {
            if (debug) print('MathMLElement.onselectstart.set', value)
            mm.memory.private_data.get(this).onselectstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselectionchange: {

        get: newFunc('onselectionchange', 10, function () {
            let res = mm.memory.private_data.get(this).onselectionchange;
            if (debug) print('MathMLElement.onselectionchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectionchange', 1, function (value) {
            if (debug) print('MathMLElement.onselectionchange.set', value)
            mm.memory.private_data.get(this).onselectionchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onanimationend: {

        get: newFunc('onanimationend', 10, function () {
            let res = mm.memory.private_data.get(this).onanimationend;
            if (debug) print('MathMLElement.onanimationend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationend', 1, function (value) {
            if (debug) print('MathMLElement.onanimationend.set', value)
            mm.memory.private_data.get(this).onanimationend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onanimationiteration: {

        get: newFunc('onanimationiteration', 10, function () {
            let res = mm.memory.private_data.get(this).onanimationiteration;
            if (debug) print('MathMLElement.onanimationiteration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationiteration', 1, function (value) {
            if (debug) print('MathMLElement.onanimationiteration.set', value)
            mm.memory.private_data.get(this).onanimationiteration = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onanimationstart: {

        get: newFunc('onanimationstart', 10, function () {
            let res = mm.memory.private_data.get(this).onanimationstart;
            if (debug) print('MathMLElement.onanimationstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationstart', 1, function (value) {
            if (debug) print('MathMLElement.onanimationstart.set', value)
            mm.memory.private_data.get(this).onanimationstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitionrun: {

        get: newFunc('ontransitionrun', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitionrun;
            if (debug) print('MathMLElement.ontransitionrun.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionrun', 1, function (value) {
            if (debug) print('MathMLElement.ontransitionrun.set', value)
            mm.memory.private_data.get(this).ontransitionrun = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitionstart: {

        get: newFunc('ontransitionstart', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitionstart;
            if (debug) print('MathMLElement.ontransitionstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionstart', 1, function (value) {
            if (debug) print('MathMLElement.ontransitionstart.set', value)
            mm.memory.private_data.get(this).ontransitionstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitionend: {

        get: newFunc('ontransitionend', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitionend;
            if (debug) print('MathMLElement.ontransitionend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionend', 1, function (value) {
            if (debug) print('MathMLElement.ontransitionend.set', value)
            mm.memory.private_data.get(this).ontransitionend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontransitioncancel: {

        get: newFunc('ontransitioncancel', 10, function () {
            let res = mm.memory.private_data.get(this).ontransitioncancel;
            if (debug) print('MathMLElement.ontransitioncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitioncancel', 1, function (value) {
            if (debug) print('MathMLElement.ontransitioncancel.set', value)
            mm.memory.private_data.get(this).ontransitioncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncopy: {

        get: newFunc('oncopy', 10, function () {
            let res = mm.memory.private_data.get(this).oncopy;
            if (debug) print('MathMLElement.oncopy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncopy', 1, function (value) {
            if (debug) print('MathMLElement.oncopy.set', value)
            mm.memory.private_data.get(this).oncopy = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncut: {

        get: newFunc('oncut', 10, function () {
            let res = mm.memory.private_data.get(this).oncut;
            if (debug) print('MathMLElement.oncut.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncut', 1, function (value) {
            if (debug) print('MathMLElement.oncut.set', value)
            mm.memory.private_data.get(this).oncut = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpaste: {

        get: newFunc('onpaste', 10, function () {
            let res = mm.memory.private_data.get(this).onpaste;
            if (debug) print('MathMLElement.onpaste.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpaste', 1, function (value) {
            if (debug) print('MathMLElement.onpaste.set', value)
            mm.memory.private_data.get(this).onpaste = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    dataset: {

        get: newFunc('dataset', 10, function () {
            let res = mm.memory.private_data.get(this).dataset;
            if (debug) print('MathMLElement.dataset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    nonce: {

        get: newFunc('nonce', 10, function () {
            let res = mm.memory.private_data.get(this).nonce;
            if (debug) print('MathMLElement.nonce.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('nonce', 1, function (value) {
            if (debug) print('MathMLElement.nonce.set', value)
            mm.memory.private_data.get(this).nonce = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    autofocus: {

        get: newFunc('autofocus', 10, function () {
            let res = mm.memory.private_data.get(this).autofocus;
            if (debug) print('MathMLElement.autofocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('autofocus', 1, function (value) {
            if (debug) print('MathMLElement.autofocus.set', value)
            mm.memory.private_data.get(this).autofocus = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    tabIndex: {

        get: newFunc('tabIndex', 10, function () {
            let res = mm.memory.private_data.get(this).tabIndex;
            if (debug) print('MathMLElement.tabIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('tabIndex', 1, function (value) {
            if (debug) print('MathMLElement.tabIndex.set', value)
            mm.memory.private_data.get(this).tabIndex = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('MathMLElement.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('MathMLElement.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    attributeStyleMap: {

        get: newFunc('attributeStyleMap', 10, function () {
            let res = mm.memory.private_data.get(this).attributeStyleMap;
            if (debug) print('MathMLElement.attributeStyleMap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    blur: {

        value: newFunc('blur', 10, function () {
            if (debug) print('MathMLElement.blur.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    focus: {

        value: newFunc('focus', 10, function () {
            if (debug) print('MathMLElement.focus.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    onscrollend: {

        get: newFunc('onscrollend', 10, function () {
            let res = mm.memory.private_data.get(this).onscrollend;
            if (debug) print('MathMLElement.onscrollend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollend', 1, function (value) {
            if (debug) print('MathMLElement.onscrollend.set', value)
            mm.memory.private_data.get(this).onscrollend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscrollsnapchange: {

        get: newFunc('onscrollsnapchange', 10, function () {
            let res = mm.memory.private_data.get(this).onscrollsnapchange;
            if (debug) print('MathMLElement.onscrollsnapchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchange', 1, function (value) {
            if (debug) print('MathMLElement.onscrollsnapchange.set', value)
            mm.memory.private_data.get(this).onscrollsnapchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscrollsnapchanging: {

        get: newFunc('onscrollsnapchanging', 10, function () {
            let res = mm.memory.private_data.get(this).onscrollsnapchanging;
            if (debug) print('MathMLElement.onscrollsnapchanging.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchanging', 1, function (value) {
            if (debug) print('MathMLElement.onscrollsnapchanging.set', value)
            mm.memory.private_data.get(this).onscrollsnapchanging = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MathMLElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

LayoutShiftAttribution = newFunc('LayoutShiftAttribution', 1, function () {
    print('LayoutShiftAttribution.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(LayoutShiftAttribution.prototype, {
    node: {

        get: newFunc('node', 10, function () {
            let res = mm.memory.private_data.get(this).node;
            if (debug) print('LayoutShiftAttribution.node.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    previousRect: {

        get: newFunc('previousRect', 10, function () {
            let res = mm.memory.private_data.get(this).previousRect;
            if (debug) print('LayoutShiftAttribution.previousRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    currentRect: {

        get: newFunc('currentRect', 10, function () {
            let res = mm.memory.private_data.get(this).currentRect;
            if (debug) print('LayoutShiftAttribution.currentRect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('LayoutShiftAttribution.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('LayoutShiftAttribution.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

LayoutShift = newFunc('LayoutShift', 1, function () {
    print('LayoutShift.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(LayoutShift.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('LayoutShift.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hadRecentInput: {

        get: newFunc('hadRecentInput', 10, function () {
            let res = mm.memory.private_data.get(this).hadRecentInput;
            if (debug) print('LayoutShift.hadRecentInput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lastInputTime: {

        get: newFunc('lastInputTime', 10, function () {
            let res = mm.memory.private_data.get(this).lastInputTime;
            if (debug) print('LayoutShift.lastInputTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sources: {

        get: newFunc('sources', 10, function () {
            let res = mm.memory.private_data.get(this).sources;
            if (debug) print('LayoutShift.sources.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('LayoutShift.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('LayoutShift.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

LargestContentfulPaint = newFunc('LargestContentfulPaint', 1, function () {
    print('LargestContentfulPaint.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(LargestContentfulPaint.prototype, {
    renderTime: {

        get: newFunc('renderTime', 10, function () {
            let res = mm.memory.private_data.get(this).renderTime;
            if (debug) print('LargestContentfulPaint.renderTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    loadTime: {

        get: newFunc('loadTime', 10, function () {
            let res = mm.memory.private_data.get(this).loadTime;
            if (debug) print('LargestContentfulPaint.loadTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('LargestContentfulPaint.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('LargestContentfulPaint.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('LargestContentfulPaint.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    element: {

        get: newFunc('element', 10, function () {
            let res = mm.memory.private_data.get(this).element;
            if (debug) print('LargestContentfulPaint.element.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('LargestContentfulPaint.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('LargestContentfulPaint.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

KeyframeEffect = newFunc('KeyframeEffect', 1, function () {
    print('KeyframeEffect.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(KeyframeEffect.prototype, {
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('KeyframeEffect.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('target', 1, function (value) {
            if (debug) print('KeyframeEffect.target.set', value)
            mm.memory.private_data.get(this).target = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    pseudoElement: {

        get: newFunc('pseudoElement', 10, function () {
            let res = mm.memory.private_data.get(this).pseudoElement;
            if (debug) print('KeyframeEffect.pseudoElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('pseudoElement', 1, function (value) {
            if (debug) print('KeyframeEffect.pseudoElement.set', value)
            mm.memory.private_data.get(this).pseudoElement = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    composite: {

        get: newFunc('composite', 10, function () {
            let res = mm.memory.private_data.get(this).composite;
            if (debug) print('KeyframeEffect.composite.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('composite', 1, function (value) {
            if (debug) print('KeyframeEffect.composite.set', value)
            mm.memory.private_data.get(this).composite = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getKeyframes: {

        value: newFunc('getKeyframes', 10, function () {
            if (debug) print('KeyframeEffect.getKeyframes.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setKeyframes: {

        value: newFunc('setKeyframes', 10, function () {
            if (debug) print('KeyframeEffect.setKeyframes.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('KeyframeEffect.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

KeyboardEvent = newFunc('KeyboardEvent', 1, function () {
    print('KeyboardEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(KeyboardEvent.prototype, {
    key: {

        get: newFunc('key', 10, function () {
            let res = mm.memory.private_data.get(this).key;
            if (debug) print('KeyboardEvent.key.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    code: {

        get: newFunc('code', 10, function () {
            let res = mm.memory.private_data.get(this).code;
            if (debug) print('KeyboardEvent.code.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    location: {

        get: newFunc('location', 10, function () {
            let res = mm.memory.private_data.get(this).location;
            if (debug) print('KeyboardEvent.location.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ctrlKey: {

        get: newFunc('ctrlKey', 10, function () {
            let res = mm.memory.private_data.get(this).ctrlKey;
            if (debug) print('KeyboardEvent.ctrlKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shiftKey: {

        get: newFunc('shiftKey', 10, function () {
            let res = mm.memory.private_data.get(this).shiftKey;
            if (debug) print('KeyboardEvent.shiftKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    altKey: {

        get: newFunc('altKey', 10, function () {
            let res = mm.memory.private_data.get(this).altKey;
            if (debug) print('KeyboardEvent.altKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    metaKey: {

        get: newFunc('metaKey', 10, function () {
            let res = mm.memory.private_data.get(this).metaKey;
            if (debug) print('KeyboardEvent.metaKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    repeat: {

        get: newFunc('repeat', 10, function () {
            let res = mm.memory.private_data.get(this).repeat;
            if (debug) print('KeyboardEvent.repeat.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isComposing: {

        get: newFunc('isComposing', 10, function () {
            let res = mm.memory.private_data.get(this).isComposing;
            if (debug) print('KeyboardEvent.isComposing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    charCode: {

        get: newFunc('charCode', 10, function () {
            let res = mm.memory.private_data.get(this).charCode;
            if (debug) print('KeyboardEvent.charCode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    keyCode: {

        get: newFunc('keyCode', 10, function () {
            let res = mm.memory.private_data.get(this).keyCode;
            if (debug) print('KeyboardEvent.keyCode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    DOM_KEY_LOCATION_STANDARD: {},
    DOM_KEY_LOCATION_LEFT: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    DOM_KEY_LOCATION_RIGHT: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    DOM_KEY_LOCATION_NUMPAD: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    getModifierState: {

        value: newFunc('getModifierState', 10, function () {
            if (debug) print('KeyboardEvent.getModifierState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    initKeyboardEvent: {

        value: newFunc('initKeyboardEvent', 10, function () {
            if (debug) print('KeyboardEvent.initKeyboardEvent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('KeyboardEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

InputEvent = newFunc('InputEvent', 1, function () {
    print('InputEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(InputEvent.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('InputEvent.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isComposing: {

        get: newFunc('isComposing', 10, function () {
            let res = mm.memory.private_data.get(this).isComposing;
            if (debug) print('InputEvent.isComposing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    inputType: {

        get: newFunc('inputType', 10, function () {
            let res = mm.memory.private_data.get(this).inputType;
            if (debug) print('InputEvent.inputType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dataTransfer: {

        get: newFunc('dataTransfer', 10, function () {
            let res = mm.memory.private_data.get(this).dataTransfer;
            if (debug) print('InputEvent.dataTransfer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getTargetRanges: {

        value: newFunc('getTargetRanges', 10, function () {
            if (debug) print('InputEvent.getTargetRanges.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('InputEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

InputDeviceCapabilities = newFunc('InputDeviceCapabilities', 1, function () {
    print('InputDeviceCapabilities.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(InputDeviceCapabilities.prototype, {
    firesTouchEvents: {

        get: newFunc('firesTouchEvents', 10, function () {
            let res = mm.memory.private_data.get(this).firesTouchEvents;
            if (debug) print('InputDeviceCapabilities.firesTouchEvents.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('InputDeviceCapabilities.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ImageCapture = newFunc('ImageCapture', 1, function () {
    print('ImageCapture.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ImageCapture.prototype, {
    track: {

        get: newFunc('track', 10, function () {
            let res = mm.memory.private_data.get(this).track;
            if (debug) print('ImageCapture.track.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getPhotoCapabilities: {

        value: newFunc('getPhotoCapabilities', 10, function () {
            if (debug) print('ImageCapture.getPhotoCapabilities.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getPhotoSettings: {

        value: newFunc('getPhotoSettings', 10, function () {
            if (debug) print('ImageCapture.getPhotoSettings.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    grabFrame: {

        value: newFunc('grabFrame', 10, function () {
            if (debug) print('ImageCapture.grabFrame.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    takePhoto: {

        value: newFunc('takePhoto', 10, function () {
            if (debug) print('ImageCapture.takePhoto.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ImageCapture.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ImageBitmapRenderingContext = newFunc('ImageBitmapRenderingContext', 1, function () {
    print('ImageBitmapRenderingContext.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ImageBitmapRenderingContext.prototype, {
    canvas: {

        get: newFunc('canvas', 10, function () {
            let res = mm.memory.private_data.get(this).canvas;
            if (debug) print('ImageBitmapRenderingContext.canvas.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    transferFromImageBitmap: {

        value: newFunc('transferFromImageBitmap', 10, function () {
            if (debug) print('ImageBitmapRenderingContext.transferFromImageBitmap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ImageBitmapRenderingContext.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ImageBitmap = newFunc('ImageBitmap', 1, function () {
    print('ImageBitmap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ImageBitmap.prototype, {
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('ImageBitmap.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('ImageBitmap.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('ImageBitmap.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ImageBitmap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IdleDeadline = newFunc('IdleDeadline', 1, function () {
    print('IdleDeadline.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IdleDeadline.prototype, {
    didTimeout: {

        get: newFunc('didTimeout', 10, function () {
            let res = mm.memory.private_data.get(this).didTimeout;
            if (debug) print('IdleDeadline.didTimeout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timeRemaining: {

        value: newFunc('timeRemaining', 10, function () {
            if (debug) print('IdleDeadline.timeRemaining.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IdleDeadline.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IIRFilterNode = newFunc('IIRFilterNode', 1, function () {
    print('IIRFilterNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IIRFilterNode.prototype, {
    getFrequencyResponse: {

        value: newFunc('getFrequencyResponse', 10, function () {
            if (debug) print('IIRFilterNode.getFrequencyResponse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IIRFilterNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBVersionChangeEvent = newFunc('IDBVersionChangeEvent', 1, function () {
    print('IDBVersionChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBVersionChangeEvent.prototype, {
    oldVersion: {

        get: newFunc('oldVersion', 10, function () {
            let res = mm.memory.private_data.get(this).oldVersion;
            if (debug) print('IDBVersionChangeEvent.oldVersion.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    newVersion: {

        get: newFunc('newVersion', 10, function () {
            let res = mm.memory.private_data.get(this).newVersion;
            if (debug) print('IDBVersionChangeEvent.newVersion.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dataLoss: {

        get: newFunc('dataLoss', 10, function () {
            let res = mm.memory.private_data.get(this).dataLoss;
            if (debug) print('IDBVersionChangeEvent.dataLoss.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dataLossMessage: {

        get: newFunc('dataLossMessage', 10, function () {
            let res = mm.memory.private_data.get(this).dataLossMessage;
            if (debug) print('IDBVersionChangeEvent.dataLossMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBVersionChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBTransaction = newFunc('IDBTransaction', 1, function () {
    print('IDBTransaction.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBTransaction.prototype, {
    objectStoreNames: {

        get: newFunc('objectStoreNames', 10, function () {
            let res = mm.memory.private_data.get(this).objectStoreNames;
            if (debug) print('IDBTransaction.objectStoreNames.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mode: {

        get: newFunc('mode', 10, function () {
            let res = mm.memory.private_data.get(this).mode;
            if (debug) print('IDBTransaction.mode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    durability: {

        get: newFunc('durability', 10, function () {
            let res = mm.memory.private_data.get(this).durability;
            if (debug) print('IDBTransaction.durability.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    db: {

        get: newFunc('db', 10, function () {
            let res = mm.memory.private_data.get(this).db;
            if (debug) print('IDBTransaction.db.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    error: {

        get: newFunc('error', 10, function () {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('IDBTransaction.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onabort: {

        get: newFunc('onabort', 10, function () {
            let res = mm.memory.private_data.get(this).onabort;
            if (debug) print('IDBTransaction.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function (value) {
            if (debug) print('IDBTransaction.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncomplete: {

        get: newFunc('oncomplete', 10, function () {
            let res = mm.memory.private_data.get(this).oncomplete;
            if (debug) print('IDBTransaction.oncomplete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncomplete', 1, function (value) {
            if (debug) print('IDBTransaction.oncomplete.set', value)
            mm.memory.private_data.get(this).oncomplete = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('IDBTransaction.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('IDBTransaction.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    abort: {

        value: newFunc('abort', 10, function () {
            if (debug) print('IDBTransaction.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    commit: {

        value: newFunc('commit', 10, function () {
            if (debug) print('IDBTransaction.commit.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    objectStore: {

        value: newFunc('objectStore', 10, function () {
            if (debug) print('IDBTransaction.objectStore.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBTransaction.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBRequest = newFunc('IDBRequest', 1, function () {
    print('IDBRequest.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBRequest.prototype, {
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('IDBRequest.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    error: {

        get: newFunc('error', 10, function () {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('IDBRequest.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    source: {

        get: newFunc('source', 10, function () {
            let res = mm.memory.private_data.get(this).source;
            if (debug) print('IDBRequest.source.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    transaction: {

        get: newFunc('transaction', 10, function () {
            let res = mm.memory.private_data.get(this).transaction;
            if (debug) print('IDBRequest.transaction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    readyState: {

        get: newFunc('readyState', 10, function () {
            let res = mm.memory.private_data.get(this).readyState;
            if (debug) print('IDBRequest.readyState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onsuccess: {

        get: newFunc('onsuccess', 10, function () {
            let res = mm.memory.private_data.get(this).onsuccess;
            if (debug) print('IDBRequest.onsuccess.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsuccess', 1, function (value) {
            if (debug) print('IDBRequest.onsuccess.set', value)
            mm.memory.private_data.get(this).onsuccess = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('IDBRequest.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('IDBRequest.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBRequest.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBOpenDBRequest = newFunc('IDBOpenDBRequest', 1, function () {
    print('IDBOpenDBRequest.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBOpenDBRequest.prototype, {
    onblocked: {

        get: newFunc('onblocked', 10, function () {
            let res = mm.memory.private_data.get(this).onblocked;
            if (debug) print('IDBOpenDBRequest.onblocked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onblocked', 1, function (value) {
            if (debug) print('IDBOpenDBRequest.onblocked.set', value)
            mm.memory.private_data.get(this).onblocked = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onupgradeneeded: {

        get: newFunc('onupgradeneeded', 10, function () {
            let res = mm.memory.private_data.get(this).onupgradeneeded;
            if (debug) print('IDBOpenDBRequest.onupgradeneeded.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onupgradeneeded', 1, function (value) {
            if (debug) print('IDBOpenDBRequest.onupgradeneeded.set', value)
            mm.memory.private_data.get(this).onupgradeneeded = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBOpenDBRequest.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBObjectStore = newFunc('IDBObjectStore', 1, function () {
    print('IDBObjectStore.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBObjectStore.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('IDBObjectStore.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('IDBObjectStore.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    keyPath: {

        get: newFunc('keyPath', 10, function () {
            let res = mm.memory.private_data.get(this).keyPath;
            if (debug) print('IDBObjectStore.keyPath.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    indexNames: {

        get: newFunc('indexNames', 10, function () {
            let res = mm.memory.private_data.get(this).indexNames;
            if (debug) print('IDBObjectStore.indexNames.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    transaction: {

        get: newFunc('transaction', 10, function () {
            let res = mm.memory.private_data.get(this).transaction;
            if (debug) print('IDBObjectStore.transaction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    autoIncrement: {

        get: newFunc('autoIncrement', 10, function () {
            let res = mm.memory.private_data.get(this).autoIncrement;
            if (debug) print('IDBObjectStore.autoIncrement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('IDBObjectStore.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('IDBObjectStore.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    count: {

        value: newFunc('count', 10, function () {
            if (debug) print('IDBObjectStore.count.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createIndex: {

        value: newFunc('createIndex', 10, function () {
            if (debug) print('IDBObjectStore.createIndex.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('IDBObjectStore.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteIndex: {

        value: newFunc('deleteIndex', 10, function () {
            if (debug) print('IDBObjectStore.deleteIndex.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('IDBObjectStore.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAll: {

        value: newFunc('getAll', 10, function () {
            if (debug) print('IDBObjectStore.getAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAllKeys: {

        value: newFunc('getAllKeys', 10, function () {
            if (debug) print('IDBObjectStore.getAllKeys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getKey: {

        value: newFunc('getKey', 10, function () {
            if (debug) print('IDBObjectStore.getKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    index: {

        value: newFunc('index', 10, function () {
            if (debug) print('IDBObjectStore.index.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    openCursor: {

        value: newFunc('openCursor', 10, function () {
            if (debug) print('IDBObjectStore.openCursor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    openKeyCursor: {

        value: newFunc('openKeyCursor', 10, function () {
            if (debug) print('IDBObjectStore.openKeyCursor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    put: {

        value: newFunc('put', 10, function () {
            if (debug) print('IDBObjectStore.put.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBObjectStore.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBKeyRange = newFunc('IDBKeyRange', 1, function () {
    print('IDBKeyRange.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBKeyRange.prototype, {
    lower: {

        get: newFunc('lower', 10, function () {
            let res = mm.memory.private_data.get(this).lower;
            if (debug) print('IDBKeyRange.lower.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    upper: {

        get: newFunc('upper', 10, function () {
            let res = mm.memory.private_data.get(this).upper;
            if (debug) print('IDBKeyRange.upper.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lowerOpen: {

        get: newFunc('lowerOpen', 10, function () {
            let res = mm.memory.private_data.get(this).lowerOpen;
            if (debug) print('IDBKeyRange.lowerOpen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    upperOpen: {

        get: newFunc('upperOpen', 10, function () {
            let res = mm.memory.private_data.get(this).upperOpen;
            if (debug) print('IDBKeyRange.upperOpen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    includes: {

        value: newFunc('includes', 10, function () {
            if (debug) print('IDBKeyRange.includes.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBKeyRange.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBIndex = newFunc('IDBIndex', 1, function () {
    print('IDBIndex.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBIndex.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('IDBIndex.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('IDBIndex.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    objectStore: {

        get: newFunc('objectStore', 10, function () {
            let res = mm.memory.private_data.get(this).objectStore;
            if (debug) print('IDBIndex.objectStore.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    keyPath: {

        get: newFunc('keyPath', 10, function () {
            let res = mm.memory.private_data.get(this).keyPath;
            if (debug) print('IDBIndex.keyPath.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    multiEntry: {

        get: newFunc('multiEntry', 10, function () {
            let res = mm.memory.private_data.get(this).multiEntry;
            if (debug) print('IDBIndex.multiEntry.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    unique: {

        get: newFunc('unique', 10, function () {
            let res = mm.memory.private_data.get(this).unique;
            if (debug) print('IDBIndex.unique.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    count: {

        value: newFunc('count', 10, function () {
            if (debug) print('IDBIndex.count.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('IDBIndex.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAll: {

        value: newFunc('getAll', 10, function () {
            if (debug) print('IDBIndex.getAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAllKeys: {

        value: newFunc('getAllKeys', 10, function () {
            if (debug) print('IDBIndex.getAllKeys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getKey: {

        value: newFunc('getKey', 10, function () {
            if (debug) print('IDBIndex.getKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    openCursor: {

        value: newFunc('openCursor', 10, function () {
            if (debug) print('IDBIndex.openCursor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    openKeyCursor: {

        value: newFunc('openKeyCursor', 10, function () {
            if (debug) print('IDBIndex.openKeyCursor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBIndex.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBCursorWithValue = newFunc('IDBCursorWithValue', 1, function () {
    print('IDBCursorWithValue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBCursorWithValue.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('IDBCursorWithValue.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBCursorWithValue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IDBCursor = newFunc('IDBCursor', 1, function () {
    print('IDBCursor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IDBCursor.prototype, {
    source: {

        get: newFunc('source', 10, function () {
            let res = mm.memory.private_data.get(this).source;
            if (debug) print('IDBCursor.source.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    direction: {

        get: newFunc('direction', 10, function () {
            let res = mm.memory.private_data.get(this).direction;
            if (debug) print('IDBCursor.direction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    key: {

        get: newFunc('key', 10, function () {
            let res = mm.memory.private_data.get(this).key;
            if (debug) print('IDBCursor.key.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    primaryKey: {

        get: newFunc('primaryKey', 10, function () {
            let res = mm.memory.private_data.get(this).primaryKey;
            if (debug) print('IDBCursor.primaryKey.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    request: {

        get: newFunc('request', 10, function () {
            let res = mm.memory.private_data.get(this).request;
            if (debug) print('IDBCursor.request.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    advance: {

        value: newFunc('advance', 10, function () {
            if (debug) print('IDBCursor.advance.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    continue: {

        value: newFunc('continue', 10, function () {
            if (debug) print('IDBCursor.continue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    continuePrimaryKey: {

        value: newFunc('continuePrimaryKey', 10, function () {
            if (debug) print('IDBCursor.continuePrimaryKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('IDBCursor.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    update: {

        value: newFunc('update', 10, function () {
            if (debug) print('IDBCursor.update.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IDBCursor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

HighlightRegistry = newFunc('HighlightRegistry', 1, function () {
    print('HighlightRegistry.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HighlightRegistry.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('HighlightRegistry.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('HighlightRegistry.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('HighlightRegistry.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('HighlightRegistry.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('HighlightRegistry.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('HighlightRegistry.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('HighlightRegistry.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('HighlightRegistry.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    set: {

        value: newFunc('set', 10, function () {
            if (debug) print('HighlightRegistry.set.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('HighlightRegistry.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HighlightRegistry.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Highlight = newFunc('Highlight', 1, function () {
    print('Highlight.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Highlight.prototype, {
    priority: {

        get: newFunc('priority', 10, function () {
            let res = mm.memory.private_data.get(this).priority;
            if (debug) print('Highlight.priority.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('priority', 1, function (value) {
            if (debug) print('Highlight.priority.set', value)
            mm.memory.private_data.get(this).priority = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('Highlight.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('Highlight.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('Highlight.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('Highlight.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('Highlight.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('Highlight.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('Highlight.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('Highlight.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('Highlight.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('Highlight.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('Highlight.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Highlight.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

HashChangeEvent = newFunc('HashChangeEvent', 1, function () {
    print('HashChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HashChangeEvent.prototype, {
    oldURL: {

        get: newFunc('oldURL', 10, function () {
            let res = mm.memory.private_data.get(this).oldURL;
            if (debug) print('HashChangeEvent.oldURL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    newURL: {

        get: newFunc('newURL', 10, function () {
            let res = mm.memory.private_data.get(this).newURL;
            if (debug) print('HashChangeEvent.newURL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HashChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

GeolocationPositionError = newFunc('GeolocationPositionError', 1, function () {
    print('GeolocationPositionError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GeolocationPositionError.prototype, {
    code: {

        get: newFunc('code', 10, function () {
            let res = mm.memory.private_data.get(this).code;
            if (debug) print('GeolocationPositionError.code.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('GeolocationPositionError.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    PERMISSION_DENIED: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    POSITION_UNAVAILABLE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    TIMEOUT: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GeolocationPositionError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

GeolocationPosition = newFunc('GeolocationPosition', 1, function () {
    print('GeolocationPosition.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GeolocationPosition.prototype, {
    coords: {

        get: newFunc('coords', 10, function () {
            let res = mm.memory.private_data.get(this).coords;
            if (debug) print('GeolocationPosition.coords.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestamp: {

        get: newFunc('timestamp', 10, function () {
            let res = mm.memory.private_data.get(this).timestamp;
            if (debug) print('GeolocationPosition.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('GeolocationPosition.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GeolocationPosition.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

GeolocationCoordinates = newFunc('GeolocationCoordinates', 1, function () {
    print('GeolocationCoordinates.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GeolocationCoordinates.prototype, {
    latitude: {

        get: newFunc('latitude', 10, function () {
            let res = mm.memory.private_data.get(this).latitude;
            if (debug) print('GeolocationCoordinates.latitude.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    longitude: {

        get: newFunc('longitude', 10, function () {
            let res = mm.memory.private_data.get(this).longitude;
            if (debug) print('GeolocationCoordinates.longitude.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    altitude: {

        get: newFunc('altitude', 10, function () {
            let res = mm.memory.private_data.get(this).altitude;
            if (debug) print('GeolocationCoordinates.altitude.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    accuracy: {

        get: newFunc('accuracy', 10, function () {
            let res = mm.memory.private_data.get(this).accuracy;
            if (debug) print('GeolocationCoordinates.accuracy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    altitudeAccuracy: {

        get: newFunc('altitudeAccuracy', 10, function () {
            let res = mm.memory.private_data.get(this).altitudeAccuracy;
            if (debug) print('GeolocationCoordinates.altitudeAccuracy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    heading: {

        get: newFunc('heading', 10, function () {
            let res = mm.memory.private_data.get(this).heading;
            if (debug) print('GeolocationCoordinates.heading.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    speed: {

        get: newFunc('speed', 10, function () {
            let res = mm.memory.private_data.get(this).speed;
            if (debug) print('GeolocationCoordinates.speed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('GeolocationCoordinates.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GeolocationCoordinates.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

GamepadHapticActuator = newFunc('GamepadHapticActuator', 1, function () {
    print('GamepadHapticActuator.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GamepadHapticActuator.prototype, {
    effects: {

        get: newFunc('effects', 10, function () {
            let res = mm.memory.private_data.get(this).effects;
            if (debug) print('GamepadHapticActuator.effects.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('GamepadHapticActuator.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    playEffect: {

        value: newFunc('playEffect', 10, function () {
            if (debug) print('GamepadHapticActuator.playEffect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('GamepadHapticActuator.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GamepadHapticActuator.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

GamepadEvent = newFunc('GamepadEvent', 1, function () {
    print('GamepadEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GamepadEvent.prototype, {
    gamepad: {

        get: newFunc('gamepad', 10, function () {
            let res = mm.memory.private_data.get(this).gamepad;
            if (debug) print('GamepadEvent.gamepad.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GamepadEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

GamepadButton = newFunc('GamepadButton', 1, function () {
    print('GamepadButton.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GamepadButton.prototype, {
    pressed: {

        get: newFunc('pressed', 10, function () {
            let res = mm.memory.private_data.get(this).pressed;
            if (debug) print('GamepadButton.pressed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    touched: {

        get: newFunc('touched', 10, function () {
            let res = mm.memory.private_data.get(this).touched;
            if (debug) print('GamepadButton.touched.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('GamepadButton.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GamepadButton.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Gamepad = newFunc('Gamepad', 1, function () {
    print('Gamepad.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Gamepad.prototype, {
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('Gamepad.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    index: {

        get: newFunc('index', 10, function () {
            let res = mm.memory.private_data.get(this).index;
            if (debug) print('Gamepad.index.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    connected: {

        get: newFunc('connected', 10, function () {
            let res = mm.memory.private_data.get(this).connected;
            if (debug) print('Gamepad.connected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestamp: {

        get: newFunc('timestamp', 10, function () {
            let res = mm.memory.private_data.get(this).timestamp;
            if (debug) print('Gamepad.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mapping: {

        get: newFunc('mapping', 10, function () {
            let res = mm.memory.private_data.get(this).mapping;
            if (debug) print('Gamepad.mapping.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    axes: {

        get: newFunc('axes', 10, function () {
            let res = mm.memory.private_data.get(this).axes;
            if (debug) print('Gamepad.axes.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    buttons: {

        get: newFunc('buttons', 10, function () {
            let res = mm.memory.private_data.get(this).buttons;
            if (debug) print('Gamepad.buttons.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    vibrationActuator: {

        get: newFunc('vibrationActuator', 10, function () {
            let res = mm.memory.private_data.get(this).vibrationActuator;
            if (debug) print('Gamepad.vibrationActuator.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Gamepad.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

GainNode = newFunc('GainNode', 1, function () {
    print('GainNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(GainNode.prototype, {
    gain: {

        get: newFunc('gain', 10, function () {
            let res = mm.memory.private_data.get(this).gain;
            if (debug) print('GainNode.gain.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GainNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FormDataEvent = newFunc('FormDataEvent', 1, function () {
    print('FormDataEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FormDataEvent.prototype, {
    formData: {

        get: newFunc('formData', 10, function () {
            let res = mm.memory.private_data.get(this).formData;
            if (debug) print('FormDataEvent.formData.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FormDataEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FormData = newFunc('FormData', 1, function () {
    print('FormData.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FormData.prototype, {
    append: {

        value: newFunc('append', 10, function () {
            if (debug) print('FormData.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('FormData.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('FormData.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAll: {

        value: newFunc('getAll', 10, function () {
            if (debug) print('FormData.getAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('FormData.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    set: {

        value: newFunc('set', 10, function () {
            if (debug) print('FormData.set.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('FormData.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('FormData.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('FormData.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('FormData.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FormData.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FontFaceSetLoadEvent = newFunc('FontFaceSetLoadEvent', 1, function () {
    print('FontFaceSetLoadEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FontFaceSetLoadEvent.prototype, {
    fontfaces: {

        get: newFunc('fontfaces', 10, function () {
            let res = mm.memory.private_data.get(this).fontfaces;
            if (debug) print('FontFaceSetLoadEvent.fontfaces.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FontFaceSetLoadEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FontFace = newFunc('FontFace', 1, function () {
    print('FontFace.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FontFace.prototype, {
    [Symbol.toStringTag]:{value:'FontFace'},
    family: {

        get: newFunc('family', 10, function () {
            let res = mm.memory.private_data.get(this).family;
            if (debug) print('FontFace.family.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('family', 1, function (value) {
            if (debug) print('FontFace.family.set', value)
            mm.memory.private_data.get(this).family = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('FontFace.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('FontFace.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    weight: {

        get: newFunc('weight', 10, function () {
            let res = mm.memory.private_data.get(this).weight;
            if (debug) print('FontFace.weight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('weight', 1, function (value) {
            if (debug) print('FontFace.weight.set', value)
            mm.memory.private_data.get(this).weight = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    stretch: {

        get: newFunc('stretch', 10, function () {
            let res = mm.memory.private_data.get(this).stretch;
            if (debug) print('FontFace.stretch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('stretch', 1, function (value) {
            if (debug) print('FontFace.stretch.set', value)
            mm.memory.private_data.get(this).stretch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    unicodeRange: {

        get: newFunc('unicodeRange', 10, function () {
            let res = mm.memory.private_data.get(this).unicodeRange;
            if (debug) print('FontFace.unicodeRange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('unicodeRange', 1, function (value) {
            if (debug) print('FontFace.unicodeRange.set', value)
            mm.memory.private_data.get(this).unicodeRange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    variant: {

        get: newFunc('variant', 10, function () {
            let res = mm.memory.private_data.get(this).variant;
            if (debug) print('FontFace.variant.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('variant', 1, function (value) {
            if (debug) print('FontFace.variant.set', value)
            mm.memory.private_data.get(this).variant = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    featureSettings: {

        get: newFunc('featureSettings', 10, function () {
            let res = mm.memory.private_data.get(this).featureSettings;
            if (debug) print('FontFace.featureSettings.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('featureSettings', 1, function (value) {
            if (debug) print('FontFace.featureSettings.set', value)
            mm.memory.private_data.get(this).featureSettings = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    display: {

        get: newFunc('display', 10, function () {
            let res = mm.memory.private_data.get(this).display;
            if (debug) print('FontFace.display.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('display', 1, function (value) {
            if (debug) print('FontFace.display.set', value)
            mm.memory.private_data.get(this).display = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ascentOverride: {

        get: newFunc('ascentOverride', 10, function () {
            let res = mm.memory.private_data.get(this).ascentOverride;
            if (debug) print('FontFace.ascentOverride.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ascentOverride', 1, function (value) {
            if (debug) print('FontFace.ascentOverride.set', value)
            mm.memory.private_data.get(this).ascentOverride = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    descentOverride: {

        get: newFunc('descentOverride', 10, function () {
            let res = mm.memory.private_data.get(this).descentOverride;
            if (debug) print('FontFace.descentOverride.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('descentOverride', 1, function (value) {
            if (debug) print('FontFace.descentOverride.set', value)
            mm.memory.private_data.get(this).descentOverride = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    lineGapOverride: {

        get: newFunc('lineGapOverride', 10, function () {
            let res = mm.memory.private_data.get(this).lineGapOverride;
            if (debug) print('FontFace.lineGapOverride.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('lineGapOverride', 1, function (value) {
            if (debug) print('FontFace.lineGapOverride.set', value)
            mm.memory.private_data.get(this).lineGapOverride = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sizeAdjust: {

        get: newFunc('sizeAdjust', 10, function () {
            let res = mm.memory.private_data.get(this).sizeAdjust;
            if (debug) print('FontFace.sizeAdjust.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('sizeAdjust', 1, function (value) {
            if (debug) print('FontFace.sizeAdjust.set', value)
            mm.memory.private_data.get(this).sizeAdjust = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    status: {

        get: newFunc('status', 10, function () {
            if (!FontFace.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res = mm.memory.private_data.get(this).status;
            if (debug) print('FontFace.status.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    loaded: {

        get: newFunc('loaded', 10, function () {
            let res = mm.memory.private_data.get(this).loaded;
            if (debug) print('FontFace.loaded.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    load: {

        value: newFunc('load', 10, function () {
            if (debug) print('FontFace.load.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FontFace.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FocusEvent = newFunc('FocusEvent', 1, function () {
    print('FocusEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FocusEvent.prototype, {
    relatedTarget: {

        get: newFunc('relatedTarget', 10, function () {
            let res = mm.memory.private_data.get(this).relatedTarget;
            if (debug) print('FocusEvent.relatedTarget.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FocusEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FileReader = newFunc('FileReader', 1, function () {
    print('FileReader.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FileReader.prototype, {
    readyState: {

        get: newFunc('readyState', 10, function () {
            let res = mm.memory.private_data.get(this).readyState;
            if (debug) print('FileReader.readyState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('FileReader.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    error: {

        get: newFunc('error', 10, function () {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('FileReader.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onloadstart: {

        get: newFunc('onloadstart', 10, function () {
            let res = mm.memory.private_data.get(this).onloadstart;
            if (debug) print('FileReader.onloadstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadstart', 1, function (value) {
            if (debug) print('FileReader.onloadstart.set', value)
            mm.memory.private_data.get(this).onloadstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onprogress: {

        get: newFunc('onprogress', 10, function () {
            let res = mm.memory.private_data.get(this).onprogress;
            if (debug) print('FileReader.onprogress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprogress', 1, function (value) {
            if (debug) print('FileReader.onprogress.set', value)
            mm.memory.private_data.get(this).onprogress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onload: {

        get: newFunc('onload', 10, function () {
            let res = mm.memory.private_data.get(this).onload;
            if (debug) print('FileReader.onload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onload', 1, function (value) {
            if (debug) print('FileReader.onload.set', value)
            mm.memory.private_data.get(this).onload = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onabort: {

        get: newFunc('onabort', 10, function () {
            let res = mm.memory.private_data.get(this).onabort;
            if (debug) print('FileReader.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function (value) {
            if (debug) print('FileReader.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('FileReader.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('FileReader.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadend: {

        get: newFunc('onloadend', 10, function () {
            let res = mm.memory.private_data.get(this).onloadend;
            if (debug) print('FileReader.onloadend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadend', 1, function (value) {
            if (debug) print('FileReader.onloadend.set', value)
            mm.memory.private_data.get(this).onloadend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    EMPTY: {},
    LOADING: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    DONE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    abort: {

        value: newFunc('abort', 10, function () {
            if (debug) print('FileReader.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    readAsArrayBuffer: {

        value: newFunc('readAsArrayBuffer', 10, function () {
            if (debug) print('FileReader.readAsArrayBuffer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    readAsBinaryString: {

        value: newFunc('readAsBinaryString', 10, function () {
            if (debug) print('FileReader.readAsBinaryString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    readAsDataURL: {

        value: newFunc('readAsDataURL', 10, function () {
            if (debug) print('FileReader.readAsDataURL.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    readAsText: {

        value: newFunc('readAsText', 10, function () {
            if (debug) print('FileReader.readAsText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FileReader.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FileList = newFunc('FileList', 1, function () {
    print('FileList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FileList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('FileList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    item: {

        value: newFunc('item', 10, function () {
            if (debug) print('FileList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FileList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

EventSource = newFunc('EventSource', 1, function () {
    print('EventSource.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(EventSource.prototype, {
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('EventSource.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    withCredentials: {

        get: newFunc('withCredentials', 10, function () {
            let res = mm.memory.private_data.get(this).withCredentials;
            if (debug) print('EventSource.withCredentials.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    readyState: {

        get: newFunc('readyState', 10, function () {
            let res = mm.memory.private_data.get(this).readyState;
            if (debug) print('EventSource.readyState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onopen: {

        get: newFunc('onopen', 10, function () {
            let res = mm.memory.private_data.get(this).onopen;
            if (debug) print('EventSource.onopen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onopen', 1, function (value) {
            if (debug) print('EventSource.onopen.set', value)
            mm.memory.private_data.get(this).onopen = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmessage: {

        get: newFunc('onmessage', 10, function () {
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('EventSource.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function (value) {
            if (debug) print('EventSource.onmessage.set', value)
            mm.memory.private_data.get(this).onmessage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('EventSource.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('EventSource.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    CONNECTING: {},
    OPEN: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    CLOSED: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('EventSource.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('EventSource.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

EventCounts = newFunc('EventCounts', 1, function () {
    print('EventCounts.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(EventCounts.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('EventCounts.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('EventCounts.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('EventCounts.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('EventCounts.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('EventCounts.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('EventCounts.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('EventCounts.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('EventCounts.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ErrorEvent = newFunc('ErrorEvent', 1, function () {
    print('ErrorEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ErrorEvent.prototype, {
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('ErrorEvent.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    filename: {

        get: newFunc('filename', 10, function () {
            let res = mm.memory.private_data.get(this).filename;
            if (debug) print('ErrorEvent.filename.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lineno: {

        get: newFunc('lineno', 10, function () {
            let res = mm.memory.private_data.get(this).lineno;
            if (debug) print('ErrorEvent.lineno.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    colno: {

        get: newFunc('colno', 10, function () {
            let res = mm.memory.private_data.get(this).colno;
            if (debug) print('ErrorEvent.colno.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    error: {

        get: newFunc('error', 10, function () {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('ErrorEvent.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ErrorEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

EncodedVideoChunk = newFunc('EncodedVideoChunk', 1, function () {
    print('EncodedVideoChunk.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(EncodedVideoChunk.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('EncodedVideoChunk.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestamp: {

        get: newFunc('timestamp', 10, function () {
            let res = mm.memory.private_data.get(this).timestamp;
            if (debug) print('EncodedVideoChunk.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    duration: {

        get: newFunc('duration', 10, function () {
            let res = mm.memory.private_data.get(this).duration;
            if (debug) print('EncodedVideoChunk.duration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    byteLength: {

        get: newFunc('byteLength', 10, function () {
            let res = mm.memory.private_data.get(this).byteLength;
            if (debug) print('EncodedVideoChunk.byteLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    copyTo: {

        value: newFunc('copyTo', 10, function () {
            if (debug) print('EncodedVideoChunk.copyTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('EncodedVideoChunk.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

EncodedAudioChunk = newFunc('EncodedAudioChunk', 1, function () {
    print('EncodedAudioChunk.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(EncodedAudioChunk.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('EncodedAudioChunk.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestamp: {

        get: newFunc('timestamp', 10, function () {
            let res = mm.memory.private_data.get(this).timestamp;
            if (debug) print('EncodedAudioChunk.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    byteLength: {

        get: newFunc('byteLength', 10, function () {
            let res = mm.memory.private_data.get(this).byteLength;
            if (debug) print('EncodedAudioChunk.byteLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    duration: {

        get: newFunc('duration', 10, function () {
            let res = mm.memory.private_data.get(this).duration;
            if (debug) print('EncodedAudioChunk.duration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    copyTo: {

        value: newFunc('copyTo', 10, function () {
            if (debug) print('EncodedAudioChunk.copyTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('EncodedAudioChunk.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ElementInternals = newFunc('ElementInternals', 1, function () {
    print('ElementInternals.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ElementInternals.prototype, {
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('ElementInternals.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    willValidate: {

        get: newFunc('willValidate', 10, function () {
            let res = mm.memory.private_data.get(this).willValidate;
            if (debug) print('ElementInternals.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validity: {

        get: newFunc('validity', 10, function () {
            let res = mm.memory.private_data.get(this).validity;
            if (debug) print('ElementInternals.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validationMessage: {

        get: newFunc('validationMessage', 10, function () {
            let res = mm.memory.private_data.get(this).validationMessage;
            if (debug) print('ElementInternals.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    labels: {

        get: newFunc('labels', 10, function () {
            let res = mm.memory.private_data.get(this).labels;
            if (debug) print('ElementInternals.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    states: {

        get: newFunc('states', 10, function () {
            let res = mm.memory.private_data.get(this).states;
            if (debug) print('ElementInternals.states.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shadowRoot: {

        get: newFunc('shadowRoot', 10, function () {
            let res = mm.memory.private_data.get(this).shadowRoot;
            if (debug) print('ElementInternals.shadowRoot.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    role: {

        get: newFunc('role', 10, function () {
            let res = mm.memory.private_data.get(this).role;
            if (debug) print('ElementInternals.role.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('role', 1, function (value) {
            if (debug) print('ElementInternals.role.set', value)
            mm.memory.private_data.get(this).role = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaAtomic: {

        get: newFunc('ariaAtomic', 10, function () {
            let res = mm.memory.private_data.get(this).ariaAtomic;
            if (debug) print('ElementInternals.ariaAtomic.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaAtomic', 1, function (value) {
            if (debug) print('ElementInternals.ariaAtomic.set', value)
            mm.memory.private_data.get(this).ariaAtomic = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaAutoComplete: {

        get: newFunc('ariaAutoComplete', 10, function () {
            let res = mm.memory.private_data.get(this).ariaAutoComplete;
            if (debug) print('ElementInternals.ariaAutoComplete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaAutoComplete', 1, function (value) {
            if (debug) print('ElementInternals.ariaAutoComplete.set', value)
            mm.memory.private_data.get(this).ariaAutoComplete = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaBusy: {

        get: newFunc('ariaBusy', 10, function () {
            let res = mm.memory.private_data.get(this).ariaBusy;
            if (debug) print('ElementInternals.ariaBusy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaBusy', 1, function (value) {
            if (debug) print('ElementInternals.ariaBusy.set', value)
            mm.memory.private_data.get(this).ariaBusy = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaBrailleLabel: {

        get: newFunc('ariaBrailleLabel', 10, function () {
            let res = mm.memory.private_data.get(this).ariaBrailleLabel;
            if (debug) print('ElementInternals.ariaBrailleLabel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaBrailleLabel', 1, function (value) {
            if (debug) print('ElementInternals.ariaBrailleLabel.set', value)
            mm.memory.private_data.get(this).ariaBrailleLabel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaBrailleRoleDescription: {

        get: newFunc('ariaBrailleRoleDescription', 10, function () {
            let res = mm.memory.private_data.get(this).ariaBrailleRoleDescription;
            if (debug) print('ElementInternals.ariaBrailleRoleDescription.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaBrailleRoleDescription', 1, function (value) {
            if (debug) print('ElementInternals.ariaBrailleRoleDescription.set', value)
            mm.memory.private_data.get(this).ariaBrailleRoleDescription = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaChecked: {

        get: newFunc('ariaChecked', 10, function () {
            let res = mm.memory.private_data.get(this).ariaChecked;
            if (debug) print('ElementInternals.ariaChecked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaChecked', 1, function (value) {
            if (debug) print('ElementInternals.ariaChecked.set', value)
            mm.memory.private_data.get(this).ariaChecked = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaColCount: {

        get: newFunc('ariaColCount', 10, function () {
            let res = mm.memory.private_data.get(this).ariaColCount;
            if (debug) print('ElementInternals.ariaColCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaColCount', 1, function (value) {
            if (debug) print('ElementInternals.ariaColCount.set', value)
            mm.memory.private_data.get(this).ariaColCount = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaColIndex: {

        get: newFunc('ariaColIndex', 10, function () {
            let res = mm.memory.private_data.get(this).ariaColIndex;
            if (debug) print('ElementInternals.ariaColIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaColIndex', 1, function (value) {
            if (debug) print('ElementInternals.ariaColIndex.set', value)
            mm.memory.private_data.get(this).ariaColIndex = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaColSpan: {

        get: newFunc('ariaColSpan', 10, function () {
            let res = mm.memory.private_data.get(this).ariaColSpan;
            if (debug) print('ElementInternals.ariaColSpan.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaColSpan', 1, function (value) {
            if (debug) print('ElementInternals.ariaColSpan.set', value)
            mm.memory.private_data.get(this).ariaColSpan = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaCurrent: {

        get: newFunc('ariaCurrent', 10, function () {
            let res = mm.memory.private_data.get(this).ariaCurrent;
            if (debug) print('ElementInternals.ariaCurrent.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaCurrent', 1, function (value) {
            if (debug) print('ElementInternals.ariaCurrent.set', value)
            mm.memory.private_data.get(this).ariaCurrent = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaDescription: {

        get: newFunc('ariaDescription', 10, function () {
            let res = mm.memory.private_data.get(this).ariaDescription;
            if (debug) print('ElementInternals.ariaDescription.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaDescription', 1, function (value) {
            if (debug) print('ElementInternals.ariaDescription.set', value)
            mm.memory.private_data.get(this).ariaDescription = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaDisabled: {

        get: newFunc('ariaDisabled', 10, function () {
            let res = mm.memory.private_data.get(this).ariaDisabled;
            if (debug) print('ElementInternals.ariaDisabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaDisabled', 1, function (value) {
            if (debug) print('ElementInternals.ariaDisabled.set', value)
            mm.memory.private_data.get(this).ariaDisabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaExpanded: {

        get: newFunc('ariaExpanded', 10, function () {
            let res = mm.memory.private_data.get(this).ariaExpanded;
            if (debug) print('ElementInternals.ariaExpanded.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaExpanded', 1, function (value) {
            if (debug) print('ElementInternals.ariaExpanded.set', value)
            mm.memory.private_data.get(this).ariaExpanded = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaHasPopup: {

        get: newFunc('ariaHasPopup', 10, function () {
            let res = mm.memory.private_data.get(this).ariaHasPopup;
            if (debug) print('ElementInternals.ariaHasPopup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaHasPopup', 1, function (value) {
            if (debug) print('ElementInternals.ariaHasPopup.set', value)
            mm.memory.private_data.get(this).ariaHasPopup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaHidden: {

        get: newFunc('ariaHidden', 10, function () {
            let res = mm.memory.private_data.get(this).ariaHidden;
            if (debug) print('ElementInternals.ariaHidden.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaHidden', 1, function (value) {
            if (debug) print('ElementInternals.ariaHidden.set', value)
            mm.memory.private_data.get(this).ariaHidden = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaInvalid: {

        get: newFunc('ariaInvalid', 10, function () {
            let res = mm.memory.private_data.get(this).ariaInvalid;
            if (debug) print('ElementInternals.ariaInvalid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaInvalid', 1, function (value) {
            if (debug) print('ElementInternals.ariaInvalid.set', value)
            mm.memory.private_data.get(this).ariaInvalid = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaKeyShortcuts: {

        get: newFunc('ariaKeyShortcuts', 10, function () {
            let res = mm.memory.private_data.get(this).ariaKeyShortcuts;
            if (debug) print('ElementInternals.ariaKeyShortcuts.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaKeyShortcuts', 1, function (value) {
            if (debug) print('ElementInternals.ariaKeyShortcuts.set', value)
            mm.memory.private_data.get(this).ariaKeyShortcuts = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaLabel: {

        get: newFunc('ariaLabel', 10, function () {
            let res = mm.memory.private_data.get(this).ariaLabel;
            if (debug) print('ElementInternals.ariaLabel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaLabel', 1, function (value) {
            if (debug) print('ElementInternals.ariaLabel.set', value)
            mm.memory.private_data.get(this).ariaLabel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaLevel: {

        get: newFunc('ariaLevel', 10, function () {
            let res = mm.memory.private_data.get(this).ariaLevel;
            if (debug) print('ElementInternals.ariaLevel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaLevel', 1, function (value) {
            if (debug) print('ElementInternals.ariaLevel.set', value)
            mm.memory.private_data.get(this).ariaLevel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaLive: {

        get: newFunc('ariaLive', 10, function () {
            let res = mm.memory.private_data.get(this).ariaLive;
            if (debug) print('ElementInternals.ariaLive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaLive', 1, function (value) {
            if (debug) print('ElementInternals.ariaLive.set', value)
            mm.memory.private_data.get(this).ariaLive = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaModal: {

        get: newFunc('ariaModal', 10, function () {
            let res = mm.memory.private_data.get(this).ariaModal;
            if (debug) print('ElementInternals.ariaModal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaModal', 1, function (value) {
            if (debug) print('ElementInternals.ariaModal.set', value)
            mm.memory.private_data.get(this).ariaModal = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaMultiLine: {

        get: newFunc('ariaMultiLine', 10, function () {
            let res = mm.memory.private_data.get(this).ariaMultiLine;
            if (debug) print('ElementInternals.ariaMultiLine.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaMultiLine', 1, function (value) {
            if (debug) print('ElementInternals.ariaMultiLine.set', value)
            mm.memory.private_data.get(this).ariaMultiLine = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaMultiSelectable: {

        get: newFunc('ariaMultiSelectable', 10, function () {
            let res = mm.memory.private_data.get(this).ariaMultiSelectable;
            if (debug) print('ElementInternals.ariaMultiSelectable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaMultiSelectable', 1, function (value) {
            if (debug) print('ElementInternals.ariaMultiSelectable.set', value)
            mm.memory.private_data.get(this).ariaMultiSelectable = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaOrientation: {

        get: newFunc('ariaOrientation', 10, function () {
            let res = mm.memory.private_data.get(this).ariaOrientation;
            if (debug) print('ElementInternals.ariaOrientation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaOrientation', 1, function (value) {
            if (debug) print('ElementInternals.ariaOrientation.set', value)
            mm.memory.private_data.get(this).ariaOrientation = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaPlaceholder: {

        get: newFunc('ariaPlaceholder', 10, function () {
            let res = mm.memory.private_data.get(this).ariaPlaceholder;
            if (debug) print('ElementInternals.ariaPlaceholder.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaPlaceholder', 1, function (value) {
            if (debug) print('ElementInternals.ariaPlaceholder.set', value)
            mm.memory.private_data.get(this).ariaPlaceholder = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaPosInSet: {

        get: newFunc('ariaPosInSet', 10, function () {
            let res = mm.memory.private_data.get(this).ariaPosInSet;
            if (debug) print('ElementInternals.ariaPosInSet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaPosInSet', 1, function (value) {
            if (debug) print('ElementInternals.ariaPosInSet.set', value)
            mm.memory.private_data.get(this).ariaPosInSet = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaPressed: {

        get: newFunc('ariaPressed', 10, function () {
            let res = mm.memory.private_data.get(this).ariaPressed;
            if (debug) print('ElementInternals.ariaPressed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaPressed', 1, function (value) {
            if (debug) print('ElementInternals.ariaPressed.set', value)
            mm.memory.private_data.get(this).ariaPressed = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaReadOnly: {

        get: newFunc('ariaReadOnly', 10, function () {
            let res = mm.memory.private_data.get(this).ariaReadOnly;
            if (debug) print('ElementInternals.ariaReadOnly.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaReadOnly', 1, function (value) {
            if (debug) print('ElementInternals.ariaReadOnly.set', value)
            mm.memory.private_data.get(this).ariaReadOnly = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaRelevant: {

        get: newFunc('ariaRelevant', 10, function () {
            let res = mm.memory.private_data.get(this).ariaRelevant;
            if (debug) print('ElementInternals.ariaRelevant.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaRelevant', 1, function (value) {
            if (debug) print('ElementInternals.ariaRelevant.set', value)
            mm.memory.private_data.get(this).ariaRelevant = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaRequired: {

        get: newFunc('ariaRequired', 10, function () {
            let res = mm.memory.private_data.get(this).ariaRequired;
            if (debug) print('ElementInternals.ariaRequired.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaRequired', 1, function (value) {
            if (debug) print('ElementInternals.ariaRequired.set', value)
            mm.memory.private_data.get(this).ariaRequired = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaRoleDescription: {

        get: newFunc('ariaRoleDescription', 10, function () {
            let res = mm.memory.private_data.get(this).ariaRoleDescription;
            if (debug) print('ElementInternals.ariaRoleDescription.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaRoleDescription', 1, function (value) {
            if (debug) print('ElementInternals.ariaRoleDescription.set', value)
            mm.memory.private_data.get(this).ariaRoleDescription = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaRowCount: {

        get: newFunc('ariaRowCount', 10, function () {
            let res = mm.memory.private_data.get(this).ariaRowCount;
            if (debug) print('ElementInternals.ariaRowCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaRowCount', 1, function (value) {
            if (debug) print('ElementInternals.ariaRowCount.set', value)
            mm.memory.private_data.get(this).ariaRowCount = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaRowIndex: {

        get: newFunc('ariaRowIndex', 10, function () {
            let res = mm.memory.private_data.get(this).ariaRowIndex;
            if (debug) print('ElementInternals.ariaRowIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaRowIndex', 1, function (value) {
            if (debug) print('ElementInternals.ariaRowIndex.set', value)
            mm.memory.private_data.get(this).ariaRowIndex = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaRowSpan: {

        get: newFunc('ariaRowSpan', 10, function () {
            let res = mm.memory.private_data.get(this).ariaRowSpan;
            if (debug) print('ElementInternals.ariaRowSpan.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaRowSpan', 1, function (value) {
            if (debug) print('ElementInternals.ariaRowSpan.set', value)
            mm.memory.private_data.get(this).ariaRowSpan = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaSelected: {

        get: newFunc('ariaSelected', 10, function () {
            let res = mm.memory.private_data.get(this).ariaSelected;
            if (debug) print('ElementInternals.ariaSelected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaSelected', 1, function (value) {
            if (debug) print('ElementInternals.ariaSelected.set', value)
            mm.memory.private_data.get(this).ariaSelected = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaSetSize: {

        get: newFunc('ariaSetSize', 10, function () {
            let res = mm.memory.private_data.get(this).ariaSetSize;
            if (debug) print('ElementInternals.ariaSetSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaSetSize', 1, function (value) {
            if (debug) print('ElementInternals.ariaSetSize.set', value)
            mm.memory.private_data.get(this).ariaSetSize = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaSort: {

        get: newFunc('ariaSort', 10, function () {
            let res = mm.memory.private_data.get(this).ariaSort;
            if (debug) print('ElementInternals.ariaSort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaSort', 1, function (value) {
            if (debug) print('ElementInternals.ariaSort.set', value)
            mm.memory.private_data.get(this).ariaSort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaValueMax: {

        get: newFunc('ariaValueMax', 10, function () {
            let res = mm.memory.private_data.get(this).ariaValueMax;
            if (debug) print('ElementInternals.ariaValueMax.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaValueMax', 1, function (value) {
            if (debug) print('ElementInternals.ariaValueMax.set', value)
            mm.memory.private_data.get(this).ariaValueMax = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaValueMin: {

        get: newFunc('ariaValueMin', 10, function () {
            let res = mm.memory.private_data.get(this).ariaValueMin;
            if (debug) print('ElementInternals.ariaValueMin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaValueMin', 1, function (value) {
            if (debug) print('ElementInternals.ariaValueMin.set', value)
            mm.memory.private_data.get(this).ariaValueMin = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaValueNow: {

        get: newFunc('ariaValueNow', 10, function () {
            let res = mm.memory.private_data.get(this).ariaValueNow;
            if (debug) print('ElementInternals.ariaValueNow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaValueNow', 1, function (value) {
            if (debug) print('ElementInternals.ariaValueNow.set', value)
            mm.memory.private_data.get(this).ariaValueNow = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaValueText: {

        get: newFunc('ariaValueText', 10, function () {
            let res = mm.memory.private_data.get(this).ariaValueText;
            if (debug) print('ElementInternals.ariaValueText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaValueText', 1, function (value) {
            if (debug) print('ElementInternals.ariaValueText.set', value)
            mm.memory.private_data.get(this).ariaValueText = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    checkValidity: {

        value: newFunc('checkValidity', 10, function () {
            if (debug) print('ElementInternals.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportValidity: {

        value: newFunc('reportValidity', 10, function () {
            if (debug) print('ElementInternals.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setFormValue: {

        value: newFunc('setFormValue', 10, function () {
            if (debug) print('ElementInternals.setFormValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setValidity: {

        value: newFunc('setValidity', 10, function () {
            if (debug) print('ElementInternals.setValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ariaColIndexText: {

        get: newFunc('ariaColIndexText', 10, function () {
            let res = mm.memory.private_data.get(this).ariaColIndexText;
            if (debug) print('ElementInternals.ariaColIndexText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaColIndexText', 1, function (value) {
            if (debug) print('ElementInternals.ariaColIndexText.set', value)
            mm.memory.private_data.get(this).ariaColIndexText = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ariaRowIndexText: {

        get: newFunc('ariaRowIndexText', 10, function () {
            let res = mm.memory.private_data.get(this).ariaRowIndexText;
            if (debug) print('ElementInternals.ariaRowIndexText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ariaRowIndexText', 1, function (value) {
            if (debug) print('ElementInternals.ariaRowIndexText.set', value)
            mm.memory.private_data.get(this).ariaRowIndexText = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ElementInternals.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

EditContext = newFunc('EditContext', 1, function () {
    print('EditContext.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(EditContext.prototype, {
    text: {

        get: newFunc('text', 10, function () {
            let res = mm.memory.private_data.get(this).text;
            if (debug) print('EditContext.text.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    selectionStart: {

        get: newFunc('selectionStart', 10, function () {
            let res = mm.memory.private_data.get(this).selectionStart;
            if (debug) print('EditContext.selectionStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    selectionEnd: {

        get: newFunc('selectionEnd', 10, function () {
            let res = mm.memory.private_data.get(this).selectionEnd;
            if (debug) print('EditContext.selectionEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    characterBoundsRangeStart: {

        get: newFunc('characterBoundsRangeStart', 10, function () {
            let res = mm.memory.private_data.get(this).characterBoundsRangeStart;
            if (debug) print('EditContext.characterBoundsRangeStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ontextupdate: {

        get: newFunc('ontextupdate', 10, function () {
            let res = mm.memory.private_data.get(this).ontextupdate;
            if (debug) print('EditContext.ontextupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontextupdate', 1, function (value) {
            if (debug) print('EditContext.ontextupdate.set', value)
            mm.memory.private_data.get(this).ontextupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontextformatupdate: {

        get: newFunc('ontextformatupdate', 10, function () {
            let res = mm.memory.private_data.get(this).ontextformatupdate;
            if (debug) print('EditContext.ontextformatupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontextformatupdate', 1, function (value) {
            if (debug) print('EditContext.ontextformatupdate.set', value)
            mm.memory.private_data.get(this).ontextformatupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncharacterboundsupdate: {

        get: newFunc('oncharacterboundsupdate', 10, function () {
            let res = mm.memory.private_data.get(this).oncharacterboundsupdate;
            if (debug) print('EditContext.oncharacterboundsupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncharacterboundsupdate', 1, function (value) {
            if (debug) print('EditContext.oncharacterboundsupdate.set', value)
            mm.memory.private_data.get(this).oncharacterboundsupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncompositionstart: {

        get: newFunc('oncompositionstart', 10, function () {
            let res = mm.memory.private_data.get(this).oncompositionstart;
            if (debug) print('EditContext.oncompositionstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncompositionstart', 1, function (value) {
            if (debug) print('EditContext.oncompositionstart.set', value)
            mm.memory.private_data.get(this).oncompositionstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncompositionend: {

        get: newFunc('oncompositionend', 10, function () {
            let res = mm.memory.private_data.get(this).oncompositionend;
            if (debug) print('EditContext.oncompositionend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncompositionend', 1, function (value) {
            if (debug) print('EditContext.oncompositionend.set', value)
            mm.memory.private_data.get(this).oncompositionend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    attachedElements: {

        value: newFunc('attachedElements', 10, function () {
            if (debug) print('EditContext.attachedElements.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    characterBounds: {

        value: newFunc('characterBounds', 10, function () {
            if (debug) print('EditContext.characterBounds.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateCharacterBounds: {

        value: newFunc('updateCharacterBounds', 10, function () {
            if (debug) print('EditContext.updateCharacterBounds.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateControlBounds: {

        value: newFunc('updateControlBounds', 10, function () {
            if (debug) print('EditContext.updateControlBounds.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateSelection: {

        value: newFunc('updateSelection', 10, function () {
            if (debug) print('EditContext.updateSelection.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateSelectionBounds: {

        value: newFunc('updateSelectionBounds', 10, function () {
            if (debug) print('EditContext.updateSelectionBounds.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateText: {

        value: newFunc('updateText', 10, function () {
            if (debug) print('EditContext.updateText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('EditContext.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DragEvent = newFunc('DragEvent', 1, function () {
    print('DragEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DragEvent.prototype, {
    dataTransfer: {

        get: newFunc('dataTransfer', 10, function () {
            let res = mm.memory.private_data.get(this).dataTransfer;
            if (debug) print('DragEvent.dataTransfer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DragEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DocumentFragment = newFunc('DocumentFragment', 1, function () {
    print('DocumentFragment.call');
    mm.memory.private_data.set(this, {
        children: [],
    })
    let r = $('<fragment></fragment>');
    mm.allNodes.set(this, r)
    mm.allIframes.push(r)
})


Object.defineProperties(DocumentFragment.prototype, {
    children: {

        get: newFunc('children', 10, function () {
            let res = mm.memory.private_data.get(this).children;
            if (debug) print('DocumentFragment.children.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    firstElementChild: {

        get: newFunc('firstElementChild', 10, function () {
            let res = mm.memory.private_data.get(this).firstElementChild;
            if (debug) print('DocumentFragment.firstElementChild.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lastElementChild: {

        get: newFunc('lastElementChild', 10, function () {
            let res = mm.memory.private_data.get(this).lastElementChild;
            if (debug) print('DocumentFragment.lastElementChild.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    childElementCount: {

        get: newFunc('childElementCount', 10, function () {
            let res = mm.memory.private_data.get(this).childElementCount;
            if (debug) print('DocumentFragment.childElementCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    append: {

        value: newFunc('append', 10, function () {
            if (debug) print('DocumentFragment.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getElementById: {

        value: newFunc('getElementById', 10, function () {
            if (debug) print('DocumentFragment.getElementById.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    prepend: {

        value: newFunc('prepend', 10, function () {
            if (debug) print('DocumentFragment.prepend.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    querySelector: {

        value: newFunc('querySelector', 10, function () {
            if (debug) print('DocumentFragment.querySelector.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    querySelectorAll: {

        value: newFunc('querySelectorAll', 10, function () {
            if (debug) print('DocumentFragment.querySelectorAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceChildren: {

        value: newFunc('replaceChildren', 10, function () {
            if (debug) print('DocumentFragment.replaceChildren.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DocumentFragment.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
Object.setPrototypeOf(DocumentFragment.prototype, Node.prototype);
Object.setPrototypeOf(DocumentFragment, Node);
DocumentFragment.__proto__ = Node.prototype
DelegatedInkTrailPresenter = newFunc('DelegatedInkTrailPresenter', 1, function () {
    print('DelegatedInkTrailPresenter.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DelegatedInkTrailPresenter.prototype, {
    presentationArea: {

        get: newFunc('presentationArea', 10, function () {
            let res = mm.memory.private_data.get(this).presentationArea;
            if (debug) print('DelegatedInkTrailPresenter.presentationArea.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    updateInkTrailStartPoint: {

        value: newFunc('updateInkTrailStartPoint', 10, function () {
            if (debug) print('DelegatedInkTrailPresenter.updateInkTrailStartPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DelegatedInkTrailPresenter.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DelayNode = newFunc('DelayNode', 1, function () {
    print('DelayNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DelayNode.prototype, {
    delayTime: {

        get: newFunc('delayTime', 10, function () {
            let res = mm.memory.private_data.get(this).delayTime;
            if (debug) print('DelayNode.delayTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DelayNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DecompressionStream = newFunc('DecompressionStream', 1, function () {
    print('DecompressionStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DecompressionStream.prototype, {
    readable: {

        get: newFunc('readable', 10, function () {
            let res = mm.memory.private_data.get(this).readable;
            if (debug) print('DecompressionStream.readable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writable: {

        get: newFunc('writable', 10, function () {
            let res = mm.memory.private_data.get(this).writable;
            if (debug) print('DecompressionStream.writable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DecompressionStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DataTransferItemList = newFunc('DataTransferItemList', 1, function () {
    print('DataTransferItemList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DataTransferItemList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('DataTransferItemList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('DataTransferItemList.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('DataTransferItemList.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    remove: {

        value: newFunc('remove', 10, function () {
            if (debug) print('DataTransferItemList.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DataTransferItemList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DataTransferItem = newFunc('DataTransferItem', 1, function () {
    print('DataTransferItem.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DataTransferItem.prototype, {
    kind: {

        get: newFunc('kind', 10, function () {
            let res = mm.memory.private_data.get(this).kind;
            if (debug) print('DataTransferItem.kind.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('DataTransferItem.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getAsFile: {

        value: newFunc('getAsFile', 10, function () {
            if (debug) print('DataTransferItem.getAsFile.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAsString: {

        value: newFunc('getAsString', 10, function () {
            if (debug) print('DataTransferItem.getAsString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    webkitGetAsEntry: {

        value: newFunc('webkitGetAsEntry', 10, function () {
            if (debug) print('DataTransferItem.webkitGetAsEntry.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getAsFileSystemHandle: {

        value: newFunc('getAsFileSystemHandle', 10, function () {
            if (debug) print('DataTransferItem.getAsFileSystemHandle.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DataTransferItem.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DataTransfer = newFunc('DataTransfer', 1, function () {
    print('DataTransfer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DataTransfer.prototype, {
    dropEffect: {

        get: newFunc('dropEffect', 10, function () {
            let res = mm.memory.private_data.get(this).dropEffect;
            if (debug) print('DataTransfer.dropEffect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('dropEffect', 1, function (value) {
            if (debug) print('DataTransfer.dropEffect.set', value)
            mm.memory.private_data.get(this).dropEffect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    effectAllowed: {

        get: newFunc('effectAllowed', 10, function () {
            let res = mm.memory.private_data.get(this).effectAllowed;
            if (debug) print('DataTransfer.effectAllowed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('effectAllowed', 1, function (value) {
            if (debug) print('DataTransfer.effectAllowed.set', value)
            mm.memory.private_data.get(this).effectAllowed = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    items: {

        get: newFunc('items', 10, function () {
            let res = mm.memory.private_data.get(this).items;
            if (debug) print('DataTransfer.items.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    types: {

        get: newFunc('types', 10, function () {
            let res = mm.memory.private_data.get(this).types;
            if (debug) print('DataTransfer.types.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    files: {

        get: newFunc('files', 10, function () {
            let res = mm.memory.private_data.get(this).files;
            if (debug) print('DataTransfer.files.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    clearData: {

        value: newFunc('clearData', 10, function () {
            if (debug) print('DataTransfer.clearData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getData: {

        value: newFunc('getData', 10, function () {
            if (debug) print('DataTransfer.getData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setData: {

        value: newFunc('setData', 10, function () {
            if (debug) print('DataTransfer.setData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setDragImage: {

        value: newFunc('setDragImage', 10, function () {
            if (debug) print('DataTransfer.setDragImage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DataTransfer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DOMStringMap = newFunc('DOMStringMap', 1, function () {
    print('DOMStringMap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMStringMap.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMStringMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DOMStringList = newFunc('DOMStringList', 1, function () {
    print('DOMStringList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMStringList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('DOMStringList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    contains: {

        value: newFunc('contains', 10, function () {
            if (debug) print('DOMStringList.contains.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    item: {

        value: newFunc('item', 10, function () {
            if (debug) print('DOMStringList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMStringList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DOMQuad = newFunc('DOMQuad', 1, function () {
    print('DOMQuad.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMQuad.prototype, {
    p1: {

        get: newFunc('p1', 10, function () {
            let res = mm.memory.private_data.get(this).p1;
            if (debug) print('DOMQuad.p1.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    p2: {

        get: newFunc('p2', 10, function () {
            let res = mm.memory.private_data.get(this).p2;
            if (debug) print('DOMQuad.p2.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    p3: {

        get: newFunc('p3', 10, function () {
            let res = mm.memory.private_data.get(this).p3;
            if (debug) print('DOMQuad.p3.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    p4: {

        get: newFunc('p4', 10, function () {
            let res = mm.memory.private_data.get(this).p4;
            if (debug) print('DOMQuad.p4.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getBounds: {

        value: newFunc('getBounds', 10, function () {
            if (debug) print('DOMQuad.getBounds.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('DOMQuad.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMQuad.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DOMPointReadOnly = newFunc('DOMPointReadOnly', 1, function () {
    print('DOMPointReadOnly.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMPointReadOnly.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('DOMPointReadOnly.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('DOMPointReadOnly.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('DOMPointReadOnly.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    w: {

        get: newFunc('w', 10, function () {
            let res = mm.memory.private_data.get(this).w;
            if (debug) print('DOMPointReadOnly.w.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    matrixTransform: {

        value: newFunc('matrixTransform', 10, function () {
            if (debug) print('DOMPointReadOnly.matrixTransform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('DOMPointReadOnly.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMPointReadOnly.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DOMPoint = newFunc('DOMPoint', 1, function () {
    print('DOMPoint.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMPoint.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('DOMPoint.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('x', 1, function (value) {
            if (debug) print('DOMPoint.x.set', value)
            mm.memory.private_data.get(this).x = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('DOMPoint.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('y', 1, function (value) {
            if (debug) print('DOMPoint.y.set', value)
            mm.memory.private_data.get(this).y = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('DOMPoint.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('z', 1, function (value) {
            if (debug) print('DOMPoint.z.set', value)
            mm.memory.private_data.get(this).z = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    w: {

        get: newFunc('w', 10, function () {
            let res = mm.memory.private_data.get(this).w;
            if (debug) print('DOMPoint.w.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('w', 1, function (value) {
            if (debug) print('DOMPoint.w.set', value)
            mm.memory.private_data.get(this).w = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMPoint.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DOMParser = newFunc('DOMParser', 1, function () {
    print('DOMParser.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMParser.prototype, {
    parseFromString: {

        value: newFunc('parseFromString', 10, function () {
            if (debug) print('DOMParser.parseFromString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMParser.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DOMMatrixReadOnly = newFunc('DOMMatrixReadOnly', 1, function () {
    print('DOMMatrixReadOnly.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMMatrixReadOnly.prototype, {
    a: {

        get: newFunc('a', 10, function () {
            let res = mm.memory.private_data.get(this).a;
            if (debug) print('DOMMatrixReadOnly.a.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    b: {

        get: newFunc('b', 10, function () {
            let res = mm.memory.private_data.get(this).b;
            if (debug) print('DOMMatrixReadOnly.b.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    c: {

        get: newFunc('c', 10, function () {
            let res = mm.memory.private_data.get(this).c;
            if (debug) print('DOMMatrixReadOnly.c.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    d: {

        get: newFunc('d', 10, function () {
            let res = mm.memory.private_data.get(this).d;
            if (debug) print('DOMMatrixReadOnly.d.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    e: {

        get: newFunc('e', 10, function () {
            let res = mm.memory.private_data.get(this).e;
            if (debug) print('DOMMatrixReadOnly.e.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    f: {

        get: newFunc('f', 10, function () {
            let res = mm.memory.private_data.get(this).f;
            if (debug) print('DOMMatrixReadOnly.f.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m11: {

        get: newFunc('m11', 10, function () {
            let res = mm.memory.private_data.get(this).m11;
            if (debug) print('DOMMatrixReadOnly.m11.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m12: {

        get: newFunc('m12', 10, function () {
            let res = mm.memory.private_data.get(this).m12;
            if (debug) print('DOMMatrixReadOnly.m12.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m13: {

        get: newFunc('m13', 10, function () {
            let res = mm.memory.private_data.get(this).m13;
            if (debug) print('DOMMatrixReadOnly.m13.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m14: {

        get: newFunc('m14', 10, function () {
            let res = mm.memory.private_data.get(this).m14;
            if (debug) print('DOMMatrixReadOnly.m14.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m21: {

        get: newFunc('m21', 10, function () {
            let res = mm.memory.private_data.get(this).m21;
            if (debug) print('DOMMatrixReadOnly.m21.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m22: {

        get: newFunc('m22', 10, function () {
            let res = mm.memory.private_data.get(this).m22;
            if (debug) print('DOMMatrixReadOnly.m22.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m23: {

        get: newFunc('m23', 10, function () {
            let res = mm.memory.private_data.get(this).m23;
            if (debug) print('DOMMatrixReadOnly.m23.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m24: {

        get: newFunc('m24', 10, function () {
            let res = mm.memory.private_data.get(this).m24;
            if (debug) print('DOMMatrixReadOnly.m24.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m31: {

        get: newFunc('m31', 10, function () {
            let res = mm.memory.private_data.get(this).m31;
            if (debug) print('DOMMatrixReadOnly.m31.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m32: {

        get: newFunc('m32', 10, function () {
            let res = mm.memory.private_data.get(this).m32;
            if (debug) print('DOMMatrixReadOnly.m32.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m33: {

        get: newFunc('m33', 10, function () {
            let res = mm.memory.private_data.get(this).m33;
            if (debug) print('DOMMatrixReadOnly.m33.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m34: {

        get: newFunc('m34', 10, function () {
            let res = mm.memory.private_data.get(this).m34;
            if (debug) print('DOMMatrixReadOnly.m34.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m41: {

        get: newFunc('m41', 10, function () {
            let res = mm.memory.private_data.get(this).m41;
            if (debug) print('DOMMatrixReadOnly.m41.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m42: {

        get: newFunc('m42', 10, function () {
            let res = mm.memory.private_data.get(this).m42;
            if (debug) print('DOMMatrixReadOnly.m42.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m43: {

        get: newFunc('m43', 10, function () {
            let res = mm.memory.private_data.get(this).m43;
            if (debug) print('DOMMatrixReadOnly.m43.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    m44: {

        get: newFunc('m44', 10, function () {
            let res = mm.memory.private_data.get(this).m44;
            if (debug) print('DOMMatrixReadOnly.m44.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    is2D: {

        get: newFunc('is2D', 10, function () {
            let res = mm.memory.private_data.get(this).is2D;
            if (debug) print('DOMMatrixReadOnly.is2D.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isIdentity: {

        get: newFunc('isIdentity', 10, function () {
            let res = mm.memory.private_data.get(this).isIdentity;
            if (debug) print('DOMMatrixReadOnly.isIdentity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    flipX: {

        value: newFunc('flipX', 10, function () {
            if (debug) print('DOMMatrixReadOnly.flipX.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    flipY: {

        value: newFunc('flipY', 10, function () {
            if (debug) print('DOMMatrixReadOnly.flipY.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    inverse: {

        value: newFunc('inverse', 10, function () {
            if (debug) print('DOMMatrixReadOnly.inverse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    multiply: {

        value: newFunc('multiply', 10, function () {
            if (debug) print('DOMMatrixReadOnly.multiply.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotate: {

        value: newFunc('rotate', 10, function () {
            if (debug) print('DOMMatrixReadOnly.rotate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateAxisAngle: {

        value: newFunc('rotateAxisAngle', 10, function () {
            if (debug) print('DOMMatrixReadOnly.rotateAxisAngle.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateFromVector: {

        value: newFunc('rotateFromVector', 10, function () {
            if (debug) print('DOMMatrixReadOnly.rotateFromVector.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scale: {

        value: newFunc('scale', 10, function () {
            if (debug) print('DOMMatrixReadOnly.scale.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scale3d: {

        value: newFunc('scale3d', 10, function () {
            if (debug) print('DOMMatrixReadOnly.scale3d.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scaleNonUniform: {

        value: newFunc('scaleNonUniform', 10, function () {
            if (debug) print('DOMMatrixReadOnly.scaleNonUniform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewX: {

        value: newFunc('skewX', 10, function () {
            if (debug) print('DOMMatrixReadOnly.skewX.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewY: {

        value: newFunc('skewY', 10, function () {
            if (debug) print('DOMMatrixReadOnly.skewY.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toFloat32Array: {

        value: newFunc('toFloat32Array', 10, function () {
            if (debug) print('DOMMatrixReadOnly.toFloat32Array.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toFloat64Array: {

        value: newFunc('toFloat64Array', 10, function () {
            if (debug) print('DOMMatrixReadOnly.toFloat64Array.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('DOMMatrixReadOnly.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    transformPoint: {

        value: newFunc('transformPoint', 10, function () {
            if (debug) print('DOMMatrixReadOnly.transformPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    translate: {

        value: newFunc('translate', 10, function () {
            if (debug) print('DOMMatrixReadOnly.translate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMMatrixReadOnly.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('DOMMatrixReadOnly.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});

DOMMatrix = newFunc('DOMMatrix', 1, function () {
    print('DOMMatrix.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMMatrix.prototype, {
    a: {

        get: newFunc('a', 10, function () {
            let res = mm.memory.private_data.get(this).a;
            if (debug) print('DOMMatrix.a.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('a', 1, function (value) {
            if (debug) print('DOMMatrix.a.set', value)
            mm.memory.private_data.get(this).a = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    b: {

        get: newFunc('b', 10, function () {
            let res = mm.memory.private_data.get(this).b;
            if (debug) print('DOMMatrix.b.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('b', 1, function (value) {
            if (debug) print('DOMMatrix.b.set', value)
            mm.memory.private_data.get(this).b = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    c: {

        get: newFunc('c', 10, function () {
            let res = mm.memory.private_data.get(this).c;
            if (debug) print('DOMMatrix.c.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('c', 1, function (value) {
            if (debug) print('DOMMatrix.c.set', value)
            mm.memory.private_data.get(this).c = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    d: {

        get: newFunc('d', 10, function () {
            let res = mm.memory.private_data.get(this).d;
            if (debug) print('DOMMatrix.d.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('d', 1, function (value) {
            if (debug) print('DOMMatrix.d.set', value)
            mm.memory.private_data.get(this).d = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    e: {

        get: newFunc('e', 10, function () {
            let res = mm.memory.private_data.get(this).e;
            if (debug) print('DOMMatrix.e.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('e', 1, function (value) {
            if (debug) print('DOMMatrix.e.set', value)
            mm.memory.private_data.get(this).e = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    f: {

        get: newFunc('f', 10, function () {
            let res = mm.memory.private_data.get(this).f;
            if (debug) print('DOMMatrix.f.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('f', 1, function (value) {
            if (debug) print('DOMMatrix.f.set', value)
            mm.memory.private_data.get(this).f = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m11: {

        get: newFunc('m11', 10, function () {
            let res = mm.memory.private_data.get(this).m11;
            if (debug) print('DOMMatrix.m11.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m11', 1, function (value) {
            if (debug) print('DOMMatrix.m11.set', value)
            mm.memory.private_data.get(this).m11 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m12: {

        get: newFunc('m12', 10, function () {
            let res = mm.memory.private_data.get(this).m12;
            if (debug) print('DOMMatrix.m12.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m12', 1, function (value) {
            if (debug) print('DOMMatrix.m12.set', value)
            mm.memory.private_data.get(this).m12 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m13: {

        get: newFunc('m13', 10, function () {
            let res = mm.memory.private_data.get(this).m13;
            if (debug) print('DOMMatrix.m13.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m13', 1, function (value) {
            if (debug) print('DOMMatrix.m13.set', value)
            mm.memory.private_data.get(this).m13 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m14: {

        get: newFunc('m14', 10, function () {
            let res = mm.memory.private_data.get(this).m14;
            if (debug) print('DOMMatrix.m14.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m14', 1, function (value) {
            if (debug) print('DOMMatrix.m14.set', value)
            mm.memory.private_data.get(this).m14 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m21: {

        get: newFunc('m21', 10, function () {
            let res = mm.memory.private_data.get(this).m21;
            if (debug) print('DOMMatrix.m21.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m21', 1, function (value) {
            if (debug) print('DOMMatrix.m21.set', value)
            mm.memory.private_data.get(this).m21 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m22: {

        get: newFunc('m22', 10, function () {
            let res = mm.memory.private_data.get(this).m22;
            if (debug) print('DOMMatrix.m22.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m22', 1, function (value) {
            if (debug) print('DOMMatrix.m22.set', value)
            mm.memory.private_data.get(this).m22 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m23: {

        get: newFunc('m23', 10, function () {
            let res = mm.memory.private_data.get(this).m23;
            if (debug) print('DOMMatrix.m23.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m23', 1, function (value) {
            if (debug) print('DOMMatrix.m23.set', value)
            mm.memory.private_data.get(this).m23 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m24: {

        get: newFunc('m24', 10, function () {
            let res = mm.memory.private_data.get(this).m24;
            if (debug) print('DOMMatrix.m24.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m24', 1, function (value) {
            if (debug) print('DOMMatrix.m24.set', value)
            mm.memory.private_data.get(this).m24 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m31: {

        get: newFunc('m31', 10, function () {
            let res = mm.memory.private_data.get(this).m31;
            if (debug) print('DOMMatrix.m31.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m31', 1, function (value) {
            if (debug) print('DOMMatrix.m31.set', value)
            mm.memory.private_data.get(this).m31 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m32: {

        get: newFunc('m32', 10, function () {
            let res = mm.memory.private_data.get(this).m32;
            if (debug) print('DOMMatrix.m32.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m32', 1, function (value) {
            if (debug) print('DOMMatrix.m32.set', value)
            mm.memory.private_data.get(this).m32 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m33: {

        get: newFunc('m33', 10, function () {
            let res = mm.memory.private_data.get(this).m33;
            if (debug) print('DOMMatrix.m33.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m33', 1, function (value) {
            if (debug) print('DOMMatrix.m33.set', value)
            mm.memory.private_data.get(this).m33 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m34: {

        get: newFunc('m34', 10, function () {
            let res = mm.memory.private_data.get(this).m34;
            if (debug) print('DOMMatrix.m34.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m34', 1, function (value) {
            if (debug) print('DOMMatrix.m34.set', value)
            mm.memory.private_data.get(this).m34 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m41: {

        get: newFunc('m41', 10, function () {
            let res = mm.memory.private_data.get(this).m41;
            if (debug) print('DOMMatrix.m41.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m41', 1, function (value) {
            if (debug) print('DOMMatrix.m41.set', value)
            mm.memory.private_data.get(this).m41 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m42: {

        get: newFunc('m42', 10, function () {
            let res = mm.memory.private_data.get(this).m42;
            if (debug) print('DOMMatrix.m42.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m42', 1, function (value) {
            if (debug) print('DOMMatrix.m42.set', value)
            mm.memory.private_data.get(this).m42 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m43: {

        get: newFunc('m43', 10, function () {
            let res = mm.memory.private_data.get(this).m43;
            if (debug) print('DOMMatrix.m43.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m43', 1, function (value) {
            if (debug) print('DOMMatrix.m43.set', value)
            mm.memory.private_data.get(this).m43 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    m44: {

        get: newFunc('m44', 10, function () {
            let res = mm.memory.private_data.get(this).m44;
            if (debug) print('DOMMatrix.m44.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('m44', 1, function (value) {
            if (debug) print('DOMMatrix.m44.set', value)
            mm.memory.private_data.get(this).m44 = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    invertSelf: {

        value: newFunc('invertSelf', 10, function () {
            if (debug) print('DOMMatrix.invertSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    multiplySelf: {

        value: newFunc('multiplySelf', 10, function () {
            if (debug) print('DOMMatrix.multiplySelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    preMultiplySelf: {

        value: newFunc('preMultiplySelf', 10, function () {
            if (debug) print('DOMMatrix.preMultiplySelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateAxisAngleSelf: {

        value: newFunc('rotateAxisAngleSelf', 10, function () {
            if (debug) print('DOMMatrix.rotateAxisAngleSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateFromVectorSelf: {

        value: newFunc('rotateFromVectorSelf', 10, function () {
            if (debug) print('DOMMatrix.rotateFromVectorSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rotateSelf: {

        value: newFunc('rotateSelf', 10, function () {
            if (debug) print('DOMMatrix.rotateSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scale3dSelf: {

        value: newFunc('scale3dSelf', 10, function () {
            if (debug) print('DOMMatrix.scale3dSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    scaleSelf: {

        value: newFunc('scaleSelf', 10, function () {
            if (debug) print('DOMMatrix.scaleSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewXSelf: {

        value: newFunc('skewXSelf', 10, function () {
            if (debug) print('DOMMatrix.skewXSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    skewYSelf: {

        value: newFunc('skewYSelf', 10, function () {
            if (debug) print('DOMMatrix.skewYSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    translateSelf: {

        value: newFunc('translateSelf', 10, function () {
            if (debug) print('DOMMatrix.translateSelf.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMMatrix.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    setMatrixValue: {

        value: newFunc('setMatrixValue', 10, function () {
            if (debug) print('DOMMatrix.setMatrixValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});

DOMError = newFunc('DOMError', 1, function () {
    print('DOMError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DOMError.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('DOMError.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('DOMError.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DOMError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CustomStateSet = newFunc('CustomStateSet', 1, function () {
    print('CustomStateSet.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CustomStateSet.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('CustomStateSet.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('CustomStateSet.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    clear: {

        value: newFunc('clear', 10, function () {
            if (debug) print('CustomStateSet.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('CustomStateSet.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('CustomStateSet.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('CustomStateSet.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('CustomStateSet.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('CustomStateSet.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('CustomStateSet.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CustomStateSet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CustomElementRegistry = newFunc('CustomElementRegistry', 1, function () {
    print('CustomElementRegistry.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CustomElementRegistry.prototype, {
    define: {

        value: newFunc('define', 10, function () {
            if (debug) print('CustomElementRegistry.define.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('CustomElementRegistry.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getName: {

        value: newFunc('getName', 10, function () {
            if (debug) print('CustomElementRegistry.getName.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    upgrade: {

        value: newFunc('upgrade', 10, function () {
            if (debug) print('CustomElementRegistry.upgrade.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    whenDefined: {

        value: newFunc('whenDefined', 10, function () {
            if (debug) print('CustomElementRegistry.whenDefined.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CustomElementRegistry.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CountQueuingStrategy = newFunc('CountQueuingStrategy', 1, function () {
    print('CountQueuingStrategy.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CountQueuingStrategy.prototype, {
    highWaterMark: {

        get: newFunc('highWaterMark', 10, function () {
            let res = mm.memory.private_data.get(this).highWaterMark;
            if (debug) print('CountQueuingStrategy.highWaterMark.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('CountQueuingStrategy.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CountQueuingStrategy.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ConvolverNode = newFunc('ConvolverNode', 1, function () {
    print('ConvolverNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ConvolverNode.prototype, {
    buffer: {

        get: newFunc('buffer', 10, function () {
            let res = mm.memory.private_data.get(this).buffer;
            if (debug) print('ConvolverNode.buffer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('buffer', 1, function (value) {
            if (debug) print('ConvolverNode.buffer.set', value)
            mm.memory.private_data.get(this).buffer = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    normalize: {

        get: newFunc('normalize', 10, function () {
            let res = mm.memory.private_data.get(this).normalize;
            if (debug) print('ConvolverNode.normalize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('normalize', 1, function (value) {
            if (debug) print('ConvolverNode.normalize.set', value)
            mm.memory.private_data.get(this).normalize = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ConvolverNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ContentVisibilityAutoStateChangeEvent = newFunc('ContentVisibilityAutoStateChangeEvent', 1, function () {
    print('ContentVisibilityAutoStateChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ContentVisibilityAutoStateChangeEvent.prototype, {
    skipped: {

        get: newFunc('skipped', 10, function () {
            let res = mm.memory.private_data.get(this).skipped;
            if (debug) print('ContentVisibilityAutoStateChangeEvent.skipped.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ContentVisibilityAutoStateChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ConstantSourceNode = newFunc('ConstantSourceNode', 1, function () {
    print('ConstantSourceNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ConstantSourceNode.prototype, {
    offset: {

        get: newFunc('offset', 10, function () {
            let res = mm.memory.private_data.get(this).offset;
            if (debug) print('ConstantSourceNode.offset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ConstantSourceNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CompressionStream = newFunc('CompressionStream', 1, function () {
    print('CompressionStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CompressionStream.prototype, {
    readable: {

        get: newFunc('readable', 10, function () {
            let res = mm.memory.private_data.get(this).readable;
            if (debug) print('CompressionStream.readable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writable: {

        get: newFunc('writable', 10, function () {
            let res = mm.memory.private_data.get(this).writable;
            if (debug) print('CompressionStream.writable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CompressionStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CompositionEvent = newFunc('CompositionEvent', 1, function () {
    print('CompositionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CompositionEvent.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('CompositionEvent.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    initCompositionEvent: {

        value: newFunc('initCompositionEvent', 10, function () {
            if (debug) print('CompositionEvent.initCompositionEvent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CompositionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Comment = newFunc('Comment', 1, function (v) {
    print('Comment.call');
    mm.memory.private_data.set(this, {
        textContent: v,
        innerHTML: `<!--${v}-->`
    })
    // debugger;
    let text = `<!--${v}-->`;
    // if (/<!---->(.+?)<!---->/g.exec(text).length !== 0){
    //     text = /<!---->(.+?)<!---->/g.exec(text)[1];
    // }
    // if (v.startsWith('-->') && v.endsWith('<!--')){
    //     text = '';
    // }
    let res = $(text);
    if (res.length === 3
        && res.get(0).type === 'comment'
        && res.get(2).type === 'comment'
    ){
        res = $('<!--aaa-->')
        res[0].data = v
    }
    mm.allNodes.set(this, res)
})


Object.defineProperties(Comment.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Comment.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CloseWatcher = newFunc('CloseWatcher', 1, function () {
    print('CloseWatcher.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CloseWatcher.prototype, {
    oncancel: {

        get: newFunc('oncancel', 10, function () {
            let res = mm.memory.private_data.get(this).oncancel;
            if (debug) print('CloseWatcher.oncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncancel', 1, function (value) {
            if (debug) print('CloseWatcher.oncancel.set', value)
            mm.memory.private_data.get(this).oncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclose: {

        get: newFunc('onclose', 10, function () {
            let res = mm.memory.private_data.get(this).onclose;
            if (debug) print('CloseWatcher.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function (value) {
            if (debug) print('CloseWatcher.onclose.set', value)
            mm.memory.private_data.get(this).onclose = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('CloseWatcher.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    destroy: {

        value: newFunc('destroy', 10, function () {
            if (debug) print('CloseWatcher.destroy.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestClose: {

        value: newFunc('requestClose', 10, function () {
            if (debug) print('CloseWatcher.requestClose.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CloseWatcher.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CloseEvent = newFunc('CloseEvent', 1, function () {
    print('CloseEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CloseEvent.prototype, {
    wasClean: {

        get: newFunc('wasClean', 10, function () {
            let res = mm.memory.private_data.get(this).wasClean;
            if (debug) print('CloseEvent.wasClean.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    code: {

        get: newFunc('code', 10, function () {
            let res = mm.memory.private_data.get(this).code;
            if (debug) print('CloseEvent.code.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('CloseEvent.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CloseEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ClipboardEvent = newFunc('ClipboardEvent', 1, function () {
    print('ClipboardEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ClipboardEvent.prototype, {
    clipboardData: {

        get: newFunc('clipboardData', 10, function () {
            let res = mm.memory.private_data.get(this).clipboardData;
            if (debug) print('ClipboardEvent.clipboardData.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ClipboardEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});



CharacterBoundsUpdateEvent = newFunc('CharacterBoundsUpdateEvent', 1, function () {
    print('CharacterBoundsUpdateEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CharacterBoundsUpdateEvent.prototype, {
    rangeStart: {

        get: newFunc('rangeStart', 10, function () {
            let res = mm.memory.private_data.get(this).rangeStart;
            if (debug) print('CharacterBoundsUpdateEvent.rangeStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rangeEnd: {

        get: newFunc('rangeEnd', 10, function () {
            let res = mm.memory.private_data.get(this).rangeEnd;
            if (debug) print('CharacterBoundsUpdateEvent.rangeEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CharacterBoundsUpdateEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ChannelSplitterNode = newFunc('ChannelSplitterNode', 1, function () {
    print('ChannelSplitterNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ChannelSplitterNode.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ChannelSplitterNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ChannelMergerNode = newFunc('ChannelMergerNode', 1, function () {
    print('ChannelMergerNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ChannelMergerNode.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ChannelMergerNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CanvasPattern = newFunc('CanvasPattern', 1, function () {
    print('CanvasPattern.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CanvasPattern.prototype, {
    setTransform: {

        value: newFunc('setTransform', 10, function () {
            if (debug) print('CanvasPattern.setTransform.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CanvasPattern.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CanvasGradient = newFunc('CanvasGradient', 1, function () {
    print('CanvasGradient.call');
    mm.memory.private_data.set(this, {})
})

window['native_addColorStop'] = function (){
    if (debug) print('CanvasGradient.addColorStop.call', arguments)

}

Utils.registerNative('addColorStop', 'addColorStop')

Object.defineProperties(CanvasGradient.prototype, {
    addColorStop: {

        value: window['addColorStop'], writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CanvasGradient.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CanvasCaptureMediaStreamTrack = newFunc('CanvasCaptureMediaStreamTrack', 1, function () {
    print('CanvasCaptureMediaStreamTrack.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CanvasCaptureMediaStreamTrack.prototype, {
    canvas: {

        get: newFunc('canvas', 10, function () {
            let res = mm.memory.private_data.get(this).canvas;
            if (debug) print('CanvasCaptureMediaStreamTrack.canvas.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    requestFrame: {

        value: newFunc('requestFrame', 10, function () {
            if (debug) print('CanvasCaptureMediaStreamTrack.requestFrame.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CanvasCaptureMediaStreamTrack.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CDATASection = newFunc('CDATASection', 1, function () {
    print('CDATASection.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CDATASection.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CDATASection.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ByteLengthQueuingStrategy = newFunc('ByteLengthQueuingStrategy', 1, function () {
    print('ByteLengthQueuingStrategy.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ByteLengthQueuingStrategy.prototype, {
    highWaterMark: {

        get: newFunc('highWaterMark', 10, function () {
            let res = mm.memory.private_data.get(this).highWaterMark;
            if (debug) print('ByteLengthQueuingStrategy.highWaterMark.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('ByteLengthQueuingStrategy.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ByteLengthQueuingStrategy.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BrowserCaptureMediaStreamTrack = newFunc('BrowserCaptureMediaStreamTrack', 1, function () {
    print('BrowserCaptureMediaStreamTrack.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BrowserCaptureMediaStreamTrack.prototype, {
    cropTo: {

        value: newFunc('cropTo', 10, function () {
            if (debug) print('BrowserCaptureMediaStreamTrack.cropTo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BrowserCaptureMediaStreamTrack.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BroadcastChannel = newFunc('BroadcastChannel', 1, function () {
    print('BroadcastChannel.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BroadcastChannel.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('BroadcastChannel.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onmessage: {

        get: newFunc('onmessage', 10, function () {
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('BroadcastChannel.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function (value) {
            if (debug) print('BroadcastChannel.onmessage.set', value)
            mm.memory.private_data.get(this).onmessage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmessageerror: {

        get: newFunc('onmessageerror', 10, function () {
            let res = mm.memory.private_data.get(this).onmessageerror;
            if (debug) print('BroadcastChannel.onmessageerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessageerror', 1, function (value) {
            if (debug) print('BroadcastChannel.onmessageerror.set', value)
            mm.memory.private_data.get(this).onmessageerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('BroadcastChannel.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    postMessage: {

        value: newFunc('postMessage', 10, function () {
            if (debug) print('BroadcastChannel.postMessage.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BroadcastChannel.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BiquadFilterNode = newFunc('BiquadFilterNode', 1, function () {
    print('BiquadFilterNode.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BiquadFilterNode.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('BiquadFilterNode.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('BiquadFilterNode.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    frequency: {

        get: newFunc('frequency', 10, function () {
            let res = mm.memory.private_data.get(this).frequency;
            if (debug) print('BiquadFilterNode.frequency.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    detune: {

        get: newFunc('detune', 10, function () {
            let res = mm.memory.private_data.get(this).detune;
            if (debug) print('BiquadFilterNode.detune.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    Q: {

        get: newFunc('Q', 10, function () {
            let res = mm.memory.private_data.get(this).Q;
            if (debug) print('BiquadFilterNode.Q.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    gain: {

        get: newFunc('gain', 10, function () {
            let res = mm.memory.private_data.get(this).gain;
            if (debug) print('BiquadFilterNode.gain.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getFrequencyResponse: {

        value: newFunc('getFrequencyResponse', 10, function () {
            if (debug) print('BiquadFilterNode.getFrequencyResponse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BiquadFilterNode.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BeforeUnloadEvent = newFunc('BeforeUnloadEvent', 1, function () {
    print('BeforeUnloadEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BeforeUnloadEvent.prototype, {
    returnValue: {

        get: newFunc('returnValue', 10, function () {
            let res = mm.memory.private_data.get(this).returnValue;
            if (debug) print('BeforeUnloadEvent.returnValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('returnValue', 1, function (value) {
            if (debug) print('BeforeUnloadEvent.returnValue.set', value)
            mm.memory.private_data.get(this).returnValue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BeforeUnloadEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BeforeInstallPromptEvent = newFunc('BeforeInstallPromptEvent', 1, function () {
    print('BeforeInstallPromptEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BeforeInstallPromptEvent.prototype, {
    platforms: {

        get: newFunc('platforms', 10, function () {
            let res = mm.memory.private_data.get(this).platforms;
            if (debug) print('BeforeInstallPromptEvent.platforms.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    userChoice: {

        get: newFunc('userChoice', 10, function () {
            let res = mm.memory.private_data.get(this).userChoice;
            if (debug) print('BeforeInstallPromptEvent.userChoice.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    prompt: {

        value: newFunc('prompt', 10, function () {
            if (debug) print('BeforeInstallPromptEvent.prompt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BeforeInstallPromptEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AudioSinkInfo = newFunc('AudioSinkInfo', 1, function () {
    print('AudioSinkInfo.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioSinkInfo.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('AudioSinkInfo.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AudioSinkInfo.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AudioProcessingEvent = newFunc('AudioProcessingEvent', 1, function () {
    print('AudioProcessingEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioProcessingEvent.prototype, {
    playbackTime: {

        get: newFunc('playbackTime', 10, function () {
            let res = mm.memory.private_data.get(this).playbackTime;
            if (debug) print('AudioProcessingEvent.playbackTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    inputBuffer: {

        get: newFunc('inputBuffer', 10, function () {
            let res = mm.memory.private_data.get(this).inputBuffer;
            if (debug) print('AudioProcessingEvent.inputBuffer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    outputBuffer: {

        get: newFunc('outputBuffer', 10, function () {
            let res = mm.memory.private_data.get(this).outputBuffer;
            if (debug) print('AudioProcessingEvent.outputBuffer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AudioProcessingEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AudioParamMap = newFunc('AudioParamMap', 1, function () {
    print('AudioParamMap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioParamMap.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('AudioParamMap.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('AudioParamMap.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('AudioParamMap.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('AudioParamMap.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('AudioParamMap.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('AudioParamMap.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('AudioParamMap.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AudioParamMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AudioListener = newFunc('AudioListener', 1, function () {
    print('AudioListener.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioListener.prototype, {
    positionX: {

        get: newFunc('positionX', 10, function () {
            let res = mm.memory.private_data.get(this).positionX;
            if (debug) print('AudioListener.positionX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    positionY: {

        get: newFunc('positionY', 10, function () {
            let res = mm.memory.private_data.get(this).positionY;
            if (debug) print('AudioListener.positionY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    positionZ: {

        get: newFunc('positionZ', 10, function () {
            let res = mm.memory.private_data.get(this).positionZ;
            if (debug) print('AudioListener.positionZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    forwardX: {

        get: newFunc('forwardX', 10, function () {
            let res = mm.memory.private_data.get(this).forwardX;
            if (debug) print('AudioListener.forwardX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    forwardY: {

        get: newFunc('forwardY', 10, function () {
            let res = mm.memory.private_data.get(this).forwardY;
            if (debug) print('AudioListener.forwardY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    forwardZ: {

        get: newFunc('forwardZ', 10, function () {
            let res = mm.memory.private_data.get(this).forwardZ;
            if (debug) print('AudioListener.forwardZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    upX: {

        get: newFunc('upX', 10, function () {
            let res = mm.memory.private_data.get(this).upX;
            if (debug) print('AudioListener.upX.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    upY: {

        get: newFunc('upY', 10, function () {
            let res = mm.memory.private_data.get(this).upY;
            if (debug) print('AudioListener.upY.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    upZ: {

        get: newFunc('upZ', 10, function () {
            let res = mm.memory.private_data.get(this).upZ;
            if (debug) print('AudioListener.upZ.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    setOrientation: {

        value: newFunc('setOrientation', 10, function () {
            if (debug) print('AudioListener.setOrientation.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setPosition: {

        value: newFunc('setPosition', 10, function () {
            if (debug) print('AudioListener.setPosition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AudioListener.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AudioContext = newFunc('AudioContext', 1, function () {
    print('AudioContext.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioContext.prototype, {
    baseLatency: {

        get: newFunc('baseLatency', 10, function () {
            let res = mm.memory.private_data.get(this).baseLatency;
            if (debug) print('AudioContext.baseLatency.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    outputLatency: {

        get: newFunc('outputLatency', 10, function () {
            let res = mm.memory.private_data.get(this).outputLatency;
            if (debug) print('AudioContext.outputLatency.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('AudioContext.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createMediaElementSource: {

        value: newFunc('createMediaElementSource', 10, function () {
            if (debug) print('AudioContext.createMediaElementSource.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createMediaStreamDestination: {

        value: newFunc('createMediaStreamDestination', 10, function () {
            if (debug) print('AudioContext.createMediaStreamDestination.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createMediaStreamSource: {

        value: newFunc('createMediaStreamSource', 10, function () {
            if (debug) print('AudioContext.createMediaStreamSource.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getOutputTimestamp: {

        value: newFunc('getOutputTimestamp', 10, function () {
            if (debug) print('AudioContext.getOutputTimestamp.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    resume: {

        value: newFunc('resume', 10, function () {
            if (debug) print('AudioContext.resume.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    suspend: {

        value: newFunc('suspend', 10, function () {
            if (debug) print('AudioContext.suspend.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('AudioContext.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('AudioContext.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AudioContext.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    sinkId: {

        get: newFunc('sinkId', 10, function () {
            let res = mm.memory.private_data.get(this).sinkId;
            if (debug) print('AudioContext.sinkId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onsinkchange: {

        get: newFunc('onsinkchange', 10, function () {
            let res = mm.memory.private_data.get(this).onsinkchange;
            if (debug) print('AudioContext.onsinkchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsinkchange', 1, function (value) {
            if (debug) print('AudioContext.onsinkchange.set', value)
            mm.memory.private_data.get(this).onsinkchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    setSinkId: {

        value: newFunc('setSinkId', 10, function () {
            if (debug) print('AudioContext.setSinkId.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});


AnimationPlaybackEvent = newFunc('AnimationPlaybackEvent', 1, function () {
    print('AnimationPlaybackEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AnimationPlaybackEvent.prototype, {
    currentTime: {

        get: newFunc('currentTime', 10, function () {
            let res = mm.memory.private_data.get(this).currentTime;
            if (debug) print('AnimationPlaybackEvent.currentTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timelineTime: {

        get: newFunc('timelineTime', 10, function () {
            let res = mm.memory.private_data.get(this).timelineTime;
            if (debug) print('AnimationPlaybackEvent.timelineTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AnimationPlaybackEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AnimationEvent = newFunc('AnimationEvent', 1, function () {
    print('AnimationEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AnimationEvent.prototype, {
    animationName: {

        get: newFunc('animationName', 10, function () {
            let res = mm.memory.private_data.get(this).animationName;
            if (debug) print('AnimationEvent.animationName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    elapsedTime: {

        get: newFunc('elapsedTime', 10, function () {
            let res = mm.memory.private_data.get(this).elapsedTime;
            if (debug) print('AnimationEvent.elapsedTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pseudoElement: {

        get: newFunc('pseudoElement', 10, function () {
            let res = mm.memory.private_data.get(this).pseudoElement;
            if (debug) print('AnimationEvent.pseudoElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AnimationEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AnimationEffect = newFunc('AnimationEffect', 1, function () {
    print('AnimationEffect.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AnimationEffect.prototype, {
    getComputedTiming: {

        value: newFunc('getComputedTiming', 10, function () {
            if (debug) print('AnimationEffect.getComputedTiming.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTiming: {

        value: newFunc('getTiming', 10, function () {
            if (debug) print('AnimationEffect.getTiming.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updateTiming: {

        value: newFunc('updateTiming', 10, function () {
            if (debug) print('AnimationEffect.updateTiming.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AnimationEffect.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Animation = newFunc('Animation', 1, function () {
    print('Animation.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Animation.prototype, {
    effect: {

        get: newFunc('effect', 10, function () {
            let res = mm.memory.private_data.get(this).effect;
            if (debug) print('Animation.effect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('effect', 1, function (value) {
            if (debug) print('Animation.effect.set', value)
            mm.memory.private_data.get(this).effect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    timeline: {

        get: newFunc('timeline', 10, function () {
            let res = mm.memory.private_data.get(this).timeline;
            if (debug) print('Animation.timeline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('timeline', 1, function (value) {
            if (debug) print('Animation.timeline.set', value)
            mm.memory.private_data.get(this).timeline = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    startTime: {

        get: newFunc('startTime', 10, function () {
            let res = mm.memory.private_data.get(this).startTime;
            if (debug) print('Animation.startTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('startTime', 1, function (value) {
            if (debug) print('Animation.startTime.set', value)
            mm.memory.private_data.get(this).startTime = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    currentTime: {

        get: newFunc('currentTime', 10, function () {
            let res = mm.memory.private_data.get(this).currentTime;
            if (debug) print('Animation.currentTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('currentTime', 1, function (value) {
            if (debug) print('Animation.currentTime.set', value)
            mm.memory.private_data.get(this).currentTime = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    playbackRate: {

        get: newFunc('playbackRate', 10, function () {
            let res = mm.memory.private_data.get(this).playbackRate;
            if (debug) print('Animation.playbackRate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('playbackRate', 1, function (value) {
            if (debug) print('Animation.playbackRate.set', value)
            mm.memory.private_data.get(this).playbackRate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    playState: {

        get: newFunc('playState', 10, function () {
            let res = mm.memory.private_data.get(this).playState;
            if (debug) print('Animation.playState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    replaceState: {

        get: newFunc('replaceState', 10, function () {
            let res = mm.memory.private_data.get(this).replaceState;
            if (debug) print('Animation.replaceState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pending: {

        get: newFunc('pending', 10, function () {
            let res = mm.memory.private_data.get(this).pending;
            if (debug) print('Animation.pending.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('Animation.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('id', 1, function (value) {
            if (debug) print('Animation.id.set', value)
            mm.memory.private_data.get(this).id = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onfinish: {

        get: newFunc('onfinish', 10, function () {
            let res = mm.memory.private_data.get(this).onfinish;
            if (debug) print('Animation.onfinish.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfinish', 1, function (value) {
            if (debug) print('Animation.onfinish.set', value)
            mm.memory.private_data.get(this).onfinish = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncancel: {

        get: newFunc('oncancel', 10, function () {
            let res = mm.memory.private_data.get(this).oncancel;
            if (debug) print('Animation.oncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncancel', 1, function (value) {
            if (debug) print('Animation.oncancel.set', value)
            mm.memory.private_data.get(this).oncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onremove: {

        get: newFunc('onremove', 10, function () {
            let res = mm.memory.private_data.get(this).onremove;
            if (debug) print('Animation.onremove.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onremove', 1, function (value) {
            if (debug) print('Animation.onremove.set', value)
            mm.memory.private_data.get(this).onremove = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    finished: {

        get: newFunc('finished', 10, function () {
            let res = mm.memory.private_data.get(this).finished;
            if (debug) print('Animation.finished.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ready: {

        get: newFunc('ready', 10, function () {
            let res = mm.memory.private_data.get(this).ready;
            if (debug) print('Animation.ready.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cancel: {

        value: newFunc('cancel', 10, function () {
            if (debug) print('Animation.cancel.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    commitStyles: {

        value: newFunc('commitStyles', 10, function () {
            if (debug) print('Animation.commitStyles.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    finish: {

        value: newFunc('finish', 10, function () {
            if (debug) print('Animation.finish.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pause: {

        value: newFunc('pause', 10, function () {
            if (debug) print('Animation.pause.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    persist: {

        value: newFunc('persist', 10, function () {
            if (debug) print('Animation.persist.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    play: {

        value: newFunc('play', 10, function () {
            if (debug) print('Animation.play.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reverse: {

        value: newFunc('reverse', 10, function () {
            if (debug) print('Animation.reverse.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    updatePlaybackRate: {

        value: newFunc('updatePlaybackRate', 10, function () {
            if (debug) print('Animation.updatePlaybackRate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rangeStart: {

        get: newFunc('rangeStart', 10, function () {
            let res = mm.memory.private_data.get(this).rangeStart;
            if (debug) print('Animation.rangeStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rangeStart', 1, function (value) {
            if (debug) print('Animation.rangeStart.set', value)
            mm.memory.private_data.get(this).rangeStart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rangeEnd: {

        get: newFunc('rangeEnd', 10, function () {
            let res = mm.memory.private_data.get(this).rangeEnd;
            if (debug) print('Animation.rangeEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rangeEnd', 1, function (value) {
            if (debug) print('Animation.rangeEnd.set', value)
            mm.memory.private_data.get(this).rangeEnd = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Animation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
AnalyserNode = newFunc('AnalyserNode', 1, function (){print('AnalyserNode.call');mm.memory.private_data.set(this, {})});



; delete AnalyserNode.prototype.constructor;
;
Object.defineProperties(AnalyserNode.prototype, {
    [Symbol.toStringTag]:{
        value:'AnalyserNode'
    },

    'fftSize': {

        get: newFunc('fftSize', 10, function (){


            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['fftSize'];
            if (debug)print('AnalyserNode.fftSize.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('fftSize', 1, function (value){
            if (debug)print('AnalyserNode.fftSize.set', value)
            mm.memory.private_data.get(this)['fftSize'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'frequencyBinCount': {

        get: newFunc('frequencyBinCount', 10, function (){


            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['frequencyBinCount'];
            if (debug)print('AnalyserNode.frequencyBinCount.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    'minDecibels': {

        get: newFunc('minDecibels', 10, function (){


            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['minDecibels'];
            if (debug)print('AnalyserNode.minDecibels.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('minDecibels', 1, function (value){
            if (debug)print('AnalyserNode.minDecibels.set', value)
            mm.memory.private_data.get(this)['minDecibels'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'maxDecibels': {

        get: newFunc('maxDecibels', 10, function (){


            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['maxDecibels'];
            if (debug)print('AnalyserNode.maxDecibels.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('maxDecibels', 1, function (value){
            if (debug)print('AnalyserNode.maxDecibels.set', value)
            mm.memory.private_data.get(this)['maxDecibels'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'smoothingTimeConstant': {

        get: newFunc('smoothingTimeConstant', 10, function (){


            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let res =  mm.memory.private_data.get(this)['smoothingTimeConstant'];
            if (debug)print('AnalyserNode.smoothingTimeConstant.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('smoothingTimeConstant', 1, function (value){
            if (debug)print('AnalyserNode.smoothingTimeConstant.set', value)
            mm.memory.private_data.get(this)['smoothingTimeConstant'] = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    'getByteFrequencyData': {

        value: newFunc('getByteFrequencyData', 10, function () {

            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('AnalyserNode.getByteFrequencyData.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getByteTimeDomainData': {

        value: newFunc('getByteTimeDomainData', 10, function () {

            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('AnalyserNode.getByteTimeDomainData.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getFloatFrequencyData': {

        value: newFunc('getFloatFrequencyData', 10, function () {

            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('AnalyserNode.getFloatFrequencyData.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'getFloatTimeDomainData': {

        value: newFunc('getFloatTimeDomainData', 10, function () {

            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('AnalyserNode.getFloatTimeDomainData.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!AnalyserNode.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug)print('AnalyserNode.constructor.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
})

AbstractRange = newFunc('AbstractRange', 1, function () {
    print('AbstractRange.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AbstractRange.prototype, {
    startContainer: {

        get: newFunc('startContainer', 10, function () {
            let res = mm.memory.private_data.get(this).startContainer;
            if (debug) print('AbstractRange.startContainer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    startOffset: {

        get: newFunc('startOffset', 10, function () {
            let res = mm.memory.private_data.get(this).startOffset;
            if (debug) print('AbstractRange.startOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    endContainer: {

        get: newFunc('endContainer', 10, function () {
            let res = mm.memory.private_data.get(this).endContainer;
            if (debug) print('AbstractRange.endContainer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    endOffset: {

        get: newFunc('endOffset', 10, function () {
            let res = mm.memory.private_data.get(this).endOffset;
            if (debug) print('AbstractRange.endOffset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    collapsed: {

        get: newFunc('collapsed', 10, function () {
            let res = mm.memory.private_data.get(this).collapsed;
            if (debug) print('AbstractRange.collapsed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AbstractRange.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AbortSignal = newFunc('AbortSignal', 1, function () {
    print('AbortSignal.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AbortSignal.prototype, {
    aborted: {

        get: newFunc('aborted', 10, function () {
            let res = mm.memory.private_data.get(this).aborted;
            if (debug) print('AbortSignal.aborted.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('AbortSignal.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onabort: {

        get: newFunc('onabort', 10, function () {
            let res = mm.memory.private_data.get(this).onabort;
            if (debug) print('AbortSignal.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function (value) {
            if (debug) print('AbortSignal.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    throwIfAborted: {

        value: newFunc('throwIfAborted', 10, function () {
            if (debug) print('AbortSignal.throwIfAborted.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AbortSignal.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


customElements = new CustomElementRegistry();


status = ''


closed = false


opener = null


scrollX = 0


scrollY = 0


event = undefined


clientInformation = navigator


offscreenBuffering = true


onsearch = null


onappinstalled = null


onabort = null


oncancel = null


oncanplay = null


oncanplaythrough = null


onchange = null


onclick = null


onclose = null


oncontentvisibilityautostatechange = null


oncontextlost = null


oncontextmenu = null


oncontextrestored = null


oncuechange = null


ondblclick = null


ondrag = null


ondragend = null


ondragenter = null


ondragleave = null


ondragover = null


ondragstart = null


ondrop = null


ondurationchange = null


onemptied = null


onended = null


onerror = null


onfocus = null


onformdata = null


oninput = null


oninvalid = null


onkeydown = null


onkeypress = null


onkeyup = null


onload = null


onloadeddata = null


onloadedmetadata = null


onloadstart = null


onmousedown = null


onmouseenter = null


onmouseleave = null


onmousemove = null


onmouseout = null


onmouseover = null


onmouseup = null


onmousewheel = null


onpause = null


onplay = null


onplaying = null


onprogress = null


onratechange = null


onreset = null


onresize = null


onscroll = null


onsecuritypolicyviolation = null


onseeked = null


onseeking = null


onselect = null


onslotchange = null


onstalled = null


onsubmit = null


onsuspend = null


ontimeupdate = null


ontoggle = null


onvolumechange = null


onwaiting = null


onwebkitanimationend = null


onwebkitanimationiteration = null


onwebkitanimationstart = null


onwebkittransitionend = null


onwheel = null


onauxclick = null


ongotpointercapture = null


onlostpointercapture = null


onpointerdown = null


onpointermove = null


onpointerrawupdate = null


onpointerup = null


onpointercancel = null


onpointerover = null


onpointerout = null


onpointerenter = null


onpointerleave = null


onselectstart = null


onselectionchange = null


onanimationend = null


onanimationiteration = null


onanimationstart = null


ontransitionrun = null


ontransitionstart = null


ontransitionend = null


ontransitioncancel = null


onafterprint = null


onhashchange = null


onlanguagechange = null


onmessage = null


onmessageerror = null


onoffline = null


ononline = null


onpagehide = null


onpageshow = null


onpopstate = null


onrejectionhandled = null


onstorage = null


crossOriginIsolated = false


scheduler = new Scheduler()


blur = newFunc('blur', 10, function () {
    print('window.blur.call');
});


cancelAnimationFrame = newFunc('cancelAnimationFrame', 10, function () {
    print('window.cancelAnimationFrame.call');
});


cancelIdleCallback = newFunc('cancelIdleCallback', 10, function () {
    print('window.cancelIdleCallback.call');
});


captureEvents = newFunc('captureEvents', 10, function () {
    print('window.captureEvents.call');
});


close = newFunc('close', 10, function () {
    print('window.close.call');
});


confirm = newFunc('confirm', 10, function () {
    print('window.confirm.call');
});


createImageBitmap = newFunc('createImageBitmap', 10, function () {
    print('window.createImageBitmap.call');
});


find = newFunc('find', 10, function () {
    print('window.find.call');
});


focus = newFunc('focus', 10, function () {
    print('window.focus.call');
});


getSelection = newFunc('getSelection', 10, function () {
    print('window.getSelection.call');
});


moveBy = newFunc('moveBy', 10, function () {
    print('window.moveBy.call');
});


moveTo = newFunc('moveTo', 10, function () {
    print('window.moveTo.call');
});


prompt = newFunc('prompt', 10, function () {
    print('window.prompt.call');
});


queueMicrotask = newFunc('queueMicrotask', 10, function () {
    print('window.queueMicrotask.call');
});


releaseEvents = newFunc('releaseEvents', 10, function () {
    print('window.releaseEvents.call');
});


reportError = newFunc('reportError', 10, function () {
    print('window.reportError.call');
});


// ;requestIdleCallback = newFunc('requestIdleCallback', 10, function (){print('window.requestIdleCallback.call');});;;

resizeBy = newFunc('resizeBy', 10, function () {
    print('window.resizeBy.call');
});


resizeTo = newFunc('resizeTo', 10, function () {
    print('window.resizeTo.call');
});


scroll = newFunc('scroll', 10, function () {
    print('window.scroll.call');
});


scrollBy = newFunc('scrollBy', 10, function () {
    print('window.scrollBy.call');
});


scrollTo = newFunc('scrollTo', 10, function () {
    print('window.scrollTo.call');
});


stop = newFunc('stop', 10, function () {
    print('window.stop.call');
});


webkitCancelAnimationFrame = newFunc('webkitCancelAnimationFrame', 10, function () {
    print('window.webkitCancelAnimationFrame.call');
});


webkitRequestAnimationFrame = newFunc('webkitRequestAnimationFrame', 10, function () {
    print('window.webkitRequestAnimationFrame.call');
});


// Iterator = newFunc('Iterator', 1, function () {
//     print('Iterator.call');
//     mm.memory.private_data.set(this, {})
// })
//
//
// Object.defineProperties(Iterator.prototype, {
//     constructor: {
//
//         get: newFunc('constructor', 10, function () {
//             let res = mm.memory.private_data.get(this).constructor;
//             if (debug) print('Iterator.constructor.get', res)
//
//             return res
//         }, {get: true}), enumerable: false, configurable: true,
//
//
//         set: newFunc('constructor', 1, function (value) {
//             if (debug) print('Iterator.constructor.set', value)
//             mm.memory.private_data.get(this).constructor = value
//
//         }, {set: true}), enumerable: false, configurable: true,
//
//
//     },
//     reduce: {
//
//         value: newFunc('reduce', 10, function () {
//             if (debug) print('Iterator.reduce.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     toArray: {
//
//         value: newFunc('toArray', 10, function () {
//             if (debug) print('Iterator.toArray.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     forEach: {
//
//         value: newFunc('forEach', 10, function () {
//             if (debug) print('Iterator.forEach.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     some: {
//
//         value: newFunc('some', 10, function () {
//             if (debug) print('Iterator.some.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     every: {
//
//         value: newFunc('every', 10, function () {
//             if (debug) print('Iterator.every.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     find: {
//
//         value: newFunc('find', 10, function () {
//             if (debug) print('Iterator.find.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     map: {
//
//         value: newFunc('map', 10, function () {
//             if (debug) print('Iterator.map.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     filter: {
//
//         value: newFunc('filter', 10, function () {
//             if (debug) print('Iterator.filter.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     take: {
//
//         value: newFunc('take', 10, function () {
//             if (debug) print('Iterator.take.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     drop: {
//
//         value: newFunc('drop', 10, function () {
//             if (debug) print('Iterator.drop.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
//     flatMap: {
//
//         value: newFunc('flatMap', 10, function () {
//             if (debug) print('Iterator.flatMap.call', arguments)
//
//         }), writable: true, enumerable: false, configurable: true,
//
//
//     },
// });


ondevicemotion = null


ondeviceorientation = null


ondeviceorientationabsolute = null


AbsoluteOrientationSensor = newFunc('AbsoluteOrientationSensor', 1, function () {
    print('AbsoluteOrientationSensor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AbsoluteOrientationSensor.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AbsoluteOrientationSensor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Accelerometer = newFunc('Accelerometer', 1, function () {
    print('Accelerometer.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Accelerometer.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('Accelerometer.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('Accelerometer.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('Accelerometer.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Accelerometer.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AudioDecoder = newFunc('AudioDecoder', 1, function () {
    print('AudioDecoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioDecoder.prototype, {
    decodeQueueSize: {

        get: newFunc('decodeQueueSize', 10, function () {
            let res = mm.memory.private_data.get(this).decodeQueueSize;
            if (debug) print('AudioDecoder.decodeQueueSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ondequeue: {

        get: newFunc('ondequeue', 10, function () {
            let res = mm.memory.private_data.get(this).ondequeue;
            if (debug) print('AudioDecoder.ondequeue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondequeue', 1, function (value) {
            if (debug) print('AudioDecoder.ondequeue.set', value)
            mm.memory.private_data.get(this).ondequeue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('AudioDecoder.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('AudioDecoder.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    configure: {

        value: newFunc('configure', 10, function () {
            if (debug) print('AudioDecoder.configure.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    decode: {

        value: newFunc('decode', 10, function () {
            if (debug) print('AudioDecoder.decode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    flush: {

        value: newFunc('flush', 10, function () {
            if (debug) print('AudioDecoder.flush.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('AudioDecoder.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AudioDecoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AudioEncoder = newFunc('AudioEncoder', 1, function () {
    print('AudioEncoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AudioEncoder.prototype, {
    encodeQueueSize: {

        get: newFunc('encodeQueueSize', 10, function () {
            let res = mm.memory.private_data.get(this).encodeQueueSize;
            if (debug) print('AudioEncoder.encodeQueueSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ondequeue: {

        get: newFunc('ondequeue', 10, function () {
            let res = mm.memory.private_data.get(this).ondequeue;
            if (debug) print('AudioEncoder.ondequeue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondequeue', 1, function (value) {
            if (debug) print('AudioEncoder.ondequeue.set', value)
            mm.memory.private_data.get(this).ondequeue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('AudioEncoder.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('AudioEncoder.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    configure: {

        value: newFunc('configure', 10, function () {
            if (debug) print('AudioEncoder.configure.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    encode: {

        value: newFunc('encode', 10, function () {
            if (debug) print('AudioEncoder.encode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    flush: {

        value: newFunc('flush', 10, function () {
            if (debug) print('AudioEncoder.flush.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('AudioEncoder.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AudioEncoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BatteryManager = newFunc('BatteryManager', 1, function () {
    print('BatteryManager.call');
    mm.memory.private_data.set(this, {

        charging: true,
        chargingTime: 0,
        dischargingTime: Infinity,
        level: 1,
        onchargingchange: null,
        onchargingtimechange: null,
        ondischargingtimechange: null,
        onlevelchange: null,
    })
})


Object.defineProperties(BatteryManager.prototype, {
    [Symbol.toStringTag]:{value:'BatteryManager'},
    charging: {

        get: newFunc('charging', 10, function () {
            let res = mm.memory.private_data.get(this).charging;
            if (debug) print('BatteryManager.charging.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    chargingTime: {

        get: newFunc('chargingTime', 10, function () {
            let res = mm.memory.private_data.get(this).chargingTime;
            if (debug) print('BatteryManager.chargingTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dischargingTime: {

        get: newFunc('dischargingTime', 10, function () {
            let res = mm.memory.private_data.get(this).dischargingTime;
            if (debug) print('BatteryManager.dischargingTime.get', res)
            // debugger;

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    level: {

        get: newFunc('level', 10, function () {
            let res = mm.memory.private_data.get(this).level;
            if (debug) print('BatteryManager.level.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onchargingchange: {

        get: newFunc('onchargingchange', 10, function () {
            let res = mm.memory.private_data.get(this).onchargingchange;
            if (debug) print('BatteryManager.onchargingchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchargingchange', 1, function (value) {
            if (debug) print('BatteryManager.onchargingchange.set', value)
            mm.memory.private_data.get(this).onchargingchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onchargingtimechange: {

        get: newFunc('onchargingtimechange', 10, function () {
            let res = mm.memory.private_data.get(this).onchargingtimechange;
            if (debug) print('BatteryManager.onchargingtimechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchargingtimechange', 1, function (value) {
            if (debug) print('BatteryManager.onchargingtimechange.set', value)
            mm.memory.private_data.get(this).onchargingtimechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondischargingtimechange: {

        get: newFunc('ondischargingtimechange', 10, function () {
            let res = mm.memory.private_data.get(this).ondischargingtimechange;
            if (debug) print('BatteryManager.ondischargingtimechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondischargingtimechange', 1, function (value) {
            if (debug) print('BatteryManager.ondischargingtimechange.set', value)
            mm.memory.private_data.get(this).ondischargingtimechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onlevelchange: {

        get: newFunc('onlevelchange', 10, function () {
            let res = mm.memory.private_data.get(this).onlevelchange;
            if (debug) print('BatteryManager.onlevelchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onlevelchange', 1, function (value) {
            if (debug) print('BatteryManager.onlevelchange.set', value)
            mm.memory.private_data.get(this).onlevelchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BatteryManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Cache = newFunc('Cache', 1, function () {
    print('Cache.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Cache.prototype, {
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('Cache.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    addAll: {

        value: newFunc('addAll', 10, function () {
            if (debug) print('Cache.addAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('Cache.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('Cache.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    match: {

        value: newFunc('match', 10, function () {
            if (debug) print('Cache.match.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    matchAll: {

        value: newFunc('matchAll', 10, function () {
            if (debug) print('Cache.matchAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    put: {

        value: newFunc('put', 10, function () {
            if (debug) print('Cache.put.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Cache.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CacheStorage = newFunc('CacheStorage', 1, function () {
    print('CacheStorage.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CacheStorage.prototype, {
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('CacheStorage.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('CacheStorage.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('CacheStorage.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    match: {

        value: newFunc('match', 10, function () {
            if (debug) print('CacheStorage.match.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    open: {

        value: newFunc('open', 10, function () {
            if (debug) print('CacheStorage.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CacheStorage.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ClipboardItem = newFunc('ClipboardItem', 1, function () {
    print('ClipboardItem.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ClipboardItem.prototype, {
    types: {

        get: newFunc('types', 10, function () {
            let res = mm.memory.private_data.get(this).types;
            if (debug) print('ClipboardItem.types.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getType: {

        value: newFunc('getType', 10, function () {
            if (debug) print('ClipboardItem.getType.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ClipboardItem.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


Credential = newFunc('Credential', 1, function () {
    print('Credential.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Credential.prototype, {
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('Credential.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('Credential.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Credential.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CryptoKey = newFunc('CryptoKey', 1, function () {
    print('CryptoKey.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CryptoKey.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('CryptoKey.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    extractable: {

        get: newFunc('extractable', 10, function () {
            let res = mm.memory.private_data.get(this).extractable;
            if (debug) print('CryptoKey.extractable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    algorithm: {

        get: newFunc('algorithm', 10, function () {
            let res = mm.memory.private_data.get(this).algorithm;
            if (debug) print('CryptoKey.algorithm.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    usages: {

        get: newFunc('usages', 10, function () {
            let res = mm.memory.private_data.get(this).usages;
            if (debug) print('CryptoKey.usages.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CryptoKey.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DeviceMotionEvent = newFunc('DeviceMotionEvent', 1, function () {
    print('DeviceMotionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DeviceMotionEvent.prototype, {
    acceleration: {

        get: newFunc('acceleration', 10, function () {
            let res = mm.memory.private_data.get(this).acceleration;
            if (debug) print('DeviceMotionEvent.acceleration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    accelerationIncludingGravity: {

        get: newFunc('accelerationIncludingGravity', 10, function () {
            let res = mm.memory.private_data.get(this).accelerationIncludingGravity;
            if (debug) print('DeviceMotionEvent.accelerationIncludingGravity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rotationRate: {

        get: newFunc('rotationRate', 10, function () {
            let res = mm.memory.private_data.get(this).rotationRate;
            if (debug) print('DeviceMotionEvent.rotationRate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    interval: {

        get: newFunc('interval', 10, function () {
            let res = mm.memory.private_data.get(this).interval;
            if (debug) print('DeviceMotionEvent.interval.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DeviceMotionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DeviceMotionEventAcceleration = newFunc('DeviceMotionEventAcceleration', 1, function () {
    print('DeviceMotionEventAcceleration.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DeviceMotionEventAcceleration.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('DeviceMotionEventAcceleration.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('DeviceMotionEventAcceleration.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('DeviceMotionEventAcceleration.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DeviceMotionEventAcceleration.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DeviceMotionEventRotationRate = newFunc('DeviceMotionEventRotationRate', 1, function () {
    print('DeviceMotionEventRotationRate.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DeviceMotionEventRotationRate.prototype, {
    alpha: {

        get: newFunc('alpha', 10, function () {
            let res = mm.memory.private_data.get(this).alpha;
            if (debug) print('DeviceMotionEventRotationRate.alpha.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    beta: {

        get: newFunc('beta', 10, function () {
            let res = mm.memory.private_data.get(this).beta;
            if (debug) print('DeviceMotionEventRotationRate.beta.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    gamma: {

        get: newFunc('gamma', 10, function () {
            let res = mm.memory.private_data.get(this).gamma;
            if (debug) print('DeviceMotionEventRotationRate.gamma.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DeviceMotionEventRotationRate.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DeviceOrientationEvent = newFunc('DeviceOrientationEvent', 1, function () {
    print('DeviceOrientationEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DeviceOrientationEvent.prototype, {
    alpha: {

        get: newFunc('alpha', 10, function () {
            let res = mm.memory.private_data.get(this).alpha;
            if (debug) print('DeviceOrientationEvent.alpha.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    beta: {

        get: newFunc('beta', 10, function () {
            let res = mm.memory.private_data.get(this).beta;
            if (debug) print('DeviceOrientationEvent.beta.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    gamma: {

        get: newFunc('gamma', 10, function () {
            let res = mm.memory.private_data.get(this).gamma;
            if (debug) print('DeviceOrientationEvent.gamma.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    absolute: {

        get: newFunc('absolute', 10, function () {
            let res = mm.memory.private_data.get(this).absolute;
            if (debug) print('DeviceOrientationEvent.absolute.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DeviceOrientationEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FederatedCredential = newFunc('FederatedCredential', 1, function () {
    print('FederatedCredential.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FederatedCredential.prototype, {
    provider: {

        get: newFunc('provider', 10, function () {
            let res = mm.memory.private_data.get(this).provider;
            if (debug) print('FederatedCredential.provider.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    protocol: {

        get: newFunc('protocol', 10, function () {
            let res = mm.memory.private_data.get(this).protocol;
            if (debug) print('FederatedCredential.protocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('FederatedCredential.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    iconURL: {

        get: newFunc('iconURL', 10, function () {
            let res = mm.memory.private_data.get(this).iconURL;
            if (debug) print('FederatedCredential.iconURL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FederatedCredential.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


Object.defineProperties(GravitySensor.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('GravitySensor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Gyroscope = newFunc('Gyroscope', 1, function () {
    print('Gyroscope.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Gyroscope.prototype, {
    x: {

        get: newFunc('x', 10, function () {
            let res = mm.memory.private_data.get(this).x;
            if (debug) print('Gyroscope.x.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    y: {

        get: newFunc('y', 10, function () {
            let res = mm.memory.private_data.get(this).y;
            if (debug) print('Gyroscope.y.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    z: {

        get: newFunc('z', 10, function () {
            let res = mm.memory.private_data.get(this).z;
            if (debug) print('Gyroscope.z.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Gyroscope.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IdleDetector = newFunc('IdleDetector', 1, function () {
    print('IdleDetector.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IdleDetector.prototype, {
    userState: {

        get: newFunc('userState', 10, function () {
            let res = mm.memory.private_data.get(this).userState;
            if (debug) print('IdleDetector.userState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    screenState: {

        get: newFunc('screenState', 10, function () {
            let res = mm.memory.private_data.get(this).screenState;
            if (debug) print('IdleDetector.screenState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onchange: {

        get: newFunc('onchange', 10, function () {
            let res = mm.memory.private_data.get(this).onchange;
            if (debug) print('IdleDetector.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function (value) {
            if (debug) print('IdleDetector.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    start: {

        value: newFunc('start', 10, function () {
            if (debug) print('IdleDetector.start.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IdleDetector.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ImageDecoder = newFunc('ImageDecoder', 1, function () {
    print('ImageDecoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ImageDecoder.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('ImageDecoder.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    complete: {

        get: newFunc('complete', 10, function () {
            let res = mm.memory.private_data.get(this).complete;
            if (debug) print('ImageDecoder.complete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    completed: {

        get: newFunc('completed', 10, function () {
            let res = mm.memory.private_data.get(this).completed;
            if (debug) print('ImageDecoder.completed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    tracks: {

        get: newFunc('tracks', 10, function () {
            let res = mm.memory.private_data.get(this).tracks;
            if (debug) print('ImageDecoder.tracks.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('ImageDecoder.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    decode: {

        value: newFunc('decode', 10, function () {
            if (debug) print('ImageDecoder.decode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('ImageDecoder.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ImageDecoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ImageTrack = newFunc('ImageTrack', 1, function () {
    print('ImageTrack.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ImageTrack.prototype, {
    frameCount: {

        get: newFunc('frameCount', 10, function () {
            let res = mm.memory.private_data.get(this).frameCount;
            if (debug) print('ImageTrack.frameCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    animated: {

        get: newFunc('animated', 10, function () {
            let res = mm.memory.private_data.get(this).animated;
            if (debug) print('ImageTrack.animated.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    repetitionCount: {

        get: newFunc('repetitionCount', 10, function () {
            let res = mm.memory.private_data.get(this).repetitionCount;
            if (debug) print('ImageTrack.repetitionCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    selected: {

        get: newFunc('selected', 10, function () {
            let res = mm.memory.private_data.get(this).selected;
            if (debug) print('ImageTrack.selected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selected', 1, function (value) {
            if (debug) print('ImageTrack.selected.set', value)
            mm.memory.private_data.get(this).selected = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ImageTrack.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ImageTrackList = newFunc('ImageTrackList', 1, function () {
    print('ImageTrackList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ImageTrackList.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('ImageTrackList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    selectedIndex: {

        get: newFunc('selectedIndex', 10, function () {
            let res = mm.memory.private_data.get(this).selectedIndex;
            if (debug) print('ImageTrackList.selectedIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    selectedTrack: {

        get: newFunc('selectedTrack', 10, function () {
            let res = mm.memory.private_data.get(this).selectedTrack;
            if (debug) print('ImageTrackList.selectedTrack.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ready: {

        get: newFunc('ready', 10, function () {
            let res = mm.memory.private_data.get(this).ready;
            if (debug) print('ImageTrackList.ready.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ImageTrackList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

KeyboardLayoutMap = newFunc('KeyboardLayoutMap', 1, function () {
    print('KeyboardLayoutMap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(KeyboardLayoutMap.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('KeyboardLayoutMap.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('KeyboardLayoutMap.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('KeyboardLayoutMap.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('KeyboardLayoutMap.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('KeyboardLayoutMap.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('KeyboardLayoutMap.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('KeyboardLayoutMap.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('KeyboardLayoutMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

LinearAccelerationSensor = newFunc('LinearAccelerationSensor', 1, function () {
    print('LinearAccelerationSensor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(LinearAccelerationSensor.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('LinearAccelerationSensor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Lock = newFunc('Lock', 1, function () {
    print('Lock.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Lock.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('Lock.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    mode: {

        get: newFunc('mode', 10, function () {
            let res = mm.memory.private_data.get(this).mode;
            if (debug) print('Lock.mode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Lock.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIAccess = newFunc('MIDIAccess', 1, function () {
    print('MIDIAccess.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIAccess.prototype, {
    inputs: {

        get: newFunc('inputs', 10, function () {
            let res = mm.memory.private_data.get(this).inputs;
            if (debug) print('MIDIAccess.inputs.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    outputs: {

        get: newFunc('outputs', 10, function () {
            let res = mm.memory.private_data.get(this).outputs;
            if (debug) print('MIDIAccess.outputs.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sysexEnabled: {

        get: newFunc('sysexEnabled', 10, function () {
            let res = mm.memory.private_data.get(this).sysexEnabled;
            if (debug) print('MIDIAccess.sysexEnabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onstatechange: {

        get: newFunc('onstatechange', 10, function () {
            let res = mm.memory.private_data.get(this).onstatechange;
            if (debug) print('MIDIAccess.onstatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstatechange', 1, function (value) {
            if (debug) print('MIDIAccess.onstatechange.set', value)
            mm.memory.private_data.get(this).onstatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIAccess.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIConnectionEvent = newFunc('MIDIConnectionEvent', 1, function () {
    print('MIDIConnectionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIConnectionEvent.prototype, {
    port: {

        get: newFunc('port', 10, function () {
            let res = mm.memory.private_data.get(this).port;
            if (debug) print('MIDIConnectionEvent.port.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIConnectionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIInput = newFunc('MIDIInput', 1, function () {
    print('MIDIInput.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIInput.prototype, {
    onmidimessage: {

        get: newFunc('onmidimessage', 10, function () {
            let res = mm.memory.private_data.get(this).onmidimessage;
            if (debug) print('MIDIInput.onmidimessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmidimessage', 1, function (value) {
            if (debug) print('MIDIInput.onmidimessage.set', value)
            mm.memory.private_data.get(this).onmidimessage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIInput.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIInputMap = newFunc('MIDIInputMap', 1, function () {
    print('MIDIInputMap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIInputMap.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('MIDIInputMap.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('MIDIInputMap.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('MIDIInputMap.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('MIDIInputMap.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('MIDIInputMap.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('MIDIInputMap.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('MIDIInputMap.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIInputMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIMessageEvent = newFunc('MIDIMessageEvent', 1, function () {
    print('MIDIMessageEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIMessageEvent.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('MIDIMessageEvent.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIMessageEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIOutput = newFunc('MIDIOutput', 1, function () {
    print('MIDIOutput.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIOutput.prototype, {
    send: {

        value: newFunc('send', 10, function () {
            if (debug) print('MIDIOutput.send.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIOutput.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIOutputMap = newFunc('MIDIOutputMap', 1, function () {
    print('MIDIOutputMap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIOutputMap.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('MIDIOutputMap.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('MIDIOutputMap.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('MIDIOutputMap.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('MIDIOutputMap.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('MIDIOutputMap.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('MIDIOutputMap.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('MIDIOutputMap.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIOutputMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MIDIPort = newFunc('MIDIPort', 1, function () {
    print('MIDIPort.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MIDIPort.prototype, {
    connection: {

        get: newFunc('connection', 10, function () {
            let res = mm.memory.private_data.get(this).connection;
            if (debug) print('MIDIPort.connection.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('MIDIPort.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    manufacturer: {

        get: newFunc('manufacturer', 10, function () {
            let res = mm.memory.private_data.get(this).manufacturer;
            if (debug) print('MIDIPort.manufacturer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('MIDIPort.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('MIDIPort.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('MIDIPort.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    version: {

        get: newFunc('version', 10, function () {
            let res = mm.memory.private_data.get(this).version;
            if (debug) print('MIDIPort.version.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onstatechange: {

        get: newFunc('onstatechange', 10, function () {
            let res = mm.memory.private_data.get(this).onstatechange;
            if (debug) print('MIDIPort.onstatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstatechange', 1, function (value) {
            if (debug) print('MIDIPort.onstatechange.set', value)
            mm.memory.private_data.get(this).onstatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('MIDIPort.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    open: {

        value: newFunc('open', 10, function () {
            if (debug) print('MIDIPort.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MIDIPort.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MediaKeyMessageEvent = newFunc('MediaKeyMessageEvent', 1, function () {
    print('MediaKeyMessageEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MediaKeyMessageEvent.prototype, {
    messageType: {

        get: newFunc('messageType', 10, function () {
            let res = mm.memory.private_data.get(this).messageType;
            if (debug) print('MediaKeyMessageEvent.messageType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('MediaKeyMessageEvent.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MediaKeyMessageEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MediaKeySession = newFunc('MediaKeySession', 1, function () {
    print('MediaKeySession.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MediaKeySession.prototype, {
    sessionId: {

        get: newFunc('sessionId', 10, function () {
            let res = mm.memory.private_data.get(this).sessionId;
            if (debug) print('MediaKeySession.sessionId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    expiration: {

        get: newFunc('expiration', 10, function () {
            let res = mm.memory.private_data.get(this).expiration;
            if (debug) print('MediaKeySession.expiration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    closed: {

        get: newFunc('closed', 10, function () {
            let res = mm.memory.private_data.get(this).closed;
            if (debug) print('MediaKeySession.closed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    keyStatuses: {

        get: newFunc('keyStatuses', 10, function () {
            let res = mm.memory.private_data.get(this).keyStatuses;
            if (debug) print('MediaKeySession.keyStatuses.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onkeystatuseschange: {

        get: newFunc('onkeystatuseschange', 10, function () {
            let res = mm.memory.private_data.get(this).onkeystatuseschange;
            if (debug) print('MediaKeySession.onkeystatuseschange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeystatuseschange', 1, function (value) {
            if (debug) print('MediaKeySession.onkeystatuseschange.set', value)
            mm.memory.private_data.get(this).onkeystatuseschange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmessage: {

        get: newFunc('onmessage', 10, function () {
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('MediaKeySession.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function (value) {
            if (debug) print('MediaKeySession.onmessage.set', value)
            mm.memory.private_data.get(this).onmessage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('MediaKeySession.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    generateRequest: {

        value: newFunc('generateRequest', 10, function () {
            if (debug) print('MediaKeySession.generateRequest.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    load: {

        value: newFunc('load', 10, function () {
            if (debug) print('MediaKeySession.load.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    remove: {

        value: newFunc('remove', 10, function () {
            if (debug) print('MediaKeySession.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    update: {

        value: newFunc('update', 10, function () {
            if (debug) print('MediaKeySession.update.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MediaKeySession.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MediaKeyStatusMap = newFunc('MediaKeyStatusMap', 1, function () {
    print('MediaKeyStatusMap.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MediaKeyStatusMap.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('MediaKeyStatusMap.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('MediaKeyStatusMap.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('MediaKeyStatusMap.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('MediaKeyStatusMap.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('MediaKeyStatusMap.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('MediaKeyStatusMap.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('MediaKeyStatusMap.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MediaKeyStatusMap.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MediaKeySystemAccess = newFunc('MediaKeySystemAccess', 1, function () {
    print('MediaKeySystemAccess.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MediaKeySystemAccess.prototype, {
    keySystem: {

        get: newFunc('keySystem', 10, function () {
            let res = mm.memory.private_data.get(this).keySystem;
            if (debug) print('MediaKeySystemAccess.keySystem.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    createMediaKeys: {

        value: newFunc('createMediaKeys', 10, function () {
            if (debug) print('MediaKeySystemAccess.createMediaKeys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getConfiguration: {

        value: newFunc('getConfiguration', 10, function () {
            if (debug) print('MediaKeySystemAccess.getConfiguration.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MediaKeySystemAccess.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

MediaKeys = newFunc('MediaKeys', 1, function () {
    print('MediaKeys.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MediaKeys.prototype, {
    createSession: {

        value: newFunc('createSession', 10, function () {
            if (debug) print('MediaKeys.createSession.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setServerCertificate: {

        value: newFunc('setServerCertificate', 10, function () {
            if (debug) print('MediaKeys.setServerCertificate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MediaKeys.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    getStatusForPolicy: {

        value: newFunc('getStatusForPolicy', 10, function () {
            if (debug) print('MediaKeys.getStatusForPolicy.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});

NavigationPreloadManager = newFunc('NavigationPreloadManager', 1, function () {
    print('NavigationPreloadManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(NavigationPreloadManager.prototype, {
    disable: {

        value: newFunc('disable', 10, function () {
            if (debug) print('NavigationPreloadManager.disable.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    enable: {

        value: newFunc('enable', 10, function () {
            if (debug) print('NavigationPreloadManager.enable.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getState: {

        value: newFunc('getState', 10, function () {
            if (debug) print('NavigationPreloadManager.getState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setHeaderValue: {

        value: newFunc('setHeaderValue', 10, function () {
            if (debug) print('NavigationPreloadManager.setHeaderValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('NavigationPreloadManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

OrientationSensor = newFunc('OrientationSensor', 1, function () {
    print('OrientationSensor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(OrientationSensor.prototype, {
    quaternion: {

        get: newFunc('quaternion', 10, function () {
            let res = mm.memory.private_data.get(this).quaternion;
            if (debug) print('OrientationSensor.quaternion.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    populateMatrix: {

        value: newFunc('populateMatrix', 10, function () {
            if (debug) print('OrientationSensor.populateMatrix.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('OrientationSensor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PasswordCredential = newFunc('PasswordCredential', 1, function () {
    print('PasswordCredential.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PasswordCredential.prototype, {
    password: {

        get: newFunc('password', 10, function () {
            let res = mm.memory.private_data.get(this).password;
            if (debug) print('PasswordCredential.password.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('PasswordCredential.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    iconURL: {

        get: newFunc('iconURL', 10, function () {
            let res = mm.memory.private_data.get(this).iconURL;
            if (debug) print('PasswordCredential.iconURL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PasswordCredential.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

RelativeOrientationSensor = newFunc('RelativeOrientationSensor', 1, function () {
    print('RelativeOrientationSensor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(RelativeOrientationSensor.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('RelativeOrientationSensor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ScreenDetailed = newFunc('ScreenDetailed', 1, function () {
    print('ScreenDetailed.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ScreenDetailed.prototype, {
    left: {

        get: newFunc('left', 10, function () {
            let res = mm.memory.private_data.get(this).left;
            if (debug) print('ScreenDetailed.left.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    top: {

        get: newFunc('top', 10, function () {
            let res = mm.memory.private_data.get(this).top;
            if (debug) print('ScreenDetailed.top.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isPrimary: {

        get: newFunc('isPrimary', 10, function () {
            let res = mm.memory.private_data.get(this).isPrimary;
            if (debug) print('ScreenDetailed.isPrimary.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isInternal: {

        get: newFunc('isInternal', 10, function () {
            let res = mm.memory.private_data.get(this).isInternal;
            if (debug) print('ScreenDetailed.isInternal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    devicePixelRatio: {

        get: newFunc('devicePixelRatio', 10, function () {
            let res = mm.memory.private_data.get(this).devicePixelRatio;
            if (debug) print('ScreenDetailed.devicePixelRatio.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('ScreenDetailed.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ScreenDetailed.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ScreenDetails = newFunc('ScreenDetails', 1, function () {
    print('ScreenDetails.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ScreenDetails.prototype, {
    screens: {

        get: newFunc('screens', 10, function () {
            let res = mm.memory.private_data.get(this).screens;
            if (debug) print('ScreenDetails.screens.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    currentScreen: {

        get: newFunc('currentScreen', 10, function () {
            let res = mm.memory.private_data.get(this).currentScreen;
            if (debug) print('ScreenDetails.currentScreen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onscreenschange: {

        get: newFunc('onscreenschange', 10, function () {
            let res = mm.memory.private_data.get(this).onscreenschange;
            if (debug) print('ScreenDetails.onscreenschange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscreenschange', 1, function (value) {
            if (debug) print('ScreenDetails.onscreenschange.set', value)
            mm.memory.private_data.get(this).onscreenschange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncurrentscreenchange: {

        get: newFunc('oncurrentscreenchange', 10, function () {
            let res = mm.memory.private_data.get(this).oncurrentscreenchange;
            if (debug) print('ScreenDetails.oncurrentscreenchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncurrentscreenchange', 1, function (value) {
            if (debug) print('ScreenDetails.oncurrentscreenchange.set', value)
            mm.memory.private_data.get(this).oncurrentscreenchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ScreenDetails.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Sensor = newFunc('Sensor', 1, function () {
    print('Sensor.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Sensor.prototype, {
    activated: {

        get: newFunc('activated', 10, function () {
            let res = mm.memory.private_data.get(this).activated;
            if (debug) print('Sensor.activated.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    hasReading: {

        get: newFunc('hasReading', 10, function () {
            let res = mm.memory.private_data.get(this).hasReading;
            if (debug) print('Sensor.hasReading.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    timestamp: {

        get: newFunc('timestamp', 10, function () {
            let res = mm.memory.private_data.get(this).timestamp;
            if (debug) print('Sensor.timestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('Sensor.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('Sensor.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onreading: {

        get: newFunc('onreading', 10, function () {
            let res = mm.memory.private_data.get(this).onreading;
            if (debug) print('Sensor.onreading.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onreading', 1, function (value) {
            if (debug) print('Sensor.onreading.set', value)
            mm.memory.private_data.get(this).onreading = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onactivate: {

        get: newFunc('onactivate', 10, function () {
            let res = mm.memory.private_data.get(this).onactivate;
            if (debug) print('Sensor.onactivate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onactivate', 1, function (value) {
            if (debug) print('Sensor.onactivate.set', value)
            mm.memory.private_data.get(this).onactivate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    start: {

        value: newFunc('start', 10, function () {
            if (debug) print('Sensor.start.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stop: {

        value: newFunc('stop', 10, function () {
            if (debug) print('Sensor.stop.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Sensor.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SensorErrorEvent = newFunc('SensorErrorEvent', 1, function () {
    print('SensorErrorEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SensorErrorEvent.prototype, {
    error: {

        get: newFunc('error', 10, function () {
            let res = mm.memory.private_data.get(this).error;
            if (debug) print('SensorErrorEvent.error.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SensorErrorEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SubtleCrypto = newFunc('SubtleCrypto', 1, function () {
    print('SubtleCrypto.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SubtleCrypto.prototype, {
    decrypt: {

        value: newFunc('decrypt', 10, function () {
            if (debug) print('SubtleCrypto.decrypt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deriveBits: {

        value: newFunc('deriveBits', 10, function () {
            if (debug) print('SubtleCrypto.deriveBits.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deriveKey: {

        value: newFunc('deriveKey', 10, function () {
            if (debug) print('SubtleCrypto.deriveKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    digest: {

        value: newFunc('digest', 10, function () {
            if (debug) print('SubtleCrypto.digest.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    encrypt: {

        value: newFunc('encrypt', 10, function () {
            if (debug) print('SubtleCrypto.encrypt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    exportKey: {

        value: newFunc('exportKey', 10, function () {
            if (debug) print('SubtleCrypto.exportKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    generateKey: {

        value: newFunc('generateKey', 10, function () {
            if (debug) print('SubtleCrypto.generateKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    importKey: {

        value: newFunc('importKey', 10, function () {
            if (debug) print('SubtleCrypto.importKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    sign: {

        value: newFunc('sign', 10, function () {
            if (debug) print('SubtleCrypto.sign.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unwrapKey: {

        value: newFunc('unwrapKey', 10, function () {
            if (debug) print('SubtleCrypto.unwrapKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    verify: {

        value: newFunc('verify', 10, function () {
            if (debug) print('SubtleCrypto.verify.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    wrapKey: {

        value: newFunc('wrapKey', 10, function () {
            if (debug) print('SubtleCrypto.wrapKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SubtleCrypto.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

VideoDecoder = newFunc('VideoDecoder', 1, function () {
    print('VideoDecoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VideoDecoder.prototype, {
    decodeQueueSize: {

        get: newFunc('decodeQueueSize', 10, function () {
            let res = mm.memory.private_data.get(this).decodeQueueSize;
            if (debug) print('VideoDecoder.decodeQueueSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ondequeue: {

        get: newFunc('ondequeue', 10, function () {
            let res = mm.memory.private_data.get(this).ondequeue;
            if (debug) print('VideoDecoder.ondequeue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondequeue', 1, function (value) {
            if (debug) print('VideoDecoder.ondequeue.set', value)
            mm.memory.private_data.get(this).ondequeue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('VideoDecoder.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('VideoDecoder.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    configure: {

        value: newFunc('configure', 10, function () {
            if (debug) print('VideoDecoder.configure.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    decode: {

        value: newFunc('decode', 10, function () {
            if (debug) print('VideoDecoder.decode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    flush: {

        value: newFunc('flush', 10, function () {
            if (debug) print('VideoDecoder.flush.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('VideoDecoder.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('VideoDecoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

VideoEncoder = newFunc('VideoEncoder', 1, function () {
    print('VideoEncoder.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(VideoEncoder.prototype, {
    encodeQueueSize: {

        get: newFunc('encodeQueueSize', 10, function () {
            let res = mm.memory.private_data.get(this).encodeQueueSize;
            if (debug) print('VideoEncoder.encodeQueueSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ondequeue: {

        get: newFunc('ondequeue', 10, function () {
            let res = mm.memory.private_data.get(this).ondequeue;
            if (debug) print('VideoEncoder.ondequeue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondequeue', 1, function (value) {
            if (debug) print('VideoEncoder.ondequeue.set', value)
            mm.memory.private_data.get(this).ondequeue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('VideoEncoder.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('VideoEncoder.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    configure: {

        value: newFunc('configure', 10, function () {
            if (debug) print('VideoEncoder.configure.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    encode: {

        value: newFunc('encode', 10, function () {
            if (debug) print('VideoEncoder.encode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    flush: {

        value: newFunc('flush', 10, function () {
            if (debug) print('VideoEncoder.flush.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reset: {

        value: newFunc('reset', 10, function () {
            if (debug) print('VideoEncoder.reset.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('VideoEncoder.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WGSLLanguageFeatures = newFunc('WGSLLanguageFeatures', 1, function () {
    print('WGSLLanguageFeatures.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WGSLLanguageFeatures.prototype, {
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('WGSLLanguageFeatures.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('WGSLLanguageFeatures.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('WGSLLanguageFeatures.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    has: {

        value: newFunc('has', 10, function () {
            if (debug) print('WGSLLanguageFeatures.has.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('WGSLLanguageFeatures.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('WGSLLanguageFeatures.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WGSLLanguageFeatures.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WebTransport = newFunc('WebTransport', 1, function () {
    print('WebTransport.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebTransport.prototype, {
    incomingUnidirectionalStreams: {

        get: newFunc('incomingUnidirectionalStreams', 10, function () {
            let res = mm.memory.private_data.get(this).incomingUnidirectionalStreams;
            if (debug) print('WebTransport.incomingUnidirectionalStreams.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    incomingBidirectionalStreams: {

        get: newFunc('incomingBidirectionalStreams', 10, function () {
            let res = mm.memory.private_data.get(this).incomingBidirectionalStreams;
            if (debug) print('WebTransport.incomingBidirectionalStreams.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    datagrams: {

        get: newFunc('datagrams', 10, function () {
            let res = mm.memory.private_data.get(this).datagrams;
            if (debug) print('WebTransport.datagrams.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    ready: {

        get: newFunc('ready', 10, function () {
            let res = mm.memory.private_data.get(this).ready;
            if (debug) print('WebTransport.ready.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    closed: {

        get: newFunc('closed', 10, function () {
            let res = mm.memory.private_data.get(this).closed;
            if (debug) print('WebTransport.closed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('WebTransport.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createBidirectionalStream: {

        value: newFunc('createBidirectionalStream', 10, function () {
            if (debug) print('WebTransport.createBidirectionalStream.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createUnidirectionalStream: {

        value: newFunc('createUnidirectionalStream', 10, function () {
            if (debug) print('WebTransport.createUnidirectionalStream.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebTransport.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WebTransportBidirectionalStream = newFunc('WebTransportBidirectionalStream', 1, function () {
    print('WebTransportBidirectionalStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebTransportBidirectionalStream.prototype, {
    readable: {

        get: newFunc('readable', 10, function () {
            let res = mm.memory.private_data.get(this).readable;
            if (debug) print('WebTransportBidirectionalStream.readable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writable: {

        get: newFunc('writable', 10, function () {
            let res = mm.memory.private_data.get(this).writable;
            if (debug) print('WebTransportBidirectionalStream.writable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebTransportBidirectionalStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WebTransportDatagramDuplexStream = newFunc('WebTransportDatagramDuplexStream', 1, function () {
    print('WebTransportDatagramDuplexStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebTransportDatagramDuplexStream.prototype, {
    readable: {

        get: newFunc('readable', 10, function () {
            let res = mm.memory.private_data.get(this).readable;
            if (debug) print('WebTransportDatagramDuplexStream.readable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writable: {

        get: newFunc('writable', 10, function () {
            let res = mm.memory.private_data.get(this).writable;
            if (debug) print('WebTransportDatagramDuplexStream.writable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxDatagramSize: {

        get: newFunc('maxDatagramSize', 10, function () {
            let res = mm.memory.private_data.get(this).maxDatagramSize;
            if (debug) print('WebTransportDatagramDuplexStream.maxDatagramSize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    incomingMaxAge: {

        get: newFunc('incomingMaxAge', 10, function () {
            let res = mm.memory.private_data.get(this).incomingMaxAge;
            if (debug) print('WebTransportDatagramDuplexStream.incomingMaxAge.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('incomingMaxAge', 1, function (value) {
            if (debug) print('WebTransportDatagramDuplexStream.incomingMaxAge.set', value)
            mm.memory.private_data.get(this).incomingMaxAge = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    outgoingMaxAge: {

        get: newFunc('outgoingMaxAge', 10, function () {
            let res = mm.memory.private_data.get(this).outgoingMaxAge;
            if (debug) print('WebTransportDatagramDuplexStream.outgoingMaxAge.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('outgoingMaxAge', 1, function (value) {
            if (debug) print('WebTransportDatagramDuplexStream.outgoingMaxAge.set', value)
            mm.memory.private_data.get(this).outgoingMaxAge = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    incomingHighWaterMark: {

        get: newFunc('incomingHighWaterMark', 10, function () {
            let res = mm.memory.private_data.get(this).incomingHighWaterMark;
            if (debug) print('WebTransportDatagramDuplexStream.incomingHighWaterMark.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('incomingHighWaterMark', 1, function (value) {
            if (debug) print('WebTransportDatagramDuplexStream.incomingHighWaterMark.set', value)
            mm.memory.private_data.get(this).incomingHighWaterMark = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    outgoingHighWaterMark: {

        get: newFunc('outgoingHighWaterMark', 10, function () {
            let res = mm.memory.private_data.get(this).outgoingHighWaterMark;
            if (debug) print('WebTransportDatagramDuplexStream.outgoingHighWaterMark.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('outgoingHighWaterMark', 1, function (value) {
            if (debug) print('WebTransportDatagramDuplexStream.outgoingHighWaterMark.set', value)
            mm.memory.private_data.get(this).outgoingHighWaterMark = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebTransportDatagramDuplexStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WebTransportError = newFunc('WebTransportError', 1, function () {
    print('WebTransportError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebTransportError.prototype, {
    streamErrorCode: {

        get: newFunc('streamErrorCode', 10, function () {
            let res = mm.memory.private_data.get(this).streamErrorCode;
            if (debug) print('WebTransportError.streamErrorCode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    source: {

        get: newFunc('source', 10, function () {
            let res = mm.memory.private_data.get(this).source;
            if (debug) print('WebTransportError.source.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebTransportError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


AuthenticatorAssertionResponse = newFunc('AuthenticatorAssertionResponse', 1, function () {
    print('AuthenticatorAssertionResponse.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AuthenticatorAssertionResponse.prototype, {
    authenticatorData: {

        get: newFunc('authenticatorData', 10, function () {
            let res = mm.memory.private_data.get(this).authenticatorData;
            if (debug) print('AuthenticatorAssertionResponse.authenticatorData.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    signature: {

        get: newFunc('signature', 10, function () {
            let res = mm.memory.private_data.get(this).signature;
            if (debug) print('AuthenticatorAssertionResponse.signature.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    userHandle: {

        get: newFunc('userHandle', 10, function () {
            let res = mm.memory.private_data.get(this).userHandle;
            if (debug) print('AuthenticatorAssertionResponse.userHandle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AuthenticatorAssertionResponse.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AuthenticatorAttestationResponse = newFunc('AuthenticatorAttestationResponse', 1, function () {
    print('AuthenticatorAttestationResponse.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AuthenticatorAttestationResponse.prototype, {
    attestationObject: {

        get: newFunc('attestationObject', 10, function () {
            let res = mm.memory.private_data.get(this).attestationObject;
            if (debug) print('AuthenticatorAttestationResponse.attestationObject.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getAuthenticatorData: {

        value: newFunc('getAuthenticatorData', 10, function () {
            if (debug) print('AuthenticatorAttestationResponse.getAuthenticatorData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getPublicKey: {

        value: newFunc('getPublicKey', 10, function () {
            if (debug) print('AuthenticatorAttestationResponse.getPublicKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getPublicKeyAlgorithm: {

        value: newFunc('getPublicKeyAlgorithm', 10, function () {
            if (debug) print('AuthenticatorAttestationResponse.getPublicKeyAlgorithm.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getTransports: {

        value: newFunc('getTransports', 10, function () {
            if (debug) print('AuthenticatorAttestationResponse.getTransports.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AuthenticatorAttestationResponse.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

AuthenticatorResponse = newFunc('AuthenticatorResponse', 1, function () {
    print('AuthenticatorResponse.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AuthenticatorResponse.prototype, {
    clientDataJSON: {

        get: newFunc('clientDataJSON', 10, function () {
            let res = mm.memory.private_data.get(this).clientDataJSON;
            if (debug) print('AuthenticatorResponse.clientDataJSON.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AuthenticatorResponse.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PublicKeyCredential = newFunc('PublicKeyCredential', 1, function () {
    print('PublicKeyCredential.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PublicKeyCredential.prototype, {
    rawId: {

        get: newFunc('rawId', 10, function () {
            let res = mm.memory.private_data.get(this).rawId;
            if (debug) print('PublicKeyCredential.rawId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    response: {

        get: newFunc('response', 10, function () {
            let res = mm.memory.private_data.get(this).response;
            if (debug) print('PublicKeyCredential.response.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    authenticatorAttachment: {

        get: newFunc('authenticatorAttachment', 10, function () {
            let res = mm.memory.private_data.get(this).authenticatorAttachment;
            if (debug) print('PublicKeyCredential.authenticatorAttachment.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getClientExtensionResults: {

        value: newFunc('getClientExtensionResults', 10, function () {
            if (debug) print('PublicKeyCredential.getClientExtensionResults.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PublicKeyCredential.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PublicKeyCredential.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BarcodeDetector = newFunc('BarcodeDetector', 1, function () {
    print('BarcodeDetector.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BarcodeDetector.prototype, {
    detect: {

        value: newFunc('detect', 10, function () {
            if (debug) print('BarcodeDetector.detect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BarcodeDetector.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CaptureController = newFunc('CaptureController', 1, function () {
    print('CaptureController.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CaptureController.prototype, {
    setFocusBehavior: {

        value: newFunc('setFocusBehavior', 10, function () {
            if (debug) print('CaptureController.setFocusBehavior.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CaptureController.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


EyeDropper = newFunc('EyeDropper', 1, function () {
    print('EyeDropper.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(EyeDropper.prototype, {
    open: {

        value: newFunc('open', 10, function () {
            if (debug) print('EyeDropper.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('EyeDropper.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FileSystemDirectoryHandle = newFunc('FileSystemDirectoryHandle', 1, function () {
    print('FileSystemDirectoryHandle.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FileSystemDirectoryHandle.prototype, {
    getDirectoryHandle: {

        value: newFunc('getDirectoryHandle', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.getDirectoryHandle.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getFileHandle: {

        value: newFunc('getFileHandle', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.getFileHandle.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeEntry: {

        value: newFunc('removeEntry', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.removeEntry.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    resolve: {

        value: newFunc('resolve', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.resolve.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FileSystemDirectoryHandle.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FileSystemFileHandle = newFunc('FileSystemFileHandle', 1, function () {
    print('FileSystemFileHandle.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FileSystemFileHandle.prototype, {
    createWritable: {

        value: newFunc('createWritable', 10, function () {
            if (debug) print('FileSystemFileHandle.createWritable.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getFile: {

        value: newFunc('getFile', 10, function () {
            if (debug) print('FileSystemFileHandle.getFile.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    move: {

        value: newFunc('move', 10, function () {
            if (debug) print('FileSystemFileHandle.move.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FileSystemFileHandle.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FileSystemHandle = newFunc('FileSystemHandle', 1, function () {
    print('FileSystemHandle.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FileSystemHandle.prototype, {
    kind: {

        get: newFunc('kind', 10, function () {
            let res = mm.memory.private_data.get(this).kind;
            if (debug) print('FileSystemHandle.kind.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('FileSystemHandle.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isSameEntry: {

        value: newFunc('isSameEntry', 10, function () {
            if (debug) print('FileSystemHandle.isSameEntry.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    queryPermission: {

        value: newFunc('queryPermission', 10, function () {
            if (debug) print('FileSystemHandle.queryPermission.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    remove: {

        value: newFunc('remove', 10, function () {
            if (debug) print('FileSystemHandle.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    requestPermission: {

        value: newFunc('requestPermission', 10, function () {
            if (debug) print('FileSystemHandle.requestPermission.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FileSystemHandle.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FileSystemWritableFileStream = newFunc('FileSystemWritableFileStream', 1, function () {
    print('FileSystemWritableFileStream.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FileSystemWritableFileStream.prototype, {
    seek: {

        value: newFunc('seek', 10, function () {
            if (debug) print('FileSystemWritableFileStream.seek.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    truncate: {

        value: newFunc('truncate', 10, function () {
            if (debug) print('FileSystemWritableFileStream.truncate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    write: {

        value: newFunc('write', 10, function () {
            if (debug) print('FileSystemWritableFileStream.write.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    mode: {

        get: newFunc('mode', 10, function () {
            let res = mm.memory.private_data.get(this).mode;
            if (debug) print('FileSystemWritableFileStream.mode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FileSystemWritableFileStream.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FontData = newFunc('FontData', 1, function () {
    print('FontData.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FontData.prototype, {
    postscriptName: {

        get: newFunc('postscriptName', 10, function () {
            let res = mm.memory.private_data.get(this).postscriptName;
            if (debug) print('FontData.postscriptName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    fullName: {

        get: newFunc('fullName', 10, function () {
            let res = mm.memory.private_data.get(this).fullName;
            if (debug) print('FontData.fullName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    family: {

        get: newFunc('family', 10, function () {
            let res = mm.memory.private_data.get(this).family;
            if (debug) print('FontData.family.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('FontData.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    blob: {

        value: newFunc('blob', 10, function () {
            if (debug) print('FontData.blob.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FontData.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FragmentDirective = newFunc('FragmentDirective', 1, function () {
    print('FragmentDirective.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FragmentDirective.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FragmentDirective.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

HIDConnectionEvent = newFunc('HIDConnectionEvent', 1, function () {
    print('HIDConnectionEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HIDConnectionEvent.prototype, {
    device: {

        get: newFunc('device', 10, function () {
            let res = mm.memory.private_data.get(this).device;
            if (debug) print('HIDConnectionEvent.device.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HIDConnectionEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

HIDDevice = newFunc('HIDDevice', 1, function () {
    print('HIDDevice.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HIDDevice.prototype, {
    oninputreport: {

        get: newFunc('oninputreport', 10, function () {
            let res = mm.memory.private_data.get(this).oninputreport;
            if (debug) print('HIDDevice.oninputreport.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninputreport', 1, function (value) {
            if (debug) print('HIDDevice.oninputreport.set', value)
            mm.memory.private_data.get(this).oninputreport = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    opened: {

        get: newFunc('opened', 10, function () {
            let res = mm.memory.private_data.get(this).opened;
            if (debug) print('HIDDevice.opened.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    vendorId: {

        get: newFunc('vendorId', 10, function () {
            let res = mm.memory.private_data.get(this).vendorId;
            if (debug) print('HIDDevice.vendorId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    productId: {

        get: newFunc('productId', 10, function () {
            let res = mm.memory.private_data.get(this).productId;
            if (debug) print('HIDDevice.productId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    productName: {

        get: newFunc('productName', 10, function () {
            let res = mm.memory.private_data.get(this).productName;
            if (debug) print('HIDDevice.productName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    collections: {

        get: newFunc('collections', 10, function () {
            let res = mm.memory.private_data.get(this).collections;
            if (debug) print('HIDDevice.collections.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('HIDDevice.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forget: {

        value: newFunc('forget', 10, function () {
            if (debug) print('HIDDevice.forget.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    open: {

        value: newFunc('open', 10, function () {
            if (debug) print('HIDDevice.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    receiveFeatureReport: {

        value: newFunc('receiveFeatureReport', 10, function () {
            if (debug) print('HIDDevice.receiveFeatureReport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    sendFeatureReport: {

        value: newFunc('sendFeatureReport', 10, function () {
            if (debug) print('HIDDevice.sendFeatureReport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    sendReport: {

        value: newFunc('sendReport', 10, function () {
            if (debug) print('HIDDevice.sendReport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HIDDevice.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

HIDInputReportEvent = newFunc('HIDInputReportEvent', 1, function () {
    print('HIDInputReportEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HIDInputReportEvent.prototype, {
    device: {

        get: newFunc('device', 10, function () {
            let res = mm.memory.private_data.get(this).device;
            if (debug) print('HIDInputReportEvent.device.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reportId: {

        get: newFunc('reportId', 10, function () {
            let res = mm.memory.private_data.get(this).reportId;
            if (debug) print('HIDInputReportEvent.reportId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('HIDInputReportEvent.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HIDInputReportEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IdentityCredential = newFunc('IdentityCredential', 1, function () {
    print('IdentityCredential.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IdentityCredential.prototype, {
    token: {

        get: newFunc('token', 10, function () {
            let res = mm.memory.private_data.get(this).token;
            if (debug) print('IdentityCredential.token.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    isAutoSelected: {

        get: newFunc('isAutoSelected', 10, function () {
            let res = mm.memory.private_data.get(this).isAutoSelected;
            if (debug) print('IdentityCredential.isAutoSelected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IdentityCredential.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IdentityProvider = newFunc('IdentityProvider', 1, function () {
    print('IdentityProvider.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IdentityProvider.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IdentityProvider.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

IdentityCredentialError = newFunc('IdentityCredentialError', 1, function () {
    print('IdentityCredentialError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(IdentityCredentialError.prototype, {
    code: {

        get: newFunc('code', 10, function () {
            let res = mm.memory.private_data.get(this).code;
            if (debug) print('IdentityCredentialError.code.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('IdentityCredentialError.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('IdentityCredentialError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

LaunchParams = newFunc('LaunchParams', 1, function () {
    print('LaunchParams.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(LaunchParams.prototype, {
    targetURL: {

        get: newFunc('targetURL', 10, function () {
            let res = mm.memory.private_data.get(this).targetURL;
            if (debug) print('LaunchParams.targetURL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    files: {

        get: newFunc('files', 10, function () {
            let res = mm.memory.private_data.get(this).files;
            if (debug) print('LaunchParams.files.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('LaunchParams.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


NavigatorLogin = newFunc('NavigatorLogin', 1, function () {
    print('NavigatorLogin.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(NavigatorLogin.prototype, {
    setStatus: {

        value: newFunc('setStatus', 10, function () {
            if (debug) print('NavigatorLogin.setStatus.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('NavigatorLogin.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

NotRestoredReasonDetails = newFunc('NotRestoredReasonDetails', 1, function () {
    print('NotRestoredReasonDetails.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(NotRestoredReasonDetails.prototype, {
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('NotRestoredReasonDetails.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('NotRestoredReasonDetails.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('NotRestoredReasonDetails.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

NotRestoredReasons = newFunc('NotRestoredReasons', 1, function () {
    print('NotRestoredReasons.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(NotRestoredReasons.prototype, {
    src: {

        get: newFunc('src', 10, function () {
            let res = mm.memory.private_data.get(this).src;
            if (debug) print('NotRestoredReasons.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('NotRestoredReasons.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('NotRestoredReasons.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('NotRestoredReasons.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reasons: {

        get: newFunc('reasons', 10, function () {
            let res = mm.memory.private_data.get(this).reasons;
            if (debug) print('NotRestoredReasons.reasons.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    children: {

        get: newFunc('children', 10, function () {
            let res = mm.memory.private_data.get(this).children;
            if (debug) print('NotRestoredReasons.children.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('NotRestoredReasons.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('NotRestoredReasons.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

OTPCredential = newFunc('OTPCredential', 1, function () {
    print('OTPCredential.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(OTPCredential.prototype, {
    code: {

        get: newFunc('code', 10, function () {
            let res = mm.memory.private_data.get(this).code;
            if (debug) print('OTPCredential.code.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('OTPCredential.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PaymentAddress = newFunc('PaymentAddress', 1, function () {
    print('PaymentAddress.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PaymentAddress.prototype, {
    city: {

        get: newFunc('city', 10, function () {
            let res = mm.memory.private_data.get(this).city;
            if (debug) print('PaymentAddress.city.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    country: {

        get: newFunc('country', 10, function () {
            let res = mm.memory.private_data.get(this).country;
            if (debug) print('PaymentAddress.country.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    dependentLocality: {

        get: newFunc('dependentLocality', 10, function () {
            let res = mm.memory.private_data.get(this).dependentLocality;
            if (debug) print('PaymentAddress.dependentLocality.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    organization: {

        get: newFunc('organization', 10, function () {
            let res = mm.memory.private_data.get(this).organization;
            if (debug) print('PaymentAddress.organization.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    phone: {

        get: newFunc('phone', 10, function () {
            let res = mm.memory.private_data.get(this).phone;
            if (debug) print('PaymentAddress.phone.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    postalCode: {

        get: newFunc('postalCode', 10, function () {
            let res = mm.memory.private_data.get(this).postalCode;
            if (debug) print('PaymentAddress.postalCode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    recipient: {

        get: newFunc('recipient', 10, function () {
            let res = mm.memory.private_data.get(this).recipient;
            if (debug) print('PaymentAddress.recipient.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    region: {

        get: newFunc('region', 10, function () {
            let res = mm.memory.private_data.get(this).region;
            if (debug) print('PaymentAddress.region.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sortingCode: {

        get: newFunc('sortingCode', 10, function () {
            let res = mm.memory.private_data.get(this).sortingCode;
            if (debug) print('PaymentAddress.sortingCode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    addressLine: {

        get: newFunc('addressLine', 10, function () {
            let res = mm.memory.private_data.get(this).addressLine;
            if (debug) print('PaymentAddress.addressLine.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PaymentAddress.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PaymentAddress.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PaymentRequest = newFunc('PaymentRequest', 1, function () {
    print('PaymentRequest.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PaymentRequest.prototype, {
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('PaymentRequest.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shippingAddress: {

        get: newFunc('shippingAddress', 10, function () {
            let res = mm.memory.private_data.get(this).shippingAddress;
            if (debug) print('PaymentRequest.shippingAddress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shippingOption: {

        get: newFunc('shippingOption', 10, function () {
            let res = mm.memory.private_data.get(this).shippingOption;
            if (debug) print('PaymentRequest.shippingOption.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shippingType: {

        get: newFunc('shippingType', 10, function () {
            let res = mm.memory.private_data.get(this).shippingType;
            if (debug) print('PaymentRequest.shippingType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onshippingaddresschange: {

        get: newFunc('onshippingaddresschange', 10, function () {
            let res = mm.memory.private_data.get(this).onshippingaddresschange;
            if (debug) print('PaymentRequest.onshippingaddresschange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onshippingaddresschange', 1, function (value) {
            if (debug) print('PaymentRequest.onshippingaddresschange.set', value)
            mm.memory.private_data.get(this).onshippingaddresschange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onshippingoptionchange: {

        get: newFunc('onshippingoptionchange', 10, function () {
            let res = mm.memory.private_data.get(this).onshippingoptionchange;
            if (debug) print('PaymentRequest.onshippingoptionchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onshippingoptionchange', 1, function (value) {
            if (debug) print('PaymentRequest.onshippingoptionchange.set', value)
            mm.memory.private_data.get(this).onshippingoptionchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    abort: {

        value: newFunc('abort', 10, function () {
            if (debug) print('PaymentRequest.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    canMakePayment: {

        value: newFunc('canMakePayment', 10, function () {
            if (debug) print('PaymentRequest.canMakePayment.call', arguments)
            return false;

        }), writable: true, enumerable: true, configurable: true,


    },
    hasEnrolledInstrument: {

        value: newFunc('hasEnrolledInstrument', 10, function () {
            if (debug) print('PaymentRequest.hasEnrolledInstrument.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    show: {

        value: newFunc('show', 10, function () {
            if (debug) print('PaymentRequest.show.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    onpaymentmethodchange: {

        get: newFunc('onpaymentmethodchange', 10, function () {
            let res = mm.memory.private_data.get(this).onpaymentmethodchange;
            if (debug) print('PaymentRequest.onpaymentmethodchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpaymentmethodchange', 1, function (value) {
            if (debug) print('PaymentRequest.onpaymentmethodchange.set', value)
            mm.memory.private_data.get(this).onpaymentmethodchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PaymentRequest.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PaymentResponse = newFunc('PaymentResponse', 1, function () {
    print('PaymentResponse.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PaymentResponse.prototype, {
    requestId: {

        get: newFunc('requestId', 10, function () {
            let res = mm.memory.private_data.get(this).requestId;
            if (debug) print('PaymentResponse.requestId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    methodName: {

        get: newFunc('methodName', 10, function () {
            let res = mm.memory.private_data.get(this).methodName;
            if (debug) print('PaymentResponse.methodName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    details: {

        get: newFunc('details', 10, function () {
            let res = mm.memory.private_data.get(this).details;
            if (debug) print('PaymentResponse.details.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shippingAddress: {

        get: newFunc('shippingAddress', 10, function () {
            let res = mm.memory.private_data.get(this).shippingAddress;
            if (debug) print('PaymentResponse.shippingAddress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shippingOption: {

        get: newFunc('shippingOption', 10, function () {
            let res = mm.memory.private_data.get(this).shippingOption;
            if (debug) print('PaymentResponse.shippingOption.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    payerName: {

        get: newFunc('payerName', 10, function () {
            let res = mm.memory.private_data.get(this).payerName;
            if (debug) print('PaymentResponse.payerName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    payerEmail: {

        get: newFunc('payerEmail', 10, function () {
            let res = mm.memory.private_data.get(this).payerEmail;
            if (debug) print('PaymentResponse.payerEmail.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    payerPhone: {

        get: newFunc('payerPhone', 10, function () {
            let res = mm.memory.private_data.get(this).payerPhone;
            if (debug) print('PaymentResponse.payerPhone.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onpayerdetailchange: {

        get: newFunc('onpayerdetailchange', 10, function () {
            let res = mm.memory.private_data.get(this).onpayerdetailchange;
            if (debug) print('PaymentResponse.onpayerdetailchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpayerdetailchange', 1, function (value) {
            if (debug) print('PaymentResponse.onpayerdetailchange.set', value)
            mm.memory.private_data.get(this).onpayerdetailchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    complete: {

        value: newFunc('complete', 10, function () {
            if (debug) print('PaymentResponse.complete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    retry: {

        value: newFunc('retry', 10, function () {
            if (debug) print('PaymentResponse.retry.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PaymentResponse.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PaymentResponse.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PaymentManager = newFunc('PaymentManager', 1, function () {
    print('PaymentManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PaymentManager.prototype, {
    userHint: {

        get: newFunc('userHint', 10, function () {
            let res = mm.memory.private_data.get(this).userHint;
            if (debug) print('PaymentManager.userHint.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('userHint', 1, function (value) {
            if (debug) print('PaymentManager.userHint.set', value)
            mm.memory.private_data.get(this).userHint = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    enableDelegations: {

        value: newFunc('enableDelegations', 10, function () {
            if (debug) print('PaymentManager.enableDelegations.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PaymentManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PaymentMethodChangeEvent = newFunc('PaymentMethodChangeEvent', 1, function () {
    print('PaymentMethodChangeEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PaymentMethodChangeEvent.prototype, {
    methodName: {

        get: newFunc('methodName', 10, function () {
            let res = mm.memory.private_data.get(this).methodName;
            if (debug) print('PaymentMethodChangeEvent.methodName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    methodDetails: {

        get: newFunc('methodDetails', 10, function () {
            let res = mm.memory.private_data.get(this).methodDetails;
            if (debug) print('PaymentMethodChangeEvent.methodDetails.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PaymentMethodChangeEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PresentationAvailability = newFunc('PresentationAvailability', 1, function () {
    print('PresentationAvailability.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PresentationAvailability.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('PresentationAvailability.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onchange: {

        get: newFunc('onchange', 10, function () {
            let res = mm.memory.private_data.get(this).onchange;
            if (debug) print('PresentationAvailability.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function (value) {
            if (debug) print('PresentationAvailability.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PresentationAvailability.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PresentationConnection = newFunc('PresentationConnection', 1, function () {
    print('PresentationConnection.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PresentationConnection.prototype, {
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('PresentationConnection.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    url: {

        get: newFunc('url', 10, function () {
            let res = mm.memory.private_data.get(this).url;
            if (debug) print('PresentationConnection.url.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('PresentationConnection.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onconnect: {

        get: newFunc('onconnect', 10, function () {
            let res = mm.memory.private_data.get(this).onconnect;
            if (debug) print('PresentationConnection.onconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnect', 1, function (value) {
            if (debug) print('PresentationConnection.onconnect.set', value)
            mm.memory.private_data.get(this).onconnect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclose: {

        get: newFunc('onclose', 10, function () {
            let res = mm.memory.private_data.get(this).onclose;
            if (debug) print('PresentationConnection.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function (value) {
            if (debug) print('PresentationConnection.onclose.set', value)
            mm.memory.private_data.get(this).onclose = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onterminate: {

        get: newFunc('onterminate', 10, function () {
            let res = mm.memory.private_data.get(this).onterminate;
            if (debug) print('PresentationConnection.onterminate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onterminate', 1, function (value) {
            if (debug) print('PresentationConnection.onterminate.set', value)
            mm.memory.private_data.get(this).onterminate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    binaryType: {

        get: newFunc('binaryType', 10, function () {
            let res = mm.memory.private_data.get(this).binaryType;
            if (debug) print('PresentationConnection.binaryType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('binaryType', 1, function (value) {
            if (debug) print('PresentationConnection.binaryType.set', value)
            mm.memory.private_data.get(this).binaryType = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmessage: {

        get: newFunc('onmessage', 10, function () {
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('PresentationConnection.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function (value) {
            if (debug) print('PresentationConnection.onmessage.set', value)
            mm.memory.private_data.get(this).onmessage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('PresentationConnection.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    send: {

        value: newFunc('send', 10, function () {
            if (debug) print('PresentationConnection.send.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    terminate: {

        value: newFunc('terminate', 10, function () {
            if (debug) print('PresentationConnection.terminate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PresentationConnection.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PresentationConnectionAvailableEvent = newFunc('PresentationConnectionAvailableEvent', 1, function () {
    print('PresentationConnectionAvailableEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PresentationConnectionAvailableEvent.prototype, {
    connection: {

        get: newFunc('connection', 10, function () {
            let res = mm.memory.private_data.get(this).connection;
            if (debug) print('PresentationConnectionAvailableEvent.connection.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PresentationConnectionAvailableEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PresentationConnectionCloseEvent = newFunc('PresentationConnectionCloseEvent', 1, function () {
    print('PresentationConnectionCloseEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PresentationConnectionCloseEvent.prototype, {
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('PresentationConnectionCloseEvent.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    message: {

        get: newFunc('message', 10, function () {
            let res = mm.memory.private_data.get(this).message;
            if (debug) print('PresentationConnectionCloseEvent.message.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PresentationConnectionCloseEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PresentationConnectionList = newFunc('PresentationConnectionList', 1, function () {
    print('PresentationConnectionList.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PresentationConnectionList.prototype, {
    connections: {

        get: newFunc('connections', 10, function () {
            let res = mm.memory.private_data.get(this).connections;
            if (debug) print('PresentationConnectionList.connections.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onconnectionavailable: {

        get: newFunc('onconnectionavailable', 10, function () {
            let res = mm.memory.private_data.get(this).onconnectionavailable;
            if (debug) print('PresentationConnectionList.onconnectionavailable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnectionavailable', 1, function (value) {
            if (debug) print('PresentationConnectionList.onconnectionavailable.set', value)
            mm.memory.private_data.get(this).onconnectionavailable = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PresentationConnectionList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PresentationReceiver = newFunc('PresentationReceiver', 1, function () {
    print('PresentationReceiver.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PresentationReceiver.prototype, {
    connectionList: {

        get: newFunc('connectionList', 10, function () {
            let res = mm.memory.private_data.get(this).connectionList;
            if (debug) print('PresentationReceiver.connectionList.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PresentationReceiver.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PresentationRequest = newFunc('PresentationRequest', 1, function () {
    print('PresentationRequest.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PresentationRequest.prototype, {
    onconnectionavailable: {

        get: newFunc('onconnectionavailable', 10, function () {
            let res = mm.memory.private_data.get(this).onconnectionavailable;
            if (debug) print('PresentationRequest.onconnectionavailable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnectionavailable', 1, function (value) {
            if (debug) print('PresentationRequest.onconnectionavailable.set', value)
            mm.memory.private_data.get(this).onconnectionavailable = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getAvailability: {

        value: newFunc('getAvailability', 10, function () {
            if (debug) print('PresentationRequest.getAvailability.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reconnect: {

        value: newFunc('reconnect', 10, function () {
            if (debug) print('PresentationRequest.reconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    start: {

        value: newFunc('start', 10, function () {
            if (debug) print('PresentationRequest.start.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PresentationRequest.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PressureObserver = newFunc('PressureObserver', 1, function () {
    print('PressureObserver.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PressureObserver.prototype, {
    disconnect: {

        value: newFunc('disconnect', 10, function () {
            if (debug) print('PressureObserver.disconnect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    observe: {

        value: newFunc('observe', 10, function () {
            if (debug) print('PressureObserver.observe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    takeRecords: {

        value: newFunc('takeRecords', 10, function () {
            if (debug) print('PressureObserver.takeRecords.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unobserve: {

        value: newFunc('unobserve', 10, function () {
            if (debug) print('PressureObserver.unobserve.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PressureObserver.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PressureRecord = newFunc('PressureRecord', 1, function () {
    print('PressureRecord.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PressureRecord.prototype, {
    source: {

        get: newFunc('source', 10, function () {
            let res = mm.memory.private_data.get(this).source;
            if (debug) print('PressureRecord.source.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    state: {

        get: newFunc('state', 10, function () {
            let res = mm.memory.private_data.get(this).state;
            if (debug) print('PressureRecord.state.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    time: {

        get: newFunc('time', 10, function () {
            let res = mm.memory.private_data.get(this).time;
            if (debug) print('PressureRecord.time.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PressureRecord.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PressureRecord.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ProtectedAudience = newFunc('ProtectedAudience', 1, function () {
    print('ProtectedAudience.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ProtectedAudience.prototype, {
    queryFeatureSupport: {

        value: newFunc('queryFeatureSupport', 10, function () {
            if (debug) print('ProtectedAudience.queryFeatureSupport.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ProtectedAudience.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

SerialPort = newFunc('SerialPort', 1, function () {
    print('SerialPort.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SerialPort.prototype, {
    onconnect: {

        get: newFunc('onconnect', 10, function () {
            let res = mm.memory.private_data.get(this).onconnect;
            if (debug) print('SerialPort.onconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onconnect', 1, function (value) {
            if (debug) print('SerialPort.onconnect.set', value)
            mm.memory.private_data.get(this).onconnect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondisconnect: {

        get: newFunc('ondisconnect', 10, function () {
            let res = mm.memory.private_data.get(this).ondisconnect;
            if (debug) print('SerialPort.ondisconnect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondisconnect', 1, function (value) {
            if (debug) print('SerialPort.ondisconnect.set', value)
            mm.memory.private_data.get(this).ondisconnect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    readable: {

        get: newFunc('readable', 10, function () {
            let res = mm.memory.private_data.get(this).readable;
            if (debug) print('SerialPort.readable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    writable: {

        get: newFunc('writable', 10, function () {
            let res = mm.memory.private_data.get(this).writable;
            if (debug) print('SerialPort.writable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('SerialPort.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forget: {

        value: newFunc('forget', 10, function () {
            if (debug) print('SerialPort.forget.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getInfo: {

        value: newFunc('getInfo', 10, function () {
            if (debug) print('SerialPort.getInfo.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSignals: {

        value: newFunc('getSignals', 10, function () {
            if (debug) print('SerialPort.getSignals.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    open: {

        value: newFunc('open', 10, function () {
            if (debug) print('SerialPort.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setSignals: {

        value: newFunc('setSignals', 10, function () {
            if (debug) print('SerialPort.setSignals.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    connected: {

        get: newFunc('connected', 10, function () {
            let res = mm.memory.private_data.get(this).connected;
            if (debug) print('SerialPort.connected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SerialPort.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

StorageBucket = newFunc('StorageBucket', 1, function () {
    print('StorageBucket.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StorageBucket.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('StorageBucket.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    indexedDB: {

        get: newFunc('indexedDB', 10, function () {
            let res = mm.memory.private_data.get(this).indexedDB;
            if (debug) print('StorageBucket.indexedDB.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    caches: {

        get: newFunc('caches', 10, function () {
            let res = mm.memory.private_data.get(this).caches;
            if (debug) print('StorageBucket.caches.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    estimate: {

        value: newFunc('estimate', 10, function () {
            if (debug) print('StorageBucket.estimate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    expires: {

        value: newFunc('expires', 10, function () {
            if (debug) print('StorageBucket.expires.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getDirectory: {

        value: newFunc('getDirectory', 10, function () {
            if (debug) print('StorageBucket.getDirectory.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    persisted: {

        value: newFunc('persisted', 10, function () {
            if (debug) print('StorageBucket.persisted.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setExpires: {

        value: newFunc('setExpires', 10, function () {
            if (debug) print('StorageBucket.setExpires.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('StorageBucket.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    persist: {

        value: newFunc('persist', 10, function () {
            if (debug) print('StorageBucket.persist.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
});

StorageBucketManager = newFunc('StorageBucketManager', 1, function () {
    print('StorageBucketManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(StorageBucketManager.prototype, {
    delete: {

        value: newFunc('delete', 10, function () {
            if (debug) print('StorageBucketManager.delete.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('StorageBucketManager.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    open: {

        value: newFunc('open', 10, function () {
            if (debug) print('StorageBucketManager.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('StorageBucketManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


WakeLockSentinel = newFunc('WakeLockSentinel', 1, function () {
    print('WakeLockSentinel.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WakeLockSentinel.prototype, {
    onrelease: {

        get: newFunc('onrelease', 10, function () {
            let res = mm.memory.private_data.get(this).onrelease;
            if (debug) print('WakeLockSentinel.onrelease.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onrelease', 1, function (value) {
            if (debug) print('WakeLockSentinel.onrelease.set', value)
            mm.memory.private_data.get(this).onrelease = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    released: {

        get: newFunc('released', 10, function () {
            let res = mm.memory.private_data.get(this).released;
            if (debug) print('WakeLockSentinel.released.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('WakeLockSentinel.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    release: {

        value: newFunc('release', 10, function () {
            if (debug) print('WakeLockSentinel.release.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WakeLockSentinel.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

getScreenDetails = newFunc('getScreenDetails', 10, function () {
    print('window.getScreenDetails.call');
});


queryLocalFonts = newFunc('queryLocalFonts', 10, function () {
    print('window.queryLocalFonts.call');
});


showDirectoryPicker = newFunc('showDirectoryPicker', 10, function () {
    print('window.showDirectoryPicker.call');
});


showOpenFilePicker = newFunc('showOpenFilePicker', 10, function () {
    print('window.showOpenFilePicker.call');
});


showSaveFilePicker = newFunc('showSaveFilePicker', 10, function () {
    print('window.showSaveFilePicker.call');
});


onpageswap = null


onpagereveal = null


credentialless = false


fence = null


onscrollend = null


onscrollsnapchange = null


onscrollsnapchanging = null


BackgroundFetchManager = newFunc('BackgroundFetchManager', 1, function () {
    print('BackgroundFetchManager.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BackgroundFetchManager.prototype, {
    fetch: {

        value: newFunc('fetch', 10, function () {
            if (debug) print('BackgroundFetchManager.fetch.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    get: {

        value: newFunc('get', 10, function () {
            if (debug) print('BackgroundFetchManager.get.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getIds: {

        value: newFunc('getIds', 10, function () {
            if (debug) print('BackgroundFetchManager.getIds.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BackgroundFetchManager.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BackgroundFetchRecord = newFunc('BackgroundFetchRecord', 1, function () {
    print('BackgroundFetchRecord.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BackgroundFetchRecord.prototype, {
    request: {

        get: newFunc('request', 10, function () {
            let res = mm.memory.private_data.get(this).request;
            if (debug) print('BackgroundFetchRecord.request.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    responseReady: {

        get: newFunc('responseReady', 10, function () {
            let res = mm.memory.private_data.get(this).responseReady;
            if (debug) print('BackgroundFetchRecord.responseReady.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BackgroundFetchRecord.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

BackgroundFetchRegistration = newFunc('BackgroundFetchRegistration', 1, function () {
    print('BackgroundFetchRegistration.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(BackgroundFetchRegistration.prototype, {
    id: {

        get: newFunc('id', 10, function () {
            let res = mm.memory.private_data.get(this).id;
            if (debug) print('BackgroundFetchRegistration.id.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    uploadTotal: {

        get: newFunc('uploadTotal', 10, function () {
            let res = mm.memory.private_data.get(this).uploadTotal;
            if (debug) print('BackgroundFetchRegistration.uploadTotal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    uploaded: {

        get: newFunc('uploaded', 10, function () {
            let res = mm.memory.private_data.get(this).uploaded;
            if (debug) print('BackgroundFetchRegistration.uploaded.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    downloadTotal: {

        get: newFunc('downloadTotal', 10, function () {
            let res = mm.memory.private_data.get(this).downloadTotal;
            if (debug) print('BackgroundFetchRegistration.downloadTotal.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    downloaded: {

        get: newFunc('downloaded', 10, function () {
            let res = mm.memory.private_data.get(this).downloaded;
            if (debug) print('BackgroundFetchRegistration.downloaded.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    result: {

        get: newFunc('result', 10, function () {
            let res = mm.memory.private_data.get(this).result;
            if (debug) print('BackgroundFetchRegistration.result.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    failureReason: {

        get: newFunc('failureReason', 10, function () {
            let res = mm.memory.private_data.get(this).failureReason;
            if (debug) print('BackgroundFetchRegistration.failureReason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    recordsAvailable: {

        get: newFunc('recordsAvailable', 10, function () {
            let res = mm.memory.private_data.get(this).recordsAvailable;
            if (debug) print('BackgroundFetchRegistration.recordsAvailable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    onprogress: {

        get: newFunc('onprogress', 10, function () {
            let res = mm.memory.private_data.get(this).onprogress;
            if (debug) print('BackgroundFetchRegistration.onprogress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprogress', 1, function (value) {
            if (debug) print('BackgroundFetchRegistration.onprogress.set', value)
            mm.memory.private_data.get(this).onprogress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    abort: {

        value: newFunc('abort', 10, function () {
            if (debug) print('BackgroundFetchRegistration.abort.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    match: {

        value: newFunc('match', 10, function () {
            if (debug) print('BackgroundFetchRegistration.match.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    matchAll: {

        value: newFunc('matchAll', 10, function () {
            if (debug) print('BackgroundFetchRegistration.matchAll.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('BackgroundFetchRegistration.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CSSMarginRule = newFunc('CSSMarginRule', 1, function () {
    print('CSSMarginRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSMarginRule.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('CSSMarginRule.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('CSSMarginRule.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('CSSMarginRule.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSMarginRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CSSNestedDeclarations = newFunc('CSSNestedDeclarations', 1, function () {
    print('CSSNestedDeclarations.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSNestedDeclarations.prototype, {
    style: {

        get: newFunc('style', 10, function () {
            let res = mm.memory.private_data.get(this).style;
            if (debug) print('CSSNestedDeclarations.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('CSSNestedDeclarations.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSNestedDeclarations.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CSSViewTransitionRule = newFunc('CSSViewTransitionRule', 1, function () {
    print('CSSViewTransitionRule.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CSSViewTransitionRule.prototype, {
    navigation: {

        get: newFunc('navigation', 10, function () {
            let res = mm.memory.private_data.get(this).navigation;
            if (debug) print('CSSViewTransitionRule.navigation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    types: {

        get: newFunc('types', 10, function () {
            let res = mm.memory.private_data.get(this).types;
            if (debug) print('CSSViewTransitionRule.types.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSViewTransitionRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CaretPosition = newFunc('CaretPosition', 1, function () {
    print('CaretPosition.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CaretPosition.prototype, {
    offsetNode: {

        get: newFunc('offsetNode', 10, function () {
            let res = mm.memory.private_data.get(this).offsetNode;
            if (debug) print('CaretPosition.offsetNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    offset: {

        get: newFunc('offset', 10, function () {
            let res = mm.memory.private_data.get(this).offset;
            if (debug) print('CaretPosition.offset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getClientRect: {

        value: newFunc('getClientRect', 10, function () {
            if (debug) print('CaretPosition.getClientRect.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CaretPosition.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

ChapterInformation = newFunc('ChapterInformation', 1, function () {
    print('ChapterInformation.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(ChapterInformation.prototype, {
    title: {

        get: newFunc('title', 10, function () {
            let res = mm.memory.private_data.get(this).title;
            if (debug) print('ChapterInformation.title.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    startTime: {

        get: newFunc('startTime', 10, function () {
            let res = mm.memory.private_data.get(this).startTime;
            if (debug) print('ChapterInformation.startTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    artwork: {

        get: newFunc('artwork', 10, function () {
            let res = mm.memory.private_data.get(this).artwork;
            if (debug) print('ChapterInformation.artwork.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('ChapterInformation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

CropTarget = newFunc('CropTarget', 1, function () {
    print('CropTarget.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CropTarget.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CropTarget.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

DocumentPictureInPictureEvent = newFunc('DocumentPictureInPictureEvent', 1, function () {
    print('DocumentPictureInPictureEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DocumentPictureInPictureEvent.prototype, {
    window: {

        get: newFunc('window', 10, function () {
            let res = mm.memory.private_data.get(this).window;
            if (debug) print('DocumentPictureInPictureEvent.window.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DocumentPictureInPictureEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Fence = newFunc('Fence', 1, function () {
    print('Fence.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(Fence.prototype, {
    getNestedConfigs: {

        value: newFunc('getNestedConfigs', 10, function () {
            if (debug) print('Fence.getNestedConfigs.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportEvent: {

        value: newFunc('reportEvent', 10, function () {
            if (debug) print('Fence.reportEvent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setReportEventDataForAutomaticBeacons: {

        value: newFunc('setReportEventDataForAutomaticBeacons', 10, function () {
            if (debug) print('Fence.setReportEventDataForAutomaticBeacons.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('Fence.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

FencedFrameConfig = newFunc('FencedFrameConfig', 1, function () {
    print('FencedFrameConfig.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(FencedFrameConfig.prototype, {
    setSharedStorageContext: {

        value: newFunc('setSharedStorageContext', 10, function () {
            if (debug) print('FencedFrameConfig.setSharedStorageContext.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('FencedFrameConfig.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


MediaMetadata = newFunc('MediaMetadata', 1, function () {
    print('MediaMetadata.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(MediaMetadata.prototype, {
    title: {

        get: newFunc('title', 10, function () {
            let res = mm.memory.private_data.get(this).title;
            if (debug) print('MediaMetadata.title.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('title', 1, function (value) {
            if (debug) print('MediaMetadata.title.set', value)
            mm.memory.private_data.get(this).title = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    artist: {

        get: newFunc('artist', 10, function () {
            let res = mm.memory.private_data.get(this).artist;
            if (debug) print('MediaMetadata.artist.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('artist', 1, function (value) {
            if (debug) print('MediaMetadata.artist.set', value)
            mm.memory.private_data.get(this).artist = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    album: {

        get: newFunc('album', 10, function () {
            let res = mm.memory.private_data.get(this).album;
            if (debug) print('MediaMetadata.album.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('album', 1, function (value) {
            if (debug) print('MediaMetadata.album.set', value)
            mm.memory.private_data.get(this).album = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    artwork: {

        get: newFunc('artwork', 10, function () {
            let res = mm.memory.private_data.get(this).artwork;
            if (debug) print('MediaMetadata.artwork.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('artwork', 1, function (value) {
            if (debug) print('MediaMetadata.artwork.set', value)
            mm.memory.private_data.get(this).artwork = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    chapterInfo: {

        get: newFunc('chapterInfo', 10, function () {
            let res = mm.memory.private_data.get(this).chapterInfo;
            if (debug) print('MediaMetadata.chapterInfo.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('MediaMetadata.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PageRevealEvent = newFunc('PageRevealEvent', 1, function () {
    print('PageRevealEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PageRevealEvent.prototype, {
    viewTransition: {

        get: newFunc('viewTransition', 10, function () {
            let res = mm.memory.private_data.get(this).viewTransition;
            if (debug) print('PageRevealEvent.viewTransition.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PageRevealEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PageSwapEvent = newFunc('PageSwapEvent', 1, function () {
    print('PageSwapEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PageSwapEvent.prototype, {
    activation: {

        get: newFunc('activation', 10, function () {
            let res = mm.memory.private_data.get(this).activation;
            if (debug) print('PageSwapEvent.activation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    viewTransition: {

        get: newFunc('viewTransition', 10, function () {
            let res = mm.memory.private_data.get(this).viewTransition;
            if (debug) print('PageSwapEvent.viewTransition.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PageSwapEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceLongAnimationFrameTiming = newFunc('PerformanceLongAnimationFrameTiming', 1, function () {
    print('PerformanceLongAnimationFrameTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceLongAnimationFrameTiming.prototype, {
    renderStart: {

        get: newFunc('renderStart', 10, function () {
            let res = mm.memory.private_data.get(this).renderStart;
            if (debug) print('PerformanceLongAnimationFrameTiming.renderStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    styleAndLayoutStart: {

        get: newFunc('styleAndLayoutStart', 10, function () {
            let res = mm.memory.private_data.get(this).styleAndLayoutStart;
            if (debug) print('PerformanceLongAnimationFrameTiming.styleAndLayoutStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    firstUIEventTimestamp: {

        get: newFunc('firstUIEventTimestamp', 10, function () {
            let res = mm.memory.private_data.get(this).firstUIEventTimestamp;
            if (debug) print('PerformanceLongAnimationFrameTiming.firstUIEventTimestamp.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    blockingDuration: {

        get: newFunc('blockingDuration', 10, function () {
            let res = mm.memory.private_data.get(this).blockingDuration;
            if (debug) print('PerformanceLongAnimationFrameTiming.blockingDuration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    scripts: {

        get: newFunc('scripts', 10, function () {
            let res = mm.memory.private_data.get(this).scripts;
            if (debug) print('PerformanceLongAnimationFrameTiming.scripts.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PerformanceLongAnimationFrameTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceLongAnimationFrameTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PerformanceScriptTiming = newFunc('PerformanceScriptTiming', 1, function () {
    print('PerformanceScriptTiming.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PerformanceScriptTiming.prototype, {
    invokerType: {

        get: newFunc('invokerType', 10, function () {
            let res = mm.memory.private_data.get(this).invokerType;
            if (debug) print('PerformanceScriptTiming.invokerType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    invoker: {

        get: newFunc('invoker', 10, function () {
            let res = mm.memory.private_data.get(this).invoker;
            if (debug) print('PerformanceScriptTiming.invoker.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    windowAttribution: {

        get: newFunc('windowAttribution', 10, function () {
            let res = mm.memory.private_data.get(this).windowAttribution;
            if (debug) print('PerformanceScriptTiming.windowAttribution.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    executionStart: {

        get: newFunc('executionStart', 10, function () {
            let res = mm.memory.private_data.get(this).executionStart;
            if (debug) print('PerformanceScriptTiming.executionStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    forcedStyleAndLayoutDuration: {

        get: newFunc('forcedStyleAndLayoutDuration', 10, function () {
            let res = mm.memory.private_data.get(this).forcedStyleAndLayoutDuration;
            if (debug) print('PerformanceScriptTiming.forcedStyleAndLayoutDuration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    pauseDuration: {

        get: newFunc('pauseDuration', 10, function () {
            let res = mm.memory.private_data.get(this).pauseDuration;
            if (debug) print('PerformanceScriptTiming.pauseDuration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    window: {

        get: newFunc('window', 10, function () {
            let res = mm.memory.private_data.get(this).window;
            if (debug) print('PerformanceScriptTiming.window.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sourceURL: {

        get: newFunc('sourceURL', 10, function () {
            let res = mm.memory.private_data.get(this).sourceURL;
            if (debug) print('PerformanceScriptTiming.sourceURL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sourceFunctionName: {

        get: newFunc('sourceFunctionName', 10, function () {
            let res = mm.memory.private_data.get(this).sourceFunctionName;
            if (debug) print('PerformanceScriptTiming.sourceFunctionName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sourceCharPosition: {

        get: newFunc('sourceCharPosition', 10, function () {
            let res = mm.memory.private_data.get(this).sourceCharPosition;
            if (debug) print('PerformanceScriptTiming.sourceCharPosition.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PerformanceScriptTiming.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PerformanceScriptTiming.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

PushSubscription = newFunc('PushSubscription', 1, function () {
    print('PushSubscription.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(PushSubscription.prototype, {
    endpoint: {

        get: newFunc('endpoint', 10, function () {
            let res = mm.memory.private_data.get(this).endpoint;
            if (debug) print('PushSubscription.endpoint.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    expirationTime: {

        get: newFunc('expirationTime', 10, function () {
            let res = mm.memory.private_data.get(this).expirationTime;
            if (debug) print('PushSubscription.expirationTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    options: {

        get: newFunc('options', 10, function () {
            let res = mm.memory.private_data.get(this).options;
            if (debug) print('PushSubscription.options.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    getKey: {

        value: newFunc('getKey', 10, function () {
            if (debug) print('PushSubscription.getKey.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    toJSON: {

        value: newFunc('toJSON', 10, function () {
            if (debug) print('PushSubscription.toJSON.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    unsubscribe: {

        value: newFunc('unsubscribe', 10, function () {
            if (debug) print('PushSubscription.unsubscribe.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('PushSubscription.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


SnapEvent = newFunc('SnapEvent', 1, function () {
    print('SnapEvent.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(SnapEvent.prototype, {
    snapTargetBlock: {

        get: newFunc('snapTargetBlock', 10, function () {
            let res = mm.memory.private_data.get(this).snapTargetBlock;
            if (debug) print('SnapEvent.snapTargetBlock.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    snapTargetInline: {

        get: newFunc('snapTargetInline', 10, function () {
            let res = mm.memory.private_data.get(this).snapTargetInline;
            if (debug) print('SnapEvent.snapTargetInline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('SnapEvent.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

WebSocketError = newFunc('WebSocketError', 1, function () {
    print('WebSocketError.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(WebSocketError.prototype, {
    closeCode: {

        get: newFunc('closeCode', 10, function () {
            let res = mm.memory.private_data.get(this).closeCode;
            if (debug) print('WebSocketError.closeCode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    reason: {

        get: newFunc('reason', 10, function () {
            let res = mm.memory.private_data.get(this).reason;
            if (debug) print('WebSocketError.reason.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('WebSocketError.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

webkitResolveLocalFileSystemURL = newFunc('webkitResolveLocalFileSystemURL', 10, function () {
    print('window.webkitResolveLocalFileSystemURL.call');
});




