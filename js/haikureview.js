function Haiku(line1,line2,line3) {
  this.line1 = line1;
  this.line2 = line2;
  this.line3 = line3;
}

Haiku.prototype.haikuReview = function(line1,line2,line3) {
  let syllable = 0;
  let output = [];
  const vowel = ["a","e","i","o","u","y"]
  for (let i = 1; i <= line1; i++) {
    if (i != vowel) {
      output.push(i);
    } else {
      if i+1 != vowel
        output.push(i);
        syllable +1;
      else {
        output.push(i);
      }
    }
  }
}
