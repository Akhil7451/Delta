const mongoose = require('mongoose');

main()
    .then((res) => {
        console.log("connection successful");
    })
    .catch((err) => {
        console.error(err);
    });

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
}

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 20
    },
    author: {
        type: String
    },
    price: {
        type: Number,
        min: [1, "Price is too low for selling."]
    },
    discount: {
        type: Number,
        default: 0
    },
    category: {
        type: String,
        enum: ["fiction", "non-fiction"]
    },
    genre: [String]
});

const Book = mongoose.model("Book", bookSchema);

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD Sharma",
//     price: 1200
// });

// let book2 = new Book({
//     title: "Mathematics VIII",
//     price: 1200
// });

// let book3 = new Book({
//     title: "How to kill a Mockingbird",
//     author: "Harper Lee",
//     price: "299"
// });

// let book4 = new Book({
//     title: "Marvel Comics v2",
//     price: "600",
//     genre: ["comics", "superheroes", "fiction"]
// });

// book4.save()
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });

// SCHEMA VALIDATION with UPDATE

Book.findByIdAndUpdate("6503c201afa49f04e0583ec6", {price: -700}, {runValidators: true})
    .then((res) => {
        console.log(res);
    }).catch((err) => {
        console.log(err.errors.price.properties.message);
    });