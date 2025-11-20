CSSStyleDeclaration = newFunc('CSSStyleDeclaration', 10, function CSSStyleDeclaration() {
    print('new CSSStyleDeclaration')
    let objs ='{"0":"accent-color","1":"align-content","2":"align-items","3":"align-self","4":"alignment-baseline","5":"anchor-name","6":"anchor-scope","7":"animation-composition","8":"animation-delay","9":"animation-direction","10":"animation-duration","11":"animation-fill-mode","12":"animation-iteration-count","13":"animation-name","14":"animation-play-state","15":"animation-range-end","16":"animation-range-start","17":"animation-timeline","18":"animation-timing-function","19":"app-region","20":"appearance","21":"backdrop-filter","22":"backface-visibility","23":"background-attachment","24":"background-blend-mode","25":"background-clip","26":"background-color","27":"background-image","28":"background-origin","29":"background-position","30":"background-repeat","31":"background-size","32":"baseline-shift","33":"baseline-source","34":"block-size","35":"border-block-end-color","36":"border-block-end-style","37":"border-block-end-width","38":"border-block-start-color","39":"border-block-start-style","40":"border-block-start-width","41":"border-bottom-color","42":"border-bottom-left-radius","43":"border-bottom-right-radius","44":"border-bottom-style","45":"border-bottom-width","46":"border-collapse","47":"border-end-end-radius","48":"border-end-start-radius","49":"border-image-outset","50":"border-image-repeat","51":"border-image-slice","52":"border-image-source","53":"border-image-width","54":"border-inline-end-color","55":"border-inline-end-style","56":"border-inline-end-width","57":"border-inline-start-color","58":"border-inline-start-style","59":"border-inline-start-width","60":"border-left-color","61":"border-left-style","62":"border-left-width","63":"border-right-color","64":"border-right-style","65":"border-right-width","66":"border-start-end-radius","67":"border-start-start-radius","68":"border-top-color","69":"border-top-left-radius","70":"border-top-right-radius","71":"border-top-style","72":"border-top-width","73":"bottom","74":"box-decoration-break","75":"box-shadow","76":"box-sizing","77":"break-after","78":"break-before","79":"break-inside","80":"buffered-rendering","81":"caption-side","82":"caret-color","83":"clear","84":"clip","85":"clip-path","86":"clip-rule","87":"color","88":"color-interpolation","89":"color-interpolation-filters","90":"color-rendering","91":"column-count","92":"column-gap","93":"column-rule-color","94":"column-rule-style","95":"column-rule-width","96":"column-span","97":"column-width","98":"contain-intrinsic-block-size","99":"contain-intrinsic-height","100":"contain-intrinsic-inline-size","101":"contain-intrinsic-size","102":"contain-intrinsic-width","103":"container-name","104":"container-type","105":"content","106":"cursor","107":"cx","108":"cy","109":"d","110":"direction","111":"display","112":"dominant-baseline","113":"dynamic-range-limit","114":"empty-cells","115":"field-sizing","116":"fill","117":"fill-opacity","118":"fill-rule","119":"filter","120":"flex-basis","121":"flex-direction","122":"flex-grow","123":"flex-shrink","124":"flex-wrap","125":"float","126":"flood-color","127":"flood-opacity","128":"font-family","129":"font-kerning","130":"font-optical-sizing","131":"font-palette","132":"font-size","133":"font-size-adjust","134":"font-stretch","135":"font-style","136":"font-synthesis-small-caps","137":"font-synthesis-style","138":"font-synthesis-weight","139":"font-variant","140":"font-variant-alternates","141":"font-variant-caps","142":"font-variant-east-asian","143":"font-variant-emoji","144":"font-variant-ligatures","145":"font-variant-numeric","146":"font-variant-position","147":"font-weight","148":"grid-auto-columns","149":"grid-auto-flow","150":"grid-auto-rows","151":"grid-column-end","152":"grid-column-start","153":"grid-row-end","154":"grid-row-start","155":"grid-template-areas","156":"grid-template-columns","157":"grid-template-rows","158":"height","159":"hyphenate-character","160":"hyphenate-limit-chars","161":"hyphens","162":"image-orientation","163":"image-rendering","164":"initial-letter","165":"inline-size","166":"inset-block-end","167":"inset-block-start","168":"inset-inline-end","169":"inset-inline-start","170":"interactivity","171":"interpolate-size","172":"isolation","173":"justify-content","174":"justify-items","175":"justify-self","176":"left","177":"letter-spacing","178":"lighting-color","179":"line-break","180":"line-height","181":"list-style-image","182":"list-style-position","183":"list-style-type","184":"margin-block-end","185":"margin-block-start","186":"margin-bottom","187":"margin-inline-end","188":"margin-inline-start","189":"margin-left","190":"margin-right","191":"margin-top","192":"marker-end","193":"marker-mid","194":"marker-start","195":"mask-clip","196":"mask-composite","197":"mask-image","198":"mask-mode","199":"mask-origin","200":"mask-position","201":"mask-repeat","202":"mask-size","203":"mask-type","204":"math-depth","205":"math-shift","206":"math-style","207":"max-block-size","208":"max-height","209":"max-inline-size","210":"max-width","211":"min-block-size","212":"min-height","213":"min-inline-size","214":"min-width","215":"mix-blend-mode","216":"object-fit","217":"object-position","218":"object-view-box","219":"offset-anchor","220":"offset-distance","221":"offset-path","222":"offset-position","223":"offset-rotate","224":"opacity","225":"order","226":"orphans","227":"outline-color","228":"outline-offset","229":"outline-style","230":"outline-width","231":"overflow-anchor","232":"overflow-block","233":"overflow-clip-margin","234":"overflow-inline","235":"overflow-wrap","236":"overflow-x","237":"overflow-y","238":"overlay","239":"overscroll-behavior-block","240":"overscroll-behavior-inline","241":"padding-block-end","242":"padding-block-start","243":"padding-bottom","244":"padding-inline-end","245":"padding-inline-start","246":"padding-left","247":"padding-right","248":"padding-top","249":"paint-order","250":"perspective","251":"perspective-origin","252":"pointer-events","253":"position","254":"position-anchor","255":"position-area","256":"position-try-fallbacks","257":"position-try-order","258":"position-visibility","259":"print-color-adjust","260":"r","261":"reading-flow","262":"reading-order","263":"resize","264":"right","265":"rotate","266":"row-gap","267":"ruby-align","268":"ruby-position","269":"rx","270":"ry","271":"scale","272":"scroll-behavior","273":"scroll-initial-target","274":"scroll-margin-block-end","275":"scroll-margin-block-start","276":"scroll-margin-inline-end","277":"scroll-margin-inline-start","278":"scroll-marker-group","279":"scroll-padding-block-end","280":"scroll-padding-block-start","281":"scroll-padding-inline-end","282":"scroll-padding-inline-start","283":"scroll-timeline-axis","284":"scroll-timeline-name","285":"scrollbar-color","286":"scrollbar-gutter","287":"scrollbar-width","288":"shape-image-threshold","289":"shape-margin","290":"shape-outside","291":"shape-rendering","292":"speak","293":"stop-color","294":"stop-opacity","295":"stroke","296":"stroke-dasharray","297":"stroke-dashoffset","298":"stroke-linecap","299":"stroke-linejoin","300":"stroke-miterlimit","301":"stroke-opacity","302":"stroke-width","303":"tab-size","304":"table-layout","305":"text-align","306":"text-align-last","307":"text-anchor","308":"text-box-edge","309":"text-box-trim","310":"text-decoration","311":"text-decoration-color","312":"text-decoration-line","313":"text-decoration-skip-ink","314":"text-decoration-style","315":"text-emphasis-color","316":"text-emphasis-position","317":"text-emphasis-style","318":"text-indent","319":"text-overflow","320":"text-rendering","321":"text-shadow","322":"text-size-adjust","323":"text-spacing-trim","324":"text-transform","325":"text-underline-position","326":"text-wrap-mode","327":"text-wrap-style","328":"timeline-scope","329":"top","330":"touch-action","331":"transform","332":"transform-origin","333":"transform-style","334":"transition-behavior","335":"transition-delay","336":"transition-duration","337":"transition-property","338":"transition-timing-function","339":"translate","340":"unicode-bidi","341":"user-select","342":"vector-effect","343":"vertical-align","344":"view-timeline-axis","345":"view-timeline-inset","346":"view-timeline-name","347":"view-transition-class","348":"view-transition-name","349":"visibility","350":"white-space-collapse","351":"widows","352":"width","353":"will-change","354":"word-break","355":"word-spacing","356":"writing-mode","357":"x","358":"y","359":"z-index","360":"zoom","361":"-webkit-border-horizontal-spacing","362":"-webkit-border-image","363":"-webkit-border-vertical-spacing","364":"-webkit-box-align","365":"-webkit-box-decoration-break","366":"-webkit-box-direction","367":"-webkit-box-flex","368":"-webkit-box-ordinal-group","369":"-webkit-box-orient","370":"-webkit-box-pack","371":"-webkit-box-reflect","372":"-webkit-font-smoothing","373":"-webkit-line-break","374":"-webkit-line-clamp","375":"-webkit-locale","376":"-webkit-mask-box-image","377":"-webkit-mask-box-image-outset","378":"-webkit-mask-box-image-repeat","379":"-webkit-mask-box-image-slice","380":"-webkit-mask-box-image-source","381":"-webkit-mask-box-image-width","382":"-webkit-rtl-ordering","383":"-webkit-tap-highlight-color","384":"-webkit-text-combine","385":"-webkit-text-decorations-in-effect","386":"-webkit-text-fill-color","387":"-webkit-text-orientation","388":"-webkit-text-security","389":"-webkit-text-stroke-color","390":"-webkit-text-stroke-width","391":"-webkit-user-drag","392":"-webkit-user-modify","393":"-webkit-writing-mode","accentColor":"auto","additiveSymbols":"","alignContent":"normal","alignItems":"normal","alignSelf":"auto","alignmentBaseline":"auto","all":"","anchorName":"none","anchorScope":"none","animation":"none 0s ease 0s 1 normal none running","animationComposition":"replace","animationDelay":"0s","animationDirection":"normal","animationDuration":"0s","animationFillMode":"none","animationIterationCount":"1","animationName":"none","animationPlayState":"running","animationRange":"normal","animationRangeEnd":"normal","animationRangeStart":"normal","animationTimeline":"auto","animationTimingFunction":"ease","appRegion":"none","appearance":"none","ascentOverride":"","aspectRatio":"auto","backdropFilter":"none","backfaceVisibility":"visible","background":"rgba(0, 0, 0, 0) none repeat scroll 0% 0% / auto padding-box border-box","backgroundAttachment":"scroll","backgroundBlendMode":"normal","backgroundClip":"border-box","backgroundColor":"rgba(0, 0, 0, 0)","backgroundImage":"none","backgroundOrigin":"padding-box","backgroundPosition":"0% 0%","backgroundPositionX":"0%","backgroundPositionY":"0%","backgroundRepeat":"repeat","backgroundSize":"auto","basePalette":"","baselineShift":"0px","baselineSource":"auto","blockSize":"0px","border":"0px none rgb(0, 0, 0)","borderBlock":"0px none rgb(0, 0, 0)","borderBlockColor":"rgb(0, 0, 0)","borderBlockEnd":"0px none rgb(0, 0, 0)","borderBlockEndColor":"rgb(0, 0, 0)","borderBlockEndStyle":"none","borderBlockEndWidth":"0px","borderBlockStart":"0px none rgb(0, 0, 0)","borderBlockStartColor":"rgb(0, 0, 0)","borderBlockStartStyle":"none","borderBlockStartWidth":"0px","borderBlockStyle":"none","borderBlockWidth":"0px","borderBottom":"0px none rgb(0, 0, 0)","borderBottomColor":"rgb(0, 0, 0)","borderBottomLeftRadius":"0px","borderBottomRightRadius":"0px","borderBottomStyle":"none","borderBottomWidth":"0px","borderCollapse":"separate","borderColor":"rgb(0, 0, 0)","borderEndEndRadius":"0px","borderEndStartRadius":"0px","borderImage":"none","borderImageOutset":"0","borderImageRepeat":"stretch","borderImageSlice":"100%","borderImageSource":"none","borderImageWidth":"1","borderInline":"0px none rgb(0, 0, 0)","borderInlineColor":"rgb(0, 0, 0)","borderInlineEnd":"0px none rgb(0, 0, 0)","borderInlineEndColor":"rgb(0, 0, 0)","borderInlineEndStyle":"none","borderInlineEndWidth":"0px","borderInlineStart":"0px none rgb(0, 0, 0)","borderInlineStartColor":"rgb(0, 0, 0)","borderInlineStartStyle":"none","borderInlineStartWidth":"0px","borderInlineStyle":"none","borderInlineWidth":"0px","borderLeft":"0px none rgb(0, 0, 0)","borderLeftColor":"rgb(0, 0, 0)","borderLeftStyle":"none","borderLeftWidth":"0px","borderRadius":"0px","borderRight":"0px none rgb(0, 0, 0)","borderRightColor":"rgb(0, 0, 0)","borderRightStyle":"none","borderRightWidth":"0px","borderSpacing":"0px 0px","borderStartEndRadius":"0px","borderStartStartRadius":"0px","borderStyle":"none","borderTop":"0px none rgb(0, 0, 0)","borderTopColor":"rgb(0, 0, 0)","borderTopLeftRadius":"0px","borderTopRightRadius":"0px","borderTopStyle":"none","borderTopWidth":"0px","borderWidth":"0px","bottom":"auto","boxDecorationBreak":"slice","boxShadow":"none","boxSizing":"content-box","breakAfter":"auto","breakBefore":"auto","breakInside":"auto","bufferedRendering":"auto","captionSide":"top","caretColor":"rgb(0, 0, 0)","clear":"none","clip":"auto","clipPath":"none","clipRule":"nonzero","color":"rgb(0, 0, 0)","colorInterpolation":"srgb","colorInterpolationFilters":"linearrgb","colorRendering":"auto","colorScheme":"normal","columnCount":"auto","columnFill":"balance","columnGap":"normal","columnRule":"0px none rgb(0, 0, 0)","columnRuleColor":"rgb(0, 0, 0)","columnRuleStyle":"none","columnRuleWidth":"0px","columnSpan":"none","columnWidth":"auto","columns":"auto auto","contain":"none","containIntrinsicBlockSize":"none","containIntrinsicHeight":"none","containIntrinsicInlineSize":"none","containIntrinsicSize":"none","containIntrinsicWidth":"none","container":"none","containerName":"none","containerType":"normal","content":"normal","contentVisibility":"visible","counterIncrement":"none","counterReset":"none","counterSet":"none","cursor":"auto","cx":"0px","cy":"0px","d":"none","descentOverride":"","direction":"ltr","display":"block","dominantBaseline":"auto","dynamicRangeLimit":"no-limit","emptyCells":"show","fallback":"","fieldSizing":"fixed","fill":"rgb(0, 0, 0)","fillOpacity":"1","fillRule":"nonzero","filter":"none","flex":"0 1 auto","flexBasis":"auto","flexDirection":"row","flexFlow":"row nowrap","flexGrow":"0","flexShrink":"1","flexWrap":"nowrap","float":"none","floodColor":"rgb(0, 0, 0)","floodOpacity":"1","font":"16px \\"PingFang SC\\"","fontDisplay":"","fontFamily":"\\"PingFang SC\\"","fontFeatureSettings":"normal","fontKerning":"auto","fontOpticalSizing":"auto","fontPalette":"normal","fontSize":"16px","fontSizeAdjust":"none","fontStretch":"100%","fontStyle":"normal","fontSynthesis":"weight style small-caps","fontSynthesisSmallCaps":"auto","fontSynthesisStyle":"auto","fontSynthesisWeight":"auto","fontVariant":"normal","fontVariantAlternates":"normal","fontVariantCaps":"normal","fontVariantEastAsian":"normal","fontVariantEmoji":"normal","fontVariantLigatures":"normal","fontVariantNumeric":"normal","fontVariantPosition":"normal","fontVariationSettings":"normal","fontWeight":"400","forcedColorAdjust":"auto","gap":"normal","grid":"none / none / none / row / auto / auto","gridArea":"auto","gridAutoColumns":"auto","gridAutoFlow":"row","gridAutoRows":"auto","gridColumn":"auto","gridColumnEnd":"auto","gridColumnGap":"normal","gridColumnStart":"auto","gridGap":"normal","gridRow":"auto","gridRowEnd":"auto","gridRowGap":"normal","gridRowStart":"auto","gridTemplate":"none","gridTemplateAreas":"none","gridTemplateColumns":"none","gridTemplateRows":"none","height":"0px","hyphenateCharacter":"auto","hyphenateLimitChars":"auto","hyphens":"manual","imageOrientation":"from-image","imageRendering":"auto","inherits":"","initialLetter":"normal","initialValue":"","inlineSize":"0px","inset":"auto","insetBlock":"auto","insetBlockEnd":"auto","insetBlockStart":"auto","insetInline":"auto","insetInlineEnd":"auto","insetInlineStart":"auto","interactivity":"auto","interpolateSize":"numeric-only","isolation":"auto","justifyContent":"normal","justifyItems":"normal","justifySelf":"auto","left":"auto","letterSpacing":"normal","lightingColor":"rgb(255, 255, 255)","lineBreak":"auto","lineGapOverride":"","lineHeight":"normal","listStyle":"outside none disc","listStyleImage":"none","listStylePosition":"outside","listStyleType":"disc","margin":"8px","marginBlock":"8px","marginBlockEnd":"8px","marginBlockStart":"8px","marginBottom":"8px","marginInline":"8px","marginInlineEnd":"8px","marginInlineStart":"8px","marginLeft":"8px","marginRight":"8px","marginTop":"8px","marker":"none","markerEnd":"none","markerMid":"none","markerStart":"none","mask":"none","maskClip":"border-box","maskComposite":"add","maskImage":"none","maskMode":"match-source","maskOrigin":"border-box","maskPosition":"0% 0%","maskRepeat":"repeat","maskSize":"auto","maskType":"luminance","mathDepth":"0","mathShift":"normal","mathStyle":"normal","maxBlockSize":"none","maxHeight":"none","maxInlineSize":"none","maxWidth":"none","minBlockSize":"0px","minHeight":"0px","minInlineSize":"0px","minWidth":"0px","mixBlendMode":"normal","navigation":"","negative":"","objectFit":"fill","objectPosition":"50% 50%","objectViewBox":"none","offset":"none 0px auto 0deg","offsetAnchor":"auto","offsetDistance":"0px","offsetPath":"none","offsetPosition":"normal","offsetRotate":"auto 0deg","opacity":"1","order":"0","orphans":"2","outline":"rgb(0, 0, 0) none 0px","outlineColor":"rgb(0, 0, 0)","outlineOffset":"0px","outlineStyle":"none","outlineWidth":"0px","overflow":"visible","overflowAnchor":"auto","overflowBlock":"visible","overflowClipMargin":"0px","overflowInline":"visible","overflowWrap":"normal","overflowX":"visible","overflowY":"visible","overlay":"none","overrideColors":"","overscrollBehavior":"auto","overscrollBehaviorBlock":"auto","overscrollBehaviorInline":"auto","overscrollBehaviorX":"auto","overscrollBehaviorY":"auto","pad":"","padding":"0px","paddingBlock":"0px","paddingBlockEnd":"0px","paddingBlockStart":"0px","paddingBottom":"0px","paddingInline":"0px","paddingInlineEnd":"0px","paddingInlineStart":"0px","paddingLeft":"0px","paddingRight":"0px","paddingTop":"0px","page":"auto","pageBreakAfter":"auto","pageBreakBefore":"auto","pageBreakInside":"auto","pageOrientation":"","paintOrder":"normal","perspective":"none","perspectiveOrigin":"0px 0px","placeContent":"normal","placeItems":"normal","placeSelf":"auto","pointerEvents":"auto","position":"static","positionAnchor":"auto","positionArea":"none","positionTry":"none","positionTryFallbacks":"none","positionTryOrder":"normal","positionVisibility":"always","prefix":"","printColorAdjust":"economy","quotes":"auto","r":"0px","range":"","readingFlow":"normal","readingOrder":"0","resize":"none","right":"auto","rotate":"none","rowGap":"normal","rubyAlign":"space-around","rubyPosition":"over","rx":"auto","ry":"auto","scale":"none","scrollBehavior":"auto","scrollInitialTarget":"none","scrollMargin":"0px","scrollMarginBlock":"0px","scrollMarginBlockEnd":"0px","scrollMarginBlockStart":"0px","scrollMarginBottom":"0px","scrollMarginInline":"0px","scrollMarginInlineEnd":"0px","scrollMarginInlineStart":"0px","scrollMarginLeft":"0px","scrollMarginRight":"0px","scrollMarginTop":"0px","scrollMarkerGroup":"none","scrollPadding":"auto","scrollPaddingBlock":"auto","scrollPaddingBlockEnd":"auto","scrollPaddingBlockStart":"auto","scrollPaddingBottom":"auto","scrollPaddingInline":"auto","scrollPaddingInlineEnd":"auto","scrollPaddingInlineStart":"auto","scrollPaddingLeft":"auto","scrollPaddingRight":"auto","scrollPaddingTop":"auto","scrollSnapAlign":"none","scrollSnapStop":"normal","scrollSnapType":"none","scrollTimeline":"none","scrollTimelineAxis":"block","scrollTimelineName":"none","scrollbarColor":"auto","scrollbarGutter":"auto","scrollbarWidth":"auto","shapeImageThreshold":"0","shapeMargin":"0px","shapeOutside":"none","shapeRendering":"auto","size":"","sizeAdjust":"","speak":"normal","speakAs":"","src":"","stopColor":"rgb(0, 0, 0)","stopOpacity":"1","stroke":"none","strokeDasharray":"none","strokeDashoffset":"0px","strokeLinecap":"butt","strokeLinejoin":"miter","strokeMiterlimit":"4","strokeOpacity":"1","strokeWidth":"1px","suffix":"","symbols":"","syntax":"","system":"","tabSize":"8","tableLayout":"auto","textAlign":"start","textAlignLast":"auto","textAnchor":"start","textBox":"normal","textBoxEdge":"auto","textBoxTrim":"none","textCombineUpright":"none","textDecoration":"none solid rgb(0, 0, 0)","textDecorationColor":"rgb(0, 0, 0)","textDecorationLine":"none","textDecorationSkipInk":"auto","textDecorationStyle":"solid","textDecorationThickness":"auto","textEmphasis":"none rgb(0, 0, 0)","textEmphasisColor":"rgb(0, 0, 0)","textEmphasisPosition":"over","textEmphasisStyle":"none","textIndent":"0px","textOrientation":"mixed","textOverflow":"clip","textRendering":"auto","textShadow":"none","textSizeAdjust":"auto","textSpacingTrim":"normal","textTransform":"none","textUnderlineOffset":"auto","textUnderlinePosition":"auto","textWrap":"wrap","textWrapMode":"wrap","textWrapStyle":"auto","timelineScope":"none","top":"auto","touchAction":"auto","transform":"none","transformBox":"view-box","transformOrigin":"0px 0px","transformStyle":"flat","transition":"all","transitionBehavior":"normal","transitionDelay":"0s","transitionDuration":"0s","transitionProperty":"all","transitionTimingFunction":"ease","translate":"none","types":"","unicodeBidi":"normal","unicodeRange":"","userSelect":"auto","vectorEffect":"none","verticalAlign":"baseline","viewTimeline":"none","viewTimelineAxis":"block","viewTimelineInset":"auto","viewTimelineName":"none","viewTransitionClass":"none","viewTransitionName":"none","visibility":"visible","webkitAlignContent":"normal","webkitAlignItems":"normal","webkitAlignSelf":"auto","webkitAnimation":"none 0s ease 0s 1 normal none running","webkitAnimationDelay":"0s","webkitAnimationDirection":"normal","webkitAnimationDuration":"0s","webkitAnimationFillMode":"none","webkitAnimationIterationCount":"1","webkitAnimationName":"none","webkitAnimationPlayState":"running","webkitAnimationTimingFunction":"ease","webkitAppRegion":"none","webkitAppearance":"none","webkitBackfaceVisibility":"visible","webkitBackgroundClip":"border-box","webkitBackgroundOrigin":"padding-box","webkitBackgroundSize":"auto","webkitBorderAfter":"0px none rgb(0, 0, 0)","webkitBorderAfterColor":"rgb(0, 0, 0)","webkitBorderAfterStyle":"none","webkitBorderAfterWidth":"0px","webkitBorderBefore":"0px none rgb(0, 0, 0)","webkitBorderBeforeColor":"rgb(0, 0, 0)","webkitBorderBeforeStyle":"none","webkitBorderBeforeWidth":"0px","webkitBorderBottomLeftRadius":"0px","webkitBorderBottomRightRadius":"0px","webkitBorderEnd":"0px none rgb(0, 0, 0)","webkitBorderEndColor":"rgb(0, 0, 0)","webkitBorderEndStyle":"none","webkitBorderEndWidth":"0px","webkitBorderHorizontalSpacing":"0px","webkitBorderImage":"none","webkitBorderRadius":"0px","webkitBorderStart":"0px none rgb(0, 0, 0)","webkitBorderStartColor":"rgb(0, 0, 0)","webkitBorderStartStyle":"none","webkitBorderStartWidth":"0px","webkitBorderTopLeftRadius":"0px","webkitBorderTopRightRadius":"0px","webkitBorderVerticalSpacing":"0px","webkitBoxAlign":"stretch","webkitBoxDecorationBreak":"slice","webkitBoxDirection":"normal","webkitBoxFlex":"0","webkitBoxOrdinalGroup":"1","webkitBoxOrient":"horizontal","webkitBoxPack":"start","webkitBoxReflect":"none","webkitBoxShadow":"none","webkitBoxSizing":"content-box","webkitClipPath":"none","webkitColumnBreakAfter":"auto","webkitColumnBreakBefore":"auto","webkitColumnBreakInside":"auto","webkitColumnCount":"auto","webkitColumnGap":"normal","webkitColumnRule":"0px none rgb(0, 0, 0)","webkitColumnRuleColor":"rgb(0, 0, 0)","webkitColumnRuleStyle":"none","webkitColumnRuleWidth":"0px","webkitColumnSpan":"none","webkitColumnWidth":"auto","webkitColumns":"auto auto","webkitFilter":"none","webkitFlex":"0 1 auto","webkitFlexBasis":"auto","webkitFlexDirection":"row","webkitFlexFlow":"row nowrap","webkitFlexGrow":"0","webkitFlexShrink":"1","webkitFlexWrap":"nowrap","webkitFontFeatureSettings":"normal","webkitFontSmoothing":"auto","webkitHyphenateCharacter":"auto","webkitJustifyContent":"normal","webkitLineBreak":"auto","webkitLineClamp":"none","webkitLocale":"auto","webkitLogicalHeight":"0px","webkitLogicalWidth":"0px","webkitMarginAfter":"8px","webkitMarginBefore":"8px","webkitMarginEnd":"8px","webkitMarginStart":"8px","webkitMask":"none","webkitMaskBoxImage":"none","webkitMaskBoxImageOutset":"0","webkitMaskBoxImageRepeat":"stretch","webkitMaskBoxImageSlice":"0 fill","webkitMaskBoxImageSource":"none","webkitMaskBoxImageWidth":"auto","webkitMaskClip":"border-box","webkitMaskComposite":"add","webkitMaskImage":"none","webkitMaskOrigin":"border-box","webkitMaskPosition":"0% 0%","webkitMaskPositionX":"0%","webkitMaskPositionY":"0%","webkitMaskRepeat":"repeat","webkitMaskSize":"auto","webkitMaxLogicalHeight":"none","webkitMaxLogicalWidth":"none","webkitMinLogicalHeight":"0px","webkitMinLogicalWidth":"0px","webkitOpacity":"1","webkitOrder":"0","webkitPaddingAfter":"0px","webkitPaddingBefore":"0px","webkitPaddingEnd":"0px","webkitPaddingStart":"0px","webkitPerspective":"none","webkitPerspectiveOrigin":"0px 0px","webkitPerspectiveOriginX":"","webkitPerspectiveOriginY":"","webkitPrintColorAdjust":"economy","webkitRtlOrdering":"logical","webkitRubyPosition":"before","webkitShapeImageThreshold":"0","webkitShapeMargin":"0px","webkitShapeOutside":"none","webkitTapHighlightColor":"rgba(0, 0, 0, 0.18)","webkitTextCombine":"none","webkitTextDecorationsInEffect":"none","webkitTextEmphasis":"none rgb(0, 0, 0)","webkitTextEmphasisColor":"rgb(0, 0, 0)","webkitTextEmphasisPosition":"over","webkitTextEmphasisStyle":"none","webkitTextFillColor":"rgb(0, 0, 0)","webkitTextOrientation":"vertical-right","webkitTextSecurity":"none","webkitTextSizeAdjust":"auto","webkitTextStroke":"0px rgb(0, 0, 0)","webkitTextStrokeColor":"rgb(0, 0, 0)","webkitTextStrokeWidth":"0px","webkitTransform":"none","webkitTransformOrigin":"0px 0px","webkitTransformOriginX":"","webkitTransformOriginY":"","webkitTransformOriginZ":"","webkitTransformStyle":"flat","webkitTransition":"all","webkitTransitionDelay":"0s","webkitTransitionDuration":"0s","webkitTransitionProperty":"all","webkitTransitionTimingFunction":"ease","webkitUserDrag":"auto","webkitUserModify":"read-only","webkitUserSelect":"auto","webkitWritingMode":"horizontal-tb","whiteSpace":"normal","whiteSpaceCollapse":"collapse","widows":"2","width":"0px","willChange":"auto","wordBreak":"normal","wordSpacing":"0px","wordWrap":"normal","writingMode":"horizontal-tb","x":"0px","y":"0px","zIndex":"auto","zoom":"1"}'
    objs = JSON.parse(objs);
    Object.keys(objs).forEach(e => {
        this[e] = objs[e]
    })
    mm.memory.private_data.set(this, {
        length: Object.keys(objs).length
    })
})


Object.defineProperties(CSSStyleDeclaration.prototype, {
    [Symbol.toStringTag]: {value:'CSSStyleDeclaration'},
    cssText: {

        get: newFunc('cssText', 10, function cssText() {
            let res = mm.memory.private_data.get(this).cssText;
            if (debug) print('CSSStyleDeclaration.cssText.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cssText', 1, function cssText(value) {
            if (debug) print('CSSStyleDeclaration.cssText.set', value)
            mm.memory.private_data.get(this).cssText = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    length: {
        get: newFunc('length', 2, function () {
            return mm.memory.private_data.get(this).length
        })
    },
    parentRule: {

        get: newFunc('parentRule', 10, function parentRule() {
            let res = mm.memory.private_data.get(this).parentRule;
            if (debug) print('CSSStyleDeclaration.parentRule.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cssFloat: {

        get: newFunc('cssFloat', 10, function cssFloat() {
            let res = mm.memory.private_data.get(this).cssFloat;
            if (debug) print('CSSStyleDeclaration.cssFloat.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,


        set: newFunc('cssFloat', 1, function cssFloat(value) {
            if (debug) print('CSSStyleDeclaration.cssFloat.set', value)
            mm.memory.private_data.get(this).cssFloat = value

        }, {set: true}), enumerable: true, configurable: true,


    },
    getPropertyPriority: {

        value: newFunc('getPropertyPriority', 10, function getPropertyPriority() {
            if (debug) print('CSSStyleDeclaration.getPropertyPriority.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    getPropertyValue: {

        value: newFunc('getPropertyValue', 10, function getPropertyValue() {
            if (debug) print('CSSStyleDeclaration.getPropertyValue.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    item: {

        value: newFunc('item', 10, function item() {
            if (debug) print('CSSStyleDeclaration.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    removeProperty: {

        value: newFunc('removeProperty', 10, function removeProperty() {
            if (debug) print('CSSStyleDeclaration.removeProperty.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    setProperty: {

        value: newFunc('setProperty', 10, function setProperty() {
            if (debug) print('CSSStyleDeclaration.setProperty.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function constructor() {
            if (debug) print('CSSStyleDeclaration.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
})


css = newFunc('CSS', 1, function CSS() {
})
CSS = new css()

Object.defineProperties(CSS, {
    Hz: {

        value: newFunc('Hz', 10, function Hz() {
            if (debug) print('CSS.Hz.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    Q: {

        value: newFunc('Q', 10, function Q() {
            if (debug) print('CSS.Q.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ch: {

        value: newFunc('ch', 10, function ch() {
            if (debug) print('CSS.ch.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cm: {

        value: newFunc('cm', 10, function cm() {
            if (debug) print('CSS.cm.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cqb: {

        value: newFunc('cqb', 10, function cqb() {
            if (debug) print('CSS.cqb.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cqh: {

        value: newFunc('cqh', 10, function cqh() {
            if (debug) print('CSS.cqh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cqi: {

        value: newFunc('cqi', 10, function cqi() {
            if (debug) print('CSS.cqi.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cqmax: {

        value: newFunc('cqmax', 10, function cqmax() {
            if (debug) print('CSS.cqmax.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cqmin: {

        value: newFunc('cqmin', 10, function cqmin() {
            if (debug) print('CSS.cqmin.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    cqw: {

        value: newFunc('cqw', 10, function cqw() {
            if (debug) print('CSS.cqw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    deg: {

        value: newFunc('deg', 10, function deg() {
            if (debug) print('CSS.deg.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dpcm: {

        value: newFunc('dpcm', 10, function dpcm() {
            if (debug) print('CSS.dpcm.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dpi: {

        value: newFunc('dpi', 10, function dpi() {
            if (debug) print('CSS.dpi.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dppx: {

        value: newFunc('dppx', 10, function dppx() {
            if (debug) print('CSS.dppx.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    em: {

        value: newFunc('em', 10, function em() {
            if (debug) print('CSS.em.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    escape: {

        value: newFunc('escape', 10, function escape() {
            if (debug) print('CSS.escape.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ex: {

        value: newFunc('ex', 10, function ex() {
            if (debug) print('CSS.ex.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    fr: {

        value: newFunc('fr', 10, function fr() {
            if (debug) print('CSS.fr.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    grad: {

        value: newFunc('grad', 10, function grad() {
            if (debug) print('CSS.grad.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    in: {

        value: newFunc('in', 10, function () {
            if (debug) print('CSS.in.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    kHz: {

        value: newFunc('kHz', 10, function kHz() {
            if (debug) print('CSS.kHz.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    mm: {

        value: newFunc('mm', 10, function mm() {
            if (debug) print('CSS.mm.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ms: {

        value: newFunc('ms', 10, function ms() {
            if (debug) print('CSS.ms.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    number: {

        value: newFunc('number', 10, function number() {
            if (debug) print('CSS.number.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pc: {

        value: newFunc('pc', 10, function pc() {
            if (debug) print('CSS.pc.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    percent: {

        value: newFunc('percent', 10, function percent() {
            if (debug) print('CSS.percent.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    pt: {

        value: newFunc('pt', 10, function pt() {
            if (debug) print('CSS.pt.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    px: {

        value: newFunc('px', 10, function px() {
            if (debug) print('CSS.px.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rad: {

        value: newFunc('rad', 10, function rad() {
            if (debug) print('CSS.rad.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    registerProperty: {

        value: newFunc('registerProperty', 10, function registerProperty() {
            if (debug) print('CSS.registerProperty.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rem: {

        value: newFunc('rem', 10, function rem() {
            if (debug) print('CSS.rem.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    s: {

        value: newFunc('s', 10, function s() {
            if (debug) print('CSS.s.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    supports: {

        value: newFunc('supports', 10, function supports() {
            if (debug) print('CSS.supports.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    turn: {

        value: newFunc('turn', 10, function turn() {
            if (debug) print('CSS.turn.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vh: {

        value: newFunc('vh', 10, function vh() {
            if (debug) print('CSS.vh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vmax: {

        value: newFunc('vmax', 10, function vmax() {
            if (debug) print('CSS.vmax.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vmin: {

        value: newFunc('vmin', 10, function vmin() {
            if (debug) print('CSS.vmin.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vw: {

        value: newFunc('vw', 10, function vw() {
            if (debug) print('CSS.vw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    highlights: {

        get: newFunc('highlights', 10, function highlights() {
            let res = mm.memory.private_data.get(this).highlights;
            if (debug) print('CSS.highlights.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    cap: {

        value: newFunc('cap', 10, function cap() {
            if (debug) print('CSS.cap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rcap: {

        value: newFunc('rcap', 10, function rcap() {
            if (debug) print('CSS.rcap.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dvb: {

        value: newFunc('dvb', 10, function dvb() {
            if (debug) print('CSS.dvb.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dvh: {

        value: newFunc('dvh', 10, function dvh() {
            if (debug) print('CSS.dvh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dvi: {

        value: newFunc('dvi', 10, function dvi() {
            if (debug) print('CSS.dvi.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dvmax: {

        value: newFunc('dvmax', 10, function dvmax() {
            if (debug) print('CSS.dvmax.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dvmin: {

        value: newFunc('dvmin', 10, function dvmin() {
            if (debug) print('CSS.dvmin.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    dvw: {

        value: newFunc('dvw', 10, function dvw() {
            if (debug) print('CSS.dvw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lvb: {

        value: newFunc('lvb', 10, function lvb() {
            if (debug) print('CSS.lvb.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lvh: {

        value: newFunc('lvh', 10, function lvh() {
            if (debug) print('CSS.lvh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lvi: {

        value: newFunc('lvi', 10, function lvi() {
            if (debug) print('CSS.lvi.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lvmax: {

        value: newFunc('lvmax', 10, function lvmax() {
            if (debug) print('CSS.lvmax.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lvmin: {

        value: newFunc('lvmin', 10, function lvmin() {
            if (debug) print('CSS.lvmin.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lvw: {

        value: newFunc('lvw', 10, function lvw() {
            if (debug) print('CSS.lvw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    svb: {

        value: newFunc('svb', 10, function svb() {
            if (debug) print('CSS.svb.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    svh: {

        value: newFunc('svh', 10, function svh() {
            if (debug) print('CSS.svh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    svi: {

        value: newFunc('svi', 10, function svi() {
            if (debug) print('CSS.svi.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    svmax: {

        value: newFunc('svmax', 10, function svmax() {
            if (debug) print('CSS.svmax.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    svmin: {

        value: newFunc('svmin', 10, function svmin() {
            if (debug) print('CSS.svmin.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    svw: {

        value: newFunc('svw', 10, function svw() {
            if (debug) print('CSS.svw.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vb: {

        value: newFunc('vb', 10, function vb() {
            if (debug) print('CSS.vb.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    vi: {

        value: newFunc('vi', 10, function vi() {
            if (debug) print('CSS.vi.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ic: {

        value: newFunc('ic', 10, function ic() {
            if (debug) print('CSS.ic.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    lh: {

        value: newFunc('lh', 10, function lh() {
            if (debug) print('CSS.lh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rch: {

        value: newFunc('rch', 10, function rch() {
            if (debug) print('CSS.rch.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rex: {

        value: newFunc('rex', 10, function rex() {
            if (debug) print('CSS.rex.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    ric: {

        value: newFunc('ric', 10, function ric() {
            if (debug) print('CSS.ric.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    rlh: {

        value: newFunc('rlh', 10, function rlh() {
            if (debug) print('CSS.rlh.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    x: {

        value: newFunc('x', 10, function x() {
            if (debug) print('CSS.x.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    paintWorklet: {

        get: newFunc('paintWorklet', 10, function paintWorklet() {
            let res = mm.memory.private_data.get(this).paintWorklet;
            if (debug) print('CSS.paintWorklet.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
})
