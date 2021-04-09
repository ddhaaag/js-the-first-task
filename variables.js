/*ПЕРЕМЕННЫЕ */

// Придумать название для переменных, которые описывают (let, const):

// 1. имя (постоянное)
// const name = 'Vitali';

// 2. фамилия (постоянное)
// const surname = 'Kachanovich';

//  3. возраст (может изменяться)
// let age = 27;

// 4. информация о пользователе ( может изменяться)
// let isMarrige = false;



//Что будет в консоле и почему:

// 1
// console.log(test); // undefined из-за hoisting
// var test = 'string';

// 2
// var x = 'string';
// var x = 'string 2';
// console.log(x); // 'string 2', перезапишет вторую переменную

// 3
// console.log(test);
// let test = 'string'; // будет ошибка

// 4
// const x = 'string';
// const x = 'string 2';
// console.log(x); // будет ошибка, примитивы нельзя переназначить 

// 5
// let num = 12;
// let num = 1;
// console.log(num); // будет ошибка, примитивы нельзя переназначить