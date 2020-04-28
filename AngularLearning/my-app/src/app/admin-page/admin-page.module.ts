import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminListComponent } from './admin-list.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../user/auth.guard';



@NgModule({
  declarations: [AdminListComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'adminlist', 
      component:AdminListComponent,
      canActivate:[AuthGuard]
    }
    ])
  ]
})
export class AdminPageModule { }
