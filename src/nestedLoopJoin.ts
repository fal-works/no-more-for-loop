export function nestedLoopJoinLimited<T, U>(
  array: T[],
  otherArray: U[],
  callback: (element: T, otherElement: U) => any,
  arrayLength: number,
  otherArrayLength: number,
): void {
  for (let i = 0; i < arrayLength; i += 1) {
    for (let k = 0; k < otherArrayLength; k += 1) {
      callback(array[i], otherArray[k]);
    }
  }
}

/**
 * Joins two arrays and executes a provided function once for each joined pair.
 * @param {Array} array
 * @param {Array} otherArray
 * @param {nestedLoopJoinCallBack} callback
 */
export function nestedLoopJoin<T, U>(
  array: T[],
  otherArray: U[],
  callback: (element: T, otherElement: U) => any,
): void {
  nestedLoopJoinLimited(array, otherArray, callback, array.length, otherArray.length);
}

/**
 * @callback nestedLoopJoinCallBack
 * @param {} element
 * @param {} otherElement
 */
