import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IServerTypeDTOAdd } from './iserver-type-dtoadd';
import { ServerTypeDataService } from './server-type-data.service';


@Component({
  selector: 'app-serveradd',
  templateUrl: './serveradd.component.html'
  
})
export class ServeraddComponent implements OnInit {
  serverTypeDTO:IServerTypeDTOAdd={
    "serverTypeId":0,
    "name":'',
    "createdBy":""
  };
  userNames=["Angular","Postman","Other"];

  constructor( private serverTypeDataService:ServerTypeDataService, private router:Router) { }

  ngOnInit(): void {
    
  }
  saveButtonClick(){

    console.log(this.serverTypeDTO);
    this.serverTypeDataService.addNewServerType(this.serverTypeDTO).subscribe({
      next:data=>console.log('Add New Server Response: ' + data)
    });
    //console.log('Save Button Clicked...' + this.serverTypeDTO);
    this.router.navigate(['/L12']);
  }
}
