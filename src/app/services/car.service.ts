import { CarListModel } from './../models/carListModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl: string = "http://localhost:8080/api/cars/";
  constructor(private httpClient: HttpClient) { }

  getAll():Observable<ListResponseModel<CarListModel>> {
    return this.httpClient.get<ListResponseModel<CarListModel>>(this.apiUrl+'getall');
  }
}

