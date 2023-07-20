// Qs   -   1

let array = [7, 9, 0, -2];
let n = 3;
console.log(array.slice(0, n));

// Qs   -   2

console.log(array.slice(array.length-n));

// Qs   -   3

let str = prompt("Please enter a string : ");
if(str.length != 0) {
    console.log("String is not empty.");
} else {
    console.log("String is empty");
}

// Qs   -   4

let character = prompt("Please enter something : ");
let index = prompt("Please enter the index no you want to check : ");
if(character.charAt(index) == character.charAt(index).toLowerCase()) {
    console.log(`Character at index ${index} is in lower case.`);
} else {
    console.log(`Character at index ${index} is not in lower case.`);
}

// Qs   -   5

let string = prompt("Enter a string : ");
console.log(string.trim());

// Qs   -   6

let element = prompt("Enter an element you want to check in array : ");
let arr = ['akhil', 'adotya', 'hatya', 'akshat', 'amit', 10, 20, 30, 40];
if(arr.indexOf(element) != -1) {
    console.log(`Your element ${element} exists in array.`);
} else {
    console.log(`Your element ${element} does not exists in array.`);
}