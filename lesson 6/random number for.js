var num = prompt('Угадайте число от 1 до 4');
var b =  Math.ceil(Math.random()*4);
if (num==null){
return}
for ( ; num==b; ){
alert ('Вы угадали! Случайное число ' +b);
break;}
for (; num!=b; num = prompt('Угадайте число от 1 до 4')){
if (num==null){
return}
alert ('Вы не угадали, случайно число ' +b);
}
