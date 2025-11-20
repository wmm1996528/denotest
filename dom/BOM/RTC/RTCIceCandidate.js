RTCIceCandidate = newFunc('RTCIceCandidate', 1, function RTCIceCandidate(candidateInitDict) {
    // if (createObj_key !== mm.memory.$createObj_key) {
    //     throw new TypeError("Illegal constructor");
    // }
    // todo 随机初始化一个

    let foundation = parseInt(Math.random() * 2430043322 / 2 + 1430043322);
    let priority = parseInt(Math.random() * 2430043322 / 2 + 1430043322);
    let port = parseInt(Math.random() * 5000 + 60199);
    let t4 = parseInt(Math.random() * 8 + 1);
    let address = `${parseInt(Math.random() * 220 + 1)}.${parseInt(Math.random() * 220 + 1)}.${parseInt(Math.random() * 220 + 1)}.${parseInt(Math.random() * 220 + 1)}`
    let component = 'rtp';
    let usernameFragment = function () {
        let strs = 'abcderfASDHJKWPL1234567890';
        let res = '';
        for (let i = 0; i < 4; i++) {
            res += strs.charAt(parseInt(strs.length * Math.random()))
        }
        return res
    }()

    let protocol = 'udp';
    let relatedAddress = null;
    let relatedPort = null;
    let sdpMLineIndex = 0;
    let sdpMid = '0';
    let tcpType = null;
    let type = 'host';
    if (keepRandom === true) {
        // todo
        t4 = 10;
        address = '192.168.0.103';
        foundation = '1446033738';
        port = 54354;
        priority = 2113937151;
        usernameFragment = 'f3GC';
    }
    mm.memory.private_data.set(this, {
        relatedAddress, relatedPort, sdpMLineIndex,
        type, tcpType,
        address: address,
        port: port, foundation: foundation,
        component: component, priority: priority,
        protocol: protocol,
        usernameFragment,
        "candidate": `candidate:${foundation} 1 ${protocol} ${priority} ${address} ${port} typ ${type} generation ${sdpMid} ufrag ${usernameFragment} network-cost ${t4}`,
    })
})

;(function () {
    const $safe_get_attribute = ['address', 'candidate', 'component', 'foundation', 'port', 'priority', 'protocol', 'relatedAddress', 'relatedPort', 'sdpMLineIndex', 'sdpMid', 'tcpType', 'type', 'usernameFragment'];
    const $safe_set_attribute = [];
    const $safe_func_attribute = ['toJSON'];

    RTCIceCandidate.prototype = {
        get candidate() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).candidate, "candidate:1840965416 1 udp 2122260223 192.168.0.103 49325 typ host generation 0 ufrag o6U2 network-id 1 network-cost 10");
            // if (debug)
            print('Get', 'RTCIceCandidate', 'candidate', arguments, result);
            return result;
        },
        get sdpMid() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).sdpMid, "1");
            if (debug) print('Get', 'RTCIceCandidate', 'sdpMid', arguments, result);
            return result;
        },
        get sdpMLineIndex() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).sdpMLineIndex, 0);
            if (debug) print('Get', 'RTCIceCandidate', 'sdpMLineIndex', arguments, result);
            return result;
        },
        get foundation() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).foundation, "1840965416");
            if (debug) print('Get', 'RTCIceCandidate', 'foundation', arguments, result);
            return result;
        },
        get component() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).component, "rtp");
            if (debug) print('Get', 'RTCIceCandidate', 'component', arguments, result);
            return result;
        },
        get priority() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).priority, 2122260223);
            if (debug) print('Get', 'RTCIceCandidate', 'priority', arguments, result);
            return result;
        },
        get address() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).address, "192.168.0.103");
            if (debug) print('Get', 'RTCIceCandidate', 'address', arguments, result);
            return result;
        },
        get protocol() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).protocol, "udp");
            if (debug) print('Get', 'RTCIceCandidate', 'protocol', arguments, result);
            return result;
        },
        get port() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).port, 49325);
            if (debug) print('Get', 'RTCIceCandidate', 'port', arguments, result);
            return result;
        },
        get type() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).type, "host");
            if (debug) print('Get', 'RTCIceCandidate', 'type', arguments, result);
            return result;
        },
        get tcpType() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).tcpType, null);
            if (debug) print('Get', 'RTCIceCandidate', 'tcpType', arguments, result);
            return result;
        },
        get relatedAddress() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).relatedAddress, null);
            if (debug) print('Get', 'RTCIceCandidate', 'relatedAddress', arguments, result);
            return result;
        },
        get relatedPort() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).relatedPort, null);
            if (debug) print('Get', 'RTCIceCandidate', 'relatedPort', arguments, result);
            return result;
        },
        get usernameFragment() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).usernameFragment, "o6U2");
            if (debug) print('Get', 'RTCIceCandidate', 'usernameFragment', arguments, result);
            return result;
        },
        get relayProtocol() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).relayProtocol, null);
            if (debug) print('Get', 'RTCIceCandidate', 'relayProtocol', arguments, result);
            return result;
        },
        get url(){
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).url, null);
            if (debug) print('Get', 'RTCIceCandidate', 'url', arguments, result);
            return result;
        },
        toJSON() {
            if (!RTCIceCandidate.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCIceCandidate', 'toJSON', arguments, result);
            return result;
        },
        constructor(){

        }
    }
    // mm.rename(RTCIceCandidate.prototype, "RTCIceCandidate");
    // mm.safeDescriptor_addConstructor(RTCIceCandidate);
    mm.safe_Objattribute(RTCIceCandidate, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

})();

