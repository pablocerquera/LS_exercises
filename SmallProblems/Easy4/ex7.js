function wordSizes(words) {
  let wordArray = words.split(' ');
  let wordCount = {};

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let word = wordArray[idx];
    let wordSize = charaterCheck(word);
    if (wordSize === 0) {
      continue;
    }
    if (!wordCount[wordSize]) {
      wordCount[wordSize] = 0;
    }
    wordCount[wordSize] += 1;
  }
  return wordCount;
}


function charaterCheck(string) {
  let count = 0;
  for (let char = 0; char < string.length; char++) {
    if (string[char] < 'A') {
      continue;
    }
    count += 1;
  }
  return count;
}


console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes(''));
console.log(wordSizes('Four score and seven.'));
console.log(wordSizes("What's up doc?"));