function func (a,b) {
  return a+ b;
}

function sum() {
  return Array.prototype.reduce.call(arguments, function (acc, next) {
    return acc + next;
  },0)
}

var obj = {
  a:4,
  b:5
}
var numbers = [2,3];
console.log(sum(1,2,3,4,5,6,7,8));
