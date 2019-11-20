var arr = [1, -1, 2, -2, 3];

// var positiveArr = arr.filter(function(number) {
//   return number > 0;
// });

// alert( positiveArr ); // 1,2,3


// переписал фильтр с положительными числами

for (key in arr) {
	if (arr[key]>0) {
		alert (arr[key]);
	}
}
