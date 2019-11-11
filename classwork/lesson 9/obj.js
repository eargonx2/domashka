function random(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

var wordsAmount = 100,
minLettersAmount = 2,
maxLettersAmount = 10;
alphabet = 'aabcdefghijklmnoprstuvwxyz',
dictionary = {};

for (let i = 0; i < wordsAmount; i++) {
var word = '';
var letterAmount =  random(minLettersAmount, maxLettersAmount); 

for (var j=0; j<letterAmount; j++) {
  var charIndex = random(0, alphabet.length - 1);
  word+= alphabet[charIndex];
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
