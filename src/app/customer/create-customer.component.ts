import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  customer =  new Customer();
  constructor(private service: CustomerService, private router: Router) { }

  ngOnInit(): void {
  }

  save(){
    console.log(JSON.stringify(this.customer));
    this.service.saveCustomer(this.customer).subscribe((res)=>{
  
    
      this.router.navigate(['customer-list']);

    },
    (err)=>{
      console.error(err);
    });
  }
}
