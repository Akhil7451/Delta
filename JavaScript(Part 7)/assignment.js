// Qs   -   1
let array = [5, 10, 12];
const arrayAverage = (array) => {
    let total = 0;
    for(let i=0; i<array.length; i++) {
        total += array[i];
    }
    return total / array.length;
};

console.log(arrayAverage(array));

// Qs   -   2

let n = 10;
const isEven = (n) => {
    if(n % 2 === 0) {
        console.log("Even");
    } else {
        console.log("Odd");
    }
};
console.log(isEven(n));

// Qs   -   3

const object = {
    message: "Hello, World!",
    logMessage() {
        console.log(this.message);
    }
};

setTimeout(object.logMessage, 1000);
// This will show undefined in console.

// Qs   -   4

let length  = 4;
function callback() {
    console.log(this.length);
}
const object1 = {
    length: 5,
    method(callback) {
        callback();
    },
};

object.method(callback, 1, 2);
// Output will be 0 because for callback this keyword is for windows object.