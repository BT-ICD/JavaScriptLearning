import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router'
import { AppComponent } from './app.component';

import { AdditionComponent } from './addition/addition.component';
import { HeroeslistComponent } from './heroeslist/heroeslist.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { LessonThreeProductlistComponent } from './lesson-three-productlist/lesson-three-productlist.component';
import { LessonFourImageComponent } from './lesson-four-image/lesson-four-image.component';
import { LessonFiveTemplateRefVarComponent } from './lesson-five-template-ref-var/lesson-five-template-ref-var.component';
import { LessonSixRadiobuttonComponent } from './lesson-six-radiobutton/lesson-six-radiobutton.component';
import { LessonSevenHttpStudentComponent } from './lesson-seven-http-student/lesson-seven-http-student.component';
import { LessonEightHttpCustomerComponent } from './lesson-eight-http-customer/lesson-eight-http-customer.component';
import { LessonNineObservableComponent } from './lesson-nine-observable/lesson-nine-observable.component';
import { LessonTenRxJSOp1Component } from './lesson-ten-rx-jsop1/lesson-ten-rx-jsop1.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    HeroeslistComponent,
    LessonOneComponent,
    LessonTwoComponent,
    LessonThreeProductlistComponent,
    LessonFourImageComponent,
    LessonFiveTemplateRefVarComponent,
    LessonSixRadiobuttonComponent,
    LessonSevenHttpStudentComponent,
    LessonEightHttpCustomerComponent,
    LessonNineObservableComponent,
    LessonTenRxJSOp1Component
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
        {path:'L1',component:LessonOneComponent},
        {path:'L2',component:LessonTwoComponent},
        {path:'L3',component:LessonThreeProductlistComponent},
        {path:'L4',component:LessonFourImageComponent},
        {path:'L5',component:LessonFiveTemplateRefVarComponent},
        {path:'L6',component:LessonSixRadiobuttonComponent},
        {path:'L7',component:LessonSevenHttpStudentComponent},
        {path:'L8',component:LessonEightHttpCustomerComponent},
        {path:'L9',component:LessonNineObservableComponent},
        {path:'L10', component:LessonTenRxJSOp1Component},
        {path:'Home',component:AdditionComponent},
        {path:'',redirectTo:'Home',pathMatch:'full'},
        {path:'**',redirectTo:'Home',pathMatch:'full'}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
