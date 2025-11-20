Image = newFunc('Image', 10, function Image() {
    mm.memory.private_data.set(this, {})
    //HTMLElement.call(this)
})
;(function () {
    Image.prototype = HTMLImageElement.prototype;
})();
