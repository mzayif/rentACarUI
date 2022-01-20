import { CarSegmentListModel } from './../../../models/carSegments/segmentListModel';
import { CarSegmentService } from './../../../services/car-segment.service';
import { ColorService } from './../../../services/color.service';
import { BrandService } from './../../../services/brand.service';
import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CarService } from './../../../services/car.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
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


  constructor(private formBuilder: FormBuilder,
    private carService: CarService,
    private brandService: BrandService,
    private colorService: ColorService,
    private segmentService: CarSegmentService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createCarAddForm();
    this.getBrands();
    this.getColors();
    this.getSegments();
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


  createCarAddForm() {
    this.carAddForm = this.formBuilder.group({
      'dailyPrice': ["", Validators.required],
      'modelYear': ["", Validators.required],
      'description': ["", Validators.required],
      'kilometer': ["", Validators.required],
      'findexScore': ["", Validators.required],
      'minYear': ["", Validators.required]
    })
  }

  add() {
    console.log(this.selectedBrand);
    console.log(this.selectedColor);
    console.log(this.selectedSegment);

    if (this.carAddForm.valid) {
      let carModel = Object.assign({}, this.carAddForm.value)
      carModel.carSegmentTypeId= this.selectedSegment.id;
      carModel.brandId= this.selectedBrand.id;
      carModel.colorId= this.selectedColor.id;
      
      this.carService.add(carModel).subscribe(
        response => {
          this.toastrService.success(response.message, "Başarılı")
        },
        responseError => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage
                , "Doğrulama hatası")
            }
          }
        })
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }

  }
}
