import { MessageService, ConfirmationService } from 'primeng/api';
import { CarViewModel } from './../../../models/cars/carViewModel';
import { CarSegmentListModel } from './../../../models/carSegments/segmentListModel';
import { CarSegmentService } from './../../../services/car-segment.service';
import { ColorService } from './../../../services/color.service';
import { BrandService } from './../../../services/brand.service';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../../services/car.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { DropdownModule } from 'primeng/dropdown';
import { BrandListModel } from 'src/app/models/brands/brandListModel';
import { ColorListModel } from 'src/app/models/colors/colorListModel';

@Component({
  selector: 'app-car-add',
  templateUrl: './car-add.component.html',
  styleUrls: ['./car-add.component.css']
})
export class CarAddComponent implements OnInit {

  carAddForm!: FormGroup;
  brands: BrandListModel[] = [];
  colors: ColorListModel[] = [];
  segments: CarSegmentListModel[] = [];

  selectedBrand: any;
  selectedColor: any;
  selectedSegment: any;
  selectedCar!: CarViewModel;
  @Input() carId: number = 0;
  @Output() changeCar = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private segmentService: CarSegmentService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getBrands();
    this.getColors();
    this.getSegments();

    if (this.carId > 0) {
      this.getCar();
    }
    this.createCarAddForm();
  }

  getBrands() {
    this.brandService.getAll().subscribe(response => {
      if (response.success)
        this.brands = response.data;
    })
  }

  getColors() {
    this.colorService.getAll().subscribe(response => {
      if (response.success)
        this.colors = response.data;
    })
  }

  getSegments() {
    this.segmentService.getAll().subscribe(response => {
      if (response.success)
      this.segments = response.data;
    })
  }

  getCar() {
    this.carService.getCarsById(this.carId).subscribe(
      response => {
        if (response.success) {
          this.selectedCar = response.data;
          this.carAddForm = this.formBuilder.group({
            'brandId': [this.selectedCar?.brandId, Validators.required],
            'colorId': [this.selectedCar?.colorId, Validators.required],
            'carSegmentTypeId': [this.selectedCar?.carSegmentTypeId, Validators.required],
            'carPlate': [this.selectedCar?.carPlate, Validators.required],
            'dailyPrice': [this.selectedCar?.dailyPrice, Validators.required],
            'modelYear': [this.selectedCar?.modelYear, Validators.required],
            'description': [this.selectedCar?.description, Validators.required],
            'kilometer': [this.selectedCar?.kilometer, Validators.required],
            'findexScore': [this.selectedCar?.findexScore, Validators.required],
            'minYear': [this.selectedCar?.minYear, Validators.required]
          })
        }
      },
      errorResponse => {
        this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
      }
    )
  }

  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      'brandId': [0, Validators.required],
      'colorId': [0, Validators.required],
      'carSegmentTypeId': [0, Validators.required],
      'carPlate': ["", Validators.required],
      'dailyPrice': ["", Validators.required],
      'modelYear': ["", Validators.required],
      'description':[ "", Validators.required],
      'kilometer': ["", Validators.required],
      'findexScore': ["", Validators.required],
      'minYear': ["", Validators.required]
    })
  }

  
  save() {
    if (this.carAddForm.valid) {
      if (this.carId==0)
        this.add();
      else
        this.update();
    }
  }

  update() {
    if (this.carAddForm.valid) {

      // console.log(this.selectedCar);
      let carModel = Object.assign({}, this.carAddForm.value)
      carModel.id = this.selectedCar.id;

      this.carService.update(carModel).subscribe(
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

    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value)      
      
      this.carService.add(carModel).subscribe(
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
