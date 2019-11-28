casino.fillLines(3, values);

var result = casino.checkLines();
console.log(casino.lines);
console.log('Сравниваем по строке:')
console.log(casino.checkVertLines());
console.log('Сравниваем по колонке (первая надпись = первая колонка):')
console.log(casino.checkHorizLines());
