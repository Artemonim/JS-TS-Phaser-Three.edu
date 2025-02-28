/* https://stepik.org/lesson/1408792/step/3 */

const initialCount = 5;
startRocketCountdown(initialCount);

/* - - - */

function startRocketCountdown(initialCount) {
    let i = initialCount;
    while (i >= 0) {
        console.log(i--);
    }
    console.log("Старт!");
}
