/*
To learn about list page using bootstrap library and data binding
*/
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lesson-three-productlist',
  templateUrl: './lesson-three-productlist.component.html'
  
})
export class LessonThreeProductlistComponent implements OnInit {
pageTitle:string ='KS Project Management';
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
products:any=[
    {
      "productId":2,
      "productName":'Dettol',
      "productCode":'PID-001',
      "releaseDate":'March 18, 2019',
      "description":"For better hand wash with medicated ",
      "price":15.00,
      "starRating":4.2,
      "imageUrl":'../../assets/Images/DettolOriginalSoap.jpg'
    },
    {
      "productId":3,
      "productName":'Cinthol',
      "productCode":'PID-002',
      "releaseDate":'March 18, 2020',
      "description":"For better smell ",
      "price":25.00,
      "starRating":3.2,
      "imageUrl":'../../assets/Images/Cinthol.jpg'
    }
];
  constructor() { }

  ngOnInit(): void {
  }
  toggleImage():void
  {
    this.showImage = !this.showImage;
  }
}
