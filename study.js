// Homework 1, task 1

let name = "Генератор защитного поля",
    price = 1000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

price = 2000;

console.log(`Выбран ${name}, цена за штуку ${price} кредитов`);

// Homework 1, task 2

const total = 100,
    ordered = 50;

function makeOrder(total, ordered) {
    if (ordered > total) {
        console.log('На складе недостаточно товаров!');
    } else {
        console.log('Заказ оформлен, с вами свяжется менеджер');
    }
}
makeOrder(100, 20);
makeOrder(100, 80);
makeOrder(100, 130);

// Homework 1, task 3

const ADMIN_PASSWORD = 'jqueryismyjam';

function loggedIn() {
    let message = prompt('Please, enter your pass');
    if (message == null) {
        message = 'Отменено пользователем!';
    } else if (message == ADMIN_PASSWORD) {
        message = 'Добро пожаловать!';
    } else {
        message = 'Доступ запрещен, неверный пароль!';
    }
    return message;
}
alert(loggedIn());

// Homework 1, task 4

let credits = 23580,
    pricePerDroid = 300;

function buyMeADroid() {
    let message = prompt('How much droids do you want?'),
        totalPrice = pricePerDroid * message,
        totalDroids = message,
        substraction = credits - totalPrice,
        remainder = parseInt(substraction);

    if (message == null) {
        message = 'Отменено пользователем!';
    } else if (totalPrice > credits) {
        message = 'Недостаточно средств на счету!';    
    } else {
        message = `Вы купили ${totalDroids} дроидов, на счету отсталось ${remainder} кредитов`;
    }
    return message;
    }

console.log(buyMeADroid());

// Homework 1, task 5

let message = prompt('You can order shipment to your country');
let countries = ['Китай','Чили','Австралия','Индия','Ямайка' ];
let shipmentValue = [100, 250, 170, 80, 120]
switch (message.toUpperCase()) {
    case 'КИТАЙ': console.log(`Доставка в ${countries[0]} будет стоить ${shipmentValue[0]} кредитов`);
    break;
    case 'ЧИЛИ': console.log(`Доставка в ${countries[1]} будет стоить ${shipmentValue[1]} кредитов`);
    break;
    case 'АВСТРАЛИЯ': console.log(`Доставка в ${countries[2]} будет стоить ${shipmentValue[2]} кредитов`);
    break;
    case 'ИНДИЯ': console.log(`Доставка в ${countries[3]} будет стоить ${shipmentValue[3]} кредитов`);
    break;
    case 'ЯМАЙКА': console.log(`Доставка в ${countries[4]} будет стоить ${shipmentValue[4]} кредитов`);
    break;
    default: console.log('В вашей стране доставка не доступна'); 
}

