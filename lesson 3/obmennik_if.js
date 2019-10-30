var currency = prompt ('Ведите валюту на которую хотите обменять гривну "usd" или "eu"','');
if (currency === null) {
return;
}
var dollar = 'usd';
var euro = 'eu';
var sum = prompt ('Введите сумму в гривнах, которую хотите обменять','');
if (sum === null) {
return;
}
if (currency == dollar) {
dollar = (sum/24.63);
alert (`Вы получите ${dollar.toFixed(2)} $`);
}
else {
euro = (sum/27.18);
alert (`Вы получите ${euro.toFixed(2)} €`);
}
