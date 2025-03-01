/**
 * Перемешивает исходный массив
 *
 * @param {Array} arr
 * @returns {void}
 */
const randomShuffle = (arr) => {
  const baseArray = [...arr];
  arr.length = 0;

  for (const element of baseArray) {
    if (Math.random() > 0.5) {
      arr.push(element);
    } else {
      arr.unshift(element);
    }
  }
};

const myArr = [1, 2, 3, 4, 5];
console.log(myArr);
randomShuffle(myArr);
console.log(myArr);

//*
/* Классический алгоритм Фишера-Йетса
 */
const randomShuffleClassic = (arr) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};

randomShuffleClassic(myArr);
console.log(myArr);
