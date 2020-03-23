import { Injectable } from '@angular/core';
import { IProduct } from './product';

@Injectable({
    providedIn:'root'
} )
export class ProductService{

    getProducts():IProduct[]{
        return [
            {
              "productId":1,
              "productName":'Dettol',
              "productCode":'PID-001',
              "releaseDate":'March 18, 2019',
              "description":"For better hand wash with medicated ",
              "price":15.00,
              "starRating":4.2,
              "imageUrl":'../../assets/Images/DettolOriginalSoap.jpg'
            },
            {
              "productId":2,
              "productName":'Cinthol',
              "productCode":'PID-002',
              "releaseDate":'March 18, 2020',
              "description":"For better smell ",
              "price":25.00,
              "starRating":3.2,
              "imageUrl":'../../assets/Images/Cinthol.jpg'
            },
            {
                "productId":3,
                "productName":'Dove',
                "productCode":'PID-003',
                "releaseDate":'April 18, 2020',
                "description":"Quality  ",
                "price":35.00,
                "starRating":4.5,
                "imageUrl":'../../assets/Images/Dove.jpg'
              }
        ];
    }
}