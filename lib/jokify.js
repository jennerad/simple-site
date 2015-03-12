module.exports = function() {
  //all of the code inside of jokes function goes here
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
  var randomIndex = Math.floor(Math.random() * jokes.length);

  return jokes[randomIndex];

}
