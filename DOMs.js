/* Получить и вывести в консоль:
1. head
2. body
3. все дочерние элементы body
4. первый div и все его дочерние узлы 
4.1 вывести все дочерние узлы в консоль
4.2 вывести все дочерние узлы в консоль кроме первого */

const head = document.head;
// console.log(head);

const body = document.body;
// console.log(body);

const bodyChild = document.body.children;
// console.log(bodyChild);

const firstDiv = document.querySelector('div');
// console.log(firstDiv);

// console.log(firstDiv.children);

