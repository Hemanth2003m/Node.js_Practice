const  {faker}  = require('@faker-js/faker');
const mysql = require('mysql2');

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


  //inserting new data

  let q = "insert into user (id, name, email, password) values ?";

  let data = [];
  for(let i=1; i<=100; i++){
    data.push(getRandomUser()); //fake user data;
  }
  

try {

connection.query(q, [data], (err, result) => {
    if(err) throw err;
    console.log(result);
});
} catch (err){
    console.log(err);

}

 connection.end();





