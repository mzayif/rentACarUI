import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  items!: MenuItem[];

  activeItem!: MenuItem;
  constructor() { }

  ngOnInit(): void {
    this.items = [

      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        routerLink:"/home"
      },
      {
        label: 'Car',
        icon: 'pi pi-fw pi-wallet',
        items: [
          {
            label: 'New',
            // icon: 'pi pi-fw pi-play',
          routerLink:"/car/add"
          },
          {
            label: 'List',
            // icon: 'pi pi-fw pi-trash',
            routerLink:"/car"
          },
          {
            label: 'Maintenance',
            routerLink: "/car/maintenances"
            // icon:'pi pi-fw pi-plus',
            
          },
          {
            label: 'Damages',
            routerLink: "/car/damages",
          },
        ]
      },
      {
        label: 'Rental',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Rent New Car',
            // icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Payment rent',
            icon: 'pi pi-fw pi-align-right'
          },
          {
            label: 'Center',
            icon: 'pi pi-fw pi-align-center'
          },
          {
            label: 'Justify',
            icon: 'pi pi-fw pi-align-justify'
          },

        ]
      },
      {
        label: 'Customers',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New Individual Customers',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'New Corporate Customers',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Customer List',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Credit Card List',
            icon: 'pi pi-fw pi-user-plus',
          },
          {
            label: 'Invoices',
            icon: 'pi pi-fw pi-plus',
            items: [
              {
                label: 'New Invoice',
                routerLink: "/invoice/add",
                icon: 'pi pi-fw pi-bookmark'
              },
              {
                routerLink: "/invoices",
                label: 'Invoice List',
                icon: 'pi pi-fw pi-video'
              }
            ]
          },
          
        ]
      },
      {
        label: 'Tanımlar',
        // icon: 'pi pi-fw pi-calendar',
        items: [
          {
            routerLink: "/brands",
            label: 'Brands',
          },
          {
            label: 'Colors',
            routerLink: "/colors",
          },
          {
            label: 'Car Segments',
            routerLink: "/car-segments",
          }, 
          {
            label: 'Cities',
            routerLink: "/cities",
          },
          {
            label: 'Additional Services',
            routerLink: "/additional-services",
            //     icon: 'pi pi-fw pi-pencil',
            // items: [
            //   {
            //     label: 'new',
            //     routerLink:"/additional-service/add",
            //     // icon: 'pi pi-fw pi-calendar-plus'
            //   },
            //   {
            //     label: 'list',
            //     routerLink:"/additional-services",
            //     // icon: 'pi pi-fw pi-calendar-minus'
            //   },

            // ]
          },
        ]
      },
      {
        label: 'Quit',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }

}
