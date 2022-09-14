
const appData = {
    title: '',
    screens: '',
    screenPrice: 0,
    rollback: 25,
    adaptive: true,
    allServicePrices: 0,
    fullPrice: 0,
    servicePercentPrice: 0,
    service1: '',
    service2: '',

    asking: function () {
        appData.title = prompt('Как называется проект', 'Экраны ')
        appData.screens = prompt('Какие типы экранов нужно разработать?', 'Простые, Сложные, Интерактивные')

        do {
            appData.screenPrice = +prompt('Сколько будет стоить данная работа?', 12000)
        } while (!isNumber(appData.screenPrice))

        appData.adaptive = confirm('Нужен ли адаптив для сайта?');
    },

    start: function () {
        appData.asking();
        appData.getAllServicePrices();
        appData.getFullprice();
        appData.getServicePercentPrice();
        appData.getTitle();
        appData.isNumber();
        appData.getRollbackMessage();
    },
};
start();

const getAllServicePrices = function () {
    let sum = 0
    for (let i = 0; i < 2; i++) {
        let price = 0

        if (i === 0) {
            appData.service1 = prompt("Какой дополнительный тип услуги нужен?")
        } else if (i === 1) {
            appData.service2 = prompt("Какой дополнительный тип услуги нужен?")
        }

        sum += +appData.screenPrice
    }

    return sum
}

const getFullprice = function () {
    return appData.screenPrice + appData.allServicePrices
};
const getServicePercentPrice = function () {
    return appData.fullPrice - (appData.fullPrice * (appData.rollback / 100))
};
const getTitle = function () {
    return appData.title.trim()[0].toUpperCase() + appData.title.trim().substr(1).toLowerCase()
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

appData.asking()
appData.allServicePrices = getAllServicePrices();
appData.fullPrice = getFullprice();
appData.servicePercentPrice = getServicePercentPrice();
appData.title = getTitle();


console.log(appData.fullPrice);
console.log(appData.servicePercentPrice);