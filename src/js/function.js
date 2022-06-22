'use strict';

//* Function declaration

// function showFirstMessage(text) {
//     console.log(text);
// }

// showFirstMessage('Hello world');


// function calc (a, b) {
//     return (a + b);
// }
// console.log(calc(4, 3));
// console.log(calc(10, 3));
// console.log(calc(10, 10));

// function ret() {
//     let num = 50;


//     return num;
// }
// const anotherNum = ret();
// console.log(anotherNum);




//* Function expresion

// const logger = function () {
//     console.log('hello');
// };
// logger();


//* Стрелочная функция

// const calc = (a, b) => a + b;




// const usdCurr = 28;
// const eurCurr = 32;


// function convert(amount, curr) {
//     console.log(curr * amount);
// }

// convert(10, usdCurr);
// convert(10, eurCurr);




// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
// }

// promotion(convert(10, usdCurr));


// function test() {
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log('Done');
// }
// test();



//* Практика по функциям
// 1) Первую часть задания повторить по уроку

// 2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
// false - выводит в консоль главный объект программы

// 3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос
// "Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
// genres


// let numberOfFilms;

// function start() {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
        
//     }
// }
// start();

// const personalMuvieDB = {
//     count: numberOfFilms,
//     muvies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// function remeberMyFilms() {
//     for (let i = 0; i < 1; i++) {
//             const a = prompt('Один из последних просмотреных фильмов?', ''),
//                 b = prompt('На сколько оцение его?', '');
    
//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMuvieDB.muvies[a] = b;
//             console.log('done');
//         } else {
//             console.log('error');
//             i--;
//         }
//     }
// }
// remeberMyFilms();

// function detecPersonalLevel() {
//     if (personalMuvieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (personalMuvieDB.count >= 10 && personalMuvieDB < 30) {
//         console.log('Вы классический зритель');
//     } else if (personalMuvieDB.count >= 30) {
//         console.log('Вы киноман');
//     } else {
//         console.log('Произошла ошибка');
//     }
// }
// detecPersonalLevel();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMuvieDB);
//     }
// }
// showMyDB(personalMuvieDB.privat);

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++){
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMuvieDB.genres[i - 1] = genre;
//     }
// }
// writeYourGenres();

// function favoritActors() {
//     for (let j = 1; j <= 5; j++) {
//         const actor = prompt(`Ваш любимый актер? ${j}`);
//         personalMuvieDB.actors[j - 1] = actor;
//     }
// }
// favoritActors();

// function first() {
//     setTimeout(function () {
//         console.log(1);
//     }, 500);
// }
// function second() {
//     console.log(2);
// }
// first();
// second();


// function learnJS(lang, callback) {
//     console.log(`I dont now: ${lang}`);
//     callback();
// }
// function done() {
//     console.log('Its bad');
    
// }
// learnJS('Java Scripr', done);