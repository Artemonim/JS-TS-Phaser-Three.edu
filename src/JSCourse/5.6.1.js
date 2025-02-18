/* https://stepik.org/lesson/Задача-1-Тебе-нравится-JS-1407997/step/1?unit=1425468 */

const userAnswer = prompt('Вам нравится JavaScript?').trim()

const goodAnswer = 'да'
const badAnswer = 'нет'
const goodShout = 'Конечно, отличный язык.'
const badShout = 'Не нравится? Вы кнопкой ошиблись?'

switch (userAnswer) {
    case goodAnswer:
        console.log(goodShout)
        break;
    default:
        console.log(badShout)
}

console.log(goodAnswer === goodAnswer ? goodShout : badShout)