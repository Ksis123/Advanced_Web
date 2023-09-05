import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service'

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  productForm = new FormGroup({
    type: new FormControl('',[Validators.required]),
    id: new FormControl('',[Validators.required]),
    name: new FormControl('',[Validators.required]),
    detail: new FormControl('',[Validators.required]),
    quantity: new FormControl('',[Validators.required ,Validators.min(1) ,Validators.max(50)]),
    price: new FormControl('',[Validators.required, Validators.min(1) ,Validators.max(100000)])
  });
  
  get f() { return this.productForm.controls; }

  productType: string[] = ['','CPU','RAM','HDD','Mainboard'];

  constructor(private productsService: ProductService) {  }

  ngOnInit(): void {
  }

  addProduct(){
    // this.productsService.products.push(this.productForm.value)
    alert("Add product to database successfully")
    
  }

}