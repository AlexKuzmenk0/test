'use strict';

const str = 'test';

console.log(str.toUpperCase());  //* строка становится в верхний регистр
console.log(str.toLowerCase());  //* строка становится в нижний регистр
console.log(str);


const fruit = 'Some fruit';
console.log(fruit.indexOf('fruit')); //* показывает с какого индекса начинается строка


const logg = 'World hello';
// console.log(logg.slice(6, 11));
console.log(logg.substr(0, 7));

const num = 12.3;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));