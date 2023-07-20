// Array(Data Structure)

let marks = [99, 89, 80, 85, 100];
let students = ["akhil", "akshat", "amit", "hatya", "aditya"];
let info = ["Akhil", 23, 89.9];
console.log("Original array:",marks);
console.log("Original array:",students);
console.log("Original array:",info);
console.log(info[0][1]);
console.log(info[0].length);

// Array Methods

let cars = ["audi", "bmw", "xuv", "maruti"];

// push
cars.push("toyoto");
console.log(cars);

// pop
cars.pop();
console.log(cars);

// unshift
cars.unshift("toyoto");
console.log(cars);

// shift
cars.shift();
console.log(cars);

// Practice Qs

let months = ["january", "july", "march", "august"];
console.log(months);
months.shift();
months.shift();
months.unshift("june");
months.unshift("july");
console.log(months);

// indexOf()
let primary = ["red", "yellow", "blue"];
console.log(primary.indexOf('green')); // -1 (not found in the list)
console.log(primary.indexOf('yellow'));

// .includes()
console.log(primary.includes("red"));
console.log(primary.includes("green"));

// .concat()
let secondary = ["orange", "green", "violet"];
let combinedColors = primary.concat(secondary);
console.log(combinedColors);

// .reverse()
console.log(combinedColors.reverse());

// .sort()
let num = [1, 3, 5, 4, 2, 6];
console.log(num.sort());

// slice()
console.log(num.sort().slice(1, 3));

// .splice()
let colors = ["red", "yellow", "blue", "orange", "pink", "white"];
console.log(colors.splice(4));  // delete elements from index 4 to end and return them as an array [].
console.log(colors);
console.log(colors.splice(0, 2));
console.log(colors);
colors.splice(1, 0, "pink", "white");
console.log(colors); 

// Practice Qs  -   1

let pracQ = ['january', 'july', 'march', 'august'];
pracQ.splice(0, 2, 'july', 'june');
console.log(pracQ);

// Practice Qs  -   2

let pracQ2 = ['c', 'c++', 'html', 'javascript', 'python', 'java', 'c#', 'sql'];
console.log(pracQ2.reverse().indexOf('javascript'));

// nested arrays

let array = [[2, 4], [3, 6], [4, 8]];
console.log(array[0][1]);
console.log(array.length);
console.log(array[0].length);

// Practice Qs  -   create a nested array to show the following tic-tac-toe game state.


let game = [['X', null, 'O'], [null, 'X', null,], ['O', null, 'X']];
console.log(game);
game[0][1] = 0;
console.log(game);