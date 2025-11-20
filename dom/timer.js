;(function() {
  let timerFuncs = {
    setInterval: function (fn) {
      fn()
    },
    setTimeout: function (fn, t) {
      // print('setTimeout', fn, fn.toString())
      if (t === 2000)return
      fn()
    },
    setImmediate: function (fn) {
      fn()
    },
    clearInterval: function (fn) {
      // fn
    },
    clearTimeout: function (fn) {
      // fn()
    },
  };
  let timer = {
    setTimeout: newFunc("setTimeout", 5, function setTimeout(callback, t, ...arg) {
      // debugger
      if (t === 10000) {
        t = 100;
      }
      if (t === 5000) {
        return 999;
      }
      if (t === 100) {
        // return 1111
      }
      const timer_obj = timerFuncs.setTimeout(callback, t, ...arg);
      const timer_id = Object.keys(mm.memory.timer_map).length + 1;
      mm.memory.timer_map[timer_id] = timer_obj;
      print("setTimeout", t, ...arg, timer_id);

      return timer_id;
    }),
    setInterval: newFunc("setInterval", 5, function setInterval(callback, ...arg) {
      // debugger
      const timer_obj = timerFuncs.setInterval(callback, ...arg);
      const timer_id = Object.keys(mm.memory.timer_map).length + 1;
      mm.memory.timer_map[timer_id] = timer_obj;
      return timer_id;
    }),
    clearTimeout: newFunc("clearTimeout", 5, function clearTimeout(timer_id) {
      const timer_obj = mm.memory.timer_map[timer_id];
      return timerFuncs.clearTimeout(timer_obj);
    }),
    clearInterval: newFunc("clearInterval", 5, function clearInterval(timer_id) {
      const timer_obj = mm.memory.timer_map[timer_id];
      return timerFuncs.clearInterval(timer_obj);
    })
  };
  for (const key in timer) {
    if (Object.hasOwnProperty.call(timer, key)) {
      const timer_obj = timer[key];

      // mm.safefunction(timer_obj);

      Object.defineProperty(this, timer_obj.name, {
        value: timer_obj,
        configurable: true,
        enumerable: true,
        writable: true
      });
    }
  }
  ;

})();