var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var piglatinify = require("./lib/piglatinify.js");
var jokify = require("./lib/jokify.js");
var photify = require("./lib/photify.js");
var randomify = require("./lib/randomify.js");
var bandify = require("./lib/bandify.js");
var bandcustomify = require("./lib/bandcustomify.js");

var bodyparser = require("body-parser");
app.use(bodyparser.json()); //hey app, we want you to use the json parts of body-parser
app.use(bodyparser.urlencoded({ extended: true })); //need this to see the data coming in

// use /app as home folder
app.use(express.static(__dirname + "/app/"));

//make index.html home page
app.get("/", function(req, res) { //endpoint #1
  res.sendFile("index.html");
});

//serve random photo when it"s clicked on
app.get("/photos", function(req, res) {
  var thePhoto = photify();
  res.json(thePhoto);
});

// serve random joke from json object
app.get("/jokes", function(req, res) { //endpoint #2
  var theJoke = jokify();
  res.json(theJoke);
});

// use string generator at /random-strings page
app.get("/random", function(req, res) { //endpoint #3
  var theRandomString = randomify();
  res.send(theRandomString);
});

app.get("/bandName", function(req, res) {
  var theBandName = bandify();
  res.json(theBandName);
  });

app.post("/bandNameCustom", function(req, res) {
  animalPost = req.body.animal;
  var animaled = bandcustomify(req.body.animal);
  res.json(animaled);
  });

app.post("/piglatin", function(req, res) { //this is the postroute form!
  var firstname = piglatinify(req.body.firstname); //body is what got sent from front end, as opposed to the head
  var lastname = piglatinify(req.body.lastname); //we"re calling a function named piglatinify,
  var piglatined = { firstname: firstname, lastname: lastname }; //new variable to hold results of this object
  res.json(piglatined);//handles the encoding of this, makes it a string with quotes around it.
});

app.listen(port, function() {
  console.log("Server has been started on " + port);
});
