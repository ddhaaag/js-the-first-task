// ФУНКЦИИ

/* Создать функцию multiply, которая будет принимать любое количество чисел и возвращать их произведение: 
multiplay(1,2,3) = 6. Если нет ни одного аргумента вернуть ноль. */

function multiply(arguments) {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
      sum *= arguments[i];
    }
    return sum;
}   
// console.log(multiply(1, 2, 3));


// С помощью ри курсе вычислить факториал числа 10.

function factorial(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}
// console.log(factorial(10));


// Создать функцию, которая принимает строку и возвращает перевернутую строку ('test') = 'tset'.


function reverseStr(str) {
    return str.split("").reverse().join("");
}
// console.log(reverseStr('test'));


// Написать функцию, которая проверяет является ли слово палиндромом


function checkPalindrom (str) {
    return str == str.split('').reverse().join('');
}
// console.log(checkPalindrom('madam'));
// console.log(checkPalindrom('boby'));


/* Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку,
  где каждый символ разделен пробелом и заменён на значение символа из юникода. ((hello) => "104 101 108 108 111") */

  function asUTF8Codes(str) {
    let output = "";
    for (let i = 0; i < str.length; i++) {
        output += str.charCodeAt(i) + " ";
    }
    return output.trim();
}
// console.log(asUTF8Codes('hello'));


// Написать функцию-рекурсию, которая выведет каждый символ строки в конcоль ('test') => 't' 'e' 's' 't'

function everySymbolStr(str) {
    console.log(str[0]);
    
    if (str.length > 1) {
     return  everySymbolStr(str.slice(1, str.length));
    }
}
// console.log(everySymbolStr('test'));


/* Создать две функции и дать им осмысленные названия:
1. Первая функция принимает массив и callback, возвращая строку из обработанного массив;
2. Вторая функция (callback) обрабатывает каждый элемент массива. */


// let array = ["JS", "is", "beautiful"];

function firstFunc(array, callback) {
  console.log("Value class:", array);
  callback(array);
}

firstFunc(array, function secondFunc(arr) {
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    let t = arr[i][0].toUpperCase() + arr[i].substr(1);
    str += t;
  }
//   console.log("New value:", str);
})




 



