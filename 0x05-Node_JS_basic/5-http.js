const http = require('http');
const { readDatabase } = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    res.statusCode = 200;
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    readDatabase(process.argv[2], (error, data) => {
      if (error) {
        res.statusCode = 500;
        res.end('Cannot load the database\n');
      } else {
        res.statusCode = 200;
        res.end(`This is the list of our students\n${data}`);
      }
    });
  } else {
    res.statusCode = 404;
    res.end('Not Found\n');
  }
});

app.listen(1245);

module.exports = app;
