import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  show: boolean = true;

  constructor( 
    private productsService:ProductService ,
    private cartService : CartService
    ) {
    
   }

  ngOnInit(): void {
  }

  getAllProduct(){
    return this.productsService.getAllProduct()
  }

  addToCart(id:number){
     this.cartService.add(id)
     this.productsService.down_q(id)
     if (this.productsService.products[id].quantity == 0 ){
       this.show = false;
     }
  }

  

}