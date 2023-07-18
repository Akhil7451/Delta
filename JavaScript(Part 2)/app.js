console.log("Hello World!")
console.log("Apna College.")
let a = 10;
let b = 5;
console.log(a + b);

                            // STEP - 1

// let pencilPrice = 10;
// let erasorPrice = 5;
// console.log("The total price is : ", (pencilPrice + erasorPrice), "rs.");


                            //  STEP - 2

// let pencilPrice = 10;
// let erasorPrice = 5;
// let output = "The total price is : "+(pencilPrice + erasorPrice)+ "rs.";
// console.log(output);

                            //   Step-3
// Template Litersals   -   Are used to add embedded expressions in a string.
//                          use back ticks (``).

let pencilPrice = 10;
let erasorPrice = 5;
let output = `The total price is : ${pencilPrice + erasorPrice} rs.`;       
console.log(output);

// Arithmetic Operators

let num = 10;
let num2 = 5;
console.log(num + num2);
console.log(num - num2);
console.log(num * num2);
console.log(num / num2);
console.log(num % num2); 
console.log(num ** num2);

// Unary Operator

let c = 10;
console.log(c++);
console.log(++c);

// Assignment Operators

let d = 10;
let e = 5;
d += e;
console.log(d);
d -= e;
console.log(d);
d *= e;
console.log(d);
d /= e;
console.log(d);
d **= e;
console.log(d);
d %= e;
console.log(d);

// if Statement

let age = 23;
if(age >= 18) {
    console.log("You can vote.");
}
if(age < 18) {
    console.log("You can not vote.");
}

let firstName = "Akhil";
if(firstName == "Akhil") {
    console.log(`Welcome ${firstName}`);
}

// Practice Qs  -   Create a traffic light system that shows what to do based on color.

let color = "green";

if(color == "red") {
    console.log("Stop! light color is red");
}
if(color == "yellow") {
    console.log("Ready! light color is yellow");
}
if(color == "green") {
    console.log("Go! light color is green");
}

// else if Statement.

let age1 = 14;
if(age1 >= 18) {
    console.log("You are old enough for voting!");
}
else if(age1 < 18) {
    console.log("Sorry, you have yet to be able to vote.");
}

// Marks System

let marks = 75;
if(marks >= 80) {
    console.log("A+");
}
else if(marks >= 60) {
    console.log("A");
}
else if(marks >= 33) {
    console.log("B");
}
else if(marks < 33) {
    console.log("F");
}

// else Statement

let age2 = 17;
if(age >= 18) {
    console.log("you can vote");
} else {
    console.log("you cannot vote.");
}

// Practice Qs  -   Create a system to calculate popcorn prices based on the size customer asked for:

let size = "XL";
if(size == "XL") {
    console.log("Price is Rs. 250")
} else if(size == "L") {
    console.log("Price is Rs. 200");    
} else if(size == "M") {
    console.log("Price is Rs. 100");
} else if(size == "S") {
    console.log("Price is Rs. 50");
} else {
    console.log("Invalid Size!");
}

// Nested if-else

let marks1 = 80;
if(marks >= 33) {
    console.log("Pass");
    if(marks >= 80) {
        console.log("Grade : A");
    } else {
        console.log("Grade : E");
    }
} else {
    console.log("Better luck next time!");
}

// Practice Qs  -   
// 
// 1    -   A "good string" is a string that starts with the letter 'a' & has a length > 3.
//          Write a program to find if a string is good or not.

let str = "good string";
if(str.length > 3 && str[0] === 'a') {
    console.log("This is a good string.");
} else {
    console.log("This is not a good string.")
}

// 2    -   

let num1 = 12;
if((num1 % 3 == 0) && ((num1 + 1 == 15) || (num1 - 1 == 11))) {
    console.log("Safe");
} else {
    console.log("Unsafe");
}

// truthy & falsy 

let str2 = "Akhil";
if(str2) {
    console.log("String is not empty.");
} else {
    console.log("String is Empty.");
}

// Switch Statement

let color1 = "red";
switch(color1) {
    case "red" :
        console.log("Stop");
        break;
    case "yellow" :
        console.log("Get Ready.");
        break;
    case "green" :
        console.log("Go...");
        break;
    default :
        console.log("Broken Light");
}

// Practice Qs  -   Use switch statement to print the day of the week using a number variable 'day' with value 1 to 7;
//                  1 = monday, 2 = tuesday and so on...

let day = 2;
switch(day) {
    case 1 :
        console.log("Monday");
        break;
    case 2 :
        console.log("Tuesday");
        break;
    case 3 :
        console.log("Wednesday");
        break;
    case 4 :
        console.log("Thursday");
        break;
    case 5 :
        console.log("Friday");
        break;
    case 6 :
        console.log("Saturday");
        break;
    case 7 :
        console.log("Sunday, fun day...");
        break;
    default :
        console.log("Invalid day number, Please enter number between 1-7.");
}

// Alert & Prompt   -   alert displays an alert message on the page, and prompt display a dialog box that asks user for some input.

console.log("This is a normal log");
//out of topic
console.error("this is an error message");
console.warn("This is warning.");

// example of alert & prompt

let firstName1 = prompt("Enter you first name : ");
let lastName = prompt("Enter you last name : ");
console.log(`Hello ${firstName1 +" "+ lastName}`);