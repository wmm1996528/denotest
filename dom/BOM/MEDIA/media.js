
;MediaStreamTrackVideoStats = newFunc('MediaStreamTrackVideoStats', 1, function (){print('MediaStreamTrackVideoStats.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamTrackVideoStats.prototype, {
deliveredFrames: {

                  get: newFunc('deliveredFrames', 10, function (){
            let res =  mm.memory.private_data.get(this).deliveredFrames;
            if (debug)print('MediaStreamTrackVideoStats.deliveredFrames.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
discardedFrames: {

                  get: newFunc('discardedFrames', 10, function (){
            let res =  mm.memory.private_data.get(this).discardedFrames;
            if (debug)print('MediaStreamTrackVideoStats.discardedFrames.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
totalFrames: {

                  get: newFunc('totalFrames', 10, function (){
            let res =  mm.memory.private_data.get(this).totalFrames;
            if (debug)print('MediaStreamTrackVideoStats.totalFrames.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
toJSON: {

            value: newFunc('toJSON', 10, function () {
                    if (debug)print('MediaStreamTrackVideoStats.toJSON.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamTrackVideoStats.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamTrackProcessor = newFunc('MediaStreamTrackProcessor', 1, function (){print('MediaStreamTrackProcessor.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamTrackProcessor.prototype, {
readable: {

                  get: newFunc('readable', 10, function (){
            let res =  mm.memory.private_data.get(this).readable;
            if (debug)print('MediaStreamTrackProcessor.readable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamTrackProcessor.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamTrackGenerator = newFunc('MediaStreamTrackGenerator', 1, function (){print('MediaStreamTrackGenerator.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamTrackGenerator.prototype, {
writable: {

                  get: newFunc('writable', 10, function (){
            let res =  mm.memory.private_data.get(this).writable;
            if (debug)print('MediaStreamTrackGenerator.writable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamTrackGenerator.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamTrackEvent = newFunc('MediaStreamTrackEvent', 1, function (){print('MediaStreamTrackEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamTrackEvent.prototype, {
track: {

                  get: newFunc('track', 10, function (){
            let res =  mm.memory.private_data.get(this).track;
            if (debug)print('MediaStreamTrackEvent.track.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamTrackEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamTrackAudioStats = newFunc('MediaStreamTrackAudioStats', 1, function (){print('MediaStreamTrackAudioStats.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamTrackAudioStats.prototype, {
deliveredFrames: {

                  get: newFunc('deliveredFrames', 10, function (){
            let res =  mm.memory.private_data.get(this).deliveredFrames;
            if (debug)print('MediaStreamTrackAudioStats.deliveredFrames.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
deliveredFramesDuration: {

                  get: newFunc('deliveredFramesDuration', 10, function (){
            let res =  mm.memory.private_data.get(this).deliveredFramesDuration;
            if (debug)print('MediaStreamTrackAudioStats.deliveredFramesDuration.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
totalFrames: {

                  get: newFunc('totalFrames', 10, function (){
            let res =  mm.memory.private_data.get(this).totalFrames;
            if (debug)print('MediaStreamTrackAudioStats.totalFrames.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
totalFramesDuration: {

                  get: newFunc('totalFramesDuration', 10, function (){
            let res =  mm.memory.private_data.get(this).totalFramesDuration;
            if (debug)print('MediaStreamTrackAudioStats.totalFramesDuration.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
latency: {

                  get: newFunc('latency', 10, function (){
            let res =  mm.memory.private_data.get(this).latency;
            if (debug)print('MediaStreamTrackAudioStats.latency.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
averageLatency: {

                  get: newFunc('averageLatency', 10, function (){
            let res =  mm.memory.private_data.get(this).averageLatency;
            if (debug)print('MediaStreamTrackAudioStats.averageLatency.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
minimumLatency: {

                  get: newFunc('minimumLatency', 10, function (){
            let res =  mm.memory.private_data.get(this).minimumLatency;
            if (debug)print('MediaStreamTrackAudioStats.minimumLatency.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
maximumLatency: {

                  get: newFunc('maximumLatency', 10, function (){
            let res =  mm.memory.private_data.get(this).maximumLatency;
            if (debug)print('MediaStreamTrackAudioStats.maximumLatency.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
resetLatency: {

            value: newFunc('resetLatency', 10, function () {
                    if (debug)print('MediaStreamTrackAudioStats.resetLatency.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
toJSON: {

            value: newFunc('toJSON', 10, function () {
                    if (debug)print('MediaStreamTrackAudioStats.toJSON.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamTrackAudioStats.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamTrack = newFunc('MediaStreamTrack', 1, function (){print('MediaStreamTrack.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamTrack.prototype, {
kind: {

                  get: newFunc('kind', 10, function (){
            let res =  mm.memory.private_data.get(this).kind;
            if (debug)print('MediaStreamTrack.kind.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
id: {

                  get: newFunc('id', 10, function (){
            let res =  mm.memory.private_data.get(this).id;
            if (debug)print('MediaStreamTrack.id.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
label: {

                  get: newFunc('label', 10, function (){
            let res =  mm.memory.private_data.get(this).label;
            if (debug)print('MediaStreamTrack.label.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
enabled: {

                  get: newFunc('enabled', 10, function (){
            let res =  mm.memory.private_data.get(this).enabled;
            if (debug)print('MediaStreamTrack.enabled.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('enabled', 1, function (value){
                if (debug)print('MediaStreamTrack.enabled.set', value)
            mm.memory.private_data.get(this).enabled = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
muted: {

                  get: newFunc('muted', 10, function (){
            let res =  mm.memory.private_data.get(this).muted;
            if (debug)print('MediaStreamTrack.muted.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onmute: {

                  get: newFunc('onmute', 10, function (){
            let res =  mm.memory.private_data.get(this).onmute;
            if (debug)print('MediaStreamTrack.onmute.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onmute', 1, function (value){
                if (debug)print('MediaStreamTrack.onmute.set', value)
            mm.memory.private_data.get(this).onmute = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onunmute: {

                  get: newFunc('onunmute', 10, function (){
            let res =  mm.memory.private_data.get(this).onunmute;
            if (debug)print('MediaStreamTrack.onunmute.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onunmute', 1, function (value){
                if (debug)print('MediaStreamTrack.onunmute.set', value)
            mm.memory.private_data.get(this).onunmute = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
readyState: {

                  get: newFunc('readyState', 10, function (){
            let res =  mm.memory.private_data.get(this).readyState;
            if (debug)print('MediaStreamTrack.readyState.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onended: {

                  get: newFunc('onended', 10, function (){
            let res =  mm.memory.private_data.get(this).onended;
            if (debug)print('MediaStreamTrack.onended.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onended', 1, function (value){
                if (debug)print('MediaStreamTrack.onended.set', value)
            mm.memory.private_data.get(this).onended = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
stats: {

                  get: newFunc('stats', 10, function (){
            let res =  mm.memory.private_data.get(this).stats;
            if (debug)print('MediaStreamTrack.stats.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
contentHint: {

                  get: newFunc('contentHint', 10, function (){
            let res =  mm.memory.private_data.get(this).contentHint;
            if (debug)print('MediaStreamTrack.contentHint.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('contentHint', 1, function (value){
                if (debug)print('MediaStreamTrack.contentHint.set', value)
            mm.memory.private_data.get(this).contentHint = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
applyConstraints: {

            value: newFunc('applyConstraints', 10, function () {
                    if (debug)print('MediaStreamTrack.applyConstraints.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
clone: {

            value: newFunc('clone', 10, function () {
                    if (debug)print('MediaStreamTrack.clone.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getCapabilities: {

            value: newFunc('getCapabilities', 10, function () {
                    if (debug)print('MediaStreamTrack.getCapabilities.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getConstraints: {

            value: newFunc('getConstraints', 10, function () {
                    if (debug)print('MediaStreamTrack.getConstraints.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getSettings: {

            value: newFunc('getSettings', 10, function () {
                    if (debug)print('MediaStreamTrack.getSettings.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
stop: {

            value: newFunc('stop', 10, function () {
                    if (debug)print('MediaStreamTrack.stop.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
oncapturehandlechange: {

                  get: newFunc('oncapturehandlechange', 10, function (){
            let res =  mm.memory.private_data.get(this).oncapturehandlechange;
            if (debug)print('MediaStreamTrack.oncapturehandlechange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('oncapturehandlechange', 1, function (value){
                if (debug)print('MediaStreamTrack.oncapturehandlechange.set', value)
            mm.memory.private_data.get(this).oncapturehandlechange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
getCaptureHandle: {

            value: newFunc('getCaptureHandle', 10, function () {
                    if (debug)print('MediaStreamTrack.getCaptureHandle.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamTrack.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamEvent = newFunc('MediaStreamEvent', 1, function (){print('MediaStreamEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamEvent.prototype, {
stream: {

                  get: newFunc('stream', 10, function (){
            let res =  mm.memory.private_data.get(this).stream;
            if (debug)print('MediaStreamEvent.stream.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamAudioSourceNode = newFunc('MediaStreamAudioSourceNode', 1, function (){print('MediaStreamAudioSourceNode.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamAudioSourceNode.prototype, {
mediaStream: {

                  get: newFunc('mediaStream', 10, function (){
            let res =  mm.memory.private_data.get(this).mediaStream;
            if (debug)print('MediaStreamAudioSourceNode.mediaStream.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamAudioSourceNode.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStreamAudioDestinationNode = newFunc('MediaStreamAudioDestinationNode', 1, function (){print('MediaStreamAudioDestinationNode.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStreamAudioDestinationNode.prototype, {
stream: {

                  get: newFunc('stream', 10, function (){
            let res =  mm.memory.private_data.get(this).stream;
            if (debug)print('MediaStreamAudioDestinationNode.stream.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStreamAudioDestinationNode.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaStream = newFunc('MediaStream', 1, function (){print('MediaStream.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaStream.prototype, {
id: {

                  get: newFunc('id', 10, function (){
            let res =  mm.memory.private_data.get(this).id;
            if (debug)print('MediaStream.id.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
active: {

                  get: newFunc('active', 10, function (){
            let res =  mm.memory.private_data.get(this).active;
            if (debug)print('MediaStream.active.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onaddtrack: {

                  get: newFunc('onaddtrack', 10, function (){
            let res =  mm.memory.private_data.get(this).onaddtrack;
            if (debug)print('MediaStream.onaddtrack.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onaddtrack', 1, function (value){
                if (debug)print('MediaStream.onaddtrack.set', value)
            mm.memory.private_data.get(this).onaddtrack = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onremovetrack: {

                  get: newFunc('onremovetrack', 10, function (){
            let res =  mm.memory.private_data.get(this).onremovetrack;
            if (debug)print('MediaStream.onremovetrack.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onremovetrack', 1, function (value){
                if (debug)print('MediaStream.onremovetrack.set', value)
            mm.memory.private_data.get(this).onremovetrack = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onactive: {

                  get: newFunc('onactive', 10, function (){
            let res =  mm.memory.private_data.get(this).onactive;
            if (debug)print('MediaStream.onactive.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onactive', 1, function (value){
                if (debug)print('MediaStream.onactive.set', value)
            mm.memory.private_data.get(this).onactive = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
oninactive: {

                  get: newFunc('oninactive', 10, function (){
            let res =  mm.memory.private_data.get(this).oninactive;
            if (debug)print('MediaStream.oninactive.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('oninactive', 1, function (value){
                if (debug)print('MediaStream.oninactive.set', value)
            mm.memory.private_data.get(this).oninactive = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
addTrack: {

            value: newFunc('addTrack', 10, function () {
                    if (debug)print('MediaStream.addTrack.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
clone: {

            value: newFunc('clone', 10, function () {
                    if (debug)print('MediaStream.clone.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getAudioTracks: {

            value: newFunc('getAudioTracks', 10, function () {
                    if (debug)print('MediaStream.getAudioTracks.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getTrackById: {

            value: newFunc('getTrackById', 10, function () {
                    if (debug)print('MediaStream.getTrackById.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getTracks: {

            value: newFunc('getTracks', 10, function () {
                    if (debug)print('MediaStream.getTracks.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
getVideoTracks: {

            value: newFunc('getVideoTracks', 10, function () {
                    if (debug)print('MediaStream.getVideoTracks.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
removeTrack: {

            value: newFunc('removeTrack', 10, function () {
                    if (debug)print('MediaStream.removeTrack.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaStream.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaSourceHandle = newFunc('MediaSourceHandle', 1, function (){print('MediaSourceHandle.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaSourceHandle.prototype, {
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaSourceHandle.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaSource = newFunc('MediaSource', 1, function (){print('MediaSource.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaSource.prototype, {
sourceBuffers: {

                  get: newFunc('sourceBuffers', 10, function (){
            let res =  mm.memory.private_data.get(this).sourceBuffers;
            if (debug)print('MediaSource.sourceBuffers.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
activeSourceBuffers: {

                  get: newFunc('activeSourceBuffers', 10, function (){
            let res =  mm.memory.private_data.get(this).activeSourceBuffers;
            if (debug)print('MediaSource.activeSourceBuffers.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
duration: {

                  get: newFunc('duration', 10, function (){
            let res =  mm.memory.private_data.get(this).duration;
            if (debug)print('MediaSource.duration.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('duration', 1, function (value){
                if (debug)print('MediaSource.duration.set', value)
            mm.memory.private_data.get(this).duration = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onsourceopen: {

                  get: newFunc('onsourceopen', 10, function (){
            let res =  mm.memory.private_data.get(this).onsourceopen;
            if (debug)print('MediaSource.onsourceopen.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onsourceopen', 1, function (value){
                if (debug)print('MediaSource.onsourceopen.set', value)
            mm.memory.private_data.get(this).onsourceopen = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onsourceended: {

                  get: newFunc('onsourceended', 10, function (){
            let res =  mm.memory.private_data.get(this).onsourceended;
            if (debug)print('MediaSource.onsourceended.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onsourceended', 1, function (value){
                if (debug)print('MediaSource.onsourceended.set', value)
            mm.memory.private_data.get(this).onsourceended = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onsourceclose: {

                  get: newFunc('onsourceclose', 10, function (){
            let res =  mm.memory.private_data.get(this).onsourceclose;
            if (debug)print('MediaSource.onsourceclose.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onsourceclose', 1, function (value){
                if (debug)print('MediaSource.onsourceclose.set', value)
            mm.memory.private_data.get(this).onsourceclose = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
readyState: {

                  get: newFunc('readyState', 10, function (){
            let res =  mm.memory.private_data.get(this).readyState;
            if (debug)print('MediaSource.readyState.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
addSourceBuffer: {

            value: newFunc('addSourceBuffer', 10, function () {
                    if (debug)print('MediaSource.addSourceBuffer.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
clearLiveSeekableRange: {

            value: newFunc('clearLiveSeekableRange', 10, function () {
                    if (debug)print('MediaSource.clearLiveSeekableRange.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
endOfStream: {

            value: newFunc('endOfStream', 10, function () {
                    if (debug)print('MediaSource.endOfStream.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
removeSourceBuffer: {

            value: newFunc('removeSourceBuffer', 10, function () {
                    if (debug)print('MediaSource.removeSourceBuffer.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
setLiveSeekableRange: {

            value: newFunc('setLiveSeekableRange', 10, function () {
                    if (debug)print('MediaSource.setLiveSeekableRange.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaSource.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaRecorder = newFunc('MediaRecorder', 1, function (){print('MediaRecorder.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaRecorder.prototype, {
stream: {

                  get: newFunc('stream', 10, function (){
            let res =  mm.memory.private_data.get(this).stream;
            if (debug)print('MediaRecorder.stream.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
mimeType: {

                  get: newFunc('mimeType', 10, function (){
            let res =  mm.memory.private_data.get(this).mimeType;
            if (debug)print('MediaRecorder.mimeType.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
state: {

                  get: newFunc('state', 10, function (){
            let res =  mm.memory.private_data.get(this).state;
            if (debug)print('MediaRecorder.state.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onstart: {

                  get: newFunc('onstart', 10, function (){
            let res =  mm.memory.private_data.get(this).onstart;
            if (debug)print('MediaRecorder.onstart.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onstart', 1, function (value){
                if (debug)print('MediaRecorder.onstart.set', value)
            mm.memory.private_data.get(this).onstart = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onstop: {

                  get: newFunc('onstop', 10, function (){
            let res =  mm.memory.private_data.get(this).onstop;
            if (debug)print('MediaRecorder.onstop.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onstop', 1, function (value){
                if (debug)print('MediaRecorder.onstop.set', value)
            mm.memory.private_data.get(this).onstop = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
ondataavailable: {

                  get: newFunc('ondataavailable', 10, function (){
            let res =  mm.memory.private_data.get(this).ondataavailable;
            if (debug)print('MediaRecorder.ondataavailable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('ondataavailable', 1, function (value){
                if (debug)print('MediaRecorder.ondataavailable.set', value)
            mm.memory.private_data.get(this).ondataavailable = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onpause: {

                  get: newFunc('onpause', 10, function (){
            let res =  mm.memory.private_data.get(this).onpause;
            if (debug)print('MediaRecorder.onpause.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onpause', 1, function (value){
                if (debug)print('MediaRecorder.onpause.set', value)
            mm.memory.private_data.get(this).onpause = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onresume: {

                  get: newFunc('onresume', 10, function (){
            let res =  mm.memory.private_data.get(this).onresume;
            if (debug)print('MediaRecorder.onresume.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onresume', 1, function (value){
                if (debug)print('MediaRecorder.onresume.set', value)
            mm.memory.private_data.get(this).onresume = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onerror: {

                  get: newFunc('onerror', 10, function (){
            let res =  mm.memory.private_data.get(this).onerror;
            if (debug)print('MediaRecorder.onerror.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onerror', 1, function (value){
                if (debug)print('MediaRecorder.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
videoBitsPerSecond: {

                  get: newFunc('videoBitsPerSecond', 10, function (){
            let res =  mm.memory.private_data.get(this).videoBitsPerSecond;
            if (debug)print('MediaRecorder.videoBitsPerSecond.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
audioBitsPerSecond: {

                  get: newFunc('audioBitsPerSecond', 10, function (){
            let res =  mm.memory.private_data.get(this).audioBitsPerSecond;
            if (debug)print('MediaRecorder.audioBitsPerSecond.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
audioBitrateMode: {

                  get: newFunc('audioBitrateMode', 10, function (){
            let res =  mm.memory.private_data.get(this).audioBitrateMode;
            if (debug)print('MediaRecorder.audioBitrateMode.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
pause: {

            value: newFunc('pause', 10, function () {
                    if (debug)print('MediaRecorder.pause.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
requestData: {

            value: newFunc('requestData', 10, function () {
                    if (debug)print('MediaRecorder.requestData.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
resume: {

            value: newFunc('resume', 10, function () {
                    if (debug)print('MediaRecorder.resume.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
start: {

            value: newFunc('start', 10, function () {
                    if (debug)print('MediaRecorder.start.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
stop: {

            value: newFunc('stop', 10, function () {
                    if (debug)print('MediaRecorder.stop.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaRecorder.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaQueryListEvent = newFunc('MediaQueryListEvent', 1, function (){print('MediaQueryListEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaQueryListEvent.prototype, {
media: {

                  get: newFunc('media', 10, function (){
            let res =  mm.memory.private_data.get(this).media;
            if (debug)print('MediaQueryListEvent.media.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
matches: {

                  get: newFunc('matches', 10, function (){
            let res =  mm.memory.private_data.get(this).matches;
            if (debug)print('MediaQueryListEvent.matches.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaQueryListEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaList = newFunc('MediaList', 1, function (){print('MediaList.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaList.prototype, {
length: {

                  get: newFunc('length', 10, function (){
            let res =  mm.memory.private_data.get(this).length;
            if (debug)print('MediaList.length.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
mediaText: {

                  get: newFunc('mediaText', 10, function (){
            let res =  mm.memory.private_data.get(this).mediaText;
            if (debug)print('MediaList.mediaText.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('mediaText', 1, function (value){
                if (debug)print('MediaList.mediaText.set', value)
            mm.memory.private_data.get(this).mediaText = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
appendMedium: {

            value: newFunc('appendMedium', 10, function () {
                    if (debug)print('MediaList.appendMedium.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
deleteMedium: {

            value: newFunc('deleteMedium', 10, function () {
                    if (debug)print('MediaList.deleteMedium.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
item: {

            value: newFunc('item', 10, function () {
                    if (debug)print('MediaList.item.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
toString: {

            value: newFunc('toString', 10, function () {
                    if (debug)print('MediaList.toString.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaList.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaError = newFunc('MediaError', 1, function (){print('MediaError.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaError.prototype, {
code: {

                  get: newFunc('code', 10, function (){
            let res =  mm.memory.private_data.get(this).code;
            if (debug)print('MediaError.code.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
message: {

                  get: newFunc('message', 10, function (){
            let res =  mm.memory.private_data.get(this).message;
            if (debug)print('MediaError.message.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
MEDIA_ERR_ABORTED: {

            value: 1, writable:false, enumerable:true, configurable:false,



        },
MEDIA_ERR_NETWORK: {

            value: 2, writable:false, enumerable:true, configurable:false,



        },
MEDIA_ERR_DECODE: {

            value: 3, writable:false, enumerable:true, configurable:false,



        },
MEDIA_ERR_SRC_NOT_SUPPORTED: {

            value: 4, writable:false, enumerable:true, configurable:false,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaError.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaEncryptedEvent = newFunc('MediaEncryptedEvent', 1, function (){print('MediaEncryptedEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaEncryptedEvent.prototype, {
initDataType: {

                  get: newFunc('initDataType', 10, function (){
            let res =  mm.memory.private_data.get(this).initDataType;
            if (debug)print('MediaEncryptedEvent.initDataType.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
initData: {

                  get: newFunc('initData', 10, function (){
            let res =  mm.memory.private_data.get(this).initData;
            if (debug)print('MediaEncryptedEvent.initData.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaEncryptedEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;MediaElementAudioSourceNode = newFunc('MediaElementAudioSourceNode', 1, function (){print('MediaElementAudioSourceNode.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(MediaElementAudioSourceNode.prototype, {
mediaElement: {

                  get: newFunc('mediaElement', 10, function (){
            let res =  mm.memory.private_data.get(this).mediaElement;
            if (debug)print('MediaElementAudioSourceNode.mediaElement.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('MediaElementAudioSourceNode.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});