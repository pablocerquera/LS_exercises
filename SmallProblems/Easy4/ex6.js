function wordSizes(words) {
  let wordArray = words.split(' ');
  let wordCount = {};

  for (let idx = 0; idx < wordArray.length; idx += 1) {
    let wordSize = wordArray[idx].length;
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

console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes(''));

