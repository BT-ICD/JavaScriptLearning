/*
About Property Binding
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-four-image',
  templateUrl: './lesson-four-image.component.html'
 
})
export class LessonFourImageComponent implements OnInit {
productName:string;
productImage:string;
disabled:boolean;
  constructor() { 
    this.productName="Dettol";
    this.productImage='../../assets/Images/Dove.jpg';
    this.disabled=false;
  }

  ngOnInit(): void {
  }
  btnClick(){
    let currentDate= new Date();
    console.log('Button Clicked: ' +  currentDate.getHours() + ':' + currentDate.getMinutes() + ':' + currentDate.getSeconds() );
  }
}
