var Squad = (function() {
	function Squad(defaultResources) {
	this.squad = [];
	if (defaultResources) this.combineResources(defaultResources);
}
Squad.prototype.combineResources = function (defaultResources) {
	 this.squad = defaultResources;
	}

Squad.prototype.isReadyToMove = function (defaultResources) {
	 return this.squad.some((obj)=>(obj.health > 0 && obj.distance > 0));
	}

Squad.prototype.isReadyToFight = function (defaultResources) {
	 return this.squad.some((obj)=>(obj.health > 0));
	}

Squad.prototype.restore = function (defaultResources) {
	 return this.squad.forEach((obj)=>(obj.health = this.maxHealth && obj.distance = this.maxDistance));
	}
	return Squad;
}());

Squad.prototype.isReadyToMove;
Squad.prototype.isReadyToFight;
Squad.prototype.restore;
Squad.prototype.getReadyToMoveResources;
Squad.prototype.combineResources;
Squad.prototype.cloneResource;


var squad = new Squad([mag, mag2]);
console.log(squad.squad);
console.log(Squad.prototype.restore());

// Squad.prototype.isReadyToMove = function () {
//   return this.distance > 0;
// }

// Squad.prototype.isReadyToFight = function () {
//   return this.health > 0;
// }