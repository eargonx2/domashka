function MilitaryResource(type, maxHealth, maxDistance) {
this.type = type;
this.maxHealth = this.health = maxHealth;
this.maxDistance = this.distance = maxDistance;
}

MilitaryResource.prototype.isReadytoMove = function () {
return this.distance >0;
}

var resource = new MilitaryResource('warrior', 200, 500);
console.log(resource, resource.isReadytoMove());


MilitaryResource.prototype.isReadyToMove;
MilitaryResource.prototype.isReadyToFight;
MilitaryResource.prototype.restore;
MilitaryResource.prototype.clone;


function Squad(defaultResources) {
   this.squad = [];
   if (defaultResources) this.combineResources(defaultResources);
}

Squad.prototype.isReadyToMove;
Squad.prototype.isReadyToFight;
Squad.prototype.restore;
Squad.prototype.getReadyToMoveResources;
Squad.prototype.combineResources;
Squad.prototype.cloneResource;


var mag = new MilitaryResource('magician', 300, 700);
console.log(mag, mag.isReadytoMove());

MilitaryResource.prototype.isReadyToFight = function () {
return this.health > 0;
}

console.log(mag.isReadyToFight());

var party = new Squad();
console.log(party);
