/* https://stepik.org/lesson/1408001/step/1 */

const desiredProduct = prompt("Введите название товара")
    ?.trim() // "?." подсказано Copilot
    .toLocaleLowerCase();
const products = [
    //подсказано Copilot
    { name: "Мышка Б54", price: 2200 },
    { name: "Клавиатура К22", price: 9400 },
    { name: "Монитор М123", price: 52000 },
];

switch (desiredProduct) {
    case products[0].name.toLocaleLowerCase():
        alert(`${products[0].name}: ${products[0].price}`);
        break;
    case products[1].name.toLocaleLowerCase():
        alert(`${products[1].name}: ${products[1].price}`);
        break;
    case products[2].name.toLocaleLowerCase():
        alert(`${products[2].name}: ${products[2].price}`);
        break;
    default:
        alert(`Товар ${desiredProduct ? `"${desiredProduct}" ` : ""}не найден`);
}
