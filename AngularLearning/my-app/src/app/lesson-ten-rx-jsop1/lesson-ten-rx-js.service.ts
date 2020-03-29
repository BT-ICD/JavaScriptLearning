import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LessonTenRxJsService {
 numOfIntValues=new Observable<number>(subscriber=>{
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  subscriber.complete();
});

    constructor() { }
    getNumOfIntValues():Observable<number>{
      return this.numOfIntValues;
    }
    getNumOfIntValuesUsingOf():Observable<number>{
      const values = of(1,2,3,4,5,6,7,8,9,10);
      return values;
    }
}

