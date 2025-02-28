/* https://stepik.org/lesson/1408798/step/4 */

const input = {
  maze: [
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "0", "1"],
    ["E", "0", "0", "0", "1"],
    ["1", "0", "0", "0", "S"],
    ["1", "1", "1", "1", "1"],
  ],
  x: 3,
  y: 4,
};

//*

/**
 * Вы путешествуете по лабиринту, представленному в виде двумерного массива.
 * Ваша задача — написать рекурсивную функцию findExit,
 * которая найдет путь от начальной точки ("S") до выхода ("E").
 * 1 - стена, 0 - путь
 *
 * @param {Array[][]} maze - The maze represented as a 2D array.
 * @param {Number} x - The starting x-coordinate.
 * @param {Number} y - The starting y-coordinate.
 * @returns {Array[][] | null} - The route from start to exit as an array of coordinates, or null if no route is found.
 */
function findExit(maze, x, y) {
  const route = [];
  let noRoute = true;
  const way = "0";
  //const wall = "1";
  //const start = "S"
  const exit = "E";
  const checked = "-";
  const trueWay = "X";
  const gamemode = true; // ! debug

  checkNextStep(x, y);

  function checkNextStep(x, y) {
    mazeView();
    switch (trueWay) {
      case checkUp(x, y):
        return trueWay;
      case checkDown(x, y):
        return trueWay;
      case checkLeft(x, y):
        return trueWay;
      case checkRight(x, y):
        return trueWay;
      default:
        shout(`I'm lost. Let's go back.`);
    }
  }

  function checkOut(x, y) {
    if (maze[x]?.[y] !== undefined) {
      switch (maze[x][y]) {
        case way:
          maze[x][y] = checked;
          if (checkNextStep(x, y) === trueWay) {
            maze[x][y] = trueWay;
            route.unshift([x, y]);
            return trueWay;
          } else {
            return checked;
          }
        case exit:
          noRoute = false;
          route.unshift([x, y]);
          //maze[x][y] = trueWay;
          return trueWay;
        default: // start, wall, checked
          return checked;
      }
    }
  }

  function checkUp(X, Y) {
    shout(`let's check UP...`);
    if (checkOut(X - 1, Y) === trueWay) {
      shout(`I've found da way! ^^`);
      return trueWay;
    }
  }

  function checkDown(X, Y) {
    shout(`let's check DOWN...`);
    if (checkOut(X + 1, Y) === trueWay) {
      shout(`I've found da way! \\/`);
      return trueWay;
    }
  }

  function checkLeft(X, Y) {
    shout(`let's check LEFT...`);
    if (checkOut(X, Y - 1) === trueWay) {
      shout(`I've found da way! <-`);
      return trueWay;
    }
  }

  function checkRight(X, Y) {
    shout(`let's check RIGHT...`);
    if (checkOut(X, Y + 1) === trueWay) {
      shout(`I've found da way! ->`);
      return trueWay;
    }
  }

  function mazeView() {
    if (gamemode) {
      console.log(`======`);
      console.log(maze.join('\n').split(',').join(' '));
    }
  }

  function shout(line) {
    if (gamemode) {
      console.log(line);
    }
  }

  mazeView();
  if (noRoute) {
    return null;
  } else {
    route.unshift([x, y]);
    return route;
  }
}

//*

console.log(`\n${findExit(input.maze, input.x, input.y)}`);
