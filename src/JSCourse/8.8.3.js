/* https://stepik.org/lesson/1408798/step/3 */

const x = Math.round(Math.random() * 10);

//*

/**
 * @param {Number} x
 * @returns {Array[][]}
 */
function generateChessBoard(x) {
  const blackSquare = "#";
  const whiteSquare = ".";
  const board = [];

  for (let i = 1; i <= x; i++) {
    const line = [];

    for (let j = i % 2; j < x + (i % 2); j++) {
      line.push(`${j % 2 ? blackSquare : whiteSquare}`);
    }

    board.push(line);
  }

  return board;
}

//*

console.log(generateChessBoard(x).join(`\n`).split(`,`).join(` `));
