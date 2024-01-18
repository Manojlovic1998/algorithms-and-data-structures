// Note: Generates a random array of numbers.
// Date: 12/24/2023

/**
 * @param {number} length
 * @param {number} max
 * @return {number[]}
 * @description Generates a random array of numbers.
 * @example
 * genRandomArray(5, 10) // [ 1, 5, 3, 7, 9 ]
 */
const genRandomArray = (length, max) => {
  const arr = [];
  if (!max) max = 10;
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * max));
  }
  return arr;
};

module.exports = genRandomArray;
