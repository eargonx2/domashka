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
