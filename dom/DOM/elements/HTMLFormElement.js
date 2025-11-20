HTMLFormElement = newFunc('HTMLFormElement', 10, function HTMLFormElement() {
    mm.memory.private_data.set(this, {})
})
// ; (function () {
//     const $cssstyle_attribute = [
//         "accentColor", "additiveSymbols", "alignContent", "alignItems", "alignSelf", "alignmentBaseline", "all", "animation", "animationDelay", "animationDirection",
//         "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "appRegion",
//         "appearance", "ascentOverride", "aspectRatio", "backdropFilter", "backfaceVisibility", "background", "backgroundAttachment", "backgroundBlendMode",
//         "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPosition", "backgroundPositionX", "backgroundPositionY",
//         "backgroundRepeat", "backgroundRepeatX", "backgroundRepeatY", "backgroundSize", "baselineShift", "blockSize", "border", "borderBlock", "borderBlockColor",
//         "borderBlockEnd", "borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth", "borderBlockStart", "borderBlockStartColor", "borderBlockStartStyle",
//         "borderBlockStartWidth", "borderBlockStyle", "borderBlockWidth", "borderBottom", "borderBottomColor", "borderBottomLeftRadius", "borderBottomRightRadius",
//         "borderBottomStyle", "borderBottomWidth", "borderCollapse", "borderColor", "borderEndEndRadius", "borderEndStartRadius", "borderImage", "borderImageOutset",
//         "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderInline", "borderInlineColor", "borderInlineEnd",
//         "borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth", "borderInlineStart", "borderInlineStartColor", "borderInlineStartStyle",
//         "borderInlineStartWidth", "borderInlineStyle", "borderInlineWidth", "borderLeft", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRadius",
//         "borderRight", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderSpacing", "borderStartEndRadius", "borderStartStartRadius",
//         "borderStyle", "borderTop", "borderTopColor", "borderTopLeftRadius", "borderTopRightRadius", "borderTopStyle", "borderTopWidth", "borderWidth", "bottom",
//         "boxShadow", "boxSizing", "breakAfter", "breakBefore", "breakInside", "bufferedRendering", "captionSide", "caretColor", "clear", "clip", "clipPath",
//         "clipRule", "color", "colorInterpolation", "colorInterpolationFilters", "colorRendering", "colorScheme", "columnCount", "columnFill", "columnGap",
//         "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columnSpan", "columnWidth", "columns", "contain", "containIntrinsicBlockSize",
//         "containIntrinsicHeight", "containIntrinsicInlineSize", "containIntrinsicSize", "containIntrinsicWidth", "content", "contentVisibility", "counterIncrement",
//         "counterReset", "counterSet", "cursor", "cx", "cy", "d", "descentOverride", "direction", "display", "dominantBaseline", "emptyCells", "fallback", "fill",
//         "fillOpacity", "fillRule", "filter", "flex", "flexBasis", "flexDirection", "flexFlow", "flexGrow", "flexShrink", "flexWrap", "float", "floodColor",
//         "floodOpacity", "font", "fontDisplay", "fontFamily", "fontFeatureSettings", "fontKerning", "fontOpticalSizing", "fontSize", "fontStretch", "fontStyle",
//         "fontSynthesis", "fontSynthesisSmallCaps", "fontSynthesisStyle", "fontSynthesisWeight", "fontVariant", "fontVariantCaps", "fontVariantEastAsian",
//         "fontVariantLigatures", "fontVariantNumeric", "fontVariationSettings", "fontWeight", "forcedColorAdjust", "gap", "grid", "gridArea", "gridAutoColumns",
//         "gridAutoFlow", "gridAutoRows", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridColumnStart", "gridGap", "gridRow", "gridRowEnd", "gridRowGap",
//         "gridRowStart", "gridTemplate", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows", "height", "hyphens", "imageOrientation", "imageRendering",
//         "inherits", "initialValue", "inlineSize", "inset", "insetBlock", "insetBlockEnd", "insetBlockStart", "insetInline", "insetInlineEnd", "insetInlineStart",
//         "isolation", "justifyContent", "justifyItems", "justifySelf", "left", "letterSpacing", "lightingColor", "lineBreak", "lineGapOverride", "lineHeight",
//         "listStyle", "listStyleImage", "listStylePosition", "listStyleType", "margin", "marginBlock", "marginBlockEnd", "marginBlockStart", "marginBottom",
//         "marginInline", "marginInlineEnd", "marginInlineStart", "marginLeft", "marginRight", "marginTop", "marker", "markerEnd", "markerMid", "markerStart",
//         "mask", "maskType", "maxBlockSize", "maxHeight", "maxInlineSize", "maxWidth", "maxZoom", "minBlockSize", "minHeight", "minInlineSize", "minWidth", "minZoom",
//         "mixBlendMode", "negative", "objectFit", "objectPosition", "offset", "offsetDistance", "offsetPath", "offsetRotate", "opacity", "order", "orientation",
//         "orphans", "outline", "outlineColor", "outlineOffset", "outlineStyle", "outlineWidth", "overflow", "overflowAnchor", "overflowClipMargin", "overflowWrap",
//         "overflowX", "overflowY", "overscrollBehavior", "overscrollBehaviorBlock", "overscrollBehaviorInline", "overscrollBehaviorX", "overscrollBehaviorY",
//         "pad", "padding", "paddingBlock", "paddingBlockEnd", "paddingBlockStart", "paddingBottom", "paddingInline", "paddingInlineEnd", "paddingInlineStart",
//         "paddingLeft", "paddingRight", "paddingTop", "page", "pageBreakAfter", "pageBreakBefore", "pageBreakInside", "pageOrientation", "paintOrder", "perspective",
//         "perspectiveOrigin", "placeContent", "placeItems", "placeSelf", "pointerEvents", "position", "prefix", "quotes", "r", "range", "resize", "right", "rowGap",
//         "rubyPosition", "rx", "ry", "scrollBehavior", "scrollMargin", "scrollMarginBlock", "scrollMarginBlockEnd", "scrollMarginBlockStart", "scrollMarginBottom",
//         "scrollMarginInline", "scrollMarginInlineEnd", "scrollMarginInlineStart", "scrollMarginLeft", "scrollMarginRight", "scrollMarginTop", "scrollPadding",
//         "scrollPaddingBlock", "scrollPaddingBlockEnd", "scrollPaddingBlockStart", "scrollPaddingBottom", "scrollPaddingInline", "scrollPaddingInlineEnd",
//         "scrollPaddingInlineStart", "scrollPaddingLeft", "scrollPaddingRight", "scrollPaddingTop", "scrollSnapAlign", "scrollSnapStop", "scrollSnapType",
//         "scrollbarGutter", "shapeImageThreshold", "shapeMargin", "shapeOutside", "shapeRendering", "size", "sizeAdjust", "speak", "speakAs", "src", "stopColor",
//         "stopOpacity", "stroke", "strokeDasharray", "strokeDashoffset", "strokeLinecap", "strokeLinejoin", "strokeMiterlimit", "strokeOpacity", "strokeWidth",
//         "suffix", "symbols", "syntax", "system", "tabSize", "tableLayout", "textAlign", "textAlignLast", "textAnchor", "textCombineUpright", "textDecoration",
//         "textDecorationColor", "textDecorationLine", "textDecorationSkipInk", "textDecorationStyle", "textDecorationThickness", "textIndent", "textOrientation",
//         "textOverflow", "textRendering", "textShadow", "textSizeAdjust", "textTransform", "textUnderlineOffset", "textUnderlinePosition", "top", "touchAction",
//         "transform", "transformBox", "transformOrigin", "transformStyle", "transition", "transitionDelay", "transitionDuration", "transitionProperty",
//         "transitionTimingFunction", "unicodeBidi", "unicodeRange", "userSelect", "userZoom", "vectorEffect", "verticalAlign", "visibility", "webkitAlignContent",
//         "webkitAlignItems", "webkitAlignSelf", "webkitAnimation", "webkitAnimationDelay", "webkitAnimationDirection", "webkitAnimationDuration",
//         "webkitAnimationFillMode", "webkitAnimationIterationCount", "webkitAnimationName", "webkitAnimationPlayState", "webkitAnimationTimingFunction",
//         "webkitAppRegion", "webkitAppearance", "webkitBackfaceVisibility", "webkitBackgroundClip", "webkitBackgroundOrigin", "webkitBackgroundSize",
//         "webkitBorderAfter", "webkitBorderAfterColor", "webkitBorderAfterStyle", "webkitBorderAfterWidth", "webkitBorderBefore", "webkitBorderBeforeColor",
//         "webkitBorderBeforeStyle", "webkitBorderBeforeWidth", "webkitBorderBottomLeftRadius", "webkitBorderBottomRightRadius", "webkitBorderEnd",
//         "webkitBorderEndColor", "webkitBorderEndStyle", "webkitBorderEndWidth", "webkitBorderHorizontalSpacing", "webkitBorderImage", "webkitBorderRadius",
//         "webkitBorderStart", "webkitBorderStartColor", "webkitBorderStartStyle", "webkitBorderStartWidth", "webkitBorderTopLeftRadius",
//         "webkitBorderTopRightRadius", "webkitBorderVerticalSpacing", "webkitBoxAlign", "webkitBoxDecorationBreak", "webkitBoxDirection", "webkitBoxFlex",
//         "webkitBoxOrdinalGroup", "webkitBoxOrient", "webkitBoxPack", "webkitBoxReflect", "webkitBoxShadow", "webkitBoxSizing", "webkitClipPath",
//         "webkitColumnBreakAfter", "webkitColumnBreakBefore", "webkitColumnBreakInside", "webkitColumnCount", "webkitColumnGap", "webkitColumnRule",
//         "webkitColumnRuleColor", "webkitColumnRuleStyle", "webkitColumnRuleWidth", "webkitColumnSpan", "webkitColumnWidth", "webkitColumns", "webkitFilter",
//         "webkitFlex", "webkitFlexBasis", "webkitFlexDirection", "webkitFlexFlow", "webkitFlexGrow", "webkitFlexShrink", "webkitFlexWrap",
//         "webkitFontFeatureSettings", "webkitFontSmoothing", "webkitHighlight", "webkitHyphenateCharacter", "webkitJustifyContent", "webkitLineBreak",
//         "webkitLineClamp", "webkitLocale", "webkitLogicalHeight", "webkitLogicalWidth", "webkitMarginAfter", "webkitMarginBefore", "webkitMarginEnd",
//         "webkitMarginStart", "webkitMask", "webkitMaskBoxImage", "webkitMaskBoxImageOutset", "webkitMaskBoxImageRepeat", "webkitMaskBoxImageSlice",
//         "webkitMaskBoxImageSource", "webkitMaskBoxImageWidth", "webkitMaskClip", "webkitMaskComposite", "webkitMaskImage", "webkitMaskOrigin",
//         "webkitMaskPosition", "webkitMaskPositionX", "webkitMaskPositionY", "webkitMaskRepeat", "webkitMaskRepeatX", "webkitMaskRepeatY", "webkitMaskSize",
//         "webkitMaxLogicalHeight", "webkitMaxLogicalWidth", "webkitMinLogicalHeight", "webkitMinLogicalWidth", "webkitOpacity", "webkitOrder",
//         "webkitPaddingAfter", "webkitPaddingBefore", "webkitPaddingEnd", "webkitPaddingStart", "webkitPerspective", "webkitPerspectiveOrigin",
//         "webkitPerspectiveOriginX", "webkitPerspectiveOriginY", "webkitPrintColorAdjust", "webkitRtlOrdering", "webkitRubyPosition",
//         "webkitShapeImageThreshold", "webkitShapeMargin", "webkitShapeOutside", "webkitTapHighlightColor", "webkitTextCombine", "webkitTextDecorationsInEffect",
//         "webkitTextEmphasis", "webkitTextEmphasisColor", "webkitTextEmphasisPosition", "webkitTextEmphasisStyle", "webkitTextFillColor",
//         "webkitTextOrientation", "webkitTextSecurity", "webkitTextSizeAdjust", "webkitTextStroke", "webkitTextStrokeColor", "webkitTextStrokeWidth",
//         "webkitTransform", "webkitTransformOrigin", "webkitTransformOriginX", "webkitTransformOriginY", "webkitTransformOriginZ", "webkitTransformStyle",
//         "webkitTransition", "webkitTransitionDelay", "webkitTransitionDuration", "webkitTransitionProperty", "webkitTransitionTimingFunction", "webkitUserDrag",
//         "webkitUserModify", "webkitUserSelect", "webkitWritingMode", "whiteSpace", "widows", "width", "willChange", "wordBreak", "wordSpacing", "wordWrap",
//         "writingMode", "x", "y", "zIndex", "zoom"
//     ]
//
//     const $safe_get_attribute = [
//          'autocapitalize', 'autofocus', 'contentEditable', 'dataset', 'dir', 'draggable', 'enterKeyHint', 'hidden', 'innerText',
//         'inputMode', 'isContentEditable', 'lang', 'nonce', 'offsetHeight', 'offsetLeft', 'offsetParent', 'offsetTop', 'offsetWidth', 'onabort',
//         'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur', 'oncancel', 'oncanplay',
//         'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut', 'ondblclick', 'ondrag',
//         'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied', 'onended', 'onerror',
//         'onfocus', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup', 'onload', 'onloadeddata',
//         'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup',
//         'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave',
//         'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset',
//         'onresize', 'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart',
//         'onslotchange', 'onstalled', 'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun',
//         'ontransitionstart', 'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart',
//         'onwebkittransitionend', 'onwheel', 'outerText', 'spellcheck', 'style', 'tabIndex', 'title', 'translate', 'virtualKeyboardPolicy'
//     ];
//     const $safe_set_attribute = [
//         'accessKey', 'autocapitalize', 'autofocus', 'contentEditable', 'dir', 'draggable', 'enterKeyHint', 'hidden', 'innerText', 'inputMode',
//         'lang', 'nonce', 'onabort', 'onanimationend', 'onanimationiteration', 'onanimationstart', 'onauxclick', 'onbeforexrselect', 'onblur',
//         'oncancel', 'oncanplay', 'oncanplaythrough', 'onchange', 'onclick', 'onclose', 'oncontextmenu', 'oncopy', 'oncuechange', 'oncut',
//         'ondblclick', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'ondurationchange', 'onemptied',
//         'onended', 'onerror', 'onfocus', 'onformdata', 'ongotpointercapture', 'oninput', 'oninvalid', 'onkeydown', 'onkeypress', 'onkeyup',
//         'onload', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onlostpointercapture', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover',
//         'onmouseup', 'onmousewheel', 'onpaste', 'onpause', 'onplay', 'onplaying', 'onpointercancel', 'onpointerdown', 'onpointerenter', 'onpointerleave',
//         'onpointermove', 'onpointerout', 'onpointerover', 'onpointerrawupdate', 'onpointerup', 'onprogress', 'onratechange', 'onreset', 'onresize',
//         'onscroll', 'onsecuritypolicyviolation', 'onseeked', 'onseeking', 'onselect', 'onselectionchange', 'onselectstart', 'onslotchange', 'onstalled',
//         'onsubmit', 'onsuspend', 'ontimeupdate', 'ontoggle', 'ontransitioncancel', 'ontransitionend', 'ontransitionrun', 'ontransitionstart',
//         'onvolumechange', 'onwaiting', 'onwebkitanimationend', 'onwebkitanimationiteration', 'onwebkitanimationstart', 'onwebkittransitionend',
//         'onwheel', 'outerText', 'spellcheck', 'style', 'tabIndex', 'title', 'translate', 'virtualKeyboardPolicy'
//     ];
//     const $safe_func_attribute = ['attachInternals', 'blur', 'click', 'focus'];
//
//     HTMLFormElement.prototype = {
//         get accessKey() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).accessKey, "");
//             if (debug) print('Get', 'HTMLElement', 'accessKey', arguments, result);
//             return result;
//         },
//         set accessKey(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'accessKey', arguments);
//             mm.memory.private_data.get(this).accessKey = value + "";
//         },
//         attachInternals() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = undefined;
//             if (debug) print('Func', 'HTMLElement', 'attachInternals', arguments, result);
//             return result;
//         },
//         get autocapitalize() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).autocapitalize, "");
//             if (debug) print('Get', 'HTMLElement', 'autocapitalize', arguments, result);
//             return result;
//         },
//         set autocapitalize(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'autocapitalize', arguments);
//             mm.memory.private_data.get(this).autocapitalize = value + "";
//         },
//         get autofocus() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).autofocus, false);
//             if (debug) print('Get', 'HTMLElement', 'autofocus', arguments, result);
//             return result;
//         },
//         set autofocus(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'autofocus', arguments);
//             mm.memory.private_data.get(this).autofocus = value ? true : false;
//         },
//         blur() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = undefined;
//             if (debug) print('Func', 'HTMLElement', 'blur', arguments, result);
//             return result;
//         },
//         click() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = undefined;
//             if (debug) print('Func', 'HTMLElement', 'click', arguments, result);
//             return result;
//         },
//         get contentEditable() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).contentEditable, "inherit");
//             if (debug) print('Get', 'HTMLElement', 'contentEditable', arguments, result);
//             return result;
//         },
//         set contentEditable(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (['true', 'false', 'plaintext-only', 'inherit'].index(value + "") != -1) {
//                 throw new DOMException(`Failed to set the 'contentEditable' property on 'HTMLElement': The value provided ('111') is not one of 'true', 'false', 'plaintext-only', or 'inherit'.`)
//             }
//             if (debug) print('Set', 'HTMLElement', 'contentEditable', arguments);
//             mm.memory.private_data.get(this).contentEditable = value + "";
//         },
//         get dataset() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let ele = mm.memory.private_data.get(this).dataset;
//             if (!ele) {
//                 ele = new DOMStringMap();
//                 mm.memory.private_data.get(this).dataset = ele;
//             }
//             let result = ele;
//             if (debug) print('Func', 'HTMLElement', 'if ', arguments, result);
//             return result;
//         },
//         get dir() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).dir, "");
//             if (debug) print('Get', 'HTMLElement', 'dir', arguments, result);
//             return result;
//         },
//         set dir(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'dir', arguments);
//             mm.memory.private_data.get(this).dir = value + "";
//         },
//         get draggable() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).draggable, false);
//             if (debug) print('Get', 'HTMLElement', 'draggable', arguments, result);
//             return result;
//         },
//         set draggable(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'draggable', arguments);
//             mm.memory.private_data.get(this).draggable = value ? true : false;
//         },
//         get enterKeyHint() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).enterKeyHint, "");
//             if (debug) print('Get', 'HTMLElement', 'enterKeyHint', arguments, result);
//             return result;
//         },
//         set enterKeyHint(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'enterKeyHint', arguments);
//             mm.memory.private_data.get(this).enterKeyHint = value + "";
//         },
//         focus() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = undefined;
//             if (debug) print('Func', 'HTMLElement', 'focus', arguments, result);
//             return result;
//         },
//         get hidden() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).hidden, false);
//             if (debug) print('Get', 'HTMLElement', 'hidden', arguments, result);
//             return result;
//         },
//         set hidden(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'hidden', arguments);
//             mm.memory.private_data.get(this).hidden = value ? true : false;
//         },
//         get innerText() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).innerText, "");
//             if (debug) print('Get', 'HTMLElement', 'innerText', arguments, result);
//             return result;
//         },
//         set innerText(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'innerText', arguments);
//             mm.memory.private_data.get(this).innerText = value + "";
//         },
//         get inputMode() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).inputMode, "");
//             if (debug) print('Get', 'HTMLElement', 'inputMode', arguments, result);
//             return result;
//         },
//         set inputMode(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'inputMode', arguments);
//             mm.memory.private_data.get(this).inputMode = value + "";
//         },
//         get isContentEditable() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).isContentEditable, false);
//             if (debug) print('Get', 'HTMLElement', 'isContentEditable', arguments, result);
//             return result;
//         },
//         get lang() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).lang, "");
//             if (debug) print('Get', 'HTMLElement', 'lang', arguments, result);
//             return result;
//         },
//         set lang(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'lang', arguments);
//             mm.memory.private_data.get(this).lang = value + "";
//         },
//         get nonce() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).nonce, "");
//             if (debug) print('Get', 'HTMLElement', 'nonce', arguments, result);
//             return result;
//         },
//         set nonce(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'nonce', arguments);
//             mm.memory.private_data.get(this).nonce = value + "";
//         },
//         get offsetHeight() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = 0;
//             if (debug) print('Get', 'HTMLElement', 'offsetHeight', arguments, result);
//             return result;
//         },
//         get offsetLeft() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = 0;
//             if (debug) print('Get', 'HTMLElement', 'offsetLeft', arguments, result);
//             return result;
//         },
//         get offsetParent() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = null;
//             if (debug) print('Get', 'HTMLElement', 'offsetParent', arguments, result);
//             return result;
//         },
//         get offsetTop() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = 0;
//             if (debug) print('Get', 'HTMLElement', 'offsetTop', arguments, result);
//             return result;
//         },
//         get offsetWidth() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = 0;
//             if (debug) print('Get', 'HTMLElement', 'offsetWidth', arguments, result);
//             return result;
//         },
//         get onabort() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onabort, null);
//             if (debug) print('Get', 'HTMLElement', 'onabort', arguments, result);
//             return result;
//         },
//         set onabort(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onabort', arguments);
//             mm.memory.private_data.get(this).onabort = value + "";
//         },
//         get onanimationend() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onanimationend, null);
//             if (debug) print('Get', 'HTMLElement', 'onanimationend', arguments, result);
//             return result;
//         },
//         set onanimationend(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onanimationend', arguments);
//             mm.memory.private_data.get(this).onanimationend = value + "";
//         },
//         get onanimationiteration() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onanimationiteration, null);
//             if (debug) print('Get', 'HTMLElement', 'onanimationiteration', arguments, result);
//             return result;
//         },
//         set onanimationiteration(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onanimationiteration', arguments);
//             mm.memory.private_data.get(this).onanimationiteration = value + "";
//         },
//         get onanimationstart() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onanimationstart, null);
//             if (debug) print('Get', 'HTMLElement', 'onanimationstart', arguments, result);
//             return result;
//         },
//         set onanimationstart(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onanimationstart', arguments);
//             mm.memory.private_data.get(this).onanimationstart = value + "";
//         },
//         get onauxclick() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onauxclick, null);
//             if (debug) print('Get', 'HTMLElement', 'onauxclick', arguments, result);
//             return result;
//         },
//         set onauxclick(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onauxclick', arguments);
//             mm.memory.private_data.get(this).onauxclick = value + "";
//         },
//         get onbeforexrselect() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onbeforexrselect, null);
//             if (debug) print('Get', 'HTMLElement', 'onbeforexrselect', arguments, result);
//             return result;
//         },
//         set onbeforexrselect(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onbeforexrselect', arguments);
//             mm.memory.private_data.get(this).onbeforexrselect = value + "";
//         },
//         get onblur() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onblur, null);
//             if (debug) print('Get', 'HTMLElement', 'onblur', arguments, result);
//             return result;
//         },
//         set onblur(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onblur', arguments);
//             mm.memory.private_data.get(this).onblur = value + "";
//         },
//         get oncancel() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oncancel, null);
//             if (debug) print('Get', 'HTMLElement', 'oncancel', arguments, result);
//             return result;
//         },
//         set oncancel(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oncancel', arguments);
//             mm.memory.private_data.get(this).oncancel = value + "";
//         },
//         get oncanplay() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oncanplay, null);
//             if (debug) print('Get', 'HTMLElement', 'oncanplay', arguments, result);
//             return result;
//         },
//         set oncanplay(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oncanplay', arguments);
//             mm.memory.private_data.get(this).oncanplay = value + "";
//         },
//         get oncanplaythrough() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oncanplaythrough, null);
//             if (debug) print('Get', 'HTMLElement', 'oncanplaythrough', arguments, result);
//             return result;
//         },
//         set oncanplaythrough(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oncanplaythrough', arguments);
//             mm.memory.private_data.get(this).oncanplaythrough = value + "";
//         },
//         get onchange() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onchange, null);
//             if (debug) print('Get', 'HTMLElement', 'onchange', arguments, result);
//             return result;
//         },
//         set onchange(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onchange', arguments);
//             mm.memory.private_data.get(this).onchange = value + "";
//         },
//         get onclick() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onclick, null);
//             if (debug) print('Get', 'HTMLElement', 'onclick', arguments, result);
//             return result;
//         },
//         set onclick(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onclick', arguments);
//             mm.memory.private_data.get(this).onclick = value + "";
//         },
//         get onclose() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onclose, null);
//             if (debug) print('Get', 'HTMLElement', 'onclose', arguments, result);
//             return result;
//         },
//         set onclose(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onclose', arguments);
//             mm.memory.private_data.get(this).onclose = value + "";
//         },
//         get oncontextmenu() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oncontextmenu, null);
//             if (debug) print('Get', 'HTMLElement', 'oncontextmenu', arguments, result);
//             return result;
//         },
//         set oncontextmenu(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oncontextmenu', arguments);
//             mm.memory.private_data.get(this).oncontextmenu = value + "";
//         },
//         get oncopy() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oncopy, null);
//             if (debug) print('Get', 'HTMLElement', 'oncopy', arguments, result);
//             return result;
//         },
//         set oncopy(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oncopy', arguments);
//             mm.memory.private_data.get(this).oncopy = value + "";
//         },
//         get oncuechange() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oncuechange, null);
//             if (debug) print('Get', 'HTMLElement', 'oncuechange', arguments, result);
//             return result;
//         },
//         set oncuechange(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oncuechange', arguments);
//             mm.memory.private_data.get(this).oncuechange = value + "";
//         },
//         get oncut() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oncut, null);
//             if (debug) print('Get', 'HTMLElement', 'oncut', arguments, result);
//             return result;
//         },
//         set oncut(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oncut', arguments);
//             mm.memory.private_data.get(this).oncut = value + "";
//         },
//         get ondblclick() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondblclick, null);
//             if (debug) print('Get', 'HTMLElement', 'ondblclick', arguments, result);
//             return result;
//         },
//         set ondblclick(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondblclick', arguments);
//             mm.memory.private_data.get(this).ondblclick = value + "";
//         },
//         get ondrag() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondrag, null);
//             if (debug) print('Get', 'HTMLElement', 'ondrag', arguments, result);
//             return result;
//         },
//         set ondrag(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondrag', arguments);
//             mm.memory.private_data.get(this).ondrag = value + "";
//         },
//         get ondragend() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondragend, null);
//             if (debug) print('Get', 'HTMLElement', 'ondragend', arguments, result);
//             return result;
//         },
//         set ondragend(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondragend', arguments);
//             mm.memory.private_data.get(this).ondragend = value + "";
//         },
//         get ondragenter() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondragenter, null);
//             if (debug) print('Get', 'HTMLElement', 'ondragenter', arguments, result);
//             return result;
//         },
//         set ondragenter(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondragenter', arguments);
//             mm.memory.private_data.get(this).ondragenter = value + "";
//         },
//         get ondragleave() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondragleave, null);
//             if (debug) print('Get', 'HTMLElement', 'ondragleave', arguments, result);
//             return result;
//         },
//         set ondragleave(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondragleave', arguments);
//             mm.memory.private_data.get(this).ondragleave = value + "";
//         },
//         get ondragover() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondragover, null);
//             if (debug) print('Get', 'HTMLElement', 'ondragover', arguments, result);
//             return result;
//         },
//         set ondragover(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondragover', arguments);
//             mm.memory.private_data.get(this).ondragover = value + "";
//         },
//         get ondragstart() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondragstart, null);
//             if (debug) print('Get', 'HTMLElement', 'ondragstart', arguments, result);
//             return result;
//         },
//         set ondragstart(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondragstart', arguments);
//             mm.memory.private_data.get(this).ondragstart = value + "";
//         },
//         get ondrop() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondrop, null);
//             if (debug) print('Get', 'HTMLElement', 'ondrop', arguments, result);
//             return result;
//         },
//         set ondrop(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondrop', arguments);
//             mm.memory.private_data.get(this).ondrop = value + "";
//         },
//         get ondurationchange() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ondurationchange, null);
//             if (debug) print('Get', 'HTMLElement', 'ondurationchange', arguments, result);
//             return result;
//         },
//         set ondurationchange(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ondurationchange', arguments);
//             mm.memory.private_data.get(this).ondurationchange = value + "";
//         },
//         get onemptied() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onemptied, null);
//             if (debug) print('Get', 'HTMLElement', 'onemptied', arguments, result);
//             return result;
//         },
//         set onemptied(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onemptied', arguments);
//             mm.memory.private_data.get(this).onemptied = value + "";
//         },
//         get onended() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onended, null);
//             if (debug) print('Get', 'HTMLElement', 'onended', arguments, result);
//             return result;
//         },
//         set onended(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onended', arguments);
//             mm.memory.private_data.get(this).onended = value + "";
//         },
//         get onerror() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onerror, null);
//             if (debug) print('Get', 'HTMLElement', 'onerror', arguments, result);
//             return result;
//         },
//         set onerror(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onerror', arguments);
//             mm.memory.private_data.get(this).onerror = value + "";
//         },
//         get onfocus() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onfocus, null);
//             if (debug) print('Get', 'HTMLElement', 'onfocus', arguments, result);
//             return result;
//         },
//         set onfocus(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onfocus', arguments);
//             mm.memory.private_data.get(this).onfocus = value + "";
//         },
//         get onformdata() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onformdata, null);
//             if (debug) print('Get', 'HTMLElement', 'onformdata', arguments, result);
//             return result;
//         },
//         set onformdata(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onformdata', arguments);
//             mm.memory.private_data.get(this).onformdata = value + "";
//         },
//         get ongotpointercapture() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ongotpointercapture, null);
//             if (debug) print('Get', 'HTMLElement', 'ongotpointercapture', arguments, result);
//             return result;
//         },
//         set ongotpointercapture(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ongotpointercapture', arguments);
//             mm.memory.private_data.get(this).ongotpointercapture = value + "";
//         },
//         get oninput() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oninput, null);
//             if (debug) print('Get', 'HTMLElement', 'oninput', arguments, result);
//             return result;
//         },
//         set oninput(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oninput', arguments);
//             mm.memory.private_data.get(this).oninput = value + "";
//         },
//         get oninvalid() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).oninvalid, null);
//             if (debug) print('Get', 'HTMLElement', 'oninvalid', arguments, result);
//             return result;
//         },
//         set oninvalid(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'oninvalid', arguments);
//             mm.memory.private_data.get(this).oninvalid = value + "";
//         },
//         get onkeydown() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onkeydown, null);
//             if (debug) print('Get', 'HTMLElement', 'onkeydown', arguments, result);
//             return result;
//         },
//         set onkeydown(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onkeydown', arguments);
//             mm.memory.private_data.get(this).onkeydown = value + "";
//         },
//         get onkeypress() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onkeypress, null);
//             if (debug) print('Get', 'HTMLElement', 'onkeypress', arguments, result);
//             return result;
//         },
//         set onkeypress(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onkeypress', arguments);
//             mm.memory.private_data.get(this).onkeypress = value + "";
//         },
//         get onkeyup() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onkeyup, null);
//             if (debug) print('Get', 'HTMLElement', 'onkeyup', arguments, result);
//             return result;
//         },
//         set onkeyup(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onkeyup', arguments);
//             mm.memory.private_data.get(this).onkeyup = value + "";
//         },
//         get onload() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onload, null);
//             if (debug) print('Get', 'HTMLElement', 'onload', arguments, result);
//             return result;
//         },
//         set onload(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onload', arguments);
//             mm.memory.private_data.get(this).onload = value + "";
//         },
//         get onloadeddata() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onloadeddata, null);
//             if (debug) print('Get', 'HTMLElement', 'onloadeddata', arguments, result);
//             return result;
//         },
//         set onloadeddata(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onloadeddata', arguments);
//             mm.memory.private_data.get(this).onloadeddata = value + "";
//         },
//         get onloadedmetadata() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onloadedmetadata, null);
//             if (debug) print('Get', 'HTMLElement', 'onloadedmetadata', arguments, result);
//             return result;
//         },
//         set onloadedmetadata(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onloadedmetadata', arguments);
//             mm.memory.private_data.get(this).onloadedmetadata = value + "";
//         },
//         get onloadstart() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onloadstart, null);
//             if (debug) print('Get', 'HTMLElement', 'onloadstart', arguments, result);
//             return result;
//         },
//         set onloadstart(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onloadstart', arguments);
//             mm.memory.private_data.get(this).onloadstart = value + "";
//         },
//         get onlostpointercapture() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onlostpointercapture, null);
//             if (debug) print('Get', 'HTMLElement', 'onlostpointercapture', arguments, result);
//             return result;
//         },
//         set onlostpointercapture(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onlostpointercapture', arguments);
//             mm.memory.private_data.get(this).onlostpointercapture = value + "";
//         },
//         get onmousedown() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onmousedown, null);
//             if (debug) print('Get', 'HTMLElement', 'onmousedown', arguments, result);
//             return result;
//         },
//         set onmousedown(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onmousedown', arguments);
//             mm.memory.private_data.get(this).onmousedown = value + "";
//         },
//         get onmousemove() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onmousemove, null);
//             if (debug) print('Get', 'HTMLElement', 'onmousemove', arguments, result);
//             return result;
//         },
//         set onmousemove(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onmousemove', arguments);
//             mm.memory.private_data.get(this).onmousemove = value + "";
//         },
//         get onmouseout() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onmouseout, null);
//             if (debug) print('Get', 'HTMLElement', 'onmouseout', arguments, result);
//             return result;
//         },
//         set onmouseout(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onmouseout', arguments);
//             mm.memory.private_data.get(this).onmouseout = value + "";
//         },
//         get onmouseover() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onmouseover, null);
//             if (debug) print('Get', 'HTMLElement', 'onmouseover', arguments, result);
//             return result;
//         },
//         set onmouseover(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onmouseover', arguments);
//             mm.memory.private_data.get(this).onmouseover = value + "";
//         },
//         get onmouseup() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onmouseup, null);
//             if (debug) print('Get', 'HTMLElement', 'onmouseup', arguments, result);
//             return result;
//         },
//         set onmouseup(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onmouseup', arguments);
//             mm.memory.private_data.get(this).onmouseup = value + "";
//         },
//         get onmousewheel() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onmousewheel, null);
//             if (debug) print('Get', 'HTMLElement', 'onmousewheel', arguments, result);
//             return result;
//         },
//         set onmousewheel(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onmousewheel', arguments);
//             mm.memory.private_data.get(this).onmousewheel = value + "";
//         },
//         get onpaste() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpaste, null);
//             if (debug) print('Get', 'HTMLElement', 'onpaste', arguments, result);
//             return result;
//         },
//         set onpaste(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpaste', arguments);
//             mm.memory.private_data.get(this).onpaste = value + "";
//         },
//         get onpause() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpause, null);
//             if (debug) print('Get', 'HTMLElement', 'onpause', arguments, result);
//             return result;
//         },
//         set onpause(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpause', arguments);
//             mm.memory.private_data.get(this).onpause = value + "";
//         },
//         get onplay() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onplay, null);
//             if (debug) print('Get', 'HTMLElement', 'onplay', arguments, result);
//             return result;
//         },
//         set onplay(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onplay', arguments);
//             mm.memory.private_data.get(this).onplay = value + "";
//         },
//         get onplaying() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onplaying, null);
//             if (debug) print('Get', 'HTMLElement', 'onplaying', arguments, result);
//             return result;
//         },
//         set onplaying(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onplaying', arguments);
//             mm.memory.private_data.get(this).onplaying = value + "";
//         },
//         get onpointercancel() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointercancel, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointercancel', arguments, result);
//             return result;
//         },
//         set onpointercancel(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointercancel', arguments);
//             mm.memory.private_data.get(this).onpointercancel = value + "";
//         },
//         get onpointerdown() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointerdown, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointerdown', arguments, result);
//             return result;
//         },
//         set onpointerdown(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointerdown', arguments);
//             mm.memory.private_data.get(this).onpointerdown = value + "";
//         },
//         get onpointerenter() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointerenter, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointerenter', arguments, result);
//             return result;
//         },
//         set onpointerenter(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointerenter', arguments);
//             mm.memory.private_data.get(this).onpointerenter = value + "";
//         },
//         get onpointerleave() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointerleave, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointerleave', arguments, result);
//             return result;
//         },
//         set onpointerleave(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointerleave', arguments);
//             mm.memory.private_data.get(this).onpointerleave = value + "";
//         },
//         get onpointermove() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointermove, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointermove', arguments, result);
//             return result;
//         },
//         set onpointermove(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointermove', arguments);
//             mm.memory.private_data.get(this).onpointermove = value + "";
//         },
//         get onpointerout() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointerout, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointerout', arguments, result);
//             return result;
//         },
//         set onpointerout(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointerout', arguments);
//             mm.memory.private_data.get(this).onpointerout = value + "";
//         },
//         get onpointerover() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointerover, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointerover', arguments, result);
//             return result;
//         },
//         set onpointerover(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointerover', arguments);
//             mm.memory.private_data.get(this).onpointerover = value + "";
//         },
//         get onpointerrawupdate() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointerrawupdate, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointerrawupdate', arguments, result);
//             return result;
//         },
//         set onpointerrawupdate(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointerrawupdate', arguments);
//             mm.memory.private_data.get(this).onpointerrawupdate = value + "";
//         },
//         get onpointerup() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onpointerup, null);
//             if (debug) print('Get', 'HTMLElement', 'onpointerup', arguments, result);
//             return result;
//         },
//         set onpointerup(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onpointerup', arguments);
//             mm.memory.private_data.get(this).onpointerup = value + "";
//         },
//         get onprogress() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onprogress, null);
//             if (debug) print('Get', 'HTMLElement', 'onprogress', arguments, result);
//             return result;
//         },
//         set onprogress(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onprogress', arguments);
//             mm.memory.private_data.get(this).onprogress = value + "";
//         },
//         get onratechange() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onratechange, null);
//             if (debug) print('Get', 'HTMLElement', 'onratechange', arguments, result);
//             return result;
//         },
//         set onratechange(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onratechange', arguments);
//             mm.memory.private_data.get(this).onratechange = value + "";
//         },
//         get onreset() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onreset, null);
//             if (debug) print('Get', 'HTMLElement', 'onreset', arguments, result);
//             return result;
//         },
//         set onreset(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onreset', arguments);
//             mm.memory.private_data.get(this).onreset = value + "";
//         },
//         get onresize() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onresize, null);
//             if (debug) print('Get', 'HTMLElement', 'onresize', arguments, result);
//             return result;
//         },
//         set onresize(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onresize', arguments);
//             mm.memory.private_data.get(this).onresize = value + "";
//         },
//         get onscroll() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onscroll, null);
//             if (debug) print('Get', 'HTMLElement', 'onscroll', arguments, result);
//             return result;
//         },
//         set onscroll(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onscroll', arguments);
//             mm.memory.private_data.get(this).onscroll = value + "";
//         },
//         get onsecuritypolicyviolation() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onsecuritypolicyviolation, null);
//             if (debug) print('Get', 'HTMLElement', 'onsecuritypolicyviolation', arguments, result);
//             return result;
//         },
//         set onsecuritypolicyviolation(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onsecuritypolicyviolation', arguments);
//             mm.memory.private_data.get(this).onsecuritypolicyviolation = value + "";
//         },
//         get onseeked() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onseeked, null);
//             if (debug) print('Get', 'HTMLElement', 'onseeked', arguments, result);
//             return result;
//         },
//         set onseeked(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onseeked', arguments);
//             mm.memory.private_data.get(this).onseeked = value + "";
//         },
//         get onseeking() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onseeking, null);
//             if (debug) print('Get', 'HTMLElement', 'onseeking', arguments, result);
//             return result;
//         },
//         set onseeking(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onseeking', arguments);
//             mm.memory.private_data.get(this).onseeking = value + "";
//         },
//         get onselect() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onselect, null);
//             if (debug) print('Get', 'HTMLElement', 'onselect', arguments, result);
//             return result;
//         },
//         set onselect(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onselect', arguments);
//             mm.memory.private_data.get(this).onselect = value + "";
//         },
//         get onselectionchange() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onselectionchange, null);
//             if (debug) print('Get', 'HTMLElement', 'onselectionchange', arguments, result);
//             return result;
//         },
//         set onselectionchange(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onselectionchange', arguments);
//             mm.memory.private_data.get(this).onselectionchange = value + "";
//         },
//         get onselectstart() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onselectstart, null);
//             if (debug) print('Get', 'HTMLElement', 'onselectstart', arguments, result);
//             return result;
//         },
//         set onselectstart(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onselectstart', arguments);
//             mm.memory.private_data.get(this).onselectstart = value + "";
//         },
//         get onslotchange() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onslotchange, null);
//             if (debug) print('Get', 'HTMLElement', 'onslotchange', arguments, result);
//             return result;
//         },
//         set onslotchange(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onslotchange', arguments);
//             mm.memory.private_data.get(this).onslotchange = value + "";
//         },
//         get onstalled() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onstalled, null);
//             if (debug) print('Get', 'HTMLElement', 'onstalled', arguments, result);
//             return result;
//         },
//         set onstalled(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onstalled', arguments);
//             mm.memory.private_data.get(this).onstalled = value + "";
//         },
//         get onsubmit() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onsubmit, null);
//             if (debug) print('Get', 'HTMLElement', 'onsubmit', arguments, result);
//             return result;
//         },
//         set onsubmit(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onsubmit', arguments);
//             mm.memory.private_data.get(this).onsubmit = value + "";
//         },
//         get onsuspend() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onsuspend, null);
//             if (debug) print('Get', 'HTMLElement', 'onsuspend', arguments, result);
//             return result;
//         },
//         set onsuspend(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onsuspend', arguments);
//             mm.memory.private_data.get(this).onsuspend = value + "";
//         },
//         get ontimeupdate() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ontimeupdate, null);
//             if (debug) print('Get', 'HTMLElement', 'ontimeupdate', arguments, result);
//             return result;
//         },
//         set ontimeupdate(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ontimeupdate', arguments);
//             mm.memory.private_data.get(this).ontimeupdate = value + "";
//         },
//         get ontoggle() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ontoggle, null);
//             if (debug) print('Get', 'HTMLElement', 'ontoggle', arguments, result);
//             return result;
//         },
//         set ontoggle(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ontoggle', arguments);
//             mm.memory.private_data.get(this).ontoggle = value + "";
//         },
//         get ontransitioncancel() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ontransitioncancel, null);
//             if (debug) print('Get', 'HTMLElement', 'ontransitioncancel', arguments, result);
//             return result;
//         },
//         set ontransitioncancel(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ontransitioncancel', arguments);
//             mm.memory.private_data.get(this).ontransitioncancel = value + "";
//         },
//         get ontransitionend() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ontransitionend, null);
//             if (debug) print('Get', 'HTMLElement', 'ontransitionend', arguments, result);
//             return result;
//         },
//         set ontransitionend(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ontransitionend', arguments);
//             mm.memory.private_data.get(this).ontransitionend = value + "";
//         },
//         get ontransitionrun() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ontransitionrun, null);
//             if (debug) print('Get', 'HTMLElement', 'ontransitionrun', arguments, result);
//             return result;
//         },
//         set ontransitionrun(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ontransitionrun', arguments);
//             mm.memory.private_data.get(this).ontransitionrun = value + "";
//         },
//         get ontransitionstart() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).ontransitionstart, null);
//             if (debug) print('Get', 'HTMLElement', 'ontransitionstart', arguments, result);
//             return result;
//         },
//         set ontransitionstart(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'ontransitionstart', arguments);
//             mm.memory.private_data.get(this).ontransitionstart = value + "";
//         },
//         get onvolumechange() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onvolumechange, null);
//             if (debug) print('Get', 'HTMLElement', 'onvolumechange', arguments, result);
//             return result;
//         },
//         set onvolumechange(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onvolumechange', arguments);
//             mm.memory.private_data.get(this).onvolumechange = value + "";
//         },
//         get onwaiting() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onwaiting, null);
//             if (debug) print('Get', 'HTMLElement', 'onwaiting', arguments, result);
//             return result;
//         },
//         set onwaiting(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onwaiting', arguments);
//             mm.memory.private_data.get(this).onwaiting = value + "";
//         },
//         get onwebkitanimationend() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onwebkitanimationend, null);
//             if (debug) print('Get', 'HTMLElement', 'onwebkitanimationend', arguments, result);
//             return result;
//         },
//         set onwebkitanimationend(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onwebkitanimationend', arguments);
//             mm.memory.private_data.get(this).onwebkitanimationend = value + "";
//         },
//         get onwebkitanimationiteration() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onwebkitanimationiteration, null);
//             if (debug) print('Get', 'HTMLElement', 'onwebkitanimationiteration', arguments, result);
//             return result;
//         },
//         set onwebkitanimationiteration(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onwebkitanimationiteration', arguments);
//             mm.memory.private_data.get(this).onwebkitanimationiteration = value + "";
//         },
//         get onwebkitanimationstart() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onwebkitanimationstart, null);
//             if (debug) print('Get', 'HTMLElement', 'onwebkitanimationstart', arguments, result);
//             return result;
//         },
//         set onwebkitanimationstart(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onwebkitanimationstart', arguments);
//             mm.memory.private_data.get(this).onwebkitanimationstart = value + "";
//         },
//         get onwebkittransitionend() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onwebkittransitionend, null);
//             if (debug) print('Get', 'HTMLElement', 'onwebkittransitionend', arguments, result);
//             return result;
//         },
//         set onwebkittransitionend(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onwebkittransitionend', arguments);
//             mm.memory.private_data.get(this).onwebkittransitionend = value + "";
//         },
//         get onwheel() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).onwheel, null);
//             if (debug) print('Get', 'HTMLElement', 'onwheel', arguments, result);
//             return result;
//         },
//         set onwheel(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'onwheel', arguments);
//             mm.memory.private_data.get(this).onwheel = value + "";
//         },
//         get outerText() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).outerText, null);
//             if (debug) print('Get', 'HTMLElement', 'outerText', arguments, result);
//             return result;
//         },
//         set outerText(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'outerText', arguments);
//             mm.memory.private_data.get(this).outerText = value + "";
//         },
//         get spellcheck() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).spellcheck, true);
//             if (debug) print('Get', 'HTMLElement', 'spellcheck', arguments, result);
//             return result;
//         },
//         set spellcheck(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'spellcheck', arguments);
//             mm.memory.private_data.get(this).spellcheck = value ? true : false;
//         },
//         get style() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let ele = mm.memory.private_data.get(this);
//             if (!ele) {
//                 ele = new CSSStyleDeclaration(mm.memory.$createObj_key);
//                 for (key of $cssstyle_attribute) {
//                     ele[key] = "";
//                 };
//                 mm.memory.private_data.set(this, {
//                     style:ele
//                 })
//                 mm.memory.private_data.get(this).style = ele;
//             }else{
//                 ele = ele.style;
//             }
//             let result = ele;
//             if (debug) print('Func', 'HTMLElement', 'for ', arguments, result);
//             return result;
//         },
//         set style(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'style', arguments);
//             mm.memory.private_data.get(this).style = value;
//         },
//         get tabIndex() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).tabIndex, -1);
//             if (debug) print('Get', 'HTMLElement', 'tabIndex', arguments, result);
//             return result;
//         },
//         set tabIndex(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'tabIndex', arguments);
//             mm.memory.private_data.get(this).tabIndex = value ? 1 : -1;
//         },
//         get title() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).title, "");
//             if (debug) print('Get', 'HTMLElement', 'title', arguments, result);
//             return result;
//         },
//         set title(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'title', arguments);
//             mm.memory.private_data.get(this).title = value + "";
//         },
//         get translate() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).translate, true);
//             if (debug) print('Get', 'HTMLElement', 'translate', arguments, result);
//             return result;
//         },
//         set translate(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'translate', arguments);
//             mm.memory.private_data.get(this).translate = value ? true : false;
//         },
//         get virtualKeyboardPolicy() {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             let result = mm.abs(mm.memory.private_data.get(this).virtualKeyboardPolicy, "");
//             if (debug) print('Get', 'HTMLElement', 'virtualKeyboardPolicy', arguments, result);
//             return result;
//         },
//         set virtualKeyboardPolicy(value) {
//             if (!HTMLElement.prototype.isPrototypeOf(this)) { throw new TypeError("Illegal constructor"); };
//             if (debug) print('Set', 'HTMLElement', 'virtualKeyboardPolicy', arguments);
//             mm.memory.private_data.get(this).virtualKeyboardPolicy = value + "";
//         },
//     }
//     mm.safe_Objattribute(HTMLElement, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);
//
//     Object.setPrototypeOf(HTMLElement.prototype, Element.prototype);
//     Object.setPrototypeOf(HTMLElement, Element);
// })();
delete HTMLFormElement.prototype.constructor
Object.defineProperties(HTMLFormElement.prototype,
    {
            [Symbol.toStringTag]:{value:'HTMLFormElement'},

        acceptCharset: {

            get: newFunc('acceptCharset', 10, function acceptCharset() {
                if (debug) print('HTMLFormElement.acceptCharset.get')
                return mm.memory.private_data.get(this).acceptCharset
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('acceptCharset', 1, function acceptCharset(value) {
                if (debug) print('HTMLFormElement.acceptCharset.set', value)
                mm.memory.private_data.get(this).acceptCharset = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        action: {

            get: newFunc('action', 10, function action() {
                if (debug) print('HTMLFormElement.action.get')
                return mm.memory.private_data.get(this).action
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('action', 1, function action(value) {
                if (debug) print('HTMLFormElement.action.set', value)
                mm.memory.private_data.get(this).action = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        autocomplete: {

            get: newFunc('autocomplete', 10, function autocomplete() {
                if (debug) print('HTMLFormElement.autocomplete.get')
                return mm.memory.private_data.get(this).autocomplete
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('autocomplete', 1, function autocomplete(value) {
                if (debug) print('HTMLFormElement.autocomplete.set', value)
                mm.memory.private_data.get(this).autocomplete = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        enctype: {

            get: newFunc('enctype', 10, function enctype() {
                if (debug) print('HTMLFormElement.enctype.get')
                return mm.memory.private_data.get(this).enctype
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('enctype', 1, function enctype(value) {
                if (debug) print('HTMLFormElement.enctype.set', value)
                mm.memory.private_data.get(this).enctype = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        encoding: {

            get: newFunc('encoding', 10, function encoding() {
                if (debug) print('HTMLFormElement.encoding.get')
                return mm.memory.private_data.get(this).encoding
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('encoding', 1, function encoding(value) {
                if (debug) print('HTMLFormElement.encoding.set', value)
                mm.memory.private_data.get(this).encoding = value

            }, {set: true})


        },
        method: {

            get: newFunc('method', 10, function method() {
                if (debug) print('HTMLFormElement.method.get')
                return mm.memory.private_data.get(this).method
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('method', 1, function method(value) {
                if (debug) print('HTMLFormElement.method.set', value)
                mm.memory.private_data.get(this).method = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        name: {

            get: newFunc('name', 10, function name() {
                if (debug) print('HTMLFormElement.name.get')
                return mm.memory.private_data.get(this).name
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('name', 1, function name(value) {
                if (debug) print('HTMLFormElement.name.set', value)
                mm.memory.private_data.get(this).name = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        noValidate: {

            get: newFunc('noValidate', 10, function noValidate() {
                if (debug) print('HTMLFormElement.noValidate.get')
                return mm.memory.private_data.get(this).noValidate
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('noValidate', 1, function noValidate(value) {
                if (debug) print('HTMLFormElement.noValidate.set', value)
                mm.memory.private_data.get(this).noValidate = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        target: {

            get: newFunc('target', 10, function target() {
                if (debug) print('HTMLFormElement.target.get')
                return mm.memory.private_data.get(this).target
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('target', 1, function target(value) {
                if (debug) print('HTMLFormElement.target.set', value)
                mm.memory.private_data.get(this).target = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        rel: {

            get: newFunc('rel', 10, function rel() {
                if (debug) print('HTMLFormElement.rel.get')
                return mm.memory.private_data.get(this).rel
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('rel', 1, function rel(value) {
                if (debug) print('HTMLFormElement.rel.set', value)
                mm.memory.private_data.get(this).rel = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        relList: {

            get: newFunc('relList', 10, function relList() {
                if (debug) print('HTMLFormElement.relList.get')
                return mm.memory.private_data.get(this).relList
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('relList', 1, function relList(value) {
                if (debug) print('HTMLFormElement.relList.set', value)
                mm.memory.private_data.get(this).relList = value

            }, {set: true}), enumerable: true, configurable: true,


        },

        elements: {

            get: newFunc('elements', 10, function elements() {
                if (debug) print('HTMLFormElement.elements.get')
                return mm.memory.private_data.get(this).elements
            }, {get: true}), enumerable: true, configurable: true,

        },
        length: {

            get: newFunc('length', 10, function length() {
                if (debug) print('HTMLFormElement.length.get')
                return mm.memory.private_data.get(this).length
            }, {get: true}), enumerable: true, configurable: true,

        },
        checkValidity: {

            value: newFunc('checkValidity', 10, function checkValidity() {
                if (debug) print('HTMLFormElement.checkValidity.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        reportValidity: {

            value: newFunc('reportValidity', 10, function reportValidity() {
                if (debug) print('HTMLFormElement.reportValidity.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        requestSubmit: {

            value: newFunc('requestSubmit', 10, function requestSubmit() {
                if (debug) print('HTMLFormElement.requestSubmit.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        reset: {

            value: newFunc('reset', 10, function reset() {
                if (debug) print('HTMLFormElement.reset.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        submit: {

            //         value: newFunc('submit', 0, function submit() {
            //                 if (debug)print('HTMLFormElement.submit.call', arguments)
            //
            //         })
            value: () => {
                if (debug) print('HTMLFormElement.submit.call', arguments)

            }
            , writable: true, enumerable: true, configurable: true,


        },
constructor: {

            value: newFunc('constructor', 10, function constructor() {
                    if (debug)print('HTMLFormElement.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
    }
)

Object.setPrototypeOf(HTMLFormElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(HTMLFormElement, HTMLElement);
if (proxy) HTMLFormElement = mm.proxy(HTMLFormElement, 'HTMLFormElement')