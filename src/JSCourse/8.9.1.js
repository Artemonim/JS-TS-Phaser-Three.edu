/* @param {Array} arr
/* @returns {Array}
*/
const arrayReverse = (arr) => {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr.at(i));
  }
  return reversed;
};

// Должны получить массив: [105, 104, 103, 102, 101]
console.log(arrayReverse([101, 102, 103, 104, 105]));
