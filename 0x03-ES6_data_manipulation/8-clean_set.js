export default function cleanSet(set, string) {
  if (!string || string.length === 0) {
    return '';
  }

  return [...set]
    .filter((str) => str && str.startsWith(string))
    .map((str) => str.substring(string.length))
    .join('-');
}
