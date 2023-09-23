function letterCaseCount(str) {
  let count = {lowercase: 0, uppercase: 0, neither: 0};
  let special = "[$&+,:;=?@#|'<>.-^*()%!";
  str.split('').forEach(ele => {
    if (Number(ele) || ele === ' ' || special.split('').includes(ele)) {
      count.neither += 1;
    } else if (ele === ele.toUpperCase()) {
      count.uppercase += 1;
    } else if (ele === ele.toLowerCase()) {
      count.lowercase += 1;
    }
  });
  return count;
}

function letterCaseCountTwo(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };

}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

console.log(letterCaseCountTwo('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCountTwo('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCountTwo('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCountTwo(''));            // { lowercase: 0, uppercase: 0, neither: 0 }