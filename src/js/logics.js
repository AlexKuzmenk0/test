'use strict';

// const burger = true,
//     fries = false;

// if (burger && fries) {
//     console.log('It is grate!')
// };

// console.log((burger && fries)); /* Возвращает логический тип даных */


// const burger = 3,
//       fries = 1,
//       cola = 0;

// if (burger === 3 && cola === 1 && fries === 1) {
//     console.log('It is good!');
// } else {
//     console.log('It is bed');
// }


// const burger = 3,
//     fries = 3,
//     cola = 0,
//     nugets = 2;

// if (burger === 3 && cola === 2 || fries === 3 && nugets) {
//     console.log('It is good!');
// } else {
//     console.log('It is bed');
// }


let johnReport, alexReport, mariaRepoert = 'done';

console.log(johnReport || alexReport || mariaRepoert);



//* Задание

console.log(NaN || 2 || undefined);  //* 2 

console.log(NaN && 2 && undefined); //* NaN

console.log(1 && 2 && 3); //* 3

console.log(!1 && 2 || !3); //* false

console.log(25 || null && !3); //* 25

console.log(NaN || null || !3 || undefined || 5); //* 5

console.log(NaN || null && !3 && undefined || 5); //* 5

console.log(5 === 5 && 3 > 1 || 5); //* true

const burger = 3,
    fries = 3,
    cola = 0,
    nugets = 2;

if (burger === 3 && cola || fries === 3 && nugets) {
    console.log('It is good!');
}