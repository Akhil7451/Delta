// Factory Function

// function PersonMaker(name, age) {
//     const person = {
//         name: name,
//         age: age,
//         talk() {
//             console.log(`Hi, my name is ${this.name}`);
//         },
//     };
//     return person;
// }

// let p1 = PersonMaker("akhil", 22);
// let p2 = PersonMaker("aditya", 34);

// Constructors -   doesn't returns anything and starts with capital letters.

// function Person(name, age) {
//     this.name = name;
//     this.age = age;
// }

// Person.prototype.talk = function() {        //to add talk function to prototype of person this will be available for every instance/object created using this constructor.
//     console.log(`Hi, my name is ${this.name}`);
// }

// let p1 = new Person("akhil", 22);
// let p2 = new Person("aditya", 34);

// Classes

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     talk() {
//         console.log(`Hi, my name is ${this.name}`);
//     }
// }

// let p1 = new Person("akhil", 22);
// let p2 = new Person("aditya", 34);

// Inheritance

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

class Student extends Person{
    constructor(name, age, marks) {
        super(name, age);   //parent class constructor is being called
        this.marks = marks;
    }
}

let stu1 = new Student("akhil", 22, 95);

class Teacher extends Person{
    constructor(name, age, subject) {
        super(name, age);   //parent class constructor is being called
        this.subject = subject;
    }
    teach() {
        console.log(`I am teaching ${this.subject}`);
    }
}

let teach1 = new Teacher("shradha", 26, "delta");