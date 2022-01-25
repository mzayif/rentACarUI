import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CarMaintenanceListModel } from 'src/app/models/carMaintenances/carMaintenanceListModel';
import { CarMaintenanceService } from 'src/app/services/car-maintenance.service';

@Component({
  selector: 'app-car-maintenance-detail',
  templateUrl: './car-maintenance-detail.component.html',
  styleUrls: ['./car-maintenance-detail.component.css']
})
export class CarMaintenanceDetailComponent implements OnInit {

  maintenanceForm!: FormGroup;
  maintenances: CarMaintenanceListModel[] = [];
  dataLoaded: boolean = false;

  dialog: boolean = false;
  submitted: boolean = false;
  selectRecord: CarMaintenanceListModel = { id: 0 };

  @Input() carId: number = 0;
  @Input() selectMaintenance: CarMaintenanceListModel = { id: 0 };
  @Output() changeChilde = new EventEmitter();

  constructor(private formBuilder: FormBuilder,
    private maintenanceService: CarMaintenanceService,
    private messageService: MessageService, 
    private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    debugger;
    this.maintenanceForm = this.formBuilder.group({
      'sendMaintenanceDate': [this.selectRecord.sendMaintenanceDate, Validators.required],
      'returnMaintenanceDate': [this.selectRecord.returnMaintenanceDate]
    })
  }
 
  save() {
    if (this.maintenanceForm.valid) {
      if (this.selectMaintenance.id == 0)
        this.add();
      else
        this.update();
    }
  }

  update() {
    if (this.maintenanceForm.valid) {

      // console.log(this.selectedCar);
      let updateMaintenanceModel = Object.assign({}, this.maintenanceForm.value)
      updateMaintenanceModel.id = this.selectRecord.id;

      this.maintenanceService.update(updateMaintenanceModel).subscribe(
        response => {
          if (response.success) {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.changeChilde.emit();
          }
          else
            this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: response.message, life: 3000 });
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  add() {

    if (this.maintenanceForm.valid) {
      let updateMaintenanceModel = Object.assign({}, this.maintenanceForm.value)      
      updateMaintenanceModel.carId = this.carId;

      this.maintenanceService.add(updateMaintenanceModel).subscribe(
        response => {
          if (response.success) {
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.changeChilde.emit();
          }
          else
            this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: response.message, life: 3000 });
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: "Formunuz eksik", life: 3000 });
    }

  }

}
