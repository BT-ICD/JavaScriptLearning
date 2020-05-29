import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerTypeListComponent } from './server-type-list.component';
import { Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { ServerTypeResolverService } from './server-type-resolver.service';
import { ServerTypeAddComponent } from './server-type-add.component';
import { ServerTypeEditComponent } from './server-type-edit.component';
import { ServerTypeDataResolverService } from './server-type-data-resolver.service';


@NgModule({
  declarations: [ServerTypeListComponent, ServerTypeAddComponent, ServerTypeEditComponent],
  imports: [
    BrowserModule,
    CommonModule,
    
    FormsModule,
    NgbModule,
    RouterModule.forChild([
      {
        path:'servertype',
        component:ServerTypeListComponent, 
        runGuardsAndResolvers:'always',
        resolve: {resolvedData:ServerTypeResolverService}
        
      },
      {
        path:'servertype/add',
        component:ServerTypeAddComponent
        
      },
      {
        path:'servertype/:id/edit',
        component:ServerTypeEditComponent,
        resolve:{resolvedData:ServerTypeDataResolverService}
      }
    ])
  ]
  
})
export class ServerTypeModule { }
