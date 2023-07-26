// Function Definition

function hello() {
    console.log("hello");
}

function printName() {
    console.log("Akhil");
}

function print1to5() {
    for(let i=1; i<=5; i++) {
        console.log(i);
    }
}

function isAdult() {
    let age = 18;
    if(age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }
}
// Function Calling

hello();

print1to5();

isAdult();


// Practice Qs  -   1

function poem() {
    console.log("Twinkle twinkle little star.⭐");
    console.log("How I wonder what you are.");
    console.log("Up above the world so high.🌍");
    console.log("Like a diamond💎 in the sky.")
    console.log("Twinkle twinkle little star.⭐");
    console.log("How I wonder what you are.");
}

poem();

// Practice Qs  -   2
// Create a function to roll a dice & always display the value of the dice(1 to 6).

function dice() {
    let random = Math.floor(Math.random() * 6) + 1;
    console.log(random);
}

dice();

// functions with arguments

function printInfo(name, age) {
    console.log(`${name}'s age is ${age}. `);
}

printInfo("Akhil", 22);

function sum(a, b) {
    console.log(a + b);
}

sum(1, 2);
sum(3, 4);

// Practice Qs  -   3
// Create a function that gives us the average of 3 numbers.

function average(a, b, c) {
    let avg = (a + b + c) / 3;
    console.log(`Average of ${a}, ${b} and ${c} is = ${avg}`);
}

average(5, 6, 4);

// Practice Qs  -   4
// Create a function that prints the multipication table of a number.

function printTable(number) {
    for(let i=1; i<=10; i++) {
        console.log(`${number} x ${i} = ${number * i}`);
    }
}

printTable(5);

// return keyword

function multipication(a, b) {
    return a * b;
}

let mul = multipication(3, 4);
console.log(mul);

// Practice Qs  -   5
// create a function that return the sum of number from 1 to n

function getSum(n) {
    let sum = 0;
    for(let i=1; i<=n; i++) {
        sum += i;
    }
    return sum;
}

console.log(getSum(10));

// Practice Qs  -   6
// Create a function that returns the concatenation of all strings in an array.

function concatenation(arr) {
    let finalStr = "";
    for(let i=0; i<arr.length; i++) {
        finalStr += arr[i];
    }
    return finalStr;
}

let arr = ["akhil", "kumar"];
console.log(concatenation(arr))

// Practice Qs  -   7

let greet = "hello";
function changeGreet() {
    let greet = "namaste";
    console.log(greet);
    function innerGreet() {
        console.log(greet);
    }
}

console.log(greet);
changeGreet();

// Function EXpressions

const sum1 = function(a, b) {
    return a + b;
}

console.log(sum1(2, 3));

// High Order Functions
    // ->  takes one or multiple functions as arguments.

function multipleGreet(func, count) {
    for(let i=1; i<=count; i++) {
        func();
    }
}
let greet1 = function() {
    console.log("hello");
}
multipleGreet(greet1, 2);
multipleGreet(function() {console.log("namaste")}, 4);

    // returns a function.

function oddEVenTest(request) {
    if(request == "odd") {
        return function(n) {
            console.log(!(n % 2 == 0));
        }
    } else if(request == "even") {
        return function(n) {
            console.log(n % 2 == 0);
        }
    } else {
        console.log("Wrong request");
    }
}
// for odd
// let request = "odd";
// let func = oddEVenTest(request);
// for even
// let request = "even";
// let func = oddEVenTest(request);

// Methods

// const calculator = {
//     add: function(a, b) {
//         return a + b;
//     },
//     sub: function(a, b) {
//         return a - b;
//     },
//     mul: function(a, b) {
//         return a * b;
//     }
// };

// Shorthand for methods in this you don't have to write function .

const calculator = {
    add(a, b) {
        return a + b;
    },
    sub(a, b) {
        return a - b;
    },
    mul(a, b) {
        return a * b;
    }
};