// let arr = ["Grace", "Clare", "Trevor"];

// let newArr = arr.map((name) => {
//   console.log(name);
// });

// console.log(newArr);

// let arr1 = ["Grace", "Clare", "Trevor"];

// let newArr1 = arr1.forEach((name) => {
//   console.log(name);
// });

// console.log(newArr1);

// let something;
// if (something === undefined) {
//   console.log(`exactly what i didnt want`);
// } else {
//   console.log("unexpected but exactly what i want");
// }

let i = 0;

for (; i < 3;) {
  console.log(i += 1);
}



// let num = 5;

// function myFunc() {
//   num = 10;
// }

// myFunc();
// console.log(num);


/* on line one we declare the variable num and assign it to the number value 5
on line 3 we declare a function with no parameters in the function body on line
4 we reassign the global variable num to the number value 10 then we close the
curly braces to close the function body on line 5. on line 7 we call the
function myFunc which will reassign our variable num to 10 and on line 8 we
console log num and it prints 10 because it was reassigned in the myFunc
function. */


// let num = 5;

// function myFunc() {
//   console.log(num);
//   num = 10;
// }

// myFunc();
// console.log(num);

/* on line 20 we declare and initialize the variable `num` to the numerical
value `5`. on line 22 we declare a function named `myFunc` that has no
parameters. in the function body on line 23 we have the function log to the
console the the variable `num` which will log the numerical value of `5`
because the inner scope of the function has access to the outer scope. on
line 24 we have an assignment statement of `num = 10`. because it is
referencing the same variable in the outer scope inside the function
body we reassign the num variable to the numerical
value of `10`. on line 27 we call the function `myFunc`. when the function is
called we log `num` to the console and assign the value `10` to the
variable `num`. on line 28 we log `num` to the console and because this is after
the the function call we log the numerical value `10` to the console casue
it was reassigned in the function.
*/


// let num = 1;

// while (num < 3) {
//   let num = 5;
//   num += 1;
// }

// console.log(num);

/*on line 46 we declare and initialize the variable `num` to the numerical value
1. On line 48 we have a while statement with the conditional expression of
`num < 3` if the conditional statement is returns true the code inside the block
will run. on line 49 inside the code block declares and initializes a new
variable `num` to the numerical value of 5 and on line 50 we increment `num` by
1. because the outer scope does not have access to the inner scope on line 53
we log to the console the global variable `num` which has the value of `1`.
*/

const readline = require('readline-sync');

// variables, primitive values, objects, object property names
// function bar(arg1, arg2) {
//   let foo = 'Hello';
//   const qux = {
//     abc: [1, 2, 3, [4, 5, 6]],
//     def: null,
//     ghi: NaN,
//     jkl: foo,
//     mno: arg1,
//     pqr: arg2,
//   };

//   return qux;
// }

// let result = bar('Victor', 'Antonina');
// console.log(result);
// Math.floor()

/*
variable: bar, arg1, arg2, foo, qux, result, console
primitive values: 'Hello', 1, 2, 3, 4, 5, 6, null, abc, def, ghi, jkl, mno, pqr, 'Victor', 'Antonina', NaN
objects: [1, 2, 3, [4, 5, 6]], [4, 5, 6], bar(), qux object, Math object, floor method associated with Math object, objects referenced by console and console.log
object property names: abc, def, ghi jkl, mno, pqr

*/

let pets = {
  jerry: {species: "cat", age: 3},
  luna: {species: "dog", age: 5},
  goldin: {species: "fish", age: 1}
};

function flattenObj(animals) {
  let pets = Object.keys(animals);

  for (let idx in pets) {
    animals[pets[idx]] = animals[pets[idx]].species;
  }
}

flattenObj(pets);
console.log(pets);

// function changeName(name) {
//   name = "bob"; // does this reassignment change the variable outside the function?
// }

// function anotherFunction() {
//   let name = "jim";
//   changeName(name);
//   console.log(name); // => logs 'jim'
// }

// anotherFunction();

let arr = [1, 3, 4];
arr.length = 4;

let empty = arr.push(7);
console.log(empty);
console.log(arr);