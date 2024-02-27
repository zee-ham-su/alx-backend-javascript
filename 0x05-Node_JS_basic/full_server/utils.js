import { readFile } from 'fs';

const readDatabase = (filePath) => new Promise((resolve, reject) => {
  readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      reject(err);
    } else {
      const students = {};
      const lines = data.split('\n').filter((line) => line.trim() !== '');
      lines.forEach((line) => {
        const [firstName, , , field] = line.split(',');
        if (!students[field]) {
          students[field] = [];
        }
        students[field].push(firstName);
      });
      resolve(students);
    }
  });
});

module.exports = readDatabase;
