'use strict';

//Урок 07: Простое общение с пользователем.

// alert('Hello guest');

// const result = confirm('Are you here?');
// console.log(result);

// const answer = prompt("Вам есть 18", "18");
// console.log(answer, typeof(answer)); 

// const answers = [];

// answers[0] = prompt('What is your first name?', '');
// answers[1] = prompt('What is your last name?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(answers);


//Урок 8: Интерполяция (ES6);

// const category = 'toys';
// console.log('https://someurl.ru/' + category);
// console.log(`https://someurl.ru/${category}`);

// const user = 'Igor';
// alert(`Привет, ${user}`)

// const a = [1,2,3];

// const result = a && a.length && a.map(el => el**2) || 'empty';

// console.log(result);

// for (var i = 0; i < 5; i++) {
//    ( function (m) {
//        setTimeout ( function () {
//         console.log (m);
//    }, m * 1000)
// }) (i) 
// }

// const man = {
//     name: 'Igor',
//     age: 37,
//     sayHello(city){
//         console.log(`${this.name}, ${this.age}, ${city}`);
//     }
// };
// man.sayHello('Minsk');

// const man2 = {name: 'miha', age: 21};

// man.sayHello.bind(man2)('gomel');
 
// const numbers = {
//     sum (a,b,c,d,e) {
//         return [a,b,c,d,e].reduce((a,b)=> a+b);
//     }
// };

// const sum = numbers.sum.bind(null, 1,2,3);
// const result = sum(4, 5);
// console.log(result);

// console.log('1');
// const promise = new Promise ((res, rej) => {
//    console.log('2');
//    setTimeout(res, 1000, 3);
// });
// promise.then (console.log);

// const promise2 = new Promise ((res, rej) => {
//     setTimeout(rej, 1000, 4);
//  });
//  promise2.then (console.log);
//  setTimeout(console.log, 1000, 5);
//  console.log('6');
 
let incr = 10,
    decr = 10;

    // ++incr;
    // --decr;

    console.log(incr++);
    console.log(decr--);