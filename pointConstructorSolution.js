// pointConstructorSolution.js
// Task 1 solution based on the provided starter (do not change test prints)

// Template object (prototype) for a 2D point
let PointPrototype = {
    // default coordinate values
    x: 0,
    y: 0,
    // print method uses this.x and this.y
    print: function () {
        console.log("(" + this.x + ", " + this.y + ")");
    }
};

// Function that creates a point object using the prototype
function createPoint(x, y) {
    // Create a new object that delegates to PointPrototype
    const p = Object.create(PointPrototype);
    // Initialize coordinates
    p.x = x;
    p.y = y;
    return p;
}

// test the prototype-based objects
// do not change
let p1 = createPoint(3, 4);
p1.print();
p1 = createPoint(10, 15);
p1.print();
p1 = createPoint(-2, 8);
p1.print();

// Now create a constructor function version
function Point(x, y) {
    // Initialize instance fields
    this.x = x;
    this.y = y;

    // Instance method print (same format as above)
    this.print = function () {
        console.log("(" + this.x + ", " + this.y + ")");
    };
}

/* Test creating objects with the constructor Point.
 The x and y values should be the same as those for 
 createPoint above and in the same order.
 Do not change the print statements */
let p2 = new Point(3, 4); // make with constructor function
p2.print();
p2 = new Point(10, 15);   //make with constructor function
p2.print();
p2 = new Point(-2, 8);    //make with constructor function
p2.print();
