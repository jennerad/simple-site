$(document).ready(function() {
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u' , 'v', 'w', 'x','y', 'z', '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var randomString = '';
  
  function randomStringFromArray(array) {
    var tempArray = [];
    var randomNum = Math.floor((Math.random() * 25) + 1);
    for (var i = 0; i < randomNum; i++) {
      var randomNumber = Math.floor(Math.random() * array.length);
      tempArray[i] = array[randomNumber];
    }
    randomString = tempArray.join('');
    return randomString;
  }



  $('#myButton').on('click', function(){
    randomStringFromArray(alphabet);
    $('#answer').append('<li>' + randomString + '</li>');
  });
  // $('#jokes').on('click', function(){
  //   $('#ajax-text').append('Hello world');
  // });
  $('#photos').on('click', function() {
    var url = $(this).attr('id');
    var photosHTML;
    $.get(url, function (response) {
      photosHTML = '<img src=\"' + response.src + '\" alt=\"' + response.alt + '\" >';
    $('#photos').html(photosHTML);
    });
   }); 

  $('#jokes').on('click', function() {
    var url = $(this).attr('id');
    $.get(url, function (response) {
    var resText;
      if(typeof response === 'object'){
        resText = response.setup + ': ' + response.punchline;
      } else {
        resText = response;
      }
      $('#ajax-text').text(resText);
    });
  });

});
