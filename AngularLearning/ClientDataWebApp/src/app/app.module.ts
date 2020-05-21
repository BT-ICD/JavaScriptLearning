// Angular Library Modules 
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Third Party Modules
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'

// App Modules
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicaitonNavigationBarComponent } from './applicaiton-navigation-bar/applicaiton-navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicaitonNavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
