/**
 * Задание 0
 * Реализуйте функцию конструктор Worker (Работник), который будет создавать объект и иметь следующие свойства: name (имя),
 * secondName (фамилия),
 * rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
 * который будет выводить зарплату работника.
 * Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
 */
function Worker(name, secondName, rate, days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
}

Worker.prototype.getSalary = function() {
    return this.rate * this.days;
};

let vasya = new Worker('Vasya', 'Vasechkin', 35, 20);

console.log(vasya);

/**
 * Задание 1
 * Модифицируйте функцию конструктор Worker из предыдущей задачи следующим образом:
 * У каждого объекта класса Worker должны быть доступны методы getName, getSecondName, getRate, getDays, getSalary,
 * каждый из которых будет возвращать соответствующее поле в объекте.
 * И также методы setRate, setDays, которые будут устанавливать новые значения для соответственно свойств rate и days.
 */
function Worker(name, secondName, rate, days) {
    this.name = name;
    this.secondName = secondName;
    this.rate = rate;
    this.days = days;
}

Worker.prototype.getSalary = function() {
    return this.rate * this.days;
};

Worker.prototype.getName = function() {
    return this.name;
};

Worker.prototype.getSecondName = function() {
    return this.secondName;
};

Worker.prototype.getRate = function() {
    return this.rate;
};

Worker.prototype.getDays = function() {
    return this.days;
};

Worker.prototype.setRate = function(rate) {
    if(isNaN(Number(rate))) {
        alert('Error');
    } else {
        this.rate = rate;
    }
};

Worker.prototype.setDays = function(days) {
    if(isNaN(Number(days))) {
        alert('Error');
    } else {
        this.days = days;
    }
};

vasya.setRate(1000);
vasya.setDays(3);

console.log(vasya.getSalary());
/**
 * Задание 1
 * Реализуйте функцию конструктор MyString, объект которого будет иметь следующие методы: метод reverse(),
 * который параметром принимает строку, а возвращает ее в перевернутом виде,
 * метод ucFirst(),
 * который параметром принимает строку, а возвращает эту же строку, сделав ее первую букву заглавной
 * и метод ucWords,
 * который принимает строку и делает заглавной первую букву каждого слова этой строки.
 */
function MyString() {}

MyString.prototype.reverse = function(str) {
    let arr = [...str].reverse();

    return arr.join('');
}

MyString.prototype.upperCaseFirst = function(str) {
    let arr = [...str];
    arr[0] = arr[0].toUpperCase();

    return arr.join('');
}

MyString.prototype.upperCaseWords = function(str) {
    let arr = str.split(' ');

    arr.forEach((element, index, array) => {
        arr[index] = this.upperCaseFirst(element)
    });
    
    return arr.join(' ');
}