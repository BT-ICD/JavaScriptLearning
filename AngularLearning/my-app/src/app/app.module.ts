import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
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
    LessonSevenHttpStudentComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
