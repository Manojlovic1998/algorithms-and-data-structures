// Bubble Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const genRandomArray = require("../utils/genRandomArray");

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

/**
 * @param {number[]} arr
 * @return {number[]}
 * @description Sorts an array using bubble sort.
 * @example
 * bubbleSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
 **/
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 2; i++) {
    let count = 0;

    for (let j = 0; j < arr.length - 2; j++) {
      if (arr[j + 1] < arr[j]) {
        swap(arr, j, j + 1);
        count++;
      }
    }
    if (count === 0) break;
  }
};

const randomArr = genRandomArray(10, 100);
console.log("Initial arr:", randomArr, "\n");

bubbleSort(randomArr);
console.log("Sorted arr:", randomArr);
