'use strict';

// let a = 5,
//     b = a;

// b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj;  //* передает ссылку на уже существующий обьект

// copy.a = 10;

// console.log(copy);
// console.log(obj);

// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const number = { //* копирует
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNum = copy(number);
// newNum.a = 10;
// console.log(newNum);
// console.log(number);

// const add = {  //* обьединяет несколько обьектов
//     f: 4,
//     d: 2
// };
// console.log(Object.assign(number, add));


// const oldArr = ['a', 'b', 'c'];
// const newArr = oldArr.slice();
// newArr[1] = 'qwerty';

// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'uatube'],
//     blogs = ['wordpress', 'livejurnal', 'bloger'],
//     internet = [...video, ...blogs, 'vk', 'fb'];

// console.log(internet);


// function test (a, b, c) {        
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// const num = [2, 5, 7];
// test(...num);

// const array = ['a', 'b'];
// const newArr = [...array];