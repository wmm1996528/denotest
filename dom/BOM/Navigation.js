
;NavigationTransition = newFunc('NavigationTransition', 1, function (){print('NavigationTransition.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(NavigationTransition.prototype, {
navigationType: {

                  get: newFunc('navigationType', 10, function (){
            let res =  mm.memory.private_data.get(this).navigationType;
            if (debug)print('NavigationTransition.navigationType.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
from: {

                  get: newFunc('from', 10, function (){
            let res =  mm.memory.private_data.get(this).from;
            if (debug)print('NavigationTransition.from.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
finished: {

                  get: newFunc('finished', 10, function (){
            let res =  mm.memory.private_data.get(this).finished;
            if (debug)print('NavigationTransition.finished.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('NavigationTransition.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;NavigationHistoryEntry = newFunc('NavigationHistoryEntry', 1, function (){print('NavigationHistoryEntry.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(NavigationHistoryEntry.prototype, {
key: {

                  get: newFunc('key', 10, function (){
            let res =  mm.memory.private_data.get(this).key;
            if (debug)print('NavigationHistoryEntry.key.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
id: {

                  get: newFunc('id', 10, function (){
            let res =  mm.memory.private_data.get(this).id;
            if (debug)print('NavigationHistoryEntry.id.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
url: {

                  get: newFunc('url', 10, function (){
            let res =  mm.memory.private_data.get(this).url;
            if (debug)print('NavigationHistoryEntry.url.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
index: {

                  get: newFunc('index', 10, function (){
            let res =  mm.memory.private_data.get(this).index;
            if (debug)print('NavigationHistoryEntry.index.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
sameDocument: {

                  get: newFunc('sameDocument', 10, function (){
            let res =  mm.memory.private_data.get(this).sameDocument;
            if (debug)print('NavigationHistoryEntry.sameDocument.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
ondispose: {

                  get: newFunc('ondispose', 10, function (){
            let res =  mm.memory.private_data.get(this).ondispose;
            if (debug)print('NavigationHistoryEntry.ondispose.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('ondispose', 1, function (value){
                if (debug)print('NavigationHistoryEntry.ondispose.set', value)
            mm.memory.private_data.get(this).ondispose = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
getState: {

            value: newFunc('getState', 10, function () {
                    if (debug)print('NavigationHistoryEntry.getState.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('NavigationHistoryEntry.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;NavigationDestination = newFunc('NavigationDestination', 1, function (){print('NavigationDestination.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(NavigationDestination.prototype, {
key: {

                  get: newFunc('key', 10, function (){
            let res =  mm.memory.private_data.get(this).key;
            if (debug)print('NavigationDestination.key.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
id: {

                  get: newFunc('id', 10, function (){
            let res =  mm.memory.private_data.get(this).id;
            if (debug)print('NavigationDestination.id.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
url: {

                  get: newFunc('url', 10, function (){
            let res =  mm.memory.private_data.get(this).url;
            if (debug)print('NavigationDestination.url.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
index: {

                  get: newFunc('index', 10, function (){
            let res =  mm.memory.private_data.get(this).index;
            if (debug)print('NavigationDestination.index.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
sameDocument: {

                  get: newFunc('sameDocument', 10, function (){
            let res =  mm.memory.private_data.get(this).sameDocument;
            if (debug)print('NavigationDestination.sameDocument.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
getState: {

            value: newFunc('getState', 10, function () {
                    if (debug)print('NavigationDestination.getState.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('NavigationDestination.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;NavigationCurrentEntryChangeEvent = newFunc('NavigationCurrentEntryChangeEvent', 1, function (){print('NavigationCurrentEntryChangeEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(NavigationCurrentEntryChangeEvent.prototype, {
navigationType: {

                  get: newFunc('navigationType', 10, function (){
            let res =  mm.memory.private_data.get(this).navigationType;
            if (debug)print('NavigationCurrentEntryChangeEvent.navigationType.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
from: {

                  get: newFunc('from', 10, function (){
            let res =  mm.memory.private_data.get(this).from;
            if (debug)print('NavigationCurrentEntryChangeEvent.from.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('NavigationCurrentEntryChangeEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;Navigation = newFunc('Navigation', 1, function (){print('Navigation.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(Navigation.prototype, {
currentEntry: {

                  get: newFunc('currentEntry', 10, function (){
            let res =  mm.memory.private_data.get(this).currentEntry;
            if (debug)print('Navigation.currentEntry.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
transition: {

                  get: newFunc('transition', 10, function (){
            let res =  mm.memory.private_data.get(this).transition;
            if (debug)print('Navigation.transition.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
canGoBack: {

                  get: newFunc('canGoBack', 10, function (){
            let res =  mm.memory.private_data.get(this).canGoBack;
            if (debug)print('Navigation.canGoBack.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
canGoForward: {

                  get: newFunc('canGoForward', 10, function (){
            let res =  mm.memory.private_data.get(this).canGoForward;
            if (debug)print('Navigation.canGoForward.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
onnavigate: {

                  get: newFunc('onnavigate', 10, function (){
            let res =  mm.memory.private_data.get(this).onnavigate;
            if (debug)print('Navigation.onnavigate.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onnavigate', 1, function (value){
                if (debug)print('Navigation.onnavigate.set', value)
            mm.memory.private_data.get(this).onnavigate = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onnavigatesuccess: {

                  get: newFunc('onnavigatesuccess', 10, function (){
            let res =  mm.memory.private_data.get(this).onnavigatesuccess;
            if (debug)print('Navigation.onnavigatesuccess.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onnavigatesuccess', 1, function (value){
                if (debug)print('Navigation.onnavigatesuccess.set', value)
            mm.memory.private_data.get(this).onnavigatesuccess = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
onnavigateerror: {

                  get: newFunc('onnavigateerror', 10, function (){
            let res =  mm.memory.private_data.get(this).onnavigateerror;
            if (debug)print('Navigation.onnavigateerror.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onnavigateerror', 1, function (value){
                if (debug)print('Navigation.onnavigateerror.set', value)
            mm.memory.private_data.get(this).onnavigateerror = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
oncurrententrychange: {

                  get: newFunc('oncurrententrychange', 10, function (){
            let res =  mm.memory.private_data.get(this).oncurrententrychange;
            if (debug)print('Navigation.oncurrententrychange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('oncurrententrychange', 1, function (value){
                if (debug)print('Navigation.oncurrententrychange.set', value)
            mm.memory.private_data.get(this).oncurrententrychange = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
back: {

            value: newFunc('back', 10, function () {
                    if (debug)print('Navigation.back.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
entries: {

            value: newFunc('entries', 10, function () {
                    if (debug)print('Navigation.entries.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
forward: {

            value: newFunc('forward', 10, function () {
                    if (debug)print('Navigation.forward.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
navigate: {

            value: newFunc('navigate', 10, function () {
                    if (debug)print('Navigation.navigate.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
reload: {

            value: newFunc('reload', 10, function () {
                    if (debug)print('Navigation.reload.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
traverseTo: {

            value: newFunc('traverseTo', 10, function () {
                    if (debug)print('Navigation.traverseTo.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
updateCurrentEntry: {

            value: newFunc('updateCurrentEntry', 10, function () {
                    if (debug)print('Navigation.updateCurrentEntry.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
activation: {

                  get: newFunc('activation', 10, function (){
            let res =  mm.memory.private_data.get(this).activation;
            if (debug)print('Navigation.activation.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('Navigation.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});
;NavigateEvent = newFunc('NavigateEvent', 1, function (){print('NavigateEvent.call');mm.memory.private_data.set(this, {})})


Object.defineProperties(NavigateEvent.prototype, {
navigationType: {

                  get: newFunc('navigationType', 10, function (){
            let res =  mm.memory.private_data.get(this).navigationType;
            if (debug)print('NavigateEvent.navigationType.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
destination: {

                  get: newFunc('destination', 10, function (){
            let res =  mm.memory.private_data.get(this).destination;
            if (debug)print('NavigateEvent.destination.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
canTransition: {

                  get: newFunc('canTransition', 10, function (){
            let res =  mm.memory.private_data.get(this).canTransition;
            if (debug)print('NavigateEvent.canTransition.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
canIntercept: {

                  get: newFunc('canIntercept', 10, function (){
            let res =  mm.memory.private_data.get(this).canIntercept;
            if (debug)print('NavigateEvent.canIntercept.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
userInitiated: {

                  get: newFunc('userInitiated', 10, function (){
            let res =  mm.memory.private_data.get(this).userInitiated;
            if (debug)print('NavigateEvent.userInitiated.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
hashChange: {

                  get: newFunc('hashChange', 10, function (){
            let res =  mm.memory.private_data.get(this).hashChange;
            if (debug)print('NavigateEvent.hashChange.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
signal: {

                  get: newFunc('signal', 10, function (){
            let res =  mm.memory.private_data.get(this).signal;
            if (debug)print('NavigateEvent.signal.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
formData: {

                  get: newFunc('formData', 10, function (){
            let res =  mm.memory.private_data.get(this).formData;
            if (debug)print('NavigateEvent.formData.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
downloadRequest: {

                  get: newFunc('downloadRequest', 10, function (){
            let res =  mm.memory.private_data.get(this).downloadRequest;
            if (debug)print('NavigateEvent.downloadRequest.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
info: {

                  get: newFunc('info', 10, function (){
            let res =  mm.memory.private_data.get(this).info;
            if (debug)print('NavigateEvent.info.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
intercept: {

            value: newFunc('intercept', 10, function () {
                    if (debug)print('NavigateEvent.intercept.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
scroll: {

            value: newFunc('scroll', 10, function () {
                    if (debug)print('NavigateEvent.scroll.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
hasUAVisualTransition: {

                  get: newFunc('hasUAVisualTransition', 10, function (){
            let res =  mm.memory.private_data.get(this).hasUAVisualTransition;
            if (debug)print('NavigateEvent.hasUAVisualTransition.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
constructor: {

            value: newFunc('constructor', 10, function () {
                    if (debug)print('NavigateEvent.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
});

navigation = new Navigation();
