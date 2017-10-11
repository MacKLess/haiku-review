export class Line {
  constructor(line1, line2, line3) {
    this.line1 = line1;
    this.line2 = line2;
    this.line3 = line3;
  }

checkType() {
  let syllable = 0;
  let output = [];
  const vowel = ["a","e","i","o","u","y"];
  for (let i = 1; i <= line1; i++) {
    if (i != vowel) {
      output.push(i);
    } else {
      if (i-1 === vowel) {
        output.push(i);
      } else if (i+1 === vowel) {
        output.push(i);
        syllable +=1;
      } else if (i+1 === "e") {
        output.push(i);
      } else if (i+1 != vowel) {
        output.push(i);
        syllable +=1;
      } else {
        output.push(i);
      }
    }
  }
  if (syllable != 17) {
    return "This is not a haiku.";
  }
  else {
    return output1; //This will require additional work
  }
}

// I want the final product (if the input is a haiku) to look like this:
// const multiLineString = `${line1}
// ${line2}
// ${line3}`
}

}
