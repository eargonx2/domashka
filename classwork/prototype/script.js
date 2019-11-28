var circle = document.querySelector('.circle');
var circleMover = move(circle);
var square = document.querySelector('.square');
var squareMover = move(square);

setTimeout(function () {
  circleMover.right(310);
  squareMover.left(310);
  circleMover.up(100);
  squareMover.down(310);
  circleMover.right(200);
  squareMover.left(310);


  setTimeout(function () {
      circleMover.left(100);
      squareMover.right(100);
      circleMover.up(200);
      squareMover.down(100);
      circleMover.left(100);
      squareMover.right(100);
  }, 500)

}, 500)