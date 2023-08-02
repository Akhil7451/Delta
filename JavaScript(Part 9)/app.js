// getElementById

// let imgObj = document.getElementById("mainImg");    //create an object of mainImg id and store in imgObj.
// console.dir(imgObj);                                //to access all the propertiesof this object.
// imgObj.src = "assets/creation_1.png";               //to change the value of .


// getElementByClassName

// let smallImages = document.getElementsByClassName("oldImg");
// for(let i=0; i<smallImages.length; i++) {
//     smallImages[i].src = "assets/spiderman_img.png";    //src of all three images are changed to the src of main image.
//     console.dir(smallImages[i].src);
// }

// getElementByTagName
// console.dir(document.getElementsByTagName("p"));         //create an HTML collection of tag "p".
// document.getElementsByTagName("p")[1].innerText = "abc"; //change the inner text of p tag at index no 1 to "abc".

// querySelector

// console.dir(document.querySelector("h1"));              //Selects first h1 element.
// console.dir(document.querySelector("#description"));    //Selects first element that have id 'description'.
// console.dir(document.querySelectorAll(".oldImg"));      //Selects all elements that have class 'oldImg'.
// console.dir(document.querySelectorAll("div a"));        //Selects all anchor tags inside div.

// let para = document.querySelector("p");
// para.innerText = "I am Peter Parker.";
// para.innerHTML = "I am <b>Peter Parker</b>"

// let heading = document.querySelector("h1");
// // heading.innerText = "Iron Man";
// heading.innerHTML = `<u>${heading.innerText("h1")}</u>`;


// let heading = document.querySelector("h1");
// heading.classList.add("green");

let box = document.querySelector(".box");
box.classList.add("yellowBg");

let img = document.querySelector("#mainImg");
img.previousElementSibling.style.color = "green";