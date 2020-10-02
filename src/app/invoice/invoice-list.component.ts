import { Customer } from './../models/customer';
import { InvoiceService } from './../services/invoice.service';
import { Invoice } from './../models/invoice';
import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-invoice-list',
  templateUrl: './invoice-list.component.html',
  styleUrls: ['./invoice-list.component.css']
})
export class InvoiceListComponent implements OnInit {

  invoices: Invoice[];
  constructor(private service: InvoiceService,  private router: Router ) { }

  ngOnInit(): void {

    this.service.getInvoices().subscribe((res)=>{
      this.invoices = res;

    }, (err)=>{
      console.error(err);
    })
  }

  add(){
    this.router.navigate(['create-invoice']);
  }
  edit(value : Invoice){
    let navigationExtras: NavigationExtras = {
      queryParams: {
          "id": value.id,
          "orderdate": value.orderdate,
          "customer": value.customer,
          "deliverdate": value.deliverdate,
          "total": value.total
         
      }
   };

   this.router.navigate(["edit-invoice"], navigationExtras);

  }
}
