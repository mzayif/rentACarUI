import { ColorListModel } from './../models/colorListModel';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl: string = "http://localhost:8080/api/colors/";
  constructor(private httpClient: HttpClient) { }

  geColors():Observable<ListResponseModel<ColorListModel>> {
    return this.httpClient.get<ListResponseModel<ColorListModel>>(this.apiUrl+'getall');
  }
}
