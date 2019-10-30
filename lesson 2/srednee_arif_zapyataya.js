var input = prompt('Введите 3 числа через запятую'); 
var array = input.split(','); 
var num1 = parseInt(array[0]); 
var num2 = parseInt(array[1]);
var num3 = parseInt(array[2]);
var sum = ((num1+num2+num3)/3);
alert ("Среднее арифметичское - "+sum);
