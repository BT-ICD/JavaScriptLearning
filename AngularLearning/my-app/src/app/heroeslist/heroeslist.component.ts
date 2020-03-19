//The template displays properties using double curly brace interpolation:
//Reference from https://angular.io/guide/displaying-data
/*
Interpolation with double curly braces to display a component property.
ngFor to display an array of items.
A TypeScript class to shape the model data for your component and display properties of that model.
ngIf to conditionally display a chunk of HTML based on a boolean expression.

*/

import { Component, OnInit } from '@angular/core';
import {Hero} from './hero'
@Component({
  selector: 'app-heroeslist',
  template: `
                <h3>Title:{{title}}</h3>
                <h3>Favorite hero is {{myHero.name}}</h3>
                <h3>List of Heroes</h3>
                <ul>
                  <li *ngFor="let hero of heroes">{{hero.name}}</li>
                </ul>
                <p *ngIf="heroes.length>2">There are many heroes!</p>
            `
})
export class HeroeslistComponent implements OnInit {
  title:string; 
  myHero:Hero;
  //heroes:string[];
  heroes:Hero[];
  constructor() { 
    this.title="Tours of Heroes";
    //this.heroes=['First','Second','Third','Fourth'];
    this.heroes=[new Hero(101,"Hero - 1 "), new Hero(102,"Hero - 2 "), new Hero(103, "Hero - 3")];
    this.myHero=this.heroes[0];
  }

  ngOnInit(): void {
    
  }

}
