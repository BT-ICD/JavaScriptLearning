import { Component, OnInit } from '@angular/core';
import { ServerDataService } from './server-data.service';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { IServerEdit } from './iserver-list';
import { ServerTypeDataService } from '../lesson-twelve-httppost/server-type-data.service';
import { IServerTypeDTOLOV } from '../lesson-twelve-httppost/iserver-type-dtoadd';

@Component({
  selector: 'app-serveredit',
  templateUrl: './serveredit.component.html',
  styleUrls: ['./serveredit.component.css']
})
export class ServereditComponent implements OnInit {
serverEdit:IServerEdit;
serverTypeLOV:IServerTypeDTOLOV[];
  constructor(private serverDataService:ServerDataService, private serverTypeDataService:ServerTypeDataService, private route: ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    let id:number ;
    this.route.paramMap.subscribe(
      
        (params:ParamMap)=>{
          id=+params.get('id');
         // console.log('id is:' + id);
          this.loadServerDetails(id);        
        }
    );
    this.loadServerTypeLOV();
  }
  loadServerDetails(id:number){
    this.serverDataService.getServerById(id).subscribe(data=>this.serverEdit=data);
  }
  loadServerTypeLOV(){
    this.serverTypeDataService.getServerTypeForLOV().subscribe(data=>this.serverTypeLOV=data);    
  }
  saveButtonClick(){
    //console.log('Save Button Clicked');
    this.serverDataService.updateServer(this.serverEdit).subscribe(data=>{
      console.log(data)
      this.router.navigate(['/servers']);
    });
  
  }

}
