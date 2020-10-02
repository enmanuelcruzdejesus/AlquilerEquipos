import { HttpClientHelper } from './HttpClientHelper';
import { Invoice } from './../models/invoice';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { InvoiceDetails } from '../models/invoiceDetails';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {

  public details: InvoiceDetails[] = [];



  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };

  constructor(private httpClient: HttpClient) { 

  }
  getInvoices(): Observable<Invoice[]>{
    return this.httpClient.get<Invoice[]>(`${HttpClientHelper.baseURL}/invoice/getAll`,this.httpOptions);
  }

  getInvoiceById(id: number){

    return this.httpClient.get<Invoice>(`${HttpClientHelper.baseURL}/invoice/getById`+id,this.httpOptions);
  }

  saveInvoice(Invoice: Invoice): Observable<any>{
    return this.httpClient.post<Invoice>(`${HttpClientHelper.baseURL}/invoice/save`,Invoice);
  }
}
