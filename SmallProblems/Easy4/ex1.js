const rl = require('readline-sync');
let array = [];

console.log("Enter the 1st number: ");
let firstNum = rl.question();
array.push(firstNum);

console.log("Enter the 2nd number: ");
let secondNum = rl.question();
array.push(secondNum);

console.log("Enter the 3rd number: ");
let thirdNum = rl.question();
array.push(thirdNum);

console.log("Enter the 4th number: ");
let fourthNum = rl.question();
array.push(fourthNum);

console.log("Enter the 5th number: ");
let fifthNum = rl.question();
array.push(fifthNum);

console.log("Enter the last number: ");
let find = rl.question();

// if (array.includes(find)) {
//   console.log(`The number ${find} appears in ${array.join(',')}.`);
// } else {
//   console.log(`The number ${find} does not appears in ${array.join(',')}.`);
// }

function isIncluded(arr, val) {
  return arr.some((element) => val < element);
}

console.log(isIncluded(array, find));