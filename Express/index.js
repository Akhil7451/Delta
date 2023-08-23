const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;
app.listen(port, () => {
    console.log(`app is listening on port ${port}`);
});


// app.use((req, res) => {
//     console.log("request received");

// // Sending response
//     // res.send("This is a basic response");
//     res.send({
//         name: "apple",
//         color: "red",
//     });
// });

// routing

app.get("/", (req, res) => {
    res.send("Hello I am root.node!!!");
});

app.get("/apple", (req, res) => {
    res.send({
        name: "apple",
        color: "red",
    });
});

app.get("/banana", (req, res) => {
    res.send({
        name: "banana",
        color: "yellow",
    });
});

// app.get("*", (req, res) => {
//     res.send("This path does not exist");
// });


// Path Parameter
app.get("/:username/:id", (req, res) => {
    let {username, id} = req.params;
    res.send(`Welcome to the page of @${username}.`);
});

// Query String
app.get("/search", (req, res) => {
    let { q } = req.query;
    if(!q) {                                //if query is not searched
        res.send("nothing searched");
    }
    res.send(`search results for query: ${q}`);
});