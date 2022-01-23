import { ResponseModel } from './../models/responseModel';
import { CarSegmentCreateModel } from './../models/carSegments/segmentCreateModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseModel } from '../models/listResponseModel';
import { CarSegmentListModel } from '../models/carSegments/segmentListModel';
import { CarSegmentUpdateModel } from '../models/carSegments/segmentUpdateModel';

@Injectable({
  providedIn: 'root'
})
export class CarSegmentService {

  apiUrl: string = "http://localhost:8080/api/carSegmentTypes/";
  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<ListResponseModel<CarSegmentListModel>> {
    return this.httpClient.get<ListResponseModel<CarSegmentListModel>>(this.apiUrl + 'getall');
  }

  add(brand: CarSegmentCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  update(brand: CarSegmentUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }
}
