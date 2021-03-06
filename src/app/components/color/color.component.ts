import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { ColorListModel } from 'src/app/models/colors/colorListModel';
import { MessageService, ConfirmationService } from 'primeng/api';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {


  colors: ColorListModel[] = [];
  dataLoaded: boolean = false;

  dialog: boolean = false;
  newRecord: boolean = false;
  selectRecord: ColorListModel = { id: 0, name: "" };

  constructor(private coloService: ColorService, private messageService: MessageService, private confirmationService: ConfirmationService) { }


  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.coloService.getAll().subscribe(response=>{
      this.dataLoaded = false;
      if (response.success) {
        this.colors = response.data.sort((a, b) => a.id > b.id ? 1 : -1);
     
        // console.warn(response.data);
      }
      
      this.dataLoaded = true;
    })
  }

  edit(color: ColorListModel) {
    this.selectRecord = { ...color };
    this.dialog = true;
    this.newRecord = false;
  }

  hideDialog() {
    this.dialog = false;
    this.newRecord = false;
    this.selectRecord = { id: 0, name: "" };
  }

  openNew() {
    this.dialog = true;
    this.newRecord = true;
  }

  save() {
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
      this.coloService.update({ id: this.selectRecord.id, name: this.selectRecord.name }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.dialog = false;
            this.selectRecord = { id: 0, name: "" };
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
      this.coloService.add({ name: this.selectRecord.name }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.dialog = false;
            this.newRecord = false;            
            this.selectRecord = { id: 0, name: "" };
            this.getAll();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  delete(color: ColorListModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + color.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.coloService.delete(color.id).subscribe(
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
