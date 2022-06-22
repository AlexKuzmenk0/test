'use strict';

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;
// }

// while (num < 55);

// for (let i = 1; i < 8; i++) {
//     if (i === 4) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

// for (let i = 0; i < 3; i++){
//     console.log(i);
//     for (let j = 0; j < 3; j++){
//         console.log(j);
//     }
// }

// let result = '';
// const length = 7;

// for (let i = 1; i < length; i++) {

//     for (let j = 0; j < i; j++) {
//         result += '*';
//     }

//     result += '\n';
// }

// console.log(result);

//* DZ

// let coin = '';
// const height = 10;

// for (let i = 2; i > coin; i++) {
//     for (let k = 0; k > i; k++) {
//         coin += '&';
//     }
//     coin = '\n';
// }

// console.log(coin);


// first:
// for (let i = 0; i < 3; i++) {
//     console.log('Firts level: ${i}');
//     for (let j = 0; j < 3; j++) {
//         console.log('Second level: ${j}');
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log('Third level: ${k}');
//         }
//     }
// }



//*  Приминение условий и циклов
// 1) Автоматизировать вопросы пользователю про фильмы при помощи цикла

// 2) Сделать так, чтобы пользователь не мог оставить ответ в виде пустой строки,
// отменить ответ или ввести название фильма длинее, чем 50 символов. Если это происходит - 
// возвращаем пользователя к вопросам опять

// 3) При помощи условий проверить  personalMovieDB.count, и если он меньше 10 - вывести сообщение
// "Просмотрено довольно мало фильмов", если от 10 до 30 - "Вы классический зритель", а если больше - 
// "Вы киноман". А если не подошло ни к одному варианту - "Произошла ошибка"

// 4) Потренироваться и переписать цикл еще двумя способами*

const numberOfFilms = prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMuvieDB = {
    count: numberOfFilms,
    muvies: {},
    actors: {},
    genres: [],
    privat: false
};

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

if (personalMuvieDB.count < 10) {
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMuvieDB.count >= 10 && personalMuvieDB < 30) {
    console.log('Вы классический зритель');
} else if (personalMuvieDB.count >= 30) {
    console.log('Вы киноман');
} else {
    console.log('Произошла ошибка');
}

console.log(personalMuvieDB);
