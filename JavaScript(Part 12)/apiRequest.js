// let url = "https://catfact.ninja/fact";

// fetch(url)
// .then((response) => {

//     // // Accessing data
//     // response.json().then((data) => {       //To make the response readable 
//     //     console.log(data);
//     // });

//     return response.json();  // To get the actual response object and not just a promise.
// })
// .then((data) => {
//     console.log("data1 = ", data);
//     return fetch(url);
// })
// .then((response) => {
//     return response.json();
// })
// .then((data2) => {
//     console.log("data2 = ", data2);
// })
// .catch((error) => {
//     console.log("ERROR : ", error);
// })

// Using Fetch with async/await

let url = "https://catfact.ninja/fact";

async function getFact() {
    try {
        let res = await fetch(url);
        let data = await res.json();
        console.log(data);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(data2);
    } catch (error) {
        console.log(error);
    }
    console.log("bye");
}

getFact();
    