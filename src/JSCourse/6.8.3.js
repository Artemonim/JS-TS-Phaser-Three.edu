/* https://stepik.org/lesson/1408056/step/3 */

const testInput = {
    totalShots: 20,
    claimedDrankShots: 12,
    brokenShots: 2,
    spilledShots: 1,
};

countDrinkingResults(
    testInput.totalShots,
    testInput.claimedDrankShots,
    testInput.brokenShots,
    testInput.spilledShots
);

function countDrinkingResults(
    totalShots,
    claimedDrankShots,
    brokenShots,
    spilledShots
) {
    const recycledShots = claimedDrankShots + brokenShots + spilledShots;

    if (totalShots - recycledShots < 0) {
        console.log("Игорь явно вас обманывает!");
    } else {
        console.log(`Количество разбитых стопок: ${brokenShots}`);
        console.log(`Количество пролитых стопок: ${spilledShots}`);
        console.log(
            `Количество стопок, которое выпил каждый из друзей: ${(claimedDrankShots / 2).toFixed(0)}`
        );
    }
}
