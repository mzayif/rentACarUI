import { CarListModel } from '../../models/cars/carListModel';
import { CarService } from './../../services/car.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  cars: CarListModel[] = [];

  constructor(private carService: CarService) {

  }

  ngOnInit(): void {

    this.getCars();
  }

  getCars() {
    return this.carService.getAll().subscribe(response => {
      this.cars = response.data
    })
  }

}
