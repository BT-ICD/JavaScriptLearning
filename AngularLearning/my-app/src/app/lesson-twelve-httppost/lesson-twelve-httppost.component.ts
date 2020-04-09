import { Component, OnInit } from '@angular/core';
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
  serverTypeList: IServerType[];
  constructor(private serverTypeDataService: ServerTypeDataService, private router:Router) { }

  ngOnInit(): void {
    this.serverTypeDataService.getServerTypes().subscribe({
      next: data => {
        this.serverTypeList = data;
        console.log(data);
      }
    });
  }
  addNewButtonClick() {
    console.log('Add New Button Clicked');
    this.router.navigate(['/L13']);
    
  }
  editButtonClick(id: number) {
    console.log('Edit Clicked:' + id);
  }
  deleteButtonClick(id: number) {
    console.log(`Delete button clicked ${id}`);
  }
  addButtonClick() {
    this.serverTypeDataService.addNewServerType(this.serverTypeObj).subscribe({
      next: data => console.log(data)
    })
  }


}
