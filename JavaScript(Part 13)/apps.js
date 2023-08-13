// let btn = document.querySelector("button");
// let p = document.querySelector("p");

// // CAT FATS

// // let url = "https://catfact.ninja/fact";

// // btn.addEventListener("click", async () => {
// //     let fact = await getFact();             //await is used beacause after calling getFact first it will return a promis then will give us a fact so to wait untill we get facts we used await .
// //     p.innerText = fact;  
// // });

// // async function getFact() {
// //     try {
// //         let res = await axios.get(url);
// //         return res.data.fact;
// //     } catch (error) {
// //         console.log("ERROR : ". error);
// //         return "No fact found...";
// //     }
// // }

// // DOGS IMAGE API

// let img = document.querySelector("img");

// let url2 = "https://dog.ceo/api/breeds/image/random";

// btn.addEventListener("click", async () => {
//     let link = await getFact();             //await is used beacause after calling getFact first it will return a promis then will give us a fact so to wait untill we get facts we used await .
//     img.setAttribute("src", link)
// });

// async function getFact() {
//     try {
//         let res = await axios.get(url2);
//         return res.data.message;
//     } catch (error) {
//         console.log("ERROR : ". error);
//         return "No Image found...";
//     }
// }

// Sending Headers  -   it will give data in html format but we want in json format so we have to add header.

// let url = "https://icanhazdadjoke.com/";

// async function getJoke() {
//     try {
//         const config = {headers: {Accept: "application/json"}};  //header added to the request to get the data in json format.
//         let res = await axios.get(url, config);     //pass the header with url
//         console.log(res.data.joke);
//     } catch (error) {
//         console.log("ERROR : ", error);
//     }
// } 

// UPDATING QUERY STRINGS

let url = "http://universities.hipolabs.com/search?name=";

let button = document.querySelector("button");

button.addEventListener("click", async () => {
    let country = document.querySelector("input").value;
    let colArr = await getColleges(country);
    show(colArr);
});

function show(colArr) {
    let list = document.querySelector("#list");
    
    for(col of colArr) {
        console.log(col.name);
        let li = document.createElement("li");
        li.innerText = col.name;
        list.appendChild(li);
    }
}

async function getColleges(country) {
    try {
        let res = await axios.get(url+country);
        return res.data;
    } catch (error) {
        console.log("ERROR : ", error);
        return[];
    }
}