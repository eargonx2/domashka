var Yeti = (function () {
    function Yeti(level) {
        Unit.call(this, 350, 400, level);
    }

    Yeti.prototype = Object.create(Unit.prototype);
    Yeti.prototype.constructor = Yeti;


    return Yeti;
}());