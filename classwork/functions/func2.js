function random(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
console.log(random(1, 200), random(50, 500));

var codes = {
  cancelled:  'CANCELLED',
  attempts: 'ATTEMPTS'
}

function play(num, count, callback) {
  var result;
  var raz = 0;
  do {
    var guess = prompt('Guess a number:');
    raz++;
    result = Number(guess) !== num;
  } while (result && guess !== null && raz < count);
  //return !result;
  callback({
    result: !result,
    code: guess === null ? code.cancelled : codes.attempts
  });
}


play(random(0, 10), 2, function(result) {
  console.log('Game ended!', result);
});

