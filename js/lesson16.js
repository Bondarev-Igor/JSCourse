// Functions

let num = 20; // global variable
function showFirstMessage (text) {
    console.log(text);
    let  num = 11; // local variable 
    console.log(num);
}

showFirstMessage("foo");
console.log(num);

function calc (a, b) {
    return (a + b);
}

console.log(calc( 3, 5));
console.log(calc( 4, 4));
console.log(calc( 1, 1));

//FUNCTION DECLARATION 
function ret () {
    let num = 11;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);

//FUNCTION EXPRESSION
const logger = function () {
    console.log('Hello');
};
logger();

//ARROW FUNCTION
const sum = (a, b) => a + b;
console.log(sum(7, 2));