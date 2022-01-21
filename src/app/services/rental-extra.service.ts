import { RentalExtraListModel } from './../models/rental-extra-services/rentalExtraListModel';
import { RentalExtraUpdateModel } from './../models/rental-extra-services/rentalExtraUpdateModel';
import { RentalExtraCreateModel } from './../models/rental-extra-services/rentalExtraCreateModel';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class RentalExtraService {
  apiUrl: string = "http://localhost:8080/api/rentalExtraServices/";
  constructor(private httpClient: HttpClient) { }


  add(data: RentalExtraCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', data);
  }

  update(data: RentalExtraUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', data);
  }

  delete(id: number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete?id=' + id);
  }
  


  getAll(): Observable<ListResponseModel<RentalExtraListModel>> {
    return this.httpClient.get<ListResponseModel<RentalExtraListModel>>(this.apiUrl + 'getall');
  }

  getByRentalId(id: number): Observable<ListResponseModel<RentalExtraListModel>> {
    return this.httpClient.get<ListResponseModel<RentalExtraListModel>>(this.apiUrl + 'getByRentalId?rentalId='+id);
  }
}
