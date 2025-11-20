;HTMLUnknownElement = newFunc('HTMLUnknownElement', 1, function (org, tag) {
    print('HTMLUnknownElement.call', tag);
    mm.memory.private_data.set(this, {tag})
})


Object.defineProperties(HTMLUnknownElement.prototype, {
    [Symbol.toStringTag]:{value:'HTMLUnknownElement'},
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLUnknownElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
    getBBox: {

        value: newFunc('getBBox', 10, function () {
            if (debug) print('HTMLUnknownElement.getBBox.call', arguments)

            return {x: 10, y: 10, weight: 10, height: 10}

        }), writable: true, enumerable: true, configurable: true,
    },
    getComputedTextLength: {

        value: newFunc('getComputedTextLength', 10, function () {
            if (debug) print('HTMLUnknownElement.getComputedTextLength.call', arguments)
            return 1.1;

        }), writable: true, enumerable: true, configurable: true,


    },
    getExtentOfChar: {

        value: newFunc('getExtentOfChar', 10, function () {
            if (debug) print('HTMLUnknownElement.getExtentOfChar.call', arguments)
            return new DOMRect(20.1171875, 8, 12.953125, 57.953125)

        }), writable: true, enumerable: true, configurable: true,


    },
});

Object.setPrototypeOf(HTMLUnknownElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLUnknownElement, HTMLElement);
HTMLUnknownElement.__proto__ = HTMLElement.prototype


;HTMLTrackElement = newFunc('HTMLTrackElement', 1, function () {
    print('HTMLTrackElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTrackElement.prototype, {
    kind: {

        get: newFunc('kind', 10, function () {
            let res = mm.memory.private_data.get(this).kind;
            if (debug) print('HTMLTrackElement.kind.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('kind', 1, function (value) {
            if (debug) print('HTMLTrackElement.kind.set', value)
            mm.memory.private_data.get(this).kind = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    src: {

        get: newFunc('src', 10, function () {
            let res = mm.memory.private_data.get(this).src;
            if (debug) print('HTMLTrackElement.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function (value) {
            if (debug) print('HTMLTrackElement.src.set', value)
            mm.memory.private_data.get(this).src = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    srclang: {

        get: newFunc('srclang', 10, function () {
            let res = mm.memory.private_data.get(this).srclang;
            if (debug) print('HTMLTrackElement.srclang.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('srclang', 1, function (value) {
            if (debug) print('HTMLTrackElement.srclang.set', value)
            mm.memory.private_data.get(this).srclang = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('HTMLTrackElement.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('HTMLTrackElement.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    default: {

        get: newFunc('default', 10, function () {
            let res = mm.memory.private_data.get(this).default;
            if (debug) print('HTMLTrackElement.default.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('default', 1, function (value) {
            if (debug) print('HTMLTrackElement.default.set', value)
            mm.memory.private_data.get(this).default = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    readyState: {

        get: newFunc('readyState', 10, function () {
            let res = mm.memory.private_data.get(this).readyState;
            if (debug) print('HTMLTrackElement.readyState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    track: {

        get: newFunc('track', 10, function () {
            let res = mm.memory.private_data.get(this).track;
            if (debug) print('HTMLTrackElement.track.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    NONE: {},
    LOADING: {

        value: 1, writable: false, enumerable: true, configurable: false,


    },
    LOADED: {

        value: 2, writable: false, enumerable: true, configurable: false,


    },
    ERROR: {

        value: 3, writable: false, enumerable: true, configurable: false,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTrackElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTimeElement = newFunc('HTMLTimeElement', 1, function () {
    print('HTMLTimeElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTimeElement.prototype, {
    dateTime: {

        get: newFunc('dateTime', 10, function () {
            let res = mm.memory.private_data.get(this).dateTime;
            if (debug) print('HTMLTimeElement.dateTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('dateTime', 1, function (value) {
            if (debug) print('HTMLTimeElement.dateTime.set', value)
            mm.memory.private_data.get(this).dateTime = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTimeElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTextAreaElement = newFunc('HTMLTextAreaElement', 1, function () {
    print('HTMLTextAreaElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTextAreaElement.prototype, {
    autocomplete: {

        get: newFunc('autocomplete', 10, function () {
            let res = mm.memory.private_data.get(this).autocomplete;
            if (debug) print('HTMLTextAreaElement.autocomplete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('autocomplete', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.autocomplete.set', value)
            mm.memory.private_data.get(this).autocomplete = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    cols: {

        get: newFunc('cols', 10, function () {
            let res = mm.memory.private_data.get(this).cols;
            if (debug) print('HTMLTextAreaElement.cols.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cols', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.cols.set', value)
            mm.memory.private_data.get(this).cols = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    dirName: {

        get: newFunc('dirName', 10, function () {
            let res = mm.memory.private_data.get(this).dirName;
            if (debug) print('HTMLTextAreaElement.dirName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('dirName', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.dirName.set', value)
            mm.memory.private_data.get(this).dirName = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('HTMLTextAreaElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLTextAreaElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    maxLength: {

        get: newFunc('maxLength', 10, function () {
            let res = mm.memory.private_data.get(this).maxLength || -1;
            if (debug) print('HTMLTextAreaElement.maxLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxLength', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.maxLength.set', value)
            mm.memory.private_data.get(this).maxLength = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    minLength: {

        get: newFunc('minLength', 10, function () {
            let res = mm.memory.private_data.get(this).minLength;
            if (debug) print('HTMLTextAreaElement.minLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('minLength', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.minLength.set', value)
            mm.memory.private_data.get(this).minLength = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLTextAreaElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    placeholder: {

        get: newFunc('placeholder', 10, function () {
            let res = mm.memory.private_data.get(this).placeholder;
            if (debug) print('HTMLTextAreaElement.placeholder.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('placeholder', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.placeholder.set', value)
            mm.memory.private_data.get(this).placeholder = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    readOnly: {

        get: newFunc('readOnly', 10, function () {
            let res = mm.memory.private_data.get(this).readOnly;
            if (debug) print('HTMLTextAreaElement.readOnly.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('readOnly', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.readOnly.set', value)
            mm.memory.private_data.get(this).readOnly = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    required: {

        get: newFunc('required', 10, function () {
            let res = mm.memory.private_data.get(this).required;
            if (debug) print('HTMLTextAreaElement.required.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('required', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.required.set', value)
            mm.memory.private_data.get(this).required = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rows: {

        get: newFunc('rows', 10, function () {
            let res = mm.memory.private_data.get(this).rows;
            if (debug) print('HTMLTextAreaElement.rows.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rows', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.rows.set', value)
            mm.memory.private_data.get(this).rows = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    wrap: {

        get: newFunc('wrap', 10, function () {
            let res = mm.memory.private_data.get(this).wrap;
            if (debug) print('HTMLTextAreaElement.wrap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('wrap', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.wrap.set', value)
            mm.memory.private_data.get(this).wrap = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLTextAreaElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    defaultValue: {

        get: newFunc('defaultValue', 10, function () {
            let res = mm.memory.private_data.get(this).defaultValue;
            if (debug) print('HTMLTextAreaElement.defaultValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defaultValue', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.defaultValue.set', value)
            mm.memory.private_data.get(this).defaultValue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLTextAreaElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    textLength: {

        get: newFunc('textLength', 10, function () {
            let res = mm.memory.private_data.get(this).textLength;
            if (debug) print('HTMLTextAreaElement.textLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    willValidate: {

        get: newFunc('willValidate', 10, function () {
            let res = mm.memory.private_data.get(this).willValidate;
            if (debug) print('HTMLTextAreaElement.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validity: {

        get: newFunc('validity', 10, function () {
            let res = mm.memory.private_data.get(this).validity;
            if (debug) print('HTMLTextAreaElement.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validationMessage: {

        get: newFunc('validationMessage', 10, function () {
            let res = mm.memory.private_data.get(this).validationMessage;
            if (debug) print('HTMLTextAreaElement.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    labels: {

        get: newFunc('labels', 10, function () {
            let res = mm.memory.private_data.get(this).labels;
            if (debug) print('HTMLTextAreaElement.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    selectionStart: {

        get: newFunc('selectionStart', 10, function () {
            let res = mm.memory.private_data.get(this).selectionStart;
            if (debug) print('HTMLTextAreaElement.selectionStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectionStart', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.selectionStart.set', value)
            mm.memory.private_data.get(this).selectionStart = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    selectionEnd: {

        get: newFunc('selectionEnd', 10, function () {
            let res = mm.memory.private_data.get(this).selectionEnd;
            if (debug) print('HTMLTextAreaElement.selectionEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectionEnd', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.selectionEnd.set', value)
            mm.memory.private_data.get(this).selectionEnd = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    selectionDirection: {

        get: newFunc('selectionDirection', 10, function () {
            let res = mm.memory.private_data.get(this).selectionDirection;
            if (debug) print('HTMLTextAreaElement.selectionDirection.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectionDirection', 1, function (value) {
            if (debug) print('HTMLTextAreaElement.selectionDirection.set', value)
            mm.memory.private_data.get(this).selectionDirection = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    checkValidity: {

        value: newFunc('checkValidity', 10, function () {
            if (debug) print('HTMLTextAreaElement.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportValidity: {

        value: newFunc('reportValidity', 10, function () {
            if (debug) print('HTMLTextAreaElement.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    select: {

        value: newFunc('select', 10, function () {
            if (debug) print('HTMLTextAreaElement.select.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setCustomValidity: {

        value: newFunc('setCustomValidity', 10, function () {
            if (debug) print('HTMLTextAreaElement.setCustomValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setRangeText: {

        value: newFunc('setRangeText', 10, function () {
            if (debug) print('HTMLTextAreaElement.setRangeText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setSelectionRange: {

        value: newFunc('setSelectionRange', 10, function () {
            if (debug) print('HTMLTextAreaElement.setSelectionRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTextAreaElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTemplateElement = newFunc('HTMLTemplateElement', 1, function () {
    print('HTMLTemplateElement.call');
    mm.memory.private_data.set(this, {
        content: new DocumentFragment(),
    })
})


Object.defineProperties(HTMLTemplateElement.prototype, {
    content: {

        get: newFunc('content', 10, function () {
            let res = mm.memory.private_data.get(this).content;
            // res = new Proxy(res, {
            //     get(target, p, receiver) {
            //         let res = Reflect.get(target, p, receiver)
            //         print('template.content.get', p, typeof res)
            //         if (typeof res === 'object'){
            //             return mm.proxy(res, p)
            //         }
            //         return res;
            //     }
            // })
            if (debug) print('HTMLTemplateElement.content.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    shadowRootMode: {

        get: newFunc('shadowRootMode', 10, function () {
            let res = mm.memory.private_data.get(this).shadowRootMode;
            if (debug) print('HTMLTemplateElement.shadowRootMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowRootMode', 1, function (value) {
            if (debug) print('HTMLTemplateElement.shadowRootMode.set', value)
            mm.memory.private_data.get(this).shadowRootMode = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shadowRootDelegatesFocus: {

        get: newFunc('shadowRootDelegatesFocus', 10, function () {
            let res = mm.memory.private_data.get(this).shadowRootDelegatesFocus;
            if (debug) print('HTMLTemplateElement.shadowRootDelegatesFocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowRootDelegatesFocus', 1, function (value) {
            if (debug) print('HTMLTemplateElement.shadowRootDelegatesFocus.set', value)
            mm.memory.private_data.get(this).shadowRootDelegatesFocus = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shadowRootClonable: {

        get: newFunc('shadowRootClonable', 10, function () {
            let res = mm.memory.private_data.get(this).shadowRootClonable;
            if (debug) print('HTMLTemplateElement.shadowRootClonable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowRootClonable', 1, function (value) {
            if (debug) print('HTMLTemplateElement.shadowRootClonable.set', value)
            mm.memory.private_data.get(this).shadowRootClonable = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shadowRootSerializable: {

        get: newFunc('shadowRootSerializable', 10, function () {
            let res = mm.memory.private_data.get(this).shadowRootSerializable;
            if (debug) print('HTMLTemplateElement.shadowRootSerializable.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shadowRootSerializable', 1, function (value) {
            if (debug) print('HTMLTemplateElement.shadowRootSerializable.set', value)
            mm.memory.private_data.get(this).shadowRootSerializable = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTemplateElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});

Object.setPrototypeOf(HTMLTemplateElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLTemplateElement, HTMLElement);
HTMLTemplateElement.__proto__ = HTMLElement.prototype

;HTMLTableSectionElement = newFunc('HTMLTableSectionElement', 1, function () {
    print('HTMLTableSectionElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTableSectionElement.prototype, {
    rows: {

        get: newFunc('rows', 10, function () {
            let res = mm.memory.private_data.get(this).rows;
            if (debug) print('HTMLTableSectionElement.rows.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLTableSectionElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLTableSectionElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ch: {

        get: newFunc('ch', 10, function () {
            let res = mm.memory.private_data.get(this).ch;
            if (debug) print('HTMLTableSectionElement.ch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ch', 1, function (value) {
            if (debug) print('HTMLTableSectionElement.ch.set', value)
            mm.memory.private_data.get(this).ch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    chOff: {

        get: newFunc('chOff', 10, function () {
            let res = mm.memory.private_data.get(this).chOff;
            if (debug) print('HTMLTableSectionElement.chOff.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('chOff', 1, function (value) {
            if (debug) print('HTMLTableSectionElement.chOff.set', value)
            mm.memory.private_data.get(this).chOff = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    vAlign: {

        get: newFunc('vAlign', 10, function () {
            let res = mm.memory.private_data.get(this).vAlign;
            if (debug) print('HTMLTableSectionElement.vAlign.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vAlign', 1, function (value) {
            if (debug) print('HTMLTableSectionElement.vAlign.set', value)
            mm.memory.private_data.get(this).vAlign = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    deleteRow: {

        value: newFunc('deleteRow', 10, function () {
            if (debug) print('HTMLTableSectionElement.deleteRow.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertRow: {

        value: newFunc('insertRow', 10, function () {
            if (debug) print('HTMLTableSectionElement.insertRow.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTableSectionElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTableRowElement = newFunc('HTMLTableRowElement', 1, function () {
    print('HTMLTableRowElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTableRowElement.prototype, {
    rowIndex: {

        get: newFunc('rowIndex', 10, function () {
            let res = mm.memory.private_data.get(this).rowIndex;
            if (debug) print('HTMLTableRowElement.rowIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    sectionRowIndex: {

        get: newFunc('sectionRowIndex', 10, function () {
            let res = mm.memory.private_data.get(this).sectionRowIndex;
            if (debug) print('HTMLTableRowElement.sectionRowIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cells: {

        get: newFunc('cells', 10, function () {
            let res = mm.memory.private_data.get(this).cells;
            if (debug) print('HTMLTableRowElement.cells.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLTableRowElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLTableRowElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ch: {

        get: newFunc('ch', 10, function () {
            let res = mm.memory.private_data.get(this).ch;
            if (debug) print('HTMLTableRowElement.ch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ch', 1, function (value) {
            if (debug) print('HTMLTableRowElement.ch.set', value)
            mm.memory.private_data.get(this).ch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    chOff: {

        get: newFunc('chOff', 10, function () {
            let res = mm.memory.private_data.get(this).chOff;
            if (debug) print('HTMLTableRowElement.chOff.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('chOff', 1, function (value) {
            if (debug) print('HTMLTableRowElement.chOff.set', value)
            mm.memory.private_data.get(this).chOff = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    vAlign: {

        get: newFunc('vAlign', 10, function () {
            let res = mm.memory.private_data.get(this).vAlign;
            if (debug) print('HTMLTableRowElement.vAlign.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vAlign', 1, function (value) {
            if (debug) print('HTMLTableRowElement.vAlign.set', value)
            mm.memory.private_data.get(this).vAlign = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    bgColor: {

        get: newFunc('bgColor', 10, function () {
            let res = mm.memory.private_data.get(this).bgColor;
            if (debug) print('HTMLTableRowElement.bgColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('bgColor', 1, function (value) {
            if (debug) print('HTMLTableRowElement.bgColor.set', value)
            mm.memory.private_data.get(this).bgColor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    deleteCell: {

        value: newFunc('deleteCell', 10, function () {
            if (debug) print('HTMLTableRowElement.deleteCell.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertCell: {

        value: newFunc('insertCell', 10, function () {
            if (debug) print('HTMLTableRowElement.insertCell.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTableRowElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTableElement = newFunc('HTMLTableElement', 1, function () {
    print('HTMLTableElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTableElement.prototype, {
    caption: {

        get: newFunc('caption', 10, function () {
            let res = mm.memory.private_data.get(this).caption;
            if (debug) print('HTMLTableElement.caption.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('caption', 1, function (value) {
            if (debug) print('HTMLTableElement.caption.set', value)
            mm.memory.private_data.get(this).caption = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    tHead: {

        get: newFunc('tHead', 10, function () {
            let res = mm.memory.private_data.get(this).tHead;
            if (debug) print('HTMLTableElement.tHead.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('tHead', 1, function (value) {
            if (debug) print('HTMLTableElement.tHead.set', value)
            mm.memory.private_data.get(this).tHead = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    tFoot: {

        get: newFunc('tFoot', 10, function () {
            let res = mm.memory.private_data.get(this).tFoot;
            if (debug) print('HTMLTableElement.tFoot.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('tFoot', 1, function (value) {
            if (debug) print('HTMLTableElement.tFoot.set', value)
            mm.memory.private_data.get(this).tFoot = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    tBodies: {

        get: newFunc('tBodies', 10, function () {
            let res = mm.memory.private_data.get(this).tBodies;
            if (debug) print('HTMLTableElement.tBodies.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    rows: {

        get: newFunc('rows', 10, function () {
            let res = mm.memory.private_data.get(this).rows;
            if (debug) print('HTMLTableElement.rows.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLTableElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLTableElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    border: {

        get: newFunc('border', 10, function () {
            let res = mm.memory.private_data.get(this).border;
            if (debug) print('HTMLTableElement.border.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('border', 1, function (value) {
            if (debug) print('HTMLTableElement.border.set', value)
            mm.memory.private_data.get(this).border = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    frame: {

        get: newFunc('frame', 10, function () {
            let res = mm.memory.private_data.get(this).frame;
            if (debug) print('HTMLTableElement.frame.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('frame', 1, function (value) {
            if (debug) print('HTMLTableElement.frame.set', value)
            mm.memory.private_data.get(this).frame = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rules: {

        get: newFunc('rules', 10, function () {
            let res = mm.memory.private_data.get(this).rules;
            if (debug) print('HTMLTableElement.rules.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rules', 1, function (value) {
            if (debug) print('HTMLTableElement.rules.set', value)
            mm.memory.private_data.get(this).rules = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    summary: {

        get: newFunc('summary', 10, function () {
            let res = mm.memory.private_data.get(this).summary;
            if (debug) print('HTMLTableElement.summary.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('summary', 1, function (value) {
            if (debug) print('HTMLTableElement.summary.set', value)
            mm.memory.private_data.get(this).summary = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLTableElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLTableElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    bgColor: {

        get: newFunc('bgColor', 10, function () {
            let res = mm.memory.private_data.get(this).bgColor;
            if (debug) print('HTMLTableElement.bgColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('bgColor', 1, function (value) {
            if (debug) print('HTMLTableElement.bgColor.set', value)
            mm.memory.private_data.get(this).bgColor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    cellPadding: {

        get: newFunc('cellPadding', 10, function () {
            let res = mm.memory.private_data.get(this).cellPadding;
            if (debug) print('HTMLTableElement.cellPadding.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cellPadding', 1, function (value) {
            if (debug) print('HTMLTableElement.cellPadding.set', value)
            mm.memory.private_data.get(this).cellPadding = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    cellSpacing: {

        get: newFunc('cellSpacing', 10, function () {
            let res = mm.memory.private_data.get(this).cellSpacing;
            if (debug) print('HTMLTableElement.cellSpacing.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cellSpacing', 1, function (value) {
            if (debug) print('HTMLTableElement.cellSpacing.set', value)
            mm.memory.private_data.get(this).cellSpacing = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    createCaption: {

        value: newFunc('createCaption', 10, function () {
            if (debug) print('HTMLTableElement.createCaption.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createTBody: {

        value: newFunc('createTBody', 10, function () {
            if (debug) print('HTMLTableElement.createTBody.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createTFoot: {

        value: newFunc('createTFoot', 10, function () {
            if (debug) print('HTMLTableElement.createTFoot.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    createTHead: {

        value: newFunc('createTHead', 10, function () {
            if (debug) print('HTMLTableElement.createTHead.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteCaption: {

        value: newFunc('deleteCaption', 10, function () {
            if (debug) print('HTMLTableElement.deleteCaption.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteRow: {

        value: newFunc('deleteRow', 10, function () {
            if (debug) print('HTMLTableElement.deleteRow.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteTFoot: {

        value: newFunc('deleteTFoot', 10, function () {
            if (debug) print('HTMLTableElement.deleteTFoot.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteTHead: {

        value: newFunc('deleteTHead', 10, function () {
            if (debug) print('HTMLTableElement.deleteTHead.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertRow: {

        value: newFunc('insertRow', 10, function () {
            if (debug) print('HTMLTableElement.insertRow.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTableElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTableColElement = newFunc('HTMLTableColElement', 1, function () {
    print('HTMLTableColElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTableColElement.prototype, {
    span: {

        get: newFunc('span', 10, function () {
            let res = mm.memory.private_data.get(this).span;
            if (debug) print('HTMLTableColElement.span.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('span', 1, function (value) {
            if (debug) print('HTMLTableColElement.span.set', value)
            mm.memory.private_data.get(this).span = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLTableColElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLTableColElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ch: {

        get: newFunc('ch', 10, function () {
            let res = mm.memory.private_data.get(this).ch;
            if (debug) print('HTMLTableColElement.ch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ch', 1, function (value) {
            if (debug) print('HTMLTableColElement.ch.set', value)
            mm.memory.private_data.get(this).ch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    chOff: {

        get: newFunc('chOff', 10, function () {
            let res = mm.memory.private_data.get(this).chOff;
            if (debug) print('HTMLTableColElement.chOff.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('chOff', 1, function (value) {
            if (debug) print('HTMLTableColElement.chOff.set', value)
            mm.memory.private_data.get(this).chOff = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    vAlign: {

        get: newFunc('vAlign', 10, function () {
            let res = mm.memory.private_data.get(this).vAlign;
            if (debug) print('HTMLTableColElement.vAlign.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vAlign', 1, function (value) {
            if (debug) print('HTMLTableColElement.vAlign.set', value)
            mm.memory.private_data.get(this).vAlign = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLTableColElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLTableColElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTableColElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTableCellElement = newFunc('HTMLTableCellElement', 1, function () {
    print('HTMLTableCellElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTableCellElement.prototype, {
    colSpan: {

        get: newFunc('colSpan', 10, function () {
            let res = mm.memory.private_data.get(this).colSpan;
            if (debug) print('HTMLTableCellElement.colSpan.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('colSpan', 1, function (value) {
            if (debug) print('HTMLTableCellElement.colSpan.set', value)
            mm.memory.private_data.get(this).colSpan = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rowSpan: {

        get: newFunc('rowSpan', 10, function () {
            let res = mm.memory.private_data.get(this).rowSpan;
            if (debug) print('HTMLTableCellElement.rowSpan.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rowSpan', 1, function (value) {
            if (debug) print('HTMLTableCellElement.rowSpan.set', value)
            mm.memory.private_data.get(this).rowSpan = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    headers: {

        get: newFunc('headers', 10, function () {
            let res = mm.memory.private_data.get(this).headers;
            if (debug) print('HTMLTableCellElement.headers.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('headers', 1, function (value) {
            if (debug) print('HTMLTableCellElement.headers.set', value)
            mm.memory.private_data.get(this).headers = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    cellIndex: {

        get: newFunc('cellIndex', 10, function () {
            let res = mm.memory.private_data.get(this).cellIndex;
            if (debug) print('HTMLTableCellElement.cellIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLTableCellElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLTableCellElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    axis: {

        get: newFunc('axis', 10, function () {
            let res = mm.memory.private_data.get(this).axis;
            if (debug) print('HTMLTableCellElement.axis.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('axis', 1, function (value) {
            if (debug) print('HTMLTableCellElement.axis.set', value)
            mm.memory.private_data.get(this).axis = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('HTMLTableCellElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('HTMLTableCellElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLTableCellElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLTableCellElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ch: {

        get: newFunc('ch', 10, function () {
            let res = mm.memory.private_data.get(this).ch;
            if (debug) print('HTMLTableCellElement.ch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ch', 1, function (value) {
            if (debug) print('HTMLTableCellElement.ch.set', value)
            mm.memory.private_data.get(this).ch = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    chOff: {

        get: newFunc('chOff', 10, function () {
            let res = mm.memory.private_data.get(this).chOff;
            if (debug) print('HTMLTableCellElement.chOff.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('chOff', 1, function (value) {
            if (debug) print('HTMLTableCellElement.chOff.set', value)
            mm.memory.private_data.get(this).chOff = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    noWrap: {

        get: newFunc('noWrap', 10, function () {
            let res = mm.memory.private_data.get(this).noWrap;
            if (debug) print('HTMLTableCellElement.noWrap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('noWrap', 1, function (value) {
            if (debug) print('HTMLTableCellElement.noWrap.set', value)
            mm.memory.private_data.get(this).noWrap = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    vAlign: {

        get: newFunc('vAlign', 10, function () {
            let res = mm.memory.private_data.get(this).vAlign;
            if (debug) print('HTMLTableCellElement.vAlign.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vAlign', 1, function (value) {
            if (debug) print('HTMLTableCellElement.vAlign.set', value)
            mm.memory.private_data.get(this).vAlign = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    bgColor: {

        get: newFunc('bgColor', 10, function () {
            let res = mm.memory.private_data.get(this).bgColor;
            if (debug) print('HTMLTableCellElement.bgColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('bgColor', 1, function (value) {
            if (debug) print('HTMLTableCellElement.bgColor.set', value)
            mm.memory.private_data.get(this).bgColor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    abbr: {

        get: newFunc('abbr', 10, function () {
            let res = mm.memory.private_data.get(this).abbr;
            if (debug) print('HTMLTableCellElement.abbr.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('abbr', 1, function (value) {
            if (debug) print('HTMLTableCellElement.abbr.set', value)
            mm.memory.private_data.get(this).abbr = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    scope: {

        get: newFunc('scope', 10, function () {
            let res = mm.memory.private_data.get(this).scope;
            if (debug) print('HTMLTableCellElement.scope.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('scope', 1, function (value) {
            if (debug) print('HTMLTableCellElement.scope.set', value)
            mm.memory.private_data.get(this).scope = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTableCellElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLTableCaptionElement = newFunc('HTMLTableCaptionElement', 1, function () {
    print('HTMLTableCaptionElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLTableCaptionElement.prototype, {
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLTableCaptionElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLTableCaptionElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLTableCaptionElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLSourceElement = newFunc('HTMLSourceElement', 1, function () {
    print('HTMLSourceElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLSourceElement.prototype, {
    src: {

        get: newFunc('src', 10, function () {
            let res = mm.memory.private_data.get(this).src;
            if (debug) print('HTMLSourceElement.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function (value) {
            if (debug) print('HTMLSourceElement.src.set', value)
            mm.memory.private_data.get(this).src = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLSourceElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLSourceElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    srcset: {

        get: newFunc('srcset', 10, function () {
            let res = mm.memory.private_data.get(this).srcset;
            if (debug) print('HTMLSourceElement.srcset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('srcset', 1, function (value) {
            if (debug) print('HTMLSourceElement.srcset.set', value)
            mm.memory.private_data.get(this).srcset = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sizes: {

        get: newFunc('sizes', 10, function () {
            let res = mm.memory.private_data.get(this).sizes;
            if (debug) print('HTMLSourceElement.sizes.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('sizes', 1, function (value) {
            if (debug) print('HTMLSourceElement.sizes.set', value)
            mm.memory.private_data.get(this).sizes = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    media: {

        get: newFunc('media', 10, function () {
            let res = mm.memory.private_data.get(this).media;
            if (debug) print('HTMLSourceElement.media.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function (value) {
            if (debug) print('HTMLSourceElement.media.set', value)
            mm.memory.private_data.get(this).media = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLSourceElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLSourceElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('HTMLSourceElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('HTMLSourceElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLSourceElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLSlotElement = newFunc('HTMLSlotElement', 1, function () {
    print('HTMLSlotElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLSlotElement.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLSlotElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLSlotElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    assign: {

        value: newFunc('assign', 10, function () {
            if (debug) print('HTMLSlotElement.assign.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    assignedElements: {

        value: newFunc('assignedElements', 10, function () {
            if (debug) print('HTMLSlotElement.assignedElements.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    assignedNodes: {

        value: newFunc('assignedNodes', 10, function () {
            if (debug) print('HTMLSlotElement.assignedNodes.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLSlotElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLSelectElement = newFunc('HTMLSelectElement', 1, function () {
    print('HTMLSelectElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLSelectElement.prototype, {
    autocomplete: {

        get: newFunc('autocomplete', 10, function () {
            let res = mm.memory.private_data.get(this).autocomplete;
            if (debug) print('HTMLSelectElement.autocomplete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('autocomplete', 1, function (value) {
            if (debug) print('HTMLSelectElement.autocomplete.set', value)
            mm.memory.private_data.get(this).autocomplete = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('HTMLSelectElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('HTMLSelectElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLSelectElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    multiple: {

        get: newFunc('multiple', 10, function () {
            let res = mm.memory.private_data.get(this).multiple;
            if (debug) print('HTMLSelectElement.multiple.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('multiple', 1, function (value) {
            if (debug) print('HTMLSelectElement.multiple.set', value)
            mm.memory.private_data.get(this).multiple = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLSelectElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLSelectElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    required: {

        get: newFunc('required', 10, function () {
            let res = mm.memory.private_data.get(this).required;
            if (debug) print('HTMLSelectElement.required.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('required', 1, function (value) {
            if (debug) print('HTMLSelectElement.required.set', value)
            mm.memory.private_data.get(this).required = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('HTMLSelectElement.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('size', 1, function (value) {
            if (debug) print('HTMLSelectElement.size.set', value)
            mm.memory.private_data.get(this).size = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLSelectElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    options: {

        get: newFunc('options', 10, function () {
            let res = mm.memory.private_data.get(this).options;
            if (debug) print('HTMLSelectElement.options.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('HTMLSelectElement.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('length', 1, function (value) {
            if (debug) print('HTMLSelectElement.length.set', value)
            mm.memory.private_data.get(this).length = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    selectedOptions: {

        get: newFunc('selectedOptions', 10, function () {
            let res = mm.memory.private_data.get(this).selectedOptions;
            if (debug) print('HTMLSelectElement.selectedOptions.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    selectedIndex: {

        get: newFunc('selectedIndex', 10, function () {
            let res = mm.memory.private_data.get(this).selectedIndex;
            if (debug) print('HTMLSelectElement.selectedIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectedIndex', 1, function (value) {
            if (debug) print('HTMLSelectElement.selectedIndex.set', value)
            mm.memory.private_data.get(this).selectedIndex = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLSelectElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLSelectElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    willValidate: {

        get: newFunc('willValidate', 10, function () {
            let res = mm.memory.private_data.get(this).willValidate;
            if (debug) print('HTMLSelectElement.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validity: {

        get: newFunc('validity', 10, function () {
            let res = mm.memory.private_data.get(this).validity;
            if (debug) print('HTMLSelectElement.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validationMessage: {

        get: newFunc('validationMessage', 10, function () {
            let res = mm.memory.private_data.get(this).validationMessage;
            if (debug) print('HTMLSelectElement.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    labels: {

        get: newFunc('labels', 10, function () {
            let res = mm.memory.private_data.get(this).labels;
            if (debug) print('HTMLSelectElement.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('HTMLSelectElement.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    checkValidity: {

        value: newFunc('checkValidity', 10, function () {
            if (debug) print('HTMLSelectElement.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    item: {

        value: newFunc('item', 10, function () {
            if (debug) print('HTMLSelectElement.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    namedItem: {

        value: newFunc('namedItem', 10, function () {
            if (debug) print('HTMLSelectElement.namedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    remove: {

        value: newFunc('remove', 10, function () {
            if (debug) print('HTMLSelectElement.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportValidity: {

        value: newFunc('reportValidity', 10, function () {
            if (debug) print('HTMLSelectElement.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setCustomValidity: {

        value: newFunc('setCustomValidity', 10, function () {
            if (debug) print('HTMLSelectElement.setCustomValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    showPicker: {

        value: newFunc('showPicker', 10, function () {
            if (debug) print('HTMLSelectElement.showPicker.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLSelectElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLQuoteElement = newFunc('HTMLQuoteElement', 1, function () {
    print('HTMLQuoteElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLQuoteElement.prototype, {
    cite: {

        get: newFunc('cite', 10, function () {
            let res = mm.memory.private_data.get(this).cite;
            if (debug) print('HTMLQuoteElement.cite.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cite', 1, function (value) {
            if (debug) print('HTMLQuoteElement.cite.set', value)
            mm.memory.private_data.get(this).cite = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLQuoteElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLProgressElement = newFunc('HTMLProgressElement', 1, function () {
    print('HTMLProgressElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLProgressElement.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLProgressElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLProgressElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    max: {

        get: newFunc('max', 10, function () {
            let res = mm.memory.private_data.get(this).max;
            if (debug) print('HTMLProgressElement.max.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('max', 1, function (value) {
            if (debug) print('HTMLProgressElement.max.set', value)
            mm.memory.private_data.get(this).max = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    position: {

        get: newFunc('position', 10, function () {
            let res = mm.memory.private_data.get(this).position;
            if (debug) print('HTMLProgressElement.position.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    labels: {

        get: newFunc('labels', 10, function () {
            let res = mm.memory.private_data.get(this).labels;
            if (debug) print('HTMLProgressElement.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLProgressElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLPictureElement = newFunc('HTMLPictureElement', 1, function () {
    print('HTMLPictureElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLPictureElement.prototype, {
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLPictureElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLParamElement = newFunc('HTMLParamElement', 1, function () {
    print('HTMLParamElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLParamElement.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLParamElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLParamElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLParamElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLParamElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLParamElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLParamElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    valueType: {

        get: newFunc('valueType', 10, function () {
            let res = mm.memory.private_data.get(this).valueType;
            if (debug) print('HTMLParamElement.valueType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('valueType', 1, function (value) {
            if (debug) print('HTMLParamElement.valueType.set', value)
            mm.memory.private_data.get(this).valueType = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLParamElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLOutputElement = newFunc('HTMLOutputElement', 1, function () {
    print('HTMLOutputElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLOutputElement.prototype, {
    htmlFor: {

        get: newFunc('htmlFor', 10, function () {
            let res = mm.memory.private_data.get(this).htmlFor;
            if (debug) print('HTMLOutputElement.htmlFor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('htmlFor', 1, function (value) {
            if (debug) print('HTMLOutputElement.htmlFor.set', value)
            mm.memory.private_data.get(this).htmlFor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLOutputElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLOutputElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLOutputElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLOutputElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    defaultValue: {

        get: newFunc('defaultValue', 10, function () {
            let res = mm.memory.private_data.get(this).defaultValue;
            if (debug) print('HTMLOutputElement.defaultValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defaultValue', 1, function (value) {
            if (debug) print('HTMLOutputElement.defaultValue.set', value)
            mm.memory.private_data.get(this).defaultValue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLOutputElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLOutputElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    willValidate: {

        get: newFunc('willValidate', 10, function () {
            let res = mm.memory.private_data.get(this).willValidate;
            if (debug) print('HTMLOutputElement.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validity: {

        get: newFunc('validity', 10, function () {
            let res = mm.memory.private_data.get(this).validity;
            if (debug) print('HTMLOutputElement.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validationMessage: {

        get: newFunc('validationMessage', 10, function () {
            let res = mm.memory.private_data.get(this).validationMessage;
            if (debug) print('HTMLOutputElement.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    labels: {

        get: newFunc('labels', 10, function () {
            let res = mm.memory.private_data.get(this).labels;
            if (debug) print('HTMLOutputElement.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    checkValidity: {

        value: newFunc('checkValidity', 10, function () {
            if (debug) print('HTMLOutputElement.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportValidity: {

        value: newFunc('reportValidity', 10, function () {
            if (debug) print('HTMLOutputElement.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setCustomValidity: {

        value: newFunc('setCustomValidity', 10, function () {
            if (debug) print('HTMLOutputElement.setCustomValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLOutputElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLOptionsCollection = newFunc('HTMLOptionsCollection', 1, function () {
    print('HTMLOptionsCollection.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLOptionsCollection.prototype, {
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('HTMLOptionsCollection.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('length', 1, function (value) {
            if (debug) print('HTMLOptionsCollection.length.set', value)
            mm.memory.private_data.get(this).length = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    selectedIndex: {

        get: newFunc('selectedIndex', 10, function () {
            let res = mm.memory.private_data.get(this).selectedIndex;
            if (debug) print('HTMLOptionsCollection.selectedIndex.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectedIndex', 1, function (value) {
            if (debug) print('HTMLOptionsCollection.selectedIndex.set', value)
            mm.memory.private_data.get(this).selectedIndex = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    add: {

        value: newFunc('add', 10, function () {
            if (debug) print('HTMLOptionsCollection.add.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    remove: {

        value: newFunc('remove', 10, function () {
            if (debug) print('HTMLOptionsCollection.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLOptionsCollection.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLOptionElement = newFunc('HTMLOptionElement', 1, function () {
    print('HTMLOptionElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLOptionElement.prototype, {
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('HTMLOptionElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('HTMLOptionElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLOptionElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('HTMLOptionElement.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('HTMLOptionElement.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    defaultSelected: {

        get: newFunc('defaultSelected', 10, function () {
            let res = mm.memory.private_data.get(this).defaultSelected;
            if (debug) print('HTMLOptionElement.defaultSelected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defaultSelected', 1, function (value) {
            if (debug) print('HTMLOptionElement.defaultSelected.set', value)
            mm.memory.private_data.get(this).defaultSelected = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    selected: {

        get: newFunc('selected', 10, function () {
            let res = mm.memory.private_data.get(this).selected;
            if (debug) print('HTMLOptionElement.selected.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selected', 1, function (value) {
            if (debug) print('HTMLOptionElement.selected.set', value)
            mm.memory.private_data.get(this).selected = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLOptionElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLOptionElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    text: {

        get: newFunc('text', 10, function () {
            let res = mm.memory.private_data.get(this).text;
            if (debug) print('HTMLOptionElement.text.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('text', 1, function (value) {
            if (debug) print('HTMLOptionElement.text.set', value)
            mm.memory.private_data.get(this).text = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    index: {

        get: newFunc('index', 10, function () {
            let res = mm.memory.private_data.get(this).index;
            if (debug) print('HTMLOptionElement.index.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLOptionElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLOptGroupElement = newFunc('HTMLOptGroupElement', 1, function () {
    print('HTMLOptGroupElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLOptGroupElement.prototype, {
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('HTMLOptGroupElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('HTMLOptGroupElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    label: {

        get: newFunc('label', 10, function () {
            let res = mm.memory.private_data.get(this).label;
            if (debug) print('HTMLOptGroupElement.label.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('label', 1, function (value) {
            if (debug) print('HTMLOptGroupElement.label.set', value)
            mm.memory.private_data.get(this).label = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLOptGroupElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLObjectElement = newFunc('HTMLObjectElement', 1, function () {
    print('HTMLObjectElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLObjectElement.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('HTMLObjectElement.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('data', 1, function (value) {
            if (debug) print('HTMLObjectElement.data.set', value)
            mm.memory.private_data.get(this).data = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLObjectElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLObjectElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLObjectElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLObjectElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    useMap: {

        get: newFunc('useMap', 10, function () {
            let res = mm.memory.private_data.get(this).useMap;
            if (debug) print('HTMLObjectElement.useMap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('useMap', 1, function (value) {
            if (debug) print('HTMLObjectElement.useMap.set', value)
            mm.memory.private_data.get(this).useMap = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLObjectElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLObjectElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLObjectElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('HTMLObjectElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('HTMLObjectElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    contentDocument: {

        get: newFunc('contentDocument', 10, function () {
            let res = mm.memory.private_data.get(this).contentDocument;
            if (debug) print('HTMLObjectElement.contentDocument.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    contentWindow: {

        get: newFunc('contentWindow', 10, function () {
            let res = mm.memory.private_data.get(this).contentWindow;
            if (debug) print('HTMLObjectElement.contentWindow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    willValidate: {

        get: newFunc('willValidate', 10, function () {
            let res = mm.memory.private_data.get(this).willValidate;
            if (debug) print('HTMLObjectElement.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validity: {

        get: newFunc('validity', 10, function () {
            let res = mm.memory.private_data.get(this).validity;
            if (debug) print('HTMLObjectElement.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validationMessage: {

        get: newFunc('validationMessage', 10, function () {
            let res = mm.memory.private_data.get(this).validationMessage;
            if (debug) print('HTMLObjectElement.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLObjectElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLObjectElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    archive: {

        get: newFunc('archive', 10, function () {
            let res = mm.memory.private_data.get(this).archive;
            if (debug) print('HTMLObjectElement.archive.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('archive', 1, function (value) {
            if (debug) print('HTMLObjectElement.archive.set', value)
            mm.memory.private_data.get(this).archive = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    code: {

        get: newFunc('code', 10, function () {
            let res = mm.memory.private_data.get(this).code;
            if (debug) print('HTMLObjectElement.code.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('code', 1, function (value) {
            if (debug) print('HTMLObjectElement.code.set', value)
            mm.memory.private_data.get(this).code = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    declare: {

        get: newFunc('declare', 10, function () {
            let res = mm.memory.private_data.get(this).declare;
            if (debug) print('HTMLObjectElement.declare.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('declare', 1, function (value) {
            if (debug) print('HTMLObjectElement.declare.set', value)
            mm.memory.private_data.get(this).declare = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    hspace: {

        get: newFunc('hspace', 10, function () {
            let res = mm.memory.private_data.get(this).hspace;
            if (debug) print('HTMLObjectElement.hspace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hspace', 1, function (value) {
            if (debug) print('HTMLObjectElement.hspace.set', value)
            mm.memory.private_data.get(this).hspace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    standby: {

        get: newFunc('standby', 10, function () {
            let res = mm.memory.private_data.get(this).standby;
            if (debug) print('HTMLObjectElement.standby.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('standby', 1, function (value) {
            if (debug) print('HTMLObjectElement.standby.set', value)
            mm.memory.private_data.get(this).standby = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    vspace: {

        get: newFunc('vspace', 10, function () {
            let res = mm.memory.private_data.get(this).vspace;
            if (debug) print('HTMLObjectElement.vspace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vspace', 1, function (value) {
            if (debug) print('HTMLObjectElement.vspace.set', value)
            mm.memory.private_data.get(this).vspace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    codeBase: {

        get: newFunc('codeBase', 10, function () {
            let res = mm.memory.private_data.get(this).codeBase;
            if (debug) print('HTMLObjectElement.codeBase.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('codeBase', 1, function (value) {
            if (debug) print('HTMLObjectElement.codeBase.set', value)
            mm.memory.private_data.get(this).codeBase = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    codeType: {

        get: newFunc('codeType', 10, function () {
            let res = mm.memory.private_data.get(this).codeType;
            if (debug) print('HTMLObjectElement.codeType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('codeType', 1, function (value) {
            if (debug) print('HTMLObjectElement.codeType.set', value)
            mm.memory.private_data.get(this).codeType = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    border: {

        get: newFunc('border', 10, function () {
            let res = mm.memory.private_data.get(this).border;
            if (debug) print('HTMLObjectElement.border.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('border', 1, function (value) {
            if (debug) print('HTMLObjectElement.border.set', value)
            mm.memory.private_data.get(this).border = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    checkValidity: {

        value: newFunc('checkValidity', 10, function () {
            if (debug) print('HTMLObjectElement.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getSVGDocument: {

        value: newFunc('getSVGDocument', 10, function () {
            if (debug) print('HTMLObjectElement.getSVGDocument.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportValidity: {

        value: newFunc('reportValidity', 10, function () {
            if (debug) print('HTMLObjectElement.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setCustomValidity: {

        value: newFunc('setCustomValidity', 10, function () {
            if (debug) print('HTMLObjectElement.setCustomValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLObjectElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLOListElement = newFunc('HTMLOListElement', 1, function () {
    print('HTMLOListElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLOListElement.prototype, {
    reversed: {

        get: newFunc('reversed', 10, function () {
            let res = mm.memory.private_data.get(this).reversed;
            if (debug) print('HTMLOListElement.reversed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('reversed', 1, function (value) {
            if (debug) print('HTMLOListElement.reversed.set', value)
            mm.memory.private_data.get(this).reversed = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    start: {

        get: newFunc('start', 10, function () {
            let res = mm.memory.private_data.get(this).start;
            if (debug) print('HTMLOListElement.start.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('start', 1, function (value) {
            if (debug) print('HTMLOListElement.start.set', value)
            mm.memory.private_data.get(this).start = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLOListElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLOListElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    compact: {

        get: newFunc('compact', 10, function () {
            let res = mm.memory.private_data.get(this).compact;
            if (debug) print('HTMLOListElement.compact.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('compact', 1, function (value) {
            if (debug) print('HTMLOListElement.compact.set', value)
            mm.memory.private_data.get(this).compact = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLOListElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLModElement = newFunc('HTMLModElement', 1, function () {
    print('HTMLModElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLModElement.prototype, {
    cite: {

        get: newFunc('cite', 10, function () {
            let res = mm.memory.private_data.get(this).cite;
            if (debug) print('HTMLModElement.cite.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cite', 1, function (value) {
            if (debug) print('HTMLModElement.cite.set', value)
            mm.memory.private_data.get(this).cite = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    dateTime: {

        get: newFunc('dateTime', 10, function () {
            let res = mm.memory.private_data.get(this).dateTime;
            if (debug) print('HTMLModElement.dateTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('dateTime', 1, function (value) {
            if (debug) print('HTMLModElement.dateTime.set', value)
            mm.memory.private_data.get(this).dateTime = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLModElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLMeterElement = newFunc('HTMLMeterElement', 1, function () {
    print('HTMLMeterElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLMeterElement.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLMeterElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLMeterElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    min: {

        get: newFunc('min', 10, function () {
            let res = mm.memory.private_data.get(this).min;
            if (debug) print('HTMLMeterElement.min.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('min', 1, function (value) {
            if (debug) print('HTMLMeterElement.min.set', value)
            mm.memory.private_data.get(this).min = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    max: {

        get: newFunc('max', 10, function () {
            let res = mm.memory.private_data.get(this).max;
            if (debug) print('HTMLMeterElement.max.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('max', 1, function (value) {
            if (debug) print('HTMLMeterElement.max.set', value)
            mm.memory.private_data.get(this).max = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    low: {

        get: newFunc('low', 10, function () {
            let res = mm.memory.private_data.get(this).low;
            if (debug) print('HTMLMeterElement.low.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('low', 1, function (value) {
            if (debug) print('HTMLMeterElement.low.set', value)
            mm.memory.private_data.get(this).low = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    high: {

        get: newFunc('high', 10, function () {
            let res = mm.memory.private_data.get(this).high;
            if (debug) print('HTMLMeterElement.high.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('high', 1, function (value) {
            if (debug) print('HTMLMeterElement.high.set', value)
            mm.memory.private_data.get(this).high = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    optimum: {

        get: newFunc('optimum', 10, function () {
            let res = mm.memory.private_data.get(this).optimum;
            if (debug) print('HTMLMeterElement.optimum.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('optimum', 1, function (value) {
            if (debug) print('HTMLMeterElement.optimum.set', value)
            mm.memory.private_data.get(this).optimum = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    labels: {

        get: newFunc('labels', 10, function () {
            let res = mm.memory.private_data.get(this).labels;
            if (debug) print('HTMLMeterElement.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLMeterElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLMenuElement = newFunc('HTMLMenuElement', 1, function () {
    print('HTMLMenuElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLMenuElement.prototype, {
    compact: {

        get: newFunc('compact', 10, function () {
            let res = mm.memory.private_data.get(this).compact;
            if (debug) print('HTMLMenuElement.compact.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('compact', 1, function (value) {
            if (debug) print('HTMLMenuElement.compact.set', value)
            mm.memory.private_data.get(this).compact = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLMenuElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLMarqueeElement = newFunc('HTMLMarqueeElement', 1, function () {
    print('HTMLMarqueeElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLMarqueeElement.prototype, {
    behavior: {

        get: newFunc('behavior', 10, function () {
            let res = mm.memory.private_data.get(this).behavior;
            if (debug) print('HTMLMarqueeElement.behavior.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('behavior', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.behavior.set', value)
            mm.memory.private_data.get(this).behavior = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    bgColor: {

        get: newFunc('bgColor', 10, function () {
            let res = mm.memory.private_data.get(this).bgColor;
            if (debug) print('HTMLMarqueeElement.bgColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('bgColor', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.bgColor.set', value)
            mm.memory.private_data.get(this).bgColor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    direction: {

        get: newFunc('direction', 10, function () {
            let res = mm.memory.private_data.get(this).direction;
            if (debug) print('HTMLMarqueeElement.direction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('direction', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.direction.set', value)
            mm.memory.private_data.get(this).direction = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('HTMLMarqueeElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    hspace: {

        get: newFunc('hspace', 10, function () {
            let res = mm.memory.private_data.get(this).hspace;
            if (debug) print('HTMLMarqueeElement.hspace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hspace', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.hspace.set', value)
            mm.memory.private_data.get(this).hspace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    loop: {

        get: newFunc('loop', 10, function () {
            let res = mm.memory.private_data.get(this).loop;
            if (debug) print('HTMLMarqueeElement.loop.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('loop', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.loop.set', value)
            mm.memory.private_data.get(this).loop = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    scrollAmount: {

        get: newFunc('scrollAmount', 10, function () {
            let res = mm.memory.private_data.get(this).scrollAmount;
            if (debug) print('HTMLMarqueeElement.scrollAmount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('scrollAmount', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.scrollAmount.set', value)
            mm.memory.private_data.get(this).scrollAmount = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    scrollDelay: {

        get: newFunc('scrollDelay', 10, function () {
            let res = mm.memory.private_data.get(this).scrollDelay;
            if (debug) print('HTMLMarqueeElement.scrollDelay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('scrollDelay', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.scrollDelay.set', value)
            mm.memory.private_data.get(this).scrollDelay = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    trueSpeed: {

        get: newFunc('trueSpeed', 10, function () {
            let res = mm.memory.private_data.get(this).trueSpeed;
            if (debug) print('HTMLMarqueeElement.trueSpeed.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('trueSpeed', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.trueSpeed.set', value)
            mm.memory.private_data.get(this).trueSpeed = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    vspace: {

        get: newFunc('vspace', 10, function () {
            let res = mm.memory.private_data.get(this).vspace;
            if (debug) print('HTMLMarqueeElement.vspace.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vspace', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.vspace.set', value)
            mm.memory.private_data.get(this).vspace = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLMarqueeElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLMarqueeElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    start: {

        value: newFunc('start', 10, function () {
            if (debug) print('HTMLMarqueeElement.start.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    stop: {

        value: newFunc('stop', 10, function () {
            if (debug) print('HTMLMarqueeElement.stop.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLMarqueeElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLMapElement = newFunc('HTMLMapElement', 1, function () {
    print('HTMLMapElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLMapElement.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLMapElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLMapElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    areas: {

        get: newFunc('areas', 10, function () {
            let res = mm.memory.private_data.get(this).areas;
            if (debug) print('HTMLMapElement.areas.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLMapElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLLegendElement = newFunc('HTMLLegendElement', 1, function () {
    print('HTMLLegendElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLLegendElement.prototype, {
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLLegendElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLLegendElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLLegendElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLLegendElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLLabelElement = newFunc('HTMLLabelElement', 1, function () {
    print('HTMLLabelElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLLabelElement.prototype, {
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLLabelElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    htmlFor: {

        get: newFunc('htmlFor', 10, function () {
            let res = mm.memory.private_data.get(this).htmlFor;
            if (debug) print('HTMLLabelElement.htmlFor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('htmlFor', 1, function (value) {
            if (debug) print('HTMLLabelElement.htmlFor.set', value)
            mm.memory.private_data.get(this).htmlFor = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    control: {

        get: newFunc('control', 10, function () {
            let res = mm.memory.private_data.get(this).control;
            if (debug) print('HTMLLabelElement.control.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLLabelElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLHeadingElement = newFunc('HTMLHeadingElement', 1, function () {
    print('HTMLHeadingElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLHeadingElement.prototype, {
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLHeadingElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLHeadingElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLHeadingElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLHRElement = newFunc('HTMLHRElement', 1, function () {
    print('HTMLHRElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLHRElement.prototype, {
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLHRElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLHRElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    color: {

        get: newFunc('color', 10, function () {
            let res = mm.memory.private_data.get(this).color;
            if (debug) print('HTMLHRElement.color.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('color', 1, function (value) {
            if (debug) print('HTMLHRElement.color.set', value)
            mm.memory.private_data.get(this).color = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    noShade: {

        get: newFunc('noShade', 10, function () {
            let res = mm.memory.private_data.get(this).noShade;
            if (debug) print('HTMLHRElement.noShade.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('noShade', 1, function (value) {
            if (debug) print('HTMLHRElement.noShade.set', value)
            mm.memory.private_data.get(this).noShade = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('HTMLHRElement.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('size', 1, function (value) {
            if (debug) print('HTMLHRElement.size.set', value)
            mm.memory.private_data.get(this).size = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLHRElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLHRElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLHRElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLFrameSetElement = newFunc('HTMLFrameSetElement', 1, function () {
    print('HTMLFrameSetElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLFrameSetElement.prototype, {
    cols: {

        get: newFunc('cols', 10, function () {
            let res = mm.memory.private_data.get(this).cols;
            if (debug) print('HTMLFrameSetElement.cols.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cols', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.cols.set', value)
            mm.memory.private_data.get(this).cols = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rows: {

        get: newFunc('rows', 10, function () {
            let res = mm.memory.private_data.get(this).rows;
            if (debug) print('HTMLFrameSetElement.rows.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rows', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.rows.set', value)
            mm.memory.private_data.get(this).rows = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onblur: {

        get: newFunc('onblur', 10, function () {
            let res = mm.memory.private_data.get(this).onblur;
            if (debug) print('HTMLFrameSetElement.onblur.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onblur', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onblur.set', value)
            mm.memory.private_data.get(this).onblur = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onerror: {

        get: newFunc('onerror', 10, function () {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('HTMLFrameSetElement.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onfocus: {

        get: newFunc('onfocus', 10, function () {
            let res = mm.memory.private_data.get(this).onfocus;
            if (debug) print('HTMLFrameSetElement.onfocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfocus', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onfocus.set', value)
            mm.memory.private_data.get(this).onfocus = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onload: {

        get: newFunc('onload', 10, function () {
            let res = mm.memory.private_data.get(this).onload;
            if (debug) print('HTMLFrameSetElement.onload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onload', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onload.set', value)
            mm.memory.private_data.get(this).onload = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onresize: {

        get: newFunc('onresize', 10, function () {
            let res = mm.memory.private_data.get(this).onresize;
            if (debug) print('HTMLFrameSetElement.onresize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresize', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onresize.set', value)
            mm.memory.private_data.get(this).onresize = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onscroll: {

        get: newFunc('onscroll', 10, function () {
            let res = mm.memory.private_data.get(this).onscroll;
            if (debug) print('HTMLFrameSetElement.onscroll.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscroll', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onscroll.set', value)
            mm.memory.private_data.get(this).onscroll = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onafterprint: {

        get: newFunc('onafterprint', 10, function () {
            let res = mm.memory.private_data.get(this).onafterprint;
            if (debug) print('HTMLFrameSetElement.onafterprint.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onafterprint', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onafterprint.set', value)
            mm.memory.private_data.get(this).onafterprint = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforeprint: {

        get: newFunc('onbeforeprint', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforeprint;
            if (debug) print('HTMLFrameSetElement.onbeforeprint.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforeprint', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onbeforeprint.set', value)
            mm.memory.private_data.get(this).onbeforeprint = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onbeforeunload: {

        get: newFunc('onbeforeunload', 10, function () {
            let res = mm.memory.private_data.get(this).onbeforeunload;
            if (debug) print('HTMLFrameSetElement.onbeforeunload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforeunload', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onbeforeunload.set', value)
            mm.memory.private_data.get(this).onbeforeunload = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onhashchange: {

        get: newFunc('onhashchange', 10, function () {
            let res = mm.memory.private_data.get(this).onhashchange;
            if (debug) print('HTMLFrameSetElement.onhashchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onhashchange', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onhashchange.set', value)
            mm.memory.private_data.get(this).onhashchange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onlanguagechange: {

        get: newFunc('onlanguagechange', 10, function () {
            let res = mm.memory.private_data.get(this).onlanguagechange;
            if (debug) print('HTMLFrameSetElement.onlanguagechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onlanguagechange', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onlanguagechange.set', value)
            mm.memory.private_data.get(this).onlanguagechange = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmessage: {

        get: newFunc('onmessage', 10, function () {
            let res = mm.memory.private_data.get(this).onmessage;
            if (debug) print('HTMLFrameSetElement.onmessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessage', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onmessage.set', value)
            mm.memory.private_data.get(this).onmessage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onmessageerror: {

        get: newFunc('onmessageerror', 10, function () {
            let res = mm.memory.private_data.get(this).onmessageerror;
            if (debug) print('HTMLFrameSetElement.onmessageerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmessageerror', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onmessageerror.set', value)
            mm.memory.private_data.get(this).onmessageerror = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onoffline: {

        get: newFunc('onoffline', 10, function () {
            let res = mm.memory.private_data.get(this).onoffline;
            if (debug) print('HTMLFrameSetElement.onoffline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onoffline', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onoffline.set', value)
            mm.memory.private_data.get(this).onoffline = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ononline: {

        get: newFunc('ononline', 10, function () {
            let res = mm.memory.private_data.get(this).ononline;
            if (debug) print('HTMLFrameSetElement.ononline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ononline', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.ononline.set', value)
            mm.memory.private_data.get(this).ononline = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpagehide: {

        get: newFunc('onpagehide', 10, function () {
            let res = mm.memory.private_data.get(this).onpagehide;
            if (debug) print('HTMLFrameSetElement.onpagehide.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpagehide', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onpagehide.set', value)
            mm.memory.private_data.get(this).onpagehide = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpageshow: {

        get: newFunc('onpageshow', 10, function () {
            let res = mm.memory.private_data.get(this).onpageshow;
            if (debug) print('HTMLFrameSetElement.onpageshow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpageshow', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onpageshow.set', value)
            mm.memory.private_data.get(this).onpageshow = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onpopstate: {

        get: newFunc('onpopstate', 10, function () {
            let res = mm.memory.private_data.get(this).onpopstate;
            if (debug) print('HTMLFrameSetElement.onpopstate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpopstate', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onpopstate.set', value)
            mm.memory.private_data.get(this).onpopstate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onrejectionhandled: {

        get: newFunc('onrejectionhandled', 10, function () {
            let res = mm.memory.private_data.get(this).onrejectionhandled;
            if (debug) print('HTMLFrameSetElement.onrejectionhandled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onrejectionhandled', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onrejectionhandled.set', value)
            mm.memory.private_data.get(this).onrejectionhandled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onstorage: {

        get: newFunc('onstorage', 10, function () {
            let res = mm.memory.private_data.get(this).onstorage;
            if (debug) print('HTMLFrameSetElement.onstorage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstorage', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onstorage.set', value)
            mm.memory.private_data.get(this).onstorage = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onunhandledrejection: {

        get: newFunc('onunhandledrejection', 10, function () {
            let res = mm.memory.private_data.get(this).onunhandledrejection;
            if (debug) print('HTMLFrameSetElement.onunhandledrejection.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onunhandledrejection', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onunhandledrejection.set', value)
            mm.memory.private_data.get(this).onunhandledrejection = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    onunload: {

        get: newFunc('onunload', 10, function () {
            let res = mm.memory.private_data.get(this).onunload;
            if (debug) print('HTMLFrameSetElement.onunload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onunload', 1, function (value) {
            if (debug) print('HTMLFrameSetElement.onunload.set', value)
            mm.memory.private_data.get(this).onunload = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLFrameSetElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLFrameElement = newFunc('HTMLFrameElement', 1, function () {
    print('HTMLFrameElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLFrameElement.prototype, {
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLFrameElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLFrameElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    scrolling: {

        get: newFunc('scrolling', 10, function () {
            let res = mm.memory.private_data.get(this).scrolling;
            if (debug) print('HTMLFrameElement.scrolling.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('scrolling', 1, function (value) {
            if (debug) print('HTMLFrameElement.scrolling.set', value)
            mm.memory.private_data.get(this).scrolling = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    src: {

        get: newFunc('src', 10, function () {
            let res = mm.memory.private_data.get(this).src;
            if (debug) print('HTMLFrameElement.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function (value) {
            if (debug) print('HTMLFrameElement.src.set', value)
            mm.memory.private_data.get(this).src = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    frameBorder: {

        get: newFunc('frameBorder', 10, function () {
            let res = mm.memory.private_data.get(this).frameBorder;
            if (debug) print('HTMLFrameElement.frameBorder.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('frameBorder', 1, function (value) {
            if (debug) print('HTMLFrameElement.frameBorder.set', value)
            mm.memory.private_data.get(this).frameBorder = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    longDesc: {

        get: newFunc('longDesc', 10, function () {
            let res = mm.memory.private_data.get(this).longDesc;
            if (debug) print('HTMLFrameElement.longDesc.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('longDesc', 1, function (value) {
            if (debug) print('HTMLFrameElement.longDesc.set', value)
            mm.memory.private_data.get(this).longDesc = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    noResize: {

        get: newFunc('noResize', 10, function () {
            let res = mm.memory.private_data.get(this).noResize;
            if (debug) print('HTMLFrameElement.noResize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('noResize', 1, function (value) {
            if (debug) print('HTMLFrameElement.noResize.set', value)
            mm.memory.private_data.get(this).noResize = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    contentDocument: {

        get: newFunc('contentDocument', 10, function () {
            let res = mm.memory.private_data.get(this).contentDocument;
            if (debug) print('HTMLFrameElement.contentDocument.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    contentWindow: {

        get: newFunc('contentWindow', 10, function () {
            let res = mm.memory.private_data.get(this).contentWindow;
            if (debug) print('HTMLFrameElement.contentWindow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    marginHeight: {

        get: newFunc('marginHeight', 10, function () {
            let res = mm.memory.private_data.get(this).marginHeight;
            if (debug) print('HTMLFrameElement.marginHeight.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginHeight', 1, function (value) {
            if (debug) print('HTMLFrameElement.marginHeight.set', value)
            mm.memory.private_data.get(this).marginHeight = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    marginWidth: {

        get: newFunc('marginWidth', 10, function () {
            let res = mm.memory.private_data.get(this).marginWidth;
            if (debug) print('HTMLFrameElement.marginWidth.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('marginWidth', 1, function (value) {
            if (debug) print('HTMLFrameElement.marginWidth.set', value)
            mm.memory.private_data.get(this).marginWidth = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLFrameElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLFormControlsCollection = newFunc('HTMLFormControlsCollection', 1, function () {
    print('HTMLFormControlsCollection.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLFormControlsCollection.prototype, {
    namedItem: {

        value: newFunc('namedItem', 10, function () {
            if (debug) print('HTMLFormControlsCollection.namedItem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLFormControlsCollection.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLFontElement = newFunc('HTMLFontElement', 1, function () {
    print('HTMLFontElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLFontElement.prototype, {
    color: {

        get: newFunc('color', 10, function () {
            let res = mm.memory.private_data.get(this).color;
            if (debug) print('HTMLFontElement.color.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('color', 1, function (value) {
            if (debug) print('HTMLFontElement.color.set', value)
            mm.memory.private_data.get(this).color = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    face: {

        get: newFunc('face', 10, function () {
            let res = mm.memory.private_data.get(this).face;
            if (debug) print('HTMLFontElement.face.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('face', 1, function (value) {
            if (debug) print('HTMLFontElement.face.set', value)
            mm.memory.private_data.get(this).face = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    size: {

        get: newFunc('size', 10, function () {
            let res = mm.memory.private_data.get(this).size;
            if (debug) print('HTMLFontElement.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('size', 1, function (value) {
            if (debug) print('HTMLFontElement.size.set', value)
            mm.memory.private_data.get(this).size = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLFontElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLFieldSetElement = newFunc('HTMLFieldSetElement', 1, function () {
    print('HTMLFieldSetElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLFieldSetElement.prototype, {
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('HTMLFieldSetElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('HTMLFieldSetElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLFieldSetElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLFieldSetElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLFieldSetElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLFieldSetElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    elements: {

        get: newFunc('elements', 10, function () {
            let res = mm.memory.private_data.get(this).elements;
            if (debug) print('HTMLFieldSetElement.elements.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    willValidate: {

        get: newFunc('willValidate', 10, function () {
            let res = mm.memory.private_data.get(this).willValidate;
            if (debug) print('HTMLFieldSetElement.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validity: {

        get: newFunc('validity', 10, function () {
            let res = mm.memory.private_data.get(this).validity;
            if (debug) print('HTMLFieldSetElement.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validationMessage: {

        get: newFunc('validationMessage', 10, function () {
            let res = mm.memory.private_data.get(this).validationMessage;
            if (debug) print('HTMLFieldSetElement.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    checkValidity: {

        value: newFunc('checkValidity', 10, function () {
            if (debug) print('HTMLFieldSetElement.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportValidity: {

        value: newFunc('reportValidity', 10, function () {
            if (debug) print('HTMLFieldSetElement.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setCustomValidity: {

        value: newFunc('setCustomValidity', 10, function () {
            if (debug) print('HTMLFieldSetElement.setCustomValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLFieldSetElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLEmbedElement = newFunc('HTMLEmbedElement', 1, function () {
    print('HTMLEmbedElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLEmbedElement.prototype, {
    src: {

        get: newFunc('src', 10, function () {
            let res = mm.memory.private_data.get(this).src;
            if (debug) print('HTMLEmbedElement.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function (value) {
            if (debug) print('HTMLEmbedElement.src.set', value)
            mm.memory.private_data.get(this).src = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLEmbedElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLEmbedElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLEmbedElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLEmbedElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('HTMLEmbedElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('HTMLEmbedElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    align: {

        get: newFunc('align', 10, function () {
            let res = mm.memory.private_data.get(this).align;
            if (debug) print('HTMLEmbedElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLEmbedElement.align.set', value)
            mm.memory.private_data.get(this).align = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLEmbedElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLEmbedElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getSVGDocument: {

        value: newFunc('getSVGDocument', 10, function () {
            if (debug) print('HTMLEmbedElement.getSVGDocument.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLEmbedElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLDirectoryElement = newFunc('HTMLDirectoryElement', 1, function () {
    print('HTMLDirectoryElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLDirectoryElement.prototype, {
    compact: {

        get: newFunc('compact', 10, function () {
            let res = mm.memory.private_data.get(this).compact;
            if (debug) print('HTMLDirectoryElement.compact.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('compact', 1, function (value) {
            if (debug) print('HTMLDirectoryElement.compact.set', value)
            mm.memory.private_data.get(this).compact = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLDirectoryElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLDialogElement = newFunc('HTMLDialogElement', 1, function () {
    print('HTMLDialogElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLDialogElement.prototype, {
    open: {

        get: newFunc('open', 10, function () {
            let res = mm.memory.private_data.get(this).open;
            if (debug) print('HTMLDialogElement.open.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('open', 1, function (value) {
            if (debug) print('HTMLDialogElement.open.set', value)
            mm.memory.private_data.get(this).open = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    returnValue: {

        get: newFunc('returnValue', 10, function () {
            let res = mm.memory.private_data.get(this).returnValue;
            if (debug) print('HTMLDialogElement.returnValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('returnValue', 1, function (value) {
            if (debug) print('HTMLDialogElement.returnValue.set', value)
            mm.memory.private_data.get(this).returnValue = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    close: {

        value: newFunc('close', 10, function () {
            if (debug) print('HTMLDialogElement.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    show: {

        value: newFunc('show', 10, function () {
            if (debug) print('HTMLDialogElement.show.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    showModal: {

        value: newFunc('showModal', 10, function () {
            if (debug) print('HTMLDialogElement.showModal.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLDialogElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLDetailsElement = newFunc('HTMLDetailsElement', 1, function () {
    print('HTMLDetailsElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLDetailsElement.prototype, {
    open: {

        get: newFunc('open', 10, function () {
            let res = mm.memory.private_data.get(this).open;
            if (debug) print('HTMLDetailsElement.open.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('open', 1, function (value) {
            if (debug) print('HTMLDetailsElement.open.set', value)
            mm.memory.private_data.get(this).open = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLDetailsElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLDetailsElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLDetailsElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLDataListElement = newFunc('HTMLDataListElement', 1, function () {
    print('HTMLDataListElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLDataListElement.prototype, {
    options: {

        get: newFunc('options', 10, function () {
            let res = mm.memory.private_data.get(this).options;
            if (debug) print('HTMLDataListElement.options.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLDataListElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLDataElement = newFunc('HTMLDataElement', 1, function () {
    print('HTMLDataElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLDataElement.prototype, {
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLDataElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLDataElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLDataElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLDListElement = newFunc('HTMLDListElement', 1, function () {
    print('HTMLDListElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLDListElement.prototype, {
    compact: {

        get: newFunc('compact', 10, function () {
            let res = mm.memory.private_data.get(this).compact;
            if (debug) print('HTMLDListElement.compact.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('compact', 1, function (value) {
            if (debug) print('HTMLDListElement.compact.set', value)
            mm.memory.private_data.get(this).compact = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLDListElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLButtonElement = newFunc('HTMLButtonElement', 1, function () {
    print('HTMLButtonElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLButtonElement.prototype, {
    disabled: {

        get: newFunc('disabled', 10, function () {
            let res = mm.memory.private_data.get(this).disabled;
            if (debug) print('HTMLButtonElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('HTMLButtonElement.disabled.set', value)
            mm.memory.private_data.get(this).disabled = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    form: {

        get: newFunc('form', 10, function () {
            let res = mm.memory.private_data.get(this).form;
            if (debug) print('HTMLButtonElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    formAction: {

        get: newFunc('formAction', 10, function () {
            let res = mm.memory.private_data.get(this).formAction;
            if (debug) print('HTMLButtonElement.formAction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formAction', 1, function (value) {
            if (debug) print('HTMLButtonElement.formAction.set', value)
            mm.memory.private_data.get(this).formAction = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    formEnctype: {

        get: newFunc('formEnctype', 10, function () {
            let res = mm.memory.private_data.get(this).formEnctype;
            if (debug) print('HTMLButtonElement.formEnctype.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formEnctype', 1, function (value) {
            if (debug) print('HTMLButtonElement.formEnctype.set', value)
            mm.memory.private_data.get(this).formEnctype = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    formMethod: {

        get: newFunc('formMethod', 10, function () {
            let res = mm.memory.private_data.get(this).formMethod;
            if (debug) print('HTMLButtonElement.formMethod.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formMethod', 1, function (value) {
            if (debug) print('HTMLButtonElement.formMethod.set', value)
            mm.memory.private_data.get(this).formMethod = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    formNoValidate: {

        get: newFunc('formNoValidate', 10, function () {
            let res = mm.memory.private_data.get(this).formNoValidate;
            if (debug) print('HTMLButtonElement.formNoValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formNoValidate', 1, function (value) {
            if (debug) print('HTMLButtonElement.formNoValidate.set', value)
            mm.memory.private_data.get(this).formNoValidate = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    formTarget: {

        get: newFunc('formTarget', 10, function () {
            let res = mm.memory.private_data.get(this).formTarget;
            if (debug) print('HTMLButtonElement.formTarget.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formTarget', 1, function (value) {
            if (debug) print('HTMLButtonElement.formTarget.set', value)
            mm.memory.private_data.get(this).formTarget = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    name: {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('HTMLButtonElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLButtonElement.name.set', value)
            mm.memory.private_data.get(this).name = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('HTMLButtonElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLButtonElement.type.set', value)
            mm.memory.private_data.get(this).type = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    value: {

        get: newFunc('value', 10, function () {
            let res = mm.memory.private_data.get(this).value;
            if (debug) print('HTMLButtonElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLButtonElement.value.set', value)
            mm.memory.private_data.get(this).value = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    willValidate: {

        get: newFunc('willValidate', 10, function () {
            let res = mm.memory.private_data.get(this).willValidate;
            if (debug) print('HTMLButtonElement.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validity: {

        get: newFunc('validity', 10, function () {
            let res = mm.memory.private_data.get(this).validity;
            if (debug) print('HTMLButtonElement.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    validationMessage: {

        get: newFunc('validationMessage', 10, function () {
            let res = mm.memory.private_data.get(this).validationMessage;
            if (debug) print('HTMLButtonElement.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    labels: {

        get: newFunc('labels', 10, function () {
            let res = mm.memory.private_data.get(this).labels;
            if (debug) print('HTMLButtonElement.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    popoverTargetElement: {

        get: newFunc('popoverTargetElement', 10, function () {
            let res = mm.memory.private_data.get(this).popoverTargetElement;
            if (debug) print('HTMLButtonElement.popoverTargetElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('popoverTargetElement', 1, function (value) {
            if (debug) print('HTMLButtonElement.popoverTargetElement.set', value)
            mm.memory.private_data.get(this).popoverTargetElement = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    popoverTargetAction: {

        get: newFunc('popoverTargetAction', 10, function () {
            let res = mm.memory.private_data.get(this).popoverTargetAction;
            if (debug) print('HTMLButtonElement.popoverTargetAction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('popoverTargetAction', 1, function (value) {
            if (debug) print('HTMLButtonElement.popoverTargetAction.set', value)
            mm.memory.private_data.get(this).popoverTargetAction = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    checkValidity: {

        value: newFunc('checkValidity', 10, function () {
            if (debug) print('HTMLButtonElement.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    reportValidity: {

        value: newFunc('reportValidity', 10, function () {
            if (debug) print('HTMLButtonElement.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setCustomValidity: {

        value: newFunc('setCustomValidity', 10, function () {
            if (debug) print('HTMLButtonElement.setCustomValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLButtonElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLBaseElement = newFunc('HTMLBaseElement', 1, function () {
    print('HTMLBaseElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLBaseElement.prototype, {
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('HTMLBaseElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('href', 1, function (value) {
            if (debug) print('HTMLBaseElement.href.set', value)
            mm.memory.private_data.get(this).href = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('HTMLBaseElement.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('target', 1, function (value) {
            if (debug) print('HTMLBaseElement.target.set', value)
            mm.memory.private_data.get(this).target = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLBaseElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLBRElement = newFunc('HTMLBRElement', 1, function () {
    print('HTMLBRElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLBRElement.prototype, {
    clear: {

        get: newFunc('clear', 10, function () {
            let res = mm.memory.private_data.get(this).clear;
            if (debug) print('HTMLBRElement.clear.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('clear', 1, function (value) {
            if (debug) print('HTMLBRElement.clear.set', value)
            mm.memory.private_data.get(this).clear = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLBRElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;HTMLAreaElement = newFunc('HTMLAreaElement', 1, function () {
    print('HTMLAreaElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLAreaElement.prototype, {
    alt: {

        get: newFunc('alt', 10, function () {
            let res = mm.memory.private_data.get(this).alt;
            if (debug) print('HTMLAreaElement.alt.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('alt', 1, function (value) {
            if (debug) print('HTMLAreaElement.alt.set', value)
            mm.memory.private_data.get(this).alt = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    coords: {

        get: newFunc('coords', 10, function () {
            let res = mm.memory.private_data.get(this).coords;
            if (debug) print('HTMLAreaElement.coords.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('coords', 1, function (value) {
            if (debug) print('HTMLAreaElement.coords.set', value)
            mm.memory.private_data.get(this).coords = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    download: {

        get: newFunc('download', 10, function () {
            let res = mm.memory.private_data.get(this).download;
            if (debug) print('HTMLAreaElement.download.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('download', 1, function (value) {
            if (debug) print('HTMLAreaElement.download.set', value)
            mm.memory.private_data.get(this).download = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    shape: {

        get: newFunc('shape', 10, function () {
            let res = mm.memory.private_data.get(this).shape;
            if (debug) print('HTMLAreaElement.shape.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('shape', 1, function (value) {
            if (debug) print('HTMLAreaElement.shape.set', value)
            mm.memory.private_data.get(this).shape = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    target: {

        get: newFunc('target', 10, function () {
            let res = mm.memory.private_data.get(this).target;
            if (debug) print('HTMLAreaElement.target.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('target', 1, function (value) {
            if (debug) print('HTMLAreaElement.target.set', value)
            mm.memory.private_data.get(this).target = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    ping: {

        get: newFunc('ping', 10, function () {
            let res = mm.memory.private_data.get(this).ping;
            if (debug) print('HTMLAreaElement.ping.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ping', 1, function (value) {
            if (debug) print('HTMLAreaElement.ping.set', value)
            mm.memory.private_data.get(this).ping = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    rel: {

        get: newFunc('rel', 10, function () {
            let res = mm.memory.private_data.get(this).rel;
            if (debug) print('HTMLAreaElement.rel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('rel', 1, function (value) {
            if (debug) print('HTMLAreaElement.rel.set', value)
            mm.memory.private_data.get(this).rel = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    relList: {

        get: newFunc('relList', 10, function () {
            let res = mm.memory.private_data.get(this).relList;
            if (debug) print('HTMLAreaElement.relList.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('relList', 1, function (value) {
            if (debug) print('HTMLAreaElement.relList.set', value)
            mm.memory.private_data.get(this).relList = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    referrerPolicy: {

        get: newFunc('referrerPolicy', 10, function () {
            let res = mm.memory.private_data.get(this).referrerPolicy;
            if (debug) print('HTMLAreaElement.referrerPolicy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('referrerPolicy', 1, function (value) {
            if (debug) print('HTMLAreaElement.referrerPolicy.set', value)
            mm.memory.private_data.get(this).referrerPolicy = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    noHref: {

        get: newFunc('noHref', 10, function () {
            let res = mm.memory.private_data.get(this).noHref;
            if (debug) print('HTMLAreaElement.noHref.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('noHref', 1, function (value) {
            if (debug) print('HTMLAreaElement.noHref.set', value)
            mm.memory.private_data.get(this).noHref = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    origin: {

        get: newFunc('origin', 10, function () {
            let res = mm.memory.private_data.get(this).origin;
            if (debug) print('HTMLAreaElement.origin.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    protocol: {

        get: newFunc('protocol', 10, function () {
            let res = mm.memory.private_data.get(this).protocol;
            if (debug) print('HTMLAreaElement.protocol.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('protocol', 1, function (value) {
            if (debug) print('HTMLAreaElement.protocol.set', value)
            mm.memory.private_data.get(this).protocol = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    username: {

        get: newFunc('username', 10, function () {
            let res = mm.memory.private_data.get(this).username;
            if (debug) print('HTMLAreaElement.username.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('username', 1, function (value) {
            if (debug) print('HTMLAreaElement.username.set', value)
            mm.memory.private_data.get(this).username = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    password: {

        get: newFunc('password', 10, function () {
            let res = mm.memory.private_data.get(this).password;
            if (debug) print('HTMLAreaElement.password.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('password', 1, function (value) {
            if (debug) print('HTMLAreaElement.password.set', value)
            mm.memory.private_data.get(this).password = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    host: {

        get: newFunc('host', 10, function () {
            let res = mm.memory.private_data.get(this).host;
            if (debug) print('HTMLAreaElement.host.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('host', 1, function (value) {
            if (debug) print('HTMLAreaElement.host.set', value)
            mm.memory.private_data.get(this).host = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    hostname: {

        get: newFunc('hostname', 10, function () {
            let res = mm.memory.private_data.get(this).hostname;
            if (debug) print('HTMLAreaElement.hostname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hostname', 1, function (value) {
            if (debug) print('HTMLAreaElement.hostname.set', value)
            mm.memory.private_data.get(this).hostname = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    port: {

        get: newFunc('port', 10, function () {
            let res = mm.memory.private_data.get(this).port;
            if (debug) print('HTMLAreaElement.port.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('port', 1, function (value) {
            if (debug) print('HTMLAreaElement.port.set', value)
            mm.memory.private_data.get(this).port = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    pathname: {

        get: newFunc('pathname', 10, function () {
            let res = mm.memory.private_data.get(this).pathname;
            if (debug) print('HTMLAreaElement.pathname.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('pathname', 1, function (value) {
            if (debug) print('HTMLAreaElement.pathname.set', value)
            mm.memory.private_data.get(this).pathname = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    search: {

        get: newFunc('search', 10, function () {
            let res = mm.memory.private_data.get(this).search;
            if (debug) print('HTMLAreaElement.search.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('search', 1, function (value) {
            if (debug) print('HTMLAreaElement.search.set', value)
            mm.memory.private_data.get(this).search = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    hash: {

        get: newFunc('hash', 10, function () {
            let res = mm.memory.private_data.get(this).hash;
            if (debug) print('HTMLAreaElement.hash.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('hash', 1, function (value) {
            if (debug) print('HTMLAreaElement.hash.set', value)
            mm.memory.private_data.get(this).hash = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    href: {

        get: newFunc('href', 10, function () {
            let res = mm.memory.private_data.get(this).href;
            if (debug) print('HTMLAreaElement.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('href', 1, function (value) {
            if (debug) print('HTMLAreaElement.href.set', value)
            mm.memory.private_data.get(this).href = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    toString: {

        value: newFunc('toString', 10, function () {
            if (debug) print('HTMLAreaElement.toString.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLAreaElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


;HTMLFencedFrameElement = newFunc('HTMLFencedFrameElement', 1, function () {
    print('HTMLFencedFrameElement.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(HTMLFencedFrameElement.prototype, {
    width: {

        get: newFunc('width', 10, function () {
            let res = mm.memory.private_data.get(this).width;
            if (debug) print('HTMLFencedFrameElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLFencedFrameElement.width.set', value)
            mm.memory.private_data.get(this).width = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    height: {

        get: newFunc('height', 10, function () {
            let res = mm.memory.private_data.get(this).height;
            if (debug) print('HTMLFencedFrameElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('HTMLFencedFrameElement.height.set', value)
            mm.memory.private_data.get(this).height = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    sandbox: {

        get: newFunc('sandbox', 10, function () {
            let res = mm.memory.private_data.get(this).sandbox;
            if (debug) print('HTMLFencedFrameElement.sandbox.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('sandbox', 1, function (value) {
            if (debug) print('HTMLFencedFrameElement.sandbox.set', value)
            mm.memory.private_data.get(this).sandbox = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    config: {

        get: newFunc('config', 10, function () {
            let res = mm.memory.private_data.get(this).config;
            if (debug) print('HTMLFencedFrameElement.config.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('config', 1, function (value) {
            if (debug) print('HTMLFencedFrameElement.config.set', value)
            mm.memory.private_data.get(this).config = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    allow: {

        get: newFunc('allow', 10, function () {
            let res = mm.memory.private_data.get(this).allow;
            if (debug) print('HTMLFencedFrameElement.allow.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('allow', 1, function (value) {
            if (debug) print('HTMLFencedFrameElement.allow.set', value)
            mm.memory.private_data.get(this).allow = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('HTMLFencedFrameElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});