export default function getStudentIdsSum(stdsArray) {
  return stdsArray.reduce((sum, std) => sum + std.id, 0);
}
