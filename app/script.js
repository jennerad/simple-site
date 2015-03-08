$(document).ready(function() {
  var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u" , "v", "w", "x","y", "z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var randomString = "";
  
  function randomStringFromArray(array) {
    var tempArray = [];
    var randomNum = Math.floor((Math.random() * 25) + 1);
    for (var i = 0; i < randomNum; i++) {
      var randomNumber = Math.floor(Math.random() * array.length);
      tempArray[i] = array[randomNumber];
    }
    randomString = tempArray.join("");
    return randomString;
  }

  $("#random").on("click", function(){
    randomStringFromArray(alphabet);
    $("#randomString").html("<p>" + randomString + "</p>");
  });

  $("#photos").on("click", function() {
    var url = $(this).attr("id");
    var photosHTML;
    $.get(url, function (response) {
      photosHTML = "<img src=\"" + response.src + "\" alt=\"" + response.alt + "\" >";
    $("#photos").html(photosHTML);
    });
   }); 

  $("#jokes").on("click", function() {
    var url = $(this).attr("id");
    $.get(url, function (response) {
    var resText;
      if(typeof response === "object"){
        resText = "<p>" + response.setup + "</p><p><em>" + response.punchline + "</em></p>";
      } else {
        resText = response;
      }
      $("#ajax-text").html(resText);
    });
  });

  // function randomBandNameGenerator() {
  //   var array1 = ["episodic", "funky", "bloated", "rockstar", "super sonic", "deadly", "amplified", "cartoon", "overflowing", "caffeinated"];
  //   var array2 = ["elephant", "elevator", "haircut", "corner store", "surfer", "skater", "infinity", "battleground", "data", "alphabet", "elbow", "karate"];
  //   var array3 = ["poodles", "spider monkeys", "anteaters", "truths", "haters", "banana splits", "jokers", "trombones", "rainbows", "poppers"];
  //   var randomArray1 = Math.floor(Math.random() * array1.length);
  //   var randomArray2 = Math.floor(Math.random() * array2.length);
  //   var randomArray3 = Math.floor(Math.random() * array3.length);
  //   randomBandName = (array1[randomArray1] + " " + array2[randomArray2] + " " + array3[randomArray3]);
  //   console.log(randomBandName);
  //   return randomBandName;
  // }
  
  // $("#band-name-button").on("click", function(){
  //   randomBandNameGenerator();
  //   $("#band-name").html("<p>" + randomBandName + "</p>");
  // });

    $("#band-names").on("click", function(){
      var url = $(this).attr("id");
      var randomBandNameHTML;
      $.get(url, function (response) { 
        randomBandNameHTML = "<p>" + response + "</p>";
      $("#bandString").html(randomBandNameHTML);
      });
    });

});
