import { Injectable } from '@angular/core';
import { productsType } from '../model/product';


@Injectable({
  providedIn: 'root'
})

export class ProductsService {

  menus: any;


  product_list: productsType = [
    {p_id: 1001, p_name:'Intel Core i7 Gen 10th', p_quantity:10, p_price: 7000},
    {p_id: 1002, p_name:'NVIDIA GeForce GTX 8090', p_quantity:5, p_price: 5000},
    {p_id: 1003, p_name:'240 GB SSD SATA Kingston A400', p_quantity:8, p_price: 1300},
    {p_id: 1004, p_name:'2066 MSI X299 PRO', p_quantity:4, p_price: 7790},
    {p_id: 1005, p_name:'RAM DDR (4500) 16 GB (8GBX) TEAM Xtreem Black', p_quantity:11, p_price: 12900},
  ]

  constructor() { }
  
  getAllProduct(){
    return this.product_list;
  }

  getSomeProduct(p_id: number) {
    return this.product_list[p_id];
  }
}
