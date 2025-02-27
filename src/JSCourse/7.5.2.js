/* https://stepik.org/lesson/1408786/step/2 */

/**
 * Функция должна вернуть значение, находящееся в указанной строке i и колонке j двумерного массива.
 *
 * @param {Array[]} arraTwo
 * @param {Number} i
 * @param {Number} j
 * @returns {void}
 */
function getValueFromArray(arraTwo, i, j) {
    if (arraTwo && arraTwo.length > i && arraTwo[i].length > j) {
        return arraTwo[i][j];
    }
    return "Указанные индексы выходят за границы массива.";
}

/**
 * Функция должна вернуть значение, находящееся в указанной строке i и колонке j двумерного массива.
 *
 * @param {Array[]} arraTwo
 * @param {Number} i
 * @param {Number} j
 * @returns {void}
 */
function getValueFromArrayV2(arraTwo, i, j) {
    return arraTwo?.at(i)?.at(j); //* preferable
}
