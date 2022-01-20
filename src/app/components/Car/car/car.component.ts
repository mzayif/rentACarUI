import { CarService } from './../../../services/car.service';
import { CarListModel } from './../../../models/carListModel';
import { Component, OnInit } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent implements OnInit {

  sortOptions: SelectItem[] = [];
  sortOrder: number = 0;
  sortField: string = "";
  cars: CarListModel[] = [];
  dataLoaded: boolean = false;

  constructor(private carService: CarService, private primengConfig: PrimeNGConfig) { }

  ngOnInit(): void {
    this.getAll();


    this.sortOptions = [
      { label: 'Price High to Low', value: '!price' },
      { label: 'Price Low to High', value: 'price' }
    ];

    this.primengConfig.ripple = true;
  }

  getAll() {
    this.carService.getAll().subscribe(response => {
      this.dataLoaded = false;
      if (response.success)
        this.cars = response.data;

      this.dataLoaded = true;
    })
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

}
