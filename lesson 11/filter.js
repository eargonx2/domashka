var arr = [1, -1, 2, -2, 3];

function filter(arr, cb) {
    var newArr = [];
    for (var i = 0; i < arr.length; i++) {
        if (cb(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
    }
    return newArr;
}


console.log(filter(arr, function(el) {
    return el > 0;
}));
