import { Injectable } from '@angular/core';
import { productsModel } from '../product.model'
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cartProduct: productsModel = [];
  total: number = 0
  counter: number = 0;

  constructor(private productService:ProductService) { }

  add(id:number){
    this.counter += 1;
    this.cartProduct.push(this.productService.getTheProduct(id))
    this.total += this.productService.getTheProduct(id).price
  }

  getcounter(){
    return this.counter;
  }

  getcart(){
    return this.cartProduct
  }

}