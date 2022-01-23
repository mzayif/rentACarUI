import { CityService } from './../../services/city.service';
import { CityListModel } from './../../models/city/cityListModel';
import { Component, OnInit } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {


  colors: CityListModel[] = [];
  dataLoaded: boolean = false;

  dialog: boolean = false;
  newRecord: boolean = false;
  submitted: boolean = false;
  selectRecord: CityListModel = { id: 0 };

  constructor(private cityService: CityService, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.cityService.getAll().subscribe(response=>{
      this.dataLoaded = false;
      if (response.success) {
        this.colors = response.data.sort((a, b) => a.id > b.id ? 1 : -1);
      }
      
      this.dataLoaded = true;
    })
  }

  edit(city: CityListModel) {
    this.selectRecord = { ...city };
    this.dialog = true;
    this.newRecord = false;
    this.submitted = false;
  }

  hideDialog() {
    this.dialog = false;
    this.newRecord = false;
    this.submitted = false;
    this.selectRecord = { id: 0, name: "" };
  }

  openNew() {
    this.dialog = true;
    this.newRecord = true;
  }

  save() {
    this.submitted = true;
    if (this.selectRecord.name?.trim()) {
      if (this.newRecord)
        this.add();
      else
        this.update();
    }
    this.selectRecord = { id: 0, name: "" };
  }

  update() {
    if (this.selectRecord.name?.trim()) {

      console.log(this.selectRecord);
      this.cityService.update({ id: this.selectRecord.id, name: this.selectRecord.name }).subscribe(
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
    if (this.selectRecord.name?.trim()) {

      console.log(this.selectRecord);
      this.cityService.add({ name: this.selectRecord.name }).subscribe(
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

  delete(city: CityListModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + city.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.cityService.delete(city.id).subscribe(
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
