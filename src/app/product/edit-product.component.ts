import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {

  product =  new Product();
  constructor(private service: ProductService, private router: Router,private activeRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
    this.activeRoute.queryParams.subscribe(params => {
      this.product.id = params["id"];
      this.product.descrip = params["descrip"];
      this.product.unitprice = params["unitprice"];
      this.product.unitsinstock = params["unitsinstock"];
      this.product.family  = params["family"];
      this.product.subfamily = params["subfamily"];
      this.product.img = params["img"];
  

     
  });
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
