HTMLInputElement = newFunc('HTMLInputElement', 1, function HTMLInputElement() {
    mm.memory.private_data.set(this, {
        outerHTML: '<input>',
        style: new CSSStyleDeclaration(),
    })
})


;delete HTMLInputElement.prototype.constructor;
;
Object.defineProperties(HTMLInputElement.prototype, {
    [Symbol.toStringTag]: {
        value: 'HTMLInputElement'
    },

    'accept': {

        get: newFunc('accept', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['accept'];
            if (debug) print('HTMLInputElement.accept.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('accept', 1, function (value) {
            if (debug) print('HTMLInputElement.accept.set', value)
            mm.memory.private_data.get(this)['accept'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'alt': {

        get: newFunc('alt', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['alt'];
            if (debug) print('HTMLInputElement.alt.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('alt', 1, function (value) {
            if (debug) print('HTMLInputElement.alt.set', value)
            mm.memory.private_data.get(this)['alt'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'autocomplete': {

        get: newFunc('autocomplete', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['autocomplete'];
            if (debug) print('HTMLInputElement.autocomplete.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('autocomplete', 1, function (value) {
            if (debug) print('HTMLInputElement.autocomplete.set', value)
            mm.memory.private_data.get(this)['autocomplete'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'defaultChecked': {

        get: newFunc('defaultChecked', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['defaultChecked'];
            if (debug) print('HTMLInputElement.defaultChecked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defaultChecked', 1, function (value) {
            if (debug) print('HTMLInputElement.defaultChecked.set', value)
            mm.memory.private_data.get(this)['defaultChecked'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'checked': {

        get: newFunc('checked', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['checked'];
            if (debug) print('HTMLInputElement.checked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('checked', 1, function (value) {
            if (debug) print('HTMLInputElement.checked.set', value)
            mm.memory.private_data.get(this)['checked'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'dirName': {

        get: newFunc('dirName', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['dirName'];
            if (debug) print('HTMLInputElement.dirName.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('dirName', 1, function (value) {
            if (debug) print('HTMLInputElement.dirName.set', value)
            mm.memory.private_data.get(this)['dirName'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'disabled': {

        get: newFunc('disabled', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['disabled'];
            if (debug) print('HTMLInputElement.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('HTMLInputElement.disabled.set', value)
            mm.memory.private_data.get(this)['disabled'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'form': {

        get: newFunc('form', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['form'];
            if (debug) print('HTMLInputElement.form.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'files': {

        get: newFunc('files', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['files'];
            if (debug) print('HTMLInputElement.files.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('files', 1, function (value) {
            if (debug) print('HTMLInputElement.files.set', value)
            mm.memory.private_data.get(this)['files'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'formAction': {

        get: newFunc('formAction', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['formAction'];
            if (debug) print('HTMLInputElement.formAction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formAction', 1, function (value) {
            if (debug) print('HTMLInputElement.formAction.set', value)
            mm.memory.private_data.get(this)['formAction'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'formEnctype': {

        get: newFunc('formEnctype', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['formEnctype'];
            if (debug) print('HTMLInputElement.formEnctype.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formEnctype', 1, function (value) {
            if (debug) print('HTMLInputElement.formEnctype.set', value)
            mm.memory.private_data.get(this)['formEnctype'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'formMethod': {

        get: newFunc('formMethod', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['formMethod'];
            if (debug) print('HTMLInputElement.formMethod.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formMethod', 1, function (value) {
            if (debug) print('HTMLInputElement.formMethod.set', value)
            mm.memory.private_data.get(this)['formMethod'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'formNoValidate': {

        get: newFunc('formNoValidate', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['formNoValidate'];
            if (debug) print('HTMLInputElement.formNoValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formNoValidate', 1, function (value) {
            if (debug) print('HTMLInputElement.formNoValidate.set', value)
            mm.memory.private_data.get(this)['formNoValidate'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'formTarget': {

        get: newFunc('formTarget', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['formTarget'];
            if (debug) print('HTMLInputElement.formTarget.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('formTarget', 1, function (value) {
            if (debug) print('HTMLInputElement.formTarget.set', value)
            mm.memory.private_data.get(this)['formTarget'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'height': {

        get: newFunc('height', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['height'];
            if (debug) print('HTMLInputElement.height.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('height', 1, function (value) {
            if (debug) print('HTMLInputElement.height.set', value)
            mm.memory.private_data.get(this)['height'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'indeterminate': {

        get: newFunc('indeterminate', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['indeterminate'];
            if (debug) print('HTMLInputElement.indeterminate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('indeterminate', 1, function (value) {
            if (debug) print('HTMLInputElement.indeterminate.set', value)
            mm.memory.private_data.get(this)['indeterminate'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'list': {

        get: newFunc('list', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['list'];
            if (debug) print('HTMLInputElement.list.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'max': {

        get: newFunc('max', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['max'];
            if (debug) print('HTMLInputElement.max.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('max', 1, function (value) {
            if (debug) print('HTMLInputElement.max.set', value)
            mm.memory.private_data.get(this)['max'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'maxLength': {

        get: newFunc('maxLength', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['maxLength'] || -1;
            if (debug) print('HTMLInputElement.maxLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('maxLength', 1, function (value) {
            if (debug) print('HTMLInputElement.maxLength.set', value)
            mm.memory.private_data.get(this)['maxLength'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'min': {

        get: newFunc('min', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['min'];
            if (debug) print('HTMLInputElement.min.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('min', 1, function (value) {
            if (debug) print('HTMLInputElement.min.set', value)
            mm.memory.private_data.get(this)['min'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'minLength': {

        get: newFunc('minLength', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['minLength'];
            if (debug) print('HTMLInputElement.minLength.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('minLength', 1, function (value) {
            if (debug) print('HTMLInputElement.minLength.set', value)
            mm.memory.private_data.get(this)['minLength'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'multiple': {

        get: newFunc('multiple', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['multiple'];
            if (debug) print('HTMLInputElement.multiple.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('multiple', 1, function (value) {
            if (debug) print('HTMLInputElement.multiple.set', value)
            mm.memory.private_data.get(this)['multiple'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'name': {

        get: newFunc('name', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['name'];
            if (debug) print('HTMLInputElement.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('name', 1, function (value) {
            if (debug) print('HTMLInputElement.name.set', value)
            mm.memory.private_data.get(this)['name'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'pattern': {

        get: newFunc('pattern', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['pattern'];
            if (debug) print('HTMLInputElement.pattern.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('pattern', 1, function (value) {
            if (debug) print('HTMLInputElement.pattern.set', value)
            mm.memory.private_data.get(this)['pattern'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'placeholder': {

        get: newFunc('placeholder', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['placeholder'];
            if (debug) print('HTMLInputElement.placeholder.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('placeholder', 1, function (value) {
            if (debug) print('HTMLInputElement.placeholder.set', value)
            mm.memory.private_data.get(this)['placeholder'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'readOnly': {

        get: newFunc('readOnly', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['readOnly'];
            if (debug) print('HTMLInputElement.readOnly.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('readOnly', 1, function (value) {
            if (debug) print('HTMLInputElement.readOnly.set', value)
            mm.memory.private_data.get(this)['readOnly'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'required': {

        get: newFunc('required', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['required'];
            if (debug) print('HTMLInputElement.required.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('required', 1, function (value) {
            if (debug) print('HTMLInputElement.required.set', value)
            mm.memory.private_data.get(this)['required'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'size': {

        get: newFunc('size', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['size'];
            if (debug) print('HTMLInputElement.size.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('size', 1, function (value) {
            if (debug) print('HTMLInputElement.size.set', value)
            mm.memory.private_data.get(this)['size'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'src': {

        get: newFunc('src', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['src'];
            if (debug) print('HTMLInputElement.src.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('src', 1, function (value) {
            if (debug) print('HTMLInputElement.src.set', value)
            mm.memory.private_data.get(this)['src'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'step': {

        get: newFunc('step', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['step'];
            if (debug) print('HTMLInputElement.step.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('step', 1, function (value) {
            if (debug) print('HTMLInputElement.step.set', value)
            mm.memory.private_data.get(this)['step'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'type': {

        get: newFunc('type', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['type'];
            if (debug) print('HTMLInputElement.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('type', 1, function (value) {
            if (debug) print('HTMLInputElement.type.set', value)
            mm.memory.private_data.get(this)['type'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'defaultValue': {

        get: newFunc('defaultValue', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['defaultValue'];
            if (debug) print('HTMLInputElement.defaultValue.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('defaultValue', 1, function (value) {
            if (debug) print('HTMLInputElement.defaultValue.set', value)
            mm.memory.private_data.get(this)['defaultValue'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'value': {

        get: newFunc('value', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['value'];
            if (debug) print('HTMLInputElement.value.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('value', 1, function (value) {
            if (debug) print('HTMLInputElement.value.set', value)
            mm.memory.private_data.get(this)['value'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'valueAsDate': {

        get: newFunc('valueAsDate', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['valueAsDate'];
            if (debug) print('HTMLInputElement.valueAsDate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('valueAsDate', 1, function (value) {
            if (debug) print('HTMLInputElement.valueAsDate.set', value)
            mm.memory.private_data.get(this)['valueAsDate'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'valueAsNumber': {

        get: newFunc('valueAsNumber', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['valueAsNumber'];
            if (debug) print('HTMLInputElement.valueAsNumber.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('valueAsNumber', 1, function (value) {
            if (debug) print('HTMLInputElement.valueAsNumber.set', value)
            mm.memory.private_data.get(this)['valueAsNumber'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'width': {

        get: newFunc('width', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['width'];
            if (debug) print('HTMLInputElement.width.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('width', 1, function (value) {
            if (debug) print('HTMLInputElement.width.set', value)
            mm.memory.private_data.get(this)['width'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'willValidate': {

        get: newFunc('willValidate', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['willValidate'];
            if (debug) print('HTMLInputElement.willValidate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'validity': {

        get: newFunc('validity', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['validity'];
            if (debug) print('HTMLInputElement.validity.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'validationMessage': {

        get: newFunc('validationMessage', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['validationMessage'];
            if (debug) print('HTMLInputElement.validationMessage.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'labels': {

        get: newFunc('labels', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['labels'];
            if (debug) print('HTMLInputElement.labels.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'selectionStart': {

        get: newFunc('selectionStart', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['selectionStart'];
            if (debug) print('HTMLInputElement.selectionStart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectionStart', 1, function (value) {
            if (debug) print('HTMLInputElement.selectionStart.set', value)
            mm.memory.private_data.get(this)['selectionStart'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'selectionEnd': {

        get: newFunc('selectionEnd', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['selectionEnd'];
            if (debug) print('HTMLInputElement.selectionEnd.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectionEnd', 1, function (value) {
            if (debug) print('HTMLInputElement.selectionEnd.set', value)
            mm.memory.private_data.get(this)['selectionEnd'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'selectionDirection': {

        get: newFunc('selectionDirection', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['selectionDirection'];
            if (debug) print('HTMLInputElement.selectionDirection.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectionDirection', 1, function (value) {
            if (debug) print('HTMLInputElement.selectionDirection.set', value)
            mm.memory.private_data.get(this)['selectionDirection'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'align': {

        get: newFunc('align', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['align'];
            if (debug) print('HTMLInputElement.align.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('align', 1, function (value) {
            if (debug) print('HTMLInputElement.align.set', value)
            mm.memory.private_data.get(this)['align'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'useMap': {

        get: newFunc('useMap', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['useMap'];
            if (debug) print('HTMLInputElement.useMap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('useMap', 1, function (value) {
            if (debug) print('HTMLInputElement.useMap.set', value)
            mm.memory.private_data.get(this)['useMap'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'webkitdirectory': {

        get: newFunc('webkitdirectory', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['webkitdirectory'];
            if (debug) print('HTMLInputElement.webkitdirectory.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('webkitdirectory', 1, function (value) {
            if (debug) print('HTMLInputElement.webkitdirectory.set', value)
            mm.memory.private_data.get(this)['webkitdirectory'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'incremental': {

        get: newFunc('incremental', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['incremental'];
            if (debug) print('HTMLInputElement.incremental.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('incremental', 1, function (value) {
            if (debug) print('HTMLInputElement.incremental.set', value)
            mm.memory.private_data.get(this)['incremental'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'popoverTargetElement': {

        get: newFunc('popoverTargetElement', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['popoverTargetElement'];
            if (debug) print('HTMLInputElement.popoverTargetElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('popoverTargetElement', 1, function (value) {
            if (debug) print('HTMLInputElement.popoverTargetElement.set', value)
            mm.memory.private_data.get(this)['popoverTargetElement'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'popoverTargetAction': {

        get: newFunc('popoverTargetAction', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['popoverTargetAction'];
            if (debug) print('HTMLInputElement.popoverTargetAction.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('popoverTargetAction', 1, function (value) {
            if (debug) print('HTMLInputElement.popoverTargetAction.set', value)
            mm.memory.private_data.get(this)['popoverTargetAction'] = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    'checkValidity': {

        value: newFunc('checkValidity', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.checkValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'reportValidity': {

        value: newFunc('reportValidity', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.reportValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'select': {

        value: newFunc('select', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.select.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'setCustomValidity': {

        value: newFunc('setCustomValidity', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.setCustomValidity.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'setRangeText': {

        value: newFunc('setRangeText', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.setRangeText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'setSelectionRange': {

        value: newFunc('setSelectionRange', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.setSelectionRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'showPicker': {

        value: newFunc('showPicker', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.showPicker.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'stepDown': {

        value: newFunc('stepDown', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.stepDown.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'stepUp': {

        value: newFunc('stepUp', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.stepUp.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    'webkitEntries': {

        get: newFunc('webkitEntries', 10, function () {


            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['webkitEntries'];
            if (debug) print('HTMLInputElement.webkitEntries.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!HTMLInputElement.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLInputElement.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Object.setPrototypeOf(HTMLInputElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLInputElement, HTMLElement);
HTMLInputElement.__proto__ = HTMLElement.prototype

if (proxy) HTMLInputElement = mm.proxy(HTMLInputElement, 'HTMLInputElement')