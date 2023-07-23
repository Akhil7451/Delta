// Qs   -   1

let arr = [1, 2, 3, 4, 5, 6, 2, 3];
let num = 2;
console.log(arr);
for(let i=0; i<arr.length; i++) {
    if (arr[i] === num) {
        arr.splice(i, 1);
    }
}
console.log(arr);

// Qs   -   2

let number = 287152;
let count = 0;
let copy = number;
while(copy > 0) {
    count++;
    copy = Math.floor(copy/10);
}
console.log(count);

// Qs   -   3

let number1 = 287152;
let sum = 0;
let copy1 = number1;
console.log(number1);
while(copy1 > 0) {
    digit = copy1 % 10; // get last digit of the remaining value
    sum += digit;
    copy1 = Math.floor(copy1/10);
}
console.log(sum);

// Qs   -   4

let n = prompt("Enter a number you want factorial of :");
let factorial = 1;
for(let i=1; i<=n; i++) {
    factorial *= i ;
}
console.log(`Factorial of ${n} = ${factorial}`);

// Qs   -   5

let array = [1, 3, 5, 2, 4, 9, 8, 10]
let largest = 0;
for(let i=0; i<array.length; i++) {
    if(largest < array[i]) {
        largest = array[i];
    }
}
console.log(`Laregst number in an array ${array} is : ${largest}`);