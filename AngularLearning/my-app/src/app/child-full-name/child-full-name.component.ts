import { Component, OnInit, Input, SimpleChanges, OnChanges, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child-full-name',
  templateUrl: './child-full-name.component.html',
  styleUrls: ['./child-full-name.component.css']
})
export class ChildFullNameComponent implements OnInit, OnChanges {
  @Output() fullNameChange:EventEmitter<string>= new EventEmitter<string>();
  firstNameChangeMessage: string;
  // @Input()
  private _fName: string;
  public get fName(): string {
    return this._fName;
  }
  @Input()
  public set fName(value: string) {
    this._fName = value;
    this.onFirstNameChange();
    this.fullNameChange.emit(this.getFullName());
  }
 
  private _mName: string;
  public get mName(): string {
    return this._mName;
  }
  @Input()
  public set mName(value: string) {
    this._mName = value;
    this.fullNameChange.emit(this.getFullName());
  }
  
  private _lName: string;
  public get lName(): string {
    return this._lName;
    
  }
  @Input()
  public set lName(value: string) {
    this._lName = value;
    this.fullNameChange.emit(this.getFullName());
  }
 
  constructor() { }

  ngOnInit(): void {
  }
  onFirstNameChange() {
    const curdate = new Date();
    this.firstNameChangeMessage = `First Name property changed on: ${curdate.toLocaleTimeString()}`;
  }
  getFullName():string {
    return `${this.fName} ${this.mName} ${this.lName}`
  }
  onSubmitButtonClick() {


  }
  onClearButtonClick() {
    this.fName = '';
    this.mName = '';
    this.lName = '';
  }
  //To determine properties which are change
  ngOnChanges(changes: SimpleChanges): void {
    for (let propName in changes) {
      let chng = changes[propName];
      let cur = JSON.stringify(chng.currentValue);
      let prev = JSON.stringify(chng.previousValue);
      console.log(`from ngOnchanges:  ${chng} - ${cur} - ${prev}`);
    }
  }

}

