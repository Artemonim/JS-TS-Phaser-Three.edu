/* https://stepik.org/lesson/1408056/step/2 */

greetUser(prompt("Введите ваше имя")?.trim());

function greetUser(username) {
    switch (username) {
        case "Павел":
        case "Олег":
            console.log(
                `Привет, ${username}, вам доступны функции администратора.`
            );
            break;
        default:
            console.log(`Здравствуйте, ${username}.`);
            break;
    }
}
