function swap(str) {
  let arr = str.split(' ');
  for (let idx = 0; idx < arr.length; idx++) {
    arr[idx] = switchLetters(arr[idx]);
  }
  return arr.join(' ');
}

function switchLetters(word) {
  if (word.length === 1) {
    return word;
  }
  return word[word.length - 1] + word.slice(1, -1) + word[0];
}

console.log(swap('Abcde'));
console.log(swap('Oh what a wonderful day it is'));

