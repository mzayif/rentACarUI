import { AdditionalCreateModel } from './../models/additionals/additionalCreateModel';
import { AdditionalUpdateModel } from './../models/additionals/additionalUpdateModel';
import { AdditionalListModel } from './../models/additionals/additionalListModel';
import { ResponseModel } from './../models/responseModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class AdditionalService {

  apiUrl: string = "http://localhost:8080/api/additionalServices/";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<AdditionalListModel>> {
    return this.httpClient.get<ListResponseModel<AdditionalListModel>>(this.apiUrl + 'getall');
  }

  add(brand: AdditionalCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  update(brand: AdditionalUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }
}
