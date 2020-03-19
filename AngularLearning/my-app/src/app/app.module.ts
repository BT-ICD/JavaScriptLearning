import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdditionComponent } from './addition/addition.component';
import { HeroeslistComponent } from './heroeslist/heroeslist.component';
import { LessonOneComponent } from './lesson-one/lesson-one.component';
import { LessonTwoComponent } from './lesson-two/lesson-two.component';
import { LessonThreeProductlistComponent } from './lesson-three-productlist/lesson-three-productlist.component';
import { LessonFourImageComponent } from './lesson-four-image/lesson-four-image.component';

@NgModule({
  declarations: [
    AppComponent,
    AdditionComponent,
    HeroeslistComponent,
    LessonOneComponent,
    LessonTwoComponent,
    LessonThreeProductlistComponent,
    LessonFourImageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
