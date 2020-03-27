import { Component, OnInit } from '@angular/core';
import { of, Observer, Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lesson-nine-observable',
  templateUrl: './lesson-nine-observable.component.html',
  styleUrls: ['./lesson-nine-observable.component.css']
})
export class LessonNineObservableComponent implements OnInit {
  name:string='Angular Observable'
  //numObservable declared as Observalbe<number>
  numObservable = of(2,4,6,8);
  // itemObservable=new Observable();
  constructor(private route:Router) {
    // this.itemObservable = this.numObservable.pipe(map(item=>item*2), take(2) ); 
  }

  ngOnInit(): void {

  }
observableButton1Click():void{
  // Subscribe Observable to access values
  this.numObservable.subscribe(console.log);
  // this.itemObservable.subscribe(console.log);
  }
observableButton2Click(){
  this.numObservable.subscribe({
    next: data=>{console.log(`data is ${data}`)},
    error: err=>{console.error('Error: ' + err)},
    complete: ()=>{console.log('completed');}
  }); 
  }
  observableButton3Click(){
    const observer={
      next:data=>console.log(`data value is ${data}`),
      error:err=>console.log('Error: ' + err),
      complete: ()=>console.log('No more values, completed')
    };
    this.numObservable.subscribe(observer);
  }
  RxJSOperatorButton1Click(){
    this.route.navigate(['/L10']);
  }
}

