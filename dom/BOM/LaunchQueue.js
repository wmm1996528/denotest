;LaunchQueue = newFunc('LaunchQueue', 1, function () {
    print('LaunchQueue.call');
    mm.memory.private_data.set(this, {})
})


Object.defineProperties(LaunchQueue.prototype, {
    setConsumer: {

        value: newFunc('setConsumer', 10, function () {
            if (debug) print('LaunchQueue.setConsumer.call', arguments)

        }), writable: true, enumerable: true, configurable: true,


    },
    constructor: {

        value: newFunc('constructor', 10, function () {
            if (debug) print('LaunchQueue.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
});
launchQueue = new LaunchQueue();