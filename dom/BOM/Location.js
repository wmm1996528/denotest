Location = newFunc('Location', 1, function (){print('Location.call');mm.memory.private_data.set(this, {})});



; delete Location.prototype.constructor;
;
Object.defineProperties(Location.prototype, {
    [Symbol.toStringTag]:{
        value:'Location'
    },

'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!Location.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('Location.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})
var location = {};

;(function () {
    // mm.rename(Location.prototype, "Location");
    // mm.safeDescriptor_addConstructor(Location);


    const $safe_get_attribute = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];
    const $safe_set_attribute = ['hash', 'host', 'hostname', 'href', 'origin', 'pathname', 'port', 'protocol', 'search'];
    const $safe_func_attribute = ['ancestorOrigins', 'assign', 'reload', 'replace', 'toString'];
    let $attribute_map = {
        hash: "",
        host: "",
        hostname: "",
        href: "",
        origin: "",
        pathname: "",
        port: "",
        protocol: "",
        search: ""
    };
// 'ancestorOrigins,href,origin,protocol,host,hostname,port,pathname,search,hash,assign,reload,replace,toString'
    location = {
        ancestorOrigins() {
            let result = new class DOMStringList {
            };
            if (debug) print('Func', 'Location', 'ancestorOrigins', arguments, result);
            return result;
        },
        get href() {
            let result = $attribute_map.href
            if (debug) print('Get', 'Location', 'href', arguments, result);
            return result
        },
        set href(value) {
            if (debug) print('Set', 'Location', 'href', arguments);
            let a = value.match(/([^:]+:)\/\/([^/:?#]+):?(\d+)?([^?#]*)?(\?[^#]*)?(#.*)?/);
            if (a === null ||  a.length < 2){
                $attribute_map.href = value;
                return
            }
            location.protocol = a[1] ? a[1] : "";
            location.host = a[2] ? a[2] : "";
            location.port = a[3] ? a[3] : "";
            location.pathname = a[4] ? a[4] : "";
            location.search = a[5] ? a[5] : "";
            location.hash = a[6] ? a[6] : "";
            location.hostname = location.host;
            location.origin = location.protocol + "//" + location.host + (location.port ? ":" + location.port : "");
            $attribute_map.href = value;
        },
        get origin() {
            let result = $attribute_map.origin;
            if (debug) print('Get', 'Location', 'origin', arguments, result);
            return result
        },
        set origin(value) {
            if (debug) print('Set', 'Location', 'origin', arguments);
            $attribute_map.origin = value
        },
        get protocol() {
            let result = $attribute_map.protocol;
            if (debug) print('Get', 'Location', 'protocol', arguments, result);
            return result;
        },
        set protocol(value) {
            if (debug) print('Set', 'Location', 'protocol', arguments);
            $attribute_map.protocol = value
        },
        get host() {
            let result = $attribute_map.host
            if (debug) print('Get', 'Location', 'host', arguments, result);
            return result
        },
        set host(value) {
            if (debug) print('Set', 'Location', 'host', arguments);
            $attribute_map.host = value
        },


        get hostname() {
            let result = $attribute_map.hostname;
            if (debug) print('Get', 'Location', 'hostname', arguments, result);
            return result
        },
        set hostname(value) {
            if (debug) print('Set', 'Location', 'hostname', arguments);
            $attribute_map.hostname = value
        },

        get port() {
            let result = $attribute_map.port;
            if (debug) print('Get', 'Location', 'port', arguments, result);
            return result
        },
        set port(value) {
            if (debug) print('Set', 'Location', 'port', arguments);
            $attribute_map.port = value
        },

        get pathname() {
            let result = $attribute_map.pathname
            if (debug) print('Get', 'Location', 'pathname', arguments, result);
            return result
        },
        set pathname(value) {
            if (debug) print('Set', 'Location', 'pathname', arguments);
            $attribute_map.pathname = value
        },

        get search() {
            let result = $attribute_map.search;
            if (debug) print('Get', 'Location', 'search', arguments, result);
            return result
        },
        set search(value) {
            if (debug) print('Set', 'Location', 'search', arguments);
            $attribute_map.search = value
        },
        get hash() {
            let result = $attribute_map.hash;
            if (debug) print('Get', 'Location', 'hash', arguments, result);
            return result
        },
        set hash(value) {
            if (debug) print('Set', 'Location', 'hash', arguments);
            $attribute_map.hash = value
        },

        assign() {
            let result = undefined;
            if (debug) print('Func', 'Location', 'assign', arguments, result);
            return result;
        },


        reload() {
            let result = undefined;
            if (debug) print('Func', 'Location', 'reload', arguments, result);
            return result;
        },
        replace() {
            let result = undefined;
            if (debug) print('Func', 'Location', 'replace', arguments, result);
            return result;
        },

        toString() {
            let result = location.href;
            if (debug) print('Func', 'Location', 'toString', arguments, result);
            return result
        }
    };
    // 添加两个特殊的属性
    Object.defineProperty(location, 'valueOf', {
        value: valueOf,
        configurable: false,
        enumerable: false,
        writable: false
    });
    Object.defineProperties(location, {
        [Symbol.toPrimitive]: {
            value: undefined,
            configurable: false,
            enumerable: false,
            writable: false
        }
    });

    // for (let key of $safe_get_attribute) {
    //     Object.defineProperty(location, key, {
    //         configurable: false,
    //         enumerable: true
    //     });
    //     mm.safefunction(Object.getOwnPropertyDescriptor(location, key)['get']);
    //     mm.safefunction(Object.getOwnPropertyDescriptor(location, key)['set']);
    // };

    // for (let key of $safe_func_attribute) {
    //     Object.defineProperty(location, key, {
    //         value: location[key],
    //         configurable: false,
    //         enumerable: true,
    //         writable: false
    //     });
    //     mm.safefunction(Object.getOwnPropertyDescriptor(location, key)['value'])
    // }
    Object.setPrototypeOf(location, Location.prototype);

    // 初始化用户配置
    // location.href = mm.default_envs['location']['href'];
})()

mm.location = location
origin = location.href