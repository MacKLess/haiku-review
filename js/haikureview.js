function Haiku(line1,line2,line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

// Will want to look for newlines "/n"
//if "/n" !== 2, return "this is not a haiku"

// Might need to revise arguments/parameters --> the above one is supposed to be "constructorParameter"; wherease the prototype argument is supposed to be the "methodParameter." review page "https://www.learnhowtoprogram.com/javascript/introduction-to-javascript/object-oriented-javascript-with-node-modules"

Haiku.prototype.haikuReview = function(line1,line2,line3) {
  let syllable = 0;
  let output = [];
  const vowel = ["a","e","i","o","u","y"]
  for (let i = 1; i <= line1; i++) {
    if (i != vowel) {
      output.push(i);
    } else {
      if i-1 === vowel
        output.push(i);
      else if i+1 === vowel
        output.push(i);
        syllable +1;
      else if i+1 === "e"
        output.push(i);
      else { i+1 != vowel
        output.push(i);
        syllable +1;
      }
    }
  }
  if (syllable != 17) {
    return "This is not a haiku."
  }
  else {
    return output1; //This will require additional work
  }
}

exports.haikuModule = Haiku;
