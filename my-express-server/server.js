const express = require("express");

const app = express();

app.get("/",function(request, response){
  response.send("<h1>Hello, World!<h1>");
});

app.get("/contact",function(req, res){
  res.send("Contact Me at: angela@gmail.com");
});

app.get("/about", function(req, res){
  res.send("My name is Angela and I love beer and code.");
});

app.get("/hobbies",function(req, res){
  res.send("<ul><li>Coffee</li><li>Code</li>Beer<li>");
});

app.listen(3000, function(){
  console.log("Server started on port 3000");
});
