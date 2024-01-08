const weakMap = new WeakMap();

export function queryAPI(endpoint) {
  if (!weakMap.has(endpoint)) {
    weakMap.set(endpoint, 1);
  } else {
    const usageCount = weakMap.get(endpoint) + 1;
    weakMap.set(endpoint, usageCount);

    if (usageCount >= 5) {
      throw new Error('Endpoint load is high');
    }
  }
}

export { weakMap };
