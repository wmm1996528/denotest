let cookie = '';
let proxy = false;
let debug = true;
let keepRandom = false;
let realRandom = Math.random
let script_name = 'script_name';
let domUrl = 'domUrl';
Utils = {
    registerNative: function (name,b) {
        return newFunc(name,19,this['native_'+name])
    }
}


function createNativeFunc(name, number, func, inName) {
    if (typeof inName !== 'string') {
        window['native_'+name] = func
        Utils.registerNative(name, name, func)
        return window[name]
    }else{
        print('inName', inName)
        Utils.registerNative(inName, name, func)
        window['native_'+name] = func
        return newFunc(name, number, func, inName)
    }

}



let _BigInt = Object.getOwnPropertyDescriptors(BigInt.prototype)

// BigInt = newFunc('BigInt', 1, function () {
//     print('BigInt.call');
//     mm.memory.private_data.set(this, {})
// });
//
//
// ;delete BigInt.prototype.constructor;
// ;
// Object.defineProperties(BigInt.prototype, {
//     [Symbol.toStringTag]: {
//         value: 'BigInt'
//     },
//
//     'constructor': _BigInt.constructor,
//     'toLocaleString': _BigInt.toLocaleString,
//     'toString': _BigInt.toString,
//     'valueOf': _BigInt.valueOf,
// })

let _ArrayBuffer = Object.getOwnPropertyDescriptors(ArrayBuffer.prototype)
ArrayBuffer = newFunc('ArrayBuffer', 1, function () {
    print('ArrayBuffer.call');
    mm.memory.private_data.set(this, {})
});

;delete ArrayBuffer.prototype.constructor;
;
Object.defineProperties(ArrayBuffer.prototype, {
    [Symbol.toStringTag]: {
        value: 'ArrayBuffer'
    },

    'constructor': _ArrayBuffer.constructor,
    'byteLength': _ArrayBuffer.byteLength,
    'slice': _ArrayBuffer.slice,
    // 'maxByteLength': _ArrayBuffer.maxByteLength,
    // 'resizable': _ArrayBuffer.resizable,
    // 'resize': _ArrayBuffer.resize,
    'transfer': {

        value: newFunc('transfer', 10, function () {

            if (!ArrayBuffer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ArrayBuffer.transfer.call')

        }), writable: true, enumerable: false, configurable: true,


    },
    'transferToFixedLength': {

        value: newFunc('transferToFixedLength', 10, function () {

            if (!ArrayBuffer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('ArrayBuffer.transferToFixedLength.call')

        }), writable: true, enumerable: false, configurable: true,


    },
    'detached': {

        get: newFunc('detached', 10, function () {


            if (!ArrayBuffer.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['detached'];
            if (debug) print('ArrayBuffer.detached.get', res)

            return res
        }, {get: true}), enumerable: false, configurable: true,

    },
})

TextEncoder = newFunc('TextEncoder', 1, function () {
    print('TextEncoder.call');
    mm.memory.private_data.set(this, {
    })
});


;delete TextEncoder.prototype.constructor;
;
Object.defineProperties(TextEncoder.prototype, {
    [Symbol.toStringTag]: {
        value: 'TextEncoder'
    },

    'encoding': {
        get: newFunc('encoding', 1, function (){
            return 'encoding'
        })
    },
    'encode': {
        value: newFunc('encode', 3, function encode(v) {
            if (v.indexOf('{"0":"accent-color') === 0){
                v = '@keyframes spin { \n  100% { transform: rotate(360deg); }\n}|@keyframes stroke { \n  100% { stroke-dashoffset: 0; }\n}|@keyframes scale { \n  0%, 100% { transform: none; }\n  50% { transform: scale3d(1, 1, 1); }\n}|@keyframes fill { \n  100% { transform: scale(1); }\n}|@keyframes fillfail { \n  100% { box-shadow: rgb(222, 19, 3) 0px 30px 0px 0px inset; }\n}|@keyframes fillfail-offlabel { \n  100% { box-shadow: rgb(35, 35, 35) 0px 0px 0px 30px inset; }\n}|@keyframes fillfail-offlabel-dark { \n  100% { box-shadow: rgb(255, 255, 255) 0px 0px 0px 30px inset; }\n}|@keyframes scale-up-center { \n  0% { transform: scale(0.01); }\n  100% { transform: scale(1); }\n}|@keyframes fade-in { \n  0% { opacity: 0; }\n  100% { opacity: 1; }\n}|@keyframes fireworks { \n  0% { transform: scale(0); opacity: 0; }\n  50% { transform: scale(1.5); opacity: 1; }\n  100% { transform: scale(2); opacity: 0; }\n}|@keyframes firework { \n  0% { opacity: 0; stroke-dashoffset: 8; }\n  30% { opacity: 1; }\n  100% { stroke-dashoffset: -8; }\n}|@keyframes unspin { \n  40% { stroke-width: 1px; stroke-linecap: square; stroke-dashoffset: 192; }\n  100% { stroke-width: 0; }\n}|html { margin: 0px; padding: 0px; width: 100%; height: 100%; overflow: hidden; }|body, .main-wrapper { margin: 0px; background-color: rgb(255, 255, 255); padding: 0px; width: 100%; height: 100%; overflow: hidden; color: rgb(35, 35, 35); font-family: -apple-system, system-ui, blinkmacsystemfont, "Segoe UI", roboto, oxygen, ubuntu, "Helvetica Neue", arial, sans-serif; font-size: 14px; font-weight: 400; -webkit-font-smoothing: antialiased; font-style: normal; }|h1 { margin: 16px 0px; text-align: center; line-height: 1.25; color: rgb(35, 35, 35); font-size: 16px; font-weight: 700; }|p { margin: 8px 0px; text-align: center; font-size: 20px; font-weight: 400; }|#content { box-sizing: border-box; display: flex; gap: 7px; align-items: center; justify-content: space-between; border: 1px solid rgb(224, 224, 224); background-color: rgb(250, 250, 250); height: 65px; user-select: none; }|#branding { display: inline-flex; flex-direction: column; margin: 0px 16px 0px 0px; text-align: right; }|#verifying-i, #overrun-i { display: flex; width: 30px; height: 30px; animation: 5s linear 0s infinite normal none running spin; }|#fail-i { width: 30px; height: 30px; display: flex; border-radius: 50%; box-shadow: rgb(222, 19, 3) 0px 0px 0px inset; stroke-width: 1px; fill: rgb(248, 248, 248); stroke: rgb(248, 248, 248); stroke-miterlimit: 10; animation: 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s 1 normal both running scale-up-center; }|#success-i { width: 30px; height: 30px; display: flex; border-radius: 50%; box-shadow: rgb(3, 129, 39) 0px 0px 0px inset; fill: rgb(248, 248, 248); stroke: rgb(248, 248, 248); stroke-miterlimit: 10; animation: 0.3s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s 1 normal both running scale-up-center; stroke-width: 6px; }|#success-i .p1 { stroke-dasharray: 242; stroke-dashoffset: 242; box-shadow: rgb(3, 129, 39) 0px 0px 0px inset; animation: 0.4s cubic-bezier(0.65, 0, 0.45, 1) 0.3s 1 normal forwards running stroke; }|#success-pre-i { width: 30px; height: 30px; }|#success-pre-i line { stroke: rgb(3, 129, 39); animation: 0.3s ease-out 0s 1 normal none running firework; stroke-width: 1; stroke-dasharray: 32, 32; stroke-dashoffset: -8; }|#success-text { opacity: 0; animation: 1s ease 0s 1 normal forwards running fade-in; }|.success-circle { stroke-dashoffset: 0; stroke-width: 2; stroke-miterlimit: 10; stroke: rgb(3, 129, 39); fill: rgb(3, 129, 39); }|#overrun-text, #timeout-text, #expired-text { margin: 0px; text-align: inherit; font-size: 14px; font-weight: 400; }|#error-overrun { margin-top: 2px; }|#timeout-refresh-link, #expired-text, #timeout-text, #expired-refresh-link, #error-overrun, #fr-overrun { display: inline-block; }|#fr-helper, #fr-overrun { margin-right: 0.25em; margin-left: 0px; }|#fr-helper-link, #fr-overrun-link { display: inline-block; }|.theme-dark #success-i { box-shadow: rgb(10, 169, 55) 0px 0px 0px inset; }|.theme-dark #success-i .p1 { box-shadow: rgb(10, 169, 55) 0px 0px 0px inset; }|.theme-dark .success-circle { stroke: rgb(10, 169, 55); fill: rgb(10, 169, 55); }|.theme-dark .expired-circle, .theme-dark .timeout-circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 2; stroke-miterlimit: 10; stroke: rgb(153, 153, 153); fill: rgb(153, 153, 153); }|.theme-dark #expired-i, .theme-dark #timeout-i { width: 30px; height: 30px; display: flex; border-radius: 50%; box-shadow: rgb(153, 153, 153) 0px 0px 0px inset; stroke-width: 1px; fill: rgb(248, 248, 248); stroke: rgb(248, 248, 248); stroke-miterlimit: 10; }|.theme-dark #challenge-overlay { background-color: rgb(34, 34, 34); }|.theme-dark #challenge-overlay, .theme-dark #challenge-error-text { color: rgb(255, 162, 153); }|.theme-dark #challenge-overlay a, .theme-dark #challenge-error-text a { color: rgb(187, 187, 187); }|.theme-dark #challenge-overlay a:visited, .theme-dark #challenge-overlay a:link, .theme-dark #challenge-error-text a:visited, .theme-dark #challenge-error-text a:link { color: rgb(187, 187, 187); }|.theme-dark #challenge-overlay a:hover, .theme-dark #challenge-overlay a:active, .theme-dark #challenge-overlay a:focus, .theme-dark #challenge-error-text a:hover, .theme-dark #challenge-error-text a:active, .theme-dark #challenge-error-text a:focus { color: rgb(148, 148, 148); }|.theme-dark .cb-lb .cb-i { border: 2px solid rgb(218, 218, 218); background-color: rgb(34, 34, 34); }|.theme-dark .cb-lb input:focus ~ .cb-i, .theme-dark .cb-lb input:active ~ .cb-i { border: 2px solid rgb(251, 173, 65); }|.theme-dark .cb-lb input:checked ~ .cb-i { background-color: rgb(109, 109, 109); }|.theme-dark .cb-lb input:checked ~ .cb-i::after { border-color: rgb(251, 173, 65); }|.theme-dark h1 { color: rgb(255, 255, 255); }|.theme-dark #challenge-error-title { color: rgb(255, 162, 153); }|.theme-dark #challenge-error-title a { color: rgb(187, 187, 187); }|.theme-dark #challenge-error-title a:visited, .theme-dark #challenge-error-title a:link { color: rgb(187, 187, 187); }|.theme-dark #challenge-error-title a:hover, .theme-dark #challenge-error-title a:active, .theme-dark #challenge-error-title a:focus { color: rgb(148, 148, 148); }|.theme-dark #terms { color: rgb(187, 187, 187); }|.theme-dark #terms a { white-space: nowrap; color: rgb(187, 187, 187); }|.theme-dark #terms a:visited, .theme-dark #terms a:link { color: rgb(187, 187, 187); }|.theme-dark #terms a:hover, .theme-dark #terms a:active, .theme-dark #terms a:focus { color: rgb(148, 148, 148); }|.theme-dark #content { border-color: rgb(121, 121, 121); background-color: rgb(35, 35, 35); }|.theme-dark #qr { fill: rgb(243, 128, 32); }|.theme-dark .logo-text { fill: rgb(255, 255, 255); }|.theme-dark #fr-helper-loop > a { color: rgb(187, 187, 187); }|.theme-dark #fr-helper-loop > a:visited, .theme-dark #fr-helper-loop > a:link { color: rgb(187, 187, 187); }|.theme-dark #fr-helper-loop > a:active, .theme-dark #fr-helper-loop > a:hover, .theme-dark #fr-helper-loop > a:focus { color: rgb(148, 148, 148); }|.theme-dark #timeout-refresh-link, .theme-dark #expired-refresh-link { color: rgb(187, 187, 187); }|.theme-dark #timeout-refresh-link:visited, .theme-dark #timeout-refresh-link:link, .theme-dark #expired-refresh-link:visited, .theme-dark #expired-refresh-link:link { color: rgb(187, 187, 187); }|.theme-dark #timeout-refresh-link:active, .theme-dark #timeout-refresh-link:hover, .theme-dark #timeout-refresh-link:focus, .theme-dark #expired-refresh-link:active, .theme-dark #expired-refresh-link:hover, .theme-dark #expired-refresh-link:focus { color: rgb(148, 148, 148); }|.theme-dark .overlay { border-color: rgb(255, 162, 153); color: rgb(255, 162, 153); }|.theme-dark .error-message { color: rgb(255, 162, 153); }|.theme-dark .error-message a { color: rgb(255, 162, 153); }|.theme-dark .error-message a:link, .theme-dark .error-message a:visited { color: rgb(255, 162, 153); }|#challenge-overlay { position: absolute; top: 0px; z-index: 9999; background-color: rgb(250, 250, 250); line-height: 10px; color: rgb(222, 19, 3); font-size: 9px; }|#challenge-overlay a { color: rgb(35, 35, 35); }|#challenge-overlay a:visited, #challenge-overlay a:link { color: rgb(35, 35, 35); }|#challenge-overlay a:active, #challenge-overlay a:hover, #challenge-overlay a:focus { color: rgb(22, 99, 121); }|#logo { margin-bottom: 1px; height: 25px; }|.failure-circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 2; stroke-miterlimit: 10; stroke: rgb(222, 19, 3); fill: rgb(222, 19, 3); animation: 0.6s cubic-bezier(0.65, 0, 0.45, 1) 0s 1 normal forwards running stroke; }|.failure-cross { fill: rgb(255, 255, 255); transform-origin: center bottom; }|@keyframes fade-in-animation { \n  0% { fill: rgb(222, 19, 3); stroke: rgb(222, 19, 3); }\n  100% { fill: rgb(255, 255, 255); stroke: rgb(255, 255, 255); }\n}|.failure-cross { animation: 0.1s cubic-bezier(1, 1, 0, 1) 0.4s 1 normal backwards running fade-in-animation; }|.cb-c { display: flex; align-items: center; margin-left: 16px; cursor: pointer; text-align: left; }|.cb-lb { display: grid; place-items: center; }|.cb-lb input { grid-area: 1 / 1; opacity: 0; z-index: 9999; margin: 0px; cursor: pointer; width: 24px; height: 24px; }|.cb-lb input:focus ~ .cb-i, .cb-lb input:active ~ .cb-i { border: 2px solid rgb(196, 77, 14); }|.cb-lb input:checked ~ .cb-i { transform: rotate(0deg) scale(1); opacity: 1; border-radius: 5px; background-color: rgb(255, 255, 255); }|.cb-lb input:checked ~ .cb-i::after { top: 0px; left: 5px; transform: rotate(45deg) scale(1); border-style: solid; border-color: rgb(196, 77, 14); border-image: initial; border-width: 0px 4px 4px 0px; border-radius: 0px; width: 6px; height: 12px; }|.cb-lb .cb-i { box-sizing: border-box; grid-area: 1 / 1; transition: 0.1s ease-in; z-index: 9998; border: 2px solid rgb(109, 109, 109); border-radius: 3px; background: rgb(255, 255, 255); width: 24px; height: 24px; animation: 0.4s cubic-bezier(0.55, 0.085, 0.68, 0.53) 0s 1 normal both running scale-up-center; }|.cb-lb .cb-i::after { position: absolute; border-radius: 5px; content: ""; }|.cb-lb .cb-lb-t { grid-column: 2; margin-left: 8px; }|.size-compact { font-size: 14px; }|.size-compact #content { display: flex; flex-flow: column; gap: 0px; place-content: space-between; align-items: flex-start; padding: 12px 0px; height: 140px; }|.size-compact .link-spacer { margin-right: 3px; margin-left: 3px; }|.size-compact .cb-c { margin: 0px 12px; text-align: left; }|.size-compact .cb-container { margin: 0px 12px; }|.size-compact #logo { margin-bottom: 0px; height: 25px; }|.size-compact #branding { flex-flow: row-reverse wrap; place-content: center flex-start; align-self: flex-end; margin: 0px 12px; padding-right: 0px; text-align: right; }|.size-compact #terms { text-align: right; }|.size-compact #qr { text-align: center; }|.size-compact #challenge-error-title { margin-top: 3px; width: auto; }|.size-compact #fail { display: flex; flex-flow: row; place-content: center space-evenly; align-items: center; visibility: visible; line-height: 13px; }|.size-compact #expired-text, .size-compact #overrun-text, .size-compact #timeout-text { display: block; }|.size-compact #expired-refresh-link, .size-compact #timeout-refresh-link { margin: 0px; }|.size-compact .error-message a { margin: 0px; }|.size-compact .error-message span { display: block; }|.size-compact .error-message.ltr { text-align: end; }|.size-compact .error-message.ltr #fr-overrun { margin-right: 0px; margin-left: 0px; }|.cb-lb-t { display: flex; flex-flow: row-reverse; place-content: center flex-end; align-items: center; }|.rtl { direction: rtl; }|.rtl .cb-lb-t { margin-right: 8px; margin-left: 0px; padding: 0px; }|.rtl #success-i, .rtl #verifying-i, .rtl #fail-i, .rtl #overrun-i, .rtl #timeout-i, .rtl #expired-i { left: 255px; }|.rtl #fr-helper, .rtl #fr-overrun { margin-right: 0px; margin-left: 0.25em; }|.rtl #branding { margin: 0px 0px 0px 16px; padding-right: 0px; padding-left: 0px; width: 90px; text-align: left; }|.rtl.size-compact #branding { align-self: flex-start; justify-content: flex-end; margin: 0px 12px 0px 0px; padding-right: 0px; padding-left: 0px; text-align: left; }|.rtl.size-compact #terms { text-align: right; }|.rtl.size-compact #cf-stage { padding-right: 48px; }|.rtl.size-compact .cb-container, .rtl.size-compact .cb-c { margin: 0px 12px; }|.rtl .cb-lb { text-align: right; }|.rtl .cb-lb input { right: 18px; }|.rtl .cb-lb input:checked ~ .cb-i::after { right: 6px; }|.rtl .cb-lb .cb-i { right: 18px; }|.rtl .cb-c { margin-right: 15px; margin-left: 0px; text-align: right; }|.rtl .cb-container { margin-right: 16px; margin-left: 0px; }|#terms { display: inline-flex; justify-content: flex-end; line-height: 10px; color: rgb(35, 35, 35); font-size: 8px; font-style: normal; }|#terms .link-spacer { margin: 0px 0.2rem; }|#terms a { display: inline-block; text-decoration: underline; line-height: 10px; color: rgb(35, 35, 35); font-size: 8px; font-weight: 400; font-style: normal; }|#terms a:link, #terms a:visited { text-decoration: underline; line-height: 10px; color: rgb(35, 35, 35); font-size: 8px; font-weight: 400; font-style: normal; }|#terms a:hover, #terms a:focus, #terms a:active { text-decoration: underline; color: rgb(22, 99, 121); }|#challenge-error-title { position: absolute; top: 0px; margin: 5px 0px; width: 200px; height: 55px; color: rgb(222, 19, 3); font-size: 11px; }|#challenge-error-title a { color: rgb(35, 35, 35); }|#challenge-error-title a:hover, #challenge-error-title a:focus, #challenge-error-title a:active { text-decoration: underline; color: rgb(22, 99, 121); }|#challenge-error-title a:link, #challenge-error-title a:visited { color: rgb(35, 35, 35); }|#challenge-error-title .i-wrapper { display: none; }|.unspun .circle { animation: 0.7s cubic-bezier(0.65, 0, 0.45, 1) 0s 1 normal forwards running unspin; }|.circle { stroke-width: 3px; stroke-linecap: round; stroke: rgb(3, 129, 39); stroke-dasharray: 0, 100, 0; stroke-dashoffset: 200; stroke-miterlimit: 1; stroke-linejoin: round; }|.main-wrapper { border-spacing: 0px; }|.p1 { fill: none; stroke: rgb(255, 255, 255); }|.offlabel.size-compact #content { place-content: center; }|.offlabel.size-compact .cb-lb .cb-i, .offlabel.size-compact .cb-lb input { top: 58px; }|.expired-circle, .timeout-circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 2; stroke-miterlimit: 10; stroke: rgb(121, 121, 121); fill: rgb(121, 121, 121); }|#expired-i, #timeout-i { width: 30px; height: 30px; display: flex; border-radius: 50%; box-shadow: rgb(121, 121, 121) 0px 0px 0px inset; stroke-width: 1px; fill: rgb(248, 248, 248); stroke: rgb(248, 248, 248); stroke-miterlimit: 10; animation: 0.3s ease-in-out 0.9s 1 normal both running scale; }|.cb-container { display: grid; grid-template-columns: 30px auto; gap: 12px; align-items: center; margin-left: 16px; }|.logo-text { fill: rgb(0, 0, 0); }|#qr { fill: rgb(35, 35, 35); }|#qr svg { width: 40px; height: 40px; }|body.theme-dark, .main-wrapper.theme-dark { background-color: rgb(35, 35, 35); color: rgb(255, 255, 255); }|#fr-helper-loop > a { display: block; color: rgb(35, 35, 35); }|#fr-helper-loop > a:link, #fr-helper-loop > a:visited { display: block; color: rgb(35, 35, 35); }|#fr-helper-loop > a:active, #fr-helper-loop > a:hover, #fr-helper-loop > a:focus { color: rgb(22, 99, 121); }|.error-message { color: rgb(222, 19, 3); font-size: 9px; font-weight: 500; }|.error-message a:link, .error-message a:visited { color: rgb(222, 19, 3); }|.error-message a:active, .error-message a:hover, .error-message a:focus { color: rgb(22, 99, 121); }|.error-message.ltr { direction: ltr; }|.error-message.ltr #fr-overrun { margin-right: 0.25em; margin-left: 0px; }|#expired-refresh-link, #timeout-refresh-link { color: rgb(35, 35, 35); }|#expired-refresh-link:link, #expired-refresh-link:visited, #timeout-refresh-link:link, #timeout-refresh-link:visited { color: rgb(35, 35, 35); }|#expired-refresh-link:active, #expired-refresh-link:hover, #expired-refresh-link:focus, #timeout-refresh-link:active, #timeout-refresh-link:hover, #timeout-refresh-link:focus { color: rgb(22, 99, 121); }|html.rtl { direction: rtl; }|.lang-de-de.size-compact #branding, .lang-vi-vn.size-compact #branding, .lang-bg-bg.size-compact #branding, .lang-el-gr.size-compact #branding, .lang-hi-in.size-compact #branding, .lang-ko-kr.size-compact #branding, .lang-zh.size-compact #branding, .lang-zh-cn.size-compact #branding, .lang-zh-tw.size-compact #branding, .lang-sv-se.size-compact #branding { flex-direction: column; }|@media (max-width: 350px) {\n  .lang-ja-jp #terms, .lang-lt-lt #terms, .lang-pl-pl #terms, .lang-ro-ro #terms, .lang-ru-ru #terms, .lang-sk-sk #terms, .lang-tl-ph #terms, .lang-uk-ua #terms, .lang-vi-vn #terms { display: flex; flex-direction: column; }\n  .lang-ja-jp #terms .link-spacer, .lang-lt-lt #terms .link-spacer, .lang-pl-pl #terms .link-spacer, .lang-ro-ro #terms .link-spacer, .lang-ru-ru #terms .link-spacer, .lang-sk-sk #terms .link-spacer, .lang-tl-ph #terms .link-spacer, .lang-uk-ua #terms .link-spacer, .lang-vi-vn #terms .link-spacer { display: none; }\n}|.lang-ja-jp.size-compact #terms, .lang-tl-ph.size-compact #terms, .lang-pl-pl.size-compact #terms, .lang-uk-ua.size-compact #terms, .lang-vi-vn.size-compact #terms { display: inline-flex; flex-direction: row; }|.lang-ja-jp.size-compact #terms .link-spacer, .lang-tl-ph.size-compact #terms .link-spacer, .lang-pl-pl.size-compact #terms .link-spacer, .lang-uk-ua.size-compact #terms .link-spacer, .lang-vi-vn.size-compact #terms .link-spacer { display: block; }|.lang-bg-bg.size-compact #verifying-text, .lang-el-gr.size-compact #verifying-text { font-size: 12px; }|.lang-bg-bg.size-compact #challenge-overlay, .lang-bg-bg.size-compact #challenge-error-text, .lang-el-gr.size-compact #challenge-overlay, .lang-el-gr.size-compact #challenge-error-text { line-height: 10px; font-size: 9px; }|.lang-bg-bg.size-compact #challenge-error, .lang-el-gr.size-compact #challenge-error { margin: 0px 10px; }|.lang-bg-bg.size-compact #branding, .lang-el-gr.size-compact #branding { margin: 0px 10px 0px 0px; }|.lang-vi-vn.size-compact #challenge-overlay, .lang-vi-vn.size-compact #challenge-error-text, .lang-de-de.size-compact #challenge-overlay, .lang-de-de.size-compact #challenge-error-text { line-height: 10px; font-size: 9px; }|.lang-vi-vn.size-compact #challenge-error, .lang-de-de.size-compact #challenge-error { margin: 0px 10px; }|.lang-vi-vn.size-compact #branding, .lang-de-de.size-compact #branding { margin: 0px 10px 0px 0px; }|.lang-de-de #expiry-msg #expired-refresh-link, .lang-de-de #expiry-msg #timeout-refresh-link, .lang-de-de #timeout-msg #expired-refresh-link, .lang-de-de #timeout-msg #timeout-refresh-link, .lang-hu-hu #expiry-msg #expired-refresh-link, .lang-hu-hu #expiry-msg #timeout-refresh-link, .lang-hu-hu #timeout-msg #expired-refresh-link, .lang-hu-hu #timeout-msg #timeout-refresh-link, .lang-fi-fi #expiry-msg #expired-refresh-link, .lang-fi-fi #expiry-msg #timeout-refresh-link, .lang-fi-fi #timeout-msg #expired-refresh-link, .lang-fi-fi #timeout-msg #timeout-refresh-link, .lang-ms-my #expiry-msg #expired-refresh-link, .lang-ms-my #expiry-msg #timeout-refresh-link, .lang-ms-my #timeout-msg #expired-refresh-link, .lang-ms-my #timeout-msg #timeout-refresh-link, .lang-lt-lt #expiry-msg #expired-refresh-link, .lang-lt-lt #expiry-msg #timeout-refresh-link, .lang-lt-lt #timeout-msg #expired-refresh-link, .lang-lt-lt #timeout-msg #timeout-refresh-link, .lang-ro-ro #expiry-msg #expired-refresh-link, .lang-ro-ro #expiry-msg #timeout-refresh-link, .lang-ro-ro #timeout-msg #expired-refresh-link, .lang-ro-ro #timeout-msg #timeout-refresh-link, .lang-uk-ua #expiry-msg #expired-refresh-link, .lang-uk-ua #expiry-msg #timeout-refresh-link, .lang-uk-ua #timeout-msg #expired-refresh-link, .lang-uk-ua #timeout-msg #timeout-refresh-link, .lang-fr-fr #expiry-msg #expired-refresh-link, .lang-fr-fr #expiry-msg #timeout-refresh-link, .lang-fr-fr #timeout-msg #expired-refresh-link, .lang-fr-fr #timeout-msg #timeout-refresh-link { margin-left: 0px; }|.lang-hr-hr.size-compact #verifying-text, .lang-pl-pl.size-compact #verifying-text, .lang-ms-my.size-compact #verifying-text { font-size: 12px; }|@media (max-width: 350px) {\n  .lang-es-es #success-text { font-size: 12px; }\n}|.lang-pl-pl.size-compact #fail { gap: 6px; }|.lang-pl-pl.size-compact #fail-text, .lang-pl-pl.size-compact #timeout-text, .lang-pl-pl.size-compact #timeout-refresh-link { font-size: 12px; }|.lang-pl-pl.size-compact #terms { display: inline-flex; }|.lang-pl-pl.size-compact #terms .link-spacer { display: block; }|.lang-tl-ph #timeout-text, .lang-tl-ph #expired-text, .lang-tr-tr #timeout-text, .lang-tr-tr #expired-text, .lang-ro-ro #timeout-text, .lang-ro-ro #expired-text, .lang-pl-pl #timeout-text, .lang-pl-pl #expired-text, .lang-uk-ua #timeout-text, .lang-uk-ua #expired-text, .lang-ja-jp #timeout-text, .lang-ja-jp #expired-text { display: block; }|.lang-fi-fi.size-compact #timeout, .lang-fi-fi.size-compact #expired { gap: 6px; }|@media (max-width: 350px) {\n  .lang-de-de #terms { display: flex; flex-direction: column; }\n  .lang-de-de #terms .link-spacer { display: none; }\n}|@media (max-width: 350px) {\n  .lang-de-de #timeout-msg, .lang-de-de #timeout-text, .lang-de-de #expiry-msg, .lang-de-de #expired-text { font-size: 12px; }\n}|.lang-de-de.size-compact #timeout { gap: 6px; margin-left: 4px; }|.lang-de-de.size-compact #timeout-text, .lang-de-de.size-compact #timeout-refresh-link { font-size: 11px; }|.lang-de-de.size-compact .cb-lb-t { font-size: 12px; }|.lang-ja-jp #branding { display: flex; flex-direction: column; margin: 0px 16px 0px 0px; padding-top: 5px; text-align: right; }|.lang-ja-jp .cb-lb-t { font-size: 11px; }|.lang-ja-jp.size-compact #challenge-overlay, .lang-ja-jp.size-compact #challenge-error-text { line-height: 10px; }|@media (max-width: 350px) {\n  .lang-ru-ru #terms { display: flex; flex-direction: column; }\n  .lang-ru-ru #terms .link-spacer { display: none; }\n}|.lang-ru-ru.size-compact #verifying-text { font-size: 10px; }|.lang-ru-ru.size-compact .cb-lb .cb-i { left: 11px; }|.lang-ru-ru.size-compact .cb-lb input { left: 11px; }|.lang-ru-ru.size-compact #challenge-overlay, .lang-ru-ru.size-compact #challenge-error-text { line-height: 10px; font-size: 8px; }|.lang-ru-ru #challenge-error { margin: 8px 4px; }|.lang-bg-bg.size-compact #verifying-text { font-size: 12px; }|.overlay { position: absolute; top: 5px; left: 5px; opacity: 0.9; z-index: 2147483647; border: 1px solid rgb(222, 19, 3); background-color: rgb(255, 255, 255); padding: 2px; height: auto; line-height: 8px; color: rgb(222, 19, 3); font-family: consolas, "Liberation Mono", courier, monospace; font-size: 8px; }|.lang-it-it.size-compact #challenge-overlay, .lang-it-it.size-compact #challenge-error-text { line-height: 10px; font-size: 9px; }|.lang-id-id.size-compact #challenge-overlay, .lang-id-id.size-compact #challenge-error-text { line-height: 10px; }|@media (prefers-color-scheme: dark) {\n  body.theme-auto, .main-wrapper.theme-auto { background-color: rgb(35, 35, 35); color: rgb(255, 255, 255); }\n  .theme-auto #success-i { box-shadow: rgb(10, 169, 55) 0px 0px 0px inset; }\n  .theme-auto #success-i .p1 { box-shadow: rgb(10, 169, 55) 0px 0px 0px inset; }\n  .theme-auto .success-circle { stroke: rgb(10, 169, 55); fill: rgb(10, 169, 55); }\n  .theme-auto .expired-circle, .theme-auto .timeout-circle { stroke-dasharray: 166; stroke-dashoffset: 166; stroke-width: 2; stroke-miterlimit: 10; stroke: rgb(153, 153, 153); fill: rgb(153, 153, 153); }\n  .theme-auto #expired-i, .theme-auto #timeout-i { width: 30px; height: 30px; display: flex; border-radius: 50%; box-shadow: rgb(153, 153, 153) 0px 0px 0px inset; stroke-width: 1px; fill: rgb(248, 248, 248); stroke: rgb(248, 248, 248); stroke-miterlimit: 10; }\n  .theme-auto #challenge-overlay { background-color: rgb(34, 34, 34); }\n  .theme-auto #challenge-overlay, .theme-auto #challenge-error-text { color: rgb(255, 162, 153); }\n  .theme-auto #challenge-overlay a, .theme-auto #challenge-error-text a { color: rgb(187, 187, 187); }\n  .theme-auto #challenge-overlay a:visited, .theme-auto #challenge-overlay a:link, .theme-auto #challenge-error-text a:visited, .theme-auto #challenge-error-text a:link { color: rgb(187, 187, 187); }\n  .theme-auto #challenge-overlay a:hover, .theme-auto #challenge-overlay a:active, .theme-auto #challenge-overlay a:focus, .theme-auto #challenge-error-text a:hover, .theme-auto #challenge-error-text a:active, .theme-auto #challenge-error-text a:focus { color: rgb(148, 148, 148); }\n  .theme-auto .cb-lb .cb-i { border: 2px solid rgb(218, 218, 218); background-color: rgb(34, 34, 34); }\n  .theme-auto .cb-lb input:focus ~ .cb-i, .theme-auto .cb-lb input:active ~ .cb-i { border: 2px solid rgb(251, 173, 65); }\n  .theme-auto .cb-lb input:checked ~ .cb-i { background-color: rgb(109, 109, 109); }\n  .theme-auto .cb-lb input:checked ~ .cb-i::after { border-color: rgb(251, 173, 65); }\n  .theme-auto h1 { color: rgb(255, 255, 255); }\n  .theme-auto #challenge-error-title { color: rgb(255, 162, 153); }\n  .theme-auto #challenge-error-title a { color: rgb(187, 187, 187); }\n  .theme-auto #challenge-error-title a:visited, .theme-auto #challenge-error-title a:link { color: rgb(187, 187, 187); }\n  .theme-auto #challenge-error-title a:hover, .theme-auto #challenge-error-title a:active, .theme-auto #challenge-error-title a:focus { color: rgb(148, 148, 148); }\n  .theme-auto #terms { color: rgb(187, 187, 187); }\n  .theme-auto #terms a { white-space: nowrap; color: rgb(187, 187, 187); }\n  .theme-auto #terms a:visited, .theme-auto #terms a:link { color: rgb(187, 187, 187); }\n  .theme-auto #terms a:hover, .theme-auto #terms a:active, .theme-auto #terms a:focus { color: rgb(148, 148, 148); }\n  .theme-auto #content { border-color: rgb(121, 121, 121); background-color: rgb(35, 35, 35); }\n  .theme-auto #qr { fill: rgb(243, 128, 32); }\n  .theme-auto .logo-text { fill: rgb(255, 255, 255); }\n  .theme-auto #fr-helper-loop > a { color: rgb(187, 187, 187); }\n  .theme-auto #fr-helper-loop > a:visited, .theme-auto #fr-helper-loop > a:link { color: rgb(187, 187, 187); }\n  .theme-auto #fr-helper-loop > a:active, .theme-auto #fr-helper-loop > a:hover, .theme-auto #fr-helper-loop > a:focus { color: rgb(148, 148, 148); }\n  .theme-auto #timeout-refresh-link, .theme-auto #expired-refresh-link { color: rgb(187, 187, 187); }\n  .theme-auto #timeout-refresh-link:visited, .theme-auto #timeout-refresh-link:link, .theme-auto #expired-refresh-link:visited, .theme-auto #expired-refresh-link:link { color: rgb(187, 187, 187); }\n  .theme-auto #timeout-refresh-link:active, .theme-auto #timeout-refresh-link:hover, .theme-auto #timeout-refresh-link:focus, .theme-auto #expired-refresh-link:active, .theme-auto #expired-refresh-link:hover, .theme-auto #expired-refresh-link:focus { color: rgb(148, 148, 148); }\n  .theme-auto .overlay { border-color: rgb(255, 162, 153); color: rgb(255, 162, 153); }\n  .theme-auto .error-message { color: rgb(255, 162, 153); }\n  .theme-auto .error-message a { color: rgb(255, 162, 153); }\n  .theme-auto .error-message a:link, .theme-auto .error-message a:visited { color: rgb(255, 162, 153); }\n}|.rBmdf5 { display: grid !important; }0'
            }
            if ( v === '0'){
                v = '5087.2890625'
            }
            if (v === '0.1111'){
                v = '0'
            }
            if ( v === '99.0234375'){
                v = '83.9800615310669'
            }
            if ( v === '0.07711145582081869'){
                v = '1.9986919046497347'
            }
            // debugger;
            let res = mm.memory.private_data.get(this).that.encode(v)
            print('TextEncoder.encode.call', [v], '=', res)
            // if (v.indexOf('["Ypof","function ') > -1){
            //     debugger;
            // }
            // crypto.subtle.digest('SHA-256', res).then(eee=>{
            //     print('TextEncoder.encode.call.res',res.slice(0,20)+'', arrayBufferToHex(eee))
            // })
            return res;
        })
    },
    'encodeInto': {
        value: newFunc('encodeInto', 3, function encodeInto(v) {
            print('TextEncoder.encodeInto.call')

        })
    },
    'constructor':{
        value: newFunc('constructor', 3, function constructor(v) {
            print('TextEncoder.constructor.call')
            return res;
        })
    },
})


Boolean = newFunc('Boolean', 1, function () {
    print('Boolean.call');
    mm.memory.private_data.set(this, {})
});


;delete Boolean.prototype.constructor;
;
Object.defineProperties(Boolean.prototype, {
    'constructor': {
        value: newFunc('constructor', 3, function constructor(v) {
            print('Boolean.constructor.call')
            return res;
        })
    },
    'toString': {
        value: newFunc('toString', 3, function toString(v) {
            print('Boolean.toString.call')
            return res;
        })
    },
    'valueOf': {
        value: newFunc('valueOf', 3, function valueOf(v) {
            print('Boolean.valueOf.call')
            return res;
        })
    },
})
let _Function = Object.getOwnPropertyDescriptors(Function.prototype)
let _Function_ = Function;
Function = newFunc('Function', 1, function () {
    // print('Function.call');
    // mm.memory.private_data.set(this, {})
    return new _Function_(...arguments)
});


;delete Function.prototype.constructor;
;
Object.defineProperties(Function.prototype, {
    [Symbol.toStringTag]: {
        value: 'Function'
    },

    'length': _Function.length,
    'name': _Function.name,

    'arguments': _Function.arguments,
    'caller': _Function.caller,
    'constructor': _Function.constructor,
    'apply': _Function.apply,
    'bind': _Function.bind,
    'call': _Function.call,
    'toString': _Function.toString,
})


if (keepRandom === true) {
    // let nowTime = 1719907617588;
    // Date.now = function now() { return nowTime++ };
    // Date.parse = function () { return nowTime++ };
    // Date.prototype.valueOf = function () { return nowTime++ };
    // Date.prototype.getTime = function () { return nowTime++ };
    // // performance.now = function now(){ return 104536.6000000001}
    // // Math.random = function random() { return 0.08636862211354912 };
    // // crypto.getRandomValues = function(typedArray) {
    // //     let fixedValues = new Uint8Array([42, 17, 23, 5, 10, 9, 77, 8, 33, 6]);
    // //     for (let i = 0; i < typedArray.length; i++) {
    // //         typedArray[i] = fixedValues[i];
    // //     }return typedArray;
    // // };

    // Date.now = function now() {
    //     return 1729826079104
    // };
    // Date.parse = function () {
    //     return 1729826079104
    // };
    // Date.prototype.valueOf = function () {
    //     return 1729826079104
    // };
    // Date.prototype.getTime = function () {
    //     return 1729826079104
    // };
    // Date.prototype.toString = function () {
    //     return 1729826079104
    // };
    // Performance.prototype.now = function now() {
    //     return Number('1729826079104'.slice(8))
    // }
    times = 0
    // Math.random = function random() {
    //     // return 0.08636862211354912
    //     return 0.5
    // };

//
}
// const params = new CronetEngineParams()
// params.enableQuic = true // by default
// const engine = new CronetEngine()
var mm = {
    globalListeners: {},
    net: {
        // engine:
    },
    allNodes: new WeakMap(),
    allIframes: [],
};


// debugger;
mm.abs = function (params, value) {
    return typeof (params) === "undefined" ? value : params
}
mm.safe_Objattribute = function (target, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute) {
    let desces = Object.getOwnPropertyDescriptors(target.prototype)
    for (let i = 0; i < $safe_set_attribute.length; i++) {
        let set_attr = $safe_set_attribute[i];
        Object.defineProperty(target.prototype, set_attr, {
            set: newFunc(set_attr, 1, desces[set_attr].set, {set: true}),
            enumerable: true, configurable: true,
        })
    }
    for (let i = 0; i < $safe_get_attribute.length; i++) {
        let set_attr = $safe_get_attribute[i];
        Object.defineProperty(target.prototype, set_attr, {
            get: newFunc(set_attr, 0, desces[set_attr].get, {get: true}),
            enumerable: true, configurable: true,

        })
    }
    for (let i = 0; i < $safe_func_attribute.length; i++) {
        let set_attr = $safe_func_attribute[i];
        Object.defineProperty(target.prototype, set_attr, {
            value: newFunc(set_attr, 1, desces[set_attr].value),
            enumerable: true, configurable: true,

        })
    }

}


mm.memory = {
    $createObj_key: 'mm',       // 只有输入对的密码, 才能创建对象
    private_data: new WeakMap(),  // new出来的对象
    timer_map: {0: null},       // 定时器map
    plugin: {},
    mimeType: {},
    pluginArray: {},
    mimeTypeArray: {},
    listeners: new Map(),         // 保存添加的事件
    // allListeners: new Proxy(new Map(), {
    //     set: function (target, p, newValue, receiver) {
    //         print('allListeners.set', p,'=',newValue)
    //         return Reflect.set(target, p, newValue, receiver);
    //
    //     }
    // }),
    allListeners: new Map(),
    eventObj: {},
    htmlElements: {},             // 保存 createElement 方法创造节点需要用到得类
    runElementList: [],
    htmlCollection: [],           // 储存 getElementsByTagName， 返回的节点对象
    logs: [], // 日志储存
    // cc: cc,
    script_name: script_name,
};
//去掉所有的空格（中文空格、英文空格都会被替换）
mm.compress_jsCode = function (string_js) {
    if (string_js.length >= 100) {
        let string = string_js.replace(/\r\n/g, "");
        string = string.replace(/\n/g, "");
        return string.replace(/\s/g, "").slice(0, 100) + "......";
    }
    return string_js
};
// mm.proxy = function (obj, objname, type) {
//     function get_attribute_type(value) {
//         return Object.prototype.toString.call(value);
//     }
//
//     function get_method_handler(watchName) {
//         return {
//             apply(target, thisArg, argArray) {
//                 let result = Reflect.apply(target, thisArg, argArray);
//                 if (thisArg === console && target.name === "log") {
//                     return result;
//                 }
//                 ;
//                 if (target.name === "toString") {
//                     return result;
//                 }
//                 ;
//                 if (debug) {
//                     print(`[${watchName}] apply function name is [${target.name}], argArray is [${argArray}], result is [${result}].`);
//                 }
//                 return result
//
//             },
//             construct(target, argArray, newTarget) {
//                 let result = Reflect.construct(target, argArray, newTarget);
//                 if (debug) {
//                     print(`[${watchName}] construct function name is [${target.name}], argArray is [${argArray}], result is [${(result)}].`);
//                 }
//                 return result;
//             }
//         }
//     }
//
//     function get_obj_handler(WatchName) {
//         return {
//             get(target, propKey, receiver) {
//                 if (propKey === "__proto__") {
//                     print(`getting propKey-> ${WatchName}.${propKey}  value-> ${(target[propKey])}`)
//                     return target[propKey]
//                 }
//                 ;
//
//                 let result = Reflect.get(target, propKey, receiver);
//                 let result_type = get_attribute_type(result);
//
//                 if (result instanceof Object) {
//                     if (Object.getOwnPropertyDescriptor(target, propKey) && Object.getOwnPropertyDescriptor(target, propKey).writable === false) {
//                         print(`getting propKey-> ${WatchName}.${propKey} it is non-writable`)
//                     } else {
//                         if (typeof result === "function") {
//                             if (debug) {
//
//                                 print(`getting propKey-> ${WatchName}.${propKey}  value-> ${mm.compress_jsCode(String(result))}  typeof-> ${result_type}`);
//                             }
//                             // return new Proxy(result, get_method_handler(WatchName))
//                             return result
//                         } else {
//                             if (debug) {
//                                 print(`\ngetting propKey-> ${WatchName}.${propKey}  value-> ${mm.compress_jsCode(String(result))}  typeof-> ${result_type}`);
//                             }
//                         }
//                         return new Proxy(result, get_obj_handler(`${WatchName}.${propKey}`))
//                     }
//
//                 }
//                 if (typeof (propKey) !== "symbol" && propKey !== "toString") {
//                     try {
//                         if (debug) {
//                             print(`\ngetting propKey-> ${WatchName}.${propKey.description ?? propKey}  result-> ${result}  typeof-> ${result_type}`);
//                         }
//                     } catch (e) {
//                         print(`[${WatchName}] getting error`);
//                     }
//                 }
//                 return result;
//             },
//             set(target, propKey, value, receiver) {
//                 let value_type = get_attribute_type(value);
//                 if (value instanceof Object) {
//                     if (debug) {
//                         print(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${mm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
//                     }
//                 } else {
//                     if (debug) {
//                         print(`\nsetting propKey-> ${WatchName}.${propKey}  value-> ${mm.compress_jsCode(String(value))}  typeof-> ${value_type}`);
//                     }
//                 }
//                 return Reflect.set(target, propKey, value, receiver);
//             },
//             has(target, propKey) {
//                 let result = Reflect.has(target, propKey);
//                 if (debug) {
//                     print(`has propKey-> ${WatchName}.${propKey}, result-> ${result}`);
//                 }
//                 return result;
//             },
//             deleteProperty(target, propKey) {
//                 let result = Reflect.deleteProperty(target, propKey);
//                 if (debug) {
//                     print(`delete propKey-> ${WatchName}.${propKey}, result-> ${result}`);
//                 }
//                 return result;
//             },
//             // getOwnPropertyDescriptor(target, propKey) {
//             //     let result = Reflect.getOwnPropertyDescriptor(target, propKey);
//             //     if (debug) {
//             //         try {
//             //              print(`getOwnPropertyDescriptor  propKey-> ${WatchName}.${propKey} result-> ${(String(result))}`);
//             //         } catch (error) { }
//             //     }
//             //     return result;
//             // },
//             defineProperty(target, propKey, attributes) {
//                 let result = Reflect.defineProperty(target, propKey, attributes);
//                 try {
//                     if (debug) {
//                         print(`defineProperty propKey-> ${WatchName}.${propKey} attributes is [${(attributes)}], result is [${result}]`);
//                     }
//                 } catch (e) {
//                     print(`[${WatchName}] defineProperty error`)
//                 }
//                 return result;
//             },
//             getPrototypeOf(target) {
//                 let result = Reflect.getPrototypeOf(target);
//                 if (debug) {
//                     print(`[${WatchName}] getPrototypeOf result is [${(result)}]`);
//                 }
//                 return result;
//             },
//             setPrototypeOf(target, proto) {
//                 let result = Reflect.setPrototypeOf(target, proto);
//                 if (debug) {
//                     print(`[${WatchName}] setPrototypeOf proto is [${(proto)}], result is [${result}]`);
//                 }
//                 return result;
//             },
//             preventExtensions(target) {
//                 let result = Reflect.preventExtensions(target);
//                 if (debug) {
//                     print(`[${WatchName}] preventExtensions, result is [${result}]`);
//                 }
//                 return result;
//             },
//             isExtensible(target) {
//                 let result = Reflect.isExtensible(target);
//                 if (debug) {
//                     print(`[${WatchName}] isExtensible, result is [${result}]`);
//                 }
//                 return result;
//             },
//             // ownKeys(target) {
//             //     let result = Reflect.ownKeys(target);
//             //     if (debug) {
//             //         try {
//             //              print(`[${WatchName}] invoke ownkeys, result is [${String(result)}]`);
//             //         } catch (error) {
//             //
//             //         }
//             //     }
//             //     return result
//             // }
//         }
//     }
//
//
//     // if (type === "method") {
//     if (typeof obj === "function") {
//         // return new Proxy(obj, get_method_handler(objname));
//         return obj
//     }
//     return new Proxy(obj, get_obj_handler(objname));
// };

const proxx = function (tt, name) {
    return new Proxy(tt, {
        get(target, p, receiver) {
            let res = Reflect.get(target, p, receiver);
            // if (p !== 'debug' && p !== 'Object') {
            //         if (!['Array', 'Math', 'Function', 'Object', 'ENV'].includes(p))
            print(`${name} get`, p, typeof res
                // , res
            )
            // if (p === '_context2d' && res === undefined){
            // if(name === 'canvas' && p === 'width' && typeof res === undefined){
            //     debugger
            // }
            // if (name === 'imageDatas' && typeof res === undefined){
            //     //todo
            //     return [214, 122, 6, 255];
            // }

            // }
            if (p === 'offsetHeight') {
                debugger;
            }
            // print(Reflect.get(target, '_cf_chl_ctx', receiver))

            if (!['_registeredHandlers', '_currentEvent', 'performance', 'debug', '_eventListenerss', 'top', 'prototype', '_canvas', '_context'].includes(p) && res && typeof res === 'object' && typeof p !== 'symbol') {
                return proxx(res, p)
            }
            return res;
        },

        set(target, p, newValue, receiver) {
            print(`${name} set`, p, newValue)
            debugger;
            return Reflect.set(target, p, newValue, receiver);
        }
    })
}
mm.proxy = proxx


/**
 * 清除定时器的事件循环
 */
deleteTimerEventLoop = function () {
    print(mm.memory.timer_map)
    for (let timerId in mm.memory.timer_map) {
        clearTimeout(timerId);
    }
    for (let timerId in mm.memory.timer_map) {
        clearInterval(timerId);
    }
    mm.memory.timerId = 0;      // 定时器id保存
    mm.memory.timer_map = {};   // 定时器
};

// _getPrototypeOf = Object.getPrototypeOf;
// Object.getPrototypeOf = function (a) {
//     print('getPrototypeOf', a)
//     return _getPrototypeOf.apply(this, arguments)
// }

// _keys = Object.keys;
// Object.keys = function (a) {
//     print('keys', a)
//     return _keys.apply(this, arguments)
// }
// _getOwnPropertyNames = Object.getOwnPropertyNames;
//
//
// Object.getOwnPropertyNames = newFunc('getOwnPropertyNames', 1, function (a) {
//     let res = _getOwnPropertyNames(a);
//     // debugger;
//     print('getOwnPropertyNames1', res + '')
//
//     // for (let i = 0; i < ownKeyss; i++) {
//     //     let keys = ownKeyss[i];
//     //     let keysSplit = keys.split('--');
//     //     if (res.includes(keysSplit[0]) && res.includes(keysSplit[1])){
//     //         res = keyss[keys]
//     //     }
//     //
//     // }
//
//
//     // if (a instanceof Window){
//     //     res = 'TextEncoder,console,atob,DOMException,btoa,crypto,setInterval,setTimeout,setImmediate,clearInterval,clearTimeout,$,print,domUrl,body,createElementByName,guid,EventTarget,Event,DOMRect,UIEvent,TouchEvent,MouseEvent,PointerEvent,Node,NetworkInformation,StorageManager,VisualViewport,window,constructor,self,top,parent,frames,screenTop,screenLeft,outerWidth,outerHeight,matchMedia,visualViewport,devicePixelRatio,screenX,screenY,pageYOffset,MutationObserver,structuredClone,PERSISTENT,TEMPORARY,onbeforeinstallprompt,onbeforexrselect,onbeforeinput,onbeforetoggle,onblur,onbeforeprint,onbeforeunload,onunhandledrejection,onunload,onbeforematch,name,File,CSSStyleDeclaration,css,CSS,Attr,AudioParam,AudioNode,DynamicsCompressorNode,AudioDestinationNode,AudioScheduledSourceNode,AudioBufferSourceNode,OscillatorNode,BaseAudioContext,AudioBuffer,OfflineAudioContext,USB,Bluetooth,BluetoothDevice,BluetoothUUID,Clipboard,CredentialsContainer,Keyboard,NavigatorManagedData,MediaDevices,ServiceWorker,ServiceWorkerContainer,VirtualKeyboard,WakeLock,Geolocation,HID,Ink,LockManager,MediaCapabilities,MediaSession,XRSystem,PermissionStatus,Permissions,Presentation,Scheduling,Serial,UserActivation,InputDeviceInfo,IntersectionObserverEntry,IntersectionObserver,BlobEvent,PerformanceEntry,PerformanceResourceTiming,PerformanceNavigationTiming,Performance,MemoryInfo,performance,PerformanceNavigation,PerformancePaintTiming,PerformanceTiming,PerformanceObserver,XMLHttpRequestEventTarget,XMLHttpRequestUpload,ProgressEvent,XMLHttpRequest,Request,Headers,Response,fetch,CustomEvent,DeprecatedStorageQuota,NavigatorUAData,Navigator,Notification,navigator,MimeType,MimeTypeArray,mimeArrays,Plugin,PluginArray,pluginArrays,Location,location,origin,History,history,Screen,ScreenOrientation,screen,Storage,localStorage,sessionStorage,TextMetrics,MediaQueryList,BarProp,toolbar,locationbar,scrollbars,personalbar,External,external,RTCDataChannel,RTCIceCandidate,RTCPeerConnection,webkitRTCPeerConnection,RTCPeerConnectionIceEvent,RTCSessionDescription,CSSStyleRule,CSSRuleList,StyleSheet,CSSStyleSheet,StyleSheetList,Document,DOMImplementation,DocumentType,FeaturePolicy,DocumentTimeline,XMLDocument,Element,HTMLElement,DOMTokenList,HTMLAllCollection,WebGLBuffer,EXTTextureFilterAnisotropic,WebGLProgram,WebGLShader,WebGLShaderPrecisionFormat,WebGLUniformLocation,WebGLRenderingContext,WebGL2RenderingContext,CanvasRenderingContext2D,ImageData,OffscreenCanvas,HTMLDocument,HTMLParagraphElement,HTMLCanvasElement,HTMLBodyElement,HTMLHeadElement,HTMLHtmlElement,HTMLMediaElement,HTMLSpanElement,HTMLFormElement,HTMLAnchorElement,HTMLLIElement,HTMLImageElement,HTMLScriptElement,HTMLStyleElement,HTMLTitleElement,HTMLIFrameElement,HTMLLinkElement,HTMLUListElement,HTMLDivElement,HTMLAudioElement,Audio,HTMLMetaElement,HTMLCollection,HTMLCollectionBase,HTMLInputElement,HTMLPreElement,Image,DOMRectList,WorkWindow,Workobj,jsonify,Blobobjects,URLSearchParams,URL,URLMap,Blob,Worker,postMessage,MessagePort,MessageChannel,MessageEvent,SpeechSynthesisVoice,SpeechSynthesis,speechSynthesis,SharedWorker,IDBFactory,indexedDB,WebSocket,Crypto,getComputedStyle,reeseSkipExpirationCheck,isSecureContext,webkitRequestFileSystem,webkitSpeechRecognitionEvent,webkitSpeechRecognitionError,webkitSpeechRecognition,webkitSpeechGrammarList,webkitSpeechGrammar,SpeechSynthesisEvent,SpeechSynthesisUtterance,SpeechSynthesisErrorEvent,VisibilityStateEntry,VideoPlaybackQuality,ViewTimeline,ScrollTimeline,RemotePlayback,PushSubscriptionOptions,PushSubscription,PushManager,PeriodicSyncManager,PaymentRequestUpdateEvent,SVGMetadataElement,SVGAnimatedAngle,AudioData,pageXOffset,WebKitCSSMatrix,WebGLContextEvent,caches,Worklet,AudioWorkletNode,AudioWorklet,requestAnimationFrame,IDBDatabase,Object,Function,Array,Number,parseFloat,parseInt,Infinity,NaN,undefined,Boolean,String,Symbol,Date,Promise,RegExp,Error,AggregateError,EvalError,RangeError,ReferenceError,SyntaxError,TypeError,URIError,globalThis,JSON,Utils,Math,Intl,ArrayBuffer,Uint8Array,Int8Array,Uint16Array,Int16Array,Uint32Array,Int32Array,Float32Array,Float64Array,Uint8ClampedArray,BigUint64Array,BigInt64Array,DataView,Map,BigInt,Set,WeakMap,WeakSet,Proxy,Reflect,FinalizationRegistry,WeakRef,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,escape,unescape,eval,isFinite,isNaN,Atomics,WebAssembly,c,Window,innerWidth,innerHeight,query,open,setRequestHeader,getDetails,getIsInstalled,installState,runningState,createElementNS,createElement,getImageData,fillText,toBlob,getContext,toDataURL,alert,document,ServiceWorkerRegistration,TaskPriorityChangeEvent,SVGAngle'.split(',')
//     // }
//     if (a instanceof Keyboard) {
//         res = [
//             "getLayoutMap",
//             "lock",
//             "unlock",
//             "constructor"
//         ]
//     }
//
//     if (res.includes('setUTCMinutes')) {
//         res = [
//             "constructor",
//             "toString",
//             "toDateString",
//             "toTimeString",
//             "toISOString",
//             "toUTCString",
//             "toGMTString",
//             "getDate",
//             "setDate",
//             "getDay",
//             "getFullYear",
//             "setFullYear",
//             "getHours",
//             "setHours",
//             "getMilliseconds",
//             "setMilliseconds",
//             "getMinutes",
//             "setMinutes",
//             "getMonth",
//             "setMonth",
//             "getSeconds",
//             "setSeconds",
//             "getTime",
//             "setTime",
//             "getTimezoneOffset",
//             "getUTCDate",
//             "setUTCDate",
//             "getUTCDay",
//             "getUTCFullYear",
//             "setUTCFullYear",
//             "getUTCHours",
//             "setUTCHours",
//             "getUTCMilliseconds",
//             "setUTCMilliseconds",
//             "getUTCMinutes",
//             "setUTCMinutes",
//             "getUTCMonth",
//             "setUTCMonth",
//             "getUTCSeconds",
//             "setUTCSeconds",
//             "valueOf",
//             "getYear",
//             "setYear",
//             "toJSON",
//             "toLocaleString",
//             "toLocaleDateString",
//             "toLocaleTimeString"
//         ]
//     }
//     if (res.includes('getLayoutMap')) {
//         res = [
//             "getLayoutMap",
//             "lock",
//             "unlock",
//             "constructor"
//         ]
//     }
//
//
//     if (res.includes('globalAlpha') && res.includes('drawFocusIfNeeded')) {
//         res = ['canvas', 'globalAlpha', 'globalCompositeOperation', 'filter', 'imageSmoothingEnabled', 'imageSmoothingQuality', 'strokeStyle', 'fillStyle', 'shadowOffsetX', 'shadowOffsetY', 'shadowBlur', 'shadowColor', 'lineWidth', 'lineCap', 'lineJoin', 'miterLimit', 'lineDashOffset', 'font', 'textAlign', 'textBaseline', 'direction', 'fontKerning', 'fontStretch', 'fontVariantCaps', 'letterSpacing', 'textRendering', 'wordSpacing', 'clip', 'createConicGradient', 'createImageData', 'createLinearGradient', 'createPattern', 'createRadialGradient', 'drawFocusIfNeeded', 'drawImage', 'fill', 'fillText', 'getContextAttributes', 'getImageData', 'getLineDash', 'getTransform', 'isContextLost', 'isPointInPath', 'isPointInStroke', 'measureText', 'putImageData', 'reset', 'roundRect', 'save', 'scale', 'setLineDash', 'setTransform', 'stroke', 'strokeText', 'transform', 'translate', 'arc', 'arcTo', 'beginPath', 'bezierCurveTo', 'clearRect', 'closePath', 'ellipse', 'fillRect', 'lineTo', 'moveTo', 'quadraticCurveTo', 'rect', 'resetTransform', 'restore', 'rotate', 'strokeRect', 'constructor']
//
//     }
//     if (res.includes('vLink')) {
//         res = ['text', 'link', 'vLink', 'aLink', 'bgColor', 'background', 'onblur', 'onerror', 'onfocus', 'onload', 'onresize', 'onscroll', 'onafterprint', 'onbeforeprint', 'onbeforeunload', 'onhashchange', 'onlanguagechange', 'onmessage', 'onmessageerror', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onrejectionhandled', 'onstorage', 'onunhandledrejection', 'onunload', 'constructor']
//
//     }
//     if (res.includes('navigationPreload')) {
//         res = ['installing', 'waiting', 'active', 'navigationPreload', 'scope', 'updateViaCache', 'onupdatefound', 'unregister', 'update', 'paymentManager', 'constructor', 'backgroundFetch', 'periodicSync', 'sync', 'cookies', 'pushManager', 'getNotifications', 'showNotification']
//     }
//     // if (res.includes('referrerPolicy') && !res.includes('hreflang') && !res.includes('border') && !res.includes('defer')) {
//     //     res = ['src', 'srcdoc', 'name', 'sandbox', 'allowFullscreen', 'width', 'height', 'contentDocument', 'contentWindow', 'referrerPolicy', 'csp', 'allow', 'featurePolicy', 'align', 'scrolling', 'frameBorder', 'longDesc', 'marginHeight', 'marginWidth', 'getSVGDocument', 'loading', 'credentialless', 'allowPaymentRequest', 'constructor']
//     // }
//
//     if (res.includes('reduceRight') && res.includes('toReversed')) {
//         res = [
//             "length",
//             "constructor",
//             "at",
//             "concat",
//             "copyWithin",
//             "fill",
//             "find",
//             "findIndex",
//             "findLast",
//             "findLastIndex",
//             "lastIndexOf",
//             "pop",
//             "push",
//             "reverse",
//             "shift",
//             "unshift",
//             "slice",
//             "sort",
//             "splice",
//             "includes",
//             "indexOf",
//             "join",
//             "keys",
//             "entries",
//             "values",
//             "forEach",
//             "filter",
//             "flat",
//             "flatMap",
//             "map",
//             "every",
//             "some",
//             "reduce",
//             "reduceRight",
//             "toReversed",
//             "toSorted",
//             "toSpliced",
//             "with",
//             "toLocaleString",
//             "toString"
//         ]
//     }
//     if (!res.includes('UNPACK_SKIP_ROWS') && res.includes('BLEND_COLOR')) {
//         res = [
//             "canvas",
//             "drawingBufferWidth",
//             "drawingBufferHeight",
//             "drawingBufferColorSpace",
//             "unpackColorSpace",
//             "DEPTH_BUFFER_BIT",
//             "STENCIL_BUFFER_BIT",
//             "COLOR_BUFFER_BIT",
//             "POINTS",
//             "LINES",
//             "LINE_LOOP",
//             "LINE_STRIP",
//             "TRIANGLES",
//             "TRIANGLE_STRIP",
//             "TRIANGLE_FAN",
//             "ZERO",
//             "ONE",
//             "SRC_COLOR",
//             "ONE_MINUS_SRC_COLOR",
//             "SRC_ALPHA",
//             "ONE_MINUS_SRC_ALPHA",
//             "DST_ALPHA",
//             "ONE_MINUS_DST_ALPHA",
//             "DST_COLOR",
//             "ONE_MINUS_DST_COLOR",
//             "SRC_ALPHA_SATURATE",
//             "FUNC_ADD",
//             "BLEND_EQUATION",
//             "BLEND_EQUATION_RGB",
//             "BLEND_EQUATION_ALPHA",
//             "FUNC_SUBTRACT",
//             "FUNC_REVERSE_SUBTRACT",
//             "BLEND_DST_RGB",
//             "BLEND_SRC_RGB",
//             "BLEND_DST_ALPHA",
//             "BLEND_SRC_ALPHA",
//             "CONSTANT_COLOR",
//             "ONE_MINUS_CONSTANT_COLOR",
//             "CONSTANT_ALPHA",
//             "ONE_MINUS_CONSTANT_ALPHA",
//             "BLEND_COLOR",
//             "ARRAY_BUFFER",
//             "ELEMENT_ARRAY_BUFFER",
//             "ARRAY_BUFFER_BINDING",
//             "ELEMENT_ARRAY_BUFFER_BINDING",
//             "STREAM_DRAW",
//             "STATIC_DRAW",
//             "DYNAMIC_DRAW",
//             "BUFFER_SIZE",
//             "BUFFER_USAGE",
//             "CURRENT_VERTEX_ATTRIB",
//             "FRONT",
//             "BACK",
//             "FRONT_AND_BACK",
//             "TEXTURE_2D",
//             "CULL_FACE",
//             "BLEND",
//             "DITHER",
//             "STENCIL_TEST",
//             "DEPTH_TEST",
//             "SCISSOR_TEST",
//             "POLYGON_OFFSET_FILL",
//             "SAMPLE_ALPHA_TO_COVERAGE",
//             "SAMPLE_COVERAGE",
//             "NO_ERROR",
//             "INVALID_ENUM",
//             "INVALID_VALUE",
//             "INVALID_OPERATION",
//             "OUT_OF_MEMORY",
//             "CW",
//             "CCW",
//             "LINE_WIDTH",
//             "ALIASED_POINT_SIZE_RANGE",
//             "ALIASED_LINE_WIDTH_RANGE",
//             "CULL_FACE_MODE",
//             "FRONT_FACE",
//             "DEPTH_RANGE",
//             "DEPTH_WRITEMASK",
//             "DEPTH_CLEAR_VALUE",
//             "DEPTH_FUNC",
//             "STENCIL_CLEAR_VALUE",
//             "STENCIL_FUNC",
//             "STENCIL_FAIL",
//             "STENCIL_PASS_DEPTH_FAIL",
//             "STENCIL_PASS_DEPTH_PASS",
//             "STENCIL_REF",
//             "STENCIL_VALUE_MASK",
//             "STENCIL_WRITEMASK",
//             "STENCIL_BACK_FUNC",
//             "STENCIL_BACK_FAIL",
//             "STENCIL_BACK_PASS_DEPTH_FAIL",
//             "STENCIL_BACK_PASS_DEPTH_PASS",
//             "STENCIL_BACK_REF",
//             "STENCIL_BACK_VALUE_MASK",
//             "STENCIL_BACK_WRITEMASK",
//             "VIEWPORT",
//             "SCISSOR_BOX",
//             "COLOR_CLEAR_VALUE",
//             "COLOR_WRITEMASK",
//             "UNPACK_ALIGNMENT",
//             "PACK_ALIGNMENT",
//             "MAX_TEXTURE_SIZE",
//             "MAX_VIEWPORT_DIMS",
//             "SUBPIXEL_BITS",
//             "RED_BITS",
//             "GREEN_BITS",
//             "BLUE_BITS",
//             "ALPHA_BITS",
//             "DEPTH_BITS",
//             "STENCIL_BITS",
//             "POLYGON_OFFSET_UNITS",
//             "POLYGON_OFFSET_FACTOR",
//             "TEXTURE_BINDING_2D",
//             "SAMPLE_BUFFERS",
//             "SAMPLES",
//             "SAMPLE_COVERAGE_VALUE",
//             "SAMPLE_COVERAGE_INVERT",
//             "COMPRESSED_TEXTURE_FORMATS",
//             "DONT_CARE",
//             "FASTEST",
//             "NICEST",
//             "GENERATE_MIPMAP_HINT",
//             "BYTE",
//             "UNSIGNED_BYTE",
//             "SHORT",
//             "UNSIGNED_SHORT",
//             "INT",
//             "UNSIGNED_INT",
//             "FLOAT",
//             "DEPTH_COMPONENT",
//             "ALPHA",
//             "RGB",
//             "RGBA",
//             "LUMINANCE",
//             "LUMINANCE_ALPHA",
//             "UNSIGNED_SHORT_4_4_4_4",
//             "UNSIGNED_SHORT_5_5_5_1",
//             "UNSIGNED_SHORT_5_6_5",
//             "FRAGMENT_SHADER",
//             "VERTEX_SHADER",
//             "MAX_VERTEX_ATTRIBS",
//             "MAX_VERTEX_UNIFORM_VECTORS",
//             "MAX_VARYING_VECTORS",
//             "MAX_COMBINED_TEXTURE_IMAGE_UNITS",
//             "MAX_VERTEX_TEXTURE_IMAGE_UNITS",
//             "MAX_TEXTURE_IMAGE_UNITS",
//             "MAX_FRAGMENT_UNIFORM_VECTORS",
//             "SHADER_TYPE",
//             "DELETE_STATUS",
//             "LINK_STATUS",
//             "VALIDATE_STATUS",
//             "ATTACHED_SHADERS",
//             "ACTIVE_UNIFORMS",
//             "ACTIVE_ATTRIBUTES",
//             "SHADING_LANGUAGE_VERSION",
//             "CURRENT_PROGRAM",
//             "NEVER",
//             "LESS",
//             "EQUAL",
//             "LEQUAL",
//             "GREATER",
//             "NOTEQUAL",
//             "GEQUAL",
//             "ALWAYS",
//             "KEEP",
//             "REPLACE",
//             "INCR",
//             "DECR",
//             "INVERT",
//             "INCR_WRAP",
//             "DECR_WRAP",
//             "VENDOR",
//             "RENDERER",
//             "VERSION",
//             "NEAREST",
//             "LINEAR",
//             "NEAREST_MIPMAP_NEAREST",
//             "LINEAR_MIPMAP_NEAREST",
//             "NEAREST_MIPMAP_LINEAR",
//             "LINEAR_MIPMAP_LINEAR",
//             "TEXTURE_MAG_FILTER",
//             "TEXTURE_MIN_FILTER",
//             "TEXTURE_WRAP_S",
//             "TEXTURE_WRAP_T",
//             "TEXTURE",
//             "TEXTURE_CUBE_MAP",
//             "TEXTURE_BINDING_CUBE_MAP",
//             "TEXTURE_CUBE_MAP_POSITIVE_X",
//             "TEXTURE_CUBE_MAP_NEGATIVE_X",
//             "TEXTURE_CUBE_MAP_POSITIVE_Y",
//             "TEXTURE_CUBE_MAP_NEGATIVE_Y",
//             "TEXTURE_CUBE_MAP_POSITIVE_Z",
//             "TEXTURE_CUBE_MAP_NEGATIVE_Z",
//             "MAX_CUBE_MAP_TEXTURE_SIZE",
//             "TEXTURE0",
//             "TEXTURE1",
//             "TEXTURE2",
//             "TEXTURE3",
//             "TEXTURE4",
//             "TEXTURE5",
//             "TEXTURE6",
//             "TEXTURE7",
//             "TEXTURE8",
//             "TEXTURE9",
//             "TEXTURE10",
//             "TEXTURE11",
//             "TEXTURE12",
//             "TEXTURE13",
//             "TEXTURE14",
//             "TEXTURE15",
//             "TEXTURE16",
//             "TEXTURE17",
//             "TEXTURE18",
//             "TEXTURE19",
//             "TEXTURE20",
//             "TEXTURE21",
//             "TEXTURE22",
//             "TEXTURE23",
//             "TEXTURE24",
//             "TEXTURE25",
//             "TEXTURE26",
//             "TEXTURE27",
//             "TEXTURE28",
//             "TEXTURE29",
//             "TEXTURE30",
//             "TEXTURE31",
//             "ACTIVE_TEXTURE",
//             "REPEAT",
//             "CLAMP_TO_EDGE",
//             "MIRRORED_REPEAT",
//             "FLOAT_VEC2",
//             "FLOAT_VEC3",
//             "FLOAT_VEC4",
//             "INT_VEC2",
//             "INT_VEC3",
//             "INT_VEC4",
//             "BOOL",
//             "BOOL_VEC2",
//             "BOOL_VEC3",
//             "BOOL_VEC4",
//             "FLOAT_MAT2",
//             "FLOAT_MAT3",
//             "FLOAT_MAT4",
//             "SAMPLER_2D",
//             "SAMPLER_CUBE",
//             "VERTEX_ATTRIB_ARRAY_ENABLED",
//             "VERTEX_ATTRIB_ARRAY_SIZE",
//             "VERTEX_ATTRIB_ARRAY_STRIDE",
//             "VERTEX_ATTRIB_ARRAY_TYPE",
//             "VERTEX_ATTRIB_ARRAY_NORMALIZED",
//             "VERTEX_ATTRIB_ARRAY_POINTER",
//             "VERTEX_ATTRIB_ARRAY_BUFFER_BINDING",
//             "IMPLEMENTATION_COLOR_READ_TYPE",
//             "IMPLEMENTATION_COLOR_READ_FORMAT",
//             "COMPILE_STATUS",
//             "LOW_FLOAT",
//             "MEDIUM_FLOAT",
//             "HIGH_FLOAT",
//             "LOW_INT",
//             "MEDIUM_INT",
//             "HIGH_INT",
//             "FRAMEBUFFER",
//             "RENDERBUFFER",
//             "RGBA4",
//             "RGB5_A1",
//             "RGB565",
//             "DEPTH_COMPONENT16",
//             "STENCIL_INDEX8",
//             "DEPTH_STENCIL",
//             "RENDERBUFFER_WIDTH",
//             "RENDERBUFFER_HEIGHT",
//             "RENDERBUFFER_INTERNAL_FORMAT",
//             "RENDERBUFFER_RED_SIZE",
//             "RENDERBUFFER_GREEN_SIZE",
//             "RENDERBUFFER_BLUE_SIZE",
//             "RENDERBUFFER_ALPHA_SIZE",
//             "RENDERBUFFER_DEPTH_SIZE",
//             "RENDERBUFFER_STENCIL_SIZE",
//             "FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE",
//             "FRAMEBUFFER_ATTACHMENT_OBJECT_NAME",
//             "FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL",
//             "FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE",
//             "COLOR_ATTACHMENT0",
//             "DEPTH_ATTACHMENT",
//             "STENCIL_ATTACHMENT",
//             "DEPTH_STENCIL_ATTACHMENT",
//             "NONE",
//             "FRAMEBUFFER_COMPLETE",
//             "FRAMEBUFFER_INCOMPLETE_ATTACHMENT",
//             "FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT",
//             "FRAMEBUFFER_INCOMPLETE_DIMENSIONS",
//             "FRAMEBUFFER_UNSUPPORTED",
//             "FRAMEBUFFER_BINDING",
//             "RENDERBUFFER_BINDING",
//             "MAX_RENDERBUFFER_SIZE",
//             "INVALID_FRAMEBUFFER_OPERATION",
//             "UNPACK_FLIP_Y_WEBGL",
//             "UNPACK_PREMULTIPLY_ALPHA_WEBGL",
//             "CONTEXT_LOST_WEBGL",
//             "UNPACK_COLORSPACE_CONVERSION_WEBGL",
//             "BROWSER_DEFAULT_WEBGL",
//             "activeTexture",
//             "attachShader",
//             "bindAttribLocation",
//             "bindRenderbuffer",
//             "blendColor",
//             "blendEquation",
//             "blendEquationSeparate",
//             "blendFunc",
//             "blendFuncSeparate",
//             "bufferData",
//             "bufferSubData",
//             "checkFramebufferStatus",
//             "compileShader",
//             "compressedTexImage2D",
//             "compressedTexSubImage2D",
//             "copyTexImage2D",
//             "copyTexSubImage2D",
//             "createBuffer",
//             "createFramebuffer",
//             "createProgram",
//             "createRenderbuffer",
//             "createShader",
//             "createTexture",
//             "cullFace",
//             "deleteBuffer",
//             "deleteFramebuffer",
//             "deleteProgram",
//             "deleteRenderbuffer",
//             "deleteShader",
//             "deleteTexture",
//             "depthFunc",
//             "depthMask",
//             "depthRange",
//             "detachShader",
//             "disable",
//             "enable",
//             "finish",
//             "flush",
//             "framebufferRenderbuffer",
//             "framebufferTexture2D",
//             "frontFace",
//             "generateMipmap",
//             "getActiveAttrib",
//             "getActiveUniform",
//             "getAttachedShaders",
//             "getAttribLocation",
//             "getBufferParameter",
//             "getContextAttributes",
//             "getError",
//             "getExtension",
//             "getFramebufferAttachmentParameter",
//             "getParameter",
//             "getProgramInfoLog",
//             "getProgramParameter",
//             "getRenderbufferParameter",
//             "getShaderInfoLog",
//             "getShaderParameter",
//             "getShaderPrecisionFormat",
//             "getShaderSource",
//             "getSupportedExtensions",
//             "getTexParameter",
//             "getUniform",
//             "getUniformLocation",
//             "getVertexAttrib",
//             "getVertexAttribOffset",
//             "hint",
//             "isBuffer",
//             "isContextLost",
//             "isEnabled",
//             "isFramebuffer",
//             "isProgram",
//             "isRenderbuffer",
//             "isShader",
//             "isTexture",
//             "lineWidth",
//             "linkProgram",
//             "pixelStorei",
//             "polygonOffset",
//             "readPixels",
//             "renderbufferStorage",
//             "sampleCoverage",
//             "shaderSource",
//             "stencilFunc",
//             "stencilFuncSeparate",
//             "stencilMask",
//             "stencilMaskSeparate",
//             "stencilOp",
//             "stencilOpSeparate",
//             "texImage2D",
//             "texParameterf",
//             "texParameteri",
//             "texSubImage2D",
//             "useProgram",
//             "validateProgram",
//             "bindBuffer",
//             "bindFramebuffer",
//             "bindTexture",
//             "clear",
//             "clearColor",
//             "clearDepth",
//             "clearStencil",
//             "colorMask",
//             "disableVertexAttribArray",
//             "drawArrays",
//             "drawElements",
//             "enableVertexAttribArray",
//             "scissor",
//             "uniform1f",
//             "uniform1fv",
//             "uniform1i",
//             "uniform1iv",
//             "uniform2f",
//             "uniform2fv",
//             "uniform2i",
//             "uniform2iv",
//             "uniform3f",
//             "uniform3fv",
//             "uniform3i",
//             "uniform3iv",
//             "uniform4f",
//             "uniform4fv",
//             "uniform4i",
//             "uniform4iv",
//             "uniformMatrix2fv",
//             "uniformMatrix3fv",
//             "uniformMatrix4fv",
//             "vertexAttrib1f",
//             "vertexAttrib1fv",
//             "vertexAttrib2f",
//             "vertexAttrib2fv",
//             "vertexAttrib3f",
//             "vertexAttrib3fv",
//             "vertexAttrib4f",
//             "vertexAttrib4fv",
//             "vertexAttribPointer",
//             "viewport",
//             "drawingBufferFormat",
//             "RGB8",
//             "RGBA8",
//             "drawingBufferStorage",
//             "constructor",
//             "makeXRCompatible"
//         ]
//     }
//     if (res.includes("adAuctionHeaders") && res.includes('allowPaymentRequest') && !res.includes('hreflang')) {
//         res = [
//             "src",
//             "srcdoc",
//             "name",
//             "sandbox",
//             "allowFullscreen",
//             "width",
//             "height",
//             "contentDocument",
//             "contentWindow",
//             "referrerPolicy",
//             "csp",
//             "allow",
//             "featurePolicy",
//             "loading",
//             "align",
//             "scrolling",
//             "frameBorder",
//             "longDesc",
//             "marginHeight",
//             "marginWidth",
//             "getSVGDocument",
//             "credentialless",
//             "allowPaymentRequest",
//             "constructor",
//             "privateToken",
//             "browsingTopics",
//             "adAuctionHeaders",
//             "sharedStorageWritable"
//         ]
//     }
//     if (a === Set.prototype) {
//         res = [
//             "constructor",
//             "has",
//             "add",
//             "delete",
//             "clear",
//             "entries",
//             "forEach",
//             "size",
//             "values",
//             "keys",
//             "union",
//             "intersection",
//             "difference",
//             "symmetricDifference",
//             "isSubsetOf",
//             "isSupersetOf",
//             "isDisjointFrom"
//         ]
//     }
//     if (res.includes('ownerSVGElement') && res.includes('viewportElement')) {
//         res = [
//             "className",
//             "ownerSVGElement",
//             "viewportElement",
//             "onbeforexrselect",
//             "onabort",
//             "onbeforeinput",
//             "onbeforematch",
//             "onbeforetoggle",
//             "onblur",
//             "oncancel",
//             "oncanplay",
//             "oncanplaythrough",
//             "onchange",
//             "onclick",
//             "onclose",
//             "oncontentvisibilityautostatechange",
//             "oncontextlost",
//             "oncontextmenu",
//             "oncontextrestored",
//             "oncuechange",
//             "ondblclick",
//             "ondrag",
//             "ondragend",
//             "ondragenter",
//             "ondragleave",
//             "ondragover",
//             "ondragstart",
//             "ondrop",
//             "ondurationchange",
//             "onemptied",
//             "onended",
//             "onerror",
//             "onfocus",
//             "onformdata",
//             "oninput",
//             "oninvalid",
//             "onkeydown",
//             "onkeypress",
//             "onkeyup",
//             "onload",
//             "onloadeddata",
//             "onloadedmetadata",
//             "onloadstart",
//             "onmousedown",
//             "onmouseenter",
//             "onmouseleave",
//             "onmousemove",
//             "onmouseout",
//             "onmouseover",
//             "onmouseup",
//             "onmousewheel",
//             "onpause",
//             "onplay",
//             "onplaying",
//             "onprogress",
//             "onratechange",
//             "onreset",
//             "onresize",
//             "onscroll",
//             "onsecuritypolicyviolation",
//             "onseeked",
//             "onseeking",
//             "onselect",
//             "onslotchange",
//             "onstalled",
//             "onsubmit",
//             "onsuspend",
//             "ontimeupdate",
//             "ontoggle",
//             "onvolumechange",
//             "onwaiting",
//             "onwebkitanimationend",
//             "onwebkitanimationiteration",
//             "onwebkitanimationstart",
//             "onwebkittransitionend",
//             "onwheel",
//             "onauxclick",
//             "ongotpointercapture",
//             "onlostpointercapture",
//             "onpointerdown",
//             "onpointermove",
//             "onpointerrawupdate",
//             "onpointerup",
//             "onpointercancel",
//             "onpointerover",
//             "onpointerout",
//             "onpointerenter",
//             "onpointerleave",
//             "onselectstart",
//             "onselectionchange",
//             "onanimationend",
//             "onanimationiteration",
//             "onanimationstart",
//             "ontransitionrun",
//             "ontransitionstart",
//             "ontransitionend",
//             "ontransitioncancel",
//             "oncopy",
//             "oncut",
//             "onpaste",
//             "dataset",
//             "nonce",
//             "autofocus",
//             "tabIndex",
//             "style",
//             "attributeStyleMap",
//             "blur",
//             "focus",
//             "onscrollend",
//             "onscrollsnapchange",
//             "onscrollsnapchanging",
//             "constructor"
//         ]
//     }
//     if (res[0] === 'constructor' && res[1] === 'delete' && res[2] === 'get') {
//         return res
//     }
//     if (res[0] === 'constructor' && res[1] === 'get' && res[2] === 'set') {
//         return res
//     }
//     if (res.includes('DOMSTRING_SIZE_ERR') && res.includes('NOT_SUPPORTED_ERR')) {
//         res = [
//             "code",
//             "name",
//             "message",
//             "INDEX_SIZE_ERR",
//             "DOMSTRING_SIZE_ERR",
//             "HIERARCHY_REQUEST_ERR",
//             "WRONG_DOCUMENT_ERR",
//             "INVALID_CHARACTER_ERR",
//             "NO_DATA_ALLOWED_ERR",
//             "NO_MODIFICATION_ALLOWED_ERR",
//             "NOT_FOUND_ERR",
//             "NOT_SUPPORTED_ERR",
//             "INUSE_ATTRIBUTE_ERR",
//             "INVALID_STATE_ERR",
//             "SYNTAX_ERR",
//             "INVALID_MODIFICATION_ERR",
//             "NAMESPACE_ERR",
//             "INVALID_ACCESS_ERR",
//             "VALIDATION_ERR",
//             "TYPE_MISMATCH_ERR",
//             "SECURITY_ERR",
//             "NETWORK_ERR",
//             "ABORT_ERR",
//             "URL_MISMATCH_ERR",
//             "QUOTA_EXCEEDED_ERR",
//             "TIMEOUT_ERR",
//             "INVALID_NODE_TYPE_ERR",
//             "DATA_CLONE_ERR",
//             "constructor"
//         ]
//         return res
//     }
//     // if (res[0] === 'constructor' && !res.includes('setUTCMinutes') && !res.includes('BYTES_PER_ELEMENT')
//     //     && (!res.includes('message') || res.includes('linePos'))
//     //     // && !res.includes('has')
//     //     && !res.includes('flatMap')
//     //     && !res.includes('spellcheck')
//     //     && !res.includes('isExtended')
//     //     && !res.includes('finally')
//     //     && !res.includes('toPrecision')
//     //     && !res.includes('deref')
//     //     && !res.includes('__lookupGetter__')
//     //     && !res.includes('symmetricDifference')
//     //     // && !res.includes('audioWorklet')
//     // ) {
//     //     res = res.slice(1,)
//     //     res.push('constructor')
//     // }
//     if (res.includes('exec') && res.includes('dotAll')) {
//         res = [
//             "constructor",
//             "exec",
//             "dotAll",
//             "flags",
//             "global",
//             "hasIndices",
//             "ignoreCase",
//             "multiline",
//             "source",
//             "sticky",
//             "unicode",
//             "unicodeSets",
//             "compile",
//             "toString",
//             "test"
//         ]
//     }
//     if (res.includes('orientation') && res.includes('isExtended')) {
//         res = [
//             "availWidth",
//             "availHeight",
//             "width",
//             "height",
//             "colorDepth",
//             "pixelDepth",
//             "availLeft",
//             "availTop",
//             "orientation",
//             "constructor",
//             "onchange",
//             "isExtended"
//         ]
//     }
//     if (res.includes('deliveredFrames')) {
//
//     }
//
//     if (res.includes('getBigUint64')) {
//         res = [
//             "constructor",
//             "buffer",
//             "byteLength",
//             "byteOffset",
//             "getInt8",
//             "setInt8",
//             "getUint8",
//             "setUint8",
//             "getInt16",
//             "setInt16",
//             "getUint16",
//             "setUint16",
//             "getInt32",
//             "setInt32",
//             "getUint32",
//             "setUint32",
//             "getFloat32",
//             "setFloat32",
//             "getFloat64",
//             "setFloat64",
//             "getBigInt64",
//             "setBigInt64",
//             "getBigUint64",
//             "setBigUint64"
//         ]
//     }
// //     if (res.includes('entries') && res.includes('clear')){
// //         res= [
// //     "get",
// //     "set",
// //     "has",
// //     "delete",
// //     "clear",
// //     "entries",
// //     "forEach",
// //     "keys",
// //     "size",
// //     "values",
// //     "constructor",
// //
// // ]
// //     }
//     print('getOwnPropertyNames', res + '')
//
//     res = new Proxy(res, {
//         get(target, p, receiver) {
//             let res = Reflect.get(target, p, receiver)
//
//             // print('res.get', p, '=', res)
//             return res;
//         }
//     })
//     return res;
//
// })
// _getOwnPropertyDescriptors = Object.getOwnPropertyDescriptors;
// Object.getOwnPropertyDescriptors = newFunc('getOwnPropertyDescriptors', 1, function (a) {
//     let res = _getOwnPropertyDescriptors(a);
//     print('getOwnPropertyDescriptors', a.toString())
//     return res;
// })
// _getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor;
// Object.getOwnPropertyDescriptor = newFunc('getOwnPropertyDescriptor', 2, function (a, b) {
//     let res = _getOwnPropertyDescriptor(a, b);
//     print('getOwnPropertyDescriptor', a.toString(), b, '=', res)
//     return res;
// })
//

get_all_node = function () {
    let root = $.root();
    return $.root().find('*');
}
// Function.prototype = new Proxy(Function.prototype, {
//     set(target, p, newValue, receiver) {
//         print('pppp', p)
//         debugger;
//         Reflect.set(target, p, newValue, receiver)
//     }
// })
// // Function.prototype.toString = function (){}
// getFuncToString(Function)

let _console = Object.getOwnPropertyDescriptors(console);
console = {}
Object.defineProperties(console, {
    [Symbol.toStringTag]: {
        value: 'console'
    },

    'debug': {

        value: newFunc('debug', 10, function () {
            ;
            // debugger;
            _log('console.debug.call' )
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }
            // return _console.debug.value.call(...arguments)
        //
        }), writable: true, enumerable: true, configurable: true,


    },
    'error': {

        value: newFunc('error', 10, function () {

            
            ;
            _log('console.error.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }


        }), writable: true, enumerable: true, configurable: true,


    },
    'info': {

        value: newFunc('info', 10, function () {

            
            ;
            _log('console.info.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }


        }), writable: true, enumerable: true, configurable: true,


    },
    'log': {

        value: newFunc('log', 10, function (v) {

            if (v && v.hasOwnProperty('toString')){
                v.toString()
            }
            ;
            // _log('console.log.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }


        }), writable: true, enumerable: true, configurable: true,


    },
    'warn': {

        value: newFunc('warn', 10, function () {

            
            ;
            _log('console.warn.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }


        }), writable: true, enumerable: true, configurable: true,


    },
    'dir': {

        value: newFunc('dir', 10, function () {

            
            ;
            _log('console.dir.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }
            // return _console.dir.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'dirxml': {

        value: newFunc('dirxml', 10, function () {

            
            ;
            _log('console.dirxml.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }



        }), writable: true, enumerable: true, configurable: true,


    },
    'table': {

        value: newFunc('table', 10, function () {

            
            ;
            _log('console.table.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }

        }), writable: true, enumerable: true, configurable: true,


    },
    'trace': {

        value: newFunc('trace', 10, function () {

            
            ;
            _log('console.trace.call')
            for (let i = 0; i < arguments.length; i++) {
                let a = arguments[i];
                if (a instanceof Error) {
                    let symbols = Object.getOwnPropertyDescriptors(a);
                    if (symbols.name && typeof symbols.name.get === 'function') {
                        symbols.name.get()
                    }
                    if (symbols.message && typeof symbols.message.get === 'function') {
                        symbols.message.get()
                    }
                }
            }


        }), writable: true, enumerable: true, configurable: true,


    },
    'group': {

        value: newFunc('group', 10, function () {

            
            ;
            _log('console.group.call')
                        return _console.group.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'groupCollapsed': {

        value: newFunc('groupCollapsed', 10, function () {

            
            ;
            if (debug) print('console.groupCollapsed.call')
                        return _console.groupCollapsed.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'groupEnd': {

        value: newFunc('groupEnd', 10, function () {

            
            ;
            _log('console.groupEnd.call')
                        return _console.groupEnd.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'clear': {

        value: newFunc('clear', 10, function () {

            
            ;
            _log('console.clear.call')
                        return _console.clear.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'count': {

        value: newFunc('count', 10, function (v) {

            if (v && v.hasOwnProperty('toString')){
                v.toString()
            }
            ;
            _log('console.count.call')
            // return _console.count.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'countReset': {

        value: newFunc('countReset', 10, function () {

            
            ;
            _log('console.countReset.call')
                        // return _console.countReset.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'assert': {

        value: newFunc('assert', 10, function () {

            
            ;
            _log('console.assert.call')
                        return _console.assert.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'profile': {

        value: newFunc('profile', 10, function () {

            
            ;
            _log('console.profile.call')
                        return _console.profile.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'profileEnd': {

        value: newFunc('profileEnd', 10, function () {

            
            ;
            _log('console.profileEnd.call')
                        return _console.profileEnd.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'time': {

        value: newFunc('time', 10, function () {

            
            ;
            _log('console.time.call')
                        return _console.time.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'timeLog': {

        value: newFunc('timeLog', 10, function () {

            
            ;
            _log('console.timeLog.call')
                        return _console.timeLog.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'timeEnd': {

        value: newFunc('timeEnd', 10, function () {

            
            ;
            _log('console.timeEnd.call')
                        return _console.timeEnd.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'timeStamp': {

        value: newFunc('timeStamp', 10, function () {

            
            ;
            _log('console.timeStamp.call')
                        return _console.timeStamp.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'context': {

        value: newFunc('context', 10, function () {

            
            ;
            _log('console.context.call')
                        return _console.context.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'createTask': {

        value: newFunc('createTask', 10, function () {

            
            ;
            _log('console.createTask.call')
                        return _console.createTask.value.call(...arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'memory': {

        get: newFunc('memory', 10, function () {


            
            ;
            let res = mm.memory.private_data.get(this)['memory'];
            _log('console.memory.get', res)
                        return _console.memory.value.call(...arguments)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('memory', 1, function (value) {
            _log('console.memory.set', value)
            mm.memory.private_data.get(this)['memory'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
})