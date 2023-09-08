const express = require('express');
const mysql = require('mysql2');
const { faker } = require('@faker-js/faker');
const path = require('path');                       //for using ejs
const methodOverride = require('method-override');  //to override POST method to PATCH
const { v4: uuidv4 } = require("uuid");             //for creatig random id


const app = express();                              //creating app

app.set("view engine", "'ejs");                     //setting view engine for ejs
app.set("views", path.join(__dirname, "/views"));   //setting path for ejs
app.use(methodOverride("_method"));                 //using override method inside app
app.use(express.urlencoded({extended: true}));      //getting the updated data from url

// Building connection with our database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'delta_app',
    password: 'password'
});

// Get random user data
let getRandomUser = () => {
    return [
      faker.datatype.uuid(),
      faker.internet.userName(),
      faker.internet.email(),
      faker.internet.password()
    ];
};

// home(/) route to get the number of data inside DB
app.get("/", (req, res) => {
    let q = `SELECT count(*) FROM user`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let count = result[0]["count(*)"];
            res.render("home.ejs", {count});
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// (/user) route to show all the data
app.get("/user", (req, res) => {
    let q = `SELECT * FROM user`;
    try {
        connection.query(q, (err, users) => {
            if(err) throw err;
            res.render("showusers.ejs", { users });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// /user/:id/edit route to get the specifc id and edit the username of that user.
app.get("/user/:id/edit", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];
            res.render("edit.ejs", { user });
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

// /user/id to update the id
app.patch("/user/:id", (req, res) => {

    // searching user based on id
    let { id } = req.params;
    // getting updated values from user
    let {password: formPass, username: newUsername} = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;

    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            let user = result[0];

            // checking password
            if(formPass != user.password) {
                res.send("WRONG password");
            } else {

                // query for updating username
                let q2 = `UPDATE user SET username='${newUsername}' WHERE id='${id}'`;
                connection.query(q2, (err, result) => {
                    if(err) throw err;
                    res.redirect("/user");
                });
            }
        });
    } catch (err) {
        console.log(err);
        res.send("some error in DB");
    }
});

app.get("/user/new", (req, res) => {
    res.render("newuser.ejs")
});

// /user/new to add new user to our data.
app.post("/user/new", (req, res) => {
    let {username, email, password} = req.body;
    let id = uuidv4();

    // query to insert New user
    let q = `INSERT INTO user (id, username, email, password) VALUES ('${id}', '${username}', '${email}', '${password}')`;
    try {
        connection.query(q, (err, result) => {
            if(err) throw err;
            res.redirect("/user");
        });
    } catch (err) {
        res.send("some error occured");
    }
});

app.get("/user/:id/delete", (req, res) => {
    let { id } = req.params;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
        res.render("delete.ejs", { user });
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
  
  app.delete("/user/:id/", (req, res) => {
    let { id } = req.params;
    let { password } = req.body;
    let q = `SELECT * FROM user WHERE id='${id}'`;
  
    try {
      connection.query(q, (err, result) => {
        if (err) throw err;
        let user = result[0];
  
        if (user.password != password) {
          res.send("WRONG Password entered!");
        } else {
          let q2 = `DELETE FROM user WHERE id='${id}'`; //Query to Delete
          connection.query(q2, (err, result) => {
            if (err) throw err;
            else {
              console.log(result);
              console.log("deleted!");
              res.redirect("/user");
            }
          });
        }
      });
    } catch (err) {
      res.send("some error with DB");
    }
  });
  

// listening port
app.listen('8080', () => {
    console.log("server is listening to port 8080");
});





// // let q = "SHOW TABLES";      //store our query in variable.

// // Query to insert data into table using placeholders.
// let q = "INSERT INTO user (id, username, email, password) VALUES ?";

// // let user = ["123", "123_newuser", "abc@gmail.com", "abc"];

// // let users = [
// //     ["1232", "1232_newuser", "abc2@gmail.com", "abc2"],
// //     ["1233", "1233_newuser", "abc3@gmail.com", "abc3"],
// // ];

// // Running query on database using this function.
// try {
//     connection.query(q, [data], (err, result) => {
//         if(err) throw err;
//         console.log(result);
//     })
// } catch (error) {
//     console.log(err);
// }

// connection.end();
