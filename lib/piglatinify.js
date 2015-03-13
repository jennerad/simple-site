module.exports = function(word) {
  //all of the code inside of piglatinify function goes here
  var wordArray = word.split("");
  var letters;
  var changedWord;
  var vowelHash = { a: 1, e: 1, i: 1, o: 1, u: 1, A: 1, E: 1, I: 1, O: 1, U: 1 }; //this is a lookup. these are the vowels, in a hash. here are the truthy values
  //is my first letter a vowel?
  //use a has. a hash is 
  //we could have done this with 10 if/or statements
  if (vowelHash.hasOwnProperty(wordArray[0])) { //hasownproperty is the way to look up whether something has its own property, not going up the prototype chain
      //is my first letter (0) a match to something on vowelHash
    return word + "-hay";
  }
  letters = wordArray.shift(); //shift takes the first char off the front
  changedWord = wordArray.join("") + "-" + letters + "ay";
  return changedWord;
}
