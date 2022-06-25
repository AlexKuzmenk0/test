'use strict';

//! Перебор всех значений их ключей и свойств

// const options = {
//     name: 'test',
//     with: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function () {
//         console.log("test");
//     }
// };
// options.makeTest();
// const { border, bg } = options.colors; //* Деструктуризация выносим свойства для дальнейшего использования/изминения

// console.log(options.name);
// delete options.name;
// console.log(options);


//* 1
// let counter = 0; //* счетчик выполняемых действий (показывает количество свойств в обьекте)
// for (let key in options) {
//     if (typeof (options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);

//* 2
// console.log(Object.keys(options).length);  //* получаем масив со всеми ключами /.количество элементов в этом масиве



//! 3 Practics
// 1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
// перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
// Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

// 2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
// переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

// 3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку.
// Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены -
// при помощи метода forEach вывести в консоль сообщения в таком виде:
// "Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

const personalMuvieDB = {    //*1) Сделали все фукции методами(просто перенесли все функции в обьект)
    count: 0,
    muvies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMuvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMuvieDB.count == '' || personalMuvieDB.count == null || isNaN(personalMuvieDB.count)) {
        personalMuvieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); 
        }
    },
    remeberMyFilms: function() {
        for (let i = 0; i < 1; i++) {
                const a = prompt('Один из последних просмотреных фильмов?', ''),
                    b = prompt('На сколько оцение его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMuvieDB.muvies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detecPersonalLevel: function() {
        if (personalMuvieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMuvieDB.count >= 10 && personalMuvieDB < 30) {
            console.log('Вы классический зритель');
        } else if (personalMuvieDB.count >= 30) {
            console.log('Вы киноман');
        } else {
            console.log('Произошла ошибка');
        }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMuvieDB);
        }
    },
    toggleVisibleMyDB: function () {   //*2)
        if (personalMuvieDB.privat) {
            personalMuvieDB.privat = false;
        } else {
            personalMuvieDB.privat = true;
        }
    },
    writeYourGenres: function() {  //*3)
        for (let i = 1; i <= 3; i++){
            const genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre == '' || genre == null) {
                console.log('Некорректные данные');
                i--;
            } else {
                personalMuvieDB.genres[i - 1] = genre;
            }
        }
        personalMuvieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    }
};

