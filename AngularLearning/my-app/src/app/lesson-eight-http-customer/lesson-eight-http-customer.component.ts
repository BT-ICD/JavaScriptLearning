import { Component, OnInit } from '@angular/core';
import { LessonEightHttpCustomerServiceService } from './lesson-eight-http-customer-service.service';
import { ICustomer } from './customer';

@Component({
  selector: 'app-lesson-eight-http-customer',
  templateUrl: './lesson-eight-http-customer.component.html'
})
export class LessonEightHttpCustomerComponent implements OnInit {
  pageTitle:string;
  listFilter:string;
  errorMessage:string;
  customerList:ICustomer[];
  customerListFromWeb:ICustomer[];
  constructor(private customerService:LessonEightHttpCustomerServiceService) {
    this.pageTitle='Customer List';
    this.listFilter='';
    this.customerList = customerService.getCustomerListFix();
   }

  ngOnInit(): void {
    this.customerService.getCustomerList().subscribe({
      next:customers=>this.customerListFromWeb=customers,
      error:err=>this.errorMessage=err
    });
  }
  logCustomerList(){
    console.log(this.customerList);
  }

}
