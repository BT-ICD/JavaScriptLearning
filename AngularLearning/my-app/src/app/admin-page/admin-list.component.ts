import { Component, OnInit } from '@angular/core';
import { AdminDataService } from './admin-data.service';
import { ISecureProduct } from './isecure-product';

@Component({
  selector: 'app-admin-list',
  templateUrl: './admin-list.component.html',
  styleUrls: ['./admin-list.component.css']
})
export class AdminListComponent implements OnInit {
 secureProductList:ISecureProduct[];
  constructor(private adminDataService: AdminDataService) { }

  ngOnInit(): void {
    this.adminDataService.getList().subscribe(data=>console.log(data));
  }
  onDataRetrieved(){

  }

}
