$(document).ready(function() {

  $("#random").on("click", function() {
    var url = $(this).attr("id");
    var randomStringHTML;
    $.get(url, function(response) {
    randomStringHTML = "<p>" + response + "</p>";
    // randomStringFromArray(alphabet);
    $("#randomString").html(randomStringHTML);
    });
  });

  $("#photos").on("click", function() {
    var url = $(this).attr("id");
    var photosHTML;
    $.get(url, function(response) {
      photosHTML = "<img src=\"" + response.src + "\" alt=\"" + response.alt + "\" >";
    $("#photos").html(photosHTML);
    });
   });

  $("#jokes").on("click", function() {
    var url = $(this).attr("id");
    $.get(url, function(response) {
    var resText;
      if (typeof response === "object") {
        resText = "<p>" + response.setup + "</p><p><em>" + response.punchline + "</em></p>";
      } else {
        resText = response;
      }
      $("#ajax-text").html(resText);
    });
  });

  $("#bandName").on("click", function() {
    var url = $(this).attr("id");
    var randomBandNameHTML;
    $.get(url, function(response) {
      randomBandNameHTML = "<p>" + response + "</p>";
    $("#bandString").html(randomBandNameHTML);
    });
  });

  $("#bandNameCustom").on("submit", function(e) {
    e.preventDefault(); //don't refresh the page when clicked
    var url = $(this).attr("id");
    var animal = $("input[name=animal]").val();
    var animalName = { animal: animal };
    // console.log(animal + " was entered"); //works to here
    // console.log(typeof(animal)); //string
    // console.log(animalName);
    // console.log(animalName.animal);

    $.post(url, animalName.animal, function(response) {
      var bandNameCustomified = response + " " + animal;
      // var bandNameCustomified = response.animal ;
      // console.log(bandNameCustomified);
    $("#bandStringCustom").html(bandNameCustomified);
    });
  });

  $("#piglatin").on("submit", function(e) {
    e.preventDefault(); //don't refresh the whole page
    var firstname = $("input[name=firstname]").val(); //get the value of what was in the input tag firstname and put it into the variable
    var lastname = $("input[name=lastname]").val();
    var name = { firstname: firstname, lastname: lastname }; //constructing an object, key firstname, value firstname, etc.
  // console.log(name.firstname);
  // console.log(name.lastname);
    $.post("piglatin", name, function(response) { //send data to the server, piglatin is the route name (it'll be blahblah/piglatin. parameters are in the order of (route, data/variable, function)
      var piglatinified = response.firstname + " " + response.lastname;
  // console.log(piglatinified);
    $("#piglatinified").text(piglatinified);
    });
  });
});
