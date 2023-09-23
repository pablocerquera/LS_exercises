const WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
  'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen',
  'sixteen', 'seventeen', 'eighteen', 'nineteen'];

let wordsNumbers = {};

const makeObject = (key, value) => {
  wordsNumbers[key] = value;
  return wordsNumbers;
};

function getKeyByValue(object, value) {
  for (const key in object) {
    if (object.hasOwnProperty(key) && object[key] === value) {
      return Number(key);
    }
  }
  return null;
}

const alphabeticNumberSort = () => {
  for (let idx = 0; idx < WORDS.length; idx++) {
    makeObject(idx, WORDS[idx]);
  }
  return WORDS.slice().sort().map(num => {
    return getKeyByValue(wordsNumbers, String(num));
  });
};

console.log(alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

function wordSort(num1, num2) {
  if (WORDS[num1] > WORDS[num2]) {
    return 1;
  } else if (WORDS[num1] < WORDS[num2]) {
    return -1;
  } else {
    return 0;
  }
}

function alphabeticNumberSortTwo(array) {
  return [...array].sort(wordSort);
}

console.log(alphabeticNumberSortTwo(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]));
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]