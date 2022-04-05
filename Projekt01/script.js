let title = "Screen layout";
const screens = "Простые, Сложные, Интерактивные";
let screenPrice = 25;
let rollback = 70;
let fullPrice = 50;
const adaptive = false;

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens);

console.log('Стоимость верстки экранов ' + screenPrice + ' рублей/ долларов/гривен/юани');

console.log(screens.toLocaleLowerCase().split());
console.log()

console.log('Процент отката посреднику за работу ' + (fullPrice * (rollback / 100)))