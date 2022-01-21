import { CarMaintenanceListModel } from './../models/carMaintenances/carMaintenanceListModel';
import { CarMaintenanceUpdateModel } from './../models/carMaintenances/carMaintenanceUpdateModel';
import { CarMaintenanceCreateModel } from './../models/carMaintenances/carMaintenanceCreateModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarMaintenanceService {

  apiUrl: string = "http://localhost:8080/api/carMaintenances/";
  constructor(private httpClient: HttpClient) { }


  add(brand: CarMaintenanceCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  update(brand: CarMaintenanceUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }

  
  getAll(): Observable<ListResponseModel<CarMaintenanceListModel>> {
    return this.httpClient.get<ListResponseModel<CarMaintenanceListModel>>(this.apiUrl + 'getall');
  }
  
  
  getAllInActiveMaintenance(): Observable<ListResponseModel<CarMaintenanceListModel>> {
    return this.httpClient.get<ListResponseModel<CarMaintenanceListModel>>(this.apiUrl + 'getAllInActiveMaintenance');
  }

  getAllByCarId(id:number): Observable<ListResponseModel<CarMaintenanceListModel>> {
    return this.httpClient.get<ListResponseModel<CarMaintenanceListModel>>(this.apiUrl + 'getAllByCarId?id=' + id);
  }
}
