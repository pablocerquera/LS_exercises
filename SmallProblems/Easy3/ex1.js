// declare a variable that will be initialized to the current value being
// evaluated.
// compare the current with the fallowing.
// if the following value is the same as the current move to the next
// until the following is different from the current.

function crunch(string) {
  let array = string.split('');
  let newArray = [];
  let idx = 0;
  while (idx < array.length) {
    if (array[idx] === array[idx + 1]) {
      idx += 1;
    } else {
      newArray.push(array[idx]);
      idx += 1;
    }
  }
  console.log(newArray.join(''));
}


crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""