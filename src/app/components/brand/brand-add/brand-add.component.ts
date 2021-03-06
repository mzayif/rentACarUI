import { BrandService } from './../../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import {FormGroup,FormBuilder, FormControl, Validators} from "@angular/forms"
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-brand-add',
  templateUrl: './brand-add.component.html',
  styleUrls: ['./brand-add.component.css']
})
export class BrandAddComponent implements OnInit {

  brandAddForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private brandServie: BrandService, private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createBrandAddForm();
  }

  createBrandAddForm(){
     this.brandAddForm = this.formBuilder.group({
       name:["",Validators.required]
     })
  }

  add(){
    if (this.brandAddForm.valid) {
      let brandModel = Object.assign({}, this.brandAddForm.value)
      this.brandServie.add(brandModel).subscribe(
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
