const fs = require('fs');

function countStudents(fileName) {
  const students = {};
  const fields = {};
  let totalStudents = 0;

  try {
    const data = fs.readFileSync(fileName, 'utf8');
    const lines = data.split('\n').filter((line) => line.trim() !== '');
    const headers = lines[0].split(',');

    lines.slice(1).forEach((line) => {
      const studentData = line.split(',');
      const fieldName = studentData[3];

      if (!students[fieldName]) {
        students[fieldName] = [];
        fields[fieldName] = 0;
      }

      students[fieldName].push(studentData[0]);
      fields[fieldName]++;
      totalStudents++;
    });

    console.log(`Number of students: ${totalStudents}`);

    Object.entries(fields).forEach(([field, count]) => {
      console.log(`Number of students in ${field}: ${count}. List: ${students[field].join(', ')}`);
    });
  } catch (error) {
    throw new Error('Cannot load the database');
  }
}

module.exports = countStudents;
