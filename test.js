const __active_timers__ = new Set();
const __timer_callbacks__ = new Map();
__getDeno = function (){
    return Deno;
}
// Function to clear ALL timers (for process.exit() behavior)
globalThis.__neverjscore_clear_all_timers__ = function() {
    log('[EARLY EXIT] Clearing all active timers');
    for (const id of __active_timers__) {
        __getDeno().core.ops.op_clear_timer(id);
    }
    __active_timers__.clear();
    __timer_callbacks__.clear();
};
function log(...args) {
    // if (false) {
        console.log('[never-jscore]', ...args);
    // }
}
if (typeof setTimeout === 'undefined') {
    globalThis.setTimeout = function(callback, delay = 0, ...args) {
        const timerId = __getDeno().core.ops.op_get_timer_id();
        log(`setTimeout called: id=${timerId}, delay=${delay}ms`);

        // Track active timer
        __active_timers__.add(timerId);
        __timer_callbacks__.set(timerId, callback);
        log(`setTimeout called: id=${timerId}, delay=${delay}ms`);

        // Call async Rust op - returns a Promise that resolves after delay
        __getDeno().core.ops.op_set_timeout_real(timerId, Math.max(0, delay)).then(shouldExecute => {
            log(`setTimeout called: id=${timerId}, shouldExecute=${shouldExecute}`);
            // Check if system has exited
            if (globalThis.__neverjscore_exited__) {
                __active_timers__.delete(timerId);
                __timer_callbacks__.delete(timerId);
                return;
            }

            if (shouldExecute && __active_timers__.has(timerId)) {
                log(`Timer executing: id=${timerId}`);
                __active_timers__.delete(timerId);
                __timer_callbacks__.delete(timerId);

                try {
                    callback(...args);
                } catch (e) {
                    // Re-throw EarlyReturnSignal to let event loop catch it
                    if (e && e.__neverjscore_early_return__ === true) {
                        log(`Timer callback triggered early return: id=${timerId}, re-throwing`);
                        throw e;  // Re-throw to propagate to event loop
                    }
                    console.error(`Error in setTimeout callback (id=${timerId}):`, e);
                }
            }
        });

        return timerId;
    };

    globalThis.setInterval = function(callback, delay = 0, ...args) {
        const timerId = __getDeno().core.ops.op_get_timer_id();
        log(`setInterval called: id=${timerId}, delay=${delay}ms`);

        // Track active timer
        __active_timers__.add(timerId);
        __timer_callbacks__.set(timerId, callback);

        // Recursive function to implement interval behavior
        function scheduleNext() {
            // Check if timer was cleared or system exited
            if (!__active_timers__.has(timerId) || globalThis.__neverjscore_exited__) {
                __active_timers__.delete(timerId);
                __timer_callbacks__.delete(timerId);
                return;
            }

            __getDeno().core.ops.op_set_interval_real(timerId, Math.max(0, delay)).then(shouldExecute => {
                // Check again after waiting
                if (!__active_timers__.has(timerId) || globalThis.__neverjscore_exited__) {
                    __active_timers__.delete(timerId);
                    __timer_callbacks__.delete(timerId);
                    return;
                }

                if (shouldExecute) {
                    log(`Timer executing: id=${timerId}`);
                    try {
                        callback(...args);
                    } catch (e) {
                        // Re-throw EarlyReturnSignal to let event loop catch it
                        if (e && e.__neverjscore_early_return__ === true) {
                            log(`Timer callback triggered early return: id=${timerId}, re-throwing`);
                            __active_timers__.delete(timerId);
                            __timer_callbacks__.delete(timerId);
                            throw e;  // Re-throw to propagate to event loop
                        }
                        console.error(`Error in setInterval callback (id=${timerId}):`, e);
                    }

                    // Re-schedule for next interval
                    scheduleNext();
                }
            });
        }

        // Start the interval
        scheduleNext();

        return timerId;
    };

    globalThis.clearTimeout = function(id) {
        log(`clearTimeout called: id=${id}`);
        if (id !== undefined && id !== null) {
            __active_timers__.delete(id);
            __timer_callbacks__.delete(id);
            __getDeno().core.ops.op_clear_timer(id);
        }
    };

    globalThis.clearInterval = function(id) {
        log(`clearInterval called: id=${id}`);
        if (id !== undefined && id !== null) {
            __active_timers__.delete(id);
            __timer_callbacks__.delete(id);
            __getDeno().core.ops.op_clear_timer(id);
        }
    };

    log('Real async timers loaded: setTimeout, setInterval (Rust-backed)');
}
setTimeout(function () {
    console.log('13333\n')

},1000);

