/**
 * Домашнее задание к занятию 4
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson04.
 * Например: dmitryR/lesson04. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 0
 * Создайте массив из 5 любых элементов.
 * Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
 * Склонированный массив вывести в консоль
 *
 */
"use strict";

let a0 = [1, 2, 3, 4, 5];

let b0 = a0.slice([]);

console.log(b0);
/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */

let a1 = [1, 2, 3, 4, 5];
console.log(a1.join(', ') + '.');

let b1 = a1.toString();
console.log(b1);

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

let a2 = [45, 23, 'go', -44, {}, 32, 228, (2 + 4), 13, 'go', 2, {}, 'fly', 23, 1];

let b2 = a2.splice(9, 1);
let c2 = a2.splice(10, 1);
let d2 = a2.splice(11, 1);

console.log(`Удалены дубликаты: ${b2}, ${c2}, ${d2}.`);
console.log(a2);

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

let a3 = [3, 5, 7, 2, 5, ],
    b3 = [3, 16, 15, ];

a3[0] += b3[0];

a3[1] += b3[1];

a3[2] += b3[2];

console.log(a3);

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */


let a4 = [1, -54, 3, 1, {}, {}, 4, 300, 4, 'one', 'one',];

let mapped = a4.reduce((acc, item) => {

    if (acc.hasOwnProperty(item)) {
        acc[item]++
    } else {
        acc[item] = 1
    }

    return acc
}, {});

console.log(mapped)

let result = Object.entries(mapped).filter(([key, value]) => value > 1)

console.log(result);//Есть решение, но не понимаю, как это работает.

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

let a5 = [1, 2, 3];
let b5 = a5
console.log(b5.reverse())// Так ?
/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

let a6 = 'МАДАМ';
let b6 =0;

if (a6.slice(0, 0) === a6.slice(4, 1) && a6.slice(1, 1) === a6.slice(3, 1)) {
    console.log(`Слово - ${a6} является полиндромом`)
}else {
    console.log(`Слово - ${a6} не является полиндромом`)
}