import { Component, OnInit } from '@angular/core';
import { IUserSettings } from './iuser-settings';

@Component({
  selector: 'app-lesson-eleven-tformsone',
  templateUrl: './lesson-eleven-tformsone.component.html',
  styleUrls: ['./lesson-eleven-tformsone.component.css']
})
export class LessonElevenTformsoneComponent implements OnInit {
userSettings:IUserSettings={
  name:'Manan Shah',
  emailOffers:true,
  interfaceStyle:'dark',
  subscriptionType:'Lifetime',
  notes:'about user ...'
}
  constructor() { }

  ngOnInit(): void {
  }
  ngFormButtonClick(){
    console.log(`ngFormbutton Clicked`);
  }
}
