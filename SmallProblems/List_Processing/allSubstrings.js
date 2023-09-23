function substrings(str) {
  let betterArray = [];
  for (let idx = 0; idx < str.length; idx++) {
    leadingSubstrings(str.slice(idx)).forEach(ele => betterArray.push(ele));
  }

  return betterArray;
}

function leadingSubstrings(str) {
  let arr = [];
  str.split('').reduce((acc, curr) => {
    arr.push(acc += curr);
    return acc;
  }, "");
  return arr;
}

console.log(substrings('abcde'));

// returns
// [ "a", "ab", "abc", "abcd", "abcde",
// "b", "bc", "bcd", "bcde",
// "c", "cd", "cde",
// "d", "de",
// "e" ]