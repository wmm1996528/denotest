SpeechSynthesisVoice = newFunc('SpeechSynthesisVoice', 1, function SpeechSynthesisVoice(config) {
    mm.memory.private_data.set(this, config)
})


Object.defineProperties(SpeechSynthesisVoice.prototype, {
    voiceURI: {

        get: newFunc('voiceURI', 10, function voiceURI() {
            let res = mm.memory.private_data.get(this).voiceURI;
            if (debug) print('SpeechSynthesisVoice.voiceURI.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    name: {

        get: newFunc('name', 10, function name() {
            let res = mm.memory.private_data.get(this).name;
            if (debug) print('SpeechSynthesisVoice.name.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    lang: {

        get: newFunc('lang', 10, function lang() {
            let res = mm.memory.private_data.get(this).lang;
            if (debug) print('SpeechSynthesisVoice.lang.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    localService: {

        get: newFunc('localService', 10, function localService() {
            let res = mm.memory.private_data.get(this).localService;
            if (debug) print('SpeechSynthesisVoice.localService.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    default: {

        get: newFunc('default', 10, function localService() {
            let res = mm.memory.private_data.get(this).default;
            if (debug) print('SpeechSynthesisVoice.default.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

            },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!SpeechSynthesisVoice.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('SpeechSynthesisVoice.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

let voices = [
    {
        "default": true,
        "lang": "zh-CN",
        "localService": true,
        "name": "婷婷",
        "voiceURI": "婷婷"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Aaron",
        "voiceURI": "Aaron"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Albert",
        "voiceURI": "Albert"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Alice",
        "voiceURI": "Alice"
    },
    {
        "default": false,
        "lang": "sv-SE",
        "localService": true,
        "name": "Alva",
        "voiceURI": "Alva"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Amélie",
        "voiceURI": "Amélie"
    },
    {
        "default": false,
        "lang": "ms-MY",
        "localService": true,
        "name": "Amira",
        "voiceURI": "Amira"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Anna",
        "voiceURI": "Anna"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Arthur",
        "voiceURI": "Arthur"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Bad News",
        "voiceURI": "Bad News"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Bahh",
        "voiceURI": "Bahh"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Bells",
        "voiceURI": "Bells"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Boing",
        "voiceURI": "Boing"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Bubbles",
        "voiceURI": "Bubbles"
    },
    {
        "default": false,
        "lang": "he-IL",
        "localService": true,
        "name": "Carmit",
        "voiceURI": "Carmit"
    },
    {
        "default": false,
        "lang": "en-AU",
        "localService": true,
        "name": "Catherine",
        "voiceURI": "Catherine"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Cellos",
        "voiceURI": "Cellos"
    },
    {
        "default": false,
        "lang": "id-ID",
        "localService": true,
        "name": "Damayanti",
        "voiceURI": "Damayanti"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Daniel (英语（英国）)",
        "voiceURI": "Daniel (英语（英国）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Daniel (法语（法国）)",
        "voiceURI": "Daniel (法语（法国）)"
    },
    {
        "default": false,
        "lang": "bg-BG",
        "localService": true,
        "name": "Daria",
        "voiceURI": "Daria"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Eddy (德语（德国）)",
        "voiceURI": "Eddy (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Eddy (英语（英国）)",
        "voiceURI": "Eddy (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Eddy (英语（美国）)",
        "voiceURI": "Eddy (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Eddy (西班牙语（西班牙）)",
        "voiceURI": "Eddy (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Eddy (西班牙语（墨西哥）)",
        "voiceURI": "Eddy (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Eddy (芬兰语（芬兰）)",
        "voiceURI": "Eddy (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Eddy (法语（加拿大）)",
        "voiceURI": "Eddy (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Eddy (法语（法国）)",
        "voiceURI": "Eddy (法语（法国）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Eddy (意大利语（意大利）)",
        "voiceURI": "Eddy (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Eddy (葡萄牙语（巴西）)",
        "voiceURI": "Eddy (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "nl-BE",
        "localService": true,
        "name": "Ellen",
        "voiceURI": "Ellen"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Flo (德语（德国）)",
        "voiceURI": "Flo (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Flo (英语（英国）)",
        "voiceURI": "Flo (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Flo (英语（美国）)",
        "voiceURI": "Flo (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Flo (西班牙语（西班牙）)",
        "voiceURI": "Flo (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Flo (西班牙语（墨西哥）)",
        "voiceURI": "Flo (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Flo (芬兰语（芬兰）)",
        "voiceURI": "Flo (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Flo (法语（加拿大）)",
        "voiceURI": "Flo (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Flo (法语（法国）)",
        "voiceURI": "Flo (法语（法国）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Flo (意大利语（意大利）)",
        "voiceURI": "Flo (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Flo (葡萄牙语（巴西）)",
        "voiceURI": "Flo (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Fred",
        "voiceURI": "Fred"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Good News",
        "voiceURI": "Good News"
    },
    {
        "default": false,
        "lang": "en-AU",
        "localService": true,
        "name": "Gordon",
        "voiceURI": "Gordon"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Grandma (德语（德国）)",
        "voiceURI": "Grandma (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Grandma (英语（英国）)",
        "voiceURI": "Grandma (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Grandma (英语（美国）)",
        "voiceURI": "Grandma (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Grandma (西班牙语（西班牙）)",
        "voiceURI": "Grandma (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Grandma (西班牙语（墨西哥）)",
        "voiceURI": "Grandma (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Grandma (芬兰语（芬兰）)",
        "voiceURI": "Grandma (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Grandma (法语（加拿大）)",
        "voiceURI": "Grandma (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Grandma (法语（法国）)",
        "voiceURI": "Grandma (法语（法国）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Grandma (意大利语（意大利）)",
        "voiceURI": "Grandma (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Grandma (葡萄牙语（巴西）)",
        "voiceURI": "Grandma (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Grandpa (德语（德国）)",
        "voiceURI": "Grandpa (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Grandpa (英语（英国）)",
        "voiceURI": "Grandpa (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Grandpa (英语（美国）)",
        "voiceURI": "Grandpa (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Grandpa (西班牙语（西班牙）)",
        "voiceURI": "Grandpa (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Grandpa (西班牙语（墨西哥）)",
        "voiceURI": "Grandpa (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Grandpa (芬兰语（芬兰）)",
        "voiceURI": "Grandpa (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Grandpa (法语（加拿大）)",
        "voiceURI": "Grandpa (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Grandpa (法语（法国）)",
        "voiceURI": "Grandpa (法语（法国）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Grandpa (意大利语（意大利）)",
        "voiceURI": "Grandpa (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Grandpa (葡萄牙语（巴西）)",
        "voiceURI": "Grandpa (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "ja-JP",
        "localService": true,
        "name": "Hattori",
        "voiceURI": "Hattori"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Helena",
        "voiceURI": "Helena"
    },
    {
        "default": false,
        "lang": "ro-RO",
        "localService": true,
        "name": "Ioana",
        "voiceURI": "Ioana"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Jacques",
        "voiceURI": "Jacques"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Jester",
        "voiceURI": "Jester"
    },
    {
        "default": false,
        "lang": "pt-PT",
        "localService": true,
        "name": "Joana",
        "voiceURI": "Joana"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Junior",
        "voiceURI": "Junior"
    },
    {
        "default": false,
        "lang": "th-TH",
        "localService": true,
        "name": "Kanya",
        "voiceURI": "Kanya"
    },
    {
        "default": false,
        "lang": "en-AU",
        "localService": true,
        "name": "Karen",
        "voiceURI": "Karen"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Kathy",
        "voiceURI": "Kathy"
    },
    {
        "default": false,
        "lang": "ja-JP",
        "localService": true,
        "name": "Kyoko",
        "voiceURI": "Kyoko"
    },
    {
        "default": false,
        "lang": "hr-HR",
        "localService": true,
        "name": "Lana",
        "voiceURI": "Lana"
    },
    {
        "default": false,
        "lang": "sk-SK",
        "localService": true,
        "name": "Laura",
        "voiceURI": "Laura"
    },
    {
        "default": false,
        "lang": "hi-IN",
        "localService": true,
        "name": "Lekha",
        "voiceURI": "Lekha"
    },
    {
        "default": false,
        "lang": "uk-UA",
        "localService": true,
        "name": "Lesya",
        "voiceURI": "Lesya"
    },
    {
        "default": false,
        "lang": "zh-CN",
        "localService": true,
        "name": "Li-Mu",
        "voiceURI": "Li-Mu"
    },
    {
        "default": false,
        "lang": "vi-VN",
        "localService": true,
        "name": "Linh",
        "voiceURI": "Linh"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Luciana",
        "voiceURI": "Luciana"
    },
    {
        "default": false,
        "lang": "ar-001",
        "localService": true,
        "name": "Majed",
        "voiceURI": "Majed"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Marie",
        "voiceURI": "Marie"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Martha",
        "voiceURI": "Martha"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Martin",
        "voiceURI": "Martin"
    },
    {
        "default": false,
        "lang": "el-GR",
        "localService": true,
        "name": "Melina",
        "voiceURI": "Melina"
    },
    {
        "default": false,
        "lang": "ru-RU",
        "localService": true,
        "name": "Milena",
        "voiceURI": "Milena"
    },
    {
        "default": false,
        "lang": "en-IE",
        "localService": true,
        "name": "Moira",
        "voiceURI": "Moira"
    },
    {
        "default": false,
        "lang": "ca-ES",
        "localService": true,
        "name": "Montse",
        "voiceURI": "Montse"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Mónica",
        "voiceURI": "Mónica"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Nicky",
        "voiceURI": "Nicky"
    },
    {
        "default": false,
        "lang": "nb-NO",
        "localService": true,
        "name": "Nora",
        "voiceURI": "Nora"
    },
    {
        "default": false,
        "lang": "ja-JP",
        "localService": true,
        "name": "O-Ren",
        "voiceURI": "O-Ren"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Organ",
        "voiceURI": "Organ"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Paulina",
        "voiceURI": "Paulina"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Ralph",
        "voiceURI": "Ralph"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Reed (德语（德国）)",
        "voiceURI": "Reed (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Reed (英语（英国）)",
        "voiceURI": "Reed (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Reed (英语（美国）)",
        "voiceURI": "Reed (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Reed (西班牙语（西班牙）)",
        "voiceURI": "Reed (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Reed (西班牙语（墨西哥）)",
        "voiceURI": "Reed (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Reed (芬兰语（芬兰）)",
        "voiceURI": "Reed (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Reed (法语（加拿大）)",
        "voiceURI": "Reed (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Reed (意大利语（意大利）)",
        "voiceURI": "Reed (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Reed (葡萄牙语（巴西）)",
        "voiceURI": "Reed (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "en-IN",
        "localService": true,
        "name": "Rishi",
        "voiceURI": "Rishi"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Rocko (德语（德国）)",
        "voiceURI": "Rocko (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Rocko (英语（英国）)",
        "voiceURI": "Rocko (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Rocko (英语（美国）)",
        "voiceURI": "Rocko (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Rocko (西班牙语（西班牙）)",
        "voiceURI": "Rocko (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Rocko (西班牙语（墨西哥）)",
        "voiceURI": "Rocko (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Rocko (芬兰语（芬兰）)",
        "voiceURI": "Rocko (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Rocko (法语（加拿大）)",
        "voiceURI": "Rocko (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Rocko (法语（法国）)",
        "voiceURI": "Rocko (法语（法国）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Rocko (意大利语（意大利）)",
        "voiceURI": "Rocko (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Rocko (葡萄牙语（巴西）)",
        "voiceURI": "Rocko (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Samantha",
        "voiceURI": "Samantha"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Sandy (德语（德国）)",
        "voiceURI": "Sandy (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Sandy (英语（英国）)",
        "voiceURI": "Sandy (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Sandy (英语（美国）)",
        "voiceURI": "Sandy (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Sandy (西班牙语（西班牙）)",
        "voiceURI": "Sandy (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Sandy (西班牙语（墨西哥）)",
        "voiceURI": "Sandy (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Sandy (芬兰语（芬兰）)",
        "voiceURI": "Sandy (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Sandy (法语（加拿大）)",
        "voiceURI": "Sandy (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Sandy (法语（法国）)",
        "voiceURI": "Sandy (法语（法国）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Sandy (意大利语（意大利）)",
        "voiceURI": "Sandy (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Sandy (葡萄牙语（巴西）)",
        "voiceURI": "Sandy (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "da-DK",
        "localService": true,
        "name": "Sara",
        "voiceURI": "Sara"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Satu",
        "voiceURI": "Satu"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": true,
        "name": "Shelley (德语（德国）)",
        "voiceURI": "Shelley (德语（德国）)"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": true,
        "name": "Shelley (英语（英国）)",
        "voiceURI": "Shelley (英语（英国）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Shelley (英语（美国）)",
        "voiceURI": "Shelley (英语（美国）)"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": true,
        "name": "Shelley (西班牙语（西班牙）)",
        "voiceURI": "Shelley (西班牙语（西班牙）)"
    },
    {
        "default": false,
        "lang": "es-MX",
        "localService": true,
        "name": "Shelley (西班牙语（墨西哥）)",
        "voiceURI": "Shelley (西班牙语（墨西哥）)"
    },
    {
        "default": false,
        "lang": "fi-FI",
        "localService": true,
        "name": "Shelley (芬兰语（芬兰）)",
        "voiceURI": "Shelley (芬兰语（芬兰）)"
    },
    {
        "default": false,
        "lang": "fr-CA",
        "localService": true,
        "name": "Shelley (法语（加拿大）)",
        "voiceURI": "Shelley (法语（加拿大）)"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Shelley (法语（法国）)",
        "voiceURI": "Shelley (法语（法国）)"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": true,
        "name": "Shelley (意大利语（意大利）)",
        "voiceURI": "Shelley (意大利语（意大利）)"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": true,
        "name": "Shelley (葡萄牙语（巴西）)",
        "voiceURI": "Shelley (葡萄牙语（巴西）)"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Superstar",
        "voiceURI": "Superstar"
    },
    {
        "default": false,
        "lang": "en-ZA",
        "localService": true,
        "name": "Tessa",
        "voiceURI": "Tessa"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": true,
        "name": "Thomas",
        "voiceURI": "Thomas"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Trinoids",
        "voiceURI": "Trinoids"
    },
    {
        "default": false,
        "lang": "hu-HU",
        "localService": true,
        "name": "Tünde",
        "voiceURI": "Tünde"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Whisper",
        "voiceURI": "Whisper"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Wobble",
        "voiceURI": "Wobble"
    },
    {
        "default": false,
        "lang": "nl-NL",
        "localService": true,
        "name": "Xander",
        "voiceURI": "Xander"
    },
    {
        "default": false,
        "lang": "tr-TR",
        "localService": true,
        "name": "Yelda",
        "voiceURI": "Yelda"
    },
    {
        "default": false,
        "lang": "ko-KR",
        "localService": true,
        "name": "Yuna",
        "voiceURI": "Yuna"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": true,
        "name": "Zarvox",
        "voiceURI": "Zarvox"
    },
    {
        "default": false,
        "lang": "pl-PL",
        "localService": true,
        "name": "Zosia",
        "voiceURI": "Zosia"
    },
    {
        "default": false,
        "lang": "cs-CZ",
        "localService": true,
        "name": "Zuzana",
        "voiceURI": "Zuzana"
    },
    {
        "default": false,
        "lang": "zh-HK",
        "localService": true,
        "name": "善怡",
        "voiceURI": "善怡"
    },
    {
        "default": false,
        "lang": "zh-TW",
        "localService": true,
        "name": "美嘉",
        "voiceURI": "美嘉"
    },
    {
        "default": false,
        "lang": "zh-CN",
        "localService": true,
        "name": "语舒",
        "voiceURI": "语舒"
    },
    {
        "default": false,
        "lang": "de-DE",
        "localService": false,
        "name": "Google Deutsch",
        "voiceURI": "Google Deutsch"
    },
    {
        "default": false,
        "lang": "en-US",
        "localService": false,
        "name": "Google US English",
        "voiceURI": "Google US English"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": false,
        "name": "Google UK English Female",
        "voiceURI": "Google UK English Female"
    },
    {
        "default": false,
        "lang": "en-GB",
        "localService": false,
        "name": "Google UK English Male",
        "voiceURI": "Google UK English Male"
    },
    {
        "default": false,
        "lang": "es-ES",
        "localService": false,
        "name": "Google español",
        "voiceURI": "Google español"
    },
    {
        "default": false,
        "lang": "es-US",
        "localService": false,
        "name": "Google español de Estados Unidos",
        "voiceURI": "Google español de Estados Unidos"
    },
    {
        "default": false,
        "lang": "fr-FR",
        "localService": false,
        "name": "Google français",
        "voiceURI": "Google français"
    },
    {
        "default": false,
        "lang": "hi-IN",
        "localService": false,
        "name": "Google हिन्दी",
        "voiceURI": "Google हिन्दी"
    },
    {
        "default": false,
        "lang": "id-ID",
        "localService": false,
        "name": "Google Bahasa Indonesia",
        "voiceURI": "Google Bahasa Indonesia"
    },
    {
        "default": false,
        "lang": "it-IT",
        "localService": false,
        "name": "Google italiano",
        "voiceURI": "Google italiano"
    },
    {
        "default": false,
        "lang": "ja-JP",
        "localService": false,
        "name": "Google 日本語",
        "voiceURI": "Google 日本語"
    },
    {
        "default": false,
        "lang": "ko-KR",
        "localService": false,
        "name": "Google 한국의",
        "voiceURI": "Google 한국의"
    },
    {
        "default": false,
        "lang": "nl-NL",
        "localService": false,
        "name": "Google Nederlands",
        "voiceURI": "Google Nederlands"
    },
    {
        "default": false,
        "lang": "pl-PL",
        "localService": false,
        "name": "Google polski",
        "voiceURI": "Google polski"
    },
    {
        "default": false,
        "lang": "pt-BR",
        "localService": false,
        "name": "Google português do Brasil",
        "voiceURI": "Google português do Brasil"
    },
    {
        "default": false,
        "lang": "ru-RU",
        "localService": false,
        "name": "Google русский",
        "voiceURI": "Google русский"
    },
    {
        "default": false,
        "lang": "zh-CN",
        "localService": false,
        "name": "Google 普通话（中国大陆）",
        "voiceURI": "Google 普通话（中国大陆）"
    },
    {
        "default": false,
        "lang": "zh-HK",
        "localService": false,
        "name": "Google 粤語（香港）",
        "voiceURI": "Google 粤語（香港）"
    },
    {
        "default": false,
        "lang": "zh-TW",
        "localService": false,
        "name": "Google 國語（臺灣）",
        "voiceURI": "Google 國語（臺灣）"
    }
]
SpeechSynthesis = newFunc('speechSynthesis', 1, function speechSynthesis() {
    mm.memory.private_data.set(this, {
        voices: voices.map(e=>{
            return new SpeechSynthesisVoice(e)
        })
    })
})





; delete SpeechSynthesis.prototype.constructor;
;
Object.defineProperties(SpeechSynthesis.prototype, {
    [Symbol.toStringTag]:{
        value:'SpeechSynthesis'
    },

'pending': {

                  get: newFunc('pending', 10, function (){


                    if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['pending'];
            if (debug)print('SpeechSynthesis.pending.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'speaking': {

                  get: newFunc('speaking', 10, function (){


                    if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['speaking'];
            if (debug)print('SpeechSynthesis.speaking.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'paused': {

                  get: newFunc('paused', 10, function (){


                    if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['paused'];
            if (debug)print('SpeechSynthesis.paused.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,

        },
'onvoiceschanged': {

                  get: newFunc('onvoiceschanged', 10, function (){


                    if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;

            let res =  mm.memory.private_data.get(this)['onvoiceschanged'];
            if (debug)print('SpeechSynthesis.onvoiceschanged.get', res)

            return res
        }, {get: true}), enumerable:true, configurable:true,


             set: newFunc('onvoiceschanged', 1, function (value){
                if (debug)print('SpeechSynthesis.onvoiceschanged.set', value)
            mm.memory.private_data.get(this)['onvoiceschanged'] = value

            }, {set:true}),  enumerable:true, configurable:true,



        },
'cancel': {

            value: newFunc('cancel', 10, function () {

                      if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('SpeechSynthesis.cancel.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'getVoices': {

            value: newFunc('getVoices', 10, function () {

                      if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('SpeechSynthesis.getVoices.call', arguments)
                return mm.memory.private_data.get(this).voices;

            }), writable:true, enumerable:true, configurable:true,



        },
'pause': {

            value: newFunc('pause', 10, function () {

                      if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('SpeechSynthesis.pause.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'resume': {

            value: newFunc('resume', 10, function () {

                      if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('SpeechSynthesis.resume.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'speak': {

            value: newFunc('speak', 10, function () {

                      if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('SpeechSynthesis.speak.call', arguments)

            }), writable:true, enumerable:true, configurable:true,



        },
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!SpeechSynthesis.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('SpeechSynthesis.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

speechSynthesis = new SpeechSynthesis();