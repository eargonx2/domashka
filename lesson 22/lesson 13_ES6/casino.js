let values = [1, 2, 3];
let casino = {
    lines: [],
    result: null,
    createRandomLineFrom: function(arr) {
        return arr.map(function() {
            return Math.ceil(Math.random() * (arr.length - 1));
        });
    },
    fillLines: function(linesAmount, fromArray) {
        let self = this;
        this.lines = Array(linesAmount).fill(1).map(function() {
            return self.createRandomLineFrom(fromArray);
        })
    },
    checkLines: function() {
        let lineIndex = (this.lines[0].length - 1) / 2,
            value = this.lines[0][lineIndex];
        return this.result = this.lines.every(function(line) {
            return line[lineIndex] === value;
        })
    },
    checkHorizLines: function() {
        let [a, b, c, ...d] = this.lines[0];
        let [a2, b2, c2, ...d2] = this.lines[1];
        let [a3, b3, c3, ...d3] = this.lines[2];
        for (let i = 0; i < this.lines.length; i++) {
            if ((a, b, c) == (a2, b2, c2) & (a, b, c) == (a3, b3, c3) & (a2, b2, c2) == (a3, b3, c3)) {
                return true;
            }
        }
        return false;
    },
    checkVertLines: function() {
        let [a, b, c, ...d] = this.lines[0];
        let [a2, b2, c2, ...d2] = this.lines[1];
        let [a3, b3, c3, ...d3] = this.lines[2];
        for (let i = 0; i < this.lines.length; i++) {
            if (a == a2 & a == a3 & a2 == a3) {
                return true;
            }
        }
        return false;
    }
}
