class MilitaryResource {
    constructor(type, health, maxHealth, distance, maxDistance) {
        this.type = type;
        this.health = health;
        this.maxHealth = maxHealth;
        this.distance = distance;
        this.maxDistance = maxDistance;
    }
}

class Squad {
    constructor(combineResources) {
        this.squad = [];
        this.squad = combineResources;
    }
    Squad() {
        if (defaultResources) this.combineResources(defaultResources);
    }
}


let WildDog = new MilitaryResource('WildDog', '100', '300', '50', '100');

let dragon = new MilitaryResource('dragon', '200', '400', '70', '200');

let squad = new Squad([WildDog, dragon]);

console.log(WildDog);
console.log(dragon);
console.log(squad);
