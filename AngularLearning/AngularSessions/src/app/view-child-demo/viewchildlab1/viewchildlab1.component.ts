import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchildlab1',
  templateUrl: './viewchildlab1.component.html',
  styleUrls: ['./viewchildlab1.component.css']
})
export class Viewchildlab1Component implements OnInit {
@ViewChild('countryName')  countryNameVar: ElementRef
  constructor() { }

  ngOnInit(): void {
  }
  countryButtonClick():void{
    console.log('button clicked');
    //ElementRef - A Wrapper around a native element inside of a view.
    //nativeElement - to access underlying native element or null
    this.countryNameVar.nativeElement.focus();
    console.log(this.countryNameVar.nativeElement);
    console.log(this.countryNameVar.nativeElement.value);
    console.log(this.countryNameVar.nativeElement.type);
    console.log(this.countryNameVar);
    this.countryNameVar.nativeElement.value='Content changed';
  }
}
