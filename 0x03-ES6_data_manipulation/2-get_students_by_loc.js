export default function getStudentsByLocation(stdsArray, city) {
  return stdsArray.filter((std) => std.location === city);
}
