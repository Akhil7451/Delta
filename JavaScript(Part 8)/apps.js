// for Each

let arr = [1, 2, 3, 4, 5];
// let print = function(el) {
//     console.log(el);
// }
// arr.forEach(print);
    // OR
// arr.forEach((el) => {
//     console.log(el);
// })
    // OR
arr.forEach(function(el) {
    console.log(el);
});

// forEach used on objects

let arr1 = [{
    name: "akhil",
    marks: 95
},
{
    name: "aditya",
    marks: 94
},
{
    name: "akshat",
    marks: 92
}];

arr1.forEach((student) => {
    console.log(student.marks);
})

// map

let num = [1, 2, 3, 4];
let double = num.map((el) => {
    return el * el;
});

let student1 = [{
    name: "akhil",
    marks: 95
},
{
    name: "aditya",
    marks: 94
},
{
    name: "akshat",
    marks: 92
}];
let gpa = student1.map((el) => {
    return el.marks/10;
});

// filter

let nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
let ans = nums.filter((el) => {
    // to print even numbers.
    return el % 2 == 0;         // even -> true, odd -> false
    // to print odd numbers.
    // return el % 2 != 0;         // odd -> true, even -> false
});

// every

let nums1 = [2, 4, 6, 8, 10];
let ans1 = nums1.every((el) => {
    return el % 2 == 0;
});

// some

let nums2 = [1, 2, 4, 6, 8, 10];
let ans2 = nums1.every((el) => {
    return el % 2 == 0;
});

// reduce

let nums3 = [1, 2, 3, 4, 5];
let ans3 = nums3.reduce((res, el) => res + el);

// Practice Qs - 1  =>  Find maximum in an array.

let nums4 = [2, 3, 4, 5, 3, 4, 7, 8, 1, 2];
let ans4 = nums4.reduce((max, el) => {
    if(el > max){
        return el;
    } else {
        return max;
    }
});
console.log(ans4);

// Practice Qs - 2  =>  Check if all numbers in an array are multiple of 10 or not.

let nums5 = [10, 20, 30, 40, 50];
let ans5 = nums5.every((el) => el%10 == 0);
console.log(ans5);

// Practice Qs - 3  =>  Create a function to find the min number in an array.

function getMin(nums6) {
    let min = nums6.reduce((min, el) => {
        if(min < el) {
            return min;
        } else {
            return el;
        }
    });
    return min;
}
let nums6 = [60, 20, 50, 15, 5];

console.log(getMin(nums6));

// Default parameters

function sum(a, b = 2) {
    return a+b;
}
console.log(sum(5));

// Spread

console.log(..."apnacollege");

// Spread with array literals

let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let spreadArray = [...odd, ...even];
console.log(spreadArray);

// Spread with object literals.

let data = {
    email: "abc@gamil.com",
    password: 'abcd',
};
let dataCopy = {...data, id: 123};
console.log(dataCopy);

// Rest

function sum1(...args) {
    for(let i=0; i<args.length; i++) {
        console.log("you give me: ", args[i]);
    }
}
sum1('apple', 'mango'); // you give me apple

function sum(...args) {
    return args.reduce((add, el) => add + el);
}

// Destructuring for arrays

let names = ["akhil", "aditya", "amit", "akshat", "hatya"];

// normal declaration
// let winner = names[0];
// let runnerup = names[1];

// usning destructuring
let [winner, runnerup, secondRunnerup, ...others] = names;      //others will store rest values.
console.log(winner, runnerup, secondRunnerup);  //"akhil", "aditya"

// Destructuring for objects

const student3 = {
    name: "akhil",
    age: 14,
    class: 9,
    subjects: ["hindi", "english", "maths", "science"],
    username: "akhil7451",
    pass: "abc"  
};

let {username, pass: password, city = "Noida"} = student3;    //use same variable as a key inside student3 object or else use like we used for password, if there is city then it will not change that or else create a key of name city for that object.