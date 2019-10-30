var msg = prompt ('Угадайте число от 1 до 10, которое будет сгенерировано');
var random = Math.random() * (10 - 1) + 1;
if (msg == random.toFixed(0)) {  alert( 'Вы угадали!' );}
else { alert( 'Вы не угадали! '+' Сгенерированное число '+random.toFixed(0));}
