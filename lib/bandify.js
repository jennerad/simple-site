module.exports = function() {
  //all of the code inside of bandify function goes here
//create 3 arrays
  var array1 = [ "episodic", "hairy", "funky", "bloated", "rockstar", "super sonic", "deadly", "amplified", "cartoon", "overflowing", "caffeinated" ];
  var array2 = [ "elephant", "elevator", "haircut", "corner store", "surfer", "skater", "infinity", "battleground", "data", "alphabet", "elbow", "karate" ];
  var array3 = [ "poodles", "spider monkeys", "anteaters", "truths", "haters", "splitters", "jokers", "trombones", "rainbows", "poppers", "buttercups" ];
//grab one of each and put them together
  var randomArray1 = Math.floor(Math.random() * array1.length);
  var randomArray2 = Math.floor(Math.random() * array2.length);
  var randomArray3 = Math.floor(Math.random() * array3.length);
  var band1 = array1[randomArray1];
  var band2 = array2[randomArray2];
  var band3 = array3[randomArray3];
  var randomBandName = band1 + " " + band2 + " " + band3;
  return randomBandName;
}
