// async function greet() {
//     //use async keyword to make a normal function as async function.
//     //its a normal function but after using async this behaves as async function which has promis function.
//     // abc.abc();                   //give error so reject method will execure and status will be rejected of promise.
//     // throw "some random error.";     //another way to through some error.
//     return "hello!";          
// }

// greet()
// .then((result) => {
//     console.log("promise resolved!");
//     console.log("result was : ", result);
// })
// .catch((error) => {
//     console.log("promise rejected with error : ", error);
// });

// // let demo = async () => {
// //     return 5;
// // }

// // Await Keyword

// function getNum() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let num = Math.floor(Math.random() * 10) + 1;
//             console.log(num);
//             resolve();
//         }, 1000);
//     });
// }

// async function demo() {
//     await getNum();
//     await getNum();
//     await getNum();
// }


// let h1 = document.querySelector("h1");

// function colorChange(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             // create a logic for rejection
//             let num = Math.floor(Math.random() * 10) + 1;
//             if(num > 3) {
//                 reject("promise reject");
//             }
//             h1.style.color = color;
//             resolve("color changed!");
//         }, delay);
//     });
// }

// async function show() {
//     // use trycatch to avoid the execution of code due to error.
//     try {
//         await colorChange("violet", 1000);
//         await colorChange("indigo", 1000);
//         await colorChange("blue", 1000);
//         await colorChange("green", 1000);
//         await colorChange("yellow", 1000);
//         await colorChange("orange", 1000);
//         await colorChange("red", 1000);
//     } catch (error) {
//         console.log("error caught");
//         console.log(error);
//     }
//     let n = 5;
//     console.log(n);
//     console.log("new number is : ", n + 3);
// }


// ACCESSING JSON DATA

// JSON response form api
let jsonRes = '{"fact":"Cats see six times better in the dark and at night than humans.","length":63}';

// parsing JSON data into js objects
const parsedJsonObj = JSON.parse(jsonRes);
console.log(parsedJsonObj);

// JS object
let student = {
    name: "Akhil",
    marks: 95.
};

//Exporting JS object to JSON format 
let jsonStud = JSON.stringify(student);

console.log(jsonStud);