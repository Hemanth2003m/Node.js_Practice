const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4();


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


app.use(express.static(path.join(__dirname, "public")));

let posts = [{
    id: uuidv4(),
    username: "Hemanth",
    content: "like this post"

},
{
    id: uuidv4(),
    username: "Varun",
    content: "like don't this post"

},
{
    id: uuidv4(),
    username: "Mohith",
    content: "I also like this post"

}];

app.get("/posts", (req, res) => {
    res.render("index.ejs", { posts, port });
});

app.get("/posts/new", (req, res) =>{

    res.render("new.ejs" );
});


app.get("/posts/:id", (req, res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("show.ejs", { post });
});

app.post("/posts", (req, res) => {
    let  id = uuidv4();
     let { username, content} = req.body;
     posts.push({id, username, content });
    console.log(req.body);
    res.redirect("/posts");
});

app.patch("/posts/:id", (req, res) => {
    let {id} = req.params;
    let newContent = req.body.content;
    let post = posts.find((p) => id === p.id);
    post.content = newContent;
    console.log(newContent);
    res.send ("patch is working");

});




app.listen(port, () => {
    console.log("the serving is running in port " + port);
});