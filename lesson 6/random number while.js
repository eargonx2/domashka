var num = prompt('Угадайте число от 1 до 4');
var b =  Math.ceil(Math.random()*4);
while (num === null) {
return;
}
while (b == num) {
alert(`Вы угадали, загаданное число ` + b);
break;}
while (b != num) {
alert(`Вы не угадали, загаданое число ` +b);
num = prompt('Угадайте число от 1 до 4');
b =  Math.ceil(Math.random()*4);
if (num == null) {
return;
}
}
