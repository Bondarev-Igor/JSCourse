const arr = [1, 2, 4, 5, 6, 8,];
// arr.pop();
// console.log(arr);
// arr.push(10);
// console.log(arr);
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr){
//     console.log(value);
// }
 
arr.forEach(function (item, i, arr) {
    console.log(`${i}: ${item} inside ${arr}`);
});

const str = prompt('', '');
const products = str.split(', ');
console.log(products);