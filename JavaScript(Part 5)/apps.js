// Object Literals

// const student = {
//     name: "Akhil",
//     age: 21,
//     marks: 75,
//     city: "Delhi"
// };

const item = {
    price: 100.99,
    discount: 50,
    colors: ["red", "pink"]
};

let delhi = {
    latitude: "28.7041° N",
    longitude: "77.1025° E"
};


// Thread / Twitter Post   -   Create an object literal for the properties of thread / twitter post which includes - 
//                          -   username
//                          -   content
//                          -   likes
//                          -   reposts
//                          -   tags

const post = {
    username: "@akhil7451",
    content: "This is my #firstPost",
    likes: 1000,
    reposts: 10,
    tags: ["@apnacollege", "@delta"]
}
post.username;         // Output : @akhil7451

// Add/Update the value of key
//          -   change the city to "Mumbai"
//          -   Add a new property, gender: "Male"
//          -   Change the marks to "A"
//          -   Delete gender key.

const student = {
    name: "Akhil",
    age: 21,
    marks: 75,
    city: "Delhi"
};
console.log(student);
student.city = "Mumbai";
student.gender = "Male";
student.marks = "A";
delete student.gender;

// Object of Objects

const classInfo = {
    akhil : {
        grade: "A+",
        city: "Delhi"
    },
    akshat : {
        grade: "A+",
        city: "Lucknow"
    },
    aditya : {
        grade: "A+",
        city: "Meerut"
    },
    amit : {
        grade: "A+",
        city: "Dehradoon"
    },
    hatya : {
        grade: "A+",
        city: "Noida"
    }
};

// Array Of Objects

const classInfo2 = [
    {
        name: "akhil",
        grade: "A+",
        city: "Delhi"
    },
    {
        name: "akshat",
        grade: "A+",
        city: "Lucknow"
    },
    {
        name: "aditya",
        grade: "A+",
        city: "Meerut"
    },
    {
        name: "amit",
        grade: "A+",
        city: "Dehradoon"
    },
    {
        name: "hatya",
        grade: "A+",
        city: "Noida"
    }
];

// Qs   -   Generate a random number between 1 to 100

let num = Math.floor(Math.random() * 100) + 1;

// Qs   -   Generate a random number between 1 to 5

let num1 = Math.floor(Math.random() * 5) + 1;

// Guessing Game    -   User enters a max number & then tries to guess a random generated number between 1 to max.

let max = prompt("Enter a max number");
console.log(`User's max number is ${max}`);
const random = Math.floor(Math.random() * max) + 1;
let guess = prompt(`Guess the number between 1 to ${max} Or quit the game.`);
while(true) {
    if(guess == "quit") {
        console.log(`Quiting the game.`);
        break;
    }
    if(guess == random) {
        console.log(`Congrats! random number is ${random}`);
        break;
    } else if(guess < random) {
        guess = prompt(`Your guess is too small. Please try again.`);
    } else {
        guess = prompt(`Your guess is too large. Please try again.`);
    }
}