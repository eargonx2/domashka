function random(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
console.log(random(1, 200), random(50, 500));

function play(num, count) {
  var result;
  var raz = 0;
  do {
    var guess = prompt('Guess a number:');
    raz++;
    result = Number(guess) !== num;
  } while (result && guess !== null && raz < count);
  return !result;
}

var num = random(0, 10);
var result = play(num, 5);
console.log(result);
