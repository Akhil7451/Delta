// Creating HTML structure using JS

let div1 = document.createElement("div");
div1.classList.add("outerdiv");

let heading1 = document.createElement("h2");
heading1.innerText = "Generate a random color";

let button1 = document.createElement("button");
button1.innerText = "Generate Color";

let div2 = document.createElement("div");
div2.classList.add("container");

let p1 = document.createElement("p");
p1.innerText = "This is your new color"
p1.classList.add("para");


document.querySelector("body").append(div1);
document.querySelector(".outerdiv").append(heading1);
document.querySelector(".outerdiv").append(button1);
document.querySelector(".outerdiv").append(div2);
document.querySelector(".container").append(p1);

// functional code

function getRandomColor() {
    console.log("color is updated");
    let r = Math.floor((Math.random()* 256));
    let g = Math.floor((Math.random()* 256));
    let b = Math.floor((Math.random()* 256));
    let color = `rgb(${r}, ${g}, ${b})`;
    return color;
}

button1.addEventListener("click", function() {
    let randomColor = getRandomColor();
    heading1.innerText = randomColor;
    heading1.style.color = randomColor;
    div2.style.backgroundColor = randomColor;
    // button1.style.backgroundColor = randomColor;
});