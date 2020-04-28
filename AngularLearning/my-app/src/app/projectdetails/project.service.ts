import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IProjectList, IProjectEdit, IProjectAdd } from './iproject';
import { Observable } from 'rxjs';
import { CommonDataService } from '../common-data.service';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  //serverUrl: string = 'http://localhost:7458/API/Project/';
  projectList: IProjectList[];

  constructor(private http: HttpClient, private commonDataService : CommonDataService) { }
  getProjectList(): Observable<IProjectList[]> {
    //const url: string = this.serverUrl + 'List';
    const url: string = this.commonDataService.baseAPIUrl +'Project/List';
    return this.http.get<IProjectList[]>(url);
  }
  getProjectById(id: number) {
   // const url = this.serverUrl + 'GetProjectById/' +id;
    const url: string = this.commonDataService.baseAPIUrl +'Project/GetProjectById/' + id;
    return this.http.get<IProjectEdit>(url);
  }
  add(iProjectAdd: IProjectAdd) {
    //const url = this.serverUrl + 'Add';
    const url= this.commonDataService.baseAPIUrl + 'Project/Add';
    return this.http.post(url, iProjectAdd);
  }
  edit(iProjectEdit: IProjectEdit) {
    //const url = this.serverUrl + 'edit';
    const url= this.commonDataService.baseAPIUrl + 'Project/edit';
    return this.http.post(url, iProjectEdit);
  }
  delete(id:number){
    //const url=this.serverUrl +'delete/' +id;
    const url= this.commonDataService.baseAPIUrl + 'Project/delete/' +id;
    return this.http.post(url,null);
      
  }
}
