
NodeList = newFunc('NodeList', 1, function (len) {
    print('NodeList.call');
    mm.memory.private_data.set(this, {
        length:len
    })
})


Object.defineProperties(NodeList.prototype, {
    entries: {

        value: newFunc('entries', 10, function () {
            if (debug) print('NodeList.entries.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    keys: {

        value: newFunc('keys', 10, function () {
            if (debug) print('NodeList.keys.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    values: {

        value: newFunc('values', 10, function () {
            if (debug) print('NodeList.values.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    forEach: {

        value: newFunc('forEach', 10, function () {
            if (debug) print('NodeList.forEach.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    length: {

        get: newFunc('length', 10, function () {
            let res = mm.memory.private_data.get(this).length;
            if (debug) print('NodeList.length.get', res)

            return res
        }, {get: true}), enumerable: true, configurable: true,

    },
    item: {

        value: newFunc('item', 10, function () {
            if (debug) print('NodeList.item.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('NodeList.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});




Node = newFunc('Node', 10, function Node() {
    throw new TypeError('Illegal constructor')
})


;

function get_img(_img) {
// load the tls-client shared package for your OS you are currently running your nodejs script (i'm running on mac)


    const requestPayload = {
        "tlsClientIdentifier": "chrome_133",
        "followRedirects": true,
        "insecureSkipVerify": false,
        "withoutCookieJar": false,
        "withDefaultCookieJar": false,
        "isByteRequest": false,
        "catchPanics": false,
        "withDebug": false,
        "isByteResponse": true,
        "forceHttp1": false,
        "withRandomTLSExtensionOrder": true,
        "timeoutSeconds": 30,
        "timeoutMilliseconds": 0,
        "sessionId": "my-session-id",
        "proxyUrl": "http://127.0.0.1:7890",
        "isRotatingProxy": false,
        "certificatePinningHosts": {},
        "headers": {
            "User-Agent": navigator.userAgent,
            "Accept": "image/avif,image/webp,image/apng,image/svg+xml,image/*,*/*;q=0.8",
            "Accept-Encoding": "gzip, deflate, br, zstd",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-ch-ua": "\"Not)A;Brand\";v=\"8\", \"Chromium\";v=\"138\", \"Google Chrome\";v=\"138\"",
            "sec-ch-ua-mobile": "?0",
            "sec-fetch-site": "same-origin",
            "sec-fetch-mode": "no-cors",
            "sec-fetch-dest": "image",
            "sec-fetch-storage-access": "none",
            "referer": window._referer2,
            "accept-language": "en",
            "priority": "i"
        },
        "headerOrder": [

        ],
        "requestUrl": `https://challenges.cloudflare.com${_img}`,
        "requestMethod": "GET",
        "requestBody": "",
        "requestCookies": []
    }

// call the library with the requestPayload as string
    const response = tlsClientLibrary.request(JSON.stringify(requestPayload));


// convert response string to json
    const responseObject = JSON.parse(response)

    print('responseObject', responseObject)

    let base64Data = responseObject.body.split('base64,');
    base64Data = base64Data[base64Data.length-1]
    let a = atob(base64Data);
    let d = a.split('').map(e=>e.charCodeAt(0));

    let d1 = d.slice(16,20);
    let d2 = d.slice(20,24);
    console.log(d1[3],d2[3])
    return {w:d1[3], h:d2[3], bs: d.length};
    tlsClientLibrary.freeMemory(responseObject.id)
    debugger;
    const payload = {
        sessionId: 'my-session-id',
        url: "https://microsoft.com",
    }

    const destroySessionPayload = {
        sessionId: 'my-session-id',
    }

    const destroySessionResponse = tlsClientLibrary.destroySession(JSON.stringify(destroySessionPayload))

    const destroySessionResponseParsed = JSON.parse(destroySessionResponse)

    console.log(destroySessionResponseParsed)



}

(function () {


    Object.defineProperties(Node.prototype, {
        nodeType: {

            get: newFunc('nodeType', 10, function nodeType() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).nodeType || 1;
                if (debug) print('Node.nodeType.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        nodeName: {

            get: newFunc('nodeName', 10, function nodeName() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).nodeName || 'IMG';
                if (debug) print('Node.nodeName.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        baseURI: {

            get: newFunc('baseURI', 10, function baseURI() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).baseURI || domUrl;
                if (debug) print('Node.baseURI.get', res)
                // debugger
                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        isConnected: {

            get: newFunc('isConnected', 10, function isConnected() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).isConnected || false;
                if (debug) print('Node.isConnected.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        ownerDocument: {

            get: newFunc('ownerDocument', 10, function ownerDocument() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).ownerDocument || document;
                if (debug) print('Node.ownerDocument.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        parentNode: {
            get: newFunc('parentNode', 10, function parentNode() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                // debugger;
                if (debug) print('Node.parentNode', this)
                let rt = mm.allNodes.get(this).parent();
                // $('body').append(rt)
                return createElementByName(rt)
            }, {get: true}), enumerable: true, configurable: true,
        },
        parentElement: {
            get: newFunc('parentElement', 10, function parentElement() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                if (debug) print('node.parentElement')
                let res = null;
                try{
                    if (mm.allNodes.has(this)){
                        let p = mm.allNodes.get(this).parent();
                        if (p.length !== 0){
                            res = createElementByName(p);
                        }
                    }
                }catch (e){
                }
                if (debug) print('node.parentElement.res', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,
        },
        childNodes: {
            get: newFunc('childNodes', 10, function childNodes() {
                // debugger;
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                if (!mm.memory.private_data.get(this)){
                    throw new TypeError("Illegal constructor");
                }
                if (!mm.memory.private_data.get(this).childNodes) {
                    if (mm.allNodes.has(this)){
                        let children = mm.allNodes.get(this);
                        let res = new NodeList(children.length);
                        let tmp = createElementByName(children);
                        if (children.length > 1){
                            for (let i = 0; i < tmp.length; i++) {
                                res[i] = tmp[i];
                            }
                        }else{
                            res[0] = tmp
                        }

                        mm.memory.private_data.get(this).childNodes = res;
                    }else{
                        throw TypeError('childNodes not supported');
                    }

                }
                let res = mm.memory.private_data.get(this).childNodes;
                ;
                print('Node.childNodes.get',this,  res)
                return res
            }, {get: true}), enumerable: true, configurable: true,
        },
        firstChild: {

            get: newFunc('firstChild', 10, function firstChild() {
                if (debug) print('Node.firstChild.get', this)
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                // debugger;
                let res = null;
                if (mm.allNodes.has(this)){
                    res = mm.allNodes.get(this).children().first();
                    if (res.length === 0 && mm.allNodes.get(this)[0].children.length !== 0){
                            if (mm.allNodes.get(this)[0].children[0].type === 'text'){
                                res = new Text(mm.allNodes.get(this)[0].children[0].data)
                            }
                    }else{
                        res = createElementByName(res)
                    }
                }
                if (debug) print('Node.firstChild.get.res', res)
                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        lastChild: {

            get: newFunc('lastChild', 10, function lastChild() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).lastChild || null;
                if (debug) print('Node.lastChild.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        previousSibling: {

            get: newFunc('previousSibling', 10, function previousSibling() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).previousSibling || null;
                if (debug) print('Node.previousSibling.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        nextSibling: {

            get: newFunc('nextSibling', 10, function nextSibling() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).nextSibling || null;

                if (debug) print('Node.nextSibling.get', res)
                // debugger;
                return res
            }, {get: true}), enumerable: true, configurable: true,

        },
        nodeValue: {

            get: newFunc('nodeValue', 10, function nodeValue() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).nodeValue || null;
                if (debug) print('Node.nodeValue.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('nodeValue', 1, function nodeValue(value) {
                if (debug) print('Node.nodeValue.set', value)
                mm.memory.private_data.get(this).nodeValue = value

            }, {set: true}), enumerable: true, configurable: true,


        },
        textContent: {

            get: newFunc('textContent', 10, function textContent() {
                if (!Node.prototype.isPrototypeOf(this)) {
                    throw new TypeError("Illegal constructor");
                }
                let res = mm.memory.private_data.get(this).textContent || '';
                if (debug) print('Node.textContent.get', res)

                return res
            }, {get: true}), enumerable: true, configurable: true,


            set: newFunc('textContent', 1, function textContent(value) {
                if (debug) print('Node.textContent.set', this,value)
                mm.memory.private_data.get(this).textContent = value
                mm.allNodes.get(this).text(value);

            }, {set: true}), enumerable: true, configurable: true,


        },
        ELEMENT_NODE: {

            value: 1, writable: false, enumerable: true, configurable: false,


        },
        ATTRIBUTE_NODE: {

            value: 2, writable: false, enumerable: true, configurable: false,


        },
        TEXT_NODE: {

            value: 3, writable: false, enumerable: true, configurable: false,


        },
        CDATA_SECTION_NODE: {

            value: 4, writable: false, enumerable: true, configurable: false,


        },
        ENTITY_REFERENCE_NODE: {

            value: 5, writable: false, enumerable: true, configurable: false,


        },
        ENTITY_NODE: {

            value: 6, writable: false, enumerable: true, configurable: false,


        },
        PROCESSING_INSTRUCTION_NODE: {

            value: 7, writable: false, enumerable: true, configurable: false,


        },
        COMMENT_NODE: {

            value: 8, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_NODE: {

            value: 9, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_TYPE_NODE: {

            value: 10, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_FRAGMENT_NODE: {

            value: 11, writable: false, enumerable: true, configurable: false,


        },
        NOTATION_NODE: {

            value: 12, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_DISCONNECTED: {

            value: 1, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_PRECEDING: {

            value: 2, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_FOLLOWING: {

            value: 4, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_CONTAINS: {

            value: 8, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_CONTAINED_BY: {

            value: 16, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {

            value: 32, writable: false, enumerable: true, configurable: false,


        },
        appendChild: {
            value: newFunc('appendChild', 1, function appendChild(child) {
                ;
                if (debug) print('Node.appendChild',this, child)
                // debugger;
                if (mm.memory.private_data.get(child) && mm.memory.private_data.get(child).onload) {
                    let loadFunc = mm.memory.private_data.get(child).onload
                    if (loadFunc !== undefined) {
                        print('load func call', child)
                        // 请求图片
                        // debugger;
                        if (child instanceof HTMLImageElement) {
                            // let startTime = performance.now();
                            // let requestStart = startTime +12+Math.random();
                            // let responseStart = requestStart +12+Math.random();
                            // let finalResponseHeadersStart = responseStart +12+Math.random();
                            // let responseEnd = finalResponseHeadersStart +12+Math.random();
                            // let dd = get_img(window._img)
                            // print('img_load.res', dd)
                            // let endTime = performance.now();
                            // let duration = endTime - startTime;
                            // mm.memory.private_data.get(child).width = dd.w;
                            // mm.memory.private_data.get(child).height = dd.h;
                            //
                            // mm.memory.private_data.get(performance).entries.push({
                            //     "name": `https://challenges.cloudflare.com${window._img}`,
                            //     "entryType": "resource",
                            //     "startTime": startTime,
                            //     "duration": duration,
                            //     "initiatorType": "img",
                            //     "deliveryType": "",
                            //     "nextHopProtocol": "h2",
                            //     "renderBlockingStatus": "non-blocking",
                            //     "workerStart": 0,
                            //     "redirectStart": 0,
                            //     "redirectEnd": 0,
                            //     "fetchStart": startTime,
                            //     "domainLookupStart": startTime,
                            //     "domainLookupEnd": startTime,
                            //     "connectStart": startTime,
                            //     "secureConnectionStart": startTime,
                            //     "connectEnd": startTime,
                            //     "requestStart": requestStart,
                            //     "responseStart": responseStart,
                            //     "firstInterimResponseStart": 0,
                            //     "finalResponseHeadersStart": finalResponseHeadersStart,
                            //     "responseEnd": responseEnd,
                            //     "transferSize": 8182,
                            //     "encodedBodySize": dd.bs,
                            //     "decodedBodySize": dd.bs,
                            //     "responseStatus": 200,
                            //     "serverTiming": [
                            //         {
                            //             "name": "chlray",
                            //             "duration": 0,
                            //             "description": "9532833a38fcd5ce"
                            //         }
                            //     ]
                            // })


                        }


                        loadFunc(new Event('load',{
                            target: child,
                            isTrusted: true,

                        }))
                    }
                }
                // if (this instanceof HTMLDocument ){
                //     if (mm.allNodes.has(child)){
                //         $('body').append(mm.allNodes.get(child))
                //     }else{
                //         throw TypeError("child 不存在")
                //     }
                // }else
                    if (mm.allNodes.has(this) && mm.allNodes.has(child)){
                    print('Node.appendChild.by$')
                    mm.allNodes.get(this).append(mm.allNodes.get(child))
                }else{
                    debugger;

                    throw TypeError("appendChild wait")

                }
                child.hasAppend = true;
                return child;
            }), enumerable: true, configurable: true,
        },

        cloneNode: {

            value: newFunc('cloneNode', 10, function cloneNode() {
                if (debug) print('Node.cloneNode.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        compareDocumentPosition: {

            value: newFunc('compareDocumentPosition', 10, function compareDocumentPosition() {
                if (debug) print('Node.compareDocumentPosition.call', arguments, 4)
                return 4;

            }), writable: true, enumerable: true, configurable: true,


        },
        contains: {

            value: newFunc('contains', 10, function contains(v) {
                let p1 = mm.allNodes.get(this);
                let p2 = mm.allNodes.get(v);
                // debugger;

                let res =  p1.find(p2).length > 0;
                if (p1 === p2 || this === v || p1[0]=== p2[0]){
                    res = true
                }
                if (debug) print('Node.contains.call.res',this,v, res)
                // debugger;
                return res;
                // return true

            }), writable: true, enumerable: true, configurable: true,


        },
        getRootNode: {

            value: newFunc('getRootNode', 10, function getRootNode() {
                if (debug) print('Node.getRootNode.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        hasChildNodes: {

            value: newFunc('hasChildNodes', 10, function hasChildNodes() {
                if (debug) print('Node.hasChildNodes.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        insertBefore: {
            value: newFunc('insertBefore', 2, function insertBefore(newChild, refChild) {
                if (debug) print('Node.insertBefore', newChild, refChild)
                // debugger;
                if (mm.allNodes.has(this) && mm.allNodes.has(newChild)){
                    mm.allNodes.get(this).append(mm.allNodes.get(newChild))
                }
                newChild.hasAppend = true
                let loadEvents = mm.memory.listeners.get('load') || mm.memory.private_data.get(newChild);
                if (loadEvents && loadEvents.listeners && loadEvents.listeners.get('load')) {
                    let listeners = loadEvents.listeners.get('load');
                    for (let i = 0; i < listeners.length; i++) {
                        let loadEvent = listeners[i];
                        if (loadEvent.target === newChild) {
                            loadEvent.listener.call(loadEvent.target, newChild)
                        }

                    }
                }
                // this.org.parent.children.splice(index, 0, newChild.org[0]);
                return newChild;
            }), enumerable: true, configurable: true,
        },

        isDefaultNamespace: {

            value: newFunc('isDefaultNamespace', 10, function isDefaultNamespace() {
                if (debug) print('Node.isDefaultNamespace.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        isEqualNode: {

            value: newFunc('isEqualNode', 10, function isEqualNode() {
                if (debug) print('Node.isEqualNode.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        isSameNode: {

            value: newFunc('isSameNode', 10, function isSameNode() {
                if (debug) print('Node.isSameNode.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        lookupNamespaceURI: {

            value: newFunc('lookupNamespaceURI', 10, function lookupNamespaceURI() {
                if (debug) print('Node.lookupNamespaceURI.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        lookupPrefix: {

            value: newFunc('lookupPrefix', 10, function lookupPrefix() {
                if (debug) print('Node.lookupPrefix.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        normalize: {

            value: newFunc('normalize', 10, function normalize() {
                if (debug) print('Node.normalize.call', arguments)

            }), writable: true, enumerable: true, configurable: true,


        },
        removeChild: {
            value: newFunc('removeChild', 1, function removeChild(child) {
                if (debug) print('Document.removeChild', child)
                mm.allNodes.get(this).remove(mm.allNodes.get(child));

                // if (mm.allNodes.get(this).find(mm.allNodes.get(child)).length === 0) {
                //     throw new Error(`Failed to execute 'removeChild' on 'Node': The node to be removed is not a child of this node.`)
                // }
                // debugger;
                if (debug) print('Document.removeChild.res', child)

                return child
            }), enumerable: true, configurable: true,
        },
        replaceChild: {

            value: newFunc('replaceChild', 10, function replaceChild(newChild, oldChild) {
                if (debug) print('Node.replaceChild.call',newChild, oldChild, arguments)
                // debugger;

                print('new', mm.allNodes.get(newChild).html())
                print('old', mm.allNodes.get(oldChild).html())
                mm.allNodes.get(oldChild).replaceWith(mm.allNodes.get(newChild))
                print('new after', mm.allNodes.get(newChild).html())
                print('old after', mm.allNodes.get(oldChild).html())
                // debugger;
                return oldChild

            }), writable: true, enumerable: true, configurable: true,


        },
        constructor: {

            value: newFunc('constructor', 10, function constructor() {
                if (debug) print('Node.constructor.call', arguments)

            }), writable: true, enumerable: false, configurable: true,


        },
    })

    Object.defineProperties(Node, {
        ELEMENT_NODE: {

            value: 1, writable: false, enumerable: true, configurable: false,


        },
        ATTRIBUTE_NODE: {

            value: 2, writable: false, enumerable: true, configurable: false,


        },
        TEXT_NODE: {

            value: 3, writable: false, enumerable: true, configurable: false,


        },
        CDATA_SECTION_NODE: {

            value: 4, writable: false, enumerable: true, configurable: false,


        },
        ENTITY_REFERENCE_NODE: {

            value: 5, writable: false, enumerable: true, configurable: false,


        },
        ENTITY_NODE: {

            value: 6, writable: false, enumerable: true, configurable: false,


        },
        PROCESSING_INSTRUCTION_NODE: {

            value: 7, writable: false, enumerable: true, configurable: false,


        },
        COMMENT_NODE: {

            value: 8, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_NODE: {

            value: 9, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_TYPE_NODE: {

            value: 10, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_FRAGMENT_NODE: {

            value: 11, writable: false, enumerable: true, configurable: false,


        },
        NOTATION_NODE: {

            value: 12, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_DISCONNECTED: {

            value: 1, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_PRECEDING: {

            value: 2, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_FOLLOWING: {

            value: 4, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_CONTAINS: {

            value: 8, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_CONTAINED_BY: {

            value: 16, writable: false, enumerable: true, configurable: false,


        },
        DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: {

            value: 32, writable: false, enumerable: true, configurable: false,


        },
    })


}())

Object.setPrototypeOf(Node.prototype, EventTarget.prototype)
Object.setPrototypeOf(Node, EventTarget)
