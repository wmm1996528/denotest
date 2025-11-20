HTMLMediaElement = newFunc('HTMLMediaElement', 1, function HTMLMediaElement(){mm.memory.private_data.set(this, {})})


Object.defineProperties(HTMLMediaElement.prototype, {
    error: {

        get: newFunc('error', 10, function error(){
            let res =  mm.memory.private_data.get(this).error;
            if (debug)print('HTMLMediaElement.error.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    src: {

        get: newFunc('src', 10, function src(){
            let res =  mm.memory.private_data.get(this).src;
            if (debug)print('HTMLMediaElement.src.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('src', 1, function src(value){
            if (debug)print('HTMLMediaElement.src.set', value)
            mm.memory.private_data.get(this).src = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    currentSrc: {

        get: newFunc('currentSrc', 10, function currentSrc(){
            let res =  mm.memory.private_data.get(this).currentSrc;
            if (debug)print('HTMLMediaElement.currentSrc.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    crossOrigin: {

        get: newFunc('crossOrigin', 10, function crossOrigin(){
            let res =  mm.memory.private_data.get(this).crossOrigin;
            if (debug)print('HTMLMediaElement.crossOrigin.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('crossOrigin', 1, function crossOrigin(value){
            if (debug)print('HTMLMediaElement.crossOrigin.set', value)
            mm.memory.private_data.get(this).crossOrigin = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    networkState: {

        get: newFunc('networkState', 10, function networkState(){
            let res =  mm.memory.private_data.get(this).networkState;
            if (debug)print('HTMLMediaElement.networkState.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    preload: {

        get: newFunc('preload', 10, function preload(){
            let res =  mm.memory.private_data.get(this).preload;
            if (debug)print('HTMLMediaElement.preload.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('preload', 1, function preload(value){
            if (debug)print('HTMLMediaElement.preload.set', value)
            mm.memory.private_data.get(this).preload = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    buffered: {

        get: newFunc('buffered', 10, function buffered(){
            let res =  mm.memory.private_data.get(this).buffered;
            if (debug)print('HTMLMediaElement.buffered.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    readyState: {

        get: newFunc('readyState', 10, function readyState(){
            let res =  mm.memory.private_data.get(this).readyState;
            if (debug)print('HTMLMediaElement.readyState.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    seeking: {

        get: newFunc('seeking', 10, function seeking(){
            let res =  mm.memory.private_data.get(this).seeking;
            if (debug)print('HTMLMediaElement.seeking.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    currentTime: {

        get: newFunc('currentTime', 10, function currentTime(){
            let res =  mm.memory.private_data.get(this).currentTime;
            if (debug)print('HTMLMediaElement.currentTime.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('currentTime', 1, function currentTime(value){
            if (debug)print('HTMLMediaElement.currentTime.set', value)
            mm.memory.private_data.get(this).currentTime = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    duration: {

        get: newFunc('duration', 10, function duration(){
            let res =  mm.memory.private_data.get(this).duration;
            if (debug)print('HTMLMediaElement.duration.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    paused: {

        get: newFunc('paused', 10, function paused(){
            let res =  mm.memory.private_data.get(this).paused;
            if (debug)print('HTMLMediaElement.paused.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    defaultPlaybackRate: {

        get: newFunc('defaultPlaybackRate', 10, function defaultPlaybackRate(){
            let res =  mm.memory.private_data.get(this).defaultPlaybackRate;
            if (debug)print('HTMLMediaElement.defaultPlaybackRate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('defaultPlaybackRate', 1, function defaultPlaybackRate(value){
            if (debug)print('HTMLMediaElement.defaultPlaybackRate.set', value)
            mm.memory.private_data.get(this).defaultPlaybackRate = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    playbackRate: {

        get: newFunc('playbackRate', 10, function playbackRate(){
            let res =  mm.memory.private_data.get(this).playbackRate;
            if (debug)print('HTMLMediaElement.playbackRate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('playbackRate', 1, function playbackRate(value){
            if (debug)print('HTMLMediaElement.playbackRate.set', value)
            mm.memory.private_data.get(this).playbackRate = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    played: {

        get: newFunc('played', 10, function played(){
            let res =  mm.memory.private_data.get(this).played;
            if (debug)print('HTMLMediaElement.played.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    seekable: {

        get: newFunc('seekable', 10, function seekable(){
            let res =  mm.memory.private_data.get(this).seekable;
            if (debug)print('HTMLMediaElement.seekable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    ended: {

        get: newFunc('ended', 10, function ended(){
            let res =  mm.memory.private_data.get(this).ended;
            if (debug)print('HTMLMediaElement.ended.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    autoplay: {

        get: newFunc('autoplay', 10, function autoplay(){
            let res =  mm.memory.private_data.get(this).autoplay;
            if (debug)print('HTMLMediaElement.autoplay.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('autoplay', 1, function autoplay(value){
            if (debug)print('HTMLMediaElement.autoplay.set', value)
            mm.memory.private_data.get(this).autoplay = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    loop: {

        get: newFunc('loop', 10, function loop(){
            let res =  mm.memory.private_data.get(this).loop;
            if (debug)print('HTMLMediaElement.loop.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('loop', 1, function loop(value){
            if (debug)print('HTMLMediaElement.loop.set', value)
            mm.memory.private_data.get(this).loop = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    preservesPitch: {

        get: newFunc('preservesPitch', 10, function preservesPitch(){
            let res =  mm.memory.private_data.get(this).preservesPitch;
            if (debug)print('HTMLMediaElement.preservesPitch.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('preservesPitch', 1, function preservesPitch(value){
            if (debug)print('HTMLMediaElement.preservesPitch.set', value)
            mm.memory.private_data.get(this).preservesPitch = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    controls: {

        get: newFunc('controls', 10, function controls(){
            let res =  mm.memory.private_data.get(this).controls;
            if (debug)print('HTMLMediaElement.controls.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('controls', 1, function controls(value){
            if (debug)print('HTMLMediaElement.controls.set', value)
            mm.memory.private_data.get(this).controls = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    controlsList: {

        get: newFunc('controlsList', 10, function controlsList(){
            let res =  mm.memory.private_data.get(this).controlsList;
            if (debug)print('HTMLMediaElement.controlsList.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('controlsList', 1, function controlsList(value){
            if (debug)print('HTMLMediaElement.controlsList.set', value)
            mm.memory.private_data.get(this).controlsList = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    volume: {

        get: newFunc('volume', 10, function volume(){
            let res =  mm.memory.private_data.get(this).volume;
            if (debug)print('HTMLMediaElement.volume.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('volume', 1, function volume(value){
            if (debug)print('HTMLMediaElement.volume.set', value)
            mm.memory.private_data.get(this).volume = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    muted: {

        get: newFunc('muted', 10, function muted(){
            let res =  mm.memory.private_data.get(this).muted;
            if (debug)print('HTMLMediaElement.muted.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('muted', 1, function muted(value){
            if (debug)print('HTMLMediaElement.muted.set', value)
            mm.memory.private_data.get(this).muted = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    defaultMuted: {

        get: newFunc('defaultMuted', 10, function defaultMuted(){
            let res =  mm.memory.private_data.get(this).defaultMuted;
            if (debug)print('HTMLMediaElement.defaultMuted.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('defaultMuted', 1, function defaultMuted(value){
            if (debug)print('HTMLMediaElement.defaultMuted.set', value)
            mm.memory.private_data.get(this).defaultMuted = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    textTracks: {

        get: newFunc('textTracks', 10, function textTracks(){
            let res =  mm.memory.private_data.get(this).textTracks;
            if (debug)print('HTMLMediaElement.textTracks.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    webkitAudioDecodedByteCount: {

        get: newFunc('webkitAudioDecodedByteCount', 10, function webkitAudioDecodedByteCount(){
            let res =  mm.memory.private_data.get(this).webkitAudioDecodedByteCount;
            if (debug)print('HTMLMediaElement.webkitAudioDecodedByteCount.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    webkitVideoDecodedByteCount: {

        get: newFunc('webkitVideoDecodedByteCount', 10, function webkitVideoDecodedByteCount(){
            let res =  mm.memory.private_data.get(this).webkitVideoDecodedByteCount;
            if (debug)print('HTMLMediaElement.webkitVideoDecodedByteCount.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    onencrypted: {

        get: newFunc('onencrypted', 10, function onencrypted(){
            let res =  mm.memory.private_data.get(this).onencrypted;
            if (debug)print('HTMLMediaElement.onencrypted.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('onencrypted', 1, function onencrypted(value){
            if (debug)print('HTMLMediaElement.onencrypted.set', value)
            mm.memory.private_data.get(this).onencrypted = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    onwaitingforkey: {

        get: newFunc('onwaitingforkey', 10, function onwaitingforkey(){
            let res =  mm.memory.private_data.get(this).onwaitingforkey;
            if (debug)print('HTMLMediaElement.onwaitingforkey.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('onwaitingforkey', 1, function onwaitingforkey(value){
            if (debug)print('HTMLMediaElement.onwaitingforkey.set', value)
            mm.memory.private_data.get(this).onwaitingforkey = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    srcObject: {

        get: newFunc('srcObject', 10, function srcObject(){
            let res =  mm.memory.private_data.get(this).srcObject;
            if (debug)print('HTMLMediaElement.srcObject.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('srcObject', 1, function srcObject(value){
            if (debug)print('HTMLMediaElement.srcObject.set', value)
            mm.memory.private_data.get(this).srcObject = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    NETWORK_EMPTY: {
    },
    NETWORK_IDLE: {

        value: 1, writable:false, enumerable:true, configurable:false,



    },
    NETWORK_LOADING: {

        value: 2, writable:false, enumerable:true, configurable:false,



    },
    NETWORK_NO_SOURCE: {

        value: 3, writable:false, enumerable:true, configurable:false,



    },
    HAVE_NOTHING: {
    },
    HAVE_METADATA: {

        value: 1, writable:false, enumerable:true, configurable:false,



    },
    HAVE_CURRENT_DATA: {

        value: 2, writable:false, enumerable:true, configurable:false,



    },
    HAVE_FUTURE_DATA: {

        value: 3, writable:false, enumerable:true, configurable:false,



    },
    HAVE_ENOUGH_DATA: {

        value: 4, writable:false, enumerable:true, configurable:false,



    },
    addTextTrack: {

        value: newFunc('addTextTrack', 10, function addTextTrack() {
            if (debug)print('HTMLMediaElement.addTextTrack.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    canPlayType: {

        value: newFunc('canPlayType', 10, function canPlayType(type) {
            if (debug)print('HTMLMediaElement.canPlayType.call', arguments)

            if (type === 'audio/wav; codecs="0"') {
                // debugger;
            }
            if (!HTMLMediaElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let result = ENV.canplay[type];
            if (result === undefined) {
                switch (type) {
                    case "video/ogg; codecs=\"theora\"":
                        result = '';
                        break
                    case "video/mp4; codecs=\"avc1.42E01E\"":
                    case "video/webm; codecs=\"vp8, vorbis\"":
                    case "audio/ogg; codecs=\"vorbis\"":
                    case "audio/mpeg":
                    case "audio/wav; codecs=\"1\"":
                    case "video/mp4; codecs=\"avc1.4D401E\"":
                    case 'video/ogg; codecs=opus':
                    case 'audio/mpeg;':
                    case 'audio/aac;':
                    case "video/webm; codecs=\"vorbis,vp9\"":
                    case "video/mp4; codecs=mp4a.40.2":
                    case "audio/mp4; codecs=\"mp4a.40.2\"":
                    case "video/mp4; codecs=\"avc1.42c00d\"":
                    case "video/mp4; codecs=\"avc1.64001E, mp4a.40.2\"":
                    case "video/webm; codecs=vorbis":
                        result = 'probably';
                        break;
                    case "audio/x-m4a;":
                    case 'audio/webm;':
                    case 'video/mp4;':
                    case 'audio/wav;':
                        result = 'maybe';

                        break;
                    default:
                        result = '';
                }
            }
            // if (debug)
            print('Func', 'HTMLMediaElement', 'canPlayType', arguments, result);
        }), writable:true, enumerable:true, configurable:true,



    },
    captureStream: {

        value: newFunc('captureStream', 10, function captureStream() {
            if (debug)print('HTMLMediaElement.captureStream.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    load: {

        value: newFunc('load', 10, function load() {
            if (debug)print('HTMLMediaElement.load.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    pause: {

        value: newFunc('pause', 10, function pause() {
            if (debug)print('HTMLMediaElement.pause.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    play: {

        value: newFunc('play', 10, function play() {
            if (debug)print('HTMLMediaElement.play.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    sinkId: {

        get: newFunc('sinkId', 10, function sinkId(){
            let res =  mm.memory.private_data.get(this).sinkId;
            if (debug)print('HTMLMediaElement.sinkId.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    remote: {

        get: newFunc('remote', 10, function remote(){
            let res =  mm.memory.private_data.get(this).remote;
            if (debug)print('HTMLMediaElement.remote.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    disableRemotePlayback: {

        get: newFunc('disableRemotePlayback', 10, function disableRemotePlayback(){
            let res =  mm.memory.private_data.get(this).disableRemotePlayback;
            if (debug)print('HTMLMediaElement.disableRemotePlayback.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


        set: newFunc('disableRemotePlayback', 1, function disableRemotePlayback(value){
            if (debug)print('HTMLMediaElement.disableRemotePlayback.set', value)
            mm.memory.private_data.get(this).disableRemotePlayback = value

        }, {set:true}),  enumerable:true, configurable:true,



    },
    setSinkId: {

        value: newFunc('setSinkId', 10, function setSinkId() {
            if (debug)print('HTMLMediaElement.setSinkId.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug)print('HTMLMediaElement.constructor.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
    mediaKeys: {

        get: newFunc('mediaKeys', 10, function mediaKeys(){
            let res =  mm.memory.private_data.get(this).mediaKeys;
            if (debug)print('HTMLMediaElement.mediaKeys.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

    },
    setMediaKeys: {

        value: newFunc('setMediaKeys', 10, function setMediaKeys() {
            if (debug)print('HTMLMediaElement.setMediaKeys.call', arguments)

        }), writable:true, enumerable:true, configurable:true,



    },
})


if (proxy) HTMLMediaElement = mm.proxy(HTMLMediaElement, 'HTMLMediaElement')