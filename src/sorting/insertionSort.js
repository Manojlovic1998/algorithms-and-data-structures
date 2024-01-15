// Insertion sort implementation in JavaScript.
// Time complexity: O(n^2)
// Space complexity: O(1)

const genRandomArray = require("../utils/genRandomArray");

/**
 * @param {number[]} array
 * @param {number} index1
 * @param {number} index2
 * @return {number[]}
 * @description Shifts an element in an array to another position.
 * @example
 * shift([1, 2, 3, 4, 5], 1, 3) // [1, 4, 2, 3, 5]
 */
const shift = (array, index1, index2) => {
  if (index1 < index2) {
    return array;
  }

  var x = array[index1];
  for (var i = index1; i >= index2 + 1; i--) {
    array[i] = array[i - 1];
  }
  array[index2] = x;
  return array;
};

/**
 * @param {number[]} array
 * @return {number[]}
 * @description Sorts an array using insertion sort.
 * @example
 * insertionSort([1, 3, 2, 5, 4]) // [1, 2, 3, 4, 5]
 */
const insertionSort = (array) => {
  for (var i = 1; i < array.length; i++) {
    let j = i;
    while (array[i] < array[j - 1] && j > 0) {
      j--;
    }
    shift(array, i, j);
  }
  return array;
};

var arr = genRandomArray(12, 30);
console.log("Initial arr:", arr);

const sortedArr = insertionSort(arr);

console.log("Sorted arr:", sortedArr);

module.exports = {
  genRandomArray: genRandomArray,
  shift: shift,
  insertionSort: insertionSort,
};
