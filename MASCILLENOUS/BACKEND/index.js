const express = require('express');
const app = express();
const port = 8080;




app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get('/register', (req, res) => {

    let {name,password} = req.query;
    res.send(`I am a request from get end and your username is ${name} and password is ${password}`);
});

app.post('/register', (req, res) => {
    let {name, password} = req.body;
    //console.log(req.body);
    res.send("I am  a requst from post end" + name + " " + password);
});

app.listen(port, () => {
    console.log("i am listening on port " + port);
});

