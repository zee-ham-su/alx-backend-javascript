const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

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

app.get('/', (request, response) => {
  response.send('Hello Holberton School!');
});

app.get('/students', (request, response) => {
  countStudents(process.argv[2].toString())
    .then((output) => {
      response.send(['This is the list of our students', output].join('\n'));
    })
    .catch(() => {
      response.send('This is the list of our students\nCannot load the database');
    });
});


app.listen(1245, () => {
  console.log(`Server is running and listening on port 1245`);
});

module.exports = app;
