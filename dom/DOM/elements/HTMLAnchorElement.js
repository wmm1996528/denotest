HTMLAnchorElement = newFunc('HTMLAnchorElement', 10, function HTMLAnchorElement() {
    mm.memory.private_data.set(this, {})
})
;(function () {
    const $safe_get_attribute = ['charset', 'coords', 'download', 'hash', 'host', 'hostname', 'href', 'hrefTranslate', 'hreflang', 'name', 'origin', 'password', 'pathname', 'ping', 'port', 'protocol', 'referrerPolicy', 'rel', 'relList', 'rev', 'search', 'shape', 'target', 'text', 'type', 'username'];
    const $safe_set_attribute = ['charset', 'coords', 'download', 'hash', 'host', 'hostname', 'href', 'hrefTranslate', 'hreflang', 'name', 'password', 'pathname', 'ping', 'port', 'protocol', 'referrerPolicy', 'rel', 'relList', 'rev', 'search', 'shape', 'target', 'text', 'type', 'username'];
    const $safe_func_attribute = ['toString'];

    // HTMLAnchorElement.prototype = {
    //     get charset() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).charset, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'charset', arguments, result);
    //         return result;
    //     },
    //     set charset(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'charset', arguments);
    //         mm.memory.private_data.get(this).charset = value + "";
    //     },
    //     get coords() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).coords, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'coords', arguments, result);
    //         return result;
    //     },
    //     set coords(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'coords', arguments);
    //         mm.memory.private_data.get(this).coords = value + "";
    //     },
    //     get download() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).download, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'download', arguments, result);
    //         return result;
    //     },
    //     set download(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'download', arguments);
    //         mm.memory.private_data.get(this).download = value + "";
    //     },
    //     get hash() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).hash, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'hash', arguments, result);
    //         return result;
    //     },
    //     set hash(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'hash', arguments);
    //         mm.memory.private_data.get(this).hash = value + "";
    //     },
    //     get host() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).host, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'host', arguments, result);
    //         return result;
    //     },
    //     set host(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'host', arguments);
    //         mm.memory.private_data.get(this).host = value + "";
    //     },
    //     get hostname() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).hostname, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'hostname', arguments, result);
    //         return result;
    //     },
    //     set hostname(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'hostname', arguments);
    //         mm.memory.private_data.get(this).hostname = value + "";
    //     },
    //     get href() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).href, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'href', arguments, result);
    //         return result;
    //     },
    //     set href(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'href', arguments);
    //         let a = value.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
    //         mm.memory.private_data.get(this).protocol = a[1] ? a[1] : "";
    //         mm.memory.private_data.get(this).host = a[2] ? a[2] : "";
    //         mm.memory.private_data.get(this).port = a[3] ? a[3] : "";
    //         mm.memory.private_data.get(this).pathname = a[4] ? a[4] : "";
    //         mm.memory.private_data.get(this).search = a[5] ? a[5] : "";
    //         mm.memory.private_data.get(this).hash = a[6] ? a[6] : "";
    //         mm.memory.private_data.get(this).hostname = mm.memory.private_data.get(this).host;
    //         mm.memory.private_data.get(this).origin = mm.memory.private_data.get(this).protocol + "//" + mm.memory.private_data.get(this).host + (mm.memory.private_data.get(this).port ? ":" + mm.memory.private_data.get(this).port : "");
    //         mm.memory.private_data.get(this).href = value + "";
    //     },
    //     get hrefTranslate() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).hrefTranslate, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'hrefTranslate', arguments, result);
    //         return result;
    //     },
    //     set hrefTranslate(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'hrefTranslate', arguments);
    //         mm.memory.private_data.get(this).hrefTranslate = value + "";
    //     },
    //     get hreflang() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).hreflang, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'hreflang', arguments, result);
    //         return result;
    //     },
    //     set hreflang(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'hreflang', arguments);
    //         mm.memory.private_data.get(this).hreflang = value + "";
    //     },
    //     get name() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).name, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'name', arguments, result);
    //         return result;
    //     },
    //     set name(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'name', arguments);
    //         mm.memory.private_data.get(this).name = value + "";
    //     },
    //     get origin() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).origin, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'origin', arguments, result);
    //         return result;
    //     },
    //     get password() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).password, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'password', arguments, result);
    //         return result;
    //     },
    //     set password(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'password', arguments);
    //         mm.memory.private_data.get(this).password = value + "";
    //     },
    //     get pathname() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).pathname, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'pathname', arguments, result);
    //         return result;
    //     },
    //     set pathname(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'pathname', arguments);
    //         mm.memory.private_data.get(this).pathname = value + "";
    //     },
    //     get ping() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).ping, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'ping', arguments, result);
    //         return result;
    //     },
    //     set ping(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'ping', arguments);
    //         mm.memory.private_data.get(this).ping = value + "";
    //     },
    //     get port() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).port, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'port', arguments, result);
    //         return result;
    //     },
    //     set port(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'port', arguments);
    //         mm.memory.private_data.get(this).port = value + "";
    //     },
    //     get protocol() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).protocol, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'protocol', arguments, result);
    //         return result;
    //     },
    //     set protocol(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'protocol', arguments);
    //         mm.memory.private_data.get(this).protocol = value + "";
    //     },
    //     get referrerPolicy() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).referrerPolicy, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'referrerPolicy', arguments, result);
    //         return result;
    //     },
    //     set referrerPolicy(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'referrerPolicy', arguments);
    //         mm.memory.private_data.get(this).referrerPolicy = value + "";
    //     },
    //     get rel() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).rel, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'rel', arguments, result);
    //         return result;
    //     },
    //     set rel(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'rel', arguments);
    //         mm.memory.private_data.get(this).rel = value + "";
    //     },
    //     get relList() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).relList, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'relList', arguments, result);
    //         return result;
    //     },
    //     set relList(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'relList', arguments);
    //         mm.memory.private_data.get(this).relList = value + "";
    //     },
    //     get rev() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).rev, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'rev', arguments, result);
    //         return result;
    //     },
    //     set rev(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'rev', arguments);
    //         mm.memory.private_data.get(this).rev = value + "";
    //     },
    //     get search() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).search, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'search', arguments, result);
    //         return result;
    //     },
    //     set search(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'search', arguments);
    //         mm.memory.private_data.get(this).search = value + "";
    //     },
    //     get shape() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).shape, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'shape', arguments, result);
    //         return result;
    //     },
    //     set shape(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'shape', arguments);
    //         mm.memory.private_data.get(this).shape = value + "";
    //     },
    //     get target() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).target, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'target', arguments, result);
    //         return result;
    //     },
    //     set target(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'target', arguments);
    //         mm.memory.private_data.get(this).target = value + "";
    //     },
    //     get text() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).text, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'text', arguments, result);
    //         return result;
    //     },
    //     set text(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'text', arguments);
    //         mm.memory.private_data.get(this).text = value + "";
    //     },
    //     toString() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = undefined;
    //         if (debug) print('Func', 'HTMLAnchorElement', 'toString', arguments, result);
    //         return result;
    //     },
    //     get type() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).type, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'type', arguments, result);
    //         return result;
    //     },
    //     set type(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         if (debug) print('Set', 'HTMLAnchorElement', 'type', arguments);
    //         mm.memory.private_data.get(this).type = value + "";
    //     },
    //     get username() {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         let result = mm.abs(mm.memory.private_data.get(this).username, "");
    //         if (debug) print('Get', 'HTMLAnchorElement', 'username', arguments, result);
    //         return result;
    //     },
    //     set username(value) {
    //         if (!HTMLAnchorElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
    //         mm.memory.private_data.get(this).username = value + "";
    //     }
    // }

    // mm.rename(HTMLAnchorElement.prototype, "HTMLAnchorElement");
    // mm.safeDescriptor_addConstructor(HTMLAnchorElement);
    // mm.safe_Objattribute(HTMLAnchorElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.defineProperties(HTMLAnchorElement.prototype, {
        target: {

            get: newFunc('target', 10, function target() {
                if (debug) print('HTMLAnchorElement.target.get')
                return mm.memory.private_data.get(this).target
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('target', 1, function target(value) {
                if (debug) print('HTMLAnchorElement.target.set', value)
                mm.memory.private_data.get(this).target = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        download: {

            get: newFunc('download', 10, function download() {
                if (debug) print('HTMLAnchorElement.download.get')
                return mm.memory.private_data.get(this).download
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('download', 1, function download(value) {
                if (debug) print('HTMLAnchorElement.download.set', value)
                mm.memory.private_data.get(this).download = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ping: {

            get: newFunc('ping', 10, function ping() {
                if (debug) print('HTMLAnchorElement.ping.get')
                return mm.memory.private_data.get(this).ping
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ping', 1, function ping(value) {
                if (debug) print('HTMLAnchorElement.ping.set', value)
                mm.memory.private_data.get(this).ping = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        rel: {

            get: newFunc('rel', 10, function rel() {
                if (debug) print('HTMLAnchorElement.rel.get')
                return mm.memory.private_data.get(this).rel
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('rel', 1, function rel(value) {
                if (debug) print('HTMLAnchorElement.rel.set', value)
                mm.memory.private_data.get(this).rel = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        relList: {

            get: newFunc('relList', 10, function relList() {
                if (debug) print('HTMLAnchorElement.relList.get')
                return mm.memory.private_data.get(this).relList
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('relList', 1, function relList(value) {
                if (debug) print('HTMLAnchorElement.relList.set', value)
                mm.memory.private_data.get(this).relList = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        hreflang: {

            get: newFunc('hreflang', 10, function hreflang() {
                if (debug) print('HTMLAnchorElement.hreflang.get')
                return mm.memory.private_data.get(this).hreflang
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('hreflang', 1, function hreflang(value) {
                if (debug) print('HTMLAnchorElement.hreflang.set', value)
                mm.memory.private_data.get(this).hreflang = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        type: {

            get: newFunc('type', 10, function type() {
                if (debug) print('HTMLAnchorElement.type.get')
                return mm.memory.private_data.get(this).type
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('type', 1, function type(value) {
                if (debug) print('HTMLAnchorElement.type.set', value)
                mm.memory.private_data.get(this).type = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        referrerPolicy: {

            get: newFunc('referrerPolicy', 10, function referrerPolicy() {
                if (debug) print('HTMLAnchorElement.referrerPolicy.get')
                return mm.memory.private_data.get(this).referrerPolicy
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('referrerPolicy', 1, function referrerPolicy(value) {
                if (debug) print('HTMLAnchorElement.referrerPolicy.set', value)
                mm.memory.private_data.get(this).referrerPolicy = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        text: {

            get: newFunc('text', 10, function text() {
                if (debug) print('HTMLAnchorElement.text.get')
                return mm.memory.private_data.get(this).text
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('text', 1, function text(value) {
                if (debug) print('HTMLAnchorElement.text.set', value)
                mm.memory.private_data.get(this).text = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        coords: {

            get: newFunc('coords', 10, function coords() {
                if (debug) print('HTMLAnchorElement.coords.get')
                return mm.memory.private_data.get(this).coords
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('coords', 1, function coords(value) {
                if (debug) print('HTMLAnchorElement.coords.set', value)
                mm.memory.private_data.get(this).coords = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        charset: {

            get: newFunc('charset', 10, function charset() {
                if (debug) print('HTMLAnchorElement.charset.get')
                return mm.memory.private_data.get(this).charset
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('charset', 1, function charset(value) {
                if (debug) print('HTMLAnchorElement.charset.set', value)
                mm.memory.private_data.get(this).charset = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        name: {

            get: newFunc('name', 10, function name() {
                if (debug) print('HTMLAnchorElement.name.get')
                return mm.memory.private_data.get(this).name
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('name', 1, function name(value) {
                if (debug) print('HTMLAnchorElement.name.set', value)
                mm.memory.private_data.get(this).name = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        rev: {

            get: newFunc('rev', 10, function rev() {
                if (debug) print('HTMLAnchorElement.rev.get')
                return mm.memory.private_data.get(this).rev
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('rev', 1, function rev(value) {
                if (debug) print('HTMLAnchorElement.rev.set', value)
                mm.memory.private_data.get(this).rev = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        shape: {

            get: newFunc('shape', 10, function shape() {
                if (debug) print('HTMLAnchorElement.shape.get')
                return mm.memory.private_data.get(this).shape
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('shape', 1, function shape(value) {
                if (debug) print('HTMLAnchorElement.shape.set', value)
                mm.memory.private_data.get(this).shape = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        origin: {

            get: newFunc('origin', 10, function origin() {
                if (debug) print('HTMLAnchorElement.origin.get')
                return mm.memory.private_data.get(this).origin
            }, {get: true}), enumerable: true, configurable: true,

        },
        protocol: {

            get: newFunc('protocol', 10, function protocol() {
                if (debug) print('HTMLAnchorElement.protocol.get')
                return mm.memory.private_data.get(this).protocol
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('protocol', 1, function protocol(value) {
                if (debug) print('HTMLAnchorElement.protocol.set', value)
                mm.memory.private_data.get(this).protocol = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        username: {

            get: newFunc('username', 10, function username() {
                if (debug) print('HTMLAnchorElement.username.get')
                return mm.memory.private_data.get(this).username
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('username', 1, function username(value) {
                if (debug) print('HTMLAnchorElement.username.set', value)
                mm.memory.private_data.get(this).username = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        password: {

            get: newFunc('password', 10, function password() {
                if (debug) print('HTMLAnchorElement.password.get')
                return mm.memory.private_data.get(this).password
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('password', 1, function password(value) {
                if (debug) print('HTMLAnchorElement.password.set', value)
                mm.memory.private_data.get(this).password = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        host: {

            get: newFunc('host', 10, function host() {
                if (debug) print('HTMLAnchorElement.host.get')
                return mm.memory.private_data.get(this).host
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('host', 1, function host(value) {
                if (debug) print('HTMLAnchorElement.host.set', value)
                mm.memory.private_data.get(this).host = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        hostname: {

            get: newFunc('hostname', 10, function hostname() {
                if (debug) print('HTMLAnchorElement.hostname.get')
                return mm.memory.private_data.get(this).hostname
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('hostname', 1, function hostname(value) {
                if (debug) print('HTMLAnchorElement.hostname.set', value)
                mm.memory.private_data.get(this).hostname = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        port: {

            get: newFunc('port', 10, function port() {
                if (debug) print('HTMLAnchorElement.port.get')
                return mm.memory.private_data.get(this).port
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('port', 1, function port(value) {
                if (debug) print('HTMLAnchorElement.port.set', value)
                mm.memory.private_data.get(this).port = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        pathname: {

            get: newFunc('pathname', 10, function pathname() {
                if (debug) print('HTMLAnchorElement.pathname.get')
                return mm.memory.private_data.get(this).pathname
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('pathname', 1, function pathname(value) {
                if (debug) print('HTMLAnchorElement.pathname.set', value)
                mm.memory.private_data.get(this).pathname = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        search: {

            get: newFunc('search', 10, function search() {
                if (debug) print('HTMLAnchorElement.search.get')
                return mm.memory.private_data.get(this).search
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('search', 1, function search(value) {
                if (debug) print('HTMLAnchorElement.search.set', value)
                mm.memory.private_data.get(this).search = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        hash: {

            get: newFunc('hash', 10, function hash() {
                if (debug) print('HTMLAnchorElement.hash.get')
                return mm.memory.private_data.get(this).hash
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('hash', 1, function hash(value) {
                if (debug) print('HTMLAnchorElement.hash.set', value)
                mm.memory.private_data.get(this).hash = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        href: {

            get: newFunc('href', 10, function href() {
                if (debug) print('HTMLAnchorElement.href.get')
                return mm.memory.private_data.get(this).href
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('href', 1, function href(value) {
                if (debug) print('HTMLAnchorElement.href.set', value)
                mm.allNodes.get(this).attr('href', value)
                let a = value.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
                if (a === null){
                    return;
                }
                mm.memory.private_data.get(this).protocol = a[1] ? a[1] : "";
                mm.memory.private_data.get(this).host = a[2] ? a[2] : "";
                mm.memory.private_data.get(this).port = a[3] ? a[3] : "";
                mm.memory.private_data.get(this).pathname = a[4] ? a[4] : "";
                mm.memory.private_data.get(this).search = a[5] ? a[5] : "";
                mm.memory.private_data.get(this).hash = a[6] ? a[6] : "";
                mm.memory.private_data.get(this).hostname = mm.memory.private_data.get(this).host;
                mm.memory.private_data.get(this).origin = mm.memory.private_data.get(this).protocol + "//" + mm.memory.private_data.get(this).host + (mm.memory.private_data.get(this).port ? ":" + mm.memory.private_data.get(this).port : "");
            }, {set: true}), enumerable: true, configurable: true,


        },
        toString: {

            value: newFunc('toString', 10, function toString() {
                if (debug) print('HTMLAnchorElement.toString.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('HTMLAnchorElement.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
        hrefTranslate: {

            get: newFunc('hrefTranslate', 10, function hrefTranslate() {
                if (debug) print('HTMLAnchorElement.hrefTranslate.get')
                return mm.memory.private_data.get(this).hrefTranslate
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('hrefTranslate', 1, function hrefTranslate(value) {
                if (debug) print('HTMLAnchorElement.hrefTranslate.set', value)
                mm.memory.private_data.get(this).hrefTranslate = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        attributionSrc: {

            get: newFunc('attributionSrc', 10, function attributionSrc() {
                if (debug) print('HTMLAnchorElement.attributionSrc.get')
                return mm.memory.private_data.get(this).attributionSrc
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('attributionSrc', 1, function attributionSrc(value) {
                if (debug) print('HTMLAnchorElement.attributionSrc.set', value)
                mm.memory.private_data.get(this).attributionSrc = value

            }, {set: true}), enumerable: true, configurable: true,


        },
    })
    Object.setPrototypeOf(HTMLAnchorElement.prototype, HTMLElement.prototype);
    Object.setPrototypeOf(HTMLAnchorElement, HTMLElement);
    HTMLAnchorElement.__proto__ = HTMLElement.prototype

})();


if (proxy) HTMLAnchorElement = mm.proxy(HTMLAnchorElement, 'HTMLAnchorElement')
