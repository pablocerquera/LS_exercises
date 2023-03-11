const rl = require('readline-sync');


let bill = Number(rl.question(console.log("What is the bill?")));

let percent = Number(rl.question(console.log("What is the tip percentage?")));
let tip = (percent / 100) * bill;
let total = bill + tip;
console.log("\n");
console.log(`The tip is $${tip.toFixed(2)}`);
console.log(`The total is $${total.toFixed(2)}`);
