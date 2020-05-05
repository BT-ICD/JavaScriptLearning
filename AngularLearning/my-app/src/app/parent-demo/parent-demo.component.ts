import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-demo',
  templateUrl: './parent-demo.component.html',
  styleUrls: ['./parent-demo.component.css']
})
export class ParentDemoComponent implements OnInit {
  fullNameFromChild:string='';
fNameFromParent:string="First Name ...";
mNameFromParent:string="Middle Name ...";
lNameFromParent:string="Last Name ...";


  constructor() { }

  ngOnInit(): void {
  }
  onFirstNameSubmitClick(){}
  getChildComponentProperty(value:string){
    console.log(value);
  }
  onFullNameChange(value:string):void{
    console.log('onFullNameChange: ' + value);
    this.fullNameFromChild = value;
  }
}

