// primitive types
//let apples: number = 5;
var apples = 5;
var speed = "fast";
var hasName = true;
var nothingMuch = null;
var nothing = undefined;
// buil;t in objects
var now = new Date();
// Array
var colors = ["red", "green", "blue"];
var myNumbers = [12, 23.4, 0, -123.45];
var truths = [true, false, false];
// Classes
var Car = /** @class */ (function () {
    function Car() {
    }
    return Car;
}());
var car = new Car();
// Object literal
var point = {
    x: 10,
    y: 20,
};
// Function
var logNumner = function (i) {
    console.log(i);
};
// When to use annotations
// 1) Function that returns the 'any' type
var json = '{"x": 10, "y": 20}';
var coordinates = JSON.parse(json);
console.log(coordinates);
