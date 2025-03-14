const mongoose = require('mongoose');

main().then(res =>{ console.log("connection");

})

.catch(err => console.log(err));

async function main(){
    await mongoose.connect("mongodb://127.0.0.1:27017/test");

}
const userSchema = new mongoose.Schema({

    name : String,
    email : String,
    age : Number,
});

const User = mongoose.model("User", userSchema);

    User.findOneAndUpdate({name: "Teja"}, {age: 40}, {new: true}).then((res) =>{
        console.log(res);
    }).catch((err) =>{
        console.log(err);
    });
// User.find({age: { $lte: 21}}).then((res) =>{
//     console.log(res[0].name);
// } ).catch((err) =>{
//     console.log(err);
// });

//     User.insertMany([
//     {
//     name: "Vijay",
//       email: "vijju@gmail.com",
//       age: 21
//     },
//     {
//         name: "Teja",
//           email: "tej@gmail.com",
//           age: 21
//     },
//     {
//         name: "Rajesh",
//           email: "raj@gmail.com",
//           age: 21
//     },

// ]).then((res) => {
//     console.log(res);
// }).catch((err) =>{
//     console.log(err);
// });

// const user1 = User({
//     name: "Hemanth",
//      email: "hemu@gmail.com",
//      age: 21
// });
// user1.save().then((res) => {
//     console.log(res);
// })
// .catch((err) =>{
//     console.log(err);
// });
