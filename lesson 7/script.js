var wordsAmount = +prompt('Введите количество рандомных значений, которые будут сгенерированы');
    minCharacter = +prompt('Минимальное количество символов');
    maxCharacter = +prompt('Максимальное количество символов до 7');
        

  
function random(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
dictionary = {};

for (let i = 0; i < wordsAmount; i++) {
var word = '';
var letterAmount =  random(minCharacter, maxCharacter); 

for (var j=0; j<letterAmount; j++) {
  var charIndex = random(0, characters.length - 1);
  word+= characters[charIndex];
}

if (dictionary[letterAmount]) {
  dictionary[letterAmount].push(word);
} else {
  dictionary[letterAmount] = [];
    dictionary[letterAmount].push(word);
}
}
for (var key in dictionary) {
  console.log('You have ' + dictionary[key].length + ' words with ' + key + ' length');
  
}

console.log(dictionary);
