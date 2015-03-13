module.exports = function(animalPost) {
  var array1 = [ "episodic", "hairy", "funky", "bloated", "rockstar", "super sonic", "deadly", "amplified", "cartoon", "overflowing", "caffeinated" ];
  var array2 = [ "elephant", "elevator", "haircut", "corner store", "surfer", "skater", "infinity", "battleground", "data", "alphabet", "elbow", "karate" ];
  var randomArray1 = Math.floor(Math.random() * array1.length);
  var randomArray2 = Math.floor(Math.random() * array2.length);
  var band1 = array1[randomArray1];
  var band2 = array2[randomArray2];
  var randomBandNameCustom = band1 + " " + band2 + " " + animalPost;
  return randomBandNameCustom;
};
