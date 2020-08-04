import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Viewchildlab1Component } from './viewchildlab1/viewchildlab1.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [Viewchildlab1Component],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:'lab1',component:Viewchildlab1Component}
    ])
  ]
})
export class ViewChildDemoModule { }
