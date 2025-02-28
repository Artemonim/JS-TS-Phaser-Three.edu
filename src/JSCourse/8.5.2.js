/* https://stepik.org/lesson/1408795/step/2 */

const printNumberStaircase = (n) => {
  let line = "";
  for (let i = 1; i <= n; i++) {
    line = "";
    for (let j = 0; j < i; j++) {
      line += `${j + i} `;
    }
    console.log(line.trim());
  }
};

printNumberStaircase(Math.round(Math.random() * 10));
