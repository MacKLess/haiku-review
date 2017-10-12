export class Haiku {
  constructor(input1,input2,input3) {
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
  }

  checkType() {
    let p = newPoem(inputText);
    //should this be "let p = newPoem(inputText).val()"?;
    let line = [];
    let n = 0;
    for (let i = 1; i < p.length; i++){
      if (i === "\n") {
        n += 1;
        // how do I push the string prior to the \n?;
      } else {
        return i; //not sure what to put here. I do need to have some condition if a space is followed by a space === poem end;
      }
      if (n !== 2) {
        return "Please enter three lines, hitting 'enter' after lines 1 & 2.";
      }
      else {
      }
    }
  }


    // line = p(inputText).trim().split("\n")
    //need to make this a loop that stops with two spaces in a row. This should generate strings: line1, line2, line3;
}
