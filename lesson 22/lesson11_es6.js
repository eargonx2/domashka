////////////Some//////////////////////////
const arr = [1, -1, 2, -2, 3];

function some(arr, cb) {
    for (let i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}


console.log(some(arr, el => {
    return el == 1;
}));




////////////метод Filter, показывает значения больше 0//////////////////////////

function forEach(arr, cb = function() {}) {
    for (let i = 0; i < arr.length; i++) {
        cb();
        if (arr[i] > 0) {
            console.log(arr[i])
        }
    }
}
forEach([-1, -2, 0, 4]);
