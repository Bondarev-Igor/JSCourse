// const obj = {
//     a: 10, 
//     b: 3
// };

// const copy = obj;// это ссылка на obj

// copy.a = 17;

// console.log(copy.a);
// console.log(obj.a);

function copy(mainObj) {
    let objCopy = [];
    let key;
    for (key in mainObj){
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        d: 4,
        e: 7
    }
};
const newNumbers = copy(numbers);
newNumbers.b = 132;
console.log(newNumbers);
console.log(numbers);

const add = {
    g: 14,
    t: 10
};

console.log(Object.assign(numbers, add));

const clone = Object.assign({}, add); 

const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1]= ' sadasffqe';
console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo'],
      blogs = ['worldpress', 'livejornal'],
      internet = [...video, ...blogs, 'vk', 'facebook'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [3, 4, 9];
log(...num);

const arr = [3, 8, 1];
const newArr = [...arr];

const ob = {
    one: 1,
    two: 2,
};

const newOb = {...ob};
console.log(newArr);
console.log(arr);
console.log(ob);
console.log(newOb);





    


