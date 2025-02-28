const express = require('express');
const app = express();
const port = 3001;
const path = require('path');
const { v4: uuidv4 } = require('uuid');
uuidv4();
const methodOverride = require('method-override');  //used for patch and delete
app.use(methodOverride('_method'));


app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs"); //used for ejs
app.set("views", path.join(__dirname, "views")); //used for ejs


app.use(express.static(path.join(__dirname, "public"))); //used for css

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

app.delete("/posts/:id", (req, res) => {
    let { id } = req.params;
     posts = posts.filter((p) => id !== p.id);
    res.redirect("/posts");
});




app.listen(port, () => {
    console.log("the serving is running in port " + port);
});