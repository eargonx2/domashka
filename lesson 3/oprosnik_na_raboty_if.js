var birthday = prompt ('Введите год рождения','');
if (birthday === null) {
return;
}
var experience = prompt ('Сколько лет опыта в данной сфере','');
if (experience === null) {
return;
}
if (birthday <= 1989 && experience > 3) {
alert ('Вы нам подходите, можете отправлять резюме');
}
else {
alert ('Вы нам не подходите');
}
