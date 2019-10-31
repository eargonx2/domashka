var userIsHappy = true;
    currentNumber = 0;
do {
  userIsHappy =
  confirm('Are you happy that your number is ' + currentNumber++ + '?');
  } while (userIsHappy);
  console.log('Thank you for game!');
