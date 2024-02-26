const fs = require('fs');

function countStudents(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

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

      resolve();
    });
  });
}

module.exports = countStudents;
