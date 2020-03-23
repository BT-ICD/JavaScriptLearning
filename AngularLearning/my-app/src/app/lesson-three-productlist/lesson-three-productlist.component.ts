/*
To learn about list page using bootstrap library and data binding
*/
import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './lesson-three-productlist.service';

@Component({
  selector: 'app-lesson-three-productlist',
  templateUrl: './lesson-three-productlist.component.html',
  styleUrls:['./lesson-three-productlist.component.css']
  
})
export class LessonThreeProductlistComponent implements OnInit {
pageTitle:string ='KS Project Management';
imageWidth:number=50;
imageMargin:number=2;
showImage:boolean=false;
private _listFilter: string = '';
private _productService:ProductService;
  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    
  }

filteredProducts:IProduct[];
products:IProduct[];
// Initialized products from Services
// products:IProduct[]=[
//     {
//       "productId":2,
//       "productName":'Dettol',
//       "productCode":'PID-001',
//       "releaseDate":'March 18, 2019',
//       "description":"For better hand wash with medicated ",
//       "price":15.00,
//       "starRating":4.2,
//       "imageUrl":'../../assets/Images/DettolOriginalSoap.jpg'
//     },
//     {
//       "productId":3,
//       "productName":'Cinthol',
//       "productCode":'PID-002',
//       "releaseDate":'March 18, 2020',
//       "description":"For better smell ",
//       "price":25.00,
//       "starRating":3.2,
//       "imageUrl":'../../assets/Images/Cinthol.jpg'
//     }
// ];
  constructor(productService:ProductService) { 
    this._productService=productService;
    
    this.listFilter='D';
    this.filteredProducts=this.products;
    
  }

  ngOnInit(): void {
    this.products=this._productService.getProducts();
    this._listFilter = '';
    this.filteredProducts=this.listFilter?this.performFilter(this.listFilter):this.products;
  }
  toggleImage():void
  {
    this.showImage = !this.showImage;
  }
  performFilter(filterBy:string):IProduct[]{
    console.log('Filter Method');
    filterBy=filterBy.toLocaleLowerCase();
    return this.products.filter( (product:IProduct)=> product.productName.toLocaleLowerCase().indexOf(filterBy) !==-1);
  }
}
