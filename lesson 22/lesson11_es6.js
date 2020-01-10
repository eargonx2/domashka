
////////////Some//////////////////////////


function some(name, lastname, marks) {
    console.log(name);
    console.log(lastname);
    console.log(marks);
}

some('Vasya', 'Pupkin', [5, 6, 12]);

function some(name, lastname, ...marks) {
    console.log(name);
    console.log(lastname);
    console.log(marks);
}

some('Vasya', 'Pupkin', 5, 6, 12);




////////////метод Filter, показывает значения больше 0//////////////////////////

function forEach(arr, cb = function () { }) {
    for (let i = 0; i < arr.length; i++) {
        cb();
        if (arr[i] > 0) {
            console.log(arr[i])
        }
    }
}
forEach([-1, -2, 0, 4]);
