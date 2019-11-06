var wordsAmount = +prompt('Введите количество рандомных значений, которые будут сгенерированы');
	  minCharacter = +prompt('Минимальное количество символов');
    maxCharacter = +prompt('Максимальное количество символов до 7');
    maxCharacter++;     //увеличиваем на 1 т.к. length считает с 0


function generate(length) {              //генерируем случайные символы
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
   for ( var i = 1; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}


mass = [];  
var i = 1;
while (i<=wordsAmount) {
	mass.push (generate(Math.ceil(Math.random() * (maxCharacter - minCharacter) + minCharacter)));           //заносим сгенерированые слова в массив
	i++
}

var length = mass.filter(word => word.length == 1);

    counter = 0;

for (var key in length) {
  counter++;
}
if (counter!=0){
alert(counter+" words with 1 characters");}          //выводим пользователю слова с 1 символом и т.д.

var length2 = mass.filter(word => word.length == 2);

    counter = 0;

for (var key in length2) {
  counter++;
}
if (counter!=0){
alert(counter+" words with 2 characters");}

var length3 = mass.filter(word => word.length == 3);

    counter = 0;

for (var key in length3) {
  counter++;
}
if (counter!=0){
alert(counter+" words with 3 characters");}

var length4 = mass.filter(word => word.length == 4);

    counter = 0;

for (var key in length4) {
  counter++;
}
if (counter!=0){
alert(counter+" words with 4 characters");}

var length5 = mass.filter(word => word.length == 5);

    counter = 0;

for (var key in length5) {
  counter++;
}
if (counter!=0){
alert(counter+" words with 5 characters");}

var length6 = mass.filter(word => word.length == 6);

    counter = 0;

for (var key in length6) {
  counter++;
}
if (counter!=0){
alert(counter+" words with 6 characters");}

var length7 = mass.filter(word => word.length == 7);

    counter = 0;

for (var key in length7) {
  counter++;
}
if (counter!=0){
alert(counter+" words with 7 characters");}


var sortMass = [];
sortMass.push(length, length2, length3, length4, length5, length6, length7);   // создали новый массив и записываем в него слова с символами по возрастанию

console.log(sortMass);