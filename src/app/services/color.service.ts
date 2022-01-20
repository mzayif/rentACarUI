import { ColorUpdateModel } from './../models/colors/colorUpdateModel';
import { ColorCreateModel } from './../models/colors/colorCreateModel';
import { ColorListModel } from '../models/colors/colorListModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl: string = "http://localhost:8080/api/colors/";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<ColorListModel>> {
    return this.httpClient.get<ListResponseModel<ColorListModel>>(this.apiUrl + 'getall');
  }

  add(brand: ColorCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  update(brand: ColorUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }
}
