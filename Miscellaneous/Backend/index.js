const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));  //if data is in urlencoded form than express will automatically parse and use it.
app.use(express.json());

app.get("/register", (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard GET response. Welcome ${user}!`);
});

app.post("/register", (req, res) => {
    let {user, password} = req.body;
    res.send(`Standard POST response. Welcome ${user}`);
});

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});