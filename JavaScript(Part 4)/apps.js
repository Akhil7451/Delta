// For loops

for(let i=1; i<6; i++) {
    console.log(i);
}

// Print all odd numbers (1-15)

for(let i=1; i<=15; i=i+2) {
    console.log(i);
}

// Print all even numbers(2-10)

for(let i=2; i<=20; i=i+2) {
    console.log(i);
}

// Print the multiplication table of 5

let num = 5;
for(let i=1; i<=10; i++) {
    console.log(`${num} x ${i} = ${num*i}`);
}

// Nested for Loop

for(let i=1; i<=3; i++) {
    console.log(`outer loop ${i}`);
    for(let j=1; j<=3; j++) {
        console.log(j);
    }
}

// while loop

let j = 1;
while(j < 5) {
    console.log(j);
    j++;
}

// Favourite Movie

let favourit = 'avatar';
let guess = prompt("Guess my favourite movie");
while((guess != favourit) && (guess != 'quit')) {
    if(guess == 'quit') {
        console.log("You are quiting the game.");
    }
    guess = prompt("Wrong guess. Please try again!");
}
if(guess == favourit) {
    console.log(`Congrats!, favourite movie is ${guess}`);
}

// break keyword

let k = 1;
while(k < 5) {
    if(k == 3) {
        break;
    }
    console.log(k);
    k++;
}

// Loops with Arrays

let fruits = ['mango', 'apple', 'banana', 'litchi', 'orange'];
for(let i=0; i<fruits.length; i++) {
    console.log(i, fruits[i]);
}

// Nested Loops with Nested Arrays

let heroes = [
    ['ironman', 'spiderman', 'thor'],
    ['superman', 'wonder woman', 'flash']
];
for(let i=0; i<heroes.length; i++) {
    console.log(i, heroes[i]);
    for(let j=0; j<heroes[i].length; j++) {
        console.log(heroes[i][j]);
    }
}

// for of Loop

let fruits1 = ['mango', 'apple', 'banana', 'litchi', 'orange'];
for (fruit of fruits1) {
    console.log(fruit);
}
for(char of 'apnacollege') {
    console.log('Character:', char);
}

let heroes1 = [
    ['ironman', 'spiderman', 'thor'],
    ['superman', 'wonder woman', 'flash']
];
for (list of heroes1){ // destructuring assignment to get first element from
    for (items of list) {
        console.log(items);
    }
}
