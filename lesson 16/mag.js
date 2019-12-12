var MilitaryResource = (function () {
  function MilitaryResource(type, health, distance) {
    this.type = type;
    this.health = maxHealth = health;
    this.maxHealth = maxHealth;
    this.distance = maxDistance = distance;
    this.maxDistance = maxDistance;
  }S



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

