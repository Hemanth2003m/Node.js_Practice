const express = require("express");
const app = express();
const fs = require("fs");

const path = require("path");

const port=3001;

app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/register", (req, res) => {
    res.render("home.ejs");
});

app.get("/rolldice", (req, res) => {
    let dice = Math.floor(Math.random() * 6) + 1;
    let mes;
    if(dice === 6){
       mes = "You got 6, you won";
    }
    res.render("rollDice.ejs", { dice, mes });
});

app.get("/ig/:username", (req, res) => {
    let {username} = req.params; 
    const instaData = JSON.parse(fs.readFileSync("./data.json", "utf-8"));

    const Data = instaData[username];
    //console.log(Data);
    res.render("instagram.ejs", { Data });
});

app.get("/hello", (req, res) => {
    res.send("hello");
});

app.listen(port, () => {
    console.log("i am listening");
});