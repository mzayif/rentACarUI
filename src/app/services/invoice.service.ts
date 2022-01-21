import { InvoiceListModel } from './../models/invoices/invoiceListModel';
import { InvoiceCreateModel } from './../models/invoices/invoiceCreateModel';
import { InvoiceUpdateModel } from './../models/invoices/invoiceUpdateModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  apiUrl: string = "http://localhost:8080/api/brands/";
  constructor(private httpClient: HttpClient) { }


  add(brand: InvoiceCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  update(brand: InvoiceUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }

  
  getAll(): Observable<ListResponseModel<InvoiceListModel>> {
    return this.httpClient.get<ListResponseModel<InvoiceListModel>>(this.apiUrl + 'getall');
  }
  
  getInvoiceDetail(id: number): Observable<ListResponseModel<InvoiceListModel>> {
    return this.httpClient.get<ListResponseModel<InvoiceListModel>>(this.apiUrl + 'getInvoiceDetail?rentalId=' + id);
  }
}
