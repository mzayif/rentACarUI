import { BrandListModel } from './../models/brandListModel';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  apiUrl: string = "http://localhost:8080/api/brands/";
  constructor(private httpClient: HttpClient) { }

  getBrands():Observable<ListResponseModel<BrandListModel>> {
    return this.httpClient.get<ListResponseModel<BrandListModel>>(this.apiUrl+'getAll');
  }
}
