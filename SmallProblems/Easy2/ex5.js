const rl = require('readline-sync');
const operators = ['+', '-', '*', '/', '%', '**'];

function prompt(msg) {
  console.log(`==> ${msg}`);
}

function calculation(first, second, arr) {
  for (let idx = 0; idx < arr.length; idx++) {
    let result = `${first} ${arr[idx]} ${second}`;
    prompt(`${result} = ${eval(result)}`);
  }
}

prompt("Enter the first number: ");
let num1 = Number(rl.question());

prompt("Enter the second number: ");
let num2 = Number(rl.question());

calculation(num1, num2, operators);
