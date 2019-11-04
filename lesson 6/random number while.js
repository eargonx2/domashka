var num = prompt('Угадайте число от 1 до 10');
var b =  Math.ceil(Math.random()*10);
while (num == null) {
return;
}
while (b == num) {
alert(`Вы угадали, загаданное число ` + b);
break;}
while (b != num) {
alert(`Вы не угадали, загаданое число ` +b);
break;
}
