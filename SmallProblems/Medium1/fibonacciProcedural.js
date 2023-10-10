function fibonacci(nth) {
  let current = 1;
  let array = [1];
  let count = 0;
  while (true) {
    array.push(current);
    if (array.length === nth) break;
    let previous = array[count];
    current += previous;
    count++;
  }
  return current;
}

console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050