import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product.component';
import { ProductaddComponent } from './productadd.component';
import { ProducteditComponent } from './productedit.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductComponent, ProductaddComponent, ProducteditComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
          {
            path:'',
            component:ProductComponent
          },
          {
            path:'add',
            component:ProductaddComponent
          },
          {
            path:':id/edit',
            component:ProducteditComponent
          }
        ]
      )
  ]
})
export class ProductlazyloadModule { }
