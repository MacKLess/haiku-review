import { Poem } from './../js/haikureview.js';

describe ('Poem', function() {
  let reusablePoem;
  beforeEach(function() {
    reusablePoem = new Poem("this is just a test","do you like my little test","oh what a nice test");
    console.log(reusablePoem)
  });

  it('should show how beforeEach() works', function() {
    console.log(reusablePoem);
  });

  it('should test whether a Poem has three lines', function() {
    var output = reusablePoem.isEmpty()
    expect(poem.input1).toEqual(true)
    expect(poem.input2).toEqual(true)
    expect(poem.input3).toEqual(true)
  });
});
