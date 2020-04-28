import { Component, OnInit } from '@angular/core';
import { IProjectEdit } from './iproject';
import { ProjectService } from './project.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-projectedit',
  templateUrl: './projectedit.component.html',
  styleUrls: ['./projectedit.component.css']
})
export class ProjecteditComponent implements OnInit {
  projectEdit:IProjectEdit;

  constructor(private projectService: ProjectService, private route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id:number;
    this.route.paramMap.subscribe(
      (params:ParamMap)=>{
        id=+params.get('id');
        this.loadProjectDetails(id);
      }
    );
  }
  loadProjectDetails(id:number){
    this.projectService.getProjectById(id).subscribe(data=>this.projectEdit=data);
  }
  saveButtonClick(){
console.log('save button clicked');
this.projectService.edit(this.projectEdit).subscribe(data=>{
  console.log(data);
  this.router.navigate(['/projects']);
})
  }
}
