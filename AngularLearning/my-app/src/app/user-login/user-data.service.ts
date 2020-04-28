import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser, IUserToken } from './i-user-login';
import { CommonDataService } from '../common-data.service';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
user:IUser={
  "username":'',
  "password":''
}

  constructor(private httpClient:HttpClient, private commonDataService : CommonDataService) { }
  checkLogin(userdata:IUser){
    const url: string = this.commonDataService.baseAPIUrl +'Authenticate/login';
    return this.httpClient.post<IUserToken>(url,userdata);
  }
}
