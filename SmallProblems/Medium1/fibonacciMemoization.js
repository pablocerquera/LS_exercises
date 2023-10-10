let memo = {};

function fibonacci(nth) {
  if (nth <= 2) return 1;

  if (memo[nth]) return memo[nth];

  memo[nth] = fibonacci(nth - 1) + fibonacci(nth - 2);
  return memo[nth];
}

console.log(fibonacci(7));
console.log(fibonacci(8));