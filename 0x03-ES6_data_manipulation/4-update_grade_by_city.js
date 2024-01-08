export default function updateStudentGradeByCity(stdsArray, city, newGrades) {
  return stdsArray
    .filter((std) => std.location === city)
    .map((student) => {
      const gradeObject = newGrades.find((grade) => grade.studentId === student.id);
      const grade = gradeObject ? gradeObject.grade : 'N/A';

      return { ...student, grade };
    });
}
