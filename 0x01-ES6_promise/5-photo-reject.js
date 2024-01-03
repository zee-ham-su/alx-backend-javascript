export default function uploadPhoto(fileName) {
  const errorMessage = `$${fileName} cannot be processed`;
  return Promise.reject(new Error(errorMessage));
}
