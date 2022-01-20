import { Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ColorService } from './../../../services/color.service';
import { FormBuilder } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-add',
  templateUrl: './color-add.component.html',
  styleUrls: ['./color-add.component.css']
})
export class ColorAddComponent implements OnInit {

  colorAddForm!: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private colorService: ColorService,
    private toastrService: ToastrService) { }

  ngOnInit(): void {
    this.createColorAddForm();
  }

  createColorAddForm() {
    this.colorAddForm = this.formBuilder.group({
      name: ["", Validators.required]
    })
  }

  add() {
    if (this.colorAddForm.valid) {
      let colorModel = Object.assign({}, this.colorAddForm.value)
      this.colorService.add(colorModel).subscribe(
        success => {
          this.toastrService.success(success.message)
        },
        responseError => {
          if (responseError.error.Errors.length > 0) {
            for (let i = 0; i < responseError.error.Errors.length; i++) {
              this.toastrService.error(responseError.error.Errors[i].ErrorMessage
                , "Doğrulama hatası")
            }
          }
        }
      )
    } else {
      this.toastrService.error("Formunuz eksik", "Dikkat")
    }
  }
}
