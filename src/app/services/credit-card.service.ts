import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';
import { CreditCardCreateModel } from '../models/creditCards/creditCardCreateModel';
import { CreditCardUpdateModel } from '../models/creditCards/creditCardUpdateModel';
import { CreditCardListModel } from '../models/creditCards/creditCardListModel';

@Injectable({
  providedIn: 'root'
})
export class CreditCardService {

  apiUrl: string = "http://localhost:8080/api/creditCards/";
  constructor(private httpClient: HttpClient) { }


  add(brand: CreditCardCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  update(brand: CreditCardUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }

  
  getAll(): Observable<ListResponseModel<CreditCardListModel>> {
    return this.httpClient.get<ListResponseModel<CreditCardListModel>>(this.apiUrl + 'getall');
  }
  
  getAllByCustomerId(id:number): Observable<ListResponseModel<CreditCardListModel>> {
    return this.httpClient.get<ListResponseModel<CreditCardListModel>>(this.apiUrl + 'getAllByCustomerId?customerId='+id);
  }
}
