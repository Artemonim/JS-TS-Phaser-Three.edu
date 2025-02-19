/* https://stepik.org/lesson/1407999/step/1?unit=1425470 */

const username = prompt("Как вас зовут?")?.trim();

alert(username ? `Привет, ${username}!` : "Введено неверное имя.");
