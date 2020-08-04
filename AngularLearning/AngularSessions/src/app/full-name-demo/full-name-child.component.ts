import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-full-name-child',
  templateUrl: './full-name-child.component.html',
  styleUrls: ['./full-name-child.component.css']
})
export class FullNameChildComponent implements OnInit , OnChanges{


  
  private _firstName: string;
  public get firstName(): string {
    return this._firstName;
  }
  @Input()
  public set firstName(value: string) {
    this._firstName = value;
   // console.log(value);
    this.nameChanged.emit(this.getFullName());
  }

  private _middleName: string;
  public get middleName(): string {
    return this._middleName;
  }
  @Input()
  public set middleName(value: string) {
    this._middleName = value;
    this.nameChanged.emit(this.getFullName());
  }
  
  private _lastName: string;
  public get lastName(): string {
    return this._lastName;
  }
  @Input()
  public set lastName(value: string) {
    this._lastName = value;
    this.nameChanged.emit(this.getFullName());
  }
@Output() nameChanged:EventEmitter<string> = new EventEmitter<string>();

  constructor() { }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes);
    //to determine value of particular property changed - If changed then get value
    // if(changes['firstName']) {
    //   console.log('firstName changed' +  ' '  +changes['firstName'].previousValue + ' '+ changes['firstName'].currentValue ); 
    // }
    // else{
    //   console.log('firstName not changed' +  ' '  +changes['firstName'].previousValue + ' '+ changes['firstName'].currentValue );
    // }
    // if(changes['middleName']){
    //   console.log('middle name changed')
    // }
    // else
    // {
    //   console.log('middle name not changed')
    // }
  }

  ngOnInit(): void {
    // this.firstName='Hello1';
    // this.middleName='Angular1';
  }
  getFullName():string{
    return this.firstName + ' ' + this.middleName + ' ' + this.lastName;
  }
  clear():void{
    this.firstName='';
    this.lastName=''
    this.middleName='';
  }

}
