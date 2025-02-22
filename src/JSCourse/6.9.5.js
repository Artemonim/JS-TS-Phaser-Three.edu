/* https://stepik.org/lesson/1408057/step/5 */

const min = 1000000000000000;
const max = 9999999999999999;
const randomNumber = String(Math.floor(Math.random() * (max - min + 1)) + min);

console.log(randomNumber);
console.log(maskCardNumber(randomNumber));

/* - - - */

function maskCardNumber(cardNumber) {
    return `**** **** **** ${cardNumber.slice(-4)}`;
}
