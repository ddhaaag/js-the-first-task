/* ЦИКЛЫ */


/* В строке "Я стану крутым программистом" сделать первую букву каждого слова в верхнем регистре" */

// let become = "Я стану крутым программистом";

function makeFirstLetterUpperCase(str) {
    let newStr = str.split(' ').map(item => item[0].toUpperCase() + item.slice(1));
    return newStr.join(' ');
  }
  // console.log(makeFirstLetterUpperCase(become));
  // console.log(become)
  
  
/* Вычислить факториал числа 9 (факториал числа - это произведение всех натуральных чисел от 1 до n включительно. например, 2! = 21 или 6! = 654321) . */
  
  function getFactorial(num) {
    let result = 1;
    
    for (let i = num; i > 0; i--) {
      result *= i;
    }
    return result;
  }
  // console.log(getFactorial(9));
  
  
/* Создать строку "Просветление наступит через: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1" */
  
  function bright(num) {
    let output;
    for (let i = num; i > 0; i-- ) {
     output = console.log(`Просветление наступит через: ${i}`);
    }
    return output;
  }
  // console.log(bright(10));
  
  
/* Найти и вывести в консоль все нечетные числа от 1 до 20 включительно. */
  
  function getOdd(x, n) {
      for (let i = x; i <= n; i++) {
        if (i % 2 == 0) continue;
        console.log(i);
      }
  }
  // console.log(getOdd(1, 20));
  
  
/* На основе строки "теперь я мастер циклов javascript" создать новую строку, где первые буквы каждого слова будут в верхнем регистре и будут отсутствовать пробелы. */
  
  let master = 'теперь я мастер циклов javascript';
  
  function getNewString(str) {
    let newStr = str.split(' ').map(item => item[0].toUpperCase() + item.slice(1));
    return newStr.join('');
  }
  // console.log(getNewString(master));