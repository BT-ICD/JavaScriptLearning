import { Injectable } from '@angular/core';
import { IUserToken } from '../user-login/i-user-login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private _userToken: IUserToken;
  constructor() { }
  //Not require to call - instead check user token
  get isLoggedIn():boolean{
    if(this._userToken!=null)
      return true;
    else
    return false;

  }
 
  public get userToken(): IUserToken {
    return this._userToken;
  }
  public set userToken(value: IUserToken) {
    this._userToken = value;
    
  }
}
