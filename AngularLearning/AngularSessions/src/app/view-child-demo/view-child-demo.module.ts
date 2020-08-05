import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import { Viewchildlab1Component } from './viewchildlab1/viewchildlab1.component';
import { RouterModule } from '@angular/router';
import { ViewChildLab2Component } from './view-child-lab2/view-child-lab2.component';



@NgModule({
  declarations: [Viewchildlab1Component, ViewChildLab2Component],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'lab1',component:Viewchildlab1Component},
      {path:'lab2', component:ViewChildLab2Component}
    ])
  ]
})
export class ViewChildDemoModule { }
