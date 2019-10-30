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
