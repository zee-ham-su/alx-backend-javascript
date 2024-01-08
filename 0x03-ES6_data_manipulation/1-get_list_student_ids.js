export default function getListStudentIds(stdsArray) {
  if (!Array.isArray(stdsArray)) {
    return [];
  }
  return stdsArray.map((std) => std.id);
}
