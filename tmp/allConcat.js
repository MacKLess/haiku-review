var Haiku = require('./../js/haikureview.js').haikuModule;

$(document).ready(function() {
  $('haiku-form').submit(function(event) {
    event.preventDefault();
    let line1 = $('#line1').val();

//need actual function innards!!! review page "https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/object-oriented-javascript-with-node-modules"

    output.forEach(function(element) {
      $('#output1').append(element);
    });
  });
});
