const rl = require('readline-sync');

function prompt(msg) {
  console.log(msg);
}

function exclaim(answer) {
  if (answer.includes('!')) {
    prompt(`HELLO ${answer.toUpperCase()}! WHY ARE WE YELLING?!`);
  } else {
    prompt(`hello ${answer}.`);
  }
}

prompt('What is your name? ');
let user = rl.question();

exclaim(user);
