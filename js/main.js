// Простые методы массивов.
//! Задание Nº1
// Дан массив ["dlrow", "olleH"]. Измените его таким образом, чтобы в итоге получилось ["Hello", "world"]. Используйте методы массива.
let arr = ["dlrow", "olleH"];
arr[0] = arr[0].split("").reverse().join("");
arr[1] = arr[1].split("").reverse().join("");
arr.reverse();
console.log(arr);
//! Задание Nº2
// Дан массив ['а', 'б', 'в']. Добавьте ему в конец элементы 4,3,5,5.
let arr1 = ["а", "б", "в"];
arr1.push(4, 3, 5, 5);
console.log(arr1);
// Задание Nº3
// Дан массив ["Apple", "Orange", "Pinapple",
// "Cherry"]. Удалите сначала первый элемент
// "Apple" и этот же элемент подставтье после
// "Pineapple"
let arr2 = ["Apple", "Orange", "Pinapple", "Cherry"];
let deletedWord = arr2.shift(arr2[0]);
arr2.splice(2, 0, deletedWord);
console.log(arr2);
// Задание Nº4
// Дан массив 18, -7, -21, 44, 31. Вывести в консоль наиболшее число из массива.
// Подсказка: нужно использовать метод sort().
let array = [18, -7, -21, 44, 31];
let array2 = array.sort((a, b) => b - a);
console.log(array2[0]);
// let sorted = array2.shift();
// console.log(sorted);