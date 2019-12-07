var WildDog = (function () {
    function WildDog(level) {
        Unit.call(this, 100, 300, level);
    }

    WildDog.prototype = Object.create(Unit.prototype);
    WildDog.prototype.constructor = WildDog;


    return WildDog;
}());