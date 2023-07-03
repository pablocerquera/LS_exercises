function getGrade(num1, num2, num3) {
  let average = (num1 + num2 + num3) / 3;
  switch (true) {
    case average > 89 :
      console.log("A");
      break;
    case average > 79 :
      console.log('B');
      break;
    case average > 69 :
      console.log('C');
      break;
    case average > 59 :
      console.log('D');
      break;
    case average < 60 :
      console.log('F');
      break;
  }
}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"