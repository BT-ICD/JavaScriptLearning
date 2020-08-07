import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { FullNameParentComponent } from 'src/app/full-name-demo/full-name-parent.component';

@Component({
  selector: 'app-view-child-lab3',
  templateUrl: './view-child-lab3.component.html',
  styleUrls: ['./view-child-lab3.component.css']
})
export class ViewChildLab3Component implements OnInit, AfterViewInit {
@ViewChild(FullNameParentComponent) fullName: FullNameParentComponent;

  constructor() { }
  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    console.log('this.fullName: ' + this.fullName.childname.getFullName());
   // this.fullName.firstName ='From TS';
  }
  changeFirstName():void{
    this.fullName.firstName='Changed From Parent Container';
  }

 

}
