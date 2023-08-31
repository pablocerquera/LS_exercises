const CONS = ['b','c','d','f','g','h','j','k','l','m','n','p','q','r','s','t','v','w','x','y'];

function doubleConsonants(word) {
  return word.split('').map(char => {
    if (CONS.includes(char)) {
      return char + char;
    }
    return char;
  }).join('');
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""