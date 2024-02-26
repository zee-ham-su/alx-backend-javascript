const readlineInterface = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readlineInterface.question('Welcome to Holberton School, what is your name?\n', (name) => {
  console.log(`Your name is: ${name}`);
  readlineInterface.close();
});

process.on('exit', () => {
  console.log('This important software is now closing');
});
