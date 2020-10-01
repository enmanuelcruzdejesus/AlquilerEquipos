import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customers: Customer[];
  constructor(private service: CustomerService,  private router: Router ) { }

  ngOnInit(): void {

    this.service.getCustomers().subscribe((res)=>{
      this.customers = res;

    }, (err)=>{
      console.error(err);
    })
  }

  add(){
    this.router.navigate(['create-customer']);
  }
  edit(value : Customer){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": value.id,
          "identification": value.identification,
          "name": value.name,
          "img": value.img,
         
      }
   };

   this.router.navigate(["edit-customer"], navigationExtras);

  }


}
