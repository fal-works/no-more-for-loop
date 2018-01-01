export declare function roundRobinLimited<T>(array: T[], callback: (element: T, otherElement: T) => any, arrayLength: number): void;
/**
 * Executes a provided function once for each pair within the array.
 * @param {Array} array
 * @param {roundRobinCallBack} callback
 */
export declare function roundRobin<T>(array: T[], callback: (element: T, otherElement: T) => any): void;
