const rl = require('readline-sync');

function prompt(msg) {
  console.log(`=> ${msg}`);
}
prompt("Enter a noun: ");
let noun = rl.question();

prompt("Enter a verb: ");
let verb = rl.question();

prompt("Enter an adjective: ");
let adjective = rl.question();

prompt("Enter an adverb: ");
let adverb = rl.question();

prompt(`Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!
The ${adjective} ${noun} walks ${adverb} over the lazy dog.
The ${noun} ${adverb} ${verb} up ${adjective} Joe's turtle.`);

