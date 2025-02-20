/* https://stepik.org/lesson/1408002/step/1 */

const minNumber = 1;
const maxNumber = 5;
const riddle =
    Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;

const userInput = prompt(`Угадайте число от ${minNumber} до ${maxNumber}`);
const guess = userInput
    ? isNaN(parseInt(userInput))
        ? 0
        : parseInt(userInput)
    : 0;

if (guess === riddle) {
    alert(`Верно, я загадал число ${riddle}.`);
} else if (guess === 0) {
    alert(
        `Необходимо было ввести целое число от ${minNumber} до ${maxNumber} включительно.`
    );
} else {
    alert(`Нет, не ${guess}, я загадал число ${riddle}.`);
}
