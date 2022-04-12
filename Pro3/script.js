let title = prompt('Как называется проект', 'Название');
let screens = prompt('Какие типы экранов нужны', 'Простые, Сложные, Интерактивные');
let screenPrice = prompt('Сколько будет стоить данная работа?', (12000));
let rollback = 10000;
let fullPrice = 23000;
let servicePercentPrice = 13000;
const adaptive = false;

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'модалка')
let servicePrice1 = prompt('Сколько это будет стоить?', '5000');

let service2 = prompt('Какой дополнительный тип услуги нужен?', 'модалка2')
let servicePrice2 = prompt('Сколько это будет стоить?', '6000');


console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');

console.log(screens.toLocaleLowerCase().split(', '));

console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)));

console.log('servicePercentPrice' + '13000');


if ('Если fullPrice' > '30000') {
    console.log('Даем скидку в 10%')
}




