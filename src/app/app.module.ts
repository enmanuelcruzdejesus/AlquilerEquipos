import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';



import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './invoice/shopping-cart.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { CreateCustomerComponent } from './customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer.component';
import { ProductListComponent } from './product/product-list.component';
import { CreateProductComponent } from './product/create-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { MainPageComponent } from './home/main-page.component';
import { AdminPanelComponent } from './home/admin-panel.component';
import { PagenotfoundComponent } from './home/pagenotfound.component';
import { from } from 'rxjs';
import { InvoiceListComponent } from './invoice/invoice-list.component';
import { CreateInvoiceComponent } from './invoice/create-invoice.component';
import { UnreturnedProductRentComponent } from './invoice/unreturned-product-rent.component';
import { RenthistoryComponent } from './customer/renthistory.component';
import { AverageproductrentbydateComponent } from './product/averageproductrentbydate.component';

@NgModule({
  declarations: [
    AppComponent,
    routingComponents,
    InvoiceListComponent,
    CreateInvoiceComponent,
    UnreturnedProductRentComponent,
    RenthistoryComponent,
    AverageproductrentbydateComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

