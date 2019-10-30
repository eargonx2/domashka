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
