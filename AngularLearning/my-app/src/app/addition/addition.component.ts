import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addition',
  template:  `
                <p>addition works!</p>
                <input type="text" id="value1Textbox" name="value1Textbox" #val1 /><br>
                <input type="text" id="value2Textbox" name="value2Textbox" #val2 /><br>
                <input type="button" id="additionButton" name="additionButton" value="Addition"  (click)="onAddButtonClick(val1.value,val2.value)"/>
                <input type="button" id="clearButton" name="clearButton"  value="Clear"/><br>
                <input type="text" id="answerTextbox" name="answerTextbox"   >
                `
})
export class AdditionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  onAddButtonClick(val1, val2):void{
    console.log(`V1: ${val1} V2: ${val2}`);
    
    //console.log(`V1: ${val1.value} V2: ${val2.value}`);
  }

}
