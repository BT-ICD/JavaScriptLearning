import { Component, OnInit,  ChangeDetectorRef  } from '@angular/core';
import { Router } from '@angular/router';

import { IServerTypeDTOAdd } from './iserver-type-dtoadd';
import { ServerTypeDataService } from './server-type-data.service';
import { IServerType } from './iserver-type';

@Component({
  selector: 'app-lesson-twelve-httppost',
  templateUrl: './lesson-twelve-httppost.component.html'
})
export class LessonTwelveHttppostComponent implements OnInit {
  serverTypeObj: IServerTypeDTOAdd = {
    "serverTypeId": 16,
    "name": "DR-Stack-2",
    "createdBy": "Angular"
  };
  showModal:boolean;
  selectedServerTypeId:number;
  serverTypeList: IServerType[];
  
  constructor(private serverTypeDataService: ServerTypeDataService, private router:Router,  private changeDetectorRef:ChangeDetectorRef) { }

  ngOnInit(): void {
    this.loadServerTypeDetails();
  }
  private loadServerTypeDetails() {
    this.serverTypeDataService.getServerTypes().subscribe({
      next: data => {
        this.serverTypeList = data;
      }
    });
  }
  addNewButtonClick() {
    this.router.navigate(['/L13']);
  }
  editButtonClick(id: number) {
    console.log('Edit Clicked:' + id);
    this.router.navigate(['/L14',id]);
  }
  deleteButtonClick(id: number) {
    console.log(`Delete button clicked ${id}`);
    this.serverTypeDataService.deleteServerType(id).subscribe({
        next:data=> {
          console.log(data);
      }
    }  
           );
          
    this.showModal=false;
    //Currently used following line to refresh page - need to work on changeDetectorRef
    window.location.reload();
           
  }
  showDeleteModal(id:number){
    this.selectedServerTypeId=id;
    this.showModal=true;
  }
  hideModal(){
    this.showModal=false;
    this.selectedServerTypeId=0;
  }
  addButtonClick() {
    this.serverTypeDataService.addNewServerType(this.serverTypeObj).subscribe({
      next: data => console.log(data)
    })
  }


}
