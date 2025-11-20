HTMLCollection = newFunc('HTMLCollection', 1, function HTMLCollection(length) {
    this._length = length;
    this.idx = 0;
    mm.memory.private_data.set(this, {
        length
    })
})

HTMLCollectionBase = newFunc('HTMLCollectionBase', 1, function HTMLCollectionBase(length) {
    this._length = length;
})
Object.defineProperties(HTMLCollection.prototype, {
    length: {
        get: newFunc('length', 10, function length() {
            let res = mm.memory.private_data.get(this).length
            print('HTMLCollection.length.get', res);
            return res
        }, {get: true}),
    },
    item: {
        value: newFunc('item', 1, function item(index) {
            return this[index]
        }),
    },
    namedItem: {
        value: newFunc('namedItem', 1, function namedItem(name) {
            // todo
            return this[index]
        })
    },

    [Symbol.iterator]: {

        value: function () {
            let index = 0;
            let _self = this;
            return {
                next: function () {
                    if (index >= _self._length) {
                        return {value: undefined, done: true}
                    } else {
                        const result = {value: _self[index], done: false}
                        index++
                        return result
                    }
                }
            }
        }
    },
    'constructor': {

        value: newFunc('constructor', 10, function () {

            if (!HTMLCollection.prototype.isPrototypeOf(this)) {
                throw new TypeError("Illegal constructor");
            }
            ;
            if (debug) print('HTMLCollection.constructor.call', arguments)

        }), writable: true, enumerable: false, configurable: true,


    },
        forEach: {
        value: Array.prototype.forEach
    },

})

// HTMLCollection = new Proxy(HTMLCollection, {
//   get(target, p, receiver) {
//       print('HTMLCollection', p, typeof p, isNaN(p))
//       debugger;
//       if (!isNaN(p)){
//           return this._items[p]
//       }else {
//           return Reflect.get(target,p, receiver)
//       }
//   }
// })

// Object.setPrototypeOf(HTMLCollection.prototype, HTMLCollectionBase.prototype);
// Object.setPrototypeOf(HTMLCollection, HTMLCollectionBase);
