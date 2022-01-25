import { CarService } from './../../../services/car.service';
import { CarViewModel } from '../../../models/cars/carViewModel';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router'
import { ConfirmationService, MessageService } from 'primeng/api';
@Component({
  selector: 'app-car-dteail',
  templateUrl: './car-dteail.component.html',
  styleUrls: ['./car-dteail.component.css']
})
export class CarDteailComponent implements OnInit {

  car!: CarViewModel;
  carId: any

  dialog: boolean = false;
  dataLoaded: boolean = false;

  constructor(private carService: CarService,
    private route: ActivatedRoute,
    private router: Router,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }



  ngOnInit(): void {
    console.log(this.route.params);
    this.route.params.subscribe(params => {
      this.carId = params["carId"];
    })
    this.getCarsById();
  }

  getCarsById() {
    this.carService.getCarsById(this.carId).subscribe(response => {
      this.dataLoaded = false
      this.car = response.data;
      this.dataLoaded = true;
    })
  }

  
  edit() {
    // this.selectRecord = { ...city };
    this.dialog = true;
    // this.newRecord = false;
    // this.submitted = false;
  }

  hideDialog(){
    this.dialog = false;
    this.getCarsById();
  }

  delete(){
    debugger;
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + this.car.description + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.carService.delete(this.car.id).subscribe(
          response => {
            if (response.success) {
              this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 5000 });
              this.router.navigate(['/car']);
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
