/* СТРОКИ */

let string = 'string test example';

/* Получить первую и последнюю букву строки */

const getFirstAndLastLetter = (str) => {
  return console.log(` '${str[0]}' - первый символ, '${str[str.length - 1]}' - последний элемент`);
}
// getFirstAndLastLetter(string);


/* Сделать первую и последнюю буквы в верхнем регистре */

function getLettersInUpperCase(str) {
  return str[0].toUpperCase() + str.slice(1, -1) + str[str.length - 1].toUpperCase();
}
// console.log(getLettersInUpperCase(string));


/* Найти положение слова string в строке */

const getSubstring = (str) => {
  return str.indexOf('string');
}
// console.log(getSubstring(string));


/* Найти положение второго пробела */

function getSecondSpace(str) {
  let target = ' ';
  let arr = [];
  let pos = 0
  
  while (true) {
  let foundPos = str.indexOf(target, pos);
  if (foundPos == -1) break;
  
    arr.push(foundPos);
  }  
    return arr[1];
  
}
// console.log(getSecondSpace(string));


/* Получить строку со 2-ого символа длинной 6 букв */

const getBetweenSecondAndSixth = (str) => {
  return str.slice(2, 7);
}
// console.log(getBetweenSecondAndSixth(string));


/* Получить строку с 1 по 7 символ */

const getStrings = (str) => {
  return str.slice(1, 8);
}
// console.log(getStrings(string));

function getYear(x, y) {
  return String(x) + y;
}
// console.log(getYear(20, 21));