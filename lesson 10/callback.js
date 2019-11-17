runner.$$tasks = function first(){
setInterval( function(){
console.log('Hello');
}, 2000 );
}
runner.$$tasks();

runner.$$tasks = function second(){
setInterval( function(){
console.log('World');
}, 2000 );
}
runner.$$tasks();
console.log(runner);
