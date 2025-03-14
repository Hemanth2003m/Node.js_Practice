const mongoose = require("mongoose");

main().then(res =>{ console.log("connection successful");

}).catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/amazon");

}

const bookSchema = new mongoose.Schema({

    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
        min: [1, "It is less than minimum value"],
    },
});

const Book = mongoose.model("Book", bookSchema);

Book.findByIdAndUpdate(
    '67d3c86f531b4d2f1a4a9b5f',
    {
        price: -10
    },
    {
        runValidators: true  //runValidators are useful to short the error msgs by below

    }).then((res) =>{   
        console.log(res);
    }).catch((err) =>{
        console.log(err.errors.price.properties.message);  // here
    });

// Book.insertMany([

//     {title: "Book Of Unsolvable Theories", author: "Phanindra", price: 9999},
//     {title: "Book Of Medicine", author: "Rajesh", price: 8999},
//     {title: "Magic of Computers", author: "Hemanth", price: 5999},    

// ]).then((res) =>{
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });
