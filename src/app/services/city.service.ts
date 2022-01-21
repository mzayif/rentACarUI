import { CityListModel } from './../models/city/cityListModel';
import { CityUpdateModel } from './../models/city/cityUpdateModel';
import { Observable } from 'rxjs';
import { CityCreateModel } from './../models/city/cityCreateModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResponseModel } from '../models/responseModel';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CityService {
  apiUrl: string = "http://localhost:8080/api/cities/";
  constructor(private httpClient: HttpClient) { }


  add(brand: CityCreateModel): Observable<ResponseModel> {
    return this.httpClient.post<ResponseModel>(this.apiUrl + 'add', brand);
  }

  update(brand: CityUpdateModel): Observable<ResponseModel> {
    return this.httpClient.put<ResponseModel>(this.apiUrl + 'update', brand);
  }

  delete(id:number): Observable<ResponseModel> {
    return this.httpClient.delete<ResponseModel>(this.apiUrl + 'delete' + `?id=${id}`);
  }

  

  getAll(): Observable<ListResponseModel<CityListModel>> {
    return this.httpClient.get<ListResponseModel<CityListModel>>(this.apiUrl + 'getall');
  }

  getAllByPage(pageNo: number, pageSize: number): Observable<ListResponseModel<CityListModel>> {
    return this.httpClient.get<ListResponseModel<CityListModel>>(this.apiUrl + "/getAllByPage?pageNo=" + pageNo + "&pageSize=" + pageSize
    )
  }
}
