/*
    Функція з колбеком:
    Створити функцію calculate, яка приймає два числа і колбек.
    Колбек визначає дію: додавання або віднімання.
*/

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function calculate(a, b, callback) {
  return callback(a, b);
}


calculate(5, 3, add);      // 8
calculate(5, 3, subtract); // 2
