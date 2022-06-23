'use strict';

const arr = [10, 2, 35, 44, 7];

arr.sort(compareNum);  //*9  метод сортировки по числовым значениям
console.log(arr);
function compareNum(a, b) {
    return a - b;
}

// arr.pop();  //*1 удаляет послед элементы с масива
// console.log(arr);

// arr.push(22); //*2 добавляет послед элементы с масива
// console.log(arr);

// for (let i = 0; i < arr.length; i++){  //*3
//     console.log(arr[i]);
// }

// for (let value of arr) {  //*4 каждый отдельный элемент в массиве
//     console.log(value);
// }

// arr.forEach(function (item, i, arr) { //*5
//     console.log(`${i}: ${item} в нутри массива ${arr}`);
// });

// const str = prompt('', ''); //*6 из строки в масив данные от пользователя
// const product = str.split(', ');
// console.log(product);

// const str = prompt('', ''); //*7  из масива в строку данные от пользователя
// const product = str.split(', ');
// console.log(product.join('; '));

// const str = prompt('', ''); //*8  метод сортировки(по алфавиту) ввиде строк
// const product = str.split(', ');
// product.sort();
// console.log(product.join('; '));