import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from "ngx-toastr";

import { CarouselModule } from 'primeng/carousel';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';


import { BrandService } from './services/brand.service';
import { CarService } from './services/car.service';
import { ColorService } from './services/color.service';

import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { ColorDetailComponent } from './components/color/color-detail/color-detail/color-detail.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarSegmentComponent } from './components/carSegment/car-segment/car-segment.component';
import { CarSegmentAddComponent } from './components/carSegment/car-segment-add/car-segment-add.component';
import { AdditionalServiceAddComponent } from './components/additionalServices/additional-service-add/additional-service-add.component';
import { AdditionalServiceDetailComponent } from './components/additionalServices/additional-service-detail/additional-service-detail.component';
import { AdditionalServiceListComponent } from './components/additionalServices/additional-service-list/additional-service-list.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { CarDamageAddComponent } from './components/carDamage/car-damage-add/car-damage-add.component';
import { CarDamageDetailComponent } from './components/carDamage/car-damage-detail/car-damage-detail.component';
import { CarDamageListComponent } from './components/carDamage/car-damage-list/car-damage-list.component';
import { BrandDetailComponent } from './components/brand/brand-detail/brand-detail.component';
import { CityAddComponent } from './components/city/city-add/city-add.component';
import { CityDetailComponent } from './components/city/city-detail/city-detail.component';
import { CityListComponent } from './components/city/city-list/city-list.component';
import { CreditCardAddComponent } from './components/CreditCard/credit-card-add/credit-card-add.component';
import { CreditCardDetailComponent } from './components/CreditCard/credit-card-detail/credit-card-detail.component';
import { CreditCardListComponent } from './components/CreditCard/credit-card-list/credit-card-list.component';
import { IndividualCustomerAddComponent } from './components/customer/individual-customer-add/individual-customer-add.component';
import { CorporateCustomerAddComponent } from './components/customer/corporate-customer-add/corporate-customer-add.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { InvoiceAddComponent } from './components/invoice/invoice-add/invoice-add.component';
import { InvoiceDetailComponent } from './components/invoice/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { RentalDetailComponent } from './components/rental/rental-detail/rental-detail.component';
import { RentalListComponent } from './components/rental/rental-list/rental-list.component';



@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CarComponent,
    NaviComponent,
    HomeComponent,
    CarDteailComponent,
    ColorDetailComponent,
    BrandAddComponent,
    BrandDetailComponent,
    ColorAddComponent,
    CarAddComponent,
    CarSegmentComponent,
    CarSegmentAddComponent,
    AdditionalServiceAddComponent,
    AdditionalServiceDetailComponent,
    AdditionalServiceListComponent,
    BrandListComponent,
    CarDamageAddComponent,
    CarDamageDetailComponent,
    CarDamageListComponent,
    CityAddComponent,
    CityDetailComponent,
    CityListComponent,
    CreditCardAddComponent,
    CreditCardDetailComponent,
    CreditCardListComponent,
    IndividualCustomerAddComponent,
    CorporateCustomerAddComponent,
    CustomerListComponent,
    InvoiceAddComponent,
    InvoiceDetailComponent,
    InvoiceListComponent,
    RentalAddComponent,
    RentalDetailComponent,
    RentalListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    PasswordModule,
    CardModule,
    DataViewModule,
    PanelModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    TabViewModule,
    TabMenuModule,
    DropdownModule,
    DialogModule,
    RippleModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [ColorService, CarService, BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
