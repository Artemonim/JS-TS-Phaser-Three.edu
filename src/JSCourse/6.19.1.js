/* https://stepik.org/lesson/1408069/step/1 */

/**
 * Проверяет, запускается ли скрипт в браузере или локально
 */
const isWeInBrowser = typeof window !== "undefined";

const username = isWeInBrowser
    ? [prompt("Введите имя"), prompt("Введите фамилию")]
    : ["ArTe", "mONIm"];

if (isWeInBrowser) {
    alert(
        fullName(
            username[0].toLocaleLowerCase(),
            username[1].toLocaleLowerCase()
        )
    );
} else {
    console.log(
        fullName(
            username[0].toLocaleLowerCase(),
            username[1].toLocaleLowerCase()
        )
    );
}

/**
 * @param {string} firstName - имя пользователя
 * @param {string} lastName - фамилия пользователя
 * @returns {string}
 */
function fullName(firstName, lastName) {
    return `${startCapital(firstName)} ${startCapital(lastName)}`;
}

/**
 * @param {string} word - слово для капитализации первой буквы
 * @returns {string}
 */
function startCapital(word) {
    return `${word[0].toLocaleUpperCase()}${word.slice(1)}`;
}
