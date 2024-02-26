const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let length = 0;

  try {
    const fileContents = fs.readFileSync(fileName, 'utf-8');
    const lines = fileContents.trim().split('\n');

    for (const line of lines) {
      if (line) {
        length += 1; // Changed ++ operator to += 1
        const [name, , , field] = line.split(',');
        students[field] = students[field] || [];
        students[field].push(name);
        fields[field] = (fields[field] || 0) + 1;
      }
    }

    console.log(`Number of students: ${length}`);
    for (const field in fields) {
      if (field !== 'field') {
        console.log(`Number of students in ${field}: ${fields[field]}. List: ${students[field].join(', ')}`);
      }
    }
  } catch (error) {
    throw Error('Cannot load the database');
  }
}

module.exports = countStudents;
