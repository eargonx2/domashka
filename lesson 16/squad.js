var Squad = (function () {
    function Squad(defaultResources) {
        this.squad = [];
        if (defaultResources) this.combineResources(defaultResources);
    }


    Squad.prototype.isReadyToMove = function (defaultResources) {
        return this.squad.some((obj) => (obj.health > 0 && obj.distance > 0));
    }

    Squad.prototype.isReadyToFight = function (defaultResources) {
        return this.squad.some((obj) => (obj.health > 0));
    }

    Squad.prototype.restore = function (defaultResources) {
        squad.MilitaryResource = new MilitaryResource(this.type, this.health, this.maxHealth, this.distance, this.maxDistance);
    }

    Squad.prototype.getReadyToMoveResources = function (defaultResources) {
        return this.squad.some((obj) => (obj.health > 0 && obj.distance > 0));
    }
    Squad.prototype.combineResources = function (defaultResources) {
        this.squad = defaultResources;
    }
    return Squad;
}());

var squad = new Squad([mag, mag2]);
console.log(squad.squad);
console.log(squad.isReadytoMove);
console.log(squad.restore);


