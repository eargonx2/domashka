var MilitaryResource = (function () {
function MilitaryResource(type, health, distance) {
   this.type = type;
   this.health = maxHealth = health;
   this.maxHealth = maxHealth;
   this.distance = maxDistance = distance;
   this.maxDistance = maxDistance;
}



MilitaryResource.prototype.isReadytoMove = function () {
	return this.distance <= this.maxDistance;
}
MilitaryResource.prototype.isReadyToFight = function () {
	return this.health > 0;
}
MilitaryResource.prototype.restore = function () {
	return this.health = this.maxHealth,
	this.distance = this.maxDistance;
}
MilitaryResource.prototype.clone = function () {
	return new MilitaryResource(this.type, this.health, this.maxHealth, this.distance, this.maxDistance);
}
return MilitaryResource;
}());

var mag = new MilitaryResource('magician', 200,300);  // создаем нового юнита

console.log(mag);
console.log(mag.isReadytoMove());
console.log(mag.isReadyToFight());
console.log(mag.restore());
mag2 = mag.clone();
console.log(mag2);