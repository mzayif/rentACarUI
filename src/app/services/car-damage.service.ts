import { CarDamageUpdateModel } from './../models/carDamages/carDamageUpdateModel';
import { CarDamageCreateModel } from './../models/carDamages/carDamageCreateModel';
import { CarDamageListModel } from './../models/carDamages/carDamageListModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDamageService {
  
  apiUrl: string = "http://localhost:8080/api/carDamages/";
  constructor(private httpClient: HttpClient) { }
  
  add(brand: CarDamageCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }
  
  update(brand: CarDamageUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }
  
  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }



  getAll(): Observable<ListResponseModel<CarDamageListModel>> {
    return this.httpClient.get<ListResponseModel<CarDamageListModel>>(this.apiUrl + 'getAll');
  }

  getAllByCarId(id: number): Observable<ListResponseModel<CarDamageListModel>> {
    return this.httpClient.get<ListResponseModel<CarDamageListModel>>(this.apiUrl + 'getAllByCarId?id=' + id);
  }
}
