export class Poem {
  constructor(input1,input2,input3) {
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
  }

  isEmpty() {
    let poem = new Poem(input1,input2,input3);
    input1 = document.forms['haiku-form']['answer_input1'].value;
    input2 = document.forms['haiku-form']['answer_input2'].value;
    input3 = document.forms['haiku-form']['answer_input3'].value;
    // let line = [];
    // for (let i = 1; i < p.length; i++){
    if (input1 == null || input1 == "", input2 == null || input2 == "", input3 == null || input3 == ""){
      alert("Please enter three lines, hitting 'enter' after lines 1 & 2.");
      return false;
    } else {
      return true;
    }
  }


}
