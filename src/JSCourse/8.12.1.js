function printSquare(lines) {
  if (lines < 2 || lines % 1) {
    return undefined; //console.log("Некорректный размер");
  }

  const borderSymbol = "#";
  const fillSymbol = " ";
  const square = [];

  const spacesLine = [borderSymbol];
  for (let j = 0; j < lines - 2; j++) {
    spacesLine.push(fillSymbol);
  }
  spacesLine.push(borderSymbol);

  for (let i = 0; i < lines - 2; i++) {
    square.push(spacesLine);
  }

  const tempArr = [];
  for (let i = 0; i < lines; i++) {
    tempArr.push(borderSymbol);
  }
  square.push(tempArr);
  square.unshift(tempArr);

  console.log(square.join("\n").split(",").join(" "));
}

/*
# # # # #
#       #
#       #
#       #
# # # # #
*/
printSquare(6);
