PerformancePaintTiming = newFunc('PerformancePaintTiming', 1, function (){print('PerformancePaintTiming.call');mm.memory.private_data.set(this, {})});



; delete PerformancePaintTiming.prototype.constructor;
;
Object.defineProperties(PerformancePaintTiming.prototype, {
'constructor': {

            value: newFunc('constructor', 10, function () {

                      if (!PerformancePaintTiming.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
                    if (debug)print('PerformancePaintTiming.constructor.call', arguments)

            }), writable:true, enumerable:false, configurable:true,



        },
})

    // mm.rename(PerformancePaintTiming.prototype, "PerformancePaintTiming");
    // mm.safeDescriptor_addConstructor(PerformancePaintTiming);
    // mm.z_sanbox.safe_Objattribute(PerformancePaintTiming, $safe_get_attribute, $safe_set_attribute, $safe_func_attribute);

    Object.setPrototypeOf(PerformancePaintTiming.prototype, PerformanceEntry.prototype);
    Object.setPrototypeOf(PerformancePaintTiming, PerformanceEntry);
