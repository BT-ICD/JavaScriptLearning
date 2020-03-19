/*
About: Binding
Topics: Interpolation, Property Binding, Event Binding
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-one',
  template: `
    <p>First Name: {{firstName}}</p>
    <p>Last Name: {{lastName}}</p>
    <button id="fullNameButton" (click)="fullNameButtonClick()">Get Full Name</button><br>
    Full Name: <h3 [textContent]="fullName"></h3>
    <button id="buttonEventID" name="buttonEventName" value="101" (click)="onButtonEventNameClick($event)">About Button Click Event </button>
    <button (click)="firstName= 'Hiren Patel'" >Change First Name</button>
    <input (keydown)="onKeydown($event)" >
    <p>{{values}}</p>
  `
})
export class LessonOneComponent implements OnInit {
  firstName:string;
  lastName:string;
  fullName:string;
  values:string;
  constructor() { 
    this.firstName="Manan";
    this.lastName="Shah";
    this.values='';
  }
  ngOnInit(): void {
  }
  fullNameButtonClick(){
    this.fullName=`${this.firstName} ${this.lastName}`;
  }
  onButtonEventNameClick(event){
    /*
      All standard DOM event objects have a target property, a reference to the element that raised the event.
      In this case, target refers to the element
      event.target.name to access name of element
      event.target.value to access value of element
    */
    console.log("event.target.name " + event.target.name);
    console.log("event.target.value " + event.target.value);
    console.log("event.srcElement " + event.srcElement);
    console.log("event.srcElement.name " + event.srcElement.name);
    console.log("event.srcElement.value " + event.srcElement.value);
    console.log("event.srcElement.innerHTML " + event.srcElement.innerHTML);
    console.log("ctrlKey " + event.ctrlKey);
    console.log("shiftKey " + event.shiftKey);
    console.log("altKey " + event.altKey);
    console.log("type " + event.type);
    console.log(event);
  }
  onKeydown(event){
    this.values+= 'code: ' + event.code + '| keyCode: ' + event.keyCode + ' | key ' + event.key;
    if(!((event.keyCode>=48 && event.keyCode<=57) ||(event.keyCode==8)))
    {
      //return false or event.preventDefault() both used to restrict event to further propogate. It does not print character into textbox 
      return false;
      //event.preventDefault();
    }
        console.log(event.type);
  }

}
