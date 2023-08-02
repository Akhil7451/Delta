// Qs   -   1

let input = document.createElement("input");
let button = document.createElement("button");

button.innerText = "Click me";

document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Qs   -   2

input.setAttribute("placeholder", "username");
button.setAttribute("id", "btn");

// Qs   -   3

let btn = document.querySelector("#btn");
btn.classList.add("btnStyle");

// Qs   -   4

let h1 = document.createElement('h1');
// to make the text underlined, we can use <u></u>.
h1.innerHTML='<u>DOM Practice<u>';
document.querySelector("body").append(h1);

h1.classList.add("h1Style");

// Qs   -   5

let para = document.createElement("p");
para.innerHTML = "Apna College <b>Delta</b> Practice";
document.querySelector("body").append(para);
