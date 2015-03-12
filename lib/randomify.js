module.exports = function() {
  var myArray = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" ];
  var theRandomString = "";

  // function randomStringFromArray() {
    var tempArray = [];
    var randomNum = Math.floor((Math.random() * 25) + 1);
    for (var i = 0; i < randomNum; i++) {
      var randomNumber = Math.floor(Math.random() * myArray.length);
      tempArray[i] = myArray[randomNumber];
      }
    theRandomString = tempArray.join("");
    return theRandomString;
  };

