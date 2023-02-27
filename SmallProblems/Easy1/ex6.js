const rl = require('readline-sync');

function prompt(msg) {
  console.log(msg);
}

function computeSum(givenNum) {
  let total = 0;

  for (let num = 1; num <= givenNum; num += 1) {
    total += num;
  }
  return total;
}

function returnProduct(givenNum) {
  let total = 1;

  for (let num = 1; num <= givenNum; num += 1) {
    total *= num;
  }
  return total;
}

function invalidNum(num) {
  return num === '' || Number(num) <= 0 || Number.isNaN(Number(num));
}

prompt('please enter a number greater than 0: ');
let number = Number(rl.question());

while (invalidNum(number)) {
  prompt('Please enter valid number.');
  number = Number(rl.question());
}

prompt("Enter 's' for sum, or 'p' for product. ");
let answer = rl.question().toLowerCase();

while (!['s', 'p'].includes(answer)) {
  prompt("Please enter 's' or 'p'.");
  answer = rl.question().toLowerCase();
}
if (answer === 's') {
  let sum = computeSum(number);
  console.log(sum);
} else if (answer === 'p') {
  let product = returnProduct(number);
  prompt(product);
}
