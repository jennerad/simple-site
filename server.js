var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var piglatinify = require("./lib/piglatinify.js"); 
var bodyparser = require('body-parser');
app.use(bodyparser.json()); //hey app, we want you touse the json parts of body-parser
app.use(bodyparser.urlencoded({extended: true})); //need this to see the data coming in

// use /app as home folder
app.use(express.static(__dirname + '/app/'));

var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x','y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&'];
var randomString = '';

var jokes = [
{setup: 'Why don\'t lions play cards in the jungle?',
punchline: 'Too many cheetahs.'},
{setup: 'Why did the yogurt go to the art exhibit?',
punchline: 'To get more cultured.'},
{setup: 'What did the 0 say to the 8?',
punchline: 'Nice belt.'},
{setup: 'What did one math book say to the other?',
punchline: 'I got problems.'},
{setup: 'How does the moon cut his hair?',
punchline: 'Eclipse it.'},
{setup: 'Why shouldn\'t you write with a broken pencil?',
punchline: 'It\'s pointless.'}
];

var photos = [
{alt: 'grey toned photo of birds',
  src: 'images/pigeonmurmuration1.png'},
{alt: 'blue toned photo of birds',
  src: 'images/pigeonmurmuration2.png'},
{alt: 'yellow toned photo of birds',
src: 'images/pigeonmurmuration3.png'},
{alt: 'red toned photo of birds',
src: 'images/pigeonmurmuration4.png'}
];

//make index.html home page
app.get('/', function(req, res){ //endpoint #1
  res.sendFile('index.html');
});

//serve random photo when it's clicked on
app.get('/photos', function(req, res) {
  var randomIndex = Math.floor(Math.random() * photos.length);
  res.json(photos[randomIndex]);
});

// serve random joke from json object
app.get('/jokes', function(req, res){ //endpoint #2
  var randomIndex = Math.floor(Math.random() * jokes.length);
  res.json(jokes[randomIndex]);
});

// use string generator at /random-strings page
app.get('/random-strings', function(req, res){ //endpoint #3
  var tempArray = [];
      var randomNum = Math.floor((Math.random() * 25) + 1);
      for (var i = 0; i < randomNum; i++) {
        var randomNumber = Math.floor(Math.random() * alphabet.length);
        tempArray[i] = alphabet[randomNumber];
      }
      randomString = tempArray.join('');
      res.send(randomString);
      return randomString;
});

//create 3 arrays
var array1 = ['episodic', 'hairy', 'funky', 'bloated', 'rockstar', 'super sonic', 'deadly', 'amplified', 'cartoon', 'overflowing', 'caffeinated'];
var array2 = ['elephant', 'elevator', 'haircut', 'corner store', 'surfer', 'skater', 'infinity', 'battleground', 'data', 'alphabet', 'elbow', 'karate'];
var array3 = ['poodles', 'spider monkeys', 'anteaters', 'truths', 'haters', 'splitters', 'jokers', 'trombones', 'rainbows', 'poppers', 'buttercups'];
// grab one from each, randomly, and put them together
app.get('/bandName', function(req, res) {
      var randomArray1 = Math.floor(Math.random() * array1.length);
      var randomArray2 = Math.floor(Math.random() * array2.length);
      var randomArray3 = Math.floor(Math.random() * array3.length);
      var band1 = array1[randomArray1];
      var band2 = array2[randomArray2];
      var band3 = array3[randomArray3];
      var randomBandName = band1 + ' ' + band2 + ' ' + band3;
    res.json(randomBandName);
    // return randomBandName;
    // console.log(randomBandName);
  });

app.post("/piglatin", function(req, res) { //this is the postroute form!
  var firstname = piglatinify(req.body.firstname); //body is what got sent from front end, as opposed to the head
  var lastname = piglatinify(req.body.lastname); //we're calling a function named piglatinify, 
  var piglatined = {firstname: firstname, lastname: lastname}; //new variable to hold results of this object
  res.json(piglatined);//handles the encoding of this, makes it a string with quotes around it.
});

// function piglatinify(word) {
 //this has been moved to piglatinify.js
// };

app.listen(port, function(){
  console.log('Server has been started on ' + port);
});
