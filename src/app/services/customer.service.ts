import { CorporateCustomerListModel } from './../models/customers/corporateCustomerListModel';
import { CorporateCustomerUpdateModel } from './../models/customers/corporateCustomerUpdateModel';
import { CorporateCustomerCreateModel } from './../models/customers/corporateCustomerCreateModel';
import { IndividualCustomerListModel } from './../models/customers/individualCustomerListModel';
import { IndividualCustomerUpdateModel } from './../models/customers/individualCustomerUpdateModel';
import { IndividualCustomerCreateModel } from './../models/customers/individualCustomerCreateModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl: string = "http://localhost:8080/api/";
  constructor(private httpClient: HttpClient) { }


  addIndividual(brand: IndividualCustomerCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'IndividualCustomers/add', brand);
  }

  updateIndividual(brand: IndividualCustomerUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'IndividualCustomers/update', brand);
  }

  deleteIndividual(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'IndividualCustomers/delete' + `?id=${id}`);
  }

  
  getAllIndividual(): Observable<ListResponseModel<IndividualCustomerListModel>> {
    return this.httpClient.get<ListResponseModel<IndividualCustomerListModel>>(this.apiUrl + 'IndividualCustomers/getall');
  }




  
  addCorporate(brand: CorporateCustomerCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'CorporateCustomers/add', brand);
  }

  updateCorporate(brand: CorporateCustomerUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'CorporateCustomers/update', brand);
  }

  deleteCorporate(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'CorporateCustomers/delete' + `?id=${id}`);
  }

  
  getAllCorporate(): Observable<ListResponseModel<CorporateCustomerListModel>> {
    return this.httpClient.get<ListResponseModel<CorporateCustomerListModel>>(this.apiUrl + 'CorporateCustomers/getAll');
  }
}
