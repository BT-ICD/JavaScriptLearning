import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CommonDataService } from '../common-data.service';
import { ISecureProduct } from './isecure-product';
import { AuthService } from '../user/auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminDataService {

  constructor(private httpClient: HttpClient, private commonDataService: CommonDataService, private authService: AuthService) { }
  getList() {
    const url: string = this.commonDataService.baseAPIUrl + "Secure";
    const tokenstring:string = `Bearer ${this.authService.userToken.token}` ;
    const httpOptions ={
      headers:new HttpHeaders({
        'Authorization':tokenstring
      })
    };
    if (this.authService.userToken) {
      console.log('httpOptions ' + httpOptions);
      console.log('url ' + url);
    return  this.httpClient.get<ISecureProduct[]>(url,httpOptions);
    }
  }
}

