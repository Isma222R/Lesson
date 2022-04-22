let title = prompt('Как называется проект', 'Название');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
screens = screens.toLowerCase().split(', ');
console.log(screens);

let screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
let rollback = 25;
const adaptive = confirm('Нужен ли адаптив для сайта?');

let service1 = prompt('Какой дополнительный тип услуги нужен?', 'модалка');
let servicePrice1 = prompt('Сколько это будет стоить?', '5000');

let service2 = prompt('Какой дополнительный тип услуги нужен?', 'модалка2');
let servicePrice2 = prompt('Сколько это будет стоить?', '6000');

let fullPrice = +screenPrice + +servicePrice1 + +servicePrice2;

let servicePercentPrice = Math.floor(fullPrice - (fullPrice / rollback));
console.log(servicePercentPrice);
if(fullPrice > 30000){
    console.log('Даем скидку 10%');
} else if(fullPrice>15000 && fullPrice<30000){
    console.log('skidka 5%');
} else if(fullPrice>0 && fullPrice<15000){
    console.log('Skidka 0');
}_else {
    console.log('chtoto poshlo ne tak');
}






