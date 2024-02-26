const interface = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

interface.on('line', (input) => {
    console.log(`Your name is: ${input}`);
});

interface.on('close', () => {
    console.log('This important software is now closing');
});
