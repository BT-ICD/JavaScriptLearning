import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServerList, IServerAdd, IServerEdit } from './iserver-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServerDataService {
  serverUrl: string = 'http://localhost:7458/API/Server/';
  serverList: IServerList[];
  constructor(private http: HttpClient) { }
  getServerList(): Observable<IServerList[]> {
    const url = this.serverUrl + "GetServerList";
    return this.http.get<IServerList[]>(url);
  }
  addNewServer(serverAdd:IServerAdd){
    const url = this.serverUrl +'Add';
    return this.http.post(url,serverAdd);
  }
  updateServer(serverEdit:IServerEdit){
    const url = this.serverUrl +'Edit';
    return this.http.post(url,serverEdit);
  }
  deleteServer(id:number){
    const url = this.serverUrl +'Delete/' + id;
    return this.http.post(url,null);
  }
  getServerById(id:number){
    const url = this.serverUrl +'GetServerById/' + id;
    return this.http.get<IServerEdit>(url);
  }
}
