import { CustomerService } from './../services/customer.service';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent implements OnInit {

 
  customer =  new Customer();
  constructor(private service: CustomerService, private router: Router,private activeRoute: ActivatedRoute  ) { }

  ngOnInit(): void {
      this.activeRoute.queryParams.subscribe(params => {
      this.customer.id = params["id"];
      this.customer.identification = params["identification"];
      this.customer.name = params["name"];
      this.customer.img = params["img"];
  

     
  });
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
