function MilitaryResource(type, health, distance) {
	this.type = type;
	this.health = maxHealth = health;
	this.maxHealth = maxHealth;
	this.distance = maxDistance = distance;
	this.maxDistance = maxDistance;
}


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


var mag = new MilitaryResource('magician', 200,300);  // создаем нового юнита


MilitaryResource.prototype.isReadytoMove = function () {
	return this.distance <= this.maxDistance;
}
console.log(mag.isReadytoMove());
MilitaryResource.prototype.isReadyToFight = function () {
	return this.health > 0;
}
console.log(mag.isReadyToFight());
MilitaryResource.prototype.restore = function () {
	return this.health = this.maxHealth,
	this.distance = this.maxDistance;
}

mag.health = 20;  // занижаем hp
mag.distance = 12; // занижаем distance
console.log(mag);

mag.restore();  // восстанавливаем hp и distance
console.log(mag);


MilitaryResource.prototype.clone = function () {
	return new MilitaryResource(this.type, this.health, this.maxHealth, this.distance, this.maxDistance);
}

var mg = mag.clone();  //клонируем юнит в новую переменную
console.log(mg);


var party = new Squad();

// Squad.prototype.isReadyToMove = function () {
//   return this.distance > 0;
// }

// Squad.prototype.isReadyToFight = function () {
//   return this.health > 0;
// }
console.log(party);
