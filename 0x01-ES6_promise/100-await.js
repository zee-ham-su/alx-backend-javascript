import { uploadPhoto, createUser } from './utils';

export default async function asyncUploadUser() {
  try {
    const photoPromise = await uploadPhoto();
    const userPromise = await createUser();

    return ({ photo: photoPromise, user: userPromise });
  } catch (error) {
    return ({ photo: null, user: null });
  }
}
