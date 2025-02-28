/* https://stepik.org/lesson/1408796/step/3 */

/**
 * @param {Array} arr
 * @returns {Boolean}
 */
function isSorted(arr) {
  let sorted = true;
  if (arr?.at(1)) {
    for (let i = 1; i < arr.length; i++) {
      if (arr.at(i - 1) > arr.at(i)) {
        sorted = false;
        break;
      }
    }
  }
  return sorted;
}

console.log(isSorted([1, 2, 2]));
