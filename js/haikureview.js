export class Poem {
  constructor(inputText) {
    this.inputText = inputText;
  }

checkType() {
  let p = newPoem(inputText);
  //should this be "let p = newPoem(inputText).val()"?
  let line = []
  let n = 0
  for (let i = 1; i < p.length; i++){
    if (i === "\n") {
      n += 1;
      // how do I push the string prior to the \n?
    } else {
      return i //not sure what to put here. I do need to have some condition if a space is followed by a space === poem end.
    }
  if (n !== 2) {
    return "Please enter three lines, hitting 'enter' after lines 1 & 2."
  }
  else {
  }


  line = p(inputText).trim().split("\n")
  //need to make this a loop that stops with two spaces in a row. This should generate strings: line1, line2, line3

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
