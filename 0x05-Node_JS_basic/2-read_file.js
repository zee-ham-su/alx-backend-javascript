const fs = require('fs');

function countStudents(path) {
  try {
    const data = fs.readFileSync(path, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');
    const students = lines.slice(1);
    const totalStudents = students.length;

    console.log(`Total number of students: ${totalStudents}`);

    headers.forEach((field) => {
      const fieldIndex = headers.indexOf(field);
      const fieldData = students.map((student) => student.split(',')[fieldIndex]);
      const uniqueFieldData = [...new Set(fieldData)];
      const numberOfFieldStudents = uniqueFieldData.length;

      console.log(`Number of students in ${field}: ${numberOfFieldStudents}. List: ${uniqueFieldData.join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
