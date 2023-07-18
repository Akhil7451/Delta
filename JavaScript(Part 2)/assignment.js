// Qs   -   1

let num = 50;
if(num % 10 == 0) {
    console.log("good");
} else {
    console.log("bad");
}

// Qs   -   2

let name = prompt("Enter your name : ");
let age = prompt("Enter your age : ");
console.log(`${name} is ${age} years old.`);

// Qs   -   3

let quarter = 1;
switch(quarter) {
    case 1 :
        console.log("Months in Quarter 1 : January, February, March");
        break;
    case 2 :
        console.log("Months in Quarter 2 : April, May, June");
        break;
    case 3 :
        console.log("Months in Quarter 3 : July, August, September");
        break;
    case 4 :
        console.log("Months in Quarter 4 : October, Novermber, December");
        break;
    default : 
    console.log("Invalid!, please enter value between 1-3"); 
}

// Qs   -   4

 let str = "bkhil kumar";
 if(str.length > 5 && (str[0] == "a" || str[0] == "A")) {
    console.log("golden string");
 } else {
    console.log("bad string");
 }

//  Qs  -   5

let num1 = 10;
let num2 = 30;
let num3 = 20;
if(num1 > num2 && num1 > num3) {
    console.log(`Largest number is ${num1}`);
} else if(num2 > num1 && num2 > num3) {
    console.log(`Largest number is ${num2}`);
} else {
    console.log(`Largest number is ${num3}`);
}

// Qs   -   6

let number1 = 32;
let number2 = 47852;
if((number1 % 10) == (number2 % 10)) {
    console.log(`${number1} and ${number2} have the same last digit which is ${number1 % 10}`);
} else {
    console.log(`${number1} and ${number2} don't have the same last digit`)
}
