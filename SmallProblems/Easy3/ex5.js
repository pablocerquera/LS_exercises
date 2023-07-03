function triangle(num) {
  num -= 1;
  let star = 1;
  while (num >= 0) {
    console.log(' '.repeat(num) + '*'.repeat(star));
    num -= 1;
    star += 1;
  }
}

triangle(5);
triangle(9);