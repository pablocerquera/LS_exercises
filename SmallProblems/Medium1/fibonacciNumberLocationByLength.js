/*
Problem: 
  -input: integer
  -output: integer

  create a function that makes the fibonacci sequence
  add the sequence to an array
  write a function to itereate throught array to see length of elements
  when the element is the desired length return the index

  from the test case it does not appear that it is working from a zero index
  the argument cannot be less then 2

Example:
  findFibonacciIndexByLength(2n) === 7n;    // 1 1 2 3 5 8 13
  findFibonacciIndexByLength(3n) === 12n;   // 1 1 2 3 5 8 13 21 34 55 89 144
  findFibonacciIndexByLength(10n) === 45n;
  findFibonacciIndexByLength(16n) === 74n;
  findFibonacciIndexByLength(100n) === 476n;
  findFibonacciIndexByLength(1000n) === 4782n;
  findFibonacciIndexByLength(10000n) === 47847n;

Data:
  integer to string (to count length)
  string into an array (to count index)
  string back to integer on return

Algo:
  fibonacci function
    current number starts as 1
    add previous with current assign sum to current
    do this until we have met the criteria.

  findUmber function
    we need to check for the condition the length of the numbers being pushed


Code:
*/

function findFibonacciIndexByLength(numberLength) {
  let current = 1n;
  let array = [1n];
  let count = 0;
  while (true) {
    array.push(current);
    let previous = array[count];
    current += previous;
    count++;
    let string = String(current);
    if (string.length === Number(numberLength)) break;
  }
  let result = array.length + 1;
  return BigInt(result);
}

// console.log(findFibonacciIndexByLength(2) === 7);
console.log(findFibonacciIndexByLength(2n) === 7n);    // 1 1 2 3 5 8 13
console.log(findFibonacciIndexByLength(3n) === 12n);   // 1 1 2 3 5 8 13 21 34 55 89 144
console.log(findFibonacciIndexByLength(10n) === 45n);
console.log(findFibonacciIndexByLength(16n) === 74n);
console.log(findFibonacciIndexByLength(100n) === 476n);
console.log(findFibonacciIndexByLength(1000n) === 4782n);
console.log(findFibonacciIndexByLength(10000n) === 47847n);

// The last example may take a minute or so to run.