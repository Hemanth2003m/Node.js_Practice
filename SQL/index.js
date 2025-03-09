const  {faker}  = require('@faker-js/faker');
const mysql = require('mysql2');
const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require("method-override"); // method override is used to update the data in the database

app.use(methodOverride("_method")); // method override is used to update the data in the database
app.use(express.urlencoded({ extended: true })); // this is used to parse the data from the form

//setting up the view engine
app.set('view engine', 'ejs');
app.set("views", path.join(__dirname, "/views"));


//connecting to the database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "delta_app",
    password: "7776",
});

let  getRandomUser = () =>  {
  return [
     faker.string.uuid(),
     faker.internet.username(), 
     faker.internet.email(),
     faker.internet.password(),
  
    ]
};

app.get("/user" , (req, res) => {

  let q = "select * from user";
  try {
  connection.query(q, (err, users) => {
      if(err) throw err;
     
      res.render("showuser.ejs",{ users }); 
  }); 
  } catch (err){
      console.log(err);
      res.send(err);
  } 
  });


  //edit Route
  app.get("/user/:id/edit", (req, res) => {  
     let { id } = req.params;
     let q = `select * from user where id ='${id}'`;
     try {
       connection.query(q, (err, result) => {
           if(err) throw err;
          
           let user = result[0];
           res.render("edit.ejs", { user }); 
       }); 
       } catch (err){
           console.log(err);
           res.send(err);
       } 
   
  });

  //update Route
  app.patch("/user/:id", (req, res) =>{ // patch is used to update the data
    let { id } = req.params;  // id is the id of the user
    let {password: formPass, username: newUsername} = req.body; // password is the password of the user and username is the new username
    let q = `select * from user where id ='${id}'`;
    try {
      connection.query(q, (err, result) => {
          if(err) throw err;
          let user = result[0];
          if(formPass != user.password){
              res.send("Password is incorrect");
          }else{
            let q2 = `update user set name = '${newUsername}' where id = '${id}'`;
            connection.query(q2, (err, result) => {
                if(err) throw err;
                res.redirect('/user');
            });
          } 
      }); 
      } catch (err){
          console.log(err);
          res.send(err);
      } 

  });

app.listen(5001, () => {
    console.log("Server is running on port 3306");
});


  //inserting new data

// let q = "insert into user (id, name, email, password) values ?";

// let data = [];
  // for(let i=1; i<=100; i++){
  //   data.push(getRandomUser());
  // }
  
// try {

// connection.query(q, [data], (err, result) => {
//     if(err) throw err;
//     console.log(result);
// });
// } catch (err){
//     console.log(err);

// }

//  connection.end();





