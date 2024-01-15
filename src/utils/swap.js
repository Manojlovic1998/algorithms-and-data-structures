/**
 * @param {number[]} arr
 * @param {number} i
 * @param {number} j
 * @return {number[]}
 * @description Swaps two elements in an array.
 * @example
 * swap([1, 2, 3, 4, 5], 1, 3) // [1, 4, 3, 2, 5]
 */
const swap = (arr, i, j) => {
  const x = arr[j];
  arr[j] = arr[i];
  arr[i] = x;

  return arr;
};

module.exports = swap;
