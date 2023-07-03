function strip(string) {
  let newString = '';
  for (let idx = 0; idx < string.length; idx++) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      newString += string[idx];
    }
  }
  return newString;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

function isRealPalindrome(string) {
  string = strip(string.toLowerCase());
  console.log(string.toLowerCase() === string.split('').reverse().join('').toLowerCase());
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false
