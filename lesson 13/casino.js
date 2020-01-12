var values = [1, 2, 3];
var casino = {
    lines: [],
    result: null,
    createRandomLineFrom: function(arr) {
        return arr.map(function() {
            return Math.ceil(Math.random() * (arr.length - 1));
        });
    },
    fillLines: function(linesAmount, fromArray) {
        var self = this;
        this.lines = Array(linesAmount).fill(1).map(function() {
            return self.createRandomLineFrom(fromArray);
        })
    },
    checkLines: function() {
        var lineIndex = (this.lines[0].length - 1) / 2,
            value = this.lines[0][lineIndex];
        return this.result = this.lines.every(function(line) {
            return line[lineIndex] === value;
        })
    },
    checkHorizLines: function() {
        for (var i = 0; i < this.lines.length; i++) {
            if (this.lines[0][0] == this.lines[1][0] & this.lines[0][1] == this.lines[1][1] & this.lines[0][2] == this.lines[1][2]) {
                return true;
            }
        }
        return false;
    },
    checkVertLines: function() {
        for (var i = 0; i < this.lines.length; i++) {
            if (this.lines[0][0] == this.lines[1][0] & this.lines[1][0] == this.lines[1][1] & this.lines[2][0] == this.lines[2][2]) {
                return true;
            }
        }
        return false;
    }
}
