/* https://stepik.org/lesson/1408070/step/1 */

const num1 = Math.floor(Math.random() * 1000);
const num2 = Math.floor(Math.random() * 1000);

const comparator = (a, b) => (a !== b ? (a > b ? 1 : -1) : 0);

const result = comparator(num1, num2);

console.log(result);
