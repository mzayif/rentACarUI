import { RentalListModel } from './../models/rentals/rentalListModel';
import { RentalUpdateModel } from './../models/rentals/rentalUpdateModel';
import { RentalCreateModel } from './../models/rentals/rentalCreateModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl: string = "http://localhost:8080/api/rentals/";
  constructor(private httpClient: HttpClient) { }


  add(data: RentalCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', data);
  }

  update(data: RentalUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', data);
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }



  getAll(): Observable<ListResponseModel<RentalListModel>> {
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl + 'getall');
  }

  getRentalDetail(id: number): Observable<ListResponseModel<RentalListModel>> {
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl + 'getRentalDetail?rentalId=' + id);
  }

  getOnRentCars(): Observable<ListResponseModel<RentalListModel>> {
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl + 'getOnRentCars');
  }

  getAvailableCarForRent(): Observable<ListResponseModel<RentalListModel>> {
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl + 'getAvailableCarForRent');
  }

  getAllByPage(pageNo: number, pageSize: number): Observable<ListResponseModel<RentalListModel>> {
    return this.httpClient.get<ListResponseModel<RentalListModel>>(this.apiUrl + "/getAllByPage?pageNo=" + pageNo + "&pageSize=" + pageSize)
  }

}
