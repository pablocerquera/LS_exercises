function isPalindromicNumber(num) {
  console.log(String(num) === String(num).split('').reverse().join(''));
}

isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true
isPalindromicNumber(00011000);