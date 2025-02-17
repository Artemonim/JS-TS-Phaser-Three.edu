const size = undefined;
/* --- */

const small = "маленькая";
const smallPrice = "Маленькая пицца стоит 800 руб.";
const medium = "средняя";
const mediumPrice = "Средняя пицца стоит 1200 руб.";
const large = "большая";
const largePrice = "Большая пицца стоит 1500 руб.";
const errorInput = "Вы не выбрали размер!";
const errorSize = "Такого размера у нас нет!";

if (size != null) {
  const userInput = size.trim().toLowerCase();

  if (userInput === small) {
    console.log(smallPrice);
  } else if (userInput === medium) {
    console.log(mediumPrice);
  } else if (userInput === large) {
    console.log(largePrice);
  } else {
    console.log(errorSize);
  }
} else {
  console.log(errorInput);
}

/* --- */
//console.log(userInput)
