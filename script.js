let title = prompt('Как называется проект', 'Название');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');

let screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
let rollback = 25;
const adaptive = confirm('Нужен ли адаптив для сайта?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'модалка');
let servicePrice1 = prompt('Сколько это будет стоить?', '5000');

let service2 = prompt('Какой дополнительный тип услуги нужен?', 'модалка2');
let servicePrice2 = prompt('Сколько это будет стоить?', '6000');

let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;

let servicePercentPrice = Math.floor(fullPrice - (fullPrice / 100 * rollback));
console.log(servicePercentPrice);
if (fullPrice > 30000) {
    console.log('Даем скидку 10%');
} else if (fullPrice > 15000 && fullPrice < 30000) {
    console.log('Даём скидку 5%');
} else if (fullPrice > 0 && fullPrice < 15000) {
    console.log('Скидка не предусмотрена');
} else {
    console.log('Что-то пошло не так');
}
console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');

console.log(screens.toLocaleLowerCase().split(", "));





