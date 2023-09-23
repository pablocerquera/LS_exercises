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

function palindromes(string) {
  return substrings(string).filter(ele => ele === ele.split('')
    .reverse().join('') && ele.length > 1);
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

console.log(palindromes('knitting cassettes'));
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]