import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ServerComponent } from './server.component';
import { ServeraddComponent } from './serveradd.component';
import { ServereditComponent } from './serveredit.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    ServerComponent,
    ServeraddComponent,
    ServereditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild([
      {path:'serverlist', component:ServerComponent},
      {path:'serveradd',component:ServeraddComponent},
      {path:'serveredit',component:ServereditComponent}
    ])
  ]
})
export class ServerModule { }
