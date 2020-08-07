import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FullNameChildComponent } from './full-name-child.component';

@Component({
  selector: 'app-full-name-parent',
  templateUrl: './full-name-parent.component.html',
  styleUrls: ['./full-name-parent.component.css']
})
export class FullNameParentComponent implements OnInit {
@Input() firstName:string;
@ViewChild(FullNameChildComponent) childname:FullNameChildComponent
  constructor() { }

  ngOnInit(): void {
  }
  fullNameButtonClick(){
    console.log('Full Name Button clicked');
    console.log(this.childname);
    console.log(this.childname.firstName);
    console.log(this.childname.middleName);
    console.log(this.childname.lastName);
    console.log(this.childname.getFullName());


  }
  clearNameButtonClick(){
    // this.childname.firstName='';
    // this.childname.middleName='';
    // this.childname.lastName='';
    // or
    this.childname.clear();
  }
  childNameChanged(data:string):void{
    console.log('childNameChanged: ' + data );
  }
 
}
