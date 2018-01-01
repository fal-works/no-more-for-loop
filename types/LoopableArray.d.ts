/**
 * A class containing an array and several loop methods.
 */
export default class LoopableArray<T> {
    /**
     * Raw array holding elements.
     * @member {Array}
     * @readonly
     */
    readonly array: T[];
    /**
     * Length of the array.
     * Differs from the length of the raw array, which includes also empty slots.
     * @member {number}
     */
    length: number;
    /**
     * @param {number} initialCapacity
     */
    constructor(initialCapacity?: number);
    /**
     * Returns a specific element.
     * It is recommended to check that you are going to specify a valid index number
     * before calling this method.
     * @returns The specified element.
     */
    get(index: number): T;
    /**
     * Returns the last element.
     * It is recommended to check that this array is not empty before calling this method.
     * @returns The last element.
     */
    getLast(): T;
    /**
     * Adds one element to the end of the array and returns the new length of the array.
     * @param {} element - The element to add to the end of the array.
     */
    push(element: T): number;
    /**
     * Adds elements to the end of the array and returns the new length of the array.
     * @param {Array} array - The elements to add to the end of the array.
     */
    pushRawArray(array: T[], arrayLength?: number): number;
    /**
     * Adds all elements from another LoopableArray and returns the new length of the array.
     * @param {LoopableArray} otherLoopableArray
     */
    pushAll(otherLoopableArray: LoopableArray<T>): number;
    /**
     * Removes and returns the last element.
     * It is recommended to check that this array is not empty before calling this method.
     * @returns The last element.
     */
    pop(): T;
    /**
     * Clears the array.
     */
    clear(): void;
    /**
     * @callback loopArrayCallBack
     * @param {} currentValue
     * @param {number} [index]
     * @param {Array} [array]
     */
    /**
     * Executes a provided function once for each array element.
     * @param {loopArrayCallBack} callback
     */
    loop(callback: (currentValue: T, index?: number, array?: T[]) => any): void;
    /**
     * Executes a provided function once for each array element in descending order.
     * @param {loopArrayCallBack} callback
     */
    loopBackwards(callback: (currentValue: T, index?: number, array?: T[]) => any): void;
    /**
     * @callback elementPairCallBack
     * @param {} element
     * @param {} otherElement
     */
    /**
     * Executes a provided function once for each pair within the array.
     * @param {elementPairCallback} callback
     */
    roundRobin(callback: (element: T, otherElement: T) => any): void;
    /**
     * Joins two arrays and executes a provided function once for each joined pair.
     * @param {LoopableArray} otherArray
     * @param {elementPairCallback} callback
     */
    nestedLoopJoin<U>(otherArray: LoopableArray<U>, callback: (element: T, otherElement: U) => any): void;
}
