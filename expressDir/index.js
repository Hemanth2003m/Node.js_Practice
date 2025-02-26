const express = require("express");
const app = express();


//console.dir(app);

let port = 3000;

app.listen(port, () => {
    console.log(`app is listening port ${port}`);

});

 app.get("/", (req, res) => {
        //console.log("hi there!");
        res.send("you contacted root path");
    });

     app.get("/:username/:id", (req, res) => {
        let {username, id} = req.params;
        res.send(`This page is belongs to Mr ${username} and his id is ${id}`);
    });

    app.get("/search", (req, res) => {
        
        res.send(req.query);
    });