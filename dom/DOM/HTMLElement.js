HTMLElement = newFunc('HTMLElement', 1, function HTMLElement(value) {
    // debugger;
    // if(debug)print("HTMLElement.new", value)
    mm.memory.private_data.set(this, {
        style: new CSSStyleDeclaration(),
        offsetWidth: 0,
        offsetHeight: 0,
        hidden: false,
        window: window,
        hidden: false,
        innerHTML: ''
    })
})
let HTMLElementDefaultValue = {
    "title": "watting",
    "lang": "",
    "translate": true,
    "dir": "",
    "hidden": false,
    "inert": false,
    "accessKey": "",
    "draggable": true,
    "spellcheck": true,
    "autocapitalize": "",
    "editContext": null,
    "contentEditable": "inherit",
    "enterKeyHint": "",
    "isContentEditable": false,
    "inputMode": "",
    "virtualKeyboardPolicy": "",
    "offsetParent": null,
    "offsetTop": 0,
    "offsetLeft": 0,
    "offsetWidth": 0,
    "offsetHeight": 0,
    "popover": null,
    "innerText": "",
    "outerText": "",
    "writingSuggestions": "true",
    "onbeforexrselect": null,
    "onabort": null,
    "onbeforeinput": null,
    "onbeforematch": null,
    "onbeforetoggle": null,
    "onblur": null,
    "oncancel": null,
    "oncanplay": null,
    "oncanplaythrough": null,
    "onchange": null,
    "onclick": null,
    "onclose": null,
    "oncontentvisibilityautostatechange": null,
    "oncontextlost": null,
    "oncontextmenu": null,
    "oncontextrestored": null,
    "oncuechange": null,
    "ondblclick": null,
    "ondrag": null,
    "ondragend": null,
    "ondragenter": null,
    "ondragleave": null,
    "ondragover": null,
    "ondragstart": null,
    "ondrop": null,
    "ondurationchange": null,
    "onemptied": null,
    "onended": null,
    "onerror": null,
    "onfocus": null,
    "onformdata": null,
    "oninput": null,
    "oninvalid": null,
    "onkeydown": null,
    "onkeypress": null,
    "onkeyup": null,
    "onload": null,
    "onloadeddata": null,
    "onloadedmetadata": null,
    "onloadstart": null,
    "onmousedown": null,
    "onmouseenter": null,
    "onmouseleave": null,
    "onmousemove": null,
    "onmouseout": null,
    "onmouseover": null,
    "onmouseup": null,
    "onmousewheel": null,
    "onpause": null,
    "onplay": null,
    "onplaying": null,
    "onprogress": null,
    "onratechange": null,
    "onreset": null,
    "onresize": null,
    "onscroll": null,
    "onsecuritypolicyviolation": null,
    "onseeked": null,
    "onseeking": null,
    "onselect": null,
    "onslotchange": null,
    "onstalled": null,
    "onsubmit": null,
    "onsuspend": null,
    "ontimeupdate": null,
    "ontoggle": null,
    "onvolumechange": null,
    "onwaiting": null,
    "onwebkitanimationend": null,
    "onwebkitanimationiteration": null,
    "onwebkitanimationstart": null,
    "onwebkittransitionend": null,
    "onwheel": null,
    "onauxclick": null,
    "ongotpointercapture": null,
    "onlostpointercapture": null,
    "onpointerdown": null,
    "onpointermove": null,
    "onpointerrawupdate": null,
    "onpointerup": null,
    "onpointercancel": null,
    "onpointerover": null,
    "onpointerout": null,
    "onpointerenter": null,
    "onpointerleave": null,
    "onselectstart": null,
    "onselectionchange": null,
    "onanimationend": null,
    "onanimationiteration": null,
    "onanimationstart": null,
    "ontransitionrun": null,
    "ontransitionstart": null,
    "ontransitionend": null,
    "ontransitioncancel": null,
    "oncopy": null,
    "oncut": null,
    "onpaste": null,
    "dataset": new DOMStringMap(),
    "nonce": "",
    "autofocus": false,
    "tabIndex": -1,
    "style": new CSSStyleDeclaration(),
    "attributeStyleMap": new StylePropertyMap(),
    "onscrollend": null,
    "onscrollsnapchange": null,
    "onscrollsnapchanging": null
}
Object.defineProperties(HTMLElement.prototype, {
    appendData: {
        value: newFunc('appendData',2, function (v){
            if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLElement.appendData.call',this, v)
        })
    },
    title: {

        get: newFunc('title', 10, function title     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            // debugger;
            let res =  mm.memory.private_data.get(this).title || mm.allNodes.get(this).attr('title')
            if (debug) print('HTMLElement.title.get',mm.memory.private_data.get(this),this, res, mm.allNodes.get(this).attr())
            return res;

        }, {get: true}),

        set: newFunc('title', 1, function title(value) {
            if (debug) print('HTMLElement.title.set', value,this, mm.allNodes.get(this).attr())
            // debugger;
            mm.memory.private_data.get(this).title = value
            if (mm.allNodes.has(this)) {
                mm.allNodes.get(this).attr('title', value)
            }


        }, {set: true})
        , enumerable: true, configurable: true,

    },
    lang: {

        get: newFunc('lang', 10, function lang     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.lang.get')
            return mm.memory.private_data.get(this).lang || HTMLElementDefaultValue.lang
        }, {get: true}),

        set: newFunc('lang', 1, function lang(value) {
            if (debug) print('HTMLElement.lang.set', value)
            mm.memory.private_data.get(this).lang = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    translate: {

        get: newFunc('translate', 10, function translate     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.translate.get')
            return mm.memory.private_data.get(this).translate || HTMLElementDefaultValue.translate
        }, {get: true}),

        set: newFunc('translate', 1, function translate(value) {
            if (debug) print('HTMLElement.translate.set', value)
            mm.memory.private_data.get(this).translate = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    dir: {

        get: newFunc('dir', 10, function dir     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.dir.get')
            return mm.memory.private_data.get(this).dir || HTMLElementDefaultValue.dir
        }, {get: true}),

        set: newFunc('dir', 1, function dir(value) {
            if (debug) print('HTMLElement.dir.set', value)
            mm.memory.private_data.get(this).dir = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    hidden: {

        get: newFunc('hidden', 10, function hidden     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).hidden || HTMLElementDefaultValue.hidden;
            if (debug) print('HTMLElement.hidden.get', res)
            return res
        }, {get: true}),

        set: newFunc('hidden', 1, function hidden(value) {
            if (debug) print('HTMLElement.hidden.set', value)
            mm.memory.private_data.get(this).hidden = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    inert: {

        get: newFunc('inert', 10, function inert     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.inert.get')
            return mm.memory.private_data.get(this).inert || HTMLElementDefaultValue.inert
        }, {get: true}),

        set: newFunc('inert', 1, function inert(value) {
            if (debug) print('HTMLElement.inert.set', value)
            mm.memory.private_data.get(this).inert = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    accessKey: {

        get: newFunc('accessKey', 10, function accessKey     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.accessKey.get')
            return mm.memory.private_data.get(this).accessKey || HTMLElementDefaultValue.accessKey
        }, {get: true}),

        set: newFunc('accessKey', 1, function accessKey(value) {
            if (debug) print('HTMLElement.accessKey.set', value)
            mm.memory.private_data.get(this).accessKey = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    draggable: {

        get: newFunc('draggable', 10, function draggable     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.draggable.get')
            return mm.memory.private_data.get(this).draggable || HTMLElementDefaultValue.draggable
        }, {get: true}),

        set: newFunc('draggable', 1, function draggable(value) {
            if (debug) print('HTMLElement.draggable.set', value)
            mm.memory.private_data.get(this).draggable = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    spellcheck: {

        get: newFunc('spellcheck', 10, function spellcheck     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.spellcheck.get')
            return mm.memory.private_data.get(this).spellcheck || HTMLElementDefaultValue.spellcheck
        }, {get: true}),

        set: newFunc('spellcheck', 1, function spellcheck(value) {
            if (debug) print('HTMLElement.spellcheck.set', value)
            mm.memory.private_data.get(this).spellcheck = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    autocapitalize: {

        get: newFunc('autocapitalize', 10, function autocapitalize     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.autocapitalize.get')
            return mm.memory.private_data.get(this).autocapitalize || HTMLElementDefaultValue.autocapitalize
        }, {get: true}),

        set: newFunc('autocapitalize', 1, function autocapitalize(value) {
            if (debug) print('HTMLElement.autocapitalize.set', value)
            mm.memory.private_data.get(this).autocapitalize = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    'editContext': {

        get: newFunc('editContext', 10, function      () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }


            if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['editContext'];
            if (debug) print('HTMLElement.editContext.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('editContext', 1, function (value) {
            if (debug) print('HTMLElement.editContext.set', value)
            mm.memory.private_data.get(this)['editContext'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    contentEditable: {

        get: newFunc('contentEditable', 10, function contentEditable     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.contentEditable.get')
            return mm.memory.private_data.get(this).contentEditable || HTMLElementDefaultValue.contentEditable
        }, {get: true}),

        set: newFunc('contentEditable', 1, function contentEditable(value) {
            if (debug) print('HTMLElement.contentEditable.set', value)
            mm.memory.private_data.get(this).contentEditable = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    enterKeyHint: {

        get: newFunc('enterKeyHint', 10, function enterKeyHint     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.enterKeyHint.get')
            return mm.memory.private_data.get(this).enterKeyHint || HTMLElementDefaultValue.enterKeyHint
        }, {get: true}),

        set: newFunc('enterKeyHint', 1, function enterKeyHint(value) {
            if (debug) print('HTMLElement.enterKeyHint.set', value)
            mm.memory.private_data.get(this).enterKeyHint = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    isContentEditable: {

        get: newFunc('isContentEditable', 10, function isContentEditable     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.isContentEditable.get')
            return mm.memory.private_data.get(this).isContentEditable || HTMLElementDefaultValue.isContentEditable
        }, {get: true})
        , enumerable: true, configurable: true,
    },
    inputMode: {

        get: newFunc('inputMode', 10, function inputMode     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.inputMode.get')
            return mm.memory.private_data.get(this).inputMode || HTMLElementDefaultValue.inputMode
        }, {get: true}),

        set: newFunc('inputMode', 1, function inputMode(value) {
            if (debug) print('HTMLElement.inputMode.set', value)
            mm.memory.private_data.get(this).inputMode = value

        }, {set: true})
        , enumerable: true, configurable: true,


    },
    virtualKeyboardPolicy: {

        get: newFunc('virtualKeyboardPolicy', 10, function virtualKeyboardPolicy     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.virtualKeyboardPolicy.get')
            return mm.memory.private_data.get(this).virtualKeyboardPolicy || HTMLElementDefaultValue.virtualKeyboardPolicy
        }, {get: true}),

        set: newFunc('virtualKeyboardPolicy', 1, function virtualKeyboardPolicy(value) {
            if (debug) print('HTMLElement.virtualKeyboardPolicy.set', value)
            mm.memory.private_data.get(this).virtualKeyboardPolicy = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    offsetParent: {

        get: newFunc('offsetParent', 10, function offsetParent     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.offsetParent.get')
            return mm.memory.private_data.get(this).offsetParent || HTMLElementDefaultValue.offsetParent
        }, {get: true}), enumerable: true, configurable: true,
    },
    offsetTop: {

        get: newFunc('offsetTop', 10, function offsetTop     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            mm.memory.private_data.get(this).offsetTop = 64;
            if (debug) print('HTMLElement.offsetTop.get', mm.memory.private_data.get(this).offsetTop)
            return mm.memory.private_data.get(this).offsetTop || HTMLElementDefaultValue.offsetTop
        }, {get: true}), enumerable: true, configurable: true,
    },
    offsetLeft: {

        get: newFunc('offsetLeft', 10, function offsetLeft     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.offsetLeft.get')
            return mm.memory.private_data.get(this).offsetLeft || HTMLElementDefaultValue.offsetLeft
        }, {get: true}), enumerable: true, configurable: true,
    },
    offsetWidth: {

        get: newFunc('offsetWidth', 10, function offsetWidth     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let res = mm.memory.private_data.get(this).offsetWidth || HTMLElementDefaultValue.offsetWidth
            if (debug) print('HTMLElement.offsetWidth.get', res)

            return res;
        }, {get: true}), enumerable: true, configurable: true,
    },
    offsetHeight: {

        get: newFunc('offsetHeight', 10, function offsetHeight     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res = mm.memory.private_data.get(this).offsetHeight || HTMLElementDefaultValue.offsetHeight
            if (debug) print('HTMLElement.offsetHeight.get', res)

            return res;
        }, {get: true}), enumerable: true, configurable: true,
    },
    popover: {

        get: newFunc('popover', 10, function popover     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.popover.get')
            return mm.memory.private_data.get(this).popover || HTMLElementDefaultValue.popover
        }, {get: true}),

        set: newFunc('popover', 1, function popover(value) {
            if (debug) print('HTMLElement.popover.set', value)
            mm.memory.private_data.get(this).popover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    innerText: {

        get: newFunc('innerText', 10, function innerText     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            let res =  mm.allNodes.get(this).text();
            if (debug) print('HTMLElement.innerText.get',this, res);
            return res;

        }, {get: true}),

        set: newFunc('innerText', 1, function innerText(value) {
            if (debug) print('HTMLElement.innerText.set', value)
            mm.memory.private_data.get(this).innerText = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    outerText: {

        get: newFunc('outerText', 10, function outerText     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.outerText.get')
            return mm.memory.private_data.get(this).outerText || HTMLElementDefaultValue.outerText
        }, {get: true}),

        set: newFunc('outerText', 1, function outerText(value) {
            if (debug) print('HTMLElement.outerText.set', value)
            mm.memory.private_data.get(this).outerText = value

        }, {set: true}), enumerable: true, configurable: true,


    }, writingSuggestions: {

        get: newFunc('writingSuggestions', 10, function outerText     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.writingSuggestions.get')
            return mm.memory.private_data.get(this).writingSuggestions || HTMLElementDefaultValue.writingSuggestions
        }, {get: true}),

        set: newFunc('writingSuggestions', 1, function outerText(value) {
            if (debug) print('HTMLElement.writingSuggestions.set', value)
            mm.memory.private_data.get(this).writingSuggestions = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforexrselect: {

        get: newFunc('onbeforexrselect', 10, function onbeforexrselect     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onbeforexrselect.get')
            return mm.memory.private_data.get(this).onbeforexrselect || HTMLElementDefaultValue.onbeforexrselect
        }, {get: true}),

        set: newFunc('onbeforexrselect', 1, function onbeforexrselect(value) {
            if (debug) print('HTMLElement.onbeforexrselect.set', value)
            mm.memory.private_data.get(this).onbeforexrselect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onabort: {

        get: newFunc('onabort', 10, function onabort     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onabort.get')
            return mm.memory.private_data.get(this).onabort || HTMLElementDefaultValue.onabort
        }, {get: true}),

        set: newFunc('onabort', 1, function onabort(value) {
            if (debug) print('HTMLElement.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforeinput: {

        get: newFunc('onbeforeinput', 10, function onbeforeinput     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onbeforeinput.get')
            return mm.memory.private_data.get(this).onbeforeinput || HTMLElementDefaultValue.onbeforeinput
        }, {get: true}),

        set: newFunc('onbeforeinput', 1, function onbeforeinput(value) {
            if (debug) print('HTMLElement.onbeforeinput.set', value)
            mm.memory.private_data.get(this).onbeforeinput = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforematch: {

        get: newFunc('onbeforematch', 10, function onbeforematch     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onbeforematch.get')
            return mm.memory.private_data.get(this).onbeforematch || HTMLElementDefaultValue.onbeforematch
        }, {get: true}),

        set: newFunc('onbeforematch', 1, function onbeforematch(value) {
            if (debug) print('HTMLElement.onbeforematch.set', value)
            mm.memory.private_data.get(this).onbeforematch = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onbeforetoggle: {

        get: newFunc('onbeforetoggle', 10, function onbeforetoggle     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onbeforetoggle.get')
            return mm.memory.private_data.get(this).onbeforetoggle || HTMLElementDefaultValue.onbeforetoggle
        }, {get: true}),

        set: newFunc('onbeforetoggle', 1, function onbeforetoggle(value) {
            if (debug) print('HTMLElement.onbeforetoggle.set', value)
            mm.memory.private_data.get(this).onbeforetoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onblur: {

        get: newFunc('onblur', 10, function onblur     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onblur.get')
            return mm.memory.private_data.get(this).onblur || HTMLElementDefaultValue.onblur
        }, {get: true}),

        set: newFunc('onblur', 1, function onblur(value) {
            if (debug) print('HTMLElement.onblur.set', value)
            mm.memory.private_data.get(this).onblur = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncancel: {

        get: newFunc('oncancel', 10, function oncancel     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncancel.get')
            return mm.memory.private_data.get(this).oncancel || HTMLElementDefaultValue.oncancel
        }, {get: true}),

        set: newFunc('oncancel', 1, function oncancel(value) {
            if (debug) print('HTMLElement.oncancel.set', value)
            mm.memory.private_data.get(this).oncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncanplay: {

        get: newFunc('oncanplay', 10, function oncanplay     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncanplay.get')
            return mm.memory.private_data.get(this).oncanplay || HTMLElementDefaultValue.oncanplay
        }, {get: true}),

        set: newFunc('oncanplay', 1, function oncanplay(value) {
            if (debug) print('HTMLElement.oncanplay.set', value)
            mm.memory.private_data.get(this).oncanplay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncanplaythrough: {

        get: newFunc('oncanplaythrough', 10, function oncanplaythrough     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncanplaythrough.get')
            return mm.memory.private_data.get(this).oncanplaythrough || HTMLElementDefaultValue.oncanplaythrough
        }, {get: true}),

        set: newFunc('oncanplaythrough', 1, function oncanplaythrough(value) {
            if (debug) print('HTMLElement.oncanplaythrough.set', value)
            mm.memory.private_data.get(this).oncanplaythrough = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onchange: {

        get: newFunc('onchange', 10, function onchange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onchange.get')
            return mm.memory.private_data.get(this).onchange || HTMLElementDefaultValue.onchange
        }, {get: true}),

        set: newFunc('onchange', 1, function onchange(value) {
            if (debug) print('HTMLElement.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclick: {

        get: newFunc('onclick', 10, function onclick     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onclick.get')
            return mm.memory.private_data.get(this).onclick || HTMLElementDefaultValue.onclick
        }, {get: true}),

        set: newFunc('onclick', 1, function onclick(value) {
            if (debug) print('HTMLElement.onclick.set', value)
            mm.memory.private_data.get(this).onclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onclose: {

        get: newFunc('onclose', 10, function onclose     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onclose.get')
            return mm.memory.private_data.get(this).onclose || HTMLElementDefaultValue.onclose
        }, {get: true}),

        set: newFunc('onclose', 1, function onclose(value) {
            if (debug) print('HTMLElement.onclose.set', value)
            mm.memory.private_data.get(this).onclose = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontentvisibilityautostatechange: {

        get: newFunc('oncontentvisibilityautostatechange', 10, function oncontentvisibilityautostatechange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncontentvisibilityautostatechange.get')
            return mm.memory.private_data.get(this).oncontentvisibilityautostatechange || HTMLElementDefaultValue.oncontentvisibilityautostatechange
        }, {get: true}),

        set: newFunc('oncontentvisibilityautostatechange', 1, function oncontentvisibilityautostatechange(value) {
            if (debug) print('HTMLElement.oncontentvisibilityautostatechange.set', value)
            mm.memory.private_data.get(this).oncontentvisibilityautostatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextlost: {

        get: newFunc('oncontextlost', 10, function oncontextlost     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncontextlost.get')
            return mm.memory.private_data.get(this).oncontextlost || HTMLElementDefaultValue.oncontextlost
        }, {get: true}),

        set: newFunc('oncontextlost', 1, function oncontextlost(value) {
            if (debug) print('HTMLElement.oncontextlost.set', value)
            mm.memory.private_data.get(this).oncontextlost = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextmenu: {

        get: newFunc('oncontextmenu', 10, function oncontextmenu     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncontextmenu.get')
            return mm.memory.private_data.get(this).oncontextmenu || HTMLElementDefaultValue.oncontextmenu
        }, {get: true}),

        set: newFunc('oncontextmenu', 1, function oncontextmenu(value) {
            if (debug) print('HTMLElement.oncontextmenu.set', value)
            mm.memory.private_data.get(this).oncontextmenu = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncontextrestored: {

        get: newFunc('oncontextrestored', 10, function oncontextrestored     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncontextrestored.get')
            return mm.memory.private_data.get(this).oncontextrestored || HTMLElementDefaultValue.oncontextrestored
        }, {get: true}),

        set: newFunc('oncontextrestored', 1, function oncontextrestored(value) {
            if (debug) print('HTMLElement.oncontextrestored.set', value)
            mm.memory.private_data.get(this).oncontextrestored = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oncuechange: {

        get: newFunc('oncuechange', 10, function oncuechange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncuechange.get')
            return mm.memory.private_data.get(this).oncuechange || HTMLElementDefaultValue.oncuechange
        }, {get: true}),

        set: newFunc('oncuechange', 1, function oncuechange(value) {
            if (debug) print('HTMLElement.oncuechange.set', value)
            mm.memory.private_data.get(this).oncuechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondblclick: {

        get: newFunc('ondblclick', 10, function ondblclick     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondblclick.get')
            return mm.memory.private_data.get(this).ondblclick || HTMLElementDefaultValue.ondblclick
        }, {get: true}),

        set: newFunc('ondblclick', 1, function ondblclick(value) {
            if (debug) print('HTMLElement.ondblclick.set', value)
            mm.memory.private_data.get(this).ondblclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondrag: {

        get: newFunc('ondrag', 10, function ondrag     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondrag.get')
            return mm.memory.private_data.get(this).ondrag || HTMLElementDefaultValue.ondrag
        }, {get: true}),

        set: newFunc('ondrag', 1, function ondrag(value) {
            if (debug) print('HTMLElement.ondrag.set', value)
            mm.memory.private_data.get(this).ondrag = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragend: {

        get: newFunc('ondragend', 10, function ondragend     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondragend.get')
            return mm.memory.private_data.get(this).ondragend || HTMLElementDefaultValue.ondragend
        }, {get: true}),

        set: newFunc('ondragend', 1, function ondragend(value) {
            if (debug) print('HTMLElement.ondragend.set', value)
            mm.memory.private_data.get(this).ondragend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragenter: {

        get: newFunc('ondragenter', 10, function ondragenter     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondragenter.get')
            return mm.memory.private_data.get(this).ondragenter || HTMLElementDefaultValue.ondragenter
        }, {get: true}),

        set: newFunc('ondragenter', 1, function ondragenter(value) {
            if (debug) print('HTMLElement.ondragenter.set', value)
            mm.memory.private_data.get(this).ondragenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragleave: {

        get: newFunc('ondragleave', 10, function ondragleave     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondragleave.get')
            return mm.memory.private_data.get(this).ondragleave || HTMLElementDefaultValue.ondragleave
        }, {get: true}),

        set: newFunc('ondragleave', 1, function ondragleave(value) {
            if (debug) print('HTMLElement.ondragleave.set', value)
            mm.memory.private_data.get(this).ondragleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragover: {

        get: newFunc('ondragover', 10, function ondragover     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondragover.get')
            return mm.memory.private_data.get(this).ondragover || HTMLElementDefaultValue.ondragover
        }, {get: true}),

        set: newFunc('ondragover', 1, function ondragover(value) {
            if (debug) print('HTMLElement.ondragover.set', value)
            mm.memory.private_data.get(this).ondragover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondragstart: {

        get: newFunc('ondragstart', 10, function ondragstart     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondragstart.get')
            return mm.memory.private_data.get(this).ondragstart || HTMLElementDefaultValue.ondragstart
        }, {get: true}),

        set: newFunc('ondragstart', 1, function ondragstart(value) {
            if (debug) print('HTMLElement.ondragstart.set', value)
            mm.memory.private_data.get(this).ondragstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondrop: {

        get: newFunc('ondrop', 10, function ondrop     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondrop.get')
            return mm.memory.private_data.get(this).ondrop || HTMLElementDefaultValue.ondrop
        }, {get: true}),

        set: newFunc('ondrop', 1, function ondrop(value) {
            if (debug) print('HTMLElement.ondrop.set', value)
            mm.memory.private_data.get(this).ondrop = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ondurationchange: {

        get: newFunc('ondurationchange', 10, function ondurationchange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ondurationchange.get')
            return mm.memory.private_data.get(this).ondurationchange || HTMLElementDefaultValue.ondurationchange
        }, {get: true}),

        set: newFunc('ondurationchange', 1, function ondurationchange(value) {
            if (debug) print('HTMLElement.ondurationchange.set', value)
            mm.memory.private_data.get(this).ondurationchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onemptied: {

        get: newFunc('onemptied', 10, function onemptied     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onemptied.get')
            return mm.memory.private_data.get(this).onemptied || HTMLElementDefaultValue.onemptied
        }, {get: true}),

        set: newFunc('onemptied', 1, function onemptied(value) {
            if (debug) print('HTMLElement.onemptied.set', value)
            mm.memory.private_data.get(this).onemptied = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onended: {

        get: newFunc('onended', 10, function onended     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onended.get')
            return mm.memory.private_data.get(this).onended || HTMLElementDefaultValue.onended
        }, {get: true}),

        set: newFunc('onended', 1, function onended(value) {
            if (debug) print('HTMLElement.onended.set', value)
            mm.memory.private_data.get(this).onended = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function onerror     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onerror.get')
            return mm.memory.private_data.get(this).onerror || HTMLElementDefaultValue.onerror
        }, {get: true}),

        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('HTMLElement.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

            print(mm.memory.private_data.get(this))
        }, {set: true}), enumerable: true, configurable: true,


    },
    onfocus: {

        get: newFunc('onfocus', 10, function onfocus     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onfocus.get')
            return mm.memory.private_data.get(this).onfocus || HTMLElementDefaultValue.onfocus
        }, {get: true}),

        set: newFunc('onfocus', 1, function onfocus(value) {
            if (debug) print('HTMLElement.onfocus.set', value)
            mm.memory.private_data.get(this).onfocus = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onformdata: {

        get: newFunc('onformdata', 10, function onformdata     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onformdata.get')
            return mm.memory.private_data.get(this).onformdata || HTMLElementDefaultValue.onformdata
        }, {get: true}),

        set: newFunc('onformdata', 1, function onformdata(value) {
            if (debug) print('HTMLElement.onformdata.set', value)
            mm.memory.private_data.get(this).onformdata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninput: {

        get: newFunc('oninput', 10, function oninput     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oninput.get')
            return mm.memory.private_data.get(this).oninput || HTMLElementDefaultValue.oninput
        }, {get: true}),

        set: newFunc('oninput', 1, function oninput(value) {
            if (debug) print('HTMLElement.oninput.set', value)
            mm.memory.private_data.get(this).oninput = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    oninvalid: {

        get: newFunc('oninvalid', 10, function oninvalid     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oninvalid.get')
            return mm.memory.private_data.get(this).oninvalid || HTMLElementDefaultValue.oninvalid
        }, {get: true}),

        set: newFunc('oninvalid', 1, function oninvalid(value) {
            if (debug) print('HTMLElement.oninvalid.set', value)
            mm.memory.private_data.get(this).oninvalid = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeydown: {

        get: newFunc('onkeydown', 10, function onkeydown     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onkeydown.get')
            return mm.memory.private_data.get(this).onkeydown || HTMLElementDefaultValue.onkeydown
        }, {get: true}),

        set: newFunc('onkeydown', 1, function onkeydown(value) {
            if (debug) print('HTMLElement.onkeydown.set', value)
            mm.memory.private_data.get(this).onkeydown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeypress: {

        get: newFunc('onkeypress', 10, function onkeypress     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onkeypress.get')
            return mm.memory.private_data.get(this).onkeypress || HTMLElementDefaultValue.onkeypress
        }, {get: true}),

        set: newFunc('onkeypress', 1, function onkeypress(value) {
            if (debug) print('HTMLElement.onkeypress.set', value)
            mm.memory.private_data.get(this).onkeypress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onkeyup: {

        get: newFunc('onkeyup', 10, function onkeyup     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onkeyup.get')
            return mm.memory.private_data.get(this).onkeyup || HTMLElementDefaultValue.onkeyup
        }, {get: true}),

        set: newFunc('onkeyup', 1, function onkeyup(value) {
            if (debug) print('HTMLElement.onkeyup.set', value)
            mm.memory.private_data.get(this).onkeyup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onload: {

        get: newFunc('onload', 10, function onload     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onload.get')
            return mm.memory.private_data.get(this).onload || HTMLElementDefaultValue.onload
        }, {get: true}),

        set: newFunc('onload', 1, function onload(value) {
            if (debug) print('HTMLElement.onload.set', value)
            mm.memory.private_data.get(this).onload = value
            // debugger

            // value(new Event('load', {
            //     srcElement: this,
            //     target: this,
            // }))

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadeddata: {

        get: newFunc('onloadeddata', 10, function onloadeddata     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onloadeddata.get')
            return mm.memory.private_data.get(this).onloadeddata || HTMLElementDefaultValue.onloadeddata
        }, {get: true}),

        set: newFunc('onloadeddata', 1, function onloadeddata(value) {
            if (debug) print('HTMLElement.onloadeddata.set', value)
            mm.memory.private_data.get(this).onloadeddata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadedmetadata: {

        get: newFunc('onloadedmetadata', 10, function onloadedmetadata     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onloadedmetadata.get')
            return mm.memory.private_data.get(this).onloadedmetadata || HTMLElementDefaultValue.onloadedmetadata
        }, {get: true}),

        set: newFunc('onloadedmetadata', 1, function onloadedmetadata(value) {
            if (debug) print('HTMLElement.onloadedmetadata.set', value)
            mm.memory.private_data.get(this).onloadedmetadata = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onloadstart: {

        get: newFunc('onloadstart', 10, function onloadstart     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onloadstart.get')
            return mm.memory.private_data.get(this).onloadstart || HTMLElementDefaultValue.onloadstart
        }, {get: true}),

        set: newFunc('onloadstart', 1, function onloadstart(value) {
            if (debug) print('HTMLElement.onloadstart.set', value)
            mm.memory.private_data.get(this).onloadstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousedown: {

        get: newFunc('onmousedown', 10, function onmousedown     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmousedown.get')
            return mm.memory.private_data.get(this).onmousedown || HTMLElementDefaultValue.onmousedown
        }, {get: true}),

        set: newFunc('onmousedown', 1, function onmousedown(value) {
            if (debug) print('HTMLElement.onmousedown.set', value)
            mm.memory.private_data.get(this).onmousedown = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseenter: {

        get: newFunc('onmouseenter', 10, function onmouseenter     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmouseenter.get')
            return mm.memory.private_data.get(this).onmouseenter || HTMLElementDefaultValue.onmouseenter
        }, {get: true}),

        set: newFunc('onmouseenter', 1, function onmouseenter(value) {
            if (debug) print('HTMLElement.onmouseenter.set', value)
            mm.memory.private_data.get(this).onmouseenter = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseleave: {

        get: newFunc('onmouseleave', 10, function onmouseleave     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmouseleave.get')
            return mm.memory.private_data.get(this).onmouseleave || HTMLElementDefaultValue.onmouseleave
        }, {get: true}),

        set: newFunc('onmouseleave', 1, function onmouseleave(value) {
            if (debug) print('HTMLElement.onmouseleave.set', value)
            mm.memory.private_data.get(this).onmouseleave = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousemove: {

        get: newFunc('onmousemove', 10, function onmousemove     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmousemove.get')
            return mm.memory.private_data.get(this).onmousemove || HTMLElementDefaultValue.onmousemove
        }, {get: true}),

        set: newFunc('onmousemove', 1, function onmousemove(value) {
            if (debug) print('HTMLElement.onmousemove.set', value)
            mm.memory.private_data.get(this).onmousemove = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseout: {

        get: newFunc('onmouseout', 10, function onmouseout     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmouseout.get')
            return mm.memory.private_data.get(this).onmouseout || HTMLElementDefaultValue.onmouseout
        }, {get: true}),

        set: newFunc('onmouseout', 1, function onmouseout(value) {
            if (debug) print('HTMLElement.onmouseout.set', value)
            mm.memory.private_data.get(this).onmouseout = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseover: {

        get: newFunc('onmouseover', 10, function onmouseover     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmouseover.get')
            return mm.memory.private_data.get(this).onmouseover || HTMLElementDefaultValue.onmouseover
        }, {get: true}),

        set: newFunc('onmouseover', 1, function onmouseover(value) {
            if (debug) print('HTMLElement.onmouseover.set', value)
            mm.memory.private_data.get(this).onmouseover = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmouseup: {

        get: newFunc('onmouseup', 10, function onmouseup     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmouseup.get')
            return mm.memory.private_data.get(this).onmouseup || HTMLElementDefaultValue.onmouseup
        }, {get: true}),

        set: newFunc('onmouseup', 1, function onmouseup(value) {
            if (debug) print('HTMLElement.onmouseup.set', value)
            mm.memory.private_data.get(this).onmouseup = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmousewheel: {

        get: newFunc('onmousewheel', 10, function onmousewheel     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onmousewheel.get')
            return mm.memory.private_data.get(this).onmousewheel || HTMLElementDefaultValue.onmousewheel
        }, {get: true}),

        set: newFunc('onmousewheel', 1, function onmousewheel(value) {
            if (debug) print('HTMLElement.onmousewheel.set', value)
            mm.memory.private_data.get(this).onmousewheel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpause: {

        get: newFunc('onpause', 10, function onpause     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpause.get')
            return mm.memory.private_data.get(this).onpause || HTMLElementDefaultValue.onpause
        }, {get: true}),

        set: newFunc('onpause', 1, function onpause(value) {
            if (debug) print('HTMLElement.onpause.set', value)
            mm.memory.private_data.get(this).onpause = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onplay: {

        get: newFunc('onplay', 10, function onplay     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onplay.get')
            return mm.memory.private_data.get(this).onplay || HTMLElementDefaultValue.onplay
        }, {get: true}),

        set: newFunc('onplay', 1, function onplay(value) {
            if (debug) print('HTMLElement.onplay.set', value)
            mm.memory.private_data.get(this).onplay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onplaying: {

        get: newFunc('onplaying', 10, function onplaying     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onplaying.get')
            return mm.memory.private_data.get(this).onplaying || HTMLElementDefaultValue.onplaying
        }, {get: true}),

        set: newFunc('onplaying', 1, function onplaying(value) {
            if (debug) print('HTMLElement.onplaying.set', value)
            mm.memory.private_data.get(this).onplaying = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onprogress: {

        get: newFunc('onprogress', 10, function onprogress     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onprogress.get')
            return mm.memory.private_data.get(this).onprogress || HTMLElementDefaultValue.onprogress
        }, {get: true}),

        set: newFunc('onprogress', 1, function onprogress(value) {
            if (debug) print('HTMLElement.onprogress.set', value)
            mm.memory.private_data.get(this).onprogress = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onratechange: {

        get: newFunc('onratechange', 10, function onratechange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onratechange.get')
            return mm.memory.private_data.get(this).onratechange || HTMLElementDefaultValue.onratechange
        }, {get: true}),

        set: newFunc('onratechange', 1, function onratechange(value) {
            if (debug) print('HTMLElement.onratechange.set', value)
            mm.memory.private_data.get(this).onratechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onreset: {

        get: newFunc('onreset', 10, function onreset     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onreset.get')
            return mm.memory.private_data.get(this).onreset || HTMLElementDefaultValue.onreset
        }, {get: true}),

        set: newFunc('onreset', 1, function onreset(value) {
            if (debug) print('HTMLElement.onreset.set', value)
            mm.memory.private_data.get(this).onreset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onresize: {

        get: newFunc('onresize', 10, function onresize     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onresize.get')
            return mm.memory.private_data.get(this).onresize || HTMLElementDefaultValue.onresize
        }, {get: true}),

        set: newFunc('onresize', 1, function onresize(value) {
            if (debug) print('HTMLElement.onresize.set', value)
            mm.memory.private_data.get(this).onresize = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscroll: {

        get: newFunc('onscroll', 10, function onscroll     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onscroll.get')
            return mm.memory.private_data.get(this).onscroll || HTMLElementDefaultValue.onscroll
        }, {get: true}),

        set: newFunc('onscroll', 1, function onscroll(value) {
            if (debug) print('HTMLElement.onscroll.set', value)
            mm.memory.private_data.get(this).onscroll = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsecuritypolicyviolation: {

        get: newFunc('onsecuritypolicyviolation', 10, function onsecuritypolicyviolation     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onsecuritypolicyviolation.get')
            return mm.memory.private_data.get(this).onsecuritypolicyviolation || HTMLElementDefaultValue.onsecuritypolicyviolation
        }, {get: true}),

        set: newFunc('onsecuritypolicyviolation', 1, function onsecuritypolicyviolation(value) {
            if (debug) print('HTMLElement.onsecuritypolicyviolation.set', value)
            mm.memory.private_data.get(this).onsecuritypolicyviolation = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onseeked: {

        get: newFunc('onseeked', 10, function onseeked     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onseeked.get')
            return mm.memory.private_data.get(this).onseeked || HTMLElementDefaultValue.onseeked
        }, {get: true}),

        set: newFunc('onseeked', 1, function onseeked(value) {
            if (debug) print('HTMLElement.onseeked.set', value)
            mm.memory.private_data.get(this).onseeked = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onseeking: {

        get: newFunc('onseeking', 10, function onseeking     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onseeking.get')
            return mm.memory.private_data.get(this).onseeking || HTMLElementDefaultValue.onseeking
        }, {get: true}),

        set: newFunc('onseeking', 1, function onseeking(value) {
            if (debug) print('HTMLElement.onseeking.set', value)
            mm.memory.private_data.get(this).onseeking = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onselect: {

        get: newFunc('onselect', 10, function onselect     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onselect.get')
            return mm.memory.private_data.get(this).onselect || HTMLElementDefaultValue.onselect
        }, {get: true}),

        set: newFunc('onselect', 1, function onselect(value) {
            if (debug) print('HTMLElement.onselect.set', value)
            mm.memory.private_data.get(this).onselect = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onslotchange: {

        get: newFunc('onslotchange', 10, function onslotchange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onslotchange.get')
            return mm.memory.private_data.get(this).onslotchange || HTMLElementDefaultValue.onslotchange
        }, {get: true}),

        set: newFunc('onslotchange', 1, function onslotchange(value) {
            if (debug) print('HTMLElement.onslotchange.set', value)
            mm.memory.private_data.get(this).onslotchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onstalled: {

        get: newFunc('onstalled', 10, function onstalled     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onstalled.get')
            return mm.memory.private_data.get(this).onstalled || HTMLElementDefaultValue.onstalled
        }, {get: true}),

        set: newFunc('onstalled', 1, function onstalled(value) {
            if (debug) print('HTMLElement.onstalled.set', value)
            mm.memory.private_data.get(this).onstalled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsubmit: {

        get: newFunc('onsubmit', 0, function onsubmit     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onsubmit.get')
            return mm.memory.private_data.get(this).onsubmit || HTMLElementDefaultValue.onsubmit
        }, {get: true}),

        set: newFunc('onsubmit', 1, function onsubmit(value) {
            if (debug) print('HTMLElement.onsubmit.set', value)
            mm.memory.private_data.get(this).onsubmit = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onsuspend: {

        get: newFunc('onsuspend', 10, function onsuspend     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onsuspend.get')
            return mm.memory.private_data.get(this).onsuspend || HTMLElementDefaultValue.onsuspend
        }, {get: true}),

        set: newFunc('onsuspend', 1, function onsuspend(value) {
            if (debug) print('HTMLElement.onsuspend.set', value)
            mm.memory.private_data.get(this).onsuspend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontimeupdate: {

        get: newFunc('ontimeupdate', 10, function ontimeupdate     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ontimeupdate.get')
            return mm.memory.private_data.get(this).ontimeupdate || HTMLElementDefaultValue.ontimeupdate
        }, {get: true}),

        set: newFunc('ontimeupdate', 1, function ontimeupdate(value) {
            if (debug) print('HTMLElement.ontimeupdate.set', value)
            mm.memory.private_data.get(this).ontimeupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ontoggle: {

        get: newFunc('ontoggle', 10, function ontoggle     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ontoggle.get')
            return mm.memory.private_data.get(this).ontoggle || HTMLElementDefaultValue.ontoggle
        }, {get: true}),

        set: newFunc('ontoggle', 1, function ontoggle(value) {
            if (debug) print('HTMLElement.ontoggle.set', value)
            mm.memory.private_data.get(this).ontoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onvolumechange: {

        get: newFunc('onvolumechange', 10, function onvolumechange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onvolumechange.get')
            return mm.memory.private_data.get(this).onvolumechange || HTMLElementDefaultValue.onvolumechange
        }, {get: true}),

        set: newFunc('onvolumechange', 1, function onvolumechange(value) {
            if (debug) print('HTMLElement.onvolumechange.set', value)
            mm.memory.private_data.get(this).onvolumechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwaiting: {

        get: newFunc('onwaiting', 10, function onwaiting     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onwaiting.get')
            return mm.memory.private_data.get(this).onwaiting || HTMLElementDefaultValue.onwaiting
        }, {get: true}),

        set: newFunc('onwaiting', 1, function onwaiting(value) {
            if (debug) print('HTMLElement.onwaiting.set', value)
            mm.memory.private_data.get(this).onwaiting = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationend: {

        get: newFunc('onwebkitanimationend', 10, function onwebkitanimationend     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onwebkitanimationend.get')
            return mm.memory.private_data.get(this).onwebkitanimationend || HTMLElementDefaultValue.onwebkitanimationend
        }, {get: true}),

        set: newFunc('onwebkitanimationend', 1, function onwebkitanimationend(value) {
            if (debug) print('HTMLElement.onwebkitanimationend.set', value)
            mm.memory.private_data.get(this).onwebkitanimationend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationiteration: {

        get: newFunc('onwebkitanimationiteration', 10, function onwebkitanimationiteration     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onwebkitanimationiteration.get')
            return mm.memory.private_data.get(this).onwebkitanimationiteration || HTMLElementDefaultValue.onwebkitanimationiteration
        }, {get: true}),

        set: newFunc('onwebkitanimationiteration', 1, function onwebkitanimationiteration(value) {
            if (debug) print('HTMLElement.onwebkitanimationiteration.set', value)
            mm.memory.private_data.get(this).onwebkitanimationiteration = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkitanimationstart: {

        get: newFunc('onwebkitanimationstart', 10, function onwebkitanimationstart     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onwebkitanimationstart.get')
            return mm.memory.private_data.get(this).onwebkitanimationstart || HTMLElementDefaultValue.onwebkitanimationstart
        }, {get: true}),

        set: newFunc('onwebkitanimationstart', 1, function onwebkitanimationstart(value) {
            if (debug) print('HTMLElement.onwebkitanimationstart.set', value)
            mm.memory.private_data.get(this).onwebkitanimationstart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwebkittransitionend: {

        get: newFunc('onwebkittransitionend', 10, function onwebkittransitionend     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onwebkittransitionend.get')
            return mm.memory.private_data.get(this).onwebkittransitionend || HTMLElementDefaultValue.onwebkittransitionend
        }, {get: true}),

        set: newFunc('onwebkittransitionend', 1, function onwebkittransitionend(value) {
            if (debug) print('HTMLElement.onwebkittransitionend.set', value)
            mm.memory.private_data.get(this).onwebkittransitionend = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onwheel: {

        get: newFunc('onwheel', 10, function onwheel     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onwheel.get')
            return mm.memory.private_data.get(this).onwheel || HTMLElementDefaultValue.onwheel
        }, {get: true}),

        set: newFunc('onwheel', 1, function onwheel(value) {
            if (debug) print('HTMLElement.onwheel.set', value)
            mm.memory.private_data.get(this).onwheel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onauxclick: {

        get: newFunc('onauxclick', 10, function onauxclick     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onauxclick.get')
            return mm.memory.private_data.get(this).onauxclick || HTMLElementDefaultValue.onauxclick
        }, {get: true}),

        set: newFunc('onauxclick', 1, function onauxclick(value) {
            if (debug) print('HTMLElement.onauxclick.set', value)
            mm.memory.private_data.get(this).onauxclick = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ongotpointercapture: {

        get: newFunc('ongotpointercapture', 10, function ongotpointercapture     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ongotpointercapture.get')
            return mm.memory.private_data.get(this).ongotpointercapture || HTMLElementDefaultValue.ongotpointercapture
        }, {get: true}),

        set: newFunc('ongotpointercapture', 1, function ongotpointercapture(value) {
            if (debug) print('HTMLElement.ongotpointercapture.set', value)
            mm.memory.private_data.get(this).ongotpointercapture = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onlostpointercapture: {

        get: newFunc('onlostpointercapture', 10, function onlostpointercapture     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onlostpointercapture.get')
            return mm.memory.private_data.get(this).onlostpointercapture || HTMLElementDefaultValue.onlostpointercapture
        }, {get: true}),

        set: newFunc('onlostpointercapture', 1, function onlostpointercapture(value) {
            if (debug) print('HTMLElement.onlostpointercapture.set', value)
            mm.memory.private_data.get(this).onlostpointercapture = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onpointerdown: {

        get: newFunc('onpointerdown', 10, function onpointerdown     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointerdown.get')
            return mm.memory.private_data.get(this).onpointerdown || HTMLElementDefaultValue.onpointerdown
        }, {get: true}),

        set: newFunc('onpointerdown', 1, function onpointerdown(value) {
            if (debug) print('HTMLElement.onpointerdown.set', value)
            mm.memory.private_data.get(this).onpointerdown = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    onpointermove: {

        get: newFunc('onpointermove', 10, function onpointermove     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointermove.get')
            return mm.memory.private_data.get(this).onpointermove || HTMLElementDefaultValue.onpointermove
        }, {get: true}),

        set: newFunc('onpointermove', 1, function onpointermove(value) {
            if (debug) print('HTMLElement.onpointermove.set', value)
            mm.memory.private_data.get(this).onpointermove = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onpointerrawupdate: {

        get: newFunc('onpointerrawupdate', 10, function onpointerrawupdate     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointerrawupdate.get')
            return mm.memory.private_data.get(this).onpointerrawupdate || HTMLElementDefaultValue.onpointerrawupdate
        }, {get: true}),

        set: newFunc('onpointerrawupdate', 1, function onpointerrawupdate(value) {
            if (debug) print('HTMLElement.onpointerrawupdate.set', value)
            mm.memory.private_data.get(this).onpointerrawupdate = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    onpointerup: {

        get: newFunc('onpointerup', 10, function onpointerup     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointerup.get')
            return mm.memory.private_data.get(this).onpointerup || HTMLElementDefaultValue.onpointerup
        }, {get: true}),

        set: newFunc('onpointerup', 1, function onpointerup(value) {
            if (debug) print('HTMLElement.onpointerup.set', value)
            mm.memory.private_data.get(this).onpointerup = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onpointercancel: {

        get: newFunc('onpointercancel', 10, function onpointercancel     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointercancel.get')
            return mm.memory.private_data.get(this).onpointercancel || HTMLElementDefaultValue.onpointercancel
        }, {get: true}),

        set: newFunc('onpointercancel', 1, function onpointercancel(value) {
            if (debug) print('HTMLElement.onpointercancel.set', value)
            mm.memory.private_data.get(this).onpointercancel = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onpointerover: {

        get: newFunc('onpointerover', 10, function onpointerover     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointerover.get')
            return mm.memory.private_data.get(this).onpointerover || HTMLElementDefaultValue.onpointerover
        }, {get: true}),

        set: newFunc('onpointerover', 1, function onpointerover(value) {
            if (debug) print('HTMLElement.onpointerover.set', value)
            mm.memory.private_data.get(this).onpointerover = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onpointerout: {

        get: newFunc('onpointerout', 10, function onpointerout     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointerout.get')
            return mm.memory.private_data.get(this).onpointerout || HTMLElementDefaultValue.onpointerout
        }, {get: true}),

        set: newFunc('onpointerout', 1, function onpointerout(value) {
            if (debug) print('HTMLElement.onpointerout.set', value)
            mm.memory.private_data.get(this).onpointerout = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    onpointerenter: {

        get: newFunc('onpointerenter', 10, function onpointerenter     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointerenter.get')
            return mm.memory.private_data.get(this).onpointerenter || HTMLElementDefaultValue.onpointerenter
        }, {get: true}),

        set: newFunc('onpointerenter', 1, function onpointerenter(value) {
            if (debug) print('HTMLElement.onpointerenter.set', value)
            mm.memory.private_data.get(this).onpointerenter = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onpointerleave: {

        get: newFunc('onpointerleave', 10, function onpointerleave     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpointerleave.get')
            return mm.memory.private_data.get(this).onpointerleave || HTMLElementDefaultValue.onpointerleave
        }, {get: true}),

        set: newFunc('onpointerleave', 1, function onpointerleave(value) {
            if (debug) print('HTMLElement.onpointerleave.set', value)
            mm.memory.private_data.get(this).onpointerleave = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onselectstart: {

        get: newFunc('onselectstart', 10, function onselectstart     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onselectstart.get')
            return mm.memory.private_data.get(this).onselectstart || HTMLElementDefaultValue.onselectstart
        }, {get: true}),

        set: newFunc('onselectstart', 1, function onselectstart(value) {
            if (debug) print('HTMLElement.onselectstart.set', value)
            mm.memory.private_data.get(this).onselectstart = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onselectionchange: {

        get: newFunc('onselectionchange', 10, function onselectionchange     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onselectionchange.get')
            return mm.memory.private_data.get(this).onselectionchange || HTMLElementDefaultValue.onselectionchange
        }, {get: true}),

        set: newFunc('onselectionchange', 1, function onselectionchange(value) {
            if (debug) print('HTMLElement.onselectionchange.set', value)
            mm.memory.private_data.get(this).onselectionchange = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    onanimationend: {

        get: newFunc('onanimationend', 10, function onanimationend     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onanimationend.get')
            return mm.memory.private_data.get(this).onanimationend || HTMLElementDefaultValue.onanimationend
        }, {get: true}),

        set: newFunc('onanimationend', 1, function onanimationend(value) {
            if (debug) print('HTMLElement.onanimationend.set', value)
            mm.memory.private_data.get(this).onanimationend = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    onanimationiteration: {

        get: newFunc('onanimationiteration', 10, function onanimationiteration     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onanimationiteration.get')
            return mm.memory.private_data.get(this).onanimationiteration || HTMLElementDefaultValue.onanimationiteration
        }, {get: true}),

        set: newFunc('onanimationiteration', 1, function onanimationiteration(value) {
            if (debug) print('HTMLElement.onanimationiteration.set', value)
            mm.memory.private_data.get(this).onanimationiteration = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onanimationstart: {

        get: newFunc('onanimationstart', 10, function onanimationstart     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onanimationstart.get')
            return mm.memory.private_data.get(this).onanimationstart || HTMLElementDefaultValue.onanimationstart
        }, {get: true}),

        set: newFunc('onanimationstart', 1, function onanimationstart(value) {
            if (debug) print('HTMLElement.onanimationstart.set', value)
            mm.memory.private_data.get(this).onanimationstart = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    ontransitionrun: {

        get: newFunc('ontransitionrun', 10, function ontransitionrun     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ontransitionrun.get')
            return mm.memory.private_data.get(this).ontransitionrun || HTMLElementDefaultValue.ontransitionrun
        }, {get: true}),

        set: newFunc('ontransitionrun', 1, function ontransitionrun(value) {
            if (debug) print('HTMLElement.ontransitionrun.set', value)
            mm.memory.private_data.get(this).ontransitionrun = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    ontransitionstart: {

        get: newFunc('ontransitionstart', 10, function ontransitionstart     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ontransitionstart.get')
            return mm.memory.private_data.get(this).ontransitionstart || HTMLElementDefaultValue.ontransitionstart
        }, {get: true}),

        set: newFunc('ontransitionstart', 1, function ontransitionstart(value) {
            if (debug) print('HTMLElement.ontransitionstart.set', value)
            mm.memory.private_data.get(this).ontransitionstart = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    ontransitionend: {

        get: newFunc('ontransitionend', 10, function ontransitionend     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ontransitionend.get')
            return mm.memory.private_data.get(this).ontransitionend || HTMLElementDefaultValue.ontransitionend
        }, {get: true}),

        set: newFunc('ontransitionend', 1, function ontransitionend(value) {
            if (debug) print('HTMLElement.ontransitionend.set', value)
            mm.memory.private_data.get(this).ontransitionend = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    ontransitioncancel: {

        get: newFunc('ontransitioncancel', 10, function ontransitioncancel     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.ontransitioncancel.get')
            return mm.memory.private_data.get(this).ontransitioncancel || HTMLElementDefaultValue.ontransitioncancel
        }, {get: true}),

        set: newFunc('ontransitioncancel', 1, function ontransitioncancel(value) {
            if (debug) print('HTMLElement.ontransitioncancel.set', value)
            mm.memory.private_data.get(this).ontransitioncancel = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    oncopy: {

        get: newFunc('oncopy', 10, function oncopy     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncopy.get')
            return mm.memory.private_data.get(this).oncopy || HTMLElementDefaultValue.oncopy
        }, {get: true}),

        set: newFunc('oncopy', 1, function oncopy(value) {
            if (debug) print('HTMLElement.oncopy.set', value)
            mm.memory.private_data.get(this).oncopy = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    oncut: {

        get: newFunc('oncut', 10, function oncut     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.oncut.get')
            return mm.memory.private_data.get(this).oncut || HTMLElementDefaultValue.oncut
        }, {get: true}),

        set: newFunc('oncut', 1, function oncut(value) {
            if (debug) print('HTMLElement.oncut.set', value)
            mm.memory.private_data.get(this).oncut = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    onpaste: {

        get: newFunc('onpaste', 10, function onpaste     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onpaste.get')
            return mm.memory.private_data.get(this).onpaste || HTMLElementDefaultValue.onpaste
        }, {get: true}),

        set: newFunc('onpaste', 1, function onpaste(value) {
            if (debug) print('HTMLElement.onpaste.set', value)
            mm.memory.private_data.get(this).onpaste = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    dataset: {

        get: newFunc('dataset', 10, function dataset     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.dataset.get')
            return mm.memory.private_data.get(this).dataset || HTMLElementDefaultValue.dataset
        }, {get: true}), enumerable: true, configurable: true,
    },
    nonce: {

        get: newFunc('nonce', 10, function nonce     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.nonce.get')
            return mm.memory.private_data.get(this).nonce || HTMLElementDefaultValue.nonce
        }, {get: true}),

        set: newFunc('nonce', 1, function nonce(value) {
            if (debug) print('HTMLElement.nonce.set', value)
            mm.memory.private_data.get(this).nonce = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    autofocus: {

        get: newFunc('autofocus', 10, function autofocus     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.autofocus.get')
            return mm.memory.private_data.get(this).autofocus || HTMLElementDefaultValue.autofocus
        }, {get: true}),

        set: newFunc('autofocus', 1, function autofocus(value) {
            if (debug) print('HTMLElement.autofocus.set', value)
            mm.memory.private_data.get(this).autofocus = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    tabIndex: {

        get: newFunc('tabIndex', 10, function tabIndex     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.tabIndex.get')
            return mm.memory.private_data.get(this).tabIndex || HTMLElementDefaultValue.tabIndex
        }, {get: true}),

        set: newFunc('tabIndex', 1, function tabIndex(value) {
            if (debug) print('HTMLElement.tabIndex.set', value)
            mm.memory.private_data.get(this).tabIndex = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    style: {

        get: newFunc('style', 10, function style     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            // debugger;
            let res = mm.memory.private_data.get(this).style || HTMLElementDefaultValue.style
            if (res === undefined) {
                res = new CSSStyleDeclaration()
                mm.memory.private_data.get(this).style = res;
            }
            if (debug) print('HTMLElement.style.get', typeof res)
            return res;
        }, {get: true}),

        set: newFunc('style', 1, function style(value) {
            if (debug) print('HTMLElement.style.set', value)
            mm.memory.private_data.get(this).style = value

        }, {set: true})

        , enumerable: true, configurable: true,
    },
    attributeStyleMap: {

        get: newFunc('attributeStyleMap', 10, function attributeStyleMap     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.attributeStyleMap.get')
            return mm.memory.private_data.get(this).attributeStyleMap || HTMLElementDefaultValue.attributeStyleMap
        }, {get: true}), enumerable: true, configurable: true,
    },
    attachInternals: {

        value: newFunc('attachInternals', 10, function attachInternals          () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            } if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.attachInternals.call', arguments)

        })

        , enumerable: true, configurable: true,
    },
    blur: {

        value: newFunc('blur', 10, function blur     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.blur.call', arguments)

        })
        , enumerable: true, configurable: true,

    },
    click: {

        value: newFunc('click', 10, function click     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.click.call', arguments, mm.memory.private_data.get(this).onclick)
            if (mm.memory.private_data.get(this).onclick) {
                print('HTMLElement.click.call()', mm.memory.private_data.get(this).onclick.toString())

                let p = new PointerEvent(this);
                // debugger;

                // p = new Proxy(p, {
                //     get(target, p2, receiver) {
                //         let res =  Reflect.get(target, p2, receiver)
                //         print('p.get', p2, res)
                //         return res;
                //
                //     }
                // })
                p.isTrusted = false;
                mm.memory.private_data.get(this).onclick(
                    p
                )
            }

        })
        , enumerable: true, configurable: true,

    },
    focus: {

        value: newFunc('focus', 10, function focus     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.focus.call', arguments)

        })

        , enumerable: true, configurable: true,
    },
    hidePopover: {

        value: newFunc('hidePopover', 10, function hidePopover     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.hidePopover.call', arguments)

        })
        , enumerable: true, configurable: true,

    },
    showPopover: {

        value: newFunc('showPopover', 10, function showPopover     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.showPopover.call', arguments)

        })

        , enumerable: true, configurable: true,
    },
    togglePopover: {

        value: newFunc('togglePopover', 10, function togglePopover     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.togglePopover.call', arguments)

        })

        , enumerable: true, configurable: true,
    },


    onscrollend: {

        get: newFunc('onscrollend', 10, function onscrollend     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.onscrollend.get')
            return mm.memory.private_data.get(this).onscrollend || HTMLElementDefaultValue.onscrollend
        }, {get: true}),

        set: newFunc('onscrollend', 1, function onscrollend(value) {
            if (debug) print('HTMLElement.onscrollend.set', value)
            mm.memory.private_data.get(this).onscrollend = value

        }, {set: true})
        , enumerable: true, configurable: true,

    },
    'onscrollsnapchange': {

        get: newFunc('onscrollsnapchange', 10, function      () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }


            if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onscrollsnapchange'] || HTMLElementDefaultValue.onscrollsnapchange;
            if (debug) print('HTMLElement.onscrollsnapchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchange', 1, function (value) {
            if (debug) print('HTMLElement.onscrollsnapchange.set', value)
            mm.memory.private_data.get(this)['onscrollsnapchange'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'onscrollsnapchanging': {

        get: newFunc('onscrollsnapchanging', 10, function      () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }


            if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['onscrollsnapchanging'] || HTMLElementDefaultValue.onscrollsnapchanging;
            if (debug) print('HTMLElement.onscrollsnapchanging.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchanging', 1, function (value) {
            if (debug) print('HTMLElement.onscrollsnapchanging.set', value)
            mm.memory.private_data.get(this)['onscrollsnapchanging'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor     () {     if (!HTMLElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            if (debug) print('HTMLElement.constructor.call', arguments)

        })

        , enumerable: true, configurable: true,
    },

})

Object.setPrototypeOf(HTMLElement.prototype, Element.prototype)
Object.setPrototypeOf(HTMLElement, Element)
HTMLElement.__proto__ = Element.prototype

HTMLElement.call = Function.prototype.call

// if (proxy) HTMLElement = mm.proxy(HTMLElement, 'HTMLElement')