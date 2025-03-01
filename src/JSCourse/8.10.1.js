/* https://stepik.org/lesson/1410484/step/1 */

//*

/**
 * Description placeholder
 *
 * @param {Array} arr of the past
 * @param {Number} length of the future array
 * @returns {Array} of the future
 */
function fillArrToLength(arr, length) {
  for (let i = arr.length; i < length; i++) {
    arr.push(0);
  }
  return arr;
}

const arr1 = [2, 6, 8];
fillArrToLength(arr1, 5);
console.log(arr1); // [2, 6, 8, 0, 0]

const arr2 = [2, 6, 8, 3, 9];
fillArrToLength(arr2, 4);
console.log(arr2); // [2, 6, 8, 3, 9]
