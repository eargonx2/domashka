var arr = [1, -1, 2, -2, 3];

function some(arr, cb) {
  if (!cb) return;
  for (var i=0; i < arr.length; i++) {
    if(cb(arr[i], i, arr)) {
      return true;
    }
  }
  return false;
}


console.log(some(arr, function (el) {
return el == 1;
}));
