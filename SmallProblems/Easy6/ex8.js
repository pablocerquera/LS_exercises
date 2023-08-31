function reverseWords(string) {
  let words = string.split('').reverse().join('');

  return words.split(' ').reverse().join(' ');
}
console.log(reverseWords('Professional'));             // "lanoisseforP"
console.log(reverseWords('Walk around the block'));    // "Walk dnuora the kcolb"
console.log(reverseWords('Launch School'));            // "hcnuaL loohcS"