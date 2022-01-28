import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, MessageService } from 'primeng/api';

@Component({
  selector: 'app-rental-steps',
  templateUrl: './rental-steps.component.html',
  providers: [MessageService],
    styles: [`
        .ui-steps .ui-steps-item {
            width: 25%;
        }
        
        .ui-steps.steps-custom {
            margin-bottom: 30px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-menuitem-link {
            padding: 0 1em;
            overflow: visible;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-number {
            background-color: #0081c2;
            color: #FFFFFF;
            display: inline-block;
            width: 36px;
            border-radius: 50%;
            margin-top: -14px;
            margin-bottom: 10px;
        }
        
        .ui-steps.steps-custom .ui-steps-item .ui-steps-title {
            color: #555555;
        }
    `],
    encapsulation: ViewEncapsulation.None
})

export class RentalStepsComponent implements OnInit {
  items: MenuItem[] = [];

  carId: number = 0;
  activeIndex: number = 1;

  constructor(private messageService: MessageService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.carId = params["id"];
    })

    this.items = [{
      label: 'Kiralama',
      routerLink: 'car/rental/add/'+this.carId
    },
    {
      label: 'Ek Hizmetler',
      routerLink: 'seat'
    },
    {
      label: 'Ödeme Bilgileri',
      routerLink: 'payment'
    },
    {
      label: 'Onaylama',
      routerLink: 'confirmation'
    }
    ];
  }

}
