// this keyword

const student = {
    name: "Akhil",
    age: 22,
    eng: 95,
    math: 93,
    phy: 97,
    getAvg() {
        console.log(this);
        let avg = (this.eng + this.math + this.phy) / 3;
        console.log(`Average of 3 subjects is ${avg}.`);
    } 
}
console.log(student.getAvg());

// try & catch 

try {
    console.log(a);
} catch(err) {
    // handle error here...
    console.log("variable a doen't exist.");
    console.log(err);
}

// Arrow Functions

const sum = (a, b) => {
    console.log(a + b);
}

const cube = (n) => {
    return n * n * n;
}

const power = (a, b) => {
    return Math.pow(a, b);
};

// Implicit returns

const mul = (a, b) => a * b;

// Set Timeout

console.log("hi there!");
setTimeout(() => {
    console.log('timeout function called!');
}, 2000);
console.log("welcome to");

// Set Interval

// console.log("hi there!");
// let id = setInterval(() => {
//     console.log("interval function called!");
// }, 2000);

// this with arrow and normal function.

const student1 = {
    name: "akhil",
    marks: 95,
    prop: this,
    getName: function() {
        console.log(this);  //Parent's scope => student object
        return this.name;
    },

    // here It's scope is global object which is window.
    getMarks: () => {
        console.log(this);  //Parent's scope => windows
        return this.marks;
    },
    getInfo1: function() {
        setTimeout(() => {
            console.log(this);  //scope object => student
        }, 2000);
    },
    getInfo2: function() {
        setTimeout(function() {
            console.log(this);  //Scope of funciton will be the parent i.e. window,
        }, 2000);
    },
};

// Practice Question 1 
    // Write an arrow function that returns the square of a number 'n'

// const square = (n) => {
//     return n * n;
// }

        //OR

const square = (n) => n * n;
console.log(square(5));

    // Write a function that prints "Hello World" 5 times at interval of 2s each.

let id = setInterval(() => {
    console.log("Hello World!");
}, 2000);
setTimeout(() => {
    clearInterval(id);
}, 10000);