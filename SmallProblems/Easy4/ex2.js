/* declare a function name it isPalindrome. set up a parameter named string
 inside the function body we will declare and initialize the variable
 to the array of the split string after we split the string into an array
 seperated at each character and space we will then reverse the array and
 join the the array back together with the .join() method and check to see
 if the reversed string is the same as the original string. */

function isPalindrome(string) {
  let reverse = string.split('').reverse().join('');
  return console.log(reverse === string);
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true