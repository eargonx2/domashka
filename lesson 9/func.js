 
var mass = ['adsd','basas','casas','casas' ];
var newMass = [];

mass.forEach(function(item, i, mass) {
  return newMass.push( i + ':' + item);
});
console.log(mass);
console.log(newMass);
