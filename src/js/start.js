'use strict';

//* Задание 1:

// 1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
// 'Сколько фильмов вы уже посмотрели?'

// 2) Создать объект personalMovieDB и в него поместить такие свойства:
//     - count - сюда передается ответ на первый вопрос
//     - movies - в это свойство поместить пустой объект
//     - actors - тоже поместить пустой объект
//     - genres - сюда поместить пустой массив
//     - privat - в это свойство поместить boolean(логическое) значение false

// 3) Задайте пользователю по два раза вопросы:
//     - 'Один из последних просмотренных фильмов?'
//     - 'На сколько оцените его?'
// Ответы стоит поместить в отдельные переменные
// Записать ответы в объект movies в формате:
//     movies: {
//         'logan': '8.1'
//     }

// Проверить, чтобы все работало без ошибок в консоли */

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

// const personalMuvieDB = {
//     count: numberOfFilms,
//     muvies: {},
//     actors: {},
//     genres: [],
//     privat: false
// };

// const a = prompt('Один из последних просмотреных фильмов?', ''),
//       b = prompt('На сколько оцение его?', ''),
//       c = prompt('Один из последних просмотреных фильмов?', ''),
//       d = prompt('На сколько оцение его?', '');
      
// personalMuvieDB.muvies[a] = b;
// personalMuvieDB.muvies[c] = b;

// console.log(personalMuvieDB);

//* Условия

// if (4 == 9) {
//     console.log('OK!');
// } else {
//     console.log('Error');
// }

// const num = 50;

// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Not yet');
// } else {
//     console.log('OK!');
// }

// (num === 50) ? console.log('Ok') : console.log('Error');     /* Пример Тернарного оператора */

// const num = 50;

// switch (num) {
//     case 49:
//         console.log("Not yet");
//         break;
//     case 100:
//         console.log('Not yet');
//         break
//     case 50:
//         console.log('Yes');
//         break;
//     default:
//         console.log('Lose');
//         break;
// }