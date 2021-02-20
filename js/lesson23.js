//Основы ООП. Прототипно-ориентированное наследование.

let str = "some string";
let strObj = new String(str);

console.log(typeof (str));
console.log(typeof(strObj));

console.dir([1, 2, 3,]);

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function (){
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);

const jonh = {
    health: 100
};

// jonh.__proto__ = soldier;

// Object.setPrototypeOf(jonh, soldier)

console.log(jonh.armor);
console.log(jonh.health);
jonh.sayHello();