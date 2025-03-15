const mongoose = require("mongoose");
const Chat = require("./model/Chat.js");


main()
    .then((res) =>{
        console.log(res);
    }).catch((err) =>{
        console.log(err);
    });

    async function main(params) {
        await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
        
    }

    let allChats = [
        {
            from: "Hems",
            to: "Raj",
            msg: "Okay I will send",
            created_at: new Date(),
        },
        {
            from: "vijay",
            to: "Teaja",
            msg: "where are you right now",
            created_at: new Date(),
        },
        {
            from: "Priya",
            to: "Hems",
            msg: "Hi",
            created_at: new Date(),
        },
        {
            from: "Hems",
            to: "Priya",
            msg: "Nothing",
            created_at: new Date(),
        }

    ];

   
    Chat.insertMany(allChats).then((res) =>{
        console.log(res);
    }).catch((err) =>{
        console.log(err);
    });