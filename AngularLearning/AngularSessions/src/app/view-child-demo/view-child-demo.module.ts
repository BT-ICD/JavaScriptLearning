import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';

import {FullnameModule} from '../full-name-demo/fullname.module';
import { Viewchildlab1Component } from './viewchildlab1/viewchildlab1.component';
import { ViewChildLab2Component } from './view-child-lab2/view-child-lab2.component';
import { ViewChildLab3Component } from './view-child-lab3/view-child-lab3.component';



@NgModule({
  declarations: [Viewchildlab1Component, ViewChildLab2Component, ViewChildLab3Component],
  imports: [
    CommonModule,
    FormsModule,
    FullnameModule,
    RouterModule.forChild([
      {path:'viewchildlab1',component:Viewchildlab1Component},
      {path:'viewchildlab2', component:ViewChildLab2Component},
      {path:'viewchildlab3',component:ViewChildLab3Component}
    ])
  ]
})
export class ViewChildDemoModule { }
