/* https://stepik.org/lesson/1408784/step/3 */

const arr = [5, 2, -6, 9];

/* - - - */

arrcomp([5, 2, -6, 9]);
arrcomp([5, 99, -2, 41, 76, 22, 85]);
arrcomp([5, 2]);

function arrcomp(arr) {
    arr.shift();
    arr.splice(arr.length, 0, 50, 15);
    arr.push(arr.splice(1, 1)[0]);
    arr.splice(5, arr.length);

    console.log(arr);
}

/* - - - */
