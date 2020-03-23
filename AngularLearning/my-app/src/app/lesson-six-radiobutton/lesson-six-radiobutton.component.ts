import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-six-radiobutton',
  templateUrl: './lesson-six-radiobutton.component.html'
  
})
export class LessonSixRadiobuttonComponent implements OnInit {
  selectedCourse:string="1";
  selectedCourseName:string="BCA";
  subscriptionSelectionStatus:boolean=true;
  constructor() { }

  ngOnInit(): void {
  }
  getSelectedOptionButtonClick(){
    // this.selectedCourse=value;
    // console.log(this.selectedCourse);
  }
  onSelectedCourseChange(event){
    //console.log(event);
    console.log(event.target.value);
    this.selectedCourse=event.target.value;
    switch (this.selectedCourse) {
      case "1":
        this.selectedCourseName="BCA";
        break;
      case "2":
        this.selectedCourseName="MCA";
        break;  
      case "3":
        this.selectedCourseName="MS IT";
        break;
    }
  }
  onSubscriptionSelectionChange(event){
    if(event.target.value=="1"){
      this.subscriptionSelectionStatus=true;
    }
    else{
      this.subscriptionSelectionStatus=false;
    }

  }
}
