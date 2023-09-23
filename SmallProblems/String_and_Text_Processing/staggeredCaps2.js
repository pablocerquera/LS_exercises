function staggeredCase(str) {
  let inc = 0;
  return str.split('').map((char) => {
    if (char >= 'a' || char >= 'A') {
      inc += 1;
    }
    return inc % 2 === 1 ? char.toUpperCase() : char.toLowerCase();
  }).join('');
}


console.log(staggeredCase("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs"
);