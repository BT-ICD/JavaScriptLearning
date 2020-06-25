import { Component, OnInit } from '@angular/core';
import { ProjectDocumentDataService } from './project-document-data.service';
import { IProjectDocumentAdd } from './iproject-document-types';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

///Learnig Reference - https://w3path.com/new-angular-8-file-upload-or-image-upload/
@Component({
  selector: 'app-project-document-add',
  templateUrl: './project-document-add.component.html',
  styleUrls: ['./project-document-add.component.css']
})
export class ProjectDocumentAddComponent implements OnInit {
  projectDocumentAdd:IProjectDocumentAdd={
    projectId:0,
    documentTypeId:0,
    notes:'',
    file:null
  };
  selectedProjectName:string='';
  errorMessage:string;
  fileData: File = null;
  previewUrl:any = null;
  fileUploadProgress: string = null;
  uploadedFilePath: string = null;
  constructor( private projectDocumentDataService: ProjectDocumentDataService, private route:ActivatedRoute ,private router:Router) { }

  ngOnInit(): void {
    //this.selectedProjectId=+this.route.snapshot.params['id'] ; //working fine
    this.projectDocumentAdd.projectId=+this.route.snapshot.paramMap.get('id') ;
    this.selectedProjectName=this.route.snapshot.queryParamMap.get('projectName');
}
  fileProgress(fileInput: any) {
    this.fileData = <File>fileInput.target.files[0];
}
saveButtonClick(f:NgForm){
      //if(f.valid)
      {
          const formData = new FormData();
          console.log('Project ID: ' + this.projectDocumentAdd.projectId);
          console.log('Document Id: ' + this.projectDocumentAdd.documentTypeId);
          console.log('notes: ' + this.projectDocumentAdd.notes  );
          formData.append('projectId', this.projectDocumentAdd.projectId+'');
          formData.append('documentTypeId',this.projectDocumentAdd.documentTypeId+'');
          formData.append('notes', this.projectDocumentAdd.notes);
          formData.append('file', this.fileData);
          this.projectDocumentDataService.add(formData).subscribe(data=>{
            this.router.navigate(['projectdocumentlist',this.projectDocumentAdd.projectId],{
              queryParams:{projectName:this.selectedProjectName}
            });
        });
      }
}
}
