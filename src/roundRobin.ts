export function roundRobinLimited<T>(
  array: T[],
  callback: (element: T, otherElement: T) => any,
  arrayLength: number,
) {
  for (let i = 0, len = arrayLength - 1; i < len; i += 1) {
    for (let k = i + 1; k < arrayLength; k += 1) {
      callback(array[i], array[k]);
    }
  }
}

/**
 * Executes a provided function once for each pair within the array.
 * @param {Array} array
 * @param {roundRobinCallBack} callback
 */
export function roundRobin<T>(
  array: T[],
  callback: (element: T, otherElement: T) => any,
): void {
  roundRobinLimited(array, callback, array.length);
}

/**
 * @callback roundRobinCallBack
 * @param {} element
 * @param {} otherElement
 */
