var runner = {
    $$runnerId: null,
    $$tasks: [],
    setSpeed: function (speed) {
        this.stop();
        this.start(speed);
    },
    add: function (task) {
        this.$$tasks.push(task);
    },
    start: function (speed) {
        var _this = this;
        this.$$runnerId = setTimeout(function callback() {
            _this.$$tasks.forEach(function () {
                // Here
            })
            _this.$$runnerId = setTimeout(callback, speed);
        }, speed);
    },
    stop: function () {
        clearTimeout(this.$$runnerId);
    }
}

runner.$$tasks = function first(){
setInterval(function(){
console.log('Hello');
}, 2000 );
}
runner.$$tasks();

runner.$$tasks = function second(){
setInterval(function(){
console.log('World');
}, 2000 );
}
runner.$$tasks();
console.log(runner);
