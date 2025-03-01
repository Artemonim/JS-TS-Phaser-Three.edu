/* https://stepik.org/lesson/1408800/step/1 */

function getArr(num) {
  const multiplesOfThree = [];

  for (let i = num; i >= 0; i--) {
    if (!(i % 3)) {
      multiplesOfThree.push(i);
    }
  }

  return multiplesOfThree;
}

console.log(getArr(15)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(17)); // [15, 12, 9, 6, 3, 0]
console.log(getArr(22)); // [21, 18, 15, 12, 9, 6, 3, 0]
