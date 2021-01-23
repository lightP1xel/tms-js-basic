/**
 * Домашнее задание к занятию 4
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson04.
 * Например: dmitryR/lesson04. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 1
 * Напишите код, который преобразовывает и объединяет все элементы массива в одно строковое значение.
 * Элементы массива будут разделены запятой. Получите результат двумя разными способами.
 */

 let arr = ['hello', 'my', 'dear', 'friend',];

 // 1 способ

 let str = arr.join(', ');
 console.log(str);

 // 2 способ

 let str1 = arr.toString();
 console.log(str1)

/**
 * Задание 2
 * Необходимо создать массив из 15 элементов. В массиве обязательно должны быть одинаковые значения.
 * Напишите код, который уберет эти дубликаты из созданного массива.
 */

 // 1 способ
 const array = [5, 93, 1, 3, 1, -84, 5, 7, 64, 70, 1, 93, -7, 8, 7,];

 const newSet = new Set(array);
 const backToArray = Array.from(newSet);

 console.log(backToArray);

 // 2 способ
 const arr1 = array.filter((item, index) => array.indexOf(item) === index);
 console.log(arr1);

/**
 * Задание 3
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой сумму
 * соответствующих элементов заданных массивов.
 */

 const a1 = [3, -5, 8,];
 const a2 = [6, 2, 9, -3, 1,];

 const a3 = a2.map(function(num, idx) {
     if (a1[idx]) {
         return num + a1[idx];
     } else {
         return num;
     }
 });

 console.log(a3);

/**
 * Задание 4
 * Напишите код, который подсчитает количество повторяющихся элементов в массиве.
 * И вывести это количество в консоль.
 */

 const ar = [2, 8, 4, 4, 1, 8, 8 , 1,];

 let count = [];

 for (let i = 0; i <= ar.length; i++) {
     if (ar[i] === ar[i + 1]) {
         count++
     };
 };

 console.log(count);

/**
 * Задание 5
 * Напишите код, который разворачивает исходный массив и сохраняет это в новую переменную.
 * Например: исходный массив - [1, 2, 3], результирующий массив - [3, 2, 1]
 */

 const arr4 = [3, 4, 5, 6];

 const arr4revers = arr4.reverse();

 console.log(arr4revers);

/**
 * Задание 6
 * Напишите код, который проверит является строка полиндромом(слово, которое с обеих сторон читается одинаково,
 * например РЕПЕР, ШАЛАШ)
 */

 function isPolindrom(str) {
     const strRevers = str.split('').reverse().join('');
     return strRevers === str;
 };

 console.log(isPolindrom('репер'));



/**
 * Задание 7
 * Написать код, который заменит регистр каждого символа на противоположный.
 * Например 'Hello world' -> 'hELLO WORLD'
 */

 let str = 'Hello world';

 function changeRegister() {
     return str.split('')
     .map((el) => el.toUpperCase() === el ? el.toLowerCase() : el.toUpperCase())
     .join('');
 }

 console.log(changeRegister(str));

/**
 * Задание 8
 * Создайте 2 массива с разной длинной.
 * Необходимо написать код,который создаёт массив элементов представляющих собой разность
 * соответствующих элементов заданных массивов.
 */

const a1 = [3, -5, 8, 15, 7, 2];
const a2 = [6, 2, 9, -3, 1,];

const a3 = a1.map(function(num, idx) {
    if (a2[idx]) {
        return num - a2[idx];
    } else {
        return num;
    }
});

console.log(a3);

/**
 * Задание 9
 * Напишите код, который добавит символ двоеточие(':') между нечетными числами.
 * Например, число 556 результат должен быть '5:56', 566 -> 566, 655 -> 65:5
 */

 function colon(str){
    let numArr = str.toString().split('');
    let numStr = '';
    
        for(let i = 0; i < numArr.length; i++) {
            if (numArr[i] % 2 !== 0 && numArr[i+1] % 2 !== 0) {
              numStr += numArr[i] + ':';
            } else {
              numStr += numArr[i];
            }
        }
    console.log(numStr);
}

colon(6778);

/**
 * Задание 10
 * Создать массив из 20 чисел. Необходимо высчитать сумму всех элементов.(Используем reduce)
 */

 const array20 = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40,];
 let result20 = array20.reduce((acc, value) => acc + value, 0);

 console.log(result20);
