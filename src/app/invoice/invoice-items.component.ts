import { InvoiceService } from './../services/invoice.service';
import { Product } from './../models/product';
import { ProductService } from './../services/product.service';
import { InvoiceDetails } from './../models/invoiceDetails';
import { Router } from '@angular/router';
import { Component, Inject, OnInit } from '@angular/core';
import { InvoiceDetailsItemsService } from '../services/invoice-items.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-invoice-items',
  templateUrl: './invoice-items.component.html',
  styleUrls: ['./invoice-items.component.css']
})
export class InvoiceItemsComponent implements OnInit {

  item: InvoiceDetails;
  products: Product[];
  isValid: boolean;

  constructor(@Inject(MAT_DIALOG_DATA)  public  data, 
              public dialogRef: MatDialogRef<InvoiceItemsComponent>,
              private service: InvoiceDetailsItemsService, 
              private productService: ProductService,
              private invoiceService: InvoiceService,
              private router: Router) { }

  ngOnInit(): void {

    if(this.data.index == null){
      this.item  = new InvoiceDetails();
      this.item.unitprice = 0;
      this.item.quantity = 0;
      this.item.value = 0;
      this.item.invoiceid = 0;
      this.item.product = new Product();

    }
    else{
      this.item = this.invoiceService.details[this.data.index];
    }
  

    this.productService.getProducts().subscribe((res)=>{
      this.products = res;
      console.log(this.products);

    },(err)=>{
      console.error(err);
    })
  }

  updatePrice(value){
    if(value.selectedIndex ===0){
      this.item.unitprice = 0;
    }
    else{
      this.item.unitprice = this.products[value.selectedIndex-1].unitprice;
      this.item.product = this.products[value.selectedIndex-1];
      this.updateTotal();
    }
  }

  updateTotal(){
    this.item.value = (this.item.unitprice* this.item.quantity);
  }
  
  onSubmit(form: NgForm) {
    if(this.validateForm(form.value)){
      
      if(this.data.index == null){
        this.invoiceService.details.push(this.item);
      }
      else{
        this.invoiceService.details[this.data.index] = this.item;
      }

     
      this.dialogRef.close();
    }
   

  }

  validateForm(i : InvoiceDetails) {
    this.isValid = true;
    if (i.productid == 0)
      this.isValid = false;
    else if (i.quantity == 0)
      this.isValid = false;
    return this.isValid;
  }


}
