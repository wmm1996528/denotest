


RTCPeerConnection = newFunc('RTCPeerConnection', 1, function RTCPeerConnection(configuration) {
    // if(new.target !== RTCPeerConnection){
    // 	throw new TypeError(`Failed to construct 'RTCPeerConnection': Please use the 'new' operator, this DOM object constructor cannot be called as a function.`)
    // }
    debugger;
    if (debug) print('new RTCPeerConnection', configuration)
    mm.memory.private_data.set(this, {
        configuration
    })
})

;(function () {
    const $safe_get_attribute = [
        'canTrickleIceCandidates', 'connectionState', 'currentLocalDescription', 'currentRemoteDescription', 'iceConnectionState', 'iceGatheringState', 'localDescription', 'onaddstream', 'onconnectionstatechange', 'ondatachannel',
        'onicecandidate', 'onicecandidateerror', 'oniceconnectionstatechange', 'onicegatheringstatechange', 'onnegotiationneeded', 'onremovestream', 'onsignalingstatechange', 'ontrack', 'pendingLocalDescription', 'pendingRemoteDescription',
        'remoteDescription', 'sctp', 'signalingState'
    ];
    const $safe_set_attribute = [
        'onaddstream', 'onconnectionstatechange', 'ondatachannel', 'onicecandidate', 'onicecandidateerror', 'oniceconnectionstatechange', 'onicegatheringstatechange', 'onnegotiationneeded', 'onremovestream', 'onsignalingstatechange', 'ontrack'];
    const $safe_func_attribute = [
        'addIceCandidate', 'addStream', 'addTrack', 'addTransceiver', 'close', 'createAnswer', 'createDTMFSender', 'createDataChannel', 'getConfiguration', 'getLocalStreams', 'getReceivers', 'getRemoteStreams', 'getSenders',
        'getStats', 'getTransceivers', 'removeStream', 'removeTrack', 'restartIce', 'setConfiguration', 'setRemoteDescription'
    ];

    RTCPeerConnection.prototype = {

        get localDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).localDescription, null);
            if (debug) print('Get', 'RTCPeerConnection', 'localDescription', arguments, result);
            return result;
        },
        get currentLocalDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).currentLocalDescription, null);
            if (debug) print('Get', 'RTCPeerConnection', 'currentLocalDescription', arguments, result);
            return result;
        },
        get pendingLocalDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).pendingLocalDescription, null);
            if (debug) print('Get', 'RTCPeerConnection', 'pendingLocalDescription', arguments, result);
            return result;
        },
        get remoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).remoteDescription, null);
            if (debug) print('Get', 'RTCPeerConnection', 'remoteDescription', arguments, result);
            return result;
        },

        get currentRemoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).currentRemoteDescription, null);
            if (debug) print('Get', 'RTCPeerConnection', 'currentRemoteDescription', arguments, result);
            return result;
        },
        get pendingRemoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).pendingRemoteDescription, null);
            if (debug) print('Get', 'RTCPeerConnection', 'pendingRemoteDescription', arguments, result);
            return result;
        },

        get signalingState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            return mm.abs(mm.memory.private_data.get(this).signalingState, "stable");
        },
        get iceGatheringState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).iceGatheringState, "new");
            if (debug) print('Get', 'RTCPeerConnection', 'iceGatheringState', arguments, result);
            return result;
        },
        get iceConnectionState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).iceConnectionState, "new");
            if (debug) print('Get', 'RTCPeerConnection', 'iceConnectionState', arguments, result);
            return result;
        },
        get connectionState() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).connectionState, "new");
            if (debug) print('Get', 'RTCPeerConnection', 'connectionState', arguments, result);
            return result;
        },
        get canTrickleIceCandidates() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).canTrickleIceCandidates, null);
            if (debug) print('Get', 'RTCPeerConnection', 'canTrickleIceCandidates', arguments, result);
            return result;
        },
        get onnegotiationneeded() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onnegotiationneeded, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onnegotiationneeded', arguments, result);
            return result;
        },
        set onnegotiationneeded(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onnegotiationneeded', arguments);
            mm.memory.private_data.get(this).onnegotiationneeded = value + "";
        },
        get onicecandidate() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onicecandidate, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onicecandidate', arguments, result);
            return result;
        },
        set onicecandidate(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onicecandidate', arguments);
            mm.memory.private_data.get(this).onicecandidate = value;
        },
        get onsignalingstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onsignalingstatechange, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onsignalingstatechange', arguments, result);
            return result;
        },
        set onsignalingstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onsignalingstatechange', arguments);
            mm.memory.private_data.get(this).onsignalingstatechange = value + "";
        },
        get oniceconnectionstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).oniceconnectionstatechange, null);
            if (debug) print('Get', 'RTCPeerConnection', 'oniceconnectionstatechange', arguments, result);
            return result;
        },
        set oniceconnectionstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'oniceconnectionstatechange', arguments);
            mm.memory.private_data.get(this).oniceconnectionstatechange = value + "";
        },
        get onconnectionstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onconnectionstatechange, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onconnectionstatechange', arguments, result);
            return result;
        },
        set onconnectionstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onconnectionstatechange', arguments);
            mm.memory.private_data.get(this).onconnectionstatechange = value + "";
        },
        get onicegatheringstatechange() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onicegatheringstatechange, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onicegatheringstatechange', arguments, result);
            return result;
        },
        set onicegatheringstatechange(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onicegatheringstatechange', arguments);
            mm.memory.private_data.get(this).onicegatheringstatechange = value + "";
        },
        get onicecandidateerror() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onicecandidateerror, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onicecandidateerror', arguments, result);
            return result;
        },
        set onicecandidateerror(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onicecandidateerror', arguments);
            mm.memory.private_data.get(this).onicecandidateerror = value + "";
        },
        get ontrack() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).ontrack, null);
            if (debug) print('Get', 'RTCPeerConnection', 'ontrack', arguments, result);
            return result;
        },
        set ontrack(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'ontrack', arguments);
            mm.memory.private_data.get(this).ontrack = value + "";
        },
        get sctp() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).sctp, null);
            if (debug) print('Get', 'RTCPeerConnection', 'sctp', arguments, result);
            return result;
        },
        get ondatachannel() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).ondatachannel, null);
            if (debug) print('Get', 'RTCPeerConnection', 'ondatachannel', arguments, result);
            return result;
        },
        set ondatachannel(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'ondatachannel', arguments);
            mm.memory.private_data.get(this).ondatachannel = value + "";
        },
        get onaddstream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onaddstream, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onaddstream', arguments, result);
            return result;
        },
        set onaddstream(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onaddstream', arguments);
            mm.memory.private_data.get(this).onaddstream = value + "";
        },
        get onremovestream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = mm.abs(mm.memory.private_data.get(this).onremovestream, null);
            if (debug) print('Get', 'RTCPeerConnection', 'onremovestream', arguments, result);
            return result;
        },
        set onremovestream(value) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Set', 'RTCPeerConnection', 'onremovestream', arguments);
            mm.memory.private_data.get(this).onremovestream = value + "";
        },


        addIceCandidate() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'addIceCandidate', arguments, result);
            return result;
        },
        addStream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'addStream', arguments, result);
            return result;
        },
        addTrack() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'addTrack', arguments, result);
            return result;
        },
        addTransceiver() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'addTransceiver', arguments, result);
            return result;
        },
        close() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'close', arguments, result);
            return result;
        },
        createAnswer() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'createAnswer', arguments, result);
            return result;
        },
        createDTMFSender() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'createDTMFSender', arguments, result);
            return result;
        },
        createDataChannel(label) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (label === undefined) {
                throw new TypeError(`Failed to execute 'createDataChannel' on 'RTCPeerConnection': 1 argument required, but only 0 present.`)
            }
            let result = new RTCDataChannel(label);
            if (debug) print('Func', 'RTCPeerConnection', 'createDataChannel', arguments, result);
            return result;
        },
        createOffer(successCallback, failureCallback) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("createOffer, Illegal constructor");
            }
            ;
            if (debug) print('Func', 'RTCPeerConnection', 'createOffer', arguments);
            let _that = this;
            return new Promise(function (resolve, reject) {
                debugger;
                let desc = new RTCSessionDescription('offer', 'v=0\n' +
                    'o=- 1281464457370239457 2 IN IP4 127.0.0.1\n' +
                    's=-\n' +
                    't=0 0\n' +
                    'a=group:BUNDLE 0\n' +
                    'a=extmap-allow-mixed\n' +
                    'a=msid-semantic: WMS\n' +
                    'm=application 9 UDP/DTLS/SCTP webrtc-datachannel\n' +
                    'c=IN IP4 0.0.0.0\n' +
                    'a=ice-ufrag:X6Dy\n' +
                    'a=ice-pwd:4NdkxQjtdoRLHlkzosouCr7H\n' +
                    'a=ice-options:trickle\n' +
                    'a=fingerprint:sha-256 AA:89:C3:39:2C:27:B4:AC:93:E9:EB:31:30:3A:74:A4:B8:E5:98:35:E0:0E:6A:3D:A6:D8:95:C1:5B:01:EE:BE\n' +
                    'a=setup:actpass\n' +
                    'a=mid:0\n' +
                    'a=sctp-port:5000\n' +
                    'a=max-message-size:262144');
                mm.memory.private_data.get(_that).localDescription = desc;
                resolve(desc)
                // mm.memory.private_data.get(_that).onicecandidate()
            });
            // return {
            //     then: function (resolve, reject) {
            //         print('resolve', resolve)
            //
            //         // todo
            //         resolve(desc)
            //     }
            // }
            // return new Promise(resolve => {
            //     debugger;
            //     print('resolve', resolve)
            //     return function (offer) {
            //         debugger
            //         print('createOffer',offer)
            //         resolve(new RTCSessionDescription(offer, 'v=0\n' +
            //             'o=- 1281464457370239457 2 IN IP4 127.0.0.1\n' +
            //             's=-\n' +
            //             't=0 0\n' +
            //             'a=group:BUNDLE 0\n' +
            //             'a=extmap-allow-mixed\n' +
            //             'a=msid-semantic: WMS\n' +
            //             'm=application 9 UDP/DTLS/SCTP webrtc-datachannel\n' +
            //             'c=IN IP4 0.0.0.0\n' +
            //             'a=ice-ufrag:X6Dy\n' +
            //             'a=ice-pwd:4NdkxQjtdoRLHlkzosouCr7H\n' +
            //             'a=ice-options:trickle\n' +
            //             'a=fingerprint:sha-256 AA:89:C3:39:2C:27:B4:AC:93:E9:EB:31:30:3A:74:A4:B8:E5:98:35:E0:0E:6A:3D:A6:D8:95:C1:5B:01:EE:BE\n' +
            //             'a=setup:actpass\n' +
            //             'a=mid:0\n' +
            //             'a=sctp-port:5000\n' +
            //             'a=max-message-size:262144'))
            //     }
            // })
        },
        getConfiguration() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'getConfiguration', arguments, result);
            return result;
        },
        getLocalStreams() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'getLocalStreams', arguments, result);
            return result;
        },
        getReceivers() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'getReceivers', arguments, result);
            return result;
        },
        getRemoteStreams() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'getRemoteStreams', arguments, result);
            return result;
        },
        getSenders() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'getSenders', arguments, result);
            return result;
        },
        getStats() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'getStats', arguments, result);
            return result;
        },
        getTransceivers() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'getTransceivers', arguments, result);
            return result;
        },

        removeStream() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'removeStream', arguments, result);
            return result;
        },
        removeTrack() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'removeTrack', arguments, result);
            return result;
        },
        restartIce() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'restartIce', arguments, result);
            return result;
        },
        setConfiguration() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'setConfiguration', arguments, result);
            return result;
        },


        async setLocalDescription(session) {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            this.localDescription = session;
            this.pendingLocalDescription = session;
            let result = Promise.resolve(this);

            if (debug) print('Func', 'RTCPeerConnection', 'async setLocalDescription', arguments, result);
            let candidate = new RTCIceCandidate()
            debugger;
            this.onicecandidate(new RTCPeerConnectionIceEvent('offer', candidate))
            return result;
        },
        setRemoteDescription() {
            if (!RTCPeerConnection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            let result = undefined;
            if (debug) print('Func', 'RTCPeerConnection', 'setRemoteDescription', arguments, result);
            return result;
        },
        constructor() {
            if (debug) print('Func', 'RTCPeerConnection', 'constructor', arguments, result);

        }


    };

    // mm.rename(RTCPeerConnection.prototype, "RTCPeerConnection");
    // mm.safeDescriptor_addConstructor(RTCPeerConnection);
    mm.safe_Objattribute(RTCPeerConnection, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(RTCPeerConnection.prototype, EventTarget.prototype);
    Object.setPrototypeOf(RTCPeerConnection, EventTarget);

})();

// 一个全局属性
webkitRTCPeerConnection = RTCPeerConnection;


print(Object.getOwnPropertyNames(RTCPeerConnection.prototype) + '')
