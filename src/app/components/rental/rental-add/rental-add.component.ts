import { RentalService } from './../../../services/rental.service';
import { CustomerService } from './../../../services/customer.service';
import { CityListModel } from './../../../models/city/cityListModel';
import { CarListModel } from './../../../models/cars/carListModel';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { CityService } from 'src/app/services/city.service';
import { MessageService } from 'primeng/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-rental-add',
  templateUrl: './rental-add.component.html',
  styleUrls: ['./rental-add.component.css']
})
export class RentalAddComponent implements OnInit {

  @Input() carId: number = 0;
  @Output() changeCar = new EventEmitter();

  selectRentId: number = 0;
  rentalAddForm!: FormGroup;
  availableCars: CarListModel[] = [];
  cities: CityListModel[] = [];
  customers: any[]=[{id:1,customerName:"Ahmet Demir"},{id:1,customerName:"abc Company"}];

  constructor(private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private carService: CarService,
    private cityService: CityService,
    private rentalService: RentalService,
    private customerService: CustomerService,
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.carId = params["id"];
    })
    this.getAvailableCars();
    this.getCities();

    this.createRentalAddForm();
  }

  getAvailableCars() {
    this.carService.getAvailableCarForRent().subscribe(response => {
      if (response.success)
        this.availableCars = response.data;
    })
  }

  getCities() {
    this.cityService.getAll().subscribe(response => {
      if (response.success)
        this.cities = response.data;
    })
  }

  createRentalAddForm() {
    this.rentalAddForm = this.formBuilder.group({
      'rentDate': [0, Validators.required],
      'returnDate': [0, Validators.required],
      'rentedKilometer': [0, Validators.required],
      'carId': [this.carId, Validators.required],
      'customerId': ["", Validators.required],
      'picUpCityId': ["", Validators.required],
      'returnCityId': ["", Validators.required]
    })
  }

  
  save() {
    debugger;
    if (this.rentalAddForm.valid) {
      if (this.selectRentId == 0)
        this.add();
      else
        this.update();
    }
  }

  update() {
    if (this.rentalAddForm.valid) {

      // console.log(this.selectedCar);
      let rentalModel = Object.assign({}, this.rentalAddForm.value)
      rentalModel.carId = this.carId;

      this.rentalService.update(rentalModel).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.changeCar.emit();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  add() {
    if (this.rentalAddForm.valid) {
      let rentalModel = Object.assign({}, this.rentalAddForm.value)      
      
      this.rentalService.add(rentalModel).subscribe(
        response => {
          this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: "Formunuz eksik", life: 3000 });
    }

  }

}
