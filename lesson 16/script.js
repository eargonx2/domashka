var mag = new MilitaryResource('magician', 200, 300);  // создаем нового юнита

console.log(mag);
console.log(mag.isReadytoMove());
console.log(mag.isReadyToFight());
console.log(mag.restore());
mag2 = mag.clone();
console.log(mag2);

var squad = new Squad([mag, mag2]);
console.log(squad.squad);
console.log(squad.isReadyToMove());
squad.restore();
var newsquad = squad.cloneResources();
console.log(newsquad);


