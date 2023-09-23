function mathSwitch(element, stack, register) {
  let topOfStack = stack.pop();
  switch (element) {
    case 'ADD':
      return register + topOfStack;
    case 'SUB':
      return register - topOfStack;
    case 'MULT':
      return register * topOfStack;
    case 'DIV':
      return Math.floor(register / topOfStack);
    case 'REMAINDER':
      return Math.floor(register % topOfStack);
  }
  return null;
}

function pushPopSwitch(element, stack, register) {
  switch (element) {
    case 'PUSH':
      stack.push(register);
      return register;
    case 'POP':
      return stack.pop();
  }
  return null;
}

function minilang(string) {
  let stringArray = string.split(' ');
  let stack = [];
  let register = 0;
  for (let idx = 0; idx < stringArray.length; idx++) {
    let element = stringArray[idx];
    if (!isNaN(Number(element))) {
      register = Number(element);
      continue;
    }
    if (element === 'PRINT') {
      console.log(register);
      continue;
    }
    if (['PUSH', 'POP'].includes(element)) register = pushPopSwitch(element, stack, register);
    if (['ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER'].includes(element)) register = mathSwitch(element, stack, register);
  }
}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH SUB');
// (nothing is printed because the `program` argument has no `PRINT` commands)