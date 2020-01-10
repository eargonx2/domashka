////////////Some//////////////////////////
{
    const mass = ['adsd', 'basas', 'casas', 'casas'];
    let newMass = [];

    mass.forEach(function (item, i, mass) {
        // i++; если надо значение строки начинать с 1, а не с 0
        return newMass.push(i + ':' + item);
    });
    console.log(mass);
    console.log(newMass);
}



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
