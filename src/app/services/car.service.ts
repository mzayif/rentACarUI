import { CarUpdateModel } from './../models/cars/carUpdateModel';
import { CarCreateModel } from './../models/cars/carCreateModel';
import { CarViewModel } from '../models/cars/carViewModel';
import { SingelResponseModel } from './../models/singelResponseModel';
import { CarListModel } from '../models/cars/carListModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { ResponseModel } from '../models/responseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl: string = "http://localhost:8080/api/cars/";
  constructor(private httpClient: HttpClient) { }

  add(car: CarCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "add", car);
  }


  update(car: CarUpdateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + "update", car);
  }
 
  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }

  

  getAll(): Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl + 'getall');
  }

  getCarsPage(pageNo: number, pageSize: number): Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(
      this.apiUrl + "/getAllByPage?pageNo=" + pageNo + "&pageSize=" + pageSize
    )
  }

  getCarsById(carId: number): Observable<SingelResponseModel<CarViewModel>> {
    return this.httpClient.get<SingelResponseModel<CarViewModel>>(
      this.apiUrl + `?id=${carId}`
    );
  }
}

