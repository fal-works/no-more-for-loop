import { loopArrayLimited, loopArrayBackwardsLimited } from './loopArray';
import { roundRobinLimited } from './roundRobin';
import { nestedLoopJoinLimited } from './nestedLoopJoin';

/**
 * A class containing an array and several loop methods.
 */
export default class LoopableArray<T> {
  /**
   * Raw array holding elements.
   * @member {Array}
   * @readonly
   */
  public readonly array: T[];

  /**
   * Length of the array.
   * Differs from the length of the raw array, which includes also empty slots.
   * @member {number}
   */
  public length: number;

  /**
   * @param {number} initialCapacity
   */
  constructor(initialCapacity: number = 256) {
    // tslint:disable-next-line:prefer-array-literal
    this.array = new Array(initialCapacity);
    this.length = 0;
  }

  /**
   * Returns a specific element.
   * It is recommended to check that you are going to specify a valid index number
   * before calling this method.
   * @returns The specified element.
   */
  public get(index: number): T {
    return this.array[index];
  }

  /**
   * Returns the last element.
   * It is recommended to check that this array is not empty before calling this method.
   * @returns The last element.
   */
  public getLast(): T {
    return this.array[this.length - 1];
  }

  /**
   * Adds one element to the end of the array and returns the new length of the array.
   * @param {} element - The element to add to the end of the array.
   */
  public push(element: T): number {
    this.array[this.length] = element;
    this.length += 1;

    return this.length;
  }

  /**
   * Adds elements to the end of the array and returns the new length of the array.
   * @param {Array} array - The elements to add to the end of the array.
   */
  public pushRawArray(array: T[], arrayLength: number = array.length): number {
    for (let i = 0; i < arrayLength; i += 1) {
      this.array[this.length + i] = array[i];
    }

    this.length += arrayLength;

    return this.length;
  }

  /**
   * Adds all elements from another LoopableArray and returns the new length of the array.
   * @param {LoopableArray} otherLoopableArray
   */
  public pushAll(otherLoopableArray: LoopableArray<T>): number {
    return this.pushRawArray(otherLoopableArray.array, otherLoopableArray.length);
  }

  /**
   * Removes and returns the last element.
   * It is recommended to check that this array is not empty before calling this method.
   * @returns The last element.
   */
  public pop(): T {
    this.length -= 1;

    return this.array[this.length];
  }

  /**
   * Clears the array.
   */
  public clear(): void {
    this.length = 0;
  }

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
  public loop(callback: (currentValue: T, index?: number, array?: T[]) => any) {
    loopArrayLimited(this.array, callback, this.length);
  }

  /**
   * Executes a provided function once for each array element in descending order.
   * @param {loopArrayCallBack} callback
   */
  public loopBackwards(callback: (currentValue: T, index?: number, array?: T[]) => any) {
    loopArrayBackwardsLimited(this.array, callback, this.length);
  }

  /**
   * @callback elementPairCallBack
   * @param {} element
   * @param {} otherElement
   */

  /**
   * Executes a provided function once for each pair within the array.
   * @param {elementPairCallback} callback
   */
  public roundRobin(callback: (element: T, otherElement: T) => any) {
    roundRobinLimited(this.array, callback, this.length);
  }

  /**
   * Joins two arrays and executes a provided function once for each joined pair.
   * @param {LoopableArray} otherArray
   * @param {elementPairCallback} callback
   */
  public nestedLoopJoin<U>(
    otherArray: LoopableArray<U>, callback: (element: T, otherElement: U) => any,
  ) {
    nestedLoopJoinLimited(
      this.array, otherArray.array, callback, this.length, otherArray.length,
    );
  }
}
