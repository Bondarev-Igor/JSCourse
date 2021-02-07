// const obj = new Object();


const options = {
    name: 'test',
    width: 1024,
    height: 1024, 
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function () { 
        console.log('Test');
    }
};

console.log(Object.keys(options).length);
options.makeTest();
console.log(options['colors']['bg']);

// Простой пример деструктуризации:
const {border, bg} = options.colors;
console.log(border);

// console.log(options.width);
// delete options.name;
// console.log(options);
// for (let key in options){
//     if (typeof (options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`${i} : ${options[key][i]}`);
//         }
//     } else {
//         console.log(`${key} : ${options[key]}`);
//     }
// }
// let counter = 0;
// for ( let key in options){
//     counter++;
// }
// console.log(counter);

