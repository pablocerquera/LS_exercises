function century(year) {
  let century = Math.ceil(year / 100);
  century = century.toString();
  let number = Number(century.slice(-2));
  if (number > 3 && number < 21) {
    console.log(century + "th");
  } else if (number % 10 === 3) {
    console.log(century + "rd");
  } else if (number % 10 === 2) {
    console.log(century + "nd");
  } else if (Number(century.slice(-1)) === 1) {
    console.log(century + "st");
  } else {
    console.log(century + "th");
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"
century(3093);
century(2789);