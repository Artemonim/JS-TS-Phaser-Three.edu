const animal = "кабан"
/* --- */

switch (animal) {
    case 'кошка':
    case 'собака':
    case 'хомяк':
        console.log('Это домашние животные.')
        break;
    case 'рыба':
    case 'птица':
    case 'черепаха':
    case 'ящерица':
        console.log('Это экзотические питомцы.')
        break;
    default:
        console.log('Это мне неизвестно.')
}
