import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicaiton-navigation-bar',
  templateUrl: './applicaiton-navigation-bar.component.html',
  styleUrls: ['./applicaiton-navigation-bar.component.css']
})
export class ApplicaitonNavigationBarComponent implements OnInit {
  public isMenuCollapsed = true;
  constructor() { }

  ngOnInit(): void {
  }

}
