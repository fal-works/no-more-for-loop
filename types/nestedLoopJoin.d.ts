export declare function nestedLoopJoinLimited<T, U>(array: T[], otherArray: U[], callback: (element: T, otherElement: U) => any, arrayLength: number, otherArrayLength: number): void;
/**
 * Joins two arrays and executes a provided function once for each joined pair.
 * @param {Array} array
 * @param {Array} otherArray
 * @param {nestedLoopJoinCallBack} callback
 */
export declare function nestedLoopJoin<T, U>(array: T[], otherArray: U[], callback: (element: T, otherElement: U) => any): void;
