var wordsAmount = +prompt('Введите количество рандомных значений, которые будут сгенерированы');
    minCharacter = +prompt('Минимальное количество символов');
    maxCharacter = +prompt('Максимальное количество символов до 7');
    maxCharacter++;     //увеличиваем на 1 т.к. length считает с 0

mass = []; 

function generate(length) {              //генерируем случайные символы
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
   for ( var i = 1; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
   }
   return result;
}


 

function amount (words) {
  var result;
  for (var i = 1; i < words; i++ ) {
  result += mass.push (generate(Math.ceil(Math.random() * (maxCharacter - minCharacter) + minCharacter)));  
  }
  return result;
}

amount(wordsAmount);
console.log(mass);



var obj = {};

const a = mass.filter(word => word.length == 1);
const b = mass.filter(word => word.length == 2);
const c = mass.filter(word => word.length == 3);
const d = mass.filter(word => word.length == 4);
const e = mass.filter(word => word.length == 5);
const f = mass.filter(word => word.length == 6);
const g = mass.filter(word => word.length == 7);
var obj = {1:a, 2:b, 3:c, 4:d, 5:e, 6:f, 7:g};
console.log(obj);

if ((obj[1]).length != 0){
console.log((obj[1]).length + ' words with 1 character');}
if ((obj[2]).length != 0){
console.log((obj[2]).length + ' words with 2 characters')};
if ((obj[3]).length != 0){
console.log((obj[3]).length + ' words with 3 characters')};
if ((obj[4]).length != 0){
console.log((obj[4]).length + ' words with 4 characters')};
if ((obj[5]).length != 0){
console.log((obj[5]).length + ' words with 5 characters')};
if ((obj[6]).length != 0){
console.log((obj[6]).length + ' words with 6 characters')};
if ((obj[7]).length != 0){
console.log((obj[7]).length + ' words with 7 characters')};

