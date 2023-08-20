// let n = 5;

// for(let i=0; i<n; i++) {
//     console.log("Hello, ", i);
// }

// process.argv
// let args = process.argv;
// for(let i=2; i<args.length; i++) {
//     console.log("Hello to ", args[i]);
// }

// module.export
// const math = require("./math");
// console.log(math.sum(2, 4));

// module.export (requiring directories)

// const info = require("./Fruits");

// console.log(info);

// Package global
// const figlet = require("figlet");   //we will not use (/) for requiring package

// figlet("Hello World!!", function (err, data) {
//     if (err) {
//       console.log("Something went wrong...");
//       console.dir(err);
//       return;
//     }
//     console.log(data);
// });

// import
import {sum, PI} from "./math.js";
import { generate } from "random-words";

console.log(sum(2, 4));
console.log(generate());

