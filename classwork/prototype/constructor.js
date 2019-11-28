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