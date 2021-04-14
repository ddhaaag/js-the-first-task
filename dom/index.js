document.addEventListener('DOMContentLoaded', function () {
    console.clear();
    // ваш код поместить тут

  /*  Создать функцию которая принимает два.
    Функция проверяет является ли первый элемент родителям для второго элемента isParent(parent, child) => true || false */

    function isParent(parent, child) {
      return (parent.contains(child)) ? true : false;
}

  // console.log(isParent(document.querySelector('article'), document.querySelector('p')));
  // console.log(isParent(document.querySelector('ul'), document.querySelector('li')));
  // console.log(isParent(document.querySelector('li'), document.querySelector('li > a')));
  // console.log(isParent(document.querySelector('li'), document.querySelector('a')));


  // Найти элемент который находится перед списком ul

  const ul = document.querySelector('ul');
  // console.log(ul.previousElementSibling);


  // Найти параграф и получить его текстовые содержимое

  const para = document.querySelector('p');
  // console.log(para.textContent);


 /* Создать функцию, которая принимает в качестве аргумента узел DOM 
  и возвращает информацию виде объекта о типе узла, имени узла и количестве дочерних узлов. */

  function getInfoAboutDOM(node) {
    return console.log(`Типо узла: ${node.nodeType}, имя узла: ${node.nodeName}, количестве дочерних узлов: ${node.children.length}`);
  }
  // console.log(getInfoAboutDOM(document.querySelector('ul')));


  // Найти список и добавить ему класс "list"

  ul.className = 'list';

});


  
