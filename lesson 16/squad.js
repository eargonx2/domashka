var Squad = (function () {
  function Squad(defaultResources) {
    this.squad = [];
    if (defaultResources) this.combineResources(defaultResources);
  }


  Squad.prototype.isReadyToMove = function () {
    return this.squad.some((obj) => (obj.health > 0 && obj.distance > 0));
  }

  Squad.prototype.isReadyToFight = function () {
    return this.squad.some((obj) => (obj.health > 0));
  }

  Squad.prototype.restore = function () {
    this.squad.forEach(element => {
      element.health = maxHealth;
      element.distance = maxDistance;
    });
  }

  Squad.prototype.getReadyToMoveResources = function () {
    return this.squad.some((obj) => (obj.health > 0 && obj.distance > 0));
  }
  Squad.prototype.combineResources = function (defaultResources) {
    this.squad = defaultResources;
  }
  Squad.prototype.cloneResources = function() {
    return new Squad(this.squad);
  }
  return Squad;
}());

