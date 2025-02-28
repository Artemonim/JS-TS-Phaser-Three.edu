/* https://stepik.org/lesson/1408796/step/2 */

/**
 * @param {Array} arr
 * @returns {String}
 */
const formatArray = (arr) => {
  let line = "";
  if (arr?.at(0)) {
    const separator = " -> ";
    line = `${arr[0]}`;
    for (let i = 1; i < arr.length; i++) {
      line += `${separator}${arr[i]}`;
    }
  }
  return line;
};

console.log(formatArray([5, 8, 9]));
