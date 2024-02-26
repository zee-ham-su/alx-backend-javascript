const http = require('http');
const fs = require('fs');

function displayStudents(res, databasePath) {
  try {
    const data = fs.readFileSync(databasePath, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');
    const students = lines.slice(1);

    res.write('This is the list of our students:\n');

    headers.forEach((header) => {
      const fieldIndex = headers.indexOf(header);
      const fieldStudents = students.map((student) => student.split(',')[fieldIndex]);
      const uniqueFieldStudents = [...new Set(fieldStudents)];
      res.write(`Number of students in ${header}: ${uniqueFieldStudents.length}. List: ${uniqueFieldStudents.join(', ')}\n`);
    });

    res.end();
  } catch (error) {
    res.end('Cannot load the database\n');
  }
}

const app = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });

  if (req.url === '/') {
    res.end('Hello Holberton School!\n');
  } else if (req.url === '/students') {
    const databasePath = 'database.csv';
    displayStudents(res, databasePath);
  } else {
    res.end('404 Not Found\n');
  }
});

app.listen(1245, () => {
  console.log('Server is running on port 1245');
});

module.exports = app;
