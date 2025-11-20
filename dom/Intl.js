
let _Intl = Intl;
Intl = newFunc('Intl', 1, function (){print('Intl.call');mm.memory.private_data.set(this, {})});


Object.defineProperties(Intl, {
    [Symbol.toStringTag]:{
        value:'Intl'
    },
    'getCanonicalLocales': {

        value: newFunc('getCanonicalLocales', 10, function () {

            
            ;
            if (debug)print('Intl.getCanonicalLocales.call', arguments)
            return _Intl.getCanonicalLocales.call(this, arguments);

        }), writable:true, enumerable:false, configurable:true,



    },
    'supportedValuesOf': {

        value: newFunc('supportedValuesOf', 10, function () {

            
            ;
            if (debug)print('Intl.supportedValuesOf.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
    'DateTimeFormat': {

        value: newFunc('DateTimeFormat', 10, function () {

            
            ;
            if (debug)print('Intl.DateTimeFormat.call', arguments)
            return _Intl.DateTimeFormat.apply(this, arguments);


        }), writable:true, enumerable:false, configurable:true,



    },
    'NumberFormat': {

        value: newFunc('NumberFormat', 10, function () {

            
            ;
            if (debug)print('Intl.NumberFormat.call', arguments)
            return _Intl.NumberFormat.apply(this, arguments);


        }), writable:true, enumerable:false, configurable:true,



    },
    'Collator': {

        value: newFunc('Collator', 10, function () {

            
            ;
            if (debug)print('Intl.Collator.call', arguments)
            return _Intl.Collator.apply(this, arguments);

        }), writable:true, enumerable:false, configurable:true,



    },
    'v8BreakIterator': {

        value: newFunc('v8BreakIterator', 10, function () {

            
            ;
            if (debug)print('Intl.v8BreakIterator.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
    'PluralRules': {

        value: newFunc('PluralRules', 10, function () {

            
            ;
            if (debug)print('Intl.PluralRules.call', arguments)
            return new _Intl.PluralRules(...arguments)


        }), writable:true, enumerable:false, configurable:true,



    },
    'RelativeTimeFormat': {

        value: newFunc('RelativeTimeFormat', 10, function () {

            
            ;
            if (debug)print('Intl.RelativeTimeFormat.call', arguments)
            return new _Intl.RelativeTimeFormat(...arguments)


        }), writable:true, enumerable:false, configurable:true,



    },
    'ListFormat': {

        value: newFunc('ListFormat', 10, function () {

            
            ;
            if (debug)print('Intl.ListFormat.call', arguments)
            return new _Intl.ListFormat(...arguments);


        }), writable:true, enumerable:false, configurable:true,



    },
    'Locale': {

        value: newFunc('Locale', 10, function () {

            
            ;
            if (debug)print('Intl.Locale.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
    'DisplayNames': {

        value: newFunc('DisplayNames', 10, function () {

            
            ;
            if (debug)print('Intl.DisplayNames.call', arguments)
            return new _Intl.DisplayNames(...arguments);


        }), writable:true, enumerable:false, configurable:true,



    },
    'Segmenter': {

        value: newFunc('Segmenter', 10, function () {

            
            ;
            if (debug)print('Intl.Segmenter.call', arguments)


        }), writable:true, enumerable:false, configurable:true,



    },
    'DurationFormat': {

        value: newFunc('DurationFormat', 10, function () {

            
            ;
            if (debug)print('Intl.DurationFormat.call', arguments)

        }), writable:true, enumerable:false, configurable:true,



    },
})