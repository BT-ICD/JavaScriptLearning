import { Component, OnInit } from '@angular/core';
import { LessonTenRxJsService } from './lesson-ten-rx-js.service';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-lesson-ten-rx-jsop1',
  templateUrl: './lesson-ten-rx-jsop1.component.html',
  styleUrls: ['./lesson-ten-rx-jsop1.component.css']
})
export class LessonTenRxJSOp1Component implements OnInit {

  constructor(private lessonTenRxJsService: LessonTenRxJsService) { }

  ngOnInit(): void {
  }
  obsButton1Click(){
   const subscription1= this.lessonTenRxJsService.getNumOfIntValues().subscribe({
      // Using Arrow Function
      //next:data=>console.log(data)
      next(x){console.log('Received value'+ x);},
      error(err){console.error('something wrong occurred: ' + err);},
      complete(){console.log('done');}
    });
    //subscription1.unsubscribe();
    console.log('After Subscribed Method Call');
  }
  obsButton2Click(){
    this.lessonTenRxJsService.getNumOfIntValuesUsingOf().subscribe({
      next:data=>console.log(data),
      error:err=>console.log('Error: '+ err),
      complete:()=>console.log('Complete')
    });
  }
  obsButtonFilterClick(){
    this.lessonTenRxJsService.getNumOfIntValuesUsingOf().pipe(
      filter(i=>i%2===0)
    ).subscribe({
      next:data=>console.log(data)
    });
  }
  opButtonMapClick(){
    this.lessonTenRxJsService.getNumOfIntValuesUsingOf().pipe(
      map(i=>i*10)
    ).subscribe({
      next:data=>console.log(data)
    });
  }
}
