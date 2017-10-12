import { Line } from './../js/line.js';

describe('Line', function() {
  let reusableLine;
  beforeEach(function() {
    reusableLine = new Line("laugh and the world laughs with you");
  });

  it('should show how beforeEach() works', function() {
    console.log(reusableLine);
  });

  it('should count the number of vowels in a string', function() {
    var output = reusableLine.countSyllable()
    expect(reusableLine.lineText).toEqual(10);
  });


});





//   it('should test whether a Poem has three lines', function() {
//     var output = reusablePoem.isEmpty()
//     expect(poem.input1).toEqual(true)
//     expect(poem.input2).toEqual(true)
//     expect(poem.input3).toEqual(true)
//   });
// });
