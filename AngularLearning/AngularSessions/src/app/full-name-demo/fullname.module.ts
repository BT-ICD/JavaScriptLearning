import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {  RouterModule } from '@angular/router';

import {FullNameChildComponent} from './full-name-child.component';
import {FullNameParentComponent} from './full-name-parent.component'


@NgModule({
  declarations: [FullNameParentComponent, FullNameChildComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'fullname', component:FullNameParentComponent}
    ])
  ]
})
export class FullnameModule { }
