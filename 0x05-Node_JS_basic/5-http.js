const http = require('http');
const countStudents = require('./3-read_file_async');

const app = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  if (req.url === '/') {
    res.end('Hello Holberton School!');
  }
  if (req.url === '/students') {
    countStudents(process.argv[2]).then((data) => {
      res.write('This is the list of our students\n');
      res.write(`Number of students: ${data.students.length}\n`);
      res.write(`Number of students in CS: ${data.count.CS}. List: ${data.csStudents.join(', ')}\n`);
      res.write(`Number of students in SWE: ${data.count.SWE}. List: ${data.sweStudents.join(', ')}`);
      res.end();
    }).catch((err) => res.end(err.message));
  }
}).listen(1245);

module.exports = app;
