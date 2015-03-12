module.exports = function() {
//create 2 arrays
  var array1 = [ "episodic", "hairy", "funky", "bloated", "rockstar", "super sonic", "deadly", "amplified", "cartoon", "overflowing", "caffeinated" ];
  var array2 = [ "elephant", "elevator", "haircut", "corner store", "surfer", "skater", "infinity", "battleground", "data", "alphabet", "elbow", "karate" ];
//grab one of each and put them together
  var randomArray1 = Math.floor(Math.random() * array1.length);
  var randomArray2 = Math.floor(Math.random() * array2.length);
  // var randomArray3 = Math.floor(Math.random() * array3.length);
  var band1 = array1[randomArray1];
  var band2 = array2[randomArray2];
  // var band3 = array3[randomArray3];
  var randomBandNameCustom = band1 + " " + band2;
  // console.log("logging from the function: " + randomBandNameCustom); //returns word1 word2 undefined
  return randomBandNameCustom;
};
