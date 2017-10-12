export class Line {
  constructor(lineText) {
    this.lineText = lineText;
  }

  checkType() {
    let syllable = 0;
    let output = [];
    const vowel = ["a","e","i","o","u","y"];
    for (let i = 1; i < line1; i++) {
      if (i != vowel) {
        output.push(i);
      } else {
        if (i-1 === vowel) {
          output.push(i);
        } else if (i+1 === vowel) {
          output.push(i);
          syllable +=1;
        } else if ((i === "e") && (i+1 === " ")) {
          output.push(i);
        } else if (i+1 != vowel) {
          output.push(i);
          syllable +=1;
        } else {
          output.push(i);
        }
      }
    }
    if (syllable != 5) {
      return "This is not a haiku.";
    }
    else {
      return output1; //This will require additional work
    }
  }  
}
