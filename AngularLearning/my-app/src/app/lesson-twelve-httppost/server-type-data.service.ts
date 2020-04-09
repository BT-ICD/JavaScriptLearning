import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServerType } from './iserver-type';
import { Observable } from 'rxjs';
import { IServerTypeDTOAdd } from './iserver-type-dtoadd';

@Injectable({
  providedIn: 'root'
})
export class ServerTypeDataService {
serverTypeListURL:string='http://localhost:7458/Api/ServerType/GetServerTypes';
serverTypeAddNewURL:string='http://localhost:7458/Api/ServerType/Add';
serverTypes:IServerType[];
  constructor(private http:HttpClient) { }
getServerTypes():Observable<IServerType[]>{
  return this.http.get<IServerType[]>(this.serverTypeListURL);
}
addNewServerType(serverTypeDTOAdd: IServerTypeDTOAdd){
return this.http.post(this.serverTypeAddNewURL, serverTypeDTOAdd);
}
}
