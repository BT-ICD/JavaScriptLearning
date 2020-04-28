import { Component, OnInit } from '@angular/core';
import { IProjectAdd } from './iproject';
import { ProjectService } from './project.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projectadd',
  templateUrl: './projectadd.component.html',
  styleUrls: ['./projectadd.component.css']
})
export class ProjectaddComponent implements OnInit {
projectAdd:IProjectAdd={
  "name":'',
  "about":'',
  "notes":'',
  "sourceCodeLocation":''
}
  constructor(private projectService: ProjectService, private router: Router) { }

  ngOnInit(): void {
  }

  saveButtonClick(){
  this.projectService.add(this.projectAdd).subscribe(data=>{
    console.log(data);
    this.router.navigate(['/projects']);
  });  
  }
}
