/* https://stepik.org/lesson/1408793/step/2 */

const arr1 = [2, 5, -3, -3, 10];
const arr2 = [2, 5, 5, -3, 10];

//* my variant

let comparing = true;

if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        if (arr1.at(i) !== arr2.at(i)) {
            comparing = false;
            break;
        }
    }
} else {
    comparing = false;
}

console.log(comparing);

//* best from stepic

console.log(arr1.toString() === arr2.toString());
