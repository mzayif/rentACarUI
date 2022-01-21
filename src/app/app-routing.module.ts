import { RentalListComponent } from './components/rental/rental-list/rental-list.component';
import { RentalDetailComponent } from './components/rental/rental-detail/rental-detail.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { InvoiceAddComponent } from './components/invoice/invoice-add/invoice-add.component';
import { InvoiceDetailComponent } from './components/invoice/invoice-detail/invoice-detail.component';
import { InvoiceCreateModel } from './models/invoices/invoiceDetail';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { CorporateCustomerAddComponent } from './components/customer/corporate-customer-add/corporate-customer-add.component';
import { IndividualCustomerAddComponent } from './components/customer/individual-customer-add/individual-customer-add.component';
import { CreditCardListComponent } from './components/CreditCard/credit-card-list/credit-card-list.component';
import { CreditCardDetailComponent } from './components/CreditCard/credit-card-detail/credit-card-detail.component';
import { CreditCardAddComponent } from './components/CreditCard/credit-card-add/credit-card-add.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CityListModel } from './models/city/cityListModel';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CarDamageListComponent } from './components/carDamage/car-damage-list/car-damage-list.component';
import { CarDamageDetailComponent } from './components/carDamage/car-damage-detail/car-damage-detail.component';
import { CarDamageAddComponent } from './components/carDamage/car-damage-add/car-damage-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandDetailComponent } from './components/brand/brand-detail/brand-detail.component';
import { AdditionalServiceListComponent } from './components/additionalServices/additional-service-list/additional-service-list.component';
import { AdditionalServiceDetailComponent } from './components/additionalServices/additional-service-detail/additional-service-detail.component';
import { AdditionalServiceAddComponent } from './components/additionalServices/additional-service-add/additional-service-add.component';
import { CarSegmentAddComponent } from './components/carSegment/car-segment-add/car-segment-add.component';
import { CarSegmentComponent } from './components/carSegment/car-segment/car-segment.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorDetailComponent } from './components/color/color-detail/color-detail/color-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ColorComponent } from './components/color/color.component';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';

const routes: Routes = [
  { path: "car/damage/add", component: CarDamageAddComponent },
  { path: 'car/damage/:id', component: CarDamageDetailComponent},
  { path: "car/damages", component: CarDamageListComponent },
  { path: "car/rental/add/:id", component: RentalAddComponent },
  { path: 'car/rental/:id', component: RentalDetailComponent},
  { path: "car/rentals", component: RentalListComponent },
  { path: 'car/add', component: CarAddComponent },
  { path: 'car/:carId', component: CarDteailComponent },
  { path: "car", component: CarComponent },
  { path: 'brand/add', component: BrandAddComponent },
  { path: 'brand/:id', component: BrandDetailComponent },
  { path: "brands", component: BrandListComponent },
  { path: 'brand/add', component: BrandAddComponent },
  { path: 'brand/:id', component: BrandDetailComponent },
  { path: "brands", component: BrandListComponent },
  { path: 'city/add', component: CityAddComponent },
  { path: 'city/:id', component: CityDetailComponent },
  { path: "cities", component: CityListComponent},
  { path: "color/add", component: ColorAddComponent },
  { path: 'color/:id', component: ColorDetailComponent },
  { path: "colors", component: ColorComponent },
  { path: "car-segment/add", component: CarSegmentAddComponent },
  { path: 'car-segment/:id', component: ColorDetailComponent },
  { path: "car-segments", component: CarSegmentComponent },
  { path: "additional-service/add", component: AdditionalServiceAddComponent },
  { path: 'additional-service/:id', component: AdditionalServiceDetailComponent},
  { path: "additional-services", component: AdditionalServiceListComponent },
  { path: "invoice/add", component: InvoiceAddComponent },
  { path: 'invoice/:id', component: InvoiceDetailComponent},
  { path: "invoices", component: InvoiceListComponent },


  { path: "customer/credit-card/add", component: CreditCardAddComponent },
  { path: 'customer/credit-card/:id', component: CreditCardDetailComponent },
  { path: "customer/credit-cards", component: CreditCardListComponent },

  { path: "customer/add-individual", component: IndividualCustomerAddComponent },
  { path: "customer/add-corporate", component: CorporateCustomerAddComponent },
  // { path: 'customer/:id', component: CreditCardDetailComponent },
  { path: "customers", component: CustomerListComponent },

  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
