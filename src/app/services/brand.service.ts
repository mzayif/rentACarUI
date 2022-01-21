import { BrandUpdateModel } from './../models/brands/brandUpdateModel';
import { BrandCreateModel } from './../models/brands/brandCreateModel';
import { BrandListModel } from '../models/brands/brandListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = "http://localhost:8080/api/brands/";
  constructor(private httpClient: HttpClient) { }


  add(data: BrandCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', data);
  }

  update(data: BrandUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', data);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }


  getAll(): Observable<ListResponseModel<BrandListModel>> {
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl + 'getAll');
  }
}
