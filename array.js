/* МАССИВЫ */


// Используя функцию, найти последний элемент массива, не изменяя его.

function getLastElem(arr) {
  return arr[arr.length - 1];
}
// console.log(getLastElem([4, 10, 24, 1, 55]))


// Создать такую функцию, которая принимала бы массив [1,3,6], а возвращала новый массив с дублированными элементами [1,3,6,1,3,6].

function doubleArray(arr) {
  return [...arr, ...arr];
}
// console.log(doubleArray([1, 3, 6]))


// Создать такую функцию, которая принимала бы любое число, а возвращала массив, заполненный числами от 1 до n.

function returnArray(n) {
  let arr = [];
  for (let i = 1; i < n; i++) {
    arr.push(i);
  }
  return arr;
}
// console.log(returnArray(5));


// Создать такую функцию, которая принимала бы любое число массивов и удаляла из каждого массива первый элемент, а возвращала массив оставшихся значений ([1, 2, 3], ["x", "y", "z"] → [[2, 3], ["y", "z"]])"

function concateArray(arr) {
  return arr.map(item => {
    return item.slice(1)
  })
}
// console.log(concateArray([1, 2, 3], ["x", "y", "z"]));


// Создать функцию, которая упорядочит буквы в строке "екважбигёзд" в алфавитном порядке и возвратит строку в обратном порядке ("кизжёедгвба").

function reverse(str) {
  return str.split('').sort().reverse().join('');
}
// console.log(reverse('екважбигёзд'));


// Используя функцию, отсортировать массив [5, 2, -1, 6, 9, -9, 3] в обратном порядке.

function sortReverse(arr) {
  return arr.sort((a, b) => b - a);
} 
// console.log(sortReverse([5, 2, -1, 6, 9, -9, 3]));


/* Создать функцию, которая принимает 3 аргумента: любой произвольный массив начальный номер элемента в массиве конечный номер,
 Ваша функция должна вернуть новый массив, состоящий из элементов исходного массива согласно аргументам 
(с-по) (getNewArray(“а, б, в, г, д, е”, 1,3) → [б, в, г]), не изменяя исходный массив и не используя циклы. */

function getNewArray(arr, start, finish) {
  return arr.slice(start, finish + 1);
}
// console.log(getNewArray(['а', 'б', 'в', 'г', 'д', 'е'], 1, 3))


// Удвоить элементы массива, не используя циклы.,
function doubleArray(arr) {
  let doubleArr = arr.map( num => num * 2);
  return doubleArr;
}
// console.log(doubleArray([1, 2, 3]));


// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы.

function delSomeValue(arr) {
  let newArr = [...arr];
  newArr.splice(2, 2);
  return newArr;
}
// console.log(delSomeValue([1, 2, 3, 4, 5]));


// Удалить из массива [1, 2, 3, 4, 5] второй и третий элементы и на их место вставить “три” и “четыре” соответственно.

function replaceItem(arr) {
   let newArr = [...arr];
  newArr.splice(2, 2, 'три', 'четыре');
  return newArr;
}
// console.log(replaceItem([1, 2, 3, 4, 5]));


// Вставить в произвольный массив любое значение после второго элемента.

function addValue(arr) {
    let newArr = [...arr];
    newArr.splice(2, 0, 'кот', 'собака', 'тигр');
    return newArr;
}
// console.log(addValue([1, 2, 3, 4, 5]));


// Отсортировать массив массивов таким образом, чтобы вначале шли массивы с наименьшей длиной. Создать копию произвольного массива"
const arr = [
  [1, 2, 3, 4, 5, 6, 7],
  [5, 10, 15, 20],
  [100, 200],
  [3, 6, 9, 12, 15]
];

function arrSort(arr) {
  let newArr = [...arr];

  return newArr.sort((a, b) => {
   return (a.length > b.length) ? 1 : -1;
  });
}
// console.log(arrSort(arr));

/* Отсортировать массив объектов по возрастающему количеству ног животных: */
const animals = [
  {kind: "tarantula", info: {legs: 8, eyes: 8}},
  {kind: "french bulldog", info: {legs: 4, eyes: 2}},
  {kind: "human", info: {legs: 2, eyes: 2}},
  {kind: "lobster", info: {legs: 10, eyes: 2}} 
];

function objSort(arr) {
  let newArr = [...arr];
  return newArr.sort((a, b) => {
    return (a.info.legs < b.info.legs) ? -1 : 1;
  });
}
// console.log(objSort(animals));

/* Написать функцию, которая принимает массив услуг и два числа, представляющих собой время исполнения услуг,
 а также возвращает все услуги, находящиеся в диапазоне времени исполнения и отсортированные от меньшего времени исполнения к большему.*/
 const services = [ 
  {service: "service1", executionTime: 56}, 
  {service: "service2", executionTime: 97}, 
  {service: "service3", executionTime: 23},
  {service: "service4", executionTime: 65}, 
  {service: "service5", executionTime: 2}, 
  {service: "service6", executionTime: 73}, 
  {service: "service7", executionTime: 82}, 
  {service: "service8", executionTime: 19}, 
  {service: "service9", executionTime: 33},
  {service: "service10", executionTime: 42}, 
  ];

//  Например, filterServices(services, 20, 60).

 function filterServices(arr, start, end) {
    let sortArr = arr.filter((item) => {
      return item['executionTime'] > start && item['executionTime'] < end;
    })
    // return sortArr;

    return sortArr.sort((a, b) => {
      return a.executionTime - b.executionTime;
    })
 }
//  console.log(filterServices(services, 20, 60));
//  console.log(filterServices(services, 10, 90));
//  console.log(filterServices(services, 1, 5));
//  console.log(filterServices(services, 90, 100));
//  console.log(filterServices(services, 50, 60));