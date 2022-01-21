import { CarService } from './../../../services/car.service';
import { CarViewModel } from '../../../models/cars/carViewModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router'
@Component({
  selector: 'app-car-dteail',
  templateUrl: './car-dteail.component.html',
  styleUrls: ['./car-dteail.component.css']
})
export class CarDteailComponent implements OnInit {
  car!: CarViewModel;
  carId: any

  dataLoaded: boolean = false;
  constructor(private carService: CarService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.params);
    this.route.params.subscribe(params => {
      this.carId = params["carId"];
    })
    this.getCarsById();


  }

  getCarsById() {
    console.log(this.carId);
    this.carService.getCarsById(this.carId).subscribe(response => {
      this.dataLoaded = false
      this.car = response.data;
      this.dataLoaded = true;

    })
  }

  
}
