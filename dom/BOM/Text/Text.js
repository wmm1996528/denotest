
;TextTrackList = newFunc('TextTrackList', 1, function (){print('TextTrackList.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextTrackList.prototype, {
length: {

                  get: newFunc('length', 10, function (){
            let res =  mm.memory.private_data.get(this).length;
            if (debug)print('TextTrackList.length.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onchange: {

                  get: newFunc('onchange', 10, function (){
            let res =  mm.memory.private_data.get(this).onchange;
            if (debug)print('TextTrackList.onchange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onchange', 1, function (value){
                if (debug)print('TextTrackList.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onaddtrack: {

                  get: newFunc('onaddtrack', 10, function (){
            let res =  mm.memory.private_data.get(this).onaddtrack;
            if (debug)print('TextTrackList.onaddtrack.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onaddtrack', 1, function (value){
                if (debug)print('TextTrackList.onaddtrack.set', value)
            mm.memory.private_data.get(this).onaddtrack = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onremovetrack: {

                  get: newFunc('onremovetrack', 10, function (){
            let res =  mm.memory.private_data.get(this).onremovetrack;
            if (debug)print('TextTrackList.onremovetrack.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onremovetrack', 1, function (value){
                if (debug)print('TextTrackList.onremovetrack.set', value)
            mm.memory.private_data.get(this).onremovetrack = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
getTrackById: {

            value: newFunc('getTrackById', 10, function () {
                    if (debug)print('TextTrackList.getTrackById.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextTrackList.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextTrackCueList = newFunc('TextTrackCueList', 1, function (){print('TextTrackCueList.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextTrackCueList.prototype, {
length: {

                  get: newFunc('length', 10, function (){
            let res =  mm.memory.private_data.get(this).length;
            if (debug)print('TextTrackCueList.length.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
getCueById: {

            value: newFunc('getCueById', 10, function () {
                    if (debug)print('TextTrackCueList.getCueById.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextTrackCueList.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextTrackCue = newFunc('TextTrackCue', 1, function (){print('TextTrackCue.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextTrackCue.prototype, {
track: {

                  get: newFunc('track', 10, function (){
            let res =  mm.memory.private_data.get(this).track;
            if (debug)print('TextTrackCue.track.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
id: {

                  get: newFunc('id', 10, function (){
            let res =  mm.memory.private_data.get(this).id;
            if (debug)print('TextTrackCue.id.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('id', 1, function (value){
                if (debug)print('TextTrackCue.id.set', value)
            mm.memory.private_data.get(this).id = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
startTime: {

                  get: newFunc('startTime', 10, function (){
            let res =  mm.memory.private_data.get(this).startTime;
            if (debug)print('TextTrackCue.startTime.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('startTime', 1, function (value){
                if (debug)print('TextTrackCue.startTime.set', value)
            mm.memory.private_data.get(this).startTime = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
endTime: {

                  get: newFunc('endTime', 10, function (){
            let res =  mm.memory.private_data.get(this).endTime;
            if (debug)print('TextTrackCue.endTime.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('endTime', 1, function (value){
                if (debug)print('TextTrackCue.endTime.set', value)
            mm.memory.private_data.get(this).endTime = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
pauseOnExit: {

                  get: newFunc('pauseOnExit', 10, function (){
            let res =  mm.memory.private_data.get(this).pauseOnExit;
            if (debug)print('TextTrackCue.pauseOnExit.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('pauseOnExit', 1, function (value){
                if (debug)print('TextTrackCue.pauseOnExit.set', value)
            mm.memory.private_data.get(this).pauseOnExit = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onenter: {

                  get: newFunc('onenter', 10, function (){
            let res =  mm.memory.private_data.get(this).onenter;
            if (debug)print('TextTrackCue.onenter.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onenter', 1, function (value){
                if (debug)print('TextTrackCue.onenter.set', value)
            mm.memory.private_data.get(this).onenter = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onexit: {

                  get: newFunc('onexit', 10, function (){
            let res =  mm.memory.private_data.get(this).onexit;
            if (debug)print('TextTrackCue.onexit.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onexit', 1, function (value){
                if (debug)print('TextTrackCue.onexit.set', value)
            mm.memory.private_data.get(this).onexit = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextTrackCue.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextTrack = newFunc('TextTrack', 1, function (){print('TextTrack.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextTrack.prototype, {
kind: {

                  get: newFunc('kind', 10, function (){
            let res =  mm.memory.private_data.get(this).kind;
            if (debug)print('TextTrack.kind.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
label: {

                  get: newFunc('label', 10, function (){
            let res =  mm.memory.private_data.get(this).label;
            if (debug)print('TextTrack.label.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
language: {

                  get: newFunc('language', 10, function (){
            let res =  mm.memory.private_data.get(this).language;
            if (debug)print('TextTrack.language.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
id: {

                  get: newFunc('id', 10, function (){
            let res =  mm.memory.private_data.get(this).id;
            if (debug)print('TextTrack.id.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
mode: {

                  get: newFunc('mode', 10, function (){
            let res =  mm.memory.private_data.get(this).mode;
            if (debug)print('TextTrack.mode.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('mode', 1, function (value){
                if (debug)print('TextTrack.mode.set', value)
            mm.memory.private_data.get(this).mode = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
cues: {

                  get: newFunc('cues', 10, function (){
            let res =  mm.memory.private_data.get(this).cues;
            if (debug)print('TextTrack.cues.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
activeCues: {

                  get: newFunc('activeCues', 10, function (){
            let res =  mm.memory.private_data.get(this).activeCues;
            if (debug)print('TextTrack.activeCues.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
oncuechange: {

                  get: newFunc('oncuechange', 10, function (){
            let res =  mm.memory.private_data.get(this).oncuechange;
            if (debug)print('TextTrack.oncuechange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('oncuechange', 1, function (value){
                if (debug)print('TextTrack.oncuechange.set', value)
            mm.memory.private_data.get(this).oncuechange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
addCue: {

            value: newFunc('addCue', 10, function () {
                    if (debug)print('TextTrack.addCue.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
removeCue: {

            value: newFunc('removeCue', 10, function () {
                    if (debug)print('TextTrack.removeCue.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextTrack.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextFormatUpdateEvent = newFunc('TextFormatUpdateEvent', 1, function (){print('TextFormatUpdateEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextFormatUpdateEvent.prototype, {
getTextFormats: {

            value: newFunc('getTextFormats', 10, function () {
                    if (debug)print('TextFormatUpdateEvent.getTextFormats.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextFormatUpdateEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextFormat = newFunc('TextFormat', 1, function (){print('TextFormat.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextFormat.prototype, {
rangeStart: {

                  get: newFunc('rangeStart', 10, function (){
            let res =  mm.memory.private_data.get(this).rangeStart;
            if (debug)print('TextFormat.rangeStart.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
rangeEnd: {

                  get: newFunc('rangeEnd', 10, function (){
            let res =  mm.memory.private_data.get(this).rangeEnd;
            if (debug)print('TextFormat.rangeEnd.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
underlineStyle: {

                  get: newFunc('underlineStyle', 10, function (){
            let res =  mm.memory.private_data.get(this).underlineStyle;
            if (debug)print('TextFormat.underlineStyle.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
underlineThickness: {

                  get: newFunc('underlineThickness', 10, function (){
            let res =  mm.memory.private_data.get(this).underlineThickness;
            if (debug)print('TextFormat.underlineThickness.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextFormat.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextEvent = newFunc('TextEvent', 1, function (){print('TextEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextEvent.prototype, {
data: {

                  get: newFunc('data', 10, function (){
            let res =  mm.memory.private_data.get(this).data;
            if (debug)print('TextEvent.data.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
initTextEvent: {

            value: newFunc('initTextEvent', 10, function () {
                    if (debug)print('TextEvent.initTextEvent.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextEncoderStream = newFunc('TextEncoderStream', 1, function (){print('TextEncoderStream.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextEncoderStream.prototype, {
encoding: {

                  get: newFunc('encoding', 10, function (){
            let res =  mm.memory.private_data.get(this).encoding;
            if (debug)print('TextEncoderStream.encoding.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
readable: {

                  get: newFunc('readable', 10, function (){
            let res =  mm.memory.private_data.get(this).readable;
            if (debug)print('TextEncoderStream.readable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
writable: {

                  get: newFunc('writable', 10, function (){
            let res =  mm.memory.private_data.get(this).writable;
            if (debug)print('TextEncoderStream.writable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextEncoderStream.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextDecoderStream = newFunc('TextDecoderStream', 1, function (){print('TextDecoderStream.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextDecoderStream.prototype, {
encoding: {

                  get: newFunc('encoding', 10, function (){
            let res =  mm.memory.private_data.get(this).encoding;
            if (debug)print('TextDecoderStream.encoding.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
fatal: {

                  get: newFunc('fatal', 10, function (){
            let res =  mm.memory.private_data.get(this).fatal;
            if (debug)print('TextDecoderStream.fatal.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
ignoreBOM: {

                  get: newFunc('ignoreBOM', 10, function (){
            let res =  mm.memory.private_data.get(this).ignoreBOM;
            if (debug)print('TextDecoderStream.ignoreBOM.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
readable: {

                  get: newFunc('readable', 10, function (){
            let res =  mm.memory.private_data.get(this).readable;
            if (debug)print('TextDecoderStream.readable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
writable: {

                  get: newFunc('writable', 10, function (){
            let res =  mm.memory.private_data.get(this).writable;
            if (debug)print('TextDecoderStream.writable.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextDecoderStream.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;TextDecoder = newFunc('TextDecoder', 1, function (){print('TextDecoder.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(TextDecoder.prototype, {
encoding: {

                  get: newFunc('encoding', 10, function (){
            let res =  mm.memory.private_data.get(this).encoding;
            if (debug)print('TextDecoder.encoding.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
fatal: {

                  get: newFunc('fatal', 10, function (){
            let res =  mm.memory.private_data.get(this).fatal;
            if (debug)print('TextDecoder.fatal.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
ignoreBOM: {

                  get: newFunc('ignoreBOM', 10, function (){
            let res =  mm.memory.private_data.get(this).ignoreBOM;
            if (debug)print('TextDecoder.ignoreBOM.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
decode: {

            value: newFunc('decode', 10, function () {
                    if (debug)print('TextDecoder.decode.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('TextDecoder.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});