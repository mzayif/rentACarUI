import { CarSegmentService } from './../../../services/car-segment.service';
import { Component, OnInit } from '@angular/core';
import { CarSegmentListModel } from 'src/app/models/carSegments/segmentListModel';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-car-segment',
  templateUrl: './car-segment.component.html',
  styleUrls: ['./car-segment.component.css']
})
export class CarSegmentComponent implements OnInit {

  dialog: boolean = false;
  newRecord: boolean = false;
  selectRecord: CarSegmentListModel = { id: 0, segmentName: "", carType: "" };
  segments: CarSegmentListModel[] = [];
  dataLoaded: boolean = false;

  constructor(private carSegmentService: CarSegmentService, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.carSegmentService.getAll().subscribe(response=>{
      this.dataLoaded = false;
      if (response.success) {
        this.segments = response.data.sort((a, b) => a.id > b.id ? 1 : -1);
      }
      
      this.dataLoaded = true;
    })
  }

  edit(segment: CarSegmentListModel) {
    this.selectRecord = { ...segment };
    this.dialog = true;
    this.newRecord = false;
  }

  hideDialog() {
    this.dialog = false;
    this.newRecord = false;
    this.selectRecord = { id: 0, segmentName: "", carType: "" };
  }

  openNew() {
    this.dialog = true;
    this.newRecord = true;
  }

  saveBrand() {
    if (this.selectRecord.segmentName?.trim()) {
      if (this.newRecord)
        this.add();
      else
        this.update();
    }
    this.selectRecord = { id: 0, segmentName: "", carType: "" };
  }

  update() {
    if (this.selectRecord.segmentName?.trim()) {

      console.log(this.selectRecord);
      this.carSegmentService.update({ id: this.selectRecord.id, segmentName: this.selectRecord.segmentName }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.dialog = false;
            this.selectRecord = { id: 0, segmentName: "", carType:"" };
            this.getAll();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  
  add() {
    if (this.selectRecord.segmentName?.trim()) {

      console.log(this.selectRecord);
      this.carSegmentService.add({ segmentName: this.selectRecord.segmentName }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.dialog = false;
            this.newRecord = false;            
            this.selectRecord = { id: 0, segmentName: "", carType: "" };
            this.getAll();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  delete(segment: CarSegmentListModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + segment.segmentName + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.carSegmentService.delete(segment.id).subscribe(
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
