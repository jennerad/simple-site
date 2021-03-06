var express = require('express');
var app = express();
var port = process.env.PORT || 3000;
var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x','y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '!', '@', '#', '$', '%', '^', '&'];
var randomString = '';
var jokes = [
{setup: 'Why don\'t lions play cards in the jungle?',
punchline: 'Too many cheetahs.'},
{setup: 'What do you call a masseuse who hates women?',
punchline: 'A (massage)ynist!'},
{setup: 'What did the 0 say to the 8?',
punchline: 'Nice belt.'}
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
// use /app as home folder
app.use(express.static(__dirname + '/app/'));

//make index.html home page
app.get('/', function(req, res){ //endpoint #1
  res.sendFile('index.html');
});

//add the photo on page load


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

app.listen(port, function(){
  console.log('Server has been started on ' + port);
});
