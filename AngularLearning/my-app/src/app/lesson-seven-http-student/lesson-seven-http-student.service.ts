import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import { IStudent } from './student';
import { Observable, throwError } from 'rxjs';
import {catchError, tap} from 'rxjs/operators'
import { $ } from 'protractor';

@Injectable({
    providedIn:'root'
})
export class StudentService{
    private studentJSONFileUrl:string='../../assets/Data/SudentJSON.txt';
    constructor(private http:HttpClient){

    }
getStudents():Observable<IStudent[]>
{
    return this.http.get<IStudent[]>(this.studentJSONFileUrl).pipe(
        tap(data=>console.log('All:' + JSON.stringify(data))),
        catchError(this.handleError)
    );
}
private handleError(err:HttpErrorResponse){
    let errorMessage='';
    if(err.error instanceof ErrorEvent){
        errorMessage= `An error occurred: $(err.error.message)`;
    }
    else{
        errorMessage =`Server returned code : $(err.status), error message is: $(err.message)`; 
    }
    console.error(errorMessage);
    return throwError(errorMessage);
}
}