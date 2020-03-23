import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-five-template-ref-var',
  templateUrl: './lesson-five-template-ref-var.component.html'
 
})
export class LessonFiveTemplateRefVarComponent implements OnInit {
answer:number;
  constructor() { }

  ngOnInit(): void {
  }
  additionButtonClick(value1, value2){
    this.answer=parseInt(value1 )+parseInt(value2);
  }
  subtractionButtonClick(value1, value2){
    this.answer=parseInt(value1 )-parseInt(value2);
  }
  multiplicationButtonClick(value1, value2){
    this.answer=parseInt(value1 )*parseInt(value2);
  }
  divisionButtonClick(value1, value2){
    this.answer=parseInt(value1 )/parseInt(value2);
  }
  clearButtonClick(value1, value2){
    value1.value ='';
    console.log(value1);
    console.log(value1.type);

  }

}
