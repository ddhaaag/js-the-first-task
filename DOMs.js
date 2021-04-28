/* Получить и вывести в консоль:
1. head
2. body
3. все дочерние элементы body
4. первый div и все его дочерние узлы:
4.1 вывести все дочерние узлы в консоль
4.2 вывести все дочерние узлы в консоль кроме первого */

// 1
const head = document.head;
// console.log(head);

// 2
const body = document.body;
// console.log(body);

// 3
const bodyChildren = document.body.children;
for (let i = 0; i < bodyChildren.length; i++) {
    // console.log(bodyChildren[i]);
}

// 4
const firstDiv = document.querySelector('div');
const divChildren = firstDiv.children;
for (let i = 0; i < divChildren.length; i++) {
    // console.log(divChildren[i]);
}

for (let i = 1; i < divChildren.length; i++) {
    // console.log(divChildren[i]);
}

