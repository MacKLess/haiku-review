export class Line {
  constructor(lineText) {
    this.lineText = lineText;
  }

  countSyllable(lineText) {
    let syllable = 0;
    let output = "";
    const vowels = "aeiouy";
    for (let i = 0; i < lineText.length; i++) {
      let x = lineText.charAt(i);
      if (vowels.indexOf(x) >= 0) {
        syllable +=1;
        // if (i-1 === vowel) {
        //   output.push(i);
        // } else if ((i === "e") && (i+1 === " ")) {
        //   output.push(i);
        // } else if (i+1 === vowel) {
        //   output.push(i);
        //   syllable +=1;
        // } else if (i+1 != vowel) {
        //   output.push(i);
        //   syllable +=1;
      } else {
      }
    }
    return syllable;
  }
  //
  //   if (syllable != 5) {
  //     return "This is not a haiku.";
  //   }
  //   else {
  //     return output1; //This will require additional work
  //   }
  // }
}
