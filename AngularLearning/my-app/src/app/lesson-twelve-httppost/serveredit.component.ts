import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IServerTypeDTOAdd } from './iserver-type-dtoadd';
import { ServerTypeDataService } from './server-type-data.service';

@Component({
  selector: 'app-serveredit',
  templateUrl: './serveredit.component.html',
  styleUrls: ['./serveredit.component.css']
})
export class ServereditComponent implements OnInit {
id:number;
serverTypeDTO:IServerTypeDTOAdd={
  "serverTypeId":10,
  "createdBy":"Postman",
  "name":'df'
};
  constructor(private route:ActivatedRoute, private router:Router, private serverTypeDataService: ServerTypeDataService) { }

  ngOnInit(): void {
    const id= +this.route.snapshot.paramMap.get('id');
    this.serverTypeDataService.getServerTypeById(id).subscribe({
      next:data=> this.serverTypeDTO=data
    });
    //this.serverTypeId=id;
  }
  saveButtonClick(){
    console.log('save button clicked');
    console.log(JSON.stringify( this.serverTypeDTO));
    this.serverTypeDataService.updateServerType(this.serverTypeDTO).subscribe({
      next:data=>console.log(data)
    });
    this.router.navigate(['/L12']);
  }
  cancelButtonClick(){
    console.log('Cancel Button Click');
    this.router.navigate(['/L12']);
  }
}
