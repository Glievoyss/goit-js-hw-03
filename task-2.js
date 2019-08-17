"use strict";
// Напиши функцию countProps(obj), считающую кол-во свойств в объекте.
// Функция возвращает число - количество свойств.
// Вызовы функции для проверки работоспособности твоей реализации.

// ВАРИАНТ 1
const countProps1 = function(obj) {
  return Object.keys(obj).length;
};

// ВАРИАНТ 2
const countProps2 = function(obj) {
  let count = 0;
  for (let key of Object.keys(obj)) {
    count++;
  }
  return count;
};

console.log(countProps1({})); // 0

console.log(countProps2({ name: "Mango", age: 2 })); // 2

console.log(countProps2({ mail: "poly@mail.com", isOnline: true, score: 500 })); // 3
