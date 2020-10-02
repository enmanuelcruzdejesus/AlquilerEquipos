import { HttpClientHelper } from './HttpClientHelper';
import { Observable } from 'rxjs';
import { InvoiceDetails } from './../models/invoiceDetails';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InvoiceDetailsItemsService {

  

  private httpOptions = {
    headers : new HttpHeaders({"Content-Type":"application/json"})
  };

  constructor(private httpClient: HttpClient) { }
  getInvoiceDetailss(): Observable<InvoiceDetails[]>{
    return this.httpClient.get<InvoiceDetails[]>(`${HttpClientHelper.baseURL}/InvoiceDetails/getAll`,this.httpOptions);
  }

  getInvoiceDetailsById(id: number){

    return this.httpClient.get<InvoiceDetails>(`${HttpClientHelper.baseURL}/InvoiceDetails/getById`+id,this.httpOptions);
  }

  saveInvoiceDetails(InvoiceDetails: InvoiceDetails): Observable<any>{
    return this.httpClient.post<InvoiceDetails>(`${HttpClientHelper.baseURL}/InvoiceDetails/save`,InvoiceDetails);
  }
}
