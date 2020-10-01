import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  product =  new Product();
  constructor(private service: ProductService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(JSON.stringify(this.product));
    this.service.saveProduct(this.product).subscribe((res)=>{
  
    
      this.router.navigate(['product-list']);

    },
    (err)=>{
      console.error(err);
    });
  }
}
