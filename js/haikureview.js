export class Poem {
  constructor(input1,input2,input3) {
    this.input1 = input1;
    this.input2 = input2;
    this.input3 = input3;
  }

  isEmpty() {
    let poem = new Poem(this.input1,this.input2,this.input3);
    input1 = document.getElementById('input1').value;
    input2 = document.getElementById('input2').value;
    input3 = document.getElementById('input3').value;
    if (input1 === "" || input2 === "" || input3 === ""){
      alert("You need to enter three lines!");
      return false;
    } else {
      return true;
    }
  }


}
