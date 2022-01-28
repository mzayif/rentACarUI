import { ConfirmationService, MessageService } from 'primeng/api';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDamageListModel } from 'src/app/models/carDamages/carDamageListModel';
import { CarDamageService } from 'src/app/services/car-damage.service';

@Component({
  selector: 'app-car-damages',
  templateUrl: './car-damages.component.html',
  styleUrls: ['./car-damages.component.css']
})
export class CarDamagesComponent implements OnInit {

  damages!: CarDamageListModel[];
  selectCarId: number = 0;

  newRecord: boolean = false;
  dialog: boolean = false;
  selectRecord: CarDamageListModel = { id: 0 };

  constructor(private damageService: CarDamageService, 
    private route: ActivatedRoute, private messageService: MessageService, 
    private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    debugger;
    this.route.params.subscribe(params => {
      this.selectCarId = params["id"] ??= 0;
    })
    this.getAll();
  }

  getAll(){
   // debugger;
    if (this.selectCarId == 0) {
      this.damageService.getAll().subscribe(response => {
        if (response.success) {
          this.damages = response.data?.sort((a, b) => a.id > b.id ? 1 : -1);
        }
      })
    }
    else
    {
      this.damageService.getAllByCarId(this.selectCarId).subscribe(response => {
        if (response.success) {
          this.damages = response.data?.sort((a, b) => a.id > b.id ? 1 : -1);
        }
      })
    }

    console.log( this.damages );
  }

  edit(damage: CarDamageListModel) {
    this.selectRecord = { ...damage };
    this.dialog = true;
    this.newRecord = false;
  }

  hideDialog() {
    this.dialog = false;
    this.selectRecord = { id: 0 };
    this.getAll();
  }
  
  openNew() {
    this.dialog = true;
    this.newRecord = true;
  }

  save() {
    if (this.selectRecord.description != null) {
      if (this.newRecord)
        this.add();
      else
        this.update();
    }
    this.selectRecord = { id: 0 };
  }

  update() {
    if (this.selectRecord.description != null) {

      this.damageService.update({
        id: this.selectRecord.id,
        carId: this.selectRecord.carId,
        description: this.selectRecord.description
      }).subscribe(
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
    if (this.selectRecord.description != null) {

      this.damageService.add({ carId: this.selectCarId, description: this.selectRecord.description}).subscribe(
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


  delete(damage: CarDamageListModel) {
    this.confirmationService.confirm({
      message: 'İlgili araç hasar kaydını silmek istiyor musunuz?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.damageService.delete(damage.id).subscribe(
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
