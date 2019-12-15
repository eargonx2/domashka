var croco = new CrocoTurtle(50);
var bear = new MonsterBear(2);
var gig = new Gigant(2);
console.log(bear);
croco.attack();
bear.attack();

console.log(bear);

bear.attack(gig);
