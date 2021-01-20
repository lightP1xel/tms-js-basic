/**
 * Домашнее задание к занятию 3
 * Каждому нужно создать новую ветку от ветки master. Название ветки должно содержать имя + первая буква фамилии + /lesson03.
 * Например: dmitryR/lesson03. Выполнение задания производится в свое ветке и в этом файле.
 * После выполнения задания делаете пулл реквест и сообщаете о том, что задание выполнено:)
 * В случае неполодок с гитом, присылаете папку с проектом мне в личные сообщения
 * Код решения должен быть сразу же после самого задания
 */

/**
 * Задание 0
 * Создать объект пользователя интернет магазина,
 * объект должен содержать следущие поля: имя, email, нравятся ли ему фрукты, показатель IQ.
 * Созданный объект вывести в консоли.
 */
let user = {
    name: 'Artyom',
    email: 'artyomL@com',
    likeFruits: 'yes',
    indexIQ: '101',
}
console.log(user);
/**
 * Задание 1
 * Создайте объект дерево у которого есть следующие свойства:
 * название,
 * высота,
 * количество листьев,
 * семейство.
 *
 * Необходимо вывести в консоль объект, а затем "укоротить" дерево, и вывести в консоль.
 * Подсказка: посмотреть операторы += -=
 */
let tree = {
    name: 'Дуб',
    height: 30,
    numberOfLeaves: '200',
    family: 'Буковые',
};
console.log(tree);
tree.height -= 10;
console.log(tree);

/**
 * Задание 2
 * Напишите цикл от 0 до 15. И в каждой итерации цикла нужно проверить четное число или нечетное.
 * И вывести в консоли, результат будет выглядеть примерно так:
 * 0 это четное
 * 1 это нечетное
 * ...
 */
for(i=0; i <= 15; i++){
if(i%2 ==0){
    console.log(i+' '+'это чётное');
}else{
    console.log(i+' '+'это нечётное');
}
}

/**
 * Задание 3
 * У нас есть студентов: Вася, Зина, Катя, Петя, Вова. Они решали финальный тест
 * и процент выполнения теста таков: Вася - 80, Зина - 77, Катя - 88, Петя - 95, Вова - 57.
 * Оценки рассчитываются следующим образом:
 *
 * если процент > 90 - 5
 * если процент > 80 - 4
 * если процент > 70 - 3
 * если процент > 60 - 2
 *
 * Ответ вывести следующим образом:
 * Вася - 2,
 * Зина - 3
 * ...
 */
let students= [{name:'Вася',rating:80},{name:'Зина',rating:77},{name:'Катя',rating:88},
            {name:'Петя',rating:95},{name:'Вова',rating:57}]
            // rating: [80,77,88,95,57],
    // student: {
    //         name:'Зина',
    //         rating: 77,
    //     },
    // student: {
    //         name:'Катя',
    //         rating: 88,
    //     },
    // student: {
    //         name:'Катя',
    //         rating: 95,
    //     },
    // student: {
    //         name:'Вова',
    //         rating: 57,
    //     },
for(let key in students){
    if(students[key] < 10){
        console.log(students.name-0)
    }else if(students[key] < 20){
        console.log(students.name-1)
    }else if(students[key] < 30){
        console.log(students.name-2)
    }else if(students[key] < 40){
        console.log(students.name-3)
    }else if(students[key] < 50){
        console.log(students.name-4)
    }else if(students[key] < 60){
        console.log(students.name-5)
    }else if(students[key] < 70){
        console.log(students.name-6)
    }else if(students[key] < 80){
        console.log(students.name-7)
    }else if(students[key] < 90){
        console.log(students.name-8)
    }else if(students[key] < 100){
        console.log(students.name-9)
    }
}

/**
 * Задание 4
 * Написать цикл, который будет итерироватся от 1 до 100.
 * На каждой итерации цикла нужно проверить:
 * если число кратное 3 - то вывести в консоль строку Fizz,
 * если число кратное 5 - то вывести в консоль строку Buzz,
 * если число кратное и 3 и 5 - то вывести FizzBuzz
 */
for(let i=1;i<=100;i++){
    if(i%3 ==0 && i%5 != 0){
        console.log(i+' '+'Fizz');
    }else if(i%5 ==0 && i%3 != 0){
        console.log(i+' '+'Buzz');
    }else if(i%3 == 0 && i%5 == 0){
        console.log(i+' '+'FizzBuzz');
    }
}
/**
 * Задание 5
 *
 * Нарисовать прямоугольный треугольник с длинной катетов i (любое число больше 1).
 * Для рисования использовать символ *(звездочка) или %(знак процента) и консоль.
 *
 */
let width='';
let star='*';
for(let i=0;i<8;i++){
  width+=star;
  console.log(width);
}
//*
//**
//***
//****

/**
 * Задание 6
 * Написать цикл от 0 до 1000. Высчитать сумму всех чисел кратных 4 и сумму всех чисел кратных 3.
 *
 */
let sum=0;
let sum1=0;
for(i=0;i<=1000;i++){
    if(i%4 == 0){
        sum += i;
    }
    if(i%3 == 0){
        sum1 += i;
    }
}
console.log(sum);
console.log(sum1);

/**
 * Задание 7
 * Написать программу, которая найдет наибольший общий делитель двух целых чисел и вывести это число в alert.
 *
 */
let a=24;
let b=36;
while(a != 0 && b != 0){
    if(a>b){
        a = a % b;
    }else
        b = b % a;
}
alert(a+b);
/**
 * Задание 8
 * Создайте массив из 5 любых элементов.
 * Напишите программу, которая будет клонировать заданный массив, не изменяя оригинала.
 * Склонированный массив вывести в консоль
 *
 */
let array=[5,24,87,47,2];
let array1=[...array];
console.log(array1);