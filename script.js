let title = prompt('Как называется проект', 'Экраны ');
let screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные');
let screenPrice = prompt('Сколько будет стоить данная работа?', 12000);
let rollback = 25;
const adaptive = confirm('Нужен ли адаптив для сайта?');



let allServicePrices

const getAllServicePrices = function () {
    let sum = 0

    for (let i = 0; i < 2; i++) {
        let price = 0

        if (i === 0) {
            service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        do {
            screenPrice = +prompt('Сколько будет стоить данная работа?')
        } while (!isNumber(screenPrice));

        sum += +screenPrice
    }

    return sum
}
const showTypeOf = function (variable) {
    console.log(variable, typeof variable)
};
const getFullprice = function () {
    return screenPrice + allServicePrices
};
const getServicePercentPrice = function () {
    return fullPrice - (fullPrice * (rollback / 100))
};
const getTitle = function () {
    return title.trim()[0].toUpperCase() + title.trim().substr(1).toLowerCase()
};
const isNumber = function (num) {
    return !isNaN(parseFloat(num)) && isFinite(num);
};

const getRollbackMessage = function (price) {
    if (fullPrice > 30000) {
        console.log('Даем скидку 10%');
    } else if (fullPrice > 15000 && fullPrice < 30000) {
        console.log('Даём скидку 5%');
    } else if (fullPrice > 0 && fullPrice < 15000) {
        console.log('Скидка не предусмотрена');
    } else {
        console.log('Что-то пошло не так');
    }
}

asking()
allServicePrices = getAllServicePrices();
fullPrice = getFullprice();
servicePercentPrice = getServicePercentPrice();
title = getTitle();


showTypeOf(title);
showTypeOf(screenPrice);
showTypeOf(adaptive);

console.log("allServicePrices", allServicePrices);

console.log(typeof title);
console.log(typeof fullPrice);
console.log(typeof adaptive);

console.log(screens);
console.log(fullPrice);

console.log('Стоимость верстки экранов ' + screenPrice + 'рублей');

console.log(screens.toLocaleLowerCase().split(", "));





