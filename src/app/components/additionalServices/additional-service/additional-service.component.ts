import { AdditionalService } from './../../../services/additional.service';
import { Component, OnInit } from '@angular/core';
import { AdditionalListModel } from 'src/app/models/additionals/additionalListModel';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-additional-service',
  templateUrl: './additional-service.component.html',
  styleUrls: ['./additional-service.component.css']
})
export class AdditionalServiceComponent implements OnInit {


  additionalServices: AdditionalListModel[] = [];
  dataLoaded: boolean = false;

  dialog: boolean = false;
  newRecord: boolean = false;
  submitted: boolean = false;
  selectRecord: AdditionalListModel = { id: 0};

  constructor(private additionalService: AdditionalService, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.additionalService.getAll().subscribe(response=>{
      this.dataLoaded = false;
      if (response.success) {
        this.additionalServices = response.data.sort((a, b) => a.id > b.id ? 1 : -1);
     
        // console.warn(response.data);
      }
      
      this.dataLoaded = true;
    })
  }

  edit(additional: AdditionalListModel) {
    this.selectRecord = { ...additional };
    this.dialog = true;
    this.newRecord = false;
  }

  hideDialog() {
    this.dialog = false;
    this.newRecord = false;
    this.submitted = false;
    this.selectRecord = { id: 0};
  }

  openNew() {
    this.dialog = true;
    this.newRecord = true;
  }

  save() {
    this.submitted = true;
    if (this.selectRecord.serviceName?.trim()) {
      if (this.newRecord)
        this.add();
      else
        this.update();
    }
    this.selectRecord = { id: 0};
  }

  update() {
    if (this.selectRecord.serviceName?.trim()) {

      console.log(this.selectRecord);
      this.additionalService.update({ id: this.selectRecord.id, serviceName: this.selectRecord.serviceName, servicePrice: this.selectRecord.servicePrice ?? 0 }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.hideDialog();
            this.getAll();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  
  add() {
    if (this.selectRecord.serviceName?.trim()) {

      console.log(this.selectRecord);
      this.additionalService.add({ serviceName: this.selectRecord.serviceName, servicePrice: this.selectRecord.servicePrice }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.hideDialog();
            this.getAll();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  delete(additional: AdditionalListModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + additional.serviceName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.additionalService.delete(additional.id).subscribe(
          response => {
            if (response.success) {
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 5000 });
              this.getAll();
            }
          },
          errorResponse => {
            this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 5000 });
          }
        )
      }
    });
  }

}
