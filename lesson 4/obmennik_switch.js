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
