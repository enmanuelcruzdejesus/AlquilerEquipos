import { HttpClientHelper } from './HttpClientHelper';
import { Customer } from './../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };

  constructor(private httpClient: HttpClient) { }
  getCustomers(): Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(`${HttpClientHelper.baseURL}/customer/getAll`,this.httpOptions);
  }

  getCustomerById(id: number){

    return this.httpClient.get<Customer>(`${HttpClientHelper.baseURL}/customer/getById/`+id,this.httpOptions);
  }

  saveCustomer(Customer: Customer): Observable<any>{
    return this.httpClient.post<Customer>(`${HttpClientHelper.baseURL}/customer/save`,Customer);
  }

}
