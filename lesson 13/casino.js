var values = [1,2,3];

var casino = {
    lines: [],
    result: null,
    createRandomLineFrom: function (arr) {
        return arr.map(function () {
            return Math.ceil(Math.random() * (arr.length - 1));
        });
    },
    fillLines: function (linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function () {
            return self.createRandomLineFrom(fromArray);
        })
    },
    checkLines: function () {
        var lineIndex = (this.lines[0].length - 1) / 2,
            value = this.lines[0][lineIndex];
        return this.result = this.lines.every(function (line) {
            return line[lineIndex] === value;
        })
    },

 checkVertLines: function () {
 	for (var i=0; i<this.lines[0].length; i++) {
if (this.lines[i][i] === this.lines[i][0] & this.lines[i][i] === this.lines[i][1] & this.lines[i][i] === this.lines[i][2] ) {
	console.log (this.lines[i] + ' Совпадение!');}
	else {console.log (this.lines[i] + ' Не совпало!');}
	
  }
},

 checkHorizLines: function () {
 	for (var i=0; i<this.lines[0].length; i++) {
if (this.lines[0][i] === this.lines[1][i] & this.lines[0][i] === this.lines[2][i]) {
	console.log (this.lines[i] + ' Совпадение!');}
	else {console.log (this.lines[i] + ' Не совпало!');}
	
  }
}
}
