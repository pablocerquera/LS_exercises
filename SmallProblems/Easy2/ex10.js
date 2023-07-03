const rl = require('readline-sync');

console.log("What is your age? ");
let startAge = rl.question();

console.log("At what age would you like to retire? ");
let retireAge = rl.question();

let difference = Number(retireAge) - Number(startAge);

let retireYear = difference + 2023;

console.log(`It's 2023. You will retire in ${retireYear}.
You have only ${difference} years of work to go!`);