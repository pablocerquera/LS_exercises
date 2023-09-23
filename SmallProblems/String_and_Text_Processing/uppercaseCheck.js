function isUppercase(str) {
  let number = /(1-9)/g;
  let special = /[$&+,:;=?@#|'<>.-^*()%!]/g;
  for (let idx = 0; idx < str.length; idx++) {
    if (str[idx] === number) {
      continue;
    } else if (str[idx] === str[idx].toUpperCase()) {
      continue;
    } else if (str[idx] === special) {
      continue;
    } else if (str[idx] === str[idx].toLowerCase()) {
      return false;
    }
  }
  return true;
}

console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true