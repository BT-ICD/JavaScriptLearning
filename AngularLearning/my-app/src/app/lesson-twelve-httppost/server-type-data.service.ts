import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServerType } from './iserver-type';
import { Observable } from 'rxjs';
import { IServerTypeDTOAdd } from './iserver-type-dtoadd';

@Injectable({
  providedIn: 'root'
})
export class ServerTypeDataService {
  serverTypeListURL: string = 'http://localhost:7458/Api/ServerType/GetServerTypes';
  serverTypeAddNewURL: string = 'http://localhost:7458/Api/ServerType/Add';
  serverTypeDeleteURL: string = 'http://localhost:7458/Api/ServerType/Delete';
  serverTypeGetByIdURL:string='http://localhost:7458/Api/ServerType/GetServerTypeById';
  serverTypeUpdateURL:string='http://localhost:7458/Api/ServerType/Update';
  serverTypes: IServerType[];
  constructor(private http: HttpClient) { }
  getServerTypes(): Observable<IServerType[]> {
    return this.http.get<IServerType[]>(this.serverTypeListURL);
  }
  getServerTypeById(id:number):Observable<IServerTypeDTOAdd>{
    const url = this.serverTypeGetByIdURL + '/'+ id;
    return this.http.get<IServerTypeDTOAdd>(url);
  }
  addNewServerType(serverTypeDTOAdd: IServerTypeDTOAdd) {
    return this.http.post(this.serverTypeAddNewURL, serverTypeDTOAdd);
  }
  updateServerType(serverTypeDTOAdd: IServerTypeDTOAdd){
    return this.http.post(this.serverTypeUpdateURL, serverTypeDTOAdd);
  }
  deleteServerType(id:number){
    const url=this.serverTypeDeleteURL + "/" + id;
    return this.http.post(url,null);
  }

}
