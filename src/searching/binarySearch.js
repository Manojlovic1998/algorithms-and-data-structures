const genRandomArray = require("../utils/genRandomArray");
const bubbleSort = require("../sorting/bubbleSort");

function binarySearch(array, x) {
  // return a Boolean: true if x is in array, and false otherwise
  console.log(array);
  const arrayLength = array.length;

  let rightMostItem = arrayLength - 1;
  let leftMostItem = 0;

  while (rightMostItem >= leftMostItem) {
    const midPoint = Math.floor((leftMostItem + rightMostItem) / 2);

    if (array[midPoint] === x) {
      return true;
    } else if (array[midPoint] > x) {
      rightMostItem = midPoint - 1;
    } else {
      leftMostItem = midPoint + 1;
    }
  }

  return false;
}

var arr = genRandomArray(14);
// console.log(bubbleSort(arr));
// console.log(binarySearch(bubbleSort(arr), 7));

module.exports = { binarySearch };
