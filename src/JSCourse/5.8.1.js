/* https://stepik.org/lesson/1408000/step/1?unit=1425471 */

const inputAge = prompt("Сколько вам лет?");
const errorMessage = "Возраст не указан или указан некорректно";

if (inputAge) {
    const userAge = parseInt(inputAge);

    switch (true) {
        case userAge >= 0 && userAge < 18:
            console.log("Привет :)");
            break;
        case userAge >= 18 && userAge < 50:
            console.log("Здравствуйте.");
            break;
        case userAge >= 50 && userAge < 100:
            console.log("Почетный возраст.");
            break;
        case userAge >= 100:
            console.log("А столько живут?");
            break;
        default:
            console.log(errorMessage);
            break;
    }
} else {
    console.log(errorMessage);
}
