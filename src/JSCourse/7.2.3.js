/* https://stepik.org/lesson/1408783/step/3 */

const arr = [35, 9, -25, 0];

/* - - - */

console.log(arr.at(-2) !== undefined ? arr.at(-2) : null);

/* - - - */

console.log(arr.at(-2) ?? null);
