import { Haiku }  from './../js/haikureview.js';

$(document).ready(function() {
  $('haiku-form').submit(function(event) {
    event.preventDefault();
    let input1 = $('#input1').val();
    console.log(line1);
    let input2 = $('#input2').val();
    let input3 = $('#input3').val();
  });

//need actual function innards!!! review page "https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/object-oriented-javascript-with-node-modules"

  //   output.forEach(function(element) {
  //     $('#output1').append(element);
  //   });
  // });
  // I want the final product (if the input is a haiku) to look like this:
  const multiLineString = `${line1}
  ${line2}
  ${line3}`;
});
