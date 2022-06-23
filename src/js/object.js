'use strict';

//* Перебор всех значений их ключей и свойств

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