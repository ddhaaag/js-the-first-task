/* ЧИСЛА */

/* Получить число Pi из Math и округлить его до двух знаков после точки */

function getPI() {
    return +Math.PI.toFixed(2);
  }
  // console.log(getPI());
  
/* Найти максимальное и минимальное значения из представленного ряда 10, 17, 5, 12, 15, 99, 1 */
  
  const numbers = [10, 17, 5, 12, 15, 99, 1];
  
  const getMinMaxValue = (num) => {
    let min = Math.min( ...num );
    let max = Math.max( ...num );
    return console.log(`Минимально значение = ${min}, максимальное значение = ${max}`);
  }
  // console.log(getMinMaxValue(numbers));
  
/* С помощью Math.random:
    1. получить случайное число и округлить его до двух цифр после запятой
    2. получить случайное число от 0 до Х */
  
// 1
  function getRoundRandom() {
    return +Math.random().toFixed(2)
  }
// console.log(getRoundRandom());
  
// 2
  function getRandomNumber(x) {
    return  Math.floor(Math.random() * x) + 1;
  }
  // console.log(getRandomNumber(10));
  
  
/* Получить число из строки '100$' */
  
  function getNumberFromString(str) {
    return parseInt(str);
  }
  // console.log(getNumberFromString('100$'));