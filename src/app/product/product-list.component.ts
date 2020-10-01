import { ProductService } from './../services/product.service';
import { Product } from './../models/product';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  constructor(private service: ProductService,  private router: Router ) { }

  ngOnInit(): void {

    this.service.getProducts().subscribe((res)=>{
      this.products = res;

    }, (err)=>{
      console.error(err);
    })
  }

  add(){
    this.router.navigate(['create-product']);
  }
  edit(value : Product){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": value.id,
          "descrip": value.descrip,
          "unitprice": value.unitprice,
          "unitsinstock": value.unitsinstock,
          "family": value.family,
          "subfamily": value.subfamily,
          "img": value.img,
         
      }
   };

   this.router.navigate(["edit-product"], navigationExtras);

  }


}
