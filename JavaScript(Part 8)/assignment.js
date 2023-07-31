// Qs   -   1

let arr = [1, 2, 3, 4];
let square = arr.map((num) => num*num);
console.log("Square is: ", square);
let sum = square.reduce((res, el) => res+el);
console.log("Sum is: ", sum);
let avg = sum / arr.length;
console.log("Average is: ", avg);

// Qs   -   2

let arr1 = [5, 10, 15, 20];
let newArr = arr1.map((el) => el + 5);
console.log(newArr);

// Qs   -   3

let string = ["akhil", "amit", "aditya", "akshat", "hatya"];
let newstr = string.map((el) => el.toUpperCase());
console.log(newstr);

// Qs   -   4

const doubleAndReturnArgs = (arr2, ...args) => [
    ...arr2,
    ...args.map((el) => el*2),
];

console.log(doubleAndReturnArgs([1, 2, 3], 4, 4));
console.log(doubleAndReturnArgs([2], 10, 4));

// Qs   -   5

const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2});
console.log(mergeObjects({a: 1, b: 2}, {c: 3, d: 4}));