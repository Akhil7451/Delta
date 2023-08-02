// i    -   a <p> with red text that says "Hey I'm red!"
// ii   -   an <h3> with blue text that says "I'm a blue h3!"
// iii  -   a <div> with a black border and pink background color with the following elements inside of it:
//      ->  another <h1> that says "I'm in a div"
//      ->  a <p> that says "ME TOO!"

let para1 = document.createElement('p');
para1.innerText = "Hey I'm red!";
document.querySelector("body").prepend(para1);
para1.classList.add("red");

let h3 = document.createElement('h3');
h3.innerText = "I'm a blue h3!";
document.querySelector("body").prepend(h3);
h3.classList.add("blue");

let div = document.createElement("div");
let h1 = document.createElement("h1");
let p = document.createElement("p");

h1.innerText = "I'm in a div";
p.innerText = "ME TOO!";

div.append(h1);
div.append(p);
document.querySelector("body").prepend(div);

// add class to box element for styling purposes
div.classList.add("box");

