import { Component, OnInit } from '@angular/core';
import { ProjectService } from './project.service';
import { IProjectList } from './iproject';

@Component({
  selector: 'app-projectdetails',
  templateUrl: './projectdetails.component.html',
  styleUrls: ['./projectdetails.component.css']
})
export class ProjectdetailsComponent implements OnInit {
projectList:IProjectList[];
selectedProjectId:number;
showModal:boolean;
  constructor(private projectService:ProjectService) { }

  ngOnInit(): void {
    this.loadProjectList();
  }
  private loadProjectList(){
    this.projectService.getProjectList().subscribe(data=>this.onProjectListRetrieved(data));
  }
  onProjectListRetrieved(list:IProjectList[]){
    this.projectList=list;
    console.log('Project List Retrieved');
  }
  
  deleteButtonClick(id:number){
this.projectService.delete(id).subscribe(data=>this.onProjectDeleted(data));
  }
  onProjectDeleted(data){
    console.log(data);
    if(data.result==1){
      
      this.loadProjectList();
      this.hideModal();
    }
    else
    {
      console.log('OOPS something went wrong');
    }
  }
  showDeleteModal(id:number){
    this.selectedProjectId=id;
    this.showModal=true;
  }
  hideModal(){
    this.selectedProjectId=0;
    this.showModal=false;
  }
}
