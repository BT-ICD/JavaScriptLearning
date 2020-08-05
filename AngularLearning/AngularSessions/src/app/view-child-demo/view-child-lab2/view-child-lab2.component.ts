import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-child-lab2',
  templateUrl: './view-child-lab2.component.html',
  styleUrls: ['./view-child-lab2.component.css']
})
export class ViewChildLab2Component implements OnInit, AfterViewInit {
firstName:string;
@ViewChild(NgModel) firstNameInput:NgModel;
  constructor() { }
  ngAfterViewInit(): void {
    console.log(this.firstNameInput);
  }

  ngOnInit(): void {
    this.firstName='Hello ViewChild ...';
  }
  okButtonClick():void{
console.log('ok button clicked');
console.log(this.firstNameInput.model);
console.log(this.firstNameInput.name);
console.log('value: ' +  this.firstNameInput.value);
  }

}
