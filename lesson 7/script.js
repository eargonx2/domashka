var randomAmount = 5;
	minCharacter = 2;
    maxCharacter = 6;

var alphabet = 'abcdefghijklmnopqrstuvwxyz';
// var words = {alphabet[Math.ceil(Math.random()*25)]*minCharacter};
// alert ('words');


 
function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}


mass = ['amountWords'];
var i = 1;
while (i<=randomAmount) {
	mass.push (makeid(Math.ceil(Math.random() * (maxCharacter - minCharacter) + minCharacter)));
	i++
}
console.log (mass);

var length2 = mass.filter(word => word.length == 2);

    counter = 0;

for (var key in length2) {
  counter++;
}
alert(counter+" words with 2 characters");

var length3 = mass.filter(word => word.length == 3);

    counter = 0;

for (var key in length3) {
  counter++;
}
alert(counter+" words with 3 characters");

var length4 = mass.filter(word => word.length == 4);

    counter = 0;

for (var key in length4) {
  counter++;
}
alert(counter+" words with 4 characters");

var length5 = mass.filter(word => word.length == 5);

    counter = 0;

for (var key in length5) {
  counter++;
}
alert(counter+" words with 5 characters");

var length6 = mass.filter(word => word.length == 6);

    counter = 0;

for (var key in length6) {
  counter++;
}
alert(counter+" words with 6 characters");

