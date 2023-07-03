function centerOf(string) {
  if (string.length % 2 === 0) {
    let middle = string.length / 2;
    console.log(string.slice(middle - 1, middle + 1));
  } else {
    let middle = string.length / 2;
    console.log(string.slice(middle, middle + 1));
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"