const mongoose = require('mongoose');

//to execute main function.
main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/test"); //for connection to our database.
}

// Creating Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});

// creating collection
const User = mongoose.model("User", userSchema);

// // inserting One

// const user1 = new User({
//     name: "Adam",
//     email: "adam@yahoo.in",
//     age: 48
// });

// const user2 = new User({
//     name: "Eve",
//     email: "eve@yahoo.in",
//     age: 48
// });

// user2
//     .save()   //saving data to database
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err)
//     });

// Inserting Multiple

// User.insertMany([
//     {name: "Tony", email: "tony@gmail.com", age: 50},
//     {name:"Peter", email:"peter@gmail.com", age: 30},
//     {name:"Bruce", email:"bruce@gmail.com", age: 47}
// ]).then((res) => {
//     console.log(res);
// });

// Find Model

// User.find({age: {$lt: 50}}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findById("65028a270663e13f64870173").then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// UPDATE document

// User.updateOne({name: "Bruce"}, {age: 49}).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.updateMany({age: {$gt: 48}}, {age: 55})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// User.findOneAndUpdate({name: "Bruce"}, {age: 42}, {new: true})
//     .then((res) => {
//         console.log(res);
//     }).catch((err) => {
//         console.log(err);
//     });

// DELETE Data

// User.deleteOne({name: "Bruce"})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.deleteMany({age: 48})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findByIdAndDelete("65028a270663e13f64870171")
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });

// User.findOneAndDelete({name: "Peter"})
// .then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });