// pointFunctionSolution.js
// Task 2 solution: extend Point from Task 1 with midpoint and scaleTo

function Point(x, y) {
    // from task 1
    this.x = x;
    this.y = y;

    this.print = function () {
        console.log("(" + this.x + ", " + this.y + ")");
    };

    // Returns the midpoint between this point and p2 as a NEW Point
    this.midpoint = function (p2) {
        return new Point(
            (this.x + p2.x) / 2,
            (this.y + p2.y) / 2
        );
    };

    // Returns the point reached by scaling from this point toward p2 by factor t
    this.scaleTo = function (p2, t) {
        return new Point(
            this.x + (p2.x - this.x) * t,
            this.y + (p2.y - this.y) * t
        );
    };
}

/* Do not change the lines below */
let p1 = new Point(1,5)
let p2 = new Point(5,7)
p1.midpoint(p2).print()//expect (3, 6)
p2.midpoint(p1).print()//expect (3, 6)

/* Do not change the lines below */
let p3 = new Point(0,0)
let p4 = new Point(4,8)
p3.scaleTo(p4,0.25).print(1,2)// expect (1, 2)
p4.scaleTo(p3, 0.75).print() // expect (1, 2)
