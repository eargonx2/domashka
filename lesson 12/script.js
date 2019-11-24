
window.onload = function() {
var div = document.getElementById("circle");
// Получаем div circle
var width = div.offsetWidth;
var height = div.offsetHeight;
// Ширина и высота div'a

document.onmousedown = function() {
// При нажатии кнопки . . .

posX = event.pageX;
posY = event.pageY;
// Получаем позицию (в px) курсора относительно документа

document.onmousemove = function(event) {
// При движении . . .

res = width + event.pageX-posX;
// 'res' = ширина div'a + кол-во пикселов смещения
ret = height + event.pageY-posY;
// 'ret' = высота div'a + кол-во пикселов смещения
div.style.width = res+"px";
div.style.height = ret+"px";
}
}
};

