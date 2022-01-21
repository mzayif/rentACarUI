import { PaymnetCreateModel } from './../models/payments/paymentCreateModel';
import { PaymnetListModel } from './../models/payments/paymentListModel';
import { PaymnetUpdateModel } from './../models/payments/paymentUpdateModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class PaymnetService {

  apiUrl: string = "http://localhost:8080/api/payments/";
  constructor(private httpClient: HttpClient) { }


  // add(data: PaymnetCreateModel): Observable<ResponseModel> {
  //   return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', data);
  // }

  payRental(id: number): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'payRental?rentalId=id', null);
  }

  payRentalWithCreditCard(data: PaymnetCreateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'payRentalWithCreditCard', data);
  }

  update(data: PaymnetUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', data);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }

  
  getAll(): Observable<ListResponseModel<PaymnetListModel>> {
    return this.httpClient.get<ListResponseModel<PaymnetListModel>>(this.apiUrl + 'getAll');
  }
}
