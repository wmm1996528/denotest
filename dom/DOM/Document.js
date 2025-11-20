class CookieJar{
    constructor(props) {
        this.cookies = {}
    }
    getCookiesSync(){
        return Object.keys(this.cookies).map(e=>e+'='+this.cookies[e]).join('; ')
    }
    setCookieSync(s){
        let i = s.indexOf('=');
        let k = s.slice(0,i);
        let v = s.slice(i+1,)
        this.cookies[k] = v
    }

}


CharacterData = newFunc('CharacterData', 1, function () {
    print('CharacterData.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(CharacterData.prototype, {
    data: {

        get: newFunc('data', 10, function () {
            let res = mm.memory.private_data.get(this).data;
            if (debug) print('CharacterData.data.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('data', 1, function (value) {
            if (debug) print('CharacterData.data.set', value)
            mm.memory.private_data.get(this).data = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('CharacterData.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    previousElementSibling: {

        get: newFunc('previousElementSibling', 10, function () {
            let res = mm.memory.private_data.get(this).previousElementSibling;
            if (debug) print('CharacterData.previousElementSibling.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    nextElementSibling: {

        get: newFunc('nextElementSibling', 10, function () {
            let res = mm.memory.private_data.get(this).nextElementSibling;
            if (debug) print('CharacterData.nextElementSibling.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    after: {

        value: newFunc('after', 10, function () {
            if (debug) print('CharacterData.after.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    appendData: {

        value: newFunc('appendData', 10, function () {
            if (debug) print('CharacterData.appendData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    before: {

        value: newFunc('before', 10, function () {
            if (debug) print('CharacterData.before.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deleteData: {

        value: newFunc('deleteData', 10, function () {
            if (debug) print('CharacterData.deleteData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    insertData: {

        value: newFunc('insertData', 10, function () {
            if (debug) print('CharacterData.insertData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    remove: {

        value: newFunc('remove', 10, function () {
            if (debug) print('CharacterData.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceData: {

        value: newFunc('replaceData', 10, function () {
            if (debug) print('CharacterData.replaceData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    replaceWith: {

        value: newFunc('replaceWith', 10, function () {
            if (debug) print('CharacterData.replaceWith.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    substringData: {

        value: newFunc('substringData', 10, function () {
            if (debug) print('CharacterData.substringData.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CharacterData.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
;Text = newFunc('Text', 1, function Text(v) {
    mm.memory.private_data.set(this, {
        wholeText: v
    })
    this.type = 'text'
})


;delete Text.prototype.constructor;
;Object.defineProperties(Text.prototype, {
    [Symbol.toStringTag]: {
        value: 'Text'
    },

    'wholeText': {

        get: newFunc('wholeText', 10, function () {


            if (!Text.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['wholeText'];
            if (debug) print('Text.wholeText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'assignedSlot': {

        get: newFunc('assignedSlot', 10, function () {


            if (!Text.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['assignedSlot'];
            if (debug) print('Text.assignedSlot.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'splitText': {

        value: newFunc('splitText', 10, function () {

            if (!Text.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Text.splitText.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!Text.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('Text.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Object.setPrototypeOf(Text.prototype, CharacterData)
Text.prototype = CharacterData.prototype;


CSSRule = newFunc('CSSRule', 1, function () {
    print('CSSRule.call');
    mm.memory.private_data.set(this, {
        cssText: `@keyframes unspin { 
  40% { stroke-width: 1px; stroke-linecap: square; stroke-dashoffset: 192px; }
  100% { stroke-width: 0; }
}`
    })
})


Object.defineProperties(CSSRule.prototype, {
    type: {

        get: newFunc('type', 10, function () {
            let res = mm.memory.private_data.get(this).type;
            if (debug) print('CSSRule.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, cssText: {

        get: newFunc('cssText', 10, function () {
            let res = mm.memory.private_data.get(this).cssText;
            if (debug) print('CSSRule.cssText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cssText', 1, function (value) {
            if (debug) print('CSSRule.cssText.set', value)
            mm.memory.private_data.get(this).cssText = value

        }, {set: true}), enumerable: true, configurable: true,


    }, parentRule: {

        get: newFunc('parentRule', 10, function () {
            let res = mm.memory.private_data.get(this).parentRule;
            if (debug) print('CSSRule.parentRule.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, parentStyleSheet: {

        get: newFunc('parentStyleSheet', 10, function () {
            let res = mm.memory.private_data.get(this).parentStyleSheet;
            if (debug) print('CSSRule.parentStyleSheet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, STYLE_RULE: {

        value: 1, writable: false, enumerable: true, configurable: false,


    }, CHARSET_RULE: {

        value: 2, writable: false, enumerable: true, configurable: false,


    }, IMPORT_RULE: {

        value: 3, writable: false, enumerable: true, configurable: false,


    }, MEDIA_RULE: {

        value: 4, writable: false, enumerable: true, configurable: false,


    }, FONT_FACE_RULE: {

        value: 5, writable: false, enumerable: true, configurable: false,


    }, PAGE_RULE: {

        value: 6, writable: false, enumerable: true, configurable: false,


    }, NAMESPACE_RULE: {

        value: 10, writable: false, enumerable: true, configurable: false,


    }, KEYFRAMES_RULE: {

        value: 7, writable: false, enumerable: true, configurable: false,


    }, KEYFRAME_RULE: {

        value: 8, writable: false, enumerable: true, configurable: false,


    }, COUNTER_STYLE_RULE: {

        value: 11, writable: false, enumerable: true, configurable: false,


    }, FONT_FEATURE_VALUES_RULE: {

        value: 14, writable: false, enumerable: true, configurable: false,


    }, SUPPORTS_RULE: {

        value: 12, writable: false, enumerable: true, configurable: false,


    }, MARGIN_RULE: {

        value: 9, writable: false, enumerable: true, configurable: false,


    }, constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('CSSRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
CSSStyleRule = newFunc('CSSStyleRule', 1, function (cssText) {
    print('CSSStyleRule.call');
    mm.memory.private_data.set(this, {
        cssText: cssText
    })
});


;delete CSSStyleRule.prototype.constructor;
;Object.defineProperties(CSSStyleRule.prototype, {
    [Symbol.toStringTag]: {
        value: 'CSSStyleRule'
    },

    'selectorText': {

        get: newFunc('selectorText', 10, function () {


            if (!CSSStyleRule.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['selectorText'];
            if (debug) print('CSSStyleRule.selectorText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('selectorText', 1, function (value) {
            if (debug) print('CSSStyleRule.selectorText.set', value)
            mm.memory.private_data.get(this)['selectorText'] = value

        }, {set: true}), enumerable: true, configurable: true,


    }, 'style': {

        get: newFunc('style', 10, function () {


            if (!CSSStyleRule.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['style'];
            if (debug) print('CSSStyleRule.style.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('style', 1, function (value) {
            if (debug) print('CSSStyleRule.style.set', value)
            mm.memory.private_data.get(this)['style'] = value

        }, {set: true}), enumerable: true, configurable: true,


    }, 'styleMap': {

        get: newFunc('styleMap', 10, function () {


            if (!CSSStyleRule.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['styleMap'];
            if (debug) print('CSSStyleRule.styleMap.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'cssRules': {

        get: newFunc('cssRules', 10, function () {


            if (!CSSStyleRule.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['cssRules'];
            if (debug) print('CSSStyleRule.cssRules.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'deleteRule': {

        value: newFunc('deleteRule', 10, function () {

            if (!CSSStyleRule.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleRule.deleteRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'insertRule': {

        value: newFunc('insertRule', 10, function () {

            if (!CSSStyleRule.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleRule.insertRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!CSSStyleRule.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleRule.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.setPrototypeOf(CSSStyleRule.prototype, CSSRule.prototype)

CSSRuleList = newFunc('CSSRuleList', 1, function CSSRuleList(len, cssText) {
    this._length = len
    mm.memory.private_data.set(this, {
        length: 1
    })
    this[0] = new CSSStyleRule(cssText)
    // this[0] = new CSSStyleRule('.ZJrpT6 { background-image: url("/cdn-cgi/challenge-platform/h/g/cmg/1"); background-position: -1px -1px; background-repeat: no-repeat; }')
})


Object.defineProperties(CSSRuleList.prototype, {
    length: {

        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length;
            print('CSSRuleList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, item: {

        value: newFunc('item', 10, function item() {
            print('CSSRuleList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!CSSRuleList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSRuleList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    }, [Symbol.iterator]: {
        value: function () {
            let index = 0;
            let _self = this;
            return {
                next: function () {
                    if (index >= _self._length) {
                        return {value: undefined, done: true}
                    } else {
                        const result = {value: _self[index], done: false}
                        index++
                        return result
                    }
                }
            }
        }

    }

})

StyleSheet = newFunc('StyleSheet', 1, function () {
    print('StyleSheet.call');
    mm.memory.private_data.set(this, {})
});


;delete StyleSheet.prototype.constructor;
;Object.defineProperties(StyleSheet.prototype, {
    [Symbol.toStringTag]: {
        value: 'StyleSheet'
    }, 'rules': {

        get: newFunc('rules', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['rules'];
            if (debug) print('CSSStyleSheet.rules.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'addRule': {

        value: newFunc('addRule', 10, function () {

            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.addRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'deleteRule': {

        value: newFunc('deleteRule', 10, function () {

            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.deleteRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'insertRule': {

        value: newFunc('insertRule', 10, function () {

            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.insertRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'removeRule': {

        value: newFunc('removeRule', 10, function () {

            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.removeRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'type': {

        get: newFunc('type', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['type'];
            if (debug) print('StyleSheet.type.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'href': {

        get: newFunc('href', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['href'];
            if (debug) print('StyleSheet.href.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'ownerNode': {

        get: newFunc('ownerNode', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ownerNode'];
            if (debug) print('StyleSheet.ownerNode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'parentStyleSheet': {

        get: newFunc('parentStyleSheet', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['parentStyleSheet'];
            if (debug) print('StyleSheet.parentStyleSheet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'title': {

        get: newFunc('title', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['title'];
            if (debug) print('StyleSheet.title.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'media': {

        get: newFunc('media', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['media'];
            if (debug) print('StyleSheet.media.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('media', 1, function (value) {
            if (debug) print('StyleSheet.media.set', value)
            mm.memory.private_data.get(this)['media'] = value

        }, {set: true}), enumerable: true, configurable: true,


    }, 'disabled': {

        get: newFunc('disabled', 10, function () {


            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['disabled'];
            if (debug) print('StyleSheet.disabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('disabled', 1, function (value) {
            if (debug) print('StyleSheet.disabled.set', value)
            mm.memory.private_data.get(this)['disabled'] = value

        }, {set: true}), enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!StyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('StyleSheet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
CSSStyleSheet = newFunc('CSSStyleSheet', 1, function (len, cssRules) {
    print('CSSStyleSheet.call');
    mm.memory.private_data.set(this, {
        length: len,
        cssRules

    })
});


;delete CSSStyleSheet.prototype.constructor;
;Object.defineProperties(CSSStyleSheet.prototype, {
    [Symbol.toStringTag]: {
        value: 'CSSStyleSheet'
    },

    'ownerRule': {

        get: newFunc('ownerRule', 10, function () {


            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['ownerRule'];
            if (debug) print('CSSStyleSheet.ownerRule.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'cssRules': {

        get: newFunc('cssRules', 10, function () {


            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['cssRules'];
            // res = new CSSRuleList();
            if (debug) print('CSSStyleSheet.cssRules.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'rules': {

        get: newFunc('rules', 10, function () {


            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res = mm.memory.private_data.get(this)['rules'];
            if (debug) print('CSSStyleSheet.rules.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'addRule': {

        value: newFunc('addRule', 10, function () {

            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.addRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'deleteRule': {

        value: newFunc('deleteRule', 10, function () {

            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.deleteRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'insertRule': {

        value: newFunc('insertRule', 10, function () {

            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.insertRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'removeRule': {

        value: newFunc('removeRule', 10, function () {

            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.removeRule.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'replace': {

        value: newFunc('replace', 10, function () {

            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.replace.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'replaceSync': {

        value: newFunc('replaceSync', 10, function () {

            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.replaceSync.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!CSSStyleSheet.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('CSSStyleSheet.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.setPrototypeOf(CSSStyleSheet, StyleSheet)
Object.setPrototypeOf(CSSStyleSheet.prototype, StyleSheet.prototype)
StyleSheetList = newFunc('StyleSheetList', 1, function StyleSheetList(len) {
    this._length = len
    mm.memory.private_data.set(this, {
        length: len,

    })
})


;delete StyleSheetList.prototype.constructor;
;

Object.defineProperties(StyleSheetList.prototype, {
    length: {

        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length;
            print('StyleSheetList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, item: {

        value: newFunc('item', 10, function item() {
            print('StyleSheetList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!StyleSheetList.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('StyleSheetList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    }, [Symbol.iterator]: {
        value: function () {
            let index = 0;
            let _self = this;
            return {
                next: function () {
                    if (index >= _self._length) {
                        return {value: undefined, done: true}
                    } else {
                        const result = {value: _self[index], done: false}
                        index++
                        return result
                    }
                }
            }
        }

    }
})


let all_node_cache = new Map();
get_all_node_by_id = function (idx) {
    let all_node = get_all_node();

    if (idx === undefined){
        let result = new HTMLCollection(all_node.length);
        for (let i = 0; i < all_node.length; i++) {
            let element = all_node[i];
            // if (element.type === 'text'){
            //     continue;
            // }
            let ele = createElementByName(all_node.eq(i))
            result[i] = ele;
        }
        return result;
    }else{
        let r = createElementByName(all_node.eq(idx))
        return r;
    }


}

DOMImplementation = newFunc('DOMImplementation', 1, function () {
    print('DOMImplementation.call');
    mm.memory.private_data.set(this, {})
});


;delete DOMImplementation.prototype.constructor;
;Object.defineProperties(DOMImplementation.prototype, {
    [Symbol.toStringTag]: {
        value: 'DOMImplementation'
    },

    'createDocument': {

        value: newFunc('createDocument', 10, function () {

            if (!DOMImplementation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMImplementation.createDocument.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'createDocumentType': {

        value: newFunc('createDocumentType', 10, function () {

            if (!DOMImplementation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMImplementation.createDocumentType.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'createHTMLDocument': {

        value: newFunc('createHTMLDocument', 10, function () {

            if (!DOMImplementation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMImplementation.createHTMLDocument.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'hasFeature': {

        value: newFunc('hasFeature', 10, function () {

            if (!DOMImplementation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMImplementation.hasFeature.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!DOMImplementation.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DOMImplementation.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
DocumentType = newFunc('DocumentType', 1, function () {
    print('DocumentType.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(DocumentType.prototype, {
    'name': {

        get: newFunc('name', 10, function () {
            let res = mm.memory.private_data.get(this)['name'];
            if (debug) print('DocumentType.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'publicId': {

        get: newFunc('publicId', 10, function () {
            let res = mm.memory.private_data.get(this)['publicId'];
            if (debug) print('DocumentType.publicId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'systemId': {

        get: newFunc('systemId', 10, function () {
            let res = mm.memory.private_data.get(this)['systemId'];
            if (debug) print('DocumentType.systemId.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, 'after': {

        value: newFunc('after', 10, function () {
            if (debug) print('DocumentType.after.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'before': {

        value: newFunc('before', 10, function () {
            if (debug) print('DocumentType.before.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'remove': {

        value: newFunc('remove', 10, function () {
            if (debug) print('DocumentType.remove.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'replaceWith': {

        value: newFunc('replaceWith', 10, function () {
            if (debug) print('DocumentType.replaceWith.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {
            if (debug) print('DocumentType.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})
Object.defineProperties(DOMImplementation.prototype, {
    createDocument: {

        value: newFunc('createDocument', 10, function createDocument() {
            print('DOMImplementation.createDocument.call', arguments)
            return document
        }), writable: true, enumerable: true, configurable: true,


    }, createDocumentType: {

        value: newFunc('createDocumentType', 10, function createDocumentType() {
            print('DOMImplementation.createDocumentType.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createHTMLDocument: {

        value: newFunc('createHTMLDocument', 10, function createHTMLDocument() {
            print('DOMImplementation.createHTMLDocument.call', arguments)
            return document
        }), writable: true, enumerable: true, configurable: true,


    }, hasFeature: {

        value: newFunc('hasFeature', 10, function hasFeature() {
            print('DOMImplementation.hasFeature.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})
let tagIds = new Map();
mm.allNodeKeys = [];
mm.allNodeMaps = new WeakMap();
function createElementByName(element) {
    if (element === undefined){
        return element
    }
    // mm.allNodes.set(res, element)
    if (mm.allNodes.has(element)) {

        let res = element;
        print(res,'exist')
        return res;
    }

    if (!element) {
        return null
    }
    // if (element instanceof $){
    //     let res = [];
    //     for (let i = 0; i < element.length; i++) {
    //         res.push(createElementByName(element.get(i)))
    //
    //     }
    //     return res;
    // }
    let tagName = null;
    // debugger;
    print('createElementByName', element[0] ? element[0].name : element.length)
    // print('createElementByName', element)
    if (element.length !== undefined && element.length === 0) {
        // throw TypeError('创建不存在的元素')
        return null
    }
    let eleCreateFunc;
    try {
        if (element && element[0].name) {
            // if (element[0].name === 'body'){
            //     console.log(new Error())
            // }
            eleCreateFunc = mm.elemetnsMap[element[0].name]
            tagName = element[0].name
        } else if (element[0].type === 'text') {
            let res = element
            mm.allNodes.set(element, res)
            return res;
        } else {
            throw TypeError('结构不对')

            eleCreateFunc = mm.elemetnsMap[element[0].name];
            tagName = element[0].name
        }
    } catch (e) {
        debugger;
    }
    if (!eleCreateFunc) {
        print('createElement error')
        if (element[0].type === 'text') {
            return element[0]
        }
        print(`${element[0].name}  未定义`)
        eleCreateFunc = HTMLUnknownElement
        // throw new TypeError(`${element[0].name}  未定义`)
    }
    // debugger;
    let res = new eleCreateFunc(element, tagName);
    let ranId = null;
    if (tagIds.has(tagName)) {
        tagIds.set(tagName, tagIds.get(tagName)+1);
    }else{
        tagIds.set(tagName, 0);
    }
    if (typeof element.attr === 'function'){
        if (element.attr('ranId') !== undefined){
            ranId = element.attr('ranId')
        } else{
            ranId = tagName + tagIds.get(tagName)
            element.attr('ranId', ranId)
        }
    }else{
        let t = element[0].attribs['ranId'];
        if (t !== undefined){
            ranId = t
        }else{
            ranId = tagName + tagIds.get(tagName)
            element[0].attribs['ranId'] = ranId
        }
    }

    res.ranId = ranId
    print('createElementByName.res', res)
    mm.allNodes.set(res, element)
    // mm.allNodes.set(res, element.get(0))
    mm.allNodes.set(element, res)
    mm.allNodeKeys.push(res)
    // mm.allNodeMaps.set(element.get(0), element)
    // mm.allNodes.set(element.get(0), res)

    return res;
}

window['native_createElementNS'] = function createElementNS(namespaceURI, qualifiedName, options) {
    if (!Document.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal constructor");
    }
    ;print('Func', 'Document', 'createElementNS', qualifiedName);

    if (qualifiedName !== undefined) {
        // debugger;
        result = createElementByName($(`<${qualifiedName}></${qualifiedName}>`))
        result.namespaceURI = namespaceURI
    }
    print('Func', 'Document', 'createElementNS.res', namespaceURI, qualifiedName, result);
    return result;
}
window['native_createElement'] = function createElement(tagName) {
    print('Document.createElement', tagName)
    if (tagName instanceof HTMLElement) return tagName

    // if (tagName === 'span') debugger;
    result = new Object();
    if (typeof tagName !== 'string'){
        tagName = tagName+''
    }
    switch (tagName.toLowerCase()) {
        case 'audio':
        case 'video':
            temp = $('<audio></audio>')
            break;
        case 'span':
            temp = $('<span></span>')
            break;
        case 'div':
            temp = $('<div></div>')
            break;
        case 'a':
            temp = $('<a>')
            break;
        case 'script':
            temp = $('<script>')
            break;
        case 'iframe':
            temp = $('<iframe></iframe>');
            break;

        case 'canvas':
            temp = $(`<canvas></canvas>`)
            // debugger;
            // Object.setPrototypeOf(result, HTMLCanvasElement.prototype);
            break;

        case 'img':
            temp = $(`<img>`)
            // Object.setPrototypeOf(result, HTMLCanvasElement.prototype);
            break;

        case 'p':
            temp = $(`<p>`)
            break;

        case 'input':
            temp = $(`<input>`)
            break;

        case 'textarea':
            temp = $(`<textarea>`)
            break;
        case 'h1':
            temp = $(`<h1>`)
            break;
        case 'template':
            temp = $(`<template>`)
            break;
        case 'null':
            temp = $(`<null>`)
            break;

        case "style":
            temp = $(`<style>`)
            break;

        case "form":
            temp = $(`<form>`)
            break;

    }
    temp = createElementByName(temp)
    temp.tagName = tagName.toLowerCase()

    // let tempObj = mm.memory.private_data.get(temp);
    // // temp.id = `${tagName}_${Math.random().toString(16)}`
    // if (tagName.toLowerCase() === 'template'){
    //     temp = new Proxy(temp, {
    //         get(target, p, receiver) {
    //             let res = Reflect.get(target, p, receiver);;
    //             print('createEle.get', p, typeof res);
    //             return res;
    //         }
    //     })
    // }

    // tempObj['tagName'] = tagName.toLowerCase();
    // mm.memory.private_data.set(temp, tempObj)
    return temp;
    // Object.defineProperty(result, "org", {
    //     configurable: true, enumerable: false, writable: true, value: temp
    // })
    return result;
}
Utils.registerNative('createElementNS', 'createElementNS')
Utils.registerNative('createElement', 'createElement')


FeaturePolicy = newFunc('FeaturePolicy', 5, function FeaturePolicy() {
    print('FeaturePolicy.call', arguments)
    mm.memory.private_data.set(this, {
        allowedFeatures: ENV.featurepolicy.allowedfeatures, features: ENV.featurepolicy.features,


    })
})
Object.defineProperties(FeaturePolicy.prototype, {
    allowedFeatures: {

        value: newFunc('allowedFeatures', 10, function allowedFeatures() {
            print('FeaturePolicy.allowedFeatures.call', arguments)
            return mm.memory.private_data.get(this).allowedFeatures

        }), writable: true, enumerable: true, configurable: true,


    }, allowsFeature: {

        value: newFunc('allowsFeature', 1, function allowsFeature(type) {
            if (type === undefined) {
                throw new TypeError('Failed to execute \'allowsFeature\' on \'FeaturePolicy\': 1 argument required, but only 0 present.')
            }

            print('FeaturePolicy.allowsFeature.call', type)
            return ENV.featurepolicy.allowedfeatures.indexOf(type) > -1

        }), writable: true, enumerable: true, configurable: true,


    }, features: {

        value: newFunc('features', 10, function features() {
            print('FeaturePolicy.features.call', arguments)
            return ENV.featurepolicy.features;
        }), writable: true, enumerable: true, configurable: true,


    }, getAllowlistForFeature: {

        value: newFunc('getAllowlistForFeature', 10, function getAllowlistForFeature(v) {
            let result = [];
            debugger;
            switch (v) {
                case 'ch-ua-platform':
                case 'ch-save-data':
                case 'picture-in-picture':
                case 'sync-xhr':
                case 'shared-storage':
                case 'ch-ua':
                    result = ['*'];
                    break
                case 'xr-spatial-tracking':
                case 'window-management':
                case 'bluetooth':
                case 'ch-viewport-height':
                case 'otp-credentials':
                case 'screen-wake-lock':
                case 'local-fonts':
                case 'encrypted-media':
                case 'ch-prefers-reduced-motion':
                case 'clipboard-read':
                case 'accelerometer':
                case 'ch-prefers-reduced-transparency':
                case 'ch-ua-bitness':
                case 'private-state-token-issuance':
                case 'clipboard-write':
                case 'keyboard-map':
                case 'ch-ua-model':
                case 'ch-width':
                case 'publickey-credentials-get':
                case 'ch-ect':
                case 'display-capture':
                case 'ch-ua-full-version-list':
                case 'midi':
                    result = [domUrl];
                    break;
                case 'shared-autofill':
                    result = [];
                    break;

                case 'geolocation':
                    result = [domUrl]
                    break
                case 'storage-access':
                    result = ['*']
                    break
                case 'gamepad':
                    result = ['*']
                    break
                case 'ch-ect':
                    result = [domUrl]
                    break
                case 'midi':
                    result = [domUrl]
                    break
                case 'display-capture':
                    result = [domUrl]
                    break
                case 'usb':
                    result = [domUrl]
                    break
                case 'browsing-topics':
                    result = ['*']
                    break
                case 'local-fonts':
                    result = [domUrl]
                    break
                case 'picture-in-picture':
                    result = ['*']
                    break
                case 'join-ad-interest-group':
                    result = ['*']
                    break
                case 'publickey-credentials-get':
                    result = [domUrl]
                    break
                case 'otp-credentials':
                    result = [domUrl]
                    break
                case 'ch-ua-form-factor':
                    result = [domUrl]
                    break
                case 'encrypted-media':
                    result = [domUrl]
                    break
                case 'ch-save-data':
                    result = ['*']
                    break
                case 'ch-ua-full-version-list':
                    result = [domUrl]
                    break
                case 'ch-ua-wow64':
                    result = [domUrl]
                    break
                case 'shared-storage':
                    result = ['*']
                    break
                case 'ch-downlink':
                    result = [domUrl]
                    break
                case 'ch-prefers-color-scheme':
                    result = [domUrl]
                    break
                case 'sync-xhr':
                    result = ['*']
                    break
                case 'ch-ua-model':
                    result = [domUrl]
                    break
                case 'ch-prefers-reduced-transparency':
                    result = [domUrl]
                    break
                case 'serial':
                    result = [domUrl]
                    break
                case 'camera':
                    result = [domUrl]
                    break
                case 'ch-prefers-reduced-motion':
                    result = [domUrl]
                    break
                case 'private-state-token-issuance':
                    result = [domUrl]
                    break
                case 'bluetooth':
                    result = [domUrl]
                    break
                case 'identity-credentials-get':
                    result = [domUrl]
                    break
                case 'ch-ua-full-version':
                    result = [domUrl]
                    break
                case 'fullscreen':
                    result = [domUrl]
                    break
                case 'ch-dpr':
                    result = [domUrl]
                    break
                case 'unload':
                    result = ['*']
                    break
                case 'keyboard-map':
                    result = [domUrl]
                    break
                case 'ch-ua-platform':
                    result = ['*']
                    break
                case 'shared-storage-select-url':
                    result = ['*']
                    break
                case 'gyroscope':
                    result = [domUrl]
                    break
                case 'interest-cohort':
                    result = ['*']
                    break
                case 'ch-ua-mobile':
                    result = ['*']
                    break
                case 'window-management':
                    result = [domUrl]
                    break
                case 'ch-ua':
                    result = ['*']
                    break
                case 'run-ad-auction':
                    result = ['*']
                    break
                case 'magnetometer':
                    result = [domUrl]
                    break
                case 'accelerometer':
                    result = [domUrl]
                    break
                case 'private-state-token-redemption':
                    result = [domUrl]
                    break
                case 'ch-ua-arch':
                    result = [domUrl]
                    break
                case 'xr-spatial-tracking':
                    result = [domUrl]
                case 'idle-detection':
                    break
                    result = [domUrl]
                    break
                case 'ch-ua-platform-version':
                    result = [domUrl]
                    break
                case 'ch-width':
                    result = [domUrl]
                    break
                case 'clipboard-read':
                    result = [domUrl]
                    break
                case 'ch-viewport-width':
                    result = [domUrl]
                    break
                case 'payment':
                    result = [domUrl]
                    break
                case 'ch-viewport-height':
                    result = [domUrl]
                    break
                case 'ch-rtt':
                    result = [domUrl]
                    break

                case 'autoplay':
                    result = [domUrl]
                    break

                case 'cross-origin-isolated':
                    result = [domUrl]
                    break

                case 'hid':
                    result = [domUrl]
                    break

                case 'ch-ua-bitness':
                    result = [domUrl]
                    break

                case 'screen-wake-lock':
                    result = [domUrl]
                    break

                case 'private-aggregation':
                    result = ['*']
                    break

                case 'clipboard-write':
                    result = [domUrl]
                    break

                case 'attribution-reporting':
                    result = ['*']
                    break

                case 'ch-device-memory':
                    result = [domUrl]
                    break

                case 'microphone':
                    result = [domUrl]
                    break
                case 'ch-ua-form-factors':
                    result = [];
                    break;
                default:
                    print(arguments)
                    // Exit();
                    result = [];
                    break;
            }
            // if (debug)
            print('FeaturePolicy.getAllowlistForFeature.call', arguments, result)
            return result

        }), writable: true, enumerable: true, configurable: true,


    }, 'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!FeaturePolicy.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('FeaturePolicy.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },

})


// ;(function () {
//
// let getReadyState = 0;
//     let sys = [
//         {
//             "href": domUrl + "/css/jquery.smartbanner.css",
//             "title": null,
//             "disable": false,
//             "type": "text/css",
//         }, {
//             "href": domUrl + "/bundles/HomePageBundle?v=LTwLFzM2g-it5AlctPcDTx96g5libs0lubeEBdgHhQ81",
//             "title": null,
//             "disable": false,
//             "type": "text/css"
//         }, {
//             "href": domUrl + "/bundles/MediaQueryBundle?v=jyIvTXkGQwMccaMoRDr5e0mLH-3k1kuAYyYZ0LEBlVo1",
//             "title": null,
//             "disable": false,
//             "type": "text/css"
//         }, {
//             "href": "https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i",
//             "title": null,
//             "disable": false,
//             "type": "text/css"
//         }, {
//             "href": "https://cloud.typography.com/6592754/797686/css/fonts.css",
//             "title": null,
//             "disable": false,
//             "type": "text/css"
//         },
//         //     {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {
//         //     "href": "https://booking.flyfrontier.com/dist/styles.css",
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {
//         //     "href": "https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i",
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {
//         //     "href": domUrl + "/bundles/HeaderV2",
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {
//         //     "href": domUrl + "/bundles/FlightFinder?v=37pGV5134LAO2_oDQyVpdNrJY_VXmO2jSK2JmV07z_k1",
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {
//         //     "href": null,
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {
//         //     "href": "https://cdn.clarip.com/frontier/cookieconsent/assets/css/cookieconsent.min.css",
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }, {
//         //     "href": "https://cdn.clarip.com/frontier/donotsell/assets/css/donotsell-extended.min.css",
//         //     "title": null,
//         //     "disable": false,
//         //     "type": "text/css"
//         // }]
//     ]
//
//     // let styles = new StyleSheetList(sys.length);
//     let styles = new StyleSheetList(3);
//     for (let i = 0; i < sys.length; i++) {
//         sys[i]['cssRules'] = new CSSRuleList(1);
//         if (sys[i].href != null) {
//             styles[i] = new CSSStyleSheet(sys[i])
//         }
//     }
//     // styles.length =  sys.length
//     let $attribute_map = {
//         all: undefined,
//         body: undefined,
//         referrer: "",
//         cookie: "",
//         hidden: false,
//         webkitHidden: true,
//         onfreeze: null,
//         onprerenderingchange: null,
//         cookieJar: new CookieJar(null, {looseMode: true}),
//         featurePolicy: new FeaturePolicy(),
//         inputEncoding: 'UTF-8',
//         xmlEncoding: 'UTF-8',
//         contentType: 'text/html',
//         doctype: new DocumentType(),
//         styleSheets: styles,
//     };
//     Document.prototype = {
//
//         get implementation() {
//             // if (!Document.prototype.isPrototypeOf(this)) {
//             //     throw new TypeError("Illegal constructor");
//             // }
//             // ;
//             let result = new DOMImplementation();
//             print('Get', 'Document', 'implementation', arguments, result);
//             return result;
//         },
//
//         get URL() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = location.href;
//             print('Get', 'Document', 'URL', arguments, result);
//             return result;
//         },
//         get documentURI() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = location.href;
//             print('Get', 'Document', 'documentURI', arguments, result);
//             return result;
//         },
//         get compatMode() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = 'CSS1Compat';
//             print('Get', 'Document', 'compatMode', arguments, result);
//             return result;
//         },
//         get characterSet() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = 'UTF-8';
//             print('Get', 'Document', 'characterSet', arguments, result);
//             return result;
//         },
//         get charset() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = 'UTF-8';
//             print('Get', 'Document', 'charset', arguments, result);
//             return result;
//         },
//         get inputEncoding() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.inputEncoding;
//             print('Get', 'Document', 'inputEncoding', arguments, result);
//             return result;
//         },
//         get contentType() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.contentType;
//             print('Get', 'Document', 'contentType', arguments, result);
//             return result;
//         },
//         get doctype() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.doctype;
//             print('Get', 'Document', 'doctype', arguments, result);
//             return result;
//         },
//         get documentElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let res = mm.memory.private_data.get(this).documentElement
//             if (res === undefined){
//                 res = createElementByName($('html'))
//                 mm.memory.private_data.get(this).documentElement = res;
//                 res = new Proxy(res, {
//                     get(target, p, receiver) {
//                         let res = Reflect.get(target,p, receiver);
//                         console.log('documentElement.get', p, res)
//                         return res
//                     }
//                 })
//             }
//             print('Get', 'Document', 'documentElement', arguments, res.toString());
//
//             return res;
//
//         },
//         get xmlEncoding() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.xmlEncoding;
//             print('Get', 'Document', 'xmlEncoding', arguments, result);
//             return result;
//         },
//
//         get xmlVersion() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.xmlVersion;
//             print('Get', 'Document', 'xmlVersion', arguments, result);
//             return result;
//         },
//         set xmlVersion(value) {
//             print('Set', 'Document', 'xmlVersion', arguments);
//             $attribute_map.xmlVersion = value;
//         },
//         get xmlStandalone() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.xmlStandalone;
//             print('Get', 'Document', 'xmlStandalone', arguments, result);
//             return result;
//         },
//         set xmlStandalone(value) {
//             print('Set', 'Document', 'xmlStandalone', arguments);
//             $attribute_map.xmlStandalone = value;
//         },
//         get domain() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.domain;
//             print('Get', 'Document', 'domain', arguments, result);
//             return result;
//         },
//         set domain(value) {
//             print('Set', 'Document', 'domain', arguments);
//             $attribute_map.domain = value;
//         },
//         get referrer() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.referrer;
//             print('Get', 'Document', 'referrer', arguments, result);
//             return result;
//         },
//         get cookie() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let cookies = $attribute_map.cookieJar.getCookiesSync(this.URL, {http: false});
//             let results = [];
//             cookies.forEach(ck => {
//                 results.push(`${ck.key}=${ck.value}`)
//             })
//             let result = results.join('; ')
//             // debugger;
//             try {
//                 let res = cookie2 === undefined ? result : cookie2
//                 print('Get', 'Document', 'cookie', arguments, res);
//                 return res;
//             } catch (e) {
//                 return result;
//             }
//
//         },
//
//         set cookie(value) {
//             // if (debug)
//             print('Set', 'Document', 'cookie', value);
//             // debugger
//             if (value === null) {
//                 return;
//             }
//             // debugger;
//
//             if (typeof value === "symbol") {
//                 throw new TypeError("Cannot convert a Symbol value to a string")
//             }
//             try {
//                 if (value.includes('expires') || value.includes('SameSite')) {
//                     const S = /(.+?)=(.+?); /.exec(value)
//                     // S.split("; ").forEach(e => {
//                     $attribute_map.cookieJar.setCookieSync(S[1] + '=' + S[2], this.URL, {
//                         http: false,
//                         ignoreError: true
//                     });
//                 } else {
//                     let SS = value.split('; ')
//                     for (let i = 0; i < SS.length; i++) {
//                         let S = SS[i].indexOf('=');
//                         $attribute_map.cookieJar.setCookieSync(SS[i].slice(0, S) + '=' + SS[i].slice(S + 1,), this.URL, {
//                             http: false,
//                             ignoreError: true
//                         });
//                     }
//                 }
//
//             } catch (e) {
//                 print('set cookie error', e)
//                 debugger;
//             }
//             // })
//
//         },
//
//         get lastModified() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.lastModified;
//             print('Get', 'Document', 'lastModified', arguments, result);
//             return result;
//         },
//         get readyState() {
//             // return 'complete'
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             // if (type !== undefined && type === 'ksada'){
//             //     return 'complete'
//             // }
//             let result = "interactive";
//             if (getReadyState > 1) {
//                 result = 'complete'
//             }
//             getReadyState++;
//             print('Get', 'Document', 'readyState', arguments, result);
//             return result;
//         },
//         get title() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             //todo
//             let result = $attribute_map.title;
//             print('Get', 'Document', 'title', arguments, result);
//             return result;
//         },
//         set title(value) {
//             print('Set', 'Document', 'title', arguments);
//             $attribute_map.title = value;
//         },
//         get dir() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.dir;
//             print('Get', 'Document', 'dir', arguments, result);
//             return result;
//         },
//         set dir(value) {
//             print('Set', 'Document', 'dir', arguments);
//             $attribute_map.dir = value;
//         },
//
//         get body() {
//             // debugger;
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             // debugger;
//             if (mm.memory.private_data.get(this).body !== undefined) {
//                 return mm.memory.private_data.get(this).body
//             }
//             if (!$attribute_map.body) {
//                 $attribute_map.body = createElementByName($('body'));
//                 $attribute_map.body.hasAppend = true;
//             }
//             let result = $attribute_map.body
//             // debugger;
//             print('Get', 'Document', 'body');
//             return result;
//         },
//         set body(value) {
//             print('Set', 'Document', 'body', arguments);
//             $attribute_map.body = value;
//         },
//         get head() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             // debugger;
//             let result = createElementByName($('head'));
//             print('Func', 'Document', 'head ', arguments, result.toString());
//             return result;
//         },
//
//         get images() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.getElementsByTagName('img')
//             print('Get', 'Document', 'images', arguments, result);
//             return result;
//         },
//         get embeds() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.getElementsByTagName('embed');
//             print('Get', 'Document', 'embeds', arguments, result);
//             return result;
//         },
//
//
//         get plugins() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.getElementsByTagName('embed');
//             print('Get', 'Document', 'plugins', arguments, result);
//             return result;
//         },
//
//         get links() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.getElementsByTagName('a');
//             print('Get', 'Document', 'links', arguments, result);
//             return result;
//         },
//         get forms() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.getElementsByTagName('form');
//             print('Get', 'Document', 'forms', arguments, result);
//             return result;
//         },
//         get scripts() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = this.getElementsByTagName('script');
//             print('Get', 'Document', 'scripts', arguments, result);
//             return result;
//         },
//
//         get currentScript() {
//             // debugger;
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = null;
//             if (script_name !== undefined) {
//                 result = createElementByName($('<script></script>'));
//                 result.src = script_name
//                 // result.innerText = 'window.KPSDK={};'
//             }
//             if (debug)print('Get', 'Document', 'currentScript', arguments, result);
//             return result;
//         },
//
//         get defaultView() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.defaultView;
//             print('Get', 'Document', 'defaultView', arguments, result);
//             return result;
//         },
//         get designMode() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.designMode;
//             print('Get', 'Document', 'designMode', arguments, result);
//             return result;
//         },
//         set designMode(value) {
//             print('Set', 'Document', 'designMode', arguments);
//             $attribute_map.designMode = value;
//         },
//         onreadystatechange: undefined,
//         get anchors() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             // todo
//             let result = new HTMLCollection(0);
//             result.__proto__ = HTMLCollection.prototype
//             print('Get', 'Document', 'anchors', arguments, result);
//             return result;
//         },
//         get applets() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = new HTMLCollection(0);
//             print('Get', 'Document', 'applets', arguments, result);
//             return result;
//         },
//         get fgColor() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.fgColor;
//             print('Get', 'Document', 'fgColor', arguments, result);
//             return result;
//         },
//         set fgColor(value) {
//             print('Set', 'Document', 'fgColor', arguments);
//             $attribute_map.fgColor = value;
//         },
//         get linkColor() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.linkColor;
//             print('Get', 'Document', 'linkColor', arguments, result);
//             return result;
//         },
//         set linkColor(value) {
//             print('Set', 'Document', 'linkColor', arguments);
//             $attribute_map.linkColor = value;
//         },
//         get vlinkColor() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.vlinkColor;
//             print('Get', 'Document', 'vlinkColor', arguments, result);
//             return result;
//         },
//         set vlinkColor(value) {
//             print('Set', 'Document', 'vlinkColor', arguments);
//             $attribute_map.vlinkColor = value;
//         },
//
//         get alinkColor() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.alinkColor;
//             print('Get', 'Document', 'alinkColor', arguments, result);
//             return result;
//         },
//         set alinkColor(value) {
//             print('Set', 'Document', 'alinkColor', arguments);
//             $attribute_map.alinkColor = value;
//         },
//
//         get bgColor() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.bgColor;
//             print('Get', 'Document', 'bgColor', arguments, result);
//             return result;
//         },
//         set bgColor(value) {
//             print('Set', 'Document', 'bgColor', arguments);
//             $attribute_map.bgColor = value;
//         },
//
//         get all() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.all;
//             if (!result) {
//                 $attribute_map.all = documentAll(get_all_node_by_id);
//                 result = $attribute_map.all
//             }
//             print('Get', 'Document', 'all', arguments, result);
//             return result;
//         },
//
//         get scrollingElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.scrollingElement;
//             print('Get', 'Document', 'scrollingElement', arguments, result);
//             return result;
//         },
//
//         set onpointerlockchange(value) {
//             print('Set', 'Document', 'onpointerlockchange', arguments);
//             $attribute_map.onpointerlockchange = value;
//         },
//         get onpointerlockerror() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerlockerror;
//             print('Get', 'Document', 'onpointerlockerror', arguments, result);
//             return result;
//         },
//         set onpointerlockerror(value) {
//             print('Set', 'Document', 'onpointerlockerror', arguments);
//             $attribute_map.onpointerlockerror = value;
//         },
//
//         get hidden() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = true;
//             // print('Get', 'Document', 'hidden', arguments, result);
//             return result;
//         },
//         get visibilityState() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = "visible";
//             print('Get', 'Document', 'visibilityState', arguments, result);
//             return result;
//         },
//         get wasDiscarded() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = false;
//             print('Get', 'Document', 'wasDiscarded', arguments, result);
//             return result;
//         },
//         get prerendering() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = false;
//             print('Get', 'Document', 'prerendering', arguments, result);
//             return result;
//         },
//         get featurePolicy() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.featurePolicy;
//             print('Get', 'Document', 'featurePolicy', arguments, result);
//             return result;
//         },
//         get webkitVisibilityState() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.webkitVisibilityState;
//             print('Get', 'Document', 'webkitVisibilityState', arguments, result);
//             return result;
//         },
//         get webkitHidden() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = true;
//             print('Get', 'Document', 'webkitHidden', arguments, result);
//             return result;
//         },
//         get onbeforecopy() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onbeforecopy;
//             print('Get', 'Document', 'onbeforecopy', arguments, result);
//             return result;
//         },
//         set onbeforecopy(value) {
//             print('Set', 'Document', 'onbeforecopy', arguments);
//             $attribute_map.onbeforecopy = value;
//         },
//         get onbeforecut() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onbeforecut;
//             print('Get', 'Document', 'onbeforecut', arguments, result);
//             return result;
//         },
//         set onbeforecut(value) {
//             print('Set', 'Document', 'onbeforecut', arguments);
//             $attribute_map.onbeforecut = value;
//         },
//         get onbeforepaste() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onbeforepaste;
//             print('Get', 'Document', 'onbeforepaste', arguments, result);
//             return result;
//         },
//         set onbeforepaste(value) {
//             print('Set', 'Document', 'onbeforepaste', arguments);
//             $attribute_map.onbeforepaste = value;
//         },
//
//         get onfreeze() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onfreeze;
//             print('Get', 'Document', 'onfreeze', arguments, result);
//             return result;
//         },
//         set onfreeze(value) {
//             print('Set', 'Document', 'onfreeze', arguments);
//             $attribute_map.onfreeze = value;
//         },
//
//         get onfreeze() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onfreeze;
//             print('Get', 'Document', 'onfreeze', arguments, result);
//             return result;
//         },
//
//
//         get onprerenderingchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onprerenderingchange;
//             print('Get', 'Document', 'onfreeze', arguments, result);
//             return result;
//         },
//         set onprerenderingchange(value) {
//             print('Set', 'Document', 'onfreeze', arguments);
//             $attribute_map.onprerenderingchange = value;
//         },
//         get onresume() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onresume;
//             print('Get', 'Document', 'onresume', arguments, result);
//             return result;
//         },
//         set onresume(value) {
//             print('Set', 'Document', 'onresume', arguments);
//             $attribute_map.onresume = value;
//         },
//
//         get onsearch() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onsearch;
//             print('Get', 'Document', 'onsearch', arguments, result);
//             return result;
//         },
//         set onsearch(value) {
//             print('Set', 'Document', 'onsearch', arguments);
//             $attribute_map.onsearch = value;
//         },
//         get onvisibilitychange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onvisibilitychange;
//             print('Get', 'Document', 'onvisibilitychange', arguments, result);
//             return result;
//         },
//         set onvisibilitychange(value) {
//             print('Set', 'Document', 'onvisibilitychange', arguments);
//             $attribute_map.onvisibilitychange = value;
//         },
//
//         get fullscreenEnabled() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.fullscreenEnabled;
//             print('Get', 'Document', 'fullscreenEnabled', arguments, result);
//             return result;
//         },
//         set fullscreenEnabled(value) {
//             print('Set', 'Document', 'fullscreenEnabled', arguments);
//             $attribute_map.fullscreenEnabled = value;
//         },
//
//         get fullscreen() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.fullscreen;
//             print('Get', 'Document', 'fullscreen', arguments, result);
//             return result;
//         },
//         set fullscreen(value) {
//             print('Set', 'Document', 'fullscreen', arguments);
//             $attribute_map.fullscreen = value;
//         },
//         get onfullscreenchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onfullscreenchange;
//             print('Get', 'Document', 'onfullscreenchange', arguments, result);
//             return result;
//         },
//         set onfullscreenchange(value) {
//             print('Set', 'Document', 'onfullscreenchange', arguments);
//             $attribute_map.onfullscreenchange = value;
//         },
//         get onfullscreenerror() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onfullscreenerror;
//             print('Get', 'Document', 'onfullscreenerror', arguments, result);
//             return result;
//         },
//         set onfullscreenerror(value) {
//             print('Set', 'Document', 'onfullscreenerror', arguments);
//             $attribute_map.onfullscreenerror = value;
//         },
//         get webkitIsFullScreen() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.webkitIsFullScreen;
//             print('Get', 'Document', 'webkitIsFullScreen', arguments, result);
//             return result;
//         },
//
//         get webkitCurrentFullScreenElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.webkitCurrentFullScreenElement;
//             print('Get', 'Document', 'webkitCurrentFullScreenElement', arguments, result);
//             return result;
//         },
//
//         get webkitFullscreenEnabled() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.webkitFullscreenEnabled;
//             print('Get', 'Document', 'webkitFullscreenEnabled', arguments, result);
//             return result;
//         },
//         get webkitFullscreenElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.webkitFullscreenElement;
//             print('Get', 'Document', 'webkitFullscreenElement', arguments, result);
//             return result;
//         },
//         get onwebkitfullscreenchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwebkitfullscreenchange;
//             print('Get', 'Document', 'onwebkitfullscreenchange', arguments, result);
//             return result;
//         },
//         set onwebkitfullscreenchange(value) {
//             print('Set', 'Document', 'onwebkitfullscreenchange', arguments);
//             $attribute_map.onwebkitfullscreenchange = value;
//         },
//
//         get onwebkitfullscreenerror() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwebkitfullscreenerror;
//             print('Get', 'Document', 'onwebkitfullscreenerror', arguments, result);
//             return result;
//         },
//         set onwebkitfullscreenerror(value) {
//             print('Set', 'Document', 'onwebkitfullscreenerror', arguments);
//             $attribute_map.onwebkitfullscreenerror = value;
//         },
//
//         get rootElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.rootElement;
//             print('Get', 'Document', 'rootElement', arguments, result);
//             return result;
//         },
//         get pictureInPictureEnabled() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.pictureInPictureEnabled;
//             print('Get', 'Document', 'pictureInPictureEnabled', arguments, result);
//             return result;
//         },
//         get onbeforexrselect() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onbeforexrselect;
//             print('Get', 'Document', 'onbeforexrselect', arguments, result);
//             return result;
//         },
//         set onbeforexrselect(value) {
//             print('Set', 'Document', 'onbeforexrselect', arguments);
//             $attribute_map.onbeforexrselect = value;
//         },
//
//         get onabort() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onabort;
//             print('Get', 'Document', 'onabort', arguments, result);
//             return result;
//         },
//         set onabort(value) {
//             print('Set', 'Document', 'onabort', arguments);
//             $attribute_map.onabort = value;
//         },
//         get onbeforeinput() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onbeforeinput;
//             print('Get', 'Document', 'onbeforeinput', arguments, result);
//             return result;
//         },
//         set onbeforeinput(value) {
//             print('Set', 'Document', 'onbeforeinput', arguments);
//             $attribute_map.onbeforeinput = value;
//         },
//         get onbeforetoggle() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onbeforetoggle;
//             print('Get', 'Document', 'onbeforetoggle', arguments, result);
//             return result;
//         },
//         set onbeforetoggle(value) {
//             print('Set', 'Document', 'onbeforetoggle', arguments);
//             $attribute_map.onbeforetoggle = value;
//         },
//         get onblur() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onblur;
//             print('Get', 'Document', 'onblur', arguments, result);
//             return result;
//         },
//         set onblur(value) {
//             print('Set', 'Document', 'onblur', arguments);
//             $attribute_map.onblur = value;
//         },
//         get oncancel() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncancel;
//             print('Get', 'Document', 'oncancel', arguments, result);
//             return result;
//         },
//         set oncancel(value) {
//             print('Set', 'Document', 'oncancel', arguments);
//             $attribute_map.oncancel = value;
//         },
//         get oncanplay() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncanplay;
//             print('Get', 'Document', 'oncanplay', arguments, result);
//             return result;
//         },
//         set oncanplay(value) {
//             print('Set', 'Document', 'oncanplay', arguments);
//             $attribute_map.oncanplay = value;
//         },
//         get oncanplaythrough() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncanplaythrough;
//             print('Get', 'Document', 'oncanplaythrough', arguments, result);
//             return result;
//         },
//         set oncanplaythrough(value) {
//             print('Set', 'Document', 'oncanplaythrough', arguments);
//             $attribute_map.oncanplaythrough = value;
//         },
//         get onchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onchange;
//             print('Get', 'Document', 'onchange', arguments, result);
//             return result;
//         },
//         set onchange(value) {
//             print('Set', 'Document', 'onchange', arguments);
//             $attribute_map.onchange = value;
//         },
//         get onclick() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onclick;
//             print('Get', 'Document', 'onclick', arguments, result);
//             return result;
//         },
//         set onclick(value) {
//             print('Set', 'Document', 'onclick', arguments);
//             $attribute_map.onclick = value;
//         },
//         get onclose() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onclose;
//             print('Get', 'Document', 'onclose', arguments, result);
//             return result;
//         },
//         set onclose(value) {
//             print('Set', 'Document', 'onclose', arguments);
//             $attribute_map.onclose = value;
//         },
//         get oncontextlost() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncontextlost;
//             print('Get', 'Document', 'oncontextlost', arguments, result);
//             return result;
//         },
//         set oncontextlost(value) {
//             print('Set', 'Document', 'oncontextlost', arguments);
//             $attribute_map.oncontextlost = value;
//         },
//         get oncontextmenu() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncontextmenu;
//             print('Get', 'Document', 'oncontextmenu', arguments, result);
//             return result;
//         },
//         set oncontextmenu(value) {
//             print('Set', 'Document', 'oncontextmenu', arguments);
//             $attribute_map.oncontextmenu = value;
//         },
//         get oncontextrestored() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncontextrestored;
//             print('Get', 'Document', 'oncontextrestored', arguments, result);
//             return result;
//         },
//         set oncontextrestored(value) {
//             print('Set', 'Document', 'oncontextrestored', arguments);
//             $attribute_map.oncontextrestored = value;
//         },
//         get oncuechange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncuechange;
//             print('Get', 'Document', 'oncuechange', arguments, result);
//             return result;
//         },
//         set oncuechange(value) {
//             print('Set', 'Document', 'oncuechange', arguments);
//             $attribute_map.oncuechange = value;
//         },
//
//         get ondblclick() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondblclick;
//             print('Get', 'Document', 'ondblclick', arguments, result);
//             return result;
//         },
//         set ondblclick(value) {
//             print('Set', 'Document', 'ondblclick', arguments);
//             $attribute_map.ondblclick = value;
//         },
//         get ondrag() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondrag;
//             print('Get', 'Document', 'ondrag', arguments, result);
//             return result;
//         },
//         set ondrag(value) {
//             print('Set', 'Document', 'ondrag', arguments);
//             $attribute_map.ondrag = value;
//         },
//         get ondragend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondragend;
//             print('Get', 'Document', 'ondragend', arguments, result);
//             return result;
//         },
//         set ondragend(value) {
//             print('Set', 'Document', 'ondragend', arguments);
//             $attribute_map.ondragend = value;
//         },
//         get ondragenter() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondragenter;
//             print('Get', 'Document', 'ondragenter', arguments, result);
//             return result;
//         },
//         set ondragenter(value) {
//             print('Set', 'Document', 'ondragenter', arguments);
//             $attribute_map.ondragenter = value;
//         },
//         get ondragleave() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondragleave;
//             print('Get', 'Document', 'ondragleave', arguments, result);
//             return result;
//         },
//         set ondragleave(value) {
//             print('Set', 'Document', 'ondragleave', arguments);
//             $attribute_map.ondragleave = value;
//         },
//         get ondragover() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondragover;
//             print('Get', 'Document', 'ondragover', arguments, result);
//             return result;
//         },
//         set ondragover(value) {
//             print('Set', 'Document', 'ondragover', arguments);
//             $attribute_map.ondragover = value;
//         },
//         get ondragstart() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondragstart;
//             print('Get', 'Document', 'ondragstart', arguments, result);
//             return result;
//         },
//         set ondragstart(value) {
//             print('Set', 'Document', 'ondragstart', arguments);
//             $attribute_map.ondragstart = value;
//         },
//         get ondrop() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondrop;
//             print('Get', 'Document', 'ondrop', arguments, result);
//             return result;
//         },
//         set ondrop(value) {
//             print('Set', 'Document', 'ondrop', arguments);
//             $attribute_map.ondrop = value;
//         },
//         get ondurationchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ondurationchange;
//             print('Get', 'Document', 'ondurationchange', arguments, result);
//             return result;
//         },
//         set ondurationchange(value) {
//             print('Set', 'Document', 'ondurationchange', arguments);
//             $attribute_map.ondurationchange = value;
//         },
//         get onemptied() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onemptied;
//             print('Get', 'Document', 'onemptied', arguments, result);
//             return result;
//         },
//         set onemptied(value) {
//             print('Set', 'Document', 'onemptied', arguments);
//             $attribute_map.onemptied = value;
//         },
//         get onended() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onended;
//             print('Get', 'Document', 'onended', arguments, result);
//             return result;
//         },
//         set onended(value) {
//             print('Set', 'Document', 'onended', arguments);
//             $attribute_map.onended = value;
//         },
//         get onerror() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onerror;
//             print('Get', 'Document', 'onerror', arguments, result);
//             return result;
//         },
//         set onerror(value) {
//             print('Set', 'Document', 'onerror', arguments);
//             $attribute_map.onerror = value;
//         },
//         get onfocus() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onfocus;
//             print('Get', 'Document', 'onfocus', arguments, result);
//             return result;
//         },
//         set onfocus(value) {
//             print('Set', 'Document', 'onfocus', arguments);
//             $attribute_map.onfocus = value;
//         },
//         get onformdata() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onformdata;
//             print('Get', 'Document', 'onformdata', arguments, result);
//             return result;
//         },
//         set onformdata(value) {
//             print('Set', 'Document', 'onformdata', arguments);
//             $attribute_map.onformdata = value;
//         },
//         get oninput() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oninput;
//             print('Get', 'Document', 'oninput', arguments, result);
//             return result;
//         },
//         set oninput(value) {
//             print('Set', 'Document', 'oninput', arguments);
//             $attribute_map.oninput = value;
//         },
//         get oninvalid() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oninvalid;
//             print('Get', 'Document', 'oninvalid', arguments, result);
//             return result;
//         },
//         set oninvalid(value) {
//             print('Set', 'Document', 'oninvalid', arguments);
//             $attribute_map.oninvalid = value;
//         },
//         get onkeydown() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onkeydown;
//             print('Get', 'Document', 'onkeydown', arguments, result);
//             return result;
//         },
//         set onkeydown(value) {
//             print('Set', 'Document', 'onkeydown', arguments);
//             $attribute_map.onkeydown = value;
//         },
//         get onkeypress() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onkeypress;
//             print('Get', 'Document', 'onkeypress', arguments, result);
//             return result;
//         },
//         set onkeypress(value) {
//             print('Set', 'Document', 'onkeypress', arguments);
//             $attribute_map.onkeypress = value;
//         },
//         get onkeyup() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onkeyup;
//             print('Get', 'Document', 'onkeyup', arguments, result);
//             return result;
//         },
//         set onkeyup(value) {
//             print('Set', 'Document', 'onkeyup', arguments);
//             $attribute_map.onkeyup = value;
//         },
//         get onload() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onload;
//             print('Get', 'Document', 'onload', arguments, result);
//             return result;
//         },
//         set onload(value) {
//             print('Set', 'Document', 'onload', arguments);
//             $attribute_map.onload = value;
//         },
//         get onloadeddata() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onloadeddata;
//             print('Get', 'Document', 'onloadeddata', arguments, result);
//             return result;
//         },
//         set onloadeddata(value) {
//             print('Set', 'Document', 'onloadeddata', arguments);
//             $attribute_map.onloadeddata = value;
//         },
//         get onloadedmetadata() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onloadedmetadata;
//             print('Get', 'Document', 'onloadedmetadata', arguments, result);
//             return result;
//         },
//         set onloadedmetadata(value) {
//             print('Set', 'Document', 'onloadedmetadata', arguments);
//             $attribute_map.onloadedmetadata = value;
//         },
//         get onloadstart() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onloadstart;
//             print('Get', 'Document', 'onloadstart', arguments, result);
//             return result;
//         },
//         set onloadstart(value) {
//             print('Set', 'Document', 'onloadstart', arguments);
//             $attribute_map.onloadstart = value;
//         },
//
//         get onmousedown() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmousedown;
//             print('Get', 'Document', 'onmousedown', arguments, result);
//             return result;
//         },
//         set onmousedown(value) {
//             print('Set', 'Document', 'onmousedown', arguments);
//             $attribute_map.onmousedown = value;
//         },
//         get onmouseenter() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmouseenter;
//             print('Get', 'Document', 'onmouseenter', arguments, result);
//             return result;
//         },
//         set onmouseenter(value) {
//             print('Set', 'Document', 'onmouseenter', arguments);
//             $attribute_map.onmouseenter = value;
//         },
//         get onmouseleave() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmouseleave;
//             print('Get', 'Document', 'onmouseleave', arguments, result);
//             return result;
//         },
//         set onmouseleave(value) {
//             print('Set', 'Document', 'onmouseleave', arguments);
//             $attribute_map.onmouseleave = value;
//         },
//         get onmousemove() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmousemove;
//             print('Get', 'Document', 'onmousemove', arguments, result);
//             return result;
//         },
//         set onmousemove(value) {
//             print('Set', 'Document', 'onmousemove', arguments);
//             $attribute_map.onmousemove = value;
//         },
//         get onmouseout() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmouseout;
//             print('Get', 'Document', 'onmouseout', arguments, result);
//             return result;
//         },
//         set onmouseout(value) {
//             print('Set', 'Document', 'onmouseout', arguments);
//             $attribute_map.onmouseout = value;
//         },
//         get onmouseover() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmouseover;
//             print('Get', 'Document', 'onmouseover', arguments, result);
//             return result;
//         },
//         set onmouseover(value) {
//             print('Set', 'Document', 'onmouseover', arguments);
//             $attribute_map.onmouseover = value;
//         },
//         get onmouseup() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmouseup;
//             print('Get', 'Document', 'onmouseup', arguments, result);
//             return result;
//         },
//         set onmouseup(value) {
//             print('Set', 'Document', 'onmouseup', arguments);
//             $attribute_map.onmouseup = value;
//         },
//         get onmousewheel() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onmousewheel;
//             print('Get', 'Document', 'onmousewheel', arguments, result);
//             return result;
//         },
//         set onmousewheel(value) {
//             print('Set', 'Document', 'onmousewheel', arguments);
//             $attribute_map.onmousewheel = value;
//         },
//
//         get onpause() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpause;
//             print('Get', 'Document', 'onpause', arguments, result);
//             return result;
//         },
//         set onpause(value) {
//             print('Set', 'Document', 'onpause', arguments);
//             $attribute_map.onpause = value;
//         },
//         get onplay() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onplay;
//             print('Get', 'Document', 'onplay', arguments, result);
//             return result;
//         },
//         set onplay(value) {
//             print('Set', 'Document', 'onplay', arguments);
//             $attribute_map.onplay = value;
//         },
//         get onplaying() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onplaying;
//             print('Get', 'Document', 'onplaying', arguments, result);
//             return result;
//         },
//         set onplaying(value) {
//
//
//             print('Set', 'Document', 'onplaying', arguments);
//             $attribute_map.onplaying = value;
//         },
//
//         get onprogress() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onprogress;
//             print('Get', 'Document', 'onprogress', arguments, result);
//             return result;
//         },
//         set onprogress(value) {
//             print('Set', 'Document', 'onprogress', arguments);
//             $attribute_map.onprogress = value;
//         },
//         get onratechange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onratechange;
//             print('Get', 'Document', 'onratechange', arguments, result);
//             return result;
//         },
//         set onratechange(value) {
//             print('Set', 'Document', 'onratechange', arguments);
//             $attribute_map.onratechange = value;
//         },
//         get onreset() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onreset;
//             print('Get', 'Document', 'onreset', arguments, result);
//             return result;
//         },
//         set onreset(value) {
//             print('Set', 'Document', 'onreset', arguments);
//             $attribute_map.onreset = value;
//         },
//         get onresize() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onresize;
//             print('Get', 'Document', 'onresize', arguments, result);
//             return result;
//         },
//         set onresize(value) {
//             print('Set', 'Document', 'onresize', arguments);
//             $attribute_map.onresize = value;
//         },
//
//         get onscroll() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onscroll;
//             print('Get', 'Document', 'onscroll', arguments, result);
//             return result;
//         },
//         set onscroll(value) {
//             print('Set', 'Document', 'onscroll', arguments);
//             $attribute_map.onscroll = value;
//         },
//
//         get onsecuritypolicyviolation() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onsecuritypolicyviolation;
//             print('Get', 'Document', 'onsecuritypolicyviolation', arguments, result);
//             return result;
//         },
//         set onsecuritypolicyviolation(value) {
//             print('Set', 'Document', 'onsecuritypolicyviolation', arguments);
//             $attribute_map.onsecuritypolicyviolation = value;
//         },
//         get onseeked() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onseeked;
//             print('Get', 'Document', 'onseeked', arguments, result);
//             return result;
//         },
//         set onseeked(value) {
//             print('Set', 'Document', 'onseeked', arguments);
//             $attribute_map.onseeked = value;
//         },
//         get onseeking() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onseeking;
//             print('Get', 'Document', 'onseeking', arguments, result);
//             return result;
//         },
//         set onseeking(value) {
//             print('Set', 'Document', 'onseeking', arguments);
//             $attribute_map.onseeking = value;
//         },
//         get onselect() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onselect;
//             print('Get', 'Document', 'onselect', arguments, result);
//             return result;
//         },
//         set onselect(value) {
//             print('Set', 'Document', 'onselect', arguments);
//             $attribute_map.onselect = value;
//         },
//
//
//         get onpointerlockchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerlockchange;
//             print('Get', 'Document', 'onpointerlockchange', arguments, result);
//             return result;
//         },
//
//
//         get onslotchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onslotchange;
//             print('Get', 'Document', 'onslotchange', arguments, result);
//             return result;
//         },
//         set onslotchange(value) {
//             print('Set', 'Document', 'onslotchange', arguments);
//             $attribute_map.onslotchange = value;
//         },
//         get onstalled() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onstalled;
//             print('Get', 'Document', 'onstalled', arguments, result);
//             return result;
//         },
//         set onstalled(value) {
//             print('Set', 'Document', 'onstalled', arguments);
//             $attribute_map.onstalled = value;
//         },
//         get onsubmit() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onsubmit;
//             print('Get', 'Document', 'onsubmit', arguments, result);
//             return result;
//         },
//         set onsubmit(value) {
//             print('Set', 'Document', 'onsubmit', arguments);
//             $attribute_map.onsubmit = value;
//         },
//         get onsuspend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onsuspend;
//             print('Get', 'Document', 'onsuspend', arguments, result);
//             return result;
//         },
//         set onsuspend(value) {
//             print('Set', 'Document', 'onsuspend', arguments);
//             $attribute_map.onsuspend = value;
//         },
//         get ontimeupdate() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ontimeupdate;
//             print('Get', 'Document', 'ontimeupdate', arguments, result);
//             return result;
//         },
//         set ontimeupdate(value) {
//             print('Set', 'Document', 'ontimeupdate', arguments);
//             $attribute_map.ontimeupdate = value;
//         },
//         get ontoggle() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ontoggle;
//             print('Get', 'Document', 'ontoggle', arguments, result);
//             return result;
//         },
//         set ontoggle(value) {
//             print('Set', 'Document', 'ontoggle', arguments);
//             $attribute_map.ontoggle = value;
//         },
//
//
//         get onvolumechange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onvolumechange;
//             print('Get', 'Document', 'onvolumechange', arguments, result);
//             return result;
//         },
//         set onvolumechange(value) {
//             print('Set', 'Document', 'onvolumechange', arguments);
//             $attribute_map.onvolumechange = value;
//         },
//         get onwaiting() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwaiting;
//             print('Get', 'Document', 'onwaiting', arguments, result);
//             return result;
//         },
//         set onwaiting(value) {
//             print('Set', 'Document', 'onwaiting', arguments);
//             $attribute_map.onwaiting = value;
//         },
//         get onwebkitanimationend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwebkitanimationend;
//             print('Get', 'Document', 'onwebkitanimationend', arguments, result);
//             return result;
//         },
//         set onwebkitanimationend(value) {
//             print('Set', 'Document', 'onwebkitanimationend', arguments);
//             $attribute_map.onwebkitanimationend = value;
//         },
//         get onwebkitanimationiteration() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwebkitanimationiteration;
//             print('Get', 'Document', 'onwebkitanimationiteration', arguments, result);
//             return result;
//         },
//         set onwebkitanimationiteration(value) {
//             print('Set', 'Document', 'onwebkitanimationiteration', arguments);
//             $attribute_map.onwebkitanimationiteration = value;
//         },
//         get onwebkitanimationstart() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwebkitanimationstart;
//             print('Get', 'Document', 'onwebkitanimationstart', arguments, result);
//             return result;
//         },
//         set onwebkitanimationstart(value) {
//             print('Set', 'Document', 'onwebkitanimationstart', arguments);
//             $attribute_map.onwebkitanimationstart = value;
//         },
//
//
//         get onwebkittransitionend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwebkittransitionend;
//             print('Get', 'Document', 'onwebkittransitionend', arguments, result);
//             return result;
//         },
//         set onwebkittransitionend(value) {
//             print('Set', 'Document', 'onwebkittransitionend', arguments);
//             $attribute_map.onwebkittransitionend = value;
//         },
//         get onwheel() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onwheel;
//             print('Get', 'Document', 'onwheel', arguments, result);
//             return result;
//         },
//         set onwheel(value) {
//             print('Set', 'Document', 'onwheel', arguments);
//             $attribute_map.onwheel = value;
//         },
//
//         get onauxclick() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onauxclick;
//             print('Get', 'Document', 'onauxclick', arguments, result);
//             return result;
//         },
//         set onauxclick(value) {
//             print('Set', 'Document', 'onauxclick', arguments);
//             $attribute_map.onauxclick = value;
//         },
//         get ongotpointercapture() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ongotpointercapture;
//             print('Get', 'Document', 'ongotpointercapture', arguments, result);
//             return result;
//         },
//         set ongotpointercapture(value) {
//             print('Set', 'Document', 'ongotpointercapture', arguments);
//             $attribute_map.ongotpointercapture = value;
//         },
//
//         get onlostpointercapture() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onlostpointercapture;
//             print('Get', 'Document', 'onlostpointercapture', arguments, result);
//             return result;
//         },
//         set onlostpointercapture(value) {
//             print('Set', 'Document', 'onlostpointercapture', arguments);
//             $attribute_map.onlostpointercapture = value;
//         },
//         get onpointerdown() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerdown;
//             print('Get', 'Document', 'onpointerdown', arguments, result);
//             return result;
//         },
//         set onpointerdown(value) {
//             print('Set', 'Document', 'onpointerdown', arguments);
//             $attribute_map.onpointerdown = value;
//         },
//         get onpointermove() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointermove;
//             print('Get', 'Document', 'onpointermove', arguments, result);
//             return result;
//         },
//         set onpointermove(value) {
//             print('Set', 'Document', 'onpointermove', arguments);
//             $attribute_map.onpointermove = value;
//         },
//         get onpointerrawupdate() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerrawupdate;
//             print('Get', 'Document', 'onpointerrawupdate', arguments, result);
//             return result;
//         },
//         set onpointerrawupdate(value) {
//             print('Set', 'Document', 'onpointerrawupdate', arguments);
//             $attribute_map.onpointerrawupdate = value;
//         },
//         get onpointerup() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerup;
//             print('Get', 'Document', 'onpointerup', arguments, result);
//             return result;
//         },
//         set onpointerup(value) {
//             print('Set', 'Document', 'onpointerup', arguments);
//             $attribute_map.onpointerup = value;
//         },
//         get onpointercancel() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointercancel;
//             print('Get', 'Document', 'onpointercancel', arguments, result);
//             return result;
//         },
//         set onpointercancel(value) {
//             print('Set', 'Document', 'onpointercancel', arguments);
//             $attribute_map.onpointercancel = value;
//         },
//         get onpointerover() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerover;
//             print('Get', 'Document', 'onpointerover', arguments, result);
//             return result;
//         },
//         set onpointerover(value) {
//             print('Set', 'Document', 'onpointerover', arguments);
//             $attribute_map.onpointerover = value;
//         },
//         get onpointerout() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerout;
//             print('Get', 'Document', 'onpointerout', arguments, result);
//             return result;
//         },
//         set onpointerout(value) {
//             print('Set', 'Document', 'onpointerout', arguments);
//             $attribute_map.onpointerout = value;
//         },
//         get onpointerenter() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerenter;
//             print('Get', 'Document', 'onpointerenter', arguments, result);
//             return result;
//         },
//         set onpointerenter(value) {
//             print('Set', 'Document', 'onpointerenter', arguments);
//             $attribute_map.onpointerenter = value;
//         },
//         get onpointerleave() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpointerleave;
//             print('Get', 'Document', 'onpointerleave', arguments, result);
//             return result;
//         },
//         set onpointerleave(value) {
//             print('Set', 'Document', 'onpointerleave', arguments);
//             $attribute_map.onpointerleave = value;
//         },
//         get onselectstart() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onselectstart;
//             print('Get', 'Document', 'onselectstart', arguments, result);
//             return result;
//         },
//         set onselectstart(value) {
//             print('Set', 'Document', 'onselectstart', arguments);
//             $attribute_map.onselectstart = value;
//         },
//
//         get onselectionchange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onselectionchange;
//             print('Get', 'Document', 'onselectionchange', arguments, result);
//             return result;
//         },
//         set onselectionchange(value) {
//             print('Set', 'Document', 'onselectionchange', arguments);
//             $attribute_map.onselectionchange = value;
//         },
//         get onanimationend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onanimationend;
//             print('Get', 'Document', 'onanimationend', arguments, result);
//             return result;
//         },
//         set onanimationend(value) {
//             print('Set', 'Document', 'onanimationend', arguments);
//             $attribute_map.onanimationend = value;
//         },
//         get onanimationiteration() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onanimationiteration;
//             print('Get', 'Document', 'onanimationiteration', arguments, result);
//             return result;
//         },
//         set onanimationiteration(value) {
//             print('Set', 'Document', 'onanimationiteration', arguments);
//             $attribute_map.onanimationiteration = value;
//         },
//         get onanimationstart() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onanimationstart;
//             print('Get', 'Document', 'onanimationstart', arguments, result);
//             return result;
//         },
//         set onanimationstart(value) {
//             print('Set', 'Document', 'onanimationstart', arguments);
//             $attribute_map.onanimationstart = value;
//         },
//         get ontransitionrun() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ontransitionrun;
//             print('Get', 'Document', 'ontransitionrun', arguments, result);
//             return result;
//         },
//         set ontransitionrun(value) {
//             print('Set', 'Document', 'ontransitionrun', arguments);
//             $attribute_map.ontransitionrun = value;
//         },
//         get ontransitionstart() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ontransitionstart;
//             print('Get', 'Document', 'ontransitionstart', arguments, result);
//             return result;
//         },
//         set ontransitionstart(value) {
//             print('Set', 'Document', 'ontransitionstart', arguments);
//             $attribute_map.ontransitionstart = value;
//         },
//         get ontransitionend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ontransitionend;
//             print('Get', 'Document', 'ontransitionend', arguments, result);
//             return result;
//         },
//         set ontransitionend(value) {
//             print('Set', 'Document', 'ontransitionend', arguments);
//             $attribute_map.ontransitionend = value;
//         },
//         get ontransitioncancel() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.ontransitioncancel;
//             print('Get', 'Document', 'ontransitioncancel', arguments, result);
//             return result;
//         },
//         set ontransitioncancel(value) {
//             print('Set', 'Document', 'ontransitioncancel', arguments);
//             $attribute_map.ontransitioncancel = value;
//         },
//         get oncopy() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncopy;
//             print('Get', 'Document', 'oncopy', arguments, result);
//             return result;
//         },
//         set oncopy(value) {
//             print('Set', 'Document', 'oncopy', arguments);
//             $attribute_map.oncopy = value;
//         },
//
//         get oncut() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncut;
//             print('Get', 'Document', 'oncut', arguments, result);
//             return result;
//         },
//         set oncut(value) {
//             print('Set', 'Document', 'oncut', arguments);
//             $attribute_map.oncut = value;
//         },
//
//         get onpaste() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onpaste;
//             print('Get', 'Document', 'onpaste', arguments, result);
//             return result;
//         },
//         set onpaste(value) {
//             print('Set', 'Document', 'onpaste', arguments);
//             $attribute_map.onpaste = value;
//         },
//         get children() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.children;
//             print('Get', 'Document', 'children', arguments, result);
//             return result;
//         },
//         get firstElementChild() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.firstElementChild;
//             print('Get', 'Document', 'firstElementChild', arguments, result);
//             return result;
//         },
//         get lastElementChild() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.lastElementChild;
//             print('Get', 'Document', 'lastElementChild', arguments, result);
//             return result;
//         },
//         get childElementCount() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.childElementCount;
//             print('Get', 'Document', 'childElementCount', arguments, result);
//             return result;
//         },
//         get activeElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.activeElement;
//             print('Get', 'Document', 'activeElement', arguments, result);
//             return result;
//         },
//         get styleSheets() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.styleSheets;
//             print('Get', 'Document', 'styleSheets', arguments, result);
//             return result;
//         },
//         get pointerLockElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.pointerLockElement;
//             print('Get', 'Document', 'pointerLockElement', arguments, result);
//             return result;
//         },
//         get fullscreenElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.fullscreenElement;
//             print('Get', 'Document', 'fullscreenElement', arguments, result);
//             return result;
//         },
//         set fullscreenElement(value) {
//             print('Set', 'Document', 'fullscreenElement', arguments);
//             $attribute_map.fullscreenElement = value;
//         },
//         get adoptedStyleSheets() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.adoptedStyleSheets;
//             print('Get', 'Document', 'adoptedStyleSheets', arguments, result);
//             return result;
//         },
//         set adoptedStyleSheets(value) {
//             print('Set', 'Document', 'adoptedStyleSheets', arguments);
//             $attribute_map.adoptedStyleSheets = value;
//         },
//         get pictureInPictureElement() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.pictureInPictureElement;
//             print('Get', 'Document', 'pictureInPictureElement', arguments, result);
//             return result;
//         },
//         get fonts() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.fonts;
//             print('Get', 'Document', 'fonts', arguments, result);
//             return result;
//         },
//
//         adoptNode() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.adoptNode;
//             print('Func', 'Document', 'adoptNode', arguments, result);
//             return result;
//         },
//
//         append() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.append;
//             print('Func', 'Document', 'append', arguments, result);
//             return result;
//         },
//         captureEvents() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.captureEvents;
//             print('Func', 'Document', 'captureEvents', arguments, result);
//             return result;
//         },
//         caretRangeFromPoint() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.caretRangeFromPoint;
//             print('Func', 'Document', 'caretRangeFromPoint', arguments, result);
//             return result;
//         },
//
//         clear() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.clear;
//             print('Func', 'Document', 'clear', arguments, result);
//             return result;
//         },
//         close() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.close;
//             print('Func', 'Document', 'close', arguments, result);
//             return result;
//         },
//         createAttribute(type) {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = new Attr(type);
//             print('Func', 'Document', 'createAttribute', arguments, result);
//             return result;
//         },
//         createAttributeNS() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createAttributeNS;
//             print('Func', 'Document', 'createAttributeNS', arguments, result);
//             return result;
//         },
//         createCDATASection() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createCDATASection;
//             print('Func', 'Document', 'createCDATASection', arguments, result);
//             return result;
//         },
//         createComment() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createComment;
//             print('Func', 'Document', 'createComment', arguments, result);
//             return result;
//         },
//         createDocumentFragment() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createDocumentFragment;
//             print('Func', 'Document', 'createDocumentFragment', arguments, result);
//             return result;
//         },
//
//         createExpression() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createExpression;
//             print('Func', 'Document', 'createExpression', arguments, result);
//             return result;
//         },
//         createNSResolver() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createNSResolver;
//             print('Func', 'Document', 'createNSResolver', arguments, result);
//             return result;
//         },
//         createNodeIterator() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createNodeIterator;
//             print('Func', 'Document', 'createNodeIterator', arguments, result);
//             return result;
//         },
//         createProcessingInstruction() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createProcessingInstruction;
//             print('Func', 'Document', 'createProcessingInstruction', arguments, result);
//             return result;
//         },
//         createRange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createRange;
//             print('Func', 'Document', 'createRange', arguments, result);
//             return result;
//         },
//         createTextNode() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $('text');
//             print('Func', 'Document', 'createTextNode', arguments, result);
//             return result;
//         },
//         createTreeWalker() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.createTreeWalker;
//             print('Func', 'Document', 'createTreeWalker', arguments, result);
//             return result;
//         },
//
//
//         elementFromPoint() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.elementFromPoint;
//             print('Func', 'Document', 'elementFromPoint', arguments, result);
//             return result;
//         },
//         elementsFromPoint() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.elementsFromPoint;
//             print('Func', 'Document', 'elementsFromPoint', arguments, result);
//             return result;
//         },
//
//         evaluate() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.evaluate;
//             print('Func', 'Document', 'evaluate', arguments, result);
//             return result;
//         },
//         execCommand() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.execCommand;
//             print('Func', 'Document', 'execCommand', arguments, result);
//             return result;
//         },
//         exitFullscreen() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.exitFullscreen;
//             print('Func', 'Document', 'exitFullscreen', arguments, result);
//             return result;
//         },
//         exitPictureInPicture() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.exitPictureInPicture;
//             print('Func', 'Document', 'exitPictureInPicture', arguments, result);
//             return result;
//         },
//         exitPointerLock() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.exitPointerLock;
//             print('Func', 'Document', 'exitPointerLock', arguments, result);
//             return result;
//         },
//         getSelection() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.getSelection;
//             print('Func', 'Document', 'getSelection', arguments, result);
//             return result;
//         },
//
//         hasFocus() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.hasFocus || true;
//             print('Func', 'Document', 'hasFocus', arguments, result);
//             return result;
//         },
//         importNode() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.importNode;
//             print('Func', 'Document', 'importNode', arguments, result);
//             return result;
//         },
//         open() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.open;
//             print('Func', 'Document', 'open', arguments, result);
//             return result;
//         },
//         prepend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.prepend;
//             print('Func', 'Document', 'prepend', arguments, result);
//             return result;
//         },
//         queryCommandEnabled() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.queryCommandEnabled;
//             print('Func', 'Document', 'queryCommandEnabled', arguments, result);
//             return result;
//         },
//         queryCommandIndeterm() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.queryCommandIndeterm;
//             print('Func', 'Document', 'queryCommandIndeterm', arguments, result);
//             return result;
//         },
//         queryCommandState() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.queryCommandState;
//             print('Func', 'Document', 'queryCommandState', arguments, result);
//             return result;
//         },
//         queryCommandSupported() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.queryCommandSupported;
//             print('Func', 'Document', 'queryCommandSupported', arguments, result);
//             return result;
//         },
//         queryCommandValue() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.queryCommandValue;
//             print('Func', 'Document', 'queryCommandValue', arguments, result);
//             return result;
//         },
//         querySelector(args) {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = Element.prototype.querySelector(args);
//             print('Func', 'Document', 'querySelector', arguments, result);
//             return result;
//         },
//         querySelectorAll(arg) {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let elements = $(arg);
//             let result = new HTMLCollection(elements.length);
//             for (let i = 0; i < elements.length; i++) {
//                 let element = elements[i];
//                 let ele = createElementByName(element)
//                 
//                 result[i] = ele;
//             }
//             if (debug) print('Func', 'Document', 'querySelectorAll', arguments, result);
//             // return mm.proxy(result, 'queryAll');
//             return result
//         },
//
//
//         releaseEvents() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.releaseEvents;
//             print('Func', 'Document', 'releaseEvents', arguments, result);
//             return result;
//         },
//         replaceChildren() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.replaceChildren;
//             print('Func', 'Document', 'replaceChildren', arguments, result);
//             return result;
//         },
//         startViewTransition() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.startViewTransition;
//             print('Func', 'Document', 'startViewTransition', arguments, result);
//             //todo
//             //debugger
//         },
//         webkitCancelFullScreen() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.webkitCancelFullScreen;
//             print('Func', 'Document', 'webkitCancelFullScreen', arguments, result);
//             return result;
//         },
//         webkitExitFullscreen() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.webkitExitFullscreen;
//             print('Func', 'Document', 'webkitExitFullscreen', arguments, result);
//             return result;
//         },
//         write() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             //todo
//             let result = $attribute_map.write;
//             print('Func', 'Document', 'write', arguments, result);
//             //debugger
//             return result;
//         },
//         writeln() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.writeln;
//             print('Func', 'Document', 'writeln', arguments, result);
//             return result;
//         },
//         //////
//
//         // constructor: Object.constructor,
//         get fragmentDirective() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.fragmentDirective;
//             print('Get', 'Document', 'fragmentDirective', arguments, result);
//             return result;
//         },
//         onbeforematch() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.writeln;
//             print('Func', 'Document', 'onbeforematch', arguments, result);
//         },
//         browsingTopics() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.writeln;
//             print('Func', 'Document', 'browsingTopics', arguments, result);
//         },
//         hasPrivateToken() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.writeln;
//             print('Func', 'Document', 'hasPrivateToken', arguments, result);
//         },
//         hasRedemptionRecord() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.writeln;
//             print('Func', 'Document', 'hasRedemptionRecord', arguments, result);
//         },
//         requestStorageAccess() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             print('Func', 'Document', 'requestStorageAccess', arguments, result);
//
//             return {
//                 then: function (resolve, reject) {
//                     resolve(true)
//                 }
//             }
//         },
//
//
//         get timeline() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.timeline;
//             print('Get', 'Document', 'timeline', arguments, result);
//             return result;
//         },
//
//
//         get oncontentvisibilityautostatechange() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.oncontentvisibilityautostatechange;
//             print('Get', 'Document', 'oncontentvisibilityautostatechange', arguments, result);
//             return result;
//         },
//         set oncontentvisibilityautostatechange(value) {
//             print('Set', 'Document', 'oncontentvisibilityautostatechange', arguments);
//             $attribute_map.oncontentvisibilityautostatechange = value;
//         },
//         get onscrollend() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.onscrollend;
//             print('Get', 'Document', 'onscrollend', arguments, result);
//             return result;
//         },
//         set onscrollend(aa) {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             $attribute_map.onscrollend = aa;
//             print('Set', 'Document', 'onscrollend', arguments, result);
//         },
//         getAnimations() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.writeln;
//             print('Func', 'Document', 'requestStorageAccess', arguments, result);
//         },
//
//
//         hasStorageAccess() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             print('Func', 'Document', 'hasStorageAccess', arguments, result);
//             return {
//                 then: function (resolve, reject) {
//                     resolve(true)
//                 }
//             }
//             // let result = ret;
//         },
//         requestStorageAccessFor() {
//             if (!Document.prototype.isPrototypeOf(this)) {
//                 throw new TypeError("Illegal constructor");
//             }
//             ;
//             let result = $attribute_map.writeln;
//             print('Func', 'Document', 'requestStorageAccess', arguments, result);
//         },
//
//     }
//
//     const $safe_get_attribute = [
//         'URL', 'activeElement', 'adoptedStyleSheets', 'alinkColor', 'all', 'anchors', 'applets', 'bgColor', 'body', 'characterSet',
//         'charset', 'childElementCount', 'children', 'compatMode', 'contentType', 'cookie', 'currentScript', 'defaultView', 'designMode', 'dir', 'doctype',
//         'documentElement', 'documentURI', 'domain', 'embeds', 'featurePolicy', 'fgColor', 'firstElementChild', 'fonts', 'forms', 'fragmentDirective', 'fullscreen',
//         'fullscreenElement', 'fullscreenEnabled', 'head', 'hidden', 'images', 'implementation', 'inputEncoding', 'lastElementChild', 'lastModified', 'linkColor',
//         'links', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforecopy', 'onbeforecut', 'onbeforepaste',
//         'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange',
//         'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied',
//         'onended', 'onerror', 'onfocus', 'onformdata', 'onfreeze', 'onfullscreenchange', 'onfullscreenerror', 'ongotpointercapture', 'oninput', 'oninvalid',
//         'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove',
//         'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown',
//         'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate',
//         'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onresume', 'onscroll', 'onsearch', 'onsecuritypolicyviolation', 'onseeked',
//         'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle',
//         'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart', 'onvisibilitychange', 'onvolumechange', 'onwaiting', 'onwebkitanimationend',
//         'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwebkittransitionend', 'onwheel',
//         'pictureInPictureElement', 'pictureInPictureEnabled', 'plugins', 'pointerLockElement', 'readyState', 'referrer', 'rootElement', 'scripts',
//         'scrollingElement', 'styleSheets', 'timeline', 'title', 'visibilityState', 'vlinkColor','prerendering', 'wasDiscarded', 'webkitCurrentFullScreenElement',
//         'webkitFullscreenElement', 'webkitFullscreenEnabled', 'webkitHidden', 'webkitIsFullScreen', 'webkitVisibilityState', 'xmlEncoding', 'xmlStandalone',
//         'onscrollend', 'oncontentvisibilityautostatechange',
//         'xmlVersion'
//     ];
//     const $safe_set_attribute = [
//         'adoptedStyleSheets', 'alinkColor', 'bgColor', 'body', 'cookie', 'designMode', 'dir', 'domain', 'fgColor', 'fullscreen', 'fullscreenElement',
//         'fullscreenEnabled', 'linkColor', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforecopy',
//         'onbeforecut', 'onbeforepaste', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose',
//         'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart',
//         'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onfocus', 'onformdata', 'onfreeze', 'onfullscreenchange', 'onfullscreenerror', 'onscrollend', 'oncontentvisibilityautostatechange',
//         'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart',
//         'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay',
//         'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave', 'onpointerlockchange', 'onpointerlockerror', 'onpointermove',
//         'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize', 'onresume', 'onscroll',
//         'onsearch', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled',
//         'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart',
//         'onvisibilitychange', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart',
//         'onwebkitfullscreenchange', 'onwebkitfullscreenerror', 'onwebkittransitionend', 'onwheel', 'title', 'vlinkColor', 'xmlStandalone', 'xmlVersion'
//     ];
//     const $safe_func_attribute = [
//         'adoptNode', 'append', 'captureEvents', 'caretRangeFromPoint', 'clear', 'close', 'createAttribute', 'createAttributeNS', 'createCDATASection',
//         'createComment', 'createDocumentFragment', 'createExpression', 'createNSResolver',
//         'createNodeIterator', 'createProcessingInstruction', 'createRange', 'createTextNode', 'createTreeWalker', 'elementFromPoint', 'elementsFromPoint',
//         'evaluate', 'execCommand', 'exitFullscreen', 'exitPictureInPicture', 'exitPointerLock', 'getAnimations', 'getSelection', 'hasFocus', 'importNode', 'open', 'prepend', 'queryCommandEnabled',
//         'queryCommandIndeterm', 'queryCommandState', 'queryCommandSupported', 'queryCommandValue', 'querySelector', 'querySelectorAll', 'releaseEvents',
//         'replaceChildren', 'startViewTransition', 'webkitCancelFullScreen', 'webkitExitFullscreen', 'write', 'writeln', 'hasStorageAccess',
//         'requestStorageAccessFor'
//     ];
//
//     mm.safe_Objattribute(Document, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
//
//     Object.defineProperties(Document.prototype, {
//         createEvent: {
//             value: newFunc('createEvent', 1, function createEvent(type) {
//                 if (!Document.prototype.isPrototypeOf(this)) {
//                     throw new TypeError("Illegal constructor");
//                 }
//                 ;
//                 print('document.createEvent', type)
//                 let ele;
//                 switch (type.toLowerCase()) {
//                     case 'event':
//                         ele = new Event();
//                         debugger;
//                         break;
//                     case 'events':
//                         ele = new Event();
//                         break;
//                     case 'uievent':
//                         ele = new UIEvent();
//                         break;
//                     case 'uievents':
//                         ele = new UIEvent();
//                         break;
//                     case 'mouseevent':
//                         ele = new MouseEvent();
//                         break;
//                     case 'mouseevents':
//                         ele = new MouseEvent();
//                         break;
//                     case 'mutationevent':
//                         ele = new MutationEvent();
//                         break;
//                     case 'mutationevents':
//                         ele = new MutationEvent();
//                         break;
//                     case 'textevent':
//                         ele = new TextEvent();
//                         break;
//                     case 'textevents':
//                         ele = new TextEvent();
//                         break;
//                     case 'keyboardevent':
//                         ele = new KeyboardEvent();
//                         break;
//                     case 'touchevent':
//                         throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${type}') is invalid.`)
//                         ele = new TouchEvent();
//
//                     case 'customevent':
//                         ele = new CustomEvent();
//                         break;
//
//                     default:
//                         throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${type}') is invalid.`)
//                 }
//                 ele.isTrusted = false;
//                 return ele;
//             })
//         },
//
//
//         getElementById: {
//             value: newFunc('getElementById', 1, function getElementById(id) {
//                                 print('Doocument.getElementById', id)
//
//                 let element = $(`#${id}`);
//                 if (!element) return null;
//                 let result = createElementByName(element)
//                 if (result !== null) {
//
//                 }
//                 if (id === 'yDmH0d'){
//                     element = $('<body id="yDmH0d" jscontroller="pjICDe" jsaction="rcuQ6b:npT2md; click:FAbpgf; auxclick:FAbpgf;UjQMac:.CLIENT;c0v8t:.CLIENT;keydown:.CLIENT;keyup:.CLIENT;keypress:.CLIENT;qako4e:.CLIENT;TSpWaf:.CLIENT;nHjqDd:.CLIENT;LhiQec:.CLIENT;mousedown:.CLIENT;AHmuwe:.CLIENT;GvneHb:.CLIENT" class="tQj5Y ghyPEc IqBfM ecJEib b30Rkd CQYfx LcUz9d EIlDfe cjGgHb d8Etdd" data-has-scrollable-ogb="false" data-show-ogb="true" data-show-second-row="false" data-show-intent-nav="false" data-theme="" style="min-height: 968px;" data-is-scrolled="false"></body>>')
//                     element.name = 'body'
//                     print(element)
//                     result = createElementByName(element)
//                 }
//                 print('Doocument.getElementById', id, result)
//
//                 return result
//             }), enumerable: true, configurable: true, writable: true,
//         },
//         getElementsByName: {
//             value: newFunc('getElementsByName', 1, function getElementsByName(name) {
//
//                 let elements = $(`[name=${name}]`);
//
//                 let result = new HTMLCollection(elements.length);
//                 for (let i = 0; i < elements.length; i++) {
//                     let element = elements[i];
//                     let ele = createElementByName(element)
//                     
//                     result[i] = ele;
//                 }
//                 print('Doocument.getElementsByName', name, result)
//
//                 return result
//             }),
//         },
//
//
//         createElement: {
//             value: window['createElement'], enumerable: true, configurable: true, writable: true,
//         },
//
//
//         createElementNS:
//             {
//                 value: window['createElementNS'], enumerable: true, configurable: true,
//             }
//         ,
//         getElementsByTagName: {
//             value: newFunc('getElementsByTagName', 1, function getElementsByTagName(tagName) {
//                 print('Doocument.getElementsByTagName', tagName)
//
//                 let elements = $(tagName);
//
//                 let result = new HTMLCollection(elements.length);
//                 for (let i = 0; i < elements.length; i++) {
//                     let element = elements[i];
//                     let ele = createElementByName(element)
//                     
//                     result[i] = ele;
//                 }
//                 return result
//
//             }), enumerable: true, configurable: true, writable: true,
//         },
//         getElementsByClassName: {
//             value: newFunc('getElementsByClassName', 1, function getElementsByClassName(className) {
//                 print('Doocument.getElementsByClassName', className)
//
//                 let elements = $(`.${className}`);
//
//                 let result = new HTMLCollection(elements.length);
//                 for (let i = 0; i < elements.length; i++) {
//                     let element = elements[i];
//                     let ele = createElementByName(element)
//                     
//                     result[i] = ele;
//                 }
//                 return result
//             }), enumerable: true, configurable: true, writable: true,
//         },
//
//
//     })
//
//
//     // Object.defineProperties(Document.prototype, {
//     //     [Symbol.unscopables]: {
//     //         value: {
//     //             after: true,
//     //             append: true,
//     //             before: true,
//     //             prepend: true,
//     //             remove: true,
//     //             replaceChildren: true,
//     //             replaceWith: true,
//     //         },
//     //         configurable: true, enumerable: false, writable: false
//     //     }
//     // });
//
//
// }())


let getReadyState = 0;
let sys = [{
    "href": domUrl + "/css/jquery.smartbanner.css", "title": null, "disable": false, "type": "text/css",
}, {
    "href": domUrl + "/bundles/HomePageBundle?v=LTwLFzM2g-it5AlctPcDTx96g5libs0lubeEBdgHhQ81",
    "title": null,
    "disable": false,
    "type": "text/css"
}, {
    "href": domUrl + "/bundles/MediaQueryBundle?v=jyIvTXkGQwMccaMoRDr5e0mLH-3k1kuAYyYZ0LEBlVo1",
    "title": null,
    "disable": false,
    "type": "text/css"
}, {
    "href": "https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i",
    "title": null,
    "disable": false,
    "type": "text/css"
}, {
    "href": "https://cloud.typography.com/6592754/797686/css/fonts.css",
    "title": null,
    "disable": false,
    "type": "text/css"
}, //     {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {"href": null, "title": null, "disable": false, "type": "text/css"}, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {
    //     "href": "https://booking.flyfrontier.com/dist/styles.css",
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {
    //     "href": "https://fonts.googleapis.com/css?family=Montserrat:400,400i,500,500i,600,600i,700,700i",
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {
    //     "href": domUrl + "/bundles/HeaderV2",
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {
    //     "href": domUrl + "/bundles/FlightFinder?v=37pGV5134LAO2_oDQyVpdNrJY_VXmO2jSK2JmV07z_k1",
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {
    //     "href": null,
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {
    //     "href": "https://cdn.clarip.com/frontier/cookieconsent/assets/css/cookieconsent.min.css",
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }, {
    //     "href": "https://cdn.clarip.com/frontier/donotsell/assets/css/donotsell-extended.min.css",
    //     "title": null,
    //     "disable": false,
    //     "type": "text/css"
    // }]
]

// let styles = new StyleSheetList(sys.length);
let styles = new StyleSheetList(2);
styles[0] = new CSSStyleSheet(1, new CSSRuleList(1, `@keyframes unspin { 
  40% { stroke-width: 1px; stroke-linecap: square; stroke-dashoffset: 192px; }
  100% { stroke-width: 0; }
}`))
styles[1] = new CSSStyleSheet(1, new CSSRuleList(1, `.MlZlb0 { background-image: url("/cdn-cgi/challenge-platform/h/g/cmg/1"); background-position: -1px -1px; background-repeat: no-repeat; }`))
// styles.length =  sys.length
Document = newFunc('Document', 1, function Document() {
    mm.memory.private_data.set(this, {
        all: undefined,
        body: undefined,
        referrer: "",
        cookie: "",
        hidden: false,
        webkitHidden: true,
        onfreeze: null,
        onprerenderingchange: null,
        cookieJar: new CookieJar(null, {looseMode: true}),
        featurePolicy: new FeaturePolicy(),
        inputEncoding: 'UTF-8',
        xmlEncoding: 'UTF-8',
        contentType: 'text/html',
        doctype: new DocumentType(),
        styleSheets: styles,
        'title': 'Checking your Browser',
    })
})


Object.defineProperties(Document.prototype, {
    implementation: {

        get: newFunc('implementation', 10, function implementation() {

            let res = mm.memory.private_data.get(this).implementation;
            if (res === undefined) {
                res = new DOMImplementation();
                mm.memory.private_data.get(this).implementation = res;

            }
            if (debug) print('Document.implementation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, URL: {

        get: newFunc('URL', 10, function URL() {
            let res = mm.memory.private_data.get(this).URL;
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;res = location.href;
            if (debug) print('Document.URL.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, documentURI: {

        get: newFunc('documentURI', 10, function documentURI() {
            let res = mm.memory.private_data.get(this).documentURI;
            res = location.href;

            if (debug) print('Document.documentURI.get', res)
            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, compatMode: {

        get: newFunc('compatMode', 10, function compatMode() {
            let res = mm.memory.private_data.get(this).compatMode;
            res = 'CSS1Compat';

            if (debug) print('Document.compatMode.get', res)
            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, characterSet: {

        get: newFunc('characterSet', 10, function characterSet() {
            let res = mm.memory.private_data.get(this).characterSet;
            if (debug) print('Document.characterSet.get', res)
            res = 'UTF-8';
            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, charset: {

        get: newFunc('charset', 10, function charset() {
            let res = mm.memory.private_data.get(this).charset;
            if (debug) print('Document.charset.get', res)
            res = 'UTF-8';
            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, inputEncoding: {

        get: newFunc('inputEncoding', 10, function inputEncoding() {
            let res = mm.memory.private_data.get(this).inputEncoding;
            if (debug) print('Document.inputEncoding.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, contentType: {

        get: newFunc('contentType', 10, function contentType() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let res = mm.memory.private_data.get(this).contentType;
            if (debug) print('Document.contentType.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, doctype: {

        get: newFunc('doctype', 10, function doctype() {
            let res = mm.memory.private_data.get(this).doctype;
            if (debug) print('Document.doctype.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, documentElement: {

        get: newFunc('documentElement', 10, function documentElement() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;let res = mm.memory.private_data.get(this).documentElement
            if (res === undefined) {
                res = createElementByName($('html'))
                print('documentElement', res === null, $('html'))
                mm.memory.private_data.get(this).documentElement = res;
                // res = new Proxy(res, {
                //     get(target, p, receiver) {
                //         let res = Reflect.get(target, p, receiver);
                //         print('documentElement.get', p, res)
                //         return res
                //     }
                // })
            }
            if (debug) print('Document.documentElement.get', res.toString())

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, xmlEncoding: {

        get: newFunc('xmlEncoding', 10, function xmlEncoding() {
            let res = mm.memory.private_data.get(this).xmlEncoding;
            if (debug) print('Document.xmlEncoding.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, xmlVersion: {

        get: newFunc('xmlVersion', 10, function xmlVersion() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let res = mm.memory.private_data.get(this).xmlVersion;
            if (debug) print('Document.xmlVersion.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,



        set: newFunc('xmlVersion', 1, function xmlVersion(value) {

            if (debug) print('Document.xmlVersion.set', value)
            mm.memory.private_data.get(this).xmlVersion = value

        }, {set: true}), enumerable: true, configurable: true,


    }, xmlStandalone: {

        get: newFunc('xmlStandalone', 10, function xmlStandalone() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let res = mm.memory.private_data.get(this).xmlStandalone;
            if (debug) print('Document.xmlStandalone.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('xmlStandalone', 1, function xmlStandalone(value) {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            if (debug) print('Document.xmlStandalone.set', value)
            mm.memory.private_data.get(this).xmlStandalone = value

        }, {set: true}), enumerable: true, configurable: true,


    }, domain: {

        get: newFunc('domain', 10, function domain() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let res = mm.memory.private_data.get(this).domain;
            if (debug) print('Document.domain.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('domain', 1, function domain(value) {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            if (debug) print('Document.domain.set', value)
            mm.memory.private_data.get(this).domain = value

        }, {set: true}), enumerable: true, configurable: true,


    }, referrer: {

        get: newFunc('referrer', 10, function referrer() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal invocation");
            }
            ;
            let res = mm.memory.private_data.get(this).referrer;
            if (debug) print('Document.referrer.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, cookie: {

        get: newFunc('cookie', 10, function cookie() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;let cookies = mm.memory.private_data.get(this).cookieJar.getCookiesSync(this.URL, {http: false});
            let results = [];
            cookies && cookies.forEach(ck => {
                results.push(`${ck.key}=${ck.value}`)
            })
            let result = results.join('; ')
            // debugger;
            try {
                let res = cookie2 === undefined ? result : cookie2
                if (debug) print('Document.cookie.get', res)
                return res;
            } catch (e) {
                return result;
            }

        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cookie', 1, function cookie(value) {
            if (value === null) {
                return;
            }
            // debugger;

            if (typeof value === "symbol") {
                throw new TypeError("Cannot convert a Symbol value to a string")
            }
            try {
                if (value.includes('expires') || value.includes('SameSite')) {
                    const S = /(.+?)=(.+?); /.exec(value)
                    // S.split("; ").forEach(e => {
                    mm.memory.private_data.get(this).cookieJar.setCookieSync(S[1] + '=' + S[2], this.URL, {
                        http: false, ignoreError: true
                    });
                } else {
                    let SS = value.split('; ')
                    for (let i = 0; i < SS.length; i++) {
                        let S = SS[i].indexOf('=');
                        mm.memory.private_data.get(this).cookieJar.setCookieSync(SS[i].slice(0, S) + '=' + SS[i].slice(S + 1,), this.URL, {
                            http: false, ignoreError: true
                        });
                    }
                }

            } catch (e) {
                print('set cookie error', e)
                debugger;
            }

        }, {set: true}), enumerable: true, configurable: true,


    }, lastModified: {

        get: newFunc('lastModified', 10, function lastModified() {
            let res = mm.memory.private_data.get(this).lastModified;
            if (debug) print('Document.lastModified.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, readyState: {

        get: newFunc('readyState', 10, function readyState() {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            // if (type !== undefined && type === 'ksada'){
            //     return 'complete'
            // }
            let result = "interactive";
            result = "loading";
            // if (getReadyState > 1) {
                result = 'complete'
            // }
            // getReadyState++;
            if (debug) print('Document.readyState.get', result)

            return result
        }, {get: true}), enumerable: true, configurable: true,

    }, title: {

        get: newFunc('title', 10, function title() {
            let res = mm.memory.private_data.get(this).title || 'Checking your Browser...';
            if (debug) print('Document.title.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('title', 1, function title(value) {
            if (debug) print('Document.title.set', value)
            mm.memory.private_data.get(this).title = value

        }, {set: true}), enumerable: true, configurable: true,


    }, dir: {

        get: newFunc('dir', 10, function dir() {
            let res = mm.memory.private_data.get(this).dir;
            if (debug) print('Document.dir.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('dir', 1, function dir(value) {
            if (debug) print('Document.dir.set', value)
            mm.memory.private_data.get(this).dir = value

        }, {set: true}), enumerable: true, configurable: true,


    }, body: {

        get: newFunc('body', 10, function body() {
            if (mm.memory.private_data.get(this).body !== undefined) {
                return mm.memory.private_data.get(this).body
            }
            // debugger;

            if (!mm.memory.private_data.get(this).body) {
                // debugger;
                print('create body', $,  $('body'))
                mm.memory.private_data.get(this).body = createElementByName($('body'));
                // mm.memory.private_data.get(this).body.hasAppend = true;
            }
            let res = mm.memory.private_data.get(this).body
            if (debug) print('Document.body.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('body', 1, function body(value) {
            if (debug) print('Document.body.set', value)
            mm.memory.private_data.get(this).body = value

        }, {set: true}), enumerable: true, configurable: true,


    }, head: {

        get: newFunc('head', 10, function head() {
            // let res = mm.memory.private_data.get(this).head;
            let res = createElementByName($('head'));
            // debugger;
            if (debug) print('Document.head.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, images: {

        get: newFunc('images', 10, function images() {
            let res = this.getElementsByTagName('img1')
            if (debug) print('Document.images.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, embeds: {

        get: newFunc('embeds', 10, function embeds() {
            let res = this.getElementsByTagName('embed');
            if (debug) print('Document.embeds.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, plugins: {

        get: newFunc('plugins', 10, function plugins() {
            let res = this.getElementsByTagName('embed');
            if (debug) print('Document.plugins.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, links: {

        get: newFunc('links', 10, function links() {
            let res = this.getElementsByTagName('a');
            if (debug) print('Document.links.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, forms: {

        get: newFunc('forms', 10, function forms() {
            let res = this.getElementsByTagName('form');
            if (debug) print('Document.forms.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, scripts: {

        get: newFunc('scripts', 10, function scripts() {
            let res = this.getElementsByTagName('script');
            if (debug) print('Document.scripts.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, currentScript: {

        get: newFunc('currentScript', 10, function currentScript() {
            let res = null;
            if (script_name !== undefined) {
                res = createElementByName($('<script></script>'));
                res.src = 'https://challenges.cloudflare.com/turnstile/v0/g/e7e9d014f96e/api.js?onload=RQJfI1&render=explicit'
                // result.innerText = 'window.KPSDK={};'
            }
            if (debug) print('Document.currentScript.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, defaultView: {

        get: newFunc('defaultView', 10, function defaultView() {
            let res = mm.memory.private_data.get(this).defaultView;
            if (debug) print('Document.defaultView.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, designMode: {

        get: newFunc('designMode', 10, function designMode() {
            let res = mm.memory.private_data.get(this).designMode;
            if (debug) print('Document.designMode.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('designMode', 1, function designMode(value) {
            if (debug) print('Document.designMode.set', value)
            mm.memory.private_data.get(this).designMode = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onreadystatechange: {

        get: newFunc('onreadystatechange', 10, function onreadystatechange() {
            let res = mm.memory.private_data.get(this).onreadystatechange;
            if (debug) print('Document.onreadystatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onreadystatechange', 1, function onreadystatechange(value) {
            if (debug) print('Document.onreadystatechange.set', value)
            mm.memory.private_data.get(this).onreadystatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, anchors: {

        get: newFunc('anchors', 10, function anchors() {
            let result = new HTMLCollection(0);
            result.__proto__ = HTMLCollection.prototype
            if (debug) print('Document.anchors.get', result)

            return result
        }, {get: true}), enumerable: true, configurable: true,

    }, applets: {

        get: newFunc('applets', 10, function applets() {
            let res = mm.memory.private_data.get(this).applets;
            let result = new HTMLCollection(0);

            if (debug) print('Document.applets.get', result)

            return result
        }, {get: true}), enumerable: true, configurable: true,

    }, fgColor: {

        get: newFunc('fgColor', 10, function fgColor() {
            let res = mm.memory.private_data.get(this).fgColor;
            if (debug) print('Document.fgColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fgColor', 1, function fgColor(value) {
            if (debug) print('Document.fgColor.set', value)
            mm.memory.private_data.get(this).fgColor = value

        }, {set: true}), enumerable: true, configurable: true,


    }, linkColor: {

        get: newFunc('linkColor', 10, function linkColor() {
            let res = mm.memory.private_data.get(this).linkColor;
            if (debug) print('Document.linkColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('linkColor', 1, function linkColor(value) {
            if (debug) print('Document.linkColor.set', value)
            mm.memory.private_data.get(this).linkColor = value

        }, {set: true}), enumerable: true, configurable: true,


    }, vlinkColor: {

        get: newFunc('vlinkColor', 10, function vlinkColor() {
            let res = mm.memory.private_data.get(this).vlinkColor;
            if (debug) print('Document.vlinkColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('vlinkColor', 1, function vlinkColor(value) {
            if (debug) print('Document.vlinkColor.set', value)
            mm.memory.private_data.get(this).vlinkColor = value

        }, {set: true}), enumerable: true, configurable: true,


    }, alinkColor: {

        get: newFunc('alinkColor', 10, function alinkColor() {
            let res = mm.memory.private_data.get(this).alinkColor;
            if (debug) print('Document.alinkColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('alinkColor', 1, function alinkColor(value) {
            if (debug) print('Document.alinkColor.set', value)
            mm.memory.private_data.get(this).alinkColor = value

        }, {set: true}), enumerable: true, configurable: true,


    }, bgColor: {

        get: newFunc('bgColor', 10, function bgColor() {
            let res = mm.memory.private_data.get(this).bgColor;
            if (debug) print('Document.bgColor.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('bgColor', 1, function bgColor(value) {
            if (debug) print('Document.bgColor.set', value)
            mm.memory.private_data.get(this).bgColor = value

        }, {set: true}), enumerable: true, configurable: true,


    }, all: {

        get: newFunc('all', 10, function all() {
            let result = mm.memory.private_data.get(this).all;
            if (!result) {
                mm.memory.private_data.get(this).all = documentAll(get_all_node_by_id);
                result = mm.memory.private_data.get(this).all
            }
            // result = new Proxy(result, {
            //     get(target, p,r) {
            //         let res = Reflect.get(target,p,r);
            //         print('all.get', p, typeof res)
            //         return res;
            //     }
            // })
            if (debug) print('Document.all.get', arguments, result)
            // debugger;
            Object.setPrototypeOf(result, Object.prototype)
            return result
        }, {get: true}), enumerable: true, configurable: true,

    }, scrollingElement: {

        get: newFunc('scrollingElement', 10, function scrollingElement() {
            let res = mm.memory.private_data.get(this).scrollingElement;
            if (debug) print('Document.scrollingElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, onpointerlockchange: {

        get: newFunc('onpointerlockchange', 10, function onpointerlockchange() {
            let res = mm.memory.private_data.get(this).onpointerlockchange;
            if (debug) print('Document.onpointerlockchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerlockchange', 1, function onpointerlockchange(value) {
            if (debug) print('Document.onpointerlockchange.set', value)
            mm.memory.private_data.get(this).onpointerlockchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerlockerror: {

        get: newFunc('onpointerlockerror', 10, function onpointerlockerror() {
            let res = mm.memory.private_data.get(this).onpointerlockerror;
            if (debug) print('Document.onpointerlockerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerlockerror', 1, function onpointerlockerror(value) {
            if (debug) print('Document.onpointerlockerror.set', value)
            mm.memory.private_data.get(this).onpointerlockerror = value

        }, {set: true}), enumerable: true, configurable: true,


    }, hidden: {

        get: newFunc('hidden', 10, function hidden() {
            let res = mm.memory.private_data.get(this).hidden;
            res = true;
            // if (debug) print('Document.hidden.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, visibilityState: {

        get: newFunc('visibilityState', 10, function visibilityState() {
            // let res = mm.memory.private_data.get(this).visibilityState;
            res = 'visible';
            if (debug) print('Document.visibilityState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, wasDiscarded: {

        get: newFunc('wasDiscarded', 10, function wasDiscarded() {
            let res = mm.memory.private_data.get(this).wasDiscarded;
            if (debug) print('Document.wasDiscarded.get', res)
            res = false;
            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, prerendering: {

        get: newFunc('prerendering', 10, function prerendering() {
            let res = mm.memory.private_data.get(this).prerendering;
            if (debug) print('Document.prerendering.get', res)
            res = false;

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, featurePolicy: {

        get: newFunc('featurePolicy', 10, function featurePolicy() {
            let res = mm.memory.private_data.get(this).featurePolicy;
            if (debug) print('Document.featurePolicy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, webkitVisibilityState: {

        get: newFunc('webkitVisibilityState', 10, function webkitVisibilityState() {
            let res = mm.memory.private_data.get(this).webkitVisibilityState;
            if (debug) print('Document.webkitVisibilityState.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, webkitHidden: {

        get: newFunc('webkitHidden', 10, function webkitHidden() {
            let res = mm.memory.private_data.get(this).webkitHidden;
            if (debug) print('Document.webkitHidden.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, onbeforecopy: {

        get: newFunc('onbeforecopy', 10, function onbeforecopy() {
            let res = mm.memory.private_data.get(this).onbeforecopy;
            if (debug) print('Document.onbeforecopy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforecopy', 1, function onbeforecopy(value) {
            if (debug) print('Document.onbeforecopy.set', value)
            mm.memory.private_data.get(this).onbeforecopy = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onbeforecut: {

        get: newFunc('onbeforecut', 10, function onbeforecut() {
            let res = mm.memory.private_data.get(this).onbeforecut;
            if (debug) print('Document.onbeforecut.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforecut', 1, function onbeforecut(value) {
            if (debug) print('Document.onbeforecut.set', value)
            mm.memory.private_data.get(this).onbeforecut = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onbeforepaste: {

        get: newFunc('onbeforepaste', 10, function onbeforepaste() {
            let res = mm.memory.private_data.get(this).onbeforepaste;
            if (debug) print('Document.onbeforepaste.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforepaste', 1, function onbeforepaste(value) {
            if (debug) print('Document.onbeforepaste.set', value)
            mm.memory.private_data.get(this).onbeforepaste = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onfreeze: {

        get: newFunc('onfreeze', 10, function onfreeze() {
            let res = mm.memory.private_data.get(this).onfreeze;
            if (debug) print('Document.onfreeze.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfreeze', 1, function onfreeze(value) {
            if (debug) print('Document.onfreeze.set', value)
            mm.memory.private_data.get(this).onfreeze = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onprerenderingchange: {

        get: newFunc('onprerenderingchange', 10, function onprerenderingchange() {
            let res = mm.memory.private_data.get(this).onprerenderingchange;
            if (debug) print('Document.onprerenderingchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprerenderingchange', 1, function onprerenderingchange(value) {
            if (debug) print('Document.onprerenderingchange.set', value)
            mm.memory.private_data.get(this).onprerenderingchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onresume: {

        get: newFunc('onresume', 10, function onresume() {
            let res = mm.memory.private_data.get(this).onresume;
            if (debug) print('Document.onresume.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresume', 1, function onresume(value) {
            if (debug) print('Document.onresume.set', value)
            mm.memory.private_data.get(this).onresume = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onsearch: {

        get: newFunc('onsearch', 10, function onsearch() {
            let res = mm.memory.private_data.get(this).onsearch;
            if (debug) print('Document.onsearch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsearch', 1, function onsearch(value) {
            if (debug) print('Document.onsearch.set', value)
            mm.memory.private_data.get(this).onsearch = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onvisibilitychange: {

        get: newFunc('onvisibilitychange', 10, function onvisibilitychange() {
            let res = mm.memory.private_data.get(this).onvisibilitychange;
            if (debug) print('Document.onvisibilitychange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onvisibilitychange', 1, function onvisibilitychange(value) {
            if (debug) print('Document.onvisibilitychange.set', value)
            mm.memory.private_data.get(this).onvisibilitychange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, timeline: {

        get: newFunc('timeline', 10, function timeline() {
            let res = mm.memory.private_data.get(this).timeline;
            if (debug) print('Document.timeline.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, fullscreenEnabled: {

        get: newFunc('fullscreenEnabled', 10, function fullscreenEnabled() {
            let res = mm.memory.private_data.get(this).fullscreenEnabled;
            if (debug) print('Document.fullscreenEnabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fullscreenEnabled', 1, function fullscreenEnabled(value) {
            if (debug) print('Document.fullscreenEnabled.set', value)
            mm.memory.private_data.get(this).fullscreenEnabled = value

        }, {set: true}), enumerable: true, configurable: true,


    }, fullscreen: {

        get: newFunc('fullscreen', 10, function fullscreen() {
            let res = mm.memory.private_data.get(this).fullscreen;
            if (debug) print('Document.fullscreen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fullscreen', 1, function fullscreen(value) {
            if (debug) print('Document.fullscreen.set', value)
            mm.memory.private_data.get(this).fullscreen = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onfullscreenchange: {

        get: newFunc('onfullscreenchange', 10, function onfullscreenchange() {
            let res = mm.memory.private_data.get(this).onfullscreenchange;
            if (debug) print('Document.onfullscreenchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfullscreenchange', 1, function onfullscreenchange(value) {
            if (debug) print('Document.onfullscreenchange.set', value)
            mm.memory.private_data.get(this).onfullscreenchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onfullscreenerror: {

        get: newFunc('onfullscreenerror', 10, function onfullscreenerror() {
            let res = mm.memory.private_data.get(this).onfullscreenerror;
            if (debug) print('Document.onfullscreenerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfullscreenerror', 1, function onfullscreenerror(value) {
            if (debug) print('Document.onfullscreenerror.set', value)
            mm.memory.private_data.get(this).onfullscreenerror = value

        }, {set: true}), enumerable: true, configurable: true,


    }, webkitIsFullScreen: {

        get: newFunc('webkitIsFullScreen', 10, function webkitIsFullScreen() {
            let res = mm.memory.private_data.get(this).webkitIsFullScreen;
            if (debug) print('Document.webkitIsFullScreen.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, webkitCurrentFullScreenElement: {

        get: newFunc('webkitCurrentFullScreenElement', 10, function webkitCurrentFullScreenElement() {
            let res = mm.memory.private_data.get(this).webkitCurrentFullScreenElement || null;
            if (debug) print('Document.webkitCurrentFullScreenElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, webkitFullscreenEnabled: {

        get: newFunc('webkitFullscreenEnabled', 10, function webkitFullscreenEnabled() {
            let res = mm.memory.private_data.get(this).webkitFullscreenEnabled;
            if (debug) print('Document.webkitFullscreenEnabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, webkitFullscreenElement: {

        get: newFunc('webkitFullscreenElement', 10, function webkitFullscreenElement() {
            let res = mm.memory.private_data.get(this).webkitFullscreenElement;
            if (debug) print('Document.webkitFullscreenElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, onwebkitfullscreenchange: {

        get: newFunc('onwebkitfullscreenchange', 10, function onwebkitfullscreenchange() {
            let res = mm.memory.private_data.get(this).onwebkitfullscreenchange;
            if (debug) print('Document.onwebkitfullscreenchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitfullscreenchange', 1, function onwebkitfullscreenchange(value) {
            if (debug) print('Document.onwebkitfullscreenchange.set', value)
            mm.memory.private_data.get(this).onwebkitfullscreenchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onwebkitfullscreenerror: {

        get: newFunc('onwebkitfullscreenerror', 10, function onwebkitfullscreenerror() {
            let res = mm.memory.private_data.get(this).onwebkitfullscreenerror;
            if (debug) print('Document.onwebkitfullscreenerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitfullscreenerror', 1, function onwebkitfullscreenerror(value) {
            if (debug) print('Document.onwebkitfullscreenerror.set', value)
            mm.memory.private_data.get(this).onwebkitfullscreenerror = value

        }, {set: true}), enumerable: true, configurable: true,


    }, rootElement: {

        get: newFunc('rootElement', 10, function rootElement() {
            let res = mm.memory.private_data.get(this).rootElement;
            if (debug) print('Document.rootElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, pictureInPictureEnabled: {

        get: newFunc('pictureInPictureEnabled', 10, function pictureInPictureEnabled() {
            let res = mm.memory.private_data.get(this).pictureInPictureEnabled;
            if (debug) print('Document.pictureInPictureEnabled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, onbeforexrselect: {

        get: newFunc('onbeforexrselect', 10, function onbeforexrselect() {
            let res = mm.memory.private_data.get(this).onbeforexrselect;
            if (debug) print('Document.onbeforexrselect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforexrselect', 1, function onbeforexrselect(value) {
            if (debug) print('Document.onbeforexrselect.set', value)
            mm.memory.private_data.get(this).onbeforexrselect = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onabort: {

        get: newFunc('onabort', 10, function onabort() {
            let res = mm.memory.private_data.get(this).onabort;
            if (debug) print('Document.onabort.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onabort', 1, function onabort(value) {
            if (debug) print('Document.onabort.set', value)
            mm.memory.private_data.get(this).onabort = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onbeforeinput: {

        get: newFunc('onbeforeinput', 10, function onbeforeinput() {
            let res = mm.memory.private_data.get(this).onbeforeinput;
            if (debug) print('Document.onbeforeinput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforeinput', 1, function onbeforeinput(value) {
            if (debug) print('Document.onbeforeinput.set', value)
            mm.memory.private_data.get(this).onbeforeinput = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onbeforematch: {

        get: newFunc('onbeforematch', 10, function onbeforematch() {
            let res = mm.memory.private_data.get(this).onbeforematch;
            if (debug) print('Document.onbeforematch.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforematch', 1, function onbeforematch(value) {
            if (debug) print('Document.onbeforematch.set', value)
            mm.memory.private_data.get(this).onbeforematch = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onbeforetoggle: {

        get: newFunc('onbeforetoggle', 10, function onbeforetoggle() {
            let res = mm.memory.private_data.get(this).onbeforetoggle;
            if (debug) print('Document.onbeforetoggle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onbeforetoggle', 1, function onbeforetoggle(value) {
            if (debug) print('Document.onbeforetoggle.set', value)
            mm.memory.private_data.get(this).onbeforetoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onblur: {

        get: newFunc('onblur', 10, function onblur() {
            let res = mm.memory.private_data.get(this).onblur;
            if (debug) print('Document.onblur.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onblur', 1, function onblur(value) {
            if (debug) print('Document.onblur.set', value)
            mm.memory.private_data.get(this).onblur = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncancel: {

        get: newFunc('oncancel', 10, function oncancel() {
            let res = mm.memory.private_data.get(this).oncancel;
            if (debug) print('Document.oncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncancel', 1, function oncancel(value) {
            if (debug) print('Document.oncancel.set', value)
            mm.memory.private_data.get(this).oncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncanplay: {

        get: newFunc('oncanplay', 10, function oncanplay() {
            let res = mm.memory.private_data.get(this).oncanplay;
            if (debug) print('Document.oncanplay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncanplay', 1, function oncanplay(value) {
            if (debug) print('Document.oncanplay.set', value)
            mm.memory.private_data.get(this).oncanplay = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncanplaythrough: {

        get: newFunc('oncanplaythrough', 10, function oncanplaythrough() {
            let res = mm.memory.private_data.get(this).oncanplaythrough;
            if (debug) print('Document.oncanplaythrough.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncanplaythrough', 1, function oncanplaythrough(value) {
            if (debug) print('Document.oncanplaythrough.set', value)
            mm.memory.private_data.get(this).oncanplaythrough = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onchange: {

        get: newFunc('onchange', 10, function onchange() {
            let res = mm.memory.private_data.get(this).onchange || null;
            if (debug) print('Document.onchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onchange', 1, function onchange(value) {
            if (debug) print('Document.onchange.set', value)
            mm.memory.private_data.get(this).onchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onclick: {

        get: newFunc('onclick', 10, function onclick() {
            let res = mm.memory.private_data.get(this).onclick || null;
            if (debug) print('Document.onclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclick', 1, function onclick(value) {
            if (debug) print('Document.onclick.set', value)
            mm.memory.private_data.get(this).onclick = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onclose: {

        get: newFunc('onclose', 10, function onclose() {
            let res = mm.memory.private_data.get(this).onclose;
            if (debug) print('Document.onclose.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onclose', 1, function onclose(value) {
            if (debug) print('Document.onclose.set', value)
            mm.memory.private_data.get(this).onclose = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncontentvisibilityautostatechange: {

        get: newFunc('oncontentvisibilityautostatechange', 10, function oncontentvisibilityautostatechange() {
            let res = mm.memory.private_data.get(this).oncontentvisibilityautostatechange;
            if (debug) print('Document.oncontentvisibilityautostatechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontentvisibilityautostatechange', 1, function oncontentvisibilityautostatechange(value) {
            if (debug) print('Document.oncontentvisibilityautostatechange.set', value)
            mm.memory.private_data.get(this).oncontentvisibilityautostatechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncontextlost: {

        get: newFunc('oncontextlost', 10, function oncontextlost() {
            let res = mm.memory.private_data.get(this).oncontextlost;
            if (debug) print('Document.oncontextlost.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextlost', 1, function oncontextlost(value) {
            if (debug) print('Document.oncontextlost.set', value)
            mm.memory.private_data.get(this).oncontextlost = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncontextmenu: {

        get: newFunc('oncontextmenu', 10, function oncontextmenu() {
            let res = mm.memory.private_data.get(this).oncontextmenu;
            if (debug) print('Document.oncontextmenu.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextmenu', 1, function oncontextmenu(value) {
            if (debug) print('Document.oncontextmenu.set', value)
            mm.memory.private_data.get(this).oncontextmenu = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncontextrestored: {

        get: newFunc('oncontextrestored', 10, function oncontextrestored() {
            let res = mm.memory.private_data.get(this).oncontextrestored;
            if (debug) print('Document.oncontextrestored.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncontextrestored', 1, function oncontextrestored(value) {
            if (debug) print('Document.oncontextrestored.set', value)
            mm.memory.private_data.get(this).oncontextrestored = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncuechange: {

        get: newFunc('oncuechange', 10, function oncuechange() {
            let res = mm.memory.private_data.get(this).oncuechange;
            if (debug) print('Document.oncuechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncuechange', 1, function oncuechange(value) {
            if (debug) print('Document.oncuechange.set', value)
            mm.memory.private_data.get(this).oncuechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondblclick: {

        get: newFunc('ondblclick', 10, function ondblclick() {
            let res = mm.memory.private_data.get(this).ondblclick;
            if (debug) print('Document.ondblclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondblclick', 1, function ondblclick(value) {
            if (debug) print('Document.ondblclick.set', value)
            mm.memory.private_data.get(this).ondblclick = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondrag: {

        get: newFunc('ondrag', 10, function ondrag() {
            let res = mm.memory.private_data.get(this).ondrag;
            if (debug) print('Document.ondrag.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondrag', 1, function ondrag(value) {
            if (debug) print('Document.ondrag.set', value)
            mm.memory.private_data.get(this).ondrag = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondragend: {

        get: newFunc('ondragend', 10, function ondragend() {
            let res = mm.memory.private_data.get(this).ondragend;
            if (debug) print('Document.ondragend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragend', 1, function ondragend(value) {
            if (debug) print('Document.ondragend.set', value)
            mm.memory.private_data.get(this).ondragend = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondragenter: {

        get: newFunc('ondragenter', 10, function ondragenter() {
            let res = mm.memory.private_data.get(this).ondragenter;
            if (debug) print('Document.ondragenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragenter', 1, function ondragenter(value) {
            if (debug) print('Document.ondragenter.set', value)
            mm.memory.private_data.get(this).ondragenter = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondragleave: {

        get: newFunc('ondragleave', 10, function ondragleave() {
            let res = mm.memory.private_data.get(this).ondragleave;
            if (debug) print('Document.ondragleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragleave', 1, function ondragleave(value) {
            if (debug) print('Document.ondragleave.set', value)
            mm.memory.private_data.get(this).ondragleave = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondragover: {

        get: newFunc('ondragover', 10, function ondragover() {
            let res = mm.memory.private_data.get(this).ondragover;
            if (debug) print('Document.ondragover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragover', 1, function ondragover(value) {
            if (debug) print('Document.ondragover.set', value)
            mm.memory.private_data.get(this).ondragover = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondragstart: {

        get: newFunc('ondragstart', 10, function ondragstart() {
            let res = mm.memory.private_data.get(this).ondragstart;
            if (debug) print('Document.ondragstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondragstart', 1, function ondragstart(value) {
            if (debug) print('Document.ondragstart.set', value)
            mm.memory.private_data.get(this).ondragstart = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondrop: {

        get: newFunc('ondrop', 10, function ondrop() {
            let res = mm.memory.private_data.get(this).ondrop;
            if (debug) print('Document.ondrop.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondrop', 1, function ondrop(value) {
            if (debug) print('Document.ondrop.set', value)
            mm.memory.private_data.get(this).ondrop = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ondurationchange: {

        get: newFunc('ondurationchange', 10, function ondurationchange() {
            let res = mm.memory.private_data.get(this).ondurationchange;
            if (debug) print('Document.ondurationchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ondurationchange', 1, function ondurationchange(value) {
            if (debug) print('Document.ondurationchange.set', value)
            mm.memory.private_data.get(this).ondurationchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onemptied: {

        get: newFunc('onemptied', 10, function onemptied() {
            let res = mm.memory.private_data.get(this).onemptied;
            if (debug) print('Document.onemptied.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onemptied', 1, function onemptied(value) {
            if (debug) print('Document.onemptied.set', value)
            mm.memory.private_data.get(this).onemptied = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onended: {

        get: newFunc('onended', 10, function onended() {
            let res = mm.memory.private_data.get(this).onended;
            if (debug) print('Document.onended.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onended', 1, function onended(value) {
            if (debug) print('Document.onended.set', value)
            mm.memory.private_data.get(this).onended = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onerror: {

        get: newFunc('onerror', 10, function onerror() {
            let res = mm.memory.private_data.get(this).onerror;
            if (debug) print('Document.onerror.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onerror', 1, function onerror(value) {
            if (debug) print('Document.onerror.set', value)
            mm.memory.private_data.get(this).onerror = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onfocus: {

        get: newFunc('onfocus', 10, function onfocus() {
            let res = mm.memory.private_data.get(this).onfocus;
            if (debug) print('Document.onfocus.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onfocus', 1, function onfocus(value) {
            if (debug) print('Document.onfocus.set', value)
            mm.memory.private_data.get(this).onfocus = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onformdata: {

        get: newFunc('onformdata', 10, function onformdata() {
            let res = mm.memory.private_data.get(this).onformdata;
            if (debug) print('Document.onformdata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onformdata', 1, function onformdata(value) {
            if (debug) print('Document.onformdata.set', value)
            mm.memory.private_data.get(this).onformdata = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oninput: {

        get: newFunc('oninput', 10, function oninput() {
            let res = mm.memory.private_data.get(this).oninput;
            if (debug) print('Document.oninput.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninput', 1, function oninput(value) {
            if (debug) print('Document.oninput.set', value)
            mm.memory.private_data.get(this).oninput = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oninvalid: {

        get: newFunc('oninvalid', 10, function oninvalid() {
            let res = mm.memory.private_data.get(this).oninvalid;
            if (debug) print('Document.oninvalid.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oninvalid', 1, function oninvalid(value) {
            if (debug) print('Document.oninvalid.set', value)
            mm.memory.private_data.get(this).oninvalid = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onkeydown: {

        get: newFunc('onkeydown', 10, function onkeydown() {
            let res = mm.memory.private_data.get(this).onkeydown || null;
            if (debug) print('Document.onkeydown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeydown', 1, function onkeydown(value) {
            if (debug) print('Document.onkeydown.set', value)
            mm.memory.private_data.get(this).onkeydown = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onkeypress: {

        get: newFunc('onkeypress', 10, function onkeypress() {
            let res = mm.memory.private_data.get(this).onkeypress;
            if (debug) print('Document.onkeypress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeypress', 1, function onkeypress(value) {
            if (debug) print('Document.onkeypress.set', value)
            mm.memory.private_data.get(this).onkeypress = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onkeyup: {

        get: newFunc('onkeyup', 10, function onkeyup() {
            let res = mm.memory.private_data.get(this).onkeyup;
            if (debug) print('Document.onkeyup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onkeyup', 1, function onkeyup(value) {
            if (debug) print('Document.onkeyup.set', value)
            mm.memory.private_data.get(this).onkeyup = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onload: {

        get: newFunc('onload', 10, function onload() {
            let res = mm.memory.private_data.get(this).onload || null;
            if (debug) print('Document.onload.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onload', 1, function onload(value) {
            if (debug) print('Document.onload.set', value)
            mm.memory.private_data.get(this).onload = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onloadeddata: {

        get: newFunc('onloadeddata', 10, function onloadeddata() {
            let res = mm.memory.private_data.get(this).onloadeddata;
            if (debug) print('Document.onloadeddata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadeddata', 1, function onloadeddata(value) {
            if (debug) print('Document.onloadeddata.set', value)
            mm.memory.private_data.get(this).onloadeddata = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onloadedmetadata: {

        get: newFunc('onloadedmetadata', 10, function onloadedmetadata() {
            let res = mm.memory.private_data.get(this).onloadedmetadata;
            if (debug) print('Document.onloadedmetadata.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadedmetadata', 1, function onloadedmetadata(value) {
            if (debug) print('Document.onloadedmetadata.set', value)
            mm.memory.private_data.get(this).onloadedmetadata = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onloadstart: {

        get: newFunc('onloadstart', 10, function onloadstart() {
            let res = mm.memory.private_data.get(this).onloadstart;
            if (debug) print('Document.onloadstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onloadstart', 1, function onloadstart(value) {
            if (debug) print('Document.onloadstart.set', value)
            mm.memory.private_data.get(this).onloadstart = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmousedown: {

        get: newFunc('onmousedown', 10, function onmousedown() {
            let res = mm.memory.private_data.get(this).onmousedown;
            if (debug) print('Document.onmousedown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousedown', 1, function onmousedown(value) {
            if (debug) print('Document.onmousedown.set', value)
            mm.memory.private_data.get(this).onmousedown = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmouseenter: {

        get: newFunc('onmouseenter', 10, function onmouseenter() {
            let res = mm.memory.private_data.get(this).onmouseenter;
            if (debug) print('Document.onmouseenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseenter', 1, function onmouseenter(value) {
            if (debug) print('Document.onmouseenter.set', value)
            mm.memory.private_data.get(this).onmouseenter = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmouseleave: {

        get: newFunc('onmouseleave', 10, function onmouseleave() {
            let res = mm.memory.private_data.get(this).onmouseleave;
            if (debug) print('Document.onmouseleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseleave', 1, function onmouseleave(value) {
            if (debug) print('Document.onmouseleave.set', value)
            mm.memory.private_data.get(this).onmouseleave = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmousemove: {

        get: newFunc('onmousemove', 10, function onmousemove() {
            let res = mm.memory.private_data.get(this).onmousemove;
            if (debug) print('Document.onmousemove.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousemove', 1, function onmousemove(value) {
            if (debug) print('Document.onmousemove.set', value)
            mm.memory.private_data.get(this).onmousemove = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmouseout: {

        get: newFunc('onmouseout', 10, function onmouseout() {
            let res = mm.memory.private_data.get(this).onmouseout || null;
            if (debug) print('Document.onmouseout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseout', 1, function onmouseout(value) {
            if (debug) print('Document.onmouseout.set', value)
            mm.memory.private_data.get(this).onmouseout = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmouseover: {

        get: newFunc('onmouseover', 10, function onmouseover() {
            let res = mm.memory.private_data.get(this).onmouseover || null;
            if (debug) print('Document.onmouseover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseover', 1, function onmouseover(value) {
            if (debug) print('Document.onmouseover.set', value)
            mm.memory.private_data.get(this).onmouseover = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmouseup: {

        get: newFunc('onmouseup', 10, function onmouseup() {
            let res = mm.memory.private_data.get(this).onmouseup;
            if (debug) print('Document.onmouseup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmouseup', 1, function onmouseup(value) {
            if (debug) print('Document.onmouseup.set', value)
            mm.memory.private_data.get(this).onmouseup = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onmousewheel: {

        get: newFunc('onmousewheel', 10, function onmousewheel() {
            let res = mm.memory.private_data.get(this).onmousewheel;
            if (debug) print('Document.onmousewheel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onmousewheel', 1, function onmousewheel(value) {
            if (debug) print('Document.onmousewheel.set', value)
            mm.memory.private_data.get(this).onmousewheel = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpause: {

        get: newFunc('onpause', 10, function onpause() {
            let res = mm.memory.private_data.get(this).onpause;
            if (debug) print('Document.onpause.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpause', 1, function onpause(value) {
            if (debug) print('Document.onpause.set', value)
            mm.memory.private_data.get(this).onpause = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onplay: {

        get: newFunc('onplay', 10, function onplay() {
            let res = mm.memory.private_data.get(this).onplay;
            if (debug) print('Document.onplay.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onplay', 1, function onplay(value) {
            if (debug) print('Document.onplay.set', value)
            mm.memory.private_data.get(this).onplay = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onplaying: {

        get: newFunc('onplaying', 10, function onplaying() {
            let res = mm.memory.private_data.get(this).onplaying;
            if (debug) print('Document.onplaying.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onplaying', 1, function onplaying(value) {
            if (debug) print('Document.onplaying.set', value)
            mm.memory.private_data.get(this).onplaying = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onprogress: {

        get: newFunc('onprogress', 10, function onprogress() {
            let res = mm.memory.private_data.get(this).onprogress;
            if (debug) print('Document.onprogress.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onprogress', 1, function onprogress(value) {
            if (debug) print('Document.onprogress.set', value)
            mm.memory.private_data.get(this).onprogress = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onratechange: {

        get: newFunc('onratechange', 10, function onratechange() {
            let res = mm.memory.private_data.get(this).onratechange;
            if (debug) print('Document.onratechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onratechange', 1, function onratechange(value) {
            if (debug) print('Document.onratechange.set', value)
            mm.memory.private_data.get(this).onratechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onreset: {

        get: newFunc('onreset', 10, function onreset() {
            let res = mm.memory.private_data.get(this).onreset;
            if (debug) print('Document.onreset.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onreset', 1, function onreset(value) {
            if (debug) print('Document.onreset.set', value)
            mm.memory.private_data.get(this).onreset = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onresize: {

        get: newFunc('onresize', 10, function onresize() {
            let res = mm.memory.private_data.get(this).onresize;
            if (debug) print('Document.onresize.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onresize', 1, function onresize(value) {
            if (debug) print('Document.onresize.set', value)
            mm.memory.private_data.get(this).onresize = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onscroll: {

        get: newFunc('onscroll', 10, function onscroll() {
            let res = mm.memory.private_data.get(this).onscroll;
            if (debug) print('Document.onscroll.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscroll', 1, function onscroll(value) {
            if (debug) print('Document.onscroll.set', value)
            mm.memory.private_data.get(this).onscroll = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onsecuritypolicyviolation: {

        get: newFunc('onsecuritypolicyviolation', 10, function onsecuritypolicyviolation() {
            let res = mm.memory.private_data.get(this).onsecuritypolicyviolation;
            if (debug) print('Document.onsecuritypolicyviolation.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsecuritypolicyviolation', 1, function onsecuritypolicyviolation(value) {
            if (debug) print('Document.onsecuritypolicyviolation.set', value)
            mm.memory.private_data.get(this).onsecuritypolicyviolation = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onseeked: {

        get: newFunc('onseeked', 10, function onseeked() {
            let res = mm.memory.private_data.get(this).onseeked;
            if (debug) print('Document.onseeked.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onseeked', 1, function onseeked(value) {
            if (debug) print('Document.onseeked.set', value)
            mm.memory.private_data.get(this).onseeked = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onseeking: {

        get: newFunc('onseeking', 10, function onseeking() {
            let res = mm.memory.private_data.get(this).onseeking;
            if (debug) print('Document.onseeking.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onseeking', 1, function onseeking(value) {
            if (debug) print('Document.onseeking.set', value)
            mm.memory.private_data.get(this).onseeking = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onselect: {

        get: newFunc('onselect', 10, function onselect() {
            let res = mm.memory.private_data.get(this).onselect;
            if (debug) print('Document.onselect.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselect', 1, function onselect(value) {
            if (debug) print('Document.onselect.set', value)
            mm.memory.private_data.get(this).onselect = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onslotchange: {

        get: newFunc('onslotchange', 10, function onslotchange() {
            let res = mm.memory.private_data.get(this).onslotchange;
            if (debug) print('Document.onslotchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onslotchange', 1, function onslotchange(value) {
            if (debug) print('Document.onslotchange.set', value)
            mm.memory.private_data.get(this).onslotchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onstalled: {

        get: newFunc('onstalled', 10, function onstalled() {
            let res = mm.memory.private_data.get(this).onstalled;
            if (debug) print('Document.onstalled.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onstalled', 1, function onstalled(value) {
            if (debug) print('Document.onstalled.set', value)
            mm.memory.private_data.get(this).onstalled = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onsubmit: {

        get: newFunc('onsubmit', 10, function onsubmit() {
            let res = mm.memory.private_data.get(this).onsubmit;
            if (debug) print('Document.onsubmit.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsubmit', 1, function onsubmit(value) {
            if (debug) print('Document.onsubmit.set', value)
            mm.memory.private_data.get(this).onsubmit = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onsuspend: {

        get: newFunc('onsuspend', 10, function onsuspend() {
            let res = mm.memory.private_data.get(this).onsuspend;
            if (debug) print('Document.onsuspend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onsuspend', 1, function onsuspend(value) {
            if (debug) print('Document.onsuspend.set', value)
            mm.memory.private_data.get(this).onsuspend = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ontimeupdate: {

        get: newFunc('ontimeupdate', 10, function ontimeupdate() {
            let res = mm.memory.private_data.get(this).ontimeupdate;
            if (debug) print('Document.ontimeupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontimeupdate', 1, function ontimeupdate(value) {
            if (debug) print('Document.ontimeupdate.set', value)
            mm.memory.private_data.get(this).ontimeupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ontoggle: {

        get: newFunc('ontoggle', 10, function ontoggle() {
            let res = mm.memory.private_data.get(this).ontoggle;
            if (debug) print('Document.ontoggle.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontoggle', 1, function ontoggle(value) {
            if (debug) print('Document.ontoggle.set', value)
            mm.memory.private_data.get(this).ontoggle = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onvolumechange: {

        get: newFunc('onvolumechange', 10, function onvolumechange() {
            let res = mm.memory.private_data.get(this).onvolumechange;
            if (debug) print('Document.onvolumechange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onvolumechange', 1, function onvolumechange(value) {
            if (debug) print('Document.onvolumechange.set', value)
            mm.memory.private_data.get(this).onvolumechange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onwaiting: {

        get: newFunc('onwaiting', 10, function onwaiting() {
            let res = mm.memory.private_data.get(this).onwaiting;
            if (debug) print('Document.onwaiting.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwaiting', 1, function onwaiting(value) {
            if (debug) print('Document.onwaiting.set', value)
            mm.memory.private_data.get(this).onwaiting = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onwebkitanimationend: {

        get: newFunc('onwebkitanimationend', 10, function onwebkitanimationend() {
            let res = mm.memory.private_data.get(this).onwebkitanimationend;
            if (debug) print('Document.onwebkitanimationend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationend', 1, function onwebkitanimationend(value) {
            if (debug) print('Document.onwebkitanimationend.set', value)
            mm.memory.private_data.get(this).onwebkitanimationend = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onwebkitanimationiteration: {

        get: newFunc('onwebkitanimationiteration', 10, function onwebkitanimationiteration() {
            let res = mm.memory.private_data.get(this).onwebkitanimationiteration;
            if (debug) print('Document.onwebkitanimationiteration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationiteration', 1, function onwebkitanimationiteration(value) {
            if (debug) print('Document.onwebkitanimationiteration.set', value)
            mm.memory.private_data.get(this).onwebkitanimationiteration = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onwebkitanimationstart: {

        get: newFunc('onwebkitanimationstart', 10, function onwebkitanimationstart() {
            let res = mm.memory.private_data.get(this).onwebkitanimationstart;
            if (debug) print('Document.onwebkitanimationstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkitanimationstart', 1, function onwebkitanimationstart(value) {
            if (debug) print('Document.onwebkitanimationstart.set', value)
            mm.memory.private_data.get(this).onwebkitanimationstart = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onwebkittransitionend: {

        get: newFunc('onwebkittransitionend', 10, function onwebkittransitionend() {
            let res = mm.memory.private_data.get(this).onwebkittransitionend;
            if (debug) print('Document.onwebkittransitionend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwebkittransitionend', 1, function onwebkittransitionend(value) {
            if (debug) print('Document.onwebkittransitionend.set', value)
            mm.memory.private_data.get(this).onwebkittransitionend = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onwheel: {

        get: newFunc('onwheel', 10, function onwheel() {
            let res = mm.memory.private_data.get(this).onwheel;
            if (debug) print('Document.onwheel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onwheel', 1, function onwheel(value) {
            if (debug) print('Document.onwheel.set', value)
            mm.memory.private_data.get(this).onwheel = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onauxclick: {

        get: newFunc('onauxclick', 10, function onauxclick() {
            let res = mm.memory.private_data.get(this).onauxclick;
            if (debug) print('Document.onauxclick.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onauxclick', 1, function onauxclick(value) {
            if (debug) print('Document.onauxclick.set', value)
            mm.memory.private_data.get(this).onauxclick = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ongotpointercapture: {

        get: newFunc('ongotpointercapture', 10, function ongotpointercapture() {
            let res = mm.memory.private_data.get(this).ongotpointercapture;
            if (debug) print('Document.ongotpointercapture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ongotpointercapture', 1, function ongotpointercapture(value) {
            if (debug) print('Document.ongotpointercapture.set', value)
            mm.memory.private_data.get(this).ongotpointercapture = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onlostpointercapture: {

        get: newFunc('onlostpointercapture', 10, function onlostpointercapture() {
            let res = mm.memory.private_data.get(this).onlostpointercapture;
            if (debug) print('Document.onlostpointercapture.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onlostpointercapture', 1, function onlostpointercapture(value) {
            if (debug) print('Document.onlostpointercapture.set', value)
            mm.memory.private_data.get(this).onlostpointercapture = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerdown: {

        get: newFunc('onpointerdown', 10, function onpointerdown() {
            let res = mm.memory.private_data.get(this).onpointerdown;
            if (debug) print('Document.onpointerdown.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerdown', 1, function onpointerdown(value) {
            if (debug) print('Document.onpointerdown.set', value)
            mm.memory.private_data.get(this).onpointerdown = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointermove: {

        get: newFunc('onpointermove', 10, function onpointermove() {
            let res = mm.memory.private_data.get(this).onpointermove;
            if (debug) print('Document.onpointermove.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointermove', 1, function onpointermove(value) {
            if (debug) print('Document.onpointermove.set', value)
            mm.memory.private_data.get(this).onpointermove = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerrawupdate: {

        get: newFunc('onpointerrawupdate', 10, function onpointerrawupdate() {
            let res = mm.memory.private_data.get(this).onpointerrawupdate;
            if (debug) print('Document.onpointerrawupdate.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerrawupdate', 1, function onpointerrawupdate(value) {
            if (debug) print('Document.onpointerrawupdate.set', value)
            mm.memory.private_data.get(this).onpointerrawupdate = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerup: {

        get: newFunc('onpointerup', 10, function onpointerup() {
            let res = mm.memory.private_data.get(this).onpointerup;
            if (debug) print('Document.onpointerup.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerup', 1, function onpointerup(value) {
            if (debug) print('Document.onpointerup.set', value)
            mm.memory.private_data.get(this).onpointerup = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointercancel: {

        get: newFunc('onpointercancel', 10, function onpointercancel() {
            let res = mm.memory.private_data.get(this).onpointercancel;
            if (debug) print('Document.onpointercancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointercancel', 1, function onpointercancel(value) {
            if (debug) print('Document.onpointercancel.set', value)
            mm.memory.private_data.get(this).onpointercancel = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerover: {

        get: newFunc('onpointerover', 10, function onpointerover() {
            let res = mm.memory.private_data.get(this).onpointerover;
            if (debug) print('Document.onpointerover.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerover', 1, function onpointerover(value) {
            if (debug) print('Document.onpointerover.set', value)
            mm.memory.private_data.get(this).onpointerover = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerout: {

        get: newFunc('onpointerout', 10, function onpointerout() {
            let res = mm.memory.private_data.get(this).onpointerout;
            if (debug) print('Document.onpointerout.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerout', 1, function onpointerout(value) {
            if (debug) print('Document.onpointerout.set', value)
            mm.memory.private_data.get(this).onpointerout = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerenter: {

        get: newFunc('onpointerenter', 10, function onpointerenter() {
            let res = mm.memory.private_data.get(this).onpointerenter;
            if (debug) print('Document.onpointerenter.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerenter', 1, function onpointerenter(value) {
            if (debug) print('Document.onpointerenter.set', value)
            mm.memory.private_data.get(this).onpointerenter = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpointerleave: {

        get: newFunc('onpointerleave', 10, function onpointerleave() {
            let res = mm.memory.private_data.get(this).onpointerleave;
            if (debug) print('Document.onpointerleave.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpointerleave', 1, function onpointerleave(value) {
            if (debug) print('Document.onpointerleave.set', value)
            mm.memory.private_data.get(this).onpointerleave = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onselectstart: {

        get: newFunc('onselectstart', 10, function onselectstart() {
            let res = mm.memory.private_data.get(this).onselectstart;
            if (debug) print('Document.onselectstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectstart', 1, function onselectstart(value) {
            if (debug) print('Document.onselectstart.set', value)
            mm.memory.private_data.get(this).onselectstart = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onselectionchange: {

        get: newFunc('onselectionchange', 10, function onselectionchange() {
            let res = mm.memory.private_data.get(this).onselectionchange;
            if (debug) print('Document.onselectionchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onselectionchange', 1, function onselectionchange(value) {
            if (debug) print('Document.onselectionchange.set', value)
            mm.memory.private_data.get(this).onselectionchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onanimationend: {

        get: newFunc('onanimationend', 10, function onanimationend() {
            let res = mm.memory.private_data.get(this).onanimationend;
            if (debug) print('Document.onanimationend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationend', 1, function onanimationend(value) {
            if (debug) print('Document.onanimationend.set', value)
            mm.memory.private_data.get(this).onanimationend = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onanimationiteration: {

        get: newFunc('onanimationiteration', 10, function onanimationiteration() {
            let res = mm.memory.private_data.get(this).onanimationiteration;
            if (debug) print('Document.onanimationiteration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationiteration', 1, function onanimationiteration(value) {
            if (debug) print('Document.onanimationiteration.set', value)
            mm.memory.private_data.get(this).onanimationiteration = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onanimationstart: {

        get: newFunc('onanimationstart', 10, function onanimationstart() {
            let res = mm.memory.private_data.get(this).onanimationstart;
            if (debug) print('Document.onanimationstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onanimationstart', 1, function onanimationstart(value) {
            if (debug) print('Document.onanimationstart.set', value)
            mm.memory.private_data.get(this).onanimationstart = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ontransitionrun: {

        get: newFunc('ontransitionrun', 10, function ontransitionrun() {
            let res = mm.memory.private_data.get(this).ontransitionrun;
            if (debug) print('Document.ontransitionrun.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionrun', 1, function ontransitionrun(value) {
            if (debug) print('Document.ontransitionrun.set', value)
            mm.memory.private_data.get(this).ontransitionrun = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ontransitionstart: {

        get: newFunc('ontransitionstart', 10, function ontransitionstart() {
            let res = mm.memory.private_data.get(this).ontransitionstart;
            if (debug) print('Document.ontransitionstart.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionstart', 1, function ontransitionstart(value) {
            if (debug) print('Document.ontransitionstart.set', value)
            mm.memory.private_data.get(this).ontransitionstart = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ontransitionend: {

        get: newFunc('ontransitionend', 10, function ontransitionend() {
            let res = mm.memory.private_data.get(this).ontransitionend;
            if (debug) print('Document.ontransitionend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitionend', 1, function ontransitionend(value) {
            if (debug) print('Document.ontransitionend.set', value)
            mm.memory.private_data.get(this).ontransitionend = value

        }, {set: true}), enumerable: true, configurable: true,


    }, ontransitioncancel: {

        get: newFunc('ontransitioncancel', 10, function ontransitioncancel() {
            let res = mm.memory.private_data.get(this).ontransitioncancel;
            if (debug) print('Document.ontransitioncancel.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('ontransitioncancel', 1, function ontransitioncancel(value) {
            if (debug) print('Document.ontransitioncancel.set', value)
            mm.memory.private_data.get(this).ontransitioncancel = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncopy: {

        get: newFunc('oncopy', 10, function oncopy() {
            let res = mm.memory.private_data.get(this).oncopy;
            if (debug) print('Document.oncopy.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncopy', 1, function oncopy(value) {
            if (debug) print('Document.oncopy.set', value)
            mm.memory.private_data.get(this).oncopy = value

        }, {set: true}), enumerable: true, configurable: true,


    }, oncut: {

        get: newFunc('oncut', 10, function oncut() {
            let res = mm.memory.private_data.get(this).oncut;
            if (debug) print('Document.oncut.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('oncut', 1, function oncut(value) {
            if (debug) print('Document.oncut.set', value)
            mm.memory.private_data.get(this).oncut = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onpaste: {

        get: newFunc('onpaste', 10, function onpaste() {
            let res = mm.memory.private_data.get(this).onpaste;
            if (debug) print('Document.onpaste.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onpaste', 1, function onpaste(value) {
            if (debug) print('Document.onpaste.set', value)
            mm.memory.private_data.get(this).onpaste = value

        }, {set: true}), enumerable: true, configurable: true,


    }, children: {

        get: newFunc('children', 10, function children() {
            let res = mm.memory.private_data.get(this).children;
            if (debug) print('Document.children.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, firstElementChild: {

        get: newFunc('firstElementChild', 10, function firstElementChild() {
            let res = mm.memory.private_data.get(this).firstElementChild || document.head;
            if (debug) print('Document.firstElementChild.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, lastElementChild: {

        get: newFunc('lastElementChild', 10, function lastElementChild() {
            let res = mm.memory.private_data.get(this).lastElementChild || document.body;
            if (debug) print('Document.lastElementChild.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, childElementCount: {

        get: newFunc('childElementCount', 10, function childElementCount() {
            let res = mm.memory.private_data.get(this).childElementCount || 1;
            if (debug) print('Document.childElementCount.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, activeElement: {

        get: newFunc('activeElement', 10, function activeElement() {
            let res = mm.memory.private_data.get(this).activeElement || document.body;
            if (debug) print('Document.activeElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, styleSheets: {

        get: newFunc('styleSheets', 10, function styleSheets() {
            let rr = $('style');
            let res = new StyleSheetList(0);
            let tt1 = 0;
            for (let i = 0; i < rr.length; i++) {
                print(rr[i].children)
                if (rr[i].children.length !== 0){
                    let t = new CSSStyleSheet(rr[i].children.length, new CSSRuleList(1, rr[i].children[0].data))
                    res[tt1] = t;
                    tt1++;
                    mm.memory.private_data.set(res, {
                        length: tt1,
                    })
                }
            }
            // debugger;
            if (debug) print('Document.styleSheets.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, pointerLockElement: {

        get: newFunc('pointerLockElement', 10, function pointerLockElement() {
            let res = mm.memory.private_data.get(this).pointerLockElement || null;
            if (debug) print('Document.pointerLockElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, fullscreenElement: {

        get: newFunc('fullscreenElement', 10, function fullscreenElement() {
            let res = mm.memory.private_data.get(this).fullscreenElement;
            if (debug) print('Document.fullscreenElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('fullscreenElement', 1, function fullscreenElement(value) {
            if (debug) print('Document.fullscreenElement.set', value)
            mm.memory.private_data.get(this).fullscreenElement = value

        }, {set: true}), enumerable: true, configurable: true,


    }, adoptedStyleSheets: {

        get: newFunc('adoptedStyleSheets', 10, function adoptedStyleSheets() {
            let res = mm.memory.private_data.get(this).adoptedStyleSheets || [];
            if (debug) print('Document.adoptedStyleSheets.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('adoptedStyleSheets', 1, function adoptedStyleSheets(value) {
            if (debug) print('Document.adoptedStyleSheets.set', value)
            mm.memory.private_data.get(this).adoptedStyleSheets = value

        }, {set: true}), enumerable: true, configurable: true,


    }, pictureInPictureElement: {

        get: newFunc('pictureInPictureElement', 10, function pictureInPictureElement() {
            let res = mm.memory.private_data.get(this).pictureInPictureElement || null;
            if (debug) print('Document.pictureInPictureElement.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, fonts: {

        get: newFunc('fonts', 10, function fonts() {
            let res = mm.memory.private_data.get(this).fonts || {};
            if (debug) print('Document.fonts.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, adoptNode: {

        value: newFunc('adoptNode', 10, function adoptNode() {
            if (debug) print('Document.adoptNode.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, append: {

        value: newFunc('append', 10, function append() {
            if (debug) print('Document.append.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, captureEvents: {

        value: newFunc('captureEvents', 10, function captureEvents() {
            if (debug) print('Document.captureEvents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, caretRangeFromPoint: {

        value: newFunc('caretRangeFromPoint', 10, function caretRangeFromPoint() {
            if (debug) print('Document.caretRangeFromPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, clear: {

        value: newFunc('clear', 10, function clear() {
            if (debug) print('Document.clear.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, close: {

        value: newFunc('close', 10, function close() {
            if (debug) print('Document.close.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createAttribute: {

        value: newFunc('createAttribute', 10, function createAttribute() {
            if (debug) print('Document.createAttribute.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createAttributeNS: {

        value: newFunc('createAttributeNS', 10, function createAttributeNS() {
            if (debug) print('Document.createAttributeNS.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createCDATASection: {

        value: newFunc('createCDATASection', 10, function createCDATASection() {
            if (debug) print('Document.createCDATASection.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createComment: {

        value: newFunc('createComment', 10, function createComment(v) {
            if (debug) print('Document.createComment.call', arguments)
            return new Comment(v)

        }), writable: true, enumerable: true, configurable: true,


    }, createDocumentFragment: {

        value: newFunc('createDocumentFragment', 10, function createDocumentFragment() {
            if (debug) print('Document.createDocumentFragment.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createElement: {
        value: window['createElement'], enumerable: true, configurable: true, writable: true,
    },

    createElementNS: {
        value: window['createElementNS'], enumerable: true, configurable: true,
    }, createEvent: {
        value: newFunc('createEvent', 1, function createEvent(type) {
            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;print('document.createEvent', type)
            let ele;
            switch (type.toLowerCase()) {
                case 'event':
                    ele = new Event();
                    debugger;
                    break;
                case 'events':
                    ele = new Event();
                    break;
                case 'uievent':
                    ele = new UIEvent();
                    break;
                case 'uievents':
                    ele = new UIEvent();
                    break;
                case 'mouseevent':
                    ele = new MouseEvent();
                    break;
                case 'mouseevents':
                    ele = new MouseEvent();
                    break;
                case 'mutationevent':
                    ele = new MutationEvent();
                    break;
                case 'mutationevents':
                    ele = new MutationEvent();
                    break;
                case 'textevent':
                    ele = new TextEvent();
                    break;
                case 'textevents':
                    ele = new TextEvent();
                    break;
                case 'keyboardevent':
                    ele = new KeyboardEvent();
                    break;
                case 'touchevent':
                    throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${type}') is invalid.`)
                    ele = new TouchEvent();

                case 'customevent':
                    ele = new CustomEvent();
                    break;

                default:
                    throw new DOMException(`Failed to execute 'createEvent' on 'Document': The provided event type ('${type}') is invalid.`)
            }
            ele.isTrusted = false;
            return ele;
        })
    },


    createExpression: {

        value: newFunc('createExpression', 10, function createExpression() {
            if (debug) print('Document.createExpression.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createNSResolver: {

        value: newFunc('createNSResolver', 10, function createNSResolver() {
            if (debug) print('Document.createNSResolver.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createNodeIterator: {

        value: newFunc('createNodeIterator', 10, function createNodeIterator() {
            if (debug) print('Document.createNodeIterator.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createProcessingInstruction: {

        value: newFunc('createProcessingInstruction', 10, function createProcessingInstruction() {
            if (debug) print('Document.createProcessingInstruction.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createRange: {

        value: newFunc('createRange', 10, function createRange() {
            if (debug) print('Document.createRange.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, createTextNode: {

        value: newFunc('createTextNode', 10, function createTextNode(v) {
            if (debug) print('Document.createTextNode.call', arguments)

            let res =  new Text(v);
            let tag = $(`<p>${v}</p>`)
            mm.allNodes.set(res, tag);
            mm.allNodes.set(tag, res);
            return res;


        }), writable: true, enumerable: true, configurable: true,


    }, createTreeWalker: {

        value: newFunc('createTreeWalker', 10, function createTreeWalker() {
            if (debug) print('Document.createTreeWalker.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, elementFromPoint: {

        value: newFunc('elementFromPoint', 10, function elementFromPoint() {
            if (debug) print('Document.elementFromPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, elementsFromPoint: {

        value: newFunc('elementsFromPoint', 10, function elementsFromPoint() {
            if (debug) print('Document.elementsFromPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, evaluate: {

        value: newFunc('evaluate', 10, function evaluate() {
            if (debug) print('Document.evaluate.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, execCommand: {

        value: newFunc('execCommand', 10, function execCommand() {
            if (debug) print('Document.execCommand.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, exitFullscreen: {

        value: newFunc('exitFullscreen', 10, function exitFullscreen() {
            if (debug) print('Document.exitFullscreen.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, exitPictureInPicture: {

        value: newFunc('exitPictureInPicture', 10, function exitPictureInPicture() {
            if (debug) print('Document.exitPictureInPicture.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, exitPointerLock: {

        value: newFunc('exitPointerLock', 10, function exitPointerLock() {
            if (debug) print('Document.exitPointerLock.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, getAnimations: {

        value: newFunc('getAnimations', 10, function getAnimations() {
            if (debug) print('Document.getAnimations.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, getElementById: {
        value: newFunc('getElementById', 1, function getElementById(id) {
            print('Doocument.getElementById', id)
            if (ElementById.hasOwnProperty(id)) {
                print('Doocument.getElementById6', id)
                let result = ElementById[id]
                return result
            }
            if (id === 'umJZL6') {
                debugger;
            }
            let element = $(`#${id}`);
            if (mm.allIframes.length > 0) {
                for (let i = 0; i < mm.allIframes.length; i++) {
                    if (mm.allIframes[i] === undefined)continue;
                    let find = mm.allIframes[i].find(`#${id}`)
                    if (find.length > 0){
                        element = find
                    }

                }
            }
            if (element.length == 0) return null;
            let result = createElementByName(element)
            if (result !== null) {
            }
            print('Doocument.getElementById1', id)

            // if (id === 'yDmH0d' || id === 'rect1') {
            //     print('Doocument.getElementById2', id)
            //
            //     element = $('<body id="yDmH0d" jscontroller="pjICDe" jsaction="rcuQ6b:npT2md; click:FAbpgf; auxclick:FAbpgf;UjQMac:.CLIENT;c0v8t:.CLIENT;keydown:.CLIENT;keyup:.CLIENT;keypress:.CLIENT;qako4e:.CLIENT;TSpWaf:.CLIENT;nHjqDd:.CLIENT;LhiQec:.CLIENT;mousedown:.CLIENT;AHmuwe:.CLIENT;GvneHb:.CLIENT" class="tQj5Y ghyPEc IqBfM ecJEib b30Rkd CQYfx LcUz9d EIlDfe cjGgHb d8Etdd" data-has-scrollable-ogb="false" data-show-ogb="true" data-show-second-row="false" data-show-intent-nav="false" data-theme="" style="min-height: 968px;" data-is-scrolled="false"></body>>')
            //     element.name = 'body'
            //     print(element)
            //     result = createElementByName(element)
            // }
            //
            // if (id === 'CiVa51' || id === 'rect1') {
            //     print('Doocument.getElementById3', id)
            //
            //     element = $('<div id="CiVa51" jscontroller="pjICDe" jsaction="rcuQ6b:npT2md; click:FAbpgf; auxclick:FAbpgf;UjQMac:.CLIENT;c0v8t:.CLIENT;keydown:.CLIENT;keyup:.CLIENT;keypress:.CLIENT;qako4e:.CLIENT;TSpWaf:.CLIENT;nHjqDd:.CLIENT;LhiQec:.CLIENT;mousedown:.CLIENT;AHmuwe:.CLIENT;GvneHb:.CLIENT" class="tQj5Y ghyPEc IqBfM ecJEib b30Rkd CQYfx LcUz9d EIlDfe cjGgHb d8Etdd" data-has-scrollable-ogb="false" data-show-ogb="true" data-show-second-row="false" data-show-intent-nav="false" data-theme="" style="min-height: 968px;" data-is-scrolled="false"></div>>')
            //     element.name = 'div'
            //     print(element)
            //     result = createElementByName(element)
            // }
            // if (id.indexOf('CiVa') === 0) {
            //     print('Doocument.getElementById4', id)
            //
            //     element = $(`<div id="${id}" jscontroller="pjICDe" jsaction="rcuQ6b:npT2md; click:FAbpgf; auxclick:FAbpgf;UjQMac:.CLIENT;c0v8t:.CLIENT;keydown:.CLIENT;keyup:.CLIENT;keypress:.CLIENT;qako4e:.CLIENT;TSpWaf:.CLIENT;nHjqDd:.CLIENT;LhiQec:.CLIENT;mousedown:.CLIENT;AHmuwe:.CLIENT;GvneHb:.CLIENT" class="tQj5Y ghyPEc IqBfM ecJEib b30Rkd CQYfx LcUz9d EIlDfe cjGgHb d8Etdd" data-has-scrollable-ogb="false" data-show-ogb="true" data-show-second-row="false" data-show-intent-nav="false" data-theme="" style="min-height: 968px;" data-is-scrolled="false"></div>>`)
            //     element.name = 'div'
            //     print(element)
            //     result = createElementByName(element)
            // }
            // if (id === 'VOVrr31' || id === 'rect1' || id.startsWith('aEJgt')) {
            //     print('Doocument.getElementById5', id)
            //
            //     element = $(`<div id="${id}" jscontroller="pjICDe" jsaction="rcuQ6b:npT2md; click:FAbpgf; auxclick:FAbpgf;UjQMac:.CLIENT;c0v8t:.CLIENT;keydown:.CLIENT;keyup:.CLIENT;keypress:.CLIENT;qako4e:.CLIENT;TSpWaf:.CLIENT;nHjqDd:.CLIENT;LhiQec:.CLIENT;mousedown:.CLIENT;AHmuwe:.CLIENT;GvneHb:.CLIENT" class="tQj5Y ghyPEc IqBfM ecJEib b30Rkd CQYfx LcUz9d EIlDfe cjGgHb d8Etdd" data-has-scrollable-ogb="false" data-show-ogb="true" data-show-second-row="false" data-show-intent-nav="false" data-theme="" style="min-height: 968px;" data-is-scrolled="false"></div>>`)
            //     element.name = 'div'
            //     print(element)
            //     result = createElementByName(element)
            // }
            // debugger;

            print('Doocument.getElementById', id, result)

            return result
        }), enumerable: true, configurable: true, writable: true,
    },

    getElementsByClassName: {
        value: newFunc('getElementsByClassName', 1, function getElementsByClassName(className) {
            print('Doocument.getElementsByClassName', className)

            let elements = $(`.${className}`);

            let result = new HTMLCollection(elements.length);
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                let ele = createElementByName(element)
                result[i] = ele;
            }
            return result
        }), enumerable: true, configurable: true, writable: true,
    },

    getElementsByName: {
        value: newFunc('getElementsByName', 1, function getElementsByName(name) {

            let elements = $(`[name=${name}]`);

            let result = new HTMLCollection(elements.length);
            for (let i = 0; i < elements.length; i++) {
                let element = elements[i];
                let ele = createElementByName(element)

                result[i] = ele;
            }
            print('Doocument.getElementsByName', name, result)

            return result
        }),
    },

    getElementsByTagName: {
        value: newFunc('getElementsByTagName', 1, function getElementsByTagName(tagName) {
            print('Doocument.getElementsByTagName', tagName)
            if (tagName === 'head'){
                // debugger;
            }
            let elements = $(tagName);
            let result = new HTMLCollection(elements.length);
            if (result.length == 0){
                return result
            }
            let tmp = createElementByName(elements);
            if (elements.length === 1){
                result[0] = tmp
            }else{
                for (let i = 0; i < tmp.length; i++) {
                    result[i] = tmp[i];
                }
            }

            return result

        }), enumerable: true, configurable: true, writable: true,
    },

    getElementsByTagNameNS: {

        value: newFunc('getElementsByTagNameNS', 10, function getElementsByTagNameNS() {
            if (debug) print('Document.getElementsByTagNameNS.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, getSelection: {

        value: newFunc('getSelection', 10, function getSelection() {
            if (debug) print('Document.getSelection.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, hasFocus: {

        value: newFunc('hasFocus', 10, function hasFocus() {
            if (debug) print('Document.hasFocus.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, hasStorageAccess: {

        value: newFunc('hasStorageAccess', 10, function hasStorageAccess() {
            if (debug) print('Document.hasStorageAccess.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, hasUnpartitionedCookieAccess: {

        value: newFunc('hasUnpartitionedCookieAccess', 10, function hasUnpartitionedCookieAccess() {
            if (debug) print('Document.hasUnpartitionedCookieAccess.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, importNode: {

        value: newFunc('importNode', 10, function importNode(v,opt) {
            if (debug) print('Document.importNode.call', arguments)
            return createElementByName($(mm.allNodes.get(v).html()))


        }), writable: true, enumerable: true, configurable: true,


    }, open: {

        value: newFunc('open', 10, function open() {
            if (debug) print('Document.open.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, prepend: {

        value: newFunc('prepend', 10, function prepend() {
            if (debug) print('Document.prepend.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, queryCommandEnabled: {

        value: newFunc('queryCommandEnabled', 10, function queryCommandEnabled() {
            if (debug) print('Document.queryCommandEnabled.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, queryCommandIndeterm: {

        value: newFunc('queryCommandIndeterm', 10, function queryCommandIndeterm() {
            if (debug) print('Document.queryCommandIndeterm.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, queryCommandState: {

        value: newFunc('queryCommandState', 10, function queryCommandState() {
            if (debug) print('Document.queryCommandState.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, queryCommandSupported: {

        value: newFunc('queryCommandSupported', 10, function queryCommandSupported() {
            if (debug) print('Document.queryCommandSupported.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, queryCommandValue: {

        value: newFunc('queryCommandValue', 10, function queryCommandValue() {
            if (debug) print('Document.queryCommandValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, querySelector: {

        value: newFunc('querySelector', 10, function querySelector(arg) {
            if (debug) print('Document.querySelector.call', arguments)
            // debugger;

            let res = $(arg)
            // debugger;
            if (res.length > 0) {
                res = createElementByName(res)
            } else if (arg.startsWith('#')) {
                res = createElementByName($(`<div id="${arg.slice(1,)}"></div>`))
                res.id = arg.slice(1,)
                // debugger;
            } else if (res === null || res == undefined || res.length === 0) {
                if (arg.startsWith('#') && ElementById.hasOwnProperty(arg.slice(1,))) {
                    res = createElementByName(ElementById[arg.slice(1,)])
                }
            } else{
                res = null
            }
            if (arg === '#verifying'){
                debugger;
            }
            if (debug) print('Document.querySelector.res', res)
            return res;

        }), writable: true, enumerable: true, configurable: true,


    }, querySelectorAll: {

        value: newFunc('querySelectorAll', 10, function querySelectorAll(arg) {
            if (debug) print('Func', 'Document', 'querySelectorAll', arguments);

            if (!Document.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (arg === '#xZTSEj') {
                debugger;
            }

            let elements = $(arg);
            print(elements)
            if (arg === '#verifying-i' ){
                elements = $('<div></div>')
                // debugger;
            }
            // debugger;
            if (debug) print('Func', 'Document', 'querySelectorAll2', elements.length);
            if (elements.length === 0){
                if (mm.allIframes.length > 0) {
                    for (let i = 0; i < mm.allIframes.length; i++) {
                        let find = mm.allIframes[i].find(arg)
                        if (find.length > 0){
                            elements = find
                        }

                    }
                }
            }
            if (debug) print('Func', 'Document', 'querySelectorAll22', elements.length);

            let result = new NodeList(elements.length);
            if (elements.length !== 0){
                if (elements.length === 1){
                    let tmp = createElementByName(elements);

                    result[0] = tmp
                }else{
                    for (var i = 0; i < elements.length; i++) {
                        let tmp = createElementByName(elements.eq(i));

                        result[i] = tmp;
                    }
                }

            }
            if (debug) print('Func', 'Document', 'querySelectorAll3', arguments, result.length);
            return result

        }), writable: true, enumerable: true, configurable: true,


    }, releaseEvents: {

        value: newFunc('releaseEvents', 10, function releaseEvents() {
            if (debug) print('Document.releaseEvents.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, replaceChildren: {

        value: newFunc('replaceChildren', 10, function replaceChildren() {
            if (debug) print('Document.replaceChildren.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, requestStorageAccess: {

        value: newFunc('requestStorageAccess', 10, function requestStorageAccess() {
            if (debug) print('Document.requestStorageAccess.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, requestStorageAccessFor: {

        value: newFunc('requestStorageAccessFor', 10, function requestStorageAccessFor() {
            if (debug) print('Document.requestStorageAccessFor.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, startViewTransition: {

        value: newFunc('startViewTransition', 10, function startViewTransition() {
            if (debug) print('Document.startViewTransition.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, webkitCancelFullScreen: {

        value: newFunc('webkitCancelFullScreen', 10, function webkitCancelFullScreen() {
            if (debug) print('Document.webkitCancelFullScreen.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, webkitExitFullscreen: {

        value: newFunc('webkitExitFullscreen', 10, function webkitExitFullscreen() {
            if (debug) print('Document.webkitExitFullscreen.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, write: {

        value: newFunc('write', 10, function write(v) {
            if (debug) print('Document.write.call',this, arguments)
            mm.allNodes.get(this).html(v)

        }), writable: true, enumerable: true, configurable: true,


    }, writeln: {

        value: newFunc('writeln', 10, function writeln() {
            if (debug) print('Document.writeln.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('Document.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    }, fragmentDirective: {

        get: newFunc('fragmentDirective', 10, function fragmentDirective() {
            let res = mm.memory.private_data.get(this).fragmentDirective || new FragmentDirective();
            if (debug) print('Document.fragmentDirective.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, browsingTopics: {

        value: newFunc('browsingTopics', 10, function browsingTopics() {
            if (debug) print('Document.browsingTopics.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, hasPrivateToken: {

        value: newFunc('hasPrivateToken', 10, function hasPrivateToken() {
            if (debug) print('Document.hasPrivateToken.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, hasRedemptionRecord: {

        value: newFunc('hasRedemptionRecord', 10, function hasRedemptionRecord() {
            if (debug) print('Document.hasRedemptionRecord.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    }, onscrollend: {

        get: newFunc('onscrollend', 10, function onscrollend() {
            let res = mm.memory.private_data.get(this).onscrollend || null;
            if (debug) print('Document.onscrollend.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollend', 1, function onscrollend(value) {
            if (debug) print('Document.onscrollend.set', value)
            mm.memory.private_data.get(this).onscrollend = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onscrollsnapchange: {

        get: newFunc('onscrollsnapchange', 10, function onscrollsnapchange() {
            let res = mm.memory.private_data.get(this).onscrollsnapchange || null;
            if (debug) print('Document.onscrollsnapchange.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchange', 1, function onscrollsnapchange(value) {
            if (debug) print('Document.onscrollsnapchange.set', value)
            mm.memory.private_data.get(this).onscrollsnapchange = value

        }, {set: true}), enumerable: true, configurable: true,


    }, onscrollsnapchanging: {

        get: newFunc('onscrollsnapchanging', 10, function onscrollsnapchanging() {
            let res = mm.memory.private_data.get(this).onscrollsnapchanging || null;
            if (debug) print('Document.onscrollsnapchanging.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('onscrollsnapchanging', 1, function onscrollsnapchanging(value) {
            if (debug) print('Document.onscrollsnapchanging.set', value)
            mm.memory.private_data.get(this).onscrollsnapchanging = value

        }, {set: true}), enumerable: true, configurable: true,


    }, caretPositionFromPoint: {

        value: newFunc('caretPositionFromPoint', 10, function caretPositionFromPoint() {
            if (debug) print('Document.caretPositionFromPoint.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
})
Object.getOwnPropertyNames(Document.prototype)

Object.setPrototypeOf(Document.prototype, Node.prototype)
Object.setPrototypeOf(Document, Node)
Document.__proto__ = Node.prototype


;AnimationTimeline = newFunc('AnimationTimeline', 1, function () {
    print('AnimationTimeline.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(AnimationTimeline.prototype, {
    currentTime: {

        get: newFunc('currentTime', 10, function () {
            let res = mm.memory.private_data.get(this).currentTime;
            if (debug) print('AnimationTimeline.currentTime.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, duration: {

        get: newFunc('duration', 10, function () {
            let res = mm.memory.private_data.get(this).duration;
            if (debug) print('AnimationTimeline.duration.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    }, constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('AnimationTimeline.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});


DocumentTimeline = newFunc('DocumentTimeline', 1, function () {
    print('DocumentTimeline.call');
    mm.memory.private_data.set(this, {})
});


;delete DocumentTimeline.prototype.constructor;
;Object.defineProperties(DocumentTimeline.prototype, {
    [Symbol.toStringTag]: {
        value: 'DocumentTimeline'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!DocumentTimeline.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('DocumentTimeline.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Object.setPrototypeOf(DocumentTimeline, AnimationTimeline.prototype)
// if (proxy) Document = mm.proxy(Document, 'Document')
XMLDocument = newFunc('XMLDocument', 1, function () {
    print('XMLDocument.call');
    mm.memory.private_data.set(this, {})
});


;delete XMLDocument.prototype.constructor;
;Object.defineProperties(XMLDocument.prototype, {
    [Symbol.toStringTag]: {
        value: 'XMLDocument'
    },

    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!XMLDocument.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('XMLDocument.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})

Object.setPrototypeOf(XMLDocument.prototype, Document.prototype); // 指定属性原型的原型链
Object.setPrototypeOf(XMLDocument, Document);




