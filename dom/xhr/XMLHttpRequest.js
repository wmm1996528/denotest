ProgressEvent = newFunc("ProgressEvent", 1, function() {
  print("ProgressEvent.call");
  mm.memory.private_data.set(this, {});
});


;delete ProgressEvent.prototype.constructor;
;
Object.defineProperties(ProgressEvent.prototype, {
  [Symbol.toStringTag]: {
    value: "ProgressEvent"
  },

  "lengthComputable": {

    get: newFunc("lengthComputable", 10, function() {


      if (!ProgressEvent.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal constructor");
      }
      ;

      let res = mm.memory.private_data.get(this)["lengthComputable"];
      if (debug) print("ProgressEvent.lengthComputable.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  "loaded": {

    get: newFunc("loaded", 10, function() {


      if (!ProgressEvent.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal constructor");
      }
      ;

      let res = mm.memory.private_data.get(this)["loaded"];
      if (debug) print("ProgressEvent.loaded.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  "total": {

    get: newFunc("total", 10, function() {


      if (!ProgressEvent.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal constructor");
      }
      ;

      let res = mm.memory.private_data.get(this)["total"];
      if (debug) print("ProgressEvent.total.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  "constructor": {

    value: newFunc("constructor", 10, function() {

      if (!ProgressEvent.prototype.isPrototypeOf(this)) {
        throw new TypeError("Illegal constructor");
      }
      ;
      if (debug) print("ProgressEvent.constructor.call", arguments);

    }), writable: true, enumerable: false, configurable: true


  }
});

XMLHttpRequest = newFunc("XMLHttpRequest", 1, function XMLHttpRequest() {
  mm.memory.private_data.set(this, {
    responseText: "",
    onabort: null,
    headers: {}

  });
  print("new XMLHttpRequest");

});

function native_open(method, url, async) {
  // value: (method, url, async) =>{
  if (debug) print("XMLHttpRequest.open.call", method, url, async);
  debugger;
  mm.memory.private_data.get(this).method = method;
  mm.memory.private_data.get(this).url = url;
  mm.memory.private_data.get(this).async = async;
}

function native_setRequestHeader(key, value) {
  // if (debug)
  print("XMLHttpRequest.setRequestHeader.call", key, value.length, value);
  headers[key.toLowerCase()] = value;
  if (key.toLowerCase() === "x-kpsdk-dt") debugger
  mm.memory.private_data.get(this).headers[key.toLowerCase()] = value;

}

Utils.registerNative("open", "open");
Utils.registerNative("setRequestHeader", "setRequestHeader")
;(function() {


  ;
  Object.defineProperties(XMLHttpRequest.prototype,

    {
      onreadystatechange: {

        get: newFunc("onreadystatechange", 10, function onreadystatechange() {
          if (debug) print("XMLHttpRequest.onreadystatechange.get");
          return mm.memory.private_data.get(this).onreadystatechange;
        }, { get: true }), enumerable: true, configurable: true,


        set: newFunc("onreadystatechange", 1, function onreadystatechange(value) {
          if (debug) print("XMLHttpRequest.onreadystatechange.set", value);
          mm.memory.private_data.get(this).onreadystatechange = value;

        }, { set: true }), enumerable: true, configurable: true


      },
      readyState: {

        get: newFunc("readyState", 10, function readyState() {
          let res = mm.memory.private_data.get(this).readyState;
          if (debug) print("XMLHttpRequest.readyState.get", res);
          return res;
        }, { get: true }), enumerable: true, configurable: true

      },
      timeout: {

        get: newFunc("timeout", 10, function timeout() {
          let res = mm.memory.private_data.get(this).timeout;
          if (debug) print("XMLHttpRequest.timeout.get", res);
          return res;
        }, { get: true }), enumerable: true, configurable: true,


        set: newFunc("timeout", 1, function timeout(value) {
          if (debug) print("XMLHttpRequest.timeout.set", value);
          mm.memory.private_data.get(this).timeout = value;

        }, { set: true }), enumerable: true, configurable: true


      },
      withCredentials: {

        get: newFunc("withCredentials", 10, function withCredentials() {
          if (debug) print("XMLHttpRequest.withCredentials.get");
          return mm.memory.private_data.get(this).withCredentials;
        }, { get: true }), enumerable: true, configurable: true,


        set: newFunc("withCredentials", 1, function withCredentials(value) {
          if (debug) print("XMLHttpRequest.withCredentials.set", value);
          mm.memory.private_data.get(this).withCredentials = value;

        }, { set: true })


      },
      upload: {

        get: newFunc("upload", 0, function upload() {
          if (debug) print("XMLHttpRequest.upload.get");
          let res = mm.memory.private_data.get(this).upload;
          if (res === undefined) {
            mm.memory.private_data.get(this).upload = new XMLHttpRequestUpload();
            res = mm.memory.private_data.get(this).upload;
          }
          return res;
        }, { get: true }), enumerable: true, configurable: true

      },
      responseURL: {

        get: newFunc("responseURL", 10, function responseURL() {
          if (debug) print("XMLHttpRequest.responseURL.get");
          return mm.memory.private_data.get(this).url;
        }, { get: true }), enumerable: true, configurable: true

      },
      status: {

        get: newFunc("status", 10, function status() {
          let res = mm.memory.private_data.get(this).status || 0;
          if (debug) print("XMLHttpRequest.status.get", res);
          // debugger
          return res;

        }, { get: true }), enumerable: true, configurable: true

      },
      statusText: {

        get: newFunc("statusText", 10, function statusText() {
          if (debug) print("XMLHttpRequest.statusText.get");
          return mm.memory.private_data.get(this).statusText;
        }, { get: true }), enumerable: true, configurable: true

      },
      responseType: {

        get: newFunc("responseType", 10, function responseType() {
          if (debug) print("XMLHttpRequest.responseType.get");
          return mm.memory.private_data.get(this).responseType;
        }, { get: true }), enumerable: true, configurable: true,


        set: newFunc("responseType", 1, function responseType(value) {
          if (debug) print("XMLHttpRequest.responseType.set", value);
          mm.memory.private_data.get(this).responseType = value;

        }, { set: true }), enumerable: true, configurable: true


      },
      response: {

        get: newFunc("response", 10, function response() {
          let res = mm.memory.private_data.get(this).response;
          if (debug) print("XMLHttpRequest.response.get", res);
          return res;
        }, { get: true }), enumerable: true, configurable: true

      },
      responseText: {

        get: newFunc("responseText", 10, function responseText() {
          let res = mm.memory.private_data.get(this).responseText;
          if (debug) print("XMLHttpRequest.responseText.get", res);
          print(document.cookie);
          // debugger;
          return res;
        }, { get: true }), enumerable: true, configurable: true

      },
      UNSENT: { value: 0 },
      OPENED: { value: 1 },
      HEADERS_RECEIVED: { value: 2 },
      LOADING: { value: 3 },
      DONE: { value: 4 },

      abort: {

        value: newFunc("abort", 10, function abort() {
          if (debug) print("XMLHttpRequest.abort.call", arguments);

        }), writable: true, enumerable: true, configurable: true


      },
      getAllResponseHeaders: {

        value: newFunc("getAllResponseHeaders", 10, function getAllResponseHeaders() {
          if (debug) print("XMLHttpRequest.getAllResponseHeaders.call", arguments);

        }), writable: true, enumerable: true, configurable: true


      },
      getResponseHeader: {

        value: newFunc("getResponseHeader", 10, function getResponseHeader() {
          if (debug) print("XMLHttpRequest.getResponseHeader.call", arguments);

        }), writable: true, enumerable: true, configurable: true


      },
      open: {

        // value: window['open']
        value: newFunc("open", 10, function native_open(method, url, async) {
          // value: (method, url, async) =>{
          // if (debug)
          print("XMLHttpRequest.open.call", method, url, async);
          debugger;
          mm.memory.private_data.get(this).method = method;
          mm.memory.private_data.get(this).url = url;
          mm.memory.private_data.get(this).async = async;
        })
        , writable: true, enumerable: true, configurable: true


      },
      overrideMimeType: {

        value: newFunc("overrideMimeType", 10, function overrideMimeType() {
          if (debug) print("XMLHttpRequest.overrideMimeType.call", arguments);

        }), writable: true, enumerable: true, configurable: true


      },
      send: {

        value: newFunc("send", 1, function send(body) {
          // value: () =>{

          // if (debug)
          print("XMLHttpRequest.send.call", body);
          debugger;
          // this.onload && this.onload();
          // this.onloadend && this.onloadend();
          let _this = mm.memory.private_data.get(this);
          if (_this.url.endsWith("o/error") || _this.url.endsWith("/r")) {
            return;
          }
          Object.assign(_this.headers, {
            "accept-language": "en,en-US;q=0.9,zh-CN;q=0.8,zh;q=0.7,ru;q=0.6",
            "cache-control": "no-cache",
            "origin": "https://www.wizzair.com",
            "pragma": "no-cache",
            "sec-ch-ua": "\"Not_A Brand\";v=\"8\", \"Chromium\";v=\"120\", \"Google Chrome\";v=\"120\"",
            "sec-ch-ua-mobile": "?0",
            "sec-ch-ua-platform": "\"macOS\"",
            "sec-fetch-dest": "empty",
            "sec-fetch-mode": "cors",
            "sec-fetch-site": "cross-site",
            "user-agent": navigator.userAgent
          });
          if (!_this.url.startsWith("http")) {
            // _this.url = 'https://www.vueling.com/.well-known/' + _this.url
            // _this.url = 'https://mcprod.arcteryx.com' + _this.url
          }
          // _this.async = false;
          print("new fetch", this.async, _this.url, _this.headers
            // , body
            // , body
            // // body && btoa(String.fromCharCode(...body))

          );
          let res = JSON.stringify({
            headers: _this.headers,
            body: body,
            // body: body,
            url: _this.url,
            "cookie": document.cookie
          });
          print('res', res);
          __getDeno().core.ops.op_store_result(res);
          ReturnValue(res);
          if (_this.url.endsWith("/tl") || _this.url.includes("sbsd") || _this.url.includes("challenge-platform")
          ) {
            let body2 = body instanceof Uint8Array ? btoa(String.fromCharCode(...body)) : body;
            print("has /tl");
            WriteToFile("/tmp/body.txt", JSON.stringify({
              headers: _this.headers,
              body: body2,
              // body: body,
              url: _this.url,
              "cookie": document.cookie
            }));
            print("exit 0");
            deleteTimerEventLoop();
            Exit();
            return;
          }
          if (_this.url.endsWith("ooking/shopping") || _this.url.endsWith("rch-api/v1")) {
            return;
          }
          if (!_this.async) {
            // let res = syncRequest("POST", 'http://127.0.0.1:58000/tls/forward', {
            let res = syncRequest("POST", "http://52.52.23.116/tls/forward", {
                "content-type": "application/json"
              }, undefined, JSON.stringify({
                url: _this.url,
                method: _this.method,
                // proxy: 'http://127.0.0.1:8890',
                debug: true,
                random_tls: true,
                headers: _this.headers,
                body: body
              })
            );

            // xhr_res = JSON.parse(res.body)['text'];
            const e = new ProgressEvent();
            _this.status = res.status;
            // debugger;
            _this.statusText = res.statusText;
            _this.readyState = 4;
            _this.responseText = JSON.parse(res.body)["text"];
            _this.onload?.(e);
            _this.onreadystatechange?.(e);
            _this.loadend?.(e);
          } else {
            const options = {
              method: _this.method,
              headers: _this.headers,
              body: body
              // agent: new proxyAgent.ProxyAgent('http://127.0.0.1:8890'),

              // signal: controller.signal,
            };

            if (this.withCredentials) {
              options.credentials = "include";
            }

            // dummy ProgressEvent
            // const e = new ProgressEvent();
            // this._events['loadstart']?.(e);

            // let timeoutId: number;
            // if (this.timeout > 0) {
            //   timeoutId = setTimeout(() => controller.abort(), this.timeout);
            // }
            const e = new ProgressEvent();
            debugger;

            realFetch(_this.url, options).then(async (response) => {
              // clearTimeout(timeoutId);

              // fill response headers
              this.allHeaders = "";
              _this.headers = response.headers;

              _this.status = response.status;
              _this.statusText = response.statusText;
              _this.readyState = 4;
              _this.responseText = await response.text();
              print("fech res", _this.url, _this.responseText);
              // debugger
              // trigger events
              _this.onload?.(e);
              _this.onreadystatechange?.(e);
              _this.loadend?.(e);

            }).catch((reason) => {
              // clearTimeout(timeoutId);
              console.error(reason.message);

              if (reason.code && (reason.code == 20 || reason.code == 23)) {
                reason.type = "timeout";
              }

              _this.onerror?.(reason);
            });
          }
          // (async ()=>{
          //
          // })
        }), writable:
          true, enumerable:
          true, configurable:
          true


      },
      setRequestHeader: {

        value: newFunc("setRequestHeader", 10, function native_setRequestHeader(key, value) {
          // if (debug)
          print("XMLHttpRequest.setRequestHeader.call", key, value.length, value, JSON.stringify({1:2}));
          // headers[key.toLowerCase()] = value;
          // if (key.toLowerCase() === "x-kpsdk-dt") debugger
          // mm.memory.private_data.get(this).headers[key.toLowerCase()] = value;

        }), writable:
          true, enumerable:
          true, configurable:
          true


      }
      ,
      constructor: {

        value: newFunc("constructor", 10, function constructor() {
          if (debug) print("XMLHttpRequest.constructor.call", arguments);

        }), writable:
          true, enumerable:
          false, configurable:
          true


      }
      ,
      responseXML: {

        get: newFunc("responseXML", 10, function responseXML() {
          if (debug) print("XMLHttpRequest.responseXML.get");
          return mm.memory.private_data.get(this).responseXML;
        }, { get: true }), enumerable: true, configurable: true

      },
      setAttributionReporting: {

        value: newFunc("setAttributionReporting", 10, function setAttributionReporting() {
          if (debug) print("XMLHttpRequest.setAttributionReporting.call", arguments);

        }), writable:
          true, enumerable:
          true, configurable:
          true


      }
      ,
      setPrivateToken: {

        value: newFunc("setPrivateToken", 10, function setPrivateToken() {
          if (debug) print("XMLHttpRequest.setPrivateToken.call", arguments);

        }), writable:
          true, enumerable:
          true, configurable:
          true


      }

    }
  );

// mm.rename(XMLHttpRequest.prototype, "XMLHttpRequest");
// mm.safeDescriptor_addConstructor(XMLHttpRequest);
// mm.safe_Objattribute(XMLHttpRequest, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);


})
();
Object.setPrototypeOf(XMLHttpRequest.prototype, XMLHttpRequestEventTarget.prototype);
Object.setPrototypeOf(XMLHttpRequest, XMLHttpRequestEventTarget);
// XMLHttpRequest.__proto__ = XMLHttpRequestEventTarget.prototype
// if (proxy)XMLHttpRequest = mm.proxy(XMLHttpRequest,'XMLHttpRequest')


TextUpdateEvent = newFunc("TextUpdateEvent", 1, function TextUpdateEvent() {
  mm.memory.private_data.set(this, {});
});


Object.defineProperties(TextUpdateEvent.prototype, {
  updateRangeStart: {

    get: newFunc("updateRangeStart", 10, function updateRangeStart() {
      let res = mm.memory.private_data.get(this).updateRangeStart;
      if (debug) print("TextUpdateEvent.updateRangeStart.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  updateRangeEnd: {

    get: newFunc("updateRangeEnd", 10, function updateRangeEnd() {
      let res = mm.memory.private_data.get(this).updateRangeEnd;
      if (debug) print("TextUpdateEvent.updateRangeEnd.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  text: {

    get: newFunc("text", 10, function text() {
      let res = mm.memory.private_data.get(this).text;
      if (debug) print("TextUpdateEvent.text.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  selectionStart: {

    get: newFunc("selectionStart", 10, function selectionStart() {
      let res = mm.memory.private_data.get(this).selectionStart;
      if (debug) print("TextUpdateEvent.selectionStart.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  selectionEnd: {

    get: newFunc("selectionEnd", 10, function selectionEnd() {
      let res = mm.memory.private_data.get(this).selectionEnd;
      if (debug) print("TextUpdateEvent.selectionEnd.get", res);

      return res;
    }, { get: true }), enumerable: true, configurable: true

  },
  constructor: {

    value: newFunc("constructor", 10, function constructor() {
      if (debug) print("TextUpdateEvent.constructor.call", arguments);

    }), writable: true, enumerable: false, configurable: true


  }
});
