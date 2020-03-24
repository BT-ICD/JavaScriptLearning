import { Injectable } from '@angular/core';
import {ICustomer} from './customer'
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonEightHttpCustomerServiceService {
  customerListUrl:string='http://localhost:7456/API/Customer/GetCustomers';
  customerList:ICustomer[];
customerListFix:ICustomer[]=[
      {
        "customerID":101,
        "customerName":'Google'
      },
      {
        "customerID":102,
        "customerName":'Microsoft'
      }
  ];
  constructor(private http:HttpClient) { }

  getCustomerListFix():ICustomer[]{
    return this.customerListFix;  
  }
  getCustomerList():Observable<ICustomer[]>{
   return this.http.get<ICustomer[]>(this.customerListUrl).pipe(
      tap(data=>console.log('All: ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
  private handleError(err:HttpErrorResponse){
    let errorMessage:string='';
    return throwError(errorMessage);
  }
}
