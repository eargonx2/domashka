class MilitaryResource {
    constructor(type, health, maxHealth, distance, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.distance = distance;
        this.maxDistance = maxDistance;
    }
    isReadytoMove() {
        return this.maxDistance > this.distance;

    }
    isReadyToFight() {
        return this.health > 0;
    }
    restore() {
        return this.health = this.maxHealth,
            this.distance = this.maxDistance;
    }
    clone() {
        return new MilitaryResource(this.type, this.health, this.maxHealth, this.distance, this.maxDistance);
    }
}

class Squad {
    constructor(combineResources) {
        this.squad = [];
        this.squad = combineResources;
    }
    combineResources(defaultResources) {
        this.squad.push(defaultResources[0], defaultResources[1]);
    }

    isReadyToMove() {
        return this.squad.some(unit => (unit.distance > 0 && unit.health > 0));
    }
    isReadyToFight() {
        return this.squad.some(unit => (unit.health > 0));
    }
    cloneResource() {
        return new Squad(this.squad);
    }
}


let WildDog = new MilitaryResource('WildDog', '100', '300', '50', '100');

let dragon = new MilitaryResource('dragon', '200', '400', '70', '200');
let dragon2 = new MilitaryResource('dragon2', '200', '400', '70', '200');
let dragon3 = new MilitaryResource('dragon3', '200', '400', '70', '200');

let squad = new Squad([WildDog, dragon]);
console.log(WildDog.isReadytoMove());
console.log(WildDog.isReadyToFight());


console.log(WildDog);
console.log(dragon);
console.log(squad);

WildDog.health = 20;  // занижаем hp
WildDog.distance = 12; // занижаем distance
console.log(WildDog);

WildDog.restore();
console.log(WildDog);

squad.combineResources([dragon2, dragon3])
console.log(squad);

console.log(squad.isReadyToMove());
console.log(squad.isReadyToFight());
console.log(squad.cloneResource());
