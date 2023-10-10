/*
problem:
  upper, lower and neither, ratio out of string total
  whitespace counts as neither
  will never be an empty string

data:
  string
  object

algo:
  interate through string

*/

function letterPercentages(string) {
  let lowerArray = string.match(/[a-z]/g) || [];
  let upperArray = string.match(/[A-Z]/g) || [];
  let neitherArray = string.match(/[^a-z]/ig) || [];

  let obj = {
    lowercase: ((lowerArray.length / string.length) * 100).toFixed(2),
    uppercase: ((upperArray.length / string.length) * 100).toFixed(2),
    neither: ((neitherArray.length / string.length) * 100).toFixed(2)
  };

  console.log(obj);
}


letterPercentages('abCdef 123');
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

letterPercentages('AbCd +Ef');
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

letterPercentages('123');
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }