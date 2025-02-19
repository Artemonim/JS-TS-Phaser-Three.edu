/* https://stepik.org/lesson/Задача-1-Тебе-нравится-JS-1407997/step/1?unit=1425468 */

const userAnswer = confirm("Вам нравится JavaScript?");

const goodShout = "Конечно, отличный язык.";
const badShout = "Не нравится? Вы кнопкой ошиблись?";

switch (true) {
  case userAnswer:
    console.log(goodShout);
    break;
  default:
    console.log(badShout);
}

alert(userAnswer ? goodShout : badShout);
