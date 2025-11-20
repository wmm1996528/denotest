window.inputLists = [];
window.inputAttrs = new WeakMap();
window['native_attachShadow'] = function (v) {
    if (debug) print('Element.attachShadow.call', v)
    Object.defineProperties(document, {
        mode: {value: v.mode}
    })
    return document
}

Utils.registerNative('attachShadow', 'attachShadow')

let rectIdx = 0;
let rects = [{"x":20.1171875,"y":8,"width":12.953125,"height":49.953125,"top":8,"right":33.0703125,"bottom":57.953125,"left":20.1171875},{"x":8,"y":257.096923828125,"width":4,"height":74.71237182617188,"top":257.096923828125,"right":12,"bottom":331.8092956542969,"left":8},{"x":-1.7014116368809092e+32,"y":308.640625,"width":3.4028232737618185e+32,"height":307.125,"top":308.640625,"right":1.7014116368809092e+32,"bottom":615.765625,"left":-1.7014116368809092e+32},{"x":359.7618408203125,"y":237.41903686523438,"width":128.445068359375,"height":181.33380126953125,"top":237.41903686523438,"right":488.2069091796875,"bottom":418.7528381347656,"left":359.7618408203125},{"x":64.5234375,"y":543.453125,"width":62.0625,"height":163.5,"top":543.453125,"right":126.5859375,"bottom":706.953125,"left":64.5234375},{"x":7.888884544372559,"y":706.54833984375,"width":28.22222900390625,"height":102.8095703125,"top":706.54833984375,"right":36.11111354827881,"bottom":809.35791015625,"left":7.888884544372559},{"x":22.5546875,"y":458.40625,"width":72,"height":23.5,"top":458.40625,"right":94.5546875,"bottom":481.90625,"left":22.5546875},{"x":262.5546875,"y":658.40625,"width":36,"height":59.5,"top":658.40625,"right":298.5546875,"bottom":717.90625,"left":262.5546875},{"x":262.5546875,"y":698.40625,"width":164,"height":22.5,"top":698.40625,"right":426.5546875,"bottom":720.90625,"left":262.5546875},{"x":262.5546875,"y":493.40625,"width":20,"height":22.5,"top":493.40625,"right":282.5546875,"bottom":515.90625,"left":262.5546875}]


Element = newFunc('Element', 10, function Element() {
    // throw new TypeError('Illegal constructor')
    // mm.memory.private_data.set(this, {})
})
let ElementById = {}
let ElementByClass = {}
let ElementDefault = {
    "namespaceURI": "http://www.w3.org/1999/xhtml",
    "prefix": null,
    "localName": "",
    "tagName": "",
    "id": "",
    "className": "",
    "slot": "",
    // "attributes": {},
    "shadowRoot": null,
    // "part": {},
    "assignedSlot": null,
    "innerHTML": "",
    "outerHTML": "",
    "scrollTop": 0,
    "scrollLeft": 0,
    "scrollWidth": 0,
    "scrollHeight": 0,
    "clientTop": 0,
    "clientLeft": 0,
    "clientWidth": 0,
    "clientHeight": 0,
    "onbeforecopy": null,
    "onbeforecut": null,
    "onbeforepaste": null,
    "onsearch": null,
    "elementTiming": "",
    "onfullscreenchange": null,
    "onfullscreenerror": null,
    "onwebkitfullscreenchange": null,
    "onwebkitfullscreenerror": null,
    "role": null,
    "ariaAtomic": null,
    "ariaAutoComplete": null,
    "ariaBusy": null,
    "ariaBrailleLabel": null,
    "ariaBrailleRoleDescription": null,
    "ariaChecked": null,
    "ariaColCount": null,
    "ariaColIndex": null,
    "ariaColSpan": null,
    "ariaCurrent": null,
    "ariaDescription": null,
    "ariaDisabled": null,
    "ariaExpanded": null,
    "ariaHasPopup": null,
    "ariaHidden": null,
    "ariaInvalid": null,
    "ariaKeyShortcuts": null,
    "ariaLabel": null,
    "ariaLevel": null,
    "ariaLive": null,
    "ariaModal": null,
    "ariaMultiLine": null,
    "ariaMultiSelectable": null,
    "ariaOrientation": null,
    "ariaPlaceholder": null,
    "ariaPosInSet": null,
    "ariaPressed": null,
    "ariaReadOnly": null,
    "ariaRelevant": null,
    "ariaRequired": null,
    "ariaRoleDescription": null,
    "ariaRowCount": null,
    "ariaRowIndex": null,
    "ariaRowSpan": null,
    "ariaSelected": null,
    "ariaSetSize": null,
    "ariaSort": null,
    "ariaValueMax": null,
    "ariaValueMin": null,
    "ariaValueNow": null,
    "ariaValueText": null,
    "firstElementChild": null,
    "lastElementChild": null,
    "childElementCount": 0,
    "previousElementSibling": null,
    "nextElementSibling": null,
    "currentCSSZoom": 1,
    "ariaColIndexText": null,
    "ariaRowIndexText": null
}

Object.defineProperties(Element.prototype,
    {
        namespaceURI: {

            get: newFunc('namespaceURI', 10, function namespaceURI() {
                let res = mm.memory.private_data.get(this).namespaceURI || "";
                if (debug) print('Element.namespaceURI.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        prefix: {

            get: newFunc('prefix', 10, function prefix() {
                let res = mm.memory.private_data.get(this).prefix || "";
                if (debug) print('Element.prefix.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        localName: {

            get: newFunc('localName', 10, function localName() {
                let res = mm.memory.private_data.get(this).tagName || "";
                print(this.toString(), this.tag)
                if (debug) print('Element.localName.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        tagName: {

            get: newFunc('tagName', 10, function tagName() {
                let res = mm.allNodes.get(this).name
                if (debug) print('Element.tagName.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        id: {

            get: newFunc('id', 10, function id() {
                let res = mm.memory.private_data.get(this).id || '';
                if (debug) print('Element.id.get', res)
                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('id', 1, function id(value) {
                if (debug) print('Element.id.set', this, value)
                mm.memory.private_data.get(this).id = value
                ElementById[value] = this;
                mm.allNodes.get(this).attr('id', value)
                // debugger
                if (value === 'wwJURE'){
                    debugger;
                }
                if (debug) print(mm.allNodes.get(this).attr())
                print($('body').html())
                print(mm.allNodes.get(this).parent().find('#xZTSEj'))

            }, {set: true}), enumerable: true, configurable: true,


        },
        className: {

            get: newFunc('className', 10, function className() {
                let res = mm.allNodes.get(this).attr('class') || '';
                if (debug) print('Element.className.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('className', 1, function className(value) {
                // debugger;
                if (debug) print('Element.className.set', mm.allNodes.get(this).attr(), value)
                mm.memory.private_data.get(this).className = value
                mm.allNodes.get(this).addClass(value)
                if (debug) print('Element.className.set.res', mm.allNodes.get(this).attr())

            }, {set: true}), enumerable: true, configurable: true,


        },
        classList: {

            get: newFunc('classList', 10, function classList() {
                let res = mm.memory.private_data.get(this).classList || ElementDefault['classList'];
                if (res === undefined) {
                    mm.memory.private_data.get(this).classList = new DOMTokenList();
                }
                res = mm.memory.private_data.get(this).classList;
                if (debug) print('Element.classList.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('classList', 1, function classList(value) {
                if (debug) print('Element.classList.set', value)
                mm.memory.private_data.get(this).classList = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        slot: {

            get: newFunc('slot', 10, function slot() {
                let res = mm.memory.private_data.get(this).slot || '';
                if (debug) print('Element.slot.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('slot', 1, function slot(value) {
                if (debug) print('Element.slot.set', value)
                mm.memory.private_data.get(this).slot = value

            }, {set: true}), enumerable: true, configurable: true,


        },

        attributes: {

            get: newFunc('attributes', 10, function attributes() {
                let res = mm.memory.private_data.get(this).attributes || new NamedNodeMap();
                if (debug) print('Element.attributes.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        shadowRoot: {

            get: newFunc('shadowRoot', 10, function shadowRoot() {
                let res = mm.memory.private_data.get(this).shadowRoot || ElementDefault['shadowRoot'];
                if (debug) print('Element.shadowRoot.get',this, res)
                // return document

                return null
            }, {get: true}), enumerable: true, configurable: true,

        },
        part: {

            get: newFunc('part', 10, function part() {
                let res = mm.memory.private_data.get(this).part || ElementDefault['part'];
                if (debug) print('Element.part.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('part', 1, function part(value) {
                if (debug) print('Element.part.set', value)
                mm.memory.private_data.get(this).part = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        assignedSlot: {

            get: newFunc('assignedSlot', 10, function assignedSlot() {
                let res = mm.memory.private_data.get(this).assignedSlot || ElementDefault['assignedSlot'];
                if (debug) print('Element.assignedSlot.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        innerHTML: {

            get: newFunc('innerHTML', 10, function innerHTML() {
                let res = mm.allNodes.get(this).html() || "";
                if (debug) print('Element.innerHTML.get', this, [res], mm.allNodes.get(this).attr())
                // debugger;
                if (mm.allNodes.get(this) instanceof HTMLBodyElement){
                    res = '<body>/</body>'
                }
                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('innerHTML', 1, function innerHTML(value) {
                if (debug) print('Element.innerHTML.set', this, [value])
                mm.memory.private_data.get(this).innerHTML = value
                // debugger;
                mm.allNodes.get(this).html(value)


            }, {set: true}), enumerable: true, configurable: true,


        },
        outerHTML: {

            get: newFunc('outerHTML', 10, function outerHTML() {
                let res = mm.memory.private_data.get(this).outerHTML || '';
                if (debug) print('Element.outerHTML.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('outerHTML', 1, function outerHTML(value) {
                if (debug) print('Element.outerHTML.set', value)
                mm.memory.private_data.get(this).outerHTML = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        scrollTop: {

            get: newFunc('scrollTop', 10, function scrollTop() {
                let res = mm.memory.private_data.get(this).scrollTop || 0;
                if (debug) print('Element.scrollTop.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('scrollTop', 1, function scrollTop(value) {
                if (debug) print('Element.scrollTop.set', value)
                mm.memory.private_data.get(this).scrollTop = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        scrollLeft: {

            get: newFunc('scrollLeft', 10, function scrollLeft() {
                let res = mm.memory.private_data.get(this).scrollLeft || 0;
                if (debug) print('Element.scrollLeft.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('scrollLeft', 1, function scrollLeft(value) {
                if (debug) print('Element.scrollLeft.set', value)
                mm.memory.private_data.get(this).scrollLeft = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        scrollWidth: {

            get: newFunc('scrollWidth', 10, function scrollWidth() {
                let res = mm.memory.private_data.get(this).scrollWidth || 0;
                if (debug) print('Element.scrollWidth.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        scrollHeight: {

            get: newFunc('scrollHeight', 10, function scrollHeight() {
                let res = mm.memory.private_data.get(this).scrollHeight || 0;
                if (debug) print('Element.scrollHeight.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        clientTop: {

            get: newFunc('clientTop', 10, function clientTop() {
                let res = mm.memory.private_data.get(this).clientTop || 0;
                if (debug) print('Element.clientTop.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        clientLeft: {

            get: newFunc('clientLeft', 10, function clientLeft() {
                let res = mm.memory.private_data.get(this).clientLeft || 0;
                if (debug) print('Element.clientLeft.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        clientWidth: {

            get: newFunc('clientWidth', 10, function clientWidth() {
                let res = mm.memory.private_data.get(this).clientWidth || 0;
                if (this instanceof HTMLBodyElement) {
                    res = ENV.windowparams.outerwidth - 16;
                }
                if (!this.hasAppend) {
                    res = 0;
                }
                if (debug) print('Element.clientWidth.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        clientHeight: {

            get: newFunc('clientHeight', 10, function clientHeight() {
                let res = mm.memory.private_data.get(this).clientHeight || 0;
                if (this instanceof HTMLBodyElement) {
                    res = 23;
                }
                if (!this.hasAppend) {
                    res = 0;
                }
                if (debug) print('Element.clientHeight.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        onbeforecopy: {

            get: newFunc('onbeforecopy', 10, function onbeforecopy() {
                let res = mm.memory.private_data.get(this).onbeforecopy || null;
                if (debug) print('Element.onbeforecopy.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onbeforecopy', 1, function onbeforecopy(value) {
                if (debug) print('Element.onbeforecopy.set', value)
                mm.memory.private_data.get(this).onbeforecopy = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        onbeforecut: {

            get: newFunc('onbeforecut', 10, function onbeforecut() {
                let res = mm.memory.private_data.get(this).onbeforecut || null;
                if (debug) print('Element.onbeforecut.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onbeforecut', 1, function onbeforecut(value) {
                if (debug) print('Element.onbeforecut.set', value)
                mm.memory.private_data.get(this).onbeforecut = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        onbeforepaste: {

            get: newFunc('onbeforepaste', 10, function onbeforepaste() {
                let res = mm.memory.private_data.get(this).onbeforepaste || null;
                if (debug) print('Element.onbeforepaste.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onbeforepaste', 1, function onbeforepaste(value) {
                if (debug) print('Element.onbeforepaste.set', value)
                mm.memory.private_data.get(this).onbeforepaste = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        onsearch: {

            get: newFunc('onsearch', 10, function onsearch() {
                let res = mm.memory.private_data.get(this).onsearch || null;
                if (debug) print('Element.onsearch.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onsearch', 1, function onsearch(value) {
                if (debug) print('Element.onsearch.set', value)
                mm.memory.private_data.get(this).onsearch = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        elementTiming: {

            get: newFunc('elementTiming', 10, function elementTiming() {
                let res = mm.memory.private_data.get(this).elementTiming || ElementDefault['elementTiming'];
                if (debug) print('Element.elementTiming.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('elementTiming', 1, function elementTiming(value) {
                if (debug) print('Element.elementTiming.set', value)
                mm.memory.private_data.get(this).elementTiming = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        onfullscreenchange: {

            get: newFunc('onfullscreenchange', 10, function onfullscreenchange() {
                let res = mm.memory.private_data.get(this).onfullscreenchange || ElementDefault['onfullscreenchange'];
                if (debug) print('Element.onfullscreenchange.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onfullscreenchange', 1, function onfullscreenchange(value) {
                if (debug) print('Element.onfullscreenchange.set', value)
                mm.memory.private_data.get(this).onfullscreenchange = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        onfullscreenerror: {

            get: newFunc('onfullscreenerror', 10, function onfullscreenerror() {
                let res = mm.memory.private_data.get(this).onfullscreenerror || ElementDefault['onfullscreenerror'];
                if (debug) print('Element.onfullscreenerror.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onfullscreenerror', 1, function onfullscreenerror(value) {
                if (debug) print('Element.onfullscreenerror.set', value)
                mm.memory.private_data.get(this).onfullscreenerror = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        onwebkitfullscreenchange: {

            get: newFunc('onwebkitfullscreenchange', 10, function onwebkitfullscreenchange() {
                let res = mm.memory.private_data.get(this).onwebkitfullscreenchange || ElementDefault['onwebkitfullscreenchange'];
                if (debug) print('Element.onwebkitfullscreenchange.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onwebkitfullscreenchange', 1, function onwebkitfullscreenchange(value) {
                if (debug) print('Element.onwebkitfullscreenchange.set', value)
                mm.memory.private_data.get(this).onwebkitfullscreenchange = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        onwebkitfullscreenerror: {

            get: newFunc('onwebkitfullscreenerror', 10, function onwebkitfullscreenerror() {
                let res = mm.memory.private_data.get(this).onwebkitfullscreenerror || ElementDefault['onwebkitfullscreenerror'];
                if (debug) print('Element.onwebkitfullscreenerror.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('onwebkitfullscreenerror', 1, function onwebkitfullscreenerror(value) {
                if (debug) print('Element.onwebkitfullscreenerror.set', value)
                mm.memory.private_data.get(this).onwebkitfullscreenerror = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        role: {

            get: newFunc('role', 10, function role() {
                let res = mm.memory.private_data.get(this).role || ElementDefault['role'];
                if (debug) print('Element.role.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('role', 1, function role(value) {
                if (debug) print('Element.role.set', value)
                mm.memory.private_data.get(this).role = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaAtomic: {

            get: newFunc('ariaAtomic', 10, function ariaAtomic() {
                let res = mm.memory.private_data.get(this).ariaAtomic || 'true';
                if (debug) print('Element.ariaAtomic.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaAtomic', 1, function ariaAtomic(value) {
                if (debug) print('Element.ariaAtomic.set', value)
                mm.memory.private_data.get(this).ariaAtomic = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaAutoComplete: {

            get: newFunc('ariaAutoComplete', 10, function ariaAutoComplete() {
                let res = mm.memory.private_data.get(this).ariaAutoComplete || ElementDefault['ariaAutoComplete'];
                if (debug) print('Element.ariaAutoComplete.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaAutoComplete', 1, function ariaAutoComplete(value) {
                if (debug) print('Element.ariaAutoComplete.set', value)
                mm.memory.private_data.get(this).ariaAutoComplete = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaBusy: {

            get: newFunc('ariaBusy', 10, function ariaBusy() {
                let res = mm.memory.private_data.get(this).ariaBusy || ElementDefault['ariaBusy'];
                if (debug) print('Element.ariaBusy.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaBusy', 1, function ariaBusy(value) {
                if (debug) print('Element.ariaBusy.set', value)
                mm.memory.private_data.get(this).ariaBusy = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaBrailleLabel: {

            get: newFunc('ariaBrailleLabel', 10, function ariaBrailleLabel() {
                let res = mm.memory.private_data.get(this).ariaBrailleLabel || ElementDefault['ariaBrailleLabel'];
                if (debug) print('Element.ariaBrailleLabel.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaBrailleLabel', 1, function ariaBrailleLabel(value) {
                if (debug) print('Element.ariaBrailleLabel.set', value)
                mm.memory.private_data.get(this).ariaBrailleLabel = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaBrailleRoleDescription: {

            get: newFunc('ariaBrailleRoleDescription', 10, function ariaBrailleRoleDescription() {
                let res = mm.memory.private_data.get(this).ariaBrailleRoleDescription || ElementDefault['ariaBrailleRoleDescription'];
                if (debug) print('Element.ariaBrailleRoleDescription.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaBrailleRoleDescription', 1, function ariaBrailleRoleDescription(value) {
                if (debug) print('Element.ariaBrailleRoleDescription.set', value)
                mm.memory.private_data.get(this).ariaBrailleRoleDescription = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaChecked: {

            get: newFunc('ariaChecked', 10, function ariaChecked() {
                let res = mm.memory.private_data.get(this).ariaChecked || ElementDefault['ariaChecked'];
                if (debug) print('Element.ariaChecked.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaChecked', 1, function ariaChecked(value) {
                if (debug) print('Element.ariaChecked.set', value)
                mm.memory.private_data.get(this).ariaChecked = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaColCount: {

            get: newFunc('ariaColCount', 10, function ariaColCount() {
                let res = mm.memory.private_data.get(this).ariaColCount || ElementDefault['ariaColCount'];
                if (debug) print('Element.ariaColCount.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaColCount', 1, function ariaColCount(value) {
                if (debug) print('Element.ariaColCount.set', value)
                mm.memory.private_data.get(this).ariaColCount = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaColIndex: {

            get: newFunc('ariaColIndex', 10, function ariaColIndex() {
                let res = mm.memory.private_data.get(this).ariaColIndex || ElementDefault['ariaColIndex'];
                if (debug) print('Element.ariaColIndex.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaColIndex', 1, function ariaColIndex(value) {
                if (debug) print('Element.ariaColIndex.set', value)
                mm.memory.private_data.get(this).ariaColIndex = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaColSpan: {

            get: newFunc('ariaColSpan', 10, function ariaColSpan() {
                let res = mm.memory.private_data.get(this).ariaColSpan || ElementDefault['ariaColSpan'];
                if (debug) print('Element.ariaColSpan.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaColSpan', 1, function ariaColSpan(value) {
                if (debug) print('Element.ariaColSpan.set', value)
                mm.memory.private_data.get(this).ariaColSpan = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaCurrent: {

            get: newFunc('ariaCurrent', 10, function ariaCurrent() {
                let res = mm.memory.private_data.get(this).ariaCurrent || ElementDefault['ariaCurrent'];
                if (debug) print('Element.ariaCurrent.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaCurrent', 1, function ariaCurrent(value) {
                if (debug) print('Element.ariaCurrent.set', value)
                mm.memory.private_data.get(this).ariaCurrent = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaDescription: {

            get: newFunc('ariaDescription', 10, function ariaDescription() {
                let res = mm.memory.private_data.get(this).ariaDescription || ElementDefault['ariaDescription'];
                if (debug) print('Element.ariaDescription.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaDescription', 1, function ariaDescription(value) {
                if (debug) print('Element.ariaDescription.set', value)
                mm.memory.private_data.get(this).ariaDescription = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaDisabled: {

            get: newFunc('ariaDisabled', 10, function ariaDisabled() {
                let res = mm.memory.private_data.get(this).ariaDisabled || ElementDefault['ariaDisabled'];
                if (debug) print('Element.ariaDisabled.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaDisabled', 1, function ariaDisabled(value) {
                if (debug) print('Element.ariaDisabled.set', value)
                mm.memory.private_data.get(this).ariaDisabled = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaExpanded: {

            get: newFunc('ariaExpanded', 10, function ariaExpanded() {
                let res = mm.memory.private_data.get(this).ariaExpanded || ElementDefault['ariaExpanded'];
                if (debug) print('Element.ariaExpanded.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaExpanded', 1, function ariaExpanded(value) {
                if (debug) print('Element.ariaExpanded.set', value)
                mm.memory.private_data.get(this).ariaExpanded = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaHasPopup: {

            get: newFunc('ariaHasPopup', 10, function ariaHasPopup() {
                let res = mm.memory.private_data.get(this).ariaHasPopup || ElementDefault['ariaHasPopup'];
                if (debug) print('Element.ariaHasPopup.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaHasPopup', 1, function ariaHasPopup(value) {
                if (debug) print('Element.ariaHasPopup.set', value)
                mm.memory.private_data.get(this).ariaHasPopup = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaHidden: {

            get: newFunc('ariaHidden', 10, function ariaHidden() {
                let res = mm.memory.private_data.get(this).ariaHidden || ElementDefault['ariaHidden'];
                if (debug) print('Element.ariaHidden.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaHidden', 1, function ariaHidden(value) {
                if (debug) print('Element.ariaHidden.set', value)
                mm.memory.private_data.get(this).ariaHidden = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaInvalid: {

            get: newFunc('ariaInvalid', 10, function ariaInvalid() {
                let res = mm.memory.private_data.get(this).ariaInvalid || ElementDefault['ariaInvalid'];
                if (debug) print('Element.ariaInvalid.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaInvalid', 1, function ariaInvalid(value) {
                if (debug) print('Element.ariaInvalid.set', value)
                mm.memory.private_data.get(this).ariaInvalid = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaKeyShortcuts: {

            get: newFunc('ariaKeyShortcuts', 10, function ariaKeyShortcuts() {
                let res = mm.memory.private_data.get(this).ariaKeyShortcuts || ElementDefault['ariaKeyShortcuts'];
                if (debug) print('Element.ariaKeyShortcuts.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaKeyShortcuts', 1, function ariaKeyShortcuts(value) {
                if (debug) print('Element.ariaKeyShortcuts.set', value)
                mm.memory.private_data.get(this).ariaKeyShortcuts = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaLabel: {

            get: newFunc('ariaLabel', 10, function ariaLabel() {
                let res = mm.memory.private_data.get(this).ariaLabel || ElementDefault['ariaLabel'];
                if (debug) print('Element.ariaLabel.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaLabel', 1, function ariaLabel(value) {
                if (debug) print('Element.ariaLabel.set', value)
                mm.memory.private_data.get(this).ariaLabel = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaLevel: {

            get: newFunc('ariaLevel', 10, function ariaLevel() {
                let res = mm.memory.private_data.get(this).ariaLevel || ElementDefault['ariaLevel'];
                if (debug) print('Element.ariaLevel.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaLevel', 1, function ariaLevel(value) {
                if (debug) print('Element.ariaLevel.set', value)
                mm.memory.private_data.get(this).ariaLevel = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaLive: {

            get: newFunc('ariaLive', 10, function ariaLive() {
                let res = mm.memory.private_data.get(this).ariaLive || ElementDefault['ariaLive'];
                if (debug) print('Element.ariaLive.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaLive', 1, function ariaLive(value) {
                if (debug) print('Element.ariaLive.set', value)
                mm.memory.private_data.get(this).ariaLive = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaModal: {

            get: newFunc('ariaModal', 10, function ariaModal() {
                let res = mm.memory.private_data.get(this).ariaModal || ElementDefault['ariaModal'];
                if (debug) print('Element.ariaModal.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaModal', 1, function ariaModal(value) {
                if (debug) print('Element.ariaModal.set', value)
                mm.memory.private_data.get(this).ariaModal = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaMultiLine: {

            get: newFunc('ariaMultiLine', 10, function ariaMultiLine() {
                let res = mm.memory.private_data.get(this).ariaMultiLine || ElementDefault['ariaMultiLine'];
                if (debug) print('Element.ariaMultiLine.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaMultiLine', 1, function ariaMultiLine(value) {
                if (debug) print('Element.ariaMultiLine.set', value)
                mm.memory.private_data.get(this).ariaMultiLine = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaMultiSelectable: {

            get: newFunc('ariaMultiSelectable', 10, function ariaMultiSelectable() {
                let res = mm.memory.private_data.get(this).ariaMultiSelectable || ElementDefault['ariaMultiSelectable'];
                if (debug) print('Element.ariaMultiSelectable.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaMultiSelectable', 1, function ariaMultiSelectable(value) {
                if (debug) print('Element.ariaMultiSelectable.set', value)
                mm.memory.private_data.get(this).ariaMultiSelectable = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaOrientation: {

            get: newFunc('ariaOrientation', 10, function ariaOrientation() {
                let res = mm.memory.private_data.get(this).ariaOrientation || ElementDefault['ariaOrientation'];
                if (debug) print('Element.ariaOrientation.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaOrientation', 1, function ariaOrientation(value) {
                if (debug) print('Element.ariaOrientation.set', value)
                mm.memory.private_data.get(this).ariaOrientation = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaPlaceholder: {

            get: newFunc('ariaPlaceholder', 10, function ariaPlaceholder() {
                let res = mm.memory.private_data.get(this).ariaPlaceholder || ElementDefault['ariaPlaceholder'];
                if (debug) print('Element.ariaPlaceholder.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaPlaceholder', 1, function ariaPlaceholder(value) {
                if (debug) print('Element.ariaPlaceholder.set', value)
                mm.memory.private_data.get(this).ariaPlaceholder = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaPosInSet: {

            get: newFunc('ariaPosInSet', 10, function ariaPosInSet() {
                let res = mm.memory.private_data.get(this).ariaPosInSet || ElementDefault['ariaPosInSet'];
                if (debug) print('Element.ariaPosInSet.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaPosInSet', 1, function ariaPosInSet(value) {
                if (debug) print('Element.ariaPosInSet.set', value)
                mm.memory.private_data.get(this).ariaPosInSet = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaPressed: {

            get: newFunc('ariaPressed', 10, function ariaPressed() {
                let res = mm.memory.private_data.get(this).ariaPressed || ElementDefault['ariaPressed'];
                if (debug) print('Element.ariaPressed.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaPressed', 1, function ariaPressed(value) {
                if (debug) print('Element.ariaPressed.set', value)
                mm.memory.private_data.get(this).ariaPressed = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaReadOnly: {

            get: newFunc('ariaReadOnly', 10, function ariaReadOnly() {
                let res = mm.memory.private_data.get(this).ariaReadOnly || ElementDefault['ariaReadOnly'];
                if (debug) print('Element.ariaReadOnly.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaReadOnly', 1, function ariaReadOnly(value) {
                if (debug) print('Element.ariaReadOnly.set', value)
                mm.memory.private_data.get(this).ariaReadOnly = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaRelevant: {

            get: newFunc('ariaRelevant', 10, function ariaRelevant() {
                let res = mm.memory.private_data.get(this).ariaRelevant || ElementDefault['ariaRelevant'];
                if (debug) print('Element.ariaRelevant.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaRelevant', 1, function ariaRelevant(value) {
                if (debug) print('Element.ariaRelevant.set', value)
                mm.memory.private_data.get(this).ariaRelevant = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaRequired: {

            get: newFunc('ariaRequired', 10, function ariaRequired() {
                let res = mm.memory.private_data.get(this).ariaRequired || ElementDefault['ariaRequired'];
                if (debug) print('Element.ariaRequired.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaRequired', 1, function ariaRequired(value) {
                if (debug) print('Element.ariaRequired.set', value)
                mm.memory.private_data.get(this).ariaRequired = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaRoleDescription: {

            get: newFunc('ariaRoleDescription', 10, function ariaRoleDescription() {
                let res = mm.memory.private_data.get(this).ariaRoleDescription || ElementDefault['ariaRoleDescription'];
                if (debug) print('Element.ariaRoleDescription.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaRoleDescription', 1, function ariaRoleDescription(value) {
                if (debug) print('Element.ariaRoleDescription.set', value)
                mm.memory.private_data.get(this).ariaRoleDescription = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaRowCount: {

            get: newFunc('ariaRowCount', 10, function ariaRowCount() {
                let res = mm.memory.private_data.get(this).ariaRowCount || ElementDefault['ariaRowCount'];
                if (debug) print('Element.ariaRowCount.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaRowCount', 1, function ariaRowCount(value) {
                if (debug) print('Element.ariaRowCount.set', value)
                mm.memory.private_data.get(this).ariaRowCount = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaRowIndex: {

            get: newFunc('ariaRowIndex', 10, function ariaRowIndex() {
                let res = mm.memory.private_data.get(this).ariaRowIndex || ElementDefault['ariaRowIndex'];
                if (debug) print('Element.ariaRowIndex.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaRowIndex', 1, function ariaRowIndex(value) {
                if (debug) print('Element.ariaRowIndex.set', value)
                mm.memory.private_data.get(this).ariaRowIndex = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaRowSpan: {

            get: newFunc('ariaRowSpan', 10, function ariaRowSpan() {
                let res = mm.memory.private_data.get(this).ariaRowSpan || ElementDefault['ariaRowSpan'];
                if (debug) print('Element.ariaRowSpan.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaRowSpan', 1, function ariaRowSpan(value) {
                if (debug) print('Element.ariaRowSpan.set', value)
                mm.memory.private_data.get(this).ariaRowSpan = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaSelected: {

            get: newFunc('ariaSelected', 10, function ariaSelected() {
                let res = mm.memory.private_data.get(this).ariaSelected || ElementDefault['ariaSelected'];
                if (debug) print('Element.ariaSelected.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaSelected', 1, function ariaSelected(value) {
                if (debug) print('Element.ariaSelected.set', value)
                mm.memory.private_data.get(this).ariaSelected = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaSetSize: {

            get: newFunc('ariaSetSize', 10, function ariaSetSize() {
                let res = mm.memory.private_data.get(this).ariaSetSize || ElementDefault['ariaSetSize'];
                if (debug) print('Element.ariaSetSize.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaSetSize', 1, function ariaSetSize(value) {
                if (debug) print('Element.ariaSetSize.set', value)
                mm.memory.private_data.get(this).ariaSetSize = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaSort: {

            get: newFunc('ariaSort', 10, function ariaSort() {
                let res = mm.memory.private_data.get(this).ariaSort || ElementDefault['ariaSort'];
                if (debug) print('Element.ariaSort.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaSort', 1, function ariaSort(value) {
                if (debug) print('Element.ariaSort.set', value)
                mm.memory.private_data.get(this).ariaSort = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaValueMax: {

            get: newFunc('ariaValueMax', 10, function ariaValueMax() {
                let res = mm.memory.private_data.get(this).ariaValueMax || ElementDefault['ariaValueMax'];
                if (debug) print('Element.ariaValueMax.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaValueMax', 1, function ariaValueMax(value) {
                if (debug) print('Element.ariaValueMax.set', value)
                mm.memory.private_data.get(this).ariaValueMax = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaValueMin: {

            get: newFunc('ariaValueMin', 10, function ariaValueMin() {
                let res = mm.memory.private_data.get(this).ariaValueMin || ElementDefault['ariaValueMin'];
                if (debug) print('Element.ariaValueMin.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaValueMin', 1, function ariaValueMin(value) {
                if (debug) print('Element.ariaValueMin.set', value)
                mm.memory.private_data.get(this).ariaValueMin = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaValueNow: {

            get: newFunc('ariaValueNow', 10, function ariaValueNow() {
                let res = mm.memory.private_data.get(this).ariaValueNow || ElementDefault['ariaValueNow'];
                if (debug) print('Element.ariaValueNow.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaValueNow', 1, function ariaValueNow(value) {
                if (debug) print('Element.ariaValueNow.set', value)
                mm.memory.private_data.get(this).ariaValueNow = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        ariaValueText: {

            get: newFunc('ariaValueText', 10, function ariaValueText() {
                let res = mm.memory.private_data.get(this).ariaValueText || ElementDefault['ariaValueText'];
                if (debug) print('Element.ariaValueText.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('ariaValueText', 1, function ariaValueText(value) {
                if (debug) print('Element.ariaValueText.set', value)
                mm.memory.private_data.get(this).ariaValueText = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        children: {

            get: newFunc('children', 10, function children() {
                // debugger;
                // let res = mm.memory.private_data.get(this).children;
                // let elements = typeof this.org.children === 'function' ? this.org.children() : this.org.children;
                let elements = mm.allNodes.get(this).children();
                elements = elements.filter(e => e.type !== 'text')
                let result = new HTMLCollection(elements.length);
                for (let i = 0; i < elements.length; i++) {
                    let ele = createElementByName(elements.eq(i))
                    result[i] = ele;
                }
                // debugger
                if (debug) print('Element.children.get', result.length)

                return result
            }, {get: true}), enumerable: true, configurable: true,

        },
        firstElementChild: {

            get: newFunc('firstElementChild', 10, function firstElementChild() {
                // debugger;
                let res = mm.allNodes.get(mm.allNodes.get(this).children().first());
                if (debug) print('Element.firstElementChild.get', res === null)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        lastElementChild: {

            get: newFunc('lastElementChild', 10, function lastElementChild() {
                let res = mm.memory.private_data.get(this).lastElementChild || ElementDefault['lastElementChild'];
                if (debug) print('Element.lastElementChild.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        childElementCount: {

            get: newFunc('childElementCount', 10, function childElementCount() {
                let res = mm.memory.private_data.get(this).childElementCount || ElementDefault['childElementCount'];
                let elements = this.org.children;
                if (!elements || !elements.filter) return 0;
                elements = elements.filter(e => e.type !== 'text')
                res = elements.length;
                if (debug) print('Element.childElementCount.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        previousElementSibling: {

            get: newFunc('previousElementSibling', 10, function previousElementSibling() {
                let res = mm.memory.private_data.get(this).previousElementSibling || ElementDefault['previousElementSibling'];
                if (debug) print('Element.previousElementSibling.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        nextElementSibling: {

            get: newFunc('nextElementSibling', 10, function nextElementSibling() {
                let res = mm.memory.private_data.get(this).nextElementSibling || ElementDefault['nextElementSibling'];
                if (debug) print('Element.nextElementSibling.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        after: {

            value: newFunc('after', 10, function after() {
                if (debug) print('Element.after.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        animate: {

            value: newFunc('animate', 10, function animate() {
                if (debug) print('Element.animate.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        append: {

            value: newFunc('append', 10, function append(v) {
                if (debug) print('Element.append.call',)

            }), writable: true, enumerable: true, configurable: true,


        },
        attachShadow: {

            value: window['attachShadow'], writable: true, enumerable: true, configurable: true,


        },
        before: {

            value: newFunc('before', 10, function before() {
                if (debug) print('Element.before.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        checkVisibility: {

            value: newFunc('checkVisibility', 10, function checkVisibility() {
                if (debug) print('Element.checkVisibility.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        closest: {

            value: newFunc('closest', 10, function closest() {
                if (debug) print('Element.closest.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        computedStyleMap: {

            value: newFunc('computedStyleMap', 10, function computedStyleMap() {
                if (debug) print('Element.computedStyleMap.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getAnimations: {

            value: newFunc('getAnimations', 10, function getAnimations() {
                if (debug) print('Element.getAnimations.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getAttribute: {

            value: newFunc('getAttribute', 10, function getAttribute(arg) {
                if (arg === 'src'){
                    print('Element.getAttribute.call', arg)
                    return '/d1ZdJu/hhU/VHc/EwKhgmRW/QcG7DwONm5V9/cFBpRmZ6JA/fG0/dHglxQzpqAQ?v=&t=27771955'
                }
                let res = this.org.attribs && this.org.attribs[arg] || this.org.src
                // debugger
                if (debug) print('Element.getAttribute.call', arguments, res)
                return res

            }), writable: true, enumerable: true, configurable: true,


        },
        getAttributeNS: {

            value: newFunc('getAttributeNS', 10, function getAttributeNS() {
                if (debug) print('Element.getAttributeNS.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getAttributeNames: {

            value: newFunc('getAttributeNames', 10, function getAttributeNames() {
                if (debug) print('Element.getAttributeNames.call', arguments)
                if (this instanceof HTMLHtmlElement) {
                    return [
                        "lang",
                        "class",
                        "style"
                    ]
                }
            }), writable: true, enumerable: true, configurable: true,


        },
        getAttributeNode: {

            value: newFunc('getAttributeNode', 10, function getAttributeNode() {
                if (debug) print('Element.getAttributeNode.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getAttributeNodeNS: {

            value: newFunc('getAttributeNodeNS', 10, function getAttributeNodeNS() {
                if (debug) print('Element.getAttributeNodeNS.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getBoundingClientRect: {

            value: newFunc('getBoundingClientRect', 10, function getBoundingClientRect() {
                if (debug) print('Element.getBoundingClientRect.call', arguments)

                let res = new DOMRect(rects[rectIdx]);
                rectIdx++;
                return res;
            }), writable: true, enumerable: true, configurable: true,


        },
        getClientRects: {

            value: newFunc('getClientRects', 10, function getClientRects(v) {
                if (debug) print('Element.getClientRects.call', arguments)
                // debugger;
                let w = 53, h = 27, cw = 253, ch = 25
                switch (this.type) {
                    case 'color':
                        w = 50, h = 27;
                        cw = 48, ch = 25;
                        break
                    case 'checkbox':
                        w = 13, h = 13;
                        cw = 13, ch = 13;
                        break
                    case 'range':
                        w = 129, h = 16;
                        cw = 129, ch = 16;
                        break
                    case 'file':
                        w = 253, h = 25;
                        break
                    case 'time':
                        w = 78, h = 24;
                        cw = 74, ch = 20;
                        break
                    case 'submit':
                    case 'reset':
                        w = 42, h = 25;
                        cw = 39, ch = 21;
                        break
                    case 'search':
                    case 'password':
                    case 'tel':
                        w = 153, h = 21;
                        cw = 149, ch = 17;
                        break

                }
                mm.memory.private_data.get(this).clientWidth = cw;
                mm.memory.private_data.get(this).clientHeight = ch;
                switch (parseFloat(this.style.fontSize.replace('px', ''))) {
                    case 13.01:
                        let tmp2 = {
                            "x": -9991,
                            "y": 8,
                            "width": 42.03125,
                            "height": 24,
                            "top": 8,
                            "right": -9948.96875,
                            "bottom": 32,
                            "left": -9991
                        };
                        return new DOMRectList([new DOMRect(tmp2)])
                    case 13:
                        let tmp3 = {
                            "x": -9991,
                            "y": 8,
                            "width": 42,
                            "height": 24,
                            "top": 8,
                            "right": -9949,
                            "bottom": 32,
                            "left": -9991
                        }
                        return new DOMRectList([new DOMRect(tmp3)])
                    case 13.02:
                        let tmp = {
                            "x": -9991,
                            "y": 8,
                            "width": 42.046875,
                            "height": 24,
                            "top": 8,
                            "right": -9948.953125,
                            "bottom": 32,
                            "left": -9991
                        };
                        return new DOMRectList([new DOMRect(tmp)])
                    case 13.05:
                        return new DOMRectList([new DOMRect({
                            "x": -9991,
                            "y": 8,
                            "width": 42.109375,
                            "height": 24,
                            "top": 8,
                            "right": -9948.890625,
                            "bottom": 32,
                            "left": -9991
                        })])
                    case 13.03:
                        return new DOMRectList([new DOMRect({
                            "x": -9991,
                            "y": 8,
                            "width": 42.0625,
                            "height": 24,
                            "top": 8,
                            "right": -9948.9375,
                            "bottom": 32,
                            "left": -9991
                        })])
                    case 13.06:
                        return new DOMRectList([new DOMRect({
                            "x": -9991,
                            "y": 8,
                            "width": 42.125,
                            "height": 24,
                            "top": 8,
                            "right": -9948.875,
                            "bottom": 32,
                            "left": -9991
                        })])
                    case 13.08:
                        return new DOMRectList(
                            [new DOMRect({
                                "x": -9991,
                                "y": 8,
                                "width": 42.171875,
                                "height": 24,
                                "top": 8,
                                "right": -9948.828125,
                                "bottom": 32,
                                "left": -9991
                            })]
                        );
                        break

                }
                return new DOMRectList(
                    [new DOMRect(-9991, 8, w, h)]
                );
            }), writable: true, enumerable: true, configurable: true,


        },
        getElementsByClassName: {

            value: newFunc('getElementsByClassName', 1, function getElementsByClassName(className) {
                if (debug) print('Element.getElementsByClassName.call', arguments)
                //  if (ElementByClass.hasOwnProperty(className)) {
                //     let result = new HTMLCollection(1);
                //     result[0] = ElementByClass[className]
                //      return result;
                // }
                if (className === 'IbnF8') {
                    debugger;
                }
                let elements = $(`.${className}`);
                if (debug) print('Element.getElementsByClassName.call1', elements.length)

                let result = new HTMLCollection(elements.length);
                // 过滤一下重复的key
                for (let i = 0; i < elements.length; i++) {
                    let element = elements[i];
                    if (elements[i].attribs['ranid'] !== undefined) {
                        let tt = mm.allNodeKeys.filter(e => e.ranId === elements[i].attribs['ranid']);
                        if (tt.length === 1) {
                            let res = tt[0];
                            result[i] = res;
                            continue;
                        }
                    }

                    let ele = createElementByName(elements.eq(i));
                    result[i] = ele;
                }
                // debugger;

                if (debug) print('Element.getElementsByClassName.call', className, result)

                return result

            }), writable: true, enumerable: true, configurable: true,


        },
        getElementsByTagName: {

            value: newFunc('getElementsByTagName', 10, function getElementsByTagName() {
                if (debug) print('Element.getElementsByTagName.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getElementsByTagNameNS: {

            value: newFunc('getElementsByTagNameNS', 10, function getElementsByTagNameNS() {
                if (debug) print('Element.getElementsByTagNameNS.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        getHTML: {

            value: newFunc('getHTML', 10, function getHTML() {
                if (debug) print('Element.getHTML.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        hasAttribute: {

            value: newFunc('hasAttribute', 10, function hasAttribute(v) {
                if (debug) print('Element.hasAttribute.call', arguments)
                if (v === 'webdriver') {
                    return false
                }

            }), writable: true, enumerable: true, configurable: true,


        },
        hasAttributeNS: {

            value: newFunc('hasAttributeNS', 10, function hasAttributeNS(v) {
                if (debug) print('Element.hasAttributeNS.call', arguments)
                if (v === 'webdriver') {
                    return false
                }

            }), writable: true, enumerable: true, configurable: true,


        },
        hasAttributes: {

            value: newFunc('hasAttributes', 10, function hasAttributes() {
                if (debug) print('Element.hasAttributes.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        hasPointerCapture: {

            value: newFunc('hasPointerCapture', 10, function hasPointerCapture() {
                if (debug) print('Element.hasPointerCapture.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        insertAdjacentElement: {

            value: newFunc('insertAdjacentElement', 10, function insertAdjacentElement() {
                if (debug) print('Element.insertAdjacentElement.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        insertAdjacentHTML: {

            value: newFunc('insertAdjacentHTML', 10, function insertAdjacentHTML(t, v) {
                if (!Element.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                if (debug) print('Element.insertAdjacentHTML.call', this, arguments)
                let ele = $(v);
                // debugger;
                if (mm.allNodes.has(this)) {
                    switch (t) {
                        case 'beforeend':
                            print('inser call')
                            mm.allNodes.get(this).append(ele);
                            break
                    }
                }
                // debugger;
                // this.org.append(ele)

            }), writable: true, enumerable: true, configurable: true,


        },
        insertAdjacentText: {

            value: newFunc('insertAdjacentText', 10, function insertAdjacentText() {
                if (debug) print('Element.insertAdjacentText.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        matches: {

            value: newFunc('matches', 10, function matches() {
                if (debug) print('Element.matches.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        prepend: {

            value: newFunc('prepend', 10, function prepend() {
                if (debug) print('Element.prepend.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        querySelector: {

            value: newFunc('querySelector', 10, function querySelector(arg) {
                if (debug) print('Element.querySelector.call', arguments)
                if (arg === '#ZcZKh3'){
                    debugger;
                }
                let elements = $(arg)
                let result = new HTMLCollection(elements.length);
                for (let i = 0; i < elements.length; i++) {
                    let element = elements.eq(i);
                    // if (element.type === 'text'){
                    //     continue;
                    // }
                    let ele = createElementByName(element)

                    result[i] = ele;
                }
                if (debug) print('Element.querySelector.call1', arg, result)


                if (result.length >= 1){
                    result = result[0]
                }
                if (debug) print('Element.querySelector.call2', arg,result)

                return result;

            }), writable: true, enumerable: true, configurable: true,


        },
        querySelectorAll: {

            value: newFunc('querySelectorAll', 10, function querySelectorAll() {
                if (debug) print('Element.querySelectorAll.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        releasePointerCapture: {

            value: newFunc('releasePointerCapture', 10, function releasePointerCapture() {
                if (debug) print('Element.releasePointerCapture.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        remove: {

            value: newFunc('remove', 10, function remove() {
                if (debug) print('Element.remove.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        removeAttribute: {

            value: newFunc('removeAttribute', 10, function removeAttribute() {
                if (debug) print('Element.removeAttribute.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        removeAttributeNS: {

            value: newFunc('removeAttributeNS', 10, function removeAttributeNS() {
                if (debug) print('Element.removeAttributeNS.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        removeAttributeNode: {

            value: newFunc('removeAttributeNode', 10, function removeAttributeNode() {
                if (debug) print('Element.removeAttributeNode.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        replaceChildren: {

            value: newFunc('replaceChildren', 10, function replaceChildren() {
                if (debug) print('Element.replaceChildren.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        replaceWith: {

            value: newFunc('replaceWith', 10, function replaceWith() {
                if (debug) print('Element.replaceWith.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        requestFullscreen: {

            value: newFunc('requestFullscreen', 10, function requestFullscreen() {
                if (debug) print('Element.requestFullscreen.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        requestPointerLock: {

            value: newFunc('requestPointerLock', 10, function requestPointerLock() {
                if (debug) print('Element.requestPointerLock.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        scroll: {

            value: newFunc('scroll', 10, function scroll() {
                if (debug) print('Element.scroll.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        scrollBy: {

            value: newFunc('scrollBy', 10, function scrollBy() {
                if (debug) print('Element.scrollBy.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        scrollIntoView: {

            value: newFunc('scrollIntoView', 10, function scrollIntoView() {
                if (debug) print('Element.scrollIntoView.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        scrollIntoViewIfNeeded: {

            value: newFunc('scrollIntoViewIfNeeded', 10, function scrollIntoViewIfNeeded() {
                if (debug) print('Element.scrollIntoViewIfNeeded.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        scrollTo: {

            value: newFunc('scrollTo', 10, function scrollTo() {
                if (debug) print('Element.scrollTo.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        setAttribute: {

            value: newFunc('setAttribute', 10, function setAttribute(k, v) {
                if (debug) print('Element.setAttribute.call', arguments)
                if (k === 'class') {
                    ElementByClass[v] = this;
                }
                if (this instanceof HTMLInputElement){
                    if (!window.inputAttrs.has(this)){
                        window.inputAttrs.set(this, {})
                        window.inputLists.push(this)
                    }
                    window.inputAttrs.get(this)[k] = v
                }
                let res = {};
                for (let i = 0; i < window.inputLists.length; i++) {
                    let r = window.inputAttrs.get(window.inputLists[i]);
                    if (r && r.name && r.value){
                        res[r.name] = r.value
                    }

                }
                if (Object.keys(res).length === 3){
                    WriteToFile('/tmp/body.txt', JSON.stringify({
                        res:res
                    }))
                    debugger;
                    Exit()
                }
                mm.allNodes.get(this).attr(k, v)
                // debugger;
                mm.memory.private_data.get(this)[arguments[0]] = arguments[1]
            }), writable: true, enumerable: true, configurable: true,


        },
        setAttributeNS: {

            value: newFunc('setAttributeNS', 10, function setAttributeNS() {
                if (debug) print('Element.setAttributeNS.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        setAttributeNode: {

            value: newFunc('setAttributeNode', 10, function setAttributeNode() {
                if (debug) print('Element.setAttributeNode.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        setAttributeNodeNS: {

            value: newFunc('setAttributeNodeNS', 10, function setAttributeNodeNS() {
                if (debug) print('Element.setAttributeNodeNS.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        setHTMLUnsafe: {
            value: newFunc('setHTMLUnsafe', 10, function setHTMLUnsafe() {
                if (debug) print('Element.setHTMLUnsafe.call', res)

                return res
            })
        },
        setPointerCapture: {

            value: newFunc('setPointerCapture', 10, function setPointerCapture() {
                if (debug) print('Element.setPointerCapture.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        toggleAttribute: {

            value: newFunc('toggleAttribute', 10, function toggleAttribute() {
                if (debug) print('Element.toggleAttribute.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        webkitMatchesSelector: {

            value: newFunc('webkitMatchesSelector', 10, function webkitMatchesSelector() {
                if (debug) print('Element.webkitMatchesSelector.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        webkitRequestFullScreen: {

            value: newFunc('webkitRequestFullScreen', 10, function webkitRequestFullScreen() {
                if (debug) print('Element.webkitRequestFullScreen.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        webkitRequestFullscreen: {

            value: newFunc('currentCSSZoom', 10, function currentCSSZoom() {
                if (debug) print('Element.currentCSSZoom.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },

        currentCSSZoom: {

            value: newFunc('currentCSSZoom', 10, function currentCSSZoom() {
                if (debug) print('Element.currentCSSZoom.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        }, ariaColIndexText: {

            value: newFunc('ariaColIndexText', 10, function ariaColIndexText() {
                if (debug) print('Element.ariaColIndexText.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        }, ariaRowIndexText: {

            value: newFunc('ariaRowIndexText', 10, function ariaRowIndexText() {
                if (debug) print('Element.ariaRowIndexText.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('Element.constructor.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
    })
Object.setPrototypeOf(Element.prototype, Node.prototype)
Object.setPrototypeOf(Element, Node)