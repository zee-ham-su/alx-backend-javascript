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

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  const fileName = 'database.csv';
  countStudents(fileName)
    .then((output) => {
      res.send(`This is the list of our students\n${output}`);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(1245, '127.0.0.1', () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
