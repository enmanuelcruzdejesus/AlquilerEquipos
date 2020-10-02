import { InvoiceItemsComponent } from './invoice-items.component';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from './../services/product.service';
import { CustomerService } from './../services/customer.service';
import { InvoiceService } from './../services/invoice.service';
import { InvoiceDetails } from './../models/invoiceDetails';
import { Invoice } from './../models/invoice';
import { Product } from './../models/product';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { InvoiceDetailsItemsService } from '../services/invoice-items.service';



@Component({
  selector: 'app-create-invoice',
  templateUrl: './create-invoice.component.html',
  styleUrls: ['./create-invoice.component.css']
})
export class CreateInvoiceComponent implements OnInit {


  invoice = new Invoice();
  details: InvoiceDetails[] = [];
  customers : Customer[];
  products: Product[];
  currentCustomer: Customer;
  isValid: boolean;




  constructor(public service: InvoiceService, 
    private itemService: InvoiceDetailsItemsService,
    private customerService: CustomerService,
    private prodService: ProductService, 
    private router: Router,
    private activeRoute: ActivatedRoute,
    private dialog: MatDialog) { }

  ngOnInit(): void {
    this.customerService.getCustomers().subscribe((res)=>
    {
      this.customers = res;

    },(err)=>{console.log(err)});

    this.prodService.getProducts().subscribe((res)=>
    {
      this.products = res;

    },(err)=>{console.log(err)});

    // this.activeRoute.queryParams.subscribe(params => {
    //   this.invoice.id = params["id"];
    // });

    // if(this.invoice.id == 0){
    //   this.resetForm();

    // }else{
    //   this.service.getInvoiceById(this.invoice.id).subscribe((res)=>{
    //     this.invoice = res;
    //     console.log(this.invoice);
        

    //   },(err)=>{
    //     console.log(err);
    //   })
    // }

    
    
  }

  AddOrEditOrderItem(index, invoiceid) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "50%";
    dialogConfig.data = { index, invoiceid };
    this.dialog.open(InvoiceItemsComponent, dialogConfig).afterClosed().subscribe(res => {
      this.updateGrandTotal();
    });
  }

  onDeleteOrderItem(id: number, i: number) {
    // if (orderItemID != null)
    //   this.service.formData.DeletedOrderItemIDs += orderItemID + ",";
    this.service.details.splice(i, 1);
    this.updateGrandTotal();
  }

  updateGrandTotal() {
    this.invoice.total = this.service.details.reduce((prev, curr) => {
      return prev + curr.value;
    }, 0);
    this.invoice.total = parseFloat(this.invoice.total.toFixed(2));
  }

 

  validateForm() {
    this.isValid = true;
    if (this.invoice.customerid == 0)
      this.isValid = false;
    else if (this.service.details.length == 0)
      this.isValid = false;
    return this.isValid;
  }


  resetForm(form?: NgForm) {
    if (form = null)
      form.resetForm();

    this.invoice.id =0;
    this.invoice.customer = null;
    this.invoice.customerid = 0;
    this.invoice.orderdate = null;
    this.invoice.deliverdate = null;
    this.invoice.total = 0;
    this.invoice.items = [];
    
  
  }


  onSubmit(form : NgForm) {
    if (this.validateForm()) {
      this.invoice.items = this.service.details;
      this.customerService.getCustomerById(this.invoice.customerid).subscribe((res)=>{
        this.currentCustomer = res;
        this.invoice.customer = this.currentCustomer;
        console.log(this.currentCustomer);
        this.service.saveInvoice(this.invoice).subscribe(res => {
          // this.resetForm();
          // this.toastr.success('Submitted Successfully', 'Restaurent App.');
          
          this.router.navigate(['/invoice-list']);
        },(err)=>{
          console.error(err);
        })
      },(err)=>{
        console.log(err);
      })
      

    
    }
  }

}
