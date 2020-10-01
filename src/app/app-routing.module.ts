import { UnreturnedProductRentComponent } from './invoice/unreturned-product-rent.component';
import { RenthistoryComponent } from './customer/renthistory.component';
import { AverageproductrentbydateComponent } from './product/averageproductrentbydate.component';
import { CreateInvoiceComponent } from './invoice/create-invoice.component';
import { InvoiceListComponent } from './invoice/invoice-list.component';
import { CreateProductComponent } from './product/create-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { PagenotfoundComponent } from './home/pagenotfound.component';
import { AdminPanelComponent } from './home/admin-panel.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { ProductListComponent } from './product/product-list.component';
import { RegisterComponent } from './user/register.component';
import { LoginComponent } from './user/login.component';
import { EditCustomerComponent } from './customer/edit-customer.component';
import { MainPageComponent } from './home/main-page.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateCustomerComponent } from './customer/create-customer.component';


const routes: Routes = [
  {path: '' , redirectTo: "/home" , pathMatch: 'full'},
  {path: 'home' , component: MainPageComponent},
  {path:'login' , component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path:'product-list' , component: ProductListComponent},
  {path:'create-product' , component: CreateProductComponent},
  {path:'edit-product' , component: EditProductComponent},
  {path:'edit-customer' , component: EditCustomerComponent},
  {path:'create-customer' , component: CreateCustomerComponent},
  {path:'average-product-rent' , component: AverageproductrentbydateComponent},
  {path:'customer-list' , component: CustomerListComponent},
  {path: 'edit-customer', component: EditCustomerComponent},
  {path:'rent-history' , component: RenthistoryComponent},
  {path:'admin-panel' , component: AdminPanelComponent},
  {path:'invoice-list' , component: InvoiceListComponent},
  {path:'unreturned-product-rent' , component: UnreturnedProductRentComponent},
  {path:'create-invoice' , component: CreateInvoiceComponent},
  {path: '**' , component: PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MainPageComponent,LoginComponent,RegisterComponent,AdminPanelComponent,
  ProductListComponent,
  EditProductComponent,
  CreateProductComponent,
  AverageproductrentbydateComponent,
  CustomerListComponent,
  EditCustomerComponent,
  CreateCustomerComponent,
  RenthistoryComponent,
  InvoiceListComponent,
  UnreturnedProductRentComponent,
  CreateInvoiceComponent,
  PagenotfoundComponent];

