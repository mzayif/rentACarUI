import { CarService } from './../../services/car.service';
import { CarListModel } from '../../models/cars/carListModel';

import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  cars: CarListModel[] = [];
  dataLoaded: boolean = false;
  rating: number = 2
  pageNo: number = 0
  pageSize: number = 0
  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.getCarsPage();


  }

  getCarsPage() {
    // this.carService.getCarsPage(this.pageNo, this.pageSize).subscribe(response => {
    //   this.dataLoaded = false
    //   this.cars = response.data;
    //   this.dataLoaded = true;
    // })

    this.carService.getAll().subscribe(response => {
        this.dataLoaded = false
        this.cars = response.data;
        this.dataLoaded = true;
    })
  }


}
