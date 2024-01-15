// Bubble Sort
// Time Complexity: O(n^2)
// Space Complexity: O(1)

const genRandomArray = require("../utils/genRandomArray");
const swap = require("../utils/swap");

/**
 * @param {number[]} arr
 * @return {number[]}
 * @description Sorts an array using bubble sort.
 * @example
 * bubbleSort([1, 2, 3, 4, 5]) // [1, 2, 3, 4, 5]
 **/
const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    let count = 0;

    for (let j = 0; j < arr.length - 1; j++) {
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
