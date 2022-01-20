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
          }
        ]
      },
      {
        label: 'Rental',
        icon: 'pi pi-fw pi-pencil',
        items: [
          {
            label: 'Left',
            icon: 'pi pi-fw pi-align-left'
          },
          {
            label: 'Right',
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
        label: 'Users',
        icon: 'pi pi-fw pi-user',
        items: [
          {
            label: 'New',
            icon: 'pi pi-fw pi-user-plus',

          },
          {
            label: 'Delete',
            icon: 'pi pi-fw pi-user-minus',

          },
          {
            label: 'Search',
            icon: 'pi pi-fw pi-users',
            items: [
              {
                label: 'Filter',
                icon: 'pi pi-fw pi-filter',
                items: [
                  {
                    label: 'Print',
                    icon: 'pi pi-fw pi-print'
                  }
                ]
              },
              {
                icon: 'pi pi-fw pi-bars',
                label: 'List'
              }
            ]
          }
        ]
      },
      {
        label: 'Settings',
        // icon: 'pi pi-fw pi-calendar',
        items: [
          {
            label: 'Brands',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'new',
                routerLink:"/brand/add",
                // icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'list',
                routerLink:"/brands",
                // icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
          },
          {
            label: 'Colors',
            icon: 'pi pi-fw pi-pencil',
            items: [
              {
                label: 'new',
                routerLink:"/color/add",
                // icon: 'pi pi-fw pi-calendar-plus'
              },
              {
                label: 'list',
                routerLink:"/colors",
                // icon: 'pi pi-fw pi-calendar-minus'
              },

            ]
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
