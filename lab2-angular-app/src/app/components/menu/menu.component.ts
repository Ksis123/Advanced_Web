import { Component, OnInit} from '@angular/core';
import { CartService } from 'src/app/services/cart.service';
import { productsType } from 'src/app/model/product';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  cart: productsType = []

  googleUrl!: string;
  facebookUrl!: string;
  instagramUrl!: string;
  twitterUrl!: string;

  constructor(private cartService: CartService) { 
    this.cart = this.cartService.getCart();
  }

  ngOnInit(): void {
    this.googleUrl = "http://www.google.com";
    this.facebookUrl = "http://www.facebook.com";
    this.instagramUrl = "http://www.instagram.com";
    this.twitterUrl = "https://twitter.com";
  }

  getCounter(){
    return this.cartService.getCounter();
  }

  getUrlFacebook(){
    return this.facebookUrl;
  }

  getUrlGoogle(){
    return this.googleUrl;
  }

  getUrlInstagram(){
    return this.instagramUrl;
  }

  getUrlTwitter(){
    return this.twitterUrl;
  }

  getSumPrice() {
    return this.cartService.getSumPrice();
  }
}
