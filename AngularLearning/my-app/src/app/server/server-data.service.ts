import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IServerList } from './iserver-list';
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
}
