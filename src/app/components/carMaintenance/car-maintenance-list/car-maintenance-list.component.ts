import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { CarMaintenanceListModel } from 'src/app/models/carMaintenances/carMaintenanceListModel';
import { CarMaintenanceService } from 'src/app/services/car-maintenance.service';

@Component({
  selector: 'app-car-maintenance-list',
  templateUrl: './car-maintenance-list.component.html',
  styleUrls: ['./car-maintenance-list.component.css']
})
export class CarMaintenanceListComponent implements OnInit {

  maintenances!: CarMaintenanceListModel[];
  selectCarId: number = 0;

  newRecord: boolean = false;
  dialog: boolean = false;
  selectRecord: CarMaintenanceListModel = { id: 0 };

  constructor(private maintenanceService: CarMaintenanceService, 
    private route: ActivatedRoute, private messageService: MessageService, 
    private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectCarId = params["id"] ??= 0;
    })
    this.getAll();
  }

  getAll(){
   // debugger;
    if (this.selectCarId == 0) {
      this.maintenanceService.getAll().subscribe(response => {
        if (response.success) {
          this.maintenances = response.data?.sort((a, b) => a.id > b.id ? 1 : -1);
        }
      })
    }
    else
    {
      this.maintenanceService.getAllByCarId(this.selectCarId).subscribe(response => {
        if (response.success) {
          this.maintenances = response.data?.sort((a, b) => a.id > b.id ? 1 : -1);
        }
      })
    }

    console.log( this.maintenances );
  }

  edit(maintenance: CarMaintenanceListModel) {
    this.selectRecord = { ...maintenance };
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
    if (this.selectRecord.sendMaintenanceDate != null) {
      if (this.newRecord)
        this.add();
      else
        this.update();
    }
    this.selectRecord = { id: 0 };
  }

  update() {
    if (this.selectRecord.sendMaintenanceDate != null && this.selectRecord.returnMaintenanceDate != null) {

      this.maintenanceService.update({  
        id: this.selectRecord.id,
        carId: this.selectRecord.carId,
        sendMaintenanceDate: this.selectRecord.sendMaintenanceDate,
        returnMaintenanceDate: this.selectRecord.returnMaintenanceDate
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
    if (this.selectRecord.sendMaintenanceDate != null) {

      this.maintenanceService.add({ carId: this.selectCarId, 
        sendMaintenanceDate: this.selectRecord.sendMaintenanceDate.getFullYear() + "-" + 
                            ((this.selectRecord.sendMaintenanceDate.getMonth() + 1) < 10 ? "0" + (this.selectRecord.sendMaintenanceDate.getMonth() + 1) : (this.selectRecord.sendMaintenanceDate.getMonth() + 1)) + "-" + 
                            this.selectRecord.sendMaintenanceDate.getDate() }).subscribe(
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


  delete(maintenance: CarMaintenanceListModel) {
    this.confirmationService.confirm({
      message:  maintenance.carPlate+ ' plakalı araç için ' + maintenance.sendMaintenanceDate + ' tarihli bakım kaydını silmek istiyor musunuz?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.maintenanceService.delete(maintenance.id).subscribe(
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
