const express = require('express');
const { readFile } = require('fs');

const app = express();

function countStudents(fileName, callback) {
  const students = {};
  const fields = {};
  let studentCount = 0;

  readFile(fileName, 'utf8', (err, data) => {
    if (err) {
      callback(err, null);
      return;
    }

    let output = '';
    const lines = data.split('\n');
    lines.forEach((line) => {
      if (line) {
        studentCount += 1;
        const field = line.split(',');
        if (students[field[3]]) {
          students[field[3]].push(field[0]);
        } else {
          students[field[3]] = [field[0]];
          fields[field[3]] = 0;
        }
        fields[field[3]] += 1;
      }
    });
    const l = studentCount - 1;
    output += `Number of students: ${l}\n`;
    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        output += `Number of students in ${key}: ${value}. List: ${students[key].join(', ')}\n`;
      }
    }
    callback(null, output);
  });
}

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (req, res) => {
  countStudents(process.argv[2].toString(), (err, output) => {
    if (err) {
      res.send('This is the list of our students\nCannot load the database');
    } else {
      res.send(['This is the list of our students', output].join('\n'));
    }
  });
});

app.listen(1245, () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
