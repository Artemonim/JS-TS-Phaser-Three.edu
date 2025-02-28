/* https://stepik.org/lesson/1408798/step/2 */

const arr = [[5, 32, 15, 9], [83, -22, 7], [], [81, 10, 0]];

//*

let sum = 0;

for (const element1 of arr) {
  for (const element2 of element1) {
    if (element2 > 0) {
      sum += element2;
    }
  }
}

console.log(sum);
