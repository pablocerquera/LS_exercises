function leadingSubstrings(str) {

  let arr = [];
  let accumulation = '';
  for (let idx = 0; idx < str.length; idx++) {
    arr.push(accumulation += str[idx]);
  }
  return arr;
}

function leadingSubstrings2(str) {
  let arr = [];
  str.split('').reduce((acc, curr) => {
    arr.push(acc += curr);
    return acc;
  }, "");
  return arr;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

console.log(leadingSubstrings2('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings2('a'));        // ["a"]
console.log(leadingSubstrings2('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]