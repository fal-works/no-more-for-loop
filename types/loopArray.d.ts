export declare function loopArrayLimited<T>(array: T[], callback: (currentValue: T, index?: number, array?: T[]) => any, arrayLength: number): void;
/**
 * Executes a provided function once for each array element.
 * @param {Array} array
 * @param {loopArrayCallBack} callback
 */
export declare function loopArray<T>(array: T[], callback: (currentValue: T, index?: number, array?: T[]) => any): void;
export declare function loopArrayBackwardsLimited<T>(array: T[], callback: (currentValue: T, index?: number, array?: T[]) => any, arrayLength: number): void;
/**
 * Executes a provided function once for each array element in descending order.
 * @param {Array} array
 * @param {loopArrayCallback} callback
 */
export declare function loopArrayBackwards<T>(array: T[], callback: (currentValue: T, index?: number, array?: T[]) => any): void;
