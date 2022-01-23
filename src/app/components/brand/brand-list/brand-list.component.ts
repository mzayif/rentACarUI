import { ConfirmationService, MessageService } from 'primeng/api';
import { BrandService } from './../../../services/brand.service';
import { BrandListModel } from 'src/app/models/brands/brandListModel';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand-list',
  templateUrl: './brand-list.component.html',
  styleUrls: ['./brand-list.component.scss'],
  styles: [`
  :host ::ng-deep .p-dialog .product-image {
      width: 150px;
      margin: 0 auto 2rem auto;
      display: block;
  }
`],
})
export class BrandListComponent implements OnInit {

  dialog: boolean = false;
  newBrand: boolean = false;

  brands: BrandListModel[] = [];
  dataLoaded: boolean = false;
  selectBrand: BrandListModel = { id: 0, name: "" };

  constructor(private brandService: BrandService, private messageService: MessageService, private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.brandService.getAll().subscribe(response => {
      this.dataLoaded = false;
      if (response.success) {
        this.brands = response.data.sort((a, b) => a.id > b.id ? 1 : -1);
        // console.warn(response.data);
      }

      this.dataLoaded = true;
    })
  }


  editProduct(brand: BrandListModel) {
    this.selectBrand = { ...brand };
    this.dialog = true;
    this.newBrand = false;
  }

  hideDialog() {
    this.dialog = false;
    this.newBrand = false;
    this.selectBrand = { id: 0, name: "" };
  }

  openNew() {
    this.dialog = true;
    this.newBrand = true;
  }

  saveBrand() {
    if (this.selectBrand.name?.trim()) {
      if (this.newBrand)
        this.addBrand();
      else
        this.updateBrand();
    }
    this.selectBrand = { id: 0, name: "" };
  }

  updateBrand() {
    if (this.selectBrand.name?.trim()) {

      console.log(this.selectBrand);
      this.brandService.update({ id: this.selectBrand.id, name: this.selectBrand.name }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.dialog = false;
            this.selectBrand = { id: 0, name: "" };
            this.getAll();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  
  addBrand() {
    if (this.selectBrand.name?.trim()) {

      console.log(this.selectBrand);
      this.brandService.add({ name: this.selectBrand.name }).subscribe(
        response => {
          if (response.success) {
            //   console.warn(response.message);
            this.messageService.add({ severity: 'success', summary: 'Successful', detail: response.message, life: 3000 });
            this.dialog = false;
            this.newBrand = false;            
            this.selectBrand = { id: 0, name: "" };
            this.getAll();
          }
        },
        errorResponse => {
          this.messageService.add({ severity: 'warn', summary: 'Service Message', detail: errorResponse.error.message, life: 3000 });
        })
    }
  }

  deleteProduct(brand: BrandListModel) {
    this.confirmationService.confirm({
      message: 'Are you sure you want to delete ' + brand.name + '?',
      header: 'Confirm',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.brandService.delete(brand.id).subscribe(
          response => {
            if (response.success) {
              //   console.warn(response.message);
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
