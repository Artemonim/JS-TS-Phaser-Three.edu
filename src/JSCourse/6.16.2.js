/* https://stepik.org/lesson/1408066/step/2 */

const num = 12345;
console.log(sumOfDigits(num));

/* - - - */

function sumOfDigits(number) {
    return number >= 10
        ? (number % 10) + Math.floor(sumOfDigits(number / 10))
        : number;
}
