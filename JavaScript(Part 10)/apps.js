// onclick

// for one button.
// let btn = document.querySelector("button");
// console.dir(btn);

// // Method 1
// btn.onclick = function() {
//     console.log("button was clicked");
//     // alert("button was clicked");    //show an alert on clicking the button
// };

// // Method 2
// function sayHello() {
//     alert("Hello!");
// }

// btn.onclick = sayHello;

/* get all buttons */
// let btns = document.querySelectorAll("button");

// for(btn of btns) {
//     btn.onclick = sayHello;
// }

// Functions

// function sayHello() {
//     alert("Hello!");
// }

// function sayEnter() {
//     console.log("you entered a button");
// }

// function sayDoubleClicked() {
//     alert("double clicked");
// }

// function changeColor() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// }

// onmouseenter

// for(btn of btns) {
//     btn.onmouseover = () => {
//         console.log("you entered a button");
//     }
// }

// OR

// for(btn of btns) {
//     btn.onmouseenter = sayEnter;
// }

// addEventListener for multiple buttons.
// for(btn of btns) {
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("mouseenter", sayEnter);
//     // btn.addEventListener("dblclick", sayDoubleClicked);

//     // this in eventListener

//     btn.addEventListener("click", function() {
//         console.log(this);
//     })
//     btn.addEventListener("click", function() {
//         console.log(btn.innerText);
//     })
// }

// let btn = document.querySelector("button");
// let p = document.querySelector("p");
// let h1 = document.querySelector("h1");
// let h3 = document.querySelector("h3");
// let input = document.querySelector("input");

// change the color of every to blue when it is clicked.

// METHOD 1

// btn.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// p.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h1.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// h3.addEventListener("click", function() {
//     console.log(this.innerText);
//     this.style.backgroundColor = "blue";
// });

// METHOD 2

// btn.addEventListener("click", changeColor);

// p.addEventListener("click", changeColor);

// h1.addEventListener("click", changeColor);

// h3.addEventListener("click", changeColor);

// // Keyboard Events

// btn.addEventListener("click", function(event) {
//     console.log(event);
// });

// // keydown

// input.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log(event.key);
//     console.log(event.code);
//     console.log("key was pressed");
// });

// form events

let form = document.querySelector("form");
let user = document.querySelector("#user");

// Form Event
// form.addEventListener("submit", function(event) {
//     event.preventDefault();
//     alert(`Hello ${input.value}`);
// });

// let user = document.querySelector("#user");
// let pass = document.querySelector("#pass");

// form.addEventListener("submit", function(event) {
//     event.preventDefault(); 
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
// });

// element property in form object

form.addEventListener("submit", function(event) {
    event.preventDefault();
//     let user = this.elements[0];    //form.elements[0];
//     let pass = this.elements[1];    //form.elements[1];
//     console.log(user.value);
//     console.log(pass.value);
//     alert(`Hi ${user.value}, your password is set to ${pass.value}`);
});

// change event

user.addEventListener("change", function() {
    console.log("change event");
    console.log("final value = ", this.value);
});

// input event

user.addEventListener("input", function() {
    console.log("input event")
    console.log("final value = ", this.value);
});