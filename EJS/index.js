const express = require("express");
const app = express();
const path = require("path");   //To run the nodemon index.js from the parent directory

const port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));   //To run the nodemon index.js from the parent directory

app.get("/", (req, res) => {
    res.render("home.ejs");
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.get("/rolldice", (req, res) => {
    let diceVal = Math.floor(Math.random() * 6) + 1;        //let this value came from data base
    res.render("rolldice.ejs", {diceVal});                  //value sent as an second argument.
});

app.get("/ig/:username", (req, res) => {
    const followers = ["aditya", "akshat", "amit", "hatya"];
    let { username } = req.params;
    res.render("ig.ejs", {username, followers});
});

app.get("/insta/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
    if(data) {
        res.render("insta.ejs", { data });
    } else {
        res.render("error.ejs");
    }
});

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});