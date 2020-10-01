import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './users/login.component';
import { RegiserComponent } from './users/regiser.component';
import { RegisterComponent } from './users/register.component';
import { ShoppingCartComponent } from './invoice/shopping-cart.component';
import { CustomerListComponent } from './customer/customer-list.component';
import { CreateCustomerComponent } from './customer/create-customer.component';
import { EditCustomerComponent } from './customer/edit-customer.component';
import { ProductListComponent } from './product/product-list.component';
import { CreateProductComponent } from './product/create-product.component';
import { EditProductComponent } from './product/edit-product.component';
import { MainPageComponent } from './home/main-page.component';
import { AdminPanelComponent } from './home/admin-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegiserComponent,
    RegisterComponent,
    ShoppingCartComponent,
    CustomerListComponent,
    CreateCustomerComponent,
    EditCustomerComponent,
    ProductListComponent,
    CreateProductComponent,
    EditProductComponent,
    MainPageComponent,
    AdminPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
