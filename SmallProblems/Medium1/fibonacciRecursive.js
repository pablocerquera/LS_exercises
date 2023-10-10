function fibonacci(nth) {
  if (nth <= 2) {
    return 1;
  }
  let answer = fibonacci(nth - 1) + fibonacci(nth - 2);
  console.log('answer:', answer);
  return answer;

}

// console.log(fibonacci(1));       // 1
// console.log(fibonacci(2));       // 1
// console.log(fibonacci(3));       // 2
// console.log(fibonacci(4));       // 3
fibonacci(3);       // 5
// console.log(fibonacci(12));      // 144
// console.log(fibonacci(20));      // 6765