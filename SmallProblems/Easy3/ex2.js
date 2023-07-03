function logInBox(string) {
  let boxLength = string.length;
  let firstVertLines = '|' + ' '.repeat(boxLength) + '  |' + '\n\n| ';
  let lastVertLines = '|\n\n|' + ' '.repeat(boxLength) + '  |';
  let firstHorLines = '+-' + '-'.repeat(boxLength) + '-+';
  let lastHorLines = '\n+-' + '-'.repeat(boxLength) + '-+';
  let text = string;

  console.log(firstHorLines + '\n' + firstVertLines + text + ' ' + lastVertLines + lastHorLines);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('does this work?');