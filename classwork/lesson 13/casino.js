var values = [1,2,3,4,5];

var casino = {
    lines: [],
    result: null,
    createRandomLineFrom: function (arr) {
      return arr.map(function (n, i, mappedArray) {
        return Math.ceil(Math.random() * (mappedArray.length -1));
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
  }
}
