const http = require('http');
const { readFile } = require('fs').promises;

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    readFile(fileName, 'utf8')
      .then((data) => {
        const students = {};
        const fields = {};
        let studentCount = 0;

        const lines = data.split('\n').filter((line) => line.trim() !== '');
        lines.forEach((line) => {
          const studentData = line.split(',');
          const fieldName = studentData[3];

          if (!students[fieldName]) {
            students[fieldName] = [];
            fields[fieldName] = 0;
          }

          students[fieldName].push(studentData[0]);
          fields[fieldName] += 1;
          studentCount += 1;
        });

        const l = studentCount - 1;
        let output = `Number of students: ${l}\n`;
        for (const [key, value] of Object.entries(fields)) {
          if (key !== 'field') {
            output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
          }
        }
        resolve(output);
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

const app = http.createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader('Content-Type', 'text/plain');
  if (request.url === '/') {
    response.write('Hello Holberton School!');
    response.end();
  }
  if (request.url === '/students') {
    response.write('This is the list of our students\n');
    countStudents(process.argv[2]).then((output) => {
      response.end(output);
    }).catch(() => {
      response.statusCode = 404;
      response.end('Cannot load the database');
    });
  }
});

app.listen(1245, '127.0.0.1', () => {
});

module.exports = app;
