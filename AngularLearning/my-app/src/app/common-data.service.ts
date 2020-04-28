import { Injectable } from '@angular/core';
import { IUserToken } from './user-login/i-user-login';

@Injectable({
  providedIn: 'root'
})
export class CommonDataService {
readonly baseAPIUrl:string ='http://localhost:7458/API/';
 
constructor() { }
}
