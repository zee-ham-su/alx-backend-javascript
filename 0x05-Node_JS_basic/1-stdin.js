process.stdout.write('Welcome to Holberton School, what is your name?\n');

process.stdin.setEncoding('utf8');

process.stdin.on('data', (data) => {
  const input = data.trim();
  if (input.length === 0) {
    process.stderr.write('No input received. Please provide your name.\n');
  } else {
    process.stdout.write(`Your name is: ${input}\n`);
  }
  process.exit();
});

process.stdin.on('end', () => {
  process.stdout.write('No more data received.\n');
});
