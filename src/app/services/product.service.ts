import { Product } from './../models/product';
import { HttpClientHelper } from './HttpClientHelper';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };

  constructor(private httpClient: HttpClient) { }
  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${HttpClientHelper.baseURL}/product/getAll`,this.httpOptions);
  }

  getProductById(id: number){

    return this.httpClient.get<Product>(`${HttpClientHelper.baseURL}/product/getById`+id,this.httpOptions);
  }

  saveProduct(Product: Product): Observable<any>{
    return this.httpClient.post<Product>(`${HttpClientHelper.baseURL}/product/save`,Product);
  }

}
