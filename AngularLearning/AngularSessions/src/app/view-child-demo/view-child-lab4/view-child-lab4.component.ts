import { Component, OnInit,  QueryList, AfterViewInit, ViewChildren } from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-view-child-lab4',
  templateUrl: './view-child-lab4.component.html',
  styleUrls: ['./view-child-lab4.component.css']
})
export class ViewChildLab4Component implements OnInit , AfterViewInit {
firstName:string;
age:number;
designations:string[]=['CEO','COO','CTO'];
designation:string;
@ViewChildren(NgModel) inputs:QueryList<NgModel>;

  constructor() { }
  
  ngOnInit(): void {
    this.firstName='Narayanmurthy';
    this.age=70;
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');

    
    this.inputs.first.valueChanges.subscribe(()=>this.firstNameChanged())
  }
  firstNameChanged():void{
    console.log('First Name Modified: (Event Executed Before Modification) ' + this.firstName);
  }
  okButtonClick():void{
    //to get numbe of elements in the list
    console.log('Number of elements: '+this.inputs.length);
    //To iterate all the elements of list
    this.inputs.forEach(item=>{
      console.log(item.name +  ' - ' +item.value);
    })
   console.log('First: ' + this.inputs.first.name);
   console.log('Last: ' + this.inputs.last.name);
  //  let eleLast = this.inputs.last;
  //  console.log(eleLast); 

   
  }
}
