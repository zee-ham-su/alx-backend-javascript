const fs = require('fs');

function countStudents(fileName) {
  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    const students = {};
    const fields = {};
    let totalStudents = 0;

    for (const line of lines) {
      if (line) {
        const [name, , , field] = line.split(',');

        students[field] = students[field] || [];
        students[field].push(name);

        fields[field] = (fields[field] || 0) + 1;
        totalStudents += 1;
      }
    }

    console.log(`Number of students: ${totalStudents}`);

    for (const [key, value] of Object.entries(fields)) {
      if (key !== 'field') {
        console.log(`Number of students in ${key}: ${value}. List: ${students[key].join(', ')}`);
      }
    }
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
