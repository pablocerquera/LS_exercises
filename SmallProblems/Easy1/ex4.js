const rl = require('readline-sync');

console.log("Enter the length of the room in meters: ")
let length = rl.question();

console.log("Enter the width of the room in meters: ")
let width = rl.question();
let area = Number(length) * Number(width);
let areaInFeet = area * 10.7639
console.log(`The area of the room is ${area.toFixed(2)} square meters (${areaInFeet.toFixed(2)} square feet).`)