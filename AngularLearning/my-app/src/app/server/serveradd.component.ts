import { Component, OnInit } from '@angular/core';
import { IServerAdd } from './iserver-list';
import { ServerDataService } from './server-data.service';
import { ServerTypeDataService } from '../lesson-twelve-httppost/server-type-data.service';
import { IServerTypeDTOLOV } from '../lesson-twelve-httppost/iserver-type-dtoadd';
import { Router } from '@angular/router';

@Component({
  selector: 'app-serveradd',
  templateUrl: './serveradd.component.html',
  styleUrls: ['./serveradd.component.css']
})
export class ServeraddComponent implements OnInit {
  serverTypeLOV:IServerTypeDTOLOV[];
  serverAdd:IServerAdd={
    serverName:'',
    serverTypeId:-1,
    internalIP:'',
    externalIP:'',
    urlToAccess:'',
    notes:'',
  }
  constructor(private serverDataService: ServerDataService, private serverTypeDataService:ServerTypeDataService, private router:Router) { }

  ngOnInit(): void {
    this.serverTypeDataService.getServerTypeForLOV().subscribe({
      next:data=>this.serverTypeLOV=data
    });
  }
  saveButtonClick(){
    //console.log('Add new server' + JSON.stringify(this.serverAdd));
    this.serverDataService.addNewServer(this.serverAdd).subscribe({
      next:data=>{
        console.log(data);
        this.router.navigate(['/servers']); 
      }
    });
       
  }

}
