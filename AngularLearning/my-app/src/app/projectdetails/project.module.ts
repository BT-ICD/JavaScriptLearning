import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProjectdetailsComponent } from './projectdetails.component';
import { ProjectaddComponent } from './projectadd.component';
import { ProjecteditComponent } from './projectedit.component';



@NgModule({
  declarations: [
    ProjectdetailsComponent,
    ProjectaddComponent,
    ProjecteditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      { path: 'projects', component: ProjectdetailsComponent },
      {path:'projects/add',component:ProjectaddComponent},
      {path:'projects/:id/edit', component:ProjecteditComponent}
    ])
  ]
})
export class ProjectModule { }
