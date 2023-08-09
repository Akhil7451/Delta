// Visualizing the Call Stack

function one() {
    return 1;
}

function two() {
    return one() + one();
}

function three() {
    let ans = two() + one();
    console.log(ans);
}

three();

// Callback Hell    =>  Callback nesting

// let h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//     setTimeout(() => {
//         h1.style.color = color;
//         if(nextColorChange) nextColorChange();
//     }, delay);
// }

// changeColor("red", 1000, () => {
//     changeColor("orange", 1000, () => {
//         changeColor("green", 1000, () => {
//             changeColor("blue", 1000, () => {
//                 changeColor("purple", 1000);
//             });
//         });
//     });
// });

// Using Promis

let h1 = document.querySelector("h1");

function changeColor(color, delay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            h1.style.color = color;
            resolve("color changed!");
        }, delay);
    });
}

changeColor("red", 1000)
.then(() => {
    console.log("red color applied.");
    return changeColor("orange", 1000);
})
.then(() => {
    console.log("orange color applied.");
    return changeColor("green", 1000);
})
.then(() => {
    console.log("green color applied.")
    return changeColor("blue", 1000);
})
.then(() => {
    console.log("blue color applied.");
    return changeColor("purple", 100);
})
.catch(() => {
    console.log("Color not applied");
});


// Promises

// function savetoDb(data, success, failure) {
//     let internetSpeed = Math.floor(Math.random() * 10) + 1;
//     if(internetSpeed > 4) {
//         success();
//     } else {
//         failure();
//     }
// }

// using callback 
// savetoDb(
//     "Akhil Kumar", () => {
//         console.log("your data was saved");
//         // If data saved than will try for data2
//         savetoDb("hello", () => {
//             console.log("your data2 was saved");
//             // to save data3
//             savetoDb("Akhil", () => {
//                 console.log("your data3 was saved");
//             }, () => {
//                 console.log("no internet at all");
//             });
//         }, () => {
//             console.log("weak connection, data2 not saved"); 
//         });
//     }, () => {
//         console.log("weak connection, data not saved"); 
//     }
// );

// using promises

function savetoDb(data) {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    return new Promise((resolve, reject) => {
        if(internetSpeed > 4) {
            resolve(`success : ${data} was saved`);
        } else {
            reject(`failure : we connection couldn't save you data!`);
        }
    });
}

savetoDb("Akhil")
.then((result) => {
    console.log("result : ", result);
    console.log("data1 saved");
    return savetoDb("Hello");
})
.then((result) => {
    console.log("result : ", result);
    console.log("data2 saved");
    return savetoDb("World");
})
.then((result) => {
    console.log("result : ", result);
    console.log("data3 saved");
})
.catch((error) => {
    console.log("error : ", error);
    console.log("Promise was rejected");          
});
