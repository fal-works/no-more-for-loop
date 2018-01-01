export function loopArrayLimited<T>(
  array: T[],
  callback: (currentValue: T, index?: number, array?: T[]) => any,
  arrayLength: number,
) {
  let i = 0;

  while (i < arrayLength) {
    callback(array[i], i, array);
    i += 1;
  }
}

/**
 * Executes a provided function once for each array element.
 * @param {Array} array
 * @param {loopArrayCallBack} callback
 */
export function loopArray<T>(
  array: T[],
  callback: (currentValue: T, index?: number, array?: T[]) => any,
) {
  loopArrayLimited(array, callback, array.length);
}

export function loopArrayBackwardsLimited<T>(
  array: T[],
  callback: (currentValue: T, index?: number, array?: T[]) => any,
  arrayLength: number,
) {
  // tslint:disable-next-line:no-parameter-reassignment no-increment-decrement
  while (arrayLength--) {
    callback(array[arrayLength], arrayLength, array);
  }
}

/**
 * Executes a provided function once for each array element in descending order.
 * @param {Array} array
 * @param {loopArrayCallback} callback
 */
export function loopArrayBackwards<T>(
  array: T[],
  callback: (currentValue: T, index?: number, array?: T[]) => any,
) {
  loopArrayBackwardsLimited(array, callback, array.length);
}

/**
 * @callback loopArrayCallBack
 * @param {} currentValue
 * @param {number} [index]
 * @param {Array} [array]
 */
