const express = require('express');
const { readFile } = require('fs').promises;

const app = express();

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    if (!fileName) {
      reject(new Error('Cannot load the database'));
    }

    readFile(fileName, 'utf8')
      .then((data) => {
        const reportParts = [];
        const lines = data.trim().split('\n');
        const studentGroups = {};
        const dbFieldNames = lines[0].split(',');
        const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

        for (const line of lines.slice(1)) {
          const studentRecord = line.split(',');
          const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
          const field = studentRecord[studentRecord.length - 1];

          if (!Object.keys(studentGroups).includes(field)) {
            studentGroups[field] = [];
          }

          const studentEntry = {};
          studentPropNames.forEach((propName, idx) => {
            studentEntry[propName] = studentPropValues[idx];
          });

          studentGroups[field].push(studentEntry);
        }

        const totalStds = Object.values(studentGroups).reduce((prev, cur) => prev + cur.length, 0);
        reportParts.push(`Number of students: ${totalStds}`);

        for (const [field, group] of Object.entries(studentGroups)) {
          reportParts.push(`Number of students in ${field}: ${group.length}. List: ${group.map((student) => student.firstname).join(', ')}`);
        }

        resolve(reportParts.join('\n'));
      })
      .catch(() => {
        reject(new Error('Cannot load the database'));
      });
  });
}

app.get('/', (_, res) => {
  res.send('Hello Holberton School!');
});

app.get('/students', (_, res) => {
  const fileName = 'database.csv';
  countStudents(fileName)
    .then((report) => {
      res.setHeader('Content-Type', 'text/plain');
      res.send(`This is the list of our students\n${report}`);
    })
    .catch((error) => {
      res.status(500).send(`Error: ${error.message}`);
    });
});

app.use((_, res) => {
  res.status(404).send('404 Not Found');
});

app.listen(1245, '127.0.0.1', () => {
  console.log('Server is running and listening on port 1245');
});

module.exports = app;
