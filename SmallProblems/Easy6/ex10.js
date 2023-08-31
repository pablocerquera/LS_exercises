function isBalanced(string) {
  let balance = 0;
  string.split().forEach(ele => {
    if (ele === '(') {
      balance += 1;
    } else if (ele === ')') {
      balance -= 1;
    }
    if (balance < 0) return false;
  });
  return balance === 0;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);