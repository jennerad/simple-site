module.exports = function() {
  var photos = [
  { alt: "grey toned photo of birds",
    src: "images/pigeonmurmuration1.png" },
  { alt: "blue toned photo of birds",
    src: "images/pigeonmurmuration2.png" },
  { alt: "yellow toned photo of birds",
  src: "images/pigeonmurmuration3.png" },
  { alt: "red toned photo of birds",
  src: "images/pigeonmurmuration4.png" }
  ];

  var randomIndex = Math.floor(Math.random() * photos.length);
  return photos[randomIndex];
}
