var num = Math.ceil(Math.random() * 10),
guess;

do {
  guess = prompt('Guess a number');
} while (guess !== null && guess != num);

if (guess !== num) {
alert('Thank you for game! You guessed right. Number is ' + num);
}