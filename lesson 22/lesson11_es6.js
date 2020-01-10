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
