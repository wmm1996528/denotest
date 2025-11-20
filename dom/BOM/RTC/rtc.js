
;RTCTrackEvent = newFunc('RTCTrackEvent', 1, function (){print('RTCTrackEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCTrackEvent.prototype, {
receiver: {

                  get: newFunc('receiver', 10, function (){
            let res =  mm.memory.private_data.get(this).receiver;
            if (debug)print('RTCTrackEvent.receiver.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
track: {

                  get: newFunc('track', 10, function (){
            let res =  mm.memory.private_data.get(this).track;
            if (debug)print('RTCTrackEvent.track.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
streams: {

                  get: newFunc('streams', 10, function (){
            let res =  mm.memory.private_data.get(this).streams;
            if (debug)print('RTCTrackEvent.streams.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
transceiver: {

                  get: newFunc('transceiver', 10, function (){
            let res =  mm.memory.private_data.get(this).transceiver;
            if (debug)print('RTCTrackEvent.transceiver.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCTrackEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCStatsReport = newFunc('RTCStatsReport', 1, function (){print('RTCStatsReport.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCStatsReport.prototype, {
size: {

                  get: newFunc('size', 10, function (){
            let res =  mm.memory.private_data.get(this).size;
            if (debug)print('RTCStatsReport.size.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
entries: {

            value: newFunc('entries', 10, function () {
                    if (debug)print('RTCStatsReport.entries.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
forEach: {

            value: newFunc('forEach', 10, function () {
                    if (debug)print('RTCStatsReport.forEach.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
get: {

            value: newFunc('get', 10, function () {
                    if (debug)print('RTCStatsReport.get.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
has: {

            value: newFunc('has', 10, function () {
                    if (debug)print('RTCStatsReport.has.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
keys: {

            value: newFunc('keys', 10, function () {
                    if (debug)print('RTCStatsReport.keys.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
values: {

            value: newFunc('values', 10, function () {
                    if (debug)print('RTCStatsReport.values.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCStatsReport.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCSctpTransport = newFunc('RTCSctpTransport', 1, function (){print('RTCSctpTransport.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCSctpTransport.prototype, {
transport: {

                  get: newFunc('transport', 10, function (){
            let res =  mm.memory.private_data.get(this).transport;
            if (debug)print('RTCSctpTransport.transport.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
state: {

                  get: newFunc('state', 10, function (){
            let res =  mm.memory.private_data.get(this).state;
            if (debug)print('RTCSctpTransport.state.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
maxMessageSize: {

                  get: newFunc('maxMessageSize', 10, function (){
            let res =  mm.memory.private_data.get(this).maxMessageSize;
            if (debug)print('RTCSctpTransport.maxMessageSize.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
maxChannels: {

                  get: newFunc('maxChannels', 10, function (){
            let res =  mm.memory.private_data.get(this).maxChannels;
            if (debug)print('RTCSctpTransport.maxChannels.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onstatechange: {

                  get: newFunc('onstatechange', 10, function (){
            let res =  mm.memory.private_data.get(this).onstatechange;
            if (debug)print('RTCSctpTransport.onstatechange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onstatechange', 1, function (value){
                if (debug)print('RTCSctpTransport.onstatechange.set', value)
            mm.memory.private_data.get(this).onstatechange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCSctpTransport.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCRtpTransceiver = newFunc('RTCRtpTransceiver', 1, function (){print('RTCRtpTransceiver.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCRtpTransceiver.prototype, {
mid: {

                  get: newFunc('mid', 10, function (){
            let res =  mm.memory.private_data.get(this).mid;
            if (debug)print('RTCRtpTransceiver.mid.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
sender: {

                  get: newFunc('sender', 10, function (){
            let res =  mm.memory.private_data.get(this).sender;
            if (debug)print('RTCRtpTransceiver.sender.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
receiver: {

                  get: newFunc('receiver', 10, function (){
            let res =  mm.memory.private_data.get(this).receiver;
            if (debug)print('RTCRtpTransceiver.receiver.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
stopped: {

                  get: newFunc('stopped', 10, function (){
            let res =  mm.memory.private_data.get(this).stopped;
            if (debug)print('RTCRtpTransceiver.stopped.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
direction: {

                  get: newFunc('direction', 10, function (){
            let res =  mm.memory.private_data.get(this).direction;
            if (debug)print('RTCRtpTransceiver.direction.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('direction', 1, function (value){
                if (debug)print('RTCRtpTransceiver.direction.set', value)
            mm.memory.private_data.get(this).direction = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
currentDirection: {

                  get: newFunc('currentDirection', 10, function (){
            let res =  mm.memory.private_data.get(this).currentDirection;
            if (debug)print('RTCRtpTransceiver.currentDirection.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
getHeaderExtensionsToNegotiate: {

            value: newFunc('getHeaderExtensionsToNegotiate', 10, function () {
                    if (debug)print('RTCRtpTransceiver.getHeaderExtensionsToNegotiate.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getNegotiatedHeaderExtensions: {

            value: newFunc('getNegotiatedHeaderExtensions', 10, function () {
                    if (debug)print('RTCRtpTransceiver.getNegotiatedHeaderExtensions.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
setCodecPreferences: {

            value: newFunc('setCodecPreferences', 10, function () {
                    if (debug)print('RTCRtpTransceiver.setCodecPreferences.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
setHeaderExtensionsToNegotiate: {

            value: newFunc('setHeaderExtensionsToNegotiate', 10, function () {
                    if (debug)print('RTCRtpTransceiver.setHeaderExtensionsToNegotiate.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
stop: {

            value: newFunc('stop', 10, function () {
                    if (debug)print('RTCRtpTransceiver.stop.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCRtpTransceiver.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCRtpSender = newFunc('RTCRtpSender', 1, function (){print('RTCRtpSender.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCRtpSender.prototype, {
track: {

                  get: newFunc('track', 10, function (){
            let res =  mm.memory.private_data.get(this).track;
            if (debug)print('RTCRtpSender.track.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
transport: {

                  get: newFunc('transport', 10, function (){
            let res =  mm.memory.private_data.get(this).transport;
            if (debug)print('RTCRtpSender.transport.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
rtcpTransport: {

                  get: newFunc('rtcpTransport', 10, function (){
            let res =  mm.memory.private_data.get(this).rtcpTransport;
            if (debug)print('RTCRtpSender.rtcpTransport.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
dtmf: {

                  get: newFunc('dtmf', 10, function (){
            let res =  mm.memory.private_data.get(this).dtmf;
            if (debug)print('RTCRtpSender.dtmf.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
createEncodedStreams: {

            value: newFunc('createEncodedStreams', 10, function () {
                    if (debug)print('RTCRtpSender.createEncodedStreams.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getParameters: {

            value: newFunc('getParameters', 10, function () {
                    if (debug)print('RTCRtpSender.getParameters.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getStats: {

            value: newFunc('getStats', 10, function () {
                    if (debug)print('RTCRtpSender.getStats.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
replaceTrack: {

            value: newFunc('replaceTrack', 10, function () {
                    if (debug)print('RTCRtpSender.replaceTrack.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
setParameters: {

            value: newFunc('setParameters', 10, function () {
                    if (debug)print('RTCRtpSender.setParameters.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
setStreams: {

            value: newFunc('setStreams', 10, function () {
                    if (debug)print('RTCRtpSender.setStreams.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCRtpSender.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCRtpReceiver = newFunc('RTCRtpReceiver', 1, function (){print('RTCRtpReceiver.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCRtpReceiver.prototype, {
track: {

                  get: newFunc('track', 10, function (){
            let res =  mm.memory.private_data.get(this).track;
            if (debug)print('RTCRtpReceiver.track.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
transport: {

                  get: newFunc('transport', 10, function (){
            let res =  mm.memory.private_data.get(this).transport;
            if (debug)print('RTCRtpReceiver.transport.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
rtcpTransport: {

                  get: newFunc('rtcpTransport', 10, function (){
            let res =  mm.memory.private_data.get(this).rtcpTransport;
            if (debug)print('RTCRtpReceiver.rtcpTransport.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
playoutDelayHint: {

                  get: newFunc('playoutDelayHint', 10, function (){
            let res =  mm.memory.private_data.get(this).playoutDelayHint;
            if (debug)print('RTCRtpReceiver.playoutDelayHint.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('playoutDelayHint', 1, function (value){
                if (debug)print('RTCRtpReceiver.playoutDelayHint.set', value)
            mm.memory.private_data.get(this).playoutDelayHint = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
createEncodedStreams: {

            value: newFunc('createEncodedStreams', 10, function () {
                    if (debug)print('RTCRtpReceiver.createEncodedStreams.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getContributingSources: {

            value: newFunc('getContributingSources', 10, function () {
                    if (debug)print('RTCRtpReceiver.getContributingSources.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getParameters: {

            value: newFunc('getParameters', 10, function () {
                    if (debug)print('RTCRtpReceiver.getParameters.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getStats: {

            value: newFunc('getStats', 10, function () {
                    if (debug)print('RTCRtpReceiver.getStats.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getSynchronizationSources: {

            value: newFunc('getSynchronizationSources', 10, function () {
                    if (debug)print('RTCRtpReceiver.getSynchronizationSources.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
jitterBufferTarget: {

                  get: newFunc('jitterBufferTarget', 10, function (){
            let res =  mm.memory.private_data.get(this).jitterBufferTarget;
            if (debug)print('RTCRtpReceiver.jitterBufferTarget.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('jitterBufferTarget', 1, function (value){
                if (debug)print('RTCRtpReceiver.jitterBufferTarget.set', value)
            mm.memory.private_data.get(this).jitterBufferTarget = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCRtpReceiver.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCPeerConnectionIceErrorEvent = newFunc('RTCPeerConnectionIceErrorEvent', 1, function (){print('RTCPeerConnectionIceErrorEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCPeerConnectionIceErrorEvent.prototype, {
address: {

                  get: newFunc('address', 10, function (){
            let res =  mm.memory.private_data.get(this).address;
            if (debug)print('RTCPeerConnectionIceErrorEvent.address.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
port: {

                  get: newFunc('port', 10, function (){
            let res =  mm.memory.private_data.get(this).port;
            if (debug)print('RTCPeerConnectionIceErrorEvent.port.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
hostCandidate: {

                  get: newFunc('hostCandidate', 10, function (){
            let res =  mm.memory.private_data.get(this).hostCandidate;
            if (debug)print('RTCPeerConnectionIceErrorEvent.hostCandidate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
url: {

                  get: newFunc('url', 10, function (){
            let res =  mm.memory.private_data.get(this).url;
            if (debug)print('RTCPeerConnectionIceErrorEvent.url.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
errorCode: {

                  get: newFunc('errorCode', 10, function (){
            let res =  mm.memory.private_data.get(this).errorCode;
            if (debug)print('RTCPeerConnectionIceErrorEvent.errorCode.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
errorText: {

                  get: newFunc('errorText', 10, function (){
            let res =  mm.memory.private_data.get(this).errorText;
            if (debug)print('RTCPeerConnectionIceErrorEvent.errorText.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCPeerConnectionIceErrorEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCIceTransport = newFunc('RTCIceTransport', 1, function (){print('RTCIceTransport.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCIceTransport.prototype, {
role: {

                  get: newFunc('role', 10, function (){
            let res =  mm.memory.private_data.get(this).role;
            if (debug)print('RTCIceTransport.role.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
state: {

                  get: newFunc('state', 10, function (){
            let res =  mm.memory.private_data.get(this).state;
            if (debug)print('RTCIceTransport.state.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
gatheringState: {

                  get: newFunc('gatheringState', 10, function (){
            let res =  mm.memory.private_data.get(this).gatheringState;
            if (debug)print('RTCIceTransport.gatheringState.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onstatechange: {

                  get: newFunc('onstatechange', 10, function (){
            let res =  mm.memory.private_data.get(this).onstatechange;
            if (debug)print('RTCIceTransport.onstatechange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onstatechange', 1, function (value){
                if (debug)print('RTCIceTransport.onstatechange.set', value)
            mm.memory.private_data.get(this).onstatechange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
ongatheringstatechange: {

                  get: newFunc('ongatheringstatechange', 10, function (){
            let res =  mm.memory.private_data.get(this).ongatheringstatechange;
            if (debug)print('RTCIceTransport.ongatheringstatechange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('ongatheringstatechange', 1, function (value){
                if (debug)print('RTCIceTransport.ongatheringstatechange.set', value)
            mm.memory.private_data.get(this).ongatheringstatechange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onselectedcandidatepairchange: {

                  get: newFunc('onselectedcandidatepairchange', 10, function (){
            let res =  mm.memory.private_data.get(this).onselectedcandidatepairchange;
            if (debug)print('RTCIceTransport.onselectedcandidatepairchange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onselectedcandidatepairchange', 1, function (value){
                if (debug)print('RTCIceTransport.onselectedcandidatepairchange.set', value)
            mm.memory.private_data.get(this).onselectedcandidatepairchange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
getLocalCandidates: {

            value: newFunc('getLocalCandidates', 10, function () {
                    if (debug)print('RTCIceTransport.getLocalCandidates.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getLocalParameters: {

            value: newFunc('getLocalParameters', 10, function () {
                    if (debug)print('RTCIceTransport.getLocalParameters.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getRemoteCandidates: {

            value: newFunc('getRemoteCandidates', 10, function () {
                    if (debug)print('RTCIceTransport.getRemoteCandidates.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getRemoteParameters: {

            value: newFunc('getRemoteParameters', 10, function () {
                    if (debug)print('RTCIceTransport.getRemoteParameters.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getSelectedCandidatePair: {

            value: newFunc('getSelectedCandidatePair', 10, function () {
                    if (debug)print('RTCIceTransport.getSelectedCandidatePair.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCIceTransport.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCErrorEvent = newFunc('RTCErrorEvent', 1, function (){print('RTCErrorEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCErrorEvent.prototype, {
error: {

                  get: newFunc('error', 10, function (){
            let res =  mm.memory.private_data.get(this).error;
            if (debug)print('RTCErrorEvent.error.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCErrorEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCError = newFunc('RTCError', 1, function (){print('RTCError.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCError.prototype, {
errorDetail: {

                  get: newFunc('errorDetail', 10, function (){
            let res =  mm.memory.private_data.get(this).errorDetail;
            if (debug)print('RTCError.errorDetail.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
sdpLineNumber: {

                  get: newFunc('sdpLineNumber', 10, function (){
            let res =  mm.memory.private_data.get(this).sdpLineNumber;
            if (debug)print('RTCError.sdpLineNumber.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
httpRequestStatusCode: {

                  get: newFunc('httpRequestStatusCode', 10, function (){
            let res =  mm.memory.private_data.get(this).httpRequestStatusCode;
            if (debug)print('RTCError.httpRequestStatusCode.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
sctpCauseCode: {

                  get: newFunc('sctpCauseCode', 10, function (){
            let res =  mm.memory.private_data.get(this).sctpCauseCode;
            if (debug)print('RTCError.sctpCauseCode.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
receivedAlert: {

                  get: newFunc('receivedAlert', 10, function (){
            let res =  mm.memory.private_data.get(this).receivedAlert;
            if (debug)print('RTCError.receivedAlert.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
sentAlert: {

                  get: newFunc('sentAlert', 10, function (){
            let res =  mm.memory.private_data.get(this).sentAlert;
            if (debug)print('RTCError.sentAlert.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCError.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCEncodedVideoFrame = newFunc('RTCEncodedVideoFrame', 1, function (){print('RTCEncodedVideoFrame.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCEncodedVideoFrame.prototype, {
type: {

                  get: newFunc('type', 10, function (){
            let res =  mm.memory.private_data.get(this).type;
            if (debug)print('RTCEncodedVideoFrame.type.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
timestamp: {

                  get: newFunc('timestamp', 10, function (){
            let res =  mm.memory.private_data.get(this).timestamp;
            if (debug)print('RTCEncodedVideoFrame.timestamp.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
data: {

                  get: newFunc('data', 10, function (){
            let res =  mm.memory.private_data.get(this).data;
            if (debug)print('RTCEncodedVideoFrame.data.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('data', 1, function (value){
                if (debug)print('RTCEncodedVideoFrame.data.set', value)
            mm.memory.private_data.get(this).data = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
getMetadata: {

            value: newFunc('getMetadata', 10, function () {
                    if (debug)print('RTCEncodedVideoFrame.getMetadata.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
toString: {

            value: newFunc('toString', 10, function () {
                    if (debug)print('RTCEncodedVideoFrame.toString.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCEncodedVideoFrame.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCEncodedAudioFrame = newFunc('RTCEncodedAudioFrame', 1, function (){print('RTCEncodedAudioFrame.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCEncodedAudioFrame.prototype, {
timestamp: {

                  get: newFunc('timestamp', 10, function (){
            let res =  mm.memory.private_data.get(this).timestamp;
            if (debug)print('RTCEncodedAudioFrame.timestamp.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
data: {

                  get: newFunc('data', 10, function (){
            let res =  mm.memory.private_data.get(this).data;
            if (debug)print('RTCEncodedAudioFrame.data.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('data', 1, function (value){
                if (debug)print('RTCEncodedAudioFrame.data.set', value)
            mm.memory.private_data.get(this).data = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
getMetadata: {

            value: newFunc('getMetadata', 10, function () {
                    if (debug)print('RTCEncodedAudioFrame.getMetadata.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
toString: {

            value: newFunc('toString', 10, function () {
                    if (debug)print('RTCEncodedAudioFrame.toString.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCEncodedAudioFrame.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCDtlsTransport = newFunc('RTCDtlsTransport', 1, function (){print('RTCDtlsTransport.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCDtlsTransport.prototype, {
iceTransport: {

                  get: newFunc('iceTransport', 10, function (){
            let res =  mm.memory.private_data.get(this).iceTransport;
            if (debug)print('RTCDtlsTransport.iceTransport.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
state: {

                  get: newFunc('state', 10, function (){
            let res =  mm.memory.private_data.get(this).state;
            if (debug)print('RTCDtlsTransport.state.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onstatechange: {

                  get: newFunc('onstatechange', 10, function (){
            let res =  mm.memory.private_data.get(this).onstatechange;
            if (debug)print('RTCDtlsTransport.onstatechange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onstatechange', 1, function (value){
                if (debug)print('RTCDtlsTransport.onstatechange.set', value)
            mm.memory.private_data.get(this).onstatechange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onerror: {

                  get: newFunc('onerror', 10, function (){
            let res =  mm.memory.private_data.get(this).onerror;
            if (debug)print('RTCDtlsTransport.onerror.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onerror', 1, function (value){
                if (debug)print('RTCDtlsTransport.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
getRemoteCertificates: {

            value: newFunc('getRemoteCertificates', 10, function () {
                    if (debug)print('RTCDtlsTransport.getRemoteCertificates.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCDtlsTransport.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCDataChannelEvent = newFunc('RTCDataChannelEvent', 1, function (){print('RTCDataChannelEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCDataChannelEvent.prototype, {
channel: {

                  get: newFunc('channel', 10, function (){
            let res =  mm.memory.private_data.get(this).channel;
            if (debug)print('RTCDataChannelEvent.channel.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCDataChannelEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCDTMFToneChangeEvent = newFunc('RTCDTMFToneChangeEvent', 1, function (){print('RTCDTMFToneChangeEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCDTMFToneChangeEvent.prototype, {
tone: {

                  get: newFunc('tone', 10, function (){
            let res =  mm.memory.private_data.get(this).tone;
            if (debug)print('RTCDTMFToneChangeEvent.tone.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCDTMFToneChangeEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCDTMFSender = newFunc('RTCDTMFSender', 1, function (){print('RTCDTMFSender.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCDTMFSender.prototype, {
ontonechange: {

                  get: newFunc('ontonechange', 10, function (){
            let res =  mm.memory.private_data.get(this).ontonechange;
            if (debug)print('RTCDTMFSender.ontonechange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('ontonechange', 1, function (value){
                if (debug)print('RTCDTMFSender.ontonechange.set', value)
            mm.memory.private_data.get(this).ontonechange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
canInsertDTMF: {

                  get: newFunc('canInsertDTMF', 10, function (){
            let res =  mm.memory.private_data.get(this).canInsertDTMF;
            if (debug)print('RTCDTMFSender.canInsertDTMF.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
toneBuffer: {

                  get: newFunc('toneBuffer', 10, function (){
            let res =  mm.memory.private_data.get(this).toneBuffer;
            if (debug)print('RTCDTMFSender.toneBuffer.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
insertDTMF: {

            value: newFunc('insertDTMF', 10, function () {
                    if (debug)print('RTCDTMFSender.insertDTMF.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCDTMFSender.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;RTCCertificate = newFunc('RTCCertificate', 1, function (){print('RTCCertificate.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(RTCCertificate.prototype, {
expires: {

                  get: newFunc('expires', 10, function (){
            let res =  mm.memory.private_data.get(this).expires;
            if (debug)print('RTCCertificate.expires.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
getFingerprints: {

            value: newFunc('getFingerprints', 10, function () {
                    if (debug)print('RTCCertificate.getFingerprints.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('RTCCertificate.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});