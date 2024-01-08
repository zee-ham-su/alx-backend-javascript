/* eslint-disable no-param-reassign */
export default function updateUniqueItems(inputMap) {
  if (inputMap instanceof Map) {
    const updatedMap = new Map();

    for (const [key, value] of inputMap) {
      const updatedValue = value === 1 ? 100 : value;
      updatedMap.set(key, updatedValue);
    }

    return updatedMap;
  }

  throw new Error('Cannot process');
}
