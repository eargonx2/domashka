var birthday = prompt('Введите год Вашего рождения', '');
if (isNaN(birthday)) {
alert('Вы ввели не число!')
}
if (birthday === null) {
return; 
 }
else if (birthday <= 2001) {
alert('Доступ разрешен');
}
else {
alert ('Доступ запрещен');
}
if (birthday > 2007) {
alert ('Вы еще слишком молоды, попробуйте посмотреть мультики)');
}
