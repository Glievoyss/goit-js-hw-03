"use strict";
// Напиши скрипт, который, для объекта user, последовательно:
// добавляет поле mood со значением 'happy'
// заменяет значение hobby на 'javascript'
// заменяет значение premium на false
// выводит содержимое объекта user в формате ключ:значение
// используя Object.keys() и for...of



// ----- Набиваю руку по работе с функциями :) Функция для отображения
// обекта в формате ключ: значение.
const listObj = function(obj) {
    for (let key of Object.keys(obj)) {
      console.log(`${key}: ${obj[key]}`);
    }
  };

const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

user.mod = "happy";
user.hobby = "javascript";
user.premium = false;

listObj(user);