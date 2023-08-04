// Qs   -   1
let h1 = document.querySelector("h1");
let textarea = document.querySelector("textarea");
let textarea2 = document.querySelector("#scroll");

// (i)
h1.addEventListener("mouseout", function() {
    this.style.color = "green";
});

// (ii)     keypress    -   
textarea.addEventListener("keypress", function() {
    console.log(`You pressed ${this.value}`)
});

// (iii)    scroll - The scroll event fires when the document view has been scrolled.
textarea2.addEventListener("scroll", function() {
    console.log("Scrolled")
});

// (iv)     load    -   The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets, scripts, iframes, and images.
window.addEventListener("load", function() {
    console.log("Page completely loaded");
});

// Qs   -   2

let button = document.createElement("button");
button.innerText = "Click me!";

document.querySelector("body").append(button);

button.addEventListener("click", function() {
    this.style.backgroundColor = "green";
});

// Qs   -   4

let input = document.querySelector("input");

input.addEventListener("input", function() {
    let value = this.value.replace(/[^a-zA-Z ]/g, "");  
    // The line of code let value = this.value.replace(/[^a-zA-Z ]/g, ""); is used to replace all characters that are not letters from a-z, A-Z and space with an empty string. The regular expression /[^a-zA-Z ]/g matches any character that is not a letter from a-z, A-Z and space. The g flag is used to perform a global search (find all matches rather than stopping after the first match). The replace() method replaces all matches with an empty string.So, the line of code let value = this.value.replace(/[^a-zA-Z ]/g, ""); replaces all characters that are not letters from a-z, A-Z and space with an empty string and assigns the resulting string to the variable value.I hope this helps!
    
    document.querySelector("h2").innerText = value;
})