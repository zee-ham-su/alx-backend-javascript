const fs = require('fs');

function countStudents(fileName) {
  return new Promise((resolve, reject) => {
    fs.readFile(fileName, 'utf8', (err, data) => {
      if (err) {
        reject(new Error('Cannot load the database'));
        return;
      }

      const students = {};
      const fields = {};
      let totalStudents = 0;

      const lines = data.split('\n').filter((line) => line.trim() !== '');

      lines.slice(1).forEach((line) => {
        const studentData = line.split(',');
        const fieldName = studentData[3];

        if (!students[fieldName]) {
          students[fieldName] = [];
          fields[fieldName] = 0;
        }

        students[fieldName].push(studentData[0]);
        fields[fieldName] += 1;
        totalStudents += 1;
      });

      console.log(`Number of students: ${totalStudents}`);

      Object.entries(fields).forEach(([field, count]) => {
        console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
      });

      resolve();
    });
  });
}

module.exports = countStudents;
