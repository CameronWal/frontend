// // Создание объекта
// let options = {
//     width: 1024,
//     height: 1024,
//     name: "test"
// };
// // вывод отдельного свойства
// console.log(options.name);
// options.bool = false;
// // Объект в объекте
// options.colors = {
//     border: "black",
//     bg: "red"
// };
// // удаление свойства объекта
// delete options.bool;
// // Вывод объекта
// console.log(options);
// // Добавление к каждому свойство чего либо
// for (let key in options) {
//     console.log('Свойство ' + key + ' имеет значение ' + options[key]);
// }
// // Счет
// console.log(Object.keys(options).length);
// // создание массива
// let arr = ["first", 2, 3, "for", 5];

// arr.pop(); // Удаляет последний элемент
// arr.push("5"); //Добавляет последний элемент
// arr.shift(); // Удаляет первый элемент
// arr.unshift("1"); // Добавляет первый элемент
// arr[99] = 99;
// console.log (arr.length); // последний индекс +1
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
    
// }
// // Перебор массива
// arr.forEach(function(item, i, mass){
//     console.log(i + ': ' + item + " (массив: " + mass + ')');
// });

// let mass = [1,3,4,6,7];
// // Вывод значение(ключи) - in. Вывод название ключа - for
// for (let key of mass) {
//     console.log(key)
// }

// let ans = prompt("", ""),
//     arr = [];

// arr = ans.split(',');

// console.log(arr);
// Вывести ключи в строку
// let arr = ["aewz", 'zzzz', 'fffff'],
//     i = arr.join(', ');

// console.log(i);
//Сортировка по алфавиту(только буквы)
// let arr = ["aewz", 'zzzz', 'fffff'],
//     i = arr.sort();

// console.log(arr);

// let arr = [1, 15, 4],
//     i = arr.sort(conpareNum);

// function conpareNum(a,b) {
//     return a-b;
// }

// console.log(arr);

// let soldier = {
//     health: 400,
//     armor: 100
// };
// let john = {
//     health: 100
// };

// john.__proto__ = soldier;

// console.log(john);
// console.log(john.armor);