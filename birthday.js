var birthday = prompt('Введите год Вашего рождения', '');
(isNaN(birthday)) ? alert('Вы ввели не число!') : '';
if (birthday === null) {
return; //break out of the function early
 }
(birthday <= 2001) ? alert('Доступ разрешен') : alert ('Доступ запрещен'); 
(birthday > 2007) ? alert ('Вы еще слишком молоды, попробуйте посмотреть мультики)') :
'';
if (birthday === null) {
return; //break out of the function early
 }

var birthday = prompt('Введите год Вашего рождения', '');
switch (true){
case (birthday <= 2001):
alert('Доступ разрешен');
break;
case (birthday >= 2001):
alert('Доступ запрещен');
break;
case (birthday > 2007):
alert ('Вы еще слишком молоды, попробуйте посмотреть мультики)');
}


var birthday = +prompt('Введите Ваш возраст', '');
switch (birthday) {
case 0:
return;
}
switch (true) {
case (birthday < 30):
alert('Вы слишком молоды для этой вакансии');
return;
case (birthday >= 30):
}
var experience = +prompt ('Сколько лет опыта в данной сфере','');
switch (experience) {
case 0:
return;
}
switch (true) {
case (experience < 3):
alert('У Вас слишком мало опыта');
break;
case (experience >= 3):
alert('Вы нам подходите');
}


var currency = prompt ('Ведите валюту на которую хотите обменять гривну "usd" или "eu"','');
var dollar = 'usd';
var euro = 'eu';
switch (currency) {
case null:
return;
}
var sum = prompt ('Введите сумму в гривнах, которую хотите обменять','');
switch (sum) {
case null:
return;
}
switch (currency) {
case 'usd':
dollar = (sum/24.63);
alert (`Вы получите ${dollar.toFixed(2)} $`);
break;
case 'eu':
euro = (sum/27.18);
alert (`Вы получите ${euro.toFixed(2)} €`);
break;
}