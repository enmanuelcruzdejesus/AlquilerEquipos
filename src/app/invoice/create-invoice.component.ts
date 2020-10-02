import { InvoiceItemsComponent } from './invoice-items.component';
import { Router } from '@angular/router';
import { ProductService } from './../services/product.service';
import { CustomerService } from './../services/customer.service';
import { InvoiceService } from './../services/invoice.service';
import { InvoiceDetails } from './../models/invoiceDetails';
import { Invoice } from './../models/invoice';
import { Product } from './../models/product';
import { Customer } from './../models/customer';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';



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
  isValid: boolean;




  constructor(private service: InvoiceService, 
    private customerService: CustomerService,
    private prodService: ProductService, 
    private router: Router,
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

  onDeleteOrderItem(orderItemID: number, i: number) {
    // if (orderItemID != null)
    //   this.service.formData.DeletedOrderItemIDs += orderItemID + ",";
    // this.service.orderItems.splice(i, 1);
    // this.updateGrandTotal();
  }

  updateGrandTotal() {
    // this.service.formData.GTotal = this.service.orderItems.reduce((prev, curr) => {
    //   return prev + curr.Total;
    // }, 0);
    // this.service.formData.GTotal = parseFloat(this.service.formData.GTotal.toFixed(2));
  }

  validateForm() {
    // this.isValid = true;
    // if (this.service.formData.CustomerID == 0)
    //   this.isValid = false;
    // else if (this.service.orderItems.length == 0)
    //   this.isValid = false;
    // return this.isValid;
  }

  onSubmit() {
    // if (this.validateForm()) {
    //   this.service.saveOrUpdateOrder().subscribe(res => {
    //     this.resetForm();
    //     this.toastr.success('Submitted Successfully', 'Restaurent App.');
    //     this.router.navigate(['/orders']);
    //   })
    // }
  }

}
